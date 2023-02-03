import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ScrollTop from 'components/ScrollTop';
import { Home, Login, Column, NotFound, MyRecord } from 'pages';
import { PATHS } from 'configs';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollTop />
      <Header />
      <div className="flex-1 flex flex-col">
        <Routes>
          <Route
            path={PATHS.HOME}
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path={PATHS.MY_RECORD}
            element={
              <PrivateRoute>
                <MyRecord />
              </PrivateRoute>
            }
          />
          <Route path={PATHS.LOGIN} element={<Login />} />
          <Route path={PATHS.COLUMN} element={<Column />} />
          <Route element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
