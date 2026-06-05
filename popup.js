document.addEventListener("DOMContentLoaded",()=>{chrome.storage.local.get(["pro"],d=>{if(d.pro)document.getElementById("upgrade-btn").textContent="Pro \u2713";});});
