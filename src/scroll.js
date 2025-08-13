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

    // テキスト長に応じてアニメーション時間を調整
    const textLength = formattedText.textLength;
    const baseTime = 30; // 基本時間(秒)
    const timePerChar = 0.08 // 追加時間
    const animationDuration = Math.max(baseTime, textLength * timePerChar);

    scrollContainer.style.animationDuration = `${animationDuration}s`

    // ネストさせる
    scrollWrapper.appendChild(scrollContainer);
    document.body.appendChild(scrollWrapper);

    // アニメーション終了後の処理
    scrollContainer.addEventListener('animationend', () => {
        showEndOptions(scrollWrapper, text);
    });

    // chromeはあとから発火させないと
    // アニメーションが動かない。
    // divより後に動くようにわける。
    requestAnimationFrame(() => {
        scrollContainer.classList.add('animate');
    });
}

function showEndOptions(scrollWrapper, originalText) {
    //既存のスクロール要素を非表示
    scrollWrapper.style.display = 'none';

    // 選択画面を作成
    const optionWrapper = document.createElement('div');
    optionWrapper.className = 'end-options';

    const optionContainer = document.createElement('div');
    optionContainer.className = 'end-option-container';

    const tittle = document.createElement('h2');
    tittle.textContent = 'fin'
    tittle.className = 'end-tittle';

    const replayButton = document.createElement('button');
    replayButton.textContent = 'もう一度再生';
    replayButton.className = 'end-button replay-button';
    
    const newButton = document.createElement('button');
    newButton.textContent = '新しいテキストを入力';
    newButton.className = 'end-button new-button';
    
    // ボタンのイベントリスナー
    replayButton.addEventListener('click', () => {
        document.body.removeChild(optionWrapper);
        document.body.remo
        
    }
    );
}