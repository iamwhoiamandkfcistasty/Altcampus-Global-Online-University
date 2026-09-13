let quizPoints = 0;
let currentQuestionIndex = 0;

// 🧠 THE FULL 25-LANGUAGE COMPREHENSIVE UNHINGED QUIZ MATRIX
const quizDatabase = [
    {
        q: "What metric measures your absolute return on investment when executing automated Meta advertising campaigns inside Marketing?",
        o: ["A) CPC (Cost Per Click)", "B) ROAS (Return on Ad Spend)", "C) CTR (Click-Through Rate)"],
        a: 1
    },
    {
        q: "Which programming language allows drone flight crews to compile raw, low-level hardware register memory addresses directly?",
        o: ["A) Python Scripting", "B) Pure C Hardware Code", "C) Java Enterprise Web"],
        a: 1
    },
    {
        q: "Why do Wall Street high-frequency trading bot farms deploy Golang microservices instead of standard apps?",
        o: ["A) Because the logo is cute", "B) To achieve 0.0001ms token executions and lock out retail buyers", "C) To make simple web blogs"],
        a: 1
    },
    {
        q: "Where do executive chefs map out ingredient profit margins and recipe distribution variables?",
        o: ["A) On the back of a paper bill", "B) Inside statistical R language data frames", "C) They just guess blindly, ra!"],
        a: 1
    },
    {
        q: "Which system compiles advanced modular glassmorphic design themes natively for the university interface grid?",
        o: ["A) Objective-C frameworks", "B) Sass (SCSS) variables map", "C) Pure Bash scripts"],
        a: 1
    }
];

let competitors = [
    { name: "Rahul (Mumbai)", pts: 300, rowId: "c1" },
    { name: "Priya (Bangalore)", pts: 150, rowId: "c2" },
    { name: "You (Macha Node)", pts: 0, rowId: "user", isUser: true }
];

function renderLeaderboard() {
    competitors.sort((a, b) => b.pts - a.pts);
    const grid = document.getElementById('boardGrid');
    if(!grid) return;
    grid.innerHTML = '';
    
    competitors.forEach((player, index) => {
        const rowClass = player.isUser ? 'leader-row user-row' : 'leader-row';
        grid.innerHTML += `
            <div class="${rowClass}" id="${player.rowId}">
                <div><span class="rank-num">#${index + 1}</span> ${player.name}</div>
                <div class="leader-pts">${player.pts} PTS</div>
            </div>`;
    });
}

function submitArenaAnswer(chosenIdx) {
    const activeQ = quizDatabase[currentQuestionIndex];
    const card = document.getElementById('quizCard');
    const combo = document.getElementById('comboAlert');

    if (chosenIdx === activeQ.a) {
        quizPoints += 100;
        document.getElementById('quizPointsCounter').innerText = String(quizPoints).padStart(4, '0');
        
        const userObj = competitors.find(p => p.isUser);
        userObj.pts = quizPoints;
        
        if(quizPoints >= 200) document.getElementById('userRankTier').innerText = "SILVER GLADIATOR ⚔️";

        card.style.animation = "flash-green 0.5s ease-out";
        combo.style.display = "block";
        triggerToast("🟢 CRITICAL HIT: Competency verified! +100 Points added.");
        
        evaluateGatedUnlocks();
        
        setTimeout(() => { 
            renderLeaderboard(); 
            card.style.animation = ""; 
            combo.style.display = "none";
        }, 600);

        currentQuestionIndex = (currentQuestionIndex + 1) % quizDatabase.length;
        setTimeout(loadNextQuestionCard, 1000);
    } else {
        triggerToast("☕ VIBE CHECK: Life happens, macha! Read the parameters and try again.");
    }
}

function loadNextQuestionCard() {
    const nextQ = quizDatabase[currentQuestionIndex];
    document.getElementById('qText').innerText = nextQ.q;
    const optionsBox = document.getElementById('qOptions');
    optionsBox.innerHTML = '';
    nextQ.o.forEach((optionText, idx) => {
        optionsBox.innerHTML += `<button class="quiz-btn" onclick="submitArenaAnswer(${idx})">${optionText}</button>`;
    });
}

function evaluateGatedUnlocks() {
    if (quizPoints >= 200) {
        const node2 = document.getElementById('node2');
        const badge2 = document.getElementById('badge2');
        if(node2 && badge2 && node2.classList.contains('locked')) {
            node2.classList.remove('locked');
            badge2.innerText = "UNLOCKED";
            badge2.style.background = "var(--accent)";
            triggerToast("🔓 AREA CRACKED: System Delivery Engines are open!");
        }
    }
}

function triggerToast(msg) {
    const container = document.getElementById('toastContainer');
    if(!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 2500);
}

// 📧 Automated waitlist submission processor node binding
function submitWaitlistNode(e) {
    e.preventDefault();
    const email = document.getElementById('waitlistEmail').value;
    if(!email) return;
    
    triggerToast("💎 SUCCESS: Node registered to waitlist matrix! Check incoming token packets soon.");
    document.getElementById('waitlistForm').innerHTML = `<div style="color:var(--laser-green); font-weight:800; padding:1rem; text-align:center;">⚡ ACCOUNT SYNCED TO LEDGER MATRIX!</div>`;
}

window.addEventListener('DOMContentLoaded', () => {
    renderLeaderboard();
});

