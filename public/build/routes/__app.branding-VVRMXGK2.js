import {
  links as links3,
  modal_component_default
} from "/build/_shared/chunk-YISZPJUY.js";
import {
  progressiveImage_component_default
} from "/build/_shared/chunk-MOFTYH3I.js";
import {
  links,
  page_styles_default,
  pagesHeader_component_default
} from "/build/_shared/chunk-KN6FLPXY.js";
import {
  global_styles_default
} from "/build/_shared/chunk-RDTA277U.js";
import {
  MainMenu,
  links as links2
} from "/build/_shared/chunk-HMAVY7XG.js";
import "/build/_shared/chunk-6SORIGQK.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-V3SLA63D.js";

// app/routes/__app.branding.jsx
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
    { title: "Brand Identity Services | Stephen Kloepfer Branding & Design?" },
    { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
    { name: "description", content: "I specialize in creating eye-catching and competitve brand identities to help you stand out amongst the competition." },
    { name: "og:title", content: "Stephen Kloepfer Branding Services" },
    { name: "og:description", content: "I specialize in creating eye-catching and competitve brand identities to help you stand out amongst the competition." },
    { name: "og:image", content: "/social_preview.png" }
  ];
};
var Branding = () => {
  const [triggered, setTriggered] = (0, import_react.useState)(false);
  const [loaded, hasloaded] = (0, import_react.useState)(false);
  const [activeBrand, setActiveBrand] = (0, import_react.useState)();
  const [brandIsActive, setBrandBool] = (0, import_react.useState)(false);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const navigate = useNavigate();
  const triggerSlide = async () => {
    await delay(250);
    hasloaded(true);
    setTriggered(true);
  };
  const data_from_child = async (data) => {
    if (data != "" && data != void 0) {
      closeSlide();
      await delay(500);
      navigate("/" + data);
    }
  };
  const closeSlide = () => {
    setTriggered(false);
  };
  const brandData = useLoaderData();
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
  function selectBrand(brand) {
    setActiveBrand(brand);
    setBrandBool(true);
  }
  const onClose = () => {
    setActiveBrand("");
    setBrandBool(false);
  };
  const onReopen = () => {
    hasloaded(false);
  };
  function checkLength(brand) {
    return brand.images.length;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      MainMenu,
      {
        page: "branding",
        onReopen
      },
      void 0,
      false,
      {
        fileName: "app/routes/__app.branding.jsx",
        lineNumber: 96,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: triggered ? `slider activeSlide` : `slider inactiveSlide`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: closeSlide, className: triggered ? "button" : "button hiddenButton", children: "x" }, void 0, false, {
        fileName: "app/routes/__app.branding.jsx",
        lineNumber: 101,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(pagesHeader_component_default, { background: "dark", setter: data_from_child, onClose: closeSlide, active: "branding" }, void 0, false, {
        fileName: "app/routes/__app.branding.jsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "heading", children: [
          "Brand Identity ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/__app.branding.jsx",
            lineNumber: 104,
            columnNumber: 50
          }, this),
          " & Logo Design"
        ] }, void 0, true, {
          fileName: "app/routes/__app.branding.jsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "imageGrid", children: brandData.branding.map(
          (brand) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "imageBox", onMouseEnter: () => changeHover(brand), onMouseLeave: unsetHover, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { children: [
            checkLength(brand) > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "overlay", children: "Click to See More" }, void 0, false, {
              fileName: "app/routes/__app.branding.jsx",
              lineNumber: 112,
              columnNumber: 17
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "overlay", children: "Click to Expand Image" }, void 0, false, {
              fileName: "app/routes/__app.branding.jsx",
              lineNumber: 113,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              progressiveImage_component_default,
              {
                alt: brand.name,
                src: brand.hero ? brand.hero.image : brand.images[0].image,
                placeholderSrc: brand.hero ? brand.hero.placeholder : brand.images[0].placeholder,
                classTitle: "primaryImage",
                onClick: () => selectBrand(brand)
              },
              brand.name,
              false,
              {
                fileName: "app/routes/__app.branding.jsx",
                lineNumber: 116,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/__app.branding.jsx",
            lineNumber: 109,
            columnNumber: 17
          }, this) }, brand.name, false, {
            fileName: "app/routes/__app.branding.jsx",
            lineNumber: 108,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "app/routes/__app.branding.jsx",
          lineNumber: 105,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/__app.branding.jsx",
        lineNumber: 103,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/__app.branding.jsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      modal_component_default,
      {
        onClose,
        className: brandIsActive ? "openModal" : "closeModal",
        color: "white",
        data: activeBrand
      },
      void 0,
      false,
      {
        fileName: "app/routes/__app.branding.jsx",
        lineNumber: 135,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/__app.branding.jsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
};
var app_branding_default = Branding;
export {
  app_branding_default as default,
  links4 as links,
  meta
};
//# sourceMappingURL=/build/routes/__app.branding-VVRMXGK2.js.map
