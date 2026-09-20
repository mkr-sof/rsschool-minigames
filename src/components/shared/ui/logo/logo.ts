import logoIcon from '../../../../assets/icons/logo.png';
import './logo.scss';

export type LogoTheme = 'on-light' | 'on-dark';

export function renderLogo(theme: LogoTheme): string {
  return `
    <a class="logo logo--${theme}" href="#/">
      <img class="logo__icon" src="${logoIcon}" alt="" aria-hidden="true">
      <span class="logo__text">MiniGames</span>
    </a>`;
}
