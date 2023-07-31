"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6642],{6642:(E,v,d)=>{d.r(v),d.d(v,{ion_toast:()=>T});var m=d(5861),r=d(6953),w=d(1273),_=d(7690),c=d(8946),f=d(4237),g=d(7876),i=d(6506),a=d(544);d(7643);const y=(t,e)=>{const o=(0,i.c)(),n=(0,i.c)(),l=(0,a.g)(t).querySelector(".toast-wrapper");switch(n.addElement(l),e){case"top":n.fromTo("transform","translateY(-100%)","translateY(calc(10px + var(--ion-safe-area-top, 0px)))");break;case"middle":const x=Math.floor(t.clientHeight/2-l.clientHeight/2);l.style.top=`${x}px`,n.fromTo("opacity",.01,1);break;default:n.fromTo("transform","translateY(100%)","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))")}return o.easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(n)},k=(t,e)=>{const o=(0,i.c)(),n=(0,i.c)(),l=(0,a.g)(t).querySelector(".toast-wrapper");switch(n.addElement(l),e){case"top":n.fromTo("transform","translateY(calc(10px + var(--ion-safe-area-top, 0px)))","translateY(-100%)");break;case"middle":n.fromTo("opacity",.99,0);break;default:n.fromTo("transform","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))","translateY(100%)")}return o.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n)},b=(t,e)=>{const o=(0,i.c)(),n=(0,i.c)(),l=(0,a.g)(t).querySelector(".toast-wrapper");switch(n.addElement(l),e){case"top":l.style.top="calc(8px + var(--ion-safe-area-top, 0px))",n.fromTo("opacity",.01,1);break;case"middle":const x=Math.floor(t.clientHeight/2-l.clientHeight/2);l.style.top=`${x}px`,n.fromTo("opacity",.01,1);break;default:l.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",n.fromTo("opacity",.01,1)}return o.easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(n)},D=t=>{const e=(0,i.c)(),o=(0,i.c)(),s=(0,a.g)(t).querySelector(".toast-wrapper");return o.addElement(s).fromTo("opacity",.99,0),e.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(o)},T=class{constructor(t){(0,r.r)(this,t),this.didPresent=(0,r.d)(this,"ionToastDidPresent",7),this.willPresent=(0,r.d)(this,"ionToastWillPresent",7),this.willDismiss=(0,r.d)(this,"ionToastWillDismiss",7),this.didDismiss=(0,r.d)(this,"ionToastDidDismiss",7),this.didPresentShorthand=(0,r.d)(this,"didPresent",7),this.willPresentShorthand=(0,r.d)(this,"willPresent",7),this.willDismissShorthand=(0,r.d)(this,"willDismiss",7),this.didDismissShorthand=(0,r.d)(this,"didDismiss",7),this.delegateController=(0,c.d)(this),this.triggerController=(0,c.e)(),this.customHTMLEnabled=g.c.get("innerHTMLTemplatesEnabled",w.E),this.presented=!1,this.dispatchCancelHandler=e=>{if((0,c.i)(e.detail.role)){const n=this.getButtons().find(s=>"cancel"===s.role);this.callButtonHandler(n)}},this.revealContentToScreenReader=!1,this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.color=void 0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.cssClass=void 0,this.duration=g.c.getNumber("toastDuration",0),this.header=void 0,this.layout="baseline",this.message=void 0,this.keyboardClose=!1,this.position="bottom",this.buttons=void 0,this.translucent=!1,this.animated=!0,this.icon=void 0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0}onIsOpenChange(t,e){!0===t&&!1===e?this.present():!1===t&&!0===e&&this.dismiss()}triggerChanged(){const{trigger:t,el:e,triggerController:o}=this;t&&o.addClickListener(e,t)}connectedCallback(){(0,c.j)(this.el),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){(0,c.k)(this.el)}present(){var t=this;return(0,m.Z)(function*(){void 0!==t.currentTransition&&(yield t.currentTransition),yield t.delegateController.attachViewToDom(),t.currentTransition=(0,c.f)(t,"toastEnter",y,b,t.position),yield t.currentTransition,t.revealContentToScreenReader=!0,t.currentTransition=void 0,t.duration>0&&(t.durationTimeout=setTimeout(()=>t.dismiss(void 0,"timeout"),t.duration))})()}dismiss(t,e){var o=this;return(0,m.Z)(function*(){o.durationTimeout&&clearTimeout(o.durationTimeout),o.currentTransition=(0,c.g)(o,t,e,"toastLeave",k,D,o.position);const n=yield o.currentTransition;return n&&(o.delegateController.removeViewFromDom(),o.revealContentToScreenReader=!1),n})()}onDidDismiss(){return(0,c.h)(this.el,"ionToastDidDismiss")}onWillDismiss(){return(0,c.h)(this.el,"ionToastWillDismiss")}getButtons(){return this.buttons?this.buttons.map(e=>"string"==typeof e?{text:e}:e):[]}buttonClick(t){var e=this;return(0,m.Z)(function*(){const o=t.role;return(0,c.i)(o)||(yield e.callButtonHandler(t))?e.dismiss(void 0,o):Promise.resolve()})()}callButtonHandler(t){return(0,m.Z)(function*(){if(null!=t&&t.handler)try{if(!1===(yield(0,c.s)(t.handler)))return!1}catch(e){console.error(e)}return!0})()}renderButtons(t,e){if(0===t.length)return;const o=(0,g.b)(this);return(0,r.h)("div",{class:{"toast-button-group":!0,[`toast-button-group-${e}`]:!0}},t.map(s=>(0,r.h)("button",{type:"button",class:O(s),tabIndex:0,onClick:()=>this.buttonClick(s),part:"button"},(0,r.h)("div",{class:"toast-button-inner"},s.icon&&(0,r.h)("ion-icon",{"aria-hidden":"true",icon:s.icon,slot:void 0===s.text?"icon-only":void 0,class:"toast-button-icon"}),s.text),"md"===o&&(0,r.h)("ion-ripple-effect",{type:void 0!==s.icon&&void 0===s.text?"unbounded":"bounded"}))))}renderToastMessage(t,e=null){const{customHTMLEnabled:o,message:n}=this;return o?(0,r.h)("div",{key:t,"aria-hidden":e,class:"toast-message",part:"message",innerHTML:(0,w.a)(n)}):(0,r.h)("div",{key:t,"aria-hidden":e,class:"toast-message",part:"message"},n)}renderHeader(t,e=null){return(0,r.h)("div",{key:t,class:"toast-header","aria-hidden":e,part:"header"},this.header)}render(){const{layout:t,el:e,revealContentToScreenReader:o,header:n,message:s}=this,l=this.getButtons(),h=l.filter(C=>"start"===C.side),u=l.filter(C=>"start"!==C.side),x=(0,g.b)(this),P={"toast-wrapper":!0,[`toast-${this.position}`]:!0,[`toast-layout-${t}`]:!0};return"stacked"===t&&h.length>0&&u.length>0&&(0,_.p)("This toast is using start and end buttons with the stacked toast layout. We recommend following the best practice of using either start or end buttons with the stacked toast layout.",e),(0,r.h)(r.H,Object.assign({tabindex:"-1"},this.htmlAttributes,{style:{zIndex:`${6e4+this.overlayIndex}`},class:(0,f.c)(this.color,Object.assign(Object.assign({[x]:!0},(0,f.g)(this.cssClass)),{"overlay-hidden":!0,"toast-translucent":this.translucent})),onIonToastWillDismiss:this.dispatchCancelHandler}),(0,r.h)("div",{class:P},(0,r.h)("div",{class:"toast-container",part:"container"},this.renderButtons(h,"start"),void 0!==this.icon&&(0,r.h)("ion-icon",{class:"toast-icon",part:"icon",icon:this.icon,lazy:!1,"aria-hidden":"true"}),(0,r.h)("div",{class:"toast-content",role:"status","aria-atomic":"true","aria-live":"polite"},!o&&void 0!==n&&this.renderHeader("oldHeader","true"),!o&&void 0!==s&&this.renderToastMessage("oldMessage","true"),o&&void 0!==n&&this.renderHeader("header"),o&&void 0!==s&&this.renderToastMessage("header")),this.renderButtons(u,"end"))))}get el(){return(0,r.f)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},O=t=>Object.assign({"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text,[`toast-button-${t.role}`]:void 0!==t.role,"ion-focusable":!0,"ion-activatable":!0},(0,f.g)(t.cssClass));T.style={ios:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host:dir(rtl){left:unset;right:unset;right:0}}}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports (inset-inline-start: 0){.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}}@supports not (inset-inline-start: 0){.toast-wrapper{left:var(--start);right:var(--end)}:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}@supports selector(:dir(rtl)){.toast-wrapper:dir(rtl){left:unset;right:unset;left:var(--end);right:var(--start)}}}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}:host(.ion-color.toast-translucent) .toast-wrapper{background:rgba(var(--ion-color-base-rgb), 0.8)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:15px;padding-bottom:15px}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",md:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host:dir(rtl){left:unset;right:unset;right:0}}}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports (inset-inline-start: 0){.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}}@supports not (inset-inline-start: 0){.toast-wrapper{left:var(--start);right:var(--end)}:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}@supports selector(:dir(rtl)){.toast-wrapper:dir(rtl){left:unset;right:unset;left:var(--end);right:var(--start)}}}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}.toast-content{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:14px;padding-bottom:14px}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-layout-baseline .toast-button-group-start{-webkit-margin-start:8px;margin-inline-start:8px}.toast-layout-stacked .toast-button-group-start{-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px}.toast-layout-baseline .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px}.toast-layout-stacked .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px;margin-bottom:8px}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}"}},4237:(E,v,d)=>{d.d(v,{c:()=>w,g:()=>c,h:()=>r,o:()=>g});var m=d(5861);const r=(i,a)=>null!==a.closest(i),w=(i,a)=>"string"==typeof i&&i.length>0?Object.assign({"ion-color":!0,[`ion-color-${i}`]:!0},a):a,c=i=>{const a={};return(i=>void 0!==i?(Array.isArray(i)?i:i.split(" ")).filter(p=>null!=p).map(p=>p.trim()).filter(p=>""!==p):[])(i).forEach(p=>a[p]=!0),a},f=/^[a-z][a-z0-9+\-.]*:/,g=function(){var i=(0,m.Z)(function*(a,p,y,k){if(null!=a&&"#"!==a[0]&&!f.test(a)){const b=document.querySelector("ion-router");if(b)return null!=p&&p.preventDefault(),b.push(a,y,k)}return!1});return function(p,y,k,b){return i.apply(this,arguments)}}()}}]);