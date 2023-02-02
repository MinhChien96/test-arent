import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from 'utils/PrivateRoute';
import { Home, Login } from 'pages';

function App() {
  return (
    <div className="">
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
  );
}

export default App;
