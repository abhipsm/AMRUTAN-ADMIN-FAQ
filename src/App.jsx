import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import FAQPage from './components/FAQPage';
import './App.css';

function App() {
  const [activeView, setActiveView] = React.useState('app');

  return (
    <div className="app-container">
      <Header />
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="main-content">
        <FAQPage activeView={activeView} />
      </main>
    </div>
  );
}

export default App;
