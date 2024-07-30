import {
  links as links3,
  modal_component_default
} from "/build/_shared/chunk-ZSAATVQJ.js";
import {
  progressiveImage_component_default
} from "/build/_shared/chunk-MOFTYH3I.js";
import {
  links,
  page_styles_default,
  pagesHeader_component_default
} from "/build/_shared/chunk-2N53LTL7.js";
import {
  global_styles_default
} from "/build/_shared/chunk-MKL5VVQW.js";
import {
  MainMenu,
  links as links2
} from "/build/_shared/chunk-S6XTAEIX.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-V3SLA63D.js";

// app/routes/__app.print.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links4 = () => [
  { rel: "stylesheet", href: global_styles_default },
  { rel: "stylesheet", href: page_styles_default },
  ...links2(),
  ...links(),
  ...links3()
];
var meta = () => {
  return [
    { title: "Print Design | Stephen Kloepfer Branding & Design" },
    { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
    { name: "description", content: "With over a decade in Print and Presentation, I specialize in crafting press ready visuals, working within your branded guidelines." },
    { name: "og:title", content: "Stephen Kloepfer Design for Print Production" },
    { name: "og:description", content: "With over a decade in Print and Presentation, I specialize in crafting press ready visuals, working within your branded guidelines." },
    { name: "og:image", content: "/social_preview.png" }
  ];
};
var Branding = () => {
  const [triggered, setTriggered] = (0, import_react.useState)(false);
  const [loaded, hasloaded] = (0, import_react.useState)(false);
  const [active, setActive] = (0, import_react.useState)();
  const [IsActive, setActiveBool] = (0, import_react.useState)(false);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const navigate = useNavigate();
  const triggerSlide = async () => {
    await delay(250);
    hasloaded(true);
    setTriggered(true);
  };
  const data_from_child = async (data2) => {
    if (data2 != "" && data2 != void 0) {
      closeSlide();
      await delay(500);
      navigate("/" + data2);
    }
  };
  const closeSlide = () => {
    setTriggered(false);
  };
  const data = useLoaderData();
  (0, import_react.useEffect)(() => {
    if (!loaded) {
      triggerSlide();
    }
  });
  const [hoveredItem, setHovered] = (0, import_react.useState)("");
  function changeHover(newItem) {
    setHovered(newItem.name);
  }
  function unsetHover() {
    setHovered("");
  }
  function selectItem(item) {
    setActive(item);
    setActiveBool(true);
  }
  const onClose = () => {
    setActive("");
    setActiveBool(false);
  };
  const onReopen = () => {
    hasloaded(false);
  };
  function checkLength(item) {
    return item.images.length;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      MainMenu,
      {
        page: "print",
        onReopen
      },
      void 0,
      false,
      {
        fileName: "app/routes/__app.print.jsx",
        lineNumber: 96,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: triggered ? `slider activeSlide` : `slider inactiveSlide`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: closeSlide, className: triggered ? "button" : "button hiddenButton", children: "x" }, void 0, false, {
        fileName: "app/routes/__app.print.jsx",
        lineNumber: 101,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(pagesHeader_component_default, { setter: data_from_child, onClose: closeSlide, active: "print" }, void 0, false, {
        fileName: "app/routes/__app.print.jsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "heading", children: "Print Design" }, void 0, false, {
          fileName: "app/routes/__app.print.jsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "imageGrid", children: data.print.map(
          (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "imageBox", onMouseEnter: () => changeHover(item), onMouseLeave: unsetHover, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { children: [
            checkLength(item) > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "overlay", style: { fontSize: "150%", opacity: 1 }, children: [
              item.name.toUpperCase(),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/routes/__app.print.jsx",
                lineNumber: 112,
                columnNumber: 106
              }, this),
              "Click to See More"
            ] }, void 0, true, {
              fileName: "app/routes/__app.print.jsx",
              lineNumber: 112,
              columnNumber: 17
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "overlay", style: { fontSize: "150%", opacity: 1 }, children: [
              item.name.toUpperCase(),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/routes/__app.print.jsx",
                lineNumber: 113,
                columnNumber: 106
              }, this),
              "Click to Expand Image"
            ] }, void 0, true, {
              fileName: "app/routes/__app.print.jsx",
              lineNumber: 113,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              progressiveImage_component_default,
              {
                alt: item.name,
                src: item.images[0].image,
                placeholderSrc: item.images[0].placeholder,
                classTitle: "primaryImage",
                onClick: () => selectItem(item)
              },
              item.name,
              false,
              {
                fileName: "app/routes/__app.print.jsx",
                lineNumber: 116,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/__app.print.jsx",
            lineNumber: 109,
            columnNumber: 17
          }, this) }, item.name, false, {
            fileName: "app/routes/__app.print.jsx",
            lineNumber: 108,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "app/routes/__app.print.jsx",
          lineNumber: 105,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/__app.print.jsx",
        lineNumber: 103,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/__app.print.jsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      modal_component_default,
      {
        onClose,
        className: IsActive ? "openModal" : "closeModal",
        color: "white",
        data: active
      },
      void 0,
      false,
      {
        fileName: "app/routes/__app.print.jsx",
        lineNumber: 134,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/__app.print.jsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
};
var app_print_default = Branding;
export {
  app_print_default as default,
  links4 as links,
  meta
};
//# sourceMappingURL=/build/routes/__app.print-LEUOASXN.js.map
