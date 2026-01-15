import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaHome, FaUser, FaCode, FaBriefcase, FaLayerGroup, FaPaperPlane, FaSearch } from 'react-icons/fa';

interface CommandPaletteProps {
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (view: string) => void;
}

const CommandPalette = ({ isOpen, onClose, onNavigate }: CommandPaletteProps) => {
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);

    const commands = [
        { id: 'dashboard', label: 'Go to Dashboard', icon: <FaHome />, shortcut: 'H' },
        { id: 'about', label: 'View Profile', icon: <FaUser />, shortcut: 'P' },
        { id: 'skills', label: 'Check Resources', icon: <FaCode />, shortcut: 'R' },
        { id: 'experience', label: 'Inspect Deployments', icon: <FaBriefcase />, shortcut: 'D' },
        { id: 'projects', label: 'Browse Repositories', icon: <FaLayerGroup />, shortcut: 'Repo' },
        { id: 'contact', label: 'Query Endpoints', icon: <FaPaperPlane />, shortcut: 'E' },
    ];

    // Filter commands based on query
    const filteredCommands = commands.filter(cmd =>
        cmd.label.toLowerCase().includes(query.toLowerCase()) ||
        cmd.id.toLowerCase().includes(query.toLowerCase())
    );

    // Reset selection when query changes
    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (filteredCommands[selectedIndex]) {
                    onNavigate(filteredCommands[selectedIndex].id);
                    onClose();
                }
            } else if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, filteredCommands, selectedIndex, onNavigate, onClose]);

    // Handle outside click
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    onClick={handleBackdropClick}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(4px)',
                        zIndex: 9999,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        paddingTop: '15vh'
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.95, y: -20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.95, y: -20 }}
                        transition={{ duration: 0.1 }}
                        style={{
                            width: '100%',
                            maxWidth: '600px',
                            background: '#18181b', // var(--bg-card)
                            border: '1px solid #3f3f46', // var(--border-subtle)
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                        }}
                    >
                        {/* Search Input */}
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '1rem',
                            padding: '1rem 1.5rem', borderBottom: '1px solid #27272a'
                        }}>
                            <FaTerminal color="#a1a1aa" />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Type a command or search..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    width: '100%',
                                    outline: 'none',
                                    fontFamily: 'monospace'
                                }}
                            />
                            <div style={{
                                padding: '0.2rem 0.5rem', background: '#27272a',
                                borderRadius: '4px', fontSize: '0.7rem', color: '#a1a1aa'
                            }}>
                                ESC
                            </div>
                        </div>

                        {/* Results List */}
                        <div style={{ maxHeight: '300px', overflowY: 'auto', padding: '0.5rem' }}>
                            {filteredCommands.length > 0 ? (
                                filteredCommands.map((cmd, index) => (
                                    <div
                                        key={cmd.id}
                                        onClick={() => { onNavigate(cmd.id); onClose(); }}
                                        onMouseEnter={() => setSelectedIndex(index)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            padding: '0.8rem 1rem',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            background: index === selectedIndex ? '#6366f1' : 'transparent', // var(--accent) for active
                                            color: index === selectedIndex ? 'white' : '#a1a1aa',
                                            transition: 'background 0.1s'
                                        }}
                                    >
                                        <span style={{ fontSize: '1.1rem' }}>{cmd.icon}</span>
                                        <div style={{ flex: 1, fontWeight: 500 }}>{cmd.label}</div>
                                        {cmd.shortcut && (
                                            <span style={{
                                                fontSize: '0.8rem', opacity: 0.6,
                                                background: index === selectedIndex ? 'rgba(255,255,255,0.2)' : '#27272a',
                                                padding: '0.2rem 0.5rem', borderRadius: '4px'
                                            }}>
                                                {cmd.shortcut}
                                            </span>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <div style={{ padding: '2rem', textAlign: 'center', color: '#52525b' }}>
                                    <FaSearch style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }} />
                                    <p>No results found.</p>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div style={{
                            padding: '0.5rem 1rem', background: '#09090b', borderTop: '1px solid #27272a',
                            fontSize: '0.75rem', color: '#52525b', display: 'flex', justifyContent: 'flex-end', gap: '1rem'
                        }}>
                            <span><strong>↑↓</strong> to navigate</span>
                            <span><strong>↵</strong> to select</span>
                        </div>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
