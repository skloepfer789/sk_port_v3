import {
  progressiveImage_component_default
} from "/build/_shared/chunk-MOFTYH3I.js";
import {
  links,
  page_styles_default,
  pagesHeader_component_default
} from "/build/_shared/chunk-KRJFTU54.js";
import {
  global_styles_default
} from "/build/_shared/chunk-RDTA277U.js";
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

// app/routes/__app.logos.jsx
var import_react = __toESM(require_react());

// app/styles/logos.styles.css
var logos_styles_default = "/build/_assets/logos.styles-C2ZQ2X27.css";

// app/routes/__app.logos.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links3 = () => [
  { rel: "stylesheet", href: global_styles_default },
  { rel: "stylesheet", href: page_styles_default },
  { rel: "stylesheet", href: logos_styles_default },
  ...links2(),
  ...links()
];
var meta = () => {
  return [
    { title: "Logo Design | Stephen Kloepfer Branding & Design?" },
    { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
    { name: "description", content: "I specialize in creating logos in a wide variety of styles to create a unique and personalized look that draws your customers' eyes." },
    { name: "og:title", content: "Stephen Kloepfer Logo Design" },
    { name: "og:description", content: "I specialize in creating logos in a wide variety of styles to create a unique and personalized look that draws your customers' eyes." },
    { name: "og:image", content: "/social_preview.png" }
  ];
};
function useHorizontalScroll() {
  const elRef = (0, import_react.useRef)();
  (0, import_react.useEffect)(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY == 0)
          return;
        e.preventDefault();
        el.scrollBy(e.deltaY, 0);
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}
var LogoDesign = () => {
  const [triggered, setTriggered] = (0, import_react.useState)(false);
  const [loaded, hasloaded] = (0, import_react.useState)(false);
  const brandData = useLoaderData();
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const triggerSlide = async () => {
    await delay(500);
    hasloaded(true);
    setTriggered(true);
  };
  const closeSlide = () => {
    setTriggered(false);
  };
  const navigate = useNavigate();
  const data_from_child = async (data) => {
    if (data != "" && data != void 0) {
      closeSlide();
      await delay(500);
      navigate("/" + data);
    }
  };
  const scrollRef = useHorizontalScroll();
  (0, import_react.useEffect)(() => {
    if (!loaded) {
      triggerSlide();
    }
  });
  const onReopen = () => {
    hasloaded(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      MainMenu,
      {
        page: "logos",
        onReopen
      },
      void 0,
      false,
      {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 88,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: triggered ? `slider backgroundBlue activeSlide` : `slider inactiveSlide`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: closeSlide, className: triggered ? "button" : "button hiddenButton", children: "x" }, void 0, false, {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 93,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(pagesHeader_component_default, { background: "#1A4C74", setter: data_from_child, onClose: closeSlide, active: "logos" }, void 0, false, {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "heading", children: "Logo Design" }, void 0, false, {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 96,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: brandData.logos.map((logo, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "logosRow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "logoBounding", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "logoDescriptionNoSlide", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: logo.name }, void 0, false, {
              fileName: "app/routes/__app.logos.jsx",
              lineNumber: 106,
              columnNumber: 17
            }, this),
            logo.description
          ] }, void 0, true, {
            fileName: "app/routes/__app.logos.jsx",
            lineNumber: 105,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "logoBoxNoSlide", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            progressiveImage_component_default,
            {
              src: logo.image,
              placeholderSrc: logo.placeholder,
              classTitle: "",
              alt: logo.alt
            },
            void 0,
            false,
            {
              fileName: "app/routes/__app.logos.jsx",
              lineNumber: 110,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/__app.logos.jsx",
            lineNumber: 109,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/__app.logos.jsx",
          lineNumber: 104,
          columnNumber: 13
        }, this) }, logo.name, false, {
          fileName: "app/routes/__app.logos.jsx",
          lineNumber: 103,
          columnNumber: 15
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 98,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "spacer" }, void 0, false, {
        fileName: "app/routes/__app.logos.jsx",
        lineNumber: 123,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/__app.logos.jsx",
      lineNumber: 92,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/__app.logos.jsx",
    lineNumber: 87,
    columnNumber: 5
  }, this);
};
var app_logos_default = LogoDesign;
export {
  app_logos_default as default,
  links3 as links,
  meta
};
//# sourceMappingURL=/build/routes/__app.logos-PYOSZGN6.js.map
