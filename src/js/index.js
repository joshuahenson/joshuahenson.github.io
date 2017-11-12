// Load all js
import './main'
// Load styles through webpack and compile in production
import '../sass/index.scss';
// Use hot module reloading in dev
if (module.hot) {
  module.hot.accept();
}