(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{163:function(module,exports,__webpack_require__){module.exports={wrapper__input:"UiInput_wrapper__input__1m81V",input:"UiInput_input__3uJCe",clear__img:"UiInput_clear__img__rZyd9",clear__disabled:"UiInput_clear__disabled__1i_rx"}},286:function(module,exports,__webpack_require__){},293:function(module,exports,__webpack_require__){module.exports={button:"UiButton_button__3feaI",dark:"UiButton_dark__2kT0w",ligth:"UiButton_ligth__3cnEI"}},294:function(module,exports,__webpack_require__){module.exports={loader:"UiLoading_loader__m36Nr",shadow:"UiLoading_shadow__1GnG7"}},458:function(module,exports,__webpack_require__){module.exports={video:"UiVideo_video__wmTPy"}},478:function(module,exports,__webpack_require__){__webpack_require__(479),__webpack_require__(638),__webpack_require__(639),__webpack_require__(840),__webpack_require__(841),__webpack_require__(849),__webpack_require__(850),__webpack_require__(846),__webpack_require__(842),__webpack_require__(851),__webpack_require__(843),__webpack_require__(844),__webpack_require__(852),module.exports=__webpack_require__(836)},546:function(module,exports){},639:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(340)},836:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(340).configure)([__webpack_require__(837),__webpack_require__(838)],module,!1)}).call(this,__webpack_require__(193)(module))},837:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=837},838:function(module,exports,__webpack_require__){var map={"./components/Ui/UiButton/UiButton.stories.js":853,"./components/Ui/UiInput/UiInput.stories.js":847,"./components/Ui/UiLoading/UiLoading.stories.js":845,"./components/Ui/UiVideo/UiVideo.stories.js":848};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=838},845:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Black",(function(){return Black})),__webpack_require__.d(__webpack_exports__,"Blue",(function(){return Blue})),__webpack_require__.d(__webpack_exports__,"White",(function(){return White}));var objectSpread2=__webpack_require__(29),slicedToArray=__webpack_require__(212),react=__webpack_require__(0),classnames=__webpack_require__(97),classnames_default=__webpack_require__.n(classnames),loader_black=__webpack_require__.p+"static/media/loader-black.e08f8176.svg",loader_blue=__webpack_require__.p+"static/media/loader-blue.a228a216.svg",loader_white=__webpack_require__.p+"static/media/loader-white.3b2c7a4d.svg",UiLoading_module=__webpack_require__(294),UiLoading_module_default=__webpack_require__.n(UiLoading_module),jsx_runtime=__webpack_require__(39),UiLoading_UiLoading=function UiLoading(_ref){var _ref$theme=_ref.theme,theme=void 0===_ref$theme?"white":_ref$theme,_ref$isShadow=_ref.isShadow,isShadow=void 0===_ref$isShadow||_ref$isShadow,classes=_ref.classes,_useState=Object(react.useState)(null),_useState2=Object(slicedToArray.a)(_useState,2),loaderIcon=_useState2[0],setLoaderIcon=_useState2[1];return Object(react.useEffect)((function(){switch(theme){case"black":setLoaderIcon(loader_black);break;case"white":setLoaderIcon(loader_white);break;case"blue":setLoaderIcon(loader_blue);break;default:setLoaderIcon(loader_white)}}),[]),Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:Object(jsx_runtime.jsx)("img",{className:classnames_default()(UiLoading_module_default.a.loader,isShadow&&UiLoading_module_default.a.shadow,classes),src:loaderIcon,alt:"Loader"})})};UiLoading_UiLoading.__docgenInfo={description:"",methods:[],displayName:"UiLoading",props:{theme:{defaultValue:{value:'"white"',computed:!1},type:{name:"string"},required:!1,description:""},isShadow:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},classes:{type:{name:"string"},required:!1,description:""}}};var Ui_UiLoading_UiLoading=UiLoading_UiLoading;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Ui\\UiLoading\\UiLoading.jsx"]={name:"UiLoading",docgenInfo:UiLoading_UiLoading.__docgenInfo,path:"src\\components\\Ui\\UiLoading\\UiLoading.jsx"});__webpack_exports__.default={title:"Ui-Kit/UiLoading",component:Ui_UiLoading_UiLoading};var UiLoading_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Ui_UiLoading_UiLoading,Object(objectSpread2.a)({},args))},props={theme:"black",onClick:function onClick(){return console.log("Hello")},isShadow:!1,classes:""},Black=UiLoading_stories_Template.bind({});Black.args=Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{theme:"black"});var Blue=UiLoading_stories_Template.bind({});Blue.args=Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{theme:"blue"});var White=UiLoading_stories_Template.bind({});White.args=Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{theme:"white",isShadow:!0}),Black.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <UiLoading {...args} />"}},Black.parameters),Blue.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <UiLoading {...args} />"}},Blue.parameters),White.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <UiLoading {...args} />"}},White.parameters)},847:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__(29),slicedToArray=__webpack_require__(212),react=__webpack_require__(0),classnames=__webpack_require__(97),classnames_default=__webpack_require__.n(classnames),cancel=(__webpack_require__(286),__webpack_require__.p+"static/media/cancel.00e5d25a.svg"),UiInput_module=__webpack_require__(163),UiInput_module_default=__webpack_require__.n(UiInput_module),jsx_runtime=__webpack_require__(39),UiInput_UiInput=function UiInput(_ref){var type=_ref.type,value=_ref.value,handleInputChange=_ref.handleInputChange,placeholder=_ref.placeholder,classes=_ref.classes;return Object(jsx_runtime.jsxs)("div",{className:classnames_default()(UiInput_module_default.a.wrapper__input,classes),children:[Object(jsx_runtime.jsx)("input",{className:UiInput_module_default.a.input,type:type,value:value,onChange:function onChange(e){return handleInputChange(e.target.value)},placeholder:placeholder}),Object(jsx_runtime.jsx)("img",{onClick:function onClick(){return value&&handleInputChange("")},className:classnames_default()(UiInput_module_default.a.clear__img,!value&&UiInput_module_default.a.clear__disabled),src:cancel,alt:"Clear Img"})]})};UiInput_UiInput.__docgenInfo={description:"",methods:[],displayName:"UiInput",props:{type:{type:{name:"string"},required:!1,description:""},value:{type:{name:"string"},required:!1,description:""},handleInputChange:{type:{name:"func"},required:!1,description:""},placeholder:{type:{name:"string"},required:!1,description:""},classes:{type:{name:"string"},required:!1,description:""}}};var Ui_UiInput_UiInput=UiInput_UiInput;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Ui\\UiInput\\UiInput.jsx"]={name:"UiInput",docgenInfo:UiInput_UiInput.__docgenInfo,path:"src\\components\\Ui\\UiInput\\UiInput.jsx"});__webpack_exports__.default={title:"Ui-Kit/UiInput",component:Ui_UiInput_UiInput};var props={type:"text",value:"",handleInputChange:function handleInputChange(){return console.log("Input Component")},placeholder:"Input value",classes:""},Default=function Template(args){var _useState=Object(react.useState)(""),_useState2=Object(slicedToArray.a)(_useState,2),value=_useState2[0],setValue=_useState2[1];return Object(jsx_runtime.jsx)(Ui_UiInput_UiInput,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{value:value,handleInputChange:function handleInputChange(value){setValue(value)}}))}.bind({});Default.args=Object(objectSpread2.a)({},props),Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => {\r\n\r\n    const [value, setValue] = useState('');\r\n\r\n    const handleInputChange = (value) => {\r\n\r\n        setValue(value);\r\n    }\r\n\r\n    return (\r\n        <UiInput\r\n            {...args}\r\n            value={value}\r\n            handleInputChange={handleInputChange}\r\n        \r\n        />      \r\n\r\n\r\n    )\r\n}"}},Default.parameters)},848:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__(29),react=__webpack_require__(0),classnames=__webpack_require__(97),classnames_default=__webpack_require__.n(classnames),UiVideo_module=(__webpack_require__(286),__webpack_require__(458)),UiVideo_module_default=__webpack_require__.n(UiVideo_module),jsx_runtime=__webpack_require__(39),UiVideo_UiVideo=function UiVideo(_ref){var src=_ref.src,classes=_ref.classes,_ref$playbackRate=_ref.playbackRate,playbackRate=void 0===_ref$playbackRate?1:_ref$playbackRate,videoRef=Object(react.useRef)(null);return Object(react.useEffect)((function(){videoRef.current.playbackRate=playbackRate}),[]),Object(jsx_runtime.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,className:classnames_default()(UiVideo_module_default.a.video,classes),ref:videoRef,children:Object(jsx_runtime.jsx)("source",{src:src})})};UiVideo_UiVideo.__docgenInfo={description:"",methods:[],displayName:"UiVideo",props:{playbackRate:{defaultValue:{value:"1.0",computed:!1},type:{name:"number"},required:!1,description:""},src:{type:{name:"string"},required:!1,description:""},classes:{type:{name:"string"},required:!1,description:""}}};var Ui_UiVideo_UiVideo=UiVideo_UiVideo;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Ui\\UiVideo\\UiVideo.jsx"]={name:"UiVideo",docgenInfo:UiVideo_UiVideo.__docgenInfo,path:"src\\components\\Ui\\UiVideo\\UiVideo.jsx"});var video=__webpack_require__.p+"static/media/video.db435084.mp4",props=(__webpack_exports__.default={title:"Ui-Kit/UiVideo",component:Ui_UiVideo_UiVideo},{src:video,classes:"",playbackRate:1}),Default=function Template(args){return Object(jsx_runtime.jsx)(Ui_UiVideo_UiVideo,Object(objectSpread2.a)({},args))}.bind({});Default.args=Object(objectSpread2.a)({},props),Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <UiVideo {...args} />"}},Default.parameters)},852:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(860),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},853:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Ligth",(function(){return Ligth})),__webpack_require__.d(__webpack_exports__,"Dark",(function(){return Dark})),__webpack_require__.d(__webpack_exports__,"Disabled",(function(){return Disabled}));var objectSpread2=__webpack_require__(29),classnames=__webpack_require__(97),classnames_default=__webpack_require__.n(classnames),UiButton_module=(__webpack_require__(286),__webpack_require__(293)),UiButton_module_default=__webpack_require__.n(UiButton_module),jsx_runtime=__webpack_require__(39),UiButton_UiButton=function UiButton(_ref){var text=_ref.text,onClick=_ref.onClick,disabled=_ref.disabled,_ref$theme=_ref.theme,theme=void 0===_ref$theme?"dark":_ref$theme,classes=_ref.classes;return Object(jsx_runtime.jsx)("button",{className:classnames_default()(UiButton_module_default.a.button,UiButton_module_default.a[theme],classes),onClick:onClick,disabled:disabled,children:text})};UiButton_UiButton.__docgenInfo={description:"",methods:[],displayName:"UiButton",props:{theme:{defaultValue:{value:'"dark"',computed:!1},type:{name:"string"},required:!1,description:""},text:{type:{name:"string"},required:!1,description:""},onClick:{type:{name:"func"},required:!1,description:""},disabled:{type:{name:"bool"},required:!1,description:""},classes:{type:{name:"string"},required:!1,description:""}}};var Ui_UiButton_UiButton=UiButton_UiButton;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Ui\\UiButton\\UiButton.jsx"]={name:"UiButton",docgenInfo:UiButton_UiButton.__docgenInfo,path:"src\\components\\Ui\\UiButton\\UiButton.jsx"});__webpack_exports__.default={title:"Ui-Kit/UiButton",component:Ui_UiButton_UiButton};var UiButton_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Ui_UiButton_UiButton,Object(objectSpread2.a)({},args))},props={text:"Hello",onClick:function onClick(){return console.log("Hello")},disabled:!1,theme:"ligth",classes:""},Ligth=UiButton_stories_Template.bind({});Ligth.args=Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{theme:"ligth"});var Dark=UiButton_stories_Template.bind({});Dark.args=Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{theme:"dark"});var Disabled=UiButton_stories_Template.bind({});Disabled.args=Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{disabled:!0}),Ligth.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <UiButton {...args} />"}},Ligth.parameters),Dark.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <UiButton {...args} />"}},Dark.parameters),Disabled.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <UiButton {...args} />"}},Disabled.parameters)}},[[478,2,3]]]);