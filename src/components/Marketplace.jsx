import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import React, { useEffect, useState } from "react";
import { listAds, createAd, updateAd, deleteAd, getUserAds } from "../utils/db.js";
import AdCard from "./AdCard.jsx";
import CreateAd from "./CreateAd.jsx";
function Marketplace({ user }) {
  const [ads, setAds] = useState([]);
  const [view, setView] = useState("all");
  const [editing, setEditing] = useState(null);
  const refresh = () => {
    setAds(listAds());
  };
  useEffect(() => {
    refresh();
  }, []);
  const onCreate = (ad) => {
    createAd(ad);
    refresh();
    setView("all");
  };
  const onDelete = (id) => {
    if (!confirm("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435?")) return;
    deleteAd(id);
    refresh();
  };
  const onEdit = (ad) => {
    setEditing(ad);
    setView("edit");
  };
  const onUpdate = (ad) => {
    updateAd(ad.id, ad);
    refresh();
    setView("all");
    setEditing(null);
  };
  const myAds = getUserAds(user.username);
  return /* @__PURE__ */ jsxDEV("div", { className: "market", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "market-header", children: [
      /* @__PURE__ */ jsxDEV("h1", { children: "\u041E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "controls", children: [
        /* @__PURE__ */ jsxDEV("button", { className: `btn ${view === "all" ? "primary" : "ghost"}`, onClick: () => setView("all"), children: "\u0412\u0441\u0435" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: `btn ${view === "mine" ? "primary" : "ghost"}`, onClick: () => setView("mine"), children: [
          "\u041C\u043E\u0438 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F (",
          myAds.length,
          ")"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "btn accent", onClick: () => {
          setView("create");
          setEditing(null);
        }, children: "+ \u0421\u043E\u0437\u0434\u0430\u0442\u044C" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 52,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "content", children: [
      view === "create" && /* @__PURE__ */ jsxDEV(CreateAd, { onSubmit: onCreate, author: user, onCancel: () => setView("all") }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 57,
        columnNumber: 33
      }, this),
      view === "edit" && /* @__PURE__ */ jsxDEV(CreateAd, { edit: true, data: editing, onSubmit: onUpdate, onCancel: () => {
        setView("all");
        setEditing(null);
      } }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 58,
        columnNumber: 31
      }, this),
      view === "all" && /* @__PURE__ */ jsxDEV("div", { className: "grid", children: [
        ads.length === 0 && /* @__PURE__ */ jsxDEV("div", { className: "empty", children: "\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 62,
          columnNumber: 34
        }, this),
        ads.map((a) => /* @__PURE__ */ jsxDEV(AdCard, { ad: a, canEdit: a.owner === user.username, onDelete: () => onDelete(a.id), onEdit: () => onEdit(a) }, a.id, false, {
          fileName: "<stdin>",
          lineNumber: 63,
          columnNumber: 27
        }, this))
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      view === "mine" && /* @__PURE__ */ jsxDEV(Fragment, { children: [
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "flex-end", marginBottom: 12 }, children: /* @__PURE__ */ jsxDEV("button", { className: "btn accent", onClick: () => {
          setView("create");
          setEditing(null);
        }, children: "\u041F\u0440\u043E\u0434\u0430\u0442\u044C \u0441\u0432\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 70,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid", children: [
          myAds.length === 0 && /* @__PURE__ */ jsxDEV("div", { className: "empty", children: "\u0423 \u0432\u0430\u0441 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 73,
            columnNumber: 38
          }, this),
          myAds.map((a) => /* @__PURE__ */ jsxDEV(AdCard, { ad: a, canEdit: true, onDelete: () => onDelete(a.id), onEdit: () => onEdit(a) }, a.id, false, {
            fileName: "<stdin>",
            lineNumber: 74,
            columnNumber: 31
          }, this))
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 72,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
export {
  Marketplace as default
};
