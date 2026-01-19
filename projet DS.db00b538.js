var e={};e=import.meta.resolve("292KQ");class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.pdfSrc=new URL(e).href,console.log("📄 PDF Source:",this.pdfSrc)}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: block;
                    width: 100%;
                    height: 100%;
                    min-height: 900px;
                }

                .pdf-container {
                    width: 100%;
                    height: 100%;
                    min-height: 900px;
                    background: white;
                    display: flex;
                }

                iframe {
                    width: 100%;
                    height: 100%;
                    min-height: 900px;
                    border: none;
                    background: white;
                }
            </style>

            <div class="pdf-container">
                <iframe src="${this.pdfSrc}#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH" type="application/pdf" title="PDF Viewer"></iframe>
            </div>
        `}}customElements.define("xp-pdf-viewer",t),console.log("✅ xp-pdf-viewer component registered");
//# sourceMappingURL=projet DS.db00b538.js.map
