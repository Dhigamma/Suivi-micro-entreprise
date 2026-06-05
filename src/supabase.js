* { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0f1117;
  --bg2: #181c26;
  --bg3: #1e2435;
  --bg4: #252b3d;
  --accent: #1D9E75;
  --accent2: #13d98a;
  --accent-dim: rgba(29,158,117,.15);
  --red: #e05555;
  --red-dim: rgba(224,85,85,.15);
  --orange: #e8a23a;
  --orange-dim: rgba(232,162,58,.15);
  --blue: #4a90e2;
  --blue-dim: rgba(74,144,226,.15);
  --text: #f0f2f8;
  --text2: #8b91a8;
  --text3: #555e7a;
  --border: rgba(255,255,255,.07);
  --radius: 14px;
  --radius-sm: 9px;
}

html, body, #root {
  height: 100%;
  background: var(--bg);
  color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
}

/* Scrollbar */
::-webkit-scrollbar { width: 4px; height: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--bg4); border-radius: 4px; }

/* Animations */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
.anim { animation: fadeUp .3s ease both; }

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .3; }
}
