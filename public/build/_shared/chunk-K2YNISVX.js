import {
  Link,
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-V3SLA63D.js";

// node_modules/lodash.throttle/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.throttle/index.js"(exports, module) {
    var FUNC_ERROR_TEXT = "Expected a function";
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var now = function() {
      return root.Date.now();
    };
    function debounce(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    function throttle(func, wait, options) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = throttle;
  }
});

// node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/prop-types/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js
var require_scrollAnimation_min = __commonJS({
  "node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _get = function get(_x, _x2, _x3) {
      var _again = true;
      _function:
        while (_again) {
          var object = _x, property = _x2, receiver = _x3;
          _again = false;
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              _x = parent;
              _x2 = property;
              _x3 = receiver;
              _again = true;
              desc = parent = void 0;
              continue _function;
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        }
    };
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _lodashThrottle = require_lodash();
    var _lodashThrottle2 = _interopRequireDefault(_lodashThrottle);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var ScrollAnimation2 = function(_Component) {
      _inherits(ScrollAnimation3, _Component);
      function ScrollAnimation3(props) {
        _classCallCheck(this, ScrollAnimation3);
        _get(Object.getPrototypeOf(ScrollAnimation3.prototype), "constructor", this).call(this, props);
        this.serverSide = typeof window === "undefined";
        this.listener = (0, _lodashThrottle2["default"])(this.handleScroll.bind(this), 50);
        this.visibility = {
          onScreen: false,
          inViewport: false
        };
        this.state = {
          classes: "animated",
          style: {
            animationDuration: this.props.duration + "s",
            opacity: this.props.initiallyVisible ? 1 : 0
          }
        };
      }
      _createClass(ScrollAnimation3, [{
        key: "getElementTop",
        value: function getElementTop(elm) {
          var yPos = 0;
          while (elm && elm.offsetTop !== void 0 && elm.clientTop !== void 0) {
            yPos += elm.offsetTop + elm.clientTop;
            elm = elm.offsetParent;
          }
          return yPos;
        }
      }, {
        key: "getScrollPos",
        value: function getScrollPos() {
          if (this.scrollableParent.pageYOffset !== void 0) {
            return this.scrollableParent.pageYOffset;
          }
          return this.scrollableParent.scrollTop;
        }
      }, {
        key: "getScrollableParentHeight",
        value: function getScrollableParentHeight() {
          if (this.scrollableParent.innerHeight !== void 0) {
            return this.scrollableParent.innerHeight;
          }
          return this.scrollableParent.clientHeight;
        }
      }, {
        key: "getViewportTop",
        value: function getViewportTop() {
          return this.getScrollPos() + this.props.offset;
        }
      }, {
        key: "getViewportBottom",
        value: function getViewportBottom() {
          return this.getScrollPos() + this.getScrollableParentHeight() - this.props.offset;
        }
      }, {
        key: "isInViewport",
        value: function isInViewport(y) {
          return y >= this.getViewportTop() && y <= this.getViewportBottom();
        }
      }, {
        key: "isAboveViewport",
        value: function isAboveViewport(y) {
          return y < this.getViewportTop();
        }
      }, {
        key: "isBelowViewport",
        value: function isBelowViewport(y) {
          return y > this.getViewportBottom();
        }
      }, {
        key: "inViewport",
        value: function inViewport(elementTop, elementBottom) {
          return this.isInViewport(elementTop) || this.isInViewport(elementBottom) || this.isAboveViewport(elementTop) && this.isBelowViewport(elementBottom);
        }
      }, {
        key: "onScreen",
        value: function onScreen(elementTop, elementBottom) {
          return !this.isAboveScreen(elementBottom) && !this.isBelowScreen(elementTop);
        }
      }, {
        key: "isAboveScreen",
        value: function isAboveScreen(y) {
          return y < this.getScrollPos();
        }
      }, {
        key: "isBelowScreen",
        value: function isBelowScreen(y) {
          return y > this.getScrollPos() + this.getScrollableParentHeight();
        }
      }, {
        key: "getVisibility",
        value: function getVisibility() {
          var elementTop = this.getElementTop(this.node) - this.getElementTop(this.scrollableParent);
          var elementBottom = elementTop + this.node.clientHeight;
          return {
            inViewport: this.inViewport(elementTop, elementBottom),
            onScreen: this.onScreen(elementTop, elementBottom)
          };
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          if (!this.serverSide) {
            var parentSelector = this.props.scrollableParentSelector;
            this.scrollableParent = parentSelector ? document.querySelector(parentSelector) : window;
            if (this.scrollableParent && this.scrollableParent.addEventListener) {
              this.scrollableParent.addEventListener("scroll", this.listener);
            } else {
              console.warn("Cannot find element by locator: " + this.props.scrollableParentSelector);
            }
            if (this.props.animatePreScroll) {
              this.handleScroll();
            }
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          clearTimeout(this.delayedAnimationTimeout);
          clearTimeout(this.callbackTimeout);
          this.listener.cancel();
          if (window && window.removeEventListener) {
            window.removeEventListener("scroll", this.listener);
          }
        }
      }, {
        key: "visibilityHasChanged",
        value: function visibilityHasChanged(previousVis, currentVis) {
          return previousVis.inViewport !== currentVis.inViewport || previousVis.onScreen !== currentVis.onScreen;
        }
      }, {
        key: "animate",
        value: function animate(animation, callback) {
          var _this = this;
          this.delayedAnimationTimeout = setTimeout(function() {
            _this.animating = true;
            _this.setState({
              classes: "animated " + animation,
              style: {
                animationDuration: _this.props.duration + "s"
              }
            });
            _this.callbackTimeout = setTimeout(callback, _this.props.duration * 1e3);
          }, this.props.delay);
        }
      }, {
        key: "animateIn",
        value: function animateIn(callback) {
          var _this2 = this;
          this.animate(this.props.animateIn, function() {
            if (!_this2.props.animateOnce) {
              _this2.setState({
                style: {
                  animationDuration: _this2.props.duration + "s",
                  opacity: 1
                }
              });
              _this2.animating = false;
            }
            var vis = _this2.getVisibility();
            if (callback) {
              callback(vis);
            }
          });
        }
      }, {
        key: "animateOut",
        value: function animateOut(callback) {
          var _this3 = this;
          this.animate(this.props.animateOut, function() {
            _this3.setState({
              classes: "animated",
              style: {
                animationDuration: _this3.props.duration + "s",
                opacity: 0
              }
            });
            var vis = _this3.getVisibility();
            if (vis.inViewport && _this3.props.animateIn) {
              _this3.animateIn(_this3.props.afterAnimatedIn);
            } else {
              _this3.animating = false;
            }
            if (callback) {
              callback(vis);
            }
          });
        }
      }, {
        key: "handleScroll",
        value: function handleScroll() {
          if (!this.animating) {
            var currentVis = this.getVisibility();
            if (this.visibilityHasChanged(this.visibility, currentVis)) {
              clearTimeout(this.delayedAnimationTimeout);
              if (!currentVis.onScreen) {
                this.setState({
                  classes: "animated",
                  style: {
                    animationDuration: this.props.duration + "s",
                    opacity: this.props.initiallyVisible ? 1 : 0
                  }
                });
              } else if (currentVis.inViewport && this.props.animateIn) {
                this.animateIn(this.props.afterAnimatedIn);
              } else if (currentVis.onScreen && this.visibility.inViewport && this.props.animateOut && this.state.style.opacity === 1) {
                this.animateOut(this.props.afterAnimatedOut);
              }
              this.visibility = currentVis;
            }
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this4 = this;
          var classes = this.props.className ? this.props.className + " " + this.state.classes : this.state.classes;
          return _react2["default"].createElement(
            "div",
            { ref: function(node) {
              _this4.node = node;
            }, className: classes, style: Object.assign({}, this.state.style, this.props.style) },
            this.props.children
          );
        }
      }]);
      return ScrollAnimation3;
    }(_react.Component);
    exports["default"] = ScrollAnimation2;
    ScrollAnimation2.defaultProps = {
      offset: 150,
      duration: 1,
      initiallyVisible: false,
      delay: 0,
      animateOnce: false,
      animatePreScroll: true
    };
    ScrollAnimation2.propTypes = {
      animateIn: _propTypes2["default"].string,
      animateOut: _propTypes2["default"].string,
      offset: _propTypes2["default"].number,
      duration: _propTypes2["default"].number,
      delay: _propTypes2["default"].number,
      initiallyVisible: _propTypes2["default"].bool,
      animateOnce: _propTypes2["default"].bool,
      style: _propTypes2["default"].object,
      scrollableParentSelector: _propTypes2["default"].string,
      className: _propTypes2["default"].string,
      animatePreScroll: _propTypes2["default"].bool
    };
    module.exports = exports["default"];
  }
});

// app/components/maskedImage.component.jsx
var React = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var SvgComponent = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    xmlSpace: "preserve",
    style: {
      enableBackground: "new 0 0 189.8 164.5"
    },
    viewBox: "0 0 189.8 164.5",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "path",
        {
          id: "a",
          d: "M186.2 50.4c.3-2.5 2.7-3.5 3.7-5.5-.7-.5-1-.8-.9-1.6-.9 1.2-1.9 3.2-3.1 4.1l-1-.8c.6-1.4 2.5-2.7 3.1-4.1-.3-.2-1-.8-1.3-1s.1-.8.6-1.4c-.4.6-1.3 1.7-1.8 2.3-.3-.2-1-.8-1.3-1s.1-.8.6-1.4c-.7-.5-.9-1.6-1.6-1.2l-1.3 1.7c1.4-2.6.7-5-.3-5.7-.1.8-1.1.1-1.2.9.3-2.5.3-5.2-1.8-3.2-3.1 3.7-6.1 7.5-9.1 11.3-.3-.3-.9-.9-1.1-1.2-.3-.3 0-.6.4-.9-.3.3-1 .9-1.3 1.2-.3-.3-.9-.9-1.1-1.2-.3-.3 0-.6.4-.9-.6-.6-.8-1.5-1.4-1.5l-1 1c1-1.6.3-3.7-.6-4.6-.1.6-.9-.3-1 .3.1-1.1.1-2.4-.3-3 2.7-2.7 5.4-5.5 5.9-7.9l-3.4 3.8c2.5-4.5 6.9-7.6 9.8-12-.7-.5-1-.8-.2-2.4-2.1 2.8-5.1 7-7.7 9.2l-.9-.8c1.9-2.8 5.9-6.1 7.6-9.2-.3-.2-1-.8-1.3-1-.3-.2.4-1.2 1.2-2.4-1.1 1.5-2.7 3.6-3.6 4.8-.3-.3-1-.8-1.3-1-.3-.3.7-1.6 1.7-2.9-.6-.5-.3-2.3-1.6-1.2-1 1.3-2 2.6-3 3.8 1.9-2.6 2.9-5 3.2-6.7.3-1.7.1-2.8-.4-3.2-.5 1.5-1.6.8-2.1 2.3.9-2.2 1.5-4.5 1.5-5.6 0-.6-.2-.9-.6-.6-.4.2-.9.8-1.9 1.9-3.7 5.2-8.3 10.2-13.3 15.5-2 2.1-3.9 4.2-5.9 6.3.2-.5.2-1 .1-1.5l-1.5 1.8c.5-2.5 2.9-3.5 4-5.6-.6-.5-1-.8-.8-1.6-.9 1.2-2 3.2-3.3 4.1l-1-.8c.6-1.4 2.7-2.7 3.3-4.1-.3-.2-1-.8-1.3-1s.1-.8.6-1.4c-.4.6-1.4 1.8-1.8 2.4-.3-.3-1-.8-1.3-1-.3-.3.1-.8.6-1.4-.6-.5-.9-1.6-1.6-1.3l-1.3 1.7c1.5-2.5.7-4.9-.3-5.7-.1.8-1.1.1-1.2.9.3-2.5.2-5.1-1.8-3.1-.2.3-.5.5-.7.8h-.2c-.4.1-1.1.6-2 1.7-1.5 1.7-3.1 3.4-4.8 5.1 1.1-3.1 1.6-5.8-1.5-2.7-3.6 4.1-6.9 8.3-10.1 12.6-4 3.1-8.2 6.2-12.6 9.4.3-.4.5-.8.6-1.2l-2.8 2c2.1-3 5.6-4 8.2-6.4-.5-.7-.7-1 0-2-1.9 1.3-4.4 3.7-6.6 4.7l-.7-1c1.6-1.7 4.9-3 6.6-4.7-.2-.3-.7-1-1-1.4-.2-.3.7-1 1.7-1.7-.9.7-2.8 2-3.8 2.7-.2-.3-.7-1-1-1.4s.7-1 1.7-1.7c-.5-.7 0-2-1.2-1.7l-2.8 2c3.6-3 4.3-6.1 3.6-7.1-.7 1-1.4 0-2.2 1 2.2-3 4.1-6.4 0-4.1-5.6 3.7-11.2 7.5-16.6 11.5.2-.8.2-1.3-.1-1.5l.1-.1c.8-1.3 3.6-1.7 2.9-3.9l-1 1c.2-1.9 2.1-2 2.8-3.3-.6-.6-.9-.9-.8-1.5-.7.7-1.4 1.9-2.4 2.3l-.9-.9c.4-1 2-1.3 2.4-2.3l-1.2-1.2c-.3-.3.1-.6.4-.9l-1.3 1.3-1.2-1.2c-.3-.3.1-.6.4-.9-.6-.6-.8-1.5-1.4-1.5l-1 1c1.1-1.6.3-3.7-.6-4.6 0 .6-.9-.3-.9.3.1-1.9 0-4-1.7-3-6 4.7-11 9.4-15.9 14.2-.1-.2-.3-.3-.6-.3l-1.8 1.2c2.2-2 2.3-4.6 1.6-5.6-.4.8-1.1-.3-1.5.5 1.1-2.3 2-4.9-.7-3.6C42.8 21.5 21.5 37.8.4 53c-1 1.2.1 1.5.5 2.1 2.5-1.7 4.7-3.7 7-4.2.6-.4.3 1.8 1.4 2.1.6-.4 1.9-1.2 2.5-1.7 1.3.6.8 2.5 2.1 3.1 1.3.6 3.3-1.7 4.4-1.5 2.3-.6-.5 1.9-2.4 3.1 1.1.3-1.2.8-.8 1.5.9 1.4 1.9 2.8 5 2.1.9-.1.9 1.4 1.4 2.1 7.4-5 15.4-10.4 21.9-16.8 3.6-3.5 8.6-6.2 13.1-9.2.5.7.8 1.6 1.6 2 1.2.7 2.1-1.2 3-.9 1.6-.3.1 1.6-1 2.5.9.3-.7.6-.2 1.2.8 1 1.6 1.9 2.9 2.2-2.3 1.9-4.6 3.9-6.9 5.8-15.9 13.9-31 28.3-45.5 42.8-1.4 1.9 0 1.7.6 2.3 3.4-3.2 6.4-6.8 9.6-8.6.9-.8.3 2 1.7 1.8.9-.8 2.5-2.4 3.4-3.2 1.7.1.8 2.6 2.5 2.7 1.7.1 4.5-3.6 6-3.8 3.1-1.7-.9 2.5-3.4 4.8 1.4-.2-1.7 1.6-1.1 2.2l.4.4c-4.6 5.2-9.3 10.1-14.4 14.6-.6.8-.6 1.2-.4 1.5.2.3.7.4 1 .8 1.5-1.3 2.9-2.7 4.3-3.9s2.7-2.4 4.1-3.1c.7-.7.4 1.9 1.7 1.8.7-.7 2.2-2.1 2.9-2.8 1.6.2 1 2.5 2.6 2.6 1.6.1 3.9-3.4 5.2-3.6 1.4-.9 1.2-.3.5.8s-2.1 2.7-3.2 3.8c1.3-.2-1.5 1.5-.9 2.1.3.3.7.7 1.1 1-2.2 2.6-4.5 5.1-6.9 7.6-4.7 4.9-9.5 9.6-14.7 13.7-.5.6-.8 1-.9 1.3-.1.3-.1.5 0 .6.2.3.8.4 1 .7 2.4-1.9 4.8-3.9 6.9-5.8 1.1-1 2.2-1.8 3.2-2.7 1-.9 2-1.7 3-2.3 1.1-1.1 0 2.3 1.7 1.8 1.2-1.1 3.4-3.3 4.5-4.5 2-.3.7 2.9 2.7 2.6 2.1-.3 5.9-5.6 7.6-6.3 1.9-1.6 1.6-.7.4.9-1.2 1.6-3.4 4.1-5.1 5.9 1.8-.6-2.3 2.3-1.7 2.9s1.2 1.2 2.3 1.1c1.1-.1 2.9-.7 5.6-2.8 1.4-.9 1.2 1.1 1.8 1.7 6.7-7.1 13-14.8 19.2-22.4.5 0 .1 2.1 1.2 2.1.9-.7 2.6-2 3.5-2.7 1.7.2.7 2.6 2.4 2.9 1.7.2 4.6-3.4 6-3.7.3-.2.5-.3.7-.3-10.3 11.6-20.6 23.1-30.7 34.6-2 2.7-.2 2.1.4 2.6 4.5-4.9 8.7-10.1 12.7-13.2 1.1-1.2.1 2.3 1.8 1.7 1.1-1.2 3.4-3.7 4.5-4.9 2-.4.7 2.9 2.8 2.5.7-.1 1.5-.8 2.4-1.6-1.4 1.7-2.8 3.3-4.2 4.9-.8 1.5.3 1.4 1 2 1.4-1.5 2.7-3.1 4-4.4-.7.8-2.2 2.2-1.8 2.6 1.2 1.1 2.4 2.2 7.9-1.8 1.4-.9 1.2 1.1 1.8 1.7 1.6-1.7 3.1-3.4 4.7-5.1.2-.2.5-.3.7-.3 2.2-1.3-.1 2.1-1.8 3.9 1.2-.1-1.1 1.2-.5 1.8 1.1 1 2.2 2 4.7 1-5.7 7.9-11.4 15.8-17.1 23.6-1.3 2.4.2 1.8.8 2.3 3.2-4.2 6.1-8.7 9.1-11.4.8-1.1.5 2.1 2 1.5.8-1.1 2.4-3.2 3.2-4.2 1.8-.3 1.2 2.6 3 2.2s4.3-5 5.8-5.6c3.1-2.7-.6 2.9-3 6 1.5-.6-1.6 2.1-.9 2.6 1.3 1 2.6 2 6.8-1.5 1.1-.8 1.3 1 2 1.5 2.5-3.3 5.1-6.7 7.7-10.2.3.2 1 .7 1.3.9.3.2 0 .7-.4 1.2.3.2.5.5.7.8-5.9 7.4-11.7 15.1-16.7 23.6-.4 1-.2 1.3.1 1.5.3.2.8.2 1.1.4 2.1-3.4 4-7 6.4-8.9.6-.8.8 1.8 2 1.4.6-.8 1.7-2.4 2.3-3.1 1.6 0 1.4 2.3 3 2.2 1.6 0 3.2-3.5 4.5-3.7.2-.1.4-.2.5-.3l-11.1 13.8c-.8 1.6.4 1.4 1 2 2.2-2.6 4.1-5.4 6.4-6.8.6-.6.7 1.7 1.9 1.6.6-.6 1.7-1.9 2.2-2.6 1.5.2 1.3 2.3 2.8 2.4 1.5.2 3.1-3 4.3-3.1 2.3-1.4-.2 2.1-1.8 4 1.2-.1-1.1 1.3-.5 1.8 1.3 1.1 2.5 2.2 5.7.4.9-.4 1.3 1.1 1.9 1.6 6.7-7.8 13.8-16.3 19.1-25.2 4.5-7.3 12.4-14.2 16.7-21.6 1.3-2.2 5.3-4.5 4.7-7.1l-1.6 2c.6-2.8 3.2-4 4.5-6.2-.6-.5-1-.8-.8-1.7-1.1 1.3-2.4 3.6-3.8 4.6l-1-.8c.8-1.6 3-3.1 3.8-4.6-.3-.3-1-.8-1.3-1-.3-.3.2-.9.7-1.6-.5.7-1.6 2-2.1 2.7-.3-.3-1-.8-1.3-1-.3-.3.2-.9.7-1.6-.6-.5-.8-1.7-1.6-1.3l-1.6 2c1.5-2.4 1.4-4.7.7-5.8 0-.3 0-.6-.1-.8l-.2.4-.1-.1c-.1.5-.4.5-.7.5 1-2.2 2.8-3.8 3.8-6-.7-.4-1.1-.6-.9-1.7-.9 1.5-1.9 3.8-3.1 5.2 0-1-.2-1.5-1-1.1.9-1.6 2.5-3.2 3-4.7-.3-.2-.8-.5-1.2-.7 3-4.1 5.8-8.3 8.1-12.7 3.5-6.5 10.4-12.4 13.7-19 1-2 4.6-3.9 3.8-6.3l-1.1 1.9z"
        },
        void 0,
        false,
        {
          fileName: "app/components/maskedImage.component.jsx",
          lineNumber: 15,
          columnNumber: 7
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/maskedImage.component.jsx",
        lineNumber: 14,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("clipPath", { id: "b", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "use",
        {
          xlinkHref: "#a",
          style: {
            overflow: "visible"
          }
        },
        void 0,
        false,
        {
          fileName: "app/components/maskedImage.component.jsx",
          lineNumber: 21,
          columnNumber: 7
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/maskedImage.component.jsx",
        lineNumber: 20,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "g",
        {
          style: {
            clipPath: "url(#b)"
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "image",
            {
              xlinkHref: props.image,
              width: 959,
              height: 679,
              style: {
                overflow: "visible"
              },
              transform: "matrix(.25 0 0 .25 -24.96 -2.615)"
            },
            void 0,
            false,
            {
              fileName: "app/components/maskedImage.component.jsx",
              lineNumber: 33,
              columnNumber: 7
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/maskedImage.component.jsx",
          lineNumber: 28,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  true,
  {
    fileName: "app/components/maskedImage.component.jsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
);
function MaskedImage(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: props.classprop, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SvgComponent, { image: props.image }, void 0, false, {
    fileName: "app/components/maskedImage.component.jsx",
    lineNumber: 49,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/maskedImage.component.jsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

// app/styles/menu.styles.css
var menu_styles_default = "/build/_assets/menu.styles-LCQ5FJFK.css";

// app/components/mainMenu.component.jsx
var import_react = __toESM(require_react());

// app/components/logoBleedOfflSVG.component.jsx
var React2 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var BleedLogo = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      id: props.logoID,
      "data-name": props.logoID,
      viewBox: "0 0 294.78 30.49",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("style", { children: `.cls-1{fill:${props.color}}` }, void 0, false, {
          fileName: "app/components/logoBleedOfflSVG.component.jsx",
          lineNumber: 12,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/components/logoBleedOfflSVG.component.jsx",
          lineNumber: 11,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("g", { id: "Layer_1-2", "data-name": "Layer 1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "path",
            {
              d: "M119.46 7.51c.01-2.86.26-5.36.74-7.51h-9.38c.3 1.37.45 3.95.47 7.73v22.76h12.17l1.5-6.95-5.5.31V7.51ZM151.87.16c-.67.07-1.3.3-1.9.67-.85.55-1.44 1.53-1.76 2.95-.12.52-.23 1.41-.34 2.68s-.16 2.38-.16 3.33v9.72c-.03 3.68.17 6.31.6 7.91.36 1.43 1.17 2.35 2.43 2.75.6.19 2.28.31 5.05.34h7.66v-6.63h-7.57v-5.29h7.57v-6.63h-7.57V6.67h7.57V0h-7.66c-1.89.03-3.2.08-3.93.16ZM186.92 30.49h8.18V18.56h5.16v-6.63h-5.16v-5.3h5.16V0h-13.34v30.49zM206.37.16c-.67.07-1.3.3-1.9.67-.85.55-1.44 1.53-1.76 2.95-.12.52-.23 1.41-.34 2.68s-.16 2.38-.16 3.33v9.72c-.03 3.68.17 6.31.6 7.91.36 1.43 1.17 2.35 2.43 2.75.6.19 2.28.31 5.05.34h7.66v-6.63h-7.57v-5.29h7.57v-6.63h-7.57V6.67h7.57V0h-7.66c-1.89.03-3.2.08-3.93.16ZM.98 21.9c-.48-.27-.8-.77-.98-1.46v4.87h6.94v-3.02H3.39c-1.09 0-1.89-.13-2.41-.4ZM108.64 11.24c.12-.49.18-1.42.18-2.79v-3.6c.01-1.55.05-2.52.11-2.93.06-.51.24-1.15.54-1.92h-8.13c-.46 1.09-.69 2.42-.69 4v3.48c0 1.01-.02 1.68-.07 2.01-.09.98-.33 1.66-.71 2.03-.28.25-.77.39-1.47.4h-1.21V0H7.62C3.41 0 0 3.41 0 7.62V9.7c.25-.86.72-1.48 1.4-1.86.58-.3 1.67-.45 3.26-.45h8.98v5.52H7.03v2.77H9.6c2.13-.03 3.54.44 4.24 1.41.34.57.54 1.53.58 2.9.01.36.02 1.07.02 2.14v3.26c0 .33-.03.8-.1 1.41-.07.61-.13 1.06-.19 1.36-.18.85-.69 1.54-1.54 2.08-.15.09-.35.17-.56.24h7.42-.02c-.66-.23-1.17-.6-1.54-1.11-.64-.91-.94-2.26-.89-4.04V13.8h-1.97V8.28h1.97V2.75h7.3v5.54h3.46v5.52h-3.46v9.87c0 .51.07.87.22 1.09.22.34.66.52 1.32.54h1.92v5.18h3.74c-.56-.16-1-.38-1.32-.66-.55-.55-.86-1.56-.94-3.04-.01-.39-.02-1.14-.02-2.26v-12.4c.01-1.76.38-2.99 1.09-3.69.51-.49 1.37-.8 2.59-.94.63-.07 1.39-.11 2.3-.11h5.76c2.52.03 4.18.39 4.98 1.07.64.52 1 1.29 1.07 2.3.01.27.02.82.02 1.65v9.63H36.51v1.23c0 .86.19 1.42.56 1.68.34.24 1.02.36 2.03.36h7.95v5.18h6.65c-1.53-1.81-2.85-4.18-3.96-7.12-.71-1.82-1.09-4.3-1.14-7.46V7.4h7.28v8.47c0 1.98.1 3.66.31 5.03s.66 2.67 1.34 3.89c.67-1.24 1.11-2.53 1.32-3.89.21-1.37.31-3.05.31-5.03V7.4h7.28v8.51c-.06 3.43-.55 6.21-1.47 8.35-1.09 2.56-2.3 4.63-3.64 6.23h9.01c-.56-.16-1-.38-1.32-.66-.55-.55-.86-1.56-.94-3.04-.01-.39-.02-1.14-.02-2.26v-12.4c.01-1.76.38-2.99 1.09-3.69.51-.49 1.37-.8 2.59-.94.63-.07 1.39-.11 2.3-.11h5.76c2.52.03 4.18.39 4.98 1.07.64.52 1 1.29 1.07 2.3.01.27.02.82.02 1.65v9.63H75.33v1.23c0 .86.19 1.42.56 1.68.34.24 1.02.36 2.03.36h7.95v5.18h11.24V18.56h1.07c1.19.01 1.94.63 2.26 1.83.09.31.13.97.13 1.97v2.79c0 1.28.06 2.32.18 3.13.12.71.39 1.45.8 2.21h7.84c-.25-.82-.42-1.56-.51-2.23-.09-.73-.13-1.82-.13-3.26v-4.27c0-1.67-.3-2.93-.89-3.78-.74-.98-1.97-1.6-3.69-1.85-.15-.01-.47-.07-.96-.16 1.06-.21 1.81-.37 2.26-.49 1.68-.54 2.72-1.61 3.11-3.22Z",
              className: "cls-1"
            },
            void 0,
            false,
            {
              fileName: "app/components/logoBleedOfflSVG.component.jsx",
              lineNumber: 15,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "path",
            {
              d: "M78.32 13.79c-.31-.57-.74-.85-1.3-.85-1.09 0-1.63.85-1.63 2.55v2.12h3.26v-2.12c0-.74-.11-1.31-.34-1.7ZM39.47 13.79c-.31-.57-.74-.85-1.3-.85-1.09 0-1.63.85-1.63 2.55v2.12h3.26v-2.12c0-.74-.11-1.31-.34-1.7ZM145.52 6.75c-.4-2.86-1.4-4.77-2.99-5.72-1.1-.67-2.71-1.01-4.83-1.03h-3.69c-2.11.01-3.72.36-4.83 1.03-1.59.95-2.6 2.86-3.02 5.72-.16 1.43-.25 3.31-.25 5.63v5.72c0 2.32.08 4.2.25 5.63.42 2.87 1.42 4.79 3.02 5.74 1.1.67 2.71 1.01 4.83 1.03h3.69c2.11-.01 3.72-.36 4.83-1.03 1.59-.95 2.59-2.87 2.99-5.74.18-1.43.27-3.31.27-5.63v-5.72c0-2.32-.09-4.2-.27-5.63Zm-8.07 15.02c0 .73-.13 1.28-.38 1.65-.36.5-.81.76-1.36.76-.47 0-.89-.2-1.25-.6-.34-.39-.51-.99-.51-1.8V8.67c0-.73.13-1.27.38-1.62.36-.5.82-.76 1.38-.76.46 0 .87.2 1.22.6.34.37.51.96.51 1.78v13.11ZM185.28 4.4c-.19-1.67-.68-2.84-1.45-3.53-.66-.55-2.32-.84-5-.87h-13.22v30.49h8.18V18.56h5.7c1.07 0 1.76 0 2.06-.02 1.36-.1 2.3-.57 2.84-1.39.64-.91 1.01-3.21 1.12-6.9V7.93c0-1.34-.07-2.52-.2-3.53Zm-8.85 6.99c-.27.31-.79.47-1.58.47h-1.36v-5.3h1.16c.91 0 1.5.21 1.78.62.36.49.53 1.2.53 2.14s-.18 1.65-.53 2.07ZM239.89 25.38v-4.71c.07-2.25-.54-3.83-1.83-4.74-.55-.36-1.43-.71-2.64-1.07 1.18-.13 2.04-.39 2.59-.78.95-.7 1.54-1.82 1.76-3.35.07-.57.11-1.53.11-2.88V5.88c-.01-1.37-.19-2.53-.54-3.48-.45-1.33-1.41-2.08-2.88-2.26-.73-.09-2.02-.13-3.86-.13h-12.51V30.5h8.18V18.57h1.03c.73 0 1.3.17 1.72.51.45.39.68 1.12.69 2.21v4.07c-.01 2.13.19 3.84.63 5.14h8.2c-.42-1.33-.63-3.03-.65-5.12Zm-9.15-13.94c-.27.28-.86.42-1.78.42h-1.16v-5.3h1.16c.76 0 1.28.13 1.58.38.49.43.73 1.19.73 2.27s-.18 1.85-.53 2.23ZM246.3 0h48.47v30.49H246.3z",
              className: "cls-1"
            },
            void 0,
            false,
            {
              fileName: "app/components/logoBleedOfflSVG.component.jsx",
              lineNumber: 19,
              columnNumber: 7
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/logoBleedOfflSVG.component.jsx",
          lineNumber: 14,
          columnNumber: 5
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/logoBleedOfflSVG.component.jsx",
      lineNumber: 4,
      columnNumber: 3
    },
    this
  );
};
var logoBleedOfflSVG_component_default = BleedLogo;

// app/components/mainMenu.component.jsx
var import_react_animate_on_scroll = __toESM(require_scrollAnimation_min());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var menuItems = [
  {
    name: "branding & logos",
    link: "/branding",
    image: "/images/brandImages/rolling/RollingRest_Logo.webp"
  },
  {
    name: "print design",
    link: "/print",
    image: "/images/printImages/EliteEstheticianBooth.webp"
  },
  {
    name: "playground",
    link: "/spec",
    image: "/images/specImages/coldstone/coldstone_Sketches.webp"
  },
  {
    name: "web design",
    link: "/web",
    image: "/images/HoodGuyMockup copy.webp"
  },
  {
    name: "about me",
    link: "/about",
    image: "/images/ContactBanner.png"
  }
];
function newArray(linkName) {
  var newPages = [];
  menuItems.forEach((element) => {
    if (element.link != linkName) {
      newPages.push(element);
    }
  });
  return newPages;
}
function getName(linkName) {
  var page = [];
  menuItems.forEach((element) => {
    if (element.link === linkName) {
      page = element;
    }
  });
  return page;
}
function MainMenu(props) {
  const [image, setImage] = (0, import_react.useState)("/images/ContactBanner.png");
  const [hoveredItem, setHovered] = (0, import_react.useState)("");
  const scrolling = props.scrolling;
  const page = String("/" + props.page);
  const newPages = newArray(page);
  function changeHover(newItem) {
    setHovered(newItem.name);
    setImage(newItem.image);
  }
  function unsetHover() {
    setHovered("");
  }
  const currentElement = getName(page);
  const onReopen = props.onReopen;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "menuBackground", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(logoBleedOfflSVG_component_default, { className: "logoHeading", color: "#e05210", logoID: "logoHead" }, void 0, false, {
      fileName: "app/components/mainMenu.component.jsx",
      lineNumber: 77,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/components/mainMenu.component.jsx",
      lineNumber: 77,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/mainMenu.component.jsx",
      lineNumber: 78,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      MaskedImage,
      {
        classprop: "mainMenuImage",
        image,
        alt: "Branding"
      },
      void 0,
      false,
      {
        fileName: "app/components/mainMenu.component.jsx",
        lineNumber: 79,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "menuList", children: [
      scrolling && props.page && props.page != "/" ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bounding", onMouseEnter: () => changeHover(currentElement), onMouseLeave: unsetHover, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "/images/icon_SK.svg", alt: "highlight", className: hoveredItem === currentElement.name ? `highlightImage` : `highlightImage offImage` }, void 0, false, {
          fileName: "app/components/mainMenu.component.jsx",
          lineNumber: 88,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "div",
          {
            className: hoveredItem === currentElement.name ? `menuItem active` : `menuItem`,
            onClick: onReopen,
            children: currentElement
          },
          void 0,
          false,
          {
            fileName: "app/components/mainMenu.component.jsx",
            lineNumber: 91,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/mainMenu.component.jsx",
        lineNumber: 87,
        columnNumber: 9
      }, this) : props.page && props.page != "/" ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "div",
        {
          className: "bounding",
          onMouseEnter: () => changeHover(currentElement),
          onMouseLeave: unsetHover,
          onClick: onReopen,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "/images/icon_SK.svg", alt: "highlight", className: hoveredItem === currentElement.name ? `highlightImage` : `highlightImage offImage` }, void 0, false, {
              fileName: "app/components/mainMenu.component.jsx",
              lineNumber: 105,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "div",
              {
                className: hoveredItem === currentElement.name ? `menuItem active` : `menuItem`,
                children: currentElement.name
              },
              void 0,
              false,
              {
                fileName: "app/components/mainMenu.component.jsx",
                lineNumber: 108,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/mainMenu.component.jsx",
          lineNumber: 99,
          columnNumber: 9
        },
        this
      ) : "",
      scrolling ? newPages.map(
        (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_animate_on_scroll.default, { animateIn: "slideInLeft", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bounding", onMouseEnter: () => changeHover(item), onMouseLeave: unsetHover, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "/images/icon_SK.svg", alt: "highlight", className: hoveredItem === item.name ? `highlightImage` : `highlightImage offImage` }, void 0, false, {
            fileName: "app/components/mainMenu.component.jsx",
            lineNumber: 120,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            Link,
            {
              to: item.link,
              className: hoveredItem === item.name ? `menuItem active` : `menuItem`,
              children: item.name
            },
            void 0,
            false,
            {
              fileName: "app/components/mainMenu.component.jsx",
              lineNumber: 123,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/mainMenu.component.jsx",
          lineNumber: 119,
          columnNumber: 11
        }, this) }, item.name, false, {
          fileName: "app/components/mainMenu.component.jsx",
          lineNumber: 118,
          columnNumber: 9
        }, this)
      ) : newPages.map(
        (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bounding", onMouseEnter: () => changeHover(item), onMouseLeave: unsetHover, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "/images/icon_SK.svg", alt: "highlight", className: hoveredItem === item.name ? `highlightImage` : `highlightImage offImage` }, void 0, false, {
            fileName: "app/components/mainMenu.component.jsx",
            lineNumber: 134,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            Link,
            {
              to: item.link,
              className: hoveredItem === item.name ? `menuItem active` : `menuItem`,
              children: item.name
            },
            void 0,
            false,
            {
              fileName: "app/components/mainMenu.component.jsx",
              lineNumber: 137,
              columnNumber: 13
            },
            this
          )
        ] }, item.name, true, {
          fileName: "app/components/mainMenu.component.jsx",
          lineNumber: 133,
          columnNumber: 9
        }, this)
      )
    ] }, void 0, true, {
      fileName: "app/components/mainMenu.component.jsx",
      lineNumber: 84,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/mainMenu.component.jsx",
    lineNumber: 76,
    columnNumber: 5
  }, this);
}
var links = () => [
  { rel: "stylesheet", href: menu_styles_default }
];

export {
  logoBleedOfflSVG_component_default,
  require_scrollAnimation_min,
  menu_styles_default,
  MainMenu,
  links
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=/build/_shared/chunk-K2YNISVX.js.map
