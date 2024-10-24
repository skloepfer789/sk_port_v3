import {
  progressiveImage_component_default
} from "/build/_shared/chunk-MOFTYH3I.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-V3SLA63D.js";

// app/styles/modal.styles.css
var modal_styles_default = "/build/_assets/modal.styles-JRPHCJPG.css";

// app/components/modal.component.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Modal = (props) => {
  const onClose = props.onClose;
  if (props.data && props.data != "") {
    const data = props.data;
    const images = data.images;
    const hero = data.hero;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "modalBackground " + props.className, style: { backgroundColor: props.color }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "modalContain", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: onClose, className: "buttonModal", children: "x" }, void 0, false, {
        fileName: "app/components/modal.component.jsx",
        lineNumber: 16,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "modalImageContain", children: [
        data.hero && data.heroAlsoFirstImage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          progressiveImage_component_default,
          {
            src: hero.image,
            placeholderSrc: hero.placeholder,
            classTitle: "brandImage",
            alt: hero.alt
          },
          hero.image,
          false,
          {
            fileName: "app/components/modal.component.jsx",
            lineNumber: 20,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/modal.component.jsx",
          lineNumber: 19,
          columnNumber: 13
        }, this) : data.images.length === 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          progressiveImage_component_default,
          {
            src: images[0].image,
            placeholderSrc: images[0].placeholder,
            classTitle: "brandImage",
            alt: images[0].alt
          },
          images[0].image,
          false,
          {
            fileName: "app/components/modal.component.jsx",
            lineNumber: 29,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/modal.component.jsx",
          lineNumber: 28,
          columnNumber: 40
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
          fileName: "app/components/modal.component.jsx",
          lineNumber: 36,
          columnNumber: 27
        }, this),
        data.noDescription ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
          fileName: "app/components/modal.component.jsx",
          lineNumber: 39,
          columnNumber: 13
        }, this) : data.noBreakdown ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "breakdown", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: data.name }, void 0, false, {
            fileName: "app/components/modal.component.jsx",
            lineNumber: 43,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "descrText", children: data.shortDescription }, void 0, false, {
            fileName: "app/components/modal.component.jsx",
            lineNumber: 44,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/modal.component.jsx",
          lineNumber: 42,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "breakdown", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: data.name }, void 0, false, {
            fileName: "app/components/modal.component.jsx",
            lineNumber: 48,
            columnNumber: 29
          }, this),
          data.breakdown.map(
            (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "breakdownBox", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "breakdownTitle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: item.title }, void 0, false, {
                fileName: "app/components/modal.component.jsx",
                lineNumber: 53,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/components/modal.component.jsx",
                lineNumber: 52,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "breakdownText", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: item.text }, void 0, false, {
                fileName: "app/components/modal.component.jsx",
                lineNumber: 56,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/components/modal.component.jsx",
                lineNumber: 55,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/modal.component.jsx",
              lineNumber: 51,
              columnNumber: 15
            }, this)
          ),
          data.hasOriginalLogo ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "breakdownBox", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "breakdownTitle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "original logo" }, void 0, false, {
              fileName: "app/components/modal.component.jsx",
              lineNumber: 64,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/components/modal.component.jsx",
              lineNumber: 63,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "breakdownText", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: data.originalLogo.image, className: "originalLogo", alt: "Original Logo" }, void 0, false, {
              fileName: "app/components/modal.component.jsx",
              lineNumber: 67,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/components/modal.component.jsx",
              lineNumber: 66,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/modal.component.jsx",
            lineNumber: 62,
            columnNumber: 15
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
            fileName: "app/components/modal.component.jsx",
            lineNumber: 70,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/modal.component.jsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        images.length > 1 ? images.map(
          (image) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            progressiveImage_component_default,
            {
              src: image.image,
              placeholderSrc: image.placeholder,
              classTitle: image.size === "small" ? `secondaryImage` : image.size === "mid" ? "midImage" : `brandImage`,
              alt: image.alt
            },
            image.image,
            false,
            {
              fileName: "app/components/modal.component.jsx",
              lineNumber: 77,
              columnNumber: 13
            },
            this
          )
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
          fileName: "app/components/modal.component.jsx",
          lineNumber: 86,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/modal.component.jsx",
        lineNumber: 17,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/modal.component.jsx",
      lineNumber: 15,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/modal.component.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this);
  }
};
var modal_component_default = Modal;
var links = () => [
  { rel: "stylesheet", href: modal_styles_default }
];

export {
  modal_component_default,
  links
};
//# sourceMappingURL=/build/_shared/chunk-BGZRSLIS.js.map
