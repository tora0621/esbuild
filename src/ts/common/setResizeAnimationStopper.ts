/**
 * リサイズ中にアニメーション停止クラスを追加
 */
export function setResizeAnimationStopper(): void {
  const win: JQuery<Window> = $(window);
  const body: JQuery = $('body');
  let resizeTimer: number;

  win.on('orientationchange', (e) => {
    body.addClass('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      body.removeClass('resize-animation-stopper');
    }, 1000);
  });
}
