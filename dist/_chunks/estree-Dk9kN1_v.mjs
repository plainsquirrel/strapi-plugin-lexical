var Xa = Object.defineProperty;
var Js = (e) => {
  throw TypeError(e);
};
var Ar = (e, t) => {
  for (var r in t) Xa(e, r, { get: t[r], enumerable: true });
};
var qs = (e, t, r) => t.has(e) || Js("Cannot " + r);
var pt = (e, t, r) => (qs(e, t, "read from private field"), t.get(e)), Ws = (e, t, r) => t.has(e) ? Js("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Gs = (e, t, r, n) => (qs(e, t, "write to private field"), t.set(e, r), r);
var _s = {};
Ar(_s, { languages: () => om, options: () => Ja, printers: () => am });
var Us = [{ linguistLanguageId: 183, name: "JavaScript", type: "programming", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", color: "#f1e05a", aliases: ["js", "node"], extensions: [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".javascript", ".jsb", ".jscad", ".jsfl", ".jslib", ".jsm", ".jspre", ".jss", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib", ".wxs"], filenames: ["Jakefile"], interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell", "zx"], parsers: ["babel", "acorn", "espree", "meriyah", "babel-flow", "babel-ts", "flow", "typescript"], vscodeLanguageIds: ["javascript", "mongo"] }, { linguistLanguageId: 183, name: "Flow", type: "programming", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", color: "#f1e05a", aliases: [], extensions: [".js.flow"], filenames: [], interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell"], parsers: ["flow", "babel-flow"], vscodeLanguageIds: ["javascript"] }, { linguistLanguageId: 183, name: "JSX", type: "programming", tmScope: "source.js.jsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", color: void 0, aliases: void 0, extensions: [".jsx"], filenames: void 0, interpreters: void 0, parsers: ["babel", "babel-flow", "babel-ts", "flow", "typescript", "espree", "meriyah"], vscodeLanguageIds: ["javascriptreact"], group: "JavaScript" }, { linguistLanguageId: 378, name: "TypeScript", type: "programming", color: "#3178c6", aliases: ["ts"], interpreters: ["deno", "ts-node"], extensions: [".ts", ".cts", ".mts"], tmScope: "source.ts", aceMode: "typescript", codemirrorMode: "javascript", codemirrorMimeType: "application/typescript", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescript"] }, { linguistLanguageId: 94901924, name: "TSX", type: "programming", color: "#3178c6", group: "TypeScript", extensions: [".tsx"], tmScope: "source.tsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescriptreact"] }];
var ws = {};
Ar(ws, { canAttachComment: () => Ap, embed: () => Zu, experimentalFeatures: () => tm, getCommentChildNodes: () => Tp, getVisitorKeys: () => gr, handleComments: () => $n, insertPragma: () => ci, isBlockComment: () => ee, isGap: () => dp, massageAstNode: () => Au, print: () => Oa, printComment: () => ku, willPrintOwnComments: () => Kn });
var Ya = (e, t, r, n) => {
  if (!(e && t == null)) return t.replaceAll ? t.replaceAll(r, n) : r.global ? t.replace(r, n) : t.split(r).join(n);
}, Y = Ya;
var Ha = (e, t, r) => {
  if (!(e && t == null)) return Array.isArray(t) || typeof t == "string" ? t[r < 0 ? t.length + r : r] : t.at(r);
}, _ = Ha;
function Na(e) {
  return e !== null && typeof e == "object";
}
var Xs = Na;
function* Va(e, t) {
  let { getVisitorKeys: r, filter: n = () => true } = t, s = (u) => Xs(u) && n(u);
  for (let u of r(e)) {
    let i = e[u];
    if (Array.isArray(i)) for (let a of i) s(a) && (yield a);
    else s(i) && (yield i);
  }
}
function* $a(e, t) {
  let r = [e];
  for (let n = 0; n < r.length; n++) {
    let s = r[n];
    for (let u of Va(s, t)) yield u, r.push(u);
  }
}
function Ys(e, { getVisitorKeys: t, predicate: r }) {
  for (let n of $a(e, { getVisitorKeys: t })) if (r(n)) return true;
  return false;
}
var Hs = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
function Ns(e) {
  return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}
function Vs(e) {
  return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9776 && e <= 9783 || e >= 9800 && e <= 9811 || e === 9855 || e >= 9866 && e <= 9871 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12773 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101631 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e >= 119552 && e <= 119638 || e >= 119648 && e <= 119670 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129673 || e >= 129679 && e <= 129734 || e >= 129742 && e <= 129756 || e >= 129759 && e <= 129769 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}
var $s = (e) => !(Ns(e) || Vs(e));
var Ka = /[^\x20-\x7F]/u;
function Qa(e) {
  if (!e) return 0;
  if (!Ka.test(e)) return e.length;
  e = e.replace(Hs(), "  ");
  let t = 0;
  for (let r of e) {
    let n = r.codePointAt(0);
    n <= 31 || n >= 127 && n <= 159 || n >= 768 && n <= 879 || (t += $s(n) ? 1 : 2);
  }
  return t;
}
var ze = Qa;
function Tr(e) {
  return (t, r, n) => {
    let s = !!(n != null && n.backwards);
    if (r === false) return false;
    let { length: u } = t, i = r;
    for (; i >= 0 && i < u; ) {
      let a = t.charAt(i);
      if (e instanceof RegExp) {
        if (!e.test(a)) return i;
      } else if (!e.includes(a)) return i;
      s ? i-- : i++;
    }
    return i === -1 || i === u ? i : false;
  };
}
var We = Tr(" 	"), Ks = Tr(",; 	"), Qs = Tr(/[^\n\r]/u);
function za(e, t, r) {
  let n = !!(r != null && r.backwards);
  if (t === false) return false;
  let s = e.charAt(t);
  if (n) {
    if (e.charAt(t - 1) === "\r" && s === `
`) return t - 2;
    if (s === `
` || s === "\r" || s === "\u2028" || s === "\u2029") return t - 1;
  } else {
    if (s === "\r" && e.charAt(t + 1) === `
`) return t + 2;
    if (s === `
` || s === "\r" || s === "\u2028" || s === "\u2029") return t + 1;
  }
  return t;
}
var Ge = za;
function Za(e, t, r = {}) {
  let n = We(e, r.backwards ? t - 1 : t, r), s = Ge(e, n, r);
  return n !== s;
}
var Z = Za;
function eo(e, t) {
  if (t === false) return false;
  if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
    for (let r = t + 2; r < e.length; ++r) if (e.charAt(r) === "*" && e.charAt(r + 1) === "/") return r + 2;
  }
  return t;
}
var Ot = eo;
function to(e, t) {
  return t === false ? false : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? Qs(e, t) : t;
}
var _t = to;
function ro(e, t) {
  let r = null, n = t;
  for (; n !== r; ) r = n, n = Ks(e, n), n = Ot(e, n), n = We(e, n);
  return n = _t(e, n), n = Ge(e, n), n !== false && Z(e, n);
}
var jt = ro;
function no(e) {
  return Array.isArray(e) && e.length > 0;
}
var O = no;
var zs = new Proxy(() => {
}, { get: () => zs }), vt = zs;
var dr = "'", Zs = '"';
function so(e, t) {
  let r = t === true || t === dr ? dr : Zs, n = r === dr ? Zs : dr, s = 0, u = 0;
  for (let i of e) i === r ? s++ : i === n && u++;
  return s > u ? n : r;
}
var xr = so;
function uo(e, t, r) {
  let n = t === '"' ? "'" : '"', u = Y(false, e, /\\(.)|(["'])/gsu, (i, a, p) => a === n ? a : p === t ? "\\" + p : p || (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(a) ? a : "\\" + a));
  return t + u + t;
}
var eu = uo;
function io(e, t) {
  vt(/^(?<quote>["']).*\k<quote>$/su.test(e));
  let r = e.slice(1, -1), n = t.parser === "json" || t.parser === "jsonc" || t.parser === "json5" && t.quoteProps === "preserve" && !t.singleQuote ? '"' : t.__isInHtmlAttribute ? "'" : xr(r, t.singleQuote);
  return e.charAt(0) === n ? e : eu(r, n, false);
}
var Ze = io;
function q(e) {
  var n, s, u;
  let t = ((n = e.range) == null ? void 0 : n[0]) ?? e.start, r = (u = ((s = e.declaration) == null ? void 0 : s.decorators) ?? e.decorators) == null ? void 0 : u[0];
  return r ? Math.min(q(r), t) : t;
}
function k(e) {
  var t;
  return ((t = e.range) == null ? void 0 : t[1]) ?? e.end;
}
function Bt(e, t) {
  let r = q(e);
  return Number.isInteger(r) && r === q(t);
}
function ao(e, t) {
  let r = k(e);
  return Number.isInteger(r) && r === k(t);
}
function tu(e, t) {
  return Bt(e, t) && ao(e, t);
}
var Zt = null;
function er(e) {
  if (Zt !== null && typeof Zt.property) {
    let t = Zt;
    return Zt = er.prototype = null, t;
  }
  return Zt = er.prototype = e ?? /* @__PURE__ */ Object.create(null), new er();
}
var oo = 10;
for (let e = 0; e <= oo; e++) er();
function In(e) {
  return er(e);
}
function po(e, t = "type") {
  In(e);
  function r(n) {
    let s = n[t], u = e[s];
    if (!Array.isArray(u)) throw Object.assign(new Error(`Missing visitor keys for '${s}'.`), { node: n });
    return u;
  }
  return r;
}
var hr = po;
var ru = { ArrayExpression: ["elements"], AssignmentExpression: ["left", "right"], BinaryExpression: ["left", "right"], InterpreterDirective: [], Directive: ["value"], DirectiveLiteral: [], BlockStatement: ["directives", "body"], BreakStatement: ["label"], CallExpression: ["callee", "arguments", "typeParameters", "typeArguments"], CatchClause: ["param", "body"], ConditionalExpression: ["test", "consequent", "alternate"], ContinueStatement: ["label"], DebuggerStatement: [], DoWhileStatement: ["body", "test"], EmptyStatement: [], ExpressionStatement: ["expression"], File: ["program"], ForInStatement: ["left", "right", "body"], ForStatement: ["init", "test", "update", "body"], FunctionDeclaration: ["id", "typeParameters", "params", "returnType", "body", "predicate"], FunctionExpression: ["id", "typeParameters", "params", "returnType", "body"], Identifier: ["typeAnnotation", "decorators"], IfStatement: ["test", "consequent", "alternate"], LabeledStatement: ["label", "body"], StringLiteral: [], NumericLiteral: [], NullLiteral: [], BooleanLiteral: [], RegExpLiteral: [], LogicalExpression: ["left", "right"], MemberExpression: ["object", "property"], NewExpression: ["callee", "arguments", "typeParameters", "typeArguments"], Program: ["directives", "body"], ObjectExpression: ["properties"], ObjectMethod: ["decorators", "key", "typeParameters", "params", "returnType", "body"], ObjectProperty: ["key", "value", "decorators"], RestElement: ["argument", "typeAnnotation", "decorators"], ReturnStatement: ["argument"], SequenceExpression: ["expressions"], ParenthesizedExpression: ["expression"], SwitchCase: ["test", "consequent"], SwitchStatement: ["discriminant", "cases"], ThisExpression: [], ThrowStatement: ["argument"], TryStatement: ["block", "handler", "finalizer"], UnaryExpression: ["argument"], UpdateExpression: ["argument"], VariableDeclaration: ["declarations"], VariableDeclarator: ["id", "init"], WhileStatement: ["test", "body"], WithStatement: ["object", "body"], AssignmentPattern: ["left", "right", "decorators", "typeAnnotation"], ArrayPattern: ["elements", "typeAnnotation", "decorators"], ArrowFunctionExpression: ["typeParameters", "params", "returnType", "body", "predicate"], ClassBody: ["body"], ClassExpression: ["decorators", "id", "typeParameters", "superClass", "superTypeParameters", "mixins", "implements", "body", "superTypeArguments"], ClassDeclaration: ["decorators", "id", "typeParameters", "superClass", "superTypeParameters", "mixins", "implements", "body", "superTypeArguments"], ExportAllDeclaration: ["source", "attributes", "exported"], ExportDefaultDeclaration: ["declaration"], ExportNamedDeclaration: ["declaration", "specifiers", "source", "attributes"], ExportSpecifier: ["local", "exported"], ForOfStatement: ["left", "right", "body"], ImportDeclaration: ["specifiers", "source", "attributes"], ImportDefaultSpecifier: ["local"], ImportNamespaceSpecifier: ["local"], ImportSpecifier: ["imported", "local"], ImportExpression: ["source", "options"], MetaProperty: ["meta", "property"], ClassMethod: ["decorators", "key", "typeParameters", "params", "returnType", "body"], ObjectPattern: ["properties", "typeAnnotation", "decorators"], SpreadElement: ["argument"], Super: [], TaggedTemplateExpression: ["tag", "typeParameters", "quasi", "typeArguments"], TemplateElement: [], TemplateLiteral: ["quasis", "expressions"], YieldExpression: ["argument"], AwaitExpression: ["argument"], BigIntLiteral: [], ExportNamespaceSpecifier: ["exported"], OptionalMemberExpression: ["object", "property"], OptionalCallExpression: ["callee", "arguments", "typeParameters", "typeArguments"], ClassProperty: ["decorators", "key", "typeAnnotation", "value", "variance"], ClassAccessorProperty: ["decorators", "key", "typeAnnotation", "value"], ClassPrivateProperty: ["decorators", "key", "typeAnnotation", "value", "variance"], ClassPrivateMethod: ["decorators", "key", "typeParameters", "params", "returnType", "body"], PrivateName: ["id"], StaticBlock: ["body"], AnyTypeAnnotation: [], ArrayTypeAnnotation: ["elementType"], BooleanTypeAnnotation: [], BooleanLiteralTypeAnnotation: [], NullLiteralTypeAnnotation: [], ClassImplements: ["id", "typeParameters"], DeclareClass: ["id", "typeParameters", "extends", "mixins", "implements", "body"], DeclareFunction: ["id", "predicate"], DeclareInterface: ["id", "typeParameters", "extends", "body"], DeclareModule: ["id", "body"], DeclareModuleExports: ["typeAnnotation"], DeclareTypeAlias: ["id", "typeParameters", "right"], DeclareOpaqueType: ["id", "typeParameters", "supertype"], DeclareVariable: ["id"], DeclareExportDeclaration: ["declaration", "specifiers", "source", "attributes"], DeclareExportAllDeclaration: ["source", "attributes"], DeclaredPredicate: ["value"], ExistsTypeAnnotation: [], FunctionTypeAnnotation: ["typeParameters", "params", "rest", "returnType", "this"], FunctionTypeParam: ["name", "typeAnnotation"], GenericTypeAnnotation: ["id", "typeParameters"], InferredPredicate: [], InterfaceExtends: ["id", "typeParameters"], InterfaceDeclaration: ["id", "typeParameters", "extends", "body"], InterfaceTypeAnnotation: ["extends", "body"], IntersectionTypeAnnotation: ["types"], MixedTypeAnnotation: [], EmptyTypeAnnotation: [], NullableTypeAnnotation: ["typeAnnotation"], NumberLiteralTypeAnnotation: [], NumberTypeAnnotation: [], ObjectTypeAnnotation: ["properties", "indexers", "callProperties", "internalSlots"], ObjectTypeInternalSlot: ["id", "value"], ObjectTypeCallProperty: ["value"], ObjectTypeIndexer: ["variance", "id", "key", "value"], ObjectTypeProperty: ["key", "value", "variance"], ObjectTypeSpreadProperty: ["argument"], OpaqueType: ["id", "typeParameters", "supertype", "impltype"], QualifiedTypeIdentifier: ["qualification", "id"], StringLiteralTypeAnnotation: [], StringTypeAnnotation: [], SymbolTypeAnnotation: [], ThisTypeAnnotation: [], TupleTypeAnnotation: ["types", "elementTypes"], TypeofTypeAnnotation: ["argument", "typeArguments"], TypeAlias: ["id", "typeParameters", "right"], TypeAnnotation: ["typeAnnotation"], TypeCastExpression: ["expression", "typeAnnotation"], TypeParameter: ["bound", "default", "variance"], TypeParameterDeclaration: ["params"], TypeParameterInstantiation: ["params"], UnionTypeAnnotation: ["types"], Variance: [], VoidTypeAnnotation: [], EnumDeclaration: ["id", "body"], EnumBooleanBody: ["members"], EnumNumberBody: ["members"], EnumStringBody: ["members"], EnumSymbolBody: ["members"], EnumBooleanMember: ["id", "init"], EnumNumberMember: ["id", "init"], EnumStringMember: ["id", "init"], EnumDefaultedMember: ["id"], IndexedAccessType: ["objectType", "indexType"], OptionalIndexedAccessType: ["objectType", "indexType"], JSXAttribute: ["name", "value"], JSXClosingElement: ["name"], JSXElement: ["openingElement", "children", "closingElement"], JSXEmptyExpression: [], JSXExpressionContainer: ["expression"], JSXSpreadChild: ["expression"], JSXIdentifier: [], JSXMemberExpression: ["object", "property"], JSXNamespacedName: ["namespace", "name"], JSXOpeningElement: ["name", "attributes", "typeArguments", "typeParameters"], JSXSpreadAttribute: ["argument"], JSXText: [], JSXFragment: ["openingFragment", "children", "closingFragment"], JSXOpeningFragment: [], JSXClosingFragment: [], Noop: [], Placeholder: [], V8IntrinsicIdentifier: [], ArgumentPlaceholder: [], BindExpression: ["object", "callee"], ImportAttribute: ["key", "value"], Decorator: ["expression"], DoExpression: ["body"], ExportDefaultSpecifier: ["exported"], RecordExpression: ["properties"], TupleExpression: ["elements"], ModuleExpression: ["body"], TopicReference: [], PipelineTopicExpression: ["expression"], PipelineBareFunction: ["callee"], PipelinePrimaryTopicReference: [], TSParameterProperty: ["parameter", "decorators"], TSDeclareFunction: ["id", "typeParameters", "params", "returnType", "body"], TSDeclareMethod: ["decorators", "key", "typeParameters", "params", "returnType"], TSQualifiedName: ["left", "right"], TSCallSignatureDeclaration: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSConstructSignatureDeclaration: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSPropertySignature: ["key", "typeAnnotation"], TSMethodSignature: ["key", "typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSIndexSignature: ["parameters", "typeAnnotation"], TSAnyKeyword: [], TSBooleanKeyword: [], TSBigIntKeyword: [], TSIntrinsicKeyword: [], TSNeverKeyword: [], TSNullKeyword: [], TSNumberKeyword: [], TSObjectKeyword: [], TSStringKeyword: [], TSSymbolKeyword: [], TSUndefinedKeyword: [], TSUnknownKeyword: [], TSVoidKeyword: [], TSThisType: [], TSFunctionType: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSConstructorType: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSTypeReference: ["typeName", "typeParameters", "typeArguments"], TSTypePredicate: ["parameterName", "typeAnnotation"], TSTypeQuery: ["exprName", "typeParameters", "typeArguments"], TSTypeLiteral: ["members"], TSArrayType: ["elementType"], TSTupleType: ["elementTypes"], TSOptionalType: ["typeAnnotation"], TSRestType: ["typeAnnotation"], TSNamedTupleMember: ["label", "elementType"], TSUnionType: ["types"], TSIntersectionType: ["types"], TSConditionalType: ["checkType", "extendsType", "trueType", "falseType"], TSInferType: ["typeParameter"], TSParenthesizedType: ["typeAnnotation"], TSTypeOperator: ["typeAnnotation"], TSIndexedAccessType: ["objectType", "indexType"], TSMappedType: ["typeParameter", "nameType", "typeAnnotation"], TSLiteralType: ["literal"], TSExpressionWithTypeArguments: ["expression", "typeParameters"], TSInterfaceDeclaration: ["id", "typeParameters", "extends", "body"], TSInterfaceBody: ["body"], TSTypeAliasDeclaration: ["id", "typeParameters", "typeAnnotation"], TSInstantiationExpression: ["expression", "typeParameters", "typeArguments"], TSAsExpression: ["expression", "typeAnnotation"], TSSatisfiesExpression: ["expression", "typeAnnotation"], TSTypeAssertion: ["typeAnnotation", "expression"], TSEnumDeclaration: ["id", "members"], TSEnumMember: ["id", "initializer"], TSModuleDeclaration: ["id", "body"], TSModuleBlock: ["body"], TSImportType: ["argument", "qualifier", "typeParameters", "typeArguments"], TSImportEqualsDeclaration: ["id", "moduleReference"], TSExternalModuleReference: ["expression"], TSNonNullExpression: ["expression"], TSExportAssignment: ["expression"], TSNamespaceExportDeclaration: ["id"], TSTypeAnnotation: ["typeAnnotation"], TSTypeParameterInstantiation: ["params"], TSTypeParameterDeclaration: ["params"], TSTypeParameter: ["constraint", "default", "name"], ChainExpression: ["expression"], ExperimentalRestProperty: ["argument"], ExperimentalSpreadProperty: ["argument"], Literal: [], MethodDefinition: ["decorators", "key", "value"], PrivateIdentifier: [], Property: ["key", "value"], PropertyDefinition: ["decorators", "key", "typeAnnotation", "value", "variance"], AccessorProperty: ["decorators", "key", "typeAnnotation", "value"], TSAbstractAccessorProperty: ["decorators", "key", "typeAnnotation"], TSAbstractKeyword: [], TSAbstractMethodDefinition: ["key", "value"], TSAbstractPropertyDefinition: ["decorators", "key", "typeAnnotation"], TSAsyncKeyword: [], TSClassImplements: ["expression", "typeArguments", "typeParameters"], TSDeclareKeyword: [], TSEmptyBodyFunctionExpression: ["id", "typeParameters", "params", "returnType"], TSEnumBody: ["members"], TSExportKeyword: [], TSInterfaceHeritage: ["expression", "typeArguments", "typeParameters"], TSPrivateKeyword: [], TSProtectedKeyword: [], TSPublicKeyword: [], TSReadonlyKeyword: [], TSStaticKeyword: [], TSTemplateLiteralType: ["quasis", "types"], AsConstExpression: ["expression"], AsExpression: ["expression", "typeAnnotation"], BigIntLiteralTypeAnnotation: [], BigIntTypeAnnotation: [], ComponentDeclaration: ["id", "params", "body", "typeParameters", "rendersType"], ComponentParameter: ["name", "local"], ComponentTypeAnnotation: ["params", "rest", "typeParameters", "rendersType"], ComponentTypeParameter: ["name", "typeAnnotation"], ConditionalTypeAnnotation: ["checkType", "extendsType", "trueType", "falseType"], DeclareComponent: ["id", "params", "rest", "typeParameters", "rendersType"], DeclareEnum: ["id", "body"], DeclareHook: ["id"], DeclareNamespace: ["id", "body"], EnumBigIntBody: ["members"], EnumBigIntMember: ["id", "init"], HookDeclaration: ["id", "params", "body", "typeParameters", "returnType"], HookTypeAnnotation: ["params", "returnType", "rest", "typeParameters"], InferTypeAnnotation: ["typeParameter"], KeyofTypeAnnotation: ["argument"], ObjectTypeMappedTypeProperty: ["keyTparam", "propType", "sourceType", "variance"], QualifiedTypeofIdentifier: ["qualification", "id"], TupleTypeLabeledElement: ["label", "elementType", "variance"], TupleTypeSpreadElement: ["label", "typeAnnotation"], TypeOperator: ["typeAnnotation"], TypePredicate: ["parameterName", "typeAnnotation", "asserts"], NGRoot: ["node"], NGPipeExpression: ["left", "right", "arguments"], NGChainedExpression: ["expressions"], NGEmptyExpression: [], NGMicrosyntax: ["body"], NGMicrosyntaxKey: [], NGMicrosyntaxExpression: ["expression", "alias"], NGMicrosyntaxKeyedExpression: ["key", "expression"], NGMicrosyntaxLet: ["key", "value"], NGMicrosyntaxAs: ["key", "alias"], JsExpressionRoot: ["node"], JsonRoot: ["node"], TSJSDocAllType: [], TSJSDocUnknownType: [], TSJSDocNullableType: ["typeAnnotation"], TSJSDocNonNullableType: ["typeAnnotation"], NeverTypeAnnotation: [], UndefinedTypeAnnotation: [], UnknownTypeAnnotation: [], SatisfiesExpression: ["expression", "typeAnnotation"] };
var co = hr(ru), gr = co;
function lo(e) {
  let t = new Set(e);
  return (r) => t.has(r == null ? void 0 : r.type);
}
var v = lo;
var mo = v(["Block", "CommentBlock", "MultiLine"]), ee = mo;
var yo = v(["AnyTypeAnnotation", "ThisTypeAnnotation", "NumberTypeAnnotation", "VoidTypeAnnotation", "BooleanTypeAnnotation", "BigIntTypeAnnotation", "SymbolTypeAnnotation", "StringTypeAnnotation", "NeverTypeAnnotation", "UndefinedTypeAnnotation", "UnknownTypeAnnotation", "EmptyTypeAnnotation", "MixedTypeAnnotation"]), Sr = yo;
function Do(e, t) {
  let r = t.split(".");
  for (let n = r.length - 1; n >= 0; n--) {
    let s = r[n];
    if (n === 0) return e.type === "Identifier" && e.name === s;
    if (e.type !== "MemberExpression" || e.optional || e.computed || e.property.type !== "Identifier" || e.property.name !== s) return false;
    e = e.object;
  }
}
function fo(e, t) {
  return t.some((r) => Do(e, r));
}
var nu = fo;
function Eo({ type: e }) {
  return e.startsWith("TS") && e.endsWith("Keyword");
}
var Br = Eo;
function rr(e, t) {
  return t(e) || Ys(e, { getVisitorKeys: gr, predicate: t });
}
function Rt(e) {
  return e.type === "AssignmentExpression" || e.type === "BinaryExpression" || e.type === "LogicalExpression" || e.type === "NGPipeExpression" || e.type === "ConditionalExpression" || L(e) || W(e) || e.type === "SequenceExpression" || e.type === "TaggedTemplateExpression" || e.type === "BindExpression" || e.type === "UpdateExpression" && !e.prefix || Ae(e) || e.type === "TSNonNullExpression" || e.type === "ChainExpression";
}
function iu(e) {
  return e.expressions ? e.expressions[0] : e.left ?? e.test ?? e.callee ?? e.object ?? e.tag ?? e.argument ?? e.expression;
}
function Pr(e) {
  if (e.expressions) return ["expressions", 0];
  if (e.left) return ["left"];
  if (e.test) return ["test"];
  if (e.object) return ["object"];
  if (e.callee) return ["callee"];
  if (e.tag) return ["tag"];
  if (e.argument) return ["argument"];
  if (e.expression) return ["expression"];
  throw new Error("Unexpected node has no left side.");
}
var Ct = v(["Line", "CommentLine", "SingleLine", "HashbangComment", "HTMLOpen", "HTMLClose", "Hashbang", "InterpreterDirective"]), au = v(["ExportDefaultDeclaration", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration", "DeclareExportAllDeclaration"]), X = v(["ArrayExpression", "TupleExpression"]), se = v(["ObjectExpression", "RecordExpression"]);
function ou(e) {
  return e.type === "LogicalExpression" && e.operator === "??";
}
function Fe(e) {
  return e.type === "NumericLiteral" || e.type === "Literal" && typeof e.value == "number";
}
function jn(e) {
  return e.type === "UnaryExpression" && (e.operator === "+" || e.operator === "-") && Fe(e.argument);
}
function te(e) {
  return !!(e && (e.type === "StringLiteral" || e.type === "Literal" && typeof e.value == "string"));
}
function vn(e) {
  return e.type === "RegExpLiteral" || e.type === "Literal" && !!e.regex;
}
var kr = v(["Literal", "BooleanLiteral", "BigIntLiteral", "DirectiveLiteral", "NullLiteral", "NumericLiteral", "RegExpLiteral", "StringLiteral"]), Fo = v(["Identifier", "ThisExpression", "Super", "PrivateName", "PrivateIdentifier"]), we = v(["ObjectTypeAnnotation", "TSTypeLiteral", "TSMappedType"]), Mt = v(["FunctionExpression", "ArrowFunctionExpression"]);
function Co(e) {
  return e.type === "FunctionExpression" || e.type === "ArrowFunctionExpression" && e.body.type === "BlockStatement";
}
function Ln(e) {
  return L(e) && e.callee.type === "Identifier" && ["async", "inject", "fakeAsync", "waitForAsync"].includes(e.callee.name);
}
var H = v(["JSXElement", "JSXFragment"]);
function bt(e) {
  return e.method && e.kind === "init" || e.kind === "get" || e.kind === "set";
}
function Ir(e) {
  return (e.type === "ObjectTypeProperty" || e.type === "ObjectTypeInternalSlot") && !e.static && !e.method && e.kind !== "get" && e.kind !== "set" && e.value.type === "FunctionTypeAnnotation";
}
function pu(e) {
  return (e.type === "TypeAnnotation" || e.type === "TSTypeAnnotation") && e.typeAnnotation.type === "FunctionTypeAnnotation" && !e.static && !Bt(e, e.typeAnnotation);
}
var De = v(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);
function At(e) {
  return W(e) || e.type === "BindExpression" && !!e.object;
}
var Ao = v(["TSThisType", "NullLiteralTypeAnnotation", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType"]);
function Jt(e) {
  return Br(e) || Sr(e) || Ao(e) || (e.type === "GenericTypeAnnotation" || e.type === "TSTypeReference") && !e.typeParameters && !e.typeArguments;
}
function To(e) {
  return e.type === "Identifier" && (e.name === "beforeEach" || e.name === "beforeAll" || e.name === "afterEach" || e.name === "afterAll");
}
var xo = ["it", "it.only", "it.skip", "describe", "describe.only", "describe.skip", "test", "test.only", "test.skip", "test.step", "test.describe", "test.describe.only", "test.describe.parallel", "test.describe.parallel.only", "test.describe.serial", "test.describe.serial.only", "skip", "xit", "xdescribe", "xtest", "fit", "fdescribe", "ftest"];
function ho(e) {
  return nu(e, xo);
}
function Pt(e, t) {
  if ((e == null ? void 0 : e.type) !== "CallExpression" || e.optional) return false;
  let r = oe(e);
  if (r.length === 1) {
    if (Ln(e) && Pt(t)) return Mt(r[0]);
    if (To(e.callee)) return Ln(r[0]);
  } else if ((r.length === 2 || r.length === 3) && (r[0].type === "TemplateLiteral" || te(r[0])) && ho(e.callee)) return r[2] && !Fe(r[2]) ? false : (r.length === 2 ? Mt(r[1]) : Co(r[1]) && z(r[1]).length <= 1) || Ln(r[1]);
  return false;
}
var cu = (e) => (t) => ((t == null ? void 0 : t.type) === "ChainExpression" && (t = t.expression), e(t)), L = cu(v(["CallExpression", "OptionalCallExpression"])), W = cu(v(["MemberExpression", "OptionalMemberExpression"]));
function Mn(e, t = 5) {
  return lu(e, t) <= t;
}
function lu(e, t) {
  let r = 0;
  for (let n in e) {
    let s = e[n];
    if (s && typeof s == "object" && typeof s.type == "string" && (r++, r += lu(s, t - r)), r > t) return r;
  }
  return r;
}
var go = 0.25;
function nr(e, t) {
  let { printWidth: r } = t;
  if (d(e)) return false;
  let n = r * go;
  if (e.type === "ThisExpression" || e.type === "Identifier" && e.name.length <= n || jn(e) && !d(e.argument)) return true;
  let s = e.type === "Literal" && "regex" in e && e.regex.pattern || e.type === "RegExpLiteral" && e.pattern;
  return s ? s.length <= n : te(e) ? Ze(fe(e), t).length <= n : e.type === "TemplateLiteral" ? e.expressions.length === 0 && e.quasis[0].value.raw.length <= n && !e.quasis[0].value.raw.includes(`
`) : e.type === "UnaryExpression" ? nr(e.argument, { printWidth: r }) : e.type === "CallExpression" && e.arguments.length === 0 && e.callee.type === "Identifier" ? e.callee.name.length <= n - 2 : kr(e);
}
function Oe(e, t) {
  return H(t) ? kt(t) : d(t, h.Leading, (r) => Z(e, k(r)));
}
function su(e) {
  return e.quasis.some((t) => t.value.raw.includes(`
`));
}
function Lr(e, t) {
  return (e.type === "TemplateLiteral" && su(e) || e.type === "TaggedTemplateExpression" && su(e.quasi)) && !Z(t, q(e), { backwards: true });
}
function wr(e) {
  if (!d(e)) return false;
  let t = _(false, ct(e, h.Dangling), -1);
  return t && !ee(t);
}
function mu(e) {
  if (e.length <= 1) return false;
  let t = 0;
  for (let r of e) if (Mt(r)) {
    if (t += 1, t > 1) return true;
  } else if (L(r)) {
    for (let n of oe(r)) if (Mt(n)) return true;
  }
  return false;
}
function Or(e) {
  let { node: t, parent: r, key: n } = e;
  return n === "callee" && L(t) && L(r) && r.arguments.length > 0 && t.arguments.length > r.arguments.length;
}
var So = /* @__PURE__ */ new Set(["!", "-", "+", "~"]);
function be(e, t = 2) {
  if (t <= 0) return false;
  if (e.type === "ChainExpression" || e.type === "TSNonNullExpression") return be(e.expression, t);
  let r = (n) => be(n, t - 1);
  if (vn(e)) return ze(e.pattern ?? e.regex.pattern) <= 5;
  if (kr(e) || Fo(e) || e.type === "ArgumentPlaceholder") return true;
  if (e.type === "TemplateLiteral") return e.quasis.every((n) => !n.value.raw.includes(`
`)) && e.expressions.every(r);
  if (se(e)) return e.properties.every((n) => !n.computed && (n.shorthand || n.value && r(n.value)));
  if (X(e)) return e.elements.every((n) => n === null || r(n));
  if (lt(e)) {
    if (e.type === "ImportExpression" || be(e.callee, t)) {
      let n = oe(e);
      return n.length <= t && n.every(r);
    }
    return false;
  }
  return W(e) ? be(e.object, t) && be(e.property, t) : e.type === "UnaryExpression" && So.has(e.operator) || e.type === "UpdateExpression" ? be(e.argument, t) : false;
}
function fe(e) {
  var t;
  return ((t = e.extra) == null ? void 0 : t.raw) ?? e.raw;
}
function yu(e) {
  return e;
}
function ae(e, t = "es5") {
  return e.trailingComma === "es5" && t === "es5" || e.trailingComma === "all" && (t === "all" || t === "es5");
}
function ie(e, t) {
  switch (e.type) {
    case "BinaryExpression":
    case "LogicalExpression":
    case "AssignmentExpression":
    case "NGPipeExpression":
      return ie(e.left, t);
    case "MemberExpression":
    case "OptionalMemberExpression":
      return ie(e.object, t);
    case "TaggedTemplateExpression":
      return e.tag.type === "FunctionExpression" ? false : ie(e.tag, t);
    case "CallExpression":
    case "OptionalCallExpression":
      return e.callee.type === "FunctionExpression" ? false : ie(e.callee, t);
    case "ConditionalExpression":
      return ie(e.test, t);
    case "UpdateExpression":
      return !e.prefix && ie(e.argument, t);
    case "BindExpression":
      return e.object && ie(e.object, t);
    case "SequenceExpression":
      return ie(e.expressions[0], t);
    case "ChainExpression":
    case "TSSatisfiesExpression":
    case "TSAsExpression":
    case "TSNonNullExpression":
    case "AsExpression":
    case "AsConstExpression":
    case "SatisfiesExpression":
      return ie(e.expression, t);
    default:
      return t(e);
  }
}
var uu = { "==": true, "!=": true, "===": true, "!==": true }, br = { "*": true, "/": true, "%": true }, _n = { ">>": true, ">>>": true, "<<": true };
function sr(e, t) {
  return !(tr(t) !== tr(e) || e === "**" || uu[e] && uu[t] || t === "%" && br[e] || e === "%" && br[t] || t !== e && br[t] && br[e] || _n[e] && _n[t]);
}
var Bo = new Map([["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].flatMap((e, t) => e.map((r) => [r, t])));
function tr(e) {
  return Bo.get(e);
}
function Du(e) {
  return !!_n[e] || e === "|" || e === "^" || e === "&";
}
function fu(e) {
  var r;
  if (e.rest) return true;
  let t = z(e);
  return ((r = _(false, t, -1)) == null ? void 0 : r.type) === "RestElement";
}
var wn = /* @__PURE__ */ new WeakMap();
function z(e) {
  if (wn.has(e)) return wn.get(e);
  let t = [];
  return e.this && t.push(e.this), Array.isArray(e.parameters) ? t.push(...e.parameters) : Array.isArray(e.params) && t.push(...e.params), e.rest && t.push(e.rest), wn.set(e, t), t;
}
function Eu(e, t) {
  let { node: r } = e, n = 0, s = (u) => t(u, n++);
  r.this && e.call(s, "this"), Array.isArray(r.parameters) ? e.each(s, "parameters") : Array.isArray(r.params) && e.each(s, "params"), r.rest && e.call(s, "rest");
}
var On = /* @__PURE__ */ new WeakMap();
function oe(e) {
  if (On.has(e)) return On.get(e);
  if (e.type === "ChainExpression") return oe(e.expression);
  let t = e.arguments;
  return e.type === "ImportExpression" && (t = [e.source], e.options && t.push(e.options)), On.set(e, t), t;
}
function qt(e, t) {
  let { node: r } = e;
  if (r.type === "ChainExpression") return e.call(() => qt(e, t), "expression");
  r.type === "ImportExpression" ? (e.call((n) => t(n, 0), "source"), r.options && e.call((n) => t(n, 1), "options")) : e.each(t, "arguments");
}
function Rn(e, t) {
  let r = [];
  if (e.type === "ChainExpression" && (e = e.expression, r.push("expression")), e.type === "ImportExpression") {
    if (t === 0 || t === (e.options ? -2 : -1)) return [...r, "source"];
    if (e.options && (t === 1 || t === -1)) return [...r, "options"];
    throw new RangeError("Invalid argument index");
  }
  if (t < 0 && (t = e.arguments.length + t), t < 0 || t >= e.arguments.length) throw new RangeError("Invalid argument index");
  return [...r, "arguments", t];
}
function ur(e) {
  return e.value.trim() === "prettier-ignore" && !e.unignore;
}
function kt(e) {
  return (e == null ? void 0 : e.prettierIgnore) || d(e, h.PrettierIgnore);
}
var h = { Leading: 2, Trailing: 4, Dangling: 8, Block: 16, Line: 32, PrettierIgnore: 64, First: 128, Last: 256 }, Fu = (e, t) => {
  if (typeof e == "function" && (t = e, e = 0), e || t) return (r, n, s) => !(e & h.Leading && !r.leading || e & h.Trailing && !r.trailing || e & h.Dangling && (r.leading || r.trailing) || e & h.Block && !ee(r) || e & h.Line && !Ct(r) || e & h.First && n !== 0 || e & h.Last && n !== s.length - 1 || e & h.PrettierIgnore && !ur(r) || t && !t(r));
};
function d(e, t, r) {
  if (!O(e == null ? void 0 : e.comments)) return false;
  let n = Fu(t, r);
  return n ? e.comments.some(n) : true;
}
function ct(e, t, r) {
  if (!Array.isArray(e == null ? void 0 : e.comments)) return [];
  let n = Fu(t, r);
  return n ? e.comments.filter(n) : e.comments;
}
var pe = (e, { originalText: t }) => jt(t, k(e));
function lt(e) {
  return L(e) || e.type === "NewExpression" || e.type === "ImportExpression";
}
function Ce(e) {
  return e && (e.type === "ObjectProperty" || e.type === "Property" && !bt(e));
}
var Ae = v(["TSAsExpression", "TSSatisfiesExpression", "AsExpression", "AsConstExpression", "SatisfiesExpression"]), Ue = v(["UnionTypeAnnotation", "TSUnionType"]), _r = v(["IntersectionTypeAnnotation", "TSIntersectionType"]);
var bo = /* @__PURE__ */ new Set(["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"]), Wt = (e) => {
  for (let t of e.quasis) delete t.value;
};
function Cu(e, t, r) {
  var s, u;
  if (e.type === "Program" && delete t.sourceType, (e.type === "BigIntLiteral" || e.type === "BigIntLiteralTypeAnnotation") && e.value && (t.value = e.value.toLowerCase()), (e.type === "BigIntLiteral" || e.type === "Literal") && e.bigint && (t.bigint = e.bigint.toLowerCase()), e.type === "EmptyStatement" || e.type === "JSXText" || e.type === "JSXExpressionContainer" && (e.expression.type === "Literal" || e.expression.type === "StringLiteral") && e.expression.value === " ") return null;
  if ((e.type === "Property" || e.type === "ObjectProperty" || e.type === "MethodDefinition" || e.type === "ClassProperty" || e.type === "ClassMethod" || e.type === "PropertyDefinition" || e.type === "TSDeclareMethod" || e.type === "TSPropertySignature" || e.type === "ObjectTypeProperty" || e.type === "ImportAttribute") && e.key && !e.computed) {
    let { key: i } = e;
    te(i) || Fe(i) ? t.key = String(i.value) : i.type === "Identifier" && (t.key = i.name);
  }
  if (e.type === "JSXElement" && e.openingElement.name.name === "style" && e.openingElement.attributes.some((i) => i.type === "JSXAttribute" && i.name.name === "jsx")) for (let { type: i, expression: a } of t.children) i === "JSXExpressionContainer" && a.type === "TemplateLiteral" && Wt(a);
  e.type === "JSXAttribute" && e.name.name === "css" && e.value.type === "JSXExpressionContainer" && e.value.expression.type === "TemplateLiteral" && Wt(t.value.expression), e.type === "JSXAttribute" && ((s = e.value) == null ? void 0 : s.type) === "Literal" && /["']|&quot;|&apos;/u.test(e.value.value) && (t.value.value = Y(false, e.value.value, /["']|&quot;|&apos;/gu, '"'));
  let n = e.expression || e.callee;
  if (e.type === "Decorator" && n.type === "CallExpression" && n.callee.name === "Component" && n.arguments.length === 1) {
    let i = e.expression.arguments[0].properties;
    for (let [a, p] of t.expression.arguments[0].properties.entries()) switch (i[a].key.name) {
      case "styles":
        X(p.value) && Wt(p.value.elements[0]);
        break;
      case "template":
        p.value.type === "TemplateLiteral" && Wt(p.value);
        break;
    }
  }
  e.type === "TaggedTemplateExpression" && (e.tag.type === "MemberExpression" || e.tag.type === "Identifier" && (e.tag.name === "gql" || e.tag.name === "graphql" || e.tag.name === "css" || e.tag.name === "md" || e.tag.name === "markdown" || e.tag.name === "html") || e.tag.type === "CallExpression") && Wt(t.quasi), e.type === "TemplateLiteral" && ((u = e.leadingComments) != null && u.some((a) => ee(a) && ["GraphQL", "HTML"].some((p) => a.value === ` ${p} `)) || r.type === "CallExpression" && r.callee.name === "graphql" || !e.leadingComments) && Wt(t), e.type === "ChainExpression" && e.expression.type === "TSNonNullExpression" && (t.type = "TSNonNullExpression", t.expression.type = "ChainExpression"), e.type === "TSMappedType" && (delete t.key, delete t.constraint), e.type === "TSEnumDeclaration" && delete t.body;
}
Cu.ignoredProperties = bo;
var Au = Cu;
var et = "string", _e = "array", tt = "cursor", Xe = "indent", Ye = "align", rt = "trim", le = "group", Pe = "fill", xe = "if-break", He = "indent-if-break", Ne = "line-suffix", Ve = "line-suffix-boundary", me = "line", je = "label", ve = "break-parent", jr = /* @__PURE__ */ new Set([tt, Xe, Ye, rt, le, Pe, xe, He, Ne, Ve, me, je, ve]);
function Po(e) {
  if (typeof e == "string") return et;
  if (Array.isArray(e)) return _e;
  if (!e) return;
  let { type: t } = e;
  if (jr.has(t)) return t;
}
var nt = Po;
var ko = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function Io(e) {
  let t = e === null ? "null" : typeof e;
  if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
  if (nt(e)) throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(e);
  if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
  let n = ko([...jr].map((s) => `'${s}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
}
var Jn = class extends Error {
  name = "InvalidDocError";
  constructor(t) {
    super(Io(t)), this.doc = t;
  }
}, Tt = Jn;
var Tu = {};
function Lo(e, t, r, n) {
  let s = [e];
  for (; s.length > 0; ) {
    let u = s.pop();
    if (u === Tu) {
      r(s.pop());
      continue;
    }
    r && s.push(u, Tu);
    let i = nt(u);
    if (!i) throw new Tt(u);
    if ((t == null ? void 0 : t(u)) !== false) switch (i) {
      case _e:
      case Pe: {
        let a = i === _e ? u : u.parts;
        for (let p = a.length, o = p - 1; o >= 0; --o) s.push(a[o]);
        break;
      }
      case xe:
        s.push(u.flatContents, u.breakContents);
        break;
      case le:
        if (n && u.expandedStates) for (let a = u.expandedStates.length, p = a - 1; p >= 0; --p) s.push(u.expandedStates[p]);
        else s.push(u.contents);
        break;
      case Ye:
      case Xe:
      case He:
      case je:
      case Ne:
        s.push(u.contents);
        break;
      case et:
      case tt:
      case rt:
      case Ve:
      case me:
      case ve:
        break;
      default:
        throw new Tt(u);
    }
  }
}
var qn = Lo;
var du = () => {
}, vr = du;
function f(e) {
  return { type: Xe, contents: e };
}
function he(e, t) {
  return { type: Ye, contents: t, n: e };
}
function l(e, t = {}) {
  return vr(t.expandedStates), { type: le, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
}
function xu(e) {
  return he(Number.NEGATIVE_INFINITY, e);
}
function Mr(e) {
  return he(-1, e);
}
function Ke(e, t) {
  return l(e[0], { ...t, expandedStates: e });
}
function Rr(e) {
  return { type: Pe, parts: e };
}
function B(e, t = "", r = {}) {
  return { type: xe, breakContents: e, flatContents: t, groupId: r.groupId };
}
function dt(e, t) {
  return { type: He, contents: e, groupId: t.groupId, negate: t.negate };
}
function Wn(e) {
  return { type: Ne, contents: e };
}
var ke = { type: Ve }, Ee = { type: ve };
var Gn = { type: me, hard: true }, wo = { type: me, hard: true, literal: true }, x = { type: me }, E = { type: me, soft: true }, F = [Gn, Ee], Jr = [wo, Ee], ir = { type: tt };
function b(e, t) {
  let r = [];
  for (let n = 0; n < t.length; n++) n !== 0 && r.push(e), r.push(t[n]);
  return r;
}
function hu(e, t, r) {
  let n = e;
  if (t > 0) {
    for (let s = 0; s < Math.floor(t / r); ++s) n = f(n);
    n = he(t % r, n), n = he(Number.NEGATIVE_INFINITY, n);
  }
  return n;
}
function st(e, t) {
  return e ? { type: je, label: e, contents: t } : t;
}
function mt(e, t) {
  if (typeof e == "string") return t(e);
  let r = /* @__PURE__ */ new Map();
  return n(e);
  function n(u) {
    if (r.has(u)) return r.get(u);
    let i = s(u);
    return r.set(u, i), i;
  }
  function s(u) {
    switch (nt(u)) {
      case _e:
        return t(u.map(n));
      case Pe:
        return t({ ...u, parts: u.parts.map(n) });
      case xe:
        return t({ ...u, breakContents: n(u.breakContents), flatContents: n(u.flatContents) });
      case le: {
        let { expandedStates: i, contents: a } = u;
        return i ? (i = i.map(n), a = i[0]) : a = n(a), t({ ...u, contents: a, expandedStates: i });
      }
      case Ye:
      case Xe:
      case He:
      case je:
      case Ne:
        return t({ ...u, contents: n(u.contents) });
      case et:
      case tt:
      case rt:
      case Ve:
      case me:
      case ve:
        return t(u);
      default:
        throw new Tt(u);
    }
  }
}
function Su(e, t, r) {
  let n = r, s = false;
  function u(i) {
    if (s) return false;
    let a = t(i);
    a !== void 0 && (s = true, n = a);
  }
  return qn(e, u), n;
}
function Oo(e) {
  if (e.type === le && e.break || e.type === me && e.hard || e.type === ve) return true;
}
function re(e) {
  return Su(e, Oo, false);
}
function gu(e) {
  if (e.length > 0) {
    let t = _(false, e, -1);
    !t.expandedStates && !t.break && (t.break = "propagated");
  }
  return null;
}
function Bu(e) {
  let t = /* @__PURE__ */ new Set(), r = [];
  function n(u) {
    if (u.type === ve && gu(r), u.type === le) {
      if (r.push(u), t.has(u)) return false;
      t.add(u);
    }
  }
  function s(u) {
    u.type === le && r.pop().break && gu(r);
  }
  qn(e, n, s, true);
}
function _o(e) {
  return e.type === me && !e.hard ? e.soft ? "" : " " : e.type === xe ? e.flatContents : e;
}
function ar(e) {
  return mt(e, _o);
}
function jo(e) {
  switch (nt(e)) {
    case Pe:
      if (e.parts.every((t) => t === "")) return "";
      break;
    case le:
      if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
      if (e.contents.type === le && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates) return e.contents;
      break;
    case Ye:
    case Xe:
    case He:
    case Ne:
      if (!e.contents) return "";
      break;
    case xe:
      if (!e.flatContents && !e.breakContents) return "";
      break;
    case _e: {
      let t = [];
      for (let r of e) {
        if (!r) continue;
        let [n, ...s] = Array.isArray(r) ? r : [r];
        typeof n == "string" && typeof _(false, t, -1) == "string" ? t[t.length - 1] += n : t.push(n), t.push(...s);
      }
      return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
    }
    case et:
    case tt:
    case rt:
    case Ve:
    case me:
    case je:
    case ve:
      break;
    default:
      throw new Tt(e);
  }
  return e;
}
function Gt(e) {
  return mt(e, (t) => jo(t));
}
function Ie(e, t = Jr) {
  return mt(e, (r) => typeof r == "string" ? b(t, r.split(`
`)) : r);
}
function vo(e) {
  if (e.type === me) return true;
}
function bu(e) {
  return Su(e, vo, false);
}
function or(e, t) {
  return e.type === je ? { ...e, contents: t(e.contents) } : t(e);
}
function Mo(e) {
  let t = `*${e.value}*`.split(`
`);
  return t.length > 1 && t.every((r) => r.trimStart()[0] === "*");
}
var Pu = Mo;
function ku(e, t) {
  let r = e.node;
  if (Ct(r)) return t.originalText.slice(q(r), k(r)).trimEnd();
  if (ee(r)) return Pu(r) ? Ro(r) : ["/*", Ie(r.value), "*/"];
  throw new Error("Not a comment: " + JSON.stringify(r));
}
function Ro(e) {
  let t = e.value.split(`
`);
  return ["/*", b(F, t.map((r, n) => n === 0 ? r.trimEnd() : " " + (n < t.length - 1 ? r.trim() : r.trimStart()))), "*/"];
}
var $n = {};
Ar($n, { endOfLine: () => Yo, ownLine: () => Xo, remaining: () => Ho });
function Jo(e) {
  let t = e.type || e.kind || "(unknown type)", r = String(e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || "");
  return r.length > 20 && (r = r.slice(0, 19) + "…"), t + (r ? " " + r : "");
}
function Un(e, t) {
  (e.comments ?? (e.comments = [])).push(t), t.printed = false, t.nodeDescription = Jo(e);
}
function ce(e, t) {
  t.leading = true, t.trailing = false, Un(e, t);
}
function Le(e, t, r) {
  t.leading = false, t.trailing = false, r && (t.marker = r), Un(e, t);
}
function V(e, t) {
  t.leading = false, t.trailing = true, Un(e, t);
}
function qo(e, t) {
  let r = null, n = t;
  for (; n !== r; ) r = n, n = We(e, n), n = Ot(e, n), n = _t(e, n), n = Ge(e, n);
  return n;
}
var ut = qo;
function Wo(e, t) {
  let r = ut(e, t);
  return r === false ? "" : e.charAt(r);
}
var ge = Wo;
function Go(e, t, r) {
  for (let n = t; n < r; ++n) if (e.charAt(n) === `
`) return true;
  return false;
}
var Te = Go;
function Uo(e) {
  return ee(e) && e.value[0] === "*" && /@(?:type|satisfies)\b/u.test(e.value);
}
var Iu = Uo;
function Xo(e) {
  return [Ru, wu, ju, np, Vo, Yn, Hn, Lu, Ou, ap, up, Vn, Mu, op, _u, vu, Nn, $o, Ep].some((t) => t(e));
}
function Yo(e) {
  return [No, ju, wu, Mu, Yn, Hn, Lu, Ou, vu, sp, ip, Vn, lp, Nn, Dp, fp, Fp].some((t) => t(e));
}
function Ho(e) {
  return [Ru, Yn, Hn, Ko, rp, _u, Vn, tp, ep, yp, Nn, mp].some((t) => t(e));
}
function It(e, t) {
  let r = (e.body || e.properties).find(({ type: n }) => n !== "EmptyStatement");
  r ? ce(r, t) : Le(e, t);
}
function Xn(e, t) {
  e.type === "BlockStatement" ? It(e, t) : ce(e, t);
}
function No({ comment: e, followingNode: t }) {
  return t && Iu(e) ? (ce(t, e), true) : false;
}
function Yn({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s }) {
  if ((r == null ? void 0 : r.type) !== "IfStatement" || !n) return false;
  if (ge(s, k(e)) === ")") return V(t, e), true;
  if (t === r.consequent && n === r.alternate) {
    let i = ut(s, k(r.consequent));
    if (q(e) < i || r.alternate.type === "BlockStatement") {
      if (t.type === "BlockStatement") V(t, e);
      else {
        let a = Ct(e) || e.loc.start.line === e.loc.end.line, p = e.loc.start.line === t.loc.start.line;
        a && p ? V(t, e) : Le(r, e);
      }
      return true;
    }
  }
  return n.type === "BlockStatement" ? (It(n, e), true) : n.type === "IfStatement" ? (Xn(n.consequent, e), true) : r.consequent === n ? (ce(n, e), true) : false;
}
function Hn({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s }) {
  return (r == null ? void 0 : r.type) !== "WhileStatement" || !n ? false : ge(s, k(e)) === ")" ? (V(t, e), true) : n.type === "BlockStatement" ? (It(n, e), true) : r.body === n ? (ce(n, e), true) : false;
}
function Lu({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
  return (r == null ? void 0 : r.type) !== "TryStatement" && (r == null ? void 0 : r.type) !== "CatchClause" || !n ? false : r.type === "CatchClause" && t ? (V(t, e), true) : n.type === "BlockStatement" ? (It(n, e), true) : n.type === "TryStatement" ? (Xn(n.finalizer, e), true) : n.type === "CatchClause" ? (Xn(n.body, e), true) : false;
}
function Vo({ comment: e, enclosingNode: t, followingNode: r }) {
  return W(t) && (r == null ? void 0 : r.type) === "Identifier" ? (ce(t, e), true) : false;
}
function $o({ comment: e, enclosingNode: t, followingNode: r, options: n }) {
  return !n.experimentalTernaries || !((t == null ? void 0 : t.type) === "ConditionalExpression" || (t == null ? void 0 : t.type) === "ConditionalTypeAnnotation" || (t == null ? void 0 : t.type) === "TSConditionalType") ? false : (r == null ? void 0 : r.type) === "ConditionalExpression" || (r == null ? void 0 : r.type) === "ConditionalTypeAnnotation" || (r == null ? void 0 : r.type) === "TSConditionalType" ? (Le(t, e), true) : false;
}
function wu({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s, options: u }) {
  let i = t && !Te(s, k(t), q(e));
  return (!t || !i) && ((r == null ? void 0 : r.type) === "ConditionalExpression" || (r == null ? void 0 : r.type) === "ConditionalTypeAnnotation" || (r == null ? void 0 : r.type) === "TSConditionalType") && n ? u.experimentalTernaries && r.alternate === n && !(ee(e) && !Te(u.originalText, q(e), k(e))) ? (Le(r, e), true) : (ce(n, e), true) : false;
}
function Ko({ comment: e, precedingNode: t, enclosingNode: r }) {
  return Ce(r) && r.shorthand && r.key === t && r.value.type === "AssignmentPattern" ? (V(r.value.left, e), true) : false;
}
var Qo = /* @__PURE__ */ new Set(["ClassDeclaration", "ClassExpression", "DeclareClass", "DeclareInterface", "InterfaceDeclaration", "TSInterfaceDeclaration"]);
function Ou({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
  if (Qo.has(r == null ? void 0 : r.type)) {
    if (O(r.decorators) && (n == null ? void 0 : n.type) !== "Decorator") return V(_(false, r.decorators, -1), e), true;
    if (r.body && n === r.body) return It(r.body, e), true;
    if (n) {
      if (r.superClass && n === r.superClass && t && (t === r.id || t === r.typeParameters)) return V(t, e), true;
      for (let s of ["implements", "extends", "mixins"]) if (r[s] && n === r[s][0]) return t && (t === r.id || t === r.typeParameters || t === r.superClass) ? V(t, e) : Le(r, e, s), true;
    }
  }
  return false;
}
var zo = /* @__PURE__ */ new Set(["ClassMethod", "ClassProperty", "PropertyDefinition", "TSAbstractPropertyDefinition", "TSAbstractMethodDefinition", "TSDeclareMethod", "MethodDefinition", "ClassAccessorProperty", "AccessorProperty", "TSAbstractAccessorProperty", "TSParameterProperty"]);
function _u({ comment: e, precedingNode: t, enclosingNode: r, text: n }) {
  return r && t && ge(n, k(e)) === "(" && (r.type === "Property" || r.type === "TSDeclareMethod" || r.type === "TSAbstractMethodDefinition") && t.type === "Identifier" && r.key === t && ge(n, k(t)) !== ":" ? (V(t, e), true) : (t == null ? void 0 : t.type) === "Decorator" && zo.has(r == null ? void 0 : r.type) && (Ct(e) || e.placement === "ownLine") ? (V(t, e), true) : false;
}
var Zo = /* @__PURE__ */ new Set(["FunctionDeclaration", "FunctionExpression", "ClassMethod", "MethodDefinition", "ObjectMethod"]);
function ep({ comment: e, precedingNode: t, enclosingNode: r, text: n }) {
  return ge(n, k(e)) !== "(" ? false : t && Zo.has(r == null ? void 0 : r.type) ? (V(t, e), true) : false;
}
function tp({ comment: e, enclosingNode: t, text: r }) {
  if ((t == null ? void 0 : t.type) !== "ArrowFunctionExpression") return false;
  let n = ut(r, k(e));
  return n !== false && r.slice(n, n + 2) === "=>" ? (Le(t, e), true) : false;
}
function rp({ comment: e, enclosingNode: t, text: r }) {
  return ge(r, k(e)) !== ")" ? false : t && (Ju(t) && z(t).length === 0 || lt(t) && oe(t).length === 0) ? (Le(t, e), true) : ((t == null ? void 0 : t.type) === "MethodDefinition" || (t == null ? void 0 : t.type) === "TSAbstractMethodDefinition") && z(t.value).length === 0 ? (Le(t.value, e), true) : false;
}
function np({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s }) {
  return (t == null ? void 0 : t.type) === "ComponentTypeParameter" && ((r == null ? void 0 : r.type) === "DeclareComponent" || (r == null ? void 0 : r.type) === "ComponentTypeAnnotation") && (n == null ? void 0 : n.type) !== "ComponentTypeParameter" ? (V(t, e), true) : ((t == null ? void 0 : t.type) === "ComponentParameter" || (t == null ? void 0 : t.type) === "RestElement") && (r == null ? void 0 : r.type) === "ComponentDeclaration" && ge(s, k(e)) === ")" ? (V(t, e), true) : false;
}
function ju({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s }) {
  return (t == null ? void 0 : t.type) === "FunctionTypeParam" && (r == null ? void 0 : r.type) === "FunctionTypeAnnotation" && (n == null ? void 0 : n.type) !== "FunctionTypeParam" ? (V(t, e), true) : ((t == null ? void 0 : t.type) === "Identifier" || (t == null ? void 0 : t.type) === "AssignmentPattern" || (t == null ? void 0 : t.type) === "ObjectPattern" || (t == null ? void 0 : t.type) === "ArrayPattern" || (t == null ? void 0 : t.type) === "RestElement" || (t == null ? void 0 : t.type) === "TSParameterProperty") && Ju(r) && ge(s, k(e)) === ")" ? (V(t, e), true) : !ee(e) && ((r == null ? void 0 : r.type) === "FunctionDeclaration" || (r == null ? void 0 : r.type) === "FunctionExpression" || (r == null ? void 0 : r.type) === "ObjectMethod") && (n == null ? void 0 : n.type) === "BlockStatement" && r.body === n && ut(s, k(e)) === q(n) ? (It(n, e), true) : false;
}
function vu({ comment: e, enclosingNode: t }) {
  return (t == null ? void 0 : t.type) === "LabeledStatement" ? (ce(t, e), true) : false;
}
function Nn({ comment: e, enclosingNode: t }) {
  return ((t == null ? void 0 : t.type) === "ContinueStatement" || (t == null ? void 0 : t.type) === "BreakStatement") && !t.label ? (V(t, e), true) : false;
}
function sp({ comment: e, precedingNode: t, enclosingNode: r }) {
  return L(r) && t && r.callee === t && r.arguments.length > 0 ? (ce(r.arguments[0], e), true) : false;
}
function up({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
  return Ue(r) ? (ur(e) && (n.prettierIgnore = true, e.unignore = true), t ? (V(t, e), true) : false) : (Ue(n) && ur(e) && (n.types[0].prettierIgnore = true, e.unignore = true), false);
}
function ip({ comment: e, enclosingNode: t }) {
  return Ce(t) ? (ce(t, e), true) : false;
}
function Vn({ comment: e, enclosingNode: t, ast: r, isLastComment: n }) {
  var s;
  return ((s = r == null ? void 0 : r.body) == null ? void 0 : s.length) === 0 ? (n ? Le(r, e) : ce(r, e), true) : (t == null ? void 0 : t.type) === "Program" && t.body.length === 0 && !O(t.directives) ? (n ? Le(t, e) : ce(t, e), true) : false;
}
function ap({ comment: e, enclosingNode: t }) {
  return (t == null ? void 0 : t.type) === "ForInStatement" || (t == null ? void 0 : t.type) === "ForOfStatement" ? (ce(t, e), true) : false;
}
function Mu({ comment: e, precedingNode: t, enclosingNode: r, text: n }) {
  if ((r == null ? void 0 : r.type) === "ImportSpecifier" || (r == null ? void 0 : r.type) === "ExportSpecifier") return ce(r, e), true;
  let s = (t == null ? void 0 : t.type) === "ImportSpecifier" && (r == null ? void 0 : r.type) === "ImportDeclaration", u = (t == null ? void 0 : t.type) === "ExportSpecifier" && (r == null ? void 0 : r.type) === "ExportNamedDeclaration";
  return (s || u) && Z(n, k(e)) ? (V(t, e), true) : false;
}
function op({ comment: e, enclosingNode: t }) {
  return (t == null ? void 0 : t.type) === "AssignmentPattern" ? (ce(t, e), true) : false;
}
var pp = /* @__PURE__ */ new Set(["VariableDeclarator", "AssignmentExpression", "TypeAlias", "TSTypeAliasDeclaration"]), cp = /* @__PURE__ */ new Set(["ObjectExpression", "RecordExpression", "ArrayExpression", "TupleExpression", "TemplateLiteral", "TaggedTemplateExpression", "ObjectTypeAnnotation", "TSTypeLiteral"]);
function lp({ comment: e, enclosingNode: t, followingNode: r }) {
  return pp.has(t == null ? void 0 : t.type) && r && (cp.has(r.type) || ee(e)) ? (ce(r, e), true) : false;
}
function mp({ comment: e, enclosingNode: t, followingNode: r, text: n }) {
  return !r && ((t == null ? void 0 : t.type) === "TSMethodSignature" || (t == null ? void 0 : t.type) === "TSDeclareFunction" || (t == null ? void 0 : t.type) === "TSAbstractMethodDefinition") && ge(n, k(e)) === ";" ? (V(t, e), true) : false;
}
function Ru({ comment: e, enclosingNode: t, followingNode: r }) {
  if (ur(e) && (t == null ? void 0 : t.type) === "TSMappedType" && (r == null ? void 0 : r.type) === "TSTypeParameter" && r.constraint) return t.prettierIgnore = true, e.unignore = true, true;
}
function yp({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
  return (r == null ? void 0 : r.type) !== "TSMappedType" ? false : (n == null ? void 0 : n.type) === "TSTypeParameter" && n.name ? (ce(n.name, e), true) : (t == null ? void 0 : t.type) === "TSTypeParameter" && t.constraint ? (V(t.constraint, e), true) : false;
}
function Dp({ comment: e, enclosingNode: t, followingNode: r }) {
  return !t || t.type !== "SwitchCase" || t.test || !r || r !== t.consequent[0] ? false : (r.type === "BlockStatement" && Ct(e) ? It(r, e) : Le(t, e), true);
}
function fp({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
  return Ue(t) && ((r.type === "TSArrayType" || r.type === "ArrayTypeAnnotation") && !n || _r(r)) ? (V(_(false, t.types, -1), e), true) : false;
}
function Ep({ comment: e, enclosingNode: t, precedingNode: r, followingNode: n }) {
  if (((t == null ? void 0 : t.type) === "ObjectPattern" || (t == null ? void 0 : t.type) === "ArrayPattern") && (n == null ? void 0 : n.type) === "TSTypeAnnotation") return r ? V(r, e) : Le(t, e), true;
}
function Fp({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
  var s;
  if (!n && (r == null ? void 0 : r.type) === "UnaryExpression" && ((t == null ? void 0 : t.type) === "LogicalExpression" || (t == null ? void 0 : t.type) === "BinaryExpression")) {
    let u = ((s = r.argument.loc) == null ? void 0 : s.start.line) !== t.right.loc.start.line, i = Ct(e) || e.loc.start.line === e.loc.end.line, a = e.loc.start.line === t.right.loc.start.line;
    if (u && i && a) return V(t.right, e), true;
  }
  return false;
}
var Ju = v(["ArrowFunctionExpression", "FunctionExpression", "FunctionDeclaration", "ObjectMethod", "ClassMethod", "TSDeclareFunction", "TSCallSignatureDeclaration", "TSConstructSignatureDeclaration", "TSMethodSignature", "TSConstructorType", "TSFunctionType", "TSDeclareMethod"]);
var Cp = /* @__PURE__ */ new Set(["EmptyStatement", "TemplateElement", "TSEmptyBodyFunctionExpression", "ChainExpression"]);
function Ap(e) {
  return !Cp.has(e.type);
}
function Tp(e, t) {
  var r;
  if ((t.parser === "typescript" || t.parser === "flow" || t.parser === "acorn" || t.parser === "espree" || t.parser === "meriyah" || t.parser === "__babel_estree") && e.type === "MethodDefinition" && ((r = e.value) == null ? void 0 : r.type) === "FunctionExpression" && z(e.value).length === 0 && !e.value.returnType && !O(e.value.typeParameters) && e.value.body) return [...e.decorators || [], e.key, e.value.body];
}
function Kn(e) {
  let { node: t, parent: r } = e;
  return (H(t) || r && (r.type === "JSXSpreadAttribute" || r.type === "JSXSpreadChild" || Ue(r) || (r.type === "ClassDeclaration" || r.type === "ClassExpression") && r.superClass === t)) && (!kt(t) || Ue(r));
}
function dp(e, { parser: t }) {
  if (t === "flow" || t === "babel-flow") return e = Y(false, e, /[\s(]/gu, ""), e === "" || e === "/*" || e === "/*::";
}
function qu(e) {
  switch (e) {
    case "cr":
      return "\r";
    case "crlf":
      return `\r
`;
    default:
      return `
`;
  }
}
var Se = Symbol("MODE_BREAK"), it = Symbol("MODE_FLAT"), Ut = Symbol("cursor"), Qn = Symbol("DOC_FILL_PRINTED_LENGTH");
function Wu() {
  return { value: "", length: 0, queue: [] };
}
function xp(e, t) {
  return zn(e, { type: "indent" }, t);
}
function hp(e, t, r) {
  return t === Number.NEGATIVE_INFINITY ? e.root || Wu() : t < 0 ? zn(e, { type: "dedent" }, r) : t ? t.type === "root" ? { ...e, root: e } : zn(e, { type: typeof t == "string" ? "stringAlign" : "numberAlign", n: t }, r) : e;
}
function zn(e, t, r) {
  let n = t.type === "dedent" ? e.queue.slice(0, -1) : [...e.queue, t], s = "", u = 0, i = 0, a = 0;
  for (let c of n) switch (c.type) {
    case "indent":
      m(), r.useTabs ? p(1) : o(r.tabWidth);
      break;
    case "stringAlign":
      m(), s += c.n, u += c.n.length;
      break;
    case "numberAlign":
      i += 1, a += c.n;
      break;
    default:
      throw new Error(`Unexpected type '${c.type}'`);
  }
  return D(), { ...e, value: s, length: u, queue: n };
  function p(c) {
    s += "	".repeat(c), u += r.tabWidth * c;
  }
  function o(c) {
    s += " ".repeat(c), u += c;
  }
  function m() {
    r.useTabs ? y() : D();
  }
  function y() {
    i > 0 && p(i), C();
  }
  function D() {
    a > 0 && o(a), C();
  }
  function C() {
    i = 0, a = 0;
  }
}
function Zn(e) {
  let t = 0, r = 0, n = e.length;
  e: for (; n--; ) {
    let s = e[n];
    if (s === Ut) {
      r++;
      continue;
    }
    for (let u = s.length - 1; u >= 0; u--) {
      let i = s[u];
      if (i === " " || i === "	") t++;
      else {
        e[n] = s.slice(0, u + 1);
        break e;
      }
    }
  }
  if (t > 0 || r > 0) for (e.length = n + 1; r-- > 0; ) e.push(Ut);
  return t;
}
function qr(e, t, r, n, s, u) {
  if (r === Number.POSITIVE_INFINITY) return true;
  let i = t.length, a = [e], p = [];
  for (; r >= 0; ) {
    if (a.length === 0) {
      if (i === 0) return true;
      a.push(t[--i]);
      continue;
    }
    let { mode: o, doc: m } = a.pop(), y = nt(m);
    switch (y) {
      case et:
        p.push(m), r -= ze(m);
        break;
      case _e:
      case Pe: {
        let D = y === _e ? m : m.parts, C = m[Qn] ?? 0;
        for (let c = D.length - 1; c >= C; c--) a.push({ mode: o, doc: D[c] });
        break;
      }
      case Xe:
      case Ye:
      case He:
      case je:
        a.push({ mode: o, doc: m.contents });
        break;
      case rt:
        r += Zn(p);
        break;
      case le: {
        if (u && m.break) return false;
        let D = m.break ? Se : o, C = m.expandedStates && D === Se ? _(false, m.expandedStates, -1) : m.contents;
        a.push({ mode: D, doc: C });
        break;
      }
      case xe: {
        let C = (m.groupId ? s[m.groupId] || it : o) === Se ? m.breakContents : m.flatContents;
        C && a.push({ mode: o, doc: C });
        break;
      }
      case me:
        if (o === Se || m.hard) return true;
        m.soft || (p.push(" "), r--);
        break;
      case Ne:
        n = true;
        break;
      case Ve:
        if (n) return false;
        break;
    }
  }
  return false;
}
function es(e, t) {
  let r = {}, n = t.printWidth, s = qu(t.endOfLine), u = 0, i = [{ ind: Wu(), mode: Se, doc: e }], a = [], p = false, o = [], m = 0;
  for (Bu(e); i.length > 0; ) {
    let { ind: D, mode: C, doc: c } = i.pop();
    switch (nt(c)) {
      case et: {
        let A = s !== `
` ? Y(false, c, `
`, s) : c;
        a.push(A), i.length > 0 && (u += ze(A));
        break;
      }
      case _e:
        for (let A = c.length - 1; A >= 0; A--) i.push({ ind: D, mode: C, doc: c[A] });
        break;
      case tt:
        if (m >= 2) throw new Error("There are too many 'cursor' in doc.");
        a.push(Ut), m++;
        break;
      case Xe:
        i.push({ ind: xp(D, t), mode: C, doc: c.contents });
        break;
      case Ye:
        i.push({ ind: hp(D, c.n, t), mode: C, doc: c.contents });
        break;
      case rt:
        u -= Zn(a);
        break;
      case le:
        switch (C) {
          case it:
            if (!p) {
              i.push({ ind: D, mode: c.break ? Se : it, doc: c.contents });
              break;
            }
          case Se: {
            p = false;
            let A = { ind: D, mode: it, doc: c.contents }, T = n - u, S = o.length > 0;
            if (!c.break && qr(A, i, T, S, r)) i.push(A);
            else if (c.expandedStates) {
              let g = _(false, c.expandedStates, -1);
              if (c.break) {
                i.push({ ind: D, mode: Se, doc: g });
                break;
              } else for (let M = 1; M < c.expandedStates.length + 1; M++) if (M >= c.expandedStates.length) {
                i.push({ ind: D, mode: Se, doc: g });
                break;
              } else {
                let R = c.expandedStates[M], j = { ind: D, mode: it, doc: R };
                if (qr(j, i, T, S, r)) {
                  i.push(j);
                  break;
                }
              }
            } else i.push({ ind: D, mode: Se, doc: c.contents });
            break;
          }
        }
        c.id && (r[c.id] = _(false, i, -1).mode);
        break;
      case Pe: {
        let A = n - u, T = c[Qn] ?? 0, { parts: S } = c, g = S.length - T;
        if (g === 0) break;
        let M = S[T + 0], R = S[T + 1], j = { ind: D, mode: it, doc: M }, I = { ind: D, mode: Se, doc: M }, U = qr(j, [], A, o.length > 0, r, true);
        if (g === 1) {
          U ? i.push(j) : i.push(I);
          break;
        }
        let P = { ind: D, mode: it, doc: R }, G = { ind: D, mode: Se, doc: R };
        if (g === 2) {
          U ? i.push(P, j) : i.push(G, I);
          break;
        }
        let ue = S[T + 2], Q = { ind: D, mode: C, doc: { ...c, [Qn]: T + 2 } };
        qr({ ind: D, mode: it, doc: [M, R, ue] }, [], A, o.length > 0, r, true) ? i.push(Q, P, j) : U ? i.push(Q, G, j) : i.push(Q, G, I);
        break;
      }
      case xe:
      case He: {
        let A = c.groupId ? r[c.groupId] : C;
        if (A === Se) {
          let T = c.type === xe ? c.breakContents : c.negate ? c.contents : f(c.contents);
          T && i.push({ ind: D, mode: C, doc: T });
        }
        if (A === it) {
          let T = c.type === xe ? c.flatContents : c.negate ? f(c.contents) : c.contents;
          T && i.push({ ind: D, mode: C, doc: T });
        }
        break;
      }
      case Ne:
        o.push({ ind: D, mode: C, doc: c.contents });
        break;
      case Ve:
        o.length > 0 && i.push({ ind: D, mode: C, doc: Gn });
        break;
      case me:
        switch (C) {
          case it:
            if (c.hard) p = true;
            else {
              c.soft || (a.push(" "), u += 1);
              break;
            }
          case Se:
            if (o.length > 0) {
              i.push({ ind: D, mode: C, doc: c }, ...o.reverse()), o.length = 0;
              break;
            }
            c.literal ? D.root ? (a.push(s, D.root.value), u = D.root.length) : (a.push(s), u = 0) : (u -= Zn(a), a.push(s + D.value), u = D.length);
            break;
        }
        break;
      case je:
        i.push({ ind: D, mode: C, doc: c.contents });
        break;
      case ve:
        break;
      default:
        throw new Tt(c);
    }
    i.length === 0 && o.length > 0 && (i.push(...o.reverse()), o.length = 0);
  }
  let y = a.indexOf(Ut);
  if (y !== -1) {
    let D = a.indexOf(Ut, y + 1);
    if (D === -1) return { formatted: a.filter((T) => T !== Ut).join("") };
    let C = a.slice(0, y).join(""), c = a.slice(y + 1, D).join(""), A = a.slice(D + 1).join("");
    return { formatted: C + c + A, cursorNodeStart: C.length, cursorNodeText: c };
  }
  return { formatted: a.join("") };
}
function gp(e, t, r = 0) {
  let n = 0;
  for (let s = r; s < e.length; ++s) e[s] === "	" ? n = n + t - n % t : n++;
  return n;
}
var Gu = gp;
function Sp(e, t) {
  let r = e.lastIndexOf(`
`);
  return r === -1 ? 0 : Gu(e.slice(r + 1).match(/^[\t ]*/u)[0], t);
}
var Uu = Sp;
function Wr(e, t, r) {
  let { node: n } = e;
  if (n.type === "TemplateLiteral" && Pp(e)) {
    let o = Bp(e, r, t);
    if (o) return o;
  }
  let u = "expressions";
  n.type === "TSTemplateLiteralType" && (u = "types");
  let i = [], a = e.map(t, u);
  i.push(ke, "`");
  let p = 0;
  return e.each(({ index: o, node: m }) => {
    if (i.push(t()), m.tail) return;
    let { tabWidth: y } = r, D = m.value.raw, C = D.includes(`
`) ? Uu(D, y) : p;
    p = C;
    let c = a[o], A = n[u][o], T = Te(r.originalText, k(m), q(n.quasis[o + 1]));
    if (!T) {
      let g = es(c, { ...r, printWidth: Number.POSITIVE_INFINITY }).formatted;
      g.includes(`
`) ? T = true : c = g;
    }
    T && (d(A) || A.type === "Identifier" || W(A) || A.type === "ConditionalExpression" || A.type === "SequenceExpression" || Ae(A) || De(A)) && (c = [f([E, c]), E]);
    let S = C === 0 && D.endsWith(`
`) ? he(Number.NEGATIVE_INFINITY, c) : hu(c, C, y);
    i.push(l(["${", S, ke, "}"]));
  }, "quasis"), i.push("`"), i;
}
function Xu(e, t) {
  let r = t("quasi");
  return st(r.label && { tagged: true, ...r.label }, [t("tag"), t(e.node.typeArguments ? "typeArguments" : "typeParameters"), ke, r]);
}
function Bp(e, t, r) {
  let { node: n } = e, s = n.quasis[0].value.raw.trim().split(/\s*\|\s*/u);
  if (s.length > 1 || s.some((u) => u.length > 0)) {
    t.__inJestEach = true;
    let u = e.map(r, "expressions");
    t.__inJestEach = false;
    let i = [], a = u.map((D) => "${" + es(D, { ...t, printWidth: Number.POSITIVE_INFINITY, endOfLine: "lf" }).formatted + "}"), p = [{ hasLineBreak: false, cells: [] }];
    for (let D = 1; D < n.quasis.length; D++) {
      let C = _(false, p, -1), c = a[D - 1];
      C.cells.push(c), c.includes(`
`) && (C.hasLineBreak = true), n.quasis[D].value.raw.includes(`
`) && p.push({ hasLineBreak: false, cells: [] });
    }
    let o = Math.max(s.length, ...p.map((D) => D.cells.length)), m = Array.from({ length: o }).fill(0), y = [{ cells: s }, ...p.filter((D) => D.cells.length > 0)];
    for (let { cells: D } of y.filter((C) => !C.hasLineBreak)) for (let [C, c] of D.entries()) m[C] = Math.max(m[C], ze(c));
    return i.push(ke, "`", f([F, b(F, y.map((D) => b(" | ", D.cells.map((C, c) => D.hasLineBreak ? C : C + " ".repeat(m[c] - ze(C))))))]), F, "`"), i;
  }
}
function bp(e, t) {
  let { node: r } = e, n = t();
  return d(r) && (n = l([f([E, n]), E])), ["${", n, ke, "}"];
}
function Xt(e, t) {
  return e.map((r) => bp(r, t), "expressions");
}
function Gr(e, t) {
  return mt(e, (r) => typeof r == "string" ? t ? Y(false, r, /(\\*)`/gu, "$1$1\\`") : ts(r) : r);
}
function ts(e) {
  return Y(false, e, /([\\`]|\$\{)/gu, String.raw`\$1`);
}
function Pp({ node: e, parent: t }) {
  let r = /^[fx]?(?:describe|it|test)$/u;
  return t.type === "TaggedTemplateExpression" && t.quasi === e && t.tag.type === "MemberExpression" && t.tag.property.type === "Identifier" && t.tag.property.name === "each" && (t.tag.object.type === "Identifier" && r.test(t.tag.object.name) || t.tag.object.type === "MemberExpression" && t.tag.object.property.type === "Identifier" && (t.tag.object.property.name === "only" || t.tag.object.property.name === "skip") && t.tag.object.object.type === "Identifier" && r.test(t.tag.object.object.name));
}
var ns = [(e, t) => e.type === "ObjectExpression" && t === "properties", (e, t) => e.type === "CallExpression" && e.callee.type === "Identifier" && e.callee.name === "Component" && t === "arguments", (e, t) => e.type === "Decorator" && t === "expression"];
function Yu(e) {
  let t = (n) => n.type === "TemplateLiteral", r = (n, s) => Ce(n) && !n.computed && n.key.type === "Identifier" && n.key.name === "styles" && s === "value";
  return e.match(t, (n, s) => X(n) && s === "elements", r, ...ns) || e.match(t, r, ...ns);
}
function Hu(e) {
  return e.match((t) => t.type === "TemplateLiteral", (t, r) => Ce(t) && !t.computed && t.key.type === "Identifier" && t.key.name === "template" && r === "value", ...ns);
}
function rs(e, t) {
  return d(e, h.Block | h.Leading, ({ value: r }) => r === ` ${t} `);
}
function Ur({ node: e, parent: t }, r) {
  return rs(e, r) || kp(t) && rs(t, r) || t.type === "ExpressionStatement" && rs(t, r);
}
function kp(e) {
  return e.type === "AsConstExpression" || e.type === "TSAsExpression" && e.typeAnnotation.type === "TSTypeReference" && e.typeAnnotation.typeName.type === "Identifier" && e.typeAnnotation.typeName.name === "const";
}
async function Ip(e, t, r) {
  let { node: n } = r, s = n.quasis.map((m) => m.value.raw), u = 0, i = s.reduce((m, y, D) => D === 0 ? y : m + "@prettier-placeholder-" + u++ + "-id" + y, ""), a = await e(i, { parser: "scss" }), p = Xt(r, t), o = Lp(a, p);
  if (!o) throw new Error("Couldn't insert all the expressions");
  return ["`", f([F, o]), E, "`"];
}
function Lp(e, t) {
  if (!O(t)) return e;
  let r = 0, n = mt(Gt(e), (s) => typeof s != "string" || !s.includes("@prettier-placeholder") ? s : s.split(/@prettier-placeholder-(\d+)-id/u).map((u, i) => i % 2 === 0 ? Ie(u) : (r++, t[u])));
  return t.length === r ? n : null;
}
function wp({ node: e, parent: t, grandparent: r }) {
  return r && e.quasis && t.type === "JSXExpressionContainer" && r.type === "JSXElement" && r.openingElement.name.name === "style" && r.openingElement.attributes.some((n) => n.type === "JSXAttribute" && n.name.name === "jsx") || (t == null ? void 0 : t.type) === "TaggedTemplateExpression" && t.tag.type === "Identifier" && t.tag.name === "css" || (t == null ? void 0 : t.type) === "TaggedTemplateExpression" && t.tag.type === "MemberExpression" && t.tag.object.name === "css" && (t.tag.property.name === "global" || t.tag.property.name === "resolve");
}
function Xr(e) {
  return e.type === "Identifier" && e.name === "styled";
}
function Nu(e) {
  return /^[A-Z]/u.test(e.object.name) && e.property.name === "extend";
}
function Op({ parent: e }) {
  if (!e || e.type !== "TaggedTemplateExpression") return false;
  let t = e.tag.type === "ParenthesizedExpression" ? e.tag.expression : e.tag;
  switch (t.type) {
    case "MemberExpression":
      return Xr(t.object) || Nu(t);
    case "CallExpression":
      return Xr(t.callee) || t.callee.type === "MemberExpression" && (t.callee.object.type === "MemberExpression" && (Xr(t.callee.object.object) || Nu(t.callee.object)) || t.callee.object.type === "CallExpression" && Xr(t.callee.object.callee));
    case "Identifier":
      return t.name === "css";
    default:
      return false;
  }
}
function _p({ parent: e, grandparent: t }) {
  return (t == null ? void 0 : t.type) === "JSXAttribute" && e.type === "JSXExpressionContainer" && t.name.type === "JSXIdentifier" && t.name.name === "css";
}
function jp(e) {
  if (wp(e) || Op(e) || _p(e) || Yu(e)) return Ip;
}
var Vu = jp;
async function vp(e, t, r) {
  let { node: n } = r, s = n.quasis.length, u = Xt(r, t), i = [];
  for (let a = 0; a < s; a++) {
    let p = n.quasis[a], o = a === 0, m = a === s - 1, y = p.value.cooked, D = y.split(`
`), C = D.length, c = u[a], A = C > 2 && D[0].trim() === "" && D[1].trim() === "", T = C > 2 && D[C - 1].trim() === "" && D[C - 2].trim() === "", S = D.every((M) => /^\s*(?:#[^\n\r]*)?$/u.test(M));
    if (!m && /#[^\n\r]*$/u.test(D[C - 1])) return null;
    let g = null;
    S ? g = Mp(D) : g = await e(y, { parser: "graphql" }), g ? (g = Gr(g, false), !o && A && i.push(""), i.push(g), !m && T && i.push("")) : !o && !m && A && i.push(""), c && i.push(c);
  }
  return ["`", f([F, b(F, i)]), F, "`"];
}
function Mp(e) {
  let t = [], r = false, n = e.map((s) => s.trim());
  for (let [s, u] of n.entries()) u !== "" && (n[s - 1] === "" && r ? t.push([F, u]) : t.push(u), r = true);
  return t.length === 0 ? null : b(F, t);
}
function Rp({ node: e, parent: t }) {
  return Ur({ node: e, parent: t }, "GraphQL") || t && (t.type === "TaggedTemplateExpression" && (t.tag.type === "MemberExpression" && t.tag.object.name === "graphql" && t.tag.property.name === "experimental" || t.tag.type === "Identifier" && (t.tag.name === "gql" || t.tag.name === "graphql")) || t.type === "CallExpression" && t.callee.type === "Identifier" && t.callee.name === "graphql");
}
function Jp(e) {
  if (Rp(e)) return vp;
}
var $u = Jp;
var ss = 0;
async function Ku(e, t, r, n, s) {
  let { node: u } = n, i = ss;
  ss = ss + 1 >>> 0;
  let a = (S) => `PRETTIER_HTML_PLACEHOLDER_${S}_${i}_IN_JS`, p = u.quasis.map((S, g, M) => g === M.length - 1 ? S.value.cooked : S.value.cooked + a(g)).join(""), o = Xt(n, r), m = new RegExp(a(String.raw`(\d+)`), "gu"), y = 0, D = await t(p, { parser: e, __onHtmlRoot(S) {
    y = S.children.length;
  } }), C = mt(D, (S) => {
    if (typeof S != "string") return S;
    let g = [], M = S.split(m);
    for (let R = 0; R < M.length; R++) {
      let j = M[R];
      if (R % 2 === 0) {
        j && (j = ts(j), s.__embeddedInHtml && (j = Y(false, j, /<\/(?=script\b)/giu, String.raw`<\/`)), g.push(j));
        continue;
      }
      let I = Number(j);
      g.push(o[I]);
    }
    return g;
  }), c = /^\s/u.test(p) ? " " : "", A = /\s$/u.test(p) ? " " : "", T = s.htmlWhitespaceSensitivity === "ignore" ? F : c && A ? x : null;
  return T ? l(["`", f([T, l(C)]), T, "`"]) : st({ hug: false }, l(["`", c, y > 1 ? f(l(C)) : l(C), A, "`"]));
}
function qp(e) {
  return Ur(e, "HTML") || e.match((t) => t.type === "TemplateLiteral", (t, r) => t.type === "TaggedTemplateExpression" && t.tag.type === "Identifier" && t.tag.name === "html" && r === "quasi");
}
var Wp = Ku.bind(void 0, "html"), Gp = Ku.bind(void 0, "angular");
function Up(e) {
  if (qp(e)) return Wp;
  if (Hu(e)) return Gp;
}
var Qu = Up;
async function Xp(e, t, r) {
  let { node: n } = r, s = Y(false, n.quasis[0].value.raw, /((?:\\\\)*)\\`/gu, (p, o) => "\\".repeat(o.length / 2) + "`"), u = Yp(s), i = u !== "";
  i && (s = Y(false, s, new RegExp(`^${u}`, "gmu"), ""));
  let a = Gr(await e(s, { parser: "markdown", __inJsTemplate: true }), true);
  return ["`", i ? f([E, a]) : [Jr, xu(a)], E, "`"];
}
function Yp(e) {
  let t = e.match(/^([^\S\n]*)\S/mu);
  return t === null ? "" : t[1];
}
function Hp(e) {
  if (Np(e)) return Xp;
}
function Np({ node: e, parent: t }) {
  return (t == null ? void 0 : t.type) === "TaggedTemplateExpression" && e.quasis.length === 1 && t.tag.type === "Identifier" && (t.tag.name === "md" || t.tag.name === "markdown");
}
var zu = Hp;
function Vp(e) {
  let { node: t } = e;
  if (t.type !== "TemplateLiteral" || $p(t)) return;
  let r;
  for (let n of [Vu, $u, Qu, zu]) if (r = n(e), !!r) return t.quasis.length === 1 && t.quasis[0].value.raw.trim() === "" ? "``" : async (...s) => {
    let u = await r(...s);
    return u && st({ embed: true, ...u.label }, u);
  };
}
function $p({ quasis: e }) {
  return e.some(({ value: { cooked: t } }) => t === null);
}
var Zu = Vp;
var Kp = /\*\/$/, Qp = /^\/\*\*?/, ni = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, zp = /(^|\s+)\/\/([^\n\r]*)/g, ei = /^(\r?\n)+/, Zp = /(?:^|\r?\n) *(@[^\n\r]*?) *\r?\n *(?![^\n\r@]*\/\/[^]*)([^\s@][^\n\r@]+?) *\r?\n/g, ti = /(?:^|\r?\n) *@(\S+) *([^\n\r]*)/g, ec = /(\r?\n|^) *\* ?/g, si = [];
function ui(e) {
  let t = e.match(ni);
  return t ? t[0].trimStart() : "";
}
function ii(e) {
  let t = e.match(ni), r = t == null ? void 0 : t[0];
  return r == null ? e : e.slice(r.length);
}
function ai(e) {
  let t = `
`;
  e = Y(false, e.replace(Qp, "").replace(Kp, ""), ec, "$1");
  let r = "";
  for (; r !== e; ) r = e, e = Y(false, e, Zp, `${t}$1 $2${t}`);
  e = e.replace(ei, "").trimEnd();
  let n = /* @__PURE__ */ Object.create(null), s = Y(false, e, ti, "").replace(ei, "").trimEnd(), u;
  for (; u = ti.exec(e); ) {
    let i = Y(false, u[2], zp, "");
    if (typeof n[u[1]] == "string" || Array.isArray(n[u[1]])) {
      let a = n[u[1]];
      n[u[1]] = [...si, ...Array.isArray(a) ? a : [a], i];
    } else n[u[1]] = i;
  }
  return { comments: s, pragmas: n };
}
function oi({ comments: e = "", pragmas: t = {} }) {
  let r = `
`, n = "/**", s = " *", u = " */", i = Object.keys(t), a = i.flatMap((o) => ri(o, t[o])).map((o) => `${s} ${o}${r}`).join("");
  if (!e) {
    if (i.length === 0) return "";
    if (i.length === 1 && !Array.isArray(t[i[0]])) {
      let o = t[i[0]];
      return `${n} ${ri(i[0], o)[0]}${u}`;
    }
  }
  let p = e.split(r).map((o) => `${s} ${o}`).join(r) + r;
  return n + r + (e ? p : "") + (e && i.length > 0 ? s + r : "") + a + u;
}
function ri(e, t) {
  return [...si, ...Array.isArray(t) ? t : [t]].map((r) => `@${e} ${r}`.trim());
}
function tc(e) {
  if (!e.startsWith("#!")) return "";
  let t = e.indexOf(`
`);
  return t === -1 ? e : e.slice(0, t);
}
var pi = tc;
function rc(e) {
  let t = pi(e);
  t && (e = e.slice(t.length + 1));
  let r = ui(e), { pragmas: n, comments: s } = ai(r);
  return { shebang: t, text: e, pragmas: n, comments: s };
}
function ci(e) {
  let { shebang: t, text: r, pragmas: n, comments: s } = rc(e), u = ii(r), i = oi({ pragmas: { format: "", ...n }, comments: s.trimStart() });
  return (t ? `${t}
` : "") + i + (u.startsWith(`
`) ? `
` : `

`) + u;
}
function nc(e, t) {
  let { originalText: r, [Symbol.for("comments")]: n, locStart: s, locEnd: u, [Symbol.for("printedComments")]: i } = t, { node: a } = e, p = s(a), o = u(a);
  for (let m of n) s(m) >= p && u(m) <= o && i.add(m);
  return r.slice(p, o);
}
var li = nc;
function us(e, t) {
  var u, i, a, p, o, m, y, D, C;
  if (e.isRoot) return false;
  let { node: r, key: n, parent: s } = e;
  if (t.__isInHtmlInterpolation && !t.bracketSpacing && ac(r) && pr(e)) return true;
  if (sc(r)) return false;
  if (r.type === "Identifier") {
    if ((u = r.extra) != null && u.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(r.name) || n === "left" && (r.name === "async" && !s.await || r.name === "let") && s.type === "ForOfStatement") return true;
    if (r.name === "let") {
      let c = (i = e.findAncestor((A) => A.type === "ForOfStatement")) == null ? void 0 : i.left;
      if (c && ie(c, (A) => A === r)) return true;
    }
    if (n === "object" && r.name === "let" && s.type === "MemberExpression" && s.computed && !s.optional) {
      let c = e.findAncestor((T) => T.type === "ExpressionStatement" || T.type === "ForStatement" || T.type === "ForInStatement"), A = c ? c.type === "ExpressionStatement" ? c.expression : c.type === "ForStatement" ? c.init : c.left : void 0;
      if (A && ie(A, (T) => T === r)) return true;
    }
    if (n === "expression") switch (r.name) {
      case "await":
      case "interface":
      case "module":
      case "using":
      case "yield":
      case "let":
      case "component":
      case "hook":
      case "type": {
        let c = e.findAncestor((A) => !Ae(A));
        if (c !== s && c.type === "ExpressionStatement") return true;
      }
    }
    return false;
  }
  if (r.type === "ObjectExpression" || r.type === "FunctionExpression" || r.type === "ClassExpression" || r.type === "DoExpression") {
    let c = (a = e.findAncestor((A) => A.type === "ExpressionStatement")) == null ? void 0 : a.expression;
    if (c && ie(c, (A) => A === r)) return true;
  }
  if (r.type === "ObjectExpression") {
    let c = (p = e.findAncestor((A) => A.type === "ArrowFunctionExpression")) == null ? void 0 : p.body;
    if (c && c.type !== "SequenceExpression" && c.type !== "AssignmentExpression" && ie(c, (A) => A === r)) return true;
  }
  switch (s.type) {
    case "ParenthesizedExpression":
      return false;
    case "ClassDeclaration":
    case "ClassExpression":
      if (n === "superClass" && (r.type === "ArrowFunctionExpression" || r.type === "AssignmentExpression" || r.type === "AwaitExpression" || r.type === "BinaryExpression" || r.type === "ConditionalExpression" || r.type === "LogicalExpression" || r.type === "NewExpression" || r.type === "ObjectExpression" || r.type === "SequenceExpression" || r.type === "TaggedTemplateExpression" || r.type === "UnaryExpression" || r.type === "UpdateExpression" || r.type === "YieldExpression" || r.type === "TSNonNullExpression" || r.type === "ClassExpression" && O(r.decorators))) return true;
      break;
    case "ExportDefaultDeclaration":
      return mi(e, t) || r.type === "SequenceExpression";
    case "Decorator":
      if (n === "expression" && !pc(r)) return true;
      break;
    case "TypeAnnotation":
      if (e.match(void 0, void 0, (c, A) => A === "returnType" && c.type === "ArrowFunctionExpression") && ic(r)) return true;
      break;
    case "BinaryExpression":
      if (n === "left" && (s.operator === "in" || s.operator === "instanceof") && r.type === "UnaryExpression") return true;
      break;
    case "VariableDeclarator":
      if (n === "init" && e.match(void 0, void 0, (c, A) => A === "declarations" && c.type === "VariableDeclaration", (c, A) => A === "left" && c.type === "ForInStatement")) return true;
      break;
  }
  switch (r.type) {
    case "UpdateExpression":
      if (s.type === "UnaryExpression") return r.prefix && (r.operator === "++" && s.operator === "+" || r.operator === "--" && s.operator === "-");
    case "UnaryExpression":
      switch (s.type) {
        case "UnaryExpression":
          return r.operator === s.operator && (r.operator === "+" || r.operator === "-");
        case "BindExpression":
          return true;
        case "MemberExpression":
        case "OptionalMemberExpression":
          return n === "object";
        case "TaggedTemplateExpression":
          return true;
        case "NewExpression":
        case "CallExpression":
        case "OptionalCallExpression":
          return n === "callee";
        case "BinaryExpression":
          return n === "left" && s.operator === "**";
        case "TSNonNullExpression":
          return true;
        default:
          return false;
      }
    case "BinaryExpression":
      if (s.type === "UpdateExpression" || r.operator === "in" && uc(e)) return true;
      if (r.operator === "|>" && ((o = r.extra) != null && o.parenthesized)) {
        let c = e.grandparent;
        if (c.type === "BinaryExpression" && c.operator === "|>") return true;
      }
    case "TSTypeAssertion":
    case "TSAsExpression":
    case "TSSatisfiesExpression":
    case "AsExpression":
    case "AsConstExpression":
    case "SatisfiesExpression":
    case "LogicalExpression":
      switch (s.type) {
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "AsExpression":
        case "AsConstExpression":
        case "SatisfiesExpression":
          return !Ae(r);
        case "ConditionalExpression":
          return Ae(r) || ou(r);
        case "CallExpression":
        case "NewExpression":
        case "OptionalCallExpression":
          return n === "callee";
        case "ClassExpression":
        case "ClassDeclaration":
          return n === "superClass";
        case "TSTypeAssertion":
        case "TaggedTemplateExpression":
        case "UnaryExpression":
        case "JSXSpreadAttribute":
        case "SpreadElement":
        case "BindExpression":
        case "AwaitExpression":
        case "TSNonNullExpression":
        case "UpdateExpression":
          return true;
        case "MemberExpression":
        case "OptionalMemberExpression":
          return n === "object";
        case "AssignmentExpression":
        case "AssignmentPattern":
          return n === "left" && (r.type === "TSTypeAssertion" || Ae(r));
        case "LogicalExpression":
          if (r.type === "LogicalExpression") return s.operator !== r.operator;
        case "BinaryExpression": {
          let { operator: c, type: A } = r;
          if (!c && A !== "TSTypeAssertion") return true;
          let T = tr(c), S = s.operator, g = tr(S);
          return g > T || n === "right" && g === T || g === T && !sr(S, c) ? true : g < T && c === "%" ? S === "+" || S === "-" : !!Du(S);
        }
        default:
          return false;
      }
    case "SequenceExpression":
      switch (s.type) {
        case "ReturnStatement":
          return false;
        case "ForStatement":
          return false;
        case "ExpressionStatement":
          return n !== "expression";
        case "ArrowFunctionExpression":
          return n !== "body";
        default:
          return true;
      }
    case "YieldExpression":
      if (s.type === "AwaitExpression" || s.type === "TSTypeAssertion") return true;
    case "AwaitExpression":
      switch (s.type) {
        case "TaggedTemplateExpression":
        case "UnaryExpression":
        case "LogicalExpression":
        case "SpreadElement":
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "TSNonNullExpression":
        case "AsExpression":
        case "AsConstExpression":
        case "SatisfiesExpression":
        case "BindExpression":
          return true;
        case "MemberExpression":
        case "OptionalMemberExpression":
          return n === "object";
        case "NewExpression":
        case "CallExpression":
        case "OptionalCallExpression":
          return n === "callee";
        case "ConditionalExpression":
          return n === "test";
        case "BinaryExpression":
          return !(!r.argument && s.operator === "|>");
        default:
          return false;
      }
    case "TSFunctionType":
      if (e.match((c) => c.type === "TSFunctionType", (c, A) => A === "typeAnnotation" && c.type === "TSTypeAnnotation", (c, A) => A === "returnType" && c.type === "ArrowFunctionExpression")) return true;
    case "TSConditionalType":
    case "TSConstructorType":
      if (n === "extendsType" && s.type === "TSConditionalType") {
        if (r.type === "TSConditionalType") return true;
        let { typeAnnotation: c } = r.returnType || r.typeAnnotation;
        if (c.type === "TSTypePredicate" && c.typeAnnotation && (c = c.typeAnnotation.typeAnnotation), c.type === "TSInferType" && c.typeParameter.constraint) return true;
      }
      if (n === "checkType" && s.type === "TSConditionalType") return true;
    case "TSUnionType":
    case "TSIntersectionType":
      if ((s.type === "TSUnionType" || s.type === "TSIntersectionType") && s.types.length > 1 && (!r.types || r.types.length > 1)) return true;
    case "TSInferType":
      if (r.type === "TSInferType") {
        if (s.type === "TSRestType") return false;
        if (n === "types" && (s.type === "TSUnionType" || s.type === "TSIntersectionType") && r.typeParameter.type === "TSTypeParameter" && r.typeParameter.constraint) return true;
      }
    case "TSTypeOperator":
      return s.type === "TSArrayType" || s.type === "TSOptionalType" || s.type === "TSRestType" || n === "objectType" && s.type === "TSIndexedAccessType" || s.type === "TSTypeOperator" || s.type === "TSTypeAnnotation" && e.grandparent.type.startsWith("TSJSDoc");
    case "TSTypeQuery":
      return n === "objectType" && s.type === "TSIndexedAccessType" || n === "elementType" && s.type === "TSArrayType";
    case "TypeOperator":
      return s.type === "ArrayTypeAnnotation" || s.type === "NullableTypeAnnotation" || n === "objectType" && (s.type === "IndexedAccessType" || s.type === "OptionalIndexedAccessType") || s.type === "TypeOperator";
    case "TypeofTypeAnnotation":
      return n === "objectType" && (s.type === "IndexedAccessType" || s.type === "OptionalIndexedAccessType") || n === "elementType" && s.type === "ArrayTypeAnnotation";
    case "ArrayTypeAnnotation":
      return s.type === "NullableTypeAnnotation";
    case "IntersectionTypeAnnotation":
    case "UnionTypeAnnotation":
      return s.type === "TypeOperator" || s.type === "ArrayTypeAnnotation" || s.type === "NullableTypeAnnotation" || s.type === "IntersectionTypeAnnotation" || s.type === "UnionTypeAnnotation" || n === "objectType" && (s.type === "IndexedAccessType" || s.type === "OptionalIndexedAccessType");
    case "InferTypeAnnotation":
    case "NullableTypeAnnotation":
      return s.type === "ArrayTypeAnnotation" || n === "objectType" && (s.type === "IndexedAccessType" || s.type === "OptionalIndexedAccessType");
    case "ComponentTypeAnnotation":
    case "FunctionTypeAnnotation": {
      if (r.type === "ComponentTypeAnnotation" && (r.rendersType === null || r.rendersType === void 0)) return false;
      if (e.match(void 0, (A, T) => T === "typeAnnotation" && A.type === "TypeAnnotation", (A, T) => T === "returnType" && A.type === "ArrowFunctionExpression") || e.match(void 0, (A, T) => T === "typeAnnotation" && A.type === "TypePredicate", (A, T) => T === "typeAnnotation" && A.type === "TypeAnnotation", (A, T) => T === "returnType" && A.type === "ArrowFunctionExpression")) return true;
      let c = s.type === "NullableTypeAnnotation" ? e.grandparent : s;
      return c.type === "UnionTypeAnnotation" || c.type === "IntersectionTypeAnnotation" || c.type === "ArrayTypeAnnotation" || n === "objectType" && (c.type === "IndexedAccessType" || c.type === "OptionalIndexedAccessType") || n === "checkType" && s.type === "ConditionalTypeAnnotation" || n === "extendsType" && s.type === "ConditionalTypeAnnotation" && ((m = r.returnType) == null ? void 0 : m.type) === "InferTypeAnnotation" && ((y = r.returnType) == null ? void 0 : y.typeParameter.bound) || c.type === "NullableTypeAnnotation" || s.type === "FunctionTypeParam" && s.name === null && z(r).some((A) => {
        var T;
        return ((T = A.typeAnnotation) == null ? void 0 : T.type) === "NullableTypeAnnotation";
      });
    }
    case "ConditionalTypeAnnotation":
      if (n === "extendsType" && s.type === "ConditionalTypeAnnotation" && r.type === "ConditionalTypeAnnotation" || n === "checkType" && s.type === "ConditionalTypeAnnotation") return true;
    case "OptionalIndexedAccessType":
      return n === "objectType" && s.type === "IndexedAccessType";
    case "StringLiteral":
    case "NumericLiteral":
    case "Literal":
      if (typeof r.value == "string" && s.type === "ExpressionStatement" && !s.directive) {
        let c = e.grandparent;
        return c.type === "Program" || c.type === "BlockStatement";
      }
      return n === "object" && s.type === "MemberExpression" && typeof r.value == "number";
    case "AssignmentExpression": {
      let c = e.grandparent;
      return n === "body" && s.type === "ArrowFunctionExpression" ? true : n === "key" && (s.type === "ClassProperty" || s.type === "PropertyDefinition") && s.computed || (n === "init" || n === "update") && s.type === "ForStatement" ? false : s.type === "ExpressionStatement" ? r.left.type === "ObjectPattern" : !(n === "key" && s.type === "TSPropertySignature" || s.type === "AssignmentExpression" || s.type === "SequenceExpression" && c.type === "ForStatement" && (c.init === s || c.update === s) || n === "value" && s.type === "Property" && c.type === "ObjectPattern" && c.properties.includes(s) || s.type === "NGChainedExpression" || n === "node" && s.type === "JsExpressionRoot");
    }
    case "ConditionalExpression":
      switch (s.type) {
        case "TaggedTemplateExpression":
        case "UnaryExpression":
        case "SpreadElement":
        case "BinaryExpression":
        case "LogicalExpression":
        case "NGPipeExpression":
        case "ExportDefaultDeclaration":
        case "AwaitExpression":
        case "JSXSpreadAttribute":
        case "TSTypeAssertion":
        case "TypeCastExpression":
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "AsExpression":
        case "AsConstExpression":
        case "SatisfiesExpression":
        case "TSNonNullExpression":
          return true;
        case "NewExpression":
        case "CallExpression":
        case "OptionalCallExpression":
          return n === "callee";
        case "ConditionalExpression":
          return t.experimentalTernaries ? false : n === "test";
        case "MemberExpression":
        case "OptionalMemberExpression":
          return n === "object";
        default:
          return false;
      }
    case "FunctionExpression":
      switch (s.type) {
        case "NewExpression":
        case "CallExpression":
        case "OptionalCallExpression":
          return n === "callee";
        case "TaggedTemplateExpression":
          return true;
        default:
          return false;
      }
    case "ArrowFunctionExpression":
      switch (s.type) {
        case "BinaryExpression":
          return s.operator !== "|>" || ((D = r.extra) == null ? void 0 : D.parenthesized);
        case "NewExpression":
        case "CallExpression":
        case "OptionalCallExpression":
          return n === "callee";
        case "MemberExpression":
        case "OptionalMemberExpression":
          return n === "object";
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "AsExpression":
        case "AsConstExpression":
        case "SatisfiesExpression":
        case "TSNonNullExpression":
        case "BindExpression":
        case "TaggedTemplateExpression":
        case "UnaryExpression":
        case "LogicalExpression":
        case "AwaitExpression":
        case "TSTypeAssertion":
          return true;
        case "ConditionalExpression":
          return n === "test";
        default:
          return false;
      }
    case "ClassExpression":
      switch (s.type) {
        case "NewExpression":
          return n === "callee";
        default:
          return false;
      }
    case "OptionalMemberExpression":
    case "OptionalCallExpression":
    case "CallExpression":
    case "MemberExpression":
      if (oc(e)) return true;
    case "TaggedTemplateExpression":
    case "TSNonNullExpression":
      if (n === "callee" && (s.type === "BindExpression" || s.type === "NewExpression")) {
        let c = r;
        for (; c; ) switch (c.type) {
          case "CallExpression":
          case "OptionalCallExpression":
            return true;
          case "MemberExpression":
          case "OptionalMemberExpression":
          case "BindExpression":
            c = c.object;
            break;
          case "TaggedTemplateExpression":
            c = c.tag;
            break;
          case "TSNonNullExpression":
            c = c.expression;
            break;
          default:
            return false;
        }
      }
      return false;
    case "BindExpression":
      return n === "callee" && (s.type === "BindExpression" || s.type === "NewExpression") || n === "object" && W(s);
    case "NGPipeExpression":
      return !(s.type === "NGRoot" || s.type === "NGMicrosyntaxExpression" || s.type === "ObjectProperty" && !((C = r.extra) != null && C.parenthesized) || X(s) || n === "arguments" && L(s) || n === "right" && s.type === "NGPipeExpression" || n === "property" && s.type === "MemberExpression" || s.type === "AssignmentExpression");
    case "JSXFragment":
    case "JSXElement":
      return n === "callee" || n === "left" && s.type === "BinaryExpression" && s.operator === "<" || !X(s) && s.type !== "ArrowFunctionExpression" && s.type !== "AssignmentExpression" && s.type !== "AssignmentPattern" && s.type !== "BinaryExpression" && s.type !== "NewExpression" && s.type !== "ConditionalExpression" && s.type !== "ExpressionStatement" && s.type !== "JsExpressionRoot" && s.type !== "JSXAttribute" && s.type !== "JSXElement" && s.type !== "JSXExpressionContainer" && s.type !== "JSXFragment" && s.type !== "LogicalExpression" && !L(s) && !Ce(s) && s.type !== "ReturnStatement" && s.type !== "ThrowStatement" && s.type !== "TypeCastExpression" && s.type !== "VariableDeclarator" && s.type !== "YieldExpression";
    case "TSInstantiationExpression":
      return n === "object" && W(s);
  }
  return false;
}
var sc = v(["BlockStatement", "BreakStatement", "ComponentDeclaration", "ClassBody", "ClassDeclaration", "ClassMethod", "ClassProperty", "PropertyDefinition", "ClassPrivateProperty", "ContinueStatement", "DebuggerStatement", "DeclareComponent", "DeclareClass", "DeclareExportAllDeclaration", "DeclareExportDeclaration", "DeclareFunction", "DeclareHook", "DeclareInterface", "DeclareModule", "DeclareModuleExports", "DeclareNamespace", "DeclareVariable", "DeclareEnum", "DoWhileStatement", "EnumDeclaration", "ExportAllDeclaration", "ExportDefaultDeclaration", "ExportNamedDeclaration", "ExpressionStatement", "ForInStatement", "ForOfStatement", "ForStatement", "FunctionDeclaration", "HookDeclaration", "IfStatement", "ImportDeclaration", "InterfaceDeclaration", "LabeledStatement", "MethodDefinition", "ReturnStatement", "SwitchStatement", "ThrowStatement", "TryStatement", "TSDeclareFunction", "TSEnumDeclaration", "TSImportEqualsDeclaration", "TSInterfaceDeclaration", "TSModuleDeclaration", "TSNamespaceExportDeclaration", "TypeAlias", "VariableDeclaration", "WhileStatement", "WithStatement"]);
function uc(e) {
  let t = 0, { node: r } = e;
  for (; r; ) {
    let n = e.getParentNode(t++);
    if ((n == null ? void 0 : n.type) === "ForStatement" && n.init === r) return true;
    r = n;
  }
  return false;
}
function ic(e) {
  return rr(e, (t) => t.type === "ObjectTypeAnnotation" && rr(t, (r) => r.type === "FunctionTypeAnnotation"));
}
function ac(e) {
  return se(e);
}
function pr(e) {
  let { parent: t, key: r } = e;
  switch (t.type) {
    case "NGPipeExpression":
      if (r === "arguments" && e.isLast) return e.callParent(pr);
      break;
    case "ObjectProperty":
      if (r === "value") return e.callParent(() => e.key === "properties" && e.isLast);
      break;
    case "BinaryExpression":
    case "LogicalExpression":
      if (r === "right") return e.callParent(pr);
      break;
    case "ConditionalExpression":
      if (r === "alternate") return e.callParent(pr);
      break;
    case "UnaryExpression":
      if (t.prefix) return e.callParent(pr);
      break;
  }
  return false;
}
function mi(e, t) {
  let { node: r, parent: n } = e;
  return r.type === "FunctionExpression" || r.type === "ClassExpression" ? n.type === "ExportDefaultDeclaration" || !us(e, t) : !Rt(r) || n.type !== "ExportDefaultDeclaration" && us(e, t) ? false : e.call(() => mi(e, t), ...Pr(r));
}
function oc(e) {
  return !!(e.match(void 0, (t, r) => r === "expression" && t.type === "ChainExpression", (t, r) => r === "tag" && t.type === "TaggedTemplateExpression") || e.match((t) => t.type === "OptionalCallExpression" || t.type === "OptionalMemberExpression", (t, r) => r === "tag" && t.type === "TaggedTemplateExpression") || e.match((t) => t.type === "OptionalCallExpression" || t.type === "OptionalMemberExpression", (t, r) => r === "expression" && t.type === "TSNonNullExpression", (t, r) => r === "tag" && t.type === "TaggedTemplateExpression") || e.match(void 0, (t, r) => r === "expression" && t.type === "ChainExpression", (t, r) => r === "expression" && t.type === "TSNonNullExpression", (t, r) => r === "tag" && t.type === "TaggedTemplateExpression") || e.match(void 0, (t, r) => r === "expression" && t.type === "TSNonNullExpression", (t, r) => r === "expression" && t.type === "ChainExpression", (t, r) => r === "tag" && t.type === "TaggedTemplateExpression") || e.match((t) => t.type === "OptionalMemberExpression" || t.type === "OptionalCallExpression", (t, r) => r === "object" && t.type === "MemberExpression" || r === "callee" && (t.type === "CallExpression" || t.type === "NewExpression")) || e.match((t) => t.type === "OptionalMemberExpression" || t.type === "OptionalCallExpression", (t, r) => r === "expression" && t.type === "TSNonNullExpression", (t, r) => r === "object" && t.type === "MemberExpression" || r === "callee" && t.type === "CallExpression") || e.match((t) => t.type === "CallExpression" || t.type === "MemberExpression", (t, r) => r === "expression" && t.type === "ChainExpression") && (e.match(void 0, void 0, (t, r) => r === "callee" && (t.type === "CallExpression" && !t.optional || t.type === "NewExpression") || r === "object" && t.type === "MemberExpression" && !t.optional) || e.match(void 0, void 0, (t, r) => r === "expression" && t.type === "TSNonNullExpression", (t, r) => r === "object" && t.type === "MemberExpression" || r === "callee" && t.type === "CallExpression")) || e.match((t) => t.type === "CallExpression" || t.type === "MemberExpression", (t, r) => r === "expression" && t.type === "TSNonNullExpression", (t, r) => r === "expression" && t.type === "ChainExpression", (t, r) => r === "object" && t.type === "MemberExpression" || r === "callee" && t.type === "CallExpression"));
}
function is(e) {
  return e.type === "Identifier" ? true : W(e) ? !e.computed && !e.optional && e.property.type === "Identifier" && is(e.object) : false;
}
function pc(e) {
  return e.type === "ChainExpression" && (e = e.expression), is(e) || L(e) && !e.optional && is(e.callee);
}
var Be = us;
function cc(e, t) {
  let r = t - 1;
  r = We(e, r, { backwards: true }), r = Ge(e, r, { backwards: true }), r = We(e, r, { backwards: true });
  let n = Ge(e, r, { backwards: true });
  return r !== n;
}
var yi = cc;
var lc = () => true;
function as(e, t) {
  let r = e.node;
  return r.printed = true, t.printer.printComment(e, t);
}
function mc(e, t) {
  var m;
  let r = e.node, n = [as(e, t)], { printer: s, originalText: u, locStart: i, locEnd: a } = t;
  if ((m = s.isBlockComment) == null ? void 0 : m.call(s, r)) {
    let y = Z(u, a(r)) ? Z(u, i(r), { backwards: true }) ? F : x : " ";
    n.push(y);
  } else n.push(F);
  let o = Ge(u, We(u, a(r)));
  return o !== false && Z(u, o) && n.push(F), n;
}
function yc(e, t, r) {
  var o;
  let n = e.node, s = as(e, t), { printer: u, originalText: i, locStart: a } = t, p = (o = u.isBlockComment) == null ? void 0 : o.call(u, n);
  if (r != null && r.hasLineSuffix && !(r != null && r.isBlock) || Z(i, a(n), { backwards: true })) {
    let m = yi(i, a(n));
    return { doc: Wn([F, m ? F : "", s]), isBlock: p, hasLineSuffix: true };
  }
  return !p || r != null && r.hasLineSuffix ? { doc: [Wn([" ", s]), Ee], isBlock: p, hasLineSuffix: true } : { doc: [" ", s], isBlock: p, hasLineSuffix: false };
}
function J(e, t, r = {}) {
  let { node: n } = e;
  if (!O(n == null ? void 0 : n.comments)) return "";
  let { indent: s = false, marker: u, filter: i = lc } = r, a = [];
  if (e.each(({ node: o }) => {
    o.leading || o.trailing || o.marker !== u || !i(o) || a.push(as(e, t));
  }, "comments"), a.length === 0) return "";
  let p = b(F, a);
  return s ? f([F, p]) : p;
}
function os(e, t) {
  let r = e.node;
  if (!r) return {};
  let n = t[Symbol.for("printedComments")];
  if ((r.comments || []).filter((p) => !n.has(p)).length === 0) return { leading: "", trailing: "" };
  let u = [], i = [], a;
  return e.each(() => {
    let p = e.node;
    if (n != null && n.has(p)) return;
    let { leading: o, trailing: m } = p;
    o ? u.push(mc(e, t)) : m && (a = yc(e, t, a), i.push(a.doc));
  }, "comments"), { leading: u, trailing: i };
}
function ye(e, t, r) {
  let { leading: n, trailing: s } = os(e, r);
  return !n && !s ? t : or(t, (u) => [n, u, s]);
}
var ps = class extends Error {
  name = "UnexpectedNodeError";
  constructor(t, r, n = "type") {
    super(`Unexpected ${r} node ${n}: ${JSON.stringify(t[n])}.`), this.node = t;
  }
}, Me = ps;
function cs(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var Re, ls = class {
  constructor(t) {
    Ws(this, Re);
    Gs(this, Re, new Set(t));
  }
  getLeadingWhitespaceCount(t) {
    let r = pt(this, Re), n = 0;
    for (let s = 0; s < t.length && r.has(t.charAt(s)); s++) n++;
    return n;
  }
  getTrailingWhitespaceCount(t) {
    let r = pt(this, Re), n = 0;
    for (let s = t.length - 1; s >= 0 && r.has(t.charAt(s)); s--) n++;
    return n;
  }
  getLeadingWhitespace(t) {
    let r = this.getLeadingWhitespaceCount(t);
    return t.slice(0, r);
  }
  getTrailingWhitespace(t) {
    let r = this.getTrailingWhitespaceCount(t);
    return t.slice(t.length - r);
  }
  hasLeadingWhitespace(t) {
    return pt(this, Re).has(t.charAt(0));
  }
  hasTrailingWhitespace(t) {
    return pt(this, Re).has(_(false, t, -1));
  }
  trimStart(t) {
    let r = this.getLeadingWhitespaceCount(t);
    return t.slice(r);
  }
  trimEnd(t) {
    let r = this.getTrailingWhitespaceCount(t);
    return t.slice(0, t.length - r);
  }
  trim(t) {
    return this.trimEnd(this.trimStart(t));
  }
  split(t, r = false) {
    let n = `[${cs([...pt(this, Re)].join(""))}]+`, s = new RegExp(r ? `(${n})` : n, "u");
    return t.split(s);
  }
  hasWhitespaceCharacter(t) {
    let r = pt(this, Re);
    return Array.prototype.some.call(t, (n) => r.has(n));
  }
  hasNonWhitespaceCharacter(t) {
    let r = pt(this, Re);
    return Array.prototype.some.call(t, (n) => !r.has(n));
  }
  isWhitespaceOnly(t) {
    let r = pt(this, Re);
    return Array.prototype.every.call(t, (n) => r.has(n));
  }
};
Re = /* @__PURE__ */ new WeakMap();
var Di = ls;
var Yr = new Di(` 
\r	`), ms = (e) => e === "" || e === x || e === F || e === E;
function Dc(e, t, r) {
  var M, R, j, I, U;
  let { node: n } = e;
  if (n.type === "JSXElement" && Pc(n)) return [r("openingElement"), r("closingElement")];
  let s = n.type === "JSXElement" ? r("openingElement") : r("openingFragment"), u = n.type === "JSXElement" ? r("closingElement") : r("closingFragment");
  if (n.children.length === 1 && n.children[0].type === "JSXExpressionContainer" && (n.children[0].expression.type === "TemplateLiteral" || n.children[0].expression.type === "TaggedTemplateExpression")) return [s, ...e.map(r, "children"), u];
  n.children = n.children.map((P) => kc(P) ? { type: "JSXText", value: " ", raw: " " } : P);
  let i = n.children.some(H), a = n.children.filter((P) => P.type === "JSXExpressionContainer").length > 1, p = n.type === "JSXElement" && n.openingElement.attributes.length > 1, o = re(s) || i || p || a, m = e.parent.rootMarker === "mdx", y = t.singleQuote ? "{' '}" : '{" "}', D = m ? " " : B([y, E], " "), C = ((R = (M = n.openingElement) == null ? void 0 : M.name) == null ? void 0 : R.name) === "fbt", c = fc(e, t, r, D, C), A = n.children.some((P) => cr(P));
  for (let P = c.length - 2; P >= 0; P--) {
    let G = c[P] === "" && c[P + 1] === "", ue = c[P] === F && c[P + 1] === "" && c[P + 2] === F, Q = (c[P] === E || c[P] === F) && c[P + 1] === "" && c[P + 2] === D, gt = c[P] === D && c[P + 1] === "" && (c[P + 2] === E || c[P + 2] === F), Ft = c[P] === D && c[P + 1] === "" && c[P + 2] === D, w = c[P] === E && c[P + 1] === "" && c[P + 2] === F || c[P] === F && c[P + 1] === "" && c[P + 2] === E;
    ue && A || G || Q || Ft || w ? c.splice(P, 2) : gt && c.splice(P + 1, 2);
  }
  for (; c.length > 0 && ms(_(false, c, -1)); ) c.pop();
  for (; c.length > 1 && ms(c[0]) && ms(c[1]); ) c.shift(), c.shift();
  let T = [];
  for (let [P, G] of c.entries()) {
    if (G === D) {
      if (P === 1 && c[P - 1] === "") {
        if (c.length === 2) {
          T.push(y);
          continue;
        }
        T.push([y, F]);
        continue;
      } else if (P === c.length - 1) {
        T.push(y);
        continue;
      } else if (c[P - 1] === "" && c[P - 2] === F) {
        T.push(y);
        continue;
      }
    }
    T.push(G), re(G) && (o = true);
  }
  let S = A ? Rr(T) : l(T, { shouldBreak: true });
  if (((j = t.cursorNode) == null ? void 0 : j.type) === "JSXText" && n.children.includes(t.cursorNode) ? S = [ir, S, ir] : ((I = t.nodeBeforeCursor) == null ? void 0 : I.type) === "JSXText" && n.children.includes(t.nodeBeforeCursor) ? S = [ir, S] : ((U = t.nodeAfterCursor) == null ? void 0 : U.type) === "JSXText" && n.children.includes(t.nodeAfterCursor) && (S = [S, ir]), m) return S;
  let g = l([s, f([F, S]), F, u]);
  return o ? g : Ke([l([s, ...c, u]), g]);
}
function fc(e, t, r, n, s) {
  let u = [];
  return e.each(({ node: i, next: a }) => {
    if (i.type === "JSXText") {
      let p = fe(i);
      if (cr(i)) {
        let o = Yr.split(p, true);
        o[0] === "" && (u.push(""), o.shift(), /\n/u.test(o[0]) ? u.push(Ei(s, o[1], i, a)) : u.push(n), o.shift());
        let m;
        if (_(false, o, -1) === "" && (o.pop(), m = o.pop()), o.length === 0) return;
        for (let [y, D] of o.entries()) y % 2 === 1 ? u.push(x) : u.push(D);
        m !== void 0 ? /\n/u.test(m) ? u.push(Ei(s, _(false, u, -1), i, a)) : u.push(n) : u.push(fi(s, _(false, u, -1), i, a));
      } else /\n/u.test(p) ? p.match(/\n/gu).length > 1 && u.push("", F) : u.push("", n);
    } else {
      let p = r();
      if (u.push(p), a && cr(a)) {
        let m = Yr.trim(fe(a)), [y] = Yr.split(m);
        u.push(fi(s, y, i, a));
      } else u.push(F);
    }
  }, "children"), u;
}
function fi(e, t, r, n) {
  return e ? "" : r.type === "JSXElement" && !r.closingElement || (n == null ? void 0 : n.type) === "JSXElement" && !n.closingElement ? t.length === 1 ? E : F : E;
}
function Ei(e, t, r, n) {
  return e ? F : t.length === 1 ? r.type === "JSXElement" && !r.closingElement || (n == null ? void 0 : n.type) === "JSXElement" && !n.closingElement ? F : E : F;
}
var Ec = /* @__PURE__ */ new Set(["ArrayExpression", "TupleExpression", "JSXAttribute", "JSXElement", "JSXExpressionContainer", "JSXFragment", "ExpressionStatement", "CallExpression", "OptionalCallExpression", "ConditionalExpression", "JsExpressionRoot"]);
function Fc(e, t, r) {
  let { parent: n } = e;
  if (Ec.has(n.type)) return t;
  let s = e.match(void 0, (i) => i.type === "ArrowFunctionExpression", L, (i) => i.type === "JSXExpressionContainer"), u = Be(e, r);
  return l([u ? "" : B("("), f([E, t]), E, u ? "" : B(")")], { shouldBreak: s });
}
function Cc(e, t, r) {
  let { node: n } = e, s = [];
  if (s.push(r("name")), n.value) {
    let u;
    if (te(n.value)) {
      let i = fe(n.value), a = Y(false, Y(false, i.slice(1, -1), "&apos;", "'"), "&quot;", '"'), p = xr(a, t.jsxSingleQuote);
      a = p === '"' ? Y(false, a, '"', "&quot;") : Y(false, a, "'", "&apos;"), u = e.call(() => ye(e, Ie(p + a + p), t), "value");
    } else u = r("value");
    s.push("=", u);
  }
  return s;
}
function Ac(e, t, r) {
  let { node: n } = e, s = (u, i) => u.type === "JSXEmptyExpression" || !d(u) && (X(u) || se(u) || u.type === "ArrowFunctionExpression" || u.type === "AwaitExpression" && (s(u.argument, u) || u.argument.type === "JSXElement") || L(u) || u.type === "ChainExpression" && L(u.expression) || u.type === "FunctionExpression" || u.type === "TemplateLiteral" || u.type === "TaggedTemplateExpression" || u.type === "DoExpression" || H(i) && (u.type === "ConditionalExpression" || De(u)));
  return s(n.expression, e.parent) ? l(["{", r("expression"), ke, "}"]) : l(["{", f([E, r("expression")]), E, ke, "}"]);
}
function Tc(e, t, r) {
  var a, p;
  let { node: n } = e, s = d(n.name) || d(n.typeParameters) || d(n.typeArguments);
  if (n.selfClosing && n.attributes.length === 0 && !s) return ["<", r("name"), n.typeArguments ? r("typeArguments") : r("typeParameters"), " />"];
  if (((a = n.attributes) == null ? void 0 : a.length) === 1 && te(n.attributes[0].value) && !n.attributes[0].value.value.includes(`
`) && !s && !d(n.attributes[0])) return l(["<", r("name"), n.typeArguments ? r("typeArguments") : r("typeParameters"), " ", ...e.map(r, "attributes"), n.selfClosing ? " />" : ">"]);
  let u = (p = n.attributes) == null ? void 0 : p.some((o) => te(o.value) && o.value.value.includes(`
`)), i = t.singleAttributePerLine && n.attributes.length > 1 ? F : x;
  return l(["<", r("name"), n.typeArguments ? r("typeArguments") : r("typeParameters"), f(e.map(() => [i, r()], "attributes")), ...dc(n, t, s)], { shouldBreak: u });
}
function dc(e, t, r) {
  return e.selfClosing ? [x, "/>"] : xc(e, t, r) ? [">"] : [E, ">"];
}
function xc(e, t, r) {
  let n = e.attributes.length > 0 && d(_(false, e.attributes, -1), h.Trailing);
  return e.attributes.length === 0 && !r || (t.bracketSameLine || t.jsxBracketSameLine) && (!r || e.attributes.length > 0) && !n;
}
function hc(e, t, r) {
  let { node: n } = e, s = [];
  s.push("</");
  let u = r("name");
  return d(n.name, h.Leading | h.Line) ? s.push(f([F, u]), F) : d(n.name, h.Leading | h.Block) ? s.push(" ", u) : s.push(u), s.push(">"), s;
}
function gc(e, t) {
  let { node: r } = e, n = d(r), s = d(r, h.Line), u = r.type === "JSXOpeningFragment";
  return [u ? "<" : "</", f([s ? F : n && !u ? " " : "", J(e, t)]), s ? F : "", ">"];
}
function Sc(e, t, r) {
  let n = ye(e, Dc(e, t, r), t);
  return Fc(e, n, t);
}
function Bc(e, t) {
  let { node: r } = e, n = d(r, h.Line);
  return [J(e, t, { indent: n }), n ? F : ""];
}
function bc(e, t, r) {
  let { node: n } = e;
  return ["{", e.call(({ node: s }) => {
    let u = ["...", r()];
    return !d(s) || !Kn(e) ? u : [f([E, ye(e, u, t)]), E];
  }, n.type === "JSXSpreadAttribute" ? "argument" : "expression"), "}"];
}
function Fi(e, t, r) {
  let { node: n } = e;
  if (n.type.startsWith("JSX")) switch (n.type) {
    case "JSXAttribute":
      return Cc(e, t, r);
    case "JSXIdentifier":
      return n.name;
    case "JSXNamespacedName":
      return b(":", [r("namespace"), r("name")]);
    case "JSXMemberExpression":
      return b(".", [r("object"), r("property")]);
    case "JSXSpreadAttribute":
    case "JSXSpreadChild":
      return bc(e, t, r);
    case "JSXExpressionContainer":
      return Ac(e, t, r);
    case "JSXFragment":
    case "JSXElement":
      return Sc(e, t, r);
    case "JSXOpeningElement":
      return Tc(e, t, r);
    case "JSXClosingElement":
      return hc(e, t, r);
    case "JSXOpeningFragment":
    case "JSXClosingFragment":
      return gc(e, t);
    case "JSXEmptyExpression":
      return Bc(e, t);
    case "JSXText":
      throw new Error("JSXText should be handled by JSXElement");
    default:
      throw new Me(n, "JSX");
  }
}
function Pc(e) {
  if (e.children.length === 0) return true;
  if (e.children.length > 1) return false;
  let t = e.children[0];
  return t.type === "JSXText" && !cr(t);
}
function cr(e) {
  return e.type === "JSXText" && (Yr.hasNonWhitespaceCharacter(fe(e)) || !/\n/u.test(fe(e)));
}
function kc(e) {
  return e.type === "JSXExpressionContainer" && te(e.expression) && e.expression.value === " " && !d(e.expression);
}
function Ci(e) {
  let { node: t, parent: r } = e;
  if (!H(t) || !H(r)) return false;
  let { index: n, siblings: s } = e, u;
  for (let i = n; i > 0; i--) {
    let a = s[i - 1];
    if (!(a.type === "JSXText" && !cr(a))) {
      u = a;
      break;
    }
  }
  return (u == null ? void 0 : u.type) === "JSXExpressionContainer" && u.expression.type === "JSXEmptyExpression" && kt(u.expression);
}
function Ic(e) {
  return kt(e.node) || Ci(e);
}
var Hr = Ic;
var Lc = 0;
function Nr(e, t, r) {
  var R;
  let { node: n, parent: s, grandparent: u, key: i } = e, a = i !== "body" && (s.type === "IfStatement" || s.type === "WhileStatement" || s.type === "SwitchStatement" || s.type === "DoWhileStatement"), p = n.operator === "|>" && ((R = e.root.extra) == null ? void 0 : R.__isUsingHackPipeline), o = ys(e, r, t, false, a);
  if (a) return o;
  if (p) return l(o);
  if (L(s) && s.callee === n || s.type === "UnaryExpression" || W(s) && !s.computed) return l([f([E, ...o]), E]);
  let m = s.type === "ReturnStatement" || s.type === "ThrowStatement" || s.type === "JSXExpressionContainer" && u.type === "JSXAttribute" || n.operator !== "|" && s.type === "JsExpressionRoot" || n.type !== "NGPipeExpression" && (s.type === "NGRoot" && t.parser === "__ng_binding" || s.type === "NGMicrosyntaxExpression" && u.type === "NGMicrosyntax" && u.body.length === 1) || n === s.body && s.type === "ArrowFunctionExpression" || n !== s.body && s.type === "ForStatement" || s.type === "ConditionalExpression" && u.type !== "ReturnStatement" && u.type !== "ThrowStatement" && !L(u) || s.type === "TemplateLiteral", y = s.type === "AssignmentExpression" || s.type === "VariableDeclarator" || s.type === "ClassProperty" || s.type === "PropertyDefinition" || s.type === "TSAbstractPropertyDefinition" || s.type === "ClassPrivateProperty" || Ce(s), D = De(n.left) && sr(n.operator, n.left.operator);
  if (m || Yt(n) && !D || !Yt(n) && y) return l(o);
  if (o.length === 0) return "";
  let C = H(n.right), c = o.findIndex((j) => typeof j != "string" && !Array.isArray(j) && j.type === le), A = o.slice(0, c === -1 ? 1 : c + 1), T = o.slice(A.length, C ? -1 : void 0), S = Symbol("logicalChain-" + ++Lc), g = l([...A, f(T)], { id: S });
  if (!C) return g;
  let M = _(false, o, -1);
  return l([g, dt(M, { groupId: S })]);
}
function ys(e, t, r, n, s) {
  var A;
  let { node: u } = e;
  if (!De(u)) return [l(t())];
  let i = [];
  sr(u.operator, u.left.operator) ? i = e.call((T) => ys(T, t, r, true, s), "left") : i.push(l(t("left")));
  let a = Yt(u), p = (u.operator === "|>" || u.type === "NGPipeExpression" || wc(e, r)) && !Oe(r.originalText, u.right), o = u.type === "NGPipeExpression" ? "|" : u.operator, m = u.type === "NGPipeExpression" && u.arguments.length > 0 ? l(f([E, ": ", b([x, ": "], e.map(() => he(2, l(t())), "arguments"))])) : "", y;
  if (a) y = [o, " ", t("right"), m];
  else {
    let S = o === "|>" && ((A = e.root.extra) == null ? void 0 : A.__isUsingHackPipeline) ? e.call((g) => ys(g, t, r, true, s), "right") : t("right");
    y = [p ? x : "", o, p ? " " : x, S, m];
  }
  let { parent: D } = e, C = d(u.left, h.Trailing | h.Line), c = C || !(s && u.type === "LogicalExpression") && D.type !== u.type && u.left.type !== u.type && u.right.type !== u.type;
  if (i.push(p ? "" : " ", c ? l(y, { shouldBreak: C }) : y), n && d(u)) {
    let T = Gt(ye(e, i, r));
    return T.type === Pe ? T.parts : Array.isArray(T) ? T : [T];
  }
  return i;
}
function Yt(e) {
  return e.type !== "LogicalExpression" ? false : !!(se(e.right) && e.right.properties.length > 0 || X(e.right) && e.right.elements.length > 0 || H(e.right));
}
var Ai = (e) => e.type === "BinaryExpression" && e.operator === "|";
function wc(e, t) {
  return (t.parser === "__vue_expression" || t.parser === "__vue_ts_expression") && Ai(e.node) && !e.hasAncestor((r) => !Ai(r) && r.type !== "JsExpressionRoot");
}
function di(e, t, r) {
  let { node: n } = e;
  if (n.type.startsWith("NG")) switch (n.type) {
    case "NGRoot":
      return [r("node"), d(n.node) ? " //" + ct(n.node)[0].value.trimEnd() : ""];
    case "NGPipeExpression":
      return Nr(e, t, r);
    case "NGChainedExpression":
      return l(b([";", x], e.map(() => _c(e) ? r() : ["(", r(), ")"], "expressions")));
    case "NGEmptyExpression":
      return "";
    case "NGMicrosyntax":
      return e.map(() => [e.isFirst ? "" : Ti(e) ? " " : [";", x], r()], "body");
    case "NGMicrosyntaxKey":
      return /^[$_a-z][\w$]*(?:-[$_a-z][\w$])*$/iu.test(n.name) ? n.name : JSON.stringify(n.name);
    case "NGMicrosyntaxExpression":
      return [r("expression"), n.alias === null ? "" : [" as ", r("alias")]];
    case "NGMicrosyntaxKeyedExpression": {
      let { index: s, parent: u } = e, i = Ti(e) || (s === 1 && (n.key.name === "then" || n.key.name === "else" || n.key.name === "as") || (s === 2 || s === 3) && (n.key.name === "else" && u.body[s - 1].type === "NGMicrosyntaxKeyedExpression" && u.body[s - 1].key.name === "then" || n.key.name === "track")) && u.body[0].type === "NGMicrosyntaxExpression";
      return [r("key"), i ? " " : ": ", r("expression")];
    }
    case "NGMicrosyntaxLet":
      return ["let ", r("key"), n.value === null ? "" : [" = ", r("value")]];
    case "NGMicrosyntaxAs":
      return [r("key"), " as ", r("alias")];
    default:
      throw new Me(n, "Angular");
  }
}
function Ti({ node: e, index: t }) {
  return e.type === "NGMicrosyntaxKeyedExpression" && e.key.name === "of" && t === 1;
}
var Oc = v(["CallExpression", "OptionalCallExpression", "AssignmentExpression"]);
function _c({ node: e }) {
  return rr(e, Oc);
}
function Ds(e, t, r) {
  let { node: n } = e;
  return l([b(x, e.map(r, "decorators")), gi(n, t) ? F : x]);
}
function xi(e, t, r) {
  return Si(e.node) ? [b(F, e.map(r, "declaration", "decorators")), F] : "";
}
function hi(e, t, r) {
  let { node: n, parent: s } = e, { decorators: u } = n;
  if (!O(u) || Si(s) || Hr(e)) return "";
  let i = n.type === "ClassExpression" || n.type === "ClassDeclaration" || gi(n, t);
  return [e.key === "declaration" && au(s) ? F : i ? Ee : "", b(x, e.map(r, "decorators")), x];
}
function gi(e, t) {
  return e.decorators.some((r) => Z(t.originalText, k(r)));
}
function Si(e) {
  var r;
  if (e.type !== "ExportDefaultDeclaration" && e.type !== "ExportNamedDeclaration" && e.type !== "DeclareExportDeclaration") return false;
  let t = (r = e.declaration) == null ? void 0 : r.decorators;
  return O(t) && Bt(e, t[0]);
}
var yt = class extends Error {
  name = "ArgExpansionBailout";
};
function jc(e, t, r) {
  let { node: n } = e, s = oe(n);
  if (s.length === 0) return ["(", J(e, t), ")"];
  let u = s.length - 1;
  if (Rc(s)) {
    let y = ["("];
    return qt(e, (D, C) => {
      y.push(r()), C !== u && y.push(", ");
    }), y.push(")"), y;
  }
  let i = false, a = [];
  qt(e, ({ node: y }, D) => {
    let C = r();
    D === u || (pe(y, t) ? (i = true, C = [C, ",", F, F]) : C = [C, ",", x]), a.push(C);
  });
  let p = !t.parser.startsWith("__ng_") && n.type !== "ImportExpression" && ae(t, "all") ? "," : "";
  function o() {
    return l(["(", f([x, ...a]), p, x, ")"], { shouldBreak: true });
  }
  if (i || e.parent.type !== "Decorator" && mu(s)) return o();
  if (Mc(s)) {
    let y = a.slice(1);
    if (y.some(re)) return o();
    let D;
    try {
      D = r(Rn(n, 0), { expandFirstArg: true });
    } catch (C) {
      if (C instanceof yt) return o();
      throw C;
    }
    return re(D) ? [Ee, Ke([["(", l(D, { shouldBreak: true }), ", ", ...y, ")"], o()])] : Ke([["(", D, ", ", ...y, ")"], ["(", l(D, { shouldBreak: true }), ", ", ...y, ")"], o()]);
  }
  if (vc(s, a, t)) {
    let y = a.slice(0, -1);
    if (y.some(re)) return o();
    let D;
    try {
      D = r(Rn(n, -1), { expandLastArg: true });
    } catch (C) {
      if (C instanceof yt) return o();
      throw C;
    }
    return re(D) ? [Ee, Ke([["(", ...y, l(D, { shouldBreak: true }), ")"], o()])] : Ke([["(", ...y, D, ")"], ["(", ...y, l(D, { shouldBreak: true }), ")"], o()]);
  }
  let m = ["(", f([E, ...a]), B(p), E, ")"];
  return Or(e) ? m : l(m, { shouldBreak: a.some(re) || i });
}
function lr(e, t = false) {
  return se(e) && (e.properties.length > 0 || d(e)) || X(e) && (e.elements.length > 0 || d(e)) || e.type === "TSTypeAssertion" && lr(e.expression) || Ae(e) && lr(e.expression) || e.type === "FunctionExpression" || e.type === "ArrowFunctionExpression" && (!e.returnType || !e.returnType.typeAnnotation || e.returnType.typeAnnotation.type !== "TSTypeReference" || Jc(e.body)) && (e.body.type === "BlockStatement" || e.body.type === "ArrowFunctionExpression" && lr(e.body, true) || se(e.body) || X(e.body) || !t && (L(e.body) || e.body.type === "ConditionalExpression") || H(e.body)) || e.type === "DoExpression" || e.type === "ModuleExpression";
}
function vc(e, t, r) {
  var u, i;
  let n = _(false, e, -1);
  if (e.length === 1) {
    let a = _(false, t, -1);
    if ((u = a.label) != null && u.embed && ((i = a.label) == null ? void 0 : i.hug) !== false) return true;
  }
  let s = _(false, e, -2);
  return !d(n, h.Leading) && !d(n, h.Trailing) && lr(n) && (!s || s.type !== n.type) && (e.length !== 2 || s.type !== "ArrowFunctionExpression" || !X(n)) && !(e.length > 1 && fs(n, r));
}
function Mc(e) {
  if (e.length !== 2) return false;
  let [t, r] = e;
  return t.type === "ModuleExpression" && qc(r) ? true : !d(t) && (t.type === "FunctionExpression" || t.type === "ArrowFunctionExpression" && t.body.type === "BlockStatement") && r.type !== "FunctionExpression" && r.type !== "ArrowFunctionExpression" && r.type !== "ConditionalExpression" && bi(r) && !lr(r);
}
function bi(e) {
  if (e.type === "ParenthesizedExpression") return bi(e.expression);
  if (Ae(e) || e.type === "TypeCastExpression") {
    let { typeAnnotation: t } = e;
    if (t.type === "TypeAnnotation" && (t = t.typeAnnotation), t.type === "TSArrayType" && (t = t.elementType, t.type === "TSArrayType" && (t = t.elementType)), t.type === "GenericTypeAnnotation" || t.type === "TSTypeReference") {
      let r = t.typeArguments ?? t.typeParameters;
      (r == null ? void 0 : r.params.length) === 1 && (t = r.params[0]);
    }
    return Jt(t) && be(e.expression, 1);
  }
  return lt(e) && oe(e).length > 1 ? false : De(e) ? be(e.left, 1) && be(e.right, 1) : vn(e) || be(e);
}
function Rc(e) {
  return e.length === 2 ? Bi(e, 0) : e.length === 3 ? e[0].type === "Identifier" && Bi(e, 1) : false;
}
function Bi(e, t) {
  let r = e[t], n = e[t + 1];
  return r.type === "ArrowFunctionExpression" && z(r).length === 0 && r.body.type === "BlockStatement" && n.type === "ArrayExpression" && !e.some((s) => d(s));
}
function Jc(e) {
  return e.type === "BlockStatement" && (e.body.some((t) => t.type !== "EmptyStatement") || d(e, h.Dangling));
}
function qc(e) {
  return e.type === "ObjectExpression" && e.properties.length === 1 && Ce(e.properties[0]) && e.properties[0].key.type === "Identifier" && e.properties[0].key.name === "type" && te(e.properties[0].value) && e.properties[0].value.value === "module";
}
var mr = jc;
var Wc = (e) => ((e.type === "ChainExpression" || e.type === "TSNonNullExpression") && (e = e.expression), L(e) && oe(e).length > 0);
function Pi(e, t, r) {
  var o;
  let n = r("object"), s = Es(e, t, r), { node: u } = e, i = e.findAncestor((m) => !(W(m) || m.type === "TSNonNullExpression")), a = e.findAncestor((m) => !(m.type === "ChainExpression" || m.type === "TSNonNullExpression")), p = i && (i.type === "NewExpression" || i.type === "BindExpression" || i.type === "AssignmentExpression" && i.left.type !== "Identifier") || u.computed || u.object.type === "Identifier" && u.property.type === "Identifier" && !W(a) || (a.type === "AssignmentExpression" || a.type === "VariableDeclarator") && (Wc(u.object) || ((o = n.label) == null ? void 0 : o.memberChain));
  return st(n.label, [n, p ? s : l(f([E, s]))]);
}
function Es(e, t, r) {
  let n = r("property"), { node: s } = e, u = $(e);
  return s.computed ? !s.property || Fe(s.property) ? [u, "[", n, "]"] : l([u, "[", f([E, n]), E, "]"]) : [u, ".", n];
}
function ki(e, t, r) {
  if (e.node.type === "ChainExpression") return e.call(() => ki(e, t, r), "expression");
  let { parent: n } = e, s = !n || n.type === "ExpressionStatement", u = [];
  function i(w) {
    let { originalText: ne } = t, de = ut(ne, k(w));
    return ne.charAt(de) === ")" ? de !== false && jt(ne, de + 1) : pe(w, t);
  }
  function a() {
    let { node: w } = e;
    if (w.type === "ChainExpression") return e.call(a, "expression");
    if (L(w) && (At(w.callee) || L(w.callee))) {
      let ne = i(w);
      u.unshift({ node: w, hasTrailingEmptyLine: ne, printed: [ye(e, [$(e), Qe(e, t, r), mr(e, t, r)], t), ne ? F : ""] }), e.call(a, "callee");
    } else At(w) ? (u.unshift({ node: w, needsParens: Be(e, t), printed: ye(e, W(w) ? Es(e, t, r) : Vr(e, t, r), t) }), e.call(a, "object")) : w.type === "TSNonNullExpression" ? (u.unshift({ node: w, printed: ye(e, "!", t) }), e.call(a, "expression")) : u.unshift({ node: w, printed: r() });
  }
  let { node: p } = e;
  u.unshift({ node: p, printed: [$(e), Qe(e, t, r), mr(e, t, r)] }), p.callee && e.call(a, "callee");
  let o = [], m = [u[0]], y = 1;
  for (; y < u.length && (u[y].node.type === "TSNonNullExpression" || L(u[y].node) || W(u[y].node) && u[y].node.computed && Fe(u[y].node.property)); ++y) m.push(u[y]);
  if (!L(u[0].node)) for (; y + 1 < u.length && (At(u[y].node) && At(u[y + 1].node)); ++y) m.push(u[y]);
  o.push(m), m = [];
  let D = false;
  for (; y < u.length; ++y) {
    if (D && At(u[y].node)) {
      if (u[y].node.computed && Fe(u[y].node.property)) {
        m.push(u[y]);
        continue;
      }
      o.push(m), m = [], D = false;
    }
    (L(u[y].node) || u[y].node.type === "ImportExpression") && (D = true), m.push(u[y]), d(u[y].node, h.Trailing) && (o.push(m), m = [], D = false);
  }
  m.length > 0 && o.push(m);
  function C(w) {
    return /^[A-Z]|^[$_]+$/u.test(w);
  }
  function c(w) {
    return w.length <= t.tabWidth;
  }
  function A(w) {
    var ot;
    let ne = (ot = w[1][0]) == null ? void 0 : ot.node.computed;
    if (w[0].length === 1) {
      let St = w[0][0].node;
      return St.type === "ThisExpression" || St.type === "Identifier" && (C(St.name) || s && c(St.name) || ne);
    }
    let de = _(false, w[0], -1).node;
    return W(de) && de.property.type === "Identifier" && (C(de.property.name) || ne);
  }
  let T = o.length >= 2 && !d(o[1][0].node) && A(o);
  function S(w) {
    let ne = w.map((de) => de.printed);
    return w.length > 0 && _(false, w, -1).needsParens ? ["(", ...ne, ")"] : ne;
  }
  function g(w) {
    return w.length === 0 ? "" : f([F, b(F, w.map(S))]);
  }
  let M = o.map(S), R = M, j = T ? 3 : 2, I = o.flat(), U = I.slice(1, -1).some((w) => d(w.node, h.Leading)) || I.slice(0, -1).some((w) => d(w.node, h.Trailing)) || o[j] && d(o[j][0].node, h.Leading);
  if (o.length <= j && !U && !o.some((w) => _(false, w, -1).hasTrailingEmptyLine)) return Or(e) ? R : l(R);
  let P = _(false, o[T ? 1 : 0], -1).node, G = !L(P) && i(P), ue = [S(o[0]), T ? o.slice(1, 2).map(S) : "", G ? F : "", g(o.slice(T ? 2 : 1))], Q = u.map(({ node: w }) => w).filter(L);
  function gt() {
    let w = _(false, _(false, o, -1), -1).node, ne = _(false, M, -1);
    return L(w) && re(ne) && Q.slice(0, -1).some((de) => de.arguments.some(Mt));
  }
  let Ft;
  return U || Q.length > 2 && Q.some((w) => !w.arguments.every((ne) => be(ne))) || M.slice(0, -1).some(re) || gt() ? Ft = l(ue) : Ft = [re(R) || G ? Ee : "", Ke([R, ue])], st({ memberChain: true }, Ft);
}
var Ii = ki;
function $r(e, t, r) {
  var m;
  let { node: n } = e, s = n.type === "NewExpression", u = n.type === "ImportExpression", i = $(e), a = oe(n), p = a.length === 1 && Lr(a[0], t.originalText);
  if (p || Gc(e) || Pt(n, e.parent)) {
    let y = [];
    if (qt(e, () => {
      y.push(r());
    }), !(p && ((m = y[0].label) != null && m.embed))) return [s ? "new " : "", Li(e, r), i, Qe(e, t, r), "(", b(", ", y), ")"];
  }
  if (!u && !s && At(n.callee) && !e.call((y) => Be(y, t), "callee", ...n.callee.type === "ChainExpression" ? ["expression"] : [])) return Ii(e, t, r);
  let o = [s ? "new " : "", Li(e, r), i, Qe(e, t, r), mr(e, t, r)];
  return u || L(n.callee) ? l(o) : o;
}
function Li(e, t) {
  let { node: r } = e;
  return r.type === "ImportExpression" ? `import${r.phase ? `.${r.phase}` : ""}` : t("callee");
}
function Gc(e) {
  let { node: t } = e;
  if (t.type !== "CallExpression" || t.optional || t.callee.type !== "Identifier") return false;
  let r = oe(t);
  return t.callee.name === "require" ? r.length === 1 && te(r[0]) || r.length > 1 : t.callee.name === "define" && e.parent.type === "ExpressionStatement" ? r.length === 1 || r.length === 2 && r[0].type === "ArrayExpression" || r.length === 3 && te(r[0]) && r[1].type === "ArrayExpression" : false;
}
function xt(e, t, r, n, s, u) {
  let i = Uc(e, t, r, n, u), a = u ? r(u, { assignmentLayout: i }) : "";
  switch (i) {
    case "break-after-operator":
      return l([l(n), s, l(f([x, a]))]);
    case "never-break-after-operator":
      return l([l(n), s, " ", a]);
    case "fluid": {
      let p = Symbol("assignment");
      return l([l(n), s, l(f(x), { id: p }), ke, dt(a, { groupId: p })]);
    }
    case "break-lhs":
      return l([n, s, " ", l(a)]);
    case "chain":
      return [l(n), s, x, a];
    case "chain-tail":
      return [l(n), s, f([x, a])];
    case "chain-tail-arrow-chain":
      return [l(n), s, a];
    case "only-left":
      return n;
  }
}
function Oi(e, t, r) {
  let { node: n } = e;
  return xt(e, t, r, r("left"), [" ", n.operator], "right");
}
function _i(e, t, r) {
  return xt(e, t, r, r("id"), " =", "init");
}
function Uc(e, t, r, n, s) {
  let { node: u } = e, i = u[s];
  if (!i) return "only-left";
  let a = !Kr(i);
  if (e.match(Kr, ji, (D) => !a || D.type !== "ExpressionStatement" && D.type !== "VariableDeclaration")) return a ? i.type === "ArrowFunctionExpression" && i.body.type === "ArrowFunctionExpression" ? "chain-tail-arrow-chain" : "chain-tail" : "chain";
  if (!a && Kr(i.right) || Oe(t.originalText, i)) return "break-after-operator";
  if (u.type === "ImportAttribute" || i.type === "CallExpression" && i.callee.name === "require" || t.parser === "json5" || t.parser === "jsonc" || t.parser === "json") return "never-break-after-operator";
  let m = bu(n);
  if (Yc(u) || $c(u) || Fs(u) && m) return "break-lhs";
  let y = Qc(u, n, t);
  return e.call(() => Xc(e, t, r, y), s) ? "break-after-operator" : Hc(u) ? "break-lhs" : !m && (y || i.type === "TemplateLiteral" || i.type === "TaggedTemplateExpression" || i.type === "BooleanLiteral" || Fe(i) || i.type === "ClassExpression") ? "never-break-after-operator" : "fluid";
}
function Xc(e, t, r, n) {
  let s = e.node;
  if (De(s) && !Yt(s)) return true;
  switch (s.type) {
    case "StringLiteralTypeAnnotation":
    case "SequenceExpression":
      return true;
    case "TSConditionalType":
    case "ConditionalTypeAnnotation":
      if (!t.experimentalTernaries && !el(s)) break;
      return true;
    case "ConditionalExpression": {
      if (!t.experimentalTernaries) {
        let { test: o } = s;
        return De(o) && !Yt(o);
      }
      let { consequent: a, alternate: p } = s;
      return a.type === "ConditionalExpression" || p.type === "ConditionalExpression";
    }
    case "ClassExpression":
      return O(s.decorators);
  }
  if (n) return false;
  let u = s, i = [];
  for (; ; ) if (u.type === "UnaryExpression" || u.type === "AwaitExpression" || u.type === "YieldExpression" && u.argument !== null) u = u.argument, i.push("argument");
  else if (u.type === "TSNonNullExpression") u = u.expression, i.push("expression");
  else break;
  return !!(te(u) || e.call(() => vi(e, t, r), ...i));
}
function Yc(e) {
  if (ji(e)) {
    let t = e.left || e.id;
    return t.type === "ObjectPattern" && t.properties.length > 2 && t.properties.some((r) => {
      var n;
      return Ce(r) && (!r.shorthand || ((n = r.value) == null ? void 0 : n.type) === "AssignmentPattern");
    });
  }
  return false;
}
function Kr(e) {
  return e.type === "AssignmentExpression";
}
function ji(e) {
  return Kr(e) || e.type === "VariableDeclarator";
}
function Hc(e) {
  let t = Vc(e);
  if (O(t)) {
    let r = e.type === "TSTypeAliasDeclaration" ? "constraint" : "bound";
    if (t.length > 1 && t.some((n) => n[r] || n.default)) return true;
  }
  return false;
}
var Nc = v(["TSTypeAliasDeclaration", "TypeAlias"]);
function Vc(e) {
  var t;
  if (Nc(e)) return (t = e.typeParameters) == null ? void 0 : t.params;
}
function $c(e) {
  if (e.type !== "VariableDeclarator") return false;
  let { typeAnnotation: t } = e.id;
  if (!t || !t.typeAnnotation) return false;
  let r = wi(t.typeAnnotation);
  return O(r) && r.length > 1 && r.some((n) => O(wi(n)) || n.type === "TSConditionalType");
}
function Fs(e) {
  var t;
  return e.type === "VariableDeclarator" && ((t = e.init) == null ? void 0 : t.type) === "ArrowFunctionExpression";
}
var Kc = v(["TSTypeReference", "GenericTypeAnnotation"]);
function wi(e) {
  var t;
  if (Kc(e)) return (t = e.typeArguments ?? e.typeParameters) == null ? void 0 : t.params;
}
function vi(e, t, r, n = false) {
  var i;
  let { node: s } = e, u = () => vi(e, t, r, true);
  if (s.type === "ChainExpression" || s.type === "TSNonNullExpression") return e.call(u, "expression");
  if (L(s)) {
    if ((i = $r(e, t, r).label) != null && i.memberChain) return false;
    let p = oe(s);
    return !(p.length === 0 || p.length === 1 && nr(p[0], t)) || zc(s, r) ? false : e.call(u, "callee");
  }
  return W(s) ? e.call(u, "object") : n && (s.type === "Identifier" || s.type === "ThisExpression");
}
function Qc(e, t, r) {
  return Ce(e) ? (t = Gt(t), typeof t == "string" && ze(t) < r.tabWidth + 3) : false;
}
function zc(e, t) {
  let r = Zc(e);
  if (O(r)) {
    if (r.length > 1) return true;
    if (r.length === 1) {
      let s = r[0];
      if (Ue(s) || _r(s) || s.type === "TSTypeLiteral" || s.type === "ObjectTypeAnnotation") return true;
    }
    let n = e.typeParameters ? "typeParameters" : "typeArguments";
    if (re(t(n))) return true;
  }
  return false;
}
function Zc(e) {
  var t;
  return (t = e.typeParameters ?? e.typeArguments) == null ? void 0 : t.params;
}
function el(e) {
  function t(r) {
    switch (r.type) {
      case "FunctionTypeAnnotation":
      case "GenericTypeAnnotation":
      case "TSFunctionType":
        return !!r.typeParameters;
      case "TSTypeReference":
        return !!(r.typeArguments ?? r.typeParameters);
      default:
        return false;
    }
  }
  return t(e.checkType) || t(e.extendsType);
}
function Je(e, t, r, n, s) {
  let u = e.node, i = z(u), a = s ? Qe(e, r, t) : "";
  if (i.length === 0) return [a, "(", J(e, r, { filter: (c) => ge(r.originalText, k(c)) === ")" }), ")"];
  let { parent: p } = e, o = Pt(p), m = Cs(u), y = [];
  if (Eu(e, (c, A) => {
    let T = A === i.length - 1;
    T && u.rest && y.push("..."), y.push(t()), !T && (y.push(","), o || m ? y.push(" ") : pe(i[A], r) ? y.push(F, F) : y.push(x));
  }), n && !rl(e)) {
    if (re(a) || re(y)) throw new yt();
    return l([ar(a), "(", ar(y), ")"]);
  }
  let D = i.every((c) => !O(c.decorators));
  return m && D ? [a, "(", ...y, ")"] : o ? [a, "(", ...y, ")"] : (Ir(p) || pu(p) || p.type === "TypeAlias" || p.type === "UnionTypeAnnotation" || p.type === "IntersectionTypeAnnotation" || p.type === "FunctionTypeAnnotation" && p.returnType === u) && i.length === 1 && i[0].name === null && u.this !== i[0] && i[0].typeAnnotation && u.typeParameters === null && Jt(i[0].typeAnnotation) && !u.rest ? r.arrowParens === "always" || u.type === "HookTypeAnnotation" ? ["(", ...y, ")"] : y : [a, "(", f([E, ...y]), B(!fu(u) && ae(r, "all") ? "," : ""), E, ")"];
}
function Cs(e) {
  if (!e) return false;
  let t = z(e);
  if (t.length !== 1) return false;
  let [r] = t;
  return !d(r) && (r.type === "ObjectPattern" || r.type === "ArrayPattern" || r.type === "Identifier" && r.typeAnnotation && (r.typeAnnotation.type === "TypeAnnotation" || r.typeAnnotation.type === "TSTypeAnnotation") && we(r.typeAnnotation.typeAnnotation) || r.type === "FunctionTypeParam" && we(r.typeAnnotation) && r !== e.rest || r.type === "AssignmentPattern" && (r.left.type === "ObjectPattern" || r.left.type === "ArrayPattern") && (r.right.type === "Identifier" || se(r.right) && r.right.properties.length === 0 || X(r.right) && r.right.elements.length === 0));
}
function tl(e) {
  let t;
  return e.returnType ? (t = e.returnType, t.typeAnnotation && (t = t.typeAnnotation)) : e.typeAnnotation && (t = e.typeAnnotation), t;
}
function at(e, t) {
  var s;
  let r = tl(e);
  if (!r) return false;
  let n = (s = e.typeParameters) == null ? void 0 : s.params;
  if (n) {
    if (n.length > 1) return false;
    if (n.length === 1) {
      let u = n[0];
      if (u.constraint || u.default) return false;
    }
  }
  return z(e).length === 1 && (we(r) || re(t));
}
function rl(e) {
  return e.match((t) => t.type === "ArrowFunctionExpression" && t.body.type === "BlockStatement", (t, r) => {
    if (t.type === "CallExpression" && r === "arguments" && t.arguments.length === 1 && t.callee.type === "CallExpression") {
      let n = t.callee.callee;
      return n.type === "Identifier" || n.type === "MemberExpression" && !n.computed && n.object.type === "Identifier" && n.property.type === "Identifier";
    }
    return false;
  }, (t, r) => t.type === "VariableDeclarator" && r === "init" || t.type === "ExportDefaultDeclaration" && r === "declaration" || t.type === "TSExportAssignment" && r === "expression" || t.type === "AssignmentExpression" && r === "right" && t.left.type === "MemberExpression" && t.left.object.type === "Identifier" && t.left.object.name === "module" && t.left.property.type === "Identifier" && t.left.property.name === "exports", (t) => t.type !== "VariableDeclaration" || t.kind === "const" && t.declarations.length === 1);
}
function Mi(e) {
  let t = z(e);
  return t.length > 1 && t.some((r) => r.type === "TSParameterProperty");
}
var nl = v(["VoidTypeAnnotation", "TSVoidKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword"]), sl = v(["ObjectTypeAnnotation", "TSTypeLiteral", "GenericTypeAnnotation", "TSTypeReference"]);
function ul(e) {
  let { types: t } = e;
  if (t.some((n) => d(n))) return false;
  let r = t.find((n) => sl(n));
  return r ? t.every((n) => n === r || nl(n)) : false;
}
function As(e) {
  return Jt(e) || we(e) ? true : Ue(e) ? ul(e) : false;
}
function Ri(e, t, r) {
  let n = t.semi ? ";" : "", { node: s } = e, u = [K(e), "opaque type ", r("id"), r("typeParameters")];
  return s.supertype && u.push(": ", r("supertype")), s.impltype && u.push(" = ", r("impltype")), u.push(n), u;
}
function Qr(e, t, r) {
  let n = t.semi ? ";" : "", { node: s } = e, u = [K(e)];
  u.push("type ", r("id"), r("typeParameters"));
  let i = s.type === "TSTypeAliasDeclaration" ? "typeAnnotation" : "right";
  return [xt(e, t, r, u, " =", i), n];
}
function zr(e, t, r) {
  let n = false;
  return l(e.map(({ isFirst: s, previous: u, node: i, index: a }) => {
    let p = r();
    if (s) return p;
    let o = we(i), m = we(u);
    return m && o ? [" & ", n ? f(p) : p] : !m && !o ? f([" &", x, p]) : (a > 1 && (n = true), [" & ", a > 1 ? f(p) : p]);
  }, "types"));
}
function Zr(e, t, r) {
  let { node: n } = e, { parent: s } = e, u = s.type !== "TypeParameterInstantiation" && (s.type !== "TSConditionalType" || !t.experimentalTernaries) && (s.type !== "ConditionalTypeAnnotation" || !t.experimentalTernaries) && s.type !== "TSTypeParameterInstantiation" && s.type !== "GenericTypeAnnotation" && s.type !== "TSTypeReference" && s.type !== "TSTypeAssertion" && s.type !== "TupleTypeAnnotation" && s.type !== "TSTupleType" && !(s.type === "FunctionTypeParam" && !s.name && e.grandparent.this !== s) && !((s.type === "TypeAlias" || s.type === "VariableDeclarator" || s.type === "TSTypeAliasDeclaration") && Oe(t.originalText, n)), i = As(n), a = e.map((m) => {
    let y = r();
    return i || (y = he(2, y)), ye(m, y, t);
  }, "types");
  if (i) return b(" | ", a);
  let p = u && !Oe(t.originalText, n), o = [B([p ? x : "", "| "]), b([x, "| "], a)];
  return Be(e, t) ? l([f(o), E]) : (s.type === "TupleTypeAnnotation" || s.type === "TSTupleType") && s[s.type === "TupleTypeAnnotation" && s.types ? "types" : "elementTypes"].length > 1 ? l([f([B(["(", E]), o]), E, B(")")]) : l(u ? f(o) : o);
}
function il(e) {
  var n;
  let { node: t, parent: r } = e;
  return t.type === "FunctionTypeAnnotation" && (Ir(r) || !((r.type === "ObjectTypeProperty" || r.type === "ObjectTypeInternalSlot") && !r.variance && !r.optional && Bt(r, t) || r.type === "ObjectTypeCallProperty" || ((n = e.getParentNode(2)) == null ? void 0 : n.type) === "DeclareFunction"));
}
function en(e, t, r) {
  let { node: n } = e, s = [Ht(e)];
  (n.type === "TSConstructorType" || n.type === "TSConstructSignatureDeclaration") && s.push("new ");
  let u = Je(e, r, t, false, true), i = [];
  return n.type === "FunctionTypeAnnotation" ? i.push(il(e) ? " => " : ": ", r("returnType")) : i.push(N(e, r, n.returnType ? "returnType" : "typeAnnotation")), at(n, i) && (u = l(u)), s.push(u, i), l(s);
}
function tn(e, t, r) {
  return [r("objectType"), $(e), "[", r("indexType"), "]"];
}
function rn(e, t, r) {
  return ["infer ", r("typeParameter")];
}
function Ts(e, t, r) {
  let { node: n } = e;
  return [n.postfix ? "" : r, N(e, t), n.postfix ? r : ""];
}
function nn(e, t, r) {
  let { node: n } = e;
  return ["...", ...n.type === "TupleTypeSpreadElement" && n.label ? [r("label"), ": "] : [], r("typeAnnotation")];
}
function sn(e, t, r) {
  let { node: n } = e;
  return [n.variance ? r("variance") : "", r("label"), n.optional ? "?" : "", ": ", r("elementType")];
}
var al = /* @__PURE__ */ new WeakSet();
function N(e, t, r = "typeAnnotation") {
  let { node: { [r]: n } } = e;
  if (!n) return "";
  let s = false;
  if (n.type === "TSTypeAnnotation" || n.type === "TypeAnnotation") {
    let u = e.call(Ji, r);
    (u === "=>" || u === ":" && d(n, h.Leading)) && (s = true), al.add(n);
  }
  return s ? [" ", t(r)] : t(r);
}
var Ji = (e) => e.match((t) => t.type === "TSTypeAnnotation", (t, r) => (r === "returnType" || r === "typeAnnotation") && (t.type === "TSFunctionType" || t.type === "TSConstructorType")) ? "=>" : e.match((t) => t.type === "TSTypeAnnotation", (t, r) => r === "typeAnnotation" && (t.type === "TSJSDocNullableType" || t.type === "TSJSDocNonNullableType" || t.type === "TSTypePredicate")) || e.match((t) => t.type === "TypeAnnotation", (t, r) => r === "typeAnnotation" && t.type === "Identifier", (t, r) => r === "id" && t.type === "DeclareFunction") || e.match((t) => t.type === "TypeAnnotation", (t, r) => r === "typeAnnotation" && t.type === "Identifier", (t, r) => r === "id" && t.type === "DeclareHook") || e.match((t) => t.type === "TypeAnnotation", (t, r) => r === "bound" && t.type === "TypeParameter" && t.usesExtendsBound) ? "" : ":";
function un(e, t, r) {
  let n = Ji(e);
  return n ? [n, " ", r("typeAnnotation")] : r("typeAnnotation");
}
function an(e) {
  return [e("elementType"), "[]"];
}
function on({ node: e }, t) {
  let r = e.type === "TSTypeQuery" ? "exprName" : "argument", n = e.type === "TypeofTypeAnnotation" || e.typeArguments ? "typeArguments" : "typeParameters";
  return ["typeof ", t(r), t(n)];
}
function pn(e, t) {
  let { node: r } = e;
  return [r.type === "TSTypePredicate" && r.asserts ? "asserts " : r.type === "TypePredicate" && r.kind ? `${r.kind} ` : "", t("parameterName"), r.typeAnnotation ? [" is ", N(e, t)] : ""];
}
function $(e) {
  let { node: t } = e;
  return !t.optional || t.type === "Identifier" && t === e.parent.key ? "" : L(t) || W(t) && t.computed || t.type === "OptionalIndexedAccessType" ? "?." : "?";
}
function cn(e) {
  return e.node.definite || e.match(void 0, (t, r) => r === "id" && t.type === "VariableDeclarator" && t.definite) ? "!" : "";
}
var ol = /* @__PURE__ */ new Set(["DeclareClass", "DeclareComponent", "DeclareFunction", "DeclareHook", "DeclareVariable", "DeclareExportDeclaration", "DeclareExportAllDeclaration", "DeclareOpaqueType", "DeclareTypeAlias", "DeclareEnum", "DeclareInterface"]);
function K(e) {
  let { node: t } = e;
  return t.declare || ol.has(t.type) && e.parent.type !== "DeclareExportDeclaration" ? "declare " : "";
}
var pl = /* @__PURE__ */ new Set(["TSAbstractMethodDefinition", "TSAbstractPropertyDefinition", "TSAbstractAccessorProperty"]);
function Ht({ node: e }) {
  return e.abstract || pl.has(e.type) ? "abstract " : "";
}
function Qe(e, t, r) {
  let n = e.node;
  return n.typeArguments ? r("typeArguments") : n.typeParameters ? r("typeParameters") : "";
}
function Vr(e, t, r) {
  return ["::", r("callee")];
}
function Dt(e, t, r) {
  return e.type === "EmptyStatement" ? ";" : e.type === "BlockStatement" || r ? [" ", t] : f([x, t]);
}
function ln(e, t) {
  return ["...", t("argument"), N(e, t)];
}
function Nt(e) {
  return e.accessibility ? e.accessibility + " " : "";
}
function cl(e, t, r, n) {
  let { node: s } = e, u = s.inexact ? "..." : "";
  return d(s, h.Dangling) ? l([r, u, J(e, t, { indent: true }), E, n]) : [r, u, n];
}
function Vt(e, t, r) {
  let { node: n } = e, s = [], u = n.type === "TupleExpression" ? "#[" : "[", i = "]", a = n.type === "TupleTypeAnnotation" && n.types ? "types" : n.type === "TSTupleType" || n.type === "TupleTypeAnnotation" ? "elementTypes" : "elements", p = n[a];
  if (p.length === 0) s.push(cl(e, t, u, i));
  else {
    let o = _(false, p, -1), m = (o == null ? void 0 : o.type) !== "RestElement" && !n.inexact, y = o === null, D = Symbol("array"), C = !t.__inJestEach && p.length > 1 && p.every((T, S, g) => {
      let M = T == null ? void 0 : T.type;
      if (!X(T) && !se(T)) return false;
      let R = g[S + 1];
      if (R && M !== R.type) return false;
      let j = X(T) ? "elements" : "properties";
      return T[j] && T[j].length > 1;
    }), c = fs(n, t), A = m ? y ? "," : ae(t) ? c ? B(",", "", { groupId: D }) : B(",") : "" : "";
    s.push(l([u, f([E, c ? ml(e, t, r, A) : [ll(e, t, a, n.inexact, r), A], J(e, t)]), E, i], { shouldBreak: C, id: D }));
  }
  return s.push($(e), N(e, r)), s;
}
function fs(e, t) {
  return X(e) && e.elements.length > 1 && e.elements.every((r) => r && (Fe(r) || jn(r) && !d(r.argument)) && !d(r, h.Trailing | h.Line, (n) => !Z(t.originalText, q(n), { backwards: true })));
}
function qi({ node: e }, { originalText: t }) {
  let r = (s) => Ot(t, _t(t, s)), n = (s) => t[s] === "," ? s : n(r(s + 1));
  return jt(t, n(k(e)));
}
function ll(e, t, r, n, s) {
  let u = [];
  return e.each(({ node: i, isLast: a }) => {
    u.push(i ? l(s()) : ""), (!a || n) && u.push([",", x, i && qi(e, t) ? E : ""]);
  }, r), n && u.push("..."), u;
}
function ml(e, t, r, n) {
  let s = [];
  return e.each(({ isLast: u, next: i }) => {
    s.push([r(), u ? n : ","]), u || s.push(qi(e, t) ? [F, F] : d(i, h.Leading | h.Line) ? F : x);
  }, "elements"), Rr(s);
}
var yl = /^[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC][\$0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]*$/, Dl = (e) => yl.test(e), Wi = Dl;
function fl(e) {
  return e.length === 1 ? e : e.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(?=\d)/u, "$1$2").replace(/^([+-]?[\d.]+)e[+-]?0+$/u, "$1").replace(/^([+-])?\./u, "$10.").replace(/(\.\d+?)0+(?=e|$)/u, "$1").replace(/\.(?=e|$)/u, "");
}
var ft = fl;
var mn = /* @__PURE__ */ new WeakMap();
function Ui(e) {
  return /^(?:\d+|\d+\.\d+)$/u.test(e);
}
function Gi(e, t) {
  return t.parser === "json" || t.parser === "jsonc" || !te(e.key) || Ze(fe(e.key), t).slice(1, -1) !== e.key.value ? false : !!(Wi(e.key.value) && !(t.parser === "babel-ts" && e.type === "ClassProperty" || t.parser === "typescript" && e.type === "PropertyDefinition") || Ui(e.key.value) && String(Number(e.key.value)) === e.key.value && e.type !== "ImportAttribute" && (t.parser === "babel" || t.parser === "acorn" || t.parser === "espree" || t.parser === "meriyah" || t.parser === "__babel_estree"));
}
function El(e, t) {
  let { key: r } = e.node;
  return (r.type === "Identifier" || Fe(r) && Ui(ft(fe(r))) && String(r.value) === ft(fe(r)) && !(t.parser === "typescript" || t.parser === "babel-ts")) && (t.parser === "json" || t.parser === "jsonc" || t.quoteProps === "consistent" && mn.get(e.parent));
}
function Et(e, t, r) {
  let { node: n } = e;
  if (n.computed) return ["[", r("key"), "]"];
  let { parent: s } = e, { key: u } = n;
  if (t.quoteProps === "consistent" && !mn.has(s)) {
    let i = e.siblings.some((a) => !a.computed && te(a.key) && !Gi(a, t));
    mn.set(s, i);
  }
  if (El(e, t)) {
    let i = Ze(JSON.stringify(u.type === "Identifier" ? u.name : u.value.toString()), t);
    return e.call((a) => ye(a, i, t), "key");
  }
  return Gi(n, t) && (t.quoteProps === "as-needed" || t.quoteProps === "consistent" && !mn.get(s)) ? e.call((i) => ye(i, /^\d/u.test(u.value) ? ft(u.value) : u.value, t), "key") : r("key");
}
function yn(e, t, r) {
  let { node: n } = e;
  return n.shorthand ? r("value") : xt(e, t, r, Et(e, t, r), ":", "value");
}
var Fl = ({ node: e, key: t, parent: r }) => t === "value" && e.type === "FunctionExpression" && (r.type === "ObjectMethod" || r.type === "ClassMethod" || r.type === "ClassPrivateMethod" || r.type === "MethodDefinition" || r.type === "TSAbstractMethodDefinition" || r.type === "TSDeclareMethod" || r.type === "Property" && bt(r));
function Dn(e, t, r, n) {
  if (Fl(e)) return fn(e, r, t);
  let { node: s } = e, u = false;
  if ((s.type === "FunctionDeclaration" || s.type === "FunctionExpression") && (n != null && n.expandLastArg)) {
    let { parent: m } = e;
    L(m) && (oe(m).length > 1 || z(s).every((y) => y.type === "Identifier" && !y.typeAnnotation)) && (u = true);
  }
  let i = [K(e), s.async ? "async " : "", `function${s.generator ? "*" : ""} `, s.id ? t("id") : ""], a = Je(e, t, r, u), p = $t(e, t), o = at(s, p);
  return i.push(Qe(e, r, t), l([o ? l(a) : a, p]), s.body ? " " : "", t("body")), r.semi && (s.declare || !s.body) && i.push(";"), i;
}
function yr(e, t, r) {
  let { node: n } = e, { kind: s } = n, u = n.value || n, i = [];
  return !s || s === "init" || s === "method" || s === "constructor" ? u.async && i.push("async ") : (vt.ok(s === "get" || s === "set"), i.push(s, " ")), u.generator && i.push("*"), i.push(Et(e, t, r), n.optional || n.key.optional ? "?" : "", n === u ? fn(e, t, r) : r("value")), i;
}
function fn(e, t, r) {
  let { node: n } = e, s = Je(e, r, t), u = $t(e, r), i = Mi(n), a = at(n, u), p = [Qe(e, t, r), l([i ? l(s, { shouldBreak: true }) : a ? l(s) : s, u])];
  return n.body ? p.push(" ", r("body")) : p.push(t.semi ? ";" : ""), p;
}
function Cl(e) {
  let t = z(e);
  return t.length === 1 && !e.typeParameters && !d(e, h.Dangling) && t[0].type === "Identifier" && !t[0].typeAnnotation && !d(t[0]) && !t[0].optional && !e.predicate && !e.returnType;
}
function En(e, t) {
  if (t.arrowParens === "always") return false;
  if (t.arrowParens === "avoid") {
    let { node: r } = e;
    return Cl(r);
  }
  return false;
}
function $t(e, t) {
  let { node: r } = e, s = [N(e, t, "returnType")];
  return r.predicate && s.push(t("predicate")), s;
}
function Xi(e, t, r) {
  let { node: n } = e, s = t.semi ? ";" : "", u = [];
  if (n.argument) {
    let p = r("argument");
    Al(t, n.argument) ? p = ["(", f([F, p]), F, ")"] : (De(n.argument) || n.argument.type === "SequenceExpression" || t.experimentalTernaries && n.argument.type === "ConditionalExpression" && (n.argument.consequent.type === "ConditionalExpression" || n.argument.alternate.type === "ConditionalExpression")) && (p = l([B("("), f([E, p]), E, B(")")])), u.push(" ", p);
  }
  let i = d(n, h.Dangling), a = s && i && d(n, h.Last | h.Line);
  return a && u.push(s), i && u.push(" ", J(e, t)), a || u.push(s), u;
}
function Yi(e, t, r) {
  return ["return", Xi(e, t, r)];
}
function Hi(e, t, r) {
  return ["throw", Xi(e, t, r)];
}
function Al(e, t) {
  if (Oe(e.originalText, t) || d(t, h.Leading, (r) => Te(e.originalText, q(r), k(r))) && !H(t)) return true;
  if (Rt(t)) {
    let r = t, n;
    for (; n = iu(r); ) if (r = n, Oe(e.originalText, r)) return true;
  }
  return false;
}
var ds = /* @__PURE__ */ new WeakMap();
function Ni(e) {
  return ds.has(e) || ds.set(e, e.type === "ConditionalExpression" && !ie(e, (t) => t.type === "ObjectExpression")), ds.get(e);
}
var Vi = (e) => e.type === "SequenceExpression";
function $i(e, t, r, n = {}) {
  let s = [], u, i = [], a = false, p = !n.expandLastArg && e.node.body.type === "ArrowFunctionExpression", o;
  (function S() {
    let { node: g } = e, M = Tl(e, t, r, n);
    if (s.length === 0) s.push(M);
    else {
      let { leading: R, trailing: j } = os(e, t);
      s.push([R, M]), i.unshift(j);
    }
    p && (a || (a = g.returnType && z(g).length > 0 || g.typeParameters || z(g).some((R) => R.type !== "Identifier"))), !p || g.body.type !== "ArrowFunctionExpression" ? (u = r("body", n), o = g.body) : e.call(S, "body");
  })();
  let m = !Oe(t.originalText, o) && (Vi(o) || dl(o, u, t) || !a && Ni(o)), y = e.key === "callee" && lt(e.parent), D = Symbol("arrow-chain"), C = xl(e, n, { signatureDocs: s, shouldBreak: a }), c = false, A = false, T = false;
  return p && (y || n.assignmentLayout) && (A = true, T = !d(e.node, h.Leading & h.Line), c = n.assignmentLayout === "chain-tail-arrow-chain" || y && !m), u = hl(e, t, n, { bodyDoc: u, bodyComments: i, functionBody: o, shouldPutBodyOnSameLine: m }), l([l(A ? f([T ? E : "", C]) : C, { shouldBreak: c, id: D }), " =>", p ? dt(u, { groupId: D }) : l(u), p && y ? B(E, "", { groupId: D }) : ""]);
}
function Tl(e, t, r, n) {
  let { node: s } = e, u = [];
  if (s.async && u.push("async "), En(e, t)) u.push(r(["params", 0]));
  else {
    let a = n.expandLastArg || n.expandFirstArg, p = $t(e, r);
    if (a) {
      if (re(p)) throw new yt();
      p = l(ar(p));
    }
    u.push(l([Je(e, r, t, a, true), p]));
  }
  let i = J(e, t, { filter(a) {
    let p = ut(t.originalText, k(a));
    return p !== false && t.originalText.slice(p, p + 2) === "=>";
  } });
  return i && u.push(" ", i), u;
}
function dl(e, t, r) {
  var n, s;
  return X(e) || se(e) || e.type === "ArrowFunctionExpression" || e.type === "DoExpression" || e.type === "BlockStatement" || H(e) || ((n = t.label) == null ? void 0 : n.hug) !== false && (((s = t.label) == null ? void 0 : s.embed) || Lr(e, r.originalText));
}
function xl(e, t, { signatureDocs: r, shouldBreak: n }) {
  if (r.length === 1) return r[0];
  let { parent: s, key: u } = e;
  return u !== "callee" && lt(s) || De(s) ? l([r[0], " =>", f([x, b([" =>", x], r.slice(1))])], { shouldBreak: n }) : u === "callee" && lt(s) || t.assignmentLayout ? l(b([" =>", x], r), { shouldBreak: n }) : l(f(b([" =>", x], r)), { shouldBreak: n });
}
function hl(e, t, r, { bodyDoc: n, bodyComments: s, functionBody: u, shouldPutBodyOnSameLine: i }) {
  let { node: a, parent: p } = e, o = r.expandLastArg && ae(t, "all") ? B(",") : "", m = (r.expandLastArg || p.type === "JSXExpressionContainer") && !d(a) ? E : "";
  return i && Ni(u) ? [" ", l([B("", "("), f([E, n]), B("", ")"), o, m]), s] : (Vi(u) && (n = l(["(", f([E, n]), E, ")"])), i ? [" ", n, s] : [f([x, n, s]), o, m]);
}
var gl = (e, t, r) => {
  if (!(e && t == null)) {
    if (t.findLast) return t.findLast(r);
    for (let n = t.length - 1; n >= 0; n--) {
      let s = t[n];
      if (r(s, n, t)) return s;
    }
  }
}, Ki = gl;
function Dr(e, t, r, n) {
  let { node: s } = e, u = [], i = Ki(false, s[n], (a) => a.type !== "EmptyStatement");
  return e.each(({ node: a }) => {
    a.type !== "EmptyStatement" && (u.push(r()), a !== i && (u.push(F), pe(a, t) && u.push(F)));
  }, n), u;
}
function Fn(e, t, r) {
  let n = Sl(e, t, r), { node: s, parent: u } = e;
  if (s.type === "Program" && (u == null ? void 0 : u.type) !== "ModuleExpression") return n ? [n, F] : "";
  let i = [];
  if (s.type === "StaticBlock" && i.push("static "), i.push("{"), n) i.push(f([F, n]), F);
  else {
    let a = e.grandparent;
    u.type === "ArrowFunctionExpression" || u.type === "FunctionExpression" || u.type === "FunctionDeclaration" || u.type === "ComponentDeclaration" || u.type === "HookDeclaration" || u.type === "ObjectMethod" || u.type === "ClassMethod" || u.type === "ClassPrivateMethod" || u.type === "ForStatement" || u.type === "WhileStatement" || u.type === "DoWhileStatement" || u.type === "DoExpression" || u.type === "ModuleExpression" || u.type === "CatchClause" && !a.finalizer || u.type === "TSModuleDeclaration" || s.type === "StaticBlock" || i.push(F);
  }
  return i.push("}"), i;
}
function Sl(e, t, r) {
  let { node: n } = e, s = O(n.directives), u = n.body.some((p) => p.type !== "EmptyStatement"), i = d(n, h.Dangling);
  if (!s && !u && !i) return "";
  let a = [];
  return s && (a.push(Dr(e, t, r, "directives")), (u || i) && (a.push(F), pe(_(false, n.directives, -1), t) && a.push(F))), u && a.push(Dr(e, t, r, "body")), i && a.push(J(e, t)), a;
}
function Bl(e) {
  let t = /* @__PURE__ */ new WeakMap();
  return function(r) {
    return t.has(r) || t.set(r, Symbol(e)), t.get(r);
  };
}
var Cn = Bl;
function bl(e) {
  switch (e) {
    case null:
      return "";
    case "PlusOptional":
      return "+?";
    case "MinusOptional":
      return "-?";
    case "Optional":
      return "?";
  }
}
function Qi(e, t, r) {
  let { node: n } = e;
  return l([n.variance ? r("variance") : "", "[", f([r("keyTparam"), " in ", r("sourceType")]), "]", bl(n.optional), ": ", r("propType")]);
}
function xs(e, t) {
  return e === "+" || e === "-" ? e + t : t;
}
function zi(e, t, r) {
  let { node: n } = e, s = Te(t.originalText, q(n), q(n.typeParameter));
  return l(["{", f([t.bracketSpacing ? x : E, l([r("typeParameter"), n.optional ? xs(n.optional, "?") : "", n.typeAnnotation ? ": " : "", r("typeAnnotation")]), t.semi ? B(";") : ""]), J(e, t), t.bracketSpacing ? x : E, "}"], { shouldBreak: s });
}
var fr = Cn("typeParameters");
function Pl(e, t, r) {
  let { node: n } = e;
  return z(n).length === 1 && n.type.startsWith("TS") && !n[r][0].constraint && e.parent.type === "ArrowFunctionExpression" && !(t.filepath && /\.ts$/u.test(t.filepath));
}
function Lt(e, t, r, n) {
  let { node: s } = e;
  if (!s[n]) return "";
  if (!Array.isArray(s[n])) return r(n);
  let u = Pt(e.grandparent), i = e.match((o) => !(o[n].length === 1 && we(o[n][0])), void 0, (o, m) => m === "typeAnnotation", (o) => o.type === "Identifier", Fs);
  if (s[n].length === 0 || !i && (u || s[n].length === 1 && (s[n][0].type === "NullableTypeAnnotation" || As(s[n][0])))) return ["<", b(", ", e.map(r, n)), kl(e, t), ">"];
  let p = s.type === "TSTypeParameterInstantiation" ? "" : Pl(e, t, n) ? "," : ae(t) ? B(",") : "";
  return l(["<", f([E, b([",", x], e.map(r, n))]), p, E, ">"], { id: fr(s) });
}
function kl(e, t) {
  let { node: r } = e;
  if (!d(r, h.Dangling)) return "";
  let n = !d(r, h.Line), s = J(e, t, { indent: !n });
  return n ? s : [s, F];
}
function An(e, t, r) {
  let { node: n, parent: s } = e, u = [n.type === "TSTypeParameter" && n.const ? "const " : ""], i = n.type === "TSTypeParameter" ? r("name") : n.name;
  if (s.type === "TSMappedType") return s.readonly && u.push(xs(s.readonly, "readonly"), " "), u.push("[", i), n.constraint && u.push(" in ", r("constraint")), s.nameType && u.push(" as ", e.callParent(() => r("nameType"))), u.push("]"), u;
  if (n.variance && u.push(r("variance")), n.in && u.push("in "), n.out && u.push("out "), u.push(i), n.bound && (n.usesExtendsBound && u.push(" extends "), u.push(N(e, r, "bound"))), n.constraint) {
    let a = Symbol("constraint");
    u.push(" extends", l(f(x), { id: a }), ke, dt(r("constraint"), { groupId: a }));
  }
  return n.default && u.push(" = ", r("default")), l(u);
}
var Zi = v(["ClassProperty", "PropertyDefinition", "ClassPrivateProperty", "ClassAccessorProperty", "AccessorProperty", "TSAbstractPropertyDefinition", "TSAbstractAccessorProperty"]);
function Tn(e, t, r) {
  let { node: n } = e, s = [K(e), Ht(e), "class"], u = d(n.id, h.Trailing) || d(n.typeParameters, h.Trailing) || d(n.superClass) || O(n.extends) || O(n.mixins) || O(n.implements), i = [], a = [];
  if (n.id && i.push(" ", r("id")), i.push(r("typeParameters")), n.superClass) {
    let m = [Ll(e, t, r), r(n.superTypeArguments ? "superTypeArguments" : "superTypeParameters")], y = e.call((D) => ["extends ", ye(D, m, t)], "superClass");
    u ? a.push(x, l(y)) : a.push(" ", y);
  } else a.push(hs(e, t, r, "extends"));
  a.push(hs(e, t, r, "mixins"), hs(e, t, r, "implements"));
  let p;
  if (u) {
    let m;
    ra(n) ? m = [...i, f(a)] : m = f([...i, a]), p = ea(n), s.push(l(m, { id: p }));
  } else s.push(...i, ...a);
  let o = n.body;
  return u && O(o.body) ? s.push(B(F, " ", { groupId: p })) : s.push(" "), s.push(r("body")), s;
}
var ea = Cn("heritageGroup");
function ta(e) {
  return B(F, "", { groupId: ea(e) });
}
function Il(e) {
  return ["extends", "mixins", "implements"].reduce((t, r) => t + (Array.isArray(e[r]) ? e[r].length : 0), e.superClass ? 1 : 0) > 1;
}
function ra(e) {
  return e.typeParameters && !d(e.typeParameters, h.Trailing | h.Line) && !Il(e);
}
function hs(e, t, r, n) {
  let { node: s } = e;
  if (!O(s[n])) return "";
  let u = J(e, t, { marker: n });
  return [ra(s) ? B(" ", x, { groupId: fr(s.typeParameters) }) : x, u, u && F, n, l(f([x, b([",", x], e.map(r, n))]))];
}
function Ll(e, t, r) {
  let n = r("superClass"), { parent: s } = e;
  return s.type === "AssignmentExpression" ? l(B(["(", f([E, n]), E, ")"], n)) : n;
}
function dn(e, t, r) {
  let { node: n } = e, s = [];
  return O(n.decorators) && s.push(Ds(e, t, r)), s.push(Nt(n)), n.static && s.push("static "), s.push(Ht(e)), n.override && s.push("override "), s.push(yr(e, t, r)), s;
}
function xn(e, t, r) {
  let { node: n } = e, s = [], u = t.semi ? ";" : "";
  O(n.decorators) && s.push(Ds(e, t, r)), s.push(K(e), Nt(n)), n.static && s.push("static "), s.push(Ht(e)), n.override && s.push("override "), n.readonly && s.push("readonly "), n.variance && s.push(r("variance")), (n.type === "ClassAccessorProperty" || n.type === "AccessorProperty" || n.type === "TSAbstractAccessorProperty") && s.push("accessor "), s.push(Et(e, t, r), $(e), cn(e), N(e, r));
  let i = n.type === "TSAbstractPropertyDefinition" || n.type === "TSAbstractAccessorProperty";
  return [xt(e, t, r, s, " =", i ? void 0 : "value"), u];
}
function na(e, t, r) {
  let { node: n } = e, s = [];
  return e.each(({ node: u, next: i, isLast: a }) => {
    s.push(r()), !t.semi && Zi(u) && wl(u, i) && s.push(";"), a || (s.push(F), pe(u, t) && s.push(F));
  }, "body"), d(n, h.Dangling) && s.push(J(e, t)), ["{", s.length > 0 ? [f([F, s]), F] : "", "}"];
}
function wl(e, t) {
  var s;
  let { type: r, name: n } = e.key;
  if (!e.computed && r === "Identifier" && (n === "static" || n === "get" || n === "set") && !e.value && !e.typeAnnotation) return true;
  if (!t || t.static || t.accessibility || t.readonly) return false;
  if (!t.computed) {
    let u = (s = t.key) == null ? void 0 : s.name;
    if (u === "in" || u === "instanceof") return true;
  }
  if (Zi(t) && t.variance && !t.static && !t.declare) return true;
  switch (t.type) {
    case "ClassProperty":
    case "PropertyDefinition":
    case "TSAbstractPropertyDefinition":
      return t.computed;
    case "MethodDefinition":
    case "TSAbstractMethodDefinition":
    case "ClassMethod":
    case "ClassPrivateMethod": {
      if ((t.value ? t.value.async : t.async) || t.kind === "get" || t.kind === "set") return false;
      let i = t.value ? t.value.generator : t.generator;
      return !!(t.computed || i);
    }
    case "TSIndexSignature":
      return true;
  }
  return false;
}
var Ol = v(["TSAsExpression", "TSTypeAssertion", "TSNonNullExpression", "TSInstantiationExpression", "TSSatisfiesExpression"]);
function gs(e) {
  return Ol(e) ? gs(e.expression) : e;
}
var sa = v(["FunctionExpression", "ArrowFunctionExpression"]);
function ua(e) {
  return e.type === "MemberExpression" || e.type === "OptionalMemberExpression" || e.type === "Identifier" && e.name !== "undefined";
}
function ia(e, t) {
  if (t.semi || Ss(e, t) || Bs(e, t)) return false;
  let { node: r, key: n, parent: s } = e;
  return !!(r.type === "ExpressionStatement" && (n === "body" && (s.type === "Program" || s.type === "BlockStatement" || s.type === "StaticBlock" || s.type === "TSModuleBlock") || n === "consequent" && s.type === "SwitchCase") && e.call(() => aa(e, t), "expression"));
}
function aa(e, t) {
  let { node: r } = e;
  switch (r.type) {
    case "ParenthesizedExpression":
    case "TypeCastExpression":
    case "ArrayExpression":
    case "ArrayPattern":
    case "TemplateLiteral":
    case "TemplateElement":
    case "RegExpLiteral":
      return true;
    case "ArrowFunctionExpression":
      if (!En(e, t)) return true;
      break;
    case "UnaryExpression": {
      let { prefix: n, operator: s } = r;
      if (n && (s === "+" || s === "-")) return true;
      break;
    }
    case "BindExpression":
      if (!r.object) return true;
      break;
    case "Literal":
      if (r.regex) return true;
      break;
    default:
      if (H(r)) return true;
  }
  return Be(e, t) ? true : Rt(r) ? e.call(() => aa(e, t), ...Pr(r)) : false;
}
function Ss({ node: e, parent: t }, r) {
  return (r.parentParser === "markdown" || r.parentParser === "mdx") && e.type === "ExpressionStatement" && H(e.expression) && t.type === "Program" && t.body.length === 1;
}
function Bs({ node: e, parent: t }, r) {
  return (r.parser === "__vue_event_binding" || r.parser === "__vue_ts_event_binding") && e.type === "ExpressionStatement" && t.type === "Program" && t.body.length === 1;
}
function oa(e, t, r) {
  let n = [r("expression")];
  if (Bs(e, t)) {
    let s = gs(e.node.expression);
    (sa(s) || ua(s)) && n.push(";");
  } else Ss(e, t) || t.semi && n.push(";");
  return n;
}
function pa(e, t, r) {
  if (t.__isVueBindings || t.__isVueForBindingLeft) {
    let n = e.map(r, "program", "body", 0, "params");
    if (n.length === 1) return n[0];
    let s = b([",", x], n);
    return t.__isVueForBindingLeft ? ["(", f([E, l(s)]), E, ")"] : s;
  }
  if (t.__isEmbeddedTypescriptGenericParameters) {
    let n = e.map(r, "program", "body", 0, "typeParameters", "params");
    return b([",", x], n);
  }
}
function ma(e, t) {
  let { node: r } = e;
  switch (r.type) {
    case "RegExpLiteral":
      return ca(r);
    case "BigIntLiteral":
      return hn(r.extra.raw);
    case "NumericLiteral":
      return ft(r.extra.raw);
    case "StringLiteral":
      return Ie(Ze(r.extra.raw, t));
    case "NullLiteral":
      return "null";
    case "BooleanLiteral":
      return String(r.value);
    case "DirectiveLiteral":
      return la(r.extra.raw, t);
    case "Literal": {
      if (r.regex) return ca(r.regex);
      if (r.bigint) return hn(r.raw);
      let { value: n } = r;
      return typeof n == "number" ? ft(r.raw) : typeof n == "string" ? _l(e) ? la(r.raw, t) : Ie(Ze(r.raw, t)) : String(n);
    }
  }
}
function _l(e) {
  if (e.key !== "expression") return;
  let { parent: t } = e;
  return t.type === "ExpressionStatement" && t.directive;
}
function hn(e) {
  return e.toLowerCase();
}
function ca({ pattern: e, flags: t }) {
  return t = [...t].sort().join(""), `/${e}/${t}`;
}
function la(e, t) {
  let r = e.slice(1, -1);
  if (r.includes('"') || r.includes("'")) return e;
  let n = t.singleQuote ? "'" : '"';
  return n + r + n;
}
function jl(e, t, r) {
  let n = e.originalText.slice(t, r);
  for (let s of e[Symbol.for("comments")]) {
    let u = q(s);
    if (u > r) break;
    let i = k(s);
    if (i < t) continue;
    let a = i - u;
    n = n.slice(0, u - t) + " ".repeat(a) + n.slice(i - t);
  }
  return n;
}
var bs = jl;
function ya(e, t, r) {
  let { node: n } = e;
  return ["import", n.phase ? ` ${n.phase}` : "", ks(n), Ea(e, t, r), fa(e, t, r), Ca(e, t, r), t.semi ? ";" : ""];
}
var Da = (e) => e.type === "ExportDefaultDeclaration" || e.type === "DeclareExportDeclaration" && e.default;
function gn(e, t, r) {
  let { node: n } = e, s = [xi(e, t, r), K(e), "export", Da(n) ? " default" : ""], { declaration: u, exported: i } = n;
  return d(n, h.Dangling) && (s.push(" ", J(e, t)), wr(n) && s.push(F)), u ? s.push(" ", r("declaration")) : (s.push(Rl(n)), n.type === "ExportAllDeclaration" || n.type === "DeclareExportAllDeclaration" ? (s.push(" *"), i && s.push(" as ", r("exported"))) : s.push(Ea(e, t, r)), s.push(fa(e, t, r), Ca(e, t, r))), s.push(Ml(n, t)), s;
}
var vl = v(["ClassDeclaration", "ComponentDeclaration", "FunctionDeclaration", "TSInterfaceDeclaration", "DeclareClass", "DeclareComponent", "DeclareFunction", "DeclareHook", "HookDeclaration", "TSDeclareFunction", "EnumDeclaration"]);
function Ml(e, t) {
  return t.semi && (!e.declaration || Da(e) && !vl(e.declaration)) ? ";" : "";
}
function Ps(e, t = true) {
  return e && e !== "value" ? `${t ? " " : ""}${e}${t ? "" : " "}` : "";
}
function ks(e, t) {
  return Ps(e.importKind, t);
}
function Rl(e) {
  return Ps(e.exportKind);
}
function fa(e, t, r) {
  let { node: n } = e;
  if (!n.source) return "";
  let s = [];
  return Fa(n, t) && s.push(" from"), s.push(" ", r("source")), s;
}
function Ea(e, t, r) {
  let { node: n } = e;
  if (!Fa(n, t)) return "";
  let s = [" "];
  if (O(n.specifiers)) {
    let u = [], i = [];
    e.each(() => {
      let a = e.node.type;
      if (a === "ExportNamespaceSpecifier" || a === "ExportDefaultSpecifier" || a === "ImportNamespaceSpecifier" || a === "ImportDefaultSpecifier") u.push(r());
      else if (a === "ExportSpecifier" || a === "ImportSpecifier") i.push(r());
      else throw new Me(n, "specifier");
    }, "specifiers"), s.push(b(", ", u)), i.length > 0 && (u.length > 0 && s.push(", "), i.length > 1 || u.length > 0 || n.specifiers.some((p) => d(p)) ? s.push(l(["{", f([t.bracketSpacing ? x : E, b([",", x], i)]), B(ae(t) ? "," : ""), t.bracketSpacing ? x : E, "}"])) : s.push(["{", t.bracketSpacing ? " " : "", ...i, t.bracketSpacing ? " " : "", "}"]));
  } else s.push("{}");
  return s;
}
function Fa(e, t) {
  return e.type !== "ImportDeclaration" || O(e.specifiers) || e.importKind === "type" ? true : bs(t, q(e), q(e.source)).trimEnd().endsWith("from");
}
function Jl(e, t) {
  var n, s;
  if ((n = e.extra) != null && n.deprecatedAssertSyntax) return "assert";
  let r = bs(t, k(e.source), (s = e.attributes) != null && s[0] ? q(e.attributes[0]) : k(e)).trimStart();
  return r.startsWith("assert") ? "assert" : r.startsWith("with") || O(e.attributes) ? "with" : void 0;
}
function Ca(e, t, r) {
  let { node: n } = e;
  if (!n.source) return "";
  let s = Jl(n, t);
  if (!s) return "";
  let u = [` ${s} {`];
  return O(n.attributes) && (t.bracketSpacing && u.push(" "), u.push(b(", ", e.map(r, "attributes"))), t.bracketSpacing && u.push(" ")), u.push("}"), u;
}
function Aa(e, t, r) {
  let { node: n } = e, { type: s } = n, u = s.startsWith("Import"), i = u ? "imported" : "local", a = u ? "local" : "exported", p = n[i], o = n[a], m = "", y = "";
  return s === "ExportNamespaceSpecifier" || s === "ImportNamespaceSpecifier" ? m = "*" : p && (m = r(i)), o && !ql(n) && (y = r(a)), [Ps(s === "ImportSpecifier" ? n.importKind : n.exportKind, false), m, m && y ? " as " : "", y];
}
function ql(e) {
  if (e.type !== "ImportSpecifier" && e.type !== "ExportSpecifier") return false;
  let { local: t, [e.type === "ImportSpecifier" ? "imported" : "exported"]: r } = e;
  if (t.type !== r.type || !tu(t, r)) return false;
  if (te(t)) return t.value === r.value && fe(t) === fe(r);
  switch (t.type) {
    case "Identifier":
      return t.name === r.name;
    default:
      return false;
  }
}
function ht(e, t, r) {
  var j;
  let n = t.semi ? ";" : "", { node: s } = e, u = s.type === "ObjectTypeAnnotation", i = s.type === "TSEnumDeclaration" || s.type === "EnumBooleanBody" || s.type === "EnumNumberBody" || s.type === "EnumBigIntBody" || s.type === "EnumStringBody" || s.type === "EnumSymbolBody", a = [s.type === "TSTypeLiteral" || i ? "members" : s.type === "TSInterfaceBody" ? "body" : "properties"];
  u && a.push("indexers", "callProperties", "internalSlots");
  let p = a.flatMap((I) => e.map(({ node: U }) => ({ node: U, printed: r(), loc: q(U) }), I));
  a.length > 1 && p.sort((I, U) => I.loc - U.loc);
  let { parent: o, key: m } = e, y = u && m === "body" && (o.type === "InterfaceDeclaration" || o.type === "DeclareInterface" || o.type === "DeclareClass"), D = s.type === "TSInterfaceBody" || i || y || s.type === "ObjectPattern" && o.type !== "FunctionDeclaration" && o.type !== "FunctionExpression" && o.type !== "ArrowFunctionExpression" && o.type !== "ObjectMethod" && o.type !== "ClassMethod" && o.type !== "ClassPrivateMethod" && o.type !== "AssignmentPattern" && o.type !== "CatchClause" && s.properties.some((I) => I.value && (I.value.type === "ObjectPattern" || I.value.type === "ArrayPattern")) || s.type !== "ObjectPattern" && p.length > 0 && Te(t.originalText, q(s), p[0].loc), C = y ? ";" : s.type === "TSInterfaceBody" || s.type === "TSTypeLiteral" ? B(n, ";") : ",", c = s.type === "RecordExpression" ? "#{" : s.exact ? "{|" : "{", A = s.exact ? "|}" : "}", T = [], S = p.map((I) => {
    let U = [...T, l(I.printed)];
    return T = [C, x], (I.node.type === "TSPropertySignature" || I.node.type === "TSMethodSignature" || I.node.type === "TSConstructSignatureDeclaration" || I.node.type === "TSCallSignatureDeclaration") && d(I.node, h.PrettierIgnore) && T.shift(), pe(I.node, t) && T.push(F), U;
  });
  if (s.inexact || s.hasUnknownMembers) {
    let I;
    if (d(s, h.Dangling)) {
      let U = d(s, h.Line);
      I = [J(e, t), U || Z(t.originalText, k(_(false, ct(s), -1))) ? F : x, "..."];
    } else I = ["..."];
    S.push([...T, ...I]);
  }
  let g = (j = _(false, p, -1)) == null ? void 0 : j.node, M = !(s.inexact || s.hasUnknownMembers || g && (g.type === "RestElement" || (g.type === "TSPropertySignature" || g.type === "TSCallSignatureDeclaration" || g.type === "TSMethodSignature" || g.type === "TSConstructSignatureDeclaration") && d(g, h.PrettierIgnore))), R;
  if (S.length === 0) {
    if (!d(s, h.Dangling)) return [c, A, N(e, r)];
    R = l([c, J(e, t, { indent: true }), E, A, $(e), N(e, r)]);
  } else R = [y && O(s.properties) ? ta(o) : "", c, f([t.bracketSpacing ? x : E, ...S]), B(M && (C !== "," || ae(t)) ? C : ""), t.bracketSpacing ? x : E, A, $(e), N(e, r)];
  return e.match((I) => I.type === "ObjectPattern" && !O(I.decorators), Is) || we(s) && (e.match(void 0, (I, U) => U === "typeAnnotation", (I, U) => U === "typeAnnotation", Is) || e.match(void 0, (I, U) => I.type === "FunctionTypeParam" && U === "typeAnnotation", Is)) || !D && e.match((I) => I.type === "ObjectPattern", (I) => I.type === "AssignmentExpression" || I.type === "VariableDeclarator") ? R : l(R, { shouldBreak: D });
}
function Is(e, t) {
  return (t === "params" || t === "parameters" || t === "this" || t === "rest") && Cs(e);
}
function Wl(e) {
  let t = [e];
  for (let r = 0; r < t.length; r++) {
    let n = t[r];
    for (let s of ["test", "consequent", "alternate"]) {
      let u = n[s];
      if (H(u)) return true;
      u.type === "ConditionalExpression" && t.push(u);
    }
  }
  return false;
}
function Gl(e, t, r) {
  let { node: n } = e, s = n.type === "ConditionalExpression", u = s ? "alternate" : "falseType", { parent: i } = e, a = s ? r("test") : [r("checkType"), " ", "extends", " ", r("extendsType")];
  return i.type === n.type && i[u] === n ? he(2, a) : a;
}
var Ul = /* @__PURE__ */ new Map([["AssignmentExpression", "right"], ["VariableDeclarator", "init"], ["ReturnStatement", "argument"], ["ThrowStatement", "argument"], ["UnaryExpression", "argument"], ["YieldExpression", "argument"], ["AwaitExpression", "argument"]]);
function Xl(e) {
  let { node: t } = e;
  if (t.type !== "ConditionalExpression") return false;
  let r, n = t;
  for (let s = 0; !r; s++) {
    let u = e.getParentNode(s);
    if (u.type === "ChainExpression" && u.expression === n || L(u) && u.callee === n || W(u) && u.object === n || u.type === "TSNonNullExpression" && u.expression === n) {
      n = u;
      continue;
    }
    u.type === "NewExpression" && u.callee === n || Ae(u) && u.expression === n ? (r = e.getParentNode(s + 1), n = u) : r = u;
  }
  return n === t ? false : r[Ul.get(r.type)] === n;
}
function Ta(e, t, r) {
  let { node: n } = e, s = n.type === "ConditionalExpression", u = s ? "consequent" : "trueType", i = s ? "alternate" : "falseType", a = s ? ["test"] : ["checkType", "extendsType"], p = n[u], o = n[i], m = [], y = false, { parent: D } = e, C = D.type === n.type && a.some((G) => D[G] === n), c = D.type === n.type && !C, A, T, S = 0;
  do
    T = A || n, A = e.getParentNode(S), S++;
  while (A && A.type === n.type && a.every((G) => A[G] !== T));
  let g = A || D, M = T;
  if (s && (H(n[a[0]]) || H(p) || H(o) || Wl(M))) {
    y = true, c = true;
    let G = (Q) => [B("("), f([E, Q]), E, B(")")], ue = (Q) => Q.type === "NullLiteral" || Q.type === "Literal" && Q.value === null || Q.type === "Identifier" && Q.name === "undefined";
    m.push(" ? ", ue(p) ? r(u) : G(r(u)), " : ", o.type === n.type || ue(o) ? r(i) : G(r(i)));
  } else {
    let G = (Q) => t.useTabs ? f(r(Q)) : he(2, r(Q)), ue = [x, "? ", p.type === n.type ? B("", "(") : "", G(u), p.type === n.type ? B("", ")") : "", x, ": ", G(i)];
    m.push(D.type !== n.type || D[i] === n || C ? ue : t.useTabs ? Mr(f(ue)) : he(Math.max(0, t.tabWidth - 2), ue));
  }
  let R = [u, i, ...a].some((G) => d(n[G], (ue) => ee(ue) && Te(t.originalText, q(ue), k(ue)))), j = (G) => D === g ? l(G, { shouldBreak: R }) : R ? [G, Ee] : G, I = !y && (W(D) || D.type === "NGPipeExpression" && D.left === n) && !D.computed, U = Xl(e), P = j([Gl(e, t, r), c ? m : f(m), s && I && !U ? E : ""]);
  return C || U ? l([f([E, P]), E]) : P;
}
function Yl(e, t) {
  return (W(t) || t.type === "NGPipeExpression" && t.left === e) && !t.computed;
}
function Hl(e, t, r, n) {
  return [...e.map((u) => ct(u)), ct(t), ct(r)].flat().some((u) => ee(u) && Te(n.originalText, q(u), k(u)));
}
var Nl = /* @__PURE__ */ new Map([["AssignmentExpression", "right"], ["VariableDeclarator", "init"], ["ReturnStatement", "argument"], ["ThrowStatement", "argument"], ["UnaryExpression", "argument"], ["YieldExpression", "argument"], ["AwaitExpression", "argument"]]);
function Vl(e) {
  let { node: t } = e;
  if (t.type !== "ConditionalExpression") return false;
  let r, n = t;
  for (let s = 0; !r; s++) {
    let u = e.getParentNode(s);
    if (u.type === "ChainExpression" && u.expression === n || L(u) && u.callee === n || W(u) && u.object === n || u.type === "TSNonNullExpression" && u.expression === n) {
      n = u;
      continue;
    }
    u.type === "NewExpression" && u.callee === n || Ae(u) && u.expression === n ? (r = e.getParentNode(s + 1), n = u) : r = u;
  }
  return n === t ? false : r[Nl.get(r.type)] === n;
}
var Ls = (e) => [B("("), f([E, e]), E, B(")")];
function Kt(e, t, r, n) {
  if (!t.experimentalTernaries) return Ta(e, t, r);
  let { node: s } = e, u = s.type === "ConditionalExpression", i = s.type === "TSConditionalType" || s.type === "ConditionalTypeAnnotation", a = u ? "consequent" : "trueType", p = u ? "alternate" : "falseType", o = u ? ["test"] : ["checkType", "extendsType"], m = s[a], y = s[p], D = o.map((qe) => s[qe]), { parent: C } = e, c = C.type === s.type, A = c && o.some((qe) => C[qe] === s), T = c && C[p] === s, S = m.type === s.type, g = y.type === s.type, M = g || T, R = t.tabWidth > 2 || t.useTabs, j, I, U = 0;
  do
    I = j || s, j = e.getParentNode(U), U++;
  while (j && j.type === s.type && o.every((qe) => j[qe] !== I));
  let P = j || C, G = n && n.assignmentLayout && n.assignmentLayout !== "break-after-operator" && (C.type === "AssignmentExpression" || C.type === "VariableDeclarator" || C.type === "ClassProperty" || C.type === "PropertyDefinition" || C.type === "ClassPrivateProperty" || C.type === "ObjectProperty" || C.type === "Property"), ue = (C.type === "ReturnStatement" || C.type === "ThrowStatement") && !(S || g), Q = u && P.type === "JSXExpressionContainer" && e.grandparent.type !== "JSXAttribute", gt = Vl(e), Ft = Yl(s, C), w = i && Be(e, t), ne = R ? t.useTabs ? "	" : " ".repeat(t.tabWidth - 1) : "", de = Hl(D, m, y, t) || S || g, ot = !M && !c && !i && (Q ? m.type === "NullLiteral" || m.type === "Literal" && m.value === null : nr(m, t) && Mn(s.test, 3)), St = M || T || i && !c || c && u && Mn(s.test, 1) || ot, js = [];
  !S && d(m, h.Dangling) && e.call((qe) => {
    js.push(J(qe, t), F);
  }, "consequent");
  let Qt = [];
  d(s.test, h.Dangling) && e.call((qe) => {
    Qt.push(J(qe, t));
  }, "test"), !g && d(y, h.Dangling) && e.call((qe) => {
    Qt.push(J(qe, t));
  }, "alternate"), d(s, h.Dangling) && Qt.push(J(e, t));
  let vs = Symbol("test"), qa = Symbol("consequent"), Fr = Symbol("test-and-consequent"), Wa = u ? [Ls(r("test")), s.test.type === "ConditionalExpression" ? Ee : ""] : [r("checkType"), " ", "extends", " ", s.extendsType.type === "TSConditionalType" || s.extendsType.type === "ConditionalTypeAnnotation" || s.extendsType.type === "TSMappedType" ? r("extendsType") : l(Ls(r("extendsType")))], Ms = l([Wa, " ?"], { id: vs }), Ga = r(a), Cr = f([S || Q && (H(m) || c || M) ? F : x, js, Ga]), Ua = St ? l([Ms, M ? Cr : B(Cr, l(Cr, { id: qa }), { groupId: vs })], { id: Fr }) : [Ms, Cr], kn = r(p), Rs = ot ? B(kn, Mr(Ls(kn)), { groupId: Fr }) : kn, zt = [Ua, Qt.length > 0 ? [f([F, Qt]), F] : g ? F : ot ? B(x, " ", { groupId: Fr }) : x, ":", g ? " " : R ? St ? B(ne, B(M || ot ? " " : ne, " "), { groupId: Fr }) : B(ne, " ") : " ", g ? Rs : l([f(Rs), Q && !ot ? E : ""]), Ft && !gt ? E : "", de ? Ee : ""];
  return G && !de ? l(f([E, l(zt)])) : G || ue ? l(f(zt)) : gt || i && A ? l([f([E, zt]), w ? E : ""]) : C === P ? l(zt) : zt;
}
function da(e, t, r, n) {
  let { node: s } = e;
  if (kr(s)) return ma(e, t);
  let u = t.semi ? ";" : "", i = [];
  switch (s.type) {
    case "JsExpressionRoot":
      return r("node");
    case "JsonRoot":
      return [r("node"), F];
    case "File":
      return pa(e, t, r) ?? r("program");
    case "EmptyStatement":
      return "";
    case "ExpressionStatement":
      return oa(e, t, r);
    case "ChainExpression":
      return r("expression");
    case "ParenthesizedExpression":
      return !d(s.expression) && (se(s.expression) || X(s.expression)) ? ["(", r("expression"), ")"] : l(["(", f([E, r("expression")]), E, ")"]);
    case "AssignmentExpression":
      return Oi(e, t, r);
    case "VariableDeclarator":
      return _i(e, t, r);
    case "BinaryExpression":
    case "LogicalExpression":
      return Nr(e, t, r);
    case "AssignmentPattern":
      return [r("left"), " = ", r("right")];
    case "OptionalMemberExpression":
    case "MemberExpression":
      return Pi(e, t, r);
    case "MetaProperty":
      return [r("meta"), ".", r("property")];
    case "BindExpression":
      return s.object && i.push(r("object")), i.push(l(f([E, Vr(e, t, r)]))), i;
    case "Identifier":
      return [s.name, $(e), cn(e), N(e, r)];
    case "V8IntrinsicIdentifier":
      return ["%", s.name];
    case "SpreadElement":
    case "SpreadElementPattern":
    case "SpreadPropertyPattern":
    case "RestElement":
      return ln(e, r);
    case "FunctionDeclaration":
    case "FunctionExpression":
      return Dn(e, r, t, n);
    case "ArrowFunctionExpression":
      return $i(e, t, r, n);
    case "YieldExpression":
      return i.push("yield"), s.delegate && i.push("*"), s.argument && i.push(" ", r("argument")), i;
    case "AwaitExpression":
      if (i.push("await"), s.argument) {
        i.push(" ", r("argument"));
        let { parent: a } = e;
        if (L(a) && a.callee === s || W(a) && a.object === s) {
          i = [f([E, ...i]), E];
          let p = e.findAncestor((o) => o.type === "AwaitExpression" || o.type === "BlockStatement");
          if ((p == null ? void 0 : p.type) !== "AwaitExpression" || !ie(p.argument, (o) => o === s)) return l(i);
        }
      }
      return i;
    case "ExportDefaultDeclaration":
    case "ExportNamedDeclaration":
    case "ExportAllDeclaration":
      return gn(e, t, r);
    case "ImportDeclaration":
      return ya(e, t, r);
    case "ImportSpecifier":
    case "ExportSpecifier":
    case "ImportNamespaceSpecifier":
    case "ExportNamespaceSpecifier":
    case "ImportDefaultSpecifier":
    case "ExportDefaultSpecifier":
      return Aa(e, t, r);
    case "ImportAttribute":
      return yn(e, t, r);
    case "Program":
    case "BlockStatement":
    case "StaticBlock":
      return Fn(e, t, r);
    case "ClassBody":
      return na(e, t, r);
    case "ThrowStatement":
      return Hi(e, t, r);
    case "ReturnStatement":
      return Yi(e, t, r);
    case "NewExpression":
    case "ImportExpression":
    case "OptionalCallExpression":
    case "CallExpression":
      return $r(e, t, r);
    case "ObjectExpression":
    case "ObjectPattern":
    case "RecordExpression":
      return ht(e, t, r);
    case "Property":
      return bt(s) ? yr(e, t, r) : yn(e, t, r);
    case "ObjectProperty":
      return yn(e, t, r);
    case "ObjectMethod":
      return yr(e, t, r);
    case "Decorator":
      return ["@", r("expression")];
    case "ArrayExpression":
    case "ArrayPattern":
    case "TupleExpression":
      return Vt(e, t, r);
    case "SequenceExpression": {
      let { parent: a } = e;
      if (a.type === "ExpressionStatement" || a.type === "ForStatement") {
        let p = [];
        return e.each(({ isFirst: o }) => {
          o ? p.push(r()) : p.push(",", f([x, r()]));
        }, "expressions"), l(p);
      }
      return l(b([",", x], e.map(r, "expressions")));
    }
    case "ThisExpression":
      return "this";
    case "Super":
      return "super";
    case "Directive":
      return [r("value"), u];
    case "UnaryExpression":
      return i.push(s.operator), /[a-z]$/u.test(s.operator) && i.push(" "), d(s.argument) ? i.push(l(["(", f([E, r("argument")]), E, ")"])) : i.push(r("argument")), i;
    case "UpdateExpression":
      return [s.prefix ? s.operator : "", r("argument"), s.prefix ? "" : s.operator];
    case "ConditionalExpression":
      return Kt(e, t, r, n);
    case "VariableDeclaration": {
      let a = e.map(r, "declarations"), p = e.parent, o = p.type === "ForStatement" || p.type === "ForInStatement" || p.type === "ForOfStatement", m = s.declarations.some((D) => D.init), y;
      return a.length === 1 && !d(s.declarations[0]) ? y = a[0] : a.length > 0 && (y = f(a[0])), i = [K(e), s.kind, y ? [" ", y] : "", f(a.slice(1).map((D) => [",", m && !o ? F : x, D]))], o && p.body !== s || i.push(u), l(i);
    }
    case "WithStatement":
      return l(["with (", r("object"), ")", Dt(s.body, r("body"))]);
    case "IfStatement": {
      let a = Dt(s.consequent, r("consequent")), p = l(["if (", l([f([E, r("test")]), E]), ")", a]);
      if (i.push(p), s.alternate) {
        let o = d(s.consequent, h.Trailing | h.Line) || wr(s), m = s.consequent.type === "BlockStatement" && !o;
        i.push(m ? " " : F), d(s, h.Dangling) && i.push(J(e, t), o ? F : " "), i.push("else", l(Dt(s.alternate, r("alternate"), s.alternate.type === "IfStatement")));
      }
      return i;
    }
    case "ForStatement": {
      let a = Dt(s.body, r("body")), p = J(e, t), o = p ? [p, E] : "";
      return !s.init && !s.test && !s.update ? [o, l(["for (;;)", a])] : [o, l(["for (", l([f([E, r("init"), ";", x, r("test"), ";", x, r("update")]), E]), ")", a])];
    }
    case "WhileStatement":
      return l(["while (", l([f([E, r("test")]), E]), ")", Dt(s.body, r("body"))]);
    case "ForInStatement":
      return l(["for (", r("left"), " in ", r("right"), ")", Dt(s.body, r("body"))]);
    case "ForOfStatement":
      return l(["for", s.await ? " await" : "", " (", r("left"), " of ", r("right"), ")", Dt(s.body, r("body"))]);
    case "DoWhileStatement": {
      let a = Dt(s.body, r("body"));
      return i = [l(["do", a])], s.body.type === "BlockStatement" ? i.push(" ") : i.push(F), i.push("while (", l([f([E, r("test")]), E]), ")", u), i;
    }
    case "DoExpression":
      return [s.async ? "async " : "", "do ", r("body")];
    case "BreakStatement":
    case "ContinueStatement":
      return i.push(s.type === "BreakStatement" ? "break" : "continue"), s.label && i.push(" ", r("label")), i.push(u), i;
    case "LabeledStatement":
      return s.body.type === "EmptyStatement" ? [r("label"), ":;"] : [r("label"), ": ", r("body")];
    case "TryStatement":
      return ["try ", r("block"), s.handler ? [" ", r("handler")] : "", s.finalizer ? [" finally ", r("finalizer")] : ""];
    case "CatchClause":
      if (s.param) {
        let a = d(s.param, (o) => !ee(o) || o.leading && Z(t.originalText, k(o)) || o.trailing && Z(t.originalText, q(o), { backwards: true })), p = r("param");
        return ["catch ", a ? ["(", f([E, p]), E, ") "] : ["(", p, ") "], r("body")];
      }
      return ["catch ", r("body")];
    case "SwitchStatement":
      return [l(["switch (", f([E, r("discriminant")]), E, ")"]), " {", s.cases.length > 0 ? f([F, b(F, e.map(({ node: a, isLast: p }) => [r(), !p && pe(a, t) ? F : ""], "cases"))]) : "", F, "}"];
    case "SwitchCase": {
      s.test ? i.push("case ", r("test"), ":") : i.push("default:"), d(s, h.Dangling) && i.push(" ", J(e, t));
      let a = s.consequent.filter((p) => p.type !== "EmptyStatement");
      if (a.length > 0) {
        let p = Dr(e, t, r, "consequent");
        i.push(a.length === 1 && a[0].type === "BlockStatement" ? [" ", p] : f([F, p]));
      }
      return i;
    }
    case "DebuggerStatement":
      return ["debugger", u];
    case "ClassDeclaration":
    case "ClassExpression":
      return Tn(e, t, r);
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "MethodDefinition":
      return dn(e, t, r);
    case "ClassProperty":
    case "PropertyDefinition":
    case "ClassPrivateProperty":
    case "ClassAccessorProperty":
    case "AccessorProperty":
      return xn(e, t, r);
    case "TemplateElement":
      return Ie(s.value.raw);
    case "TemplateLiteral":
      return Wr(e, r, t);
    case "TaggedTemplateExpression":
      return Xu(e, r);
    case "PrivateIdentifier":
      return ["#", s.name];
    case "PrivateName":
      return ["#", r("id")];
    case "TopicReference":
      return "%";
    case "ArgumentPlaceholder":
      return "?";
    case "ModuleExpression":
      return ["module ", r("body")];
    case "InterpreterDirective":
    default:
      throw new Me(s, "ESTree");
  }
}
function Sn(e, t, r) {
  let { parent: n, node: s, key: u } = e, i = [r("expression")];
  switch (s.type) {
    case "AsConstExpression":
      i.push(" as const");
      break;
    case "AsExpression":
    case "TSAsExpression":
      i.push(" as ", r("typeAnnotation"));
      break;
    case "SatisfiesExpression":
    case "TSSatisfiesExpression":
      i.push(" satisfies ", r("typeAnnotation"));
      break;
  }
  return u === "callee" && L(n) || u === "object" && W(n) ? l([f([E, ...i]), E]) : i;
}
function xa(e, t, r) {
  let { node: n } = e, s = [K(e), "component"];
  n.id && s.push(" ", r("id")), s.push(r("typeParameters"));
  let u = $l(e, r, t);
  return n.rendersType ? s.push(l([u, " ", r("rendersType")])) : s.push(l([u])), n.body && s.push(" ", r("body")), t.semi && n.type === "DeclareComponent" && s.push(";"), s;
}
function $l(e, t, r) {
  let { node: n } = e, s = n.params;
  if (n.rest && (s = [...s, n.rest]), s.length === 0) return ["(", J(e, r, { filter: (i) => ge(r.originalText, k(i)) === ")" }), ")"];
  let u = [];
  return Ql(e, (i, a) => {
    let p = a === s.length - 1;
    p && n.rest && u.push("..."), u.push(t()), !p && (u.push(","), pe(s[a], r) ? u.push(F, F) : u.push(x));
  }), ["(", f([E, ...u]), B(ae(r, "all") && !Kl(n, s) ? "," : ""), E, ")"];
}
function Kl(e, t) {
  var r;
  return e.rest || ((r = _(false, t, -1)) == null ? void 0 : r.type) === "RestElement";
}
function Ql(e, t) {
  let { node: r } = e, n = 0, s = (u) => t(u, n++);
  e.each(s, "params"), r.rest && e.call(s, "rest");
}
function ha(e, t, r) {
  let { node: n } = e;
  return n.shorthand ? r("local") : [r("name"), " as ", r("local")];
}
function ga(e, t, r) {
  let { node: n } = e, s = [];
  return n.name && s.push(r("name"), n.optional ? "?: " : ": "), s.push(r("typeAnnotation")), s;
}
function Sa(e, t, r) {
  return ht(e, r, t);
}
function Bn(e, t) {
  let { node: r } = e, n = t("id");
  r.computed && (n = ["[", n, "]"]);
  let s = "";
  return r.initializer && (s = t("initializer")), r.init && (s = t("init")), s ? [n, " = ", s] : n;
}
function Ba(e, t, r) {
  let { node: n } = e, s;
  if (n.type === "EnumSymbolBody" || n.explicitType) switch (n.type) {
    case "EnumBooleanBody":
      s = "boolean";
      break;
    case "EnumNumberBody":
      s = "number";
      break;
    case "EnumBigIntBody":
      s = "bigint";
      break;
    case "EnumStringBody":
      s = "string";
      break;
    case "EnumSymbolBody":
      s = "symbol";
      break;
  }
  return [s ? `of ${s} ` : "", Sa(e, t, r)];
}
function bn(e, t, r) {
  let { node: n } = e;
  return [K(e), n.const ? "const " : "", "enum ", t("id"), " ", n.type === "TSEnumDeclaration" ? Sa(e, t, r) : t("body")];
}
function Pa(e, t, r) {
  let { node: n } = e, s = ["hook"];
  n.id && s.push(" ", r("id"));
  let u = Je(e, r, t, false, true), i = $t(e, r), a = at(n, i);
  return s.push(l([a ? l(u) : u, i]), n.body ? " " : "", r("body")), s;
}
function ka(e, t, r) {
  let { node: n } = e, s = [K(e), "hook"];
  return n.id && s.push(" ", r("id")), t.semi && s.push(";"), s;
}
function ba(e) {
  var r;
  let { node: t } = e;
  return t.type === "HookTypeAnnotation" && ((r = e.getParentNode(2)) == null ? void 0 : r.type) === "DeclareHook";
}
function Ia(e, t, r) {
  let { node: n } = e, s = [];
  s.push(ba(e) ? "" : "hook ");
  let u = Je(e, r, t, false, true), i = [];
  return i.push(ba(e) ? ": " : " => ", r("returnType")), at(n, i) && (u = l(u)), s.push(u, i), l(s);
}
function Pn(e, t, r) {
  let { node: n } = e, s = [K(e), "interface"], u = [], i = [];
  n.type !== "InterfaceTypeAnnotation" && u.push(" ", r("id"), r("typeParameters"));
  let a = n.typeParameters && !d(n.typeParameters, h.Trailing | h.Line);
  return O(n.extends) && i.push(a ? B(" ", x, { groupId: fr(n.typeParameters) }) : x, "extends ", (n.extends.length === 1 ? yu : f)(b([",", x], e.map(r, "extends")))), d(n.id, h.Trailing) || O(n.extends) ? a ? s.push(l([...u, f(i)])) : s.push(l(f([...u, ...i]))) : s.push(...u, ...i), s.push(" ", r("body")), l(s);
}
function La(e, t, r) {
  let { node: n } = e;
  if (Sr(n)) return n.type.slice(0, -14).toLowerCase();
  let s = t.semi ? ";" : "";
  switch (n.type) {
    case "ComponentDeclaration":
    case "DeclareComponent":
    case "ComponentTypeAnnotation":
      return xa(e, t, r);
    case "ComponentParameter":
      return ha(e, t, r);
    case "ComponentTypeParameter":
      return ga(e, t, r);
    case "HookDeclaration":
      return Pa(e, t, r);
    case "DeclareHook":
      return ka(e, t, r);
    case "HookTypeAnnotation":
      return Ia(e, t, r);
    case "DeclareClass":
      return Tn(e, t, r);
    case "DeclareFunction":
      return [K(e), "function ", r("id"), r("predicate"), s];
    case "DeclareModule":
      return ["declare module ", r("id"), " ", r("body")];
    case "DeclareModuleExports":
      return ["declare module.exports", N(e, r), s];
    case "DeclareNamespace":
      return ["declare namespace ", r("id"), " ", r("body")];
    case "DeclareVariable":
      return [K(e), n.kind ?? "var", " ", r("id"), s];
    case "DeclareExportDeclaration":
    case "DeclareExportAllDeclaration":
      return gn(e, t, r);
    case "DeclareOpaqueType":
    case "OpaqueType":
      return Ri(e, t, r);
    case "DeclareTypeAlias":
    case "TypeAlias":
      return Qr(e, t, r);
    case "IntersectionTypeAnnotation":
      return zr(e, t, r);
    case "UnionTypeAnnotation":
      return Zr(e, t, r);
    case "ConditionalTypeAnnotation":
      return Kt(e, t, r);
    case "InferTypeAnnotation":
      return rn(e, t, r);
    case "FunctionTypeAnnotation":
      return en(e, t, r);
    case "TupleTypeAnnotation":
      return Vt(e, t, r);
    case "TupleTypeLabeledElement":
      return sn(e, t, r);
    case "TupleTypeSpreadElement":
      return nn(e, t, r);
    case "GenericTypeAnnotation":
      return [r("id"), Lt(e, t, r, "typeParameters")];
    case "IndexedAccessType":
    case "OptionalIndexedAccessType":
      return tn(e, t, r);
    case "TypeAnnotation":
      return un(e, t, r);
    case "TypeParameter":
      return An(e, t, r);
    case "TypeofTypeAnnotation":
      return on(e, r);
    case "ExistsTypeAnnotation":
      return "*";
    case "ArrayTypeAnnotation":
      return an(r);
    case "DeclareEnum":
    case "EnumDeclaration":
      return bn(e, r, t);
    case "EnumBooleanBody":
    case "EnumNumberBody":
    case "EnumBigIntBody":
    case "EnumStringBody":
    case "EnumSymbolBody":
      return Ba(e, r, t);
    case "EnumBooleanMember":
    case "EnumNumberMember":
    case "EnumBigIntMember":
    case "EnumStringMember":
    case "EnumDefaultedMember":
      return Bn(e, r);
    case "FunctionTypeParam": {
      let u = n.name ? r("name") : e.parent.this === n ? "this" : "";
      return [u, $(e), u ? ": " : "", r("typeAnnotation")];
    }
    case "DeclareInterface":
    case "InterfaceDeclaration":
    case "InterfaceTypeAnnotation":
      return Pn(e, t, r);
    case "ClassImplements":
    case "InterfaceExtends":
      return [r("id"), r("typeParameters")];
    case "NullableTypeAnnotation":
      return ["?", r("typeAnnotation")];
    case "Variance": {
      let { kind: u } = n;
      return vt.ok(u === "plus" || u === "minus"), u === "plus" ? "+" : "-";
    }
    case "KeyofTypeAnnotation":
      return ["keyof ", r("argument")];
    case "ObjectTypeCallProperty":
      return [n.static ? "static " : "", r("value")];
    case "ObjectTypeMappedTypeProperty":
      return Qi(e, t, r);
    case "ObjectTypeIndexer":
      return [n.static ? "static " : "", n.variance ? r("variance") : "", "[", r("id"), n.id ? ": " : "", r("key"), "]: ", r("value")];
    case "ObjectTypeProperty": {
      let u = "";
      return n.proto ? u = "proto " : n.static && (u = "static "), [u, n.kind !== "init" ? n.kind + " " : "", n.variance ? r("variance") : "", Et(e, t, r), $(e), bt(n) ? "" : ": ", r("value")];
    }
    case "ObjectTypeAnnotation":
      return ht(e, t, r);
    case "ObjectTypeInternalSlot":
      return [n.static ? "static " : "", "[[", r("id"), "]]", $(e), n.method ? "" : ": ", r("value")];
    case "ObjectTypeSpreadProperty":
      return ln(e, r);
    case "QualifiedTypeofIdentifier":
    case "QualifiedTypeIdentifier":
      return [r("qualification"), ".", r("id")];
    case "NullLiteralTypeAnnotation":
      return "null";
    case "BooleanLiteralTypeAnnotation":
      return String(n.value);
    case "StringLiteralTypeAnnotation":
      return Ie(Ze(fe(n), t));
    case "NumberLiteralTypeAnnotation":
      return ft(n.raw ?? n.extra.raw);
    case "BigIntLiteralTypeAnnotation":
      return hn(n.raw ?? n.extra.raw);
    case "TypeCastExpression":
      return ["(", r("expression"), N(e, r), ")"];
    case "TypePredicate":
      return pn(e, r);
    case "TypeOperator":
      return [n.operator, " ", r("typeAnnotation")];
    case "TypeParameterDeclaration":
    case "TypeParameterInstantiation":
      return Lt(e, t, r, "params");
    case "InferredPredicate":
    case "DeclaredPredicate":
      return [e.key === "predicate" && e.parent.type !== "DeclareFunction" && !e.parent.returnType ? ": " : " ", "%checks", ...n.type === "DeclaredPredicate" ? ["(", r("value"), ")"] : []];
    case "AsExpression":
    case "AsConstExpression":
    case "SatisfiesExpression":
      return Sn(e, t, r);
  }
}
function wa(e, t, r) {
  var i;
  let { node: n } = e;
  if (!n.type.startsWith("TS")) return;
  if (Br(n)) return n.type.slice(2, -7).toLowerCase();
  let s = t.semi ? ";" : "", u = [];
  switch (n.type) {
    case "TSThisType":
      return "this";
    case "TSTypeAssertion": {
      let a = !(X(n.expression) || se(n.expression)), p = l(["<", f([E, r("typeAnnotation")]), E, ">"]), o = [B("("), f([E, r("expression")]), E, B(")")];
      return a ? Ke([[p, r("expression")], [p, l(o, { shouldBreak: true })], [p, r("expression")]]) : l([p, r("expression")]);
    }
    case "TSDeclareFunction":
      return Dn(e, r, t);
    case "TSExportAssignment":
      return ["export = ", r("expression"), s];
    case "TSModuleBlock":
      return Fn(e, t, r);
    case "TSInterfaceBody":
    case "TSTypeLiteral":
      return ht(e, t, r);
    case "TSTypeAliasDeclaration":
      return Qr(e, t, r);
    case "TSQualifiedName":
      return [r("left"), ".", r("right")];
    case "TSAbstractMethodDefinition":
    case "TSDeclareMethod":
      return dn(e, t, r);
    case "TSAbstractAccessorProperty":
    case "TSAbstractPropertyDefinition":
      return xn(e, t, r);
    case "TSInterfaceHeritage":
    case "TSClassImplements":
    case "TSExpressionWithTypeArguments":
    case "TSInstantiationExpression":
      return [r("expression"), r(n.typeArguments ? "typeArguments" : "typeParameters")];
    case "TSTemplateLiteralType":
      return Wr(e, r, t);
    case "TSNamedTupleMember":
      return sn(e, t, r);
    case "TSRestType":
      return nn(e, t, r);
    case "TSOptionalType":
      return [r("typeAnnotation"), "?"];
    case "TSInterfaceDeclaration":
      return Pn(e, t, r);
    case "TSTypeParameterDeclaration":
    case "TSTypeParameterInstantiation":
      return Lt(e, t, r, "params");
    case "TSTypeParameter":
      return An(e, t, r);
    case "TSAsExpression":
    case "TSSatisfiesExpression":
      return Sn(e, t, r);
    case "TSArrayType":
      return an(r);
    case "TSPropertySignature":
      return [n.readonly ? "readonly " : "", Et(e, t, r), $(e), N(e, r)];
    case "TSParameterProperty":
      return [Nt(n), n.static ? "static " : "", n.override ? "override " : "", n.readonly ? "readonly " : "", r("parameter")];
    case "TSTypeQuery":
      return on(e, r);
    case "TSIndexSignature": {
      let a = n.parameters.length > 1 ? B(ae(t) ? "," : "") : "", p = l([f([E, b([", ", E], e.map(r, "parameters"))]), a, E]), o = e.parent.type === "ClassBody" && e.key === "body";
      return [o && n.static ? "static " : "", n.readonly ? "readonly " : "", "[", n.parameters ? p : "", "]", N(e, r), o ? s : ""];
    }
    case "TSTypePredicate":
      return pn(e, r);
    case "TSNonNullExpression":
      return [r("expression"), "!"];
    case "TSImportType":
      return ["import(", r("argument"), ")", n.qualifier ? [".", r("qualifier")] : "", Lt(e, t, r, n.typeArguments ? "typeArguments" : "typeParameters")];
    case "TSLiteralType":
      return r("literal");
    case "TSIndexedAccessType":
      return tn(e, t, r);
    case "TSTypeOperator":
      return [n.operator, " ", r("typeAnnotation")];
    case "TSMappedType":
      return zi(e, t, r);
    case "TSMethodSignature": {
      let a = n.kind && n.kind !== "method" ? `${n.kind} ` : "";
      u.push(Nt(n), a, n.computed ? "[" : "", r("key"), n.computed ? "]" : "", $(e));
      let p = Je(e, r, t, false, true), o = n.returnType ? "returnType" : "typeAnnotation", m = n[o], y = m ? N(e, r, o) : "", D = at(n, y);
      return u.push(D ? l(p) : p), m && u.push(l(y)), l(u);
    }
    case "TSNamespaceExportDeclaration":
      return ["export as namespace ", r("id"), t.semi ? ";" : ""];
    case "TSEnumDeclaration":
      return bn(e, r, t);
    case "TSEnumMember":
      return Bn(e, r);
    case "TSImportEqualsDeclaration":
      return [n.isExport ? "export " : "", "import ", ks(n, false), r("id"), " = ", r("moduleReference"), t.semi ? ";" : ""];
    case "TSExternalModuleReference":
      return ["require(", r("expression"), ")"];
    case "TSModuleDeclaration": {
      let { parent: a } = e, p = a.type === "TSModuleDeclaration", o = ((i = n.body) == null ? void 0 : i.type) === "TSModuleDeclaration";
      return p ? u.push(".") : (u.push(K(e)), n.kind !== "global" && u.push(n.kind, " ")), u.push(r("id")), o ? u.push(r("body")) : n.body ? u.push(" ", l(r("body"))) : u.push(s), u;
    }
    case "TSConditionalType":
      return Kt(e, t, r);
    case "TSInferType":
      return rn(e, t, r);
    case "TSIntersectionType":
      return zr(e, t, r);
    case "TSUnionType":
      return Zr(e, t, r);
    case "TSFunctionType":
    case "TSCallSignatureDeclaration":
    case "TSConstructorType":
    case "TSConstructSignatureDeclaration":
      return en(e, t, r);
    case "TSTupleType":
      return Vt(e, t, r);
    case "TSTypeReference":
      return [r("typeName"), Lt(e, t, r, n.typeArguments ? "typeArguments" : "typeParameters")];
    case "TSTypeAnnotation":
      return un(e, t, r);
    case "TSEmptyBodyFunctionExpression":
      return fn(e, t, r);
    case "TSJSDocAllType":
      return "*";
    case "TSJSDocUnknownType":
      return "?";
    case "TSJSDocNullableType":
      return Ts(e, r, "?");
    case "TSJSDocNonNullableType":
      return Ts(e, r, "!");
    case "TSParenthesizedType":
    default:
      throw new Me(n, "TypeScript");
  }
}
function zl(e, t, r, n) {
  if (Hr(e)) return li(e, t);
  for (let s of [di, Fi, La, wa, da]) {
    let u = s(e, t, r, n);
    if (u !== void 0) return u;
  }
}
var Zl = v(["ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassAccessorProperty", "AccessorProperty", "TSAbstractAccessorProperty", "PropertyDefinition", "TSAbstractPropertyDefinition", "ClassPrivateProperty", "MethodDefinition", "TSAbstractMethodDefinition", "TSDeclareMethod"]);
function em(e, t, r, n) {
  var y;
  e.isRoot && ((y = t.__onHtmlBindingRoot) == null || y.call(t, e.node, t));
  let s = zl(e, t, r, n);
  if (!s) return "";
  let { node: u } = e;
  if (Zl(u)) return s;
  let i = O(u.decorators), a = hi(e, t, r), p = u.type === "ClassExpression";
  if (i && !p) return or(s, (D) => l([a, D]));
  let o = Be(e, t), m = ia(e, t);
  return !a && !o && !m ? s : or(s, (D) => [m ? ";" : "", o ? "(" : "", o && p && i ? [f([x, a, D]), x] : [a, D], o ? ")" : ""]);
}
var Oa = em;
var tm = { avoidAstMutation: true };
var _a = [{ linguistLanguageId: 174, name: "JSON.stringify", type: "data", color: "#292929", tmScope: "source.json", aceMode: "json", codemirrorMode: "javascript", codemirrorMimeType: "application/json", aliases: ["geojson", "jsonl", "topojson"], extensions: [".importmap"], filenames: ["package.json", "package-lock.json", "composer.json"], parsers: ["json-stringify"], vscodeLanguageIds: ["json"] }, { linguistLanguageId: 174, name: "JSON", type: "data", color: "#292929", tmScope: "source.json", aceMode: "json", codemirrorMode: "javascript", codemirrorMimeType: "application/json", aliases: ["geojson", "jsonl", "topojson"], extensions: [".json", ".4DForm", ".4DProject", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"], filenames: [".all-contributorsrc", ".arcconfig", ".auto-changelog", ".c8rc", ".htmlhintrc", ".imgbotconfig", ".nycrc", ".tern-config", ".tern-project", ".watchmanconfig", "Pipfile.lock", "composer.lock", "flake.lock", "mcmod.info", ".babelrc", ".jscsrc", ".jshintrc", ".jslintrc", ".swcrc"], parsers: ["json"], vscodeLanguageIds: ["json"] }, { linguistLanguageId: 423, name: "JSON with Comments", type: "data", color: "#292929", group: "JSON", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", aliases: ["jsonc"], extensions: [".jsonc", ".code-snippets", ".code-workspace", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"], filenames: [], parsers: ["jsonc"], vscodeLanguageIds: ["jsonc"] }, { linguistLanguageId: 175, name: "JSON5", type: "data", color: "#267CB9", extensions: [".json5"], tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "application/json", parsers: ["json5"], vscodeLanguageIds: ["json5"] }];
var Os = {};
Ar(Os, { getVisitorKeys: () => va, massageAstNode: () => Ra, print: () => sm });
var rm = { JsonRoot: ["node"], ArrayExpression: ["elements"], ObjectExpression: ["properties"], ObjectProperty: ["key", "value"], UnaryExpression: ["argument"], NullLiteral: [], BooleanLiteral: [], StringLiteral: [], NumericLiteral: [], Identifier: [], TemplateLiteral: ["quasis"], TemplateElement: [] }, ja = rm;
var nm = hr(ja), va = nm;
function sm(e, t, r) {
  let { node: n } = e;
  switch (n.type) {
    case "JsonRoot":
      return [r("node"), F];
    case "ArrayExpression": {
      if (n.elements.length === 0) return "[]";
      let s = e.map(() => e.node === null ? "null" : r(), "elements");
      return ["[", f([F, b([",", F], s)]), F, "]"];
    }
    case "ObjectExpression":
      return n.properties.length === 0 ? "{}" : ["{", f([F, b([",", F], e.map(r, "properties"))]), F, "}"];
    case "ObjectProperty":
      return [r("key"), ": ", r("value")];
    case "UnaryExpression":
      return [n.operator === "+" ? "" : n.operator, r("argument")];
    case "NullLiteral":
      return "null";
    case "BooleanLiteral":
      return n.value ? "true" : "false";
    case "StringLiteral":
      return JSON.stringify(n.value);
    case "NumericLiteral":
      return Ma(e) ? JSON.stringify(String(n.value)) : JSON.stringify(n.value);
    case "Identifier":
      return Ma(e) ? JSON.stringify(n.name) : n.name;
    case "TemplateLiteral":
      return r(["quasis", 0]);
    case "TemplateElement":
      return JSON.stringify(n.value.cooked);
    default:
      throw new Me(n, "JSON");
  }
}
function Ma(e) {
  return e.key === "key" && e.parent.type === "ObjectProperty";
}
var um = /* @__PURE__ */ new Set(["start", "end", "extra", "loc", "comments", "leadingComments", "trailingComments", "innerComments", "errors", "range", "tokens"]);
function Ra(e, t) {
  let { type: r } = e;
  if (r === "ObjectProperty") {
    let { key: n } = e;
    n.type === "Identifier" ? t.key = { type: "StringLiteral", value: n.name } : n.type === "NumericLiteral" && (t.key = { type: "StringLiteral", value: String(n.value) });
    return;
  }
  if (r === "UnaryExpression" && e.operator === "+") return t.argument;
  if (r === "ArrayExpression") {
    for (let [n, s] of e.elements.entries()) s === null && t.elements.splice(n, 0, { type: "NullLiteral" });
    return;
  }
  if (r === "TemplateLiteral") return { type: "StringLiteral", value: e.quasis[0].value.cooked };
}
Ra.ignoredProperties = um;
var Er = { bracketSpacing: { category: "Common", type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, singleQuote: { category: "Common", type: "boolean", default: false, description: "Use single quotes instead of double quotes." }, proseWrap: { category: "Common", type: "choice", default: "preserve", description: "How to wrap prose.", choices: [{ value: "always", description: "Wrap prose if it exceeds the print width." }, { value: "never", description: "Do not wrap prose." }, { value: "preserve", description: "Wrap prose as-is." }] }, bracketSameLine: { category: "Common", type: "boolean", default: false, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { category: "Common", type: "boolean", default: false, description: "Enforce single attribute per line in HTML, Vue and JSX." } };
var wt = "JavaScript", im = { arrowParens: { category: wt, type: "choice", default: "always", description: "Include parentheses around a sole arrow function parameter.", choices: [{ value: "always", description: "Always include parens. Example: `(x) => x`" }, { value: "avoid", description: "Omit parens when possible. Example: `x => x`" }] }, bracketSameLine: Er.bracketSameLine, bracketSpacing: Er.bracketSpacing, jsxBracketSameLine: { category: wt, type: "boolean", description: "Put > on the last line instead of at a new line.", deprecated: "2.4.0" }, semi: { category: wt, type: "boolean", default: true, description: "Print semicolons.", oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them." }, experimentalTernaries: { category: wt, type: "boolean", default: false, description: "Use curious ternaries, with the question mark after the condition.", oppositeDescription: "Default behavior of ternaries; keep question marks on the same line as the consequent." }, singleQuote: Er.singleQuote, jsxSingleQuote: { category: wt, type: "boolean", default: false, description: "Use single quotes in JSX." }, quoteProps: { category: wt, type: "choice", default: "as-needed", description: "Change when properties in objects are quoted.", choices: [{ value: "as-needed", description: "Only add quotes around object properties where required." }, { value: "consistent", description: "If at least one property in an object requires quotes, quote all properties." }, { value: "preserve", description: "Respect the input use of quotes in object properties." }] }, trailingComma: { category: wt, type: "choice", default: "all", description: "Print trailing commas wherever possible when multi-line.", choices: [{ value: "all", description: "Trailing commas wherever possible (including function arguments)." }, { value: "es5", description: "Trailing commas where valid in ES5 (objects, arrays, etc.)" }, { value: "none", description: "No trailing commas." }] }, singleAttributePerLine: Er.singleAttributePerLine }, Ja = im;
var am = { estree: ws, "estree-json": Os }, om = [...Us, ..._a];
var rx = _s;
export {
  rx as default,
  om as languages,
  Ja as options,
  am as printers
};
