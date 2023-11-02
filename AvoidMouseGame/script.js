const btn = document.getElementById('gameBtn');
const moveThreshold = 100;  // The distance (in pixels) at which the button will move.

btn.addEventListener('mousemove', (e) => {
    const btnRect = btn.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const distance = Math.sqrt(
        Math.pow(mouseX - (btnRect.left + btnRect.width / 2), 2) +
        Math.pow(mouseY - (btnRect.top + btnRect.height / 2), 2)
    );

    if (distance < moveThreshold) {
        const newX = Math.random() * (window.innerWidth - btnRect.width);
        const newY = Math.random() * (window.innerHeight - btnRect.height);

        btn.style.position = 'absolute';
        btn.style.left = `${newX}px`;
        btn.style.top = `${newY}px`;
    }
});
