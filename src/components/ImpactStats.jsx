import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function Counter({ target, suffix = '', duration = 1300 }) {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, margin: '-100px' })
  const [value, setValue] = useState(0)
  useEffect(() => { if (!visible) return undefined; const start = performance.now(); let frame; const tick = now => { const progress = Math.min((now - start) / duration, 1); setValue(Math.round(target * (1 - Math.pow(1 - progress, 3)))); if (progress < 1) frame = requestAnimationFrame(tick) }; frame = requestAnimationFrame(tick); return () => cancelAnimationFrame(frame) }, [visible, target, duration])
  return <span ref={ref}>{value.toLocaleString()}{suffix}</span>
}

export default function ImpactStats() {
  const chartRef = useRef(null)
  const chartVisible = useInView(chartRef, { once: true, margin: '-100px' })
  return <motion.div className="data-card" ref={chartRef} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}><div className="data-top"><div><span className="eyebrow">The informal economy</span><strong><Counter target={2} suffix=" billion" /></strong><small>people worldwide</small></div><svg className="stat-chart" viewBox="0 0 160 160" role="img" aria-label="60 percent of workers are in the informal economy"><circle className="chart-track" cx="80" cy="80" r="62" /><motion.circle className="chart-progress" cx="80" cy="80" r="62" initial={{ pathLength: 0 }} animate={{ pathLength: chartVisible ? .6 : 0 }} transition={{ duration: 1.6, ease: 'easeOut' }} /><text x="80" y="77">60%</text><text className="chart-caption" x="80" y="96">of workers</text></svg></div><div className="bar-stat"><div><span>Days lost waiting for work</span><b><Counter target={30} suffix="–40%" /></b></div><motion.div className="bar-track"><motion.i initial={{ width: 0 }} animate={{ width: chartVisible ? '38%' : 0 }} transition={{ duration: 1.2, delay: .3 }} /></motion.div></div><div className="data-foot impact-legend"><span className="legend-dot blue" /> <span>60% - Total Informal Workforce</span><span className="legend-dot orange" /> <span>Highly Vulnerable &amp; Invisible Labor (e.g., domestic work)</span></div></motion.div>
}