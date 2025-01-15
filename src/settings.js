document.addEventListener('DOMContentLoaded', () => {
  // 設定の読み込み
  chrome.storage.local.get('settings', (settings) => {
    console.log(settings);
    // jsonの設定
    const json = settings.settings.json;
    if(!json) return;
    document.getElementById('json').value = json;
    // 幅の設定
    const width = settings.settings.width;
    if(!width) return;
    document.getElementById('popup_width').value = width;
  });
  // 設定保存ボタンのハンドラ登録
  document.querySelector('#save_button')?.addEventListener('click', () => {
    const json = document.getElementById('json').value;
    const width = document.getElementById('popup_width').value;
    try {
      JSON.parse(json);
      chrome.storage.local.set({
        'settings': { json, width }
      }, () => {
        alert('保存しました。');
      });
    } catch(e) {
      alert('保存に失敗しました。\nJSON形式が正しくありません。');
    }
  });
});