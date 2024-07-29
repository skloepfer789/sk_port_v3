import {
  landing_styles_default
} from "/build/_shared/chunk-L6ZX24UO.js";
import {
  links,
  page_styles_default,
  pagesHeader_component_default
} from "/build/_shared/chunk-RXEDAMAK.js";
import {
  global_styles_default
} from "/build/_shared/chunk-5SKTI2PH.js";
import {
  MainMenu,
  links as links2
} from "/build/_shared/chunk-RCD6BM7U.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-SYL4ZOYI.js";

// app/routes/__app.about.jsx
var import_react2 = __toESM(require_react());

// app/styles/about.styles.css
var about_styles_default = "/build/_assets/about.styles-SWSRN7OH.css";

// app/components/timeline.component.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Timeline(props) {
  const [activeInfo, setInfo] = (0, import_react.useState)("");
  const [priorSelect, setPrior] = (0, import_react.useState)("");
  var aboutInfo;
  const select = props.selector;
  if (select === "about") {
    aboutInfo = props.aboutInfo.about;
  } else if (select === "education") {
    aboutInfo = props.aboutInfo.education;
  } else if (select === "skills") {
    aboutInfo = props.aboutInfo.skills;
  } else {
    aboutInfo = "";
  }
  const setActive = (props2) => {
    setInfo("");
    setInfo(props2);
  };
  (0, import_react.useEffect)(() => {
    if (activeInfo == "" && priorSelect != select) {
      setInfo(aboutInfo[0]);
      setPrior(select);
    } else if (priorSelect != select) {
      setInfo(aboutInfo[0]);
      setPrior(select);
    }
  }, [aboutInfo, activeInfo, priorSelect, setPrior, select]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "scrollbox", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "aboutContainer", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "timeline", style: { maxHeight: props.heightBlock }, children: aboutInfo.map((info) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: activeInfo && activeInfo != "" && info.title === activeInfo.title ? "bullet activeBullet" : "bullet",
          onClick: () => setActive(info),
          children: info.date
        },
        info.title,
        false,
        {
          fileName: "app/components/timeline.component.jsx",
          lineNumber: 43,
          columnNumber: 25
        },
        this
      ),
      activeInfo && activeInfo != "" && info.title === activeInfo.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bulletActive-line" }, void 0, false, {
        fileName: "app/components/timeline.component.jsx",
        lineNumber: 55,
        columnNumber: 33
      }, this) : "",
      !info.final ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: info.spaceClass }, void 0, false, {
        fileName: "app/components/timeline.component.jsx",
        lineNumber: 61,
        columnNumber: 33
      }, this) : ""
    ] }, void 0, true, {
      fileName: "app/components/timeline.component.jsx",
      lineNumber: 42,
      columnNumber: 25
    }, this)) }, void 0, false, {
      fileName: "app/components/timeline.component.jsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "textbox", style: { minHeight: props.heightBlock }, children: activeInfo && activeInfo != "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: activeInfo.title }, void 0, false, {
        fileName: "app/components/timeline.component.jsx",
        lineNumber: 72,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: activeInfo.date }, void 0, false, {
        fileName: "app/components/timeline.component.jsx",
        lineNumber: 73,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: activeInfo.text.map((text) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: text }, text, false, {
        fileName: "app/components/timeline.component.jsx",
        lineNumber: 77,
        columnNumber: 37
      }, this)) }, void 0, false, {
        fileName: "app/components/timeline.component.jsx",
        lineNumber: 74,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/timeline.component.jsx",
      lineNumber: 71,
      columnNumber: 25
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Please Select a Bullet" }, void 0, false, {
      fileName: "app/components/timeline.component.jsx",
      lineNumber: 83,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/timeline.component.jsx",
      lineNumber: 68,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/timeline.component.jsx",
    lineNumber: 37,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/timeline.component.jsx",
    lineNumber: 36,
    columnNumber: 9
  }, this);
}

// app/routes/__app.about.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var links3 = () => [
  { rel: "stylesheet", href: global_styles_default },
  { rel: "stylesheet", href: page_styles_default },
  { rel: "stylesheet", href: about_styles_default },
  { rel: "stylesheet", href: landing_styles_default },
  ...links2(),
  ...links()
];
var meta = () => {
  return [
    { title: "Who is Stephen Kloepfer?" },
    { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
    { name: "description", content: "A bit about me and my history in the fast-paced field of graphic design." },
    { name: "og:title", content: "Stephen Kloepfer | Who am I?" },
    { name: "og:description", content: "A bit about me and my history in the fast-paced field of graphic desig." },
    { name: "og:image", content: "/social_preview.png" }
  ];
};
var About = () => {
  const aboutInfo = useLoaderData();
  const [triggered, setTriggered] = (0, import_react2.useState)(false);
  const [loaded, hasloaded] = (0, import_react2.useState)(false);
  const [height, setHeight] = (0, import_react2.useState)("63vh");
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
  (0, import_react2.useEffect)(() => {
    if (!loaded) {
      triggerSlide();
    }
  });
  const onReopen = () => {
    console.log("fire");
    hasloaded(false);
  };
  const onWheel = (e) => {
    e.preventDefault();
    const container = scrollRef.current;
    const containerScrollPosition = scrollRef.current.scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behavior: "smooth"
    });
  };
  const scrollRef = (0, import_react2.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      MainMenu,
      {
        page: "about",
        onReopen
      },
      void 0,
      false,
      {
        fileName: "app/routes/__app.about.jsx",
        lineNumber: 87,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: triggered ? `slider backgroundDark activeSlide` : `slider inactiveSlide`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: closeSlide, className: triggered ? "button" : "button hiddenButton", children: "x" }, void 0, false, {
        fileName: "app/routes/__app.about.jsx",
        lineNumber: 92,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(pagesHeader_component_default, { background: "#35444F", setter: data_from_child, onClose: closeSlide, active: "about" }, void 0, false, {
        fileName: "app/routes/__app.about.jsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "aboutScrolling", id: "container", ref: scrollRef, onWheel, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "panel1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/images/SteveFlowChart.webp", className: "aboutPic" }, void 0, false, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 96,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "introBox", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "aboutText", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: "ABOUT ME" }, void 0, false, {
              fileName: "app/routes/__app.about.jsx",
              lineNumber: 99,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
              "It\u2019s a rare thing to find something you love doing and even rarer to do it professionally. I am lucky enough to have found a calling that allows me to express my artistic side, while also helping my clients succeed. It\u2019s my focus to create lasting imagery that is both eye-catching and matches the personality of my clients. To achieve this, I strive to stay up-to-date with the latest trends and technology in the field, so I can continue supporting my clients in today's competitive and evolving market.",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/routes/__app.about.jsx",
                lineNumber: 102,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/routes/__app.about.jsx",
                lineNumber: 102,
                columnNumber: 29
              }, this),
              "When not working, my greatest passion is my family. I can often be found playing with my two sons, or spending some quality time with my wife. My primary goal is to provide the best life that I can for them, and be a present and involved as a partner and father.",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/routes/__app.about.jsx",
                lineNumber: 104,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/routes/__app.about.jsx",
                lineNumber: 104,
                columnNumber: 29
              }, this),
              "In my free time, I enjoy watching movies, writing, and reading. While I enjoy a wide variety of genres, I find myself often pulled to speculative fiction, and have a vast collection of movies and books delving into the fantastic, horrific, and futuristic. I am also an avid fan of gaming. I enjoy regular table-top sessions with some close friends, and have a long-standing love for video games. Recently, I have begun the path towards a lifelong dream of teaching myself Unreal Engine and Blender in the hopes of creating a video game of my own from the ground up."
            ] }, void 0, true, {
              fileName: "app/routes/__app.about.jsx",
              lineNumber: 100,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 98,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 97,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/__app.about.jsx",
          lineNumber: 95,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "aboutSpacer" }, void 0, false, {
          fileName: "app/routes/__app.about.jsx",
          lineNumber: 110,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "panel2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "historyBox", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "historyText", children: "Work History" }, void 0, false, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 113,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 112,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "aboutRow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Timeline, { aboutInfo, selector: "about", heightBlock: "60vh" }, void 0, false, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 116,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/__app.about.jsx",
            lineNumber: 115,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/__app.about.jsx",
          lineNumber: 111,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/__app.about.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/__app.about.jsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/__app.about.jsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
};
var app_about_default = About;
export {
  app_about_default as default,
  links3 as links,
  meta
};
//# sourceMappingURL=/build/routes/__app.about-BTMLLQPD.js.map
