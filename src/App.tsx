import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Home, Login } from 'pages';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route
            path=""
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
