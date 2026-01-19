
//  Images load and setup for button states
const btnNorm = new URL('../assets/xp_btn_norm.png', import.meta.url).href;
const btnHover = new URL('../assets/xp_btn_hover.png', import.meta.url).href;
const btnClicked = new URL('../assets/xp_btn_clicked.png', import.meta.url).href;
// Preload images immediately

console.log('Images imported:', { btnNorm, btnHover, btnClicked });

// Wait for DOM to be ready before accessing elements
document.addEventListener('DOMContentLoaded', function() {

    const startBtn = document.getElementById('startBtn');
    
    if (!startBtn) {
        console.error('Start button not found!');
        return;
    }


    // Set initial image
    startBtn.src = btnNorm;

    startBtn.addEventListener('mouseenter', function() {
        this.src = btnHover;
    });

    startBtn.addEventListener('mouseleave', function() {
        this.src = btnNorm;
    });

    startBtn.addEventListener('mousedown', function() {
        this.src = btnClicked;
    });

    startBtn.addEventListener('mouseup', function() {
        this.src = btnNorm;
    });
    
});


