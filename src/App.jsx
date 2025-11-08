import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useEffect, useState } from "react";
import Auth from "./components/Auth.jsx";
import Marketplace from "./components/Marketplace.jsx";
import { getCurrentUser, logout } from "./utils/db.js";
function App() {
  const [user, setUser] = useState(getCurrentUser());
  useEffect(() => {
    setUser(getCurrentUser());
    const onStorage = () => setUser(getCurrentUser());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);
  return /* @__PURE__ */ jsxDEV("div", { className: "app", children: [
    /* @__PURE__ */ jsxDEV("header", { className: "topbar", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "logo", children: "Tap Force Market" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("nav", { children: user ? /* @__PURE__ */ jsxDEV("div", { className: "user-area", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "username", children: [
          "@",
          user.tg
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 23,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "btn ghost", onClick: () => {
          logout();
          setUser(null);
        }, children: "\u0412\u044B\u0439\u0442\u0438" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 24,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 22,
        columnNumber: 13
      }, this) : null }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "container", children: !user ? /* @__PURE__ */ jsxDEV(Auth, { onAuth: () => setUser(getCurrentUser()) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 31,
      columnNumber: 18
    }, this) : /* @__PURE__ */ jsxDEV(Marketplace, { user }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 31,
      columnNumber: 70
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("footer", { className: "footer", children: /* @__PURE__ */ jsxDEV("span", { children: "\u0412\u0441\u0435 \u0441\u0434\u0435\u043B\u043A\u0438 \u0432 Telegram. \u041D\u0438\u043A\u0430\u043A\u0438\u0445 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439. \u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C \u0441\u0430\u0439\u0442\u0430 \u043D\u0435 \u043D\u0435\u0441\u0451\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u0441\u0434\u0435\u043B\u043A\u0438, \u0441\u043E\u0432\u0435\u0440\u0448\u0451\u043D\u043D\u044B\u0435 \u0432 Telegram \u2014 \u043E\u043D\u0438 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u044F\u0442 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u043C\u0435\u0436\u0434\u0443 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u043C \u0438 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u043E\u043C." }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
export {
  App as default
};
