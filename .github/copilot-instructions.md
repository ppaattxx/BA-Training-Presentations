# Copilot Project Instructions

Concise, project-specific guidance for AI coding agents working in this repository.

## 1. Project Purpose & Structure
A lightweight, framework-free slide presentation system for Business Analysis training. Three tracks exist: `BA1/` (Project Initiation), `BA2/` (Fundamentals), and `BA3/` (Project Management). All use identical HTML/JS patterns for consistency.

Key directories:
- `BA1/BA1.html` + `BA1/data.js` + `BA1/app.js` – Project Initiation deck
- `BA2/BA2.html` + `BA2/data2.js` + `BA2/ba2-app.js` – Fundamentals deck
- `BA3/BA3.html` + `BA3/ba3-data-full.js` + `BA3/ba3-app.js` – Project Management deck
- All decks share the same simple architecture pattern

## 2. Runtime & Loading Order
HTML loads: Tailwind CDN → inline Tailwind config → custom CSS → data script → app script. Data file must define global `slides` array before app.js executes. The app instantiates `PresentationApp` on `DOMContentLoaded`, storing instance on `window.presentation` with `nextSlide()`, `previousSlide()`, and `goToSlide()` methods.

## 3. Slide Data Pattern
Each slide object shape:
```javascript
{ 
  title: string,           // Main heading
  subtitle: string,        // Optional subheading
  type: 'cover'|'content'|'summary'|string,  // Slide category
  notes: string,           // Optional presenter notes (not displayed on slide)
  content: `...HTML...`    // Template literal with Tailwind markup
}
```
`content` is a template literal with embedded Tailwind-styled markup. Maintain consistent indentation and avoid unescaped backticks. Use semantic containers (grids, cards) and classes: `card-hover`, gradients, emoji icons. Add new slides by pushing objects to the `slides` array—order defines navigation sequence.

**Presenter Notes**: The `notes` field contains guidance for the presenter including:
- Action verbs (emphasize, explain, discuss)
- Key talking points
- Time estimates
- Interactive prompts (pause for questions, ask for examples)
- Real-world example suggestions

## 4. Presentation Logic (app.js / ba2-app.js / ba3-app.js)
Core class: `PresentationApp` - Simple, clean implementation:
- State: `currentSlide`, `totalSlides`
- DOM refs: `slideContainer`, `currentSlideEl`, `totalSlidesEl`, `prevBtn`, `nextBtn`, `progressBar`, `progressPercent`
- Methods: `init()`, `showSlide(index)`, `nextSlide()`, `previousSlide()`, `handleKeyboard(e)`, `addSwipeSupport()`, `generateSlideHTML(slide)`, `updateUI()`, `goToSlide(index)`
- Animation: removes `slide-enter`, forces reflow (`void offsetWidth`), reinserts content, re-adds `slide-enter` for CSS animation
- Keyboard: Arrow keys, Space/Backspace, Home/End, ? (help)
- Touch: Swipe left/right for navigation

Edge handling: index bounds guard in `showSlide`. Progress bar width computed as `(current+1)/total * 100`. Last slide changes Next button label to 'Finish'.

## 5. Conventions & Styling
- Tailwind only via CDN; no build step
- Custom utility classes defined inline in `<style>`: `.card-hover`, `.glass-card`, `.slide-enter`, `@keyframes slideIn`, `@keyframes fadeIn`
- Gradient background: `linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)`
- Use emoji as visual anchors in slide cards
- Avoid external dependencies or bundlers; keep everything simple browser-compatible
- **Color Palette**: Consistent gradient progression: indigo(#6366f1)→purple→pink→rose→orange→amber→yellow→green→cyan→blue
- **Keep it simple**: No complex features, just clean presentation navigation

## 6. Interactive Features
**Hover Tooltips Pattern** (CSS-only, no JavaScript):
```html
<div class="card-hover group cursor-pointer">
  <div>Main content visible by default</div>
  <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    💡 <strong>Tooltip:</strong> Hidden detail revealed on hover
  </div>
</div>
```
- Use `group` class on parent container
- Use `group-hover:opacity-100` on tooltip element
- Add `transition-opacity duration-300` for smooth animation
- Include helpful emoji (💡, ⚠️, 🔗, etc.)

## 7. Creating New Decks
To create a new deck (e.g., BA4):
1. Copy `BA1/BA1.html` → `BA4/BA4.html` and update title, icons, branding
2. Copy `BA1/app.js` → `BA4/ba4-app.js` (no changes needed - it's generic)
3. Create `BA4/ba4-data.js` with `const slides = [...]` array
4. Update script tags in HTML to reference correct files
5. Add entry to `index.html` homepage

## 8. Safe Changes & Pitfalls
- Do not rename `slides` global variable (app.js relies on it)
- Keep `innerHTML` insertion sanitized (only trusted authored slide HTML)
- Avoid stray backticks or unbalanced `${}` in template literals
- Maintain `touchstart`/`touchend` handlers; swipe threshold (50px) is implicit convention
- Subtitle and type are optional in slide objects
- Presenter notes are optional but recommended for training content
- **Keep app.js simple**: Resist adding complex features; focus on clean navigation

## 9. How to Run / Develop
Open `BA1/BA1.html`, `BA2/BA2.html`, or `BA3/BA3.html` directly in a modern browser—no build or server required. For live reload during development, use Live Server extension or run `python -m http.server 8000`. Edits to data or logic reload on refresh.

## 10. Quick Usage Examples
Programmatically jump to slide 5 from console:
```javascript
window.presentation.goToSlide(4)
```
Navigate programmatically:
```javascript
window.presentation.nextSlide()
window.presentation.previousSlide()
```
Add a new slide with interactive tooltip in data file:
```javascript
{
  title: "Risk Management Framework",
  subtitle: "Identify, assess, respond",
  type: "content",
  notes: "PRESENTER: Explain the four-step process. Give examples of risks from recent projects. Discuss mitigation vs acceptance strategies. Time estimate: 5 minutes.",
  content: `
    <div class="card-hover group cursor-pointer bg-white border-2 border-rose-200 p-6 rounded-xl">
      <h3 class="text-xl font-bold text-rose-600 mb-3">⚠️ Core Steps</h3>
      <ul class="list-disc ml-5 text-gray-700 space-y-1">
        <li>Identify</li>
        <li>Analyze</li>
        <li>Plan response</li>
        <li>Monitor</li>
      </ul>
      <div class="mt-2 p-2 bg-rose-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        💡 <strong>Example:</strong> Risk: Key SME unavailable. Mitigation: Cross-train team members
      </div>
    </div>
  `
}
```

## 11. Content Guidelines

**BA1 Deck** - Project Initiation:
- Project Manager vs Business Analyst roles
- Project initiation steps
- Requirements management planning
- Stakeholder analysis and engagement
- Performance measures

**BA2 Deck** - BA Fundamentals:
- SMART requirements criteria
- Requirements phases (Elicitation, Analysis, Specification, Approval)
- Agile frameworks (Scrum, Kanban, Scrumban, SAFe, DevOps)
- Predictive frameworks (Waterfall, V-Model)
- Elicitation techniques (Interviews, Workshops, Surveys, Brainstorming)
- Visual modeling (BPMN, UML, Use Cases, DFD, ERD, State Diagrams)
- BRD structure and approval process
- Stakeholder identification and RACI matrix

**BA3 Deck** - Project Management:
- Project lifecycle stages (Conception, Definition, Execution, Close)
- Business case development
- Project charter creation
- Work breakdown structure (WBS)
- Risk management
- Change control
- Project closure and lessons learned

---
**Design Philosophy**: Zero-config portability, clean and simple navigation, consistent patterns across all decks, CSS-based hover tooltips for interactivity, no complex features or dependencies.
