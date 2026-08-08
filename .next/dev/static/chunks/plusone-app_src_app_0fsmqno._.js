(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/plusone-app/src/app/app/earn/applications/ApplicationsClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ApplicationsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$src$2f$app$2f$marketplace$2f$data$3a$f7eb66__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/plusone-app/src/app/marketplace/data:f7eb66 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ApplicationsClient({ incoming, sent }) {
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(incoming);
    const [note, setNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    async function accept(id) {
        const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$src$2f$app$2f$marketplace$2f$data$3a$f7eb66__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["acceptPlanApplication"])(id);
        if ('error' in r) setNote(r.error);
        else {
            setItems((x)=>x.map((a)=>a.id === id ? {
                        ...a,
                        status: 'accepted'
                    } : a));
            setNote('Plan locked in.');
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: 'var(--primary)',
                    fontSize: 13
                },
                children: note
            }, void 0, false, {
                fileName: "[project]/plusone-app/src/app/app/earn/applications/ApplicationsClient.tsx",
                lineNumber: 4,
                columnNumber: 379
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontSize: 18,
                    margin: '28px 0 14px'
                },
                children: "People who want to join your plans"
            }, void 0, false, {
                fileName: "[project]/plusone-app/src/app/app/earn/applications/ApplicationsClient.tsx",
                lineNumber: 4,
                columnNumber: 438
            }, this),
            items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "app-card",
                style: {
                    padding: 24,
                    color: 'var(--muted-foreground)'
                },
                children: "When someone says “I’m in”, you will see them here."
            }, void 0, false, {
                fileName: "[project]/plusone-app/src/app/app/earn/applications/ApplicationsClient.tsx",
                lineNumber: 4,
                columnNumber: 542
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gap: 12
                },
                children: items.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "app-card",
                        style: {
                            padding: 18,
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: a.plans?.activity || 'Your plan'
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/app/app/earn/applications/ApplicationsClient.tsx",
                                        lineNumber: 4,
                                        columnNumber: 850
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        style: {
                                            display: 'block',
                                            color: 'var(--muted-foreground)'
                                        },
                                        children: [
                                            "Offer: ₹",
                                            Number(a.proposed_rate).toLocaleString('en-IN'),
                                            " · ",
                                            a.status
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/plusone-app/src/app/app/earn/applications/ApplicationsClient.tsx",
                                        lineNumber: 4,
                                        columnNumber: 899
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: 13
                                        },
                                        children: a.message
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/app/app/earn/applications/ApplicationsClient.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1042
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/plusone-app/src/app/app/earn/applications/ApplicationsClient.tsx",
                                lineNumber: 4,
                                columnNumber: 845
                            }, this),
                            a.status === 'pending' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "app-btn app-btn-primary",
                                onClick: ()=>accept(a.id),
                                children: "Accept"
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/app/app/earn/applications/ApplicationsClient.tsx",
                                lineNumber: 4,
                                columnNumber: 1111
                            }, this)
                        ]
                    }, a.id, true, {
                        fileName: "[project]/plusone-app/src/app/app/earn/applications/ApplicationsClient.tsx",
                        lineNumber: 4,
                        columnNumber: 730
                    }, this))
            }, void 0, false, {
                fileName: "[project]/plusone-app/src/app/app/earn/applications/ApplicationsClient.tsx",
                lineNumber: 4,
                columnNumber: 679
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontSize: 18,
                    margin: '32px 0 14px'
                },
                children: "Your requests"
            }, void 0, false, {
                fileName: "[project]/plusone-app/src/app/app/earn/applications/ApplicationsClient.tsx",
                lineNumber: 4,
                columnNumber: 1217
            }, this),
            sent.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "app-card",
                style: {
                    padding: 24,
                    color: 'var(--muted-foreground)'
                },
                children: "Requests you send will appear here."
            }, void 0, false, {
                fileName: "[project]/plusone-app/src/app/app/earn/applications/ApplicationsClient.tsx",
                lineNumber: 4,
                columnNumber: 1299
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gap: 12
                },
                children: sent.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "app-card",
                        style: {
                            padding: 18,
                            display: 'flex',
                            justifyContent: 'space-between'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    a.plans?.activity || 'Plan',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        style: {
                                            display: 'block',
                                            color: 'var(--muted-foreground)'
                                        },
                                        children: a.plans?.location
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/app/app/earn/applications/ApplicationsClient.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1607
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/plusone-app/src/app/app/earn/applications/ApplicationsClient.tsx",
                                lineNumber: 4,
                                columnNumber: 1574
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: a.status
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/app/app/earn/applications/ApplicationsClient.tsx",
                                lineNumber: 4,
                                columnNumber: 1706
                            }, this)
                        ]
                    }, a.id, true, {
                        fileName: "[project]/plusone-app/src/app/app/earn/applications/ApplicationsClient.tsx",
                        lineNumber: 4,
                        columnNumber: 1470
                    }, this))
            }, void 0, false, {
                fileName: "[project]/plusone-app/src/app/app/earn/applications/ApplicationsClient.tsx",
                lineNumber: 4,
                columnNumber: 1420
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/plusone-app/src/app/app/earn/applications/ApplicationsClient.tsx",
        lineNumber: 4,
        columnNumber: 370
    }, this);
}
_s(ApplicationsClient, "sYvOiTOEc1Ad+obLI7tRA/d4Cos=");
_c = ApplicationsClient;
var _c;
__turbopack_context__.k.register(_c, "ApplicationsClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/plusone-app/src/app/marketplace/data:f7eb66 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "acceptPlanApplication",
    ()=>$$RSC_SERVER_ACTION_13
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4062892497f20d12a263e3a56b166ae38aae22f9d9":{"name":"acceptPlanApplication"}},"plusone-app/src/app/marketplace/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4062892497f20d12a263e3a56b166ae38aae22f9d9", __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "acceptPlanApplication");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=plusone-app_src_app_0fsmqno._.js.map