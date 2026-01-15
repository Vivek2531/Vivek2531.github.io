import { motion } from 'framer-motion';
import { FaUniversity, FaCertificate, FaHourglassHalf, FaAws } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';

const Certificates = () => {
    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '3rem' }}>
            <h1 className="section-title">Certifications & Education [Creds]</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>

                {/* Certifications Card */}
                <motion.div
                    className="bento-card"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'white', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <FaCertificate color="#fbbf24" /> Certifications
                    </h2>

                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {/* AWS SA Associate - Pending */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(255,153,0,0.05)', borderRadius: '8px', border: '1px solid rgba(255,153,0,0.1)' }}>
                            <div style={{ padding: '8px', background: '#232f3e', borderRadius: '4px' }}>
                                <FaAws size={24} color="#ff9900" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ color: 'white', fontWeight: 600 }}>AWS Certified Solutions Architect – Associate</div>
                                <div style={{ color: '#fbbf24', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                                    <FaHourglassHalf /> Pending / In Progress
                                </div>
                            </div>
                        </div>

                        {/* CKA - Pending */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(50,108,229,0.05)', borderRadius: '8px', border: '1px solid rgba(50,108,229,0.1)' }}>
                            <div style={{ padding: '8px', background: '#326ce5', borderRadius: '4px' }}>
                                <SiKubernetes size={24} color="white" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ color: 'white', fontWeight: 600 }}>Certified Kubernetes Administrator (CKA)</div>
                                <div style={{ color: '#fbbf24', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                                    <FaHourglassHalf /> Pending / In Progress
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Education Card */}
                <motion.div
                    className="bento-card"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'white', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <FaUniversity color="#818cf8" /> Education
                    </h2>

                    <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                            <div>
                                <div style={{ color: 'white', fontWeight: 600, fontSize: '1.1rem' }}>Master of Science in Computer Science</div>
                                <div style={{ color: '#a1a1aa' }}>University of Louisville</div>
                            </div>
                            <div style={{ background: 'rgba(129, 140, 248, 0.1)', color: '#818cf8', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 500 }}>
                                3.6 GPA
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Certificates;
