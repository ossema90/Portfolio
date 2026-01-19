class XPTab extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.isMaximized = false;
        this.originalStyles = {};
        this.isDragging = false;
        
        // Import button images
        this.closeBtn = new URL('../assets/close.png', import.meta.url).href;
        this.minimiseBtn = new URL('../assets/minimise.png', import.meta.url).href;
        this.maximiseBtn = new URL('../assets/maximise.png', import.meta.url).href;
    }

    connectedCallback() {
        this.render();
    }

    

    render() {
        const title = this.getAttribute('title') || 'Window';
        
        this.shadowRoot.innerHTML = `
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
                        <span>📋</span>
                        <span>${title}</span>
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
        `;

        // Button functionality
        const windowEl = this.shadowRoot.querySelector('.window');
        
        // Close button
        this.shadowRoot.querySelector('.btn-close').addEventListener('click', (e) => {
            e.stopPropagation();
            this.close();
        });

        // Minimize button
        this.shadowRoot.querySelector('.btn-minimize').addEventListener('click', (e) => {
            e.stopPropagation();
            this.minimize();
        });

        // Maximize button
        this.shadowRoot.querySelector('.btn-maximize').addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMaximize();
        });

        // Make draggable (only when not maximized)
        const titlebar = this.shadowRoot.querySelector('.titlebar');
        
        titlebar.addEventListener('mousedown', (e) => {
            // Don't drag if clicking on buttons
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'IMG') return;
            if (this.isMaximized) return;
            
            this.isDragging = true;
            
            // Get current window position
            const rect = windowEl.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const offsetY = e.clientY - rect.top;
            
            const onMouseMove = (e) => {
                if (!this.isDragging) return;
                
                // Calculate new position
                const newLeft = e.clientX - offsetX;
                const newTop = e.clientY - offsetY;
                
                // Apply new position
                windowEl.style.left = newLeft + 'px';
                windowEl.style.top = newTop + 'px';
            };
            
            const onMouseUp = () => {
                this.isDragging = false;
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            };
            
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });

        // Double-click titlebar to maximize/restore
        titlebar.addEventListener('dblclick', (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'IMG') return;
            this.toggleMaximize();
        });
    }

    // Public methods
    open() {
        this.setAttribute('open', '');
        
        // Center the window on first open
        const windowEl = this.shadowRoot.querySelector('.window');
        if (!windowEl.style.left && !windowEl.style.top) {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const windowWidth = 500;
            const windowHeight = 400;
            
            windowEl.style.left = ((viewportWidth - windowWidth) / 2) + 'px';
            windowEl.style.top = ((viewportHeight - windowHeight) / 2) + 'px';
        }
        
        console.log('Tab window opened');
    }

    close() {
        this.removeAttribute('open');
        this.isMaximized = false;
        this.shadowRoot.querySelector('.window').classList.remove('maximized');
        console.log('Tab window closed');
    }

    minimize() {
        this.close();
        console.log('Tab window minimized');
    }

    toggleMaximize() {
        const windowEl = this.shadowRoot.querySelector('.window');
        
        if (this.isMaximized) {
            windowEl.classList.remove('maximized');
            if (this.originalStyles.left) windowEl.style.left = this.originalStyles.left;
            if (this.originalStyles.top) windowEl.style.top = this.originalStyles.top;
            this.isMaximized = false;
            console.log('Tab window restored');
        } else {
            this.originalStyles = {
                left: windowEl.style.left,
                top: windowEl.style.top
            };
            
            windowEl.classList.add('maximized');
            this.isMaximized = true;
            console.log('Tab window maximized');
        }
    }

    toggle() {
        if (this.hasAttribute('open')) {
            this.close();
        } else {
            this.open();
        }
    }
}

customElements.define('xp-tab', XPTab);
console.log('✅ xp-tab component registered');