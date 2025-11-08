import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect } from "react";
function CreateAd({ onSubmit, onCancel, author, edit = false, data = null }) {
  const [title, setTitle] = useState(data?.title || "");
  const [description, setDescription] = useState(data?.description || "");
  const [priceValue, setPriceValue] = useState(() => {
    if (!data?.price) return "";
    const parts = data.price.trim().split(" ");
    return parts.slice(0, -1).join(" ") || parts[0] || "";
  });
  const [currency, setCurrency] = useState(() => {
    if (!data?.price) return "USD";
    const parts = data.price.trim().split(" ");
    return parts.slice(-1)[0] || "USD";
  });
  const [screenshots, setScreenshots] = useState(data?.screenshots || []);
  const [error, setError] = useState("");
  useEffect(() => {
    return () => {
      screenshots.forEach((s) => {
        if (s.startsWith("blob:")) URL.revokeObjectURL(s);
      });
    };
  }, [screenshots]);
  const onFiles = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((f) => URL.createObjectURL(f));
    setScreenshots((prev) => [...prev, ...urls]);
  };
  const removeImg = (i) => setScreenshots((s) => s.filter((_, idx) => idx !== i));
  const submit = (e) => {
    e.preventDefault();
    setError("");
    if (!title.trim()) return setError("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");
    if (!description.trim()) return setError("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435");
    if (!priceValue.trim()) return setError("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0435\u043D\u0443");
    const ad = {
      id: data?.id || `ad_${Date.now()}`,
      title: title.trim(),
      description: description.trim(),
      price: `${priceValue.trim()} ${currency}`,
      screenshots,
      owner: author?.username || data?.owner || "unknown",
      tg: author?.tg || data?.tg || "unknown"
    };
    onSubmit(ad);
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "create-card animated", children: [
    /* @__PURE__ */ jsxDEV("h2", { children: edit ? "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("form", { className: "form", onSubmit: submit, children: [
      /* @__PURE__ */ jsxDEV("label", { children: [
        "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
        /* @__PURE__ */ jsxDEV("input", { value: title, onChange: (e) => setTitle(e.target.value), required: true }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("label", { children: [
        "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
        /* @__PURE__ */ jsxDEV("textarea", { value: description, onChange: (e) => setDescription(e.target.value), rows: "4", required: true }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 61,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("label", { children: [
        "\u0426\u0435\u043D\u0430",
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 8 }, children: [
          /* @__PURE__ */ jsxDEV("input", { value: priceValue, onChange: (e) => setPriceValue(e.target.value), required: true, style: { flex: 1 } }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 65,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("select", { value: currency, onChange: (e) => setCurrency(e.target.value), style: { minWidth: 92, borderRadius: 8, padding: 8, background: "var(--panel)", color: "inherit", border: "1px solid rgba(255,255,255,0.03)" }, children: [
            /* @__PURE__ */ jsxDEV("option", { children: "USD" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 67,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("option", { children: "EUR" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 68,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("option", { children: "RUB" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 69,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("option", { children: "KZT" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 70,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("option", { children: "UAH" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 71,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 66,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 64,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("label", { children: [
        "\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442\u044B",
        /* @__PURE__ */ jsxDEV("input", { type: "file", accept: "image/*", multiple: true, onChange: onFiles }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 77,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "thumbs", children: screenshots.map((s, i) => /* @__PURE__ */ jsxDEV("div", { className: "thumb", children: [
        /* @__PURE__ */ jsxDEV("img", { src: s, alt: `s${i}` }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 83,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn small danger", onClick: () => removeImg(i), children: "x" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 84,
          columnNumber: 15
        }, this)
      ] }, i, true, {
        fileName: "<stdin>",
        lineNumber: 82,
        columnNumber: 13
      }, this)) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      error && /* @__PURE__ */ jsxDEV("div", { className: "error", children: error }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 89,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "form-actions", children: [
        /* @__PURE__ */ jsxDEV("button", { className: "btn primary", type: "submit", children: edit ? "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" : "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 92,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn ghost", onClick: onCancel, children: "\u041E\u0442\u043C\u0435\u043D\u0430" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 93,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 91,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
export {
  CreateAd as default
};
