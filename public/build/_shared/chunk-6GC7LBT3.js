import {
  progressiveImage_component_default
} from "/build/_shared/chunk-AYGQ7JC7.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-SYL4ZOYI.js";

// app/styles/modal.styles.css
var modal_styles_default = "/build/_assets/modal.styles-MTN5XKLT.css";

// app/components/modal.component.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Modal = (props) => {
  const onClose = props.onClose;
  if (props.data && props.data != "") {
    const data = props.data;
    const images = data.images;
    const descr = data.description;
    const hero = data.hero;
    console.log(descr);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "modalBackground " + props.className, style: { backgroundColor: props.color }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "modalContain", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: onClose, className: "buttonModal", children: "x" }, void 0, false, {
        fileName: "app/components/modal.component.jsx",
        lineNumber: 18,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "modalImageContain", children: [
        data.hero ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
              lineNumber: 22,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "descrText", children: descr }, void 0, false, {
            fileName: "app/components/modal.component.jsx",
            lineNumber: 29,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/modal.component.jsx",
          lineNumber: 21,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
          fileName: "app/components/modal.component.jsx",
          lineNumber: 31,
          columnNumber: 13
        }, this),
        images.map(
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
              lineNumber: 34,
              columnNumber: 13
            },
            this
          )
        )
      ] }, void 0, true, {
        fileName: "app/components/modal.component.jsx",
        lineNumber: 19,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/modal.component.jsx",
      lineNumber: 17,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/modal.component.jsx",
      lineNumber: 16,
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
//# sourceMappingURL=/build/_shared/chunk-6GC7LBT3.js.map
