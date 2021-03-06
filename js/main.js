
/**
 * Handles toggling the navigation menu for small screens.
 */
( function() {
	var button = document.getElementById( 'topnav' ).getElementsByTagName( 'div' )[0],
	    menu   = document.getElementById( 'topnav' ).getElementsByTagName( 'ul' )[0];

	if ( undefined === button )
		return false;

	// Hide button if menu is missing or empty.
	if ( undefined === menu || ! menu.childNodes.length ) {
		button.style.display = 'none';
		return false;
	}

	button.onclick = function() {
		if ( -1 == menu.className.indexOf( 'srt-menu' ) )
			menu.className = 'srt-menu';

		if ( -1 != button.className.indexOf( 'toggled-on' ) ) {
			button.className = button.className.replace( ' toggled-on', '' );
			menu.className = menu.className.replace( ' toggled-on', '' );
		} else {
			button.className += ' toggled-on';
			menu.className += ' toggled-on';
		}
	};
} )();

/**
* Lazy load videos from npmjs.com/package/lazyframe
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.lazyframe=t()}(this,function(){"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},t=function(){function t(t){if(d=e({},m,arguments.length<=1?void 0:arguments[1]),"string"==typeof t)for(var i=document.querySelectorAll(t),r=0;r<i.length;r++)n(i[r]);else if("undefined"==typeof t.length)n(t);else if(t.length>1)for(var o=0;o<t.length;o++)n(t[o]);else n(t[0]);d.lazyload&&u()}function n(e){var t=this;if(e instanceof HTMLElement!=!1&&!e.classList.contains("lazyframe--loaded")){var n={el:e,settings:i(e)};n.el.addEventListener("click",function(){n.el.appendChild(n.iframe);var i=e.querySelectorAll("iframe");n.settings.onAppend.call(t,i[0])}),d.lazyload?l(n):a(n,!!n.settings.thumbnail)}}function i(t){var n=Array.prototype.slice.apply(t.attributes).filter(function(e){return""!==e.value}).reduce(function(e,t){var n=0===t.name.indexOf("data-")?t.name.split("data-")[1]:t.name;return e[n]=t.value,e},{}),i=e({},d,n,{y:t.offsetTop,parameters:r(n.src)});if(i.vendor){var o=i.src.match(v.regex[i.vendor]);i.id=v.condition[i.vendor](o)}return i}function r(e){var t=e.split("?");if(t[1]){t=t[1];var n=t.indexOf("autoplay")!==-1;return n?t:t+"&autoplay=1"}return"autoplay=1"}function o(e){return!!e.vendor&&((!e.title||!e.thumbnail)&&("youtube"!==e.vendor||!!e.apikey))}function a(e){var t=this;o(e.settings)?s(e,function(n,i){if(!n){var r=i[0],o=i[1];if(o.settings.title||(o.settings.title=v.response[o.settings.vendor].title(r)),!o.settings.thumbnail){var a=v.response[o.settings.vendor].thumbnail(r);o.settings.thumbnail=a,e.settings.onThumbnailLoad.call(t,a)}l(o,!0)}}):l(e,!0)}function s(e,t){var n=v.endpoints[e.settings.vendor](e.settings),i=new XMLHttpRequest;i.open("GET",n,!0),i.onload=function(){if(i.status>=200&&i.status<400){var n=JSON.parse(i.responseText);t(null,[n,e])}else t(!0)},i.onerror=function(){t(!0)},i.send()}function u(){function e(e,t,n){var i=void 0;return function(){var r=this,o=arguments,a=function(){i=null,n||e.apply(r,o)},s=n&&!i;clearTimeout(i),i=setTimeout(a,t),s&&e.apply(r,o)}}var t=this,n=window.innerHeight,i=f.length,r=function(e,n){e.settings.initialized=!0,e.el.classList.add("lazyframe--loaded"),i--,a(e),e.settings.initinview&&e.el.click(),e.settings.onLoad.call(t,e)};f.filter(function(e){return e.settings.y<n}).forEach(r);var o=e(function(){u=s<window.scrollY,s=window.scrollY,u&&f.filter(function(e){return e.settings.y<n+s&&e.settings.initialized===!1}).forEach(r),0===i&&window.removeEventListener("scroll",o,!1)},d.debounce),s=0,u=!1;window.addEventListener("scroll",o,!1)}function l(e,t){if(e.iframe=c(e.settings),e.settings.thumbnail&&t&&(e.el.style.backgroundImage="url("+e.settings.thumbnail+")"),e.settings.title&&0===e.el.children.length){var n=document.createDocumentFragment(),i=document.createElement("span");i.className="lazyframe__title",i.innerHTML=e.settings.title,n.appendChild(i),e.el.appendChild(n)}d.lazyload||(e.el.classList.add("lazyframe--loaded"),e.settings.onLoad.call(this,e),f.push(e)),e.settings.initialized||f.push(e)}function c(e){var t=document.createDocumentFragment(),n=document.createElement("iframe");if(e.vendor&&(e.src=v.src[e.vendor](e)),n.setAttribute("id","lazyframe-"+e.id),n.setAttribute("src",e.src),n.setAttribute("frameborder",0),n.setAttribute("allowfullscreen",""),"vine"===e.vendor){var i=document.createElement("script");i.setAttribute("src","https://platform.vine.co/static/scripts/embed.js"),t.appendChild(i)}return t.appendChild(n),t}var d=void 0,f=[],m={vendor:void 0,id:void 0,src:void 0,thumbnail:void 0,title:void 0,apikey:void 0,initialized:!1,parameters:void 0,y:void 0,debounce:250,lazyload:!0,initinview:!1,onLoad:function(e){},onAppend:function(e){},onThumbnailLoad:function(e){}},v={regex:{youtube:/(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/,vimeo:/vimeo\.com\/(?:video\/)?([0-9]*)(?:\?|)/,vine:/vine.co\/v\/(.*)/},condition:{youtube:function(e){return!(!e||11!=e[1].length)&&e[1]},vimeo:function(e){return!!(e&&9===e[1].length||8===e[1].length)&&e[1]},vine:function(e){return!(!e||11!==e[1].length)&&e[1]}},src:{youtube:function(e){return"https://www.youtube.com/embed/"+e.id+"/?"+e.parameters},vimeo:function(e){return"https://player.vimeo.com/video/"+e.id+"/?"+e.parameters},vine:function(e){return"https://vine.co/v/"+e.id+"/embed/simple"}},endpoints:{youtube:function(e){return"https://www.googleapis.com/youtube/v3/videos?id="+e.id+"&key="+e.apikey+"&fields=items(snippet(title,thumbnails))&part=snippet"},vimeo:function(e){return"https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/"+e.id},vine:function(e){return"https://vine.co/oembed.json?url=https%3A%2F%2Fvine.co%2Fv%2F"+e.id}},response:{youtube:{title:function(e){return e.items[0].snippet.title},thumbnail:function(e){var t=e.items[0].snippet.thumbnails,n=t.maxres?t.maxres.url:t.standard.url;return n}},vimeo:{title:function(e){return e.title},thumbnail:function(e){return e.thumbnail_url}},vine:{title:function(e){return e.title},thumbnail:function(e){return e.thumbnail_url}}}};return t},n=t();return n});
lazyframe('.lazyframe', {
      apikey: 'AIzaSyBAzGMClR_sRJwmI_1coMQ2dlrTajW86MA' // Sorry, will only work on this domain
    });