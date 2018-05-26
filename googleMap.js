define("googleMap/skins/skins.json",[],function(){"use strict";var e={};return e["wysiwyg.viewer.skins.GoogleMapSkin"]={react:[["div","mapContainer",[],{}]],css:{'%[data-state~="squared"],%[data-state~="squared"] %mapContainer':"border-radius:0;","%mapContainer":"position:absolute;top:0;right:0;bottom:0;left:0;"}},e["wysiwyg.viewer.skins.map.GoogleMapDefault"]={react:[["div","mapContainer",[],{}]],params:{brd:"BG_COLOR_ALPHA",rd:"BORDER_RADIUS",shd:"BOX_SHADOW",brw:"SIZE"},paramsDefaults:{brd:"color_15",rd:"0",shd:"0 1px 4px rgba(0, 0, 0, 0.6)",brw:"0"},css:{'%[data-state~="squared"],%[data-state~="squared"] %mapContainer':"border-radius:0;","%":"background:[brd];[rd]  [shd]","%mapContainer":"display:inline-block;overflow:hidden;[rd]  position:absolute;top:[brw];right:[brw];bottom:[brw];left:[brw];-webkit-mask-image:-webkit-radial-gradient(circle, #fff, #000);mask-image:radial-gradient(circle, #fff, #000);"}},e["wysiwyg.viewer.skins.map.GoogleMapLiftedShadow"]={react:[["div",null,["_left","_shd"],{}],["div",null,["_right","_shd"],{}],["div","mapContainer",[],{}]],params:{tdr:"URL",brd:"BG_COLOR_ALPHA",rd:"BORDER_RADIUS",shd:"BOX_SHADOW",brw:"SIZE"},paramsDefaults:{tdr:"BASE_THEME_DIRECTORY",brd:"color_15",rd:"0",shd:"0 1px 4px rgba(0, 0, 0, 0.6)",brw:"0"},css:{'%[data-state~="squared"],%[data-state~="squared"] %mapContainer':"border-radius:0;","%_shd":"position:absolute;bottom:-26px;width:165px;height:26px;background-image:url([tdr]liftedshadow_medium.png);background-repeat:no-repeat;","%_left":"left:-20px;background-position:0 0;","%_right":"right:-20px;background-position:100% 0;","%":"background-color:[brd];[rd]  [shd]","%mapContainer":"position:absolute;top:[brw];right:[brw];bottom:[brw];left:[brw];overflow:hidden;"}},e["wysiwyg.viewer.skins.map.GoogleMapSloppy"]={react:[["div",null,["_brd","_one"],{}],["div",null,["_brd","_two"],{}],["div","mapContainer",[],{}]],params:{tdr:"URL"},paramsDefaults:{tdr:"BASE_THEME_DIRECTORY"},css:{'%[data-state~="squared"],%[data-state~="squared"] %mapContainer':"border-radius:0;","%_brd":"background-image:url([tdr]sloppyframe.png);background-repeat:no-repeat;position:absolute;top:0;right:0;bottom:0;left:0;","%_one":"background-position:0 0;bottom:3px;right:3px;","%_two":"background-position:100% 100%;top:3px;left:3px;","%mapContainer":"position:absolute;top:9px;bottom:9px;left:9px;right:9px;"}},e}),define("googleMap",["santa-components","lodash","coreUtils","core","utils","reactDOM","santaProps","components","skins","googleMap/skins/skins.json"],function(e,t,a,r,o,i,s,n,p,d){"use strict";var l=["da","de","en","es","fr","it","ja","ko","nl","no","pl","pt","ru","sv","tr"],u={pt:"pt-BR"},m=function(e){var a=e.compProp.language,r=e.userLanguage,o="userLang"===a?r:a,i=t.includes(l,o)?o:"en";return u[i]||i};function c(e){return t.transform({address:e.compData.address,addressInfo:e.compData.addressInfo,mapType:e.compProp.mapType,mapInteractive:e.compProp.mapDragging,showZoom:e.compProp.showZoom,showStreetView:e.compProp.showStreetView,showMapType:e.compProp.showMapType,lat:e.compData.latitude,long:e.compData.longitude,ts:e.structure.layout.width+e.structure.layout.height,mapStyle:JSON.stringify(e.compData.mapStyle||[])},function(e,a,r){e[r]=t.isString(a)?o.xss.filterHtmlString(a):a},{})}var g={displayName:"GoogleMap",mixins:[r.compMixins.skinBasedComp],propTypes:{compData:s.Types.Component.compData.isRequired,compProp:s.Types.Component.compProp.isRequired,structure:s.Types.Component.structure.isRequired,santaBase:s.Types.santaBase.isRequired,cannotHideIframeWithinRoundedCorners:s.Types.mobile.cannotHideIframeWithinRoundedCorners.isRequired,userLanguage:s.Types.WixUserSantaTypes.userLanguage.isRequired},statics:{useSantaTypes:!0},getInitialState:function(){var e={};return this.props.cannotHideIframeWithinRoundedCorners&&(e.$corners="squared"),this.restartMap(this.props),e},componentDidMount:function(){this.iFrameNode=i.findDOMNode(this.refs.iframe),this.iFrameNode.onload=function(){var e=c(this.props);this.updateMapParams(e)}.bind(this)},componentWillReceiveProps:function(e){var t=c(e);m(this.props)===m(e)?this.updateMapParams(t):this.restartMap(e)},updateMapParams:function(e){i.findDOMNode(this.refs.iframe).contentWindow.postMessage(JSON.stringify(e),"*")},restartMap:function(e){this.iframeUrl=function(e){var t="language="+m(e);return o.urlUtils.joinURL(e.santaBase||"","static/external/googleMap.html?"+t)}(e),this.a11yTitle=a.translationsLoader.getTranslation("component_label",m(e),"COMPONENT_LABEL_googleMapsTitle")},getMapParamsFromProps:c,getSkinProperties:function(){return{"":{tabIndex:0,title:this.a11yTitle,"aria-label":this.a11yTitle},mapContainer:{key:"mapContainer",children:[e.utils.createReactElement("iframe",{ref:"iframe","data-src":this.iframeUrl,width:"100%",height:"100%",frameBorder:"0",scrolling:"no",title:this.a11yTitle,"aria-label":this.a11yTitle})]}}}};return r.compRegistrar.register("wysiwyg.viewer.components.GoogleMap",g,!0),n.translationRequirementsChecker.registerCommonLanguageRequirement("wysiwyg.viewer.components.GoogleMap",function(e,a){return t.get(a,["properties","language"])}),p.skinsMap.addBatch(d),g});
//# sourceMappingURL=googleMap.min.js.map