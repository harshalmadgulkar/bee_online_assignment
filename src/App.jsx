import React from 'react';
import Navbar from './components/Navbar';
import WelcomeBanner from './components/WelcomeBanner';
import ApprodablePackages from './components/ApprodablePackages';

function App() {
  return (
    <div className='flex flex-col mx-auto w-full'>
      <Navbar />
      <WelcomeBanner />
      <ApprodablePackages />
    </div>
  );
}

export default App;
