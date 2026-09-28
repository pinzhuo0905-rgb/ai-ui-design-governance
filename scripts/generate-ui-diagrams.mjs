import fs from "node:fs";
import path from "node:path";

const EN_DIR = path.resolve(process.cwd(), "docs/images");
const ZH_DIR = path.resolve(process.cwd(), "docs/images/zh");

fs.mkdirSync(EN_DIR, { recursive: true });
fs.mkdirSync(ZH_DIR, { recursive: true });

function writeSvg(filename, enSvg, zhSvg) {
  fs.writeFileSync(path.join(EN_DIR, filename), enSvg.trim() + "\n", "utf8");
  fs.writeFileSync(path.join(ZH_DIR, filename), zhSvg.trim() + "\n", "utf8");
  console.log("Generated UI Diagram: " + filename + " (EN & ZH)");
}

// 1. UI Paradigm Shift
const shiftEn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <defs>
    <linearGradient id="badGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#991b1b" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="goodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#047857" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="aiSlopHeader" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#b91c1c"/>
    </linearGradient>
    <linearGradient id="govHeader" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
  </defs>

  <text x="500" y="42" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">AI UI DESIGN PARADIGM SHIFT</text>
  <text x="500" y="68" text-anchor="middle" fill="#94a3b8" font-size="13">From Unconstrained "AI Slop" to Governed Engineering Precision</text>

  <!-- Left: AI Slop -->
  <rect x="40" y="95" width="440" height="395" rx="8" fill="url(#badGrad)" stroke="#ef4444" stroke-width="1.5"/>
  <rect x="55" y="110" width="410" height="34" rx="6" fill="url(#aiSlopHeader)"/>
  <text x="260" y="132" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">❌ UNCONSTRAINED AI GENERATION (AI SLOP)</text>

  <g transform="translate(65, 170)" font-size="12" fill="#fca5a5">
    <text y="0">⚠️ Defaulting to generic internet-average cliches</text>
    <text y="28">• Cliche purple/blue gradients &amp; gradient text headings</text>
    <text y="56">• Glowing neon borders (box-shadow: 0 0 20px #8b5cf6)</text>
    <text y="84">• "Card Soup": Card inside card inside card</text>
    <text y="112">• Pill buttons (rounded-full) for every standard action</text>
    <text y="140">• 64px+ gratuitous empty whitespace in productivity tools</text>
    <text y="168">• Fake vanity KPI metric tiles with arbitrary sparklines</text>
    <text y="196">• Massive 80px marketing banners inside internal consoles</text>
    <text y="224">• Component library default demo feel (zero calibration)</text>
    <text y="252">• Only designs the Ideal State; fails on errors or loading</text>
    <text y="280">• Trusting JSX code without checking real browser render</text>
  </g>

  <!-- Right: Governed UI -->
  <rect x="520" y="95" width="440" height="395" rx="8" fill="url(#goodGrad)" stroke="#10b981" stroke-width="1.5"/>
  <rect x="535" y="110" width="410" height="34" rx="6" fill="url(#govHeader)"/>
  <text x="740" y="132" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">✔ GOVERNED AI DESIGN SYSTEM</text>

  <g transform="translate(545, 170)" font-size="12" fill="#a7f3d0">
    <text y="0">🛡️ Explicit Product Context &amp; Clinical Precision Archetype</text>
    <text y="28">• Monochrome dark slate base (#090d16) with 1px borders</text>
    <text y="56">• Strict 4px/8px spatial scale (4, 8, 12, 16, 20, 24, 32px)</text>
    <text y="84">• Disciplined corner radiuses (sm: 4px, md: 6px, lg: 8px)</text>
    <text y="112">• High information density: tables &amp; structured data lists</text>
    <text y="140">• Typography hierarchy defines grouping before containers</text>
    <text y="168">• Single calibrated accent color (#0284c7) for primary CTAs</text>
    <text y="196">• Mandatory 10 Product States (Loading, Empty, Error, Overflow...)</text>
    <text y="224">• Automated Anti-Slop Linter checks before commit</text>
    <text y="252">• Headless browser captures multi-viewport screenshot evidence</text>
    <text y="280">• WCAG 2.1 AA accessible contrast &amp; full keyboard navigation</text>
  </g>
</svg>`;

const shiftZh = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'PingFang SC','Microsoft YaHei',sans-serif;">
  <defs>
    <linearGradient id="badGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#991b1b" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="goodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#047857" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="aiSlopHeader" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#b91c1c"/>
    </linearGradient>
    <linearGradient id="govHeader" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
  </defs>

  <text x="500" y="42" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">AI 前端界面设计范式迁移</text>
  <text x="500" y="68" text-anchor="middle" fill="#94a3b8" font-size="13">从无约束的“AI 塑料味套版”全面转向工程化严谨设计系统</text>

  <!-- Left: AI Slop -->
  <rect x="40" y="95" width="440" height="395" rx="8" fill="url(#badGrad)" stroke="#ef4444" stroke-width="1.5"/>
  <rect x="55" y="110" width="410" height="34" rx="6" fill="url(#aiSlopHeader)"/>
  <text x="260" y="132" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">❌ 无约束 AI 随机构建 (AI 塑料味 / SLOP)</text>

  <g transform="translate(65, 170)" font-size="12" fill="#fca5a5">
    <text y="0">⚠️ 缺乏上下文，模型本能收敛到互联网设计平均值</text>
    <text y="28">• 泛滥的紫蓝渐变背景与渐变文字标题</text>
    <text y="56">• 悬浮带色荧光投影 (box-shadow: 0 0 20px #8b5cf6)</text>
    <text y="84">• 卡片套娃 (Card Soup)：大卡片内部套中卡片套小卡片</text>
    <text y="112">• 无论普通表格还是表单，全员无脑胶囊按钮 (rounded-full)</text>
    <text y="140">• 生产力工具内充斥 64px+ 无意义大空白，信息密度极低</text>
    <text y="168">• 虚假的 KPI 统计卡片与毫无实际意义的伪造折线图</text>
    <text y="196">• 管理后台硬塞 80px 营销 Hero 横幅，混淆展示与工具</text>
    <text y="224">• 直接堆砌未经校准的组件库默认尺寸，Demo 感强烈</text>
    <text y="252">• 只做数据刚刚好的“理想画面”，遇加载、空数据和错误即崩</text>
    <text y="280">• 只看 JSX/CSS 代码是否通过编译，不看真实浏览器渲染</text>
  </g>

  <!-- Right: Governed UI -->
  <rect x="520" y="95" width="440" height="395" rx="8" fill="url(#goodGrad)" stroke="#10b981" stroke-width="1.5"/>
  <rect x="535" y="110" width="410" height="34" rx="6" fill="url(#govHeader)"/>
  <text x="740" y="132" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">✔ 工程化 AI 设计治理体系 (GOVERNED UI)</text>

  <g transform="translate(545, 170)" font-size="12" fill="#a7f3d0">
    <text y="0">🛡️ 明确产品上下文与“临床严谨型”高密度设计人格</text>
    <text y="28">• 纯黑石板底色 (#090d16) 与 1px 细边框划分空间结构</text>
    <text y="56">• 严格 4px 空间步进 (4, 8, 12, 16, 20, 24, 32px)，消灭魔法值</text>
    <text y="84">• 克制圆角上限 (小控件: 4px, 默认: 6px, 模态框: 8px)</text>
    <text y="112">• 面向数据高密度：优先采用紧凑表格与结构化键值流</text>
    <text y="140">• 字体梯级与粗细先于背景框，先建立文本层级再画容器</text>
    <text y="168">• 单点青蓝强调色 (#0284c7) 专用于核心主操作，克制不花哨</text>
    <text y="196">• 强制涵盖 10 种关键状态 (骨架屏、空数据、异常失败、溢出等)</text>
    <text y="224">• 自动化去 AI 味静态检查器在提交前机器级拦截违规</text>
    <text y="252">• 本地无头浏览器抓取桌面、平板与移动端实机高清截图存证</text>
    <text y="280">• 严格达标 WCAG 2.1 AA 级对比度与全键盘 Tab 焦点可达</text>
  </g>
</svg>`;

writeSvg("ui-governance-paradigm-shift.svg", shiftEn, shiftZh);

// 2. Anti-Slop Hierarchy
const antiSlopEn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 540" width="1000" height="540" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <text x="500" y="42" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">THE 6-LAYER ANTI-SLOP GOVERNANCE STACK</text>
  <text x="500" y="68" text-anchor="middle" fill="#94a3b8" font-size="13">Preventing Aesthetic Collapse to Generic Internet Averages</text>

  <!-- Layer 1 -->
  <rect x="120" y="100" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="100" width="180" height="55" rx="6" fill="#0284c7"/>
  <text x="210" y="133" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">1. PRODUCT CONTEXT</text>
  <text x="320" y="125" fill="#f8fafc" font-size="13" font-weight="600">PRODUCT_CONTEXT.md</text>
  <text x="320" y="143" fill="#94a3b8" font-size="11">Answers who uses the tool, daily session length, high-frequency tasks, and information density target.</text>

  <!-- Layer 2 -->
  <rect x="120" y="165" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="165" width="180" height="55" rx="6" fill="#0369a1"/>
  <text x="210" y="198" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">2. DESIGN DNA</text>
  <text x="320" y="190" fill="#f8fafc" font-size="13" font-weight="600">DESIGN_DNA.md &amp; Archetypes</text>
  <text x="320" y="208" fill="#94a3b8" font-size="11">Selects Clinical Precision over generic clean; locks visual register, typography, and depth hierarchy.</text>

  <!-- Layer 3 -->
  <rect x="120" y="230" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="230" width="180" height="55" rx="6" fill="#075985"/>
  <text x="210" y="263" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">3. NEGATIVE RULES</text>
  <text x="320" y="255" fill="#f8fafc" font-size="13" font-weight="600">UI_RULES.md (Negative Constraints)</text>
  <text x="320" y="273" fill="#94a3b8" font-size="11">Bans purple/blue gradients, glow shadows, nested card soup, pill buttons, and gratuitous whitespace.</text>

  <!-- Layer 4 -->
  <rect x="120" y="295" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="295" width="180" height="55" rx="6" fill="#0f766e"/>
  <text x="210" y="328" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">4. MACHINE TOKENS</text>
  <text x="320" y="320" fill="#f8fafc" font-size="13" font-weight="600">design-tokens.json</text>
  <text x="320" y="338" fill="#94a3b8" font-size="11">Deterministic mathematical scales: 4px spatial rhythm, 6px default radius, zero arbitrary CSS units.</text>

  <!-- Layer 5 -->
  <rect x="120" y="360" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="360" width="180" height="55" rx="6" fill="#047857"/>
  <text x="210" y="393" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">5. SCREEN SPECS</text>
  <text x="320" y="385" fill="#f8fafc" font-size="13" font-weight="600">design/screens/*.md (10 States)</text>
  <text x="320" y="403" fill="#94a3b8" font-size="11">Mandatory specification of Default, Loading, Empty, Error, Disabled, Overflow, and Extreme data states.</text>

  <!-- Layer 6 -->
  <rect x="120" y="425" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="425" width="180" height="55" rx="6" fill="#10b981"/>
  <text x="210" y="458" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">6. BROWSER EVIDENCE</text>
  <text x="320" y="450" fill="#f8fafc" font-size="13" font-weight="600">Multi-Viewport Screenshots &amp; UI Linter</text>
  <text x="320" y="468" fill="#94a3b8" font-size="11">Never trust source code alone. Headless browser captures Desktop, Tablet, and Mobile visual evidence.</text>
</svg>`;

const antiSlopZh = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 540" width="1000" height="540" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'PingFang SC','Microsoft YaHei',sans-serif;">
  <text x="500" y="42" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">六层去 AI 塑料味 (ANTI-SLOP) 治理架构栈</text>
  <text x="500" y="68" text-anchor="middle" fill="#94a3b8" font-size="13">杜绝 AI 在缺少约束时无脑收敛至互联网平均高级感与通用模版</text>

  <!-- Layer 1 -->
  <rect x="120" y="100" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="100" width="180" height="55" rx="6" fill="#0284c7"/>
  <text x="210" y="133" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">1. 产品上下文</text>
  <text x="320" y="125" fill="#f8fafc" font-size="13" font-weight="600">PRODUCT_CONTEXT.md</text>
  <text x="320" y="143" fill="#94a3b8" font-size="11">明确用户群体、使用频次、专业深度、高频核心任务与目标信息密度（中高密度）。</text>

  <!-- Layer 2 -->
  <rect x="120" y="165" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="165" width="180" height="55" rx="6" fill="#0369a1"/>
  <text x="210" y="198" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">2. 设计人格 DNA</text>
  <text x="320" y="190" fill="#f8fafc" font-size="13" font-weight="600">DESIGN_DNA.md 与原型系统</text>
  <text x="320" y="208" fill="#94a3b8" font-size="11">选定“临床严谨型”工程原型；锁定排版梯级、单强调色克制策略与 1px 细边框空间关系。</text>

  <!-- Layer 3 -->
  <rect x="120" y="230" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="230" width="180" height="55" rx="6" fill="#075985"/>
  <text x="210" y="263" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">3. 负向硬约束</text>
  <text x="320" y="255" fill="#f8fafc" font-size="13" font-weight="600">UI_RULES.md (去 AI 味负向守则)</text>
  <text x="320" y="273" fill="#94a3b8" font-size="11">绝对禁用紫蓝渐变、发光阴影、多层卡片套娃、胶囊按钮泛滥以及工具界面中的营销空白。</text>

  <!-- Layer 4 -->
  <rect x="120" y="295" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="295" width="180" height="55" rx="6" fill="#0f766e"/>
  <text x="210" y="328" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">4. 机器 Design Token</text>
  <text x="320" y="320" fill="#f8fafc" font-size="13" font-weight="600">design-tokens.json</text>
  <text x="320" y="338" fill="#94a3b8" font-size="11">机器可读的严格设计基准：4px/8px 空间韵律、默认 6px 圆角，消灭任意魔法数值。</text>

  <!-- Layer 5 -->
  <rect x="120" y="360" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="360" width="180" height="55" rx="6" fill="#047857"/>
  <text x="210" y="393" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">5. 页面完整状态规格</text>
  <text x="320" y="385" fill="#f8fafc" font-size="13" font-weight="600">design/screens/*.md (10 种状态)</text>
  <text x="320" y="403" fill="#94a3b8" font-size="11">强制规范默认、骨架屏加载、空数据、异常失败、禁用、溢出与海量数据集等 10 种状态。</text>

  <!-- Layer 6 -->
  <rect x="120" y="425" width="760" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="425" width="180" height="55" rx="6" fill="#10b981"/>
  <text x="210" y="458" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">6. 真实浏览器渲染存证</text>
  <text x="320" y="450" fill="#f8fafc" font-size="13" font-weight="600">多视口实机截图与 UI 静态检查器</text>
  <text x="320" y="468" fill="#94a3b8" font-size="11">不轻信代码与编译通过；通过无头浏览器自动抓取桌面、平板与移动端真实渲染截图。</text>
</svg>`;

writeSvg("anti-slop-hierarchy.svg", antiSlopEn, antiSlopZh);

// 3. Evidence-Based Design Loop
const evidenceLoopEn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <text x="500" y="45" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">EVIDENCE-BASED VISUAL REPAIR LOOP</text>
  <text x="500" y="72" text-anchor="middle" fill="#94a3b8" font-size="13">Continuous Headless Browser Verification &amp; Autonomous Agent Remediation</text>

  <!-- Step 1: Spec -->
  <rect x="40" y="110" width="160" height="90" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="120" y="145" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">1. SPEC FIRST</text>
  <text x="120" y="168" text-anchor="middle" fill="#94a3b8" font-size="11">Read Tokens &amp; Spec</text>

  <!-- Arrow -->
  <path d="M 200 155 L 230 155" stroke="#38bdf8" stroke-width="2"/>

  <!-- Step 2: Implement -->
  <rect x="230" y="110" width="160" height="90" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="310" y="145" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">2. CODE UI</text>
  <text x="310" y="168" text-anchor="middle" fill="#94a3b8" font-size="11">HTML/CSS/Components</text>

  <!-- Arrow -->
  <path d="M 390 155 L 420 155" stroke="#38bdf8" stroke-width="2"/>

  <!-- Step 3: Browser Render -->
  <rect x="420" y="110" width="160" height="90" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
  <text x="500" y="145" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">3. BROWSER RENDER</text>
  <text x="500" y="168" text-anchor="middle" fill="#94a3b8" font-size="11">Headless Chrome / Edge</text>

  <!-- Arrow -->
  <path d="M 580 155 L 610 155" stroke="#38bdf8" stroke-width="2"/>

  <!-- Step 4: Screenshot Evidence -->
  <rect x="610" y="110" width="160" height="90" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="690" y="145" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">4. SCREENSHOTS</text>
  <text x="690" y="168" text-anchor="middle" fill="#94a3b8" font-size="11">Desktop, Tablet, Mobile</text>

  <!-- Arrow -->
  <path d="M 770 155 L 800 155" stroke="#38bdf8" stroke-width="2"/>

  <!-- Step 5: Multi-Dim Review -->
  <rect x="800" y="110" width="160" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="880" y="145" text-anchor="middle" fill="#f59e0b" font-size="13" font-weight="700">5. UI REVIEW</text>
  <text x="880" y="168" text-anchor="middle" fill="#94a3b8" font-size="11">Anti-Slop &amp; A11y Audit</text>

  <!-- Fork: Fail vs Pass -->
  <path d="M 880 200 L 880 290" stroke="#ef4444" stroke-width="2"/>
  <rect x="790" y="290" width="180" height="60" rx="6" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="1.5"/>
  <text x="880" y="316" text-anchor="middle" fill="#ef4444" font-size="13" font-weight="700">FAIL DETECTED</text>
  <text x="880" y="336" text-anchor="middle" fill="#fca5a5" font-size="11">Slop / Contrast / Missing State</text>

  <!-- Repair Loop arrow back to step 2 -->
  <path d="M 790 320 L 310 320 L 310 200" stroke="#ef4444" stroke-width="2" stroke-dasharray="4"/>
  <text x="550" y="312" text-anchor="middle" fill="#fca5a5" font-size="12" font-weight="600">Autonomous Agent Repair &amp; Code Refactoring</text>

  <!-- Pass branch -->
  <path d="M 880 200 L 880 240 L 500 240 L 500 390" stroke="#10b981" stroke-width="2"/>
  <rect x="350" y="390" width="300" height="65" rx="8" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
  <text x="500" y="418" text-anchor="middle" fill="#10b981" font-size="15" font-weight="700">✔ VISUAL GATE PASSED</text>
  <text x="500" y="438" text-anchor="middle" fill="#f8fafc" font-size="12">100% Rules, Tokens &amp; Responsive Verified</text>
</svg>`;

const evidenceLoopZh = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'PingFang SC','Microsoft YaHei',sans-serif;">
  <text x="500" y="45" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">基于客观渲染存证的视觉自修复循环</text>
  <text x="500" y="72" text-anchor="middle" fill="#94a3b8" font-size="13">无头浏览器实时渲染存证与 AI Agent 闭环自主修复</text>

  <!-- Step 1: Spec -->
  <rect x="40" y="110" width="160" height="90" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="120" y="145" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">1. 规范先行</text>
  <text x="120" y="168" text-anchor="middle" fill="#94a3b8" font-size="11">读取设计 Token 与 Spec</text>

  <!-- Arrow -->
  <path d="M 200 155 L 230 155" stroke="#38bdf8" stroke-width="2"/>

  <!-- Step 2: Implement -->
  <rect x="230" y="110" width="160" height="90" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="310" y="145" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">2. 编写界面代码</text>
  <text x="310" y="168" text-anchor="middle" fill="#94a3b8" font-size="11">HTML / CSS / 组件实现</text>

  <!-- Arrow -->
  <path d="M 390 155 L 420 155" stroke="#38bdf8" stroke-width="2"/>

  <!-- Step 3: Browser Render -->
  <rect x="420" y="110" width="160" height="90" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
  <text x="500" y="145" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">3. 浏览器实际渲染</text>
  <text x="500" y="168" text-anchor="middle" fill="#94a3b8" font-size="11">调用无头 Chrome / Edge</text>

  <!-- Arrow -->
  <path d="M 580 155 L 610 155" stroke="#38bdf8" stroke-width="2"/>

  <!-- Step 4: Screenshot Evidence -->
  <rect x="610" y="110" width="160" height="90" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="690" y="145" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">4. 抓取多端截图</text>
  <text x="690" y="168" text-anchor="middle" fill="#94a3b8" font-size="11">桌面 / 平板 / 移动端</text>

  <!-- Arrow -->
  <path d="M 770 155 L 800 155" stroke="#38bdf8" stroke-width="2"/>

  <!-- Step 5: Multi-Dim Review -->
  <rect x="800" y="110" width="160" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="880" y="145" text-anchor="middle" fill="#f59e0b" font-size="13" font-weight="700">5. 视觉与规范审查</text>
  <text x="880" y="168" text-anchor="middle" fill="#94a3b8" font-size="11">去 AI 味与无障碍审查</text>

  <!-- Fork: Fail vs Pass -->
  <path d="M 880 200 L 880 290" stroke="#ef4444" stroke-width="2"/>
  <rect x="790" y="290" width="180" height="60" rx="6" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="1.5"/>
  <text x="880" y="316" text-anchor="middle" fill="#ef4444" font-size="13" font-weight="700">发现缺陷 (FAIL)</text>
  <text x="880" y="336" text-anchor="middle" fill="#fca5a5" font-size="11">AI味 / 对比度不足 / 缺少状态</text>

  <!-- Repair Loop arrow back to step 2 -->
  <path d="M 790 320 L 310 320 L 310 200" stroke="#ef4444" stroke-width="2" stroke-dasharray="4"/>
  <text x="550" y="312" text-anchor="middle" fill="#fca5a5" font-size="12" font-weight="600">AI Agent 自主定位根因并重构修复代码</text>

  <!-- Pass branch -->
  <path d="M 880 200 L 880 240 L 500 240 L 500 390" stroke="#10b981" stroke-width="2"/>
  <rect x="350" y="390" width="300" height="65" rx="8" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
  <text x="500" y="418" text-anchor="middle" fill="#10b981" font-size="15" font-weight="700">✔ 视觉门禁验证通过</text>
  <text x="500" y="438" text-anchor="middle" fill="#f8fafc" font-size="12">100% 规则、Token 与响应式真实符合标准</text>
</svg>`;

writeSvg("evidence-based-design-loop.svg", evidenceLoopEn, evidenceLoopZh);

// 4. 10-State Screen Lifecycle
const tenStateEn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <text x="500" y="45" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">THE 10 MANDATORY PRODUCT UI STATES</text>
  <text x="500" y="72" text-anchor="middle" fill="#94a3b8" font-size="13">Moving Beyond Idealized AI Showcase Demos to Complete Production Software</text>

  <!-- Row 1 -->
  <!-- 1. Default -->
  <rect x="40" y="110" width="170" height="170" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="140" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">1. DEFAULT</text>
  <text x="125" y="165" text-anchor="middle" fill="#cbd5e1" font-size="11">Standard idle state.</text>
  <text x="125" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">Active records loaded,</text>
  <text x="125" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">controls interactive,</text>
  <text x="125" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">baseline layout.</text>

  <!-- 2. Loading -->
  <rect x="230" y="110" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="315" y="140" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">2. LOADING</text>
  <text x="315" y="165" text-anchor="middle" fill="#cbd5e1" font-size="11">Skeleton pulse loader.</text>
  <text x="315" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">Preserves dimensions,</text>
  <text x="315" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">zero layout shift (CLS),</text>
  <text x="315" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">no center spinner.</text>

  <!-- 3. Empty -->
  <rect x="420" y="110" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="505" y="140" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">3. EMPTY</text>
  <text x="505" y="165" text-anchor="middle" fill="#cbd5e1" font-size="11">Zero records found.</text>
  <text x="505" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">Monochrome icon,</text>
  <text x="505" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">clear explanation,</text>
  <text x="505" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">primary creation CTA.</text>

  <!-- 4. Error -->
  <rect x="610" y="110" width="170" height="170" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
  <text x="695" y="140" text-anchor="middle" fill="#ef4444" font-size="13" font-weight="700">4. ERROR</text>
  <text x="695" y="165" text-anchor="middle" fill="#cbd5e1" font-size="11">Network / API failure.</text>
  <text x="695" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">Specific failure reason,</text>
  <text x="695" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">in-place red banner,</text>
  <text x="695" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">retry remediation action.</text>

  <!-- 5. Success -->
  <rect x="800" y="110" width="170" height="170" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="885" y="140" text-anchor="middle" fill="#10b981" font-size="13" font-weight="700">5. SUCCESS</text>
  <text x="885" y="165" text-anchor="middle" fill="#cbd5e1" font-size="11">Action completed.</text>
  <text x="885" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">Subtle green feedback,</text>
  <text x="885" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">transient toast notice,</text>
  <text x="885" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">updated data display.</text>

  <!-- Row 2 -->
  <!-- 6. Disabled -->
  <rect x="40" y="310" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5" opacity="0.6"/>
  <text x="125" y="340" text-anchor="middle" fill="#94a3b8" font-size="13" font-weight="700">6. DISABLED</text>
  <text x="125" y="365" text-anchor="middle" fill="#cbd5e1" font-size="11">Non-interactive state.</text>
  <text x="125" y="385" text-anchor="middle" fill="#64748b" font-size="10">Reduced opacity (0.45),</text>
  <text x="125" y="400" text-anchor="middle" fill="#64748b" font-size="10">not-allowed cursor,</text>
  <text x="125" y="415" text-anchor="middle" fill="#64748b" font-size="10">explanatory tooltip.</text>

  <!-- 7. Unauthorized -->
  <rect x="230" y="310" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="315" y="340" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">7. UNAUTHORIZED</text>
  <text x="315" y="365" text-anchor="middle" fill="#cbd5e1" font-size="11">RBAC permission gate.</text>
  <text x="315" y="385" text-anchor="middle" fill="#94a3b8" font-size="10">Locked controls,</text>
  <text x="315" y="400" text-anchor="middle" fill="#94a3b8" font-size="10">read-only indicators,</text>
  <text x="315" y="415" text-anchor="middle" fill="#94a3b8" font-size="10">request access link.</text>

  <!-- 8. Offline -->
  <rect x="420" y="310" width="170" height="170" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="505" y="340" text-anchor="middle" fill="#f59e0b" font-size="13" font-weight="700">8. OFFLINE</text>
  <text x="505" y="365" text-anchor="middle" fill="#cbd5e1" font-size="11">Disconnected mode.</text>
  <text x="505" y="385" text-anchor="middle" fill="#94a3b8" font-size="10">Cached data banner,</text>
  <text x="505" y="400" text-anchor="middle" fill="#94a3b8" font-size="10">amber status pill,</text>
  <text x="505" y="415" text-anchor="middle" fill="#94a3b8" font-size="10">background queueing.</text>

  <!-- 9. Overflow -->
  <rect x="610" y="310" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="695" y="340" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">9. OVERFLOW</text>
  <text x="695" y="365" text-anchor="middle" fill="#cbd5e1" font-size="11">Extreme length strings.</text>
  <text x="695" y="385" text-anchor="middle" fill="#94a3b8" font-size="10">Ellipsis truncation,</text>
  <text x="695" y="400" text-anchor="middle" fill="#94a3b8" font-size="10">horizontal table scroll,</text>
  <text x="695" y="415" text-anchor="middle" fill="#94a3b8" font-size="10">zero layout breakage.</text>

  <!-- 10. Large Dataset -->
  <rect x="800" y="310" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="885" y="340" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">10. LARGE DATASET</text>
  <text x="885" y="365" text-anchor="middle" fill="#cbd5e1" font-size="11">1,000+ records.</text>
  <text x="885" y="385" text-anchor="middle" fill="#94a3b8" font-size="10">Virtual scrolling / paging,</text>
  <text x="885" y="400" text-anchor="middle" fill="#94a3b8" font-size="10">sticky table headers,</text>
  <text x="885" y="415" text-anchor="middle" fill="#94a3b8" font-size="10">instant filter search.</text>
</svg>`;

const tenStateZh = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'PingFang SC','Microsoft YaHei',sans-serif;">
  <text x="500" y="45" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">软件产品 UI 必须覆盖的 10 种关键状态</text>
  <text x="500" y="72" text-anchor="middle" fill="#94a3b8" font-size="13">摆脱 AI 只做“理想演示画面”的缺陷，全面覆盖真实工业级交互生命周期</text>

  <!-- Row 1 -->
  <!-- 1. Default -->
  <rect x="40" y="110" width="170" height="170" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="140" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">1. 默认常态 (Default)</text>
  <text x="125" y="165" text-anchor="middle" fill="#cbd5e1" font-size="11">标准就绪数据视图。</text>
  <text x="125" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">真实业务记录展示，</text>
  <text x="125" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">所有控件正常响应，</text>
  <text x="125" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">基准布局比例。</text>

  <!-- 2. Loading -->
  <rect x="230" y="110" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="315" y="140" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">2. 加载中 (Loading)</text>
  <text x="315" y="165" text-anchor="middle" fill="#cbd5e1" font-size="11">就地骨架屏占位。</text>
  <text x="315" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">严格保持目标尺寸，</text>
  <text x="315" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">零布局抖动 (CLS)，</text>
  <text x="315" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">严禁全屏菊花旋转。</text>

  <!-- 3. Empty -->
  <rect x="420" y="110" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="505" y="140" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">3. 空数据 (Empty)</text>
  <text x="505" y="165" text-anchor="middle" fill="#cbd5e1" font-size="11">零记录或筛选无结果。</text>
  <text x="505" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">单色几何图形图标，</text>
  <text x="505" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">清晰原因解释文案，</text>
  <text x="505" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">引导创建主操作按钮。</text>

  <!-- 4. Error -->
  <rect x="610" y="110" width="170" height="170" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
  <text x="695" y="140" text-anchor="middle" fill="#ef4444" font-size="13" font-weight="700">4. 异常失败 (Error)</text>
  <text x="695" y="165" text-anchor="middle" fill="#cbd5e1" font-size="11">网络中断或接口报错。</text>
  <text x="695" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">提供明确失败诊断，</text>
  <text x="695" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">就地红色警示横幅，</text>
  <text x="695" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">包含重试补救操作。</text>

  <!-- 5. Success -->
  <rect x="800" y="110" width="170" height="170" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="885" y="140" text-anchor="middle" fill="#10b981" font-size="13" font-weight="700">5. 成功反馈 (Success)</text>
  <text x="885" y="165" text-anchor="middle" fill="#cbd5e1" font-size="11">变更执行完毕。</text>
  <text x="885" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">克制绿色高对比指示，</text>
  <text x="885" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">瞬态吐司消息通知，</text>
  <text x="885" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">视图实时就地更新。</text>

  <!-- Row 2 -->
  <!-- 6. Disabled -->
  <rect x="40" y="310" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5" opacity="0.6"/>
  <text x="125" y="340" text-anchor="middle" fill="#94a3b8" font-size="13" font-weight="700">6. 禁用态 (Disabled)</text>
  <text x="125" y="365" text-anchor="middle" fill="#cbd5e1" font-size="11">条件不满足无法交互。</text>
  <text x="125" y="385" text-anchor="middle" fill="#64748b" font-size="10">透明度压低至 0.45，</text>
  <text x="125" y="400" text-anchor="middle" fill="#64748b" font-size="10">禁止点击光标样式，</text>
  <text x="125" y="415" text-anchor="middle" fill="#64748b" font-size="10">可选原因气泡提示。</text>

  <!-- 7. Unauthorized -->
  <rect x="230" y="310" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="315" y="340" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">7. 无权限 (No Auth)</text>
  <text x="315" y="365" text-anchor="middle" fill="#cbd5e1" font-size="11">RBAC 角色权限限制。</text>
  <text x="315" y="385" text-anchor="middle" fill="#94a3b8" font-size="10">敏感操作加锁锁定，</text>
  <text x="315" y="400" text-anchor="middle" fill="#94a3b8" font-size="10">只读视图与标识，</text>
  <text x="315" y="415" text-anchor="middle" fill="#94a3b8" font-size="10">权限申请直达通道。</text>

  <!-- 8. Offline -->
  <rect x="420" y="310" width="170" height="170" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="505" y="340" text-anchor="middle" fill="#f59e0b" font-size="13" font-weight="700">8. 离线态 (Offline)</text>
  <text x="505" y="365" text-anchor="middle" fill="#cbd5e1" font-size="11">本地脱机断网工作。</text>
  <text x="505" y="385" text-anchor="middle" fill="#94a3b8" font-size="10">缓存数据标识横幅，</text>
  <text x="505" y="400" text-anchor="middle" fill="#94a3b8" font-size="10">黄色警告徽章提示，</text>
  <text x="505" y="415" text-anchor="middle" fill="#94a3b8" font-size="10">操作进入排队等待。</text>

  <!-- 9. Overflow -->
  <rect x="610" y="310" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="695" y="340" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">9. 内容溢出 (Overflow)</text>
  <text x="695" y="365" text-anchor="middle" fill="#cbd5e1" font-size="11">极长字符串与大数字。</text>
  <text x="695" y="385" text-anchor="middle" fill="#94a3b8" font-size="10">文本安全省略号截断，</text>
  <text x="695" y="400" text-anchor="middle" fill="#94a3b8" font-size="10">表格支持横向独立滚动，</text>
  <text x="695" y="415" text-anchor="middle" fill="#94a3b8" font-size="10">绝对不撑破页面容器。</text>

  <!-- 10. Large Dataset -->
  <rect x="800" y="310" width="170" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="885" y="340" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">10. 海量数据 (Scale)</text>
  <text x="885" y="365" text-anchor="middle" fill="#cbd5e1" font-size="11">上千行记录数据流。</text>
  <text x="885" y="385" text-anchor="middle" fill="#94a3b8" font-size="10">虚拟滚动或紧凑分页，</text>
  <text x="885" y="400" text-anchor="middle" fill="#94a3b8" font-size="10">表头吸顶固定锁定，</text>
  <text x="885" y="415" text-anchor="middle" fill="#94a3b8" font-size="10">毫秒级快速就地过滤。</text>
</svg>`;

writeSvg("ten-state-screen-lifecycle.svg", tenStateEn, tenStateZh);

// 5. Component System Governance Architecture
const compEn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <text x="500" y="42" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">COMPONENT SYSTEM &amp; TOKEN GOVERNANCE</text>
  <text x="500" y="68" text-anchor="middle" fill="#94a3b8" font-size="13">Structured Machine-Readable Assets Binding Tokens to Component Contracts</text>

  <!-- Left Box: Design Tokens (Source of Truth) -->
  <rect x="40" y="105" width="270" height="375" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
  <rect x="40" y="105" width="270" height="36" rx="8" fill="#0284c7"/>
  <text x="175" y="128" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">design-tokens.json</text>

  <g transform="translate(60, 165)" font-size="11" fill="#cbd5e1">
    <text y="0" fill="#38bdf8" font-weight="600">Spatial Scale (4px Rhythm):</text>
    <text y="20">1: 4px | 2: 8px | 3: 12px | 4: 16px</text>
    <text y="40">5: 20px | 6: 24px | 8: 32px</text>
    
    <text y="75" fill="#38bdf8" font-weight="600">Corner Radius Ceiling:</text>
    <text y="95">none: 0px | sm: 4px</text>
    <text y="115">md: 6px (Default Controls)</text>
    <text y="135">lg: 8px (Dialogs Max Ceiling)</text>

    <text y="170" fill="#38bdf8" font-weight="600">Monochrome Slate Palette:</text>
    <text y="190">canvas: #090d16 | surface: #0f172a</text>
    <text y="210">border: #334155 | accent: #0284c7</text>

    <text y="245" fill="#38bdf8" font-weight="600">Control Heights:</text>
    <text y="265">sm: 28px | md: 34px | lg: 40px</text>
  </g>

  <!-- Arrow -->
  <path d="M 310 292 L 355 292" stroke="#0284c7" stroke-width="2"/>

  <!-- Center Box: Standardized Components -->
  <rect x="360" y="105" width="280" height="375" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="360" y="105" width="280" height="36" rx="8" fill="#1e293b"/>
  <text x="500" y="128" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">COMPONENTS.md (Contracts)</text>

  <g transform="translate(380, 165)" font-size="11" fill="#cbd5e1">
    <text y="0" font-weight="600">• &lt;Button /&gt; (primary, secondary, danger)</text>
    <text y="24" font-weight="600">• &lt;Input /&gt; (text, search, password, prefix)</text>
    <text y="48" font-weight="600">• &lt;Select /&gt; (dropdown single/multi)</text>
    <text y="72" font-weight="600">• &lt;Table /&gt; (36px high density rows)</text>
    <text y="96" font-weight="600">• &lt;Badge /&gt; (status indicator tags)</text>
    <text y="120" font-weight="600">• &lt;Dialog /&gt; (accessible modal overlay)</text>
    <text y="144" font-weight="600">• &lt;EmptyState /&gt; (monochrome icon + CTA)</text>
    <text y="168" font-weight="600">• &lt;LoadingSkeleton /&gt; (zero CLS pulse)</text>
    <text y="192" font-weight="600">• &lt;Toast /&gt; (transient status alert)</text>
    <text y="216" fill="#10b981" font-weight="600">ZERO Inline Magic Overrides Allowed</text>
    <text y="240" fill="#94a3b8">Every variant binds strictly to Tokens.</text>
  </g>

  <!-- Arrow -->
  <path d="M 640 292 L 685 292" stroke="#10b981" stroke-width="2"/>

  <!-- Right Box: Screen Assembly & Audit -->
  <rect x="690" y="105" width="270" height="375" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <rect x="690" y="105" width="270" height="36" rx="8" fill="#047857"/>
  <text x="825" y="128" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">screens/*.md &amp; Verification</text>

  <g transform="translate(710, 165)" font-size="11" fill="#cbd5e1">
    <text y="0" fill="#a7f3d0" font-weight="600">Target Production Screens:</text>
    <text y="22">• dashboard.md (Governance Console)</text>
    <text y="44">• login.md (Enterprise Auth)</text>
    <text y="66">• settings.md (Threshold Config)</text>
    <text y="88">• api-keys.md (Token Vault)</text>

    <text y="130" fill="#a7f3d0" font-weight="600">Automated Linter Verification:</text>
    <text y="152">• npm run ui:tokens (Token Audit)</text>
    <text y="174">• npm run ui:lint (Anti-Slop Check)</text>
    <text y="196">• npm run ui:screenshot (Viewports)</text>

    <text y="240" fill="#10b981" font-weight="700">100% Quality Gate Enforcement</text>
    <text y="260" fill="#94a3b8">PR blocks on any uncalibrated slop.</text>
  </g>
</svg>`;

const compZh = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="1000" height="520" style="background:#090d16; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'PingFang SC','Microsoft YaHei',sans-serif;">
  <text x="500" y="42" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="700">组件系统工程化与设计 TOKEN 治理拓扑</text>
  <text x="500" y="68" text-anchor="middle" fill="#94a3b8" font-size="13">将设计 Token 绑定至组件契约，并在页面装配与门禁中自动强制执行</text>

  <!-- Left Box: Design Tokens (Source of Truth) -->
  <rect x="40" y="105" width="270" height="375" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
  <rect x="40" y="105" width="270" height="36" rx="8" fill="#0284c7"/>
  <text x="175" y="128" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">设计 Token (单一事实基准)</text>

  <g transform="translate(60, 165)" font-size="11" fill="#cbd5e1">
    <text y="0" fill="#38bdf8" font-weight="600">4px 空间步进标准韵律:</text>
    <text y="20">1: 4px | 2: 8px | 3: 12px | 4: 16px</text>
    <text y="40">5: 20px | 6: 24px | 8: 32px</text>
    
    <text y="75" fill="#38bdf8" font-weight="600">圆角梯度严格上限:</text>
    <text y="95">none: 0px | sm: 4px</text>
    <text y="115">md: 6px (默认交互控件)</text>
    <text y="135">lg: 8px (模态框顶层上限)</text>

    <text y="170" fill="#38bdf8" font-weight="600">单色石板暗黑底色体系:</text>
    <text y="190">底色: #090d16 | 面板: #0f172a</text>
    <text y="210">细边框: #334155 | 强调色: #0284c7</text>

    <text y="245" fill="#38bdf8" font-weight="600">标准控件紧凑高度:</text>
    <text y="265">sm: 28px | md: 34px | lg: 40px</text>
  </g>

  <!-- Arrow -->
  <path d="M 310 292 L 355 292" stroke="#0284c7" stroke-width="2"/>

  <!-- Center Box: Standardized Components -->
  <rect x="360" y="105" width="280" height="375" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="360" y="105" width="280" height="36" rx="8" fill="#1e293b"/>
  <text x="500" y="128" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">COMPONENTS.md (标准化组件)</text>

  <g transform="translate(380, 165)" font-size="11" fill="#cbd5e1">
    <text y="0" font-weight="600">• &lt;Button /&gt; (主操作、次操作、危险操作)</text>
    <text y="24" font-weight="600">• &lt;Input /&gt; (文本、搜索、前置图标插槽)</text>
    <text y="48" font-weight="600">• &lt;Select /&gt; (单选、多选下拉选择器)</text>
    <text y="72" font-weight="600">• &lt;Table /&gt; (36px 高密度数据表格)</text>
    <text y="96" font-weight="600">• &lt;Badge /&gt; (语义化状态徽章)</text>
    <text y="120" font-weight="600">• &lt;Dialog /&gt; (带遮罩的居中确认对话框)</text>
    <text y="144" font-weight="600">• &lt;EmptyState /&gt; (单色几何图标 + 引导)</text>
    <text y="168" font-weight="600">• &lt;LoadingSkeleton /&gt; (等比骨架屏)</text>
    <text y="192" font-weight="600">• &lt;Toast /&gt; (瞬态操作成功与警告吐司)</text>
    <text y="216" fill="#10b981" font-weight="600">严禁任意行内魔法数值重写</text>
    <text y="240" fill="#94a3b8">所有变体严格绑定 Design Token 规范。</text>
  </g>

  <!-- Arrow -->
  <path d="M 640 292 L 685 292" stroke="#10b981" stroke-width="2"/>

  <!-- Right Box: Screen Assembly & Audit -->
  <rect x="690" y="105" width="270" height="375" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <rect x="690" y="105" width="270" height="36" rx="8" fill="#047857"/>
  <text x="825" y="128" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">页面装配与自动化门禁验证</text>

  <g transform="translate(710, 165)" font-size="11" fill="#cbd5e1">
    <text y="0" fill="#a7f3d0" font-weight="600">工业级核心页面规格:</text>
    <text y="22">• dashboard.md (治理控制台)</text>
    <text y="44">• login.md (企业统一鉴权与 SSO)</text>
    <text y="66">• settings.md (策略与阈值配置)</text>
    <text y="88">• api-keys.md (智能体密钥保管库)</text>

    <text y="130" fill="#a7f3d0" font-weight="600">门禁自动化静态与动态审查:</text>
    <text y="152">• npm run ui:tokens (Token 规范校验)</text>
    <text y="174">• npm run ui:lint (去 AI 塑料味审查)</text>
    <text y="196">• npm run ui:screenshot (多视口截屏)</text>

    <text y="240" fill="#10b981" font-weight="700">100% 双引擎质量门禁通过</text>
    <text y="260" fill="#94a3b8">任何未标定塑料味均自动阻断 PR 合入。</text>
  </g>
</svg>`;

writeSvg("component-system-governance.svg", compEn, compZh);
console.log("All 5 dedicated UI diagrams generated successfully!");
