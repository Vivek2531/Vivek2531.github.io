import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TopStatusBar from './components/TopStatusBar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Hero';
import Profile from './components/About';
import Resources from './components/Skills';
import Deployments from './components/Experience';
import Repositories from './components/Projects';
import Certificates from './components/Certifications';
import Endpoints from './components/Contact';
import CommandPalette from './components/CommandPalette';
import Background3D from './components/Background3D';

function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [isBooting, setIsBooting] = useState(true);
  const [bootLog, setBootLog] = useState<string[]>([]);
  const [isCmdOpen, setIsCmdOpen] = useState(false);

  // Boot Sequence Logic
  useEffect(() => {
    const logs = [
      "INITIALIZING KERNEL...",
      "LOADING MODULES: [ REACT, VITE, TYPESCRIPT ]",
      "MOUNTING FILE SYSTEM...",
      "STARTING CLOUD_CONSOLE_OS_V2.0",
      "SYSTEM READY."
    ];

    let delay = 0;
    logs.forEach((log, i) => {
      delay += (Math.random() * 300) + 200;
      setTimeout(() => {
        setBootLog(prev => [...prev, log]);
        if (i === logs.length - 1) {
          setTimeout(() => setIsBooting(false), 800);
        }
      }, delay);
    });
  }, []);

  // Keyboard Shortcuts (Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCmdOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderView = () => {
    switch (activeView) {
      case 'dashboard': return <Dashboard />;
      case 'about': return <Profile />;
      case 'skills': return <Resources />;
      case 'experience': return <Deployments />;
      case 'projects': return <Repositories />;
      case 'education': return <Certificates />;
      case 'contact': return <Endpoints />;
      default: return <Dashboard />;
    }
  };

  if (isBooting) {
    return (
      <div style={{ height: '100vh', background: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {bootLog.map((log, i) => (
            <motion.div
              key={i}
              className="boot-text"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {"> " + log}
            </motion.div>
          ))}
          <motion.div
            className="boot-text"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
          >
            _
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Background3D />
      <div className="scanlines" />
      <div className="vignette" />

      <CommandPalette
        isOpen={isCmdOpen}
        onClose={() => setIsCmdOpen(false)}
        onNavigate={(view) => setActiveView(view)}
      />

      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      <TopStatusBar />

      <div className="main-content" style={{ paddingTop: '80px', height: '100vh', overflowY: 'auto' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{ width: '100%' }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
