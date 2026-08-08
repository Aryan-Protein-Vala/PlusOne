(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/plusone-app/src/components/landing/PlusOneLanding.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlusOneLanding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/lucide-react/dist/esm/icons/arrow-down.mjs [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/lucide-react/dist/esm/icons/calendar-days.mjs [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/lucide-react/dist/esm/icons/compass.mjs [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/lucide-react/dist/esm/icons/ellipsis.mjs [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveUpRight$3e$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/lucide-react/dist/esm/icons/move-up-right.mjs [app-client] (ecmascript) <export default as MoveUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/lucide-react/dist/esm/icons/ticket.mjs [app-client] (ecmascript) <export default as Ticket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/lucide-react/dist/esm/icons/user-round.mjs [app-client] (ecmascript) <export default as UserRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/plusone-app/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const navItems = [
    {
        label: 'How it works',
        href: '#how-it-works'
    },
    {
        label: 'For people who want to earn',
        href: '#for-hosts'
    },
    {
        label: 'Explore',
        href: '#explore'
    }
];
const activities = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"],
        label: 'Sunday reset',
        meta: 'Mumbai · 8 spots',
        accent: 'blue'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"],
        label: 'Open-air cinema',
        meta: 'Delhi · 14 spots',
        accent: 'green'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"],
        label: 'Sunrise hike',
        meta: 'Bangalore · 6 spots',
        accent: 'blue'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        label: 'Ceramics & coffee',
        meta: 'Pune · 10 spots',
        accent: 'green'
    }
];
const categories = [
    'Movies',
    'Coffee',
    'Study',
    'Outdoors',
    'Gaming',
    'Travel'
];
function Reveal({ children, className = '', delay = 0 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: className,
        initial: {
            opacity: 0,
            y: 24
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            amount: 0.2
        },
        transition: {
            duration: 0.7,
            delay,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c = Reveal;
function LogoMark({ className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: `logo-mark ${className}`,
        viewBox: "0 0 32 32",
        fill: "none",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.2 21.8c-3.2-3.2-3.2-8.4 0-11.6s8.4-3.2 11.6 0l4 4c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0l-1.5-1.5"
            }, void 0, false, {
                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M23.8 10.2c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0l-4-4c-3.2-3.2-3.2-8.4 0-11.6s8.4-3.2 11.6 0l1.5 1.5"
            }, void 0, false, {
                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c1 = LogoMark;
function PhoneMockup() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const current = activities[active];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "phone-shell",
        initial: {
            opacity: 0,
            y: 38,
            rotate: 5
        },
        animate: {
            opacity: 1,
            y: 0,
            rotate: 3
        },
        transition: {
            duration: 1,
            delay: 0.25,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        whileHover: {
            rotate: 0,
            y: -8
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "phone-camera"
            }, void 0, false, {
                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "phone-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "phone-topbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "9:41"
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "phone-signal",
                                children: "● ● ●"
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "phone-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: "Thursday, May 23"
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Find your people."
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "phone-avatar",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 87,
                                    columnNumber: 42
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "phone-search",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 89,
                                columnNumber: 39
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "What are you into?"
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 89,
                                columnNumber: 61
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 89,
                                columnNumber: 92
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "phone-tabs",
                        children: [
                            'For you',
                            'Nearby'
                        ].map((tab, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: active === index ? 'active' : '',
                                onClick: ()=>setActive(index),
                                children: tab
                            }, tab, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "phone-feature",
                        layout: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `phone-feature-icon ${current.accent}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(current.icon, {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 96,
                                    columnNumber: 67
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "phone-feature-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Suggested for you"
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 97,
                                        columnNumber: 47
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: current.label
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 97,
                                        columnNumber: 77
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: current.meta
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 97,
                                        columnNumber: 109
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "phone-list",
                        children: activities.slice(0, 3).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "phone-list-item",
                                type: "button",
                                onClick: ()=>setActive(index % 2),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `list-dot ${item.accent}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 103,
                                            columnNumber: 59
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                                lineNumber: 104,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: item.meta
                                            }, void 0, false, {
                                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                                lineNumber: 104,
                                                columnNumber: 50
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.label, true, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "phone-nav",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 109,
                                columnNumber: 36
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 109,
                                columnNumber: 57
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoMark, {
                                className: "phone-logo-mark"
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 109,
                                columnNumber: 83
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 109,
                                columnNumber: 123
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"], {
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 109,
                                columnNumber: 150
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(PhoneMockup, "LYMHw6xE17pbh6ai9qaw76OM0Ms=");
_c2 = PhoneMockup;
function ScrollProgress() {
    _s1();
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    const scaleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        mass: 0.2
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "scroll-progress",
        style: {
            scaleX
        },
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
        lineNumber: 118,
        columnNumber: 10
    }, this);
}
_s1(ScrollProgress, "UYAOtHxiUth0DU6Git6zGRnUBB4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c3 = ScrollProgress;
function Nav({ isLoggedIn }) {
    _s2();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const onScroll = {
                "Nav.useEffect.onScroll": ()=>setScrolled(window.scrollY > 24)
            }["Nav.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll);
            return ({
                "Nav.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `site-nav ${scrolled ? 'is-scrolled' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#top",
                className: "brand",
                "aria-label": "PlusOne home",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoMark, {}, void 0, false, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 131,
                        columnNumber: 66
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "plusone"
                    }, void 0, false, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 131,
                        columnNumber: 78
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "desktop-nav",
                "aria-label": "Primary navigation",
                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: item.href,
                        children: item.label
                    }, item.href, false, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 132,
                        columnNumber: 92
                    }, this))
            }, void 0, false, {
                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nav-actions",
                children: [
                    isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "nav-cta",
                        href: "/app/explore",
                        children: [
                            "Open App ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 135,
                                columnNumber: 66
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "nav-login",
                                href: "/auth/login",
                                children: "Log in"
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "nav-cta",
                                href: "/auth/register",
                                children: [
                                    "Get started ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 139,
                                        columnNumber: 73
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "menu-button",
                        type: "button",
                        onClick: ()=>setOpen(!open),
                        "aria-label": open ? 'Close menu' : 'Open menu',
                        children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                            lineNumber: 142,
                            columnNumber: 141
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                            lineNumber: 142,
                            columnNumber: 149
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
                    className: "mobile-nav",
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: 'auto'
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    "aria-label": "Mobile navigation",
                    children: [
                        navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.href,
                                onClick: ()=>setOpen(false),
                                children: [
                                    item.label,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 144,
                                        columnNumber: 312
                                    }, this)
                                ]
                            }, item.href, true, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 144,
                                columnNumber: 233
                            }, this)),
                        isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/app/explore",
                            onClick: ()=>setOpen(false),
                            children: [
                                "Open App",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 146,
                                    columnNumber: 76
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/auth/register",
                            onClick: ()=>setOpen(false),
                            children: [
                                "Get started",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 148,
                                    columnNumber: 81
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                    lineNumber: 144,
                    columnNumber: 33
                }, this)
            }, void 0, false, {
                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_s2(Nav, "jAm7jTHG65/J2yarYImCswCRH6E=");
_c4 = Nav;
function PlusOneLanding({ isLoggedIn = false }) {
    _s3();
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    const heroShift = (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        700
    ], [
        0,
        90
    ]);
    const heroScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        700
    ], [
        1,
        0.94
    ]);
    const showNotice = (message)=>{
        setNotice(message);
        window.setTimeout(()=>setNotice(''), 2800);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        id: "top",
        className: "plusone-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollProgress, {}, void 0, false, {
                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Nav, {
                isLoggedIn: isLoggedIn
            }, void 0, false, {
                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero section-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "status-pill",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "status-dot"
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 167,
                                            columnNumber: 48
                                        }, this),
                                        " The social app for real life"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 167,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                delay: 0.08,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: [
                                        "Make plans.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 168,
                                            columnNumber: 47
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "Meet people."
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 168,
                                            columnNumber: 53
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 168,
                                    columnNumber: 32
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                delay: 0.16,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "hero-lede",
                                    children: "PlusOne makes it easy to find your next favorite thing — and the people who make it better."
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 169,
                                    columnNumber: 32
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            !isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                delay: 0.24,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-actions",
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 16
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "button button-primary",
                                            href: "/auth/login?redirect=/app/explore",
                                            style: {
                                                textDecoration: 'none'
                                            },
                                            children: [
                                                "Find someone ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 146
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 11,
                                                color: 'var(--muted-foreground)',
                                                fontWeight: 600,
                                                fontFamily: 'var(--font-geist-mono), monospace'
                                            },
                                            children: "OR"
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "button button-secondary",
                                            href: "/auth/login?redirect=/app/explore",
                                            style: {
                                                textDecoration: 'none'
                                            },
                                            children: [
                                                "Create a plan ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 149
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                delay: 0.32,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-proof",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "proof-avatars",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "AV"
                                                }, void 0, false, {
                                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 91
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "RS"
                                                }, void 0, false, {
                                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 106
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "PK"
                                                }, void 0, false, {
                                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 121
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 136
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 179,
                                            columnNumber: 60
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "12,000+"
                                                }, void 0, false, {
                                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 159
                                                }, this),
                                                " curious people are already in."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 179,
                                            columnNumber: 156
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 179,
                                    columnNumber: 32
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "hero-art",
                        style: {
                            y: heroShift,
                            scale: heroScale
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "orbit orbit-one"
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 181,
                                columnNumber: 85
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "orbit orbit-two"
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 181,
                                columnNumber: 120
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "artifact-label label-one",
                                children: "01 / discover"
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 181,
                                columnNumber: 155
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "artifact-label label-two",
                                children: "human scale / 2025"
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 181,
                                columnNumber: 216
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneMockup, {}, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 181,
                                columnNumber: 282
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "floating-note",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 181,
                                        columnNumber: 328
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Good things",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                                lineNumber: 181,
                                                columnNumber: 367
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "happen together."
                                            }, void 0, false, {
                                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                                lineNumber: 181,
                                                columnNumber: 373
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 181,
                                        columnNumber: 350
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 181,
                                columnNumber: 297
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "activity-marquee",
                "aria-label": "Popular activities",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "marquee-track",
                    children: [
                        ...activities,
                        ...activities
                    ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "marquee-item",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `marquee-icon ${item.accent}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 184,
                                        columnNumber: 266
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 184,
                                    columnNumber: 218
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 184,
                                    columnNumber: 296
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 184,
                                    columnNumber: 321
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: item.meta
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 184,
                                    columnNumber: 329
                                }, this)
                            ]
                        }, `${item.label}-${index}`, true, {
                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                            lineNumber: 184,
                            columnNumber: 157
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                    lineNumber: 184,
                    columnNumber: 73
                }, this)
            }, void 0, false, {
                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "how-it-works",
                className: "section-wrap intro-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                        className: "section-kicker",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "01"
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 186,
                                columnNumber: 108
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Less scrolling. More living."
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 186,
                                columnNumber: 123
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 186,
                        columnNumber: 73
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: [
                                "Plans are better",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 186,
                                    columnNumber: 201
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "when they're shared."
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 186,
                                    columnNumber: 207
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                            lineNumber: 186,
                            columnNumber: 181
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 186,
                        columnNumber: 173
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "intro-copy",
                            children: "We made a place for the things that happen between the calendar invites — spontaneous dinners, tiny adventures, and new faces that feel familiar."
                        }, void 0, false, {
                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                            lineNumber: 186,
                            columnNumber: 267
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 186,
                        columnNumber: 259
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rule-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                delay: 0.05,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "big-number",
                                            children: "01"
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 186,
                                            columnNumber: 504
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Find your thing"
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 186,
                                            columnNumber: 542
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Tell us what moves you. We'll surface gatherings that feel like you."
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 186,
                                            columnNumber: 566
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 186,
                                    columnNumber: 499
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 186,
                                columnNumber: 478
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                delay: 0.12,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "big-number",
                                            children: "02"
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 186,
                                            columnNumber: 687
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Join the circle"
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 186,
                                            columnNumber: 725
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Show up as yourself. Small groups, low pressure, good energy."
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 186,
                                            columnNumber: 749
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 186,
                                    columnNumber: 682
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 186,
                                columnNumber: 661
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                delay: 0.19,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "big-number",
                                            children: "03"
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 186,
                                            columnNumber: 858
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Make it yours"
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 186,
                                            columnNumber: 896
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Host the next one, invite a friend, become part of the rhythm."
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 186,
                                            columnNumber: 918
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 186,
                                    columnNumber: 853
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 186,
                                columnNumber: 832
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 186,
                        columnNumber: 451
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "for-hosts",
                className: "section-wrap split-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                className: "section-kicker",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "02"
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 188,
                                        columnNumber: 135
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "For the hosts"
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 188,
                                        columnNumber: 150
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 188,
                                columnNumber: 100
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: [
                                        "Your idea",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 188,
                                            columnNumber: 206
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "has a home."
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 188,
                                            columnNumber: 212
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 188,
                                    columnNumber: 193
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 188,
                                columnNumber: 185
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "From a rooftop supper to a neighborhood run, PlusOne gives your best ideas a little lift — and helps the right people find them."
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 188,
                                    columnNumber: 254
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 188,
                                columnNumber: 246
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "button button-secondary",
                                    href: "/app/earn",
                                    children: [
                                        "Earn with PlusOne ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveUpRight$3e$__["MoveUpRight"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 188,
                                            columnNumber: 483
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 188,
                                    columnNumber: 406
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 188,
                                columnNumber: 398
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 188,
                        columnNumber: 70
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                        className: "host-art",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid-paper",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "paper-top",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "PLUSONE / FIELD NOTES"
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 188,
                                            columnNumber: 614
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "NO. 0048"
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 188,
                                            columnNumber: 648
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 188,
                                    columnNumber: 587
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "paper-title",
                                    children: [
                                        "A good plan",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 188,
                                            columnNumber: 715
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "leaves room."
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 188,
                                            columnNumber: 721
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 188,
                                    columnNumber: 675
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hand-line line-a"
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 188,
                                    columnNumber: 752
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hand-line line-b"
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 188,
                                    columnNumber: 788
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "paper-stamp",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 188,
                                            columnNumber: 853
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Make",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 880
                                                }, this),
                                                "something",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 895
                                                }, this),
                                                "happen"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 188,
                                            columnNumber: 870
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 188,
                                    columnNumber: 824
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "paper-footer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "earning guide"
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 188,
                                            columnNumber: 950
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 188,
                                            columnNumber: 976
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "2025—∞"
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 188,
                                            columnNumber: 1000
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 188,
                                    columnNumber: 920
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                            lineNumber: 188,
                            columnNumber: 559
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 188,
                        columnNumber: 530
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "explore",
                className: "section-wrap explore-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                        className: "section-kicker",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "03"
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 190,
                                columnNumber: 105
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Explore your next"
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 190,
                                columnNumber: 120
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 190,
                        columnNumber: 70
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "explore-heading",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: [
                                        "What are you",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 190,
                                            columnNumber: 216
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "into?"
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 190,
                                            columnNumber: 222
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 190,
                                    columnNumber: 200
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "A little bit of everything. A lot more of what feels right."
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 190,
                                    columnNumber: 241
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                            lineNumber: 190,
                            columnNumber: 167
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 190,
                        columnNumber: 159
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "category-grid",
                            children: categories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>showNotice(`${category} plans are coming soon.`),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: String(index + 1).padStart(2, '0')
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 190,
                                            columnNumber: 500
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: category
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 190,
                                            columnNumber: 549
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 190,
                                            columnNumber: 576
                                        }, this)
                                    ]
                                }, category, true, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 190,
                                    columnNumber: 398
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                            lineNumber: 190,
                            columnNumber: 330
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 190,
                        columnNumber: 322
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section-wrap stats-section",
                "aria-label": "Why PlusOne works",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "stat",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "stat-topline",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "stat-index",
                                            children: "01"
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 192,
                                            columnNumber: 150
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "stat-dot"
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 192,
                                            columnNumber: 188
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 192,
                                    columnNumber: 120
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "48%"
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 192,
                                    columnNumber: 223
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "of people say making new friends is harder than it used to be."
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 192,
                                    columnNumber: 243
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "stat-note",
                                    children: "The gap is real."
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 192,
                                    columnNumber: 312
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                            lineNumber: 192,
                            columnNumber: 94
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 192,
                        columnNumber: 86
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                        delay: 0.12,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "stat",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "stat-topline",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "stat-index",
                                            children: "02"
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 192,
                                            columnNumber: 459
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "stat-dot"
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 192,
                                            columnNumber: 497
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 192,
                                    columnNumber: 429
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "3×"
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 192,
                                    columnNumber: 532
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "more likely to keep a plan when someone else is counting on you."
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 192,
                                    columnNumber: 551
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "stat-note",
                                    children: "A little accountability helps."
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 192,
                                    columnNumber: 622
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                            lineNumber: 192,
                            columnNumber: 403
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 192,
                        columnNumber: 382
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                        delay: 0.24,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "stat",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "stat-topline",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "stat-index",
                                            children: "03"
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 192,
                                            columnNumber: 783
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "stat-dot"
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 192,
                                            columnNumber: 821
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 192,
                                    columnNumber: 753
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "100%"
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 192,
                                    columnNumber: 856
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "better when you stop waiting for the perfect moment."
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 192,
                                    columnNumber: 877
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "stat-note",
                                    children: "Start with a maybe."
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 192,
                                    columnNumber: 936
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                            lineNumber: 192,
                            columnNumber: 727
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 192,
                        columnNumber: 706
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section-wrap quote-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "quote-mark",
                            children: "“"
                        }, void 0, false, {
                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                            lineNumber: 194,
                            columnNumber: 63
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                            children: "I made ₹45,000 last month just by earning coffee dates and studying sessions. PlusOne is the ultimate side hustle."
                        }, void 0, false, {
                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                            lineNumber: 194,
                            columnNumber: 104
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "quote-credit",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "credit-avatar",
                                    children: "JM"
                                }, void 0, false, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 194,
                                    columnNumber: 273
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Jamie M. ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: "Earned ₹45k · PlusOne in Mumbai"
                                        }, void 0, false, {
                                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                            lineNumber: 194,
                                            columnNumber: 329
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                    lineNumber: 194,
                                    columnNumber: 314
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                            lineNumber: 194,
                            columnNumber: 243
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                    lineNumber: 194,
                    columnNumber: 55
                }, this)
            }, void 0, false, {
                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "cta",
                className: "section-wrap cta-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cta-orbit"
                    }, void 0, false, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 196,
                        columnNumber: 62
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "status-pill",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "status-dot"
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 196,
                                        columnNumber: 128
                                    }, this),
                                    " Coming soon to your city"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 196,
                                columnNumber: 99
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    "Go on.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 196,
                                        columnNumber: 200
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "Make a plan."
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 196,
                                        columnNumber: 206
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 196,
                                columnNumber: 190
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Be first in line for early access, local drops, and a reason to get off your phone."
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 196,
                                columnNumber: 232
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "button button-primary",
                                type: "button",
                                onClick: ()=>showNotice('You are on the early access list.'),
                                children: [
                                    "Join the waitlist ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 196,
                                        columnNumber: 460
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 196,
                                columnNumber: 322
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 196,
                        columnNumber: 91
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                id: "footer",
                className: "site-footer section-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "footer-top",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#top",
                                className: "brand",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoMark, {}, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 200,
                                        columnNumber: 44
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "plusone"
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 200,
                                        columnNumber: 56
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "footer-links",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#how-it-works",
                                        children: "About"
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/app/earn",
                                        children: "Earning"
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#explore",
                                        children: "Explore"
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/legal/privacy",
                                        children: "Privacy"
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/legal/terms",
                                        children: "Terms"
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "footer-note",
                                children: [
                                    "Built for the",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 208,
                                        columnNumber: 53
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "in-between."
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 208,
                                        columnNumber: 59
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "footer-bottom",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "© 2025 PlusOne Technologies Pvt. Ltd."
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Made with intention in India + everywhere"
                            }, void 0, false, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#top",
                                children: [
                                    "Back to top ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                        size: 14,
                                        className: "rotate-180"
                                    }, void 0, false, {
                                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                        lineNumber: 213,
                                        columnNumber: 38
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: notice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "toast",
                    initial: {
                        opacity: 0,
                        y: 18
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: 18
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                            lineNumber: 216,
                            columnNumber: 157
                        }, this),
                        " ",
                        notice
                    ]
                }, void 0, true, {
                    fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                    lineNumber: 216,
                    columnNumber: 35
                }, this)
            }, void 0, false, {
                fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/plusone-app/src/components/landing/PlusOneLanding.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
_s3(PlusOneLanding, "k4iLbWohO65BztAgek9wOCmzo3Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$plusone$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c5 = PlusOneLanding;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Reveal");
__turbopack_context__.k.register(_c1, "LogoMark");
__turbopack_context__.k.register(_c2, "PhoneMockup");
__turbopack_context__.k.register(_c3, "ScrollProgress");
__turbopack_context__.k.register(_c4, "Nav");
__turbopack_context__.k.register(_c5, "PlusOneLanding");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=plusone-app_src_components_landing_PlusOneLanding_tsx_17xu-32._.js.map