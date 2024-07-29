import {
  global_styles_default
} from "/build/_shared/chunk-5SKTI2PH.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-SYL4ZOYI.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self2) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self2 && ReactCurrentOwner.current.stateNode !== self2) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV2(type, config, maybeKey, source, self2) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self2);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self2) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV2(type, props, key, source, self2);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, "key")) {
                var componentName = getComponentNameFromType(type);
                var keys = Object.keys(props).filter(function(k) {
                  return k !== "key";
                });
                var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                  error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/react-animated-cursor/dist/index.umd.js
var require_index_umd = __commonJS({
  "node_modules/react-animated-cursor/dist/index.umd.js"(exports, module) {
    "use client";
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_jsx_runtime(), require_react()) : typeof define === "function" && define.amd ? define(["react/jsx-runtime", "react"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.AnimatedCursor = factory(global.jsxRuntime, global.React));
    })(exports, function(jsxRuntime, react) {
      "use strict";
      var __assign = function() {
        __assign = Object.assign || function __assign2(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      function useEventListener(type, listener, element) {
        var listenerRef = react.useRef(listener);
        react.useEffect(function() {
          listenerRef.current = listener;
        });
        react.useEffect(function() {
          var el = element === void 0 ? window : element;
          var internalListener = function(ev) {
            return listenerRef.current(ev);
          };
          el === null || el === void 0 ? void 0 : el.addEventListener(type, internalListener);
          return function() {
            el === null || el === void 0 ? void 0 : el.removeEventListener(type, internalListener);
          };
        }, [type, element]);
      }
      var useDeviceInfo = function() {
        var _a = react.useState({
          info: "",
          Android: function() {
            return null;
          },
          BlackBerry: function() {
            return null;
          },
          IEMobile: function() {
            return null;
          },
          iOS: function() {
            return null;
          },
          iPad: function() {
            return null;
          },
          OperaMini: function() {
            return null;
          },
          any: function() {
            return false;
          }
        }), deviceInfo = _a[0], setDeviceInfo = _a[1];
        react.useEffect(function() {
          if (typeof navigator !== "undefined") {
            var ua_1 = navigator.userAgent;
            setDeviceInfo(function(prevDeviceInfo) {
              return __assign(__assign({}, prevDeviceInfo), { info: ua_1, Android: function() {
                return ua_1.match(/Android/i);
              }, BlackBerry: function() {
                return ua_1.match(/BlackBerry/i);
              }, IEMobile: function() {
                return ua_1.match(/IEMobile/i);
              }, iOS: function() {
                return ua_1.match(/iPhone|iPad|iPod/i);
              }, iPad: function() {
                return !!(ua_1.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
              }, OperaMini: function() {
                return ua_1.match(/Opera Mini/i);
              }, any: function() {
                var _a2, _b, _c, _d, _e;
                return !!(((_a2 = prevDeviceInfo.Android()) === null || _a2 === void 0 ? void 0 : _a2.length) || ((_b = prevDeviceInfo.BlackBerry()) === null || _b === void 0 ? void 0 : _b.length) || ((_c = prevDeviceInfo.iOS()) === null || _c === void 0 ? void 0 : _c.length) || prevDeviceInfo.iPad() || ((_d = prevDeviceInfo.OperaMini()) === null || _d === void 0 ? void 0 : _d.length) || ((_e = prevDeviceInfo.IEMobile()) === null || _e === void 0 ? void 0 : _e.length));
              } });
            });
          }
        }, []);
        return deviceInfo;
      };
      function findInArray(arr, callback) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }
        if (typeof callback !== "function") {
          throw new TypeError("callback must be a function");
        }
        var list = Object(arr);
        var length = list.length >>> 0;
        var thisArg = args[2];
        for (var i = 0; i < length; i++) {
          var element = list[i];
          if (callback.call(thisArg, element, i, list)) {
            return element;
          }
        }
        return void 0;
      }
      function CursorCore(_a) {
        var _b = _a.clickables, clickables = _b === void 0 ? [
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link"
        ] : _b, children = _a.children, _c = _a.color, color = _c === void 0 ? "220, 90, 90" : _c, _d = _a.innerScale, innerScale = _d === void 0 ? 0.6 : _d, _e = _a.innerSize, innerSize = _e === void 0 ? 8 : _e, innerStyle = _a.innerStyle, _f = _a.outerAlpha, outerAlpha = _f === void 0 ? 0.4 : _f, _g = _a.outerScale, outerScale = _g === void 0 ? 6 : _g, _h = _a.outerSize, outerSize = _h === void 0 ? 8 : _h, outerStyle = _a.outerStyle, _j = _a.showSystemCursor, showSystemCursor = _j === void 0 ? false : _j, _k = _a.trailingSpeed, trailingSpeed = _k === void 0 ? 8 : _k;
        var defaultOptions = react.useMemo(function() {
          return {
            children,
            color,
            innerScale,
            innerSize,
            innerStyle,
            outerAlpha,
            outerScale,
            outerSize,
            outerStyle
          };
        }, [
          children,
          color,
          innerScale,
          innerSize,
          innerStyle,
          outerAlpha,
          outerScale,
          outerSize,
          outerStyle
        ]);
        var cursorOuterRef = react.useRef(null);
        var cursorInnerRef = react.useRef(null);
        var requestRef = react.useRef(null);
        var previousTimeRef = react.useRef(null);
        var _l = react.useState({
          x: 0,
          y: 0
        }), coords = _l[0], setCoords = _l[1];
        var _m = react.useState(false), isVisible = _m[0], setIsVisible = _m[1];
        var _o = react.useState(defaultOptions), options = _o[0], setOptions = _o[1];
        var _p = react.useState(false), isActive = _p[0], setIsActive = _p[1];
        var _q = react.useState(false), isActiveClickable = _q[0], setIsActiveClickable = _q[1];
        var endX = react.useRef(0);
        var endY = react.useRef(0);
        var onMouseMove = react.useCallback(function(event) {
          var clientX = event.clientX, clientY = event.clientY;
          setCoords({ x: clientX, y: clientY });
          if (cursorInnerRef.current !== null) {
            cursorInnerRef.current.style.top = "".concat(clientY, "px");
            cursorInnerRef.current.style.left = "".concat(clientX, "px");
          }
          endX.current = clientX;
          endY.current = clientY;
        }, []);
        var animateOuterCursor = react.useCallback(
          function(time) {
            if (previousTimeRef.current !== void 0) {
              coords.x += (endX.current - coords.x) / trailingSpeed;
              coords.y += (endY.current - coords.y) / trailingSpeed;
              if (cursorOuterRef.current !== null) {
                cursorOuterRef.current.style.top = "".concat(coords.y, "px");
                cursorOuterRef.current.style.left = "".concat(coords.x, "px");
              }
            }
            previousTimeRef.current = time;
            requestRef.current = requestAnimationFrame(animateOuterCursor);
          },
          [requestRef]
          // eslint-disable-line
        );
        react.useEffect(function() {
          requestRef.current = requestAnimationFrame(animateOuterCursor);
          return function() {
            if (requestRef.current !== null) {
              cancelAnimationFrame(requestRef.current);
            }
          };
        }, [animateOuterCursor]);
        var getScaleAmount = function(orignalSize, scaleAmount) {
          return "".concat(parseInt(String(orignalSize * scaleAmount)), "px");
        };
        var scaleBySize = react.useCallback(function(cursorRef, orignalSize, scaleAmount) {
          if (cursorRef) {
            cursorRef.style.height = getScaleAmount(orignalSize, scaleAmount);
            cursorRef.style.width = getScaleAmount(orignalSize, scaleAmount);
          }
        }, []);
        var onMouseDown = react.useCallback(function() {
          return setIsActive(true);
        }, []);
        var onMouseUp = react.useCallback(function() {
          return setIsActive(false);
        }, []);
        var onMouseEnterViewport = react.useCallback(function() {
          return setIsVisible(true);
        }, []);
        var onMouseLeaveViewport = react.useCallback(function() {
          return setIsVisible(false);
        }, []);
        useEventListener("mousemove", onMouseMove);
        useEventListener("mousedown", onMouseDown);
        useEventListener("mouseup", onMouseUp);
        useEventListener("mouseover", onMouseEnterViewport);
        useEventListener("mouseout", onMouseLeaveViewport);
        react.useEffect(function() {
          if (isActive) {
            scaleBySize(cursorInnerRef.current, options.innerSize, options.innerScale);
            scaleBySize(cursorOuterRef.current, options.outerSize, options.outerScale);
          } else {
            scaleBySize(cursorInnerRef.current, options.innerSize, 1);
            scaleBySize(cursorOuterRef.current, options.outerSize, 1);
          }
        }, [
          options.innerSize,
          options.innerScale,
          options.outerSize,
          options.outerScale,
          scaleBySize,
          isActive
        ]);
        react.useEffect(function() {
          if (isActiveClickable) {
            scaleBySize(cursorInnerRef.current, options.innerSize, options.innerScale * 1.2);
            scaleBySize(cursorOuterRef.current, options.outerSize, options.outerScale * 1.4);
          }
        }, [
          options.innerSize,
          options.innerScale,
          options.outerSize,
          options.outerScale,
          scaleBySize,
          isActiveClickable
        ]);
        react.useEffect(function() {
          if (cursorInnerRef.current == null || cursorOuterRef.current == null)
            return;
          if (isVisible) {
            cursorInnerRef.current.style.opacity = "1";
            cursorOuterRef.current.style.opacity = "1";
          } else {
            cursorInnerRef.current.style.opacity = "0";
            cursorOuterRef.current.style.opacity = "0";
          }
        }, [isVisible]);
        react.useEffect(function() {
          var clickableEls = document.querySelectorAll(clickables.map(function(clickable) {
            return typeof clickable === "object" && (clickable === null || clickable === void 0 ? void 0 : clickable.target) ? clickable.target : clickable !== null && clickable !== void 0 ? clickable : "";
          }).join(","));
          clickableEls.forEach(function(el) {
            if (!showSystemCursor)
              el.style.cursor = "none";
            var clickableOptions = typeof clickables === "object" ? findInArray(clickables, function(clickable) {
              return typeof clickable === "object" && el.matches(clickable.target);
            }) : {};
            var options2 = __assign(__assign({}, defaultOptions), clickableOptions);
            el.addEventListener("mouseover", function() {
              setIsActive(true);
              setOptions(options2);
            });
            el.addEventListener("click", function() {
              setIsActive(true);
              setIsActiveClickable(false);
            });
            el.addEventListener("mousedown", function() {
              setIsActiveClickable(true);
            });
            el.addEventListener("mouseup", function() {
              setIsActive(true);
            });
            el.addEventListener("mouseout", function() {
              setIsActive(false);
              setIsActiveClickable(false);
              setOptions(defaultOptions);
            });
          });
          return function() {
            clickableEls.forEach(function(el) {
              var clickableOptions = typeof clickables === "object" ? findInArray(clickables, function(clickable) {
                return typeof clickable === "object" && el.matches(clickable.target);
              }) : {};
              var options2 = __assign(__assign({}, defaultOptions), clickableOptions);
              el.removeEventListener("mouseover", function() {
                setIsActive(true);
                setOptions(options2);
              });
              el.removeEventListener("click", function() {
                setIsActive(true);
                setIsActiveClickable(false);
              });
              el.removeEventListener("mousedown", function() {
                setIsActiveClickable(true);
              });
              el.removeEventListener("mouseup", function() {
                setIsActive(true);
              });
              el.removeEventListener("mouseout", function() {
                setIsActive(false);
                setIsActiveClickable(false);
                setOptions(defaultOptions);
              });
            });
          };
        }, [isActive, clickables, showSystemCursor, defaultOptions]);
        react.useEffect(function() {
          if (typeof window === "object" && !showSystemCursor) {
            document.body.style.cursor = "none";
          }
        }, [showSystemCursor]);
        var coreStyles = {
          zIndex: 999,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          transition: "opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out"
        };
        var styles = {
          cursorInner: __assign(__assign({ width: !options.children ? options.innerSize : "auto", height: !options.children ? options.innerSize : "auto", backgroundColor: !options.children ? "rgba(".concat(options.color, ", 1)") : "transparent" }, coreStyles), options.innerStyle && options.innerStyle),
          cursorOuter: __assign(__assign({ width: options.outerSize, height: options.outerSize, backgroundColor: "rgba(".concat(options.color, ", ").concat(options.outerAlpha, ")") }, coreStyles), options.outerStyle && options.outerStyle)
        };
        return jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { ref: cursorOuterRef, style: styles.cursorOuter }), jsxRuntime.jsx("div", __assign({ ref: cursorInnerRef, style: styles.cursorInner }, { children: jsxRuntime.jsx("div", __assign({ style: {
          opacity: !options.children ? 0 : 1,
          transition: "opacity 0.3s ease-in-out"
        } }, { children: options.children })) }))] });
      }
      function AnimatedCursor2(_a) {
        var children = _a.children, clickables = _a.clickables, color = _a.color, innerScale = _a.innerScale, innerSize = _a.innerSize, innerStyle = _a.innerStyle, outerAlpha = _a.outerAlpha, outerScale = _a.outerScale, outerSize = _a.outerSize, outerStyle = _a.outerStyle, showSystemCursor = _a.showSystemCursor, trailingSpeed = _a.trailingSpeed;
        var deviceInfo = useDeviceInfo();
        if (typeof navigator !== "undefined" && deviceInfo.any()) {
          return jsxRuntime.jsx(jsxRuntime.Fragment, {});
        }
        return jsxRuntime.jsx(CursorCore, __assign({ clickables, color, innerScale, innerSize, innerStyle, outerAlpha, outerScale, outerSize, outerStyle, showSystemCursor, trailingSpeed }, { children }));
      }
      return AnimatedCursor2;
    });
  }
});

// node_modules/ua-parser-js/dist/ua-parser.min.js
var require_ua_parser_min = __commonJS({
  "node_modules/ua-parser-js/dist/ua-parser.min.js"(exports, module) {
    (function(window2, undefined2) {
      "use strict";
      var LIBVERSION = "1.0.38", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 500;
      var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HUAWEI = "Huawei", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", OPERA = "Opera", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook", CHROMIUM_OS = "Chromium OS", MAC_OS = "Mac OS";
      var extend = function(regexes2, extensions) {
        var mergedRegexes = {};
        for (var i in regexes2) {
          if (extensions[i] && extensions[i].length % 2 === 0) {
            mergedRegexes[i] = extensions[i].concat(regexes2[i]);
          } else {
            mergedRegexes[i] = regexes2[i];
          }
        }
        return mergedRegexes;
      }, enumerize = function(arr) {
        var enums = {};
        for (var i = 0; i < arr.length; i++) {
          enums[arr[i].toUpperCase()] = arr[i];
        }
        return enums;
      }, has = function(str1, str2) {
        return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
      }, lowerize = function(str) {
        return str.toLowerCase();
      }, majorize = function(version) {
        return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined2;
      }, trim = function(str, len) {
        if (typeof str === STR_TYPE) {
          str = str.replace(/^\s\s*/, EMPTY);
          return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
        }
      };
      var rgxMapper = function(ua, arrays) {
        var i = 0, j, k, p, q, matches, match;
        while (i < arrays.length && !matches) {
          var regex = arrays[i], props = arrays[i + 1];
          j = k = 0;
          while (j < regex.length && !matches) {
            if (!regex[j]) {
              break;
            }
            matches = regex[j++].exec(ua);
            if (!!matches) {
              for (p = 0; p < props.length; p++) {
                match = matches[++k];
                q = props[p];
                if (typeof q === OBJ_TYPE && q.length > 0) {
                  if (q.length === 2) {
                    if (typeof q[1] == FUNC_TYPE) {
                      this[q[0]] = q[1].call(this, match);
                    } else {
                      this[q[0]] = q[1];
                    }
                  } else if (q.length === 3) {
                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                      this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined2;
                    } else {
                      this[q[0]] = match ? match.replace(q[1], q[2]) : undefined2;
                    }
                  } else if (q.length === 4) {
                    this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined2;
                  }
                } else {
                  this[q] = match ? match : undefined2;
                }
              }
            }
          }
          i += 2;
        }
      }, strMapper = function(str, map) {
        for (var i in map) {
          if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
            for (var j = 0; j < map[i].length; j++) {
              if (has(map[i][j], str)) {
                return i === UNKNOWN ? undefined2 : i;
              }
            }
          } else if (has(map[i], str)) {
            return i === UNKNOWN ? undefined2 : i;
          }
        }
        return str;
      };
      var oldSafariMap = { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }, windowsVersionMap = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" };
      var regexes = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [VERSION, [NAME, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [VERSION, [NAME, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [NAME, VERSION], [/opios[\/ ]+([\w\.]+)/i], [VERSION, [NAME, OPERA + " Mini"]], [/\bop(?:rg)?x\/([\w\.]+)/i], [VERSION, [NAME, OPERA + " GX"]], [/\bopr\/([\w\.]+)/i], [VERSION, [NAME, OPERA]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [VERSION, [NAME, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [NAME, VERSION], [/\bddg\/([\w\.]+)/i], [VERSION, [NAME, "DuckDuckGo"]], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [VERSION, [NAME, "UC" + BROWSER]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [VERSION, [NAME, "WeChat"]], [/konqueror\/([\w\.]+)/i], [VERSION, [NAME, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [VERSION, [NAME, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [VERSION, [NAME, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [VERSION, [NAME, "Smart Lenovo " + BROWSER]], [/(avast|avg)\/([\w\.]+)/i], [[NAME, /(.+)/, "$1 Secure " + BROWSER], VERSION], [/\bfocus\/([\w\.]+)/i], [VERSION, [NAME, FIREFOX + " Focus"]], [/\bopt\/([\w\.]+)/i], [VERSION, [NAME, OPERA + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [VERSION, [NAME, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [VERSION, [NAME, "Dolphin"]], [/coast\/([\w\.]+)/i], [VERSION, [NAME, OPERA + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [VERSION, [NAME, "MIUI " + BROWSER]], [/fxios\/([-\w\.]+)/i], [VERSION, [NAME, FIREFOX]], [/\bqihu|(qi?ho?o?|360)browser/i], [[NAME, "360 " + BROWSER]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[NAME, /(.+)/, "$1 " + BROWSER], VERSION], [/samsungbrowser\/([\w\.]+)/i], [VERSION, [NAME, SAMSUNG + " Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[NAME, /_/g, " "], VERSION], [/metasr[\/ ]?([\d\.]+)/i], [VERSION, [NAME, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[NAME, "Sogou Mobile"], VERSION], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [NAME, VERSION], [/(lbbrowser)/i, /\[(linkedin)app\]/i], [NAME], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[NAME, FACEBOOK], VERSION], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [NAME, VERSION], [/\bgsa\/([\w\.]+) .*safari\//i], [VERSION, [NAME, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [VERSION, [NAME, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [VERSION, [NAME, CHROME + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[NAME, CHROME + " WebView"], VERSION], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [VERSION, [NAME, "Android " + BROWSER]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [NAME, VERSION], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [VERSION, [NAME, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [VERSION, NAME], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [NAME, [VERSION, strMapper, oldSafariMap]], [/(webkit|khtml)\/([\w\.]+)/i], [NAME, VERSION], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[NAME, "Netscape"], VERSION], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [VERSION, [NAME, FIREFOX + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [NAME, VERSION], [/(cobalt)\/([\w\.]+)/i], [NAME, [VERSION, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[ARCHITECTURE, "amd64"]], [/(ia32(?=;))/i], [[ARCHITECTURE, lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[ARCHITECTURE, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[ARCHITECTURE, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[ARCHITECTURE, "armhf"]], [/windows (ce|mobile); ppc;/i], [[ARCHITECTURE, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[ARCHITECTURE, /ower/, EMPTY, lowerize]], [/(sun4\w)[;\)]/i], [[ARCHITECTURE, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[ARCHITECTURE, lowerize]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [MODEL, [VENDOR, APPLE], [TYPE, TABLET]], [/(macintosh);/i], [MODEL, [VENDOR, APPLE]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, MOBILE]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, TABLET]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [MODEL, [VENDOR, "OPPO"], [TYPE, MOBILE]], [/\b(opd2\d{3}a?) bui/i], [MODEL, [VENDOR, "OPPO"], [TYPE, TABLET]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [MODEL, [VENDOR, "Vivo"], [TYPE, MOBILE]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [MODEL, [VENDOR, "Realme"], [TYPE, MOBILE]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [MODEL, [VENDOR, LG], [TYPE, TABLET]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [MODEL, [VENDOR, LG], [TYPE, MOBILE]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [MODEL, [VENDOR, "Lenovo"], [TYPE, TABLET]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[MODEL, /_/g, " "], [VENDOR, "Nokia"], [TYPE, MOBILE]], [/(pixel c)\b/i], [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [MODEL, [VENDOR, SONY], [TYPE, MOBILE]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[MODEL, "Xperia Tablet"], [VENDOR, SONY], [TYPE, TABLET]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [MODEL, [VENDOR, "OnePlus"], [TYPE, MOBILE]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[MODEL, /(.+)/g, "Fire Phone $1"], [VENDOR, AMAZON], [TYPE, MOBILE]], [/(playbook);[-\w\),; ]+(rim)/i], [MODEL, VENDOR, [TYPE, TABLET]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [MODEL, [VENDOR, ASUS], [TYPE, TABLET]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]], [/(nexus 9)/i], [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [MODEL, [VENDOR, "Meizu"], [TYPE, MOBILE]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [MODEL, [VENDOR, "Ulefone"], [TYPE, MOBILE]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [VENDOR, MODEL, [TYPE, MOBILE]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [VENDOR, MODEL, [TYPE, TABLET]], [/(surface duo)/i], [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [MODEL, [VENDOR, "Fairphone"], [TYPE, MOBILE]], [/(u304aa)/i], [MODEL, [VENDOR, "AT&T"], [TYPE, MOBILE]], [/\bsie-(\w*)/i], [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]], [/\b(rct\w+) b/i], [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]], [/\b(venue[\d ]{2,7}) b/i], [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]], [/\b(q(?:mv|ta)\w+) b/i], [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [MODEL, [VENDOR, "Barnes & Noble"], [TYPE, TABLET]], [/\b(tm\d{3}\w+) b/i], [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]], [/\b(k88) b/i], [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]], [/\b(nx\d{3}j) b/i], [MODEL, [VENDOR, "ZTE"], [TYPE, MOBILE]], [/\b(gen\d{3}) b.+49h/i], [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]], [/\b(zur\d{3}) b/i], [MODEL, [VENDOR, "Swiss"], [TYPE, TABLET]], [/\b((zeki)?tb.*\b) b/i], [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]], [/\b(ns-?\w{0,9}) b/i], [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]], [/\b((nxa|next)-?\w{0,9}) b/i], [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]], [/\b(lvtel\-)?(v1[12]) b/i], [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]], [/\b(ph-1) /i], [MODEL, [VENDOR, "Essential"], [TYPE, MOBILE]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]], [/\b(trio[-\w\. ]+) b/i], [MODEL, [VENDOR, "MachSpeed"], [TYPE, TABLET]], [/\btu_(1491) b/i], [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]], [/(shield[\w ]+) b/i], [MODEL, [VENDOR, "Nvidia"], [TYPE, TABLET]], [/(sprint) (\w+)/i], [VENDOR, MODEL, [TYPE, MOBILE]], [/(kin\.[onetw]{3})/i], [[MODEL, /\./g, " "], [VENDOR, MICROSOFT], [TYPE, MOBILE]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]], [/smart-tv.+(samsung)/i], [VENDOR, [TYPE, SMARTTV]], [/hbbtv.+maple;(\d+)/i], [[MODEL, /^/, "SmartTV"], [VENDOR, SAMSUNG], [TYPE, SMARTTV]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[VENDOR, LG], [TYPE, SMARTTV]], [/(apple) ?tv/i], [VENDOR, [MODEL, APPLE + " TV"], [TYPE, SMARTTV]], [/crkey/i], [[MODEL, CHROME + "cast"], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [/droid.+aft(\w+)( bui|\))/i], [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]], [/(bravia[\w ]+)( bui|\))/i], [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]], [/(mitv-\w{5}) bui/i], [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]], [/Hbbtv.*(technisat) (.*);/i], [VENDOR, MODEL, [TYPE, SMARTTV]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[TYPE, SMARTTV]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [VENDOR, MODEL, [TYPE, CONSOLE]], [/droid.+; (shield) bui/i], [MODEL, [VENDOR, "Nvidia"], [TYPE, CONSOLE]], [/(playstation [345portablevi]+)/i], [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]], [/((pebble))app/i], [VENDOR, MODEL, [TYPE, WEARABLE]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]], [/droid.+; (glass) \d/i], [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]], [/droid.+; (wt63?0{2,3})\)/i], [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]], [/(quest( \d| pro)?)/i], [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [VENDOR, [TYPE, EMBEDDED]], [/(aeobc)\b/i], [MODEL, [VENDOR, AMAZON], [TYPE, EMBEDDED]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [MODEL, [TYPE, MOBILE]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [MODEL, [TYPE, TABLET]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[TYPE, TABLET]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[TYPE, MOBILE]], [/(android[-\w\. ]{0,9});.+buil/i], [MODEL, [VENDOR, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [VERSION, [NAME, EDGE + "HTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [VERSION, [NAME, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [NAME, VERSION], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [VERSION, NAME]], os: [[/microsoft (windows) (vista|xp)/i], [NAME, VERSION], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [NAME, [VERSION, strMapper, windowsVersionMap]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[VERSION, strMapper, windowsVersionMap], [NAME, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[VERSION, /_/g, "."], [NAME, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[NAME, MAC_OS], [VERSION, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [VERSION, NAME], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [NAME, VERSION], [/\(bb(10);/i], [VERSION, [NAME, BLACKBERRY]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [VERSION, [NAME, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [VERSION, [NAME, FIREFOX + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [VERSION, [NAME, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [VERSION, [NAME, "watchOS"]], [/crkey\/([\d\.]+)/i], [VERSION, [NAME, CHROME + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[NAME, CHROMIUM_OS], VERSION], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [NAME, VERSION], [/(sunos) ?([\w\.\d]*)/i], [[NAME, "Solaris"], VERSION], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [NAME, VERSION]] };
      var UAParser = function(ua, extensions) {
        if (typeof ua === OBJ_TYPE) {
          extensions = ua;
          ua = undefined2;
        }
        if (!(this instanceof UAParser)) {
          return new UAParser(ua, extensions).getResult();
        }
        var _navigator = typeof window2 !== UNDEF_TYPE && window2.navigator ? window2.navigator : undefined2;
        var _ua = ua || (_navigator && _navigator.userAgent ? _navigator.userAgent : EMPTY);
        var _uach = _navigator && _navigator.userAgentData ? _navigator.userAgentData : undefined2;
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
        var _isSelfNav = _navigator && _navigator.userAgent == _ua;
        this.getBrowser = function() {
          var _browser = {};
          _browser[NAME] = undefined2;
          _browser[VERSION] = undefined2;
          rgxMapper.call(_browser, _ua, _rgxmap.browser);
          _browser[MAJOR] = majorize(_browser[VERSION]);
          if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) {
            _browser[NAME] = "Brave";
          }
          return _browser;
        };
        this.getCPU = function() {
          var _cpu = {};
          _cpu[ARCHITECTURE] = undefined2;
          rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
          return _cpu;
        };
        this.getDevice = function() {
          var _device = {};
          _device[VENDOR] = undefined2;
          _device[MODEL] = undefined2;
          _device[TYPE] = undefined2;
          rgxMapper.call(_device, _ua, _rgxmap.device);
          if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) {
            _device[TYPE] = MOBILE;
          }
          if (_isSelfNav && _device[MODEL] == "Macintosh" && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
            _device[MODEL] = "iPad";
            _device[TYPE] = TABLET;
          }
          return _device;
        };
        this.getEngine = function() {
          var _engine = {};
          _engine[NAME] = undefined2;
          _engine[VERSION] = undefined2;
          rgxMapper.call(_engine, _ua, _rgxmap.engine);
          return _engine;
        };
        this.getOS = function() {
          var _os = {};
          _os[NAME] = undefined2;
          _os[VERSION] = undefined2;
          rgxMapper.call(_os, _ua, _rgxmap.os);
          if (_isSelfNav && !_os[NAME] && _uach && _uach.platform && _uach.platform != "Unknown") {
            _os[NAME] = _uach.platform.replace(/chrome os/i, CHROMIUM_OS).replace(/macos/i, MAC_OS);
          }
          return _os;
        };
        this.getResult = function() {
          return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
        };
        this.getUA = function() {
          return _ua;
        };
        this.setUA = function(ua2) {
          _ua = typeof ua2 === STR_TYPE && ua2.length > UA_MAX_LENGTH ? trim(ua2, UA_MAX_LENGTH) : ua2;
          return this;
        };
        this.setUA(_ua);
        return this;
      };
      UAParser.VERSION = LIBVERSION;
      UAParser.BROWSER = enumerize([NAME, VERSION, MAJOR]);
      UAParser.CPU = enumerize([ARCHITECTURE]);
      UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
      UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);
      if (typeof exports !== UNDEF_TYPE) {
        if (typeof module !== UNDEF_TYPE && module.exports) {
          exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
      } else {
        if (typeof define === FUNC_TYPE && define.amd) {
          define(function() {
            return UAParser;
          });
        } else if (typeof window2 !== UNDEF_TYPE) {
          window2.UAParser = UAParser;
        }
      }
      var $ = typeof window2 !== UNDEF_TYPE && (window2.jQuery || window2.Zepto);
      if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function() {
          return parser.getUA();
        };
        $.ua.set = function(ua) {
          parser.setUA(ua);
          var result = parser.getResult();
          for (var prop in result) {
            $.ua[prop] = result[prop];
          }
        };
      }
    })(typeof window === "object" ? window : exports);
  }
});

// node_modules/react-device-detect/dist/lib.js
var require_lib = __commonJS({
  "node_modules/react-device-detect/dist/lib.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    var React = require_react();
    var React__default = _interopDefault(React);
    var UAParser = require_ua_parser_min();
    var ClientUAInstance = new UAParser();
    var browser = ClientUAInstance.getBrowser();
    var cpu = ClientUAInstance.getCPU();
    var device = ClientUAInstance.getDevice();
    var engine = ClientUAInstance.getEngine();
    var os = ClientUAInstance.getOS();
    var ua = ClientUAInstance.getUA();
    var setUa = function setUa2(userAgentString) {
      return ClientUAInstance.setUA(userAgentString);
    };
    var parseUserAgent = function parseUserAgent2(userAgent) {
      if (!userAgent) {
        console.error("No userAgent string was provided");
        return;
      }
      var UserAgentInstance = new UAParser(userAgent);
      return {
        UA: UserAgentInstance,
        browser: UserAgentInstance.getBrowser(),
        cpu: UserAgentInstance.getCPU(),
        device: UserAgentInstance.getDevice(),
        engine: UserAgentInstance.getEngine(),
        os: UserAgentInstance.getOS(),
        ua: UserAgentInstance.getUA(),
        setUserAgent: function setUserAgent2(userAgentString) {
          return UserAgentInstance.setUA(userAgentString);
        }
      };
    };
    var UAHelper = /* @__PURE__ */ Object.freeze({
      ClientUAInstance,
      browser,
      cpu,
      device,
      engine,
      os,
      ua,
      setUa,
      parseUserAgent
    });
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function _objectWithoutProperties(source, excluded) {
      if (source == null)
        return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self2);
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null)
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var DeviceTypes = {
      Mobile: "mobile",
      Tablet: "tablet",
      SmartTv: "smarttv",
      Console: "console",
      Wearable: "wearable",
      Embedded: "embedded",
      Browser: void 0
    };
    var BrowserTypes = {
      Chrome: "Chrome",
      Firefox: "Firefox",
      Opera: "Opera",
      Yandex: "Yandex",
      Safari: "Safari",
      InternetExplorer: "Internet Explorer",
      Edge: "Edge",
      Chromium: "Chromium",
      Ie: "IE",
      MobileSafari: "Mobile Safari",
      EdgeChromium: "Edge Chromium",
      MIUI: "MIUI Browser",
      SamsungBrowser: "Samsung Browser"
    };
    var OsTypes = {
      IOS: "iOS",
      Android: "Android",
      WindowsPhone: "Windows Phone",
      Windows: "Windows",
      MAC_OS: "Mac OS"
    };
    var InitialDeviceTypes = {
      isMobile: false,
      isTablet: false,
      isBrowser: false,
      isSmartTV: false,
      isConsole: false,
      isWearable: false
    };
    var checkDeviceType = function checkDeviceType2(type) {
      switch (type) {
        case DeviceTypes.Mobile:
          return {
            isMobile: true
          };
        case DeviceTypes.Tablet:
          return {
            isTablet: true
          };
        case DeviceTypes.SmartTv:
          return {
            isSmartTV: true
          };
        case DeviceTypes.Console:
          return {
            isConsole: true
          };
        case DeviceTypes.Wearable:
          return {
            isWearable: true
          };
        case DeviceTypes.Browser:
          return {
            isBrowser: true
          };
        case DeviceTypes.Embedded:
          return {
            isEmbedded: true
          };
        default:
          return InitialDeviceTypes;
      }
    };
    var setUserAgent = function setUserAgent2(userAgent) {
      return setUa(userAgent);
    };
    var setDefaults = function setDefaults2(p) {
      var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none";
      return p ? p : d;
    };
    var getNavigatorInstance = function getNavigatorInstance2() {
      if (typeof window !== "undefined") {
        if (window.navigator || navigator) {
          return window.navigator || navigator;
        }
      }
      return false;
    };
    var isIOS13Check = function isIOS13Check2(type) {
      var nav = getNavigatorInstance();
      return nav && nav.platform && (nav.platform.indexOf(type) !== -1 || nav.platform === "MacIntel" && nav.maxTouchPoints > 1 && !window.MSStream);
    };
    var browserPayload = function browserPayload2(isBrowser2, browser2, engine2, os2, ua2) {
      return {
        isBrowser: isBrowser2,
        browserMajorVersion: setDefaults(browser2.major),
        browserFullVersion: setDefaults(browser2.version),
        browserName: setDefaults(browser2.name),
        engineName: setDefaults(engine2.name),
        engineVersion: setDefaults(engine2.version),
        osName: setDefaults(os2.name),
        osVersion: setDefaults(os2.version),
        userAgent: setDefaults(ua2)
      };
    };
    var mobilePayload = function mobilePayload2(type, device2, os2, ua2) {
      return _objectSpread2({}, type, {
        vendor: setDefaults(device2.vendor),
        model: setDefaults(device2.model),
        os: setDefaults(os2.name),
        osVersion: setDefaults(os2.version),
        ua: setDefaults(ua2)
      });
    };
    var smartTvPayload = function smartTvPayload2(isSmartTV2, engine2, os2, ua2) {
      return {
        isSmartTV: isSmartTV2,
        engineName: setDefaults(engine2.name),
        engineVersion: setDefaults(engine2.version),
        osName: setDefaults(os2.name),
        osVersion: setDefaults(os2.version),
        userAgent: setDefaults(ua2)
      };
    };
    var consolePayload = function consolePayload2(isConsole2, engine2, os2, ua2) {
      return {
        isConsole: isConsole2,
        engineName: setDefaults(engine2.name),
        engineVersion: setDefaults(engine2.version),
        osName: setDefaults(os2.name),
        osVersion: setDefaults(os2.version),
        userAgent: setDefaults(ua2)
      };
    };
    var wearablePayload = function wearablePayload2(isWearable2, engine2, os2, ua2) {
      return {
        isWearable: isWearable2,
        engineName: setDefaults(engine2.name),
        engineVersion: setDefaults(engine2.version),
        osName: setDefaults(os2.name),
        osVersion: setDefaults(os2.version),
        userAgent: setDefaults(ua2)
      };
    };
    var embeddedPayload = function embeddedPayload2(isEmbedded2, device2, engine2, os2, ua2) {
      return {
        isEmbedded: isEmbedded2,
        vendor: setDefaults(device2.vendor),
        model: setDefaults(device2.model),
        engineName: setDefaults(engine2.name),
        engineVersion: setDefaults(engine2.version),
        osName: setDefaults(os2.name),
        osVersion: setDefaults(os2.version),
        userAgent: setDefaults(ua2)
      };
    };
    function deviceDetect(userAgent) {
      var _ref = userAgent ? parseUserAgent(userAgent) : UAHelper, device2 = _ref.device, browser2 = _ref.browser, engine2 = _ref.engine, os2 = _ref.os, ua2 = _ref.ua;
      var type = checkDeviceType(device2.type);
      var isBrowser2 = type.isBrowser, isMobile3 = type.isMobile, isTablet2 = type.isTablet, isSmartTV2 = type.isSmartTV, isConsole2 = type.isConsole, isWearable2 = type.isWearable, isEmbedded2 = type.isEmbedded;
      if (isBrowser2) {
        return browserPayload(isBrowser2, browser2, engine2, os2, ua2);
      }
      if (isSmartTV2) {
        return smartTvPayload(isSmartTV2, engine2, os2, ua2);
      }
      if (isConsole2) {
        return consolePayload(isConsole2, engine2, os2, ua2);
      }
      if (isMobile3) {
        return mobilePayload(type, device2, os2, ua2);
      }
      if (isTablet2) {
        return mobilePayload(type, device2, os2, ua2);
      }
      if (isWearable2) {
        return wearablePayload(isWearable2, engine2, os2, ua2);
      }
      if (isEmbedded2) {
        return embeddedPayload(isEmbedded2, device2, engine2, os2, ua2);
      }
    }
    var isMobileType = function isMobileType2(_ref) {
      var type = _ref.type;
      return type === DeviceTypes.Mobile;
    };
    var isTabletType = function isTabletType2(_ref2) {
      var type = _ref2.type;
      return type === DeviceTypes.Tablet;
    };
    var isMobileAndTabletType = function isMobileAndTabletType2(_ref3) {
      var type = _ref3.type;
      return type === DeviceTypes.Mobile || type === DeviceTypes.Tablet;
    };
    var isSmartTVType = function isSmartTVType2(_ref4) {
      var type = _ref4.type;
      return type === DeviceTypes.SmartTv;
    };
    var isBrowserType = function isBrowserType2(_ref5) {
      var type = _ref5.type;
      return type === DeviceTypes.Browser;
    };
    var isWearableType = function isWearableType2(_ref6) {
      var type = _ref6.type;
      return type === DeviceTypes.Wearable;
    };
    var isConsoleType = function isConsoleType2(_ref7) {
      var type = _ref7.type;
      return type === DeviceTypes.Console;
    };
    var isEmbeddedType = function isEmbeddedType2(_ref8) {
      var type = _ref8.type;
      return type === DeviceTypes.Embedded;
    };
    var getMobileVendor = function getMobileVendor2(_ref9) {
      var vendor = _ref9.vendor;
      return setDefaults(vendor);
    };
    var getMobileModel = function getMobileModel2(_ref10) {
      var model = _ref10.model;
      return setDefaults(model);
    };
    var getDeviceType = function getDeviceType2(_ref11) {
      var type = _ref11.type;
      return setDefaults(type, "browser");
    };
    var isAndroidType = function isAndroidType2(_ref12) {
      var name = _ref12.name;
      return name === OsTypes.Android;
    };
    var isWindowsType = function isWindowsType2(_ref13) {
      var name = _ref13.name;
      return name === OsTypes.Windows;
    };
    var isMacOsType = function isMacOsType2(_ref14) {
      var name = _ref14.name;
      return name === OsTypes.MAC_OS;
    };
    var isWinPhoneType = function isWinPhoneType2(_ref15) {
      var name = _ref15.name;
      return name === OsTypes.WindowsPhone;
    };
    var isIOSType = function isIOSType2(_ref16) {
      var name = _ref16.name;
      return name === OsTypes.IOS;
    };
    var getOsVersion = function getOsVersion2(_ref17) {
      var version = _ref17.version;
      return setDefaults(version);
    };
    var getOsName = function getOsName2(_ref18) {
      var name = _ref18.name;
      return setDefaults(name);
    };
    var isChromeType = function isChromeType2(_ref19) {
      var name = _ref19.name;
      return name === BrowserTypes.Chrome;
    };
    var isFirefoxType = function isFirefoxType2(_ref20) {
      var name = _ref20.name;
      return name === BrowserTypes.Firefox;
    };
    var isChromiumType = function isChromiumType2(_ref21) {
      var name = _ref21.name;
      return name === BrowserTypes.Chromium;
    };
    var isEdgeType = function isEdgeType2(_ref22) {
      var name = _ref22.name;
      return name === BrowserTypes.Edge;
    };
    var isYandexType = function isYandexType2(_ref23) {
      var name = _ref23.name;
      return name === BrowserTypes.Yandex;
    };
    var isSafariType = function isSafariType2(_ref24) {
      var name = _ref24.name;
      return name === BrowserTypes.Safari || name === BrowserTypes.MobileSafari;
    };
    var isMobileSafariType = function isMobileSafariType2(_ref25) {
      var name = _ref25.name;
      return name === BrowserTypes.MobileSafari;
    };
    var isOperaType = function isOperaType2(_ref26) {
      var name = _ref26.name;
      return name === BrowserTypes.Opera;
    };
    var isIEType = function isIEType2(_ref27) {
      var name = _ref27.name;
      return name === BrowserTypes.InternetExplorer || name === BrowserTypes.Ie;
    };
    var isMIUIType = function isMIUIType2(_ref28) {
      var name = _ref28.name;
      return name === BrowserTypes.MIUI;
    };
    var isSamsungBrowserType = function isSamsungBrowserType2(_ref29) {
      var name = _ref29.name;
      return name === BrowserTypes.SamsungBrowser;
    };
    var getBrowserFullVersion = function getBrowserFullVersion2(_ref30) {
      var version = _ref30.version;
      return setDefaults(version);
    };
    var getBrowserVersion = function getBrowserVersion2(_ref31) {
      var major = _ref31.major;
      return setDefaults(major);
    };
    var getBrowserName = function getBrowserName2(_ref32) {
      var name = _ref32.name;
      return setDefaults(name);
    };
    var getEngineName = function getEngineName2(_ref33) {
      var name = _ref33.name;
      return setDefaults(name);
    };
    var getEngineVersion = function getEngineVersion2(_ref34) {
      var version = _ref34.version;
      return setDefaults(version);
    };
    var isElectronType = function isElectronType2() {
      var nav = getNavigatorInstance();
      var ua2 = nav && nav.userAgent && nav.userAgent.toLowerCase();
      return typeof ua2 === "string" ? /electron/.test(ua2) : false;
    };
    var isEdgeChromiumType = function isEdgeChromiumType2(ua2) {
      return typeof ua2 === "string" && ua2.indexOf("Edg/") !== -1;
    };
    var getIOS13 = function getIOS132() {
      var nav = getNavigatorInstance();
      return nav && (/iPad|iPhone|iPod/.test(nav.platform) || nav.platform === "MacIntel" && nav.maxTouchPoints > 1) && !window.MSStream;
    };
    var getIPad13 = function getIPad132() {
      return isIOS13Check("iPad");
    };
    var getIphone13 = function getIphone132() {
      return isIOS13Check("iPhone");
    };
    var getIPod13 = function getIPod132() {
      return isIOS13Check("iPod");
    };
    var getUseragent = function getUseragent2(userAg) {
      return setDefaults(userAg);
    };
    function buildSelectorsObject(options) {
      var _ref = options ? options : UAHelper, device2 = _ref.device, browser2 = _ref.browser, os2 = _ref.os, engine2 = _ref.engine, ua2 = _ref.ua;
      return {
        isSmartTV: isSmartTVType(device2),
        isConsole: isConsoleType(device2),
        isWearable: isWearableType(device2),
        isEmbedded: isEmbeddedType(device2),
        isMobileSafari: isMobileSafariType(browser2) || getIPad13(),
        isChromium: isChromiumType(browser2),
        isMobile: isMobileAndTabletType(device2) || getIPad13(),
        isMobileOnly: isMobileType(device2),
        isTablet: isTabletType(device2) || getIPad13(),
        isBrowser: isBrowserType(device2),
        isDesktop: isBrowserType(device2),
        isAndroid: isAndroidType(os2),
        isWinPhone: isWinPhoneType(os2),
        isIOS: isIOSType(os2) || getIPad13(),
        isChrome: isChromeType(browser2),
        isFirefox: isFirefoxType(browser2),
        isSafari: isSafariType(browser2),
        isOpera: isOperaType(browser2),
        isIE: isIEType(browser2),
        osVersion: getOsVersion(os2),
        osName: getOsName(os2),
        fullBrowserVersion: getBrowserFullVersion(browser2),
        browserVersion: getBrowserVersion(browser2),
        browserName: getBrowserName(browser2),
        mobileVendor: getMobileVendor(device2),
        mobileModel: getMobileModel(device2),
        engineName: getEngineName(engine2),
        engineVersion: getEngineVersion(engine2),
        getUA: getUseragent(ua2),
        isEdge: isEdgeType(browser2) || isEdgeChromiumType(ua2),
        isYandex: isYandexType(browser2),
        deviceType: getDeviceType(device2),
        isIOS13: getIOS13(),
        isIPad13: getIPad13(),
        isIPhone13: getIphone13(),
        isIPod13: getIPod13(),
        isElectron: isElectronType(),
        isEdgeChromium: isEdgeChromiumType(ua2),
        isLegacyEdge: isEdgeType(browser2) && !isEdgeChromiumType(ua2),
        isWindows: isWindowsType(os2),
        isMacOs: isMacOsType(os2),
        isMIUI: isMIUIType(browser2),
        isSamsungBrowser: isSamsungBrowserType(browser2)
      };
    }
    var isSmartTV = isSmartTVType(device);
    var isConsole = isConsoleType(device);
    var isWearable = isWearableType(device);
    var isEmbedded = isEmbeddedType(device);
    var isMobileSafari = isMobileSafariType(browser) || getIPad13();
    var isChromium = isChromiumType(browser);
    var isMobile2 = isMobileAndTabletType(device) || getIPad13();
    var isMobileOnly = isMobileType(device);
    var isTablet = isTabletType(device) || getIPad13();
    var isBrowser = isBrowserType(device);
    var isDesktop = isBrowserType(device);
    var isAndroid = isAndroidType(os);
    var isWinPhone = isWinPhoneType(os);
    var isIOS = isIOSType(os) || getIPad13();
    var isChrome = isChromeType(browser);
    var isFirefox = isFirefoxType(browser);
    var isSafari = isSafariType(browser);
    var isOpera = isOperaType(browser);
    var isIE = isIEType(browser);
    var osVersion = getOsVersion(os);
    var osName = getOsName(os);
    var fullBrowserVersion = getBrowserFullVersion(browser);
    var browserVersion = getBrowserVersion(browser);
    var browserName = getBrowserName(browser);
    var mobileVendor = getMobileVendor(device);
    var mobileModel = getMobileModel(device);
    var engineName = getEngineName(engine);
    var engineVersion = getEngineVersion(engine);
    var getUA = getUseragent(ua);
    var isEdge = isEdgeType(browser) || isEdgeChromiumType(ua);
    var isYandex = isYandexType(browser);
    var deviceType = getDeviceType(device);
    var isIOS13 = getIOS13();
    var isIPad13 = getIPad13();
    var isIPhone13 = getIphone13();
    var isIPod13 = getIPod13();
    var isElectron = isElectronType();
    var isEdgeChromium = isEdgeChromiumType(ua);
    var isLegacyEdge = isEdgeType(browser) && !isEdgeChromiumType(ua);
    var isWindows = isWindowsType(os);
    var isMacOs = isMacOsType(os);
    var isMIUI = isMIUIType(browser);
    var isSamsungBrowser = isSamsungBrowserType(browser);
    var getSelectorsByUserAgent = function getSelectorsByUserAgent2(userAgent) {
      if (!userAgent || typeof userAgent !== "string") {
        console.error("No valid user agent string was provided");
        return;
      }
      var _UAHelper$parseUserAg = parseUserAgent(userAgent), device2 = _UAHelper$parseUserAg.device, browser2 = _UAHelper$parseUserAg.browser, os2 = _UAHelper$parseUserAg.os, engine2 = _UAHelper$parseUserAg.engine, ua2 = _UAHelper$parseUserAg.ua;
      return buildSelectorsObject({
        device: device2,
        browser: browser2,
        os: os2,
        engine: engine2,
        ua: ua2
      });
    };
    var AndroidView = function AndroidView2(_ref) {
      var renderWithFragment = _ref.renderWithFragment, children = _ref.children, props = _objectWithoutProperties(_ref, ["renderWithFragment", "children"]);
      return isAndroid ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
    };
    var BrowserView = function BrowserView2(_ref2) {
      var renderWithFragment = _ref2.renderWithFragment, children = _ref2.children, props = _objectWithoutProperties(_ref2, ["renderWithFragment", "children"]);
      return isBrowser ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
    };
    var IEView = function IEView2(_ref3) {
      var renderWithFragment = _ref3.renderWithFragment, children = _ref3.children, props = _objectWithoutProperties(_ref3, ["renderWithFragment", "children"]);
      return isIE ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
    };
    var IOSView = function IOSView2(_ref4) {
      var renderWithFragment = _ref4.renderWithFragment, children = _ref4.children, props = _objectWithoutProperties(_ref4, ["renderWithFragment", "children"]);
      return isIOS ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
    };
    var MobileView = function MobileView2(_ref5) {
      var renderWithFragment = _ref5.renderWithFragment, children = _ref5.children, props = _objectWithoutProperties(_ref5, ["renderWithFragment", "children"]);
      return isMobile2 ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
    };
    var TabletView = function TabletView2(_ref6) {
      var renderWithFragment = _ref6.renderWithFragment, children = _ref6.children, props = _objectWithoutProperties(_ref6, ["renderWithFragment", "children"]);
      return isTablet ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
    };
    var WinPhoneView = function WinPhoneView2(_ref7) {
      var renderWithFragment = _ref7.renderWithFragment, children = _ref7.children, props = _objectWithoutProperties(_ref7, ["renderWithFragment", "children"]);
      return isWinPhone ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
    };
    var MobileOnlyView = function MobileOnlyView2(_ref8) {
      var renderWithFragment = _ref8.renderWithFragment, children = _ref8.children, viewClassName = _ref8.viewClassName, style = _ref8.style, props = _objectWithoutProperties(_ref8, ["renderWithFragment", "children", "viewClassName", "style"]);
      return isMobileOnly ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
    };
    var SmartTVView = function SmartTVView2(_ref9) {
      var renderWithFragment = _ref9.renderWithFragment, children = _ref9.children, props = _objectWithoutProperties(_ref9, ["renderWithFragment", "children"]);
      return isSmartTV ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
    };
    var ConsoleView = function ConsoleView2(_ref10) {
      var renderWithFragment = _ref10.renderWithFragment, children = _ref10.children, props = _objectWithoutProperties(_ref10, ["renderWithFragment", "children"]);
      return isConsole ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
    };
    var WearableView = function WearableView2(_ref11) {
      var renderWithFragment = _ref11.renderWithFragment, children = _ref11.children, props = _objectWithoutProperties(_ref11, ["renderWithFragment", "children"]);
      return isWearable ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
    };
    var CustomView = function CustomView2(_ref12) {
      var renderWithFragment = _ref12.renderWithFragment, children = _ref12.children, viewClassName = _ref12.viewClassName, style = _ref12.style, condition = _ref12.condition, props = _objectWithoutProperties(_ref12, ["renderWithFragment", "children", "viewClassName", "style", "condition"]);
      return condition ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
    };
    function withOrientationChange(WrappedComponent) {
      return /* @__PURE__ */ function(_React$Component) {
        _inherits(_class, _React$Component);
        function _class(props) {
          var _this;
          _classCallCheck(this, _class);
          _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
          _this.isEventListenerAdded = false;
          _this.handleOrientationChange = _this.handleOrientationChange.bind(_assertThisInitialized(_this));
          _this.onOrientationChange = _this.onOrientationChange.bind(_assertThisInitialized(_this));
          _this.onPageLoad = _this.onPageLoad.bind(_assertThisInitialized(_this));
          _this.state = {
            isLandscape: false,
            isPortrait: false
          };
          return _this;
        }
        _createClass(_class, [{
          key: "handleOrientationChange",
          value: function handleOrientationChange() {
            if (!this.isEventListenerAdded) {
              this.isEventListenerAdded = true;
            }
            var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
            this.setState({
              isPortrait: orientation === 0,
              isLandscape: orientation === 90
            });
          }
        }, {
          key: "onOrientationChange",
          value: function onOrientationChange() {
            this.handleOrientationChange();
          }
        }, {
          key: "onPageLoad",
          value: function onPageLoad() {
            this.handleOrientationChange();
          }
        }, {
          key: "componentDidMount",
          value: function componentDidMount() {
            if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== void 0 && isMobile2) {
              if (!this.isEventListenerAdded) {
                this.handleOrientationChange();
                window.addEventListener("load", this.onPageLoad, false);
              } else {
                window.removeEventListener("load", this.onPageLoad, false);
              }
              window.addEventListener("resize", this.onOrientationChange, false);
            }
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            window.removeEventListener("resize", this.onOrientationChange, false);
          }
        }, {
          key: "render",
          value: function render() {
            return React__default.createElement(WrappedComponent, _extends({}, this.props, {
              isLandscape: this.state.isLandscape,
              isPortrait: this.state.isPortrait
            }));
          }
        }]);
        return _class;
      }(React__default.Component);
    }
    function useMobileOrientation() {
      var _useState = React.useState(function() {
        var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
        return {
          isPortrait: orientation === 0,
          isLandscape: orientation === 90,
          orientation: orientation === 0 ? "portrait" : "landscape"
        };
      }), _useState2 = _slicedToArray(_useState, 2), state = _useState2[0], setState = _useState2[1];
      var handleOrientationChange = React.useCallback(function() {
        var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
        var next = {
          isPortrait: orientation === 0,
          isLandscape: orientation === 90,
          orientation: orientation === 0 ? "portrait" : "landscape"
        };
        state.orientation !== next.orientation && setState(next);
      }, [state.orientation]);
      React.useEffect(function() {
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== void 0 && isMobile2) {
          handleOrientationChange();
          window.addEventListener("load", handleOrientationChange, false);
          window.addEventListener("resize", handleOrientationChange, false);
        }
        return function() {
          window.removeEventListener("resize", handleOrientationChange, false);
          window.removeEventListener("load", handleOrientationChange, false);
        };
      }, [handleOrientationChange]);
      return state;
    }
    function useDeviceData(userAgent) {
      var hookUserAgent = userAgent ? userAgent : window.navigator.userAgent;
      return parseUserAgent(hookUserAgent);
    }
    function useDeviceSelectors(userAgent) {
      var hookUserAgent = userAgent ? userAgent : window.navigator.userAgent;
      var deviceData = useDeviceData(hookUserAgent);
      var selectors = buildSelectorsObject(deviceData);
      return [selectors, deviceData];
    }
    exports.AndroidView = AndroidView;
    exports.BrowserTypes = BrowserTypes;
    exports.BrowserView = BrowserView;
    exports.ConsoleView = ConsoleView;
    exports.CustomView = CustomView;
    exports.IEView = IEView;
    exports.IOSView = IOSView;
    exports.MobileOnlyView = MobileOnlyView;
    exports.MobileView = MobileView;
    exports.OsTypes = OsTypes;
    exports.SmartTVView = SmartTVView;
    exports.TabletView = TabletView;
    exports.WearableView = WearableView;
    exports.WinPhoneView = WinPhoneView;
    exports.browserName = browserName;
    exports.browserVersion = browserVersion;
    exports.deviceDetect = deviceDetect;
    exports.deviceType = deviceType;
    exports.engineName = engineName;
    exports.engineVersion = engineVersion;
    exports.fullBrowserVersion = fullBrowserVersion;
    exports.getSelectorsByUserAgent = getSelectorsByUserAgent;
    exports.getUA = getUA;
    exports.isAndroid = isAndroid;
    exports.isBrowser = isBrowser;
    exports.isChrome = isChrome;
    exports.isChromium = isChromium;
    exports.isConsole = isConsole;
    exports.isDesktop = isDesktop;
    exports.isEdge = isEdge;
    exports.isEdgeChromium = isEdgeChromium;
    exports.isElectron = isElectron;
    exports.isEmbedded = isEmbedded;
    exports.isFirefox = isFirefox;
    exports.isIE = isIE;
    exports.isIOS = isIOS;
    exports.isIOS13 = isIOS13;
    exports.isIPad13 = isIPad13;
    exports.isIPhone13 = isIPhone13;
    exports.isIPod13 = isIPod13;
    exports.isLegacyEdge = isLegacyEdge;
    exports.isMIUI = isMIUI;
    exports.isMacOs = isMacOs;
    exports.isMobile = isMobile2;
    exports.isMobileOnly = isMobileOnly;
    exports.isMobileSafari = isMobileSafari;
    exports.isOpera = isOpera;
    exports.isSafari = isSafari;
    exports.isSamsungBrowser = isSamsungBrowser;
    exports.isSmartTV = isSmartTV;
    exports.isTablet = isTablet;
    exports.isWearable = isWearable;
    exports.isWinPhone = isWinPhone;
    exports.isWindows = isWindows;
    exports.isYandex = isYandex;
    exports.mobileModel = mobileModel;
    exports.mobileVendor = mobileVendor;
    exports.osName = osName;
    exports.osVersion = osVersion;
    exports.parseUserAgent = parseUserAgent;
    exports.setUserAgent = setUserAgent;
    exports.useDeviceData = useDeviceData;
    exports.useDeviceSelectors = useDeviceSelectors;
    exports.useMobileOrientation = useMobileOrientation;
    exports.withOrientationChange = withOrientationChange;
  }
});

// css-bundle-update-plugin-ns:/Users/enhanceprinting/Desktop/sk_port_v3/node_modules/@remix-run/css-bundle/dist/esm/index.js
var cssBundleHref = false ? void 0 : void 0;

// app/root.jsx
var import_react_animated_cursor = __toESM(require_index_umd());
var import_react_device_detect = __toESM(require_lib());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: global_styles_default },
  { rel: "manifest", href: "/site.webmanifest" },
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      !import_react_device_detect.isMobile ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react_animated_cursor.default,
        {
          color: "255,255,255",
          innerSize: 5,
          outerSize: 50,
          innerScale: 1,
          outerScale: 3,
          outerAlpha: 1,
          outerStyle: {
            mixBlendMode: "exclusion"
          },
          trailingSpeed: 15
        },
        void 0,
        false,
        {
          fileName: "app/root.jsx",
          lineNumber: 35,
          columnNumber: 9
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@remix-run/css-bundle/dist/esm/index.js:
  (**
   * @remix-run/css-bundle v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=/build/root-UWDGYCIX.js.map
