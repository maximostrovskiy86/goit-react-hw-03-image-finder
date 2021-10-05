(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2J8yT",main:"ImageGallery_main__161j_"}},12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2iCdG",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2RaYg"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3zur2",Modal:"Modal_Modal__JzWj5"}},15:function(e,t,a){e.exports={App:"App_App__2s_Fq"}},17:function(e,t,a){e.exports={Button:"Button_Button__UUCg_"}},23:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(8),c=a.n(o),l=(a(23),a(3)),i=a(4),s=a(6),u=a(5),h=a(15),m=a.n(h),p=a(7),d=a.n(p),g=a(0),f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleInput=function(t){var a=t.target.value;e.setState({inputValue:a.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.inputValue.trim()?(e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f")},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:d.a.Searchbar,children:Object(g.jsxs)("form",{onSubmit:this.handleSubmit,className:d.a.SearchForm,children:[Object(g.jsx)("button",{type:"submit",className:d.a.SearchFormButton,children:Object(g.jsx)("span",{className:d.a.SearchFormButtonLabel,children:"Search"})}),Object(g.jsx)("input",{className:d.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleInput,value:this.state.inputValue})]})})}}]),a}(n.Component),b=f,j=a(10),y=a.n(j),S=a(14),O=a(16),_=a(11),v=a.n(_),I=(a(26),a(12)),x=a.n(I),w=function(e){var t=e.src,a=e.alt,n=e.modalUrl,r=e.onClickCurrentImage;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("li",{className:x.a.ImageGalleryItem,children:Object(g.jsx)("img",{src:t,alt:a,className:x.a.ImageGalleryItemImage,"data-url":n,onClick:r})})})},C=a(17),F=a.n(C),M=function(e){var t=e.LoadMore;return Object(g.jsx)("button",{type:"button",className:F.a.Button,onClick:t,children:"Load more"})},k=a(13),L=a.n(k),G=document.querySelector("#modal-root"),N=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onCLoseModal=function(t){"Escape"===t.code&&e.props.onClose()},e.onOverlayClose=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(e){window.addEventListener("keydown",this.onCLoseModal),document.querySelector("body").style.overflow="hidden"}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onCLoseModal),document.querySelector("body").style.overflow="auto"}},{key:"render",value:function(){return Object(o.createPortal)(Object(g.jsx)("div",{className:L.a.Overlay,onClick:this.onOverlayClose,children:Object(g.jsx)("div",{className:L.a.Modal,children:this.props.children})}),G)}}]),a}(n.Component),B=N,V="https://pixabay.com/api/?",A="23297096-fdec21a8bcbab7faa251f0233",U=function(e){return fetch(V+"q=".concat(e,"&page=1&key=").concat(A,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()}))},q=function(e,t){return fetch(V+"q=".concat(e,"&page=").concat(t,"&key=").concat(A,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()}))},T=a(18),z=a.n(T),D=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={gallery:[],page:1,showModal:!1,largeImg:"",error:null,loading:!1},e.onLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.findCurrentImages=function(t){var a=t.target.dataset.url;e.setState((function(e){return{showModal:!e.showModal,largeImg:a}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(O.a)(y.a.mark((function e(t,a){var n=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.inputValue!==t.inputValue&&(this.setState({loading:!0}),setTimeout((function(){U(n.props.inputValue).then((function(e){n.setState((function(t){return{gallery:e.hits,page:1}}))})).catch((function(e){console.log(e),n.setState({error:e})})).finally((function(){return n.setState({loading:!1})}))}),500)),this.state.page!==a.page&&1!==this.state.page&&(this.setState({loading:!0}),setTimeout((function(){q(n.props.inputValue,n.state.page).then((function(e){n.setState((function(t){return{gallery:[].concat(Object(S.a)(t.gallery),Object(S.a)(e.hits))}}))})).catch((function(e){n.setState({error:e})})).finally((function(){return n.setState({loading:!1})}))}),500)),this.state.gallery!==a.gallery&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 3:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.gallery,n=t.showModal,r=t.largeImg,o=t.error,c=t.loading;return Object(g.jsxs)("main",{className:v.a.main,children:[o&&Object(g.jsx)("h2",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 \u0435\u0449\u0451 \u0440\u0430\u0437"}),Object(g.jsx)("ul",{className:v.a.ImageGallery,children:a.map((function(t){return Object(g.jsx)(w,{src:t.webformatURL,alt:t.tags,modalUrl:t.largeImageURL,onClickCurrentImage:e.findCurrentImages},t.id)}))}),c&&Object(g.jsx)(z.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80}),n&&Object(g.jsx)(B,{onClose:this.toggleModal,children:Object(g.jsx)("img",{src:r,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"})}),a.length>0&&Object(g.jsx)(M,{LoadMore:this.onLoadMore})]})}}]),a}(n.Component),E=D,J=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleFormSearch=function(t){e.setState({value:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:m.a.App,children:[Object(g.jsx)(b,{onSubmit:this.handleFormSearch}),Object(g.jsx)(E,{inputValue:this.state.value})]})}}]),a}(n.Component),P=J;c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(P,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3nP09",SearchForm:"Searchbar_SearchForm__l0-6e",SearchFormButton:"Searchbar_SearchFormButton__18FfJ","SearchForm-button":"Searchbar_SearchForm-button__3pqnD",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2QS5Z",SearchFormInput:"Searchbar_SearchFormInput__3FzPn"}}},[[47,1,2]]]);
//# sourceMappingURL=main.8a08973d.chunk.js.map