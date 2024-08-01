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

// app/routes/__app.print-original.jsx
var import_react = __toESM(require_react());

// app/styles/print.styles.css
var print_styles_default = "/build/_assets/print.styles-PZO324GG.css";

// app/routes/__app.print-original.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links3 = () => [
  { rel: "stylesheet", href: global_styles_default },
  { rel: "stylesheet", href: page_styles_default },
  { rel: "stylesheet", href: print_styles_default },
  ...links2(),
  ...links()
];
var meta = () => {
  return [
    { title: "Print Design | Stephen Kloepfer Branding & Design?" },
    { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
    { name: "description", content: "With over a decade in Print and Presentation, I specialize in crafting press ready visuals, working within your branded guidelines." },
    { name: "og:title", content: "Stephen Kloepfer Design for Print Production" },
    { name: "og:description", content: "With over a decade in Print and Presentation, I specialize in crafting press ready visuals, working within your branded guidelines." },
    { name: "og:image", content: "/social_preview.png" }
  ];
};
var PrintDesign = () => {
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
    console.log("fire");
    hasloaded(false);
  };
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
        fileName: "app/routes/__app.print-original.jsx",
        lineNumber: 70,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: triggered ? `slider backgroundGreen activeSlide` : `slider inactiveSlide`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: closeSlide, className: triggered ? "button" : "button hiddenButton", children: "x" }, void 0, false, {
        fileName: "app/routes/__app.print-original.jsx",
        lineNumber: 75,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(pagesHeader_component_default, { background: "#1A746F", setter: data_from_child, onClose: closeSlide, active: "print" }, void 0, false, {
        fileName: "app/routes/__app.print-original.jsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "heading", children: "Print Design" }, void 0, false, {
          fileName: "app/routes/__app.print-original.jsx",
          lineNumber: 78,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "printRow", children: brandData.print.map(
          (print) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "printImage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            progressiveImage_component_default,
            {
              src: print.image,
              placeholderSrc: print.placeholder,
              classTitle: "",
              alt: print.alt
            },
            void 0,
            false,
            {
              fileName: "app/routes/__app.print-original.jsx",
              lineNumber: 83,
              columnNumber: 17
            },
            this
          ) }, print.name, false, {
            fileName: "app/routes/__app.print-original.jsx",
            lineNumber: 82,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "app/routes/__app.print-original.jsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "spacerGreen" }, void 0, false, {
          fileName: "app/routes/__app.print-original.jsx",
          lineNumber: 93,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/__app.print-original.jsx",
        lineNumber: 77,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/__app.print-original.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/__app.print-original.jsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
};
var app_print_original_default = PrintDesign;
export {
  app_print_original_default as default,
  links3 as links,
  meta
};
//# sourceMappingURL=/build/routes/__app.print-original-TK42G26K.js.map
