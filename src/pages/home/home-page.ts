import './home-page.scss';
import gamesSeed from '../../mock-data/all-games-seed.json';
import leaderboard from '../../mock-data/leaderboard.json';
import { createSlider } from '../../components/features/slider/slider';
import { createElementFromHtml } from '../../utils/dom';
import { createDeveloperSection } from './developer-section';
import { createHeroSection } from './hero-section';
import { createLeaderboardSection } from './leaderboard-section';

const NEW_GAME_SLUGS = [
  'tailside-cozy-cafe-sim',
  'islanders-new-shores',
  'vacation-cafe-simulator',
  'winter-burrow',
  'shelve-the-potions',
];
const ACTIVE_GAME_SLUG = 'vacation-cafe-simulator';

export function createHomePage(): HTMLElement {
  const newGames = NEW_GAME_SLUGS.flatMap((slug) =>
    gamesSeed.data.filter((game) => game.slug === slug),
  );

  const page = createElementFromHtml('<div class="home"></div>');
  page.append(
    createHeroSection(),
    createSlider(newGames, ACTIVE_GAME_SLUG),
    createLeaderboardSection(leaderboard.data),
    createDeveloperSection(),
  );

  return page;
}
