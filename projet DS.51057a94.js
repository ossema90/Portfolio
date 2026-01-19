var t={};t=import.meta.resolve("iIkQd");var e={};e=import.meta.resolve("eTMBn");var i={};i=import.meta.resolve("1TCan");class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.isMaximized=!1,this.originalStyles={},this.isDragging=!1,this.closeBtn=new URL(t).href,this.minimiseBtn=new URL(e).href,this.maximiseBtn=new URL(i).href}connectedCallback(){this.render()}render(){let t=this.getAttribute("title")||"Window";this.shadowRoot.innerHTML=`
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
                    pointer-events: none;
                }
                :host([open]) { 
                    display: flex;
                    pointer-events: all;
                }

                .window {
                    width: 500px;
                    border: 3px solid;
                    border-color: #0054e3 #0054e3 #0054e3 #0054e3;
                    box-shadow: 5px 5px 15px rgba(0,0,0,0.8);
                    position: absolute;
                    pointer-events: all;
                    display: flex;
                    flex-direction: column;
                }

                .window.maximized {
                    width: calc(100vw - 160px) !important;
                    height: calc(100vh - 160px - 40px) !important;
                    top: 80px !important;
                    left: 80px !important;
                }

                .titlebar {
                    background: linear-gradient(to bottom, #0997ff, #0053ee 8%, #0050ee 40%, #06f 88%, #06f 93%, #005bff 95%, #003dd7 96%, #003dd7);
                    color: white;
                    padding: 3px 6px;
                    font-weight: bold;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: move;
                    user-select: none;
                    flex-shrink: 0;
                }

                .titlebar-text {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }

                .titlebar-buttons {
                    display: flex;
                    gap: 2px;
                }

                .titlebar button {
                    width: 16px;
                    height: 14px;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                }

                .titlebar button img {
                    width: 100%;
                    height: 100%;
                    display: block;
                }

                .content {
                    background: #ece9d8;
                    border-top: 1px solid #ffffff;
                    padding: 16px;
                    min-height: 200px;
                    max-height: 400px;
                    overflow-y: auto;
                    flex: 1;
                }

                .window.maximized .content {
                    max-height: none;
                }

                /* Style the slotted content */
                ::slotted(*) {
                    margin: 0;
                    font-family: Tahoma, sans-serif;
                }

                ::slotted(h1) {
                    font-size: 18px;
                    margin-bottom: 12px;
                    color: #000;
                }

                ::slotted(h2) {
                    font-size: 16px;
                    margin-bottom: 10px;
                    color: #000;
                }

                ::slotted(h3) {
                    font-size: 14px;
                    margin-bottom: 8px;
                    color: #000;
                }

                ::slotted(p) {
                    font-size: 11px;
                    margin-bottom: 8px;
                    line-height: 1.4;
                }

                ::slotted(ul), ::slotted(ol) {
                    margin-left: 20px;
                    margin-bottom: 8px;
                }

                ::slotted(li) {
                    font-size: 11px;
                    margin-bottom: 4px;
                }
            </style>

            <div class="window">
                <div class="titlebar">
                    <div class="titlebar-text">
                        <span>\u{1F4CB}</span>
                        <span>${t}</span>
                    </div>
                    <div class="titlebar-buttons">
                        <button aria-label="Minimize" class="btn-minimize">
                            <img src="${this.minimiseBtn}" alt="Minimize" />
                        </button>
                        <button aria-label="Maximize" class="btn-maximize">
                            <img src="${this.maximiseBtn}" alt="Maximize" />
                        </button>
                        <button aria-label="Close" class="btn-close">
                            <img src="${this.closeBtn}" alt="Close" />
                        </button>
                    </div>
                </div>
                <div class="content">
                    <slot></slot>
                </div>
            </div>
        `;let e=this.shadowRoot.querySelector(".window");this.shadowRoot.querySelector(".btn-close").addEventListener("click",t=>{t.stopPropagation(),this.close()}),this.shadowRoot.querySelector(".btn-minimize").addEventListener("click",t=>{t.stopPropagation(),this.minimize()}),this.shadowRoot.querySelector(".btn-maximize").addEventListener("click",t=>{t.stopPropagation(),this.toggleMaximize()});let i=this.shadowRoot.querySelector(".titlebar");i.addEventListener("mousedown",t=>{if("BUTTON"===t.target.tagName||"IMG"===t.target.tagName||this.isMaximized)return;this.isDragging=!0;let i=e.getBoundingClientRect(),o=t.clientX-i.left,s=t.clientY-i.top,n=t=>{if(!this.isDragging)return;let i=t.clientX-o,n=t.clientY-s;e.style.left=i+"px",e.style.top=n+"px"},l=()=>{this.isDragging=!1,document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",l)}),i.addEventListener("dblclick",t=>{"BUTTON"!==t.target.tagName&&"IMG"!==t.target.tagName&&this.toggleMaximize()})}open(){this.setAttribute("open","");let t=this.shadowRoot.querySelector(".window");if(!t.style.left&&!t.style.top){let e=window.innerWidth,i=window.innerHeight;t.style.left=(e-500)/2+"px",t.style.top=(i-400)/2+"px"}console.log("Tab window opened")}close(){this.removeAttribute("open"),this.isMaximized=!1,this.shadowRoot.querySelector(".window").classList.remove("maximized"),console.log("Tab window closed")}minimize(){this.close(),console.log("Tab window minimized")}toggleMaximize(){let t=this.shadowRoot.querySelector(".window");this.isMaximized?(t.classList.remove("maximized"),this.originalStyles.left&&(t.style.left=this.originalStyles.left),this.originalStyles.top&&(t.style.top=this.originalStyles.top),this.isMaximized=!1,console.log("Tab window restored")):(this.originalStyles={left:t.style.left,top:t.style.top},t.classList.add("maximized"),this.isMaximized=!0,console.log("Tab window maximized"))}toggle(){this.hasAttribute("open")?this.close():this.open()}}customElements.define("xp-tab",o),console.log("✅ xp-tab component registered");
//# sourceMappingURL=projet DS.51057a94.js.map
