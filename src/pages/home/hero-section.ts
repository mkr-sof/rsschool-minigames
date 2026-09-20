import '../../components/shared/ui/button/button.scss';
import './hero-section.scss';
import { createElementFromHtml } from '../../utils/dom';

export function createHeroSection(): HTMLElement {
  return createElementFromHtml(`
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero__inner">
        <div class="hero__card">
          <h1 class="hero__title" id="hero-title">Take a Short Break &amp; Have Fun</h1>
          <p class="hero__text">
            Discover hundreds of curated casual mini-games. Play instantly in your browser<span class="hero__text-extra"> — puzzle, match 3, farm, and board classics</span>.
          </p>
          <a class="button button--primary button--large" href="#/library">Browse Library</a>
        </div>
      </div>
    </section>
  `);
}
