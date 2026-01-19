export class QuizzContent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.currentScore = 0;
        this.isSubmitted = false;
        
        // Quiz questions - fixed escaping issues
        this.questions = [
            {
                id: 1,
                question: "What does HTML stand for?",
                options: [
                    "Hyper Text Markup Language",
                    "High Tech Modern Language",
                    "Home Tool Markup Language",
                    "Hyperlinks and Text Markup Language"
                ],
                correct: 0
            },
            {
                id: 2,
                question: "Which CSS property is used to change the text color?",
                options: [
                    "text-color",
                    "font-color",
                    "color",
                    "text-style"
                ],
                correct: 2
            },
            {
                id: 3,
                question: "What is the correct syntax for referring to an external JavaScript file?",
                options: [
                    "script src='app.js'",
                    "script href='app.js'",
                    "script name='app.js'",
                    "js src='app.js'"
                ],
                correct: 0
            },
            {
                id: 4,
                question: "Which HTML tag is used to define an internal style sheet?",
                options: [
                    "style",
                    "css",
                    "script",
                    "link"
                ],
                correct: 0
            },
            {
                id: 5,
                question: "In JavaScript, which operator is used to assign a value to a variable?",
                options: [
                    "x",
                    "=",
                    "-",
                    "*"
                ],
                correct: 1
            },
            {
                id: 6,
                question: "What does CSS stand for?",
                options: [
                    "Creative Style Sheets",
                    "Cascading Style Sheets",
                    "Computer Style Sheets",
                    "Colorful Style Sheets"
                ],
                correct: 1
            },
            {
                id: 7,
                question: "Which JavaScript method is used to access an HTML element by its ID?",
                options: [
                    "getElementById()",
                    "getElement()",
                    "getElementByName()",
                    "accessById()"
                ],
                correct: 0
            },
            {
                id: 8,
                question: "Which property is used to change the background color in CSS?",
                options: [
                    "bgcolor",
                    "background-color",
                    "color",
                    "bg-color"
                ],
                correct: 1
            },
            {
                id: 9,
                question: "What is the correct HTML element for inserting a line break?",
                options: [
                    "break",
                    "lb",
                    "br",
                    "newline"
                ],
                correct: 2
            },
            {
                id: 10,
                question: "Which JavaScript keyword is used to declare a variable that cannot be reassigned?",
                options: [
                    "var",
                    "let",
                    "const",
                    "static"
                ],
                correct: 2
            },
            {
                id: 11,
                question: "What is the correct CSS syntax to make all paragraph elements bold?",
                options: [
                    "p { font-weight: bold; }",
                    "p { text-size: bold; }",
                    "p.style = bold",
                    "paragraph { bold: true; }"
                ],
                correct: 0
            },
            {
                id: 12,
                question: "Which HTML attribute specifies an alternate text for an image?",
                options: [
                    "title",
                    "alt",
                    "src",
                    "longdesc"
                ],
                correct: 1
            },
            {
                id: 13,
                question: "What does DOM stand for in JavaScript?",
                options: [
                    "Document Object Model",
                    "Data Object Model",
                    "Digital Object Management",
                    "Document Orientation Mode"
                ],
                correct: 0
            },
            {
                id: 14,
                question: "Which CSS property controls the text size?",
                options: [
                    "text-size",
                    "font-size",
                    "text-style",
                    "font-style"
                ],
                correct: 1
            },
            {
                id: 15,
                question: "How do you create a function in JavaScript?",
                options: [
                    "function myFunction()",
                    "create myFunction()",
                    "def myFunction()",
                    "func myFunction()"
                ],
                correct: 0
            }
        ];
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    // Escape HTML to prevent rendering issues
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    render() {
        this.shadowRoot.innerHTML = `
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
                    <h1>🎯 Web Development Quiz</h1>
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
                        <button id="submitBtn">📝 Submit Quiz</button>
                        <button id="resetBtn" class="reset-btn">🔄 Reset Quiz</button>
                    </div>
                </div>
            </div>
        `;

        this.renderQuestions();
    }

    renderQuestions() {
        const container = this.shadowRoot.getElementById("questionsContainer");
        container.innerHTML = '';

        this.questions.forEach((q, index) => {
            const questionCard = document.createElement("div");
            questionCard.className = "question-card";
            questionCard.dataset.questionId = q.id;

            const optionsHtml = q.options.map((option, i) => `
                <label class="option" data-option="${i}">
                    <input type="radio" name="question${q.id}" value="${i}">
                    <span>${this.escapeHtml(option)}</span>
                </label>
            `).join('');

            questionCard.innerHTML = `
                <div class="question-number">Question ${index + 1} of ${this.questions.length}</div>
                <div class="question-text">${this.escapeHtml(q.question)}</div>
                <div class="options">${optionsHtml}</div>
                <div class="answer-feedback" id="feedback${q.id}"></div>
            `;

            container.appendChild(questionCard);
        });
    }

    setupEventListeners() {
        // Handle option selection
        this.shadowRoot.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', (e) => {
                if (this.isSubmitted) return;
                
                const radio = option.querySelector('input[type="radio"]');
                radio.checked = true;
                
                // Remove selected class from siblings
                const parent = option.parentElement;
                parent.querySelectorAll('.option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                
                // Add selected class to current
                option.classList.add('selected');
            });
        });

        // Handle submit button
        this.shadowRoot.getElementById('submitBtn').addEventListener('click', () => {
            this.submitQuiz();
        });

        // Handle reset button
        this.shadowRoot.getElementById('resetBtn').addEventListener('click', () => {
            this.resetQuiz();
        });
    }

    submitQuiz() {
        if (this.isSubmitted) return;
        
        this.isSubmitted = true;
        this.currentScore = 0;

        this.questions.forEach(q => {
            const selectedOption = this.shadowRoot.querySelector(`input[name="question${q.id}"]:checked`);
            const questionCard = this.shadowRoot.querySelector(`[data-question-id="${q.id}"]`);
            const feedback = this.shadowRoot.getElementById(`feedback${q.id}`);
            const options = questionCard.querySelectorAll('.option');
            
            // Disable all radio buttons
            questionCard.querySelectorAll('input[type="radio"]').forEach(radio => {
                radio.disabled = true;
            });

            // Mark correct answer
            options[q.correct].classList.add('correct-answer');

            if (selectedOption) {
                const selectedValue = parseInt(selectedOption.value);
                
                if (selectedValue === q.correct) {
                    // Correct answer
                    this.currentScore++;
                    questionCard.classList.add('correct');
                    feedback.className = 'answer-feedback correct show';
                    feedback.innerHTML = '✅ Correct! Well done!';
                } else {
                    // Wrong answer
                    questionCard.classList.add('incorrect');
                    options[selectedValue].classList.add('wrong-answer');
                    feedback.className = 'answer-feedback incorrect show';
                    feedback.innerHTML = `❌ Incorrect. The correct answer is: <strong>${this.escapeHtml(q.options[q.correct])}</strong>`;
                }
            } else {
                // No answer selected
                questionCard.classList.add('incorrect');
                feedback.className = 'answer-feedback incorrect show';
                feedback.innerHTML = `⚠️ No answer selected. The correct answer is: <strong>${this.escapeHtml(q.options[q.correct])}</strong>`;
            }
        });

        // Display score
        this.displayScore();
        
        // Disable submit button
        const submitBtn = this.shadowRoot.getElementById('submitBtn');
        submitBtn.disabled = true;
        submitBtn.textContent = '✅ Quiz Submitted';
        
        // Scroll to top to show score
        this.scrollTo({ top: 0, behavior: 'smooth' });
    }

    displayScore() {
        const scoreDisplay = this.shadowRoot.getElementById('scoreDisplay');
        const scorePercentage = this.shadowRoot.getElementById('scorePercentage');
        const scoreText = this.shadowRoot.getElementById('scoreText');
        const feedbackText = this.shadowRoot.getElementById('feedbackText');
        const emojiFeedback = this.shadowRoot.getElementById('emojiFeedback');
        
        const percentage = Math.round((this.currentScore / this.questions.length) * 100);
        
        scorePercentage.textContent = `${percentage}%`;
        scoreText.textContent = `${this.currentScore}`;
        
        // Feedback based on score
        let emoji = '';
        let message = '';
        
        if (percentage === 100) {
            emoji = '🏆';
            message = 'Perfect score! You are a web development master!';
        } else if (percentage >= 80) {
            emoji = '🎉';
            message = 'Excellent work! You have strong web development skills!';
        } else if (percentage >= 60) {
            emoji = '👍';
            message = 'Good job! Keep practicing to improve further!';
        } else if (percentage >= 40) {
            emoji = '📚';
            message = 'Not bad! Review the topics and try again!';
        } else {
            emoji = '💪';
            message = 'Keep learning! Practice makes perfect!';
        }
        
        emojiFeedback.textContent = emoji;
        feedbackText.textContent = message;
        
        scoreDisplay.classList.add('show');
    }

    resetQuiz() {
        this.isSubmitted = false;
        this.currentScore = 0;

        // Hide score display
        this.shadowRoot.getElementById('scoreDisplay').classList.remove('show');

        // Reset submit button
        const submitBtn = this.shadowRoot.getElementById('submitBtn');
        submitBtn.disabled = false;
        submitBtn.textContent = '📝 Submit Quiz';

        // Re-render questions
        this.renderQuestions();
        this.setupEventListeners();

        // Scroll to top
        this.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Register the custom element
customElements.define("quizz-content", QuizzContent);
console.log('✅ quizz-content component registered');