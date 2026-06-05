import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

const NAV = [
  { to: '/',         icon: '🏠', label: 'Accueil' },
  { to: '/taches',   icon: '⏱',  label: 'Tâches' },
  { to: '/finances', icon: '💰', label: 'Finances' },
  { to: '/more',     icon: '📋', label: 'Plus' },
]

export default function Layout({ session }) {
  const navigate = useNavigate()

  async function logout() {
    await supabase.auth.signOut()
    navigate('/login')
  }

  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100dvh', background:'var(--bg)' }}>
      {/* Top bar */}
      <div style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'14px 18px 10px', borderBottom:'1px solid var(--border)',
        flexShrink:0, background:'var(--bg)'
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <div style={{
            width:34, height:34, borderRadius:10, background:'var(--accent)',
            display:'flex', alignItems:'center', justifyContent:'center', fontSize:17
          }}>📊</div>
          <div>
            <div style={{ fontSize:15, fontWeight:600, letterSpacing:'-.3px' }}>MonEntreprise</div>
            <div style={{ fontSize:11, color:'var(--text2)' }}>{session.user.email}</div>
          </div>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <div style={{
            display:'flex', alignItems:'center', gap:5,
            background:'var(--accent-dim)', padding:'4px 10px', borderRadius:20,
            fontSize:11, color:'var(--accent2)'
          }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'var(--accent2)', animation:'pulse 2s infinite', display:'inline-block' }}></span>
            En direct
          </div>
          <button onClick={logout} style={{
            background:'var(--bg3)', border:'1px solid var(--border)',
            borderRadius:8, padding:'5px 10px', color:'var(--text2)',
            fontSize:12, cursor:'pointer'
          }}>Déconnexion</button>
        </div>
      </div>

      {/* Page content */}
      <div style={{ flex:1, overflowY:'auto', padding:'14px 16px 90px' }}>
        <Outlet />
      </div>

      {/* Bottom nav */}
      <nav style={{
        position:'fixed', bottom:0, left:0, right:0,
        background:'rgba(15,17,23,.94)', backdropFilter:'blur(16px)',
        borderTop:'1px solid var(--border)', zIndex:100,
        paddingBottom:'env(safe-area-inset-bottom, 0px)'
      }}>
        <div style={{ display:'flex', justifyContent:'space-around', padding:'6px 0 2px' }}>
          {NAV.map(n => (
            <NavLink key={n.to} to={n.to} end={n.to==='/'} style={({ isActive }) => ({
              display:'flex', flexDirection:'column', alignItems:'center', gap:3,
              padding:'6px 16px', borderRadius:12, textDecoration:'none',
              color: isActive ? 'var(--accent2)' : 'var(--text3)',
              fontSize:10, fontWeight:500, transition:'color .15s'
            })}>
              <span style={{ fontSize:20 }}>{n.icon}</span>
              {n.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
