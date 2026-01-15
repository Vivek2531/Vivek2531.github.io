import { FaGlobeAmericas, FaServer, FaClock, FaBell } from 'react-icons/fa';

const TopStatusBar = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 'var(--sidebar-width)',
            right: 0,
            height: '50px',
            background: 'rgba(18, 18, 21, 0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2rem',
            zIndex: 90,
            fontSize: '0.85rem',
            color: '#a1a1aa'
        }}>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FaGlobeAmericas style={{ color: '#818cf8' }} />
                    <span>Region: <strong>us-east-1</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FaServer style={{ color: '#34d399' }} />
                    <span>Status: <strong style={{ color: '#34d399' }}>Healthy</strong></span>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FaClock />
                    <span>Uptime: <strong>99.99%</strong></span>
                </div>
                <FaBell style={{ cursor: 'pointer', color: '#fbbf24' }} />
                <div style={{
                    width: '30px', height: '30px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6366f1, #818cf8)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontWeight: 700, fontSize: '0.8rem'
                }}>
                    VI
                </div>
            </div>

            <style>{`
                 @media (max-width: 1024px) {
                     div[style*="left: var(--sidebar-width)"] {
                         left: 0 !important;
                     }
                 }
                 @media (max-width: 768px) {
                     div > div:first-child { display: none !important; }
                 }
            `}</style>
        </div>
    );
};

export default TopStatusBar;
