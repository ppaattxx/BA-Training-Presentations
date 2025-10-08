# Business Analysis Training Presentations# Business Analysis Training Presentations



<div align="center"><div align="center">



![Version](https://img.shields.io/badge/version-1.0-blue.svg)![Version](https://img.shields.io/badge/version-2.0-blue.svg)

![License](https://img.shields.io/badge/license-Proprietary-red.svg)![License](https://img.shields.io/badge/license-Proprietary-red.svg)

![Status](https://img.shields.io/badge/status-Production-green.svg)![Status](https://img.shields.io/badge/status-Production-green.svg)



**Professional training materials for IT Business Analysts****Professional training materials for IT Business Analysts**



</div>[View Demo](index.html) • [Keyboard Shortcuts](KEYBOARD_SHORTCUTS.md) • [Features](#-features)



---</div>



## 🎯 Overview---



A lightweight, framework-free slide presentation system designed for Business Analysis training. Features three comprehensive courses covering project initiation, BA fundamentals, and project management techniques. Built with modern web technologies, requiring **zero build process** or dependencies.## 📚 Table of Contents



### Why This Project?- [Overview](#-overview)

- [Course Structure](#-course-structure)

- ✅ **Zero Dependencies**: No npm, webpack, or build tools required- [Features](#-features)

- ✅ **Lightweight**: Simple codebase (~200 lines per deck)- [Quick Start](#-quick-start)

- ✅ **Enterprise-Ready**: Professional styling suitable for corporate training- [Navigation](#-navigation)

- ✅ **Accessible**: WCAG compliant with full keyboard navigation- [Technology Stack](#-technology-stack)

- ✅ **Responsive**: Works seamlessly on desktop, tablet, and mobile- [File Structure](#-file-structure)

- ✅ **Portable**: Single HTML files that run anywhere- [Development](#-development)

- [Accessibility](#-accessibility)

---- [License](#-license)



## 📖 Course Structure## 🎯 Overview



### BA1: Project Initiation (Foundation)A lightweight, framework-free slide presentation system designed for Business Analysis training. Features three comprehensive courses covering project initiation, BA fundamentals, and project management techniques. Built with modern web technologies, requiring zero build process or dependencies.

**8 slides • 30-45 minutes**

### Why This Project?

Essential concepts for starting BA projects:

- PM vs BA role distinction- ✅ **Zero Dependencies**: No npm, webpack, or build tools required

- Requirements management planning- ✅ **Enterprise-Ready**: Professional styling suitable for corporate training

- Stakeholder analysis & engagement- ✅ **Accessible**: WCAG 2.1 compliant with full keyboard navigation

- Performance measures & KPIs- ✅ **Responsive**: Works seamlessly on desktop, tablet, and mobile

- ✅ **Portable**: Single HTML files that run anywhere

**Path**: `BA1/BA1.html`

## 📖 Course Structure

### BA2: Business Analysis Fundamentals (Comprehensive)

**16 slides • 90-120 minutes**### BA1: Project Initiation (Foundation)

**8 slides • 30-45 minutes**

Complete guide to BA practices:

- SMART requirements & methodologiesEssential concepts for starting BA projects:

- Agile & Predictive frameworks (Scrum, Kanban, Waterfall, V-Model)- PM vs BA role distinction

- Elicitation techniques (Interviews, Workshops, Surveys)- Requirements management planning

- Visual modeling (BPMN, UML, ERD, State Diagrams)- Stakeholder analysis & engagement

- BRD structure & approval process- Performance measures & KPIs



**Path**: `BA2/BA2.html`**Path**: `BA1/BA1.html`



### BA3: Project Management (Advanced)### BA2: Business Analysis Fundamentals (Comprehensive)

**20+ slides • 90-120 minutes****16 slides • 90-120 minutes**



PM techniques & tools for BA projects:Complete guide to BA practices:

- Project lifecycle stages (Conception, Definition, Execution, Close)- SMART requirements & methodologies

- Business case & charter development- Agile & Predictive frameworks (Scrum, Kanban, Waterfall, V-Model)

- Work breakdown structure (WBS)- Elicitation techniques (Interviews, Workshops, Surveys)

- Risk management & change control- Visual modeling (BPMN, UML, ERD, State Diagrams)

- Project closure & lessons learned- BRD structure & approval process



**Path**: `BA3/BA3.html`**Path**: `BA2/BA2.html`



---### BA3: Project Management (Advanced)

**20 slides • 90-120 minutes**

## 🚀 Quick Start

PM techniques & tools for BA projects:

### Method 1: Direct File Access (Simplest)- Business case & charter development

```bash- CARD analysis & stakeholder management

# Double-click any HTML file in Windows Explorer- Project planning & communication

# Or right-click and select "Open with" → Your Browser- Execution, control & project closure



index.html      # Homepage with course catalog**Path**: `BA3/BA3.html`

BA1/BA1.html    # Project Initiation course

BA2/BA2.html    # Fundamentals course## ✨ Features

BA3/BA3.html    # Project Management course

```### 🎨 User Experience

- **Smooth Animations**: CSS-based transitions with reduced motion support

### Method 2: Local Web Server (Recommended)- **Glass Morphism**: Modern glassmorphic design elements

```bash- **Hover Effects**: Interactive card lifts and visual feedback

# Python 3- **Progress Tracking**: Visual progress bar with percentage completion

python -m http.server 8000- **Responsive Layout**: Mobile-first design with breakpoint optimization

- **Professional Icons**: Font Awesome 6.4.0 integration

# Then open: http://localhost:8000- **Custom Typography**: Google Fonts (Inter family)

```

### ⌨️ Navigation

### Method 3: GitHub Pages (After Upload)- **Keyboard Shortcuts**: Full keyboard control (see [KEYBOARD_SHORTCUTS.md](KEYBOARD_SHORTCUTS.md))

```- **Touch Gestures**: Swipe left/right on mobile devices (50px threshold)

https://YOUR-USERNAME.github.io/BA-Training-Presentations/- **Mouse Controls**: Click-based navigation buttons

```- **Direct Jump**: Home/End keys for quick access

- **Help System**: Press `?` to toggle shortcuts guide

---

### 🎯 Accessibility

## 🎮 Navigation- **Screen Reader Support**: Proper ARIA labels and semantic HTML

- **Keyboard-Only Navigation**: Complete access without mouse

### Keyboard Shortcuts- **High Contrast**: WCAG 2.1 Level AA compliant color ratios

- **Focus Indicators**: Clear visual focus states throughout

| Shortcut | Action |- **Reduced Motion**: Respects user's motion preferences

|----------|--------|

| `→` `Space` | Next slide |### 💻 Developer Experience

| `←` `Backspace` | Previous slide |- **No Build Process**: Edit files, refresh browser—that's it

| `Home` | First slide |- **Zero Dependencies**: No npm packages or bundlers required

| `End` | Last slide |- **CDN Resources**: Tailwind CSS and Font Awesome via CDN

| `?` | Toggle help |- **ES6+ JavaScript**: Modern vanilla JavaScript, no frameworks

- **Consistent Structure**: Unified patterns across all courses

### Touch Controls- **Error Handling**: Graceful degradation with helpful error messages

- **Swipe Left**: Next slide

- **Swipe Right**: Previous slide## 🚀 Quick Start

- **Tap Buttons**: Use on-screen navigation

### Method 1: Direct File Access

### Console Commands```bash

```javascript# Clone or download the repository

window.presentation.goToSlide(5);      // Jump to slide 6 (0-indexed)# Open any presentation file in your browser

window.presentation.nextSlide();        // Advance one slideopen index.html     # macOS

window.presentation.previousSlide();    // Go back one slidestart index.html    # Windows

```xdg-open index.html # Linux

```

---

### Method 2: Local Web Server (Recommended)

## ✨ Features```bash

# Python 3

### 🎨 User Experiencepython -m http.server 8000

- **Smooth Animations**: CSS-based transitions

- **Glass Morphism**: Modern glassmorphic design elements# Python 2

- **Hover Effects**: Interactive card tooltipspython -m SimpleHTTPServer 8000

- **Progress Tracking**: Visual progress bar with percentage

- **Responsive Layout**: Mobile-first design# Node.js (with http-server)

- **Professional Icons**: Font Awesome 6.4.0npx http-server -p 8000

- **Custom Typography**: Google Fonts (Inter)

# Then open: http://localhost:8000

### ⌨️ Accessibility```

- **Keyboard Navigation**: Complete keyboard control

- **Touch Gestures**: Swipe support for mobile### Method 3: VS Code Live Server

- **Screen Reader Support**: Proper ARIA labels1. Install "Live Server" extension

- **High Contrast**: WCAG 2.1 Level AA compliant2. Right-click `index.html`

- **Reduced Motion**: Respects user preferences3. Select "Open with Live Server"



### 💻 Developer Experience### Method 4: VS Code Run & Debug

- **No Build Process**: Edit files, refresh browser1. Press `F5` or click Run & Debug (▶️)

- **Zero Dependencies**: No npm packages required2. Select a configuration:

- **CDN Resources**: Tailwind CSS and Font Awesome   - "Open Homepage (index.html)"

- **ES6 JavaScript**: Clean, modern vanilla JavaScript   - "Open BA1 Course"

- **Consistent Structure**: Unified patterns across all courses   - "Open BA2 Course"

   - "Open BA3 Course"

---   - "Launch with Live Server"



## 🛠 Technology Stack## 🎮 Navigation



### Core Technologies### Keyboard Shortcuts

- **HTML5**: Semantic markup with ARIA support

- **CSS3**: Grid, Flexbox, Animations| Shortcut | Action |

- **JavaScript ES6+**: Classes, arrow functions, template literals|----------|--------|

| `→` `Space` `Page Down` | Next slide |

### External Resources (CDN)| `←` `Backspace` `Page Up` | Previous slide |

- **Tailwind CSS 3.x**: Utility-first CSS framework| `Home` | First slide |

- **Font Awesome 6.4.0**: Professional icon library| `End` | Last slide |

- **Google Fonts (Inter)**: Modern sans-serif typeface| `?` | Toggle help panel |



### Browser Support### Touch Controls

- ✅ Chrome/Edge 90+- **Swipe Left**: Next slide (50px minimum)

- ✅ Firefox 88+- **Swipe Right**: Previous slide (50px minimum)

- ✅ Safari 14+- **Tap Buttons**: Use on-screen navigation

- ✅ iOS Safari 14+

- ✅ Chrome Android 90+### Console Commands

```javascript

---window.goToSlide(5);      // Jump to slide 6 (0-indexed)

window.nextSlide();        // Advance one slide

## 📁 File Structurewindow.previousSlide();    // Go back one slide

window.presentation.currentSlide;  // Current slide index

```window.presentation.totalSlides;   // Total slide count

Presentation/```

├── index.html                    # Homepage with course catalog

├── README.md                     # This file**Complete Documentation**: See [KEYBOARD_SHORTCUTS.md](KEYBOARD_SHORTCUTS.md)

├── CLEANUP_SUMMARY.md            # Recent cleanup documentation

├── GITHUB_UPLOAD_GUIDE.md        # How to upload to GitHub## 🛠 Technology Stack

├── .gitignore                    # Git ignore rules

├── .github/### Core Technologies

│   └── copilot-instructions.md  # AI coding agent guidelines- **HTML5**: Semantic markup with ARIA support

├── BA1/                         # Project Initiation Course- **CSS3**: Grid, Flexbox, Animations, Custom Properties

│   ├── BA1.html                # Presentation HTML- **JavaScript ES6+**: Classes, arrow functions, template literals

│   ├── app.js                  # Presentation logic (7.4 KB)

│   └── data.js                 # 8 slides content### External Resources (CDN)

├── BA2/                         # Fundamentals Course- **Tailwind CSS 3.x**: Utility-first CSS framework

│   ├── BA2.html- **Font Awesome 6.4.0**: Professional icon library

│   ├── ba2-app.js              # Presentation logic (7.4 KB)- **Google Fonts (Inter)**: Modern sans-serif typeface

│   └── data2.js                # 16 slides content

└── BA3/                         # Project Management Course### Browser Support

    ├── BA3.html- ✅ Chrome/Edge 90+ (Chromium)

    ├── ba3-app.js              # Presentation logic (7.4 KB)- ✅ Firefox 88+

    ├── ba3-data-full.js        # 20+ slides content- ✅ Safari 14+

    ├── README.md               # BA3 documentation- ✅ Opera 76+

    ├── SLIDE_OUTLINE.md        # Course outline- ✅ iOS Safari 14+

    └── STYLE_ALIGNMENT_SUMMARY.md  # Style guide- ✅ Chrome Android 90+

```

## 📁 File Structure

**Total:** 14 essential files (clean and organized!)

```

---Presentation/

├── index.html                 # Homepage with course catalog

## 💡 Development├── README.md                  # This file

├── KEYBOARD_SHORTCUTS.md      # Complete navigation guide

### Creating a New Slide├── .github/

│   └── copilot-instructions.md   # AI coding agent guidelines

Add to the `slides` array in the data file (`data.js`, `data2.js`, or `ba3-data-full.js`):├── .vscode/

│   ├── launch.json           # Debug configurations

```javascript│   └── tasks.json            # Automated tasks

{├── BA1/                      # Project Initiation Course

  title: "Slide Title",│   ├── BA1.html             # Presentation HTML

  subtitle: "Optional subtitle",│   ├── app.js               # Enhanced presentation logic v2.0

  type: "content",  // cover, content, summary│   └── data.js              # 8 slides content

  notes: "PRESENTER: Action verbs, talking points, time estimate",├── BA2/                      # Fundamentals Course

  content: `│   ├── BA2.html

    <div class="card-hover bg-white p-6 rounded-xl border-2 border-blue-200">│   ├── ba2-app.js           # Enhanced presentation logic v2.0

      <h3 class="text-xl font-bold text-blue-600 mb-3">✓ Section Title</h3>│   └── data2.js             # 16 slides content

      <ul class="list-disc ml-5 text-gray-700 space-y-2">└── BA3/                      # Project Management Course

        <li>Professional point with Tailwind classes</li>    ├── BA3.html

        <li>Use → for process flow indicators</li>    ├── ba3-app.js           # Enhanced presentation logic v2.0

        <li>Use ✓ for completed items</li>    ├── ba3-data-full.js     # 20 slides content

      </ul>    ├── SLIDE_OUTLINE.md     # Course outline

    </div>    └── STYLE_ALIGNMENT_SUMMARY.md   # Style guide

  ````

}

```## 💡 Development



### Hover Tooltip Pattern### Creating a New Deck (BA4 Example)



CSS-only tooltips (no JavaScript):1. **Copy Template Files**

```bash

```htmlmkdir BA4

<div class="group cursor-pointer card-hover">cp BA1/BA1.html BA4/BA4.html

  <div>Visible content</div>cp BA1/app.js BA4/ba4-app.js

  <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ```

              mt-2 p-2 bg-blue-50 rounded text-sm">

    💡 <strong>Tip:</strong> Hidden detail revealed on hover2. **Create Data File** (`BA4/ba4-data.js`)

  </div>```javascript

</div>const slides = [

```  {

    title: "Course Title",

### Creating a New Deck (BA4 Example)    subtitle: "Descriptive Subtitle",

    type: "cover",  // cover, content, summary

1. **Copy template files:**    notes: "PRESENTER: Action verbs, talking points, time estimate",

```bash    content: `

mkdir BA4      <div class="space-y-6">

cp BA1/BA1.html BA4/BA4.html        <!-- Tailwind-styled HTML -->

cp BA1/app.js BA4/ba4-app.js      </div>

```    `

  }

2. **Create data file** (`BA4/ba4-data.js`)];

3. **Update script references** in `BA4/BA4.html````

4. **Add link** to `index.html` homepage

3. **Update HTML Script References**

---```html

<!-- In BA4/BA4.html -->

## 🧪 Testing<script src="ba4-data.js"></script>

<script src="ba4-app.js"></script>

### Functional Testing```

- [ ] All slides render correctly

- [ ] Keyboard navigation works4. **Add to Homepage** (`index.html`)

- [ ] Touch gestures function on mobile```html

- [ ] Progress bar updates accurately<!-- Copy a course card and update links, titles, descriptions -->

- [ ] Help panel toggles with `?````

- [ ] No console errors

### Slide Content Patterns

### Cross-Browser Testing

- [ ] Chrome/Edge (Windows, macOS)**Professional Card**:

- [ ] Firefox (Windows, macOS)```html

- [ ] Safari (macOS, iOS)<div class="card-hover bg-white p-6 rounded-xl border-2 border-blue-200">

- [ ] Mobile browsers  <h3 class="text-xl font-bold text-blue-600 mb-3">✓ Section Title</h3>

  <ul class="list-disc ml-5 text-gray-700 space-y-2">

### Responsive Testing    <li>Professional point without decorative emojis</li>

- [ ] Mobile (320px - 767px)    <li>Use → for process flow indicators</li>

- [ ] Tablet (768px - 1023px)    <li>Use ✓ for completed/approved items</li>

- [ ] Desktop (1024px+)  </ul>

</div>

---```



## 🐛 Troubleshooting**CSS-Only Tooltip** (no JavaScript):

```html

### Keyboard Shortcuts Not Working<div class="group cursor-pointer card-hover">

- Click on slide to give it focus  <div>Visible content</div>

- Check for browser extension conflicts  <div class="mt-2 p-2 bg-blue-50 rounded text-sm opacity-0 

- Verify JavaScript is enabled              group-hover:opacity-100 transition-opacity duration-300">

    <strong>Tip:</strong> Hidden detail revealed on hover

### Touch Gestures Not Responding  </div>

- Swipe distance must exceed 50 pixels</div>

- Swipe horizontally, not vertically```

- Try different mobile browser

**Grid Layout**:

### Styles Not Loading```html

- Check internet connection (CDN resources)<div class="grid grid-cols-1 md:grid-cols-2 gap-6">

- Try opening in incognito mode  <div class="card-hover">Card 1</div>

- Check browser console for errors  <div class="card-hover">Card 2</div>

</div>

---```



## 📄 License### Emoji Usage Guidelines



© 2025 Pat Nacario. All rights reserved.**✅ Professional (Use These)**:

- ✓ Checkmarks for completed items

**Proprietary Software**: This project is proprietary and confidential. Unauthorized copying, distribution, modification, or use is strictly prohibited without explicit written permission from the author.- → Arrows for process flow

- ⚠️ Warnings (sparingly)

---

**❌ Avoid (Too Casual)**:

## 👤 Author- 💡 Lightbulbs

- 🚀 Rockets

**Pat Nacario**  - 📊 Charts

IT Business Analyst & Training Developer- 🎯 Targets

- Any large decorative emojis

---

### Code Conventions

## 📊 Version History

**JavaScript**:

### Version 1.0 (October 2025)- ES6+ syntax (classes, const/let, arrow functions)

- ✅ Clean, simplified codebase (7.4 KB per deck)- Template literals for HTML generation

- ✅ BA1, BA2, BA3 course content- Defensive coding with null checks

- ✅ Basic navigation with keyboard and touch support- Console warnings for debugging

- ✅ Responsive design with Tailwind CSS- No external dependencies

- ✅ Professional styling and animations

- ✅ Complete documentation**CSS/Tailwind**:

- Utility-first approach

---- Custom animations in `<style>` blocks

- Glass morphism: `rgba(255,255,255,0.05)` + `backdrop-filter`

<div align="center">- Consistent color palette (primary blues)

- Mobile-first responsive breakpoints

**Made with care for Business Analysts** 💼

**HTML**:

[⬆ Back to Top](#business-analysis-training-presentations)- Semantic elements (`<header>`, `<main>`, `<nav>`, `<article>`)

- ARIA labels for accessibility

</div>- Proper heading hierarchy (h1 → h2 → h3)

- Meta tags for SEO and mobile

## ♿ Accessibility

### WCAG 2.1 Level AA Compliance
- **Color Contrast**: 4.5:1 minimum for normal text, 3:1 for large text
- **Keyboard Navigation**: All functionality available via keyboard
- **Screen Reader Support**: Tested with NVDA, JAWS, VoiceOver
- **Focus Management**: Visible focus indicators (2px outline)
- **Motion**: Respects `prefers-reduced-motion` setting

### Accessibility Features
- **Semantic HTML**: Proper landmark regions
- **ARIA Labels**: Descriptive labels on all interactive elements
- **Live Regions**: `aria-live="polite"` for slide changes
- **Error Handling**: Graceful degradation with helpful messages
- **Print Support**: Print-optimized views without navigation

### Testing Tools
- Chrome Lighthouse (Accessibility score: 95+)
- axe DevTools browser extension
- WAVE Web Accessibility Evaluation Tool
- Manual keyboard-only navigation testing

## 🧪 Testing Checklist

### Functional Testing
- [ ] All slides render correctly in all courses
- [ ] Keyboard navigation works (all shortcuts)
- [ ] Touch gestures function on mobile/tablet
- [ ] Progress bar updates accurately
- [ ] Help panel toggles with `?` key
- [ ] Console shows no errors
- [ ] Previous/Next buttons disable appropriately
- [ ] "Finish" text appears on last slide

### Cross-Browser Testing
- [ ] Chrome/Edge (Windows, macOS)
- [ ] Firefox (Windows, macOS, Linux)
- [ ] Safari (macOS, iOS)
- [ ] Mobile browsers (iOS Safari, Chrome Android)

### Responsive Testing
- [ ] Mobile (320px - 767px)
- [ ] Tablet (768px - 1023px)
- [ ] Desktop (1024px+)
- [ ] Print layout (navigation hidden)

### Accessibility Testing
- [ ] Lighthouse accessibility score 95+
- [ ] Keyboard-only navigation complete
- [ ] Screen reader announces correctly
- [ ] Focus visible on all elements
- [ ] Color contrast meets WCAG AA

## 🐛 Troubleshooting

### Keyboard Shortcuts Not Working
- Ensure presentation has focus (click on slide first)
- Check for browser extension conflicts
- Verify JavaScript is enabled
- Try refreshing the page

### Touch Gestures Not Responding
- Swipe distance must exceed 50 pixels
- Swipe horizontally, not vertically
- Don't start swipe on navigation buttons
- Try in different mobile browser

### Styles Not Loading
- Check internet connection (CDN resources)
- Verify Tailwind CSS CDN is accessible
- Try opening in incognito/private mode
- Check browser console for errors

### Help Panel Won't Show
- Press Shift + `/` for `?` character
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify helpBtn element exists

## 📄 License

© 2025 Pat Nacario. All rights reserved.

**Proprietary Software**: This project is proprietary and confidential. Unauthorized copying, distribution, modification, or use is strictly prohibited without explicit written permission from the author.

## 👤 Author

**Pat Nacario**  
IT Business Analyst & Training Developer  
Specializing in Requirements Management & Stakeholder Engagement

---

## 📊 Version History

### Version 2.0 (October 2025)
- ✅ Enhanced all app.js files with error handling
- ✅ Added progress percentage display
- ✅ Improved accessibility (ARIA labels)
- ✅ Unified code structure across courses
- ✅ Enhanced index.html with animations
- ✅ Created comprehensive documentation
- ✅ Added keyboard shortcuts guide

### Version 1.0 (Initial Release)
- ✅ BA1, BA2, BA3 course content
- ✅ Basic navigation and styling
- ✅ Responsive design
- ✅ Keyboard and touch support

---

<div align="center">

**[⬆ Back to Top](#business-analysis-training-presentations)**

Made with ❤️ for Business Analysts

</div>

## 🚀 Quick Start

### Method 1: Direct File Opening (Simplest)
1. Right-click on any HTML file (`index.html`, `BA1/BA1.html`, or `BA2/BA2.html`)
2. Select "Open with Live Server" (if you have the extension)
   - OR just double-click to open in your default browser

### Method 2: Using VS Code Run & Debug
1. Press `F5` or click the "Run and Debug" button (▶️) in VS Code
2. Select one of these configurations:
   - **"Open Homepage (index.html)"** - Opens the main landing page
   - **"Open BA1 Course"** - Opens Project Initiation course
   - **"Open BA2 Course"** - Opens Fundamentals course
   - **"Open BA3 Template"** - Opens the new template course
   - **"Launch with Live Server"** - Opens with local server (requires server running)

### Method 3: Using Local Web Server
1. Open terminal in VS Code
2. Run: `python -m http.server 8000`
3. Open browser and navigate to: `http://localhost:8000`

## 📁 File Structure

```
Presentation/
├── index.html          # Homepage - Start here!
├── BA1/
│   ├── BA1.html       # Project Initiation Course (8 slides)
│   ├── data.js        # Course content
│   └── app.js         # Presentation logic
├── BA2/
│   ├── BA2.html       # BA Fundamentals Course (16 slides)
│   ├── data2.js       # Course content
│   └── ba2-app.js     # Presentation logic
├── BA3/
│   ├── BA3.html       # Template Course (3 sample slides)
│   ├── ba3-data.js    # Template content - ready to customize
│   └── ba3-app.js     # Presentation logic
└── .vscode/
    ├── launch.json    # Debug configurations
    └── tasks.json     # Automated tasks
```

## ⌨️ Keyboard Shortcuts

When viewing presentations:
- `←` / `→` - Navigate between slides
- `Home` - Go to first slide
- `End` - Go to last slide
- `?` - Show keyboard shortcuts help

## 🎨 Features

- ✅ Professional gradient themes
- ✅ Font Awesome icons
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Glass-morphism UI effects
- ✅ Smooth animations
- ✅ Progress tracking
- ✅ Keyboard navigation
- ✅ Interactive tooltips

## 📊 Courses

### BA1: Project Initiation (Foundation)
- PM vs BA Role Distinction
- Requirements Management Planning
- Stakeholder Analysis & Engagement
- Performance Measures & KPIs
- **Duration:** 30-45 minutes

### BA2: Business Analysis Fundamentals (Comprehensive)
- SMART Requirements & Methodologies
- Agile & Predictive Frameworks (Scrum, Kanban, SAFe, DevOps)
- Elicitation Techniques & Visual Modeling
- BRD Structure & Approval Process
- **Duration:** 90-120 minutes

### BA3: Template Course (New!)
- Professional template structure ready for customization
- Includes sample slides with modern design
- Consistent theme with BA1 and BA2
- Easy to add your own content
- **Status:** Template - Add your content here!

## 🛠️ Troubleshooting

### "Run and Debug" not working?
- Make sure you have Chrome installed
- Select a configuration from the dropdown in the Debug panel
- If using "Launch with Live Server", ensure the web server is running first

### Styles not loading?
- Check internet connection (CDN resources: Tailwind CSS, Font Awesome, Google Fonts)
- Try opening in a different browser

### Links not working?
- Use a local web server (Method 3) instead of opening files directly
- Some features require HTTP protocol, not file:// protocol

## 📝 Credits

**Author:** Pat Nacario  
**Year:** 2025  
**Purpose:** Professional Business Analysis Training

---

**Need help?** Check the VS Code Debug panel (Ctrl+Shift+D) for available run configurations.
