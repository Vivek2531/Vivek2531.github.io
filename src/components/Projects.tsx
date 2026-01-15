import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaAws } from 'react-icons/fa';
import { SiGo, SiFlask, SiPostgresql, SiSpotify } from 'react-icons/si';

const repositories = [
    {
        name: "Go Web Weather App",
        description: "High-performance weather application built with Golang and Echo framework. Features real-time data integration via WeatherAPI, Redis caching for optimal performance, and robust logging with Logrus.",
        tags: ["Golang", "Echo", "Redis", "Docker"],
        language: "Go",
        icon: <SiGo size={24} color="#00add8" />,
        link: "https://github.com/Vivek2531/go-web-weatherapp"
    },
    {
        name: "AI CloudWatch Dashboard",
        description: "Intelligent CLI tool automating AWS CloudWatch Dashboard creation. specific metrics for 10+ AWS services (EC2, RDS, ELB) to streamline observability during infrastructure events.",
        tags: ["Python", "AWS CloudWatch", "Automation", "CLI"],
        language: "Python",
        icon: <FaAws size={24} color="#ff9900" />,
        link: "https://github.com/Vivek2531/ai-cloudwatch-monitoring-dashboard"
    },
    {
        name: "AI Music Recommender",
        description: "Smart recommendation engine utilizing OpenAI GPT-3.5 and Spotify API. Analyzes user listening history to generate personalized playlists and discover new artists.",
        tags: ["OpenAI", "Spotify API", "React", "Node.js"],
        language: "TypeScript",
        icon: <SiSpotify size={24} color="#1db954" />,
        link: "https://github.com/Vivek2531/ai-recommended-music"
    },
    {
        name: "Flask SRE Demo",
        description: "Reference production architecture demonstrating SRE best practices. Includes instrumented Flask microservices, structured logging, Prometheus metrics, and chaos engineering readiness.",
        tags: ["Python", "Flask", "Prometheus", "SRE"],
        language: "Python",
        icon: <SiFlask size={24} color="#ffffff" />,
        link: "https://github.com/Vivek2531/flask-sre-production-demo"
    },
    {
        name: "EHR System",
        description: "Comprehensive Electronic Health Record system. Features secure patient data management, role-based access control, appointment scheduling, and HIPAA-compliant data architecture.",
        tags: [".NET", "PostgreSQL", "React", "Security"],
        language: "Full Stack",
        icon: <SiPostgresql size={24} color="#336791" />,
        link: "https://github.com/Vivek2531/Electronic-health-record-project"
    }
];

const Repositories = () => {
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2rem' }}>
                <div>
                    <h1 className="section-title" style={{ marginBottom: '0.5rem' }}>Repositories</h1>
                    <p style={{ color: '#a1a1aa' }}>Featured open-source projects and system architectures.</p>
                </div>
                <a href="https://github.com/Vivek2531?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                    <SiGo /> View All on GitHub
                </a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
                {repositories.map((repo, index) => (
                    <motion.div
                        key={index}
                        className="bento-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                                    {repo.icon}
                                </div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'white' }}>{repo.name}</h3>
                            </div>
                        </div>

                        <p style={{ color: '#d4d4d8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                            {repo.description}
                        </p>

                        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                            {repo.tags.map((tag, i) => (
                                <span key={i} className="tag" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '1.5rem', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>{repo.language}</span>
                            <a href={repo.link} target="_blank" rel="noopener noreferrer" style={{ color: '#818cf8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                                Source Code <FaExternalLinkAlt size={12} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Repositories;
