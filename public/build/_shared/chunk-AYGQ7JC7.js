import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-SYL4ZOYI.js";

// app/components/progressiveImage.component.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ProgressiveImg = ({ placeholderSrc, src, ...props }) => {
  const [imgSrc, setImgSrc] = (0, import_react.useState)(placeholderSrc || src);
  (0, import_react.useEffect)(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);
  const customClass = placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "img",
    {
      ...{ src: imgSrc, ...props },
      alt: props.alt || "",
      className: props.classTitle + " " + customClass
    },
    void 0,
    false,
    {
      fileName: "app/components/progressiveImage.component.jsx",
      lineNumber: 18,
      columnNumber: 5
    },
    this
  );
};
var progressiveImage_component_default = ProgressiveImg;

export {
  progressiveImage_component_default
};
//# sourceMappingURL=/build/_shared/chunk-AYGQ7JC7.js.map
