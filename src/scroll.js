export function startScroll(text) {
    //.scroll
    const scrollWrapper = document.createElement('div');
    scrollWrapper.className = 'scroll';

    // .scroll-container
    const scrollContainer = document.createElement('div');
    scrollContainer.className = 'scroll-container';
    scrollContainer.textContent = text;

    // ネストさせる
    scrollWrapper.appendChild(scrollContainer);

    document.body.appendChild(scrollWrapper);

    // chromeはあとから発火させないと
    // アニメーションが動かない。
    // divより後に動くようにわける。
    requestAnimationFrame(() => {
        scrollContainer.classList.add('animate');
    });
}