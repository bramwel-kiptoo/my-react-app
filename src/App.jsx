import React, { useState } from 'react';
import Student from './components/Students.jsx';
import AppReducer from './components/useReducer.jsx';
import AppMemo from './components/useMemo.jsx';

function App(){ 

 return (
    <div>
      <AppMemo />
    </div>
  );

}

export default AppMemo;