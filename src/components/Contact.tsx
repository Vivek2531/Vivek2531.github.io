import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaCircle, FaWifi } from 'react-icons/fa';

// Simplified helper for lines to keep code clean
const Line = ({ num, children }: { num: number, children: React.ReactNode }) => (
    <div className="code-line">
        <span className="line-number">{num}</span>
        <div style={{ flex: 1 }}>{children}</div>
    </div>
);

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [responseTime, setResponseTime] = useState(0);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        const startTime = Date.now();

        const formData = {
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
            name: formState.name,
            email: formState.email,
            message: formState.message,
            subject: `API Contact from ${formState.name}`
        };

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            setResponseTime(Date.now() - startTime);

            if (response.status === 200) {
                setSubmitStatus('success');
                setFormState({ name: '', email: '', message: '' });
                setTimeout(() => setSubmitStatus('idle'), 8000);
            } else {
                console.error('Web3Forms Error:', result);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Submission Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" style={{ padding: '4rem 0', position: 'relative', overflow: 'hidden' }}>
            <div className="container mx-auto px-4" style={{ maxWidth: '1000px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '2rem' }}
                >
                    <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <FaWifi style={{ color: '#6366f1', fontSize: '1.5rem' }} />
                        <span>Available Endpoints</span>
                    </h2>
                    <p style={{ color: '#9ca3af', marginBottom: '2rem', fontFamily: 'var(--font-mono)' }}>
                        Send a request to the server. Authentication not required.
                    </p>
                </motion.div>

                {/* API Window */}
                <motion.div
                    className="api-window"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    {/* Window Header */}
                    <div className="api-header">
                        <div style={{ display: 'flex', gap: '0.4rem' }}>
                            <FaCircle size={10} color="#ff5f56" />
                            <FaCircle size={10} color="#ffbd2e" />
                            <FaCircle size={10} color="#27c93f" />
                        </div>
                        <div className="url-bar">
                            <span className="method-tag">POST</span>
                            <span style={{ margin: '0 0.5rem', color: '#555' }}>|</span>
                            <span style={{ color: '#ccc' }}>https://vivek.dev/api/v1/contact</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {/* Editor Body */}
                        <div className="api-body">
                            <Line num={1}><span className="sh-punc">{'{'}</span></Line>

                            <Line num={2}>
                                <span style={{ marginLeft: '1.5rem' }}>
                                    <span className="sh-key">"name"</span><span className="sh-punc">:</span> <span className="sh-str">"</span>
                                    <input
                                        type="text"
                                        className="api-input"
                                        placeholder="Your Name"
                                        value={formState.name}
                                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                                        required
                                    />
                                    <span className="sh-str">"</span><span className="sh-punc">,</span>
                                </span>
                            </Line>

                            <Line num={3}>
                                <span style={{ marginLeft: '1.5rem' }}>
                                    <span className="sh-key">"email"</span><span className="sh-punc">:</span> <span className="sh-str">"</span>
                                    <input
                                        type="email"
                                        className="api-input"
                                        placeholder="Your Email"
                                        value={formState.email}
                                        onChange={e => setFormState({ ...formState, email: e.target.value })}
                                        required
                                    />
                                    <span className="sh-str">"</span><span className="sh-punc">,</span>
                                </span>
                            </Line>

                            <Line num={4}>
                                <span style={{ marginLeft: '1.5rem' }}>
                                    <span className="sh-key">"message"</span><span className="sh-punc">:</span> <span className="sh-str">"</span>
                                </span>
                            </Line>

                            <Line num={5}>
                                <span style={{ marginLeft: '3rem', width: '100%', display: 'block' }}>
                                    <textarea
                                        className="api-textarea"
                                        rows={3}
                                        placeholder="Type your message here..."
                                        value={formState.message}
                                        onChange={e => setFormState({ ...formState, message: e.target.value })}
                                        required
                                    />
                                </span>
                            </Line>

                            <Line num={6}>
                                <span style={{ marginLeft: '1.5rem' }}>
                                    <span className="sh-str">"</span>
                                </span>
                            </Line>

                            <Line num={7}><span className="sh-punc">{'}'}</span></Line>
                        </div>

                        {/* Footer / Controls */}
                        <div className="api-footer">
                            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: '#666' }}>
                                <span>JavaScript (JSON)</span>
                                <span>UTF-8</span>
                                <span>{JSON.stringify(formState).length} bytes</span>
                            </div>
                            <button type="submit" className="send-btn" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <div className="spinner" style={{ width: '1rem', height: '1rem' }} />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FaPlay size={12} /> Send Request
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Response Area */}
                    {submitStatus !== 'idle' && (
                        <div className="response-block">
                            <div className="response-header">
                                <span>Response</span>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <span>Status: <span className={submitStatus === 'success' ? 'status-badge' : 'status-error'}>{submitStatus === 'success' ? '200 OK' : '500 ERROR'}</span></span>
                                    <span>Time: {responseTime}ms</span>
                                </div>
                            </div>
                            <pre style={{ color: '#d4d4d4', fontSize: '0.9rem' }}>
                                {submitStatus === 'success' ? (
                                    <>
                                        <span className="sh-punc">{'{'}</span>
                                        <span className="sh-key">"status"</span>: <span className="sh-str">"success"</span>,
                                        <span className="sh-key">"message"</span>: <span className="sh-str">"Message received. I will get back to you shortly."</span>,
                                        <span className="sh-key">"timestamp"</span>: <span className="sh-str">"{new Date().toISOString()}"</span>
                                        <span className="sh-punc">{'}'}</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="sh-punc">{'{'}</span>
                                        <span className="sh-key">"status"</span>: <span className="sh-str">"error"</span>,
                                        <span className="sh-key">"message"</span>: <span className="sh-str">"Failed to send message. Please try again."</span>
                                        <span className="sh-punc">{'}'}</span>
                                    </>
                                )}
                            </pre>
                        </div>
                    )}
                </motion.div>

                {/* Fallback Contact Info */}
                <div style={{ marginTop: '2rem', textAlign: 'center', opacity: 0.6 }}>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                        // Or contact directly via: <br />
                        <a href="mailto:vivekinturi27@gmail.com" style={{ color: '#6366f1', textDecoration: 'underline' }}>vivekinturi27@gmail.com</a>
                        <span style={{ margin: '0 0.5rem' }}>|</span>
                        <span style={{ color: '#ccc' }}>+1 (502) 546-4894</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
