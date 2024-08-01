import {
  links as links3,
  modal_component_default
} from "/build/_shared/chunk-LGW4NJSG.js";
import {
  progressiveImage_component_default
} from "/build/_shared/chunk-MOFTYH3I.js";
import {
  links,
  page_styles_default,
  pagesHeader_component_default
} from "/build/_shared/chunk-KRJFTU54.js";
import {
  MainMenu,
  links as links2
} from "/build/_shared/chunk-SOLCVJSR.js";
import "/build/_shared/chunk-6SORIGQK.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-V3SLA63D.js";

// app/routes/__app.spec.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links4 = () => [
  { rel: "stylesheet", href: page_styles_default },
  ...links2(),
  ...links(),
  ...links3()
];
var meta = () => {
  return [
    { title: "Artistic Playground | Stephen Kloepfer Branding & Design?" },
    { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
    { name: "description", content: "Featuring non-client projects, done for fun and practice." },
    { name: "og:title", content: "Stephen Kloepfer Artistic Playground" },
    { name: "og:description", content: "Featuring non-client projects, done for fun and practice." },
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
        page: "spec",
        onReopen
      },
      void 0,
      false,
      {
        fileName: "app/routes/__app.spec.jsx",
        lineNumber: 94,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: triggered ? `slider activeSlide` : `slider inactiveSlide`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: closeSlide, className: triggered ? "button" : "button hiddenButton", children: "x" }, void 0, false, {
        fileName: "app/routes/__app.spec.jsx",
        lineNumber: 99,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(pagesHeader_component_default, { background: "dark", setter: data_from_child, onClose: closeSlide, active: "spec" }, void 0, false, {
        fileName: "app/routes/__app.spec.jsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "heading", children: [
          "Artistic Playground",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/__app.spec.jsx",
            lineNumber: 102,
            columnNumber: 54
          }, this),
          "& Speculative Work"
        ] }, void 0, true, {
          fileName: "app/routes/__app.spec.jsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/__app.spec.jsx",
          lineNumber: 103,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "introText", children: "Whether to keep our creative edge honed, or just for day-to-day fun, sometimes our best work ends up being purely fictional work. While I prefer to focus my portfolio on real-world projects, occassionally a 'for fun' design is just too good to keep to myself. That is why I created the 'speculative' section of my portfolio, as a chance to show off work I'm proud of, that has never seen the light of day professionally." }, void 0, false, {
          fileName: "app/routes/__app.spec.jsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "imageGrid", children: brandData.spec.map(
          (brand) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "imageBox", onMouseEnter: () => changeHover(brand), onMouseLeave: unsetHover, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { children: [
            checkLength(brand) > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "overlay", children: "Click to See More" }, void 0, false, {
              fileName: "app/routes/__app.spec.jsx",
              lineNumber: 112,
              columnNumber: 17
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "overlay", children: "Click to Expand Image" }, void 0, false, {
              fileName: "app/routes/__app.spec.jsx",
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
                fileName: "app/routes/__app.spec.jsx",
                lineNumber: 116,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/__app.spec.jsx",
            lineNumber: 109,
            columnNumber: 17
          }, this) }, brand.name, false, {
            fileName: "app/routes/__app.spec.jsx",
            lineNumber: 108,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "app/routes/__app.spec.jsx",
          lineNumber: 105,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/__app.spec.jsx",
        lineNumber: 101,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/__app.spec.jsx",
      lineNumber: 98,
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
        fileName: "app/routes/__app.spec.jsx",
        lineNumber: 135,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/__app.spec.jsx",
    lineNumber: 93,
    columnNumber: 5
  }, this);
};
var app_spec_default = Branding;
export {
  app_spec_default as default,
  links4 as links,
  meta
};
//# sourceMappingURL=/build/routes/__app.spec-SWGPNLDE.js.map
