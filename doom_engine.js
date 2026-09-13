let careerXP = 0;
let activeVideoIdx = 0;
let activeTrack = "marketing";

// Sarcastic Video Data Repository Loops (Factoholic Mode)
const reelDatabase = [
    {
        sub: "JOYSTICKS ARE LIES!",
        cat: "Drone Logistics Core",
        desc: "Commercial drone flight crews don't play video games, ra! They run real high-speed telemetry streams on C hardware socket bindings and custom MATLAB aerodynamics stress profiles while you're grinding rank matches.",
        color: "linear-gradient(180deg, rgba(0,240,255,0.15) 0%, rgba(255,0,127,0.15) 100%)"
    },
    {
        sub: "BOTS STEAL THY CASH!",
        cat: "Automated Stock Trading",
        desc: "Wall Street high-frequency trading algorithms do not read chart indicators, macha! They deploy ultra-fast Go microservices that process secure transaction tokens in 0.0001 milliseconds to lock out retail buyers before they can even blink.",
        color: "linear-gradient(180deg, rgba(57,255,20,0.15) 0%, rgba(0,240,255,0.15) 100%)"
    },
    {
        sub: "ALGORITHMS HATE ART!",
        cat: "Digital Marketing Matrix",
        desc: "Your cute lifestyle aesthetic won't make a single sale, ra! High-conversion e-commerce engines run entirely on cold, ruthless Python data frames and machine learning tracking loops that profile consumer telemetry streams.",
        color: "linear-gradient(180deg, rgba(255,0,127,0.15) 0%, rgba(168,85,247,0.15) 100%)"
    }
];

function scrollNextVideo() {
    careerXP += 50;
    updateLedgerHUD();
    triggerToast("🔥 REEL CONQUERED: +50 XP secured! Subconscious scaling up.");

    activeVideoIdx = (activeVideoIdx + 1) % reelDatabase.length;
    const currentItem = reelDatabase[activeVideoIdx];
    
    document.getElementById('factoholicSubs').innerText = currentItem.sub;
    document.getElementById('videoCategory').innerText = currentItem.cat;
    document.getElementById('videoDescription').innerText = currentItem.desc;
    document.getElementById('videoGlow').style.background = currentItem.color;
}

function simulateLike() {
    careerXP += 10;
    updateLedgerHUD();
    triggerToast("❤️ Node Engagement: +10 XP logged to sandbox ledger.");
}

// 📅 SCHEDULE COMPILER OPERATIONS
function compileNoNagSchedule() {
    const hours = parseInt(document.getElementById('dailyHoursInput').value);
    const sector = document.getElementById('scheduleSectorSelect').value;
    
    if (!hours || hours <= 0 || hours > 24) {
        triggerToast("❌ Error: Input real availability hour string!");
        return;
    }

    careerXP += 150;
    updateLedgerHUD();
    document.getElementById('activeScheduleDept').innerText = sector.toUpperCase();

    const outBox = document.getElementById('timetableBox');
    outBox.innerHTML = `<div style="font-weight: 900; color: var(--laser-green); margin-bottom: 0.4rem; text-transform: uppercase; font-size: 0.8rem;">📅 Curriculum Breakdown (${hours}h/day):</div>`;

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const curricula = {
        marketing: ["Audience Modeling Core", "SEO Pipeline Analytics", "Meta Ad Cluster Tactics", "Python Funnel Automations", "CRO Conversion Loops"],
        drone: ["Aviation Law Codes", "Aerodynamics Physics", "Flight Controller Boards", "Drift Calibration Matrix", "Payload Stabilization"],
        trading: ["Candlesticks Metrics", "Ledger Accounting Math", "Risk Allocation Rules", "Derivative Hedging Loops", "Macro Events Playbook"]
    };

    days.forEach((day, index) => {
        outBox.innerHTML += `<div class="timetable-row"><b style="color:var(--text-muted);">${day}:</b><span>${curricula[sector][index]}</span></div>`;
    });
    outBox.style.display = 'block';
    triggerToast("⚡ ROUTINE SYSTEM READY: +150 XP rewarded for active blueprint mapping!");
}

// 🛠️ MULTI-TRACK INTERACTIVE SANDBOX PHYSICS ENGINE 
function syncSimulatorTracks() {
    activeTrack = document.getElementById('scheduleSectorSelect').value;
    const container = document.getElementById('simulatorControlsContainer');
    const display = document.getElementById('simMonitor');
    
    if(!container) return; // Safeguard if container isn't painted yet
    
    display.innerText = "ENVIRONMENT RE-CONFIGURED. STANDING BY...";
    display.style.color = "var(--laser-green)";

    if (activeTrack === "marketing") {
        document.getElementById('simContextHeader').innerText = "Configure e-commerce algorithmic marketing allocations:";
        container.innerHTML = `
            <div class="sim-slider-row"><label>Ad Spend Budget: <span id="val1">₹5000</span></label><input type="range" class="sim-slider" id="sl1" min="1000" max="50000" value="5000" oninput="document.getElementById('val1').innerText='₹'+this.value"></div>
            <div class="sim-slider-row"><label>Target Audience Match: <span id="val2">45%</span></label><input type="range" class="sim-slider" id="sl2" min="10" max="100" value="45" oninput="document.getElementById('val2').innerText=this.value+'%'"></div>`;
    } else if (activeTrack === "drone") {
        document.getElementById('simContextHeader').innerText = "Calibrate aerodynamic vector values for autonomous landing loop:";
        container.innerHTML = `
            <div class="sim-slider-row"><label>Pitch Compensation: <span id="val1">12°</span></label><input type="range" class="sim-slider" id="sl1" min="0" max="45" value="12" oninput="document.getElementById('val1').innerText=this.value+'°'"></div>
            <div class="sim-slider-row"><label>Wind Resistance Gain: <span id="val2">1.8x</span></label><input type="range" class="sim-slider" id="sl2" min="1" max="10" step="0.1" value="1.8" oninput="document.getElementById('val2').innerText=this.value+'x'"></div>`;
    } else if (activeTrack === "trading") {
        document.getElementById('simContextHeader').innerText = "Map High-Frequency portfolio risk hedging parameters:";
        container.innerHTML = `
            <div class="sim-slider-row"><label>Position Margin Cap: <span id="val1">5%</span></label><input type="range" class="sim-slider" id="sl1" min="1" max="25" value="5" oninput="document.getElementById('val1').innerText=this.value+'%'"></div>
            <div class="sim-slider-row"><label>Go Gateway Micro-Delay: <span id="val2">0.5ms</span></label><input type="range" class="sim-slider" id="sl2" min="0.1" max="5" step="0.1" value="0.5" oninput="document.getElementById('val2').innerText=this.value+'ms'"></div>`;
    }
}

function executeTradeSimulation() {
    const display = document.getElementById('simMonitor');
    const v1 = parseFloat(document.getElementById('sl1')?.value || 50);
    const v2 = parseFloat(document.getElementById('sl2')?.value || 50);
    
    careerXP += 300;
    updateLedgerHUD();
    
    display.style.color = "#39ff14";
    if (activeTrack === "marketing") {
        display.innerText = `🟢 ROAS BOOM: Funnel locked at ${(v1/v2*10).toFixed(2)}x Profit Return! Matrix safe.`;
    } else if (activeTrack === "drone") {
        display.innerText = `🟢 PERFECT TOUCHDOWN: Gyro arrays balanced at pitch ${v1}°. Package dispatched cleanly.`;
    } else if (activeTrack === "trading") {
        display.innerText = `🟢 OPERATION CLEARED: High-frequency ledger hedge committed successfully at delay ${v2}ms!`;
    }
    triggerToast("🏆 PRACTICAL BENCHMARK UNLOCKED: +300 Master XP saved to registry ledger!");
}

function updateLedgerHUD() {
    document.getElementById('scoreCounter').innerText = String(careerXP).padStart(4, '0');
}

function triggerToast(msg) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 2500);
}

// Initialise the interface layout setup on window paint loop initialization
window.addEventListener('DOMContentLoaded', () => {
    // Dynamically insert controls element if not written directly in html block
    const simCard = document.getElementById('simCard');
    if(simCard && !document.getElementById('simulatorControlsContainer')) {
        const div = document.createElement('div');
        div.id = 'simulatorControlsContainer';
        div.className = 'sim-control-group';
        simCard.insertBefore(div, document.getElementById('simMonitor'));
    }
    syncSimulatorTracks();
});


