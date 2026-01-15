import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaUser, FaCode, FaBriefcase, FaLayerGroup, FaPaperPlane, FaFileDownload, FaMapMarkerAlt, FaCertificate } from 'react-icons/fa';

interface SidebarProps {
    activeView: string;
    onViewChange: (view: string) => void;
}

const Sidebar = ({ activeView, onViewChange }: SidebarProps) => {

    const navItems = [
        { id: 'dashboard', label: 'Profile', icon: <FaUser /> },
        { id: 'skills', label: 'Resources', icon: <FaCode /> },
        { id: 'experience', label: 'Deployments', icon: <FaBriefcase /> },
        { id: 'projects', label: 'Repositories', icon: <FaLayerGroup /> },
        { id: 'education', label: 'Credentials', icon: <FaCertificate /> },
        { id: 'contact', label: 'Endpoints', icon: <FaPaperPlane /> },
    ];

    return (
        <>
            {/* Desktop Sidebar */}
            <motion.aside
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                style={{
                    width: 'var(--sidebar-width)',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    background: 'rgba(18, 18, 21, 0.6)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '2.5rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    zIndex: 100,
                }}
                className="desktop-sidebar"
            >
                {/* Logo / Header */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                        <div style={{
                            width: '45px',
                            height: '45px',
                            borderRadius: '12px',
                            backgroundImage: 'url(/profile.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            border: '2px solid rgba(255,255,255,0.1)'
                        }} />
                        <div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'white', letterSpacing: '0.5px' }}>Vivek Inturi</h3>
                            <p style={{ fontSize: '0.85rem', color: '#a1a1aa', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                                <FaMapMarkerAlt size={12} color="#6366f1" /> United States
                            </p>
                        </div>
                    </div>

                    {/* Navigation - Vertical Pipeline */}
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', paddingLeft: '1rem' }}>

                        {/* Pipeline Line Background */}
                        <div style={{
                            position: 'absolute',
                            left: '29px',
                            top: '10px',
                            bottom: '10px',
                            width: '2px',
                            background: 'rgba(255,255,255,0.05)',
                            zIndex: 0
                        }}>
                            {/* Animated Active Line */}
                            <motion.div
                                style={{
                                    width: '100%',
                                    background: 'linear-gradient(180deg, #6366f1, #ec4899)',
                                    boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)',
                                    originY: 0
                                }}
                                animate={{
                                    height: `${(navItems.findIndex(n => n.id === activeView) / (navItems.length - 1)) * 100}%`
                                }}
                                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                            />
                        </div>

                        {navItems.map((item) => {
                            const isActive = activeView === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => onViewChange(item.id)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1.5rem',
                                        padding: 0,
                                        border: 'none',
                                        background: 'transparent',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        zIndex: 1,
                                        textAlign: 'left'
                                    }}
                                >
                                    {/* Pipeline Node */}
                                    <motion.div
                                        animate={{
                                            scale: isActive ? 1.2 : 1,
                                            borderColor: isActive ? '#818cf8' : 'rgba(255,255,255,0.2)',
                                            background: isActive ? '#1e1b4b' : '#09090b',
                                            boxShadow: isActive ? '0 0 15px rgba(129, 140, 248, 0.4)' : 'none'
                                        }}
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            border: '2px solid',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: isActive ? '#818cf8' : '#71717a',
                                            fontSize: '1.1rem',
                                            transition: 'color 0.3s'
                                        }}
                                    >
                                        {item.icon}
                                    </motion.div>

                                    {/* Label */}
                                    <div style={{ opacity: isActive ? 1 : 0.6, transition: 'opacity 0.3s' }}>
                                        <div style={{
                                            color: isActive ? 'white' : '#a1a1aa',
                                            fontWeight: isActive ? 600 : 500,
                                            fontSize: '1rem'
                                        }}>
                                            {item.label}
                                        </div>
                                        {isActive && (
                                            <motion.div
                                                layoutId="active-indicator"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                style={{ fontSize: '0.75rem', color: '#818cf8', marginTop: '2px' }}
                                            >
                                                Running...
                                            </motion.div>
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* Footer / Socials */}
                <div>
                    <a href="/Vivek_Inturi_Cloud-DevOps-SRE_Engineer.pdf" target="_blank" style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                        padding: '0.8rem', borderRadius: '12px', background: '#27272a',
                        color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600,
                        marginBottom: '1.5rem', border: '1px solid #3f3f46'
                    }}>
                        <FaFileDownload /> Resume
                    </a>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href="https://github.com/Vivek2531" target="_blank" style={{ color: '#aaa', fontSize: '1.2rem' }}><FaGithub /></a>
                        <a href="https://linkedin.com/in/vivekinturi" target="_blank" style={{ color: '#aaa', fontSize: '1.2rem' }}><FaLinkedin /></a>
                    </div>
                </div>

                <style>{`
                    @media (max-width: 1024px) {
                        .desktop-sidebar { display: none !important; }
                    }
                `}</style>
            </motion.aside>

            {/* Mobile Bottom Nav */}
            <div className="mobile-nav" style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                background: 'rgba(18, 18, 21, 0.95)',
                backdropFilter: 'blur(10px)',
                borderTop: '1px solid var(--border-subtle)',
                padding: '1rem',
                display: 'none', // Hidden on desktop via media query logic below
                justifyContent: 'space-around',
                zIndex: 1000
            }}>
                {navItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => onViewChange(item.id)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: activeView === item.id ? 'white' : '#71717a',
                            fontSize: '1.5rem',
                        }}
                    >
                        {item.icon}
                    </button>
                ))}
                <style>{`
                    @media (max-width: 1024px) {
                        .mobile-nav { display: flex !important; }
                    }
                `}</style>
            </div>
        </>
    );
};

export default Sidebar;
