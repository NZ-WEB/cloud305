import './App.css';

import React, { useEffect } from 'react';

import config from './config/config';
import { withLayout } from './layout/main/MainLayout.hoc';

function App() {
  useEffect(() => {
    console.log(config);
  });

  return <div className="App">Test pipeline 12.01.2023</div>;
}

export default withLayout(App);
