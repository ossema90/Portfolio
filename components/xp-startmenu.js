class XpStartMenu extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        
        // Import assets
        const profile = new URL('../assets/profile.jpg', import.meta.url).href;
        const xpShutdown = new URL('../assets/shutdown.png', import.meta.url).href;
        const xpLogOff = new URL('../assets/logoff.png', import.meta.url).href;
        const helpIcon = new URL('../assets/help.png', import.meta.url).href;
        const pdfIcon = new URL('../assets/pdf.png', import.meta.url).href;
        const folderIcon = new URL('../assets/folder.png', import.meta.url).href;
        const msnIcon = new URL('../assets/msn.png', import.meta.url).href;
        const mediaplayerIcon = new URL('../assets/mediaplayer.png', import.meta.url).href;

        shadow.innerHTML = `
            <style>
                :host {
                    position: fixed;
                    bottom: 30px;
                    left: 0;
                    width: 380px;
                    background: transparent;
                    font-family: 'Tahoma', sans-serif;
                    font-size: 11px;
                    display: none;
                    z-index: 10000;
                    filter: drop-shadow(3px 3px 8px rgba(0,0,0,0.5));
                }
                
                :host([open]) { 
                    display: block;
                    animation: slideUp 0.2s ease-out;
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .start-menu {
                    border-radius: 6px 6px 0 0;
                    overflow: hidden;
                    border: 1px solid #0054e3;
                }

                /* User Header */
                .user-header {
                    background: linear-gradient(180deg, 
                        #0058e6 0%, 
                        #3a8cf4 8%, 
                        #5ba0f7 15%, 
                        #0058e6 30%, 
                        #0050d8 50%, 
                        #0058e6 70%, 
                        #3a8cf4 85%, 
                        #0050d8 100%
                    );
                    padding: 6px 8px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    border-bottom: 1px solid #0040a0;
                }

                .user-avatar {
                    width: 48px;
                    height: 48px;
                    border: 2px solid #ffffff;
                    border-radius: 4px;
                    overflow: hidden;
                    box-shadow: 
                        0 0 0 1px #0040a0,
                        2px 2px 4px rgba(0,0,0,0.3);
                    background: #ffffff;
                }

                .user-avatar img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .user-name {
                    color: #ffffff;
                    font-size: 14px;
                    font-weight: bold;
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
                    letter-spacing: 0.3px;
                }

                /* Main Content Area */
                .main-content {
                    display: flex;
                    background: #ffffff;
                }

                /* Left Panel - Pinned & Recent Programs */
                .left-panel {
                    width: 190px;
                    background: #ffffff;
                    padding: 4px 0;
                    border-right: 1px solid #d6d6d6;
                }

                .panel-title {
                    padding: 6px 10px 4px 10px;
                    font-size: 10px;
                    color: #0054e3;
                    font-weight: bold;
                    border-bottom: 1px solid #d6d6d6;
                    margin-bottom: 2px;
                }

                /* Right Panel - Places */
                .right-panel {
                    width: 190px;
                    background: linear-gradient(180deg, #d3e5fa 0%, #c1d9f7 100%);
                    padding: 4px 0;
                }

                /* Menu Items */
                .menu-item {
                    padding: 5px 8px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: #000000;
                    min-height: 28px;
                    transition: background 0.1s ease;
                    position: relative;
                }

                .menu-item:hover {
                    background: #3169c6;
                    color: #ffffff;
                }

                .menu-item:hover .item-icon {
                    filter: brightness(1.1);
                }

                .menu-item:hover .item-description {
                    color: #d0e0ff;
                }

                .item-icon {
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .item-icon img {
                    width: 32px;
                    height: 32px;
                    object-fit: contain;
                }

                .item-icon.small img {
                    width: 24px;
                    height: 24px;
                }

                .item-text {
                    display: flex;
                    flex-direction: column;
                    gap: 1px;
                    overflow: hidden;
                }

                .item-name {
                    font-size: 11px;
                    font-weight: normal;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .item-name.bold {
                    font-weight: bold;
                }

                .item-description {
                    font-size: 10px;
                    color: #808080;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                /* Right Panel Items */
                .right-panel .menu-item {
                    min-height: 24px;
                    padding: 4px 10px;
                }

                .right-panel .menu-item:hover {
                    background: #3169c6;
                }

                .right-panel .item-icon {
                    width: 24px;
                    height: 24px;
                    font-size: 18px;
                }

                .right-panel .item-name {
                    font-weight: bold;
                }

                .right-panel .item-name.normal {
                    font-weight: normal;
                }

                /* Separator */
                .separator {
                    height: 1px;
                    background: #d6d6d6;
                    margin: 4px 8px;
                }

                .right-panel .separator {
                    background: #a8c8e8;
                    margin: 4px 10px;
                }

                /* All Programs Button */
                .all-programs {
                    border-top: 1px solid #d6d6d6;
                    padding: 6px 8px;
                    margin-top: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 6px;
                    cursor: pointer;
                    transition: background 0.1s ease;
                }

                .all-programs:hover {
                    background: #3169c6;
                    color: #ffffff;
                }

                .all-programs-text {
                    font-size: 11px;
                    font-weight: bold;
                }

                .all-programs-arrow {
                    font-size: 10px;
                    color: #006600;
                }

                .all-programs:hover .all-programs-arrow {
                    color: #90ff90;
                }

                /* Bottom Section */
                .bottom-section {
                    background: linear-gradient(180deg, 
                        #0058e6 0%, 
                        #3a8cf4 8%, 
                        #5ba0f7 15%, 
                        #0058e6 30%, 
                        #0050d8 50%, 
                        #0058e6 70%, 
                        #3a8cf4 85%, 
                        #0050d8 100%
                    );
                    padding: 6px 8px;
                    display: flex;
                    justify-content: flex-end;
                    gap: 8px;
                    border-top: 1px solid #0040a0;
                }

                .bottom-btn {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    padding: 4px 10px;
                    cursor: pointer;
                    color: #ffffff;
                    font-size: 11px;
                    border-radius: 3px;
                    transition: all 0.1s ease;
                    border: 1px solid transparent;
                }

                .bottom-btn:hover {
                    background: rgba(255,255,255,0.2);
                    border: 1px solid rgba(255,255,255,0.3);
                }

                .bottom-btn:active {
                    background: rgba(0,0,0,0.1);
                }

                .bottom-btn img {
                    width: 22px;
                    height: 22px;
                    filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.3));
                }

                .bottom-btn span {
                    text-shadow: 1px 1px 1px rgba(0,0,0,0.4);
                    font-weight: normal;
                }

                /* Scrollbar */
                .left-panel::-webkit-scrollbar,
                .right-panel::-webkit-scrollbar {
                    width: 14px;
                }

                .left-panel::-webkit-scrollbar-track,
                .right-panel::-webkit-scrollbar-track {
                    background: #f0f0f0;
                }

                .left-panel::-webkit-scrollbar-thumb,
                .right-panel::-webkit-scrollbar-thumb {
                    background: #c0c0c0;
                    border: 1px solid #a0a0a0;
                }

                .emoji-icon {
                    font-size: 24px;
                    line-height: 1;
                }

                .emoji-icon.small {
                    font-size: 18px;
                }
            </style>
            
            <div class="start-menu">
                <!-- User Header -->
                <div class="user-header">
                    <div class="user-avatar">
                        <img src="${profile}" alt="User" onerror="this.parentElement.innerHTML='<span style=\\'font-size:32px;display:flex;align-items:center;justify-content:center;height:100%;\\'>👤</span>'" />
                    </div>
                    <div class="user-name">Ossema Daoud</div>
                </div>

                <!-- Main Content -->
                <div class="main-content">
                    <!-- Left Panel - Programs -->
                    <div class="left-panel">
                        <div class="panel-title">📌 Pinned Programs</div>
                        
                        <div class="menu-item" data-action="about" data-target="about">
                            <div class="item-icon">
                                <img src="${helpIcon}" alt="About" onerror="this.parentElement.innerHTML='<span class=\\'emoji-icon\\'>❓</span>'" />
                            </div>
                            <div class="item-text">
                                <span class="item-name bold">About Me</span>
                                <span class="item-description">Learn more about me</span>
                            </div>
                        </div>

                        <div class="menu-item" data-action="resume" data-target="resume">
                            <div class="item-icon">
                                <img src="${pdfIcon}" alt="Resume" onerror="this.parentElement.innerHTML='<span class=\\'emoji-icon\\'>📄</span>'" />
                            </div>
                            <div class="item-text">
                                <span class="item-name bold">My Resume</span>
                                <span class="item-description">View CV / Resume</span>
                            </div>
                        </div>

                        <div class="menu-item" data-action="projects" data-target="projects">
                            <div class="item-icon">
                                <img src="${folderIcon}" alt="Projects" onerror="this.parentElement.innerHTML='<span class=\\'emoji-icon\\'>📁</span>'" />
                            </div>
                            <div class="item-text">
                                <span class="item-name bold">My Projects</span>
                                <span class="item-description">Portfolio projects</span>
                            </div>
                        </div>

                        <div class="separator"></div>

                        <div class="menu-item" data-action="mail" data-target="mail">
                            <div class="item-icon">
                                <img src="${msnIcon}" alt="Mail" onerror="this.parentElement.innerHTML='<span class=\\'emoji-icon\\'>✉️</span>'" />
                            </div>
                            <div class="item-text">
                                <span class="item-name">Send Mail</span>
                                <span class="item-description">Contact me</span>
                            </div>
                        </div>

                        <div class="menu-item" data-action="quiz" data-target="quiz">
                            <div class="item-icon">
                                <img src="${mediaplayerIcon}" alt="Quiz" onerror="this.parentElement.innerHTML='<span class=\\'emoji-icon\\'>🎯</span>'" />
                            </div>
                            <div class="item-text">
                                <span class="item-name">Web Quiz</span>
                                <span class="item-description">Test your knowledge</span>
                            </div>
                        </div>

                        <div class="all-programs">
                            <span class="all-programs-text">All Programs</span>
                            <span class="all-programs-arrow">▶</span>
                        </div>
                    </div>

                    <!-- Right Panel - Places -->
                    <div class="right-panel">
                        <div class="menu-item" data-action="documents">
                            <div class="item-icon">
                                <span class="emoji-icon small">📂</span>
                            </div>
                            <div class="item-text">
                                <span class="item-name">My Documents</span>
                            </div>
                        </div>

                        <div class="menu-item" data-action="pictures">
                            <div class="item-icon">
                                <span class="emoji-icon small">🖼️</span>
                            </div>
                            <div class="item-text">
                                <span class="item-name">My Pictures</span>
                            </div>
                        </div>

                        <div class="menu-item" data-action="music">
                            <div class="item-icon">
                                <span class="emoji-icon small">🎵</span>
                            </div>
                            <div class="item-text">
                                <span class="item-name">My Music</span>
                            </div>
                        </div>

                        <div class="menu-item" data-action="computer">
                            <div class="item-icon">
                                <span class="emoji-icon small">💻</span>
                            </div>
                            <div class="item-text">
                                <span class="item-name">My Computer</span>
                            </div>
                        </div>

                        <div class="separator"></div>

                        <div class="menu-item" data-action="control">
                            <div class="item-icon">
                                <span class="emoji-icon small">⚙️</span>
                            </div>
                            <div class="item-text">
                                <span class="item-name normal">Control Panel</span>
                            </div>
                        </div>

                        <div class="menu-item" data-action="network">
                            <div class="item-icon">
                                <span class="emoji-icon small">🌐</span>
                            </div>
                            <div class="item-text">
                                <span class="item-name normal">Network</span>
                            </div>
                        </div>

                        <div class="separator"></div>

                        <div class="menu-item" data-action="help">
                            <div class="item-icon">
                                <span class="emoji-icon small">❓</span>
                            </div>
                            <div class="item-text">
                                <span class="item-name normal">Help and Support</span>
                            </div>
                        </div>

                        <div class="menu-item" data-action="search">
                            <div class="item-icon">
                                <span class="emoji-icon small">🔍</span>
                            </div>
                            <div class="item-text">
                                <span class="item-name normal">Search</span>
                            </div>
                        </div>

                        <div class="menu-item" data-action="run">
                            <div class="item-icon">
                                <span class="emoji-icon small">▶️</span>
                            </div>
                            <div class="item-text">
                                <span class="item-name normal">Run...</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom Section -->
                <div class="bottom-section">
                    <div class="bottom-btn" data-action="logoff">
                        <img src="${xpLogOff}" alt="Log Off" onerror="this.outerHTML='<span style=\\'font-size:20px;\\'>👤</span>'" />
                        <span>Log Off</span>
                    </div>
                    <div class="bottom-btn" data-action="shutdown">
                        <img src="${xpShutdown}" alt="Shut Down" onerror="this.outerHTML='<span style=\\'font-size:20px;\\'>⏻</span>'" />
                        <span>Shut Down</span>
                    </div>
                </div>
            </div>
        `;

        // Handle menu item clicks
        shadow.querySelectorAll(".menu-item, .bottom-btn").forEach((item) => {
            item.addEventListener("click", (e) => {
                const action = item.getAttribute('data-action');
                const target = item.getAttribute('data-target');
                
                console.log("Start Menu Action:", action);
                
                // If there's a target window, open it
                if (target) {
                    const targetWindow = document.getElementById(target);
                    if (targetWindow && typeof targetWindow.open === 'function') {
                        targetWindow.open();
                    }
                }
                
                // Dispatch custom event
                this.dispatchEvent(new CustomEvent('menu-action', {
                    detail: { action, target },
                    bubbles: true,
                    composed: true
                }));
                
                this.close();
            });
        });

        // All Programs hover/click
        shadow.querySelector('.all-programs').addEventListener('click', () => {
            console.log('All Programs clicked');
            // Could expand to show more programs
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.hasAttribute('open') && !this.contains(e.target) && 
                !e.target.closest('#startBtn')) {
                this.close();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.hasAttribute('open')) {
                this.close();
            }
        });
    }

    open() {
        this.setAttribute("open", "");
    }

    close() {
        this.removeAttribute("open");
    }

    toggle() {
        if (this.hasAttribute("open")) {
            this.close();
        } else {
            this.open();
        }
    }
}

customElements.define("xp-startmenu", XpStartMenu);
console.log("✅ xp-startmenu component registered");