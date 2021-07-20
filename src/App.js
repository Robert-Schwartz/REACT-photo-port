// Import React in every file
import React from 'react';

// Import components
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
