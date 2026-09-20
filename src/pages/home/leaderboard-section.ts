import './leaderboard-section.scss';
import type { LeaderboardEntry } from '../../types/leaderboard';
import { createElementFromHtml, escapeHtml } from '../../utils/dom';
import {
  formatCompactNumber,
  formatDays,
  formatDaysShort,
  formatNumber,
  getInitials,
} from '../../utils/format';

function renderRow(entry: LeaderboardEntry): string {
  const playerName = escapeHtml(entry.playerName);

  return `
    <tr class="leaderboard__row">
      <td class="leaderboard__cell leaderboard__cell--rank">#${entry.rank}</td>
      <th class="leaderboard__cell leaderboard__cell--player" scope="row">
        <span class="avatar" aria-hidden="true">${getInitials(entry.playerName)}</span>
        <span class="leaderboard__player-name">${playerName}</span>
      </th>
      <td class="leaderboard__cell leaderboard__cell--games">${formatNumber(entry.gamesPlayed)}</td>
      <td class="leaderboard__cell leaderboard__cell--score">
        <span class="hide-mobile">${formatNumber(entry.totalScore)}</span>
        <span class="show-mobile">${formatCompactNumber(entry.totalScore)}</span>
      </td>
      <td class="leaderboard__cell leaderboard__cell--streak">
        <span aria-hidden="true">🔥</span>
        <span class="hide-tablet">${formatDays(entry.streakDays)}</span>
        <span class="show-tablet">${formatDaysShort(entry.streakDays)}</span>
      </td>
      <td class="leaderboard__cell leaderboard__cell--favorite">
        <span class="badge">${escapeHtml(entry.favoriteGameName)}</span>
      </td>
    </tr>`;
}

export function createLeaderboardSection(entries: LeaderboardEntry[]): HTMLElement {
  return createElementFromHtml(`
    <section class="leaderboard" aria-labelledby="leaderboard-title">
      <h2 class="section-title" id="leaderboard-title">
        Top Players<span class="hide-mobile"> This Week</span>
      </h2>
      <div class="leaderboard__table-wrap">
        <table class="leaderboard__table">
          <thead>
            <tr>
              <th class="leaderboard__cell leaderboard__cell--rank" scope="col">Rank</th>
              <th class="leaderboard__cell leaderboard__cell--player" scope="col">Player</th>
              <th class="leaderboard__cell leaderboard__cell--games" scope="col">
                <span class="hide-tablet">Games Played</span><span class="show-tablet">Games</span>
              </th>
              <th class="leaderboard__cell leaderboard__cell--score" scope="col">
                <span class="hide-tablet">Total Score</span><span class="show-tablet">Score</span>
              </th>
              <th class="leaderboard__cell leaderboard__cell--streak" scope="col">Streak</th>
              <th class="leaderboard__cell leaderboard__cell--favorite" scope="col">Favorite Game</th>
            </tr>
          </thead>
          <tbody>${entries.map(renderRow).join('')}</tbody>
        </table>
      </div>
    </section>
  `);
}
