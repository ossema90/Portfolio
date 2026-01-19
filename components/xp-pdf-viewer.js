class XPPdfViewer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        // Static PDF path using new URL - resolved relative to this component file
        this.pdfSrc = new URL('../assets/cv/Resume.pdf', import.meta.url).href;
        
        console.log('📄 PDF Source:', this.pdfSrc);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
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
        `;
    }
}

customElements.define('xp-pdf-viewer', XPPdfViewer);
console.log('✅ xp-pdf-viewer component registered');