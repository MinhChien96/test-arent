import React from 'react';
import { setToken } from 'utils/storage';

type Props = {};

// eslint-disable-next-line no-empty-pattern
function Login({}: Props) {
  return (
    <div className="flex justify-center mt-20">
      <button
        type="button"
        onClick={() => setToken('TEST')}
        className="bg-[linear-gradient(32.95deg,#FFCC21,#FF963C)] px-4 py-2"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
