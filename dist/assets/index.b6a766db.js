(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=new IntersectionObserver(o=>{o.forEach(r=>{r.isIntersecting?r.target.classList.add("show"):r.target.classList.remove("show")})}),u=document.querySelectorAll(".hidden");u.forEach(o=>l.observe(o));const d=document.querySelector(".hamburger"),a=document.querySelector(".close");document.querySelector("#navbar");const s=document.querySelector("main"),f=document.querySelector("#navbar-list");d.addEventListener("click",()=>s.classList.add("blur"));a.addEventListener("click",()=>s.classList.remove("blur"));f.addEventListener("click",()=>s.classList.remove("blur"));const m=new Date().getFullYear();document.querySelector(".yearCopyRight").prepend(`Copyright \xA9${m} Bobby Woody`);
