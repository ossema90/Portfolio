class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners()}render(){this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: block;
                    font-family: Tahoma, Arial, sans-serif;
                    background: #ece9d8;
                    height: 100%;
                    width: 100%;
                    padding: 20px;
                    overflow: auto;
                }

                .mail-form {
                    max-width: 600px;
                    margin: 0 auto;
                    background: #ffffff;
                    border: 2px solid #0054e3;
                    border-radius: 8px;
                    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
                }

                .form-header {
                    background: linear-gradient(to bottom, #0997ff, #0053ee 8%, #0050ee 40%, #06f 88%, #06f 93%, #005bff 95%, #003dd7 96%, #003dd7);
                    color: white;
                    padding: 8px 12px;
                    font-weight: bold;
                    border-radius: 6px 6px 0 0;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .form-body {
                    padding: 24px;
                }

                .form-group {
                    margin-bottom: 16px;
                }

                label {
                    display: block;
                    margin-bottom: 6px;
                    font-size: 11px;
                    font-weight: bold;
                    color: #000;
                }

                input[type="text"],
                input[type="email"],
                textarea {
                    width: 100%;
                    padding: 6px 8px;
                    border: 1px solid #7f9db9;
                    font-family: Tahoma, Arial, sans-serif;
                    font-size: 11px;
                    background: #ffffff;
                    box-sizing: border-box;
                }

                input[type="text"]:focus,
                input[type="email"]:focus,
                textarea:focus {
                    outline: none;
                    border: 1px solid #0054e3;
                    box-shadow: 0 0 4px rgba(0, 84, 227, 0.3);
                }

                textarea {
                    resize: vertical;
                    min-height: 150px;
                    font-family: Tahoma, Arial, sans-serif;
                }

                .button-group {
                    display: flex;
                    gap: 8px;
                    margin-top: 24px;
                }

                button {
                    background: linear-gradient(to bottom, #ffffff 0%, #ece9d8 100%);
                    border: 1px solid #003c74;
                    padding: 6px 20px;
                    font-family: Tahoma, sans-serif;
                    font-size: 11px;
                    cursor: pointer;
                    color: #000;
                    min-width: 80px;
                }

                button:hover {
                    background: linear-gradient(to bottom, #ffeaa7 0%, #fdcb6e 100%);
                }

                button:active {
                    background: linear-gradient(to bottom, #d6d3ce 0%, #ece9d8 100%);
                    border: 1px inset #808080;
                }

                button.primary {
                    background: linear-gradient(to bottom, #0054e3 0%, #003db3 100%);
                    color: white;
                    border: 1px solid #003db3;
                    font-weight: bold;
                }

                button.primary:hover {
                    background: linear-gradient(to bottom, #0066ff 0%, #0054e3 100%);
                }

                .success-message,
                .error-message {
                    padding: 12px;
                    margin-bottom: 16px;
                    border-radius: 4px;
                    font-size: 11px;
                    display: none;
                }

                .success-message {
                    background: #d4edda;
                    border: 1px solid #c3e6cb;
                    color: #155724;
                }

                .error-message {
                    background: #f8d7da;
                    border: 1px solid #f5c6cb;
                    color: #721c24;
                }

                .success-message.show,
                .error-message.show {
                    display: block;
                }

                .required {
                    color: red;
                }
            </style>

            <div class="mail-form">
                <div class="form-header">
                    <span>\u{2709}\u{FE0F}</span>
                    <span>Send Message to Daoud Ossema</span>
                </div>
                
                <div class="form-body">
                    <div class="success-message" id="successMessage">
                        \u{2705} Your message has been sent successfully!
                    </div>
                    
                    <div class="error-message" id="errorMessage">
                        \u{274C} There was an error sending your message. Please try again.
                    </div>

                    <form id="contactForm">
                        <div class="form-group">
                            <label for="name">Your Name <span class="required">*</span></label>
                            <input type="text" id="name" name="name" required placeholder="Enter your name">
                        </div>

                        <div class="form-group">
                            <label for="email">Your Email <span class="required">*</span></label>
                            <input type="email" id="email" name="email" required placeholder="example@email.com">
                        </div>

                        <div class="form-group">
                            <label for="subject">Subject <span class="required">*</span></label>
                            <input type="text" id="subject" name="subject" required placeholder="Message subject">
                        </div>

                        <div class="form-group">
                            <label for="message">Message <span class="required">*</span></label>
                            <textarea id="message" name="message" required placeholder="Type your message here..."></textarea>
                        </div>

                        <div class="button-group">
                            <button type="submit" class="primary">\u{1F4E7} Send Message</button>
                            <button type="reset">\u{1F504} Clear Form</button>
                        </div>
                    </form>
                </div>
            </div>
        `}setupEventListeners(){let e=this.shadowRoot.getElementById("contactForm"),s=this.shadowRoot.getElementById("successMessage"),a=this.shadowRoot.getElementById("errorMessage");e.addEventListener("submit",async o=>{o.preventDefault(),s.classList.remove("show"),a.classList.remove("show");let t=new FormData(e),r={name:t.get("name"),email:t.get("email"),subject:t.get("subject"),message:t.get("message")};try{(await fetch("https://formsubmit.co/YOUR_EMAIL@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:r.name,email:r.email,subject:r.subject,message:r.message})})).ok?(s.classList.add("show"),e.reset()):a.classList.add("show")}catch(e){console.error("Error:",e),a.classList.add("show")}s.classList.add("show"),setTimeout(()=>{e.reset()},1e3)}),e.addEventListener("reset",()=>{s.classList.remove("show"),a.classList.remove("show")})}}customElements.define("mail-content",e),console.log("✅ mail-content component registered");
//# sourceMappingURL=projet DS.79a4e8c6.js.map
