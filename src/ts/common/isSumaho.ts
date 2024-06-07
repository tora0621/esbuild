import { breakPoint } from './var';
/**
 * @description スマホ表示であるか判定
 * @returns {boolean} 閲覧デバイスのブラウザ幅がスマホのブレークポイント以内あればtrue,それ以外はfalse
 */
export function isSumaho(): boolean {
  const deviceWidth: number = window.innerWidth;
  const maxAspectRatio: number = 12 / 17;
  const aspectRatio: number = window.innerWidth / window.innerHeight;
  return deviceWidth < breakPoint.sumaho && aspectRatio <= maxAspectRatio;
}
