import './assets/ellipsis-tooltip.css';
import './assets/scrollbar.css';
import { AuthToken } from './modules/auth/authToken';
import { BrowserRouter as Router } from 'react-router-dom';
import { i18n, init as i18nInit } from 'src/i18n';
import AuthService from './modules/auth/authService';
import GlobalDndContext from 'src/dnd-context';
import ReactDOM from 'react-dom';
import TenantService from './modules/tenant/tenantService';
import React from 'react';

(async function () {
  const isSocialOnboardRequested =
    AuthService.isSocialOnboardRequested();
  AuthToken.applyFromLocationUrlIfExists();
  await TenantService.fetchAndApply();
  if (isSocialOnboardRequested) {
    await AuthService.socialOnboard();
  }
  await i18nInit();

  const App = require('./App').default;
  document.title = i18n('app.title');
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
    document.getElementById('root'),
  );
})();
