const clock = document.querySelector('.clock');
const tick = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const html = `
    <span><b>${h}</b></span> : 
    <span><b>${m}</b></span> : 
    <span><b>${s}</b></span>
    `;
    clock.innerHTML = html;

};
setInterval(tick, 1000);