import { render } from 'react-dom';

import App from './components/App';

const targetNode = document.getElementById('root');

document.addEventListener('DOMContentLoaded',() => {
  render(targetNode, App);
});
