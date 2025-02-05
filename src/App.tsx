import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'src/components/layout/Layout';
import { routes } from 'src/routes';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
};

export { App };
