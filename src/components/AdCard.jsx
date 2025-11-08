import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
function AdCard({ ad, canEdit, onEdit, onDelete }) {
  const publicPath = typeof window !== "undefined" && window.__PUBLIC_PATH__ ? window.__PUBLIC_PATH__ : "/";
  const defaultImg = `${publicPath}default.png`;
  const tgLink = `https://t.me/${ad.tg}`;
  return /* @__PURE__ */ jsxDEV("div", { className: "card animated-card", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "card-media", style: { backgroundImage: `url(${ad.screenshots && ad.screenshots[0] ? ad.screenshots[0] : defaultImg})` } }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "card-body", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "card-row", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "title", children: ad.title }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 12,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "price", children: ad.price }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 13,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "desc", children: ad.description }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "card-actions", children: [
        /* @__PURE__ */ jsxDEV("a", { className: "btn tg", href: tgLink, target: "_blank", rel: "noopener noreferrer", children: "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        canEdit ? /* @__PURE__ */ jsxDEV("div", { className: "manage", children: [
          /* @__PURE__ */ jsxDEV("button", { className: "btn ghost small", onClick: onEdit, children: "\u0420\u0435\u0434." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 21,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("button", { className: "btn danger small", onClick: onDelete, children: "\u0423\u0434\u0430\u043B." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 22,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 20,
          columnNumber: 13
        }, this) : /* @__PURE__ */ jsxDEV("div", { className: "meta", children: [
          "\u041F\u0440\u043E\u0434\u0430\u0432\u0435\u0446: @",
          ad.tg
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 25,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
export {
  AdCard as default
};
