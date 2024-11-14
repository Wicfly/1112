// JavaScript 代码，用于监听页面滚动并修改背景图片透明度
window.addEventListener('scroll', () => {
    // 获取页面当前滚动的垂直位置
    const scrollTop = window.scrollY;
    // 获取窗口的高度
    const windowHeight = window.innerHeight;
    
    // 计算不透明度，随着滚动变得透明
    const opacity = Math.max(0, 1 - scrollTop / (windowHeight / 2));
    
    // 设置背景图片的透明度
    document.querySelector('.background-image').style.opacity = opacity;
});
