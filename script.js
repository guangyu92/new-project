function createFirework() {
    const fireworksContainer = document.querySelector('.fireworks');
    for (let i = 0; i < 3; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.top = Math.random() * 100 + 'vh';
        firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        fireworksContainer.appendChild(firework);
        setTimeout(() => firework.remove(), 1500);
    }
}

// 页面加载完成后启动动画
document.addEventListener('DOMContentLoaded', () => {
    setInterval(createFirework, 200);
    
    // 确保标题动画正常启动
    const h1 = document.querySelector('h1');
    h1.style.animation = 'none';
    setTimeout(() => {
        h1.style.animation = 'float 3s ease-in-out infinite';
    }, 10);
});