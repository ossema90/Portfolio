class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: block;
                    font-family: Tahoma, Arial, sans-serif;
                    background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
                    min-height: 100%;
                }
  
                .about-section {
                    font-family: inherit;
                    padding: 20px;
                    max-width: 900px;
                    margin: 0 auto;
                }
  
                .profile-header {
                    text-align: center;
                    padding: 24px;
                    background: linear-gradient(135deg, #0054e3 0%, #0066ff 100%);
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 84, 227, 0.3);
                    margin-bottom: 24px;
                    border: 2px solid #003db3;
                }
  
                .profile-emoji {
                    font-size: 80px;
                    margin-bottom: 12px;
                    display: inline-block;
                    animation: float 3s ease-in-out infinite;
                    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
                }
  
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
  
                h1 {
                    font-size: 32px;
                    margin: 12px 0;
                    color: #ffffff;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                    font-weight: bold;
                }
  
                .tagline {
                    color: #e8f4ff;
                    font-style: italic;
                    margin: 0;
                    font-size: 14px;
                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
                }
  
                .about-content section {
                    margin-bottom: 24px;
                    background: #ffffff;
                    padding: 16px;
                    border-radius: 6px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    border: 1px solid #d4d4d4;
                    transition: all 0.3s ease;
                }
  
                .about-content section:hover {
                    box-shadow: 0 4px 16px rgba(0, 84, 227, 0.15);
                    transform: translateY(-2px);
                }
  
                .about-content h2 {
                    color: #0054e3;
                    border-bottom: 2px solid #0054e3;
                    padding-bottom: 8px;
                    margin-bottom: 16px;
                    font-size: 18px;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
  
                .about-content p {
                    margin: 10px 0;
                    line-height: 1.6;
                    font-size: 12px;
                    color: #333;
                }
  
                .about-content ul {
                    list-style-type: none;
                    padding-left: 0;
                    margin: 12px 0;
                }
  
                .about-content li {
                    margin-bottom: 8px;
                    font-size: 12px;
                    padding-left: 24px;
                    position: relative;
                    line-height: 1.5;
                }
  
                .about-content li::before {
                    content: "\u{25B8}";
                    position: absolute;
                    left: 8px;
                    color: #0054e3;
                    font-weight: bold;
                }
  
                .about-content a {
                    color: #0054e3;
                    text-decoration: none;
                    font-weight: 500;
                    transition: all 0.2s ease;
                }
  
                .about-content a:hover {
                    color: #0066ff;
                    text-decoration: underline;
                    text-shadow: 0 0 8px rgba(0, 102, 255, 0.3);
                }
  
                strong {
                    font-weight: bold;
                    color: #000;
                }
  
                .contact-info {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 12px;
                    margin-bottom: 12px;
                }
  
                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 12px;
                    padding: 8px 12px;
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    border-radius: 6px;
                    border: 1px solid #dee2e6;
                    transition: all 0.3s ease;
                }
  
                .contact-item:hover {
                    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
                    border-color: #0054e3;
                    transform: scale(1.02);
                }
  
                .contact-item span:first-child {
                    font-size: 16px;
                }
  
                .experience-item {
                    margin-bottom: 20px;
                    padding: 12px;
                    background: #f8f9fa;
                    border-radius: 6px;
                    border-left: 4px solid #0054e3;
                    transition: all 0.3s ease;
                }
  
                .experience-item:hover {
                    background: #e3f2fd;
                    border-left-color: #0066ff;
                    transform: translateX(4px);
                }
  
                .date-range {
                    color: #666;
                    font-style: italic;
                    font-size: 11px;
                    background: #fff;
                    padding: 2px 8px;
                    border-radius: 4px;
                    display: inline-block;
                    margin: 4px 0;
                }
  
                .skills-tag {
                    color: #0054e3;
                    font-size: 11px;
                    font-style: italic;
                    background: #e3f2fd;
                    padding: 4px 8px;
                    border-radius: 4px;
                    display: inline-block;
                    margin-top: 8px;
                    border: 1px dashed #0054e3;
                }
  
                /* Scrollbar styling */
                :host::-webkit-scrollbar {
                    width: 12px;
                }
  
                :host::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }
  
                :host::-webkit-scrollbar-thumb {
                    background: linear-gradient(180deg, #0054e3 0%, #003db3 100%);
                    border-radius: 6px;
                }
  
                :host::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(180deg, #0066ff 0%, #0054e3 100%);
                }
  
                /* Responsive design */
                @media (max-width: 768px) {
                    .about-section {
                        padding: 12px;
                    }
  
                    h1 {
                        font-size: 24px;
                    }
  
                    .profile-emoji {
                        font-size: 60px;
                    }
  
                    .contact-info {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
  
            <div class="about-section">
                <div class="profile-header">
                    <div class="profile-emoji">\u{1F468}\u{200D}\u{1F4BB}</div>    
                    <h1>Daoud Ossema</h1>
                    <p class="tagline">Computer Science Student | Software Developer</p>
                </div>
  
                <div class="about-content">
                    <section>
                        <h2>\u{1F4E7} Contact</h2>
                        <div class="contact-info">
                            <div class="contact-item">
                                <span>\u{1F4F1}</span>
                                <span>+216 99 999 9999</span>
                            </div>
                            <div class="contact-item">
                                <span>\u{2709}\u{FE0F}</span>
                                <a href="mailto:test@gmail.com">test@gmail.com</a>
                            </div>
                        </div>
                        <div class="contact-info">
                            <div class="contact-item">
                                <span>\u{1F4BC}</span>
                                <a href="https://linkedin.com/in/ossema-daoud" target="_blank">linkedin.com/in/ossema-daoud</a>
                            </div>
                            <div class="contact-item">
                                <span>\u{1F419}</span>
                                <a href="https://github.com/ossema90" target="_blank">github.com/oussamadaoud</a>
                            </div>
                        </div>
                        <div class="contact-info">
                            <div class="contact-item">
                                <span>\u{1F4CD}</span>
                                <span>Sfax, Tunisia</span>
                            </div>
                        </div>
                    </section>
  
                    <section>
                        <h2>\u{1F393} Education</h2>
                        <div class="experience-item">
                            <p><strong>Bachelor of Computer Science</strong></p>
                            <p>Faculty of Sciences, Sfax</p>
                            <p class="date-range">2022 - 2025</p>
                            <p><strong>Specialization:</strong> Software Development and System Information</p>
                            <p><strong>Courses:</strong> Machine Learning, Cybersecurity, Algorithms and Data Structures, Big Data</p>
                        </div>
                        <div class="experience-item">
                            <p><strong>Baccalaureate of Computer Science</strong></p>
                            <p>High School 9 Avril 1938, Sfax</p>
                            <p class="date-range">2022</p>
                        </div>
                    </section>
  
                    <section>
                        <h2>\u{1F4BC} Experience</h2>
                        <div class="experience-item">
                            <p><strong>Blockchain Developer - End of Studies Internship</strong></p>
                            <p>KUSA Tunisia, Sfax</p>
                            <p class="date-range">February 2025 - May 2025</p>
                            <ul>
                                <li>Developed and deployed an ERC-721 smart contract for NFT creation using Solidity and OpenZeppelin</li>
                                <li>Enabled secure minting and metadata management on the Sepolia testnet via Hardhat</li>
                                <li>Designed a responsive frontend with Ionic Angular, integrated with blockchain using Ethers.js</li>
                                <li>Managed off-chain data with MongoDB, delivering a functional prototype for digital asset creation</li>
                            </ul>
                            <p class="skills-tag">Skills: Angular 19, Bootstrap 5, Ionic Framework, Ethers.js, MongoDB, Express.js, RemixIDE, Solidity</p>
                        </div>
                        <div class="experience-item">
                            <p><strong>Front-end Developer - Summer Internship</strong></p>
                            <p>Djagora Foundation Tunisia, Sfax</p>
                            <p class="date-range">June 2023 - August 2023</p>
                            <ul>
                                <li>Led the team to successfully deliver the project on time</li>
                                <li>Implemented Scrum methodology simulation</li>
                                <li>Developed in-browser simulations, including PEP-3 (Psycho-Educational Profile) test scenarios</li>
                                <li>Machine Learning and Deep Learning training</li>
                            </ul>
                            <p class="skills-tag">Skills: Scrum, Angular 15, Bootstrap 4, TypeScript, Figma, CreateJS</p>
                        </div>
                    </section>
  
                    <section>
                        <h2>\u{1F4CA} Projects</h2>
                        <div class="experience-item">
                            <p><strong>OverloadTrack</strong></p>
                            <ul>
                                <li>Built an Android app using Kotlin and Jetpack Compose for gym-goers</li>
                                <li>Tracks and manages exercise plans, including sets, weights, and reps</li>
                                <li>Supports tracking individual progress with ease</li>
                            </ul>
                            <p class="skills-tag">Skills: Kotlin, Jetpack Compose</p>
                        </div>
                        <div class="experience-item">
                            <p><strong>HIREME</strong></p>
                            <ul>
                                <li>Developed a web application enabling project owners to hire talent based on qualifications</li>
                                <li>Academic project using MVC model to simplify matching projects with suitable talent</li>
                            </ul>
                            <p class="skills-tag">Skills: React, Tailwind CSS, MVC Model, MongoDB, REST API, Express.js</p>
                        </div>
                        <div class="experience-item">
                            <p><strong>Windows XP Portfolio (Current Project)</strong></p>
                            <ul>
                                <li>Building a retro-styled portfolio website with Windows XP theme</li>
                                <li>Using Web Components and Shadow DOM for modular design</li>
                                <li>Implementing draggable windows and authentic XP UI elements</li>
                            </ul>
                            <p class="skills-tag">Skills: JavaScript, Web Components, HTML/CSS</p>
                        </div>
                    </section>
  
                    <section>
                        <h2>\u{1F4BB} Technical Skills</h2>
                        <p><strong>Technical Skills:</strong></p>
                        <ul>
                            <li>Front-end Development, Back-end Development</li>
                            <li>Blockchain Development</li>
                            <li>Linux (Ubuntu/Arch System)</li>
                        </ul>
                        <p><strong>Technologies & Frameworks:</strong></p>
                        <ul>
                            <li>Vue.js, Angular, React</li>
                            <li>MongoDB, MySQL</li>
                            <li>Solidity, Ethers.js, Hardhat</li>
                            <li>Ionic Framework, Jetpack Compose</li>
                        </ul>
                        <p><strong>Programming Languages:</strong></p>
                        <ul>
                            <li>JavaScript, TypeScript, Kotlin</li>
                            <li>Solidity, SQL</li>
                            <li>HTML/CSS</li>
                        </ul>
                    </section>
  
                    <section>
                        <h2>\u{1F310} Languages</h2>
                        <ul>
                            <li><strong>Arabic:</strong> Native</li>
                            <li><strong>French:</strong> Bilingual</li>
                            <li><strong>English:</strong> Professional</li>
                        </ul>
                    </section>
                </div>
            </div>
        `}}customElements.define("about-content",e);
//# sourceMappingURL=projet DS.66897756.js.map
