import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Lock,
  Activity,
  Bell,
  Link as LinkIcon,
  Image as ImageIcon,
  Brain,
  CheckCircle2,
  Clock,
  Globe,
} from 'lucide-react'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
      {children}
    </span>
  )
}

function StatCard({ icon: Icon, value, label }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm">
      <div className="rounded-lg bg-emerald-50 p-3 text-emerald-600">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xl font-semibold text-slate-800">{value}</div>
        <div className="text-sm text-slate-500">{label}</div>
      </div>
    </div>
  )
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 inline-flex rounded-lg bg-slate-50 p-3 text-emerald-600">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-slate-800">{title}</h3>
      <p className="text-sm leading-6 text-slate-600">{desc}</p>
    </div>
  )
}

export default function App() {
  const container = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
  }
  const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold leading-tight text-slate-900">MisinformationGuardian</p>
              <p className="text-xs text-slate-500">Privacy-first, on-device detection</p>
            </div>
          </div>
          <nav className="flex items-center gap-2">
            <a href="#features" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900">Features</a>
            <a href="#how" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900">How it works</a>
            <a href="#privacy" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900">Privacy</a>
            <a href="/test" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">View Demo</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        {/* subtle gradient glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-100/40 via-transparent to-transparent"></div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:gap-14 lg:py-20 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge>
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                On-device • Offline
              </Badge>
              <Badge>
                <Clock className="h-4 w-4" />
                <span>{"<500ms analysis"}</span>
              </Badge>
              <Badge>
                <Globe className="h-4 w-4" />
                India-ready
              </Badge>
            </div>
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Your always-on guardian against scams and misinformation
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              A transparent floating assistant that analyzes WhatsApp and SMS in real time — detecting fake news, phishing, medical myths, political propaganda, and even hidden data inside images. Private by design, blazing fast, and built for demos.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="/test" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-700">
                Try Live Check
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50">
                Explore Features
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <StatCard icon={CheckCircle2} value="~95%" label="Medical detection" />
              <StatCard icon={CheckCircle2} value="~98%" label="Financial scams" />
              <StatCard icon={Clock} value="<500ms" label="Avg. analysis" />
              <StatCard icon={ShieldCheck} value="100%" label="Trusted sources" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-emerald-300/10 via-transparent to-transparent" />
              <div className="h-[420px] md:h-[520px]">
                <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Seven layers of protection</h2>
            <p className="mt-3 text-slate-600">From high-severity patterns to subtle structural cues — all evaluated instantly on your device.</p>
          </div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div variants={item}><Feature icon={Activity} title="High-severity patterns" desc="Flags miracle cures, conspiracy narratives, and other red‑flag claims." /></motion.div>
            <motion.div variants={item}><Feature icon={ThermoIcon} title="Medical misinformation" desc="Detects unverified treatments, false cures, and harmful advice." /></motion.div>
            <motion.div variants={item}><Feature icon={Bell} title="Financial & phishing" desc="Catches urgency tactics, lottery scams, and suspicious payment requests." /></motion.div>
            <motion.div variants={item}><Feature icon={MegaphoneIcon} title="Political propaganda" desc="Recognizes election misinformation and manipulative narratives." /></motion.div>
            <motion.div variants={item}><Feature icon={LinkIcon} title="Link verification" desc="Cross‑checks against 40+ trusted sources like BBC, Reuters, WHO." /></motion.div>
            <motion.div variants={item}><Feature icon={Brain} title="Medium‑severity cues" desc="Detects clickbait, shocking claims, and exaggerated language patterns." /></motion.div>
            <motion.div variants={item}><Feature icon={ImageIcon} title="Steganography" desc="LSB entropy analysis to spot hidden data inside forwarded images." /></motion.div>
            <motion.div variants={item}><Feature icon={ShieldCheck} title="Structural analysis" desc="Caps ratio, excessive punctuation, and suspicious forwarding behavior." /></motion.div>
            <motion.div variants={item}><Feature icon={Lock} title="Privacy‑first" desc="No internet needed. Nothing leaves your phone. Local history only." /></motion.div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative border-t border-slate-200/70 bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">How it works</h2>
            <p className="mt-3 text-slate-600">Optimized Kotlin + coroutines pipeline with a floating overlay UI.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { step: '01', title: 'Notification capture', desc: 'Listener intercepts WhatsApp/SMS notifications securely.' },
              { step: '02', title: 'Parallel analyzers', desc: 'Seven detection layers execute concurrently under one service.' },
              { step: '03', title: 'Transparent verdict', desc: 'Floating icon shows status; tap for evidence and guidance.' },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-semibold text-emerald-700">{s.step}</div>
                <div className="mt-2 text-lg font-semibold text-slate-900">{s.title}</div>
                <div className="mt-1 text-sm text-slate-600">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="relative py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Private by design</h2>
              <p className="mt-3 text-slate-600">Processing happens entirely on-device. Messages are analyzed and discarded immediately. Only alert summaries are kept locally for your history.</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" /> 100% offline — airplane‑mode friendly</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" /> Local Room database for alerts only</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" /> No data leaves your device</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatCard icon={ShieldCheck} value="Overlay" label="Floating control" />
              <StatCard icon={Lock} value="On‑device" label="No servers" />
              <StatCard icon={Activity} value="MVVM" label="Kotlin + Room" />
              <StatCard icon={Bell} value="Realtime" label="<500ms verdict" />
            </div>
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="relative border-t border-slate-200/70 bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Tech stack</h2>
            <p className="mt-3 text-slate-600">Kotlin • Android 12+ • MVVM • Room • Coroutines • Material 3 • RecyclerView • KSP • Gradle 8.4</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Feature icon={ShieldCheck} title="Overlay UI" desc="Transparent, draggable, and always on top for instant context." />
            <Feature icon={Brain} title="Heuristic engine" desc="Deterministic rules with clear evidence and rationale per alert." />
            <Feature icon={LinkIcon} title="Sources" desc="Cross‑references 40+ Indian/Global fact‑checkers and agencies." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-600 to-emerald-500 p-8 text-white md:flex-row">
            <div>
              <h3 className="text-2xl font-semibold">Ready for your demo?</h3>
              <p className="mt-1 text-emerald-50">Launch the live check tool to verify backend connectivity and database status.</p>
            </div>
            <a href="/test" className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow hover:bg-emerald-50">Open Live Check</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200/70 bg-white py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} MisinformationGuardian. Built for hackathons.</p>
          <div className="flex items-center gap-2 text-slate-500">
            <Lock className="h-4 w-4" />
            <span className="text-sm">Privacy‑first</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Icons not present in lucide-react default export list we used above
function ThermoIcon(props) {
  // Reuse Activity icon as a placeholder with different color; ensures safe import
  return <Activity {...props} />
}
function MegaphoneIcon(props) {
  // Reuse Bell icon as a placeholder to avoid rare icon import issues
  return <Bell {...props} />
}
