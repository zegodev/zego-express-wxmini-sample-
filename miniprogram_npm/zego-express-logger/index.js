module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1614605214377, function(require, module, exports) {
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]}}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=3)}([function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.E_CLIENT_TYPE=t.ENUM_LOG_LEVEL=t.ENUM_REMOTE_TYPE=t.ZEGO_ENV=t.ZEGO_BROWSER_TYPE=void 0,function(e){e[e.IE=0]="IE",e[e.FIREFOX=1]="FIREFOX",e[e.CHROME=2]="CHROME",e[e.SAFARI=3]="SAFARI",e[e.OPERA=4]="OPERA",e[e.WEIXIN=5]="WEIXIN",e[e.WEIXINMINI=6]="WEIXINMINI",e[e.UNKOWN=7]="UNKOWN"}(t.ZEGO_BROWSER_TYPE||(t.ZEGO_BROWSER_TYPE={})),function(e){e[e.BROWSER=0]="BROWSER",e[e.WEIXINMINI=1]="WEIXINMINI"}(t.ZEGO_ENV||(t.ZEGO_ENV={})),function(e){e[e.DISABLE=0]="DISABLE",e[e.WEBSOCKET=1]="WEBSOCKET",e[e.HTTPS=2]="HTTPS"}(t.ENUM_REMOTE_TYPE||(t.ENUM_REMOTE_TYPE={})),t.ENUM_LOG_LEVEL={DEBUG:0,INFO:1,WARN:2,ERROR:3,REPORT:99,DISABLE:100,debug:0,info:1,warn:2,error:3,report:99,disable:100},function(e){e[e.ClientType_None=0]="ClientType_None",e[e.ClientType_H5=1]="ClientType_H5",e[e.ClientType_SmallPragram=2]="ClientType_SmallPragram",e[e.ClientType_Webrtc=3]="ClientType_Webrtc"}(t.E_CLIENT_TYPE||(t.E_CLIENT_TYPE={}))},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.LoggerStateCenter=void 0;var n=function(){function e(){this._testEnvironment=!0,this._ENV=0,this._debug=!0}return e.getInstance=function(){return e.instance||(e.instance=new e,e.instance.init()),e.instance},e.prototype.init=function(){},Object.defineProperty(e.prototype,"testEnvironment",{get:function(){return this._testEnvironment},set:function(e){this._testEnvironment=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ENV",{get:function(){return this._ENV},set:function(e){this._ENV=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"debug",{get:function(){return this._debug},set:function(e){this._debug=e},enumerable:!1,configurable:!0}),e.instance=new e,e}();t.LoggerStateCenter=n},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.createZegoWebSocket=t.ZegoWeiXinMiniWebSocket=void 0;var n=o(0),i=function(){function e(e,t){this.url=e,this.readyState=3,this._websocket=wx.connectSocket({url:e}),this.init()}return e.prototype.init=function(){var e=this;this._websocket&&(this.readyState=0,this._websocket.onOpen((function(t){e.readyState=e._websocket.readyState,"function"==typeof e.onopen&&(e.onopen(t),e._websocket.onClose((function(t){e.readyState=e._websocket.readyState,"function"==typeof e.onclose&&e.onclose(t)})),e._websocket.onMessage((function(t){"function"==typeof e.onmessage&&e.onmessage(t)})))})),this._websocket.onError((function(t){e.readyState=e._websocket.readyState,"function"==typeof e.onerror&&e.onerror(t)})))},e.prototype.onopen=function(e){},e.prototype.onerror=function(e){},e.prototype.onclose=function(e){},e.prototype.onmessage=function(e){},e.prototype.send=function(e){this._websocket&&this._websocket.send({data:e})},e.prototype.close=function(){this._websocket&&this._websocket.close()},e}();t.ZegoWeiXinMiniWebSocket=i,t.createZegoWebSocket=function(e,t){return t===n.ZEGO_ENV.BROWSER?new WebSocket(e):new i(e)}},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.LoggerStateCenter=t.createZegoWebSocket=t.ZegoDataReport=t.ZegoLogger=void 0;var n=o(1);Object.defineProperty(t,"LoggerStateCenter",{enumerable:!0,get:function(){return n.LoggerStateCenter}});var i=o(2);Object.defineProperty(t,"createZegoWebSocket",{enumerable:!0,get:function(){return i.createZegoWebSocket}});var s=o(4);Object.defineProperty(t,"ZegoDataReport",{enumerable:!0,get:function(){return s.ZegoDataReport}});var r=o(5);Object.defineProperty(t,"ZegoLogger",{enumerable:!0,get:function(){return r.ZegoLogger}})},function(e,t,o){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.ZegoDataReport=void 0;var i=function(){function e(e){this.dataStatistics={},this.logger=e}return e.prototype.newReport=function(e,t){this.dataStatistics[e]={event_time:Date.now(),time_consumed:0,seq:e,error:0,message:"success",event:t,events:[]}},e.prototype.addMsgExt=function(e,t){this.dataStatistics[e]?this.dataStatistics[e].msg_ext=t:console.warn(e+" not exist")},e.prototype.addMsgInfo=function(e,t){this.dataStatistics[e]?Object.assign(this.dataStatistics[e],t):console.warn(e+" not exist")},e.prototype.eventStart=function(e,t){this.dataStatistics[e]?null!=this.dataStatistics[e].events?this.dataStatistics[e].events.push({event:t,event_time:Date.now(),time_consumed:0}):this.logger.warn("zd.es.0 no events"):this.logger.warn("zd.es.0 no seq match")},e.prototype.eventEnd=function(e,t,o){if(this.dataStatistics[e]){var n=this.dataStatistics[e].events;if(n&&0!==n.length){for(var i=n.length-1;i>=0;i--)if(n[i].event==t&&0==n[i].time_consumed){n[i].time_consumed=Date.now()-n[i].event_time;break}}else this.logger.info("zd.ee.0 no events")}else this.logger.info("zd.ee.0 no seq match")},e.prototype.eventEndWithMsg=function(e,t,o){if(this.dataStatistics[e]){var i=this.dataStatistics[e].events;if(i){for(var s=i.length-1;s>=0;s--)if(i[s].event==t&&0==i[s].time_consumed){i[s].time_consumed=Date.now()-i[s].event_time,null==i[s].msg_ext&&(i[s].msg_ext={}),i[s].msg_ext=n({},o);break}}else this.logger.warn("zd.ee.0 no events")}else this.logger.warn("zd.ee.0 no seq match")},e.prototype.eventEndWithMsgInfo=function(e,t,o){if(this.dataStatistics[e]){var n=this.dataStatistics[e].events;if(n){for(var i=n.length-1;i>=0;i--)if(n[i].event==t&&0==n[i].time_consumed){n[i].time_consumed=Date.now()-n[i].event_time,Object.assign(n[i],o);break}}else this.logger.warn("zd.ee.0 no events")}else this.logger.warn("zd.ee.0 no seq match")},e.prototype.addEventInfo=function(e,t,o,n){if(this.dataStatistics[e]){var i=this.dataStatistics[e].events;if(null!=i){for(var s=i.length-1;s>=0;s--)if(i[s].event==t&&null!=i[s].time_consumed){null==i[s].msg_ext?i[s].msg_ext={}:i[s].msg_ext&&(i[s].msg_ext[o]=n);break}}else this.logger.warn("zd.aei.0 no events")}else this.logger.warn("zd.aei.0 no seq match")},e.prototype.addEventMsg=function(e,t,o,n){if(this.dataStatistics[e]){var i=this.dataStatistics[e].events;if(null!=i){for(var s=i.length-1;s>=0;s--)if(i[s].event==t){i[s][o]=n;break}}else this.logger.warn("zd.aem.0 no events")}else this.logger.warn("zd.aem.0 no seq match")},e.prototype.addEvent=function(e,t,o){this.dataStatistics[e]?this.dataStatistics[e].events&&(o?this.dataStatistics[e].events.push({event:t,event_time:Date.now(),msg_ext:o}):this.dataStatistics[e].events.push({event:t,event_time:Date.now()})):this.logger.warn("zd.ae.0 no seq match")},e.prototype.uploadReport=function(e,t,o,n){var i=this.dataStatistics[e];null!=i&&(t&&(i.event=t),i.time_consumed=Date.now()-i.event_time,o&&this.addMsgInfo(e,{error:o.code,message:o.message||o.msg+" "+(n||"")}),this.logger.report(i),delete this.dataStatistics[e])},e}();t.ZegoDataReport=i},function(e,t,o){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.ZegoLogger=void 0;var i=o(0),s=o(2),r=o(1),a=o(6),c=function(){function e(e){this.logLevel=i.ENUM_LOG_LEVEL.INFO,this.logRemoteLevel=0,this.websocket=null,this.logUploadTimer=null,this.logUploadInterval=1e4,this.logCache=[],this.logCacheSend=[],this.logCacheMax=100,this.existUserID=!1,this.stateCenter=r.LoggerStateCenter.getInstance(),this.env=e}return e.prototype.setLogLevel=function(e){var t=i.ENUM_LOG_LEVEL[e];return void 0!==t&&(this.logLevel=t,!0)},e.prototype.setRemoteLogLevel=function(e){var t=i.ENUM_LOG_LEVEL[e];return void 0!==t&&(this.logRemoteLevel=t,!0)},e.prototype.setSessionInfo=function(e,t,o,n,i,s){this.appid=e,this.roomid=t,this.sessionid=o,this.userid=n,this.userName=i,this.version=s},e.prototype.report=function(e){var t=this.logReportParamList(i.ENUM_LOG_LEVEL.REPORT,e);this.logLevel!==i.ENUM_LOG_LEVEL.DISABLE&&this.logLevel<=i.ENUM_LOG_LEVEL.REPORT&&console.debug(t),this.RemoteLog(i.ENUM_LOG_LEVEL.REPORT,t,!0)},e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=this.logParamList(i.ENUM_LOG_LEVEL.DEBUG,e.join(""));this.logLevel!==i.ENUM_LOG_LEVEL.DISABLE&&this.logLevel<=i.ENUM_LOG_LEVEL.DEBUG&&console.debug(o),this.log(i.ENUM_LOG_LEVEL.DEBUG,o)},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=this.logParamList(i.ENUM_LOG_LEVEL.INFO,e.join(""));this.logLevel!==i.ENUM_LOG_LEVEL.DISABLE&&this.logLevel<=i.ENUM_LOG_LEVEL.INFO&&console.info(o),this.log(i.ENUM_LOG_LEVEL.INFO,o)},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=this.logParamList(i.ENUM_LOG_LEVEL.WARN,e.join(""));this.logLevel!==i.ENUM_LOG_LEVEL.DISABLE&&this.logLevel<=i.ENUM_LOG_LEVEL.WARN&&console.warn(o),this.log(i.ENUM_LOG_LEVEL.WARN,o)},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=this.logParamList(i.ENUM_LOG_LEVEL.ERROR,e.join(""));this.logLevel!==i.ENUM_LOG_LEVEL.DISABLE&&this.logLevel<=i.ENUM_LOG_LEVEL.ERROR&&(console.error(o),window?this.stateCenter.debug&&window.alert(e.join("").substr(e.join("").indexOf(" ")+1,4500)):wx&&this.stateCenter.debug&&wx.showModal({title:"",content:e.join("").substr(e.join("").indexOf(" ")+1,4500)})),this.log(i.ENUM_LOG_LEVEL.ERROR,o)},e.prototype.log=function(e,t){this.logRemoteLevel!==i.ENUM_LOG_LEVEL.DISABLE&&this.logRemoteLevel<=e&&this.RemoteLog(e,t)},e.prototype.setLogServer=function(e){try{return e.startsWith("wss:")?(this.logType=i.ENUM_REMOTE_TYPE.WEBSOCKET,this.openWebSocketLogServer(e)):e.startsWith("https:")?(this.logType=i.ENUM_REMOTE_TYPE.HTTPS,this.openHttpsLogServer(e)):this.logType=i.ENUM_REMOTE_TYPE.DISABLE,!0}catch(e){return this.error(JSON.stringify(e)),!1}},e.prototype.stopLogServer=function(){this.logType==i.ENUM_REMOTE_TYPE.WEBSOCKET?this.stopWebSocketServer():this.logType==i.ENUM_REMOTE_TYPE.HTTPS&&(this.SendHttpsLog(),this.stopHttpsServer()),this.logType=i.ENUM_REMOTE_TYPE.DISABLE},e.prototype.stopWebSocketServer=function(){this.websocket&&(this.websocket.onclose=null,this.websocket.onerror=null,this.websocket.close(),this.websocket=null)},e.prototype.openHttpsLogServer=function(e){var t=this;this.url=e,e&&(this.stopHttpsServer(),this.logUploadTimer||(this.logUploadTimer=setInterval((function(){t.SendHttpsLog()}),this.logUploadInterval)))},e.prototype.stopHttpsServer=function(){this.logUploadTimer&&(clearInterval(this.logUploadTimer),this.logUploadTimer=null)},e.prototype.RemoteLog=function(e,t,o){if(void 0===o&&(o=!1),""!=this.url)if(this.logType==i.ENUM_REMOTE_TYPE.WEBSOCKET)this.RemoteWebSocketLog(e,t);else if(this.logType==i.ENUM_REMOTE_TYPE.HTTPS)this.RemoteHttpsLog(e,t,o);else if(this.logLevel!==i.ENUM_LOG_LEVEL.DISABLE&&this.logLevel<=e)for(this.logCacheSend.push(t);this.logCacheSend.length>this.logCacheMax;)this.logCacheSend.shift()},e.prototype.RemoteWebSocketLog=function(e,t){if("string"==typeof t&&t.length>4e3)console.info("log over maximum, ignore");else if(null==this.websocket||2==this.websocket.readyState||3==this.websocket.readyState){var o=this.url;this.url="",this.setLogServer(o),this.logCacheSend.length<this.logCacheMax&&this.logCacheSend.push(t)}else if(0==this.websocket.readyState)this.logCacheSend.length<this.logCacheMax&&this.logCacheSend.push(t);else if(1==this.websocket.readyState)if(this.logCacheSend.length>0){for(var n="",i=0;i<this.logCacheSend.length;i++)(n+this.logCacheSend[i]).length>4e3&&(this.websocket.send(n),n=""),n=n+this.logCacheSend[i]+"\n";t=n+t,this.logCacheSend=[],this.websocket.send(t)}else this.websocket.send(t);else console.warn("wrong socket state:"+this.websocket.readyState),this.logCacheSend.length<this.logCacheMax&&this.logCacheSend.push(t)},e.prototype.RemoteHttpsLog=function(e,t,o){this.logCacheSend.push(t),(this.logCacheSend.length>=this.logCacheMax||!0===o)&&this.SendHttpsLog()},e.prototype.logParamList=function(e,t){var o=a.getCurrentTime(),n=[t.substr(0,t.indexOf(" "))||t,t.substr(t.indexOf(" ")+1,4500)||t],i={time:o,level:e,action:n[0],content:n[1],appid:this.appid,roomid:this.roomid,userid:this.userid,userName:this.userName,sessionid:this.sessionid};return JSON.stringify(i)},e.prototype.logReportParamList=function(e,t){var o=a.getCurrentTime();return t=n(n({},t),{time:o,level:e,console:this.env===i.ZEGO_ENV.BROWSER?"rtc":"xcx",appid:this.appid,room_id:this.roomid,roomid:this.roomid,userid:this.userid,id_name:this.userid,userName:this.userName,sessionid:this.sessionid,sdk_version:this.version,test_environment:this.stateCenter.testEnvironment,version:this.version,event_id:this.appid+"_"+this.userid+"_"+t.event_time+"_"+t.seq}),JSON.stringify(t)},e.prototype.openWebSocketLogServer=function(e){if(this.url!=e){if(this.url=e,!e)return;this.stopWebSocketServer(),this.websocket=s.createZegoWebSocket(e,this.env),this.websocket.onopen=function(){},this.websocket.onclose=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];console.warn("onclose   websocket error:",e)},this.websocket.onmessage=function(){},this.websocket.onerror=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];console.warn("open log websocket error:",e)}}},e.prototype.SendHttpsLog=function(){0!=this.logCacheSend.length&&(this.env===i.ZEGO_ENV.BROWSER?this.SendHttpsLogWeb():this.SendHttpsLogWeChatMini())},e.prototype.SendHttpsLogWeb=function(){var e=this,t=this.logCacheSend.join("\n"),o=new XMLHttpRequest;o.onreadystatechange=function(){if(4==o.readyState)if(200==o.status){if(0==o.responseText.length)return;try{var t=JSON.parse(o.responseText).interval;"number"==typeof t&&e.logUploadInterval!==t&&(e.timeInterval=t,e.openHttpsLogServer(e.url))}catch(e){console.log("send result failed "+e)}}else console.log("send failed "+o.status)},o.open("POST",this.url,!0),o.send(t),this.logCacheSend=[]},e.prototype.SendHttpsLogWeChatMini=function(){var e=this;!this.existUserID&&this.userid&&this.logCacheSend.forEach((function(t){Array.isArray(t)&&t.forEach((function(o,n){var i=JSON.parse(o);i&&""==JSON.parse(o).userid?(i.userid=e.userid,i.id_name=e.userid,t[n]=JSON.stringify(i)):e.existUserID=!0}))}));var t=this.logCacheSend.join("\n");wx.request({url:this.url,data:t,method:"POST",success:function(t){if(0!=t.data.length){var o=t&&t.data&&t.data.interval;"number"==typeof o&&e.logUploadInterval!==o&&(e.timeInterval=o,e.openHttpsLogServer(e.url))}},fail:function(e){console.log("send failed "+e.statusCode)}}),this.logCacheSend=[]},e}();t.ZegoLogger=c},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.getCurrentTime=t.getCurrentEnv=t.getBrowser=void 0;var n=o(0);t.getBrowser=function(){var e=window.navigator.userAgent,t=null!=window.ActiveXObject&&-1!=e.indexOf("MSIE"),o=-1!=e.indexOf("Firefox"),i=null!=window.opr,s=e.indexOf("Chrome")&&window.chrome,r=-1!=e.indexOf("Safari")&&-1!=e.indexOf("Version"),a=e.toLowerCase().match(/MicroMessenger/i)&&"micromessenger"===e.toLowerCase().match(/MicroMessenger/i)[0];return t?n.ZEGO_BROWSER_TYPE.IE:o?n.ZEGO_BROWSER_TYPE.FIREFOX:i?n.ZEGO_BROWSER_TYPE.OPERA:s?n.ZEGO_BROWSER_TYPE.CHROME:r?n.ZEGO_BROWSER_TYPE.SAFARI:a?n.ZEGO_BROWSER_TYPE.WEIXIN:n.ZEGO_BROWSER_TYPE.UNKOWN},t.getCurrentEnv=function(){var e=window.navigator.userAgent;return new Promise((function(t){-1==e.indexOf("MicroMessage")?t(n.ZEGO_ENV.BROWSER):wx.miniProgram.getEnv((function(e){e.miniprogram}))}))};var i=["00","01","02","03","04","05","06","07","08","09"];t.getCurrentTime=function(){var e=new Date;return[e.getFullYear()+"/",(i[e.getMonth()+1]||e.getMonth()+1)+"/",(i[e.getDate()]||e.getDate())+" ",(i[e.getHours()]||e.getHours())+":",(i[e.getMinutes()]||e.getMinutes())+":",i[e.getSeconds()]||e.getSeconds(),"."+e.getTime()%1e3].join("")}}])}));
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1614605214377);
})()
//# sourceMappingURL=index.js.map