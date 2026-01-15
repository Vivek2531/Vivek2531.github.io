import { motion } from 'framer-motion';
import { FaUserShield, FaFingerprint, FaKey } from 'react-icons/fa';

const Profile = () => {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h1 className="section-title" style={{ marginBottom: '0.5rem', fontSize: '2rem' }}>IAM Identity</h1>
                <p style={{ color: '#a1a1aa' }}>User profile and access policies.</p>
            </div>

            {/* Profile Header Card */}
            <motion.div
                className="bento-card"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}
            >
                <div style={{
                    width: '100px', height: '100px', borderRadius: '50%',
                    backgroundImage: 'url(/profile.jpg)', backgroundSize: 'cover', backgroundPosition: 'center',
                    border: '2px solid #818cf8'
                }} />
                <div>
                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '0.5rem' }}>Vivek Inturi</h2>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span className="tag" style={{ background: '#312e81', color: '#c7d2fe', border: '1px solid #4338ca' }}>AdminAccess</span>
                        <span className="tag">CloudEngineer</span>
                    </div>
                </div>
            </motion.div>

            {/* Policy JSON */}
            <motion.div
                className="bento-card"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                    <FaUserShield color="#a1a1aa" />
                    <h3 style={{ fontSize: '1.1rem', color: 'white' }}>Attached Policy: Biography</h3>
                </div>

                <div style={{ fontFamily: 'monospace', color: '#a1a1aa', lineHeight: 1.8, fontSize: '0.95rem' }}>
                    <p style={{ marginBottom: '1rem' }}>
                        <span style={{ color: '#f472b6' }}>"Version"</span>: "2025-01-09",<br />
                        <span style={{ color: '#f472b6' }}>"Statement"</span>: [<br />
                        &nbsp;&nbsp;{"{"}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#f472b6' }}>"Effect"</span>: "Allow",<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#f472b6' }}>"Action"</span>: ["Build", "Scale", "Secure"],<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#f472b6' }}>"Resource"</span>: "Cloud/DevOps/SRE"<br />
                        &nbsp;&nbsp;{"}"}<br />
                        ]
                    </p>
                    <p>
                        <span style={{ color: '#34d399' }}>// Bio Description</span><br />
                        I am a detail-oriented Cloud & DevOps Engineer with a Master's in Computer Science.
                        My focus is on designing resilient, scalable cloud architectures. I have extensively worked with AWS, Azure,
                        and Kubernetes to automate infrastructure and reduce operational toil. When I'm not writing Terraform,
                        I'm likely optimizing CI/CD pipelines or exploring new cloud native technologies.
                    </p>
                </div>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
                <motion.div
                    className="bento-card"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                        <FaFingerprint color="#818cf8" size={20} />
                        <h3 style={{ color: 'white' }}>MFA Status</h3>
                    </div>
                    <p style={{ color: '#34d399', fontWeight: 600 }}>Enabled (Hardware Token)</p>
                </motion.div>

                <motion.div
                    className="bento-card"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                        <FaKey color="#fbbf24" size={20} />
                        <h3 style={{ color: 'white' }}>Access Keys</h3>
                    </div>
                    <p style={{ color: '#a1a1aa' }}>Last rotated: 2 days ago</p>
                </motion.div>
            </div>

        </div>
    );
};

export default Profile;
