(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),i=a.n(r),c=(a(5),a(9)),u=a(1);var l=function(){return o.a.createElement("header",{className:"header"})},s=a(7),p=a(8),m=new(function(){function e(t){Object(s.a)(this,e),this._url=t.url,this._id=t.id}return Object(p.a)(e,[{key:"getAppInfo",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}},{key:"_getResponceData",value:function(e){return e.ok?e.json():Promise.reject(new Error("Error ".concat(e.status)))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._id},method:"GET"}).then(this._getResponceData)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._id},method:"GET"}).then(this._getResponceData)}},{key:"patchUserInfo",value:function(e){var t=e.name,a=e.about;return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._id,"Content-Type":"application/json"},method:"PATCH",body:JSON.stringify({name:t,about:a})}).then(this._getResponceData)}},{key:"postNewCard",value:function(e){var t=e.name,a=e.link;return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._id,"Content-Type":"application/json"},method:"POST",body:JSON.stringify({name:t,link:a})}).then(this._getResponceData)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{headers:{authorization:this._id,"Content-Type":"application/json"},method:"DELETE",body:JSON.stringify({id:e})}).then(this._getResponceData)}},{key:"likeCard",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{headers:{authorization:this._id,"Content-Type":"application/json"},method:"PUT"}).then(this._getResponceData)}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{headers:{authorization:this._id,"Content-Type":"application/json"},method:"DELETE"}).then(this._getResponceData)}},{key:"setNewAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._url,"/users/me/avatar"),{headers:{authorization:this._id,"Content-Type":"application/json"},method:"PATCH",body:JSON.stringify({avatar:t})}).then(this._getResponceData)}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-15",id:"b7f21f02-0f3c-4a3e-ae62-e9761e3102fc"}),d=o.a.createContext(),_=o.a.createContext();function f(e){var t=e.card,a=e.onCardClick,n=e.onLikeClick,r=e.onDeleteCard;o.a.useContext(_);var i=o.a.useContext(d),c=t.owner._id===i._id,u="".concat(c?"":"foto-grid__delete-button_invisible"),l=t.likes.some((function(e){return e._id===i._id})),s="".concat(l?"foto-grid__like-button_true":"");return o.a.createElement("div",{className:"foto-grid__section"},o.a.createElement("button",{className:"foto-grid__img-button"},o.a.createElement("img",{src:t.link,alt:t.name,className:"foto-grid__image",onClick:function(){a(t)}})),o.a.createElement("button",{className:"foto-grid__delete-button ".concat(u),onClick:function(){r(t)}}),o.a.createElement("div",{className:"foto-grid__card"},o.a.createElement("h2",{className:"foto-grid__title"},t.name),o.a.createElement("div",null,o.a.createElement("button",{type:"submit",className:"foto-grid__like-button ".concat(s),onClick:function(){n(t)}}),o.a.createElement("p",{className:"foto-grid__like-counter"}))))}var h=function(e){var t=e.onEditProfile,a=e.onAddPlace,n=e.onEditAvatar,r=e.onCardClick,i=e.onLikeClick,c=e.onDeleteCard,u=o.a.useContext(d),l=o.a.useContext(_);return o.a.createElement("main",null,o.a.createElement("section",{className:"profile"},o.a.createElement("button",{style:{backgroundImage:"url(".concat(u.avatar,")")},className:"profile__avatar",onClick:n}),o.a.createElement("div",{className:"profile__info"},o.a.createElement("div",{className:"profile__info-input"},o.a.createElement("h1",{className:"profile__name"},u.name),o.a.createElement("p",{className:"profile__prof"},u.about)),o.a.createElement("button",{type:"button",className:"profile__info-button",onClick:t})),o.a.createElement("button",{type:"button",className:"profile__add-button",onClick:a})),o.a.createElement("section",{className:"foto-grid"},l.map((function(e){return o.a.createElement(f,{key:e._id,onCardClick:r,onLikeClick:i,onDeleteCard:c,card:e})}))))};var v=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__author"},"\xa9 2020 Mesto Russia"))};function E(e){var t=e.title,a=e.name,n=e.children,r=e.isOpen,i=e.onClose,c=e.buttonText,u=e.onSubmit;return o.a.createElement("div",{className:"popup popup_type_".concat(a," ").concat(r&&"popup_open"," ")},o.a.createElement("div",{className:"popup__container"},o.a.createElement("button",{type:"button",onClick:i,className:"popup__close-button"}),o.a.createElement("h3",{className:"popup__title"},t)," ",o.a.createElement("form",{action:"#",className:"popup__form",onSubmit:u,noValidate:!0},n,o.a.createElement("button",{type:"submit",className:"popup__save-button"},c))))}function k(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,r=o.a.useContext(d);o.a.useEffect((function(){s(r.name),f(r.about)}),[r]);var i=o.a.useState(""),c=Object(u.a)(i,2),l=c[0],s=c[1];var p=o.a.useState(""),m=Object(u.a)(p,2),_=m[0],f=m[1];return o.a.createElement(E,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile",isOpen:t,onClose:a,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),n({name:l,about:_})}},o.a.createElement("input",{name:"name",type:"text",id:"name-input",value:l||"",onChange:function(e){s(e.target.value)},className:"popup__input popup__input_name",minLength:"2",maxLength:"40",required:!0}),o.a.createElement("span",{id:"name-input-error",className:"popup__input-error"}),o.a.createElement("input",{name:"about",type:"text",id:"self-input",value:_||"",onChange:function(e){f(e.target.value)},className:"popup__input popup__input_prof",minLength:"2",maxLength:"200",required:!0}),o.a.createElement("span",{id:"self-input-error",className:"popup__input-error"}))}function C(e){var t=e.card,a=e.onClose;return o.a.createElement("div",{className:"popup popup_type_image ".concat(t.link&&"popup_open")},o.a.createElement("div",{className:"popup__container popup__container_img"},o.a.createElement("button",{type:"button",className:"popup__close-button",onClick:a}),o.a.createElement("img",{src:t.link,alt:t.name,className:"popup__imgSrc"}),o.a.createElement("h3",{className:"popup__title popup__title_img-container"},t.name)))}function b(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,r=o.a.useRef("");return o.a.createElement(E,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",children:"",isOpen:t,onClose:a,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),n({avatar:r.current.value})}},o.a.createElement("input",{name:"link",type:"url",ref:r,id:"link-input",className:"popup__input popup__input_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0}),o.a.createElement("span",{id:"link-input-error",className:"popup__input-error"}))}function g(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace;o.a.useContext(_);var r=o.a.useState(),i=Object(u.a)(r,2),c=i[0],l=i[1],s=o.a.useState(),p=Object(u.a)(s,2),m=p[0],d=p[1];return o.a.createElement(E,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",isOpen:t,onClose:a,buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(e){e.preventDefault(),n({name:c,link:m})}}," ",o.a.createElement("input",{name:"name",type:"text",id:"mark-input",value:c||"",onChange:function(e){l(e.target.value)},className:"popup__input popup__input_mark",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0}),o.a.createElement("span",{id:"mark-input-error",className:"popup__input-error"}),o.a.createElement("input",{name:"link",type:"url",id:"link-input",value:m||"",onChange:function(e){d(e.target.value)},className:"popup__input popup__input_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),o.a.createElement("span",{id:"link-input-error",className:"popup__input-error"}))}var N=function(){var e=o.a.useState({}),t=Object(u.a)(e,2),a=t[0],n=t[1];function r(){f(!1),D(!1),S(!1),A({})}o.a.useEffect((function(){m.getUserInfo().then((function(e){n(e)})).catch((function(e){console.log(e)}))}),[]);var i=o.a.useState(!1),s=Object(u.a)(i,2),p=s[0],f=s[1],N=o.a.useState(!1),y=Object(u.a)(N,2),O=y[0],S=y[1],j=o.a.useState(!1),x=Object(u.a)(j,2),T=x[0],D=x[1],w=o.a.useState({}),L=Object(u.a)(w,2),P=L[0],A=L[1],U=o.a.useState([]),I=Object(u.a)(U,2),R=I[0],z=I[1];return o.a.useEffect((function(){m.getInitialCards().then((function(e){z(e)})).catch((function(e){console.log(e)}))}),[]),o.a.createElement("div",{className:"page"},o.a.createElement(d.Provider,{value:a},o.a.createElement(_.Provider,{value:R},o.a.createElement(b,{isOpen:T,onClose:r,onUpdateAvatar:function(e){var t=e.avatar;m.setNewAvatar({avatar:t}).then((function(e){n(e),r()}))}}),o.a.createElement(E,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"card-delete",buttonText:"\u0414\u0430"}),o.a.createElement(k,{isOpen:p,onClose:r,onUpdateUser:function(e){var t=e.name,a=e.about;m.patchUserInfo({name:t,about:a}).then((function(e){n(e),r()}))}}),o.a.createElement(g,{isOpen:O,onClose:r,onAddPlace:function(e){var t=e.name,a=e.link;m.postNewCard({name:t,link:a}).then((function(e){z([e].concat(Object(c.a)(R))),r()}))}}),o.a.createElement(C,{card:P,onClose:r}),o.a.createElement(l,null),o.a.createElement(h,{onEditProfile:function(){f(!0)},onEditAvatar:function(){D(!0)},onAddPlace:function(){S(!0)},onCardClick:function(e){A(e)},onLikeClick:function(e){e.likes.some((function(e){return e._id===a._id}))?m.deleteLikeCard(e._id).then((function(t){var a=R.map((function(a){return a._id===e._id?t:a}));z(a)})):m.likeCard(e._id).then((function(t){var a=R.map((function(a){return a._id===e._id?t:a}));z(a)}))},onDeleteCard:function(e){}}),o.a.createElement(v,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.bf6f223d.chunk.js.map