import './styles/main.scss';
import { createFooter } from './components/footer/footer';
import { createHeader } from './components/header/header';
import { createHomePage } from './pages/home/home-page';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('Root element #app was not found');
}

const main = document.createElement('main');
main.append(createHomePage());

app.append(createHeader(), main, createFooter());
