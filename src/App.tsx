import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useAnimation } from 'motion/react';
import { Brain, ArrowUpRight, Zap, Sparkles, MessageSquare, Layers, Network, Fingerprint, Activity, Calendar } from 'lucide-react';

import { FaApple, FaGooglePlay } from "react-icons/fa";

// --- Global Progress Bar ---
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00F2FE] via-[#4FACFE] to-[#8E2DE2] origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}

// --- Navbar ---
function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-5xl"
    >
      <div className="glass-pill px-4 py-3 md:px-6 md:py-4 rounded-full flex items-center justify-between border border-white/10 bg-white/[0.02] backdrop-blur-xl gap-2">
        <div className="flex items-center cursor-pointer group">
          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
             <InteractiveMascot className="w-20 h-20 md:w-24 md:h-24 shrink-0" glowColor="rgba(0,242,254,0.6)" />
          </div>
          <span className="font-sans font-bold text-xl md:text-2xl tracking-tight text-white leading-none ml-1">GEM</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
          <a href="#features" className="hover:text-white transition-colors">Neural Sync</a>
          <a href="#flow" className="hover:text-white transition-colors">Ecosystem</a>
        </div>

        <motion.button 
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center px-4 py-2 md:px-5 md:py-2 rounded-full bg-white text-black text-[10px] md:text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors whitespace-nowrap shrink-0"
        >
          Get Access
        </motion.button>
      </div>
    </motion.nav>
  );
}

// --- Phone Mockup (Apple Intelligence Style) ---
function MockupPhone() {
  return (
    <div className="relative w-[280px] md:w-[340px] h-[580px] md:h-[700px] mx-auto z-20 group perspective-1000 mt-8 lg:mt-0 max-w-full">
      {/* Outer Liquid Halo */}
      <motion.div 
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute -inset-10 bg-gradient-to-r from-[#00F2FE] via-[#8E2DE2] to-[#4FACFE] blur-[60px] opacity-20 group-hover:opacity-40 rounded-full z-0 transition-opacity duration-1000 mix-blend-screen"
      />
      
      {/* Phone Chassis & Spinning Edge Glow */}
      <div className="absolute inset-0 rounded-[3.5rem] md:rounded-[4rem] bg-zinc-900 overflow-hidden flex items-center justify-center z-10 shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/5">
         
         {/* Animated Conic Gradient Edge (The Apple Intelligence Glow) */}
         <div className="absolute w-[200%] h-[200%] bg-[conic-gradient(from_90deg,#00F2FE_0%,#8E2DE2_25%,#1E40AF_50%,#8E2DE2_75%,#00F2FE_100%)] animate-[spin_4s_linear_infinite] opacity-80" />
         
         {/* Inner Black Bezel */}
         <div className="absolute inset-[3px] bg-black rounded-[3.35rem] md:rounded-[3.8rem] z-10 box-border" />
         
         {/* Screen Display */}
         <div className="absolute inset-[10px] bg-[#050505] rounded-[3rem] md:rounded-[3.4rem] z-20 overflow-hidden flex flex-col">
            {/* Screen Internal Background Noise & Glow */}
            <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none z-0" />
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-bl from-[#8E2DE2] to-[#00F2FE] blur-[50px] opacity-20 rounded-full z-0 animate-pulse" />

            {/* Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[100px] h-7 bg-black rounded-full z-40 flex items-center justify-between px-3 box-border shadow-md border border-white/5">
               <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#8E2DE2] animate-pulse" />
               <div className="w-1 h-1 rounded-full bg-white/20" />
            </div>

            {/* App Content */}
            <div className="flex-1 flex flex-col pt-20 px-5 z-10 relative">
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5 }}
                 className="mb-8"
               >
                 <h3 className="font-serif text-2xl text-white tracking-tight">Good evening,<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/30">Alex.</span></h3>
               </motion.div>

               {/* Chat Bubbles */}
               <div className="flex flex-col gap-4">
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="self-end bg-white/10 backdrop-blur-md border border-white/5 text-white text-[12px] px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%]"
                  >
                    Summarize my ecosystem activity today.
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 }}
                    className="self-start relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00F2FE] to-[#8E2DE2] blur-sm opacity-50 rounded-2xl z-0" />
                    <div className="relative z-10 bg-black/80 backdrop-blur-xl border border-white/10 text-white/90 text-[12px] leading-relaxed px-4 py-4 rounded-2xl rounded-tl-sm max-w-[95%]">
                      <div className="flex items-center gap-3 mb-2">
                        <img src="https://drive.google.com/thumbnail?id=1FkdeDTBIp7pNZ9x1vtMPVtQQ7BtBedXw&sz=w1000" alt="GEM Mascot" className="w-8 h-8 object-contain drop-shadow-[0_0_15px_rgba(0,242,254,0.6)] mix-blend-screen brightness-125" referrerPolicy="no-referrer" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#8E2DE2] font-semibold text-sm">GEM Core</span>
                      </div>
                      I've monitored 3 active nodes. You have 2 high-priority emails pending, and your architecture review meeting is fully transcribed and filed in Workspace.
                    </div>
                  </motion.div>
               </div>

               {/* Bottom Input Area */}
               <div className="absolute bottom-6 left-5 right-5 h-12 bg-white/5 border border-white/10 rounded-full flex items-center px-4 backdrop-blur-md">
                 <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#8E2DE2] mr-3" />
                 <span className="text-[11px] text-white/40 font-medium font-sans">Neural sync active...</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

// --- App Store Button Component ---
function StoreButton({ icon, store, desc }: { icon: React.ReactNode, store: string, desc: string }) {
  return (
    <motion.a 
      href="#" 
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      className="flex items-center justify-center gap-2 md:gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-3 md:px-6 py-2.5 md:py-3 rounded-xl md:rounded-2xl backdrop-blur-md transition-all group flex-1 sm:flex-none max-w-[160px] sm:max-w-none shrink-0"
    >
       <div className="text-white group-hover:scale-110 transition-transform flex-shrink-0">
         {icon}
       </div>
       <div className="flex flex-col text-left">
          <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-white/50 leading-none mb-1">{desc}</span>
          <span className="text-xs md:text-sm font-semibold tracking-wide text-white leading-none whitespace-nowrap">{store}</span>
       </div>
    </motion.a>
  );
}

// --- Hero App Launch ---
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-12 overflow-hidden px-6">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* Typographic Left Col */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col text-center lg:text-left order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00F2FE]/30 bg-[#00F2FE]/5 w-fit mx-auto lg:mx-0 backdrop-blur-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F2FE] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F2FE]"></span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#00F2FE]">v1.0 Now Available</span>
          </div>

          {/* Aggressive Contrast Typography */}
          <h1 className="font-serif text-5xl md:text-[5rem] lg:text-[6.5rem] leading-[0.9] tracking-tighter text-white mb-6 text-glow">
            The next <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] via-[#8E2DE2] to-[#4FACFE]">evolution</span><br/>
            of your mind.
          </h1>
          
          <p className="font-sans text-white/60 text-base md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed font-light mb-10">
            GEM is a liquid intelligence engine that lives on your device, seamlessly binding your apps, memories, and workflows into a single neural thread.
          </p>

          <div className="flex flex-row gap-2 md:gap-4 justify-center lg:justify-start items-center w-full">
            <StoreButton 
              store="App Store" 
              desc="Download on the"
              icon={<FaApple className="w-5 h-5 md:w-6 md:h-6" />} 
            />
            <StoreButton 
              store="Google Play" 
              desc="Get it on"
              icon={<FaGooglePlay className="w-4 h-4 md:w-5 md:h-5" />} 
            />
          </div>
        </motion.div>

        {/* Visual Mockup Right Col */}
        <div className="order-1 lg:order-2 flex justify-center w-full">
          <MockupPhone />
        </div>

      </div>
    </section>
  );
}

// --- Bento Features ---
function BentoCard({ title, desc, icon: Icon, span = false, glow }: { title: string, desc: string, icon: React.ElementType, span?: boolean, glow: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 0.98 }}
      className={`glass-card p-8 flex flex-col justify-between group overflow-hidden ${span ? 'md:col-span-2' : 'col-span-1'} border border-white/5 hover:border-white/10 transition-all duration-500 min-h-[300px] relative shrink-0 w-[85vw] md:w-auto snap-center snap-always`}
    >
      <div className={`absolute -inset-10 opacity-30 group-hover:opacity-60 transition-opacity duration-700 blur-[50px] mix-blend-screen pointer-events-none rounded-full ${glow}`} />
      <div className="absolute inset-0 bg-noise opacity-[0.15] mix-blend-overlay pointer-events-none" />

      <div className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center relative z-10">
        <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </div>

      <div className="relative z-10 mt-12">
        <h3 className="font-serif text-3xl text-white mb-3 tracking-tight">{title}</h3>
        <p className="font-sans text-white/50 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function Features() {
  return (
    <section id="features" className="py-24 px-0 md:px-6 relative z-10">
       <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 px-6 md:px-0">
             <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-4 text-glow">The architecture of thought.</h2>
             <p className="font-sans text-white/50 font-light text-lg max-w-xl mx-auto">Unprecedented capabilities packaged inside a fluid, un-intrusive mobile interface.</p>
          </div>
          
          <div className="flex md:grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory px-[7.5vw] md:px-0 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
             <BentoCard 
               icon={Layers} 
               title="Neural Sync" 
               desc="GEM continuously indexes your device activity securely in the background, creating a zero-knowledge vector map of your digital existence." 
               glow="bg-gradient-to-br from-[#00F2FE] to-[#4FACFE]"
             />
             <BentoCard 
               icon={MessageSquare} 
               title="Zero-Latency Chat" 
               desc="Stream rendering bypasses traditional request-response cycles. Watch the intelligence unfold character by character in real-time." 
               glow="bg-gradient-to-tr from-[#FF9A9E] to-[#FECFEF]"
             />
             <BentoCard 
               icon={Fingerprint} 
               title="Contextual Memory" 
               desc="GEM doesn't just remember facts; it remembers context. It knows why you asked a question last Tuesday, seamlessly continuing the thought today." 
               span={true}
               glow="bg-gradient-to-b from-[#8E2DE2] to-[#4A00E0]"
             />
          </div>
       </div>
    </section>
  );
}

// --- Interactive Mascot Component ---
function InteractiveMascot({ className = "", glowColor = "rgba(0,242,254,0.4)" }: { className?: string, glowColor?: string }) {
  const rotateX = useSpring(0, { stiffness: 100, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 100, damping: 30 });
  const controls = useAnimation();

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const triggerIdleAction = () => {
      const action = Math.random();
      if (action > 0.7) {
        // Quick blink/squish
        controls.start({
          scaleY: [1, 0.7, 1],
          scaleX: [1, 1.1, 1],
          transition: { duration: 0.2 }
        });
      } else if (action > 0.4) {
        // Head tilt
        controls.start({
          rotateZ: [0, -12, 8, -4, 0],
          transition: { duration: 1.5, ease: "easeInOut" }
        });
      } else {
        // Subtle nudge/bop
        controls.start({
          scale: [1, 1.05, 1],
          transition: { duration: 0.4 }
        });
      }
      
      const nextDelay = 2000 + Math.random() * 4000;
      timeout = setTimeout(triggerIdleAction, nextDelay);
    };
    
    timeout = setTimeout(triggerIdleAction, 2000);
    return () => clearTimeout(timeout);
  }, [controls]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      rotateY.set(x * 35);
      rotateX.set(y * -35); 
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rotateX, rotateY]);

  return (
    <div style={{ perspective: 1000 }} className={`relative z-20 flex justify-center items-center ${className}`}>
       <motion.div
         style={{ rotateX, rotateY }}
         whileHover={{ scale: 1.15 }}
         className="w-full h-full cursor-pointer flex items-center justify-center relative touch-none group/mascot"
       >
         <motion.div
           animate={{
             y: [0, -8, 0],
           }}
           transition={{
             duration: 4,
             repeat: Infinity,
             ease: "easeInOut"
           }}
           className="w-full h-full flex items-center justify-center"
         >
           <motion.img 
             src="https://drive.google.com/thumbnail?id=1FkdeDTBIp7pNZ9x1vtMPVtQQ7BtBedXw&sz=w1000" 
             alt="GEM Mascot" 
             className="w-full h-full object-contain mix-blend-screen transition-all duration-300 origin-center"
             style={{ 
               filter: `drop-shadow(0 0 30px ${glowColor}) brightness(1.2)`
             }}
             animate={controls}
             whileHover={{
               filter: `drop-shadow(0 0 100px rgba(0, 242, 254, 0.9)) brightness(1.8)`
             }}
             referrerPolicy="no-referrer" 
           />
         </motion.div>
       </motion.div>
    </div>
  );
}

// --- The Flow Section (Visual Integrations) ---
function FlowNode({ icon: Icon, delay = 0, title }: { icon: React.ElementType, delay: number, title: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-3 relative z-10"
    >
       <div className="w-16 h-16 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)]">
          <Icon className="w-6 h-6 text-white/70" />
       </div>
       <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-white/40">{title}</span>
    </motion.div>
  );
}

function TheFlow() {
  return (
    <section id="flow" className="py-24 md:py-32 px-6 relative overflow-hidden flex flex-col items-center">
       <div className="text-center mb-16 md:mb-24 relative z-10 w-full">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6">Seamless Ecosystem.</h2>
          <p className="font-sans text-white/50 text-base md:text-lg max-w-md mx-auto">One node to connect them all. Plugs directly into your existing life architecture.</p>
       </div>

       <div className="relative w-full max-w-4xl h-[300px] md:h-[400px] flex items-center justify-center lg:justify-between px-0 md:px-10">
          {/* Abstract background connections */}
          <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent top-1/2 -translate-y-1/2 z-0 hidden lg:block" />
          
          <div className="hidden lg:flex w-full justify-between items-center absolute inset-0 px-20">
             <FlowNode icon={Calendar} title="Schedules" delay={0.2} />
             <FlowNode icon={Network} title="APIs" delay={0.4} />
          </div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-20 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full flex items-center justify-center mx-auto"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-[#00F2FE] via-[#8E2DE2] to-[#FF9A9E] blur-[50px] md:blur-[100px] opacity-40 animate-[spin_8s_linear_infinite]" />
             <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-80 lg:h-80 flex items-center justify-center group overflow-visible">
                <InteractiveMascot className="w-56 h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 shrink-0" glowColor="rgba(255,255,255,0.4)" />
             </div>
          </motion.div>

       </div>
    </section>
  );
}

// --- Mascot Mini Game ---
function MascotMiniGame() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 100, mass: 1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);
  
  const [synced, setSynced] = React.useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onClick={() => setSynced(s => Math.min(s + 20, 100))}
      className="relative w-full max-w-4xl h-[45vh] min-h-[300px] md:min-h-[400px] border border-white/10 rounded-[2rem] md:rounded-[3rem] bg-black/40 backdrop-blur-md overflow-hidden mb-16 cursor-crosshair group flex items-center justify-center shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] mx-auto"
    >
       <div className="absolute top-4 left-4 md:top-6 md:left-8 text-white/30 text-[10px] md:text-xs font-mono uppercase tracking-widest z-10 flex items-center gap-2 md:gap-3">
         Neural Sync: 
         <div className="w-16 md:w-24 h-1 bg-white/10 rounded-full overflow-hidden">
           <div className="h-full bg-[#00F2FE] transition-all" style={{ width: `${synced}%` }} />
         </div>
         <span className="text-[#00F2FE] font-bold">{synced}%</span>
       </div>
       <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
       
       {/* Instruction */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white/20 text-[10px] md:text-sm uppercase font-bold tracking-[0.3em] group-hover:opacity-0 transition-opacity duration-500 pointer-events-none w-full px-4">
         Move cursor to guide <br/> Click to sync
       </div>

       {/* Cursor Light */}
       <motion.div 
         style={{ x, y }} 
         className="absolute left-1/2 top-1/2 -ml-4 -mt-4 w-8 h-8 rounded-full bg-[#00F2FE] blur-[15px] pointer-events-none z-20"
       />

       {/* Mascot following */}
       <motion.div 
         style={{ x: smoothX, y: smoothY }}
         className="absolute left-1/2 top-1/2 -ml-24 -mt-24 md:-ml-48 md:-mt-48 w-48 h-48 md:w-96 md:h-96 pointer-events-none z-30"
       >
          <InteractiveMascot className="w-full h-full drop-shadow-[0_0_50px_rgba(0,242,254,0.6)]" glowColor={`rgba(0,242,254,${0.3 + (synced / 100)})`} />
          <div 
            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#8E2DE2] blur-[80px] -z-10 mix-blend-screen transition-all duration-300"
            style={{ opacity: synced > 0 ? 0.2 + (synced/200) : 0, transform: `scale(${1 + synced/100})` }}
          />
       </motion.div>
    </div>
  );
}

// --- Final CTA ---
function FinalCTA() {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
        {/* Organic Expanding Logo/Blob */}
        <motion.div 
           initial={{ scale: 0.2, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           viewport={{ once: true, margin: "100px" }}
           className="absolute w-full max-w-3xl aspect-square bg-gradient-to-b from-[#00F2FE]/20 via-[#8E2DE2]/20 to-black rounded-full blur-[100px] z-0 pointer-events-none"
        />

        <div className="w-full max-w-5xl relative z-10 flex flex-col items-center">
            <MascotMiniGame />
            <h2 className="font-serif text-4xl md:text-7xl text-white tracking-tighter leading-[0.9] text-glow mb-8 text-center">
              The Genesis of <br/>Something New.
            </h2>
            
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="relative overflow-hidden bg-white text-black px-8 py-4 rounded-full font-sans font-bold text-sm tracking-widest uppercase transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)]"
             >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000" />
                Get Started Now
             </motion.button>
        </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 text-center border-t border-white/5 relative z-10 bg-black">
       <span className="font-sans text-[10px] uppercase tracking-widest text-white/30">
          © {new Date().getFullYear()} GEM Neural Systems. Designed for the Future.
       </span>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans bg-[#000000] min-h-screen text-white selection:bg-[#00F2FE]/30">
      <ScrollProgress />
      {/* Global Noise Layer attached via index.css body applied to a fixed div */}
      <div className="fixed inset-0 bg-noise z-50 pointer-events-none mix-blend-screen opacity-40"></div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <TheFlow />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}
