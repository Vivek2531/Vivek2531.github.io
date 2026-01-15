import { motion } from 'framer-motion';
import { FaClock, FaUserCheck, FaKey, FaTerminal } from 'react-icons/fa';
import HolographicGlobe from './HolographicGlobe';

const Profile = () => {
    // Simplified Dashboard without complex terminal state


    return (
        <div style={{ maxWidth: '1400px', margin: '0 auto', paddingBottom: '2rem' }}>
            {/* Header */}
            <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 className="section-title" style={{ marginBottom: '0.2rem', fontSize: '2.5rem' }}>Vivek Inturi</h1>
                    <div style={{ color: '#34d399', fontSize: '1.2rem', fontWeight: 500, fontFamily: 'monospace' }}>
                        CLOUD / DEVOPS / SRE ENGINEER
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <HolographicGlobe />
                    <span className="tag" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#6ee7b7', border: '1px solid #059669' }}>● System Online</span>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
                {/* Metric Cards */}
                <motion.div className="bento-card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <h3 style={{ fontSize: '0.9rem', color: '#a1a1aa' }}>Total Experience</h3>
                        <FaClock />
                    </div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'white' }}>5+ Years</div>
                </motion.div>

                <motion.div className="bento-card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <h3 style={{ fontSize: '0.9rem', color: '#a1a1aa' }}>Status</h3>
                        <FaUserCheck />
                    </div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#34d399' }}>Available</div>
                </motion.div>
            </div>

            {/* Simplified Professional Bio */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{ marginTop: '3rem' }}
            >
                <div
                    className="bento-card"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        paddingBottom: '2rem'
                    }}
                >
                    {/* Decorative Top Line */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #818cf8, transparent)' }} />

                    <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <span style={{ color: '#818cf8' }}>⚡</span> Executive Summary
                    </h3>

                    <div style={{ color: '#d4d4d8', lineHeight: 2, fontSize: '1.1rem', textAlign: 'justify', marginBottom: '2rem' }}>
                        I am a Cloud & DevOps Engineer with 5+ years of experience designing, automating, and optimizing multi-cloud infrastructure across AWS, Azure, and GCP. Skilled in Infrastructure as Code (Terraform, CloudFormation), container orchestration (EKS, AKS, GKE), and CI/CD pipeline automation (GitHub Actions, Jenkins, Azure DevOps). Proven track record of improving deployment velocity by 60%, reducing cloud costs by 30%, and maintaining {'>'}99.9% uptime through monitoring, observability, and incident response automation. Passionate about scalable system design, DevSecOps practices, and reliability engineering.
                    </div>
                </div>
            </motion.div>

            {/* Metrics - Clean Floating Cards */}
            <div style={{
                marginTop: '1.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bento-card"
                    style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}
                >
                    <div style={{ padding: '12px', background: 'rgba(52, 211, 153, 0.1)', borderRadius: '12px' }}>
                        <FaClock size={24} color="#34d399" />
                    </div>
                    <div>
                        <div style={{ color: '#a1a1aa', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Deployment Velocity</div>
                        <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>+60%</div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bento-card"
                    style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}
                >
                    <div style={{ padding: '12px', background: 'rgba(251, 191, 36, 0.1)', borderRadius: '12px' }}>
                        <FaKey size={24} color="#fbbf24" />
                    </div>
                    <div>
                        <div style={{ color: '#a1a1aa', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Cost Reduction</div>
                        <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>30%</div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="bento-card"
                    style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}
                >
                    <div style={{ padding: '12px', background: 'rgba(129, 140, 248, 0.1)', borderRadius: '12px' }}>
                        <FaTerminal size={24} color="#818cf8" />
                    </div>
                    <div>
                        <div style={{ color: '#a1a1aa', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.3rem' }}>System Uptime</div>
                        <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>{'>'}99.9%</div>
                    </div>
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    div[style*="grid-template-columns: 1.2fr 0.8fr"] {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Profile;
