import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import FAQPage from './components/FAQPage';
import './App.css';

function App() {
  const [activeView, setActiveView] = React.useState('app');
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="app-container">
      <Header onMenuClick={toggleSidebar} />
      <Sidebar 
        activeView={activeView} 
        setActiveView={setActiveView}
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />
      <main className="main-content">
        <FAQPage activeView={activeView} />
      </main>
    </div>
  );
}

export default App;
