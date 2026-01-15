import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            style={{
                position: 'fixed',
                top: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1000,
                width: '90%',
                maxWidth: '600px',
                padding: '0.8rem 2rem',
                borderRadius: '50px',
                background: scrolled ? 'rgba(3, 7, 18, 0.8)' : 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)',
                border: '1px solid var(--border-dim)',
                boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.5)' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    color: 'white',
                    cursor: 'pointer'
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                VI<span style={{ color: 'var(--primary)' }}>.</span> Inturi
            </div>

            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
                {['Home', 'Experience', 'Projects', 'Skills'].map((item) => (
                    <li key={item}>
                        <button
                            onClick={() => scrollToSection(item.toLowerCase())}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--text-muted)',
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                transition: 'color 0.3s',
                                fontFamily: 'var(--font-body)'
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>

            <button
                className="btn btn-primary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                onClick={() => scrollToSection('contact')}
            >
                Contact
            </button>
        </motion.nav>
    );
};

export default Navbar;
