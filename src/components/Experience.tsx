import { motion } from 'framer-motion';
import { FaBuilding, FaCalendar, FaCodeBranch } from 'react-icons/fa';

const deployments = [
    {
        role: "Cloud and DevOps Engineer (Self-Employed)",
        company: "ATS Buddy - AI Career Platform",
        duration: "Nov 2025 – Present",
        status: "Active",
        type: "Startup / AI",
        tech: ["React 18", "Terraform", "AWS Serverless", "Gemini AI", "GraphQL"],
        details: [
            "Built ATS Buddy, a full-stack AI career platform using React 18 + TypeScript, featuring a custom AI Agent Orchestrator integrated with Google Gemini for real-time resume parsing.",
            "Architected a production-grade AWS serverless backend using Terraform (modular IaC), provisioning AppSync (GraphQL), DynamoDB, and Lambda functions for scalability.",
            "Implemented zero-touch CI/CD pipelines using GitHub Actions to automate build, test, and deployment phases across dev and prod environments.",
            "Hardened application security by deploying AWS WAF protections and enabled Cost Anomaly Detection to proactively identify specific spend issues.",
            "Designed and implemented a comprehensive GraphQL schema for efficient data fetching, reducing over-fetching by 40%.",
            "Conducted thorough performance testing using K6, optimizing Lambda cold starts and DynamoDB query patterns."
        ]
    },
    {
        role: "Site Reliability Engineer (Part-time)",
        company: "University of Louisville",
        duration: "Aug 2024 – May 2025",
        status: "Completed",
        type: "Education / Cloud",
        tech: ["AWS", "EKS", "Terraform", "GitHub Actions", "Python"],
        details: [
            "Automated multi-regional AWS infrastructure provisioning using Terraform and GitHub Actions, ensuring consistent environments (Drift Detection).",
            "Managed high-availability EKS clusters and implemented distributed monitoring with Prometheus, Grafana, and Datadog for real-time observability.",
            "Designed serverless microservices using AWS Lambda and API Gateway, improving scalability and reducing infrastructure costs by 20%.",
            "Reduced Mean Time to Resolution (MTTR) by 30% through automated incident response workflows and PagerDuty integration.",
            "Collaborated with cross-functional teams to define SLOs/SLIs and implement Error Budgets for critical services.",
            "Authored detailed runbooks and post-mortem analyses to foster a culture of continuous improvement and reliability."
        ]
    },
    {
        role: "Cloud Engineer",
        company: "Tata Consultancy Services",
        duration: "Dec 2021 – July 2023",
        status: "Completed",
        type: "Enterprise / Fintech",
        tech: ["Azure", "Docker", "Terraform", "SonarQube", "Bash"],
        details: [
            "Standardized deployments across DEV, UAT, and PROD environments using Terraform and CloudFormation templates.",
            "Managed containerization strategies with Docker and Azure Container Registry (ACR), migrating legacy monoliths to microservices.",
            "Built scalable CI/CD pipelines in Azure DevOps, reducing manual deployment effort by 40% and increasing release frequency.",
            "Enhanced security posture by integrating SonarQube and Trivy scans into build pipelines to catch vulnerabilities early (Shift-Left).",
            "Implemented auto-scaling policies for AKS clusters and VM scale sets to handle peak traffic loads efficiently.",
            "Facilitated knowledge transfer sessions and mentored junior engineers on cloud best practices and IaC principles."
        ]
    },
    {
        role: "DevOps Engineer",
        company: "9acts Cloud Solutions",
        duration: "Sep 2019 – Dec 2021",
        status: "Completed",
        type: "Consultancy",
        tech: ["AWS", "Jenkins", "ELK Stack", "Python", "Linux"],
        details: [
            "Specialized in Azure ecosystem management (AKS, Azure DevOps) and implemented cost optimization strategies leading to 15% savings.",
            "Created comprehensive Jenkins CI/CD pipelines to automate build and release processes, including approval gates.",
            "Dockerized internal tools and conducted deep log analysis using the ELK Stack (Elasticsearch, Logstash, Kibana) for troubleshooting.",
            "Optimized network security by configuring VNETs, Firewalls, and Route 53 policies, ensuring secure inter-service communication.",
            "Automated routine system administration tasks using Python and Bash scripts, freeing up team time for strategic initiatives.",
            "Participated in 24/7 on-call rotation, resolving critical production incidents within defined SLAs."
        ]
    }
];

const Deployments = () => {
    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '3rem' }}>
            <h1 className="section-title">Deployment Log [Experience]</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {deployments.map((job, index) => (
                    <motion.div
                        key={index}
                        className="bento-card"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>{job.role}</h2>
                                    <span className="tag" style={{ background: '#3f3f46', color: 'white' }}>{job.type}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#a1a1aa', fontSize: '1rem' }}>
                                    <FaBuilding /> {job.company}
                                </div>
                            </div>

                            <div style={{ textAlign: 'right' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end', color: '#34d399', fontWeight: 600, marginBottom: '0.2rem' }}>
                                    <div style={{ width: '8px', height: '8px', background: '#34d399', borderRadius: '50%' }} />
                                    {job.status}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#71717a', fontSize: '0.9rem' }}>
                                    <FaCalendar /> {job.duration}
                                </div>
                            </div>
                        </div>

                        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {job.details.map((point, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '0.8rem', color: '#d4d4d8', lineHeight: 1.6 }}>
                                        <span style={{ color: '#818cf8', marginTop: '4px' }}>➜</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                            {job.tech.map((t, i) => (
                                <span key={i} className="tag" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <FaCodeBranch size={12} /> {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Deployments;
