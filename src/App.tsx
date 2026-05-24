import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useAnimation } from 'motion/react';
import { Brain, ArrowUpRight, Zap, Sparkles, MessageSquare, Layers, Network, Fingerprint, Activity, Calendar, Star, Plus, Minus, ArrowRight } from 'lucide-react';

import { FaApple, FaGooglePlay } from "react-icons/fa";
import { useLanguage, LanguageProvider } from './LanguageContext';

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

// --- Language Switcher ---
function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center bg-transparent border border-white/10 rounded-full p-0.5">
      <button 
        onClick={() => setLang('EN')}
        className={`px-2 py-1 rounded-full text-[9px] md:text-[10px] font-bold transition-colors ${lang === 'EN' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/70'}`}
      >
        EN
      </button>
      <button 
        onClick={() => setLang('ES')}
        className={`px-2 py-1 rounded-full text-[9px] md:text-[10px] font-bold transition-colors ${lang === 'ES' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/70'}`}
      >
        ES
      </button>
    </div>
  );
}

// --- Navbar ---
function Navbar() {
  const { t } = useLanguage();
  return (
    <motion.nav 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-5xl"
    >
      <div className="glass-pill px-3 py-3 md:px-5 md:py-2.5 rounded-[2rem] md:rounded-full border border-white/10 bg-black/60 backdrop-blur-2xl hover:bg-black/70 transition-colors duration-500 hover:shadow-[0_0_30px_rgba(0,242,254,0.15)] flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 overflow-hidden">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center cursor-pointer group px-2">
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center relative shrink-0">
               <img 
                 src="https://drive.google.com/thumbnail?id=1FkdeDTBIp7pNZ9x1vtMPVtQQ7BtBedXw&sz=w1000" 
                 alt="GEM Mascot" 
                 className="w-full h-full object-contain mix-blend-screen"
                 style={{ 
                   filter: `drop-shadow(0 0 10px rgba(0,242,254,0.4)) brightness(1.2)`
                 }}
                 referrerPolicy="no-referrer"
               />
            </div>
            <span className="font-sans font-bold text-lg md:text-xl lg:text-2xl tracking-tight text-white leading-none ml-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#00F2FE] transition-all duration-300">GEM</span>
          </div>

          <div className="flex items-center gap-2 md:hidden ml-4">
            <LanguageSwitcher />
            <motion.button 
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center px-4 py-2 rounded-full bg-white text-black text-[9px] font-bold uppercase tracking-wider hover:bg-[#00F2FE] hover:text-black transition-colors whitespace-nowrap shrink-0"
            >
              {t.navbar.getAccess}
            </motion.button>
          </div>
        </div>

        <div className="flex items-center justify-start md:justify-center w-full md:w-auto gap-4 lg:gap-8 text-[9px] md:text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 px-2 md:px-0 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] min-h-[24px]">
          <a href="#features" className="hover:text-white shrink-0 hover:scale-105 transition-all duration-300">{t.navbar.neuralSync}</a>
          <a href="#flow" className="hover:text-white shrink-0 hover:scale-105 transition-all duration-300">{t.navbar.ecosystem}</a>
          <a href="#testimonials" className="hover:text-white shrink-0 hover:scale-105 transition-all duration-300">{t.navbar.reviews}</a>
          <a href="#faq" className="hover:text-white shrink-0 hover:scale-105 transition-all duration-300">{t.navbar.faq}</a>
        </div>

        <div className="hidden md:flex items-center gap-2 lg:gap-4 shrink-0">
          <LanguageSwitcher />
          <motion.button 
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center px-4 py-2 lg:px-6 lg:py-2.5 rounded-full bg-white text-black text-[10px] lg:text-xs font-bold uppercase tracking-wider hover:bg-[#00F2FE] hover:text-black transition-colors whitespace-nowrap shrink-0 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)]"
          >
            {t.navbar.getAccess}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

// --- Phone Mockup (Apple Intelligence Style) ---
function MockupPhone() {
  const { t } = useLanguage();
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
                 <h3 className="font-serif text-2xl text-white tracking-tight">{t.hero.goodEvening}<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/30">Alex.</span></h3>
               </motion.div>

               {/* Chat Bubbles */}
               <div className="flex flex-col gap-4">
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="self-end bg-white/10 backdrop-blur-md border border-white/5 text-white text-[12px] px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%]"
                  >
                    {t.hero.mockPrompt}
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
                      {t.hero.mockReply}
                    </div>
                  </motion.div>
               </div>

               {/* Bottom Input Area */}
               <div className="absolute bottom-6 left-5 right-5 h-12 bg-white/5 border border-white/10 rounded-full flex items-center px-4 backdrop-blur-md">
                 <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#8E2DE2] mr-3" />
                 <span className="text-[11px] text-white/40 font-medium font-sans">{t.hero.mockStatus}</span>
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
  const { t } = useLanguage();
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
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#00F2FE]">{t.hero.version}</span>
          </div>

          {/* Aggressive Contrast Typography */}
          <h1 className="font-serif text-5xl md:text-[5rem] lg:text-[6.5rem] leading-[0.9] tracking-tighter text-white mb-6 text-glow">
            {t.hero.titlePart1} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] via-[#8E2DE2] to-[#4FACFE]">{t.hero.titlePart2}</span><br/>
            {t.hero.titlePart3}
          </h1>
          
          <p className="font-sans text-white/60 text-base md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed font-light mb-10">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-row gap-2 md:gap-4 justify-center lg:justify-start items-center w-full">
            <StoreButton 
              store="App Store" 
              desc={t.hero.downloadOn}
              icon={<FaApple className="w-5 h-5 md:w-6 md:h-6" />} 
            />
            <StoreButton 
              store="Google Play" 
              desc={t.hero.getItOn}
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
  const { t } = useLanguage();
  return (
    <section id="features" className="py-24 px-0 md:px-6 relative z-10">
       <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 px-6 md:px-0">
             <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-4 text-glow">{t.features.title}</h2>
             <p className="font-sans text-white/50 font-light text-lg max-w-xl mx-auto">{t.features.subtitle}</p>
          </div>
          
          <div className="flex md:grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory px-[7.5vw] md:px-0 pb-4 md:pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
             <BentoCard 
               icon={Layers} 
               title={t.features.items[0].title} 
               desc={t.features.items[0].desc} 
               glow="bg-gradient-to-br from-[#00F2FE] to-[#4FACFE]"
             />
             <BentoCard 
               icon={MessageSquare} 
               title={t.features.items[1].title} 
               desc={t.features.items[1].desc} 
               glow="bg-gradient-to-tr from-[#FF9A9E] to-[#FECFEF]"
             />
             <BentoCard 
               icon={Fingerprint} 
               title={t.features.items[2].title} 
               desc={t.features.items[2].desc} 
               span={true}
               glow="bg-gradient-to-b from-[#8E2DE2] to-[#4A00E0]"
             />
          </div>
          
          <div className="flex md:hidden justify-center items-center gap-2 mt-2 text-white/40">
             <span className="text-[10px] uppercase font-bold tracking-widest">{t.features.swipe}</span>
             <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
             >
               <ArrowRight className="w-3 h-3" />
             </motion.div>
          </div>
       </div>
    </section>
  );
}

// --- Interactive Mascot Component ---
function InteractiveMascot({ className = "", glowColor = "rgba(0,242,254,0.4)", isFloating = false }: { className?: string, glowColor?: string, isFloating?: boolean }) {
  return (
    <div className={`relative z-20 flex justify-center items-center ${className}`}>
       <div className="w-full h-full flex items-center justify-center relative group/mascot">
         <div className="w-full h-full flex items-center justify-center">
           <motion.img 
             src="https://drive.google.com/thumbnail?id=1FkdeDTBIp7pNZ9x1vtMPVtQQ7BtBedXw&sz=w1000" 
             alt="GEM Mascot" 
             className="w-full h-full object-contain mix-blend-screen transition-all duration-300 origin-center"
             style={{ 
               filter: `drop-shadow(0 0 30px ${glowColor}) brightness(1.2)`
             }}
             animate={isFloating ? { y: [0, -20, 0], scale: [1, 1.05, 1] } : {}}
             transition={isFloating ? { duration: 6, repeat: Infinity, ease: "easeInOut" } : {}}
             referrerPolicy="no-referrer" 
           />
         </div>
       </div>
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
      className="flex flex-col items-center gap-2 relative z-10"
    >
       <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:bg-white/[0.1] hover:scale-110 transition-all cursor-pointer">
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white/70" />
       </div>
       <span className="font-sans text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-white/40">{title}</span>
    </motion.div>
  );
}

function TheFlow() {
  const { t } = useLanguage();
  return (
    <section id="flow" className="py-24 md:py-32 px-6 relative overflow-hidden flex flex-col items-center">
       <div className="text-center mb-16 md:mb-24 relative z-10 w-full">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6">{t.flow.title}</h2>
          <p className="font-sans text-white/50 text-base md:text-lg max-w-md mx-auto">{t.flow.subtitle}</p>
       </div>

       <div className="relative w-full max-w-5xl h-[400px] md:h-[600px] flex items-center justify-center">
          {/* Abstract background connections */}
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
             <div className="absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full border border-white/10 border-dashed animate-[spin_60s_linear_infinite]" />
             <div className="absolute w-[380px] h-[380px] md:w-[650px] md:h-[650px] rounded-full border border-white/5 animate-[spin_90s_linear_infinite_reverse]" />
          </div>
          
          {/* Orbiting Nodes */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
             <div className="absolute top-[5%] md:top-[10%] left-1/2 -translate-x-1/2 pointer-events-auto">
                <FlowNode icon={Brain} title={t.flow.nodes.neural} delay={0.1} />
             </div>
             <div className="absolute bottom-[5%] md:bottom-[10%] left-1/2 -translate-x-1/2 pointer-events-auto">
                <FlowNode icon={Activity} title={t.flow.nodes.health} delay={0.5} />
             </div>
             <div className="absolute top-1/2 -translate-y-1/2 left-[5%] md:left-[15%] pointer-events-auto">
                <FlowNode icon={Calendar} title={t.flow.nodes.schedules} delay={0.3} />
             </div>
             <div className="absolute top-1/2 -translate-y-1/2 right-[5%] md:right-[15%] pointer-events-auto">
                <FlowNode icon={Network} title={t.flow.nodes.apis} delay={0.7} />
             </div>
             <div className="absolute top-[20%] left-[15%] md:top-[25%] md:left-[25%] pointer-events-auto">
                <FlowNode icon={Layers} title={t.flow.nodes.stack} delay={0.2} />
             </div>
             <div className="absolute bottom-[20%] right-[15%] md:bottom-[25%] md:right-[25%] pointer-events-auto">
                <FlowNode icon={MessageSquare} title={t.flow.nodes.comms} delay={0.6} />
             </div>
             <div className="absolute bottom-[20%] left-[15%] md:bottom-[25%] md:left-[25%] pointer-events-auto">
                <FlowNode icon={Fingerprint} title={t.flow.nodes.security} delay={0.4} />
             </div>
             <div className="absolute top-[20%] right-[15%] md:top-[25%] md:right-[25%] pointer-events-auto">
                <FlowNode icon={Zap} title={t.flow.nodes.actions} delay={0.8} />
             </div>
          </div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-20 w-40 h-40 md:w-64 md:h-64 rounded-full flex items-center justify-center mx-auto"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-[#00F2FE] via-[#8E2DE2] to-[#FF9A9E] blur-[50px] md:blur-[100px] opacity-40 animate-[spin_10s_linear_infinite]" />
             <div className="relative w-32 h-32 md:w-56 md:h-56 flex items-center justify-center group overflow-visible">
                <InteractiveMascot className="w-48 h-48 md:w-80 md:h-80 shrink-0" glowColor="rgba(255,255,255,0.4)" isFloating />
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
  const { t } = useLanguage();
  
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
    <motion.div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onClick={() => setSynced(s => Math.min(s + 20, 100))}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full max-w-4xl h-[45vh] min-h-[300px] md:min-h-[400px] border border-white/10 rounded-[2rem] md:rounded-[3rem] bg-black/40 backdrop-blur-md overflow-hidden mb-16 cursor-crosshair group flex items-center justify-center shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] mx-auto"
    >
       <div className="absolute top-4 left-4 md:top-6 md:left-8 text-white/30 text-[10px] md:text-xs font-mono uppercase tracking-widest z-10 flex items-center gap-2 md:gap-3">
         {t.hero.syncing.replace('...', '')}: 
         <div className="w-16 md:w-24 h-1 bg-white/10 rounded-full overflow-hidden">
           <div className="h-full bg-[#00F2FE] transition-all" style={{ width: `${synced}%` }} />
         </div>
         <span className="text-[#00F2FE] font-bold">{synced}%</span>
       </div>
       <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
       
       {/* Instruction */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white/20 text-[10px] md:text-sm uppercase font-bold tracking-[0.3em] group-hover:opacity-0 transition-opacity duration-500 pointer-events-none w-full px-4">
         {t.hero.guide} <br/> {t.hero.click}
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
    </motion.div>
  );
}

// --- Testimonials ---
const testimonials = [
  { name: "Sarah K.", role: "Creative Director", text: "GEM completely collapsed my workflow from 5 apps down to 1 thought. Pure magic." },
  { name: "Julian R.", role: "Founder", text: "The first AI that actually understands context across my entire digital life." },
  { name: "Emma T.", role: "Architect", text: "It's like having a neural expansion. It anticipates what I need before I type it." }
];

function Testimonials() {
  const { t } = useLanguage();
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 relative flex flex-col items-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#8E2DE2]/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="text-center mb-16 md:mb-24 relative z-10 w-full">
         <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6">{t.testimonials.title}</h2>
         <p className="font-sans text-white/50 text-base md:text-lg max-w-md mx-auto">{t.testimonials.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full z-10 relative">
        {t.testimonials.items.map((testimonial, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-md flex flex-col gap-6 group hover:bg-white/[0.04] transition-colors"
          >
             <div className="flex gap-1 text-[#00F2FE]">
               {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
             </div>
             <p className="text-white/80 text-lg font-light leading-relaxed flex-1">"{testimonial.text}"</p>
             <div>
               <div className="text-white font-bold">{testimonial.name}</div>
               <div className="text-white/40 text-sm uppercase tracking-wider">{testimonial.role}</div>
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// --- FAQ ---
const faqs = [
  { q: "Is my data private?", a: "Absolute isolation. GEM uses differential privacy and on-device processing where possible. Your neural thread remains completely yours." },
  { q: "Does it work offline?", a: "Core functionalities are etched into the local model, meaning you maintain baseline intelligence even without a connection." },
  { q: "Which platforms are supported?", a: "GEM launches simultaneously across iOS, macOS, Windows, and Web. Deep integration is available on mobile." },
  { q: "Can I migrate from legacy AI assistants?", a: "Yes. GEM includes a one-click transition protocol that maps your historical contexts seamlessly." }
];

function FAQ() {
  const [open, setOpen] = React.useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-24 md:py-32 px-6 relative flex flex-col items-center overflow-hidden bg-gradient-to-b from-black via-[#001015] to-black">
      {/* Colorful glows */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00F2FE]/20 to-transparent"></div>
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#00F2FE]/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-60"></div>
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#4FACFE]/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-60"></div>

      <div className="text-center mb-16 md:mb-24 relative z-10 w-full">
         <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00F2FE]">{t.faq.title}</h2>
      </div>

      <div className="max-w-3xl w-full z-10 relative flex flex-col gap-4">
        {t.faq.items.map((faq, i) => {
          const isOpen = open === i;
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`border backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#00F2FE]/40 bg-gradient-to-br from-[#00F2FE]/10 to-transparent shadow-[0_0_30px_rgba(0,242,254,0.15)]' : 'border-white/10 bg-white/[0.01] hover:bg-white/[0.03] hover:border-[#00F2FE]/20'}`}
            >
              <button 
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`font-medium text-lg transition-colors duration-300 ${isOpen ? 'text-[#00F2FE]' : 'text-white'}`}>{faq.q}</span>
                {isOpen ? <Minus className="w-5 h-5 text-[#00F2FE] shrink-0" /> : <Plus className="w-5 h-5 text-white/50 shrink-0 group-hover:text-[#00F2FE]" />}
              </button>
              
              {isOpen && (
                <div className="px-6 pb-6 text-white/70 font-light leading-relaxed">
                  {faq.a}
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </section>
  );
}

// --- Final CTA ---
function FinalCTA() {
  const { t } = useLanguage();
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
            <h2 className="font-serif text-4xl md:text-7xl text-white tracking-tighter leading-[0.9] text-glow mb-2 text-center" dangerouslySetInnerHTML={{ __html: t.cta.title }}></h2>
            <p className="font-sans text-white/50 text-base md:text-lg max-w-md mx-auto text-center mb-8">{t.cta.subtitle}</p>
            
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="relative overflow-hidden bg-white text-black px-8 py-4 rounded-full font-sans font-bold text-sm tracking-widest uppercase transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)]"
             >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000" />
                {t.cta.button}
             </motion.button>
        </div>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-8 text-center border-t border-white/5 relative z-10 bg-black">
       <span className="font-sans text-[10px] uppercase tracking-widest text-white/30">
          {t.footer.text}
       </span>
    </footer>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="font-sans bg-[#000000] min-h-screen text-white selection:bg-[#00F2FE]/30">
        <ScrollProgress />
        {/* Global Noise Layer attached via index.css body applied to a fixed div */}
        <div className="fixed inset-0 bg-noise z-50 pointer-events-none mix-blend-screen opacity-40"></div>
        
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Features />
          <TheFlow />
          <Testimonials />
          <FAQ />
          <FinalCTA />
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}
