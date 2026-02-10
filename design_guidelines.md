# Design Guidelines: Cadastraqui - CEBAS Management Platform (B2B SaaS)

## Design Approach

**Selected Framework: Enterprise SaaS with Compliance Focus**
Drawing inspiration from Stripe's authoritative clarity, Linear's refined professionalism, and Salesforce's institutional trust. This B2B platform balances technical sophistication with approachability, positioning Cadastraqui as the definitive compliance solution for Brazilian educational institutions.

**Core Principles:**
- Authority through clarity: Complex compliance made comprehensible
- Trust-first design: Security, audit trails, and legal credibility prominent
- Efficiency signals: Automation and time-saving visualized throughout
- Decision-maker focused: C-suite and compliance officer perspective

---

## Typography System

**Font Stack:**
- Primary: Inter (Google Fonts) - headings, UI, data tables
- Accent: Sora (Google Fonts) - large numbers, stats, feature highlights

**Type Scale:**
- Hero headline: text-5xl md:text-6xl lg:text-7xl - font-bold tracking-tight
- Section headers: text-3xl md:text-4xl - font-bold
- Feature titles: text-xl md:text-2xl - font-semibold
- Body text: text-base md:text-lg - leading-relaxed
- Data labels: text-sm - font-medium uppercase tracking-wide
- Legal/compliance text: text-sm - leading-relaxed

---

## Layout & Spacing System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24

**Vertical Rhythm:**
- Section padding: py-20 md:py-32
- Component spacing: space-y-8 md:space-y-12
- Card gaps: gap-8 md:gap-12

**Container Strategy:**
- Full-width sections: w-full with max-w-7xl mx-auto px-6 md:px-8
- Content sections: max-w-6xl
- Feature descriptions: max-w-4xl
- Forms/CTAs: max-w-2xl

---

## Component Library

### Navigation Header (sticky, backdrop-blur-lg)
**Enterprise navigation (h-20):**
- Logo left with "Cadastraqui" wordmark
- Nav items: Recursos, Compliance, Casos de Uso, Segurança, Preços
- Right section: "Falar com Vendas" (ghost button) + "Demonstração Gratuita" (primary CTA)
- Mobile: Professional slide-over menu

### Hero Section (py-24 md:py-32)
**Split layout with background treatment:**
- Left content (60% width):
  - Overline badge: "Plataforma Líder em Compliance CEBAS"
  - Headline: "Automatize Gestão CEBAS e Garanta Conformidade Legal"
  - Subheadline: Value proposition emphasizing automation, compliance (Lei 12.101/2009), and audit-ready documentation
  - CTA cluster: "Agendar Demonstração" (primary) + "Ver Plataforma" (secondary with backdrop-blur-md)
  - Trust bar: Logos of partner institutions, compliance certifications (LGPD seal)
- Right: Hero illustration/screenshot showing platform dashboard with compliance metrics

### Social Proof Banner (py-12, background treatment)
**Stats bar - four columns:**
- Stat boxes with large numbers (text-4xl font-bold in Sora)
- Metrics: "500+ Instituições", "98% Aprovação em Auditorias", "2M+ Candidatos Gerenciados", "100% Conformidade LGPD"
- Each with icon and supporting label below

### Core Features Section (py-24)
**Three-column feature grid:**
Each feature card (p-8, rounded-2xl, border):
- Icon/illustration top
- Feature title (font-bold text-xl)
- 3-4 bullet points with checkmarks
- Features: "Seleção Automatizada", "Gestão de Bolsistas", "Compliance & Auditoria"
- Each card links to detail page

### Compliance Guarantee Section (py-24, prominent background)
**Two-column layout:**
- Left: Large heading "Conformidade Garantida com Legislação CEBAS"
  - Checklist of compliance points with badge icons
  - Items: Lei 12.101/2009, Portaria 15/2017, LGPD compliance, Audit trails, MEC integration
- Right: Visual representation (compliance dashboard screenshot or flowchart)
- Bottom: "Documentação Legal Completa" CTA

### Platform Capabilities Section (py-24)
**Tab-based interface showcase (desktop) / Accordion (mobile):**
Tabs: Seleção de Candidatos | Gestão de Bolsistas | Relatórios | Conformidade
Each tab content:
- Left: Screenshot of platform feature with annotations
- Right: Feature details, benefits list, technical specs
- Specific capabilities highlighted: Multi-campus support, Role-based access, Real-time dashboards

### Security & LGPD Section (py-20)
**Badge grid with center alignment:**
- Heading: "Segurança e Privacidade de Dados"
- Three-column badges: "Criptografia End-to-End", "Conformidade LGPD", "Backup Automático", "Auditoria Completa", "ISO 27001", "Hosting Brasil"
- Each badge: Icon + title + brief description
- Bottom: Link to security documentation

### Customer Success Stories (py-24)
**Two-column case study cards:**
Each card (p-8, rounded-2xl):
- Institution logo top
- Quote from decision-maker
- Results metrics (cards within card): "70% redução tempo", "Zero não-conformidades", "500 bolsistas gerenciados"
- Name, title, institution type

### Pricing Section (py-24)
**Three-tier comparison:**
- Cards: Básico, Profissional, Enterprise
- Each tier (p-8, rounded-2xl): 
  - Tier name + badge
  - Large price display (Sora font)
  - "Por instituição/mês" subtext
  - Feature list with checkmarks
  - CTA button
- Enterprise: Custom pricing with "Falar com Vendas"

### Integration Partners (py-16)
**Logo carousel/grid:**
- Heading: "Integração com Sistemas Educacionais"
- Grid of partner system logos (MEC, accounting software, student management systems)
- "Ver Todas Integrações" link

### ROI Calculator Section (py-24, background treatment)
**Interactive calculator widget:**
- Left: Input fields (number of students, current process time, staff hours)
- Right: Dynamic calculation display showing time saved, cost reduction
- Prominent results in large numbers
- "Agendar Conversa Sobre ROI" CTA

### FAQ Section (py-20)
**Single column (max-w-4xl):**
- Accordion items focused on: Implementation, compliance questions, technical requirements, data migration, support
- 8-10 enterprise-focused questions

### Final CTA Section (py-24, strong background treatment)
**Centered content:**
- Headline: "Pronto Para Transformar Sua Gestão CEBAS?"
- Supporting text about implementation support
- CTA cluster: "Demonstração Gratuita" + "Baixar Guia Compliance"
- Trust elements: "Implementação em 30 dias" + "Suporte dedicado"

### Footer (py-16)
**Five-column layout:**
- Column 1: Logo + compliance badges (LGPD seal, security certifications)
- Column 2: Produto (Recursos, Preços, Integrações, Segurança)
- Column 3: Recursos (Blog, Casos de Uso, Documentação, API)
- Column 4: Empresa (Sobre, Contato, Carreiras, Imprensa)
- Column 5: Contato (Phone, Email, WhatsApp Business, Endereço)
- Bottom: Legal links + copyright + institutional partnerships

### Form Components
**Demo Request Form:**
- Clean, professional layout (max-w-xl)
- Fields: Nome, Email, Telefone, Instituição, Cargo, Tipo de Instituição (dropdown), Número de alunos (range)
- LGPD consent checkbox
- Primary submit button
- "Resposta em 24h úteis" assurance text

### Interactive Elements
**Primary Buttons:** h-12 md:h-14, px-8, rounded-lg, font-semibold, shadow-sm
**Secondary Buttons:** Same sizing, border variant
**Cards:** rounded-2xl, border, p-8, subtle shadow, no hover animation
**Badges:** rounded-full px-4 py-2, text-sm font-medium
**Data Tables:** Striped rows, sticky headers, sort indicators

---

## Images

**Hero Image:**
- Platform dashboard screenshot showing key metrics, compliance status, and clean UI
- Or: Professional illustration of institutional administrator managing compliance
- Treatment: Subtle shadow, rounded corners (rounded-xl), integrated naturally into layout
- Placement: Right side of hero split layout (40% width)

**Section Images:**
- Platform screenshots: High-quality UI captures with real data examples (anonymized)
- Compliance visualization: Flowcharts, process diagrams, audit trail examples
- Customer logos: Brazilian educational institutions (daycare to university)
- Team photos: Support team, customer success managers (builds trust)
- Certification badges: LGPD compliance seal, security certifications, ISO logos

**No large background hero image** - this is enterprise SaaS, focus on clarity and product demonstration over atmospheric imagery.

---

## Animation Guidelines

**Minimal, Professional Motion:**
- No scroll animations
- Button hover: subtle shadow increase (150ms)
- Tab switching: 200ms fade transition
- Accordion expand: 250ms ease
- Form validation: shake on error (200ms)
- Stat counter: number increment on scroll into view (one-time, 800ms)