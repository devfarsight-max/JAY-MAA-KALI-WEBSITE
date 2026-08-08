import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Button from '../common/Button'

const links = [['/', 'Home'], ['/about', 'About'], ['/bottles', 'Bottles'], ['/process', 'Process'], ['/contact', 'Contact']]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll) }, [])
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'border-b hairline bg-[#06100b]/90 backdrop-blur-xl' : 'bg-transparent'}`}>
    <div className="content-width flex h-[76px] items-center justify-between">
      <Link to="/" className="display flex items-center gap-2 text-lg font-bold tracking-tight"><span className="h-2.5 w-2.5 bg-[#86efac]" /> JAY MAA KALI</Link>
      <nav className="hidden items-center gap-2 md:flex">{links.map(([to, label]) => <DesktopNavLink key={to} to={to} label={label} />)}<Button to="/contact" className="ml-3 px-4 py-2 text-xs">Get a quote</Button></nav>
      <button aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)} className="text-white md:hidden">{open ? <X /> : <Menu />}</button>
    </div>
    <AnimatePresence>{open && <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="border-t hairline bg-[#0d1812] px-5 py-5 md:hidden"><div className="flex flex-col gap-2">{links.map(([to, label]) => <MobileNavLink onClick={() => setOpen(false)} key={to} to={to} label={label} />)}<Button to="/contact" className="mt-3">Get a quote</Button></div></motion.nav>}</AnimatePresence>
  </header>
}

function DesktopNavLink({ to, label }) {
  return <NavLink to={to} className={({ isActive }) => `group relative flex items-center gap-2 px-3 py-2 eyebrow text-[10px] transition-all duration-300 ${isActive ? 'bg-[#86efac]/10 text-[#86efac]' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}>{({ isActive }) => <><span className={`h-1.5 w-1.5 transition-all duration-300 ${isActive ? 'scale-100 bg-[#86efac] opacity-100' : 'scale-0 opacity-0'}`} aria-hidden="true" /><span className="relative z-10">{label}</span><span className={`absolute inset-x-3 -bottom-px h-px origin-left bg-[#86efac] transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} /></>}</NavLink>
}

function MobileNavLink({ to, label, onClick }) {
  return <NavLink onClick={onClick} to={to} className={({ isActive }) => `flex items-center gap-3 border-l-2 px-3 py-2 eyebrow text-xs transition-colors ${isActive ? 'border-[#86efac] bg-[#86efac]/10 text-[#86efac]' : 'border-transparent text-slate-300 hover:text-white'}`}>{({ isActive }) => <><span className={`h-1.5 w-1.5 ${isActive ? 'bg-[#86efac]' : 'bg-slate-600'}`} aria-hidden="true" />{label}</>}</NavLink>
}