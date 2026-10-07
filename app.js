:root {
  --bg: #07111f;
  --bg-elevated: rgba(12, 19, 31, 0.82);
  --panel: rgba(15, 24, 39, 0.92);
  --panel-soft: rgba(20, 30, 45, 0.9);
  --line: rgba(148, 163, 184, 0.2);
  --text: #e5edf9;
  --muted: #9bb0c8;
  --blue: #7dd3fc;
  --blue-strong: #38bdf8;
  --green: #4ade80;
  --green-soft: rgba(74, 222, 128, 0.12);
  --red: #f87171;
  --red-soft: rgba(248, 113, 113, 0.12);
  --purple: #a78bfa;
  --shadow: 0 25px 60px rgba(2, 6, 23, 0.42);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(56, 189, 248, 0.12), transparent 30%),
    radial-gradient(circle at bottom right, rgba(167, 139, 250, 0.12), transparent 25%),
    var(--bg);
  color: var(--text);
  position: relative;
  overflow-x: hidden;
}

button,
textarea {
  font: inherit;
}

.bg-glow {
  position: fixed;
  width: 500px;
  height: 500px;
  border-radius: 999px;
  filter: blur(80px);
  pointer-events: none;
  opacity: 0.5;
}

.glow-one {
  top: -120px;
  left: -80px;
  background: rgba(56, 189, 248, 0.18);
}

.glow-two {
  right: -120px;
  bottom: -60px;
  background: rgba(167, 139, 250, 0.18);
}

.topbar {
  width: min(1200px, calc(100% - 32px));
  margin: 24px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 22px;
  border: 1px solid var(--line);
  background: rgba(9, 15, 25, 0.58);
  border-radius: 18px;
  backdrop-filter: blur(18px);
  box-shadow: var(--shadow);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--blue), var(--purple));
  display: grid;
  place-items: center;
  font-weight: 800;
  color: #061423;
}

.eyebrow {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--muted);
}

.brand-name {
  font-weight: 700;
  font-size: 1.15rem;
}

.topbar-tag {
  padding: 9px 14px;
  border-radius: 999px;
  border: 1px solid rgba(125, 211, 252, 0.3);
  background: rgba(56, 189, 248, 0.08);
  color: var(--blue);
  font-size: 0.8rem;
  font-weight: 700;
}

.page-shell {
  width: min(1200px, calc(100% - 32px));
  margin: 32px auto 64px;
}

.hero {
  display: grid;
  grid-template-columns: 1.7fr 0.8fr;
  align-items: center;
  gap: 22px;
  margin-bottom: 26px;
}

.hero-copy {
  padding: 12px 6px;
}

.tagline {
  margin: 0 0 12px;
  color: var(--blue);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.4rem, 4.5vw, 4.4rem);
  line-height: 1.05;
  letter-spacing: -0.06em;
}

.subtitle {
  margin-top: 18px;
  max-width: 650px;
  color: var(--muted);
  line-height: 1.7;
  font-size: 1rem;
}

.hero-card {
  min-height: 220px;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.95), rgba(12, 19, 31, 0.9));
  border: 1px solid rgba(125, 211, 252, 0.25);
  border-radius: 24px;
  padding: 24px 26px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.12), transparent 55%);
}

.hero-card > * {
  position: relative;
  z-index: 1;
}

.hero-card-label {
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.75rem;
}

.hero-card-title {
  margin-top: 18px;
  font-size: clamp(1.7rem, 3vw, 2.45rem);
  font-weight: 800;
  letter-spacing: -0.05em;
}

.hero-card-meta {
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: 0.9rem;
}

.divider {
  color: var(--blue);
  font-weight: 700;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 22px;
}

.panel {
  background: rgba(8, 13, 22, 0.75);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 22px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(10px);
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.panel-kicker {
  margin: 0 0 8px;
  color: var(--muted);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.panel h2 {
  margin: 0;
  font-size: clamp(1.5rem, 2vw, 2rem);
  letter-spacing: -0.04em;
}

.badge {
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.badge.red {
  background: var(--red-soft);
  color: #ffc1c1;
}

.badge.green {
  background: var(--green-soft);
  color: #b8f1c8;
}

.menu-stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 18px;
}

.legacy-btn {
  appearance: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(15, 24, 39, 0.85);
  border: 1px solid rgba(148, 163, 184, 0.2);
  color: var(--text);
  border-radius: 14px;
  padding: 16px 18px;
  cursor: pointer;
  transition: 180ms ease;
  font-weight: 600;
}

.legacy-btn:hover,
.legacy-btn.active {
  border-color: rgba(125, 211, 252, 0.7);
  background: rgba(56, 189, 248, 0.08);
  transform: translateY(-1px);
}

.arrow {
  color: var(--blue);
  font-size: 1.2rem;
}

.legacy-output {
  margin-top: 20px;
  background: rgba(16, 20, 30, 0.92);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px 16px;
}

.mini-label {
  color: var(--muted);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.selection-text {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.04em;
  margin-bottom: 8px;
}

.legacy-output p,
.output-card p,
.result-box p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.prompt-box {
  background: rgba(17, 22, 31, 0.88);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 16px;
}

.prompt-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.prompt-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 58px;
  height: 26px;
  background: rgba(125, 211, 252, 0.12);
  color: var(--blue);
  border: 1px solid rgba(125, 211, 252, 0.25);
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
}

.prompt-hint {
  color: var(--muted);
  font-size: 0.78rem;
}

#agentInput {
  width: 100%;
  resize: vertical;
  min-height: 110px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(11, 16, 25, 0.9);
  color: var(--text);
  border-radius: 14px;
  padding: 16px 16px;
  line-height: 1.6;
  margin-bottom: 14px;
}

.sample-prompts {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.sample-btn {
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(18, 27, 39, 0.9);
  color: var(--text);
  border-radius: 999px;
  padding: 8px 12px;
  cursor: pointer;
}

.primary-btn {
  appearance: none;
  border: none;
  border-radius: 12px;
  padding: 14px 18px;
  background: linear-gradient(135deg, var(--blue), var(--purple));
  color: #081521;
  font-weight: 800;
  cursor: pointer;
  width: 100%;
  transition: transform 180ms ease;
}

.primary-btn:hover {
  transform: translateY(-1px);
}

.agent-workflow {
  margin-top: 20px;
}

.workflow-list {
  display: grid;
  gap: 10px;
}

.workflow-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(17, 22, 31, 0.8);
  border: 1px solid var(--line);
}

.workflow-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(148, 163, 184, 0.8);
  box-shadow: 0 0 0 6px rgba(148, 163, 184, 0.08);
}

.workflow-item.active .workflow-dot {
  background: var(--blue);
  box-shadow: 0 0 0 6px rgba(56, 189, 248, 0.12);
}

.workflow-item.complete .workflow-dot {
  background: var(--green);
  box-shadow: 0 0 0 6px rgba(74, 222, 128, 0.1);
}

.workflow-copy {
  flex: 1;
}

.workflow-title {
  display: block;
  font-weight: 700;
}

.workflow-meta {
  display: block;
  margin-top: 2px;
  color: var(--muted);
  font-size: 0.78rem;
}

.output-card {
  margin-top: 20px;
}

.result-box {
  border-radius: 18px;
  border: 1px solid rgba(125, 211, 252, 0.25);
  background: linear-gradient(180deg, rgba(12, 21, 34, 0.95), rgba(9, 14, 23, 0.95));
  padding: 18px 18px 16px;
}

.result-header {
  font-size: 0.72rem;
  color: var(--blue);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 10px !important;
}

.result-box h3 {
  margin: 0 0 12px;
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  letter-spacing: -0.04em;
}

.result-box p {
  color: #dce8f6;
}

@media (max-width: 920px) {
  .hero,
  .comparison-grid {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
