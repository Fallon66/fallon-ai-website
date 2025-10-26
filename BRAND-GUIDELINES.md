# Fallon AI Brand Guidelines

**Version 1.0** | October 2025

---

## Brand Overview

Fallon AI is Charlotte Fallon's AI automation consultancy helping solopreneurs and SMEs transform chaos into clarity. The brand combines serious technical capability with approachable, human-friendly personality - perfect for neurodivergent founders and overwhelmed business owners.

**Brand Promise:** "5 days or less from chaos to clarity"

**Brand Mascot:** The Octopus (representing multitasking, overwhelm, wearing all the hats)

---

## Color Palette

### Primary Colors

**Teal (Strategy & Trust)**
- Hex: `#7DD3C0`
- RGB: `125, 211, 192`
- Use: Primary brand color, backgrounds, headers
- Represents: Strategic thinking, calm intelligence

**Coral (Action & Energy)**
- Hex: `#FFB4A2`
- RGB: `255, 180, 162`
- Use: CTAs, highlights, accent elements
- Represents: Action, warmth, transformation

**Lavender (AI Support)**
- Hex: `#C5B9E0`
- RGB: `197, 185, 224`
- Use: AI elements, secondary backgrounds
- Represents: Technology, support, innovation

### Usage Guidelines

**Gradients:** Use teal-to-coral or lavender-to-teal gradients for premium feel
```css
background: linear-gradient(135deg, #7DD3C0 0%, #FFB4A2 100%);
background: linear-gradient(135deg, #C5B9E0 0%, #7DD3C0 100%);
```

**Text on Colors:**
- White text on teal (#7DD3C0)
- Dark gray/black text on coral (#FFB4A2) and lavender (#C5B9E0)
- For accessibility, ensure 4.5:1 contrast ratio

---

## Typography

### Primary Font: Poppins

**Headers:**
- Font: Poppins Bold
- Sizes:
  - H1: 48px-64px
  - H2: 36px-48px
  - H3: 24px-32px
- Weight: 700 (Bold)

**Body Text:**
- Font: Poppins Regular
- Size: 16px-18px
- Weight: 400 (Regular)
- Line height: 1.6-1.8

**Emphasis:**
- Font: Poppins SemiBold
- Weight: 600

### Typography Hierarchy for Graphics

**LinkedIn Post Graphics (1200x1200px):**
- Main headline: Poppins Bold, 48-56px
- Subheadline: Poppins SemiBold, 28-32px
- Body text: Poppins Regular, 18-22px
- Footer/attribution: Poppins Regular, 14-16px

---

## Design Style Principles

### 1. Clean & Minimalist
- White space is your friend
- Don't overcrowd designs
- One clear focal point per graphic

### 2. ADHD-Friendly
- Scannable content (bullet points, short sentences)
- Visual hierarchy (big headers, clear sections)
- Not overwhelming (limit to 3-5 key points max)
- Use color to guide attention

### 3. Tech-Forward but Human
- Modern, clean aesthetic (not corporate/stuffy)
- Friendly tone (approachable, not intimidating)
- Glassmorphism OK (subtle transparency effects)
- Rounded corners preferred over sharp angles

### 4. Professional but Playful
- Cute octopus mascot balanced with serious capability
- Can be slightly quirky (Charlotte's personality)
- Anti-corporate vibes (authentic, not polished to death)
- OK to show personality and humor

---

## Logo Usage

### Primary Logo
- Cute teal octopus with coral gradient tentacles
- "Fallon AI" in Poppins Bold beside octopus
- Horizontal layout (side-by-side)

### Logo Variations
1. **Full logo:** Octopus + text (primary use)
2. **Icon only:** Just octopus (social media profiles, favicon)
3. **Text only:** "Fallon AI" in Poppins Bold (when space limited)

### Logo Don'ts
- Don't stretch or distort the octopus
- Don't change brand colors
- Don't place on busy backgrounds (keep it clean)
- Don't use other companies' logos without permission (OpenAI, Anthropic, etc.)

---

## Graphic Design Templates

### Social Media Graphics (LinkedIn Focus)

**Dimensions:**
- LinkedIn posts: 1200x1200px (square)
- LinkedIn carousel: 1080x1080px per slide
- LinkedIn header: 1584x396px

**Layout Principles:**
- 80-100px padding from edges
- Clear hierarchy (headline → supporting text → CTA/attribution)
- Brand colors prominent
- Always include "Fallon AI" branding

**Content Types:**
1. **Announcement** - Big news, product launches
2. **Quote/Insight** - Key learning, client testimonial
3. **Stat/Metric** - Data visualization, before/after
4. **Tip/How-to** - Actionable advice, quick wins
5. **Behind-the-scenes** - Building in public, process

---

## Voice & Tone

### How Fallon AI Sounds

**Casual UK English:**
- "Realised" not "realized"
- "Whilst" not "while"
- Occasional British phrases

**Honest & Vulnerable:**
- "Amalgamated brain of mess" (relatable)
- "Am I onto something or losing my mind?"
- Share struggles, not just wins

**Anti-Corporate:**
- "Dumping systems" not "deploying solutions"
- No jargon ("synergy," "leverage")
- No guru vibes ("I have the answer!")

**Self-Aware:**
- Acknowledge neurodivergence openly
- Embrace the chaos while building systems
- Champion "the little guy"

### Words to Use
- Transform, clarity, breathing room
- Chaos, overwhelm, survival mode
- Guinea pig, experiment, build in public
- Octopus, ADHD, neurodivergent
- Quick win, deep dive, bespoke

### Words to Avoid
- Synergy, leverage, disrupt
- Guru, thought leader (unless ironic)
- Enterprise, corporate speak
- Perfect, flawless, expert (use "top 5%" instead)

---

## Content Guidelines for Graphics

### Headlines (Main Message)
- 5-10 words max
- Start with number or "How to" when possible
- Use Charlotte's voice (conversational)
- Examples:
  - "20,000 emails to 1 in 5 days"
  - "Why ADHD is an AI superpower"
  - "I built 15 custom commands for my brain"

### Supporting Text
- 15-30 words
- Expand on headline
- Include one key benefit or insight
- Keep it scannable

### Footer/Attribution
- Always include "Fallon AI" or Charlotte's name
- Optional: "Built with Claude Code" for building in public
- Optional: Website URL for lead generation

---

## Examples of Good vs Bad

### Good Example
**Headline:** "From inbox chaos to inbox zero"
**Body:** "99.5% reduction in 5 days using archive-by-default strategy"
**Design:** Clean white background, teal header, coral CTA button
**Branding:** Octopus icon + "Fallon AI" in corner

### Bad Example
**Headline:** "Leverage AI to Synergize Your Workflow"
**Body:** Walls of text, 5+ bullet points, cramped
**Design:** Busy gradient, hard to read text, no hierarchy
**Branding:** No Fallon AI identity, generic stock imagery

---

## Technical Specifications

### HTML→PNG Pipeline

**Recommended Settings:**
- Canvas size: 1200x1200px
- Font rendering: Crisp, anti-aliased
- Export: PNG with transparency where needed
- Resolution: 72 DPI for web (higher if print needed)

**Chrome Headless Command:**
```bash
chrome --headless --screenshot=output.png --window-size=1200,1200 graphic.html
```

**Fonts:**
- Load Poppins from Google Fonts
- Include fallback: `font-family: 'Poppins', sans-serif;`

**Colors:**
```css
:root {
  --fallon-teal: #7DD3C0;
  --fallon-coral: #FFB4A2;
  --fallon-lavender: #C5B9E0;
}
```

---

## Usage Rights & Permissions

### What's OK
- Use Fallon AI brand elements for Charlotte's business
- Share building-in-public process
- Reference tools Charlotte uses (Claude, n8n, etc.)

### What's NOT OK
- Don't use other companies' official logos without permission
- Don't claim partnerships that don't exist
- Don't copy competitors' designs directly
- Don't use stock imagery that feels generic/corporate

### Attribution
- When using AI-generated graphics: "Built with Claude Code" optional
- When showcasing client work: Get permission first
- When sharing screenshots: Respect others' privacy

---

## Brand Evolution

This is v1.0 of Fallon AI brand guidelines. As Charlotte builds in public and iterates, these guidelines will evolve.

**Current Status (Oct 2025):**
- Logo: Teal octopus designed, being refined
- Website: Live at fallon-ai-website.vercel.app
- Voice: Established through 90+ session docs
- Visual style: Clean, ADHD-friendly, tech-forward

**Future Considerations:**
- Animated octopus variations
- Video/motion graphics standards
- Physical materials (business cards, stickers)
- Merchandise style guide

---

**Last Updated:** 2025-10-24
**Maintained By:** Charlotte Fallon
**Questions?** Reference FALLON-AI-COMPLETE-CONTEXT-2025-10-20.md for full brand story

---

*These guidelines exist to speed up design decisions, not slow them down. When in doubt: clean, friendly, ADHD-optimized. Ship functional over perfect.* 🐙
