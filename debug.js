// 画面の左上に秒数を表示するインジケーターを自動生成
(function() {
    const debugDiv = document.createElement('div');
    debugDiv.style.position = 'fixed';
    debugDiv.style.top = '10px';
    debugDiv.style.left = '10px';
    debugDiv.style.background = 'rgba(0, 0, 0, 0.85)';
    debugDiv.style.color = '#ffaa00';
    debugDiv.style.fontFamily = 'monospace';
    debugDiv.style.fontSize = '16px';
    debugDiv.style.padding = '10px';
    debugDiv.style.borderRadius = '5px';
    debugDiv.style.border = '1px solid #ffaa00';
    debugDiv.style.zIndex = '9999';
    debugDiv.style.pointerEvents = 'none'; // クリックの邪魔にならないように
    debugDiv.innerHTML = `<div>再生時間 (秒): <span id="debug-time">0.000</span>s</div>
                          <div style="font-size:11px;color:#a0aec0;margin-top:5px;">※この数値をコピーして sequence に貼り付けてね</div>`;
    document.body.appendChild(debugDiv);

    // 音声要素を取得してミリ秒単位で監視
    const audio = document.getElementById("my-audio");
    if (audio) {
        // timeupdateよりも高頻度で滑らかに更新するため requestAnimationFrame を使用
        function updateDebugTime() {
            document.getElementById("debug-time").innerText = audio.currentTime.toFixed(3);
            requestAnimationFrame(updateDebugTime);
        }
        requestAnimationFrame(updateDebugTime);
    }
})();
