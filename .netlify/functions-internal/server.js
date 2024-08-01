var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:/Users/enhanceprinting/Desktop/sk_port_v3/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/Users/enhanceprinting/Desktop/sk_port_v3/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 45,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_dist());

// app/styles/global.styles.css
var global_styles_default = "/build/_assets/global.styles-GFSMZL2X.css";

// app/root.jsx
var import_react2 = require("@remix-run/react"), import_react_animated_cursor = __toESM(require("react-animated-cursor")), import_react_device_detect = require("react-device-detect"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: global_styles_default },
  { rel: "manifest", href: "/site.webmanifest" },
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      import_react_device_detect.isMobile ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
        !1,
        {
          fileName: "app/root.jsx",
          lineNumber: 35,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/__app.print-original.jsx
var app_print_original_exports = {};
__export(app_print_original_exports, {
  default: () => app_print_original_default,
  links: () => links4,
  loader: () => loader,
  meta: () => meta
});
var import_react9 = require("react");

// app/components/pagesHeader.component.jsx
var import_react3 = require("@remix-run/react");

// app/components/logoBleedOfflSVG.component.jsx
var React = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), BleedLogo = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    id: props.logoID,
    "data-name": props.logoID,
    viewBox: "0 0 294.78 30.49",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("style", { children: `.cls-1{fill:${props.color}}` }, void 0, !1, {
        fileName: "app/components/logoBleedOfflSVG.component.jsx",
        lineNumber: 12,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/logoBleedOfflSVG.component.jsx",
        lineNumber: 11,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("g", { id: "Layer_1-2", "data-name": "Layer 1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "path",
          {
            d: "M119.46 7.51c.01-2.86.26-5.36.74-7.51h-9.38c.3 1.37.45 3.95.47 7.73v22.76h12.17l1.5-6.95-5.5.31V7.51ZM151.87.16c-.67.07-1.3.3-1.9.67-.85.55-1.44 1.53-1.76 2.95-.12.52-.23 1.41-.34 2.68s-.16 2.38-.16 3.33v9.72c-.03 3.68.17 6.31.6 7.91.36 1.43 1.17 2.35 2.43 2.75.6.19 2.28.31 5.05.34h7.66v-6.63h-7.57v-5.29h7.57v-6.63h-7.57V6.67h7.57V0h-7.66c-1.89.03-3.2.08-3.93.16ZM186.92 30.49h8.18V18.56h5.16v-6.63h-5.16v-5.3h5.16V0h-13.34v30.49zM206.37.16c-.67.07-1.3.3-1.9.67-.85.55-1.44 1.53-1.76 2.95-.12.52-.23 1.41-.34 2.68s-.16 2.38-.16 3.33v9.72c-.03 3.68.17 6.31.6 7.91.36 1.43 1.17 2.35 2.43 2.75.6.19 2.28.31 5.05.34h7.66v-6.63h-7.57v-5.29h7.57v-6.63h-7.57V6.67h7.57V0h-7.66c-1.89.03-3.2.08-3.93.16ZM.98 21.9c-.48-.27-.8-.77-.98-1.46v4.87h6.94v-3.02H3.39c-1.09 0-1.89-.13-2.41-.4ZM108.64 11.24c.12-.49.18-1.42.18-2.79v-3.6c.01-1.55.05-2.52.11-2.93.06-.51.24-1.15.54-1.92h-8.13c-.46 1.09-.69 2.42-.69 4v3.48c0 1.01-.02 1.68-.07 2.01-.09.98-.33 1.66-.71 2.03-.28.25-.77.39-1.47.4h-1.21V0H7.62C3.41 0 0 3.41 0 7.62V9.7c.25-.86.72-1.48 1.4-1.86.58-.3 1.67-.45 3.26-.45h8.98v5.52H7.03v2.77H9.6c2.13-.03 3.54.44 4.24 1.41.34.57.54 1.53.58 2.9.01.36.02 1.07.02 2.14v3.26c0 .33-.03.8-.1 1.41-.07.61-.13 1.06-.19 1.36-.18.85-.69 1.54-1.54 2.08-.15.09-.35.17-.56.24h7.42-.02c-.66-.23-1.17-.6-1.54-1.11-.64-.91-.94-2.26-.89-4.04V13.8h-1.97V8.28h1.97V2.75h7.3v5.54h3.46v5.52h-3.46v9.87c0 .51.07.87.22 1.09.22.34.66.52 1.32.54h1.92v5.18h3.74c-.56-.16-1-.38-1.32-.66-.55-.55-.86-1.56-.94-3.04-.01-.39-.02-1.14-.02-2.26v-12.4c.01-1.76.38-2.99 1.09-3.69.51-.49 1.37-.8 2.59-.94.63-.07 1.39-.11 2.3-.11h5.76c2.52.03 4.18.39 4.98 1.07.64.52 1 1.29 1.07 2.3.01.27.02.82.02 1.65v9.63H36.51v1.23c0 .86.19 1.42.56 1.68.34.24 1.02.36 2.03.36h7.95v5.18h6.65c-1.53-1.81-2.85-4.18-3.96-7.12-.71-1.82-1.09-4.3-1.14-7.46V7.4h7.28v8.47c0 1.98.1 3.66.31 5.03s.66 2.67 1.34 3.89c.67-1.24 1.11-2.53 1.32-3.89.21-1.37.31-3.05.31-5.03V7.4h7.28v8.51c-.06 3.43-.55 6.21-1.47 8.35-1.09 2.56-2.3 4.63-3.64 6.23h9.01c-.56-.16-1-.38-1.32-.66-.55-.55-.86-1.56-.94-3.04-.01-.39-.02-1.14-.02-2.26v-12.4c.01-1.76.38-2.99 1.09-3.69.51-.49 1.37-.8 2.59-.94.63-.07 1.39-.11 2.3-.11h5.76c2.52.03 4.18.39 4.98 1.07.64.52 1 1.29 1.07 2.3.01.27.02.82.02 1.65v9.63H75.33v1.23c0 .86.19 1.42.56 1.68.34.24 1.02.36 2.03.36h7.95v5.18h11.24V18.56h1.07c1.19.01 1.94.63 2.26 1.83.09.31.13.97.13 1.97v2.79c0 1.28.06 2.32.18 3.13.12.71.39 1.45.8 2.21h7.84c-.25-.82-.42-1.56-.51-2.23-.09-.73-.13-1.82-.13-3.26v-4.27c0-1.67-.3-2.93-.89-3.78-.74-.98-1.97-1.6-3.69-1.85-.15-.01-.47-.07-.96-.16 1.06-.21 1.81-.37 2.26-.49 1.68-.54 2.72-1.61 3.11-3.22Z",
            className: "cls-1"
          },
          void 0,
          !1,
          {
            fileName: "app/components/logoBleedOfflSVG.component.jsx",
            lineNumber: 15,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "path",
          {
            d: "M78.32 13.79c-.31-.57-.74-.85-1.3-.85-1.09 0-1.63.85-1.63 2.55v2.12h3.26v-2.12c0-.74-.11-1.31-.34-1.7ZM39.47 13.79c-.31-.57-.74-.85-1.3-.85-1.09 0-1.63.85-1.63 2.55v2.12h3.26v-2.12c0-.74-.11-1.31-.34-1.7ZM145.52 6.75c-.4-2.86-1.4-4.77-2.99-5.72-1.1-.67-2.71-1.01-4.83-1.03h-3.69c-2.11.01-3.72.36-4.83 1.03-1.59.95-2.6 2.86-3.02 5.72-.16 1.43-.25 3.31-.25 5.63v5.72c0 2.32.08 4.2.25 5.63.42 2.87 1.42 4.79 3.02 5.74 1.1.67 2.71 1.01 4.83 1.03h3.69c2.11-.01 3.72-.36 4.83-1.03 1.59-.95 2.59-2.87 2.99-5.74.18-1.43.27-3.31.27-5.63v-5.72c0-2.32-.09-4.2-.27-5.63Zm-8.07 15.02c0 .73-.13 1.28-.38 1.65-.36.5-.81.76-1.36.76-.47 0-.89-.2-1.25-.6-.34-.39-.51-.99-.51-1.8V8.67c0-.73.13-1.27.38-1.62.36-.5.82-.76 1.38-.76.46 0 .87.2 1.22.6.34.37.51.96.51 1.78v13.11ZM185.28 4.4c-.19-1.67-.68-2.84-1.45-3.53-.66-.55-2.32-.84-5-.87h-13.22v30.49h8.18V18.56h5.7c1.07 0 1.76 0 2.06-.02 1.36-.1 2.3-.57 2.84-1.39.64-.91 1.01-3.21 1.12-6.9V7.93c0-1.34-.07-2.52-.2-3.53Zm-8.85 6.99c-.27.31-.79.47-1.58.47h-1.36v-5.3h1.16c.91 0 1.5.21 1.78.62.36.49.53 1.2.53 2.14s-.18 1.65-.53 2.07ZM239.89 25.38v-4.71c.07-2.25-.54-3.83-1.83-4.74-.55-.36-1.43-.71-2.64-1.07 1.18-.13 2.04-.39 2.59-.78.95-.7 1.54-1.82 1.76-3.35.07-.57.11-1.53.11-2.88V5.88c-.01-1.37-.19-2.53-.54-3.48-.45-1.33-1.41-2.08-2.88-2.26-.73-.09-2.02-.13-3.86-.13h-12.51V30.5h8.18V18.57h1.03c.73 0 1.3.17 1.72.51.45.39.68 1.12.69 2.21v4.07c-.01 2.13.19 3.84.63 5.14h8.2c-.42-1.33-.63-3.03-.65-5.12Zm-9.15-13.94c-.27.28-.86.42-1.78.42h-1.16v-5.3h1.16c.76 0 1.28.13 1.58.38.49.43.73 1.19.73 2.27s-.18 1.85-.53 2.23ZM246.3 0h48.47v30.49H246.3z",
            className: "cls-1"
          },
          void 0,
          !1,
          {
            fileName: "app/components/logoBleedOfflSVG.component.jsx",
            lineNumber: 19,
            columnNumber: 7
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/logoBleedOfflSVG.component.jsx",
        lineNumber: 14,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/logoBleedOfflSVG.component.jsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), logoBleedOfflSVG_component_default = BleedLogo;

// app/styles/header.styles.css
var header_styles_default = "/build/_assets/header.styles-LMTRXFPL.css";

// app/components/pagesHeader.component.jsx
var import_react4 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), pageLinks = [
  {
    link: "branding",
    name: "branding"
  },
  {
    link: "print",
    name: "print"
  },
  {
    link: "web",
    name: "web"
  },
  {
    link: "about",
    name: "about"
  }
];
function determinePage(pageName) {
  var newLinks = [];
  return pageLinks.forEach((link) => {
    link.link !== pageName && newLinks.push(link);
  }), newLinks;
}
var PageHeader = (props) => {
  let pageName = props.active, [activated, setActivated] = (0, import_react4.useState)("");
  var newLinks = determinePage(pageName);
  let onClose = props.onClose, setter = props.setter;
  setter(activated);
  let setActive = (props2) => {
    setActivated(props2), onClose();
  };
  var backgroundURL, logoColor;
  return props.background == "dark" ? (backgroundURL = "url(/images/GraidentBackground_Full.webp)", logoColor = "fff") : (backgroundURL = "url(/images/GraidentBackground_Light.webp)", logoColor = "#e05210"), /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { className: "pages", children: newLinks.map(
      (link) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "linkBox", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "h3",
        {
          className: "link",
          setter: link.link,
          onClick: () => setActive(link.link),
          style: { color: logoColor },
          children: link.name
        },
        void 0,
        !1,
        {
          fileName: "app/components/pagesHeader.component.jsx",
          lineNumber: 67,
          columnNumber: 29
        },
        this
      ) }, link.link, !1, {
        fileName: "app/components/pagesHeader.component.jsx",
        lineNumber: 66,
        columnNumber: 11
      }, this)
    ) }, void 0, !1, {
      fileName: "app/components/pagesHeader.component.jsx",
      lineNumber: 64,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/pagesHeader.component.jsx",
      lineNumber: 62,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(logoBleedOfflSVG_component_default, { className: "headerLogo", color: logoColor }, void 0, !1, {
      fileName: "app/components/pagesHeader.component.jsx",
      lineNumber: 80,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/pagesHeader.component.jsx",
      lineNumber: 79,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/pagesHeader.component.jsx",
      lineNumber: 78,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/pagesHeader.component.jsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}, pagesHeader_component_default = PageHeader, links2 = () => [
  { rel: "stylesheet", href: header_styles_default }
];

// app/components/mainMenu.component.jsx
var import_react6 = require("react");

// app/components/footer.component.jsx
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("footer", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "contacts", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: "https://www.linkedin.com/in/stephenkloepfer-ft-collins", target: "_blank", rel: "noreferrer", children: "linkedin" }, void 0, !1, {
      fileName: "app/components/footer.component.jsx",
      lineNumber: 8,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: "mailto:stevekloepferdesign@gmail.com", children: "e-mail" }, void 0, !1, {
      fileName: "app/components/footer.component.jsx",
      lineNumber: 11,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "2023 - All Rights Reserved" }, void 0, !1, {
      fileName: "app/components/footer.component.jsx",
      lineNumber: 14,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.component.jsx",
    lineNumber: 7,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/footer.component.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/components/maskedImage.component.jsx
var React2 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), SvgComponent = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "path",
        {
          id: "a",
          d: "M186.2 50.4c.3-2.5 2.7-3.5 3.7-5.5-.7-.5-1-.8-.9-1.6-.9 1.2-1.9 3.2-3.1 4.1l-1-.8c.6-1.4 2.5-2.7 3.1-4.1-.3-.2-1-.8-1.3-1s.1-.8.6-1.4c-.4.6-1.3 1.7-1.8 2.3-.3-.2-1-.8-1.3-1s.1-.8.6-1.4c-.7-.5-.9-1.6-1.6-1.2l-1.3 1.7c1.4-2.6.7-5-.3-5.7-.1.8-1.1.1-1.2.9.3-2.5.3-5.2-1.8-3.2-3.1 3.7-6.1 7.5-9.1 11.3-.3-.3-.9-.9-1.1-1.2-.3-.3 0-.6.4-.9-.3.3-1 .9-1.3 1.2-.3-.3-.9-.9-1.1-1.2-.3-.3 0-.6.4-.9-.6-.6-.8-1.5-1.4-1.5l-1 1c1-1.6.3-3.7-.6-4.6-.1.6-.9-.3-1 .3.1-1.1.1-2.4-.3-3 2.7-2.7 5.4-5.5 5.9-7.9l-3.4 3.8c2.5-4.5 6.9-7.6 9.8-12-.7-.5-1-.8-.2-2.4-2.1 2.8-5.1 7-7.7 9.2l-.9-.8c1.9-2.8 5.9-6.1 7.6-9.2-.3-.2-1-.8-1.3-1-.3-.2.4-1.2 1.2-2.4-1.1 1.5-2.7 3.6-3.6 4.8-.3-.3-1-.8-1.3-1-.3-.3.7-1.6 1.7-2.9-.6-.5-.3-2.3-1.6-1.2-1 1.3-2 2.6-3 3.8 1.9-2.6 2.9-5 3.2-6.7.3-1.7.1-2.8-.4-3.2-.5 1.5-1.6.8-2.1 2.3.9-2.2 1.5-4.5 1.5-5.6 0-.6-.2-.9-.6-.6-.4.2-.9.8-1.9 1.9-3.7 5.2-8.3 10.2-13.3 15.5-2 2.1-3.9 4.2-5.9 6.3.2-.5.2-1 .1-1.5l-1.5 1.8c.5-2.5 2.9-3.5 4-5.6-.6-.5-1-.8-.8-1.6-.9 1.2-2 3.2-3.3 4.1l-1-.8c.6-1.4 2.7-2.7 3.3-4.1-.3-.2-1-.8-1.3-1s.1-.8.6-1.4c-.4.6-1.4 1.8-1.8 2.4-.3-.3-1-.8-1.3-1-.3-.3.1-.8.6-1.4-.6-.5-.9-1.6-1.6-1.3l-1.3 1.7c1.5-2.5.7-4.9-.3-5.7-.1.8-1.1.1-1.2.9.3-2.5.2-5.1-1.8-3.1-.2.3-.5.5-.7.8h-.2c-.4.1-1.1.6-2 1.7-1.5 1.7-3.1 3.4-4.8 5.1 1.1-3.1 1.6-5.8-1.5-2.7-3.6 4.1-6.9 8.3-10.1 12.6-4 3.1-8.2 6.2-12.6 9.4.3-.4.5-.8.6-1.2l-2.8 2c2.1-3 5.6-4 8.2-6.4-.5-.7-.7-1 0-2-1.9 1.3-4.4 3.7-6.6 4.7l-.7-1c1.6-1.7 4.9-3 6.6-4.7-.2-.3-.7-1-1-1.4-.2-.3.7-1 1.7-1.7-.9.7-2.8 2-3.8 2.7-.2-.3-.7-1-1-1.4s.7-1 1.7-1.7c-.5-.7 0-2-1.2-1.7l-2.8 2c3.6-3 4.3-6.1 3.6-7.1-.7 1-1.4 0-2.2 1 2.2-3 4.1-6.4 0-4.1-5.6 3.7-11.2 7.5-16.6 11.5.2-.8.2-1.3-.1-1.5l.1-.1c.8-1.3 3.6-1.7 2.9-3.9l-1 1c.2-1.9 2.1-2 2.8-3.3-.6-.6-.9-.9-.8-1.5-.7.7-1.4 1.9-2.4 2.3l-.9-.9c.4-1 2-1.3 2.4-2.3l-1.2-1.2c-.3-.3.1-.6.4-.9l-1.3 1.3-1.2-1.2c-.3-.3.1-.6.4-.9-.6-.6-.8-1.5-1.4-1.5l-1 1c1.1-1.6.3-3.7-.6-4.6 0 .6-.9-.3-.9.3.1-1.9 0-4-1.7-3-6 4.7-11 9.4-15.9 14.2-.1-.2-.3-.3-.6-.3l-1.8 1.2c2.2-2 2.3-4.6 1.6-5.6-.4.8-1.1-.3-1.5.5 1.1-2.3 2-4.9-.7-3.6C42.8 21.5 21.5 37.8.4 53c-1 1.2.1 1.5.5 2.1 2.5-1.7 4.7-3.7 7-4.2.6-.4.3 1.8 1.4 2.1.6-.4 1.9-1.2 2.5-1.7 1.3.6.8 2.5 2.1 3.1 1.3.6 3.3-1.7 4.4-1.5 2.3-.6-.5 1.9-2.4 3.1 1.1.3-1.2.8-.8 1.5.9 1.4 1.9 2.8 5 2.1.9-.1.9 1.4 1.4 2.1 7.4-5 15.4-10.4 21.9-16.8 3.6-3.5 8.6-6.2 13.1-9.2.5.7.8 1.6 1.6 2 1.2.7 2.1-1.2 3-.9 1.6-.3.1 1.6-1 2.5.9.3-.7.6-.2 1.2.8 1 1.6 1.9 2.9 2.2-2.3 1.9-4.6 3.9-6.9 5.8-15.9 13.9-31 28.3-45.5 42.8-1.4 1.9 0 1.7.6 2.3 3.4-3.2 6.4-6.8 9.6-8.6.9-.8.3 2 1.7 1.8.9-.8 2.5-2.4 3.4-3.2 1.7.1.8 2.6 2.5 2.7 1.7.1 4.5-3.6 6-3.8 3.1-1.7-.9 2.5-3.4 4.8 1.4-.2-1.7 1.6-1.1 2.2l.4.4c-4.6 5.2-9.3 10.1-14.4 14.6-.6.8-.6 1.2-.4 1.5.2.3.7.4 1 .8 1.5-1.3 2.9-2.7 4.3-3.9s2.7-2.4 4.1-3.1c.7-.7.4 1.9 1.7 1.8.7-.7 2.2-2.1 2.9-2.8 1.6.2 1 2.5 2.6 2.6 1.6.1 3.9-3.4 5.2-3.6 1.4-.9 1.2-.3.5.8s-2.1 2.7-3.2 3.8c1.3-.2-1.5 1.5-.9 2.1.3.3.7.7 1.1 1-2.2 2.6-4.5 5.1-6.9 7.6-4.7 4.9-9.5 9.6-14.7 13.7-.5.6-.8 1-.9 1.3-.1.3-.1.5 0 .6.2.3.8.4 1 .7 2.4-1.9 4.8-3.9 6.9-5.8 1.1-1 2.2-1.8 3.2-2.7 1-.9 2-1.7 3-2.3 1.1-1.1 0 2.3 1.7 1.8 1.2-1.1 3.4-3.3 4.5-4.5 2-.3.7 2.9 2.7 2.6 2.1-.3 5.9-5.6 7.6-6.3 1.9-1.6 1.6-.7.4.9-1.2 1.6-3.4 4.1-5.1 5.9 1.8-.6-2.3 2.3-1.7 2.9s1.2 1.2 2.3 1.1c1.1-.1 2.9-.7 5.6-2.8 1.4-.9 1.2 1.1 1.8 1.7 6.7-7.1 13-14.8 19.2-22.4.5 0 .1 2.1 1.2 2.1.9-.7 2.6-2 3.5-2.7 1.7.2.7 2.6 2.4 2.9 1.7.2 4.6-3.4 6-3.7.3-.2.5-.3.7-.3-10.3 11.6-20.6 23.1-30.7 34.6-2 2.7-.2 2.1.4 2.6 4.5-4.9 8.7-10.1 12.7-13.2 1.1-1.2.1 2.3 1.8 1.7 1.1-1.2 3.4-3.7 4.5-4.9 2-.4.7 2.9 2.8 2.5.7-.1 1.5-.8 2.4-1.6-1.4 1.7-2.8 3.3-4.2 4.9-.8 1.5.3 1.4 1 2 1.4-1.5 2.7-3.1 4-4.4-.7.8-2.2 2.2-1.8 2.6 1.2 1.1 2.4 2.2 7.9-1.8 1.4-.9 1.2 1.1 1.8 1.7 1.6-1.7 3.1-3.4 4.7-5.1.2-.2.5-.3.7-.3 2.2-1.3-.1 2.1-1.8 3.9 1.2-.1-1.1 1.2-.5 1.8 1.1 1 2.2 2 4.7 1-5.7 7.9-11.4 15.8-17.1 23.6-1.3 2.4.2 1.8.8 2.3 3.2-4.2 6.1-8.7 9.1-11.4.8-1.1.5 2.1 2 1.5.8-1.1 2.4-3.2 3.2-4.2 1.8-.3 1.2 2.6 3 2.2s4.3-5 5.8-5.6c3.1-2.7-.6 2.9-3 6 1.5-.6-1.6 2.1-.9 2.6 1.3 1 2.6 2 6.8-1.5 1.1-.8 1.3 1 2 1.5 2.5-3.3 5.1-6.7 7.7-10.2.3.2 1 .7 1.3.9.3.2 0 .7-.4 1.2.3.2.5.5.7.8-5.9 7.4-11.7 15.1-16.7 23.6-.4 1-.2 1.3.1 1.5.3.2.8.2 1.1.4 2.1-3.4 4-7 6.4-8.9.6-.8.8 1.8 2 1.4.6-.8 1.7-2.4 2.3-3.1 1.6 0 1.4 2.3 3 2.2 1.6 0 3.2-3.5 4.5-3.7.2-.1.4-.2.5-.3l-11.1 13.8c-.8 1.6.4 1.4 1 2 2.2-2.6 4.1-5.4 6.4-6.8.6-.6.7 1.7 1.9 1.6.6-.6 1.7-1.9 2.2-2.6 1.5.2 1.3 2.3 2.8 2.4 1.5.2 3.1-3 4.3-3.1 2.3-1.4-.2 2.1-1.8 4 1.2-.1-1.1 1.3-.5 1.8 1.3 1.1 2.5 2.2 5.7.4.9-.4 1.3 1.1 1.9 1.6 6.7-7.8 13.8-16.3 19.1-25.2 4.5-7.3 12.4-14.2 16.7-21.6 1.3-2.2 5.3-4.5 4.7-7.1l-1.6 2c.6-2.8 3.2-4 4.5-6.2-.6-.5-1-.8-.8-1.7-1.1 1.3-2.4 3.6-3.8 4.6l-1-.8c.8-1.6 3-3.1 3.8-4.6-.3-.3-1-.8-1.3-1-.3-.3.2-.9.7-1.6-.5.7-1.6 2-2.1 2.7-.3-.3-1-.8-1.3-1-.3-.3.2-.9.7-1.6-.6-.5-.8-1.7-1.6-1.3l-1.6 2c1.5-2.4 1.4-4.7.7-5.8 0-.3 0-.6-.1-.8l-.2.4-.1-.1c-.1.5-.4.5-.7.5 1-2.2 2.8-3.8 3.8-6-.7-.4-1.1-.6-.9-1.7-.9 1.5-1.9 3.8-3.1 5.2 0-1-.2-1.5-1-1.1.9-1.6 2.5-3.2 3-4.7-.3-.2-.8-.5-1.2-.7 3-4.1 5.8-8.3 8.1-12.7 3.5-6.5 10.4-12.4 13.7-19 1-2 4.6-3.9 3.8-6.3l-1.1 1.9z"
        },
        void 0,
        !1,
        {
          fileName: "app/components/maskedImage.component.jsx",
          lineNumber: 15,
          columnNumber: 7
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/maskedImage.component.jsx",
        lineNumber: 14,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("clipPath", { id: "b", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "use",
        {
          xlinkHref: "#a",
          style: {
            overflow: "visible"
          }
        },
        void 0,
        !1,
        {
          fileName: "app/components/maskedImage.component.jsx",
          lineNumber: 21,
          columnNumber: 7
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/maskedImage.component.jsx",
        lineNumber: 20,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "g",
        {
          style: {
            clipPath: "url(#b)"
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
            !1,
            {
              fileName: "app/components/maskedImage.component.jsx",
              lineNumber: 33,
              columnNumber: 7
            },
            this
          )
        },
        void 0,
        !1,
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
  !0,
  {
    fileName: "app/components/maskedImage.component.jsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
);
function MaskedImage(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: props.classprop, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SvgComponent, { image: props.image }, void 0, !1, {
    fileName: "app/components/maskedImage.component.jsx",
    lineNumber: 49,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/maskedImage.component.jsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

// app/components/mainMenu.component.jsx
var import_react7 = require("@remix-run/react"), import_react_animate_on_scroll = __toESM(require("react-animate-on-scroll"));

// app/styles/menu.styles.css
var menu_styles_default = "/build/_assets/menu.styles-MIR6E2GO.css";

// app/components/mainMenu.component.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), menuItems = [
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
  return menuItems.forEach((element) => {
    element.link != linkName && newPages.push(element);
  }), newPages;
}
function getName(linkName) {
  var page = [];
  return menuItems.forEach((element) => {
    element.link === linkName && (page = element);
  }), page;
}
function MainMenu(props) {
  let [image, setImage] = (0, import_react6.useState)("/images/ContactBanner.png"), [hoveredItem, setHovered] = (0, import_react6.useState)(""), scrolling = props.scrolling, page = String("/" + props.page), newPages = newArray(page);
  function changeHover(newItem) {
    setHovered(newItem.name), setImage(newItem.image);
  }
  function unsetHover() {
    setHovered("");
  }
  let currentElement = getName(page), onReopen = props.onReopen;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "menuBackground", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(logoBleedOfflSVG_component_default, { className: "logoHeading", color: "#e05210", logoID: "logoHead" }, void 0, !1, {
      fileName: "app/components/mainMenu.component.jsx",
      lineNumber: 74,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/components/mainMenu.component.jsx",
      lineNumber: 74,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/components/mainMenu.component.jsx",
      lineNumber: 75,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      MaskedImage,
      {
        classprop: "mainMenuImage",
        image,
        alt: "Branding"
      },
      void 0,
      !1,
      {
        fileName: "app/components/mainMenu.component.jsx",
        lineNumber: 76,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "menuList", children: [
      scrolling && props.page && props.page != "/" ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "bounding", onMouseEnter: () => changeHover(currentElement), onMouseLeave: unsetHover, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: "/images/icon_SK.svg", alt: "highlight", className: hoveredItem === currentElement.name ? "highlightImage" : "highlightImage offImage" }, void 0, !1, {
          fileName: "app/components/mainMenu.component.jsx",
          lineNumber: 85,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "div",
          {
            className: hoveredItem === currentElement.name ? "menuItem active" : "menuItem",
            onClick: onReopen,
            children: currentElement
          },
          void 0,
          !1,
          {
            fileName: "app/components/mainMenu.component.jsx",
            lineNumber: 88,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/mainMenu.component.jsx",
        lineNumber: 84,
        columnNumber: 9
      }, this) : props.page && props.page != "/" ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "div",
        {
          className: "bounding",
          onMouseEnter: () => changeHover(currentElement),
          onMouseLeave: unsetHover,
          onClick: onReopen,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: "/images/icon_SK.svg", alt: "highlight", className: hoveredItem === currentElement.name ? "highlightImage" : "highlightImage offImage" }, void 0, !1, {
              fileName: "app/components/mainMenu.component.jsx",
              lineNumber: 102,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "div",
              {
                className: hoveredItem === currentElement.name ? "menuItem active" : "menuItem",
                children: currentElement.name
              },
              void 0,
              !1,
              {
                fileName: "app/components/mainMenu.component.jsx",
                lineNumber: 105,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/mainMenu.component.jsx",
          lineNumber: 96,
          columnNumber: 9
        },
        this
      ) : "",
      scrolling ? newPages.map(
        (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react_animate_on_scroll.default, { animateIn: "slideInLeft", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "bounding", onMouseEnter: () => changeHover(item), onMouseLeave: unsetHover, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: "/images/icon_SK.svg", alt: "highlight", className: hoveredItem === item.name ? "highlightImage" : "highlightImage offImage" }, void 0, !1, {
            fileName: "app/components/mainMenu.component.jsx",
            lineNumber: 117,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_react7.Link,
            {
              to: item.link,
              className: hoveredItem === item.name ? "menuItem active" : "menuItem",
              children: item.name
            },
            void 0,
            !1,
            {
              fileName: "app/components/mainMenu.component.jsx",
              lineNumber: 120,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/mainMenu.component.jsx",
          lineNumber: 116,
          columnNumber: 11
        }, this) }, item.name, !1, {
          fileName: "app/components/mainMenu.component.jsx",
          lineNumber: 115,
          columnNumber: 9
        }, this)
      ) : newPages.map(
        (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "bounding", onMouseEnter: () => changeHover(item), onMouseLeave: unsetHover, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: "/images/icon_SK.svg", alt: "highlight", className: hoveredItem === item.name ? "highlightImage" : "highlightImage offImage" }, void 0, !1, {
            fileName: "app/components/mainMenu.component.jsx",
            lineNumber: 131,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_react7.Link,
            {
              to: item.link,
              className: hoveredItem === item.name ? "menuItem active" : "menuItem",
              children: item.name
            },
            void 0,
            !1,
            {
              fileName: "app/components/mainMenu.component.jsx",
              lineNumber: 134,
              columnNumber: 13
            },
            this
          )
        ] }, item.name, !0, {
          fileName: "app/components/mainMenu.component.jsx",
          lineNumber: 130,
          columnNumber: 9
        }, this)
      )
    ] }, void 0, !0, {
      fileName: "app/components/mainMenu.component.jsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/components/mainMenu.component.jsx",
      lineNumber: 146,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/mainMenu.component.jsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}
var links3 = () => [
  { rel: "stylesheet", href: menu_styles_default }
];

// app/styles/page.styles.css
var page_styles_default = "/build/_assets/page.styles-6UW2SEZ2.css";

// app/styles/print.styles.css
var print_styles_default = "/build/_assets/print.styles-PZO324GG.css";

// app/routes/__app.print-original.jsx
var import_react10 = require("@remix-run/react");

// brandingInfo.json
var brandingInfo_default = {
  branding: [{
    name: "Enhance Printing",
    hero: {
      image: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-1.webp",
      alt: "Enhance Printing Brand Portfolio",
      placeholder: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-1_LowRes.webp",
      size: "large"
    },
    heroAlsoFirstImage: !0,
    noDescription: !1,
    noBreakdown: !1,
    breakdown: [
      {
        title: "Service",
        text: "Rebrand"
      },
      {
        title: "Mission",
        text: "My intent for this rebrand was crafting a new look for Enhance Printing that was web-forward and modern, to help compete in today\u2019s marketplace."
      },
      {
        title: "Brand Process",
        text: "When working on Enhance Printing\u2019s rebrand, I my goal was to retain key elements from the original logo, while working to create a sleeker feel. Using various local and international marketing companies as touchstones, I began diving into imagery that paid tribute to the original look, but also pushed the brand in a modern direction, to make it a contender in an increasingly digital marketplace."
      },
      {
        title: "Included Services",
        text: "Brand Identity, Logo Design, Website, Stationary, Marketing Collateral, Copywriting"
      }
    ],
    hasOriginalLogo: !0,
    originalLogo: {
      image: "/images/brandImages/enhance/Enh_Orig_Logo.webp",
      alt: "Original Enhance Printing Logo",
      placeholder: "/images/brandImages/enhance/Enh_Orig_Logo_LowRes.webp"
    },
    shortDescription: "Enhance Printing Rebrand",
    images: [{
      image: "/images/brandImages/enhance/EnhanceWebsite.webp",
      alt: "A Website To Compete in a Modern Market",
      placeholder: "/images/brandImages/enhance/EnhanceWebsite_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-9.webp",
      alt: "Stationary to fit the New Look",
      placeholder: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-9_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/enhance/Enhance_Sketches.webp",
      alt: "Sketching out the Idea",
      placeholder: "/images/brandImages/enhance/Enhance_Sketches_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-8.webp",
      alt: "Branded Icons to Communicate Services Quickly",
      placeholder: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-8_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-4.webp",
      alt: "Bringing the Brand To Life With Color",
      placeholder: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-4_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-6.webp",
      alt: "The Brand Identity Across Print",
      placeholder: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-6_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/brandImages/enhance/EnhanceMagazines.webp",
      alt: "Magazines to Showcase Services",
      placeholder: "/images/brandImages/enhance/EnhanceMagazines_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/enhance/EnhanceMagazines_Spreads.webp",
      alt: "Magazines to Showcase Services",
      placeholder: "/images/brandImages/enhance/EnhanceMagazines_Spreads_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-11.webp",
      alt: "Enhance Printing, Refreshed and Ready to Serve",
      placeholder: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-11_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "The Rolling Restaurant",
    hero: {
      image: "/images/brandImages/rolling/RollingRest_Logo.webp",
      alt: "The Rolling Restaurant Brand Identity",
      placeholder: "/images/brandImages/rolling/RollingRest_Logo_LowRes.webp",
      size: "large"
    },
    heroAlsoFirstImage: !0,
    noDescription: !1,
    noBreakdown: !1,
    breakdown: [{
      title: "Service",
      text: "Brand Identity"
    }, {
      title: "Mission",
      text: "A rolling restaurant with a rotating menu, the Rolling Restaurant was looking for an image both eye-catching, and retro."
    }, {
      title: "Brand Process",
      text: "My client initially came to me with the idea of a logo featuring a \u201Ccaveman stone\u201D, which was my leaping off point. The final brand was inspired by classic rock albums from the late 1960s and early 1970s while adding a modern, clean edge. I worked to find typographic options and a color palette that was both pulpy and eye catching to best draw potential customers to his varied, rotating offerings."
    }, {
      title: "Included Services",
      text: "Brand Identity, Logo Design, Business Cards, Packaging, Signage, Vehicle Graphics"
    }],
    hasOriginalLogo: !1,
    originalLogo: {
      image: "",
      alt: "",
      placeholder: "",
      size: "small"
    },
    shortDescription: "",
    images: [{
      image: "/images/brandImages/rolling/FoodWrap_1.webp",
      alt: "Eyecatching Wraps to Draw New Customers",
      placeholder: "/images/brandImages/rolling/FoodWrap_1_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/brandImages/rolling/FoodWrap_2.webp",
      alt: "Eyecatching Wraps to Draw New Customers",
      placeholder: "/images/brandImages/rolling/FoodWrap_2_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/brandImages/rolling/RollingRest_Sketches.webp",
      alt: "Crafting the Brand Identity",
      placeholder: "/images/brandImages/rolling/RollingRest_Sketches.webp_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/brandImages/rolling/RollingRest_Alternates.webp",
      alt: "Alternate Logos in the Brainstorming Stage",
      placeholder: "/images/brandImages/rolling/RollingRest_Alternates_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/brandImages/rolling/Shirt-Mockup.webp",
      alt: "Repping the Brand While Cooking",
      placeholder: "/images/brandImages/rolling/Shirt-Mockup_LowRes.webp",
      size: "large"
    }, {
      image: "/images/brandImages/rolling/RollingRestaurant_BCs.webp",
      alt: "Business Cards to Drum Up Business",
      placeholder: "/images/brandImages/rolling/RollingRestaurant_BCs_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/brandImages/rolling/RollingRestaurant_BurgerBox.webp",
      alt: "Taking a Piece Home With You",
      placeholder: "/images/brandImages/rolling/RollingRestaurant_BurgerBox_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/brandImages/rolling/RollingRestaurant_Menu.webp",
      alt: "A Menu To Catch the Eye",
      placeholder: "/images/brandImages/rolling/RollingRestaurant_Menu_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "Rex's Plumbing & Heating",
    hero: {
      image: "/images/brandImages/rex/RexLogo.webp",
      alt: "Rex's Plumbing & Heating",
      placeholder: "/images/brandImages/rex/RexLogo_LowRes.webp",
      size: "large"
    },
    heroAlsoFirstImage: !0,
    noDescription: !1,
    noBreakdown: !1,
    breakdown: [{
      title: "Service",
      text: "Rebrand"
    }, {
      title: "Mission",
      text: "The focus of this design was a bold, eye-catching look, primarily for use on Rex\u2019s vans."
    }, {
      title: "Brand Process",
      text: "For years, Rex\u2019s image included a running woman carrying a plunger, (seen in the some of the formative sketches shown). More recently, he began incorporating a T-Rex chasing the woman into his companies advertisements. For direction, we played with both the woman, the T-Rex, and a combination of the two to find the right look for the business. In the end, we settled on a unified look with just the T-Rex, because nothing quite screamed \u201CCall Rex\u201D like the maw of the King of the Dinosaurs himself."
    }, {
      title: "Included Services",
      text: "Brand Identity, Logo Design, Stationary, Marketing Collateral, Vehicle Graphics"
    }],
    hasOriginalLogo: !0,
    originalLogo: {
      image: "/images/brandImages/rex/Rex_Orig_Logo.webp",
      alt: "RexOriginalLogo",
      placeholder: "/images/brandImages/rex/Rex_Orig_Logo_LowRes.webp",
      size: "small"
    },
    shortDescription: "",
    images: [{
      image: "/images/brandImages/rex/Rex Van.webp",
      alt: "Eyecatching Vehicles for Mobile Advertising",
      placeholder: "/images/brandImages/rex/Rex Van_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rex/RexShirt_Mockup.webp",
      alt: "Shirts For Customer Trust",
      placeholder: "/images/brandImages/rex/RexShirt_Mockup_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rex/Rex_Sketches.webp",
      alt: "Crafting the Brand Identity",
      placeholder: "/images/brandImages/rex/Rex_Sketches_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/brandImages/rex/Rex_Alternates.webp",
      alt: "Alternate Logos in the Brainstorming Stage",
      placeholder: "/images/brandImages/rex/Rex_Alternates_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/brandImages/rex/RexBC.webp",
      alt: "Business Cards to Drum Up Business",
      placeholder: "/images/brandImages/rex/RexBCs_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/brandImages/rex/Rex-Presentation-TemplateArtboard-6.webp",
      alt: "Creating the Brand's Voice",
      placeholder: "/images/brandImages/rex/Rex-Presentation-TemplateArtboard-6_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/brandImages/rex/Rex-Presentation-TemplateArtboard-11.webp",
      alt: "A New Face For Rex",
      placeholder: "/images/brandImages/rex/Rex-Presentation-TemplateArtboard-11_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "\xC6GIR\u2019 S WORKSHOP",
    hero: {
      image: "/images/brandImages/aegir/Aegirs-Artboard-11.webp",
      alt: "Aegir's Workshop Brand",
      placeholder: "/images/brandImages/aegir/Aegirs-Artboard-11_LowRes.webp",
      size: "large"
    },
    heroAlsoFirstImage: !0,
    noDescription: !1,
    noBreakdown: !1,
    breakdown: [{
      title: "Service",
      text: "Brand Identity"
    }, {
      title: "Mission",
      text: "For a hand-crafted leatherworking company, I wanted to craft an image that was both classical and modern, to best show off the owner\u2019s unique crafting philosophies, and drive his brand in the marketplace."
    }, {
      title: "Brand Process",
      text: "The owner of Aegir\u2019s Workshop is fascinated by Norse mythology and immediately wanted to name his company after the Norse Giant most commonly associated with the sea. Using this as inspiration, I began honing in on a nautical theme. For the final logo, I went with a Viking longship done in a modernization of Nordic scrollwork, paired with a heavy neo-Viking font. For his brand identity, I paired leather textures with a nautical flair to give Aegir\u2019s Workshop a hand-crafted feel, that ties the classical to the modern."
    }, {
      title: "Included Services",
      text: "Brand Identity, Logo Design, Website, Marketing Collateral, Copywriting, Packaging"
    }],
    hasOriginalLogo: !1,
    originalLogo: {
      image: "",
      alt: "",
      placeholder: "",
      size: "small"
    },
    shortDescription: "",
    images: [{
      image: "/images/brandImages/aegir/AegirsWorkshopSite.webp",
      alt: "A Website To Draw Consumer's to Custom Goods",
      placeholder: "/images/brandImages/aegir/AegirsWorkshopSite_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/aegir/AegirsBC_Mockup.webp",
      alt: "Business Cards for Local Sales",
      placeholder: "/images/brandImages/aegir/AegirsBC_Mockup_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/aegir/Aegir_Sketches.webp",
      alt: "Crafting the Brand Identity",
      placeholder: "/images/brandImages/aegir/Aegir_Sketches_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/brandImages/aegir/Aegir_Alternates.webp",
      alt: "Alternate Logos in the Brainstorming Stage",
      placeholder: "/images/brandImages/aegir/Aegir_Alternates_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/brandImages/aegir/Aegirs-Artboard-7.webp",
      alt: "Branded Imagery",
      placeholder: "/images/brandImages/aegir/Aegirs-Artboard-7_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/brandImages/aegir/Aegirs-Artboard-4.webp",
      alt: "Finding the Brand's Look",
      placeholder: "/images/brandImages/aegir/Aegirs-Artboard-4_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/brandImages/aegir/AegirsLabel.webp",
      alt: "Custom Tags",
      placeholder: "/images/brandImages/aegir/AegirsLabel_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/aegir/AegirsTag.webp",
      alt: "Tags for Custom Items",
      placeholder: "/images/brandImages/aegir/AegirsTag_LowRes.webp",
      size: "small"
    }]
  }, {
    name: "Mutt Knee Brace",
    hero: {
      image: "/images/brandImages/mutt/MuttKneeLogo.webp",
      alt: "Mutt Knee Brace Logo Design",
      placeholder: "/images/brandImages/mutt/MuttKneeLogo_LowRes.webp",
      size: "large"
    },
    heroAlsoFirstImage: !0,
    noDescription: !1,
    noBreakdown: !1,
    breakdown: [{
      title: "Service",
      text: "Rebrand"
    }, {
      title: "Story",
      text: "A logo created for a local producer of dog knee braces. I used elements from their original logo, paired with a fun, playful font to remind dog owners of their joyous dog and suggest that (with some help) they can have their energetic pup back. To accompany the logo, I also provided them with marketing collateral, business cards, and slips to include in their product packages."
    }],
    hasOriginalLogo: !1,
    originalLogo: {
      image: "",
      alt: "",
      placeholder: "",
      size: "small"
    },
    shortDescription: "",
    images: [{
      image: "/images/brandImages/mutt/MuttKneeBusinessCards.webp",
      alt: "Mutt Knee Brace Business Cards",
      placeholder: "/images/brandImages/mutt/MuttKneeBusinessCards_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/mutt/MuttKneeTrifold.webp",
      alt: "Mutt Knee Brace Brochures",
      placeholder: "/images/brandImages/mutt/MuttKneeTrifold_LowRes.webp",
      size: "small"
    }]
  }, {
    name: "Four Seasons Business & Investment Solutions",
    hero: {
      image: "/images/brandImages/seasons/FourSeasonsLogo.webp",
      alt: "Four Seasons Businesss Solutions Logo Design",
      placeholder: "/images/brandImages/seasons/FourSeasonsLogo_LowRes.webp",
      size: "large"
    },
    heroAlsoFirstImage: !0,
    noDescription: !1,
    noBreakdown: !1,
    breakdown: [{
      title: "Service",
      text: "Brand Identity"
    }, {
      title: "Story",
      text: "A logo for a woman-owned investments solutions firm. Tory was searching for a logo that was both professional with a natural look that stood out from the blocky, 'masculine' look of her competitors. We worked to craft a logo that was inspired by the changing of the seasons, suggesting maintaing an edge in the investments market despite market changes and shift. To accompany her logo design, I worked on her stationary and brand kit, as well as se veral banners to advertise her new services."
    }],
    hasOriginalLogo: !1,
    originalLogo: {
      image: "",
      alt: "",
      placeholder: "",
      size: "small"
    },
    shortDescription: "",
    images: [{
      image: "/images/brandImages/seasons/FourSeasons_Letterhead.webp",
      alt: "Four Seasons Businesss Solutions Letterhead",
      placeholder: "/images/brandImages/seasons/FourSeasons_Letterhead_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/seasons/FourSeasons_BC.webp",
      alt: "Four Seasons Businesss Solutions Business Cards",
      placeholder: "/images/brandImages/seasons/FourSeasons_BC_LowRes.webp",
      size: "small"
    }]
  }, {
    name: "Coldstone Creamery",
    hero: {
      image: "/images/specImages/coldstone/coldstoneLogo.webp",
      alt: "Coldstone Speculative Rebrand",
      placeholder: "/images/specImages/coldstone/coldstoneLogo_LowRes.webp",
      size: "large"
    },
    heroAlsoFirstImage: !0,
    noDescription: !1,
    noBreakdown: !1,
    breakdown: [{
      title: "Service",
      text: "Speculative Rebrand"
    }, {
      title: "Mission",
      text: "My employer was the go-to printer for our local Cold Stone Creamery for many years. In that time I developed an expansive knowledge of their brand and marketing materials. For fun, I decided to try my hand at crafting a brand refresh for Cold Stone."
    }, {
      title: "Brand Process",
      text: "My goal was to create a fresh look that kept much of Cold Stone Creamery\u2019s history intact, while modernizing their currently dated logo. To compliment the new looks, I created an array of slogans and imagery to use across digital and print media, as well as their storefronts and interiors."
    }, {
      title: "Included Services",
      text: "Brand Identity, Logo Design, Point of Sale Design, Marketing Collateral, Copywriting, Application Design"
    }],
    hasOriginalLogo: !1,
    originalLogo: {
      image: "",
      alt: "",
      placeholder: "",
      size: "small"
    },
    shortDescription: "",
    images: [{
      image: "/images/specImages/coldstone/mixItUpSlogan.webp",
      alt: "Bold, Colorful, and Creative",
      placeholder: "/images/specImages/coldstone/mixItUpSlogan_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/Coldstone Feather Flag Mockup.webp",
      alt: "Bold Signage for Bold Slogans",
      placeholder: "/images/specImages/coldstone/Coldstone Feather Flag Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/coldstone_Sketches.webp",
      alt: "Sketching Out Coldstone's Rebrand",
      placeholder: "/images/specImages/coldstone/coldstone_Sketches_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/coldstone/coldstone_Alternates.webp",
      alt: "Logo Alternates for the Brand Image",
      placeholder: "/images/specImages/coldstone/coldstone_Alternates_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/coldstone/coldstone_iceCreamTub.webp",
      alt: "New Packaging for the New Look",
      placeholder: "/images/specImages/coldstone/coldstone_iceCreamTub_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/coldstoneCakeBox_Mockup.webp",
      alt: "New Cake Boxes",
      placeholder: "/images/specImages/coldstone/coldstoneCakeBox_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/colstoneCooler_Mockup.webp",
      alt: "A New Look Keeping it Cool",
      placeholder: "/images/specImages/coldstone/colstoneCooler_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/coldstoneConeWrap_Mockup.webp",
      alt: "Even the Cones are Sprinkled with Fun",
      placeholder: "/images/specImages/coldstone/coldstoneConeWrap_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/coldstoneInterior_Mockup.webp",
      alt: "A New Look In the Store",
      placeholder: "/images/specImages/coldstone/coldstoneInterior_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/ColdstoneSign_Mockup.webp",
      alt: "Signage for Maximum Visibility",
      placeholder: "/images/specImages/coldstone/ColdstoneSign_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/coldstoneApron_Mockup.webp",
      alt: "A New Uniform - Aprons",
      placeholder: "/images/specImages/coldstone/coldstoneApron_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/coldstoneVisor_Mockup.webp",
      alt: "A New Uniform - Hats",
      placeholder: "/images/specImages/coldstone/coldstoneVisor_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/coldstoneCoupons_Mockup.webp",
      alt: "New Print Collateral",
      placeholder: "/images/specImages/coldstone/coldstoneCoupons_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/coldstoneApp_Mockup.webp",
      alt: "A New Ordering System",
      placeholder: "/images/specImages/coldstone/coldstoneApp_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/coldstone_posters.webp",
      alt: "New Street Marketing",
      placeholder: "/images/specImages/coldstone/coldstone_posters_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "Baker Law",
    hero: {
      image: "/images/specImages/bakerLaw/BakerLawLogo.webp",
      alt: "Baker Law Rebrand Concept",
      placeholder: "images/specImages/bakerLaw/BakerLawLogo_LowRes.webp",
      size: "large"
    },
    heroAlsoFirstImage: !0,
    noDescription: !1,
    noBreakdown: !1,
    breakdown: [{
      title: "Service",
      text: "Speculative Rebrand"
    }, {
      title: "Mission",
      text: "This was a pitch project I worked on for a local attorney, Bob Baker. While he decided to remain with his old branding, I am proud of this project, and wanted to use it to show my skills as a graphic designer."
    }, {
      title: "Brand Process",
      text: "This rebrand focused on creating an identity that emphasized Mr. Baker's hopeful outlook, and willingness to assist others. The previous logo had a heavy focus on religious imagery, which I felt lessened the potential clients for his work. His focus on estate law, led me to crafting an image centered around the sun over the horizon, both as a sunset (end of life), and as a sunrise (new beginnings)."
    }, {
      title: "Included Services",
      text: "Brand Identity, Logo Design, Website, Stationary, Marketing Collateral, Copywriting"
    }],
    hasOriginalLogo: !1,
    originalLogo: {
      image: "",
      alt: "",
      placeholder: "",
      size: "small"
    },
    shortDescription: "",
    images: [{
      image: "/images/specImages/bakerLaw/BakerLaw_Stationary_mockup.webp",
      alt: "Baker Law Stationary",
      placeholder: "images/specImages/bakerLaw/BakerLaw_Stationary_mockup_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/bakerLaw/BakerLaw_Retractable_Mockup.webp",
      alt: "Baker Law Retractable Banner",
      placeholder: "images/specImages/bakerLaw/BakerLaw_Retractable_Mockup_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/bakerLaw/Baker_Sketches.webp",
      alt: "Baker Law Sketches",
      placeholder: "images/specImages/bakerLaw/Baker_Sketches_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/bakerLaw/Baker_Alternates.webp",
      alt: "Baker Law Alternate Logos",
      placeholder: "images/specImages/bakerLaw/Baker_Alternates_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/bakerLaw/BakerLaw_Web_Mockup.webp",
      alt: "Baker Law Website 1",
      placeholder: "images/specImages/bakerLaw/BakerLaw_Web_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/bakerLaw/BakerLaw_Web_Mockup-2.webp",
      alt: "Baker Law Website 2",
      placeholder: "images/specImages/bakerLaw/BakerLaw_Web_Mockup-2_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/bakerLaw/BakerLaw_Web_Mockup-3.webp",
      alt: "Baker Law Website 3",
      placeholder: "images/specImages/bakerLaw/BakerLaw_Web_Mockup-3_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/bakerLaw/BakerLaw_Web_Mockup-4.webp",
      alt: "Baker Law Website 4",
      placeholder: "images/specImages/bakerLaw/BakerLaw_Web_Mockup-4_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/bakerLaw/BakerFolder_Mockup-Outside.webp",
      alt: "Baker Law Pocket Folder",
      placeholder: "images/specImages/bakerLaw/BakerFolder_Mockup-Outside_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/bakerLaw/BakerFolder_Mockup-Inside.webp",
      alt: "Baker Law Pocket Folder Inside",
      placeholder: "images/specImages/bakerLaw/BakerFolder_Mockup-Inside_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/bakerLaw/BakerBinder_Mockup.webp",
      alt: "Baker Law Binders",
      placeholder: "images/specImages/bakerLaw/BakerBinder_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/bakerLaw/BakerMug_Mockup.webp",
      alt: "Baker Law Mug",
      placeholder: "images/specImages/bakerLaw/BakerMug_Mockup_LowRes.webp",
      size: "mid"
    }]
  }, {
    name: "Five Guys Burgers & Fries",
    hero: {
      image: "/images/specImages/5guys/fiveGuysLogo.webp",
      alt: "Five Guys Burgers & Fries Rebrand Concept",
      placeholder: "/images/specImages/5guys/fiveGuysLogo_LowRes.webp",
      size: "large"
    },
    heroAlsoFirstImage: !0,
    noDescription: !1,
    noBreakdown: !1,
    breakdown: [{
      title: "Service",
      text: "Speculative Rebrand"
    }, {
      title: "Mission",
      text: "To create a fresh look for Five Guys Burgers to better capture their atmosphere, and offerings."
    }, {
      title: "Brand Process",
      text: "For another for-fun rebrand, I wanted to visit the Five Guys Burger franchise. While I am a big fan of their burgers (especially the limitless toppings), I feel their brand is in need of a glow up. For this rebrand, I wanted to create a more 'edgy' look, to draw in a younger, college-aged audience, without losing their family-friendly atmosphere. With this project, my goal was to craft a type-based design style that spanned across their print collateral and spruced up their restaurant interiors, focusing customers on their customizable burger options and generous portions."
    }, {
      title: "Included Services",
      text: "Brand Identity, Logo Design, Point of Sale Design, Marketing Collateral, Copywriting, Application Design"
    }],
    hasOriginalLogo: !0,
    originalLogo: {
      image: "",
      alt: "",
      placeholder: "",
      size: "small"
    },
    shortDescription: "",
    images: [{
      image: "/images/specImages/5guys/5Guys_Sketches.webp",
      alt: "Five Guys Burgers & Fries Rebrand Sketches",
      placeholder: "/images/specImages/5guys/5Guys_Sketches_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/5guys/5Guys_Alternates.webp",
      alt: "Five Guys Burgers & Fries Rebrand Alternate Logos",
      placeholder: "/images/specImages/5guys/5Guys_Alternates_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/5guys/5Guys_FoodContainers.webp",
      alt: "New Packaging For the New Look",
      placeholder: "/images/specImages/5guys/5Guys_FoodContainers_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/5guys/fiveGuysSign_Mockup.webp",
      alt: "Eyecatching Signage for Mouthwatering Burgers",
      placeholder: "/images/specImages/5guys/fiveGuysSign_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/5guys/fiveguysInterior_mockup_04.webp",
      alt: "New Interior Decoration",
      placeholder: "/images/specImages/5guys/fiveguysInterior_mockup_04_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/5guys/5GuysInterior2.webp",
      alt: "Slogans as Art",
      placeholder: "/images/specImages/5guys/5GuysInterior2_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/5guys/5GuysShirt_Mockup.webp",
      alt: "New Uniforms to Compliment the New Feel",
      placeholder: "/images/specImages/5guys/5GuysShirt_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/5guys/5GuysHat.webp",
      alt: "Hats for Customers and Servers Alike",
      placeholder: "/images/specImages/5guys/5GuysHat_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/5guys/5guysPosters.webp",
      alt: "Street Marketing for the New Look",
      placeholder: "/images/specImages/5guys/5guysPosters_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "Colorado Outfitters",
    hero: {
      image: "/images/specImages/coOutfitters/COOutfitters-Logo.webp",
      alt: "Colorado Outfitters Rebrand Concept",
      placeholder: "/images/specImages/coOutfitters/COOutfitters-Logo_LowRes.webp",
      size: "large"
    },
    heroAlsoFirstImage: !0,
    noDescription: !1,
    noBreakdown: !1,
    breakdown: [{
      title: "Service",
      text: "Speculative Rebrand"
    }, {
      title: "Mission",
      text: "Creating a modern look that still embraced the rustic, outdoorsman nature of their business, in hopes of creating more brand recognition in the Northern Colorado region."
    }, {
      title: "Brand Process",
      text: "Colorado Outfitters is a company I've worked with on their marketing collateral for several years. As part of a project pitch, I came up with an alternate brand identity to help modernize their look. While they chose to remain with their old identity, I'm still proud of the work done on this project, and wanted to put it forward as an example of the work I am capable of."
    }, {
      title: "Included Services",
      text: "Brand Identity, Logo Design, Marketing Collateral, Sellable Items"
    }],
    hasOriginalLogo: !1,
    originalLogo: {
      image: "",
      alt: "",
      placeholder: "",
      size: "small"
    },
    shortDescription: "",
    images: [{
      image: "/images/specImages/coOutfitters/Outfitters_Sketches.webp",
      alt: "Colorado Outfitters Rebrand Sketches",
      placeholder: "/images/specImages/coOutfitters/Outfitters_Sketches_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/coOutfitters/Outfitters_Alternates.webp",
      alt: "Colorado Outfitters Rebrand Alternate Options",
      placeholder: "/images/specImages/coOutfitters/Outfitters_Alternates_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/coOutfitters/CO_Outfit_WebMockups.webp",
      alt: "Colorado Outfitters Rebrand Website",
      placeholder: "/images/specImages/coOutfitters/CO_Outfit_WebMockups_LowRes.webp",
      size: "large"
    }, {
      image: "/images/specImages/coOutfitters/COOutfitter_Trifold.webp",
      alt: "Colorado Outfitters Rebrand Trifolds",
      placeholder: "/images/specImages/coOutfitters/COOutfitter_Trifold_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/coOutfitters/CO_Outfitters_BCMockup.webp",
      alt: "Colorado Outfitters Rebrand Business Cards",
      placeholder: "/images/specImages/coOutfitters/CO_Outfitters_BCMockup_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/coOutfitters/COOutfitters_Hip Flask Mockup.webp",
      alt: "Colorado Outfitters Rebrand Collateral - Hip Flask",
      placeholder: "/images/specImages/coOutfitters/COOutfitters_Hip Flask Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coOutfitters/COOutfitters_Travel_Mug_Mockup.webp",
      alt: "Colorado Outfitters Rebrand Collateral - Travel Mug",
      placeholder: "/images/specImages/coOutfitters/COOutfitters_Travel_Mug_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coOutfitters/CO_Outfitters_Tote_Bag_Mockup.webp",
      alt: "Colorado Outfitters Rebrand Collateral - Tote Bag",
      placeholder: "/images/specImages/coOutfitters/CO_Outfitters_Tote_Bag_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coOutfitters/COOutfitters_ShotGlass.webp",
      alt: "Colorado Outfitters Rebrand Collateral - Shot Glass",
      placeholder: "/images/specImages/coOutfitters/COOutfitters_ShotGlass_LowRes.webp",
      size: "mid"
    }]
  }, {
    name: "Sleepy Siren Bath Co.",
    hero: {
      image: "/images/brandImages/siren/SleepySirenLogo.webp",
      alt: "Sleepy Siren Bath Co. Logo Design",
      placeholder: "/images/brandImages/siren/SleepySirenLogo_LowRes.webp",
      size: "large"
    },
    heroAlsoFirstImage: !0,
    noDescription: !1,
    noBreakdown: !1,
    breakdown: [{
      title: "Service",
      text: "Brand Identity"
    }, {
      title: "Story",
      text: "Created for a start-up boutique specializing in bath products, ths logo combined a Grecian flair with a modern art style. My objective was to find an image that fit Sleepy Siren\u2019s primarily digital marketplace, the exotic nature of their offerings, and the personality of the company's owner. Once the logo was complete, I also oversaw developing packaging for all outgoing products."
    }],
    hasOriginalLogo: !1,
    originalLogo: {
      image: "",
      alt: "",
      placeholder: "",
      size: "small"
    },
    shortDescription: "",
    images: [{
      image: "/images/brandImages/siren/SleepySirenSoapMockup.webp",
      alt: "Sleepy Siren Bath Co. Soap Packaging",
      placeholder: "/images/brandImages/siren/SleepySirenSoapMockup_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/siren/SleepySiren_PerfumeBottle.webp",
      alt: "Sleepy Siren Bath Co. Fragrance Bottle",
      placeholder: "/images/brandImages/siren/SleepySiren_PerfumeBottle_LowRes.webp",
      size: "small"
    }]
  }, {
    name: "Ascendent Sales & Marketing",
    heroAlsoFirstImage: !0,
    noDescription: !1,
    noBreakdown: !0,
    breakdown: [],
    hasOriginalLogo: !1,
    originalLogo: {},
    shortDescription: "Ascendent Sales came to me with a very simplistic logo depicting the mountains. My main focus in his brand revamp was crafting a logo with a sense of momentum, to go along with the sales and marketing field. Using the static mountains, I crafted a flowing stream, and used a trustworthy serif font that still had a touch of flair.",
    images: [{
      image: "/images/brandImages/misc/AscendentLogo.webp",
      alt: "Ascendent Sales & Marketing Logo Design",
      placeholder: "/images/brandImages/misc/AscendentLogo_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "RetroFit Electric",
    heroAlsoFirstImage: !1,
    noDescription: !1,
    noBreakdown: !0,
    breakdown: [],
    hasOriginalLogo: !1,
    originalLogo: {},
    shortDescription: "I worked on this brand identity for an startup electrical outfit. The owner was looking for an image with a retro vibe, without sacrificing a modern, streamlined look to fit in with today's market. I worked to craft a look that was both unique, and easily legible for quick brand recognition.",
    images: [{
      image: "/images/brandImages/misc/RetroFit-Electric-Logo.webp",
      alt: "RetroFit Electric Logo Design",
      placeholder: "/images/brandImages/misc/RetroFit-Electric-Logo_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "True North Sales & Marketing",
    heroAlsoFirstImage: !1,
    noDescription: !1,
    noBreakdown: !0,
    breakdown: [],
    hasOriginalLogo: !1,
    originalLogo: {},
    shortDescription: "Done in partnership with a local sales & consulting startup, I worked to craft a signature look that both reflected modern branding standards, and had a personal, classic touch. Working with a stylization of the compass rose, I paired it with a strong, bold font to reflect both the classical ideals of trustworthiness, as well as the bold outlook required to excel in sales.",
    images: [{
      image: "/images/brandImages/misc/TrueNorthLogo.webp",
      alt: "True North Sales & Marketing Logo Design",
      placeholder: "/images/brandImages/misc/TrueNorthLogo_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "Execute Multi Services",
    heroAlsoFirstImage: !1,
    noDescription: !1,
    noBreakdown: !0,
    breakdown: [],
    hasOriginalLogo: !1,
    originalLogo: {},
    shortDescription: "A logo created for a small restoration and contracting business. Their primary selling point is offering a vast array of services in home repair and construction. For this company, I tried to evoke a sense of their wide array of knowledge, and highlight the speed of their service, paired with a bold, masculine type selection.",
    images: [{
      image: "/images/brandImages/misc/ExecuteLogo.webp",
      alt: "Execute Multi Services Logo Design",
      placeholder: "/images/brandImages/misc/ExecuteLogo_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "Summit Cabinet Coatings",
    heroAlsoFirstImage: !1,
    noDescription: !1,
    noBreakdown: !0,
    breakdown: [],
    hasOriginalLogo: !1,
    originalLogo: {},
    shortDescription: "",
    images: [{
      image: "/images/brandImages/misc/SummitCabinetLogo.webp",
      alt: "Summit Cabinet Coatings Logo Design",
      placeholder: "/images/brandImages/misc/SummitCabinetLogo_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "Illumination Hebrew Insights Logo Design",
    heroAlsoFirstImage: !1,
    noDescription: !1,
    noBreakdown: !0,
    breakdown: [],
    hasOriginalLogo: !1,
    originalLogo: {},
    shortDescription: "",
    images: [{
      image: "/images/brandImages/misc/IlluminationLogo.webp",
      alt: "Illumination Hebrew Insights Logo Design",
      placeholder: "/images/brandImages/misc/IlluminationLogo_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "Jennifer Madrick Real Estate",
    heroAlsoFirstImage: !1,
    noDescription: !1,
    noBreakdown: !0,
    breakdown: [],
    hasOriginalLogo: !1,
    originalLogo: {},
    shortDescription: "Created for a local real estate agent, I aimed to create a styled logo that paired a traditional feel with a bit of playful spirit in order to fit the Fort Collins Real Estate market. For the font I selected a typeface that straddled playful and elegant, for a professional, and bold look for my client and paired it with iconography built from the letterforms to create an abstract key.",
    images: [{
      image: "/images/brandImages/misc/JenniferMadrickLogo.webp",
      alt: "Jennifer Madrick Real Estate",
      placeholder: "/images/brandImages/misc/JenniferMadrickLogo_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "NoCo Patch Pros Logo Design",
    heroAlsoFirstImage: !1,
    noDescription: !1,
    noBreakdown: !0,
    breakdown: [],
    hasOriginalLogo: !1,
    originalLogo: {},
    shortDescription: "",
    images: [{
      image: "/images/brandImages/misc/NoCoPatchProsLogo.webp",
      alt: "NoCo Patch Pros Logo Design",
      placeholder: "/images/brandImages/misc/NoCoPatchProsLogo_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "Endodontics of the Rockies (speculative)",
    heroAlsoFirstImage: !1,
    noDescription: !1,
    noBreakdown: !0,
    breakdown: [],
    hasOriginalLogo: !1,
    originalLogo: {},
    shortDescription: "Sometimes our best work is speculative design work that never sees the light of day. A customer of mine requested a few attempts at modernizing their logo. While the higher-ups ended up deciding not to go with a rebrand, I felt this particular spec-work was worthy of inclusion, as it is a personal favorite of mine.",
    images: [{
      image: "/images/brandImages/misc/EndoRockiesMockup.webp",
      alt: "Endodontic of the Rockies Spec Logo Design",
      placeholder: "/images/brandImages/misc/EndoRockiesMockup_LowRes.webp",
      size: "large"
    }]
  }],
  print: [{
    name: "Branded Designs",
    hero: {
      image: "/images/printImages/BrandedDesign-IntroPic.webp",
      alt: "Branded Design",
      placeholder: "/images/printImages/BrandedDesign-IntroPic_LowRes.webp",
      size: "large"
    },
    heroAlsoFirstImage: !1,
    noDescription: !0,
    noBreakdown: !0,
    breakdown: [],
    hasOriginalLogo: !1,
    originalLogo: {},
    shortDescription: "",
    images: [{
      image: "/images/printImages/TimbeHueMockupBC.webp",
      alt: "Timber Hue Business Cards",
      placeholder: "/images/printImages/TimbeHueMockupBC_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/seasons/FourSeasons_Letterhead.webp",
      alt: "Four Seasons Businesss Solutions Letterhead",
      placeholder: "/images/brandImages/seasons/FourSeasons_Letterhead_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/seasons/FourSeasons_BC.webp",
      alt: "Four Seasons Businesss Solutions Business Cards",
      placeholder: "/images/brandImages/seasons/FourSeasons_BC_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/EndoRockies_Round_Sticker_Mockup_6.webp",
      alt: "Endodontic of the Rockies Stickers",
      placeholder: "/images/printImages/EndoRockies_Round_Sticker_Mockup_6_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rolling/Shirt-Mockup.webp",
      alt: "Rolling Restaurant T-Shirt",
      placeholder: "/images/brandImages/rolling/Shirt-Mockup_LowRes.webp",
      size: "large"
    }, {
      image: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-9.webp",
      alt: "Enhance Printing Stationary",
      placeholder: "/images/brandImages/enhance/Enhance_PortfolioPieceArtboard-9_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rolling/RollingRestaurant_BCs.webp",
      alt: "Rolling Restaurant Business Cards",
      placeholder: "/images/brandImages/rolling/RollingRestaurant_BCs_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/TopLine_Trifold.webp",
      alt: "Top Line Roofing Trifold",
      placeholder: "/images/printImages/TopLine_Trifold_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/TopLineRoofing_Folder_Mockup.webp",
      alt: "Top Line Roofing Pocket Folder",
      placeholder: "/images/printImages/TopLineRoofing_Folder_Mockup_LowRes.webp",
      size: "small"
    }]
  }, {
    name: "Tradeshow Design & Signage",
    hero: {
      image: "/images/printImages/signage-IntroPic.webp",
      alt: "Signage Design",
      placeholder: "/images/printImages/signage-IntroPic_LowRes.webp",
      size: "large"
    },
    heroAlsoFirstImage: !1,
    noDescription: !0,
    noBreakdown: !0,
    breakdown: [],
    hasOriginalLogo: !1,
    originalLogo: {},
    shortDescription: "",
    images: [{
      image: "/images/printImages/EliteEstheticianBooth.webp",
      alt: "Elite Esthetician Booth Setup",
      placeholder: "/images/printImages/EliteEstheticianBooth_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/retractables.webp",
      alt: "Tanco Engineering Retractable Banners",
      placeholder: "/images/printImages/retractables_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rolling/RollingRestaurant_Menu.webp",
      alt: "Rolling Restaurant Menus",
      placeholder: "/images/rolling/RollingRestaurant_Menu_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/MarriageFoundationMockup.webp",
      alt: "Marriage Foundation of Colorado Retractable Banner",
      placeholder: "/images/printImages/MarriageFoundationMockup_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/SummitSign.webp",
      alt: "Summit Cabinet Coatings Signage",
      placeholder: "/images/printImages/SummitSign_LowRes.webp",
      size: "small"
    }]
  }, {
    name: "Packaging Design",
    hero: {
      image: "/images/printImages/package-IntroPic.webp",
      alt: "Package Design",
      placeholder: "/images/printImages/package-IntroPic_LowRes.webp",
      size: "large"
    },
    heroAlsoFirstImage: !1,
    noDescription: !0,
    noBreakdown: !0,
    breakdown: [],
    hasOriginalLogo: !1,
    originalLogo: {},
    shortDescription: "",
    images: [{
      image: "/images/printImages/FreyaAbsinthe_MockUp.webp",
      alt: "Freya Absinthe Bottle",
      placeholder: "/images/printImages/FreyaAbsinthe_MockUp_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/MatadorBottle_v2_Mockup.webp",
      alt: "Matty's Red Hot Louisiana Style Hot Sauce",
      placeholder: "/images/printImages/MatadorBottle_v2_Mockup_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/siren/SleepySirenSoapMockup.webp",
      alt: "Sleepy Siren Bath Co. Soap Packaging",
      placeholder: "/images/brandImages/siren/SleepySirenSoapMockup_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/siren/SleepySiren_PerfumeBottle.webp",
      alt: "Sleepy Siren Bath Co. Fragrance Bottle",
      placeholder: "/images/brandImages/siren/SleepySiren_PerfumeBottle_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/ThankYouBox-Mockup.webp",
      alt: "Kenny Anderson Realty Thank You Box",
      placeholder: "/images/printImages/ThankYouBox-Mockup_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rolling/RollingRestaurant_BurgerBox.webp",
      alt: "Rolling Restaurant Burger Box",
      placeholder: "/images/brandImages/rolling/RollingRestaurant_BurgerBox_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/aegir/AegirsLabel.webp",
      alt: "Aegir's Workshop Leather Tag",
      placeholder: "/images/brandImages/aegir/AegirsLabel_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/aegir/AegirsTag.webp",
      alt: "Aegir's Workshop Custom Item Tag",
      placeholder: "/images/brandImages/aegir/AegirsTag_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/VistaPeaksMockup.webp",
      alt: "Vista Pearks Vineyards Bottles",
      placeholder: "/images/brandImages/aegir/VistaPeaksMockup_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/VistaPeaksWineGlass_Mockup.webp",
      alt: "Vista Pearks Vineyards Engraved Wine Glasses",
      placeholder: "/images/brandImages/aegir/VistaPeaksWineGlass_Mockup_LowRes.webp",
      size: "small"
    }]
  }, {
    name: "Vehicle Wraps",
    hero: {
      image: "/images/printImages/Wraps-IntroPic.webp",
      alt: "Vehicle Wraps",
      placeholder: "/images/printImages/Wraps-IntroPic_LowRes.webp",
      size: "large"
    },
    heroAlsoFirstImage: !1,
    noDescription: !0,
    noBreakdown: !0,
    breakdown: [],
    hasOriginalLogo: !1,
    originalLogo: {},
    shortDescription: "",
    images: [{
      image: "/images/brandImages/rolling/FoodWrap_1.webp",
      alt: "Rolling Restaurant Vehicle Wrap",
      placeholder: "/images/brandImages/rolling/FoodWrap_1_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rolling/FoodWrap_2.webp",
      alt: "Rolling Restaurant Vehicle Wrap",
      placeholder: "/images/brandImages/rolling/FoodWrap_2_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/NelsonWrap.webp",
      alt: "Nelson Overhead Doors Wrap",
      placeholder: "/images/printImages/NelsonWrap_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/rex/Rex Van.webp",
      alt: "Eyecatching Vehicles for Mobile Advertising",
      placeholder: "/images/brandImages/rex/Rex Van_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/CMM_wrap.webp",
      alt: "Concrete Mobile Mix Wrap",
      placeholder: "/images/printImages/CMM_wrap_LowRes.webp",
      size: "small"
    }]
  }, {
    name: "Book & Magazine Design",
    hero: {
      image: "/images/printImages/books-IntroPic.webp",
      alt: "Book and Magazine Design",
      placeholder: "/images/printImages/books-IntroPic_LowRes.webp",
      size: "large"
    },
    heroAlsoFirstImage: !1,
    noDescription: !0,
    noBreakdown: !0,
    breakdown: [],
    hasOriginalLogo: !1,
    originalLogo: {},
    shortDescription: "",
    images: [{
      image: "/images/printImages/FossilBaseball_MagazineCover.webp",
      alt: "Fossil Ridge High School Player Guide Cover",
      placeholder: "/images/printImages/FossilBaseball_MagazineCover_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/FossilBaseball_MagazineGuts.webp",
      alt: "Fossil Ridge High School Player Guide Inside",
      placeholder: "/images/printImages/FossilBaseball_MagazineGuts_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/enhance/EnhanceMagazines.webp",
      alt: "Enhance Printing Graphics Magazine Cover",
      placeholder: "/images/brandImages/enhance/EnhanceMagazines_LowRes.webp",
      size: "small"
    }, {
      image: "/images/brandImages/enhance/EnhanceMagazines_Spreads.webp",
      alt: "Enhance Printing Graphics Magazine Interior",
      placeholder: "/images/brandImages/enhance/EnhanceMagazines_Spreads_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/BugattiBook_Mockup.webp",
      alt: "Novel Cover Design",
      placeholder: "/images/printImages/BugattiBook_Mockup_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/DeadlandsBook Mockup.webp",
      alt: "Novel Cover Design",
      placeholder: "/images/printImages/DeadlandsBook Mockup_LowRes.webp",
      size: "small"
    }]
  }, {
    name: "Invitations & Cards",
    hero: {
      image: "/images/printImages/invites-IntroPic.webp",
      alt: "Invitations and Cards",
      placeholder: "/images/printImages/invites-IntroPic_LowRes.webp",
      size: "large"
    },
    heroAlsoFirstImage: !1,
    noDescription: !0,
    noBreakdown: !0,
    breakdown: [],
    hasOriginalLogo: !1,
    originalLogo: {},
    shortDescription: "",
    images: [{
      image: "/images/printImages/Invitations_Gatefold.webp",
      alt: "Wedding Invitations",
      placeholder: "/images/printImages/Invitations_Gatefold_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/GoodOlBoys_Postcard_Mockup.webp",
      alt: "Handout Design",
      placeholder: "/images/printImages/GoodOlBoys_Postcard_Mockup_LowRes.webp",
      size: "small"
    }, {
      image: "/images/printImages/Levi_Postcard-Mockup.webp",
      alt: "Notecard Design",
      placeholder: "/images/printImages/Levi_Postcard-Mockup_LowRes.webp",
      size: "small"
    }]
  }],
  web: [{
    name: "Enhance Printing Website",
    image: "/images/webImages/EnhanceWebsite.webp",
    alt: "Enhance Printing Website",
    placeholder: "/images/webImages/EnhanceWebsite-lowRes.webp"
  }, {
    name: "Hood Guy Website",
    image: "/images/HoodGuyMockup copy.webp",
    alt: "Hood Guy Website",
    placeholder: "/images/HoodGuyMockup copy-lowRes.webp"
  }, {
    name: "Aegir's Workshop Website",
    image: "/images/webImages/AegirsSite.webp",
    alt: "Aegir's Workshop Website",
    placeholder: "/images/webImages/AegirsSite-lowRes.webp"
  }, {
    name: "NatureScapes Photography Website",
    image: "/images/webImages/NatureScapesWebsite.webp",
    alt: "NatureScapes Photography Website",
    placeholder: "/images/webImages/NatureScapesWebsite-lowRes.webp"
  }, {
    name: "Kenny Anderson Website",
    image: "/images/webImages/KennyAndersonWebsite.webp",
    alt: "Kenny Anderson Website",
    placeholder: "/images/webImages/KennyAndersonWebsite-lowRes.webp"
  }],
  spec: [{
    name: "Coldstone Creamery",
    description: "Enhance Printing has been our local Cold Stone Creamery's go-to printer for many years, so I've developed a long knowledge of their brand and marketing materials. For fun, I deceided to try my hand at crafting a brand refresh for Cold Stone. My goal was to create a fresh look that kept much of the franchies history intact, while modernizing their currently dated logo. To compliment the new looks, I created an array of slogans and imagery to use across digital and print media, as well as their storefronts and interiors.",
    hero: {
      image: "/images/specImages/coldstone/coldstoneLogo.webp",
      alt: "Coldstone Speculative Rebrand",
      placeholder: "/images/specImages/coldstone/coldstoneLogo_LowRes.webp",
      size: "large"
    },
    images: [{
      image: "/images/specImages/coldstone/mixItUpSlogan.webp",
      alt: "Bold, Colorful, and Creative",
      placeholder: "/images/specImages/coldstone/mixItUpSlogan_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/Coldstone Feather Flag Mockup.webp",
      alt: "Bold Signage for Bold Slogans",
      placeholder: "/images/specImages/coldstone/Coldstone Feather Flag Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/coldstone_Sketches.webp",
      alt: "Sketching Out Coldstone's Rebrand",
      placeholder: "/images/specImages/coldstone/coldstone_Sketches_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/coldstone/coldstone_Alternates.webp",
      alt: "Logo Alternates for the Brand Image",
      placeholder: "/images/specImages/coldstone/coldstone_Alternates_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/coldstone/coldstone_iceCreamTub.webp",
      alt: "New Packaging for the New Look",
      placeholder: "/images/specImages/coldstone/coldstone_iceCreamTub_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/coldstoneCakeBox_Mockup.webp",
      alt: "New Cake Boxes",
      placeholder: "/images/specImages/coldstone/coldstoneCakeBox_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/colstoneCooler_Mockup.webp",
      alt: "A New Look Keeping it Cool",
      placeholder: "/images/specImages/coldstone/colstoneCooler_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/coldstoneConeWrap_Mockup.webp",
      alt: "Even the Cones are Sprinkled with Fun",
      placeholder: "/images/specImages/coldstone/coldstoneConeWrap_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/coldstoneInterior_Mockup.webp",
      alt: "A New Look In the Store",
      placeholder: "/images/specImages/coldstone/coldstoneInterior_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/ColdstoneSign_Mockup.webp",
      alt: "Signage for Maximum Visibility",
      placeholder: "/images/specImages/coldstone/ColdstoneSign_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/coldstoneApron_Mockup.webp",
      alt: "A New Uniform - Aprons",
      placeholder: "/images/specImages/coldstone/coldstoneApron_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/coldstoneVisor_Mockup.webp",
      alt: "A New Uniform - Hats",
      placeholder: "/images/specImages/coldstone/coldstoneVisor_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/coldstoneCoupons_Mockup.webp",
      alt: "New Print Collateral",
      placeholder: "/images/specImages/coldstone/coldstoneCoupons_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/coldstoneApp_Mockup.webp",
      alt: "A New Ordering System",
      placeholder: "/images/specImages/coldstone/coldstoneApp_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coldstone/coldstone_posters.webp",
      alt: "New Street Marketing",
      placeholder: "/images/specImages/coldstone/coldstone_posters_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "Five Guys Burgers & Fries",
    description: "For another for-fun rebrand, I wanted to visit the Five Guys Burger franchise. While I am a big fan of their burgers (especially the limitless toppings), I feel their brand is in need of a glow up. For this rebrand, I wanted to create a more 'edgy' look, to draw in a younger, college-aged audience, without losing their family-friendly atmosphere. With this project, my goal was to craft a type-based design style that spanned across their print collateral and spruced up their restaurant interiors, focusing customers on their customizable burger options and generous portions.",
    hero: {
      image: "/images/specImages/5guys/fiveGuysLogo.webp",
      alt: "Five Guys Burgers & Fries Rebrand Concept",
      placeholder: "/images/specImages/5guys/fiveGuysLogo_LowRes.webp",
      size: "large"
    },
    images: [{
      image: "/images/specImages/5guys/5Guys_Sketches.webp",
      alt: "Five Guys Burgers & Fries Rebrand Sketches",
      placeholder: "/images/specImages/5guys/5Guys_Sketches_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/5guys/5Guys_Alternates.webp",
      alt: "Five Guys Burgers & Fries Rebrand Alternate Logos",
      placeholder: "/images/specImages/5guys/5Guys_Alternates_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/5guys/5Guys_FoodContainers.webp",
      alt: "New Packaging For the New Look",
      placeholder: "/images/specImages/5guys/5Guys_FoodContainers_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/5guys/fiveGuysSign_Mockup.webp",
      alt: "Eyecatching Signage for Mouthwatering Burgers",
      placeholder: "/images/specImages/5guys/fiveGuysSign_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/5guys/fiveguysInterior_mockup_04.webp",
      alt: "New Interior Decoration",
      placeholder: "/images/specImages/5guys/fiveguysInterior_mockup_04_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/5guys/5GuysInterior2.webp",
      alt: "Slogans as Art",
      placeholder: "/images/specImages/5guys/5GuysInterior2_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/5guys/5GuysShirt_Mockup.webp",
      alt: "New Uniforms to Compliment the New Feel",
      placeholder: "/images/specImages/5guys/5GuysShirt_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/5guys/5GuysHat.webp",
      alt: "Hats for Customers and Servers Alike",
      placeholder: "/images/specImages/5guys/5GuysHat_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/5guys/5guysPosters.webp",
      alt: "Street Marketing for the New Look",
      placeholder: "/images/specImages/5guys/5guysPosters_LowRes.webp",
      size: "large"
    }]
  }, {
    name: "Colorado Outfitters",
    description: "Colorado Outfitters is a company I've worked with on their marketing collateral for several years. As part of a project pitch, I came up with an alternate brand identity to help modernize their look. While they chose to remain with their old identity, I'm still proud of the work done on this project, and wanted to put it forward as an example of the work I am capable of.",
    hero: {
      image: "/images/specImages/coOutfitters/COOutfitters-Logo.webp",
      alt: "Colorado Outfitters Rebrand Concept",
      placeholder: "/images/specImages/coOutfitters/COOutfitters-Logo_LowRes.webp",
      size: "large"
    },
    images: [{
      image: "/images/specImages/coOutfitters/Outfitters_Sketches.webp",
      alt: "Colorado Outfitters Rebrand Sketches",
      placeholder: "/images/specImages/coOutfitters/Outfitters_Sketches_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/coOutfitters/Outfitters_Alternates.webp",
      alt: "Colorado Outfitters Rebrand Alternate Options",
      placeholder: "/images/specImages/coOutfitters/Outfitters_Alternates_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/coOutfitters/CO_Outfit_WebMockups.webp",
      alt: "Colorado Outfitters Rebrand Website",
      placeholder: "/images/specImages/coOutfitters/CO_Outfit_WebMockups_LowRes.webp",
      size: "large"
    }, {
      image: "/images/specImages/coOutfitters/COOutfitter_Trifold.webp",
      alt: "Colorado Outfitters Rebrand Trifolds",
      placeholder: "/images/specImages/coOutfitters/COOutfitter_Trifold_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/coOutfitters/CO_Outfitters_BCMockup.webp",
      alt: "Colorado Outfitters Rebrand Business Cards",
      placeholder: "/images/specImages/coOutfitters/CO_Outfitters_BCMockup_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/coOutfitters/COOutfitters_Hip Flask Mockup.webp",
      alt: "Colorado Outfitters Rebrand Collateral - Hip Flask",
      placeholder: "/images/specImages/coOutfitters/COOutfitters_Hip Flask Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coOutfitters/COOutfitters_Travel_Mug_Mockup.webp",
      alt: "Colorado Outfitters Rebrand Collateral - Travel Mug",
      placeholder: "/images/specImages/coOutfitters/COOutfitters_Travel_Mug_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coOutfitters/CO_Outfitters_Tote_Bag_Mockup.webp",
      alt: "Colorado Outfitters Rebrand Collateral - Tote Bag",
      placeholder: "/images/specImages/coOutfitters/CO_Outfitters_Tote_Bag_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/coOutfitters/COOutfitters_ShotGlass.webp",
      alt: "Colorado Outfitters Rebrand Collateral - Shot Glass",
      placeholder: "/images/specImages/coOutfitters/COOutfitters_ShotGlass_LowRes.webp",
      size: "mid"
    }]
  }, {
    name: "Baker Law",
    description: "This was a pitch project I worked on for a local attorney, Bob Baker. While he decided to remain with his old branding, I am proud of this project, and wanted to use it to show my skills as a graphic designer. This rebrand focused on creating a brand identity that emphasized Mr. Baker's hopeful outlook, and willingness to assist others. His focus on estate law, led me to crafting an image centered around the sun over the horizon, both as a sunset (end of life), and as a sunrise (new beginnings).",
    hero: {
      image: "/images/specImages/bakerLaw/BakerLawLogo.webp",
      alt: "Baker Law Rebrand Concept",
      placeholder: "images/specImages/bakerLaw/BakerLawLogo_LowRes.webp",
      size: "large"
    },
    images: [{
      image: "/images/specImages/bakerLaw/BakerLaw_Stationary_mockup.webp",
      alt: "Baker Law Stationary",
      placeholder: "images/specImages/bakerLaw/BakerLaw_Stationary_mockup_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/bakerLaw/BakerLaw_Retractable_Mockup.webp",
      alt: "Baker Law Retractable Banner",
      placeholder: "images/specImages/bakerLaw/BakerLaw_Retractable_Mockup_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/bakerLaw/Baker_Sketches.webp",
      alt: "Baker Law Sketches",
      placeholder: "images/specImages/bakerLaw/Baker_Sketches_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/bakerLaw/Baker_Alternates.webp",
      alt: "Baker Law Alternate Logos",
      placeholder: "images/specImages/bakerLaw/Baker_Alternates_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/bakerLaw/BakerLaw_Web_Mockup.webp",
      alt: "Baker Law Website 1",
      placeholder: "images/specImages/bakerLaw/BakerLaw_Web_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/bakerLaw/BakerLaw_Web_Mockup-2.webp",
      alt: "Baker Law Website 2",
      placeholder: "images/specImages/bakerLaw/BakerLaw_Web_Mockup-2_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/bakerLaw/BakerLaw_Web_Mockup-3.webp",
      alt: "Baker Law Website 3",
      placeholder: "images/specImages/bakerLaw/BakerLaw_Web_Mockup-3_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/bakerLaw/BakerLaw_Web_Mockup-4.webp",
      alt: "Baker Law Website 4",
      placeholder: "images/specImages/bakerLaw/BakerLaw_Web_Mockup-4_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/bakerLaw/BakerFolder_Mockup-Outside.webp",
      alt: "Baker Law Pocket Folder",
      placeholder: "images/specImages/bakerLaw/BakerFolder_Mockup-Outside_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/bakerLaw/BakerFolder_Mockup-Inside.webp",
      alt: "Baker Law Pocket Folder Inside",
      placeholder: "images/specImages/bakerLaw/BakerFolder_Mockup-Inside_LowRes.webp",
      size: "small"
    }, {
      image: "/images/specImages/bakerLaw/BakerBinder_Mockup.webp",
      alt: "Baker Law Binders",
      placeholder: "images/specImages/bakerLaw/BakerBinder_Mockup_LowRes.webp",
      size: "mid"
    }, {
      image: "/images/specImages/bakerLaw/BakerMug_Mockup.webp",
      alt: "Baker Law Mug",
      placeholder: "images/specImages/bakerLaw/BakerMug_Mockup_LowRes.webp",
      size: "mid"
    }]
  }]
};

// app/components/progressiveImage.component.jsx
var import_react8 = require("react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), ProgressiveImg = ({ placeholderSrc, src, ...props }) => {
  let [imgSrc, setImgSrc] = (0, import_react8.useState)(placeholderSrc || src);
  (0, import_react8.useEffect)(() => {
    let img = new Image();
    img.src = src, img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);
  let customClass = placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "img",
    {
      src: imgSrc,
      ...props,
      alt: props.alt || "",
      className: props.classTitle + " " + customClass
    },
    void 0,
    !1,
    {
      fileName: "app/components/progressiveImage.component.jsx",
      lineNumber: 18,
      columnNumber: 5
    },
    this
  );
}, progressiveImage_component_default = ProgressiveImg;

// app/routes/__app.print-original.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), links4 = () => [
  { rel: "stylesheet", href: global_styles_default },
  { rel: "stylesheet", href: page_styles_default },
  { rel: "stylesheet", href: print_styles_default },
  ...links3(),
  ...links2()
], meta = () => [
  { title: "Print Design | Stephen Kloepfer Branding & Design?" },
  { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
  { name: "description", content: "With over a decade in Print and Presentation, I specialize in crafting press ready visuals, working within your branded guidelines." },
  { name: "og:title", content: "Stephen Kloepfer Design for Print Production" },
  { name: "og:description", content: "With over a decade in Print and Presentation, I specialize in crafting press ready visuals, working within your branded guidelines." },
  { name: "og:image", content: "/social_preview.png" }
], PrintDesign = () => {
  let [triggered, setTriggered] = (0, import_react9.useState)(!1), [loaded, hasloaded] = (0, import_react9.useState)(!1), brandData = (0, import_react10.useLoaderData)(), delay = (ms) => new Promise((res) => setTimeout(res, ms)), triggerSlide = async () => {
    await delay(500), hasloaded(!0), setTriggered(!0);
  }, closeSlide = () => {
    setTriggered(!1);
  }, navigate = (0, import_react10.useNavigate)(), data_from_child = async (data) => {
    data != "" && data != null && (closeSlide(), await delay(500), navigate("/" + data));
  };
  return (0, import_react9.useEffect)(() => {
    loaded || triggerSlide();
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      MainMenu,
      {
        page: "print",
        onReopen: () => {
          console.log("fire"), hasloaded(!1);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app.print-original.jsx",
        lineNumber: 70,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: triggered ? "slider backgroundGreen activeSlide" : "slider inactiveSlide", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { onClick: closeSlide, className: triggered ? "button" : "button hiddenButton", children: "x" }, void 0, !1, {
        fileName: "app/routes/__app.print-original.jsx",
        lineNumber: 75,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(pagesHeader_component_default, { background: "#1A746F", setter: data_from_child, onClose: closeSlide, active: "print" }, void 0, !1, {
        fileName: "app/routes/__app.print-original.jsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "heading", children: "Print Design" }, void 0, !1, {
          fileName: "app/routes/__app.print-original.jsx",
          lineNumber: 78,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "printRow", children: brandData.print.map(
          (print) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "printImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            progressiveImage_component_default,
            {
              src: print.image,
              placeholderSrc: print.placeholder,
              classTitle: "",
              alt: print.alt
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__app.print-original.jsx",
              lineNumber: 83,
              columnNumber: 17
            },
            this
          ) }, print.name, !1, {
            fileName: "app/routes/__app.print-original.jsx",
            lineNumber: 82,
            columnNumber: 13
          }, this)
        ) }, void 0, !1, {
          fileName: "app/routes/__app.print-original.jsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "spacerGreen" }, void 0, !1, {
          fileName: "app/routes/__app.print-original.jsx",
          lineNumber: 93,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__app.print-original.jsx",
        lineNumber: 77,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__app.print-original.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app.print-original.jsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
}, app_print_original_default = PrintDesign;
async function loader() {
  return brandingInfo_default;
}

// app/routes/__app.branding.jsx
var app_branding_exports = {};
__export(app_branding_exports, {
  default: () => app_branding_default,
  links: () => links6,
  loader: () => loader2,
  meta: () => meta2
});
var import_react11 = require("react");
var import_react12 = require("@remix-run/react");

// app/styles/modal.styles.css
var modal_styles_default = "/build/_assets/modal.styles-JRPHCJPG.css";

// app/components/modal.component.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), Modal = (props) => {
  let onClose = props.onClose;
  if (props.data && props.data != "") {
    let data = props.data, images = data.images, hero = data.hero;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "modalBackground " + props.className, style: { backgroundColor: props.color }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "modalContain", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { onClick: onClose, className: "buttonModal", children: "x" }, void 0, !1, {
        fileName: "app/components/modal.component.jsx",
        lineNumber: 16,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "modalImageContain", children: [
        data.hero && data.heroAlsoFirstImage ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          progressiveImage_component_default,
          {
            src: hero.image,
            placeholderSrc: hero.placeholder,
            classTitle: "brandImage",
            alt: hero.alt
          },
          hero.image,
          !1,
          {
            fileName: "app/components/modal.component.jsx",
            lineNumber: 20,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/modal.component.jsx",
          lineNumber: 19,
          columnNumber: 13
        }, this) : data.images.length === 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          progressiveImage_component_default,
          {
            src: images[0].image,
            placeholderSrc: images[0].placeholder,
            classTitle: "brandImage",
            alt: images[0].alt
          },
          images[0].image,
          !1,
          {
            fileName: "app/components/modal.component.jsx",
            lineNumber: 29,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/modal.component.jsx",
          lineNumber: 28,
          columnNumber: 40
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, {}, void 0, !1, {
          fileName: "app/components/modal.component.jsx",
          lineNumber: 36,
          columnNumber: 27
        }, this),
        data.noDescription ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, {}, void 0, !1, {
          fileName: "app/components/modal.component.jsx",
          lineNumber: 39,
          columnNumber: 13
        }, this) : data.noBreakdown ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "breakdown", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { children: data.name }, void 0, !1, {
            fileName: "app/components/modal.component.jsx",
            lineNumber: 43,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "descrText", children: data.shortDescription }, void 0, !1, {
            fileName: "app/components/modal.component.jsx",
            lineNumber: 44,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/modal.component.jsx",
          lineNumber: 42,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "breakdown", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { children: data.name }, void 0, !1, {
            fileName: "app/components/modal.component.jsx",
            lineNumber: 48,
            columnNumber: 29
          }, this),
          data.breakdown.map(
            (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "breakdownBox", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "breakdownTitle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { children: item.title }, void 0, !1, {
                fileName: "app/components/modal.component.jsx",
                lineNumber: 53,
                columnNumber: 41
              }, this) }, void 0, !1, {
                fileName: "app/components/modal.component.jsx",
                lineNumber: 52,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "breakdownText", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: item.text }, void 0, !1, {
                fileName: "app/components/modal.component.jsx",
                lineNumber: 56,
                columnNumber: 41
              }, this) }, void 0, !1, {
                fileName: "app/components/modal.component.jsx",
                lineNumber: 55,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/modal.component.jsx",
              lineNumber: 51,
              columnNumber: 15
            }, this)
          ),
          data.hasOriginalLogo ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "breakdownBox", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "breakdownTitle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { children: "original logo" }, void 0, !1, {
              fileName: "app/components/modal.component.jsx",
              lineNumber: 64,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/components/modal.component.jsx",
              lineNumber: 63,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "breakdownText", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { src: data.originalLogo.image, className: "originalLogo", alt: "Original Logo" }, void 0, !1, {
              fileName: "app/components/modal.component.jsx",
              lineNumber: 67,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/components/modal.component.jsx",
              lineNumber: 66,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/modal.component.jsx",
            lineNumber: 62,
            columnNumber: 15
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, {}, void 0, !1, {
            fileName: "app/components/modal.component.jsx",
            lineNumber: 70,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/modal.component.jsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        images.length > 1 ? images.map(
          (image) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            progressiveImage_component_default,
            {
              src: image.image,
              placeholderSrc: image.placeholder,
              classTitle: image.size === "small" ? "secondaryImage" : image.size === "mid" ? "midImage" : "brandImage",
              alt: image.alt
            },
            image.image,
            !1,
            {
              fileName: "app/components/modal.component.jsx",
              lineNumber: 77,
              columnNumber: 13
            },
            this
          )
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, {}, void 0, !1, {
          fileName: "app/components/modal.component.jsx",
          lineNumber: 86,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/modal.component.jsx",
        lineNumber: 17,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/modal.component.jsx",
      lineNumber: 15,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/modal.component.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this);
  }
}, modal_component_default = Modal, links5 = () => [
  { rel: "stylesheet", href: modal_styles_default }
];

// app/routes/__app.branding.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), links6 = () => [
  { rel: "stylesheet", href: global_styles_default },
  { rel: "stylesheet", href: page_styles_default },
  ...links3(),
  ...links2(),
  ...links5()
], meta2 = () => [
  { title: "Brand Identity Services | Stephen Kloepfer Branding & Design?" },
  { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
  { name: "description", content: "I specialize in creating eye-catching and competitve brand identities to help you stand out amongst the competition." },
  { name: "og:title", content: "Stephen Kloepfer Branding Services" },
  { name: "og:description", content: "I specialize in creating eye-catching and competitve brand identities to help you stand out amongst the competition." },
  { name: "og:image", content: "/social_preview.png" }
], Branding = () => {
  let [triggered, setTriggered] = (0, import_react11.useState)(!1), [loaded, hasloaded] = (0, import_react11.useState)(!1), [activeBrand, setActiveBrand] = (0, import_react11.useState)(), [brandIsActive, setBrandBool] = (0, import_react11.useState)(!1), delay = (ms) => new Promise((res) => setTimeout(res, ms)), navigate = (0, import_react12.useNavigate)(), triggerSlide = async () => {
    await delay(250), hasloaded(!0), setTriggered(!0);
  }, data_from_child = async (data) => {
    data != "" && data != null && (closeSlide(), await delay(500), navigate("/" + data));
  }, closeSlide = () => {
    setTriggered(!1);
  }, brandData = (0, import_react12.useLoaderData)();
  (0, import_react11.useEffect)(() => {
    loaded || triggerSlide();
  });
  let [hoveredItem, setHovered] = (0, import_react11.useState)("");
  function changeHover(newItem) {
    setHovered(newItem.name);
  }
  function unsetHover() {
    setHovered("");
  }
  function selectBrand(brand) {
    setActiveBrand(brand), setBrandBool(!0);
  }
  let onClose = () => {
    setActiveBrand(""), setBrandBool(!1);
  }, onReopen = () => {
    hasloaded(!1);
  };
  function checkLength(brand) {
    return brand.images.length;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      MainMenu,
      {
        page: "branding",
        onReopen
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app.branding.jsx",
        lineNumber: 96,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: triggered ? "slider activeSlide" : "slider inactiveSlide", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { onClick: closeSlide, className: triggered ? "button" : "button hiddenButton", children: "x" }, void 0, !1, {
        fileName: "app/routes/__app.branding.jsx",
        lineNumber: 101,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(pagesHeader_component_default, { background: "dark", setter: data_from_child, onClose: closeSlide, active: "branding" }, void 0, !1, {
        fileName: "app/routes/__app.branding.jsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { className: "heading", children: [
          "Brand Identity ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/__app.branding.jsx",
            lineNumber: 104,
            columnNumber: 50
          }, this),
          " & Logo Design"
        ] }, void 0, !0, {
          fileName: "app/routes/__app.branding.jsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "imageGrid", children: brandData.branding.map(
          (brand) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "imageBox", onMouseEnter: () => changeHover(brand), onMouseLeave: unsetHover, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("a", { children: [
            checkLength(brand) > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "overlay", children: "Click to See More" }, void 0, !1, {
              fileName: "app/routes/__app.branding.jsx",
              lineNumber: 112,
              columnNumber: 17
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "overlay", children: "Click to Expand Image" }, void 0, !1, {
              fileName: "app/routes/__app.branding.jsx",
              lineNumber: 113,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              progressiveImage_component_default,
              {
                alt: brand.name,
                src: brand.hero ? brand.hero.image : brand.images[0].image,
                placeholderSrc: brand.hero ? brand.hero.placeholder : brand.images[0].placeholder,
                classTitle: "primaryImage",
                onClick: () => selectBrand(brand)
              },
              brand.name,
              !1,
              {
                fileName: "app/routes/__app.branding.jsx",
                lineNumber: 116,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/__app.branding.jsx",
            lineNumber: 109,
            columnNumber: 17
          }, this) }, brand.name, !1, {
            fileName: "app/routes/__app.branding.jsx",
            lineNumber: 108,
            columnNumber: 13
          }, this)
        ) }, void 0, !1, {
          fileName: "app/routes/__app.branding.jsx",
          lineNumber: 105,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__app.branding.jsx",
        lineNumber: 103,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__app.branding.jsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      modal_component_default,
      {
        onClose,
        className: brandIsActive ? "openModal" : "closeModal",
        color: "white",
        data: activeBrand
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app.branding.jsx",
        lineNumber: 135,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__app.branding.jsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}, app_branding_default = Branding;
async function loader2() {
  return brandingInfo_default;
}

// app/routes/__app._index.jsx
var app_index_exports = {};
__export(app_index_exports, {
  default: () => Index,
  links: () => links7,
  meta: () => meta3
});

// app/styles/landing.styles.css
var landing_styles_default = "/build/_assets/landing.styles-EB5CN5UP.css";

// app/styles/hero.styles.css
var hero_styles_default = "/build/_assets/hero.styles-FX3J7MD2.css";

// app/components/heroLogoSVG.component.jsx
var React3 = require("react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), HeroLogo = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    id: props.logoID,
    "data-name": props.logoID,
    viewBox: "0 0 200.31 788.52",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("style", { children: `.cls-1{fill:${props.color}}` }, void 0, !1, {
        fileName: "app/components/heroLogoSVG.component.jsx",
        lineNumber: 12,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/heroLogoSVG.component.jsx",
        lineNumber: 11,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("g", { id: "Layer_1-2", "data-name": "Layer 1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("g", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m188.58,736.8v-9.74c2.12,0,5.18.45,7.62,2.37,2.61,2.05,3.9,5.18,3.9,8.73,0,6.82-5.01,12-11.93,12s-11.97-5.36-11.97-12.11c0-3.27,1.11-5.46,2.5-7.27.77-.97,1.6-1.84,2.92-2.78l.97,1.22c-1.11.66-2.05,1.6-2.57,2.23-1.22,1.46-2.43,3.76-2.43,6.65,0,5.95,4.73,10.47,10.64,10.47,5.81,0,10.47-4.38,10.47-10.37,0-3.97-2.02-6.82-3.93-8.07-1.39-.91-3.31-1.46-4.8-1.53v8.21h-1.39Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 16,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m199.71,684.49l-10.96,7.51v.69s10.96,0,10.96,0v1.53h-23.2v-3.34c0-1.77.14-3.37,1.18-4.9,1.25-1.81,3.17-2.4,4.98-2.4,2.29,0,4.66,1.01,5.63,3.9.42,1.22.45,2.33.45,2.85l10.96-7.58v1.74Zm-12.35,8.21v-2.23c0-3.3-1.74-5.29-4.73-5.29-2.33,0-3.55,1.15-4.04,2.05-.56.97-.69,2.64-.69,3.55v1.91s9.46,0,9.46,0Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 17,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m192.1,639.21v9.88s7.62,3.1,7.62,3.1v1.67s-23.9-9.77-23.9-9.77l23.9-9.64v1.67s-7.62,3.1-7.62,3.1Zm-1.39.56l-10.99,4.35,10.99,4.42v-8.77Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 18,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m188.69,601.47h11.03v1.53h-23.2v-4.49c0-3.79,2.09-6.78,6.05-6.78,3.86,0,6.12,2.75,6.12,6.75v2.99Zm-1.39,0v-3.06c0-3.03-1.77-5.08-4.7-5.08-2.89,0-4.7,1.95-4.7,5.32v2.82s9.39,0,9.39,0Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 19,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { class: "cls-1", d: "m186.36,558.14v-14.05s-9.84,0-9.84,0v-1.53h23.2v1.53h-11.97s0,14.05,0,14.05h11.97v1.53h-23.2v-1.53h9.84Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 20,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m176.51,506.94h23.2v1.53h-23.2v-1.53Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 21,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m181.24,454.28c-2.33,1.98-3.65,4.84-3.65,7.83,0,5.95,4.77,10.4,10.64,10.4,6.89,0,10.47-5.74,10.47-10.44,0-2.33-.94-5.43-3.51-7.79h2.02c2.09,2.37,2.89,5.22,2.89,7.72,0,6.96-5.46,12.11-11.93,12.11-6.68,0-11.97-5.36-11.97-12.04,0-4.42,2.36-7.1,3.03-7.79h2.02Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 22,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m199.71,385.53h-23.2v-4.59c0-2.05.31-5.63,3.24-8.56,2.47-2.47,5.84-3.34,8.38-3.34s5.88.87,8.35,3.34c2.92,2.92,3.24,6.51,3.24,8.56v4.59Zm-1.39-1.53v-3.03c0-6.12-4.17-10.33-10.19-10.33-5.95,0-10.23,4.24-10.23,10.33v3.03s20.42,0,20.42,0Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 23,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m177.9,325.08v9.6s8.42,0,8.42,0v-9.39h1.39v9.39s10.61,0,10.61,0v-9.6h1.39v11.13h-23.2v-11.13h1.39Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 24,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m180.44,281.68c-2.79,1.43-2.85,3.93-2.85,4.56,0,2.75,1.98,4.31,4.31,4.31,2.5,0,3.34-1.74,4.49-4.07,1.11-2.3,1.6-3.44,2.43-4.63.7-1.01,1.91-2.47,4.49-2.47,3.9,0,6.78,3.27,6.78,7.24,0,2.99-1.43,4.52-2.44,5.39-1.04.9-1.95,1.29-2.54,1.5l-.63-1.32c.91-.31,1.81-.9,2.23-1.25,1.32-1.04,1.98-2.75,1.98-4.35,0-3.13-2.3-5.6-5.36-5.6-1.25,0-2.57.49-3.65,2.26-.38.66-1.08,2.02-2.02,3.93-1.11,2.3-1.74,3.44-3.06,4.24-.87.52-1.74.73-2.64.73-2.68,0-5.78-1.81-5.78-5.95,0-2.33,1.11-4.45,3.31-5.63l.94,1.11Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 25,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m176.51,245.02h23.2v1.53h-23.2v-1.53Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 26,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m188.58,198.83v-9.74c2.12,0,5.18.45,7.62,2.36,2.61,2.05,3.9,5.18,3.9,8.73,0,6.82-5.01,12-11.93,12-6.89,0-11.97-5.36-11.97-12.11,0-3.27,1.11-5.46,2.5-7.27.77-.97,1.6-1.84,2.92-2.78l.97,1.22c-1.11.66-2.05,1.6-2.57,2.23-1.22,1.46-2.43,3.76-2.43,6.64,0,5.95,4.73,10.47,10.64,10.47,5.81,0,10.47-4.38,10.47-10.37,0-3.97-2.02-6.82-3.93-8.07-1.39-.9-3.31-1.46-4.8-1.53v8.21h-1.39Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 27,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m199.71,156.27h-23.45s20.39-19.48,20.39-19.48h-20.14v-1.53h23.79s-20.39,19.48-20.39,19.48h19.79v1.53Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 28,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m177.9,90.04v9.6s8.42,0,8.42,0v-9.39h1.39v9.39s10.61,0,10.61,0v-9.6h1.39v11.13h-23.2v-11.13h1.39Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 29,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m199.71,47.47l-10.96,7.52v.7s10.96,0,10.96,0v1.53h-23.2v-3.34c0-1.77.14-3.37,1.18-4.9,1.25-1.81,3.17-2.4,4.98-2.4,2.29,0,4.66,1.01,5.63,3.9.42,1.22.45,2.33.45,2.85l10.96-7.58v1.74Zm-12.35,8.21v-2.23c0-3.31-1.74-5.29-4.73-5.29-2.33,0-3.55,1.15-4.04,2.05-.56.97-.69,2.64-.69,3.55v1.91s9.46,0,9.46,0Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 30,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/heroLogoSVG.component.jsx",
          lineNumber: 15,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("g", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m147.74,622c-.04,1.77-.52,2.95-1.45,3.55-.6.4-1.59.6-2.95.6h-26.61v-9.33h-14.87v9.33h-14.93v19.69h14.93v5.3h14.87v-5.3h31.07c4.82.12,8.45-.68,10.9-2.41.8-.59,1.45-1.32,1.99-2.16v-24.45h-12.95v5.18Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 33,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m138.18,321.24h-35.34c-2.2,0-3.8.46-4.8,1.38-1.08.96-1.62,2.06-1.62,3.3,0,1.52.68,2.76,2.04,3.72.96.68,2.42,1.02,4.38,1.02h35.34c2.2,0,3.82-.46,4.86-1.38,1.08-.96,1.62-2.08,1.62-3.36,0-1.48-.68-2.7-2.04-3.66-1-.68-2.48-1.02-4.44-1.02Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 34,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m98.87,216.17c-1.12.76-1.68,2.36-1.68,4.8v3.12h14.28v-3.66c0-2.12-.42-3.54-1.26-4.26-1.12-.96-2.98-1.44-5.58-1.44s-4.44.48-5.76,1.44Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 35,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m79.5,703.3v-273.5h32.15v-3.25c-.04-1.89-.4-3.21-1.08-3.97-1-1.04-2.83-1.69-5.48-1.93-.88-.12-2.69-.18-5.42-.18h-9.39c-4.26,0-7.85-.62-10.78-1.87v-21.92c2.09.8,3.81,1.28,5.18,1.45,1.08.16,3.71.26,7.89.3h9.69c3.69,0,6.2.16,7.53.48,4.34,1.04,7.23,3.83,8.67,8.37.32,1.2.76,3.23,1.32,6.08.24-1.32.38-2.19.42-2.59.68-4.62,2.35-7.93,5-9.94,2.29-1.61,5.68-2.41,10.18-2.41h11.5c3.89,0,6.82-.12,8.79-.36,1.53-.2,3.21-.58,5.02-1.09v-5.2h-60.36c-10.2.04-17.14.46-20.83,1.26v-25.29c5.78,1.28,12.52,1.95,20.23,1.99h44.08l-.84-14.81,17.73,3.82v-19.6c-.44,1.68-1.03,3.15-1.77,4.37-2.57,4.3-7.73,7-15.48,8.13-3.85.44-8.91.66-15.17.66h-15.42c-6.26,0-11.32-.22-15.17-.66-7.71-1.12-12.85-3.83-15.42-8.13-1.81-2.97-2.73-7.31-2.77-13.01v-9.94c.04-5.7.96-10.04,2.77-13.01,2.57-4.3,7.71-6.98,15.42-8.07,3.85-.48,8.91-.72,15.17-.72h15.42c6.26,0,11.32.24,15.17.72,7.75,1.08,12.91,3.77,15.48,8.07.74,1.22,1.33,2.68,1.77,4.37v-26.31c-1.12,3.27-3.55,5.38-7.31,6.32-4.3,1.16-11.4,1.71-21.32,1.63h-26.19c-2.57,0-5.56-.14-8.97-.42s-5.82-.58-7.23-.9c-3.81-.88-6.46-2.47-7.95-4.76-1-1.61-1.61-3.31-1.81-5.12-.2-1.97-.34-5.5-.42-10.6v-20.65h17.88v20.41h14.27v-20.41h17.88v20.41h14.27v-20.41h16.88v-5.75h-81.19v-35.65c.08-7.23.86-11.72,2.35-13.49,1.85-2.09,5.02-3.39,9.51-3.92,2.73-.36,5.9-.54,9.51-.54h6.26c9.96.28,16.16,1.28,18.61,3.01,2.21,1.45,3.45,3.99,3.73,7.64.04.8.06,2.65.06,5.54v15.36h31.16v-35.44h-81.19v-35.95h17.88v13.91h14.27v-13.91h17.88v13.91h31.16v-27.12c-1.12,3.27-3.55,5.38-7.31,6.32-4.3,1.16-11.4,1.71-21.32,1.63h-26.19c-2.57,0-5.56-.14-8.97-.42s-5.82-.58-7.23-.9c-3.81-.88-6.46-2.47-7.95-4.76-1-1.61-1.61-3.31-1.81-5.12-.2-1.97-.34-5.5-.42-10.6v-20.65h17.88v20.41h14.27v-20.41h17.88v20.41h14.27v-20.41h16.88v-5.75h-81.19v-33.72c0-4.98.12-8.45.36-10.42.48-3.97,2.51-6.56,6.08-7.77,2.57-.92,5.7-1.41,9.39-1.45h5.3c3.65,0,6.24.1,7.77.3,4.13.6,7.15,2.19,9.03,4.76,1.04,1.49,1.75,3.81,2.11,6.98.96-3.25,1.93-5.62,2.89-7.11,2.45-3.49,6.7-5.14,12.77-4.94h12.71c5.11-.04,9.37-.53,12.79-1.46V0H0v788.52h79.5v-85.21Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 36,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m136.88,67.15c-2.93.04-4.92.66-5.96,1.87-.92,1.12-1.38,2.67-1.38,4.64v2.77h31.16v-10.66c-3.36.96-7.64,1.42-12.85,1.39h-10.96Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 37,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m98.21,70.33c-.68.8-1.02,2.22-1.02,4.26v3.12h14.28v-3.12c0-2.48-.38-4.08-1.14-4.8-1-.96-3-1.44-6-1.44s-4.96.66-6.12,1.98Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 38,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m155.45,653.59c-.8-.16-2.03-.33-3.67-.51-1.65-.18-2.91-.27-3.79-.27h-8.79c-2.89,0-4.82.02-5.78.06-3.69.12-6.3.64-7.83,1.57-2.61,1.89-3.87,5.7-3.79,11.44v6.92h-7.47v-17.82h-14.87v24.21c0,4.3.4,7.23,1.2,8.79,1.03,1.84,2.71,3.1,5.01,3.78h28.94c1.84-.49,3.19-1.34,3.92-2.64.72-1.41,1.08-3.57,1.08-6.5v-9.57h8.13v115.48h12.95v-131.29c-1.39-1.98-3.14-3.2-5.25-3.64Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 39,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m147.74,460.11v21.44c0,2.73-.32,4.55-.96,5.48-.68,1-2.19,1.51-4.52,1.51h-3.31v-28.42h-25.95c-2.25,0-3.73.02-4.46.06-2.73.2-4.8,1.16-6.2,2.89-1.85,2.17-2.81,6.64-2.89,13.43v15.53c0,2.45.1,4.52.3,6.2.36,3.29,1.2,5.62,2.53,6.99,1.89,1.93,5.2,2.91,9.94,2.95h33.42c3.01,0,5.04-.02,6.08-.06,3.97-.2,6.7-1.04,8.19-2.53.29-.33.55-.72.79-1.14v-44.32h-12.95Zm-20.77,28.42h-5.72c-4.58,0-6.86-1.47-6.86-4.4,0-1.48.76-2.65,2.29-3.49,1.04-.6,2.57-.9,4.58-.9h5.72v8.79Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 40,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m155.73,419.99c-2.17.32-4.98.48-8.43.48h-7.53c-2.69,0-4.46.12-5.3.36-3.25.84-4.9,2.87-4.94,6.08v2.89h31.16v-11.48c-1.7.83-3.35,1.4-4.96,1.66Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 41,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m144.91,516.5c-5.78-2.49-13.29-3.81-22.52-3.97h-22.94v19.63h22.82c5.34,0,9.86.28,13.55.84,3.65.56,7.15,1.75,10.48,3.55-3.29,1.85-6.78,3.05-10.48,3.61s-8.21.84-13.55.84h-22.82v19.63h22.94c8.51-.12,15.21-1.14,20.11-3.07,7.41-2.79,13.45-6.09,18.19-9.87v-22.19c-4.16-3.29-9.39-6.3-15.78-9.01Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 42,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { className: "cls-1", d: "m147.74,564.83v21.44c0,2.73-.32,4.56-.96,5.48-.68,1-2.19,1.51-4.52,1.51h-3.31v-28.42h-25.95c-2.25,0-3.73.02-4.46.06-2.73.2-4.8,1.16-6.2,2.89-1.85,2.17-2.81,6.64-2.89,13.43v15.54c0,2.45.1,4.52.3,6.2.36,3.29,1.2,5.62,2.53,6.99,1.89,1.93,5.2,2.91,9.94,2.95h33.42c3.01,0,5.04-.02,6.08-.06,3.97-.2,6.7-1.04,8.19-2.53.29-.33.55-.72.79-1.14v-44.32h-12.95Zm-20.77,28.42h-5.72c-4.58,0-6.86-1.47-6.86-4.4,0-1.49.76-2.65,2.29-3.49,1.04-.6,2.57-.9,4.58-.9h5.72v8.79Z" }, void 0, !1, {
            fileName: "app/components/heroLogoSVG.component.jsx",
            lineNumber: 43,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/heroLogoSVG.component.jsx",
          lineNumber: 32,
          columnNumber: 5
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/heroLogoSVG.component.jsx",
        lineNumber: 14,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/heroLogoSVG.component.jsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), heroLogoSVG_component_default = HeroLogo;

// app/routes/__app._index.jsx
var import_react_plx = require("react-plx");
var import_react_animate_on_scroll2 = require("react-animate-on-scroll");

// app/components/background.component.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Background() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "background" }, void 0, !1, {
    fileName: "app/components/background.component.jsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/components/hero.component.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Hero() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "hero", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerRow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        progressiveImage_component_default,
        {
          src: "/images/brandImages/rolling/RollingRest_Logo.webp",
          placeholderSrc: "/images/brandImages/rolling/RollingRest_Logo_LowRes.webp",
          classTitle: "",
          alt: "hero image"
        },
        void 0,
        !1,
        {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 9,
          columnNumber: 25
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 8,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        progressiveImage_component_default,
        {
          src: "/images/printImages/EliteEstheticianBooth.webp",
          placeholderSrc: "/images/printImages/EliteEstheticianBooth_LowRes.webp",
          classTitle: "",
          alt: "hero image"
        },
        void 0,
        !1,
        {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 17,
          columnNumber: 25
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 16,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        progressiveImage_component_default,
        {
          src: "/images/HoodGuyMockup copy.webp",
          placeholderSrc: "/images/HoodGuyMockup copy-lowRes.webp",
          classTitle: "",
          alt: "hero image"
        },
        void 0,
        !1,
        {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 25,
          columnNumber: 25
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 24,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        progressiveImage_component_default,
        {
          src: "/images/brandImages/enhance/EnhanceMagazines.webp",
          placeholderSrc: "/images/brandImages/enhance/EnhanceMagazines_LowRes.webp",
          classTitle: "",
          alt: "hero image"
        },
        void 0,
        !1,
        {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 33,
          columnNumber: 25
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 32,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/hero.component.jsx",
      lineNumber: 7,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerRow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        progressiveImage_component_default,
        {
          src: "/images/printImages/NelsonWrap.webp",
          placeholderSrc: "/images/printImages/NelsonWrap_LowRes.webp",
          classTitle: "",
          alt: "hero image"
        },
        void 0,
        !1,
        {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 43,
          columnNumber: 25
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 42,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        progressiveImage_component_default,
        {
          src: "/images/printImages/MatadorBottle_v2_Mockup.webp",
          placeholderSrc: "/images/printImages/MatadorBottle_v2_Mockup_LowRes.webp",
          classTitle: "",
          alt: "hero image"
        },
        void 0,
        !1,
        {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 51,
          columnNumber: 25
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 50,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        progressiveImage_component_default,
        {
          src: "/images/printImages/BugattiBook_Mockup.webp",
          placeholderSrc: "/images/printImages/BugattiBook_Mockup_LowRes.webp",
          classTitle: "",
          alt: "hero image"
        },
        void 0,
        !1,
        {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 59,
          columnNumber: 25
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 58,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/hero.component.jsx",
      lineNumber: 41,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerRow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        progressiveImage_component_default,
        {
          src: "/images/printImages/FreyaAbsinthe_MockUp.webp",
          placeholderSrc: "/images/printImages/FreyaAbsinthe_MockUp_LowRes.webp",
          classTitle: "",
          alt: "hero image"
        },
        void 0,
        !1,
        {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 69,
          columnNumber: 25
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 68,
        columnNumber: 22
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        progressiveImage_component_default,
        {
          src: "/images/brandImages/enhance/EnhanceWebsite.webp",
          placeholderSrc: "/images/brandImages/enhance/EnhanceWebsite_LowRes.webp",
          classTitle: "",
          alt: "hero image"
        },
        void 0,
        !1,
        {
          fileName: "app/components/hero.component.jsx",
          lineNumber: 77,
          columnNumber: 25
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 76,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/hero.component.jsx",
      lineNumber: 67,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerRow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "containerImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      progressiveImage_component_default,
      {
        src: "/images/brandImages/rolling/RollingRest_Sketches.webp",
        placeholderSrc: "/images/brandImages/rolling/RollingRest_Sketches_LowRes.webp",
        classTitle: "",
        alt: "hero image"
      },
      void 0,
      !1,
      {
        fileName: "app/components/hero.component.jsx",
        lineNumber: 87,
        columnNumber: 25
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/hero.component.jsx",
      lineNumber: 86,
      columnNumber: 22
    }, this) }, void 0, !1, {
      fileName: "app/components/hero.component.jsx",
      lineNumber: 85,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/hero.component.jsx",
    lineNumber: 6,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/hero.component.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/routes/__app._index.jsx
var import_react13 = require("react"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), meta3 = () => [
  { title: "Graphic Design | Stephen Kloepfer | Branding & Design" },
  { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
  { name: "description", content: "In today's evolving market, it is imperative your design evolves alongside. Stephen Kloepfer is here to help with all your branding and graphic design needs." },
  { name: "og:title", content: "Stephen Kloepfer | Branding and Design" },
  { name: "og:description", content: "Stephen Kloepfer specializes in evolving graphic design to compete in today's fast-paced market." },
  { name: "og:image", content: "/social_preview.png" }
], links7 = () => [
  { rel: "stylesheet", href: landing_styles_default },
  { rel: "stylesheet", href: hero_styles_default },
  ...links3()
];
function Index() {
  let onWheel = (e) => {
    e.preventDefault();
    let container = scrollRef.current, containerScrollPosition = scrollRef.current.scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behavior: "smooth"
    });
  }, scrollRef = (0, import_react13.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mainLanding scrolling", id: "container", ref: scrollRef, onWheel, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "panel1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(heroLogoSVG_component_default, { className: "logo", color: "#e05210", logoID: "logo1" }, void 0, !1, {
          fileName: "app/routes/__app._index.jsx",
          lineNumber: 50,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Hero, {}, void 0, !1, {
          fileName: "app/routes/__app._index.jsx",
          lineNumber: 51,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "spacer" }, void 0, !1, {
          fileName: "app/routes/__app._index.jsx",
          lineNumber: 52,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__app._index.jsx",
        lineNumber: 49,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "panel2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("img", { src: "/images/SteveFlowChart.webp", className: "flowPic" }, void 0, !1, {
          fileName: "app/routes/__app._index.jsx",
          lineNumber: 55,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "intro", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { children: "ABOUT ME" }, void 0, !1, {
            fileName: "app/routes/__app._index.jsx",
            lineNumber: 57,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: "It\u2019s a rare thing to find something you love doing and even rarer to do it professionally. I am lucky enough to have found a calling that allows me to express my artistic side, while also helping my clients succeed. It\u2019s my focus to create lasting imagery that is both eye-catching and matches the personality of my clients. To achieve this, I strive to stay up-to-date with the latest trends and technology in the field, so I can continue supporting my clients in today's competitive and evolving market." }, void 0, !1, {
            fileName: "app/routes/__app._index.jsx",
            lineNumber: 58,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__app._index.jsx",
          lineNumber: 56,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__app._index.jsx",
        lineNumber: 54,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(MainMenu, {}, void 0, !1, {
        fileName: "app/routes/__app._index.jsx",
        lineNumber: 61,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__app._index.jsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mobile", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "panel1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(heroLogoSVG_component_default, { className: "logo", color: "#e05210", logoID: "logo1" }, void 0, !1, {
          fileName: "app/routes/__app._index.jsx",
          lineNumber: 65,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Hero, {}, void 0, !1, {
          fileName: "app/routes/__app._index.jsx",
          lineNumber: 66,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "spacer" }, void 0, !1, {
          fileName: "app/routes/__app._index.jsx",
          lineNumber: 67,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__app._index.jsx",
        lineNumber: 64,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "panel2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("img", { src: "/images/SteveFlowChart.webp", className: "flowPic" }, void 0, !1, {
          fileName: "app/routes/__app._index.jsx",
          lineNumber: 70,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "intro", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { children: "ABOUT ME" }, void 0, !1, {
            fileName: "app/routes/__app._index.jsx",
            lineNumber: 72,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: "It\u2019s a rare thing to find something you love doing and even rarer to do it professionally. I am lucky enough to have found a calling that allows me to express my artistic side, while also helping my clients succeed. It\u2019s my focus to create lasting imagery that is both eye-catching and matches the personality of my clients. To achieve this, I strive to stay up-to-date with the latest trends and technology in the field, so I can continue supporting my clients in today's competitive and evolving market." }, void 0, !1, {
            fileName: "app/routes/__app._index.jsx",
            lineNumber: 73,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__app._index.jsx",
          lineNumber: 71,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__app._index.jsx",
        lineNumber: 69,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(MainMenu, {}, void 0, !1, {
        fileName: "app/routes/__app._index.jsx",
        lineNumber: 76,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__app._index.jsx",
      lineNumber: 63,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app._index.jsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

// app/routes/__app.about.jsx
var app_about_exports = {};
__export(app_about_exports, {
  default: () => app_about_default,
  links: () => links8,
  loader: () => loader3,
  meta: () => meta4
});
var import_react15 = require("react");

// app/styles/about.styles.css
var about_styles_default = "/build/_assets/about.styles-PW3BQ5F3.css";

// app/routes/__app.about.jsx
var import_react16 = require("@remix-run/react");

// workhistory.json
var workhistory_default = {
  about: [{
    title: "Enhance Printing - General Manager",
    date: "2020-Present",
    text: [
      "Responsible for all graphic projects, including full brand packages, web design, and prepress work.",
      "Handled client relations, as well as promoting new services.",
      "Took on new roles in accounts receivable and administration.",
      "Oversaw expanding our brand to include digital marketing and web-based options.",
      "Took numerous online courses to expand my capabilities, and extend the services we offered.",
      "In my time with Enhance, we have seen our annual sales double."
    ],
    spaceClass: "breakLarge",
    final: !1
  }, {
    title: "Enhance Printing - Graphic Design & Prepress",
    date: "2013-2020",
    text: [
      "Managed and maintained customer project files.",
      "Graphic design, including logo creation, recreation, and branded marketing materials.",
      "Handled all prepress duties and managed the digital print side of production.",
      "Took an expanded role in customer relations and sales.",
      "Worked to expand our wide format offerings, including designing outdoor vinyl, banners, and vehicle wraps."
    ],
    spaceClass: "breakSmall",
    final: !1
  }, {
    title: "PostNet - Lead Graphic Designer",
    date: "2012-2013",
    text: [
      "Handled all print and design related work in a fast-paced, walk-in heavy environment.",
      "Filled in with the shipping department as needed, learning much of the ins and outs and shipping.",
      "Took the lead for all in-house marketing, including designs for community outreach and sponsorships."
    ],
    spaceClass: "breakSmall",
    final: !1
  }, {
    title: "Citizen Printing - Internship",
    date: "2012",
    text: [
      "Handled the update of a nation-wide manual for Idealease.",
      "Contacted all branches to update company information and locations.",
      "Created vector maps for all new locations, with a focus on accuracy and legibility.",
      "Worked closely with the prepress department to finalize the artwork."
    ],
    spaceClass: "breakSmall",
    final: !1
  }, {
    title: "Freelance Work",
    date: "2010-2012",
    text: [
      "Created artwork for several local companies and startups, including brand identities, logos, and promotional materials.",
      "Worked on diagrams for several machine training proposals, and ensure they were animation-ready.",
      "Maintained relationships with my client."
    ],
    spaceClass: "breakSmall",
    final: !1
  }, {
    title: "Front Range Community College",
    date: "Class of 2011",
    text: [
      "Associates of the Arts, Print and Presentation"
    ],
    spaceClass: "breakSmall",
    final: !0
  }]
};

// app/components/timeline.component.jsx
var import_react14 = require("react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function Timeline(props) {
  let [activeInfo, setInfo] = (0, import_react14.useState)(""), [priorSelect, setPrior] = (0, import_react14.useState)("");
  var aboutInfo;
  let select = props.selector;
  select === "about" ? aboutInfo = props.aboutInfo.about : select === "education" ? aboutInfo = props.aboutInfo.education : select === "skills" ? aboutInfo = props.aboutInfo.skills : aboutInfo = "";
  let setActive = (props2) => {
    setInfo(""), setInfo(props2);
  };
  return (0, import_react14.useEffect)(() => {
    (activeInfo == "" && priorSelect != select || priorSelect != select) && (setInfo(aboutInfo[0]), setPrior(select));
  }, [aboutInfo, activeInfo, priorSelect, setPrior, select]), /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "scrollbox", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "aboutContainer", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "timeline", style: { height: props.heightBlock }, children: aboutInfo.map((info) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "div",
        {
          className: activeInfo && activeInfo != "" && info.title === activeInfo.title ? "bullet activeBullet" : "bullet",
          onClick: () => setActive(info),
          children: info.date
        },
        info.title,
        !1,
        {
          fileName: "app/components/timeline.component.jsx",
          lineNumber: 43,
          columnNumber: 25
        },
        this
      ),
      activeInfo && activeInfo != "" && info.title === activeInfo.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "bulletActive-line" }, void 0, !1, {
        fileName: "app/components/timeline.component.jsx",
        lineNumber: 55,
        columnNumber: 33
      }, this) : "",
      info.final ? "" : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: info.spaceClass }, void 0, !1, {
        fileName: "app/components/timeline.component.jsx",
        lineNumber: 61,
        columnNumber: 33
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/timeline.component.jsx",
      lineNumber: 42,
      columnNumber: 25
    }, this)) }, void 0, !1, {
      fileName: "app/components/timeline.component.jsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "textbox", style: { minHeight: props.heightBlock }, children: activeInfo && activeInfo != "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { children: activeInfo.title }, void 0, !1, {
        fileName: "app/components/timeline.component.jsx",
        lineNumber: 72,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h3", { children: activeInfo.date }, void 0, !1, {
        fileName: "app/components/timeline.component.jsx",
        lineNumber: 73,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("ul", { children: activeInfo.text.map((text) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("li", { children: text }, text, !1, {
        fileName: "app/components/timeline.component.jsx",
        lineNumber: 77,
        columnNumber: 37
      }, this)) }, void 0, !1, {
        fileName: "app/components/timeline.component.jsx",
        lineNumber: 74,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/timeline.component.jsx",
      lineNumber: 71,
      columnNumber: 25
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: "Please Select a Bullet" }, void 0, !1, {
      fileName: "app/components/timeline.component.jsx",
      lineNumber: 83,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/timeline.component.jsx",
      lineNumber: 68,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/timeline.component.jsx",
    lineNumber: 37,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/timeline.component.jsx",
    lineNumber: 36,
    columnNumber: 9
  }, this);
}

// app/routes/__app.about.jsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), links8 = () => [
  { rel: "stylesheet", href: global_styles_default },
  { rel: "stylesheet", href: page_styles_default },
  { rel: "stylesheet", href: about_styles_default },
  { rel: "stylesheet", href: landing_styles_default },
  ...links3(),
  ...links2()
], meta4 = () => [
  { title: "Who is Stephen Kloepfer?" },
  { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
  { name: "description", content: "A bit about me and my history in the fast-paced field of graphic design." },
  { name: "og:title", content: "Stephen Kloepfer | Who am I?" },
  { name: "og:description", content: "A bit about me and my history in the fast-paced field of graphic desig." },
  { name: "og:image", content: "/social_preview.png" }
], About = () => {
  let aboutInfo = (0, import_react16.useLoaderData)(), [triggered, setTriggered] = (0, import_react15.useState)(!1), [loaded, hasloaded] = (0, import_react15.useState)(!1), [height, setHeight] = (0, import_react15.useState)("63vh"), delay = (ms) => new Promise((res) => setTimeout(res, ms)), triggerSlide = async () => {
    await delay(500), hasloaded(!0), setTriggered(!0);
  }, closeSlide = () => {
    setTriggered(!1);
  }, navigate = (0, import_react16.useNavigate)(), data_from_child = async (data) => {
    data != "" && data != null && (closeSlide(), await delay(500), navigate("/" + data));
  };
  (0, import_react15.useEffect)(() => {
    loaded || triggerSlide();
  });
  let onReopen = () => {
    console.log("fire"), hasloaded(!1);
  }, onWheel = (e) => {
    e.preventDefault();
    let container = scrollRef.current, containerScrollPosition = scrollRef.current.scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behavior: "smooth"
    });
  }, scrollRef = (0, import_react15.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      MainMenu,
      {
        page: "about",
        onReopen
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app.about.jsx",
        lineNumber: 87,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: triggered ? "slider backgroundDark activeSlide" : "slider inactiveSlide", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { onClick: closeSlide, className: triggered ? "button" : "button hiddenButton", children: "x" }, void 0, !1, {
        fileName: "app/routes/__app.about.jsx",
        lineNumber: 92,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(pagesHeader_component_default, { background: "#35444F", setter: data_from_child, onClose: closeSlide, active: "about" }, void 0, !1, {
        fileName: "app/routes/__app.about.jsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "aboutScrolling mainLanding", id: "container", ref: scrollRef, onWheel, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "panel1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("img", { src: "/images/SteveFlowChart.webp", className: "aboutPic" }, void 0, !1, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 96,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "introBox", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "aboutText", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { children: "ABOUT ME" }, void 0, !1, {
              fileName: "app/routes/__app.about.jsx",
              lineNumber: 99,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: [
              "It\u2019s a rare thing to find something you love doing and even rarer to do it professionally. I am lucky enough to have found a calling that allows me to express my artistic side, while also helping my clients succeed. It\u2019s my focus to create lasting imagery that is both eye-catching and matches the personality of my clients. To achieve this, I strive to stay up-to-date with the latest trends and technology in the field, so I can continue supporting my clients in today's competitive and evolving market.",
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/__app.about.jsx",
                lineNumber: 102,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/__app.about.jsx",
                lineNumber: 102,
                columnNumber: 29
              }, this),
              "When not working, my greatest passion is my family. I can often be found playing with my two sons, or spending some quality time with my wife. My primary goal is to provide the best life that I can for them, and be a present and involved as a partner and father.",
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/__app.about.jsx",
                lineNumber: 104,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/__app.about.jsx",
                lineNumber: 104,
                columnNumber: 29
              }, this),
              "In my free time, I enjoy watching movies, writing, and reading. While I enjoy a wide variety of genres, I find myself often pulled to speculative fiction, and have a vast collection of movies and books delving into the fantastic, horrific, and futuristic. I am also an avid fan of gaming. I enjoy regular table-top sessions with some close friends, and have a long-standing love for video games. Recently, I have begun the path towards a lifelong dream of teaching myself Unreal Engine and Blender in the hopes of creating a video game of my own from the ground up."
            ] }, void 0, !0, {
              fileName: "app/routes/__app.about.jsx",
              lineNumber: 100,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 98,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 97,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__app.about.jsx",
          lineNumber: 95,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "aboutSpacer" }, void 0, !1, {
          fileName: "app/routes/__app.about.jsx",
          lineNumber: 110,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "panel2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "historyBox", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { className: "historyText", children: "Work History" }, void 0, !1, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 113,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 112,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "aboutRow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Timeline, { aboutInfo, selector: "about", heightBlock: "60vh" }, void 0, !1, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 116,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 115,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__app.about.jsx",
          lineNumber: 111,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__app.about.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "aboutMobile", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "panel1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("img", { src: "/images/SteveFlowChart.webp", className: "aboutPic" }, void 0, !1, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 122,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "introBox", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "aboutText", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { children: "ABOUT ME" }, void 0, !1, {
              fileName: "app/routes/__app.about.jsx",
              lineNumber: 125,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: [
              "It\u2019s a rare thing to find something you love doing and even rarer to do it professionally. I am lucky enough to have found a calling that allows me to express my artistic side, while also helping my clients succeed. It\u2019s my focus to create lasting imagery that is both eye-catching and matches the personality of my clients. To achieve this, I strive to stay up-to-date with the latest trends and technology in the field, so I can continue supporting my clients in today's competitive and evolving market.",
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/__app.about.jsx",
                lineNumber: 128,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/__app.about.jsx",
                lineNumber: 128,
                columnNumber: 29
              }, this),
              "When not working, my greatest passion is my family. I can often be found playing with my two sons, or spending some quality time with my wife. My primary goal is to provide the best life that I can for them, and be a present and involved as a partner and father.",
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/__app.about.jsx",
                lineNumber: 130,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/__app.about.jsx",
                lineNumber: 130,
                columnNumber: 29
              }, this),
              "In my free time, I enjoy watching movies, writing, and reading. While I enjoy a wide variety of genres, I find myself often pulled to speculative fiction, and have a vast collection of movies and books delving into the fantastic, horrific, and futuristic. I am also an avid fan of gaming. I enjoy regular table-top sessions with some close friends, and have a long-standing love for video games. Recently, I have begun the path towards a lifelong dream of teaching myself Unreal Engine and Blender in the hopes of creating a video game of my own from the ground up."
            ] }, void 0, !0, {
              fileName: "app/routes/__app.about.jsx",
              lineNumber: 126,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 124,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 123,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__app.about.jsx",
          lineNumber: 121,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "panel2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "historyBox", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { className: "historyText", children: "Work History" }, void 0, !1, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 138,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "aboutRow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Timeline, { aboutInfo, selector: "about", heightBlock: "70vh" }, void 0, !1, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 140,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 139,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__app.about.jsx",
          lineNumber: 137,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/__app.about.jsx",
          lineNumber: 136,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__app.about.jsx",
        lineNumber: 120,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__app.about.jsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app.about.jsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}, app_about_default = About;
async function loader3() {
  return workhistory_default;
}

// app/routes/__app.logos.jsx
var app_logos_exports = {};
__export(app_logos_exports, {
  default: () => app_logos_default,
  links: () => links9,
  loader: () => loader4,
  meta: () => meta5
});
var import_react17 = require("react");

// app/styles/logos.styles.css
var logos_styles_default = "/build/_assets/logos.styles-C2ZQ2X27.css";

// app/routes/__app.logos.jsx
var import_react18 = require("@remix-run/react");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), links9 = () => [
  { rel: "stylesheet", href: global_styles_default },
  { rel: "stylesheet", href: page_styles_default },
  { rel: "stylesheet", href: logos_styles_default },
  ...links3(),
  ...links2()
], meta5 = () => [
  { title: "Logo Design | Stephen Kloepfer Branding & Design?" },
  { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
  { name: "description", content: "I specialize in creating logos in a wide variety of styles to create a unique and personalized look that draws your customers' eyes." },
  { name: "og:title", content: "Stephen Kloepfer Logo Design" },
  { name: "og:description", content: "I specialize in creating logos in a wide variety of styles to create a unique and personalized look that draws your customers' eyes." },
  { name: "og:image", content: "/social_preview.png" }
];
function useHorizontalScroll() {
  let elRef = (0, import_react17.useRef)();
  return (0, import_react17.useEffect)(() => {
    let el = elRef.current;
    if (el) {
      let onWheel = (e) => {
        e.deltaY != 0 && (e.preventDefault(), el.scrollBy(e.deltaY, 0));
      };
      return el.addEventListener("wheel", onWheel), () => el.removeEventListener("wheel", onWheel);
    }
  }, []), elRef;
}
var LogoDesign = () => {
  let [triggered, setTriggered] = (0, import_react17.useState)(!1), [loaded, hasloaded] = (0, import_react17.useState)(!1), brandData = (0, import_react18.useLoaderData)(), delay = (ms) => new Promise((res) => setTimeout(res, ms)), triggerSlide = async () => {
    await delay(500), hasloaded(!0), setTriggered(!0);
  }, closeSlide = () => {
    setTriggered(!1);
  }, navigate = (0, import_react18.useNavigate)(), data_from_child = async (data) => {
    data != "" && data != null && (closeSlide(), await delay(500), navigate("/" + data));
  }, scrollRef = useHorizontalScroll();
  return (0, import_react17.useEffect)(() => {
    loaded || triggerSlide();
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      MainMenu,
      {
        page: "logos",
        onReopen: () => {
          hasloaded(!1);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 88,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: triggered ? "slider backgroundBlue activeSlide" : "slider inactiveSlide", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("button", { onClick: closeSlide, className: triggered ? "button" : "button hiddenButton", children: "x" }, void 0, !1, {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 93,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(pagesHeader_component_default, { background: "#1A4C74", setter: data_from_child, onClose: closeSlide, active: "logos" }, void 0, !1, {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h1", { className: "heading", children: "Logo Design" }, void 0, !1, {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 96,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: brandData.logos.map((logo, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "logosRow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "logoBounding", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "logoDescriptionNoSlide", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h2", { children: logo.name }, void 0, !1, {
            fileName: "app/routes/__app.logos.jsx",
            lineNumber: 106,
            columnNumber: 17
          }, this),
          logo.description
        ] }, void 0, !0, {
          fileName: "app/routes/__app.logos.jsx",
          lineNumber: 105,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "logoBoxNoSlide", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          progressiveImage_component_default,
          {
            src: logo.image,
            placeholderSrc: logo.placeholder,
            classTitle: "",
            alt: logo.alt
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__app.logos.jsx",
            lineNumber: 110,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/__app.logos.jsx",
          lineNumber: 109,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 104,
        columnNumber: 13
      }, this) }, logo.name, !1, {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 103,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 98,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "spacer" }, void 0, !1, {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 123,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__app.logos.jsx",
      lineNumber: 92,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app.logos.jsx",
    lineNumber: 87,
    columnNumber: 5
  }, this);
}, app_logos_default = LogoDesign;
async function loader4() {
  return brandingInfo_default;
}

// app/routes/__app.print.jsx
var app_print_exports = {};
__export(app_print_exports, {
  default: () => app_print_default,
  links: () => links10,
  loader: () => loader5,
  meta: () => meta6
});
var import_react19 = require("react");
var import_react20 = require("@remix-run/react");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), links10 = () => [
  { rel: "stylesheet", href: global_styles_default },
  { rel: "stylesheet", href: page_styles_default },
  ...links3(),
  ...links2(),
  ...links5()
], meta6 = () => [
  { title: "Print Design | Stephen Kloepfer Branding & Design" },
  { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
  { name: "description", content: "With over a decade in Print and Presentation, I specialize in crafting press ready visuals, working within your branded guidelines." },
  { name: "og:title", content: "Stephen Kloepfer Design for Print Production" },
  { name: "og:description", content: "With over a decade in Print and Presentation, I specialize in crafting press ready visuals, working within your branded guidelines." },
  { name: "og:image", content: "/social_preview.png" }
], Branding2 = () => {
  let [triggered, setTriggered] = (0, import_react19.useState)(!1), [loaded, hasloaded] = (0, import_react19.useState)(!1), [active, setActive] = (0, import_react19.useState)(), [IsActive, setActiveBool] = (0, import_react19.useState)(!1), delay = (ms) => new Promise((res) => setTimeout(res, ms)), navigate = (0, import_react20.useNavigate)(), triggerSlide = async () => {
    await delay(250), hasloaded(!0), setTriggered(!0);
  }, data_from_child = async (data2) => {
    data2 != "" && data2 != null && (closeSlide(), await delay(500), navigate("/" + data2));
  }, closeSlide = () => {
    setTriggered(!1);
  }, data = (0, import_react20.useLoaderData)();
  (0, import_react19.useEffect)(() => {
    loaded || triggerSlide();
  });
  let [hoveredItem, setHovered] = (0, import_react19.useState)("");
  function changeHover(newItem) {
    setHovered(newItem.name);
  }
  function unsetHover() {
    setHovered("");
  }
  function selectItem(item) {
    setActive(item), setActiveBool(!0);
  }
  let onClose = () => {
    setActive(""), setActiveBool(!1);
  }, onReopen = () => {
    hasloaded(!1);
  };
  function checkLength(item) {
    return item.images.length;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      MainMenu,
      {
        page: "print",
        onReopen
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app.print.jsx",
        lineNumber: 96,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: triggered ? "slider activeSlide" : "slider inactiveSlide", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { onClick: closeSlide, className: triggered ? "button" : "button hiddenButton", children: "x" }, void 0, !1, {
        fileName: "app/routes/__app.print.jsx",
        lineNumber: 101,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(pagesHeader_component_default, { setter: data_from_child, onClose: closeSlide, active: "print" }, void 0, !1, {
        fileName: "app/routes/__app.print.jsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { className: "heading", children: "Print Design" }, void 0, !1, {
          fileName: "app/routes/__app.print.jsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "imageGrid", children: data.print.map(
          (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "imageBox", onMouseEnter: () => changeHover(item), onMouseLeave: unsetHover, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("a", { children: [
            checkLength(item) > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "overlay", style: { fontSize: "150%", opacity: 1 }, children: [
              item.name.toUpperCase(),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/__app.print.jsx",
                lineNumber: 112,
                columnNumber: 106
              }, this),
              "Click to See More"
            ] }, void 0, !0, {
              fileName: "app/routes/__app.print.jsx",
              lineNumber: 112,
              columnNumber: 17
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "overlay", style: { fontSize: "150%", opacity: 1 }, children: [
              item.name.toUpperCase(),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/__app.print.jsx",
                lineNumber: 113,
                columnNumber: 106
              }, this),
              "Click to Expand Image"
            ] }, void 0, !0, {
              fileName: "app/routes/__app.print.jsx",
              lineNumber: 113,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              progressiveImage_component_default,
              {
                alt: item.name,
                src: item.hero ? item.hero.image : item.images[0].image,
                placeholderSrc: item.hero ? item.hero.placeholder : item.images[0].placeholder,
                classTitle: "primaryImage",
                onClick: () => selectItem(item)
              },
              item.name,
              !1,
              {
                fileName: "app/routes/__app.print.jsx",
                lineNumber: 116,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/__app.print.jsx",
            lineNumber: 109,
            columnNumber: 17
          }, this) }, item.name, !1, {
            fileName: "app/routes/__app.print.jsx",
            lineNumber: 108,
            columnNumber: 13
          }, this)
        ) }, void 0, !1, {
          fileName: "app/routes/__app.print.jsx",
          lineNumber: 105,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__app.print.jsx",
        lineNumber: 103,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__app.print.jsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      modal_component_default,
      {
        onClose,
        className: IsActive ? "openModal" : "closeModal",
        color: "white",
        data: active
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app.print.jsx",
        lineNumber: 134,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__app.print.jsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}, app_print_default = Branding2;
async function loader5() {
  return brandingInfo_default;
}

// app/routes/__app.menu.jsx
var app_menu_exports = {};
__export(app_menu_exports, {
  default: () => Menu,
  links: () => links11,
  meta: () => meta7
});
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), meta7 = () => [{ title: "New Remix App" }], links11 = () => [
  { rel: "stylesheet", href: menu_styles_default }
];
function Menu() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "main", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(MainMenu, { scrolling: !1 }, void 0, !1, {
    fileName: "app/routes/__app.menu.jsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/__app.menu.jsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/__app.spec.jsx
var app_spec_exports = {};
__export(app_spec_exports, {
  default: () => app_spec_default,
  links: () => links12,
  loader: () => loader6,
  meta: () => meta8
});
var import_react21 = require("react");
var import_react22 = require("@remix-run/react");
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), links12 = () => [
  { rel: "stylesheet", href: page_styles_default },
  ...links3(),
  ...links2(),
  ...links5()
], meta8 = () => [
  { title: "Artistic Playground | Stephen Kloepfer Branding & Design?" },
  { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
  { name: "description", content: "Featuring non-client projects, done for fun and practice." },
  { name: "og:title", content: "Stephen Kloepfer Artistic Playground" },
  { name: "og:description", content: "Featuring non-client projects, done for fun and practice." },
  { name: "og:image", content: "/social_preview.png" }
], Branding3 = () => {
  let [triggered, setTriggered] = (0, import_react21.useState)(!1), [loaded, hasloaded] = (0, import_react21.useState)(!1), [activeBrand, setActiveBrand] = (0, import_react21.useState)(), [brandIsActive, setBrandBool] = (0, import_react21.useState)(!1), delay = (ms) => new Promise((res) => setTimeout(res, ms)), navigate = (0, import_react22.useNavigate)(), triggerSlide = async () => {
    await delay(250), hasloaded(!0), setTriggered(!0);
  }, data_from_child = async (data) => {
    data != "" && data != null && (closeSlide(), await delay(500), navigate("/" + data));
  }, closeSlide = () => {
    setTriggered(!1);
  }, brandData = (0, import_react22.useLoaderData)();
  (0, import_react21.useEffect)(() => {
    loaded || triggerSlide();
  });
  let [hoveredItem, setHovered] = (0, import_react21.useState)("");
  function changeHover(newItem) {
    setHovered(newItem.name);
  }
  function unsetHover() {
    setHovered("");
  }
  function selectBrand(brand) {
    setActiveBrand(brand), setBrandBool(!0);
  }
  let onClose = () => {
    setActiveBrand(""), setBrandBool(!1);
  }, onReopen = () => {
    hasloaded(!1);
  };
  function checkLength(brand) {
    return brand.images.length;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      MainMenu,
      {
        page: "spec",
        onReopen
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app.spec.jsx",
        lineNumber: 94,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: triggered ? "slider activeSlide" : "slider inactiveSlide", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("button", { onClick: closeSlide, className: triggered ? "button" : "button hiddenButton", children: "x" }, void 0, !1, {
        fileName: "app/routes/__app.spec.jsx",
        lineNumber: 99,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(pagesHeader_component_default, { background: "dark", setter: data_from_child, onClose: closeSlide, active: "spec" }, void 0, !1, {
        fileName: "app/routes/__app.spec.jsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { className: "heading", children: [
          "Artistic Playground",
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/__app.spec.jsx",
            lineNumber: 102,
            columnNumber: 54
          }, this),
          "& Speculative Work"
        ] }, void 0, !0, {
          fileName: "app/routes/__app.spec.jsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/__app.spec.jsx",
          lineNumber: 103,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "introText", children: "Whether to keep our creative edge honed, or just for day-to-day fun, sometimes our best work ends up being purely fictional work. While I prefer to focus my portfolio on real-world projects, occassionally a 'for fun' design is just too good to keep to myself. That is why I created the 'speculative' section of my portfolio, as a chance to show off work I'm proud of, that has never seen the light of day professionally." }, void 0, !1, {
          fileName: "app/routes/__app.spec.jsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "imageGrid", children: brandData.spec.map(
          (brand) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "imageBox", onMouseEnter: () => changeHover(brand), onMouseLeave: unsetHover, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("a", { children: [
            checkLength(brand) > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "overlay", children: "Click to See More" }, void 0, !1, {
              fileName: "app/routes/__app.spec.jsx",
              lineNumber: 112,
              columnNumber: 17
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "overlay", children: "Click to Expand Image" }, void 0, !1, {
              fileName: "app/routes/__app.spec.jsx",
              lineNumber: 113,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              progressiveImage_component_default,
              {
                alt: brand.name,
                src: brand.hero ? brand.hero.image : brand.images[0].image,
                placeholderSrc: brand.hero ? brand.hero.placeholder : brand.images[0].placeholder,
                classTitle: "primaryImage",
                onClick: () => selectBrand(brand)
              },
              brand.name,
              !1,
              {
                fileName: "app/routes/__app.spec.jsx",
                lineNumber: 116,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/__app.spec.jsx",
            lineNumber: 109,
            columnNumber: 17
          }, this) }, brand.name, !1, {
            fileName: "app/routes/__app.spec.jsx",
            lineNumber: 108,
            columnNumber: 13
          }, this)
        ) }, void 0, !1, {
          fileName: "app/routes/__app.spec.jsx",
          lineNumber: 105,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__app.spec.jsx",
        lineNumber: 101,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__app.spec.jsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      modal_component_default,
      {
        onClose,
        className: brandIsActive ? "openModal" : "closeModal",
        color: "white",
        data: activeBrand
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app.spec.jsx",
        lineNumber: 135,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__app.spec.jsx",
    lineNumber: 93,
    columnNumber: 5
  }, this);
}, app_spec_default = Branding3;
async function loader6() {
  return brandingInfo_default;
}

// app/routes/__app.web.jsx
var app_web_exports = {};
__export(app_web_exports, {
  default: () => app_web_default,
  links: () => links13,
  loader: () => loader7,
  meta: () => meta9
});
var import_react23 = require("react");
var import_react24 = require("@remix-run/react");
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), links13 = () => [
  { rel: "stylesheet", href: global_styles_default },
  { rel: "stylesheet", href: page_styles_default },
  ...links3(),
  ...links2()
], meta9 = () => [
  { title: "Web Design | Stephen Kloepfer Branding & Design?" },
  { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
  { name: "description", content: "Whether you need a simple Wordpress site for customers to land on, or full hand-coded websites with all the bells and whistles, I am here to help!" },
  { name: "og:title", content: "Stephen Kloepfer Website Development" },
  { name: "og:description", content: "hether you need a simple Wordpress site for customers to land on, or full hand-coded websites with all the bells and whistles, I am here to help!" },
  { name: "og:image", content: "/social_preview.png" }
], WebDesign = () => {
  let [triggered, setTriggered] = (0, import_react23.useState)(!1), [loaded, hasloaded] = (0, import_react23.useState)(!1), brandData = (0, import_react24.useLoaderData)(), delay = (ms) => new Promise((res) => setTimeout(res, ms)), triggerSlide = async () => {
    await delay(500), hasloaded(!0), setTriggered(!0);
  }, closeSlide = () => {
    setTriggered(!1);
  }, navigate = (0, import_react24.useNavigate)(), data_from_child = async (data) => {
    data != "" && data != null && (closeSlide(), await delay(500), navigate("/" + data));
  };
  return (0, import_react23.useEffect)(() => {
    loaded || triggerSlide();
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      MainMenu,
      {
        page: "web",
        onReopen: () => {
          hasloaded(!1);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app.web.jsx",
        lineNumber: 67,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: triggered ? "slider activeSlide" : "slider inactiveSlide", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("button", { onClick: closeSlide, className: triggered ? "button" : "button hiddenButton", children: "x" }, void 0, !1, {
        fileName: "app/routes/__app.web.jsx",
        lineNumber: 72,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(pagesHeader_component_default, { setter: data_from_child, onClose: closeSlide, active: "web" }, void 0, !1, {
        fileName: "app/routes/__app.web.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { className: "heading", children: "Web Design" }, void 0, !1, {
          fileName: "app/routes/__app.web.jsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        brandData.web.map(
          (web) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            progressiveImage_component_default,
            {
              src: web.image,
              placeholderSrc: web.placeholder,
              classTitle: "fullImage",
              alt: web.alt
            },
            web.name,
            !1,
            {
              fileName: "app/routes/__app.web.jsx",
              lineNumber: 78,
              columnNumber: 11
            },
            this
          )
        )
      ] }, void 0, !0, {
        fileName: "app/routes/__app.web.jsx",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__app.web.jsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app.web.jsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}, app_web_default = WebDesign;
async function loader7() {
  return brandingInfo_default;
}

// app/routes/__app.jsx
var app_exports = {};
__export(app_exports, {
  default: () => App2,
  links: () => links14
});
var import_react25 = require("@remix-run/react");
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), links14 = () => [];
function App2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react25.Outlet, {}, void 0, !1, {
      fileName: "app/routes/__app.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Background, {}, void 0, !1, {
      fileName: "app/routes/__app.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-ABZ5CL3R.js", imports: ["/build/_shared/chunk-V3SLA63D.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-EDRLHQR5.js", imports: ["/build/_shared/chunk-RDTA277U.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app": { id: "routes/__app", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__app-FF5SXNRW.js", imports: ["/build/_shared/chunk-LPD6BGRT.js", "/build/_shared/chunk-6SORIGQK.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app._index": { id: "routes/__app._index", parentId: "routes/__app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__app._index-AMPVM4JZ.js", imports: ["/build/_shared/chunk-6IXGK5EQ.js", "/build/_shared/chunk-MOFTYH3I.js", "/build/_shared/chunk-SOLCVJSR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app.about": { id: "routes/__app.about", parentId: "routes/__app", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/__app.about-DN5J7TSF.js", imports: ["/build/_shared/chunk-6IXGK5EQ.js", "/build/_shared/chunk-KRJFTU54.js", "/build/_shared/chunk-RDTA277U.js", "/build/_shared/chunk-SOLCVJSR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app.branding": { id: "routes/__app.branding", parentId: "routes/__app", path: "branding", index: void 0, caseSensitive: void 0, module: "/build/routes/__app.branding-LP7LXLPG.js", imports: ["/build/_shared/chunk-BGZRSLIS.js", "/build/_shared/chunk-MOFTYH3I.js", "/build/_shared/chunk-KRJFTU54.js", "/build/_shared/chunk-RDTA277U.js", "/build/_shared/chunk-SOLCVJSR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app.logos": { id: "routes/__app.logos", parentId: "routes/__app", path: "logos", index: void 0, caseSensitive: void 0, module: "/build/routes/__app.logos-PYOSZGN6.js", imports: ["/build/_shared/chunk-MOFTYH3I.js", "/build/_shared/chunk-KRJFTU54.js", "/build/_shared/chunk-RDTA277U.js", "/build/_shared/chunk-SOLCVJSR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app.menu": { id: "routes/__app.menu", parentId: "routes/__app", path: "menu", index: void 0, caseSensitive: void 0, module: "/build/routes/__app.menu-M23J3E3D.js", imports: ["/build/_shared/chunk-SOLCVJSR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app.print": { id: "routes/__app.print", parentId: "routes/__app", path: "print", index: void 0, caseSensitive: void 0, module: "/build/routes/__app.print-EKSGU45S.js", imports: ["/build/_shared/chunk-BGZRSLIS.js", "/build/_shared/chunk-MOFTYH3I.js", "/build/_shared/chunk-KRJFTU54.js", "/build/_shared/chunk-RDTA277U.js", "/build/_shared/chunk-SOLCVJSR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app.print-original": { id: "routes/__app.print-original", parentId: "routes/__app", path: "print-original", index: void 0, caseSensitive: void 0, module: "/build/routes/__app.print-original-TK42G26K.js", imports: ["/build/_shared/chunk-MOFTYH3I.js", "/build/_shared/chunk-KRJFTU54.js", "/build/_shared/chunk-RDTA277U.js", "/build/_shared/chunk-SOLCVJSR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app.spec": { id: "routes/__app.spec", parentId: "routes/__app", path: "spec", index: void 0, caseSensitive: void 0, module: "/build/routes/__app.spec-XHY75R6M.js", imports: ["/build/_shared/chunk-BGZRSLIS.js", "/build/_shared/chunk-MOFTYH3I.js", "/build/_shared/chunk-KRJFTU54.js", "/build/_shared/chunk-SOLCVJSR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app.web": { id: "routes/__app.web", parentId: "routes/__app", path: "web", index: void 0, caseSensitive: void 0, module: "/build/routes/__app.web-RASRH5AU.js", imports: ["/build/_shared/chunk-MOFTYH3I.js", "/build/_shared/chunk-KRJFTU54.js", "/build/_shared/chunk-RDTA277U.js", "/build/_shared/chunk-SOLCVJSR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "5de1f667", hmr: void 0, url: "/build/manifest-5DE1F667.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !1, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/__app.print-original": {
    id: "routes/__app.print-original",
    parentId: "routes/__app",
    path: "print-original",
    index: void 0,
    caseSensitive: void 0,
    module: app_print_original_exports
  },
  "routes/__app.branding": {
    id: "routes/__app.branding",
    parentId: "routes/__app",
    path: "branding",
    index: void 0,
    caseSensitive: void 0,
    module: app_branding_exports
  },
  "routes/__app._index": {
    id: "routes/__app._index",
    parentId: "routes/__app",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: app_index_exports
  },
  "routes/__app.about": {
    id: "routes/__app.about",
    parentId: "routes/__app",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: app_about_exports
  },
  "routes/__app.logos": {
    id: "routes/__app.logos",
    parentId: "routes/__app",
    path: "logos",
    index: void 0,
    caseSensitive: void 0,
    module: app_logos_exports
  },
  "routes/__app.print": {
    id: "routes/__app.print",
    parentId: "routes/__app",
    path: "print",
    index: void 0,
    caseSensitive: void 0,
    module: app_print_exports
  },
  "routes/__app.menu": {
    id: "routes/__app.menu",
    parentId: "routes/__app",
    path: "menu",
    index: void 0,
    caseSensitive: void 0,
    module: app_menu_exports
  },
  "routes/__app.spec": {
    id: "routes/__app.spec",
    parentId: "routes/__app",
    path: "spec",
    index: void 0,
    caseSensitive: void 0,
    module: app_spec_exports
  },
  "routes/__app.web": {
    id: "routes/__app.web",
    parentId: "routes/__app",
    path: "web",
    index: void 0,
    caseSensitive: void 0,
    module: app_web_exports
  },
  "routes/__app": {
    id: "routes/__app",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
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
//# sourceMappingURL=server.js.map
