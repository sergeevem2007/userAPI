import React, { FC, useEffect } from 'react';
import { Switch, Route, BrowserRouter, useLocation } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Page } from '../Page/Page';

export const App: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/">
          <Page></Page>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
