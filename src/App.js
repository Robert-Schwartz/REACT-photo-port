// Import React in every file
import React from 'react';

// Import components
import Nav from './components/Nav';
import About from './components/About';
import Gallery from "./components/Gallery";

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Gallery/>
        <About />
      </main>
    </div>
  );
}

export default App;
