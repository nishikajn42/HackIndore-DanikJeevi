import { ArrowRight, CheckCircle2, HeartHandshake, Landmark, ShieldCheck, Users } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import TrustVisual from './components/TrustVisual'
import ImpactStats from './components/ImpactStats'
import Features from './components/Features'
import Footer from './components/Footer'

const reveal = { initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: .55 } }

function App() {
  const [dark, setDark] = useState(false)
  const appRef = useRef(null)
  const moveAmbient = event => { if (!appRef.current) return; const x = (event.clientX / window.innerWidth - .5) * 24; const y = (event.clientY / window.innerHeight - .5) * 24; appRef.current.style.setProperty('--mouse-x', `${x}px`); appRef.current.style.setProperty('--mouse-y', `${y}px`) }
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); return () => document.documentElement.classList.remove('dark') }, [dark])

  return <div ref={appRef} onPointerMove={moveAmbient} className={dark ? 'app dark' : 'app light'} id="top">
    <Navbar dark={dark} setDark={setDark} />
    <main className="page-main pt-24 lg:pt-28 pb-10">
      <section className="hero pt-20 lg:pt-22 pb-10 flex flex-col justify-center">
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="container hero-inner">
          <motion.div className="hero-copy" {...reveal}><div className="hero-badge"><span>✨</span> Restoring dignity to the hands that build Bharat.</div><h1 className="hero-headline text-slate-950 dark:text-slate-50 font-black">Dignified work,<br /><em>instant access.</em></h1><p className="hero-lede text-slate-600 dark:text-slate-300">We are replacing the uncertainty of the street-corner Labour Chowk with a promise of fair work. A voice-first ecosystem where honest labor meets direct local demand, instantly, safely, and completely free of middlemen.</p><div className="trust-row"><span><ShieldCheck size={15} /> e-Shram ready</span><span><HeartHandshake size={15} /> zero worker fees</span><span><Users size={15} /> built for Bharat</span></div></motion.div>
          <TrustVisual />
        </div>
        <div className="hero-bottom container"><span>Scroll to explore the impact</span><span className="scroll-line" /></div>
      </section>
      <section className="story-strip"><div className="container strip-grid">{[['01', 'THE GAP', 'Work exists. Information does not reach the people who need it most.', 'When opportunity is invisible, the first cost is time. The second is dignity.'], ['02', 'THE SHIFT', 'DanikJeevi turns a spoken need into a trusted local match.', 'One voice creates a bridge between a real skill and a real need.'], ['03', 'THE PROMISE', 'More choice for workers. More certainty for every employer.', 'A fairer daily rhythm where every person can move forward.']].map(([number, label, title, detail]) => <motion.article className="pillar-card" key={number} whileHover={{ scale: 1.02, y: -6 }} transition={{ type: 'spring', stiffness: 280, damping: 20 }}><span className="strip-number">{number}</span><strong>{label}</strong><p>{title}</p><span className="pillar-detail">{detail}</span></motion.article>)}</div></section>
      <section className="section problem-section" id="problem"><div className="container"><motion.div className="statement-block" {...reveal}><span className="eyebrow">The problem</span><h2 className="text-slate-900 dark:text-white">The daily wage economy is broken by an <em>information gap.</em></h2><p>We are fixing it by making opportunity discoverable, voice-accessible, and accountable.</p></motion.div><ImpactStats /></div></section>
      <Features isDark={dark} />
      <section className="section government-section" id="impact"><div className="container government-grid"><motion.div className="gov-visual" {...reveal}><div className="gov-orbit" /><div className="gov-seal"><Landmark size={30} /><span>e-Shram</span><small className="gov-uan-badge bg-white/90 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-semibold text-xs px-3 py-1.5 rounded-full shadow-md backdrop-blur-md flex items-center gap-1.5" style={{ color: dark ? '#ffffff' : '#0f172a' }}>UNIVERSAL ACCOUNT NUMBER</small></div><div className="gov-chip chip-one bg-white/90 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-semibold text-xs px-3 py-1.5 rounded-full shadow-md backdrop-blur-md flex items-center gap-1.5" style={{ color: dark ? '#ffffff' : '#0f172a' }}>PMSBY <CheckCircle2 size={14} /></div><div className="gov-chip chip-two bg-white/90 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-semibold text-xs px-3 py-1.5 rounded-full shadow-md backdrop-blur-md flex items-center gap-1.5" style={{ color: dark ? '#ffffff' : '#0f172a' }}>Pension ready <CheckCircle2 size={14} /></div></motion.div><motion.div className="section-heading" {...reveal}><span className="eyebrow">Public good, designed in</span><h2>Built for Bharat.<br /><em>Integrated with e-Shram.</em></h2><p>DanikJeevi uses the government’s e-Shram UAN for simple onboarding. Our dashboard automatically maps workers to schemes they qualify for, from PMSBY insurance to pensions.</p><div className="gov-actions"><a className="primary-button" href="https://eshram.gov.in/e-shram-portal" target="_blank" rel="noreferrer">Register on e-Shram Portal <ArrowRight size={16} /></a><a className="outline-button" href="#footer">See our impact report <ArrowRight size={16} /></a></div></motion.div></div></section>
      <section className="section final-cta bg-blue-100 dark:bg-slate-900 border-none dark:border dark:border-slate-800 rounded-3xl p-10 mt-20 relative overflow-hidden"><div className="container final-cta-inner"><div><span className="eyebrow text-amber-600 dark:text-amber-400 font-bold">A better workday starts with a voice</span><h2 className="final-cta-headline text-blue-950 dark:text-white font-black">Let’s make work<br /><em>findable.</em></h2></div><a className="primary-button" href="#top">Join the Network <ArrowRight size={17} /></a></div></section>
    </main>
    <Footer isDark={dark} />
  </div>
}

export default App