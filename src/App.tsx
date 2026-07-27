import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Hexagon, Sparkles, Brain, PenTool, 
  ThumbsUp, MessageSquare, Share2, Zap, TrendingUp, ImageIcon,
  CheckCircle2, ArrowRight, ArrowLeft, Send, Loader2, Settings
} from 'lucide-react';

const Github = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Navbar = ({ onNavigate, currentView }: { onNavigate: (view: 'landing' | 'chat') => void, currentView: 'landing' | 'chat' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || currentView === 'chat' ? 'bg-primary/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('landing')}>
          <div className="relative">
            <Hexagon className="w-8 h-8 text-brand" strokeWidth={1.5} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-brand rounded-full animate-pulse glow-border"></div>
            </div>
          </div>
          <span className="text-xl font-bold tracking-widest">NOVALINK AI</span>
        </div>

        {/* Desktop Menu */}
        {currentView === 'landing' && (
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#home" className="hover:text-white transition-colors">HOME</a>
            <a href="#features" className="hover:text-white transition-colors">FEATURES</a>
            <a href="#workflow" className="hover:text-white transition-colors">WORKFLOW</a>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col gap-4 shadow-2xl"
        >
          {currentView === 'landing' && (
            <>
              <a href="#home" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>HOME</a>
              <a href="#features" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>FEATURES</a>
              <a href="#workflow" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>WORKFLOW</a>
            </>
          )}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = ({ onNavigate }: { onNavigate: (view: 'landing' | 'chat') => void }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/20 rounded-full blur-[120px] opacity-50 animate-pulse-slow"></div>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className="absolute w-2 h-2 rounded-full bg-brand glow-border"
            style={{
              top: `${20 + i * 15}%`,
              left: `${15 + i * 20}%`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm text-brand border-brand/30 shadow-[0_0_15px_rgba(10,108,255,0.2)]">
            <Sparkles className="w-4 h-4" />
            <span className="font-medium">Your AI Co-Pilot for Viral LinkedIn Content</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 tracking-tight">
            CREATE.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-blue-400 to-cyan-400 glow-text">CONNECT.</span><br />
            INSPIRE.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Generate professional LinkedIn posts using AI. Turn your projects, achievements, and ideas into powerful personal branding content.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate('chat')}
              className="w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand-hover text-white rounded-full font-medium text-lg transition-all shadow-[0_0_20px_rgba(10,108,255,0.6)] hover:scale-105 flex items-center justify-center gap-2"
            >
              GENERATE MY POST
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => document.getElementById('workflow')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 glass-card hover:bg-white/10 text-white rounded-full font-medium text-lg transition-all flex items-center justify-center"
            >
              VIEW DEMO
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AgentVisual = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass-card border-brand/30 overflow-hidden relative shadow-[0_0_30px_rgba(10,108,255,0.15)]"
        >
          <div className="bg-black/60 px-4 py-3 border-b border-white/10 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="mx-auto text-xs text-gray-400 font-medium tracking-wide">NovaLink AI</div>
          </div>
          
          <div className="p-6 md:p-8 space-y-8 bg-black/40">
            <div>
              <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider font-semibold">Input:</p>
              <div className="bg-black/50 p-4 rounded-xl border border-white/10 font-mono text-gray-300 shadow-inner">
                &gt; "My Graph RAG project using Neo4j"
                <span className="inline-block w-2 h-4 bg-brand ml-2 animate-pulse align-middle"></span>
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-4 uppercase tracking-wider font-semibold">AI Processing:</p>
              <div className="space-y-4">
                {[
                  { name: "Research Agent", icon: Brain },
                  { name: "Writing Agent", icon: PenTool },
                  { name: "Quality Agent", icon: Zap },
                  { name: "Hashtag Agent", icon: TrendingUp }
                ].map((agent, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.15) }}
                    className="flex items-center gap-4 text-sm text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center text-brand">
                      <agent.icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-base">{agent.name}</span>
                    <CheckCircle2 className="w-5 h-5 text-green-400 ml-auto" />
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider font-semibold">Generated Result:</p>
              <div className="bg-brand/10 p-6 rounded-xl border border-brand/40 relative shadow-[0_0_20px_rgba(10,108,255,0.1)]">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand/5 to-transparent rounded-xl pointer-events-none"></div>
                <p className="text-gray-100 leading-relaxed text-lg relative z-10">
                  🚀 Building the future of AI with Graph RAG...<br/><br/>
                  Today I explored Graph RAG using Neo4j and LangChain. This journey helped me understand how AI systems can reason beyond simple retrieval.
                </p>
                <div className="mt-4 flex gap-3 text-brand text-sm font-medium relative z-10">
                  <span>#AI</span>
                  <span>#LangChain</span>
                  <span>#Neo4j</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { title: "AI Post Generator", desc: "Generate professional LinkedIn posts instantly.", icon: Zap },
    { title: "Personal Branding", desc: "Maintain your unique writing style.", icon: Sparkles },
    { title: "AI Content Planner", desc: "Convert ideas into engaging stories.", icon: Brain },
    { title: "Hashtag Intelligence", desc: "Find relevant industry hashtags.", icon: TrendingUp },
    { title: "Quality Analyzer", desc: "Improve engagement and readability.", icon: CheckCircle2 },
    { title: "Image Prompt Creator", desc: "Generate creative LinkedIn visuals.", icon: ImageIcon },
  ];

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Powerful AI Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Everything you need to create viral content on LinkedIn.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass-card p-8 group hover:border-brand/50 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand/20">
                  <feat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Workflow = () => {
  const steps = [
    { name: "USER IDEA", icon: Brain },
    { name: "CONTENT PLANNER AGENT", icon: Sparkles },
    { name: "WRITER AGENT", icon: PenTool },
    { name: "QUALITY CHECKER", icon: CheckCircle2 },
    { name: "HASHTAG AGENT", icon: TrendingUp },
    { name: "FINAL LINKEDIN POST", icon: Share2 }
  ];

  return (
    <section id="workflow" className="py-24 relative z-10 bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">AI Agent Pipeline</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">How our multi-agent system processes your ideas from thought to viral post.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex items-center gap-6 glass-card p-6 mb-8 relative z-10 hover:border-brand/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(10,108,255,0.2)] group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg md:text-xl font-bold tracking-wide">{step.name}</h3>
              </motion.div>
              
              {i < steps.length - 1 && (
                <div className="absolute left-[2.75rem] top-14 bottom-[-2rem] w-[2px] bg-white/10 z-0 flex justify-center overflow-hidden">
                  <motion.div 
                    animate={{ y: [-10, 150] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                    className="w-full h-8 bg-gradient-to-b from-transparent via-brand to-transparent absolute top-0"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SamplePost = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">The Final Result</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">A production-ready post engineered for maximum engagement.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto glass-card border-white/20 p-6 md:p-8 relative bg-white/5 hover:bg-white/10 transition-colors"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand/20 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 overflow-hidden flex items-center justify-center border border-white/10 shadow-lg">
              <div className="w-6 h-6 text-gray-400">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg">John Developer</h4>
              <p className="text-xs text-gray-400">AI Engineer | Tech Enthusiast • 1h • 🌐</p>
            </div>
          </div>
          
          <div className="space-y-4 text-gray-200 text-base md:text-lg leading-relaxed mb-8">
            <p>🚀 Excited to share my latest AI project!</p>
            <p>Today I explored Graph RAG using Neo4j and LangChain.</p>
            <p>This journey helped me understand how AI systems can reason beyond simple retrieval. By connecting entities in a knowledge graph, we're building more intelligent and context-aware applications.</p>
            <p className="text-brand font-medium pt-2">
              #ArtificialIntelligence #MachineLearning #LangChain #Neo4j
            </p>
          </div>

          <div className="border-t border-white/10 pt-4 flex justify-between text-gray-400">
            <button className="flex items-center justify-center gap-2 hover:text-brand hover:bg-brand/10 px-4 py-2 rounded-lg transition-all text-sm font-medium w-full">
              <ThumbsUp className="w-5 h-5" />
              <span>Like</span>
            </button>
            <button className="flex items-center justify-center gap-2 hover:text-brand hover:bg-brand/10 px-4 py-2 rounded-lg transition-all text-sm font-medium w-full">
              <MessageSquare className="w-5 h-5" />
              <span>Comment</span>
            </button>
            <button className="flex items-center justify-center gap-2 hover:text-brand hover:bg-brand/10 px-4 py-2 rounded-lg transition-all text-sm font-medium w-full">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/60 py-16 relative z-10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="relative">
            <Hexagon className="w-8 h-8 text-brand" strokeWidth={1.5} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-brand rounded-full"></div>
            </div>
          </div>
          <span className="text-2xl font-bold tracking-widest text-white">NOVALINK AI</span>
        </div>
        <p className="text-gray-400 mb-8 max-w-sm mx-auto text-lg">
          "Building the future of AI-powered personal branding"
        </p>
        <div className="flex justify-center gap-6">
          <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-brand hover:border-brand/50 transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-brand hover:border-brand/50 transition-all">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-brand hover:border-brand/50 transition-all">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
        <div className="mt-12 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} NovaLink AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const LandingPage = ({ onNavigate }: { onNavigate: (view: 'landing' | 'chat') => void }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <AgentVisual />
      <Features />
      <Workflow />
      <SamplePost />
      <Footer />
    </>
  );
};

const ChatMessage = ({ 
  role, 
  content, 
  isThinking,
  loadingStep,
  hashtags,
  imagePrompt,
  score
}: { 
  role: 'user' | 'ai', 
  content: string, 
  isThinking?: boolean,
  loadingStep?: number,
  hashtags?: string[],
  imagePrompt?: string,
  score?: string
}) => {
  const steps = [
    "Planning Content...",
    "Writing Post...",
    "Checking Quality...",
    "Generating Hashtags..."
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex gap-4 mb-6 ${role === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      {role === 'ai' && (
        <div className="w-10 h-10 rounded-full bg-brand/20 border border-brand/50 flex flex-shrink-0 items-center justify-center text-brand shadow-[0_0_10px_rgba(10,108,255,0.3)]">
          <Hexagon className="w-5 h-5" />
        </div>
      )}
      
      <div className={`max-w-[80%] rounded-2xl p-5 ${
        role === 'user' 
          ? 'bg-brand text-white rounded-br-none shadow-[0_4px_15px_rgba(10,108,255,0.4)]' 
          : 'glass-card bg-white/5 border border-white/10 rounded-bl-none'
      }`}>
        {isThinking ? (
          <div className="flex flex-col gap-3">
             <div className="flex items-center gap-3 text-brand">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="text-sm font-medium animate-pulse">NovaLink AI is working...</span>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              {steps.map((step, i) => (
                <div key={i} className={`text-xs flex items-center gap-2 ${loadingStep !== undefined && loadingStep >= i ? 'text-green-400' : 'text-gray-500'}`}>
                  {loadingStep !== undefined && loadingStep > i ? <CheckCircle2 className="w-3 h-3" /> : (loadingStep === i ? <Loader2 className="w-3 h-3 animate-spin" /> : <div className="w-3 h-3 border border-gray-500 rounded-full"></div>)}
                  {step}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-sm md:text-base">
            <p className="leading-relaxed whitespace-pre-wrap">{content}</p>
            
            {(hashtags || imagePrompt || score) && (
              <div className="border-t border-white/10 pt-4 space-y-4">
                {hashtags && hashtags.length > 0 && (
                  <div>
                    <h5 className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Hashtags</h5>
                    <div className="flex flex-wrap gap-2">
                      {hashtags.map((tag, i) => (
                        <span key={i} className="text-xs bg-brand/10 text-brand px-2 py-1 rounded-md border border-brand/20">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
                {imagePrompt && (
                  <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                    <h5 className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2 flex items-center gap-2"><ImageIcon className="w-3 h-3" /> Suggested Image Prompt</h5>
                    <p className="text-sm text-gray-300 italic">"{imagePrompt}"</p>
                  </div>
                )}
                {score && (
                  <div className="flex items-center gap-2 bg-green-500/10 px-3 py-2 rounded-lg border border-green-500/20 inline-flex">
                    <Zap className="w-4 h-4 text-green-400" />
                    <h5 className="text-xs text-green-400/80 font-semibold uppercase tracking-wider">Quality Score:</h5>
                    <span className="text-sm font-bold text-green-400">{score}</span>
                  </div>
                )}
              </div>
            )}
            
            {role === 'ai' && !content.startsWith('Welcome to') && !content.startsWith('❌ Failed') && (
              <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                <button 
                  onClick={() => {
                    let fullText = content;
                    if (hashtags && hashtags.length > 0) {
                        fullText += '\n\n' + hashtags.join(' ');
                    }
                    const url = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(fullText)}`;
                    window.open(url, '_blank');
                  }}
                  className="flex items-center gap-2 bg-[#0a66c2] hover:bg-[#004182] text-white px-5 py-2.5 rounded-full font-medium transition-colors text-sm shadow-[0_4px_15px_rgba(10,102,194,0.4)]"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  Share to LinkedIn
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {role === 'user' && (
        <div className="w-10 h-10 rounded-full bg-gray-700 border border-white/10 flex flex-shrink-0 items-center justify-center text-gray-300">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
        </div>
      )}
    </motion.div>
  );
};

const Chatbot = ({ onNavigate }: { onNavigate: (view: 'landing' | 'chat') => void }) => {
  const [messages, setMessages] = useState<any[]>([
    { 
      id: '1', 
      role: 'ai', 
      content: 'Welcome to your Workspace! Configure your post strategy on the left, write a quick prompt or paste a GitHub link, and I will draft a professional LinkedIn post for you.' 
    }
  ]);
  const [input, setInput] = useState('');
  
  const [postType, setPostType] = useState('Project Announcement');
  const [tone, setTone] = useState('Professional');
  const [audience, setAudience] = useState('AI Engineers');
  const [githubUrl, setGithubUrl] = useState('');
  
  const [isGenerating, setIsGenerating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const bgImages = [
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
  ];
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    setBgImage(bgImages[Math.floor(Math.random() * bgImages.length)]);
    scrollToBottom();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const recommendations = [
    "My new AI project using LangChain",
    "Top 3 lessons learned from building a SaaS product"
  ];

  const handleSend = async () => {
    let textToSend = input;
    if (!textToSend.trim() && !githubUrl.trim()) return;
    if (isGenerating) return;
    if (!textToSend.trim() && githubUrl.trim()) {
        textToSend = "Write a professional LinkedIn post about this GitHub repository.";
    }
    
    const currentInput = textToSend;
    const userMsg = { id: Date.now().toString(), role: 'user' as const, content: currentInput };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsGenerating(true);
    
    const thinkingId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: thinkingId, role: 'ai', content: '', isThinking: true, loadingStep: 0 }]);
    
    let currentStep = 0;
    const stepInterval = setInterval(() => {
      currentStep++;
      if (currentStep > 3) currentStep = 3;
      setMessages(prev => prev.map(msg => 
        msg.id === thinkingId ? { ...msg, loadingStep: currentStep } : msg
      ));
    }, 1500);

    try {
      const response = await fetch('/api/generate-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: currentInput,
          post_type: postType,
          tone: tone,
          audience: audience,
          context: "",
          github_url: githubUrl
        })
      });

      if (!response.ok) {
        let errorMsg = `Server returned ${response.status}`;
        try {
          const errData = await response.json();
          if (errData.detail) errorMsg = errData.detail;
        } catch(e) {}
        throw new Error(errorMsg);
      }

      const data = await response.json();
      clearInterval(stepInterval);
      
      setMessages(prev => prev.map(msg => 
        msg.id === thinkingId 
          ? { id: thinkingId, role: 'ai', content: data.post, hashtags: data.hashtags, imagePrompt: data.image_prompt, score: data.score }
          : msg
      ));
    } catch (error: any) {
      clearInterval(stepInterval);
      setMessages(prev => prev.map(msg => 
        msg.id === thinkingId 
          ? { id: thinkingId, role: 'ai', content: `❌ Failed to generate post. Error: ${error.message || 'Could not connect to backend.'}` }
          : msg
      ));
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      {bgImage && (
        <div 
          className="fixed inset-0 z-[-1] opacity-[0.03] bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      <div className="pt-24 pb-6 px-4 md:px-10 lg:px-12 min-h-[100dvh] md:h-screen w-full flex flex-col md:flex-row gap-6 lg:gap-8 relative md:overflow-hidden">
        
        {/* Left Sidebar - Settings & Input */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-[400px] lg:w-[450px] flex flex-col gap-4 shrink-0 md:overflow-y-auto md:pr-2 custom-scrollbar md:h-full pb-4 md:pb-0"
        >
          <button 
            onClick={() => onNavigate('landing')} 
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors w-fit text-sm font-medium bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          
          <div className="glass-card bg-black/40 border border-white/10 rounded-2xl p-5 shadow-xl flex flex-col gap-4 mt-1">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Settings className="w-5 h-5 text-brand" /> Post Strategy
            </h3>
            
            <div>
              <label className="text-xs text-gray-400 mb-1.5 block font-medium uppercase tracking-wider">Post Type</label>
              <select value={postType} onChange={e => setPostType(e.target.value)} className="w-full bg-black/60 border border-white/10 rounded-xl p-3 text-sm text-white outline-none focus:border-brand/50 transition-colors">
                <option>Project Announcement</option>
                <option>Milestone / Achievement</option>
                <option>Thought Leadership</option>
                <option>Learning / Tutorial</option>
              </select>
            </div>
            
            <div>
              <label className="text-xs text-gray-400 mb-1.5 block font-medium uppercase tracking-wider">Tone of Voice</label>
              <select value={tone} onChange={e => setTone(e.target.value)} className="w-full bg-black/60 border border-white/10 rounded-xl p-3 text-sm text-white outline-none focus:border-brand/50 transition-colors">
                <option>Professional</option>
                <option>Casual & Friendly</option>
                <option>Inspirational</option>
                <option>Technical & Analytical</option>
              </select>
            </div>
            
            <div>
              <label className="text-xs text-gray-400 mb-1.5 block font-medium uppercase tracking-wider">Target Audience</label>
              <input type="text" value={audience} onChange={e => setAudience(e.target.value)} placeholder="e.g., AI Engineers" className="w-full bg-black/60 border border-white/10 rounded-xl p-3 text-sm text-white outline-none focus:border-brand/50 transition-colors" />
            </div>
            
            <div className="pt-2 border-t border-white/5">
              <label className="text-xs text-gray-400 mb-1.5 font-medium uppercase tracking-wider flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5" /> GitHub Integration
              </label>
              <input type="text" value={githubUrl} onChange={e => setGithubUrl(e.target.value)} placeholder="https://github.com/user/repo" className="w-full bg-black/60 border border-white/10 rounded-xl p-3 text-sm text-white outline-none focus:border-brand/50 transition-colors" />
            </div>
          </div>

          <div className="glass-card bg-black/40 border border-white/10 rounded-2xl p-5 shadow-xl flex flex-col gap-3 flex-1 min-h-[250px]">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-1">
              <Hexagon className="w-5 h-5 text-brand" /> Content Prompt
            </h3>
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="What do you want to post about today? (Or just paste a GitHub link above!)"
              className="w-full flex-1 bg-black/60 border border-white/10 text-white placeholder-gray-600 p-4 rounded-xl outline-none resize-none custom-scrollbar focus:border-brand/50 transition-colors text-sm"
            />
            
            <div className="flex flex-wrap gap-2">
              {recommendations.map((rec, i) => (
                <button
                  key={i}
                  onClick={() => setInput(rec)}
                  className="text-[10px] uppercase tracking-wider bg-white/5 hover:bg-brand/20 hover:text-brand border border-white/10 text-gray-400 px-3 py-1.5 rounded-full transition-colors text-left"
                >
                  {rec}
                </button>
              ))}
            </div>

            <button 
              onClick={handleSend}
              disabled={(!input.trim() && !githubUrl.trim()) || isGenerating}
              className="mt-2 w-full bg-brand text-white p-4 rounded-xl font-bold hover:bg-brand-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(10,108,255,0.3)] flex justify-center items-center gap-2"
            >
              {isGenerating ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Generating...</>
              ) : (
                <><Send className="w-5 h-5" /> Generate Post</>
              )}
            </button>
          </div>
        </motion.div>

        {/* Right Canvas - Output Preview */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 glass-card bg-black/40 border border-white/10 rounded-2xl p-4 md:p-8 shadow-xl flex flex-col relative overflow-hidden min-h-[600px] md:min-h-0 md:h-full"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand to-cyan-500 opacity-50"></div>
          
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-6">
            <AnimatePresence>
              {messages.map((msg) => (
                <ChatMessage 
                  key={msg.id} 
                  role={msg.role} 
                  content={msg.content} 
                  isThinking={msg.isThinking} 
                  loadingStep={msg.loadingStep}
                  hashtags={msg.hashtags}
                  imagePrompt={msg.imagePrompt}
                  score={msg.score}
                />
              ))}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>
        </motion.div>
        
      </div>
    </>
  );
};

function App() {
  const [view, setView] = useState<'landing' | 'chat'>('landing');

  return (
    <div className="min-h-screen bg-primary text-white selection:bg-brand/30 selection:text-white font-sans relative overflow-hidden">
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <Navbar onNavigate={setView} currentView={view} />
      
      {view === 'landing' ? (
        <LandingPage onNavigate={setView} />
      ) : (
        <Chatbot onNavigate={setView} />
      )}
    </div>
  );
}

export default App;
