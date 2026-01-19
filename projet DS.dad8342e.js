class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.currentScore=0,this.isSubmitted=!1,this.questions=[{id:1,question:"What does HTML stand for?",options:["Hyper Text Markup Language","High Tech Modern Language","Home Tool Markup Language","Hyperlinks and Text Markup Language"],correct:0},{id:2,question:"Which CSS property is used to change the text color?",options:["text-color","font-color","color","text-style"],correct:2},{id:3,question:"What is the correct syntax for referring to an external JavaScript file?",options:["script src='app.js'","script href='app.js'","script name='app.js'","js src='app.js'"],correct:0},{id:4,question:"Which HTML tag is used to define an internal style sheet?",options:["style","css","script","link"],correct:0},{id:5,question:"In JavaScript, which operator is used to assign a value to a variable?",options:["x","=","-","*"],correct:1},{id:6,question:"What does CSS stand for?",options:["Creative Style Sheets","Cascading Style Sheets","Computer Style Sheets","Colorful Style Sheets"],correct:1},{id:7,question:"Which JavaScript method is used to access an HTML element by its ID?",options:["getElementById()","getElement()","getElementByName()","accessById()"],correct:0},{id:8,question:"Which property is used to change the background color in CSS?",options:["bgcolor","background-color","color","bg-color"],correct:1},{id:9,question:"What is the correct HTML element for inserting a line break?",options:["break","lb","br","newline"],correct:2},{id:10,question:"Which JavaScript keyword is used to declare a variable that cannot be reassigned?",options:["var","let","const","static"],correct:2},{id:11,question:"What is the correct CSS syntax to make all paragraph elements bold?",options:["p { font-weight: bold; }","p { text-size: bold; }","p.style = bold","paragraph { bold: true; }"],correct:0},{id:12,question:"Which HTML attribute specifies an alternate text for an image?",options:["title","alt","src","longdesc"],correct:1},{id:13,question:"What does DOM stand for in JavaScript?",options:["Document Object Model","Data Object Model","Digital Object Management","Document Orientation Mode"],correct:0},{id:14,question:"Which CSS property controls the text size?",options:["text-size","font-size","text-style","font-style"],correct:1},{id:15,question:"How do you create a function in JavaScript?",options:["function myFunction()","create myFunction()","def myFunction()","func myFunction()"],correct:0}]}connectedCallback(){this.render(),this.setupEventListeners()}escapeHtml(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}render(){this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: block;
                    font-family: Tahoma, Arial, sans-serif;
                    background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
                    height: 100%;
                    width: 100%;
                    overflow: auto;
                    padding: 20px;
                    box-sizing: border-box;
                }

                * {
                    box-sizing: border-box;
                }

                .quiz-container {
                    max-width: 800px;
                    margin: 0 auto;
                }

                .quiz-header {
                    background: linear-gradient(135deg, #0054e3 0%, #0066ff 100%);
                    color: white;
                    padding: 20px;
                    border-radius: 8px 8px 0 0;
                    text-align: center;
                    border: 2px solid #003db3;
                    border-bottom: none;
                }

                .quiz-header h1 {
                    margin: 0 0 8px 0;
                    font-size: 24px;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                }

                .quiz-header p {
                    margin: 0;
                    font-size: 12px;
                    opacity: 0.9;
                }

                .quiz-body {
                    background: #ffffff;
                    padding: 24px;
                    border: 2px solid #003db3;
                    border-top: none;
                    border-radius: 0 0 8px 8px;
                }

                .question-card {
                    background: #f8f9fa;
                    border: 1px solid #dee2e6;
                    border-radius: 6px;
                    padding: 16px;
                    margin-bottom: 20px;
                    transition: all 0.3s ease;
                }

                .question-card:hover {
                    box-shadow: 0 4px 12px rgba(0, 84, 227, 0.15);
                }

                .question-card.correct {
                    background: #d4edda;
                    border-color: #28a745;
                }

                .question-card.incorrect {
                    background: #f8d7da;
                    border-color: #dc3545;
                }

                .question-number {
                    display: inline-block;
                    background: #0054e3;
                    color: white;
                    padding: 4px 12px;
                    border-radius: 4px;
                    font-size: 11px;
                    font-weight: bold;
                    margin-bottom: 12px;
                }

                .question-text {
                    font-size: 14px;
                    font-weight: bold;
                    color: #333;
                    margin-bottom: 16px;
                    line-height: 1.5;
                }

                .options {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .option {
                    display: flex;
                    align-items: center;
                    padding: 12px 14px;
                    background: #ffffff;
                    border: 2px solid #dee2e6;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    font-size: 12px;
                    line-height: 1.4;
                }

                .option:hover {
                    background: #e3f2fd;
                    border-color: #0054e3;
                }

                .option input[type="radio"] {
                    margin-right: 12px;
                    cursor: pointer;
                    flex-shrink: 0;
                    width: 16px;
                    height: 16px;
                }

                .option span {
                    word-break: break-word;
                }

                .option.selected {
                    background: #e3f2fd;
                    border-color: #0054e3;
                    font-weight: bold;
                }

                .option.correct-answer {
                    background: #d4edda;
                    border-color: #28a745;
                    font-weight: bold;
                }

                .option.wrong-answer {
                    background: #f8d7da;
                    border-color: #dc3545;
                }

                .answer-feedback {
                    margin-top: 12px;
                    padding: 12px;
                    border-radius: 6px;
                    font-size: 12px;
                    display: none;
                    line-height: 1.5;
                }

                .answer-feedback.show {
                    display: block;
                }

                .answer-feedback.correct {
                    background: #d4edda;
                    border: 1px solid #c3e6cb;
                    color: #155724;
                }

                .answer-feedback.incorrect {
                    background: #f8d7da;
                    border: 1px solid #f5c6cb;
                    color: #721c24;
                }

                .submit-section {
                    text-align: center;
                    margin-top: 24px;
                    padding-top: 24px;
                    border-top: 2px solid #dee2e6;
                    display: flex;
                    gap: 12px;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                button {
                    background: linear-gradient(to bottom, #0054e3 0%, #003db3 100%);
                    color: white;
                    border: 2px outset #0066ff;
                    padding: 10px 32px;
                    font-family: Tahoma, sans-serif;
                    font-size: 13px;
                    font-weight: bold;
                    cursor: pointer;
                    border-radius: 4px;
                    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                }

                button:hover {
                    background: linear-gradient(to bottom, #0066ff 0%, #0054e3 100%);
                }

                button:active {
                    border: 2px inset #003db3;
                }

                button:disabled {
                    background: #d6d3ce;
                    color: #808080;
                    cursor: not-allowed;
                    border: 2px outset #e0e0e0;
                }

                button.reset-btn {
                    background: linear-gradient(to bottom, #6c757d 0%, #5a6268 100%);
                    border: 2px outset #6c757d;
                }

                button.reset-btn:hover {
                    background: linear-gradient(to bottom, #7c858d 0%, #6c757d 100%);
                }

                .score-display {
                    background: linear-gradient(135deg, #0054e3 0%, #0066ff 100%);
                    color: white;
                    padding: 24px;
                    border-radius: 8px;
                    text-align: center;
                    margin-bottom: 24px;
                    display: none;
                    box-shadow: 0 4px 12px rgba(0, 84, 227, 0.3);
                }

                .score-display.show {
                    display: block;
                }

                .score-display h2 {
                    margin: 0 0 12px 0;
                    font-size: 24px;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                }

                .score-display p {
                    margin: 8px 0;
                    font-size: 14px;
                }

                .score-percentage {
                    font-size: 48px;
                    font-weight: bold;
                    margin: 16px 0;
                    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
                }

                .emoji-feedback {
                    font-size: 56px;
                    margin: 12px 0;
                }

                /* Scrollbar */
                :host::-webkit-scrollbar {
                    width: 16px;
                }

                :host::-webkit-scrollbar-track {
                    background: #d4d0c8;
                }

                :host::-webkit-scrollbar-thumb {
                    background: #c0c0c0;
                    border: 2px outset #ffffff;
                }

                :host::-webkit-scrollbar-thumb:hover {
                    background: #b0b0b0;
                }

                @media (max-width: 768px) {
                    :host {
                        padding: 12px;
                    }

                    .quiz-header h1 {
                        font-size: 20px;
                    }

                    .score-percentage {
                        font-size: 36px;
                    }

                    .option {
                        padding: 10px 12px;
                        font-size: 11px;
                    }
                }
            </style>

            <div class="quiz-container">
                <div class="quiz-header">
                    <h1>\u{1F3AF} Web Development Quiz</h1>
                    <p>Test your knowledge of HTML, CSS, and JavaScript!</p>
                </div>

                <div class="quiz-body">
                    <div class="score-display" id="scoreDisplay">
                        <div class="emoji-feedback" id="emojiFeedback"></div>
                        <h2>Quiz Completed!</h2>
                        <div class="score-percentage" id="scorePercentage"></div>
                        <p>You scored <strong id="scoreText"></strong> out of ${this.questions.length}</p>
                        <p id="feedbackText"></p>
                    </div>

                    <div id="questionsContainer"></div>

                    <div class="submit-section">
                        <button id="submitBtn">\u{1F4DD} Submit Quiz</button>
                        <button id="resetBtn" class="reset-btn">\u{1F504} Reset Quiz</button>
                    </div>
                </div>
            </div>
        `,this.renderQuestions()}renderQuestions(){let e=this.shadowRoot.getElementById("questionsContainer");e.innerHTML="",this.questions.forEach((t,o)=>{let i=document.createElement("div");i.className="question-card",i.dataset.questionId=t.id;let r=t.options.map((e,o)=>`
                <label class="option" data-option="${o}">
                    <input type="radio" name="question${t.id}" value="${o}">
                    <span>${this.escapeHtml(e)}</span>
                </label>
            `).join("");i.innerHTML=`
                <div class="question-number">Question ${o+1} of ${this.questions.length}</div>
                <div class="question-text">${this.escapeHtml(t.question)}</div>
                <div class="options">${r}</div>
                <div class="answer-feedback" id="feedback${t.id}"></div>
            `,e.appendChild(i)})}setupEventListeners(){this.shadowRoot.querySelectorAll(".option").forEach(e=>{e.addEventListener("click",t=>{this.isSubmitted||(e.querySelector('input[type="radio"]').checked=!0,e.parentElement.querySelectorAll(".option").forEach(e=>{e.classList.remove("selected")}),e.classList.add("selected"))})}),this.shadowRoot.getElementById("submitBtn").addEventListener("click",()=>{this.submitQuiz()}),this.shadowRoot.getElementById("resetBtn").addEventListener("click",()=>{this.resetQuiz()})}submitQuiz(){if(this.isSubmitted)return;this.isSubmitted=!0,this.currentScore=0,this.questions.forEach(e=>{let t=this.shadowRoot.querySelector(`input[name="question${e.id}"]:checked`),o=this.shadowRoot.querySelector(`[data-question-id="${e.id}"]`),i=this.shadowRoot.getElementById(`feedback${e.id}`),r=o.querySelectorAll(".option");if(o.querySelectorAll('input[type="radio"]').forEach(e=>{e.disabled=!0}),r[e.correct].classList.add("correct-answer"),t){let s=parseInt(t.value);s===e.correct?(this.currentScore++,o.classList.add("correct"),i.className="answer-feedback correct show",i.innerHTML="✅ Correct! Well done!"):(o.classList.add("incorrect"),r[s].classList.add("wrong-answer"),i.className="answer-feedback incorrect show",i.innerHTML=`\u{274C} Incorrect. The correct answer is: <strong>${this.escapeHtml(e.options[e.correct])}</strong>`)}else o.classList.add("incorrect"),i.className="answer-feedback incorrect show",i.innerHTML=`\u{26A0}\u{FE0F} No answer selected. The correct answer is: <strong>${this.escapeHtml(e.options[e.correct])}</strong>`}),this.displayScore();let e=this.shadowRoot.getElementById("submitBtn");e.disabled=!0,e.textContent="✅ Quiz Submitted",this.scrollTo({top:0,behavior:"smooth"})}displayScore(){let e=this.shadowRoot.getElementById("scoreDisplay"),t=this.shadowRoot.getElementById("scorePercentage"),o=this.shadowRoot.getElementById("scoreText"),i=this.shadowRoot.getElementById("feedbackText"),r=this.shadowRoot.getElementById("emojiFeedback"),s=Math.round(this.currentScore/this.questions.length*100);t.textContent=`${s}%`,o.textContent=`${this.currentScore}`;let n="",a="";100===s?(n="🏆",a="Perfect score! You are a web development master!"):s>=80?(n="🎉",a="Excellent work! You have strong web development skills!"):s>=60?(n="👍",a="Good job! Keep practicing to improve further!"):s>=40?(n="📚",a="Not bad! Review the topics and try again!"):(n="💪",a="Keep learning! Practice makes perfect!"),r.textContent=n,i.textContent=a,e.classList.add("show")}resetQuiz(){this.isSubmitted=!1,this.currentScore=0,this.shadowRoot.getElementById("scoreDisplay").classList.remove("show");let e=this.shadowRoot.getElementById("submitBtn");e.disabled=!1,e.textContent="📝 Submit Quiz",this.renderQuestions(),this.setupEventListeners(),this.scrollTo({top:0,behavior:"smooth"})}}customElements.define("quizz-content",e),console.log("✅ quizz-content component registered");
//# sourceMappingURL=projet DS.dad8342e.js.map
