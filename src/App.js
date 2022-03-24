import React, { useEffect, useState, useCallback, useRef } from 'react'
import { InfinitScroll } from './components/infiniteScroll/view/InfinitScroll';

const App = () => {

  return (
    <div className="App">
      <InfinitScroll />
    </div>
  );
}

export default App;