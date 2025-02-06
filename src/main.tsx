import { Analytics } from '@vercel/analytics/react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './App';

import 'src/assets/styles/index.css';

createRoot(document.getElementById('root')!).render(
  <Router>
    <App />
    <Analytics />
  </Router>,
);
