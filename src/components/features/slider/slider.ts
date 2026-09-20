import leftArrowIcon from '../../../assets/icons/svgs/arrow-left.svg';
import rightArrowIcon from '../../../assets/icons/svgs/arrow-right.svg';
import './slider.scss';
import type { Game } from '../../../types/game';
import { createElementFromHtml, escapeHtml } from '../../../utils/dom';
import { getGameCardImage } from '../../../utils/game-images';
import { formatLikes, formatRating } from '../../../utils/format';

function renderSlide(game: Game, isActive: boolean): string {
  const name = escapeHtml(game.name);
  const activeClass = isActive ? ' slider__slide--active' : '';

  return `
    <li class="slider__slide${activeClass}">
      <article class="game-card">
        <img class="game-card__image" src="${getGameCardImage(game.slug)}" alt="${name} cover" />
        <div class="game-card__info">
          <h3 class="game-card__title">${name}</h3>
          <p class="game-card__meta">
            <span class="game-card__rating">
              <span class="icon icon--star" aria-hidden="true"></span>
              <span class="visually-hidden">Rating:</span>
              ${formatRating(game.rating)}
            </span>
            <span class="game-card__likes">
              <span class="icon icon--heart" aria-hidden="true"></span>
              <span class="visually-hidden">Likes:</span>
              ${formatLikes(game.likesCount)}
            </span>
          </p>
        </div>
      </article>
    </li>`;
}

export function createSlider(games: Game[], activeSlug: string): HTMLElement {
  const slides = games.map((game) => renderSlide(game, game.slug === activeSlug)).join('');

  return createElementFromHtml(`
    <section class="slider" aria-labelledby="new-games-title">
      <div class="slider__header">
        <h2 class="section-title" id="new-games-title">New Games</h2>
        <div class="slider__controls">
          <button class="slider__button slider__button--prev" type="button" aria-label="Previous game">
            <img class="icon" src="${leftArrowIcon}" alt="" aria-hidden="true" />
          </button>
          <button class="slider__button slider__button--next" type="button" aria-label="Next game">
            <img class="icon" src="${rightArrowIcon}" alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
      <ul class="slider__track">${slides}</ul>
    </section>
  `);
}
