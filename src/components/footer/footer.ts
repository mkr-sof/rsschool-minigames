import shareIcon from '../../assets/icons/svgs/share.svg';
import chatIcon from '../../assets/icons/svgs/comment.svg';
import rssIcon from '../../assets/icons/svgs/rss.svg';
import './footer.scss';
import { createElementFromHtml } from '../../utils/dom';
import { renderLogo } from '../shared/ui/logo/logo';

interface FooterLink {
  label: string;
  href: string;
  icon?: string;
}

const EXPLORE_LINKS: FooterLink[] = [
  { label: 'Home', href: '#/' },
  { label: 'Library', href: '#/library' },
  { label: 'Categories', href: '#/categories' },
  { label: 'Tournaments', href: '#/tournaments' },
];

const COMPANY_LINKS: FooterLink[] = [
  { label: 'About Us', href: '#/about' },
  { label: 'Contact', href: '#/contact' },
  { label: 'Privacy Policy', href: '#/privacy' },
  { label: 'Terms of Service', href: '#/terms' },
];

const SOCIAL_LINKS: FooterLink[] = [
  { label: 'Share', href: '#/', icon: shareIcon },
  { label: 'Chat', href: '#/', icon: chatIcon },
  { label: 'News feed', href: '#/', icon: rssIcon },
];

function renderLinkColumn(title: string, links: FooterLink[]): string {
  const items = links
    .map(
      ({ label, href }) =>
        `<li class="footer__item"><a class="footer__link" href="${href}">${label}</a></li>`,
    )
    .join('');

  return `
    <div class="footer__column">
      <h2 class="footer__heading">${title}</h2>
      <ul class="footer__list">${items}</ul>
    </div>`;
}

function renderSocialLinks(): string {
  const items = SOCIAL_LINKS.map(
    ({ label, href, icon }) =>
      `<li class="footer__item">
        <a class="social-link" href="${href}" aria-label="${label}">
          <img class="social-link__icon" src="${icon}" alt="" aria-hidden="true">
        </a>
      </li>`,
  ).join('');

  return `
    <div class="footer__column">
      <h2 class="footer__heading">Community</h2>
      <ul class="footer__social">${items}</ul>
    </div>`;
}

export function createFooter(): HTMLElement {
  const year = new Date().getFullYear();

  return createElementFromHtml(`
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__top">
          <div class="footer__about">
            ${renderLogo('on-dark')}
            <p class="footer__description">
              Take a short break and have fun. Hundreds of curated casual mini-games right in your
              web browser. No download required.
            </p>
          </div>
          <nav class="footer__nav" aria-label="Footer">
            ${renderLinkColumn('Explore', EXPLORE_LINKS)}
            ${renderLinkColumn('Company', COMPANY_LINKS)}
            ${renderSocialLinks()}
          </nav>
        </div>

        <div class="footer__bottom">
          <p class="footer__copyright">© ${year} MiniGames. All rights reserved.</p>
          <a class="footer__credit" href="https://rs.school/" target="_blank" rel="noopener noreferrer">
            <span class="icon" aria-hidden="true"></span>
            RS School
          </a>
          <a class="footer__credit" href="https://github.com/mkr-sof" target="_blank" rel="noopener noreferrer">
            <span class="icon" aria-hidden="true"></span>
            @mkr-sof
          </a>
          <p class="footer__note">Designed with love</p>
        </div>
      </div>
    </footer>
  `);
}
