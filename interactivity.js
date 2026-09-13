function createToast(msg) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3000);
}

function triggerNode(langName, summaryText) {
    createToast(`🚀 Engine Sync: [${langName.toUpperCase()}] Pipeline Initialized...`);
    
    const consoleBox = document.getElementById('sandboxConsole');
    const title = document.getElementById('sandboxTitle');
    const text = document.getElementById('sandboxText');
    
    title.innerText = `📡 Connected: ${langName} Node Active`;
    text.innerText = `[LOG TRANSACTION]: Verification cleared. Active Track Parameters: ${summaryText}`;
    
    consoleBox.scrollIntoView({ behavior: 'smooth' });
}
