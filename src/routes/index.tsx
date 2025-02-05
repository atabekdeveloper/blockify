import { Block, Dashboard, NotFound } from 'src/components/pages';

export const routes = [
  { path: '/', element: <Dashboard /> },
  { path: '/block', element: <Block /> },
  { path: '*', element: <NotFound /> },
];
