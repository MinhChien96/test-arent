import React from 'react';
import Navigate from './components/Navigate';
import Record from './components/Record';
import Exercise from './components/Exercise';
import Diary from './components/Diary';

function MyRecord() {
  return (
    <div className="flex justify-center">
      <div className="container py-16">
        <Navigate />
        <Record />
        <Exercise />
        <Diary />
      </div>
    </div>
  );
}

export default MyRecord;
