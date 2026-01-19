var e={};e=import.meta.resolve("9eFhj");var t={};t=import.meta.resolve("jdKUv");var a={};a=import.meta.resolve("85PIE");var i={};i=import.meta.resolve("iNTFt");var s={};s=import.meta.resolve("9okIR");var n={};n=import.meta.resolve("4JrfP");var o={};o=import.meta.resolve("JKn5g");var r={};r=import.meta.resolve("kVPDa");class l extends HTMLElement{constructor(){super();let l=this.attachShadow({mode:"open"}),d=new URL(e).href,p=new URL(t).href,c=new URL(a).href,m=new URL(i).href,v=new URL(s).href,f=new URL(n).href,g=new URL(o).href,u=new URL(r).href;l.innerHTML=`
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
                        <img src="${d}" alt="User" onerror="this.parentElement.innerHTML='<span style=\\'font-size:32px;display:flex;align-items:center;justify-content:center;height:100%;\\'>\u{1F464}</span>'" />
                    </div>
                    <div class="user-name">Ossema Daoud</div>
                </div>

                <!-- Main Content -->
                <div class="main-content">
                    <!-- Left Panel - Programs -->
                    <div class="left-panel">
                        <div class="panel-title">\u{1F4CC} Pinned Programs</div>
                        
                        <div class="menu-item" data-action="about" data-target="about">
                            <div class="item-icon">
                                <img src="${m}" alt="About" onerror="this.parentElement.innerHTML='<span class=\\'emoji-icon\\'>\u{2753}</span>'" />
                            </div>
                            <div class="item-text">
                                <span class="item-name bold">About Me</span>
                                <span class="item-description">Learn more about me</span>
                            </div>
                        </div>

                        <div class="menu-item" data-action="resume" data-target="resume">
                            <div class="item-icon">
                                <img src="${v}" alt="Resume" onerror="this.parentElement.innerHTML='<span class=\\'emoji-icon\\'>\u{1F4C4}</span>'" />
                            </div>
                            <div class="item-text">
                                <span class="item-name bold">My Resume</span>
                                <span class="item-description">View CV / Resume</span>
                            </div>
                        </div>

                        <div class="menu-item" data-action="projects" data-target="projects">
                            <div class="item-icon">
                                <img src="${f}" alt="Projects" onerror="this.parentElement.innerHTML='<span class=\\'emoji-icon\\'>\u{1F4C1}</span>'" />
                            </div>
                            <div class="item-text">
                                <span class="item-name bold">My Projects</span>
                                <span class="item-description">Portfolio projects</span>
                            </div>
                        </div>

                        <div class="separator"></div>

                        <div class="menu-item" data-action="mail" data-target="mail">
                            <div class="item-icon">
                                <img src="${g}" alt="Mail" onerror="this.parentElement.innerHTML='<span class=\\'emoji-icon\\'>\u{2709}\u{FE0F}</span>'" />
                            </div>
                            <div class="item-text">
                                <span class="item-name">Send Mail</span>
                                <span class="item-description">Contact me</span>
                            </div>
                        </div>

                        <div class="menu-item" data-action="quiz" data-target="quiz">
                            <div class="item-icon">
                                <img src="${u}" alt="Quiz" onerror="this.parentElement.innerHTML='<span class=\\'emoji-icon\\'>\u{1F3AF}</span>'" />
                            </div>
                            <div class="item-text">
                                <span class="item-name">Web Quiz</span>
                                <span class="item-description">Test your knowledge</span>
                            </div>
                        </div>

                        <div class="all-programs">
                            <span class="all-programs-text">All Programs</span>
                            <span class="all-programs-arrow">\u{25B6}</span>
                        </div>
                    </div>

                    <!-- Right Panel - Places -->
                    <div class="right-panel">
                        <div class="menu-item" data-action="documents">
                            <div class="item-icon">
                                <span class="emoji-icon small">\u{1F4C2}</span>
                            </div>
                            <div class="item-text">
                                <span class="item-name">My Documents</span>
                            </div>
                        </div>

                        <div class="menu-item" data-action="pictures">
                            <div class="item-icon">
                                <span class="emoji-icon small">\u{1F5BC}\u{FE0F}</span>
                            </div>
                            <div class="item-text">
                                <span class="item-name">My Pictures</span>
                            </div>
                        </div>

                        <div class="menu-item" data-action="music">
                            <div class="item-icon">
                                <span class="emoji-icon small">\u{1F3B5}</span>
                            </div>
                            <div class="item-text">
                                <span class="item-name">My Music</span>
                            </div>
                        </div>

                        <div class="menu-item" data-action="computer">
                            <div class="item-icon">
                                <span class="emoji-icon small">\u{1F4BB}</span>
                            </div>
                            <div class="item-text">
                                <span class="item-name">My Computer</span>
                            </div>
                        </div>

                        <div class="separator"></div>

                        <div class="menu-item" data-action="control">
                            <div class="item-icon">
                                <span class="emoji-icon small">\u{2699}\u{FE0F}</span>
                            </div>
                            <div class="item-text">
                                <span class="item-name normal">Control Panel</span>
                            </div>
                        </div>

                        <div class="menu-item" data-action="network">
                            <div class="item-icon">
                                <span class="emoji-icon small">\u{1F310}</span>
                            </div>
                            <div class="item-text">
                                <span class="item-name normal">Network</span>
                            </div>
                        </div>

                        <div class="separator"></div>

                        <div class="menu-item" data-action="help">
                            <div class="item-icon">
                                <span class="emoji-icon small">\u{2753}</span>
                            </div>
                            <div class="item-text">
                                <span class="item-name normal">Help and Support</span>
                            </div>
                        </div>

                        <div class="menu-item" data-action="search">
                            <div class="item-icon">
                                <span class="emoji-icon small">\u{1F50D}</span>
                            </div>
                            <div class="item-text">
                                <span class="item-name normal">Search</span>
                            </div>
                        </div>

                        <div class="menu-item" data-action="run">
                            <div class="item-icon">
                                <span class="emoji-icon small">\u{25B6}\u{FE0F}</span>
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
                        <img src="${c}" alt="Log Off" onerror="this.outerHTML='<span style=\\'font-size:20px;\\'>\u{1F464}</span>'" />
                        <span>Log Off</span>
                    </div>
                    <div class="bottom-btn" data-action="shutdown">
                        <img src="${p}" alt="Shut Down" onerror="this.outerHTML='<span style=\\'font-size:20px;\\'>\u{23FB}</span>'" />
                        <span>Shut Down</span>
                    </div>
                </div>
            </div>
        `,l.querySelectorAll(".menu-item, .bottom-btn").forEach(e=>{e.addEventListener("click",t=>{let a=e.getAttribute("data-action"),i=e.getAttribute("data-target");if(console.log("Start Menu Action:",a),i){let e=document.getElementById(i);e&&"function"==typeof e.open&&e.open()}this.dispatchEvent(new CustomEvent("menu-action",{detail:{action:a,target:i},bubbles:!0,composed:!0})),this.close()})}),l.querySelector(".all-programs").addEventListener("click",()=>{console.log("All Programs clicked")}),document.addEventListener("click",e=>{!this.hasAttribute("open")||this.contains(e.target)||e.target.closest("#startBtn")||this.close()}),document.addEventListener("keydown",e=>{"Escape"===e.key&&this.hasAttribute("open")&&this.close()})}open(){this.setAttribute("open","")}close(){this.removeAttribute("open")}toggle(){this.hasAttribute("open")?this.close():this.open()}}customElements.define("xp-startmenu",l),console.log("✅ xp-startmenu component registered");
//# sourceMappingURL=projet DS.e33ab934.js.map
