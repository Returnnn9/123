import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState } from "react";
import { registerUser, loginUser } from "../utils/db.js";
function Auth({ onAuth }) {
  const [mode, setMode] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tg, setTg] = useState("");
  const [error, setError] = useState("");
  const TG_RE = /^[A-Za-z0-9_]{5,32}$/;
  const submit = (e) => {
    e.preventDefault();
    setError("");
    if (mode === "register") {
      if (!tg.trim()) return setError("\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u044E\u0437\u0435\u0440\u043D\u0435\u0439\u043C Telegram");
      if (!TG_RE.test(tg)) return setError("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u044E\u0437\u0435\u0440\u043D\u0435\u0439\u043C\u0430 Telegram (5\u201332 \u0441\u0438\u043C\u0432\u043E\u043B\u0430: \u0431\u0443\u043A\u0432\u044B, \u0446\u0438\u0444\u0440\u044B, _)");
      const ok = registerUser({ username, password, tg });
      if (!ok) return setError("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442");
      onAuth();
    } else {
      const ok = loginUser({ username, password });
      if (!ok) return setError("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0443\u0447\u0451\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435");
      onAuth();
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "auth-card animated", children: [
    /* @__PURE__ */ jsxDEV("h2", { children: mode === "login" ? "\u0412\u0445\u043E\u0434" : "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("form", { onSubmit: submit, className: "form", children: [
      /* @__PURE__ */ jsxDEV("label", { children: [
        "\u041B\u043E\u0433\u0438\u043D",
        /* @__PURE__ */ jsxDEV("input", { value: username, onChange: (e) => setUsername(e.target.value), required: true }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("label", { children: [
        "\u041F\u0430\u0440\u043E\u043B\u044C",
        /* @__PURE__ */ jsxDEV("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 39,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      mode === "register" && /* @__PURE__ */ jsxDEV("label", { children: [
        "\u042E\u0437\u0435\u0440\u043D\u0435\u0439\u043C Telegram (\u0431\u0435\u0437 @)",
        /* @__PURE__ */ jsxDEV("input", { value: tg, onChange: (e) => {
          const v = e.target.value.replace(/@/g, "").replace(/\s/g, "");
          setTg(v);
        }, required: true }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 44,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      error && /* @__PURE__ */ jsxDEV("div", { className: "error", children: error }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 52,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "form-actions", children: [
        /* @__PURE__ */ jsxDEV("button", { className: "btn primary", type: "submit", children: mode === "login" ? "\u0412\u043E\u0439\u0442\u0438" : "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn ghost", onClick: () => {
          setMode(mode === "login" ? "register" : "login");
          setError("");
        }, children: mode === "login" ? "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442" : "\u0423\u0436\u0435 \u0435\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 56,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
export {
  Auth as default
};
