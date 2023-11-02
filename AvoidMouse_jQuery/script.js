$(document).ready(function() {
    const gameBox = $('#gameBox');
    const targetBtn = $('#targetBtn');

    targetBtn.mouseover(function() {
        let maxX = gameBox.width() - targetBtn.width();
        let maxY = gameBox.height() - targetBtn.height();

        let newX = Math.random() * maxX;
        let newY = Math.random() * maxY;

        targetBtn.css('position', 'absolute');
        targetBtn.css('left', newX + 'px');
        targetBtn.css('top', newY + 'px');
    });
});
