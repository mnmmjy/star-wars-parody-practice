export function startScroll(text) {
    //.scroll
    const scrollWrapper = document.createElement('div');
    scrollWrapper.className = 'scroll';

    // .scroll-container
    const scrollContainer = document.createElement('div');
    scrollContainer.className = 'scroll-container';

    // テキストを段落ごとに分割して適切にフォーマット
    const paragraphs = text.split('\n\n').filter(p =>p.trim());
    const formattedText = paragraphs.map(p => p.trim()).join('\n\n');

    scrollContainer.textContent = formattedText;

    // 明示的に横書き
    scrollContainer.style.writingMode = 'horizontal-tb';
    scrollContainer.style.direction = 'ltr';

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