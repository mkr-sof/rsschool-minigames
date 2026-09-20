import burgerIcon from '../../assets/icons/svgs/burger-menu.svg';
import '../shared/ui/button/button.scss';
import './header.scss';
import { createElementFromHtml } from '../../utils/dom';
import { renderLogo } from '../shared/ui/logo/logo';

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#/' },
  { label: 'Library', href: '#/library' },
  { label: 'Tournaments', href: '#/tournaments' },
  { label: 'Community', href: '#/community' },
];

function renderNavList(activeHref: string): string {
  const items = NAV_LINKS.map(({ label, href }) => {
    const current = href === activeHref ? ' aria-current="page"' : '';

    return `<li class="nav__item"><a class="nav__link" href="${href}"${current}>${label}</a></li>`;
  }).join('');

  return `<ul class="nav__list">${items}</ul>`;
}

function renderAuthButtons(size: 'small' | 'large'): string {
  return `
    <button class="button button--outline button--${size}" type="button" data-auth-trigger="login">Log In</button>
    <button class="button button--primary button--${size}" type="button" data-auth-trigger="register">Sign Up</button>`;
}

export function createHeader(activeHref = '#/'): HTMLElement {
  return createElementFromHtml(`
    <header class="header">
      <div class="header__inner">
        ${renderLogo('on-light')}
        <nav class="header__nav nav" aria-label="Main">
          ${renderNavList(activeHref)}
        </nav>
        <div class="header__actions">
          ${renderAuthButtons('small')}
        </div>
        <button
          class="header__burger"
          type="button"
          aria-label="Open menu"
          aria-expanded="false"
          aria-controls="mobile-menu"
        >
<img
  class="header__burger-icon"
  src="${burgerIcon}"
  alt=""
  aria-hidden="true"
/>        </button>
      </div>

      <div class="mobile-menu" id="mobile-menu" hidden>
        <div class="mobile-menu__top">
          ${renderLogo('on-dark')}
          <button class="mobile-menu__close" type="button" aria-label="Close menu">
            <span class="mobile-menu__close-icon" aria-hidden="true"></span>
          </button>
        </div>
        <nav class="mobile-menu__nav nav" aria-label="Mobile">
          ${renderNavList(activeHref)}
        </nav>
        <div class="mobile-menu__actions">
          ${renderAuthButtons('large')}
        </div>
      </div>
    </header>
  `);
}
