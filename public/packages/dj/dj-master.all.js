/**
* DJ Framework
* 
* @class DJ
* @singleton
*/
var DJ = DJ || {};
DJ._startTime = new Date().getTime();
(function() {
    var global = this,
        objectPrototype = Object.prototype,
        toString = objectPrototype.toString,
        enumerables = true,
        enumerablesTest = {toString: 1},
        emptyFn = function () {},
        // This is the "$previous" method of a hook function on an instance. When called, it
        // calls through the class prototype by the name of the called method.
        callOverrideParent = function () {
            var method = callOverrideParent.caller.caller; // skip callParent (our caller)
            return method.$owner.prototype[method.$name].apply(this, arguments);
        },
        i,
        nonWhitespaceRe = /\S/,
        ExtApp,
        iterableRe = /\[object\s*(?:Array|Arguments|\w*Collection|\w*List|HTML\s+document\.all\s+class)\]/;

    Function.prototype.$extIsFunction = true;

    DJ.global = global;

    for (i in enumerablesTest) {
        enumerables = null;
    }

    if (enumerables) {
        enumerables = ['hasOwnProperty', 'valueOf', 'isPrototypeOf', 'propertyIsEnumerable',
                       'toLocaleString', 'toString', 'constructor'];
    }

    /**
     * An array containing extra enumerables for old browsers
     * @property {String[]}
     */
    DJ.enumerables = enumerables;

    /**
     * Копирует все свойства конфигурации в указанный объект.
     * При рекурсивном слиянии и клонировании без ссылки на оригинальный объект или массив, лучше использовать `DJ.Object#merge`.
     * 
     * @param {Object} object The receiver of the properties
     * @param {Object} config The source of the properties
     * @param {Object} [defaults] A different object that will also be applied for default values
     * @return {Object} returns obj
     */
    DJ.apply = function(object, config, defaults) {
        if (defaults) {
            DJ.apply(object, defaults);
        }

        if (object && config && typeof config === 'object') {
            var i, j, k;

            for (i in config) {
                object[i] = config[i];
            }

            if (enumerables) {
                for (j = enumerables.length; j--;) {
                    k = enumerables[j];
                    if (config.hasOwnProperty(k)) {
                        object[k] = config[k];
                    }
                }
            }
        }

        return object;
    };
    
    
    DJ.set = function(name, value) {
        var me = this,
            maps = me.maps,
            nameToAlternates = maps.nameToAlternates,
            targetName = me.getName(value),
            alternates;

        me.classes[name] = me.setNamespace(name, value);

        if (targetName && targetName !== name) {
            maps.alternateToName[name] = targetName;
            alternates = nameToAlternates[targetName] || (nameToAlternates[targetName] = []);
            alternates.push(name);
        }

        return this;
    }

    
    DJ.get = function(name) {
        var classes = this.classes,
            root,
            parts,
            part, i, ln;

        if (classes[name]) {
            return classes[name];
        }

        root = global;
        parts = this.parseNamespace(name);

        for (i = 0, ln = parts.length; i < ln; i++) {
            part = parts[i];

            if (typeof part != 'string') {
                root = part;
            } else {
                if (!root || !root[part]) {
                    return null;
                }

                root = root[part];
            }
        }

        return root;
    }
    
    
    /**
    * Инстанцирует экземпляр
    * @private
    */
    DJ.create = function(name, args) {
        var nameType = typeof name,
            alias = name,
            possibleName, cls;

        if (nameType != 'function') {
            if (nameType != 'string' && args.length === 0) {
                args = [name];
                name = name.xclass;
            }

            //<debug error>
            if (typeof name != 'string' || name.length < 1) {
                throw new Error("[Ext.create] Invalid class name or alias '" + name + "' specified, must be a non-empty string");
            }
            //</debug>

            cls = this.get(name);
        }
        else {
            cls = name;
        }

        // No record of this class name, it's possibly an alias, so look it up
        if (!cls) {
            possibleName = this.getNameByAlias(name);

            if (possibleName) {
                name = possibleName;

                cls = this.get(name);
            }
        }

        // Still no record of this class name, it's possibly an alternate name, so look it up
        if (!cls) {
            possibleName = this.getNameByAlternate(name);

            if (possibleName) {
                name = possibleName;

                cls = this.get(name);
            }
        }

        // Still not existing at this point, try to load it via synchronous mode as the last resort
        if (!cls) {
            //<debug warn>
            if (global.console) {
                global.console.warn("[Ext.Loader] Synchronously loading '" + name + "'; consider adding " +
                     "Ext.require('" + ((possibleName) ? alias : name) + "') above Ext.onReady");
            }
            //</debug>

            Ext.syncRequire(name);

            cls = this.get(name);
        }

        //<debug error>
        if (!cls) {
            throw new Error("[Ext.create] Cannot create an instance of unrecognized class name / alias: " + alias);
        }

        if (typeof cls != 'function') {
            throw new Error("[Ext.create] '" + name + "' is a singleton and cannot be instantiated");
        }
        //</debug>

        return this.getInstantiator(args.length)(cls, args);
    }
    
}());
