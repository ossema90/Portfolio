class t extends HTMLElement{constructor(){super();let t=this.attachShadow({mode:"open"});t.innerHTML=`
          <style>
              :host {
                  position: fixed;
                  inset: 0;
                  display: none;
                  align-items: center;
                  justify-content: center;
                  z-index: 9999;
                  font-family: Tahoma, sans-serif;
                  font-size: 11px;
              }
              :host([open]) { display: flex; }

              .window {
                  background: #d4d0c8;
                  border-top: 2px solid white;
                  border-left: 2px solid white;
                  border-right: 2px solid black;
                  border-bottom: 2px solid black;
                  box-shadow: 5px 5px 15px rgba(0,0,0,0.8);
                  min-width: 300px;
                  max-width: 90vw;
              }
              .titlebar {
                  background: linear-gradient(to bottom, #1c5efe, #003cff);
                  color: white;
                  padding: 3px 6px;
                  font-weight: bold;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  cursor: move;
              }
              .titlebar button {
                  width: 16px; 
                  height: 14px;
                  background: #c0c0c0;
                  border: 1px solid black;
                  font-size: 10px;
                  cursor: pointer;
              }
              .body { 
                  padding: 15px; 
                  color: black; 
              }
              .footer {
                  padding: 10px;
                  text-align: right;
                  background: #d4d0c8;
                  border-top: 1px solid #808080;
              }
              .footer button {
                  margin-left: 8px;
                  padding: 4px 16px;
                  background: #c0c0c0;
                  border: 2px outset #c0c0c0;
                  cursor: pointer;
              }
              .footer button:active {
                  border: 2px inset #c0c0c0;
              }
          </style>

          <div class="window">
              <div class="titlebar">
                  <div class="title">Modal Title</div>
                  <button aria-label="Close">\u{2715}</button>
              </div>
              <div class="body">
                  <slot></slot>
              </div>
              <div class="footer">
                  <slot name="footer">
                      <button class="ok">OK</button>
                      <button class="cancel">Cancel</button>
                  </slot>
              </div>
          </div>
      `;let e=this.getAttribute("title")||"Window";t.querySelector(".title").textContent=e,t.querySelector('button[aria-label="Close"]').onclick=()=>this.close();let o=t.querySelector(".ok"),n=t.querySelector(".cancel");o&&o.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("confirm")),this.close()}),n&&n.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("cancel")),this.close()}),t.querySelector(".titlebar").addEventListener("mousedown",t=>{if("BUTTON"===t.target.tagName)return;let e=this.getBoundingClientRect(),o=t.clientX-e.left,n=t.clientY-e.top,i=t=>{this.style.left=t.clientX-o+"px",this.style.top=t.clientY-n+"px",this.style.transform="none"};document.addEventListener("mousemove",i),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",i)},{once:!0})})}open(){this.setAttribute("open",""),console.log("Modal opened")}close(){this.removeAttribute("open"),console.log("Modal closed")}toggle(){this.hasAttribute("open")?this.close():this.open()}}customElements.define("xp-modal",t),console.log("✅ xp-modal component registered");
//# sourceMappingURL=projet DS.5db35467.js.map
