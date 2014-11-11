ymaps.ready(function() {
    ymaps.modules.define('util.dom.styleSheet', function (provide, styleSheet) {
        function addStyle(selector, cssText) {
            console.log(arguments);
        }
        provide({
            addStyle: addStyle
        });
    });
});

/*modules.define('', function (provide, nextTick, domStyle) {

 var currentCssText = '',
 styles = {},
 updates = {},
 counter = 0,
 dirtyFlag = 0,
 globalTag,
 compactTm = 0,
 tags = [],
 callbacks = [],
 waitForNextTick = 0,
 COMPACTTIMEOUT = 125;


 function addStyle(selector, cssText) {
 var cssText = selector + cssText;

 var thisCounter = counter++;
 styles[thisCounter] = updates[thisCounter] = cssText;

 if (dirtyFlag) {
 generateCssText();
 dirtyFlag = 0;
 }
 currentCssText += cssText + '\n';

 triggerUpdate();

 return {
 then: function (callback, context) {
 callbacks.push([callback, context]);
 },
 remove: function () {
 styles[thisCounter] = null;
 dirtyFlag++;
 triggerUpdate();
 }
 };
 }


 function triggerUpdate() {
 if (!waitForNextTick) {
 waitForNextTick = 1;
 nextTick(updateStyles);
 }
 }

 function compactStyles() {
 clearTimeout(compactTm);
 compactTm = setTimeout(function () {
 //console.log('compact');
 globalTag = setCssText(globalTag, generateCssText(), {
 'data-ymaps': 'svg'
 });
 currentCssText = '';
 updates = {};
 dirtyFlag = 0;
 for (var i = 0; i < tags.length; i++) {
 var tag = tags[i];
 tag && tag.parentNode && tag.parentNode.removeChild(tag);
 //console.log(tag, 'removed');
 }
 tags = [];
 }, COMPACTTIMEOUT);
 }

 function generateCssText() {
 var cssText = [];
 for (var i in styles) {
 styles.hasOwnProperty(i) && styles[i] && cssText.push(styles[i]);
 }
 return cssText.join('\n');
 }

 function setCssText(tag, cssText, attrs) {
 if (!tag) {
 //console.log('creting tag', attrs);
 tag = document.createElement("style");
 tag.type = "text/css";
 domStyle.attr(tag, attrs);
 }

 if (tag.styleSheet) {
 tag.styleSheet.cssText = cssText;
 } else {
 tag.firstChild && tag.removeChild(tag.firstChild);
 tag.appendChild(document.createTextNode(cssText));
 }

 if (!cssText) {
 tag && tag.parentNode && tag.parentNode.removeChild(tag);
 tag = 0;
 } else if (!tag.parentNode) {
 document.getElementsByTagName("head")[0].appendChild(tag);
 }
 return tag;
 }

 function updateStyles() {
 waitForNextTick = 0;

 if (currentCssText) {
 var tag = setCssText(0, currentCssText, {
 'data-ymaps': 'update'
 });
 updates = {};
 currentCssText = '';
 tags.push(tag);
 }
 if (tags.length > 1 || dirtyFlag) {
 compactStyles();
 }

 //все текущие колбэки срабатывают одвременно после "сброса" стилей
 var cb = callbacks;
 callbacks = [];
 for (var i = 0, l = cb.length; i < l; ++i) {
 cb[i][0].call(cb[i][1]);
 }
 }


 });*/