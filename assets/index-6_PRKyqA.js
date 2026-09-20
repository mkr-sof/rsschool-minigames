(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20%3e%3ccircle%20cx='18'%20cy='5'%20r='3'%20stroke='%23FFFFFF'%20stroke-width='2'%20/%3e%3ccircle%20cx='6'%20cy='12'%20r='3'%20stroke='%23FFFFFF'%20stroke-width='2'%20/%3e%3ccircle%20cx='18'%20cy='19'%20r='3'%20stroke='%23FFFFFF'%20stroke-width='2'%20/%3e%3cpath%20d='M8.6%2010.5L15.4%206.5'%20stroke='%23FFFFFF'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3cpath%20d='M8.6%2013.5L15.4%2017.5'%20stroke='%23FFFFFF'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3c/svg%3e`,t=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20%3e%3cpath%20d='M4%203H20C21.105%203%2022%203.895%2022%205V15C22%2016.105%2021.105%2017%2020%2017H10L5%2021V17H4C2.895%2017%202%2016.105%202%2015V5C2%203.895%202.895%203%204%203Z'%20stroke='%23FFFFFF'%20stroke-width='2'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M7%208H17'%20stroke='%23FFFFFF'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3cpath%20d='M7%2012H14'%20stroke='%23FFFFFF'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3c/svg%3e`,n=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20%3e%3ccircle%20cx='5'%20cy='19'%20r='2'%20fill='%23FFFFFF'%20/%3e%3cpath%20d='M5%2012C8.866%2012%2012%2015.134%2012%2019'%20stroke='%23FFFFFF'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3cpath%20d='M5%205C12.732%205%2019%2011.268%2019%2019'%20stroke='%23FFFFFF'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3c/svg%3e`,r={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`};function i(e){return e.replace(/[&<>"']/g,e=>r[e])}function a(e){let t=document.createElement(`template`);t.innerHTML=e.trim();let n=t.content.firstElementChild;if(!(n instanceof HTMLElement))throw Error(`createElementFromHtml: markup must contain a root HTML element`);return n}var o=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABCNJREFUeAG1V91rXEUU/83szeazNj5YTRVJQWoEg1YqKD6of4KKL2KxD4qPPuiLltpabKlatUIefFFEQQT7KAhFSAVfRKFSQQShXbWUZrMJCdm0m9175/TM1/3YvR9J0x52mLkzc875na+ZHcAREU1yO6KI5rnRbWrnQ6KDSJFwyqcJmOfhNMqIPMe2qcFinhVCNIw4RnapUvmtR6SV76uRdcnBm5Mryhn8dP7yJE9vCB0X/ngUt4y25JVzGgBtT8b2MMjcWVEhnTGTUuh2Q9PrJtKsWwAvsSUi81OK8MHps9j/9EnMPnEcn8z9pBM5DvdWKD8EfjEWmPKpViQE9swexq5dO3mW0Gyu4eKfx7JQDUt1LEo9QBko2WGnG9k9/N3rRYM8pbGgzQHwm3u9EKFWYtxshX564gV4BB+ffD7ZrXOD96soyYvBuCTASkNgmQkX/rqMA699g4iFs1yjZGJiGEGtZmSFoUK73UEgJfjH8xJfff4yHpm9vzIngirlmu69507U6wFqtRyHkVU4uXMsmWKUU1OTsa2UsptSfHqiPATOU2NjdWNlpr6LeqZeFOGOidFYT1pnv+xyAI5jZDiwNS98dts1kTbJR5Lnuhuh8ZjZg/I6CNKAKFaqjDwpLT5ddpGiRJDKyStfdowy5L1SJmqV+87LB5nmt9p0nUu8+fYZ7H3sKO6bOYSvv/sVE+PDzgNkeo2GPPI+C3aMj+DbM79h94Pv4IF9R/DWoe8NiDzKVoEbdrnkHn/mFEZHAqNM5PGKxGg9ZkFQukdiqYQGKzgkEX45+wbGR0cs+BQFGR+6oJIWpnTMa1ZgfKWm71fbKQeQZAqM26EMC7FBG2xMPTcZZMYk19frNbx64Ek0F9Zx+f8lzH34ojmMtALhDiPh8Eple0HJUa2T8PSJ53D1ygoWFtt4/ZWnjNy8g7nwINKHjU9CTXv3H+Nat6VllPHSUusaJ2eEu+/aYYSTuSeA1dXr+Pv3d2NepW9LmVOvKClDwcpNwhGZBBoyh5CznIcPz+zGP+cP49KF9/DQzFRGrD4RtVJjiJNVVJCDAHL80dnoYWgoMO7XMpoLbXwx95IpT01f8ri1vB6fCwGHsNMJE4HWPcijQQA5ibKyeg31wGcbIRjqY2HNxmIX5HpQQ3u9k5VZcBrJEr2uKoB//1vG4lKbLV9Ds7XGNx3h+Ec/WPsY0PunfuRkgllb5P8GreU2LjZaiRwq1LCJ27AAILlw+NX+deX+uFSRzKIsIB/GuFHsHX+ymIRN7ckop2IdGsA5WCOKSRSggj8mU4DK+Ae3/CGZ9edc2aXks4pQfd8VE6fNZ8I8SgH9OJmuYkjfvv3z6FsTJd9u3JBC7OEmVvRDkecaqCDa5Foe0L4/Jg2ns28TvxP1U+02Ps/nI6Kj2ute5w08AKp+H2eCQgAAAABJRU5ErkJggg==`;function s(e){return`
    <a class="logo logo--${e}" href="#/">
      <img class="logo__icon" src="${o}" alt="" aria-hidden="true">
      <span class="logo__text">MiniGames</span>
    </a>`}var c=[{label:`Home`,href:`#/`},{label:`Library`,href:`#/library`},{label:`Categories`,href:`#/categories`},{label:`Tournaments`,href:`#/tournaments`}],l=[{label:`About Us`,href:`#/about`},{label:`Contact`,href:`#/contact`},{label:`Privacy Policy`,href:`#/privacy`},{label:`Terms of Service`,href:`#/terms`}],u=[{label:`Share`,href:`#/`,icon:e},{label:`Chat`,href:`#/`,icon:t},{label:`News feed`,href:`#/`,icon:n}];function d(e,t){return`
    <div class="footer__column">
      <h2 class="footer__heading">${e}</h2>
      <ul class="footer__list">${t.map(({label:e,href:t})=>`<li class="footer__item"><a class="footer__link" href="${t}">${e}</a></li>`).join(``)}</ul>
    </div>`}function f(){return`
    <div class="footer__column">
      <h2 class="footer__heading">Community</h2>
      <ul class="footer__social">${u.map(({label:e,href:t,icon:n})=>`<li class="footer__item">
        <a class="social-link" href="${t}" aria-label="${e}">
          <img class="social-link__icon" src="${n}" alt="" aria-hidden="true">
        </a>
      </li>`).join(``)}</ul>
    </div>`}function p(){let e=new Date().getFullYear();return a(`
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__top">
          <div class="footer__about">
            ${s(`on-dark`)}
            <p class="footer__description">
              Take a short break and have fun. Hundreds of curated casual mini-games right in your
              web browser. No download required.
            </p>
          </div>
          <nav class="footer__nav" aria-label="Footer">
            ${d(`Explore`,c)}
            ${d(`Company`,l)}
            ${f()}
          </nav>
        </div>

        <div class="footer__bottom">
          <p class="footer__copyright">© ${e} MiniGames. All rights reserved.</p>
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
  `)}var m=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20aria-hidden='true'%20%3e%3cpath%20d='M3%206h18M3%2012h18M3%2018h18'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3c/svg%3e`,h=[{label:`Home`,href:`#/`},{label:`Library`,href:`#/library`},{label:`Tournaments`,href:`#/tournaments`},{label:`Community`,href:`#/community`}];function g(e){return`<ul class="nav__list">${h.map(({label:t,href:n})=>`<li class="nav__item"><a class="nav__link" href="${n}"${n===e?` aria-current="page"`:``}>${t}</a></li>`).join(``)}</ul>`}function _(e){return`
    <button class="button button--outline button--${e}" type="button" data-auth-trigger="login">Log In</button>
    <button class="button button--primary button--${e}" type="button" data-auth-trigger="register">Sign Up</button>`}function v(e=`#/`){return a(`
    <header class="header">
      <div class="header__inner">
        ${s(`on-light`)}
        <nav class="header__nav nav" aria-label="Main">
          ${g(e)}
        </nav>
        <div class="header__actions">
          ${_(`small`)}
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
  src="${m}"
  alt=""
  aria-hidden="true"
/>        </button>
      </div>

      <div class="mobile-menu" id="mobile-menu" hidden>
        <div class="mobile-menu__top">
          ${s(`on-dark`)}
          <button class="mobile-menu__close" type="button" aria-label="Close menu">
            <span class="mobile-menu__close-icon" aria-hidden="true"></span>
          </button>
        </div>
        <nav class="mobile-menu__nav nav" aria-label="Mobile">
          ${g(e)}
        </nav>
        <div class="mobile-menu__actions">
          ${_(`large`)}
        </div>
      </div>
    </header>
  `)}var y={data:[{slug:`vacation-cafe-simulator`,name:`Vacation Cafe Simulator`,category:`strategy`,price:`Free`,shortDescription:`Cozy Italian Vacation Cafe 🏖️ No timers, No stress 😌 cook traditional dishes 🍝 upgrade and customize 🏠 just drink Prosecco 🥂 relax and grow your dream cafe ✨`,rating:4.8,likesCount:28750,cardImage:`/assets/images/games/vacation-cafe-simulator-card.jpg`,featured:!0},{slug:`winter-burrow`,name:`Winter Burrow`,category:`farm`,price:`Free`,shortDescription:`A cozy woodland survival game about a mouse restoring their childhood burrow. Explore, gather resources, craft, knit warm sweaters, bake pies and meet the locals.`,rating:4.9,likesCount:32400,cardImage:`/assets/images/games/winter-burrow-card.jpg`,featured:!0},{slug:`shelve-the-potions`,name:`Shelve the Potions!`,category:`puzzle`,price:`Free`,shortDescription:`Organize 2000+ potions on shelves after the witch's cats have knocked them over, using clues around an enchanted cellar. Learn strange symbols and decipher cryptic notes.`,rating:4.7,likesCount:21300,cardImage:`/assets/images/games/shelve-the-potions-card.jpg`,featured:!0},{slug:`heartopia`,name:`Heartopia`,category:`strategy`,price:`$1.99`,shortDescription:`A multiplayer life simulation game crafted for creativity, freedom, and peace. Build your dream home, explore hobbies, and forge warm connections with friends in a cozy town.`,rating:4.6,likesCount:46800,cardImage:`/assets/images/games/heartopia-card.jpg`,featured:!0},{slug:`palia`,name:`Palia`,category:`strategy`,price:`Free`,shortDescription:`A free-to-play fantasy life sim adventure where you can craft, explore, and create the life and home of your dreams in a vibrant, heartwarming world.`,rating:4.8,likesCount:89500,cardImage:`/assets/images/games/palia-card.jpg`,featured:!0},{slug:`cat-mail-co`,name:`Cat Mail Co.`,category:`puzzle`,price:`Free`,shortDescription:`Run a cozy cat post office. Sort and deliver parcels from the daily boat. At night, the moon reveals hidden truths about packages. Clear a strange backlog and unlock new destinations.`,rating:4.9,likesCount:38200,cardImage:`/assets/images/games/cat-mail-co-card.jpg`,featured:!0},{slug:`leaf-it-alone`,name:`Leaf it Alone`,category:`arcade`,price:`Free`,shortDescription:`Finally, it's that time of the year to clean up this leafy mess. Derust your raking skills and don't waste a second — there's a whole lawn waiting!`,rating:4.4,likesCount:12600,cardImage:`/assets/images/games/leaf-it-alone-card.jpg`,featured:!1},{slug:`leafy-corner`,name:`Leafy Corner`,category:`farm`,price:`$1.99`,shortDescription:`Run a cute little plant shop. Grow, sell, and care for real-life plants, help customers find their dream plants, complete orders, and customize your cozy shop.`,rating:4.7,likesCount:19800,cardImage:`/assets/images/games/leafy-corner-card.jpg`,featured:!1},{slug:`grimshire`,name:`Grimshire`,category:`strategy`,price:`Free`,shortDescription:`A deadly plague threatens the village of Grimshire. Manage farmland, forage wilds, stop harvest rot and keep the cellar full. Can you help the community survive?`,rating:4.6,likesCount:15700,cardImage:`/assets/images/games/grimshire-card.jpg`,featured:!1},{slug:`tiny-glade`,name:`Tiny Glade`,category:`arcade`,price:`$3.99`,shortDescription:`A small diorama builder where you doodle whimsical castles, cozy cottages & romantic ruins. No management, combat or goals — just lovable dioramas.`,rating:4.9,likesCount:67300,cardImage:`/assets/images/games/tiny-glade-card.jpg`,featured:!0},{slug:`whisper-of-the-house`,name:`Whisper of the House`,category:`puzzle`,price:`Free`,shortDescription:`A cozy organizing & decorating game. Help townspeople move, organize, and clean their spaces. Your gentle touch may change their lives and uncover hidden stories.`,rating:4.8,likesCount:24900,cardImage:`/assets/images/games/whisper-of-the-house-card.jpg`,featured:!1},{slug:`tukoni-forest-keepers`,name:`Tukoni: Forest Keepers`,category:`puzzle`,price:`Free`,shortDescription:`A cute cozy puzzle adventure. Play as a forest spirit exploring hand-drawn magical locations, meet charming characters, solve puzzles, collect herbs and tea recipes.`,rating:4.9,likesCount:31200,cardImage:`/assets/images/games/tukoni-forest-keepers-card.jpg`,featured:!1},{slug:`cat-chess`,name:`Cat Chess`,category:`strategy`,price:`Free`,shortDescription:`Play the ancient and thrilling game of Chess but with... cats! Lead your furry friends to the Purrfect battle of brains and whiskers!`,rating:4.6,likesCount:17400,cardImage:`/assets/images/games/cat-chess-card.jpg`,featured:!1},{slug:`cast-n-chill`,name:`Cast n Chill`,category:`arcade`,price:`Free`,shortDescription:`A relaxing fishing game where you explore serene lakes, rivers, and oceans. Catch rare fish, upgrade your gear and reel in legendary catches - all with your loyal companion.`,rating:4.7,likesCount:26800,cardImage:`/assets/images/games/cast-n-chill-card.jpg`,featured:!1},{slug:`little-corners`,name:`Little Corners`,category:`puzzle`,price:`Free`,shortDescription:`Peel, place, and arrange stickers across tiny windows into different worlds. Relax and unwind to lofi beats, collect unique stickers and share cozy creations.`,rating:4.8,likesCount:41500,cardImage:`/assets/images/games/little-corners-card.jpg`,featured:!1},{slug:`tailside-cozy-cafe-sim`,name:`Tailside: Cozy Cafe Sim`,category:`strategy`,price:`Free`,shortDescription:`Run your own cozy café in Tailside! Brew coffee, decorate your café, follow small stories in the daily newspaper. Unlock new items, skills, villagers, and creature visitors.`,rating:4.8,likesCount:35600,cardImage:`/assets/images/games/tailside-cozy-cafe-sim-card.jpg`,featured:!0},{slug:`islanders-new-shores`,name:`ISLANDERS: New Shores`,category:`strategy`,price:`Free`,shortDescription:`Build your island retreat in a calm, minimalist world with exciting new features that keep the classic charm while inspiring fresh creativity.`,rating:4.9,likesCount:54200,cardImage:`/assets/images/games/islanders-new-shores-card.jpg`,featured:!0},{slug:`camper-van-make-it-home`,name:`Camper Van: Make it Home`,category:`puzzle`,price:`Free`,shortDescription:`Decorate and organize the camper van of your dreams! Build your own home-on-wheels using creative block organization puzzles and relaxing interior design.`,rating:4.7,likesCount:29300,cardImage:`/assets/images/games/camper-van-make-it-home-card.jpg`,featured:!1},{slug:`organized-inside`,name:`Organized Inside`,category:`puzzle`,price:`Free`,shortDescription:`A slow-paced life sim and tidying up game about a cat, passion, transformation and growth. Categorize household items while uncovering the meaning of life through organization.`,rating:4.8,likesCount:22700,cardImage:`/assets/images/games/organized-inside-card.jpg`,featured:!1},{slug:`cozy-solitaire`,name:`Cozy Solitaire`,category:`card`,price:`Free`,shortDescription:`Classic Solitaire game, accompanied by music and kitties.`,rating:4.5,likesCount:38900,cardImage:`/assets/images/games/cozy-solitaire-card.jpg`,featured:!1},{slug:`cozy-sudoku`,name:`Cozy Sudoku`,category:`puzzle`,price:`Free`,shortDescription:`Sudoku, tunes, and some furry friends.`,rating:4.6,likesCount:21500,cardImage:`/assets/images/games/cozy-sudoku-card.jpg`,featured:!1},{slug:`koroneko`,name:`KoroNeko`,category:`puzzle`,price:`Free`,shortDescription:`Roll your way through a cozy, kawaii world full of charming characters and challenging puzzles to save your siblings from Strawberry the Witch!`,rating:4.9,likesCount:47300,cardImage:`/assets/images/games/koroneko-card.jpg`,featured:!1},{slug:`wytchwood`,name:`Wytchwood`,category:`strategy`,price:`$4.99`,shortDescription:`A crafting adventure game set in a land of gothic fables. As the old witch, explore, collect ingredients, brew spells, and pass judgement upon a capricious cast of characters.`,rating:4.7,likesCount:33100,cardImage:`/assets/images/games/wytchwood-card.jpg`,featured:!1},{slug:`the-wild-at-heart`,name:`The Wild at Heart`,category:`strategy`,price:`Free`,shortDescription:`Wield a herd of quirky creatures to rebuild paths, battle beasts, and solve puzzles in a rich, interconnected nostalgic storybook fantasy world.`,rating:4.8,likesCount:30400,cardImage:`/assets/images/games/the-wild-at-heart-card.jpg`,featured:!1}],meta:{totalItems:24,description:`Full MiniGames library — seed snapshot (24 cozy titles), resets daily 03:00 UTC`,featuredCount:9}},b={data:[{rank:1,playerName:`Alex_Pro99`,gamesPlayed:142,totalScore:94250,streakDays:12,favoriteGameSlug:`heartopia`,favoriteGameName:`Heartopia`},{rank:2,playerName:`CozyGamer_x`,gamesPlayed:118,totalScore:81400,streakDays:8,favoriteGameSlug:`cat-mail-co`,favoriteGameName:`Cat Mail Co.`},{rank:3,playerName:`MatchMaster`,gamesPlayed:98,totalScore:72110,streakDays:5,favoriteGameSlug:`tiny-glade`,favoriteGameName:`Tiny Glade`},{rank:4,playerName:`BubblePop`,gamesPlayed:87,totalScore:65900,streakDays:3,favoriteGameSlug:`whisper-of-the-house`,favoriteGameName:`Whisper of the House`},{rank:5,playerName:`SudokuGod`,gamesPlayed:74,totalScore:59320,streakDays:2,favoriteGameSlug:`cat-chess`,favoriteGameName:`Cat Chess`}],meta:{totalItems:5,description:`Top Players This Week`}},x=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%20v7.3.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20d='M73.4%20297.4C60.9%20309.9%2060.9%20330.2%2073.4%20342.7L233.4%20502.7C245.9%20515.2%20266.2%20515.2%20278.7%20502.7C291.2%20490.2%20291.2%20469.9%20278.7%20457.4L173.3%20352L544%20352C561.7%20352%20576%20337.7%20576%20320C576%20302.3%20561.7%20288%20544%20288L173.3%20288L278.7%20182.6C291.2%20170.1%20291.2%20149.8%20278.7%20137.3C266.2%20124.8%20245.9%20124.8%20233.4%20137.3L73.4%20297.3z'/%3e%3c/svg%3e`,S=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%20v7.3.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20d='M566.6%20342.6C579.1%20330.1%20579.1%20309.8%20566.6%20297.3L406.6%20137.3C394.1%20124.8%20373.8%20124.8%20361.3%20137.3C348.8%20149.8%20348.8%20170.1%20361.3%20182.6L466.7%20288L96%20288C78.3%20288%2064%20302.3%2064%20320C64%20337.7%2078.3%20352%2096%20352L466.7%20352L361.3%20457.4C348.8%20469.9%20348.8%20490.2%20361.3%20502.7C373.8%20515.2%20394.1%20515.2%20406.6%20502.7L566.6%20342.7z'/%3e%3c/svg%3e`,C=Object.assign({"/src/assets/images/games/camper-van-make-it-home-card.jpg":`/rsschool-minigames/assets/camper-van-make-it-home-card-61XprhL7.jpg`,"/src/assets/images/games/cast-n-chill-card.jpg":`/rsschool-minigames/assets/cast-n-chill-card-CRLWRuq0.jpg`,"/src/assets/images/games/cat-chess-card.jpg":`/rsschool-minigames/assets/cat-chess-card-BkETDAfr.jpg`,"/src/assets/images/games/cat-mail-co-card.jpg":`/rsschool-minigames/assets/cat-mail-co-card-B0GMTC_n.jpg`,"/src/assets/images/games/cozy-solitaire-card.jpg":`/rsschool-minigames/assets/cozy-solitaire-card-CSczvhq9.jpg`,"/src/assets/images/games/cozy-sudoku-card.jpg":`/rsschool-minigames/assets/cozy-sudoku-card-CyAOOis5.jpg`,"/src/assets/images/games/grimshire-card.jpg":`/rsschool-minigames/assets/grimshire-card-D1QcLtZT.jpg`,"/src/assets/images/games/heartopia-card.jpg":`/rsschool-minigames/assets/heartopia-card-DRd_6OVG.jpg`,"/src/assets/images/games/islanders-new-shores-card.jpg":`/rsschool-minigames/assets/islanders-new-shores-card-DljrohUL.jpg`,"/src/assets/images/games/koroneko-card.jpg":`/rsschool-minigames/assets/koroneko-card-BXvG49TG.jpg`,"/src/assets/images/games/leaf-it-alone-card.jpg":`/rsschool-minigames/assets/leaf-it-alone-card-CGXXB8uI.jpg`,"/src/assets/images/games/leafy-corner-card.jpg":`/rsschool-minigames/assets/leafy-corner-card-CAdJaXNI.jpg`,"/src/assets/images/games/little-corners-card.jpg":`/rsschool-minigames/assets/little-corners-card-BzTzTJLT.jpg`,"/src/assets/images/games/organized-inside-card.jpg":`/rsschool-minigames/assets/organized-inside-card-CyWIV6Rk.jpg`,"/src/assets/images/games/palia-card.jpg":`/rsschool-minigames/assets/palia-card-8xT8yeZQ.jpg`,"/src/assets/images/games/shelve-the-potions-card.jpg":`/rsschool-minigames/assets/shelve-the-potions-card-DTY_N_zq.jpg`,"/src/assets/images/games/tailside-cozy-cafe-sim-card.jpg":`/rsschool-minigames/assets/tailside-cozy-cafe-sim-card-C7B0rePC.jpg`,"/src/assets/images/games/the-wild-at-heart-card.jpg":`/rsschool-minigames/assets/the-wild-at-heart-card-DfO3UIaM.jpg`,"/src/assets/images/games/tiny-glade-card.jpg":`/rsschool-minigames/assets/tiny-glade-card-CS2XLEzK.jpg`,"/src/assets/images/games/tukoni-forest-keepers-card.jpg":`/rsschool-minigames/assets/tukoni-forest-keepers-card-CkPF-Hda.jpg`,"/src/assets/images/games/vacation-cafe-simulator-card.jpg":`/rsschool-minigames/assets/vacation-cafe-simulator-card-Bzcyczbo.jpg`,"/src/assets/images/games/whisper-of-the-house-card.jpg":`/rsschool-minigames/assets/whisper-of-the-house-card-BE7Dq45b.jpg`,"/src/assets/images/games/winter-burrow-card.jpg":`/rsschool-minigames/assets/winter-burrow-card-KbzzF82b.jpg`,"/src/assets/images/games/wytchwood-card.jpg":`/rsschool-minigames/assets/wytchwood-card-XvNmJ299.jpg`});function w(e){let t=C[`/src/assets/images/games/${e}-card.jpg`];if(!t)throw Error(`Card image not found for game "${e}"`);return t}var T=new Intl.NumberFormat(`en-US`);function E(e){return e<1e3?String(e):`${Math.floor(e/100)/10}K`}function D(e){return e.toFixed(1)}function O(e){return T.format(e)}function k(e){return`${e} ${e===1?`day`:`days`}`}function A(e){return`${e}d`}function j(e){return(e.match(/[A-Z]/g)??[]).slice(0,2).join(``)}function M(e){return E(e)}function N(e,t){let n=i(e.name);return`
    <li class="slider__slide${t?` slider__slide--active`:``}">
      <article class="game-card">
        <img class="game-card__image" src="${w(e.slug)}" alt="${n} cover" />
        <div class="game-card__info">
          <h3 class="game-card__title">${n}</h3>
          <p class="game-card__meta">
            <span class="game-card__rating">
              <span class="icon icon--star" aria-hidden="true"></span>
              <span class="visually-hidden">Rating:</span>
              ${D(e.rating)}
            </span>
            <span class="game-card__likes">
              <span class="icon icon--heart" aria-hidden="true"></span>
              <span class="visually-hidden">Likes:</span>
              ${M(e.likesCount)}
            </span>
          </p>
        </div>
      </article>
    </li>`}function P(e,t){return a(`
    <section class="slider" aria-labelledby="new-games-title">
      <div class="slider__header">
        <h2 class="section-title" id="new-games-title">New Games</h2>
        <div class="slider__controls">
          <button class="slider__button slider__button--prev" type="button" aria-label="Previous game">
            <img class="icon" src="${x}" alt="" aria-hidden="true" />
          </button>
          <button class="slider__button slider__button--next" type="button" aria-label="Next game">
            <img class="icon" src="${S}" alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
      <ul class="slider__track">${e.map(e=>N(e,e.slug===t)).join(``)}</ul>
    </section>
  `)}var F=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20%3e%3cpath%20d='M5%2017V20H19V17'%20stroke='%230a0a0a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M12%2016V4'%20stroke='%230a0a0a'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3cpath%20d='M7%209L12%204L17%209'%20stroke='%230a0a0a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/svg%3e`,I=`/rsschool-minigames/assets/cast-n-chill-card-CRLWRuq0.jpg`;function L(){return a(`
    <section class="developer" aria-labelledby="developer-title">
      <img class="developer__image" src="${I}" alt="" />
      <div class="developer__card">
        <h2 class="developer__title" id="developer-title">Are You a Game Developer?</h2>
        <p class="developer__text">
          Want to see your game on MiniGames? We're always looking for fun, engaging mini games to
          add to our platform. Submit your game and reach thousands of players!
        </p>
        <button class="button button--primary button--large" type="button">
          <img class="icon" src="${F}" alt="Submit" aria-hidden="true" />
          Submit Form
        </button>
        <p class="developer__contact">
          or contact us at
          <a class="developer__email" href="mailto:developers@minigames.com">developers@minigames.com</a>
        </p>
      </div>
    </section>
  `)}function R(){return a(`
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
  `)}function z(e){let t=i(e.playerName);return`
    <tr class="leaderboard__row">
      <td class="leaderboard__cell leaderboard__cell--rank">#${e.rank}</td>
      <th class="leaderboard__cell leaderboard__cell--player" scope="row">
        <span class="avatar" aria-hidden="true">${j(e.playerName)}</span>
        <span class="leaderboard__player-name">${t}</span>
      </th>
      <td class="leaderboard__cell leaderboard__cell--games">${O(e.gamesPlayed)}</td>
      <td class="leaderboard__cell leaderboard__cell--score">
        <span class="hide-mobile">${O(e.totalScore)}</span>
        <span class="show-mobile">${E(e.totalScore)}</span>
      </td>
      <td class="leaderboard__cell leaderboard__cell--streak">
        <span aria-hidden="true">🔥</span>
        <span class="hide-tablet">${k(e.streakDays)}</span>
        <span class="show-tablet">${A(e.streakDays)}</span>
      </td>
      <td class="leaderboard__cell leaderboard__cell--favorite">
        <span class="badge">${i(e.favoriteGameName)}</span>
      </td>
    </tr>`}function B(e){return a(`
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
          <tbody>${e.map(z).join(``)}</tbody>
        </table>
      </div>
    </section>
  `)}var V=[`tailside-cozy-cafe-sim`,`islanders-new-shores`,`vacation-cafe-simulator`,`winter-burrow`,`shelve-the-potions`],H=`vacation-cafe-simulator`;function U(){let e=V.flatMap(e=>y.data.filter(t=>t.slug===e)),t=a(`<div class="home"></div>`);return t.append(R(),P(e,H),B(b.data),L()),t}var W=document.querySelector(`#app`);if(!W)throw Error(`Root element #app was not found`);var G=document.createElement(`main`);G.append(U()),W.append(v(),G,p());