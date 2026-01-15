import { motion } from 'framer-motion';
import { FaAws, FaPython, FaShieldAlt, FaTools, FaNetworkWired, FaDocker, FaCode, FaDatabase, FaTerminal, FaServer } from 'react-icons/fa';
import { SiTerraform, SiKubernetes, SiAnsible, SiGo, SiGooglecloud, SiDatadog, SiPrometheus, SiGrafana, SiHelm, SiJenkins, SiArgo, SiGithubactions, SiPostgresql, SiSonarqube, SiTrivy, SiPagerduty } from 'react-icons/si';
import { VscAzureDevops } from 'react-icons/vsc';

const TechCard = ({ icon, name, color }: { icon: React.ReactNode, name: string, color: string }) => (
    <div style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '12px',
        padding: '1.2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.8rem',
        transition: 'all 0.3s ease'
    }}
        className="tech-card"
    >
        <div style={{ fontSize: '2rem', color: color }}>
            {icon}
        </div>
        <div style={{ fontSize: '0.9rem', fontWeight: 500, color: '#d4d4d8' }}>
            {name}
        </div>
        <style>{`
            .tech-card:hover {
                background: ${color}15 !important;
                border-color: ${color}40 !important;
                transform: translateY(-5px);
            }
        `}</style>
    </div>
);

const Resources = () => {
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '3rem' }}>
            <h1 className="section-title">System Resources [Skills]</h1>

            <div style={{ display: 'grid', gap: '3rem' }}>

                {/* Cloud & Databases */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <h2 style={{ fontSize: '1.2rem', color: '#818cf8', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaDatabase /> Cloud & Databases
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem' }}>
                        <TechCard name="AWS" icon={<FaAws />} color="#ff9900" />
                        <TechCard name="Azure" icon={<VscAzureDevops />} color="#007fff" />
                        <TechCard name="GCP" icon={<SiGooglecloud />} color="#4285f4" />
                        <TechCard name="PostgreSQL" icon={<SiPostgresql />} color="#336791" />
                        <TechCard name="DynamoDB" icon={<FaServer />} color="#4053d6" />
                    </div>
                </motion.div>

                {/* CI/CD Pipelines */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <h2 style={{ fontSize: '1.2rem', color: '#f05032', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaNetworkWired /> CI/CD Pipelines
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem' }}>
                        <TechCard name="Jenkins" icon={<SiJenkins />} color="#d24939" />
                        <TechCard name="GitHub Actions" icon={<SiGithubactions />} color="#2088ff" />
                        <TechCard name="Azure DevOps" icon={<VscAzureDevops />} color="#007fff" />
                        <TechCard name="Argo CD" icon={<SiArgo />} color="#ef7b4d" />
                    </div>
                </motion.div>

                {/* IaC & Containers */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <h2 style={{ fontSize: '1.2rem', color: '#34d399', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaTools /> IaC & Automation
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem' }}>
                        <TechCard name="Terraform" icon={<SiTerraform />} color="#7c4dff" />
                        <TechCard name="Kubernetes" icon={<SiKubernetes />} color="#326ce5" />
                        <TechCard name="Ansible" icon={<SiAnsible />} color="#ee0000" />
                        <TechCard name="Docker" icon={<FaDocker />} color="#2496ed" />
                        <TechCard name="Helm" icon={<SiHelm />} color="#0f1689" />
                    </div>
                </motion.div>

                {/* Security & Governance */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <h2 style={{ fontSize: '1.2rem', color: '#f472b6', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaShieldAlt /> Security & DevSecOps
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem' }}>
                        <TechCard name="SonarQube" icon={<SiSonarqube />} color="#4e9bcd" />
                        <TechCard name="Trivy" icon={<SiTrivy />} color="#00afba" />
                        <TechCard name="AWS WAF" icon={<FaShieldAlt />} color="#ff9900" />
                        <TechCard name="Vault" icon={<FaShieldAlt />} color="#ffd700" />
                    </div>
                </motion.div>

                {/* Observability & Management */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                    <h2 style={{ fontSize: '1.2rem', color: '#c084fc', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <SiDatadog /> Observability & SRE
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem' }}>
                        <TechCard name="Prometheus" icon={<SiPrometheus />} color="#e6522c" />
                        <TechCard name="Grafana" icon={<SiGrafana />} color="#f46800" />
                        <TechCard name="PagerDuty" icon={<SiPagerduty />} color="#00ce3e" />
                        <TechCard name="ServiceNow" icon={<FaTools />} color="#81b5a1" />
                    </div>
                </motion.div>

                {/* Languages */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                    <h2 style={{ fontSize: '1.2rem', color: '#fbbf24', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaCode /> Languages & Scripting
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem' }}>
                        <TechCard name="Python" icon={<FaPython />} color="#3776ab" />
                        <TechCard name="Go" icon={<SiGo />} color="#00add8" />
                        <TechCard name="PowerShell" icon={<FaTerminal />} color="#5391fe" />
                        <TechCard name="Bash" icon={<FaTerminal />} color="#4caf50" />
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Resources;
