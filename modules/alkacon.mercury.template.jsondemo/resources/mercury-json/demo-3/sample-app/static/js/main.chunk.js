(this.webpackJsonpdemo3=this.webpackJsonpdemo3||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var i=n(2),s=n(3),a=n(5),c=n(4),r=n(1),o=n.n(r),l=n(7),h=n.n(l),u=n(0),j=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("section",{className:"detail",children:[Object(u.jsx)("h3",{children:"You are almost there!"}),Object(u.jsx)("div",{className:"alert-info",children:"You do not see any contents here, since you did not yet activate the JSON API."})]}),Object(u.jsxs)("div",{className:"activation",children:[Object(u.jsx)("p",{children:"Activate the JSON API in the following way:"}),Object(u.jsxs)("ol",{children:[Object(u.jsxs)("li",{children:["Go to the Tomcat webapps directory where the OpenCms configuration files live, e.g., in ",Object(u.jsx)("code",{children:"[TOMCAT_HOME]/webapps/[OPENCMS]/WEB-INF/config/"}),"."]}),Object(u.jsxs)("li",{children:["Open the ",Object(u.jsx)("code",{children:"opencms-system.xml"})," configuration file with your favorite text editor."]}),Object(u.jsxs)("li",{children:["Add the ",Object(u.jsx)("code",{children:"org.opencms.xml.xml2json.CmsJsonResourceHandler"})," class at the end of the list of resource init handlers:",Object(u.jsx)("pre",{children:'[...]\n<resourceinit>\n  [...]\n  <resourceinithandler class="org.opencms.xml.xml2json.CmsJsonResourceHandler" />\n</resourceinit>\n[...]'})]}),Object(u.jsx)("li",{children:"Restart Tomcat."})]})]})]})}}]),n}(o.a.Component),d=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).view=e.view,s.state=e.state,s}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsx)("footer",{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Demo using the OpenCms JSON API."}),Object(u.jsxs)("div",{className:"flex column",children:[Object(u.jsx)("a",{href:"https://documentation.opencms.org/opencms-documentation/more-opencms-features/headless-json-api/",target:"_blank",className:"doc",children:"Read the API Documentation"}),Object(u.jsx)("a",{href:"https://github.com/alkacon/mercury-json",target:"_blank",className:"github",children:"View the Demo Source on GitHub"})]})]})})}}]),n}(o.a.Component),v=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).title=e.title,s}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{children:this.title}),Object(u.jsxs)("h4",{children:[Object(u.jsx)("span",{children:"A demo single page application using "}),Object(u.jsx)("a",{href:"#",children:"OpenCms"}),"."]})]})}}]),n}(o.a.Component),b=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).demo3=e.demo3,s.content=e.content,s.settings=e.settings,s}return Object(s.a)(n,[{key:"render",value:function(){var e=this.settings.pieceLayout,t=this.renderTitle(),n=this.renderText(),i=this.renderLink(),s=!(t&&n&&i),a=this.renderImage(s),c=Object(u.jsxs)("div",{children:[t,n,i]});return"6"===e?Object(u.jsxs)("div",{className:"list",children:[!!this.showPieceImage()&&a,!!this.showPieceText()&&c]}):"7"===e?Object(u.jsxs)("div",{className:"list",children:[!!this.showPieceText()&&c,!!this.showPieceImage()&&a]}):Object(u.jsxs)("div",{children:["Unknown pieceLayout setting: ",e,"."]})}},{key:"renderImage",value:function(e){var t=this.content.localeContent.Image;if(this.showImage()&&t){var n=t.Title,i=t.Image.link,s=this.demo3.SERVER_IMAGE+i,a=e?"full":null;return Object(u.jsx)("img",{src:s,alt:n,className:a})}return!1}},{key:"renderLink",value:function(){var e=this.content.localeContent.Link;if(this.showLink()&&e){var t="#"+e.URI.link,n=e.Text;return Object(u.jsx)("a",{href:t,children:n})}return!1}},{key:"renderText",value:function(){var e=this.content.localeContent.Text;return!!this.showText()&&Object(u.jsx)("div",{dangerouslySetInnerHTML:{__html:e}})}},{key:"renderTitle",value:function(){var e=this.content.localeContent.Title,t=this.settings.hsize;return"1"===t?Object(u.jsx)("h1",{children:e}):"2"===t?Object(u.jsx)("h2",{children:e}):"3"===t?Object(u.jsx)("h3",{children:e}):"4"===t?Object(u.jsx)("h4",{children:e}):"0"!==t&&Object(u.jsx)("h2",{children:"Title"})}},{key:"showImage",value:function(){var e=this.settings.visualOption,t=!0;return"99"===e?t=!0:"0"===e&&(t=!1),t}},{key:"showLink",value:function(){var e=this.settings.linkOption,t=!0;return"button"===e?t=!0:"none"===e&&(t=!1),t}},{key:"showPieceImage",value:function(){return this.showImage()}},{key:"showPieceText",value:function(){return this.showLink()||this.showText()||this.showTitle()}},{key:"showText",value:function(){var e=this.settings.textOption,t=!0;return"default"===e?t=!0:"none"===e&&(t=!1),t}},{key:"showTitle",value:function(){return"0"!==this.settings.hsize}}]),n}(o.a.Component),O=(n(13),function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var s;Object(i.a)(this,n),s=t.call(this,e);var a=document.getElementById("root").dataset.contextPath;return s.SERVER="${pageContext.request.contextPath}"===a?"":a,s.SERVER_IMAGE="",s.ENDPOINT=s.SERVER+"/json",s.URI="/sites/default/mercury-json/demo-3/page-editor/index.html",s.PARAMS="?content&wrapper&locale=en&fallbackLocale",s.state={available:null,page:null},s}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.jsonApiAvailable()}},{key:"jsonApiAvailable",value:function(){var e=this,t=this;fetch(this.ENDPOINT).then((function(n){n.ok?(t.setState({available:!0,page:t.state.page}),e.loadPage()):t.setState({available:!1,type:t.state.type,content:t.state.content,result:t.state.result,locale:t.state.locale})})).catch((function(e){t.setState({available:!1,page:t.state.page})}))}},{key:"loadPage",value:function(){var e=this,t=this.ENDPOINT+this.URI+this.PARAMS;fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({available:e.state.available,page:t})}))}},{key:"render",value:function(){var e;if(null===this.state.available)e=Object(u.jsx)("div",{children:"Loading..."});else if(!1===this.state.available)e=Object(u.jsx)(j,{});else if(this.state.page){var t=this.state.page.containers;e=this.visitContainers(t)}else e=Object(u.jsx)("div",{children:"Loading..."});return Object(u.jsx)("main",{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(v,{title:"Demo 3"}),e,Object(u.jsx)(d,{})]})})}},{key:"renderContent",value:function(e,t){var n=e.attributes.type;return"m-section"===n?Object(u.jsx)(b,{demo3:this,content:e,settings:t}):Object(u.jsxs)("div",{children:["Content type ",n," is not supported."]})}},{key:"visitContainer",value:function(e){var t=e.elements;return this.visitElements(t)}},{key:"visitContainers",value:function(e){var t=this;return e.map((function(e){return t.visitContainer(e)}))}},{key:"visitElement",value:function(e){var t=e.containers,n=e.formatterKey,i=e.path,s=this.state.page.linkedContents[i],a=e.settings;return t.length?this.visitContainers(t):!(!n||!n.endsWith("/json"))&&this.renderContent(s,a)}},{key:"visitElements",value:function(e){var t=this;return e.map((function(e,n){return t.visitElement(e)}))}}]),n}(o.a.Component));h.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.chunk.js.map