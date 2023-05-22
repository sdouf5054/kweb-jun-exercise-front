const setRandomBgColor = () => {
    const colorRed = Math.floor(Math.random() * 256);
    const colorBlue = Math.floor(Math.random() * 256);
    const colorGreen = Math.floor(Math.random() * 256);
    const newColor = 'rgb(' + colorRed + ',' + colorBlue + ',' + colorGreen + ')';
    document.getElementById('color-box').style.backgroundColor = newColor;
};