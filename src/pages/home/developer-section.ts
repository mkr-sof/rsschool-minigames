import submitIcon from '../../assets/icons/svgs/submit.svg';
import '../../components/shared/ui/button/button.scss';
import './developer-section.scss';
import developerIllustration from '../../assets/images/games/cast-n-chill-card.jpg';
import { createElementFromHtml } from '../../utils/dom';

export function createDeveloperSection(): HTMLElement {
  return createElementFromHtml(`
    <section class="developer" aria-labelledby="developer-title">
      <img class="developer__image" src="${developerIllustration}" alt="" />
      <div class="developer__card">
        <h2 class="developer__title" id="developer-title">Are You a Game Developer?</h2>
        <p class="developer__text">
          Want to see your game on MiniGames? We're always looking for fun, engaging mini games to
          add to our platform. Submit your game and reach thousands of players!
        </p>
        <button class="button button--primary button--large" type="button">
          <img class="icon" src="${submitIcon}" alt="Submit" aria-hidden="true" />
          Submit Form
        </button>
        <p class="developer__contact">
          or contact us at
          <a class="developer__email" href="mailto:developers@minigames.com">developers@minigames.com</a>
        </p>
      </div>
    </section>
  `);
}
