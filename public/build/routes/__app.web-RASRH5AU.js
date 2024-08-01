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

// app/routes/__app.web.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links3 = () => [
  { rel: "stylesheet", href: global_styles_default },
  { rel: "stylesheet", href: page_styles_default },
  ...links2(),
  ...links()
];
var meta = () => {
  return [
    { title: "Web Design | Stephen Kloepfer Branding & Design?" },
    { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
    { name: "description", content: "Whether you need a simple Wordpress site for customers to land on, or full hand-coded websites with all the bells and whistles, I am here to help!" },
    { name: "og:title", content: "Stephen Kloepfer Website Development" },
    { name: "og:description", content: "hether you need a simple Wordpress site for customers to land on, or full hand-coded websites with all the bells and whistles, I am here to help!" },
    { name: "og:image", content: "/social_preview.png" }
  ];
};
var WebDesign = () => {
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
        page: "web",
        onReopen
      },
      void 0,
      false,
      {
        fileName: "app/routes/__app.web.jsx",
        lineNumber: 67,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: triggered ? `slider activeSlide` : `slider inactiveSlide`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: closeSlide, className: triggered ? "button" : "button hiddenButton", children: "x" }, void 0, false, {
        fileName: "app/routes/__app.web.jsx",
        lineNumber: 72,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(pagesHeader_component_default, { setter: data_from_child, onClose: closeSlide, active: "web" }, void 0, false, {
        fileName: "app/routes/__app.web.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "heading", children: "Web Design" }, void 0, false, {
          fileName: "app/routes/__app.web.jsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        brandData.web.map(
          (web) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            progressiveImage_component_default,
            {
              src: web.image,
              placeholderSrc: web.placeholder,
              classTitle: "fullImage",
              alt: web.alt
            },
            web.name,
            false,
            {
              fileName: "app/routes/__app.web.jsx",
              lineNumber: 78,
              columnNumber: 11
            },
            this
          )
        )
      ] }, void 0, true, {
        fileName: "app/routes/__app.web.jsx",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/__app.web.jsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/__app.web.jsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
};
var app_web_default = WebDesign;
export {
  app_web_default as default,
  links3 as links,
  meta
};
//# sourceMappingURL=/build/routes/__app.web-RASRH5AU.js.map
