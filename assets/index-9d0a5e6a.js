(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();(()=>{const n={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};n.openModalBtn.addEventListener("click",o),n.closeModalBtn.addEventListener("click",o);function o(){n.modal.classList.toggle("is-hidden")}})();(()=>{const n=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),r=document.querySelectorAll(".mobile-modal-link"),e=()=>{const t=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!t),n.classList.toggle("is-open");const l=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body)};r.forEach(t=>{t.addEventListener("click",e)}),o.addEventListener("click",e),c.addEventListener("click",e),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(n.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(function(n){typeof n.matches!="function"&&(n.matches=n.msMatchesSelector||n.mozMatchesSelector||n.webkitMatchesSelector||function(o){for(var c=this,r=(c.document||c.ownerDocument).querySelectorAll(o),e=0;r[e]&&r[e]!==c;)++e;return Boolean(r[e])}),typeof n.closest!="function"&&(n.closest=function(o){for(var c=this;c&&c.nodeType===1;){if(c.matches(o))return c;c=c.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var n=document.querySelectorAll(".js-open-modal"),o=document.querySelector(".js-overlay-modal"),c=document.querySelectorAll(".js-modal-close");n.forEach(function(r){r.addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("data-modal"),l=document.querySelector('.modal[data-modal="'+t+'"]');l.classList.add("active"),o.classList.add("active")})}),c.forEach(function(r){r.addEventListener("click",function(e){var t=this.closest(".modal");t.classList.remove("active"),o.classList.remove("active")})}),document.body.addEventListener("keyup",function(r){var e=r.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),o.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});
