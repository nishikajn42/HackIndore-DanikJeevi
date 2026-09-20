import { AnimatePresence, motion } from 'framer-motion'
import { BadgeCheck, MapPin, ShieldCheck, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

const workers = [
  { initials: 'RK', name: 'Rakesh Kumar', role: 'Painter', area: 'Vijay Nagar', score: '4.9', id: 'DJ-2048', tone: 'blue' },
  { initials: 'SP', name: 'Sunita Patel', role: 'Domestic Help', area: 'Palasia', score: '4.8', id: 'DJ-1192', tone: 'orange' },
  { initials: 'AM', name: 'Amit Mishra', role: 'Mason', area: 'Rau', score: '4.9', id: 'DJ-3117', tone: 'green' },
]

export default function TrustVisual() {
  const [active, setActive] = useState(0)
  useEffect(() => { const timer = window.setInterval(() => setActive(current => (current + 1) % workers.length), 3400); return () => window.clearInterval(timer) }, [])
  const worker = workers[active]
  return <motion.div className="trust-visual" initial={{ opacity: 0, scale: .9, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 80, damping: 17, delay: .15 }}>
    <motion.div className="connection-orbit" animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }} />
    <motion.div className="location-ping" animate={{ y: [0, -10, 0], boxShadow: ['0 0 0 0 rgba(245,158,11,.35)', '0 0 0 16px rgba(245,158,11,0)', '0 0 0 0 rgba(245,158,11,0)'] }} transition={{ duration: 2.6, repeat: Infinity }}><MapPin size={24} /></motion.div>
    <div className="dashboard-label"><span className="caption-dot" /> LIVE AI DASHBOARD <small>03,842 verified nearby</small></div>
    <div className="worker-stack"><div className="stack-card stack-back-two" /><div className="stack-card stack-back-one" /><AnimatePresence mode="wait"><motion.div className={`worker-id ${worker.tone}`} key={worker.id} initial={{ opacity: 0, y: 25, rotate: 5 }} animate={{ opacity: 1, y: 0, rotate: -4 }} exit={{ opacity: 0, y: -25, rotate: -8 }} transition={{ type: 'spring', stiffness: 180, damping: 20 }} whileHover={{ y: -8, rotate: -2 }}><div className="id-top"><span className="id-label"><Sparkles size={12} /> VERIFIED WORKER ID</span><BadgeCheck size={22} /></div><div className="avatar">{worker.initials}</div><div className="id-info"><strong className="text-slate-900 dark:text-white">{worker.name}</strong><span>{worker.role} · {worker.area}</span></div><div className="id-bottom"><span><ShieldCheck size={13} /> Trust score <b>{worker.score}</b></span><span>{worker.id}</span></div></motion.div></AnimatePresence></div>
    <div className="dashboard-dots">{workers.map((item, index) => <button key={item.id} className={index === active ? 'active' : ''} onClick={() => setActive(index)} aria-label={`Show ${item.name}`} />)}</div><div className="trust-caption"><span className="caption-dot" /> Identity that travels with the worker</div>
  </motion.div>
}