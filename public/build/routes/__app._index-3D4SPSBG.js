import "/build/_shared/chunk-A6V6MQBL.js";
import {
  landing_styles_default
} from "/build/_shared/chunk-L6ZX24UO.js";
import {
  progressiveImage_component_default
} from "/build/_shared/chunk-AYGQ7JC7.js";
import {
  MainMenu,
  links,
  require_scrollAnimation_min
} from "/build/_shared/chunk-RCD6BM7U.js";
import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-SYL4ZOYI.js";

// node_modules/bezier-easing/src/index.js
var require_src = __commonJS({
  "node_modules/bezier-easing/src/index.js"(exports, module) {
    var NEWTON_ITERATIONS = 4;
    var NEWTON_MIN_SLOPE = 1e-3;
    var SUBDIVISION_PRECISION = 1e-7;
    var SUBDIVISION_MAX_ITERATIONS = 10;
    var kSplineTableSize = 11;
    var kSampleStepSize = 1 / (kSplineTableSize - 1);
    var float32ArraySupported = typeof Float32Array === "function";
    function A(aA1, aA2) {
      return 1 - 3 * aA2 + 3 * aA1;
    }
    function B(aA1, aA2) {
      return 3 * aA2 - 6 * aA1;
    }
    function C(aA1) {
      return 3 * aA1;
    }
    function calcBezier(aT, aA1, aA2) {
      return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
    }
    function getSlope(aT, aA1, aA2) {
      return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
    }
    function binarySubdivide(aX, aA, aB, mX1, mX2) {
      var currentX, currentT, i = 0;
      do {
        currentT = aA + (aB - aA) / 2;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0) {
          aB = currentT;
        } else {
          aA = currentT;
        }
      } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
      return currentT;
    }
    function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
      for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0) {
          return aGuessT;
        }
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
      }
      return aGuessT;
    }
    function LinearEasing(x) {
      return x;
    }
    module.exports = function bezier(mX1, mY1, mX2, mY2) {
      if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
        throw new Error("bezier x values must be in [0, 1] range");
      }
      if (mX1 === mY1 && mX2 === mY2) {
        return LinearEasing;
      }
      var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
      function getTForX(aX) {
        var intervalStart = 0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
          intervalStart += kSampleStepSize;
        }
        --currentSample;
        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) {
          return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        } else if (initialSlope === 0) {
          return guessForT;
        } else {
          return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
      }
      return function BezierEasing2(x) {
        if (x === 0) {
          return 0;
        }
        if (x === 1) {
          return 1;
        }
        return calcBezier(getTForX(x), mY1, mY2);
      };
    };
  }
});

// node_modules/window-scroll-manager/index.js
var require_window_scroll_manager = __commonJS({
  "node_modules/window-scroll-manager/index.js"(exports, module) {
    "use strict";
    (function() {
      var instance = null;
      var instancesCount = 0;
      var ticking = false;
      var EVENT_NAME = "window-scroll";
      var isWindowDefined = typeof window !== "undefined";
      function detectPassiveEvents() {
        if (isWindowDefined && typeof window.addEventListener === "function") {
          var passive = false;
          var options = Object.defineProperty({}, "passive", {
            get: function() {
              passive = true;
            }
          });
          var noop = function() {
          };
          window.addEventListener("TEST_PASSIVE_EVENT_SUPPORT", noop, options);
          window.removeEventListener("TEST_PASSIVE_EVENT_SUPPORT", noop, options);
          return passive;
        }
        return false;
      }
      var supportsPassiveEvents = detectPassiveEvents();
      var supportsCustomEvents = isWindowDefined && typeof window.CustomEvent === "function";
      function ScrollManager2() {
        if (typeof window === "undefined") {
          return null;
        }
        instancesCount++;
        if (instance) {
          return instance;
        }
        instance = this;
        this.handleScroll = this.handleScroll.bind(this);
        this.eventListenerOptions = supportsPassiveEvents ? { passive: true } : true;
        window.addEventListener("scroll", this.handleScroll, this.eventListenerOptions);
      }
      ScrollManager2.prototype.removeListener = function() {
        instancesCount--;
        if (instancesCount === 0) {
          this.destroy();
        }
      };
      ScrollManager2.prototype.destroy = function() {
        window.removeEventListener("scroll", this.handleScroll, this.eventListenerOptions);
        instance = null;
        instancesCount = 0;
      };
      ScrollManager2.prototype.getScrollPosition = function() {
        var scrollPositionY = window.scrollY || document.documentElement.scrollTop;
        var scrollPositionX = window.scrollX || document.documentElement.scrollLeft;
        if (scrollPositionY < 0) {
          scrollPositionY = 0;
        }
        if (scrollPositionX < 0) {
          scrollPositionX = 0;
        }
        return {
          // Alias for scrollPositionY for backwards compatibility
          scrollPosition: scrollPositionY,
          scrollPositionY,
          scrollPositionX
        };
      };
      ScrollManager2.prototype.handleScroll = function() {
        if (!ticking) {
          ticking = true;
          var event;
          if (supportsCustomEvents) {
            event = new CustomEvent(EVENT_NAME, {
              detail: this.getScrollPosition()
            });
          } else {
            event = document.createEvent("CustomEvent");
            event.initCustomEvent(EVENT_NAME, false, false, this.getScrollPosition());
          }
          window.dispatchEvent(event);
          window.requestAnimationFrame(function() {
            ticking = false;
          });
        }
      };
      if (typeof module !== "undefined" && module.exports) {
        ScrollManager2.default = ScrollManager2;
        module.exports = ScrollManager2;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("window-scroll-manager", [], function() {
          return ScrollManager2;
        });
      } else {
        window.ScrollManager = ScrollManager2;
      }
    }).call(exports);
  }
});

// app/styles/hero.styles.css
var hero_styles_default = "/build/_assets/hero.styles-DO6AKD65.css";

// app/components/heroLogoSVG.component.jsx
var React = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var HeroLogo = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      id: props.logoID,
      "data-name": props.logoID,
      viewBox: "0 0 200.31 788.52",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `.cls-1{fill:${props.color}}` }, void 0, false, {
          fileName: "app/components/heroLogoSVG.component.jsx",
          lineNumber: 12,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/components/heroLogoSVG.component.jsx",
          lineNumber: 11,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", { id: "Layer_1-2", "data-name": "Layer 1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m188.58,736.8v-9.74c2.12,0,5.18.45,7.62,2.37,2.61,2.05,3.9,5.18,3.9,8.73,0,6.82-5.01,12-11.93,12s-11.97-5.36-11.97-12.11c0-3.27,1.11-5.46,2.5-7.27.77-.97,1.6-1.84,2.92-2.78l.97,1.22c-1.11.66-2.05,1.6-2.57,2.23-1.22,1.46-2.43,3.76-2.43,6.65,0,5.95,4.73,10.47,10.64,10.47,5.81,0,10.47-4.38,10.47-10.37,0-3.97-2.02-6.82-3.93-8.07-1.39-.91-3.31-1.46-4.8-1.53v8.21h-1.39Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 16,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m199.71,684.49l-10.96,7.51v.69s10.96,0,10.96,0v1.53h-23.2v-3.34c0-1.77.14-3.37,1.18-4.9,1.25-1.81,3.17-2.4,4.98-2.4,2.29,0,4.66,1.01,5.63,3.9.42,1.22.45,2.33.45,2.85l10.96-7.58v1.74Zm-12.35,8.21v-2.23c0-3.3-1.74-5.29-4.73-5.29-2.33,0-3.55,1.15-4.04,2.05-.56.97-.69,2.64-.69,3.55v1.91s9.46,0,9.46,0Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 17,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m192.1,639.21v9.88s7.62,3.1,7.62,3.1v1.67s-23.9-9.77-23.9-9.77l23.9-9.64v1.67s-7.62,3.1-7.62,3.1Zm-1.39.56l-10.99,4.35,10.99,4.42v-8.77Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 18,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m188.69,601.47h11.03v1.53h-23.2v-4.49c0-3.79,2.09-6.78,6.05-6.78,3.86,0,6.12,2.75,6.12,6.75v2.99Zm-1.39,0v-3.06c0-3.03-1.77-5.08-4.7-5.08-2.89,0-4.7,1.95-4.7,5.32v2.82s9.39,0,9.39,0Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 19,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { class: "cls-1", d: "m186.36,558.14v-14.05s-9.84,0-9.84,0v-1.53h23.2v1.53h-11.97s0,14.05,0,14.05h11.97v1.53h-23.2v-1.53h9.84Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 20,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m176.51,506.94h23.2v1.53h-23.2v-1.53Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 21,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m181.24,454.28c-2.33,1.98-3.65,4.84-3.65,7.83,0,5.95,4.77,10.4,10.64,10.4,6.89,0,10.47-5.74,10.47-10.44,0-2.33-.94-5.43-3.51-7.79h2.02c2.09,2.37,2.89,5.22,2.89,7.72,0,6.96-5.46,12.11-11.93,12.11-6.68,0-11.97-5.36-11.97-12.04,0-4.42,2.36-7.1,3.03-7.79h2.02Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 22,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m199.71,385.53h-23.2v-4.59c0-2.05.31-5.63,3.24-8.56,2.47-2.47,5.84-3.34,8.38-3.34s5.88.87,8.35,3.34c2.92,2.92,3.24,6.51,3.24,8.56v4.59Zm-1.39-1.53v-3.03c0-6.12-4.17-10.33-10.19-10.33-5.95,0-10.23,4.24-10.23,10.33v3.03s20.42,0,20.42,0Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 23,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m177.9,325.08v9.6s8.42,0,8.42,0v-9.39h1.39v9.39s10.61,0,10.61,0v-9.6h1.39v11.13h-23.2v-11.13h1.39Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 24,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m180.44,281.68c-2.79,1.43-2.85,3.93-2.85,4.56,0,2.75,1.98,4.31,4.31,4.31,2.5,0,3.34-1.74,4.49-4.07,1.11-2.3,1.6-3.44,2.43-4.63.7-1.01,1.91-2.47,4.49-2.47,3.9,0,6.78,3.27,6.78,7.24,0,2.99-1.43,4.52-2.44,5.39-1.04.9-1.95,1.29-2.54,1.5l-.63-1.32c.91-.31,1.81-.9,2.23-1.25,1.32-1.04,1.98-2.75,1.98-4.35,0-3.13-2.3-5.6-5.36-5.6-1.25,0-2.57.49-3.65,2.26-.38.66-1.08,2.02-2.02,3.93-1.11,2.3-1.74,3.44-3.06,4.24-.87.52-1.74.73-2.64.73-2.68,0-5.78-1.81-5.78-5.95,0-2.33,1.11-4.45,3.31-5.63l.94,1.11Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 25,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m176.51,245.02h23.2v1.53h-23.2v-1.53Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 26,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m188.58,198.83v-9.74c2.12,0,5.18.45,7.62,2.36,2.61,2.05,3.9,5.18,3.9,8.73,0,6.82-5.01,12-11.93,12-6.89,0-11.97-5.36-11.97-12.11,0-3.27,1.11-5.46,2.5-7.27.77-.97,1.6-1.84,2.92-2.78l.97,1.22c-1.11.66-2.05,1.6-2.57,2.23-1.22,1.46-2.43,3.76-2.43,6.64,0,5.95,4.73,10.47,10.64,10.47,5.81,0,10.47-4.38,10.47-10.37,0-3.97-2.02-6.82-3.93-8.07-1.39-.9-3.31-1.46-4.8-1.53v8.21h-1.39Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 27,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m199.71,156.27h-23.45s20.39-19.48,20.39-19.48h-20.14v-1.53h23.79s-20.39,19.48-20.39,19.48h19.79v1.53Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 28,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m177.9,90.04v9.6s8.42,0,8.42,0v-9.39h1.39v9.39s10.61,0,10.61,0v-9.6h1.39v11.13h-23.2v-11.13h1.39Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 29,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m199.71,47.47l-10.96,7.52v.7s10.96,0,10.96,0v1.53h-23.2v-3.34c0-1.77.14-3.37,1.18-4.9,1.25-1.81,3.17-2.4,4.98-2.4,2.29,0,4.66,1.01,5.63,3.9.42,1.22.45,2.33.45,2.85l10.96-7.58v1.74Zm-12.35,8.21v-2.23c0-3.31-1.74-5.29-4.73-5.29-2.33,0-3.55,1.15-4.04,2.05-.56.97-.69,2.64-.69,3.55v1.91s9.46,0,9.46,0Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 30,
              columnNumber: 7
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 15,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m147.74,622c-.04,1.77-.52,2.95-1.45,3.55-.6.4-1.59.6-2.95.6h-26.61v-9.33h-14.87v9.33h-14.93v19.69h14.93v5.3h14.87v-5.3h31.07c4.82.12,8.45-.68,10.9-2.41.8-.59,1.45-1.32,1.99-2.16v-24.45h-12.95v5.18Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 33,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m138.18,321.24h-35.34c-2.2,0-3.8.46-4.8,1.38-1.08.96-1.62,2.06-1.62,3.3,0,1.52.68,2.76,2.04,3.72.96.68,2.42,1.02,4.38,1.02h35.34c2.2,0,3.82-.46,4.86-1.38,1.08-.96,1.62-2.08,1.62-3.36,0-1.48-.68-2.7-2.04-3.66-1-.68-2.48-1.02-4.44-1.02Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 34,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m98.87,216.17c-1.12.76-1.68,2.36-1.68,4.8v3.12h14.28v-3.66c0-2.12-.42-3.54-1.26-4.26-1.12-.96-2.98-1.44-5.58-1.44s-4.44.48-5.76,1.44Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 35,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m79.5,703.3v-273.5h32.15v-3.25c-.04-1.89-.4-3.21-1.08-3.97-1-1.04-2.83-1.69-5.48-1.93-.88-.12-2.69-.18-5.42-.18h-9.39c-4.26,0-7.85-.62-10.78-1.87v-21.92c2.09.8,3.81,1.28,5.18,1.45,1.08.16,3.71.26,7.89.3h9.69c3.69,0,6.2.16,7.53.48,4.34,1.04,7.23,3.83,8.67,8.37.32,1.2.76,3.23,1.32,6.08.24-1.32.38-2.19.42-2.59.68-4.62,2.35-7.93,5-9.94,2.29-1.61,5.68-2.41,10.18-2.41h11.5c3.89,0,6.82-.12,8.79-.36,1.53-.2,3.21-.58,5.02-1.09v-5.2h-60.36c-10.2.04-17.14.46-20.83,1.26v-25.29c5.78,1.28,12.52,1.95,20.23,1.99h44.08l-.84-14.81,17.73,3.82v-19.6c-.44,1.68-1.03,3.15-1.77,4.37-2.57,4.3-7.73,7-15.48,8.13-3.85.44-8.91.66-15.17.66h-15.42c-6.26,0-11.32-.22-15.17-.66-7.71-1.12-12.85-3.83-15.42-8.13-1.81-2.97-2.73-7.31-2.77-13.01v-9.94c.04-5.7.96-10.04,2.77-13.01,2.57-4.3,7.71-6.98,15.42-8.07,3.85-.48,8.91-.72,15.17-.72h15.42c6.26,0,11.32.24,15.17.72,7.75,1.08,12.91,3.77,15.48,8.07.74,1.22,1.33,2.68,1.77,4.37v-26.31c-1.12,3.27-3.55,5.38-7.31,6.32-4.3,1.16-11.4,1.71-21.32,1.63h-26.19c-2.57,0-5.56-.14-8.97-.42s-5.82-.58-7.23-.9c-3.81-.88-6.46-2.47-7.95-4.76-1-1.61-1.61-3.31-1.81-5.12-.2-1.97-.34-5.5-.42-10.6v-20.65h17.88v20.41h14.27v-20.41h17.88v20.41h14.27v-20.41h16.88v-5.75h-81.19v-35.65c.08-7.23.86-11.72,2.35-13.49,1.85-2.09,5.02-3.39,9.51-3.92,2.73-.36,5.9-.54,9.51-.54h6.26c9.96.28,16.16,1.28,18.61,3.01,2.21,1.45,3.45,3.99,3.73,7.64.04.8.06,2.65.06,5.54v15.36h31.16v-35.44h-81.19v-35.95h17.88v13.91h14.27v-13.91h17.88v13.91h31.16v-27.12c-1.12,3.27-3.55,5.38-7.31,6.32-4.3,1.16-11.4,1.71-21.32,1.63h-26.19c-2.57,0-5.56-.14-8.97-.42s-5.82-.58-7.23-.9c-3.81-.88-6.46-2.47-7.95-4.76-1-1.61-1.61-3.31-1.81-5.12-.2-1.97-.34-5.5-.42-10.6v-20.65h17.88v20.41h14.27v-20.41h17.88v20.41h14.27v-20.41h16.88v-5.75h-81.19v-33.72c0-4.98.12-8.45.36-10.42.48-3.97,2.51-6.56,6.08-7.77,2.57-.92,5.7-1.41,9.39-1.45h5.3c3.65,0,6.24.1,7.77.3,4.13.6,7.15,2.19,9.03,4.76,1.04,1.49,1.75,3.81,2.11,6.98.96-3.25,1.93-5.62,2.89-7.11,2.45-3.49,6.7-5.14,12.77-4.94h12.71c5.11-.04,9.37-.53,12.79-1.46V0H0v788.52h79.5v-85.21Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 36,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m136.88,67.15c-2.93.04-4.92.66-5.96,1.87-.92,1.12-1.38,2.67-1.38,4.64v2.77h31.16v-10.66c-3.36.96-7.64,1.42-12.85,1.39h-10.96Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 37,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m98.21,70.33c-.68.8-1.02,2.22-1.02,4.26v3.12h14.28v-3.12c0-2.48-.38-4.08-1.14-4.8-1-.96-3-1.44-6-1.44s-4.96.66-6.12,1.98Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 38,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m155.45,653.59c-.8-.16-2.03-.33-3.67-.51-1.65-.18-2.91-.27-3.79-.27h-8.79c-2.89,0-4.82.02-5.78.06-3.69.12-6.3.64-7.83,1.57-2.61,1.89-3.87,5.7-3.79,11.44v6.92h-7.47v-17.82h-14.87v24.21c0,4.3.4,7.23,1.2,8.79,1.03,1.84,2.71,3.1,5.01,3.78h28.94c1.84-.49,3.19-1.34,3.92-2.64.72-1.41,1.08-3.57,1.08-6.5v-9.57h8.13v115.48h12.95v-131.29c-1.39-1.98-3.14-3.2-5.25-3.64Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 39,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m147.74,460.11v21.44c0,2.73-.32,4.55-.96,5.48-.68,1-2.19,1.51-4.52,1.51h-3.31v-28.42h-25.95c-2.25,0-3.73.02-4.46.06-2.73.2-4.8,1.16-6.2,2.89-1.85,2.17-2.81,6.64-2.89,13.43v15.53c0,2.45.1,4.52.3,6.2.36,3.29,1.2,5.62,2.53,6.99,1.89,1.93,5.2,2.91,9.94,2.95h33.42c3.01,0,5.04-.02,6.08-.06,3.97-.2,6.7-1.04,8.19-2.53.29-.33.55-.72.79-1.14v-44.32h-12.95Zm-20.77,28.42h-5.72c-4.58,0-6.86-1.47-6.86-4.4,0-1.48.76-2.65,2.29-3.49,1.04-.6,2.57-.9,4.58-.9h5.72v8.79Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 40,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m155.73,419.99c-2.17.32-4.98.48-8.43.48h-7.53c-2.69,0-4.46.12-5.3.36-3.25.84-4.9,2.87-4.94,6.08v2.89h31.16v-11.48c-1.7.83-3.35,1.4-4.96,1.66Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 41,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m144.91,516.5c-5.78-2.49-13.29-3.81-22.52-3.97h-22.94v19.63h22.82c5.34,0,9.86.28,13.55.84,3.65.56,7.15,1.75,10.48,3.55-3.29,1.85-6.78,3.05-10.48,3.61s-8.21.84-13.55.84h-22.82v19.63h22.94c8.51-.12,15.21-1.14,20.11-3.07,7.41-2.79,13.45-6.09,18.19-9.87v-22.19c-4.16-3.29-9.39-6.3-15.78-9.01Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 42,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "cls-1", d: "m147.74,564.83v21.44c0,2.73-.32,4.56-.96,5.48-.68,1-2.19,1.51-4.52,1.51h-3.31v-28.42h-25.95c-2.25,0-3.73.02-4.46.06-2.73.2-4.8,1.16-6.2,2.89-1.85,2.17-2.81,6.64-2.89,13.43v15.54c0,2.45.1,4.52.3,6.2.36,3.29,1.2,5.62,2.53,6.99,1.89,1.93,5.2,2.91,9.94,2.95h33.42c3.01,0,5.04-.02,6.08-.06,3.97-.2,6.7-1.04,8.19-2.53.29-.33.55-.72.79-1.14v-44.32h-12.95Zm-20.77,28.42h-5.72c-4.58,0-6.86-1.47-6.86-4.4,0-1.49.76-2.65,2.29-3.49,1.04-.6,2.57-.9,4.58-.9h5.72v8.79Z" }, void 0, false, {
              fileName: "app/components/heroLogoSVG.component.jsx",
              lineNumber: 43,
              columnNumber: 7
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 32,
            columnNumber: 5
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/heroLogoSVG.component.jsx",
          lineNumber: 14,
          columnNumber: 5
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/heroLogoSVG.component.jsx",
      lineNumber: 4,
      columnNumber: 3
    },
    this
  );
};
var heroLogoSVG_component_default = HeroLogo;

// node_modules/react-plx/dist/esm/index.js
var import_react = __toESM(require_react(), 1);
var import_bezier_easing = __toESM(require_src(), 1);
var import_window_scroll_manager = __toESM(require_window_scroll_manager(), 1);
var REGEX_0_255 = "(1?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])";
var REGEX_0_1 = "([01](\\.\\d+)?)";
var REGEX_TWO_HEX_DIGITS = "([a-f\\d]{2})";
var HEX_REGEX = new RegExp(`^#${REGEX_TWO_HEX_DIGITS}${REGEX_TWO_HEX_DIGITS}${REGEX_TWO_HEX_DIGITS}$`, "i");
var RGB_REGEX = new RegExp(`^rgb\\(${REGEX_0_255},${REGEX_0_255},${REGEX_0_255}\\)$`, "i");
var RGBA_REGEX = new RegExp(`^rgba\\(${REGEX_0_255},${REGEX_0_255},${REGEX_0_255},${REGEX_0_1}\\)$`, "i");

// app/routes/__app._index.jsx
var import_react_animate_on_scroll = __toESM(require_scrollAnimation_min());

// app/components/hero.component.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Hero() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hero", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "containerRow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        progressiveImage_component_default,
        {
          src: "/images/brandImages/rolling/RollingRest_Logo.webp",
          placeholderSrc: "/images/brandImages/rolling/RollingRest_Logo_LowRes.webp",
          classTitle: "",
          alt: "hero image"
        },
        void 0,
        false,
        {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 9,
          columnNumber: 25
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 8,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        progressiveImage_component_default,
        {
          src: "/images/printImages/EliteEstheticianBooth.webp",
          placeholderSrc: "/images/printImages/EliteEstheticianBooth_LowRes.webp",
          classTitle: "",
          alt: "hero image"
        },
        void 0,
        false,
        {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 17,
          columnNumber: 25
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 16,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        progressiveImage_component_default,
        {
          src: "/images/HoodGuyMockup copy.webp",
          placeholderSrc: "/images/HoodGuyMockup copy-lowRes.webp",
          classTitle: "",
          alt: "hero image"
        },
        void 0,
        false,
        {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 25,
          columnNumber: 25
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 24,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        progressiveImage_component_default,
        {
          src: "/images/brandImages/enhance/EnhanceMagazines.webp",
          placeholderSrc: "/images/brandImages/enhance/EnhanceMagazines_LowRes.webp",
          classTitle: "",
          alt: "hero image"
        },
        void 0,
        false,
        {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 33,
          columnNumber: 25
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 32,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/hero.component.jsx",
      lineNumber: 7,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "containerRow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        progressiveImage_component_default,
        {
          src: "/images/printImages/NelsonWrap.webp",
          placeholderSrc: "/images/printImages/NelsonWrap_LowRes.webp",
          classTitle: "",
          alt: "hero image"
        },
        void 0,
        false,
        {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 43,
          columnNumber: 25
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 42,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        progressiveImage_component_default,
        {
          src: "/images/printImages/MatadorBottle_v2_Mockup.webp",
          placeholderSrc: "/images/printImages/MatadorBottle_v2_Mockup_LowRes.webp",
          classTitle: "",
          alt: "hero image"
        },
        void 0,
        false,
        {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 51,
          columnNumber: 25
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 50,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        progressiveImage_component_default,
        {
          src: "/images/printImages/BugattiBook_Mockup.webp",
          placeholderSrc: "/images/printImages/BugattiBook_Mockup_LowRes.webp",
          classTitle: "",
          alt: "hero image"
        },
        void 0,
        false,
        {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 59,
          columnNumber: 25
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 58,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/hero.component.jsx",
      lineNumber: 41,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "containerRow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        progressiveImage_component_default,
        {
          src: "/images/printImages/FreyaAbsinthe_MockUp.webp",
          placeholderSrc: "/images/printImages/FreyaAbsinthe_MockUp_LowRes.webp",
          classTitle: "",
          alt: "hero image"
        },
        void 0,
        false,
        {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 69,
          columnNumber: 25
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 68,
        columnNumber: 22
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        progressiveImage_component_default,
        {
          src: "/images/brandImages/enhance/EnhanceWebsite.webp",
          placeholderSrc: "/images/brandImages/enhance/EnhanceWebsite_LowRes.webp",
          classTitle: "",
          alt: "hero image"
        },
        void 0,
        false,
        {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 77,
          columnNumber: 25
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 76,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/hero.component.jsx",
      lineNumber: 67,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "containerRow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      progressiveImage_component_default,
      {
        src: "/images/brandImages/rolling/RollingRest_Sketches.webp",
        placeholderSrc: "/images/brandImages/rolling/RollingRest_Sketches_LowRes.webp",
        classTitle: "",
        alt: "hero image"
      },
      void 0,
      false,
      {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 87,
        columnNumber: 25
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/hero.component.jsx",
      lineNumber: 86,
      columnNumber: 22
    }, this) }, void 0, false, {
      fileName: "app/components/hero.component.jsx",
      lineNumber: 85,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/hero.component.jsx",
    lineNumber: 6,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/hero.component.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/routes/__app._index.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [
    { title: "Graphic Design | Stephen Kloepfer | Branding & Design" },
    { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
    { name: "description", content: "In today's evolving market, it is imperative your design evolves alongside. Stephen Kloepfer is here to help with all your branding and graphic design needs." },
    { name: "og:title", content: "Stephen Kloepfer | Branding and Design" },
    { name: "og:description", content: "Stephen Kloepfer specializes in evolving graphic design to compete in today's fast-paced market." },
    { name: "og:image", content: "/social_preview.png" }
  ];
};
var links2 = () => [
  { rel: "stylesheet", href: landing_styles_default },
  { rel: "stylesheet", href: hero_styles_default },
  ...links()
];
function Index() {
  const onWheel = (e) => {
    e.preventDefault();
    const container = scrollRef.current;
    const containerScrollPosition = scrollRef.current.scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behavior: "smooth"
    });
  };
  const scrollRef = (0, import_react2.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "scrolling", id: "container", ref: scrollRef, onWheel, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "panel1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(heroLogoSVG_component_default, { className: "logo", color: "#e05210", logoID: "logo1" }, void 0, false, {
        fileName: "app/routes/__app._index.jsx",
        lineNumber: 49,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Hero, {}, void 0, false, {
        fileName: "app/routes/__app._index.jsx",
        lineNumber: 50,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "spacer" }, void 0, false, {
        fileName: "app/routes/__app._index.jsx",
        lineNumber: 51,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/__app._index.jsx",
      lineNumber: 48,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "panel2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "/images/SteveFlowChart.webp", className: "flowPic" }, void 0, false, {
        fileName: "app/routes/__app._index.jsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "intro", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "ABOUT ME" }, void 0, false, {
          fileName: "app/routes/__app._index.jsx",
          lineNumber: 56,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "It\u2019s a rare thing to find something you love doing and even rarer to do it professionally. I am lucky enough to have found a calling that allows me to express my artistic side, while also helping my clients succeed. It\u2019s my focus to create lasting imagery that is both eye-catching and matches the personality of my clients. To achieve this, I strive to stay up-to-date with the latest trends and technology in the field, so I can continue supporting my clients in today's competitive and evolving market." }, void 0, false, {
          fileName: "app/routes/__app._index.jsx",
          lineNumber: 57,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/__app._index.jsx",
        lineNumber: 55,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/__app._index.jsx",
      lineNumber: 53,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MainMenu, {}, void 0, false, {
      fileName: "app/routes/__app._index.jsx",
      lineNumber: 60,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/__app._index.jsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links2 as links,
  meta
};
//# sourceMappingURL=/build/routes/__app._index-3D4SPSBG.js.map
