// ba-slides-content.js
// Business Analysis Fundamentals - Streamlined Deck (30 Slides)

const slides = [
  // 1. Cover Slide
  {
    title: "Business Analysis Fundamentals",
    subtitle: "Complete Professional Reference Deck",
    type: "cover",
    content: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div class="card-hover bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-8 rounded-2xl">
          <h3 class="text-xl font-bold mb-2">BA Roles & Skills</h3>
          <p class="text-indigo-100">Core competencies</p>
        </div>
        <div class="card-hover bg-gradient-to-br from-purple-500 to-pink-600 text-white p-8 rounded-2xl">
          <h3 class="text-xl font-bold mb-2">Methodologies</h3>
          <p class="text-purple-100">Agile & Waterfall</p>
        </div>
        <div class="card-hover bg-gradient-to-br from-pink-500 to-rose-600 text-white p-8 rounded-2xl">
          <h3 class="text-xl font-bold mb-2">Requirements</h3>
          <p class="text-pink-100">Elicitation to Approval</p>
        </div>
        <div class="card-hover bg-gradient-to-br from-rose-500 to-orange-600 text-white p-8 rounded-2xl">
          <h3 class="text-xl font-bold mb-2">Modeling</h3>
          <p class="text-rose-100">Visual Documentation</p>
        </div>
      </div>
      <div class="mt-6 text-center text-sm text-gray-600">Prepared by: Pat Nacario</div>
    `
  },

  // 2. BA Roles & Skills
  {
    title: "Business Analyst: Roles & Skills",
    subtitle: "Core Competencies and Responsibilities",
    type: "content",
    notes: "BA role varies by organization but core activities remain consistent. Focus on what BAs do (elicit, analyze, document requirements) rather than job titles. Emphasize that BAs bridge the gap between business needs and technical solutions. Time: 4 min.",
    content: `
      <div class="bg-indigo-50 border-2 border-indigo-200 p-4 rounded-xl mb-4">
        <h3 class="text-lg font-bold text-indigo-700 mb-2">What is a Business Analyst?</h3>
        <p class="text-sm text-gray-700">A BA is a bridge between business stakeholders and technical teams, responsible for understanding business problems, gathering requirements, and ensuring solutions deliver value. The role focuses on <strong>what</strong> needs to be built, not <strong>how</strong> to build it.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="card-hover bg-white border-2 border-purple-200 p-5 rounded-xl">
          <h3 class="text-lg font-bold text-purple-700 mb-3">Common BA Titles</h3>
          <p class="text-xs text-gray-600 mb-3">Many organizations use different titles for the same core BA activities. Don't focus on the title—focus on the work outputs:</p>
          <div class="grid grid-cols-2 gap-2">
            <div class="bg-indigo-50 p-2 rounded text-xs text-center">Business Analyst</div>
            <div class="bg-purple-50 p-2 rounded text-xs text-center">Systems Analyst</div>
            <div class="bg-pink-50 p-2 rounded text-xs text-center">Process Analyst</div>
            <div class="bg-rose-50 p-2 rounded text-xs text-center">Data Analyst</div>
            <div class="bg-orange-50 p-2 rounded text-xs text-center">Product Owner</div>
            <div class="bg-amber-50 p-2 rounded text-xs text-center">Requirements Analyst</div>
          </div>
        </div>

        <div class="card-hover bg-white border-2 border-green-200 p-5 rounded-xl">
          <h3 class="text-lg font-bold text-green-700 mb-3">6 Essential Skills</h3>
          <ul class="space-y-2 text-xs">
            <li class="flex items-start gap-2">
              <span class="text-indigo-500 font-bold">1.</span>
              <div><strong>Analytical Thinking:</strong> Break down complex problems, identify patterns, find root causes</div>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-500 font-bold">2.</span>
              <div><strong>Communication:</strong> Translate technical jargon for business, business needs for IT</div>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-pink-500 font-bold">3.</span>
              <div><strong>Problem Solving:</strong> Identify solutions that balance feasibility, cost, and business value</div>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-rose-500 font-bold">4.</span>
              <div><strong>Technical Proficiency:</strong> Understand systems, databases, APIs to evaluate solutions</div>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-orange-500 font-bold">5.</span>
              <div><strong>Domain Knowledge:</strong> Deep understanding of industry, business processes, regulations</div>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-amber-500 font-bold">6.</span>
              <div><strong>Facilitation:</strong> Lead workshops, manage conflicts, drive consensus among stakeholders</div>
            </li>
          </ul>
        </div>
      </div>
    `
  },

  // 3. Adaptive vs Predictive
  {
    title: "Adaptive vs Predictive Methodologies",
    subtitle: "Two Fundamental Approaches to Project Management",
    type: "content",
    notes: "Adaptive (Agile) welcomes changing requirements even late in development. Predictive (Waterfall) requires extensive upfront planning with controlled changes. Choice depends on requirement stability, team experience, and project complexity. Time: 4 min.",
    content: `
      <div class="bg-purple-50 border-2 border-purple-200 p-4 rounded-xl mb-4">
        <p class="text-sm text-gray-700"><strong>Key Difference:</strong> Adaptive methodologies expect and embrace change throughout the project lifecycle, while Predictive methodologies aim to define all requirements upfront and minimize changes through formal control processes.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="card-hover bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-green-300 p-5 rounded-xl">
          <h3 class="text-xl font-bold text-green-700 mb-3 text-center">Adaptive (Agile)</h3>
          <p class="text-xs text-gray-600 mb-3 text-center">Iterative approach with continuous feedback loops</p>
          <ul class="text-sm space-y-2">
            <li>✓ <strong>Embraces change:</strong> Requirements evolve based on learning and feedback</li>
            <li>✓ <strong>Iterative development:</strong> Deliver working software in 2-4 week sprints</li>
            <li>✓ <strong>Frequent feedback:</strong> Daily standups, sprint reviews, retrospectives</li>
            <li>✓ <strong>Working software priority:</strong> Documentation is minimal but sufficient</li>
            <li>✓ <strong>Cross-functional teams:</strong> BA, developers, testers collaborate daily</li>
          </ul>
          <div class="mt-3 p-2 bg-white rounded">
            <p class="text-xs font-bold text-green-700">Examples: Scrum, Kanban, SAFe, DevOps</p>
            <p class="text-xs text-gray-600 mt-1"><strong>Best for:</strong> Evolving requirements, innovation, customer-facing products</p>
          </div>
        </div>

        <div class="card-hover bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-300 p-5 rounded-xl">
          <h3 class="text-xl font-bold text-blue-700 mb-3 text-center">Predictive (Waterfall)</h3>
          <p class="text-xs text-gray-600 mb-3 text-center">Sequential approach with extensive upfront planning</p>
          <ul class="text-sm space-y-2">
            <li>✓ <strong>Detailed planning:</strong> All requirements defined before development starts</li>
            <li>✓ <strong>Sequential phases:</strong> Requirements → Design → Development → Testing → Deploy</li>
            <li>✓ <strong>Comprehensive docs:</strong> BRD, FRD, design specs, test plans all complete upfront</li>
            <li>✓ <strong>Fixed baseline:</strong> Scope, budget, timeline locked after planning</li>
            <li>✓ <strong>Formal change control:</strong> Changes require approval, impact analysis, re-baseline</li>
          </ul>
          <div class="mt-3 p-2 bg-white rounded">
            <p class="text-xs font-bold text-blue-700">Examples: Waterfall, V-Model</p>
            <p class="text-xs text-gray-600 mt-1"><strong>Best for:</strong> Stable requirements, regulated industries, infrastructure projects</p>
          </div>
        </div>
      </div>
    `
  },

  // 4. Framework Comparison
  {
    title: "Framework Comparison",
    subtitle: "When to Use Each Methodology",
    type: "content",
    notes: "Waterfall = regulated/fixed, V-Model = quality-critical, Scrum = product dev, Kanban = support/ops, SAFe = enterprise scale, DevOps = continuous delivery. Emphasize that context determines the right framework. Time: 5 min.",
    content: `
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-300 p-4 rounded-xl mb-4">
        <p class="text-sm text-gray-700"><strong>Selection Principle:</strong> Choose based on requirement stability, regulatory constraints, team maturity, and delivery urgency. Many organizations blend frameworks (e.g., "Water-Scrum-Fall").</p>
      </div>

      <!-- Visual Framework Comparison -->
      <div class="bg-white border-2 border-gray-300 p-5 rounded-xl mb-4">
        <h4 class="font-bold text-gray-800 mb-3 text-center">Visual Framework Comparison</h4>
        
        <div class="grid md:grid-cols-5 gap-3 text-xs">
          <!-- Agile Cycle -->
          <div class="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-300 p-3 rounded-lg">
            <h5 class="font-bold text-orange-700 text-center mb-2">Agile</h5>
            <svg viewBox="0 0 340 180" class="w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <!-- Orange to Yellow gradient for ring -->
                <linearGradient id="agileRing" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#dc5d14;stop-opacity:1" />
                  <stop offset="25%" style="stop-color:#e67e22;stop-opacity:1" />
                  <stop offset="75%" style="stop-color:#f39c12;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#f5b041;stop-opacity:1" />
                </linearGradient>
                <!-- Arrow markers -->
                <marker id="arrowDefine" markerWidth="12" markerHeight="12" refX="10" refY="3" orient="auto">
                  <polygon points="0 0, 12 3, 0 6" fill="#dc2626"/>
                </marker>
                <marker id="arrowRelease" markerWidth="12" markerHeight="12" refX="10" refY="3" orient="auto">
                  <polygon points="0 0, 12 3, 0 6" fill="#f39c12"/>
                </marker>
                <marker id="arrowBuild" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#f39c12"/>
                </marker>
              </defs>
              
              <!-- Main circular ring -->
              <circle cx="170" cy="90" r="55" fill="none" stroke="url(#agileRing)" stroke-width="24"/>
              
              <!-- BUILD label at top with arrow -->
              <text x="170" y="25" fill="#000" font-size="14" font-weight="bold" text-anchor="middle">BUILD</text>
              <path d="M 160 28 Q 155 32, 158 36" fill="none" stroke="#f39c12" stroke-width="2" marker-end="url(#arrowBuild)"/>
              
              <!-- Center white circle -->
              <circle cx="170" cy="90" r="42" fill="white"/>
              <text x="170" y="98" fill="#000" font-size="20" font-weight="bold" text-anchor="middle">AGILE</text>
              
              <!-- DEFINE arrow (left side, entering) -->
              <path d="M 20 90 L 95 90" stroke="#dc2626" stroke-width="14" marker-end="url(#arrowDefine)"/>
              <rect x="15" y="75" width="70" height="30" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
              <text x="50" y="95" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">DEFINE</text>
              
              <!-- RELEASE arrow (right side, exiting) -->
              <path d="M 245 90 L 320 90" stroke="#f39c12" stroke-width="14" marker-end="url(#arrowRelease)"/>
              <rect x="255" y="75" width="70" height="30" fill="#f39c12" stroke="#d97706" stroke-width="2"/>
              <text x="290" y="95" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">RELEASE</text>
              
              <!-- Small labels around the ring -->
              <text x="210" y="50" fill="#666" font-size="9" font-weight="bold">Test</text>
              <text x="125" y="50" fill="#666" font-size="9" font-weight="bold">Plan</text>
            </svg>
            <p class="text-center text-gray-600 mt-2 font-semibold text-[9px]">Iterative Cycle</p>
          </div>

          <!-- Waterfall Flow -->
          <div class="bg-blue-50 border-2 border-blue-300 p-3 rounded-lg">
            <h5 class="font-bold text-blue-700 text-center mb-2">Waterfall</h5>
            <svg viewBox="0 0 200 250" class="w-full" xmlns="http://www.w3.org/2000/svg">
              <rect x="40" y="10" width="120" height="30" fill="#3b82f6" rx="5"/>
              <text x="100" y="29" fill="white" font-size="11" text-anchor="middle">Requirements</text>
              <path d="M 100 40 L 100 50" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrowblue)"/>
              
              <rect x="40" y="50" width="120" height="30" fill="#6366f1" rx="5"/>
              <text x="100" y="69" fill="white" font-size="11" text-anchor="middle">Design</text>
              <path d="M 100 80 L 100 90" stroke="#6366f1" stroke-width="3" marker-end="url(#arrowblue)"/>
              
              <rect x="40" y="90" width="120" height="30" fill="#8b5cf6" rx="5"/>
              <text x="100" y="109" fill="white" font-size="11" text-anchor="middle">Development</text>
              <path d="M 100 120 L 100 130" stroke="#8b5cf6" stroke-width="3" marker-end="url(#arrowblue)"/>
              
              <rect x="40" y="130" width="120" height="30" fill="#a855f7" rx="5"/>
              <text x="100" y="149" fill="white" font-size="11" text-anchor="middle">Testing</text>
              <path d="M 100 160 L 100 170" stroke="#a855f7" stroke-width="3" marker-end="url(#arrowblue)"/>
              
              <rect x="40" y="170" width="120" height="30" fill="#c026d3" rx="5"/>
              <text x="100" y="189" fill="white" font-size="11" text-anchor="middle">Deployment</text>
              
              <defs>
                <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#3b82f6"/>
                </marker>
              </defs>
            </svg>
            <p class="text-center text-gray-600 mt-2 font-semibold">Sequential ⬇️</p>
          </div>

          <!-- V-Model Flow (Enhanced) -->
          <div class="bg-purple-50 border-2 border-purple-300 p-3 rounded-lg">
            <h5 class="font-bold text-purple-700 text-center mb-2">V-Model</h5>
            <svg viewBox="0 0 240 250" class="w-full" xmlns="http://www.w3.org/2000/svg">
              <!-- Left side labels -->
              <text x="10" y="15" fill="#6366f1" font-size="8" font-weight="bold">STAGE 1</text>
              <text x="10" y="65" fill="#8b5cf6" font-size="8" font-weight="bold">STAGE 2</text>
              <text x="10" y="115" fill="#a855f7" font-size="8" font-weight="bold">STAGE 3</text>
              
              <!-- Right side labels -->
              <text x="185" y="15" fill="#22c55e" font-size="8" font-weight="bold">STAGE 6</text>
              <text x="185" y="65" fill="#16a34a" font-size="8" font-weight="bold">STAGE 5</text>
              <text x="185" y="115" fill="#15803d" font-size="8" font-weight="bold">STAGE 4</text>
              
              <!-- Left side (Development) -->
              <rect x="30" y="5" width="75" height="22" fill="#d4a574" rx="4" stroke="#8b7355" stroke-width="1"/>
              <text x="67.5" y="19" fill="#000" font-size="9" text-anchor="middle">DEFINE REQS</text>
              
              <rect x="30" y="55" width="75" height="22" fill="#d4a574" rx="4" stroke="#8b7355" stroke-width="1"/>
              <text x="67.5" y="69" fill="#000" font-size="9" text-anchor="middle">DESIGN SOL</text>
              
              <rect x="30" y="105" width="75" height="22" fill="#d4a574" rx="4" stroke="#8b7355" stroke-width="1"/>
              <text x="67.5" y="119" fill="#000" font-size="9" text-anchor="middle">DEVELOP SOL</text>
              
              <!-- Right side (Testing) -->
              <rect x="135" y="5" width="75" height="22" fill="#f5cba7" rx="4" stroke="#d4a574" stroke-width="1"/>
              <text x="172.5" y="13" fill="#000" font-size="8" text-anchor="middle">ENSURE USER</text>
              <text x="172.5" y="21" fill="#000" font-size="8" text-anchor="middle">ACCEPTANCE</text>
              
              <rect x="135" y="55" width="75" height="22" fill="#f5cba7" rx="4" stroke="#d4a574" stroke-width="1"/>
              <text x="172.5" y="69" fill="#000" font-size="9" text-anchor="middle">TEST SOLUTION</text>
              
              <rect x="135" y="105" width="75" height="22" fill="#f5cba7" rx="4" stroke="#d4a574" stroke-width="1"/>
              <text x="172.5" y="119" fill="#000" font-size="9" text-anchor="middle">TEST MODULES</text>
              
              <!-- V-shape gray background -->
              <polygon points="105,16 120,135 105,135 67.5,27" fill="#999" opacity="0.3"/>
              <polygon points="135,16 120,135 135,135 172.5,27" fill="#999" opacity="0.3"/>
              
              <!-- Connecting arrows -->
              <path d="M 105 16 L 135 16" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrowpurple)"/>
              <path d="M 105 66 L 135 66" stroke="#a855f7" stroke-width="2" marker-end="url(#arrowpurple)"/>
              <path d="M 105 116 L 135 116" stroke="#c026d3" stroke-width="2" marker-end="url(#arrowpurple)"/>
              
              <defs>
                <marker id="arrowpurple" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#8b5cf6"/>
                </marker>
              </defs>
            </svg>
            <p class="text-center text-gray-600 mt-2 font-semibold">Verification ↔️</p>
          </div>

          <!-- Kanban Board -->
          <div class="bg-cyan-50 border-2 border-cyan-300 p-3 rounded-lg">
            <h5 class="font-bold text-cyan-700 text-center mb-2">� Kanban</h5>
            <svg viewBox="0 0 240 250" class="w-full" xmlns="http://www.w3.org/2000/svg">
              <!-- Board columns -->
              <rect x="5" y="25" width="55" height="160" fill="#e0e7ff" stroke="#6366f1" stroke-width="2" rx="4"/>
              <text x="32.5" y="17" fill="#4f46e5" font-size="10" font-weight="bold" text-anchor="middle">TO DO</text>
              
              <rect x="65" y="25" width="55" height="160" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" rx="4"/>
              <text x="92.5" y="17" fill="#d97706" font-size="10" font-weight="bold" text-anchor="middle">IN PROG</text>
              
              <rect x="125" y="25" width="55" height="160" fill="#dbeafe" stroke="#3b82f6" stroke-width="2" rx="4"/>
              <text x="152.5" y="17" fill="#2563eb" font-size="10" font-weight="bold" text-anchor="middle">REVIEW</text>
              
              <rect x="185" y="25" width="50" height="160" fill="#d1fae5" stroke="#10b981" stroke-width="2" rx="4"/>
              <text x="210" y="17" fill="#059669" font-size="10" font-weight="bold" text-anchor="middle">DONE</text>
              
              <!-- Sticky notes/cards in TO DO -->
              <rect x="10" y="32" width="45" height="18" fill="#fef08a" stroke="#ca8a04" stroke-width="1" rx="2"/>
              <text x="32.5" y="43" fill="#000" font-size="7" text-anchor="middle">Task A</text>
              
              <rect x="10" y="55" width="45" height="18" fill="#fef08a" stroke="#ca8a04" stroke-width="1" rx="2"/>
              <text x="32.5" y="66" fill="#000" font-size="7" text-anchor="middle">Task B</text>
              
              <rect x="10" y="78" width="45" height="18" fill="#fef08a" stroke="#ca8a04" stroke-width="1" rx="2"/>
              <text x="32.5" y="89" fill="#000" font-size="7" text-anchor="middle">Task C</text>
              
              <!-- Cards in IN PROGRESS (WIP limit) -->
              <rect x="70" y="32" width="45" height="18" fill="#fde68a" stroke="#f59e0b" stroke-width="1" rx="2"/>
              <text x="92.5" y="43" fill="#000" font-size="7" text-anchor="middle">Task D</text>
              
              <rect x="70" y="55" width="45" height="18" fill="#fde68a" stroke="#f59e0b" stroke-width="1" rx="2"/>
              <text x="92.5" y="66" fill="#000" font-size="7" text-anchor="middle">Task E</text>
              
              <!-- WIP Limit indicator -->
              <text x="92.5" y="100" fill="#dc2626" font-size="9" font-weight="bold" text-anchor="middle">WIP: 2/3</text>
              
              <!-- Card in REVIEW -->
              <rect x="130" y="32" width="45" height="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1" rx="2"/>
              <text x="152.5" y="43" fill="#000" font-size="7" text-anchor="middle">Task F</text>
              
              <!-- Cards in DONE -->
              <rect x="190" y="32" width="40" height="16" fill="#86efac" stroke="#10b981" stroke-width="1" rx="2"/>
              <text x="210" y="42" fill="#000" font-size="7" text-anchor="middle">Task G</text>
              
              <rect x="190" y="52" width="40" height="16" fill="#86efac" stroke="#10b981" stroke-width="1" rx="2"/>
              <text x="210" y="62" fill="#000" font-size="7" text-anchor="middle">Task H</text>
              
              <rect x="190" y="72" width="40" height="16" fill="#86efac" stroke="#10b981" stroke-width="1" rx="2"/>
              <text x="210" y="82" fill="#000" font-size="7" text-anchor="middle">Task I</text>
              
              <!-- Flow arrow -->
              <path d="M 30 205 L 210 205" stroke="#6b7280" stroke-width="2" marker-end="url(#arrowgray)" stroke-dasharray="4,2"/>
              <text x="120" y="220" fill="#4b5563" font-size="9" font-weight="bold" text-anchor="middle">Continuous Flow →</text>
              
              <defs>
                <marker id="arrowgray" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#6b7280"/>
                </marker>
              </defs>
            </svg>
            <p class="text-center text-gray-600 mt-2 font-semibold">Pull System →</p>
          </div>

          <!-- DevOps Infinity Loop -->
          <div class="bg-gradient-to-r from-blue-50 to-orange-50 border-2 border-orange-300 p-3 rounded-lg">
            <h5 class="font-bold text-orange-700 text-center mb-2">DevOps</h5>
            
            <svg viewBox="0 0 420 180" class="w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <!-- Blue gradient -->
                <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#5dade2;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#2874a6;stop-opacity:1" />
                </linearGradient>
                <!-- Orange gradient -->
                <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#f39c12;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#dc7633;stop-opacity:1" />
                </linearGradient>
              </defs>
              
              <!-- Left circle (DEV) -->
              <circle cx="120" cy="90" r="65" fill="none" stroke="url(#blueGrad)" stroke-width="26"/>
              
              <!-- DEV labels around circle -->
              <text x="120" y="35" fill="#2874a6" font-size="12" font-weight="bold" text-anchor="middle">CODE</text>
              <text x="55" y="95" fill="#2874a6" font-size="12" font-weight="bold" text-anchor="middle">BUILD</text>
              <text x="120" y="155" fill="#2874a6" font-size="12" font-weight="bold" text-anchor="middle">TEST</text>
              
              <!-- DEV center -->
              <circle cx="120" cy="90" r="45" fill="white"/>
              <text x="120" y="98" fill="#2874a6" font-size="24" font-weight="bold" text-anchor="middle">Dev</text>
              
              <!-- Right circle (OPS) -->
              <circle cx="300" cy="90" r="65" fill="none" stroke="url(#orangeGrad)" stroke-width="26"/>
              
              <!-- OPS labels around circle -->
              <text x="300" y="35" fill="#dc7633" font-size="12" font-weight="bold" text-anchor="middle">DEPLOY</text>
              <text x="365" y="95" fill="#dc7633" font-size="12" font-weight="bold" text-anchor="middle">OPERATE</text>
              <text x="300" y="155" fill="#dc7633" font-size="12" font-weight="bold" text-anchor="middle">MONITOR</text>
              
              <!-- OPS center -->
              <circle cx="300" cy="90" r="45" fill="white"/>
              <text x="300" y="98" fill="#dc7633" font-size="24" font-weight="bold" text-anchor="middle">Ops</text>
              
              <!-- Center connecting labels -->
              <text x="210" y="75" fill="#5dade2" font-size="11" font-weight="bold" text-anchor="middle">PLAN</text>
              <text x="210" y="110" fill="#f39c12" font-size="11" font-weight="bold" text-anchor="middle">RELEASE</text>
            </svg>
            <p class="text-center text-gray-600 mt-2 font-semibold text-[9px]">Continuous Integration + Continuous Delivery</p>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-3 text-xs">
        <!-- Waterfall Framework -->
        <div class="card-hover group cursor-pointer bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-3 rounded">
          <h4 class="font-bold text-blue-700">Waterfall (Predictive)</h4>
          <p class="text-gray-700 mt-1"><strong>Definition:</strong> Sequential approach where each phase must be completed before the next begins. Requirements → Design → Development → Testing → Deployment.</p>
          <p class="text-gray-600 mt-1 text-[10px]"><strong>Best for:</strong> Stable requirements, regulated industries, fixed-price contracts</p>
          <div class="mt-2 p-2 bg-blue-50 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px]">
            <div class="mb-1"><strong class="text-blue-700">Example:</strong> Building a bridge—you can't start construction before completing the design phase.</div>
          </div>
        </div>

        <!-- V-Model Framework -->
        <div class="card-hover group cursor-pointer bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 p-3 rounded">
          <h4 class="font-bold text-purple-700">V-Model (Verification & Validation)</h4>
          <p class="text-gray-700 mt-1"><strong>Definition:</strong> Extension of Waterfall where each development phase has a corresponding testing phase. Left side descends (development), right side ascends (testing).</p>
          <p class="text-gray-600 mt-1 text-[10px]"><strong>Best for:</strong> Safety-critical systems, high-quality requirements, strict verification needs</p>
          <div class="mt-2 p-2 bg-purple-50 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px]">
            <div class="mb-1"><strong class="text-purple-700">Example:</strong> Medical device software—each requirement has a matching test case to verify it works correctly.</div>
          </div>
        </div>

        <!-- Scrum Framework -->
        <div class="card-hover group cursor-pointer bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-3 rounded">
          <h4 class="font-bold text-green-700">Scrum (Agile)</h4>
          <p class="text-gray-700 mt-1"><strong>Definition:</strong> Iterative framework that delivers work in short cycles called Sprints (2-4 weeks). Team plans, builds, reviews, and adapts each sprint.</p>
          <p class="text-gray-600 mt-1 text-[10px]"><strong>Best for:</strong> Evolving requirements, new product development, need for frequent feedback</p>
          <div class="mt-2 p-2 bg-green-50 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px]">
            <div class="mb-1"><strong class="text-green-700">Example:</strong> Mobile app development—release new features every 2 weeks based on user feedback.</div>
          </div>
        </div>

        <!-- Kanban Framework -->
        <div class="card-hover group cursor-pointer bg-gradient-to-r from-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-3 rounded">
          <h4 class="font-bold text-cyan-700">Kanban (Flow-Based)</h4>
          <p class="text-gray-700 mt-1"><strong>Definition:</strong> Visual workflow management using a board with columns (To Do, In Progress, Done). Work flows continuously with WIP (work-in-progress) limits to prevent overload.</p>
          <p class="text-gray-600 mt-1 text-[10px]"><strong>Best for:</strong> Support teams, maintenance work, unpredictable priorities, operations</p>
          <div class="mt-2 p-2 bg-cyan-50 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px]">
            <div><strong class="text-cyan-700">� Example:</strong> IT helpdesk—customer tickets flow through the board with a limit of 3 items in "In Progress" at once to maintain quality.</div>
          </div>
        </div>

        <!-- SAFe Framework -->
        <div class="card-hover group cursor-pointer bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-500 p-3 rounded">
          <h4 class="font-bold text-pink-700">SAFe (Scaled Agile Framework)</h4>
          <p class="text-gray-700 mt-1"><strong>Definition:</strong> Framework for applying Agile practices at enterprise scale with multiple teams (50-1000+ people). Coordinates work through Program Increments (PI) every 8-12 weeks.</p>
          <p class="text-gray-600 mt-1 text-[10px]"><strong>Best for:</strong> Large organizations, multiple coordinated teams, enterprise-wide initiatives</p>
          <div class="mt-2 p-2 bg-pink-50 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px]">
            <div class="mb-1"><strong class="text-pink-700">Example:</strong> Bank with 20 development teams all working on the same digital banking platform—they coordinate through quarterly planning sessions.</div>
          </div>
        </div>

        <!-- DevOps Framework -->
        <div class="card-hover group cursor-pointer bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 p-3 rounded">
          <h4 class="font-bold text-orange-700">DevOps (Culture + Automation)</h4>
          <p class="text-gray-700 mt-1"><strong>Definition:</strong> Combines Development and Operations teams to deliver software faster through automation (CI/CD pipelines), continuous monitoring, and shared responsibility.</p>
          <p class="text-gray-600 mt-1 text-[10px]"><strong>Best for:</strong> Cloud applications, frequent deployments, SaaS products, microservices</p>
          <div class="mt-2 p-2 bg-orange-50 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px]">
            <div><strong class="text-orange-700">Example:</strong> Netflix—automated testing + deployment pipeline enables 100+ production changes daily</div>
          </div>
        </div>
      </div>
    `
  },

  // 5. Stakeholders & RACI
  {
    title: "Stakeholders & RACI Matrix",
    subtitle: "Identifying and Assigning Responsibilities",
    type: "content",
    notes: "Stakeholders are anyone impacted. Use power/interest grid for prioritization. RACI clarifies roles—only 1 Accountable per activity. Common mistake: confusing Responsible and Accountable. Time: 5 min.",
    content: `
      <div class="grid md:grid-cols-2 gap-4">
        <div class="space-y-3">
          <div class="bg-indigo-50 border-2 border-indigo-200 p-4 rounded-xl">
            <h3 class="font-bold text-indigo-700 mb-2">Who are Stakeholders?</h3>
            <p class="text-sm text-gray-700 mb-2">Anyone impacted by the project (positive or negative). Use the <strong>Power/Interest Grid</strong> to prioritize engagement.</p>
            <p class="text-xs text-gray-600"><strong>Identification Technique:</strong> Ask "Who will use it? Who pays for it? Who is affected by it? Who can block it?"</p>
          </div>

          <div class="card-hover group cursor-pointer bg-white border-2 border-purple-200 p-4 rounded-xl">
            <h4 class="font-bold text-purple-700 mb-2">Common Categories:</h4>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="bg-purple-50 p-2 rounded">Executive Sponsors</div>
              <div class="bg-pink-50 p-2 rounded">End Users</div>
              <div class="bg-rose-50 p-2 rounded">Project Manager</div>
              <div class="bg-orange-50 p-2 rounded">IT/Development</div>
              <div class="bg-amber-50 p-2 rounded">Customers</div>
              <div class="bg-yellow-50 p-2 rounded">Vendors/Partners</div>
            </div>
            <div class="mt-2 p-2 bg-purple-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <strong>Don't forget:</strong> Support staff, legal/compliance, auditors, adjacent teams
            </div>
          </div>
        </div>

        <div class="bg-white border-2 border-green-200 p-4 rounded-xl">
          <h3 class="font-bold text-green-700 mb-3">🔖 RACI Matrix</h3>
          <p class="text-xs text-gray-600 mb-3">Clarifies who does what. Each activity must have exactly <strong>one Accountable</strong> person.</p>
          <div class="space-y-2 text-sm mb-4">
            <div class="card-hover group cursor-pointer bg-green-50 p-2 rounded">
              <strong class="text-green-600">R - Responsible:</strong> Does the work
              <div class="text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">Can be multiple people. Example: Developers write code</div>
            </div>
            <div class="card-hover group cursor-pointer bg-blue-50 p-2 rounded">
              <strong class="text-blue-600">A - Accountable:</strong> Final authority (1 person)
              <div class="text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">Makes final decision, owns outcome. Example: Product Owner approves</div>
            </div>
            <div class="card-hover group cursor-pointer bg-purple-50 p-2 rounded">
              <strong class="text-purple-600">C - Consulted:</strong> Provides input (2-way)
              <div class="text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">SMEs give feedback before decision. Example: Security team reviews design</div>
            </div>
            <div class="card-hover group cursor-pointer bg-gray-50 p-2 rounded">
              <strong class="text-gray-600">I - Informed:</strong> Kept updated (1-way)
              <div class="text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">Notified after decision. Example: CEO receives status reports</div>
            </div>
          </div>

          <!-- RACI Matrix Example Table -->
          <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 p-3 rounded-lg">
            <h4 class="font-bold text-green-800 text-xs mb-2 text-center">📋 Example: E-commerce Project</h4>
            <div class="overflow-x-auto">
              <table class="w-full text-xs border-collapse">
                <thead>
                  <tr class="bg-green-700 text-white">
                    <th class="border border-green-600 p-1 text-left">Activity</th>
                    <th class="border border-green-600 p-1 text-center">BA</th>
                    <th class="border border-green-600 p-1 text-center">PM</th>
                    <th class="border border-green-600 p-1 text-center">Dev</th>
                    <th class="border border-green-600 p-1 text-center">QA</th>
                    <th class="border border-green-600 p-1 text-center">Sponsor</th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  <tr>
                    <td class="border border-gray-300 p-1">Gather Requirements</td>
                    <td class="border border-gray-300 p-1 text-center bg-green-100 font-bold">R/A</td>
                    <td class="border border-gray-300 p-1 text-center bg-purple-100">C</td>
                    <td class="border border-gray-300 p-1 text-center bg-purple-100">C</td>
                    <td class="border border-gray-300 p-1 text-center bg-gray-100">I</td>
                    <td class="border border-gray-300 p-1 text-center bg-gray-100">I</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 p-1">Approve BRD</td>
                    <td class="border border-gray-300 p-1 text-center bg-green-100 font-bold">R</td>
                    <td class="border border-gray-300 p-1 text-center bg-purple-100">C</td>
                    <td class="border border-gray-300 p-1 text-center bg-purple-100">C</td>
                    <td class="border border-gray-300 p-1 text-center bg-gray-100">I</td>
                    <td class="border border-gray-300 p-1 text-center bg-blue-100 font-bold">A</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 p-1">Write Code</td>
                    <td class="border border-gray-300 p-1 text-center bg-purple-100">C</td>
                    <td class="border border-gray-300 p-1 text-center bg-gray-100">I</td>
                    <td class="border border-gray-300 p-1 text-center bg-green-100 font-bold">R/A</td>
                    <td class="border border-gray-300 p-1 text-center bg-purple-100">C</td>
                    <td class="border border-gray-300 p-1 text-center bg-gray-100">I</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 p-1">Test Application</td>
                    <td class="border border-gray-300 p-1 text-center bg-purple-100">C</td>
                    <td class="border border-gray-300 p-1 text-center bg-gray-100">I</td>
                    <td class="border border-gray-300 p-1 text-center bg-purple-100">C</td>
                    <td class="border border-gray-300 p-1 text-center bg-green-100 font-bold">R/A</td>
                    <td class="border border-gray-300 p-1 text-center bg-gray-100">I</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 p-1">Deploy to Production</td>
                    <td class="border border-gray-300 p-1 text-center bg-gray-100">I</td>
                    <td class="border border-gray-300 p-1 text-center bg-blue-100 font-bold">A</td>
                    <td class="border border-gray-300 p-1 text-center bg-green-100 font-bold">R</td>
                    <td class="border border-gray-300 p-1 text-center bg-purple-100">C</td>
                    <td class="border border-gray-300 p-1 text-center bg-gray-100">I</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="grid grid-cols-4 gap-1 mt-2 text-xs">
              <div class="flex items-center gap-1"><div class="w-3 h-3 bg-green-100 border border-gray-400"></div><span>R/A</span></div>
              <div class="flex items-center gap-1"><div class="w-3 h-3 bg-blue-100 border border-gray-400"></div><span>A only</span></div>
              <div class="flex items-center gap-1"><div class="w-3 h-3 bg-purple-100 border border-gray-400"></div><span>C</span></div>
              <div class="flex items-center gap-1"><div class="w-3 h-3 bg-gray-100 border border-gray-400"></div><span>I</span></div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // 6. Requirements Types (Functional, Non-Functional, Constraints)
  {
    title: "Requirement Types",
    subtitle: "Functional, Non-Functional, Constraints",
    type: "content",
    notes: "Functional = what system does (features), Non-Functional = quality attributes (how well), Constraints = limitations (boundaries). All must be testable and traceable. Time: 5 min.",
    content: `
      <div class="space-y-3">
        <div class="card-hover group cursor-pointer bg-gradient-to-r from-indigo-50 to-purple-100 border-l-4 border-indigo-500 p-4 rounded-xl">
          <h3 class="font-bold text-indigo-700 mb-2">Functional Requirements</h3>
          <p class="text-sm text-gray-700 mb-2">What the system must <strong>DO</strong> — specific behaviors, features, and processes</p>
          <div class="grid md:grid-cols-2 gap-2 text-xs bg-white p-3 rounded">
            <div>• System shall send email confirmation within 30 sec</div>
            <div>• System shall calculate sales tax based on zip code</div>
            <div>• System shall validate credit cards against Luhn algorithm</div>
            <div>• System shall generate PDF reports with company logo</div>
          </div>
          <div class="mt-2 p-2 bg-indigo-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <strong>Test approach:</strong> Each requirement becomes a test case. "Given X, When Y, Then Z"
          </div>
        </div>

        <div class="card-hover group cursor-pointer bg-gradient-to-r from-cyan-50 to-blue-100 border-l-4 border-cyan-500 p-4 rounded-xl">
          <h3 class="font-bold text-cyan-700 mb-2">Non-Functional Requirements (NFRs)</h3>
          <p class="text-sm text-gray-700 mb-2">HOW WELL the system performs — quality attributes (often called "-ilities")</p>
          <div class="grid md:grid-cols-3 gap-2 text-xs bg-white p-3 rounded">
            <div><strong>Performance:</strong> Page load < 2 sec (95th percentile)</div>
            <div><strong>Security:</strong> AES-256 encryption at rest</div>
            <div><strong>Availability:</strong> 99.9% uptime (43 min downtime/month)</div>
            <div><strong>Scalability:</strong> Support 10K concurrent users</div>
            <div><strong>Usability:</strong> New user completes task in 5 min</div>
            <div><strong>Reliability:</strong> MTBF > 720 hours</div>
          </div>
          <div class="mt-2 p-2 bg-cyan-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <strong>Common mistake:</strong> "User-friendly" is not measurable. Use "80% of users complete task without help"
          </div>
        </div>

        <div class="card-hover group cursor-pointer bg-gradient-to-r from-purple-50 to-pink-100 border-l-4 border-purple-500 p-4 rounded-xl">
          <h3 class="font-bold text-purple-700 mb-2">Constraints</h3>
          <p class="text-sm text-gray-700 mb-2">Limitations that restrict design choices — non-negotiable boundaries</p>
          <div class="grid md:grid-cols-2 gap-2 text-xs bg-white p-3 rounded">
            <div>• Must use Oracle 19c database (enterprise standard)</div>
            <div>• Total project budget ≤ $500K</div>
            <div>• Must launch by Dec 31 (regulatory deadline)</div>
            <div>• Must comply with GDPR, HIPAA, SOX</div>
            <div>• Must run on Chrome 90+, Firefox 88+, Safari 14+</div>
            <div>• Cannot store data outside US</div>
          </div>
          <div class="mt-2 p-2 bg-purple-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <strong>Why document:</strong> Constraints explain why certain solutions were rejected
          </div>
        </div>
      </div>
    `
  },

  // 7. SMART Requirements
  {
    title: "SMART Requirements",
    subtitle: "Quality Criteria for Effective Requirements",
    type: "content",
    notes: "SMART ensures requirements are actionable and testable. Walk through each letter with examples. Emphasize: vague requirements lead to project failure. Time: 5 min.",
    content: `
      <!-- SMART Hexagons Visual -->
      <div class="flex justify-center mb-4">
        <div class="flex gap-2 items-center">
          <!-- S Hexagon -->
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 border-2 border-green-400 rounded-lg flex items-center justify-center">
              <span class="text-3xl font-bold text-green-700">S</span>
            </div>
            <div class="text-xs font-bold text-green-700 mt-1">Specific</div>
          </div>
          <!-- M Hexagon -->
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-purple-400 rounded-lg flex items-center justify-center">
              <span class="text-3xl font-bold text-purple-700">M</span>
            </div>
            <div class="text-xs font-bold text-purple-700 mt-1">Measurable</div>
          </div>
          <!-- A Hexagon -->
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-amber-400 rounded-lg flex items-center justify-center">
              <span class="text-3xl font-bold text-amber-700">A</span>
            </div>
            <div class="text-xs font-bold text-amber-700 mt-1">Attainable</div>
          </div>
          <!-- R Hexagon -->
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 border-2 border-orange-400 rounded-lg flex items-center justify-center">
              <span class="text-3xl font-bold text-orange-700">R</span>
            </div>
            <div class="text-xs font-bold text-orange-700 mt-1">Relevant</div>
          </div>
          <!-- T Hexagon -->
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-400 rounded-lg flex items-center justify-center">
              <span class="text-3xl font-bold text-blue-700">T</span>
            </div>
            <div class="text-xs font-bold text-blue-700 mt-1">Traceable</div>
          </div>
        </div>
      </div>

      <!-- Detailed SMART Criteria -->
      <div class="grid md:grid-cols-2 gap-4">
        <!-- LEFT COLUMN -->
        <div class="space-y-3">
          <!-- SPECIFIC -->
          <div class="bg-white border-2 border-green-200 p-4 rounded-xl">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span class="text-lg font-bold text-green-700">S</span>
              </div>
              <h4 class="font-bold text-green-700 text-sm">Specific</h4>
            </div>
            <p class="text-xs text-gray-700 mb-2">Be as specific as possible, so that everyone interprets it the same way. It should use consistent language across all requirements.</p>
            <div class="bg-green-50 border-l-4 border-green-400 p-2 rounded mt-2">
              <div class="text-xs mb-1"><strong class="text-green-700">To validate specificity, ask:</strong></div>
              <ul class="text-xs text-gray-700 space-y-0.5 ml-3">
                <li>• What is it doing?</li>
                <li>• Why are we doing that?</li>
                <li>• Who is doing it?</li>
                <li>• When must it be finished?</li>
              </ul>
            </div>
            <div class="mt-2 p-2 bg-white border border-green-200 rounded text-xs">
              <div class="mb-1"><strong class="text-green-600">✓ Good:</strong> "Login page must display error message 'Invalid username or password' when credentials are incorrect"</div>
              <div><strong class="text-red-600">✗ Bad:</strong> "System should handle login errors"</div>
            </div>
          </div>

          <!-- MEASURABLE -->
          <div class="bg-white border-2 border-purple-200 p-4 rounded-xl">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span class="text-lg font-bold text-purple-700">M</span>
              </div>
              <h4 class="font-bold text-purple-700 text-sm">Measurable</h4>
            </div>
            <p class="text-xs text-gray-700 mb-2">Set a measurable goal to track and quantify the success. Define exact metrics.</p>
            <div class="bg-purple-50 border-l-4 border-purple-400 p-2 rounded mt-2">
              <div class="text-xs mb-1"><strong class="text-purple-700">Check with questions:</strong></div>
              <ul class="text-xs text-gray-700 space-y-0.5 ml-3">
                <li>• How much?</li>
                <li>• How many?</li>
                <li>• How will I know when it's accomplished?</li>
              </ul>
            </div>
            <div class="mt-2 p-2 bg-white border border-purple-200 rounded text-xs">
              <div class="mb-1"><strong class="text-green-600">✓ Good:</strong> "Page must load within 2 seconds for 95% of requests"</div>
              <div><strong class="text-red-600">✗ Bad:</strong> "Page should load quickly"</div>
            </div>
          </div>

          <!-- ATTAINABLE -->
          <div class="bg-white border-2 border-amber-200 p-4 rounded-xl">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <span class="text-lg font-bold text-amber-700">A</span>
              </div>
              <h4 class="font-bold text-amber-700 text-sm">Attainable</h4>
            </div>
            <p class="text-xs text-gray-700 mb-2">Requirements must be realistic and feasible given the project's scope, budget, time, and technical ability.</p>
            <div class="bg-amber-50 border-l-4 border-amber-400 p-2 rounded mt-2">
              <div class="text-xs mb-1"><strong class="text-amber-700">Check with questions:</strong></div>
              <ul class="text-xs text-gray-700 space-y-0.5 ml-3">
                <li>• Is there a known solution?</li>
                <li>• Can we solve it?</li>
                <li>• Has this been done before?</li>
                <li>• Are there any constraints?</li>
              </ul>
            </div>
            <div class="mt-2 p-2 bg-white border border-amber-200 rounded text-xs">
              <div class="mb-1"><strong class="text-green-600">✓ Good:</strong> "Support 10,000 concurrent users with current cloud infrastructure"</div>
              <div><strong class="text-red-600">✗ Bad:</strong> "Support unlimited users with zero downtime forever"</div>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="space-y-3">
          <!-- RELEVANT (Reasonable) -->
          <div class="bg-white border-2 border-orange-200 p-4 rounded-xl">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span class="text-lg font-bold text-orange-700">R</span>
              </div>
              <h4 class="font-bold text-orange-700 text-sm">Relevant (Reasonable)</h4>
            </div>
            <p class="text-xs text-gray-700 mb-2">Even if a requirement is attainable, it must also be worth the effort. Compare cost vs. benefit—does the value justify the effort?</p>
            <div class="bg-orange-50 border-l-4 border-orange-400 p-2 rounded mt-2">
              <div class="text-xs mb-1"><strong class="text-orange-700">Check with questions:</strong></div>
              <ul class="text-xs text-gray-700 space-y-0.5 ml-3">
                <li>• Is it worthwhile?</li>
                <li>• Is the timing right?</li>
                <li>• Does this match other efforts and needs?</li>
              </ul>
            </div>
            <div class="mt-2 p-2 bg-white border border-orange-200 rounded text-xs">
              <div class="mb-1"><strong class="text-green-600">✓ Good:</strong> "Email notifications for high-value orders over $1000"</div>
              <div><strong class="text-red-600">✗ Bad:</strong> "Custom animation for every button click (takes 200 dev hours)"</div>
            </div>
          </div>

          <!-- TRACEABLE -->
          <div class="bg-white border-2 border-blue-200 p-4 rounded-xl">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span class="text-lg font-bold text-blue-700">T</span>
              </div>
              <h4 class="font-bold text-blue-700 text-sm">Traceable</h4>
            </div>
            <p class="text-xs text-gray-700 mb-2">A requirement must be traceable throughout the project lifecycle, from start to finish, so the team can prove it was addressed correctly in the final product.</p>
            <div class="bg-blue-50 border-l-4 border-blue-400 p-2 rounded mt-2">
              <div class="text-xs mb-1"><strong class="text-blue-700">Check with questions:</strong></div>
              <ul class="text-xs text-gray-700 space-y-0.5 ml-3">
                <li>• Can I ensure this requirement has been correctly implemented in the solution?</li>
                <li>• Can I trace it to the implementation and testing?</li>
              </ul>
            </div>
            <div class="mt-2 p-2 bg-white border border-blue-200 rounded text-xs">
              <div class="mb-1"><strong class="text-blue-700">Traceability Chain:</strong></div>
              <div class="text-xs text-gray-700">Business Need → Requirement (REQ-101) → Design Doc → Code Module → Test Case (TC-101) → User Acceptance</div>
            </div>
          </div>

          <!-- SMART Summary Box -->
          <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-300 p-4 rounded-xl">
            <h4 class="font-bold text-indigo-700 mb-2 text-sm">Why SMART Matters</h4>
            <div class="text-xs text-gray-700 space-y-1">
              <div class="flex gap-2">
                <span>📌</span>
                <span><strong>Reduces ambiguity:</strong> Everyone understands the same thing</span>
              </div>
              <div class="flex gap-2">
                <span>📌</span>
                <span><strong>Enables testing:</strong> QA can validate measurable criteria</span>
              </div>
              <div class="flex gap-2">
                <span>📌</span>
                <span><strong>Controls scope:</strong> Prevents unrealistic "nice-to-haves"</span>
              </div>
              <div class="flex gap-2">
                <span>📌</span>
                <span><strong>Ensures value:</strong> Links requirements to business goals</span>
              </div>
              <div class="flex gap-2">
                <span>📌</span>
                <span><strong>Maintains quality:</strong> Trackable from need to delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // 8. Requirements Process Phases
  {
    title: "Requirements Process Phases",
    subtitle: "From Discovery to Approval",
    type: "content",
    notes: "4 iterative phases: Elicit (gather), Analyze (clarify), Specify (document), Approve (sign-off). Emphasize that these phases often overlap and iterate. Time: 5 min.",
    content: `
      <div class="grid md:grid-cols-4 gap-3">
        <div class="card-hover group cursor-pointer bg-gradient-to-br from-indigo-50 to-purple-100 border-2 border-indigo-300 p-4 rounded-xl text-center">
          <h3 class="font-bold text-indigo-700">1. Elicitation</h3>
          <p class="text-xs text-gray-700 mt-2">Gather needs through interviews, workshops, surveys, observation, document review</p>
          <div class="mt-2 p-2 bg-indigo-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <strong>Deliverables:</strong> Interview notes, workshop output, survey results<br>
            <strong>Duration:</strong> 2-6 weeks
          </div>
        </div>
        <div class="card-hover group cursor-pointer bg-gradient-to-br from-purple-50 to-pink-100 border-2 border-purple-300 p-4 rounded-xl text-center">
          <div class="text-3xl mb-2"></div>
          <h3 class="font-bold text-purple-700">2. Analysis</h3>
          <p class="text-xs text-gray-700 mt-2">Model processes, clarify ambiguities, decompose complex needs, identify gaps and conflicts</p>
          <div class="mt-2 p-2 bg-purple-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <strong>Deliverables:</strong> Process models, gap analysis, conflict resolution<br>
            <strong>Duration:</strong> 3-8 weeks
          </div>
        </div>
        <div class="card-hover group cursor-pointer bg-gradient-to-br from-pink-50 to-rose-100 border-2 border-pink-300 p-4 rounded-xl text-center">
          <div class="text-3xl mb-2"></div>
          <h3 class="font-bold text-pink-700">3. Specification</h3>
          <p class="text-xs text-gray-700 mt-2">Document formally, categorize (functional/NFR), validate correctness, prioritize (MoSCoW)</p>
          <div class="mt-2 p-2 bg-pink-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <strong>Deliverables:</strong> BRD, FRD, use cases, traceability matrix<br>
            <strong>Duration:</strong> 4-10 weeks
          </div>
        </div>
        <div class="card-hover group cursor-pointer bg-gradient-to-br from-rose-50 to-orange-100 border-2 border-rose-300 p-4 rounded-xl text-center">
          <div class="text-3xl mb-2"></div>
          <h3 class="font-bold text-rose-700">4. Approval</h3>
          <p class="text-xs text-gray-700 mt-2">Business approval, technical feasibility review, sponsor sign-off, baseline</p>
          <div class="mt-2 p-2 bg-rose-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <strong>Deliverables:</strong> Signed BRD, requirements baseline<br>
            <strong>Duration:</strong> 1-3 weeks
          </div>
        </div>
      </div>
    `
  },

  // 9. Business Rules
  {
    title: "Business Rules",
    subtitle: "Policies, Regulations, and Decision Logic",
    type: "content",
    notes: "Business rules govern operations and decisions. Often come from legal, compliance, finance. Must be traceable to requirements. Time: 4 min.",
    content: `
      <div class="bg-amber-50 border-2 border-amber-200 p-5 rounded-xl mb-4">
        <h3 class="text-xl font-bold text-amber-700 mb-2">Business Rules</h3>
        <p class="text-sm text-gray-700">Policies, regulations, calculations, or conditions that govern business operations and decision-making. Business rules are <strong>externalized logic</strong> that can change without code changes.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="space-y-2 text-sm">
          <div class="card-hover group cursor-pointer bg-white border-l-4 border-indigo-500 p-3 rounded">
            <strong class="text-indigo-600">Calculation:</strong> Late fee = $25 + 2% of balance
            <div class="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Source: Finance policy FIN-2023-05</div>
          </div>
          <div class="card-hover group cursor-pointer bg-white border-l-4 border-purple-500 p-3 rounded">
            <strong class="text-purple-600">Constraint:</strong> Discount ≤ 20% for non-members
            <div class="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Source: Marketing rule MKT-2024-12</div>
          </div>
          <div class="card-hover group cursor-pointer bg-white border-l-4 border-pink-500 p-3 rounded">
            <strong class="text-pink-600">Guideline:</strong> Approve orders < $1000 automatically
            <div class="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Source: Operations SOP-145</div>
          </div>
        </div>
        <div class="space-y-2 text-sm">
          <div class="card-hover group cursor-pointer bg-white border-l-4 border-rose-500 p-3 rounded">
            <strong class="text-rose-600">Regulation:</strong> Retain records 7 years (SOX)
            <div class="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Source: Sarbanes-Oxley Act §802</div>
          </div>
          <div class="card-hover group cursor-pointer bg-white border-l-4 border-orange-500 p-3 rounded">
            <strong class="text-orange-600">Inference:</strong> If age < 18, parent consent required
            <div class="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Source: COPPA compliance</div>
          </div>
          <div class="card-hover group cursor-pointer bg-white border-l-4 border-amber-500 p-3 rounded">
            <strong class="text-amber-600">Trigger:</strong> Send reminder 3 days before due date
            <div class="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Source: Customer service KPI</div>
          </div>
        </div>
      </div>
      
      <div class="mt-4 p-3 bg-white border-2 border-amber-300 rounded-xl text-xs">
        <strong class="text-amber-700">Traceability:</strong> Each rule should link to source policy/regulation and affected requirements. Use a Business Rules Catalog.
      </div>
    `
  },

  // 10. Elicitation Techniques (Consolidated)
  {
    title: "Elicitation Techniques",
    subtitle: "Gathering Requirements from Stakeholders",
    type: "content",
    notes: "5 core techniques. Choose based on: audience (executive vs end-user), complexity, time available, geographic distribution. Combine multiple techniques for best results. Time: 6 min.",
    content: `
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-300 p-4 rounded-xl mb-4">
        <p class="text-sm text-gray-700"><strong>Selection Guide:</strong> No single technique is sufficient. Use interviews for depth, workshops for consensus, surveys for breadth, brainstorming for innovation, and document review for context.</p>
      </div>

      <div class="space-y-3">
        <div class="grid md:grid-cols-2 gap-3">
          <div class="card-hover group cursor-pointer bg-white border-l-4 border-indigo-500 p-3 rounded">
            <h4 class="font-bold text-indigo-700">Brainstorming</h4>
            <p class="text-xs text-gray-700">Group idea generation. Free-flowing, no criticism during ideation phase.</p>
            <p class="text-xs text-indigo-600 mt-1"><strong>Best for:</strong> Innovation, creative solutions, new products</p>
            <div class="mt-2 p-2 bg-indigo-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <strong>Prep:</strong> Define problem clearly, invite diverse participants (5-12), set time limit (30-60 min)<br>
              <strong>Tips:</strong> Defer judgment, build on others' ideas, encourage wild ideas
            </div>
          </div>
          <div class="card-hover group cursor-pointer bg-white border-l-4 border-purple-500 p-3 rounded">
            <h4 class="font-bold text-purple-700">Workshops</h4>
            <p class="text-xs text-gray-700">Structured facilitated sessions. Bring stakeholders together for real-time agreement.</p>
            <p class="text-xs text-purple-600 mt-1"><strong>Best for:</strong> Resolving conflicts, building consensus, complex processes</p>
            <div class="mt-2 p-2 bg-purple-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <strong>Prep:</strong> Agenda, pre-read materials, room setup, parking lot for off-topic items<br>
              <strong>Tips:</strong> Use visual models, timebox discussions, capture decisions immediately
            </div>
          </div>
          <div class="card-hover group cursor-pointer bg-white border-l-4 border-pink-500 p-3 rounded">
            <h4 class="font-bold text-pink-700">Interviews</h4>
            <p class="text-xs text-gray-700">One-on-one or small group discussions. Deep dives into specific topics.</p>
            <p class="text-xs text-pink-600 mt-1"><strong>Best for:</strong> Sensitive topics, executive input, domain expertise</p>
            <div class="mt-2 p-2 bg-pink-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <strong>Prep:</strong> Research interviewee, prepare open-ended questions, schedule 60-90 min<br>
              <strong>Tips:</strong> Start broad, use "5 Whys", listen more than talk, confirm understanding
            </div>
          </div>
          <div class="card-hover group cursor-pointer bg-white border-l-4 border-rose-500 p-3 rounded">
            <h4 class="font-bold text-rose-700">Surveys</h4>
            <p class="text-xs text-gray-700">Questionnaires for large groups. Quantifiable data and statistical analysis.</p>
            <p class="text-xs text-rose-600 mt-1"><strong>Best for:</strong> User preferences, feature prioritization, satisfaction trends</p>
            <div class="mt-2 p-2 bg-rose-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <strong>Prep:</strong> Clear objective, test questions, target 100+ responses for validity<br>
              <strong>Tips:</strong> Keep < 10 min, mix question types (Likert, multiple choice), offer incentives
            </div>
          </div>
          <div class="card-hover group cursor-pointer bg-white border-l-4 border-orange-500 p-3 rounded col-span-2">
            <h4 class="font-bold text-orange-700">Document Review</h4>
            <p class="text-xs text-gray-700">Analyze existing documentation (business plans, policies, system docs, contracts, emails, reports). Cost-effective way to understand current state.</p>
            <p class="text-xs text-orange-600 mt-1"><strong>Best for:</strong> Understanding as-is processes, reusing requirements, compliance research, replacing legacy systems</p>
            <div class="mt-2 p-2 bg-orange-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <strong>Prep:</strong> Request document list upfront, identify SMEs for clarification<br>
              <strong>Tips:</strong> Look for conflicting info, note outdated sections, validate with interviews
            </div>
          </div>
        </div>
      </div>
    `
  },

  // 11. Requirements Analysis & Visual Modeling
  {
    title: "Visual Modeling Techniques",
    subtitle: "BPMN, Use Cases, DFD, ERD, State Diagrams",
    type: "content",
    notes: "Different models serve different purposes and audiences. BPMN for business processes, Use Cases for scope, DFD for data flow, ERD for database, State for object lifecycle. Show examples visually. Time: 7 min.",
    content: `
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-300 p-4 rounded-xl mb-4">
        <p class="text-sm text-gray-700"><strong>Visual Modeling Principle:</strong> A picture is worth 1000 words. Models reduce ambiguity, reveal gaps, facilitate discussion. Match model type to audience and complexity.</p>
      </div>

      <!-- Visual Model Examples -->
      <div class="bg-white border-2 border-gray-300 p-4 rounded-xl mb-4">
        <h4 class="font-bold text-gray-800 mb-3 text-center">Visual Model Examples</h4>
        
        <div class="grid md:grid-cols-3 gap-3 mb-3">
          <!-- BPMN Example -->
          <div class="bg-green-50 border-2 border-green-300 p-3 rounded-lg">
            <h5 class="font-bold text-green-700 text-xs text-center mb-2">BPMN: Order Process</h5>
            <svg viewBox="0 0 320 120" class="w-full" xmlns="http://www.w3.org/2000/svg">
              <!-- Start Event -->
              <circle cx="20" cy="60" r="12" fill="#22c55e" stroke="#16a34a" stroke-width="2"/>
              <text x="20" y="90" font-size="8" text-anchor="middle" fill="#15803d">Start</text>
              <path d="M 32 60 L 55 60" stroke="#666" stroke-width="2" marker-end="url(#arrow-bpmn)"/>
              
              <!-- Task 1: Receive Order -->
              <rect x="55" y="45" width="70" height="30" fill="#bbf7d0" stroke="#16a34a" stroke-width="2" rx="5"/>
              <text x="90" y="63" font-size="9" text-anchor="middle" fill="#15803d">Receive Order</text>
              <path d="M 125 60 L 145 60" stroke="#666" stroke-width="2" marker-end="url(#arrow-bpmn)"/>
              
              <!-- Gateway: Check Stock -->
              <polygon points="160,60 170,50 180,60 170,70" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
              <text x="170" y="64" font-size="10" text-anchor="middle" fill="#854d0e">?</text>
              <text x="170" y="85" font-size="7" text-anchor="middle" fill="#854d0e">Stock?</text>
              
              <!-- Task 2: Fulfill (Yes) -->
              <path d="M 180 60 L 195 60" stroke="#666" stroke-width="2" marker-end="url(#arrow-bpmn)"/>
              <text x="187" y="55" font-size="7" fill="#22c55e">Yes</text>
              <rect x="195" y="45" width="60" height="30" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2" rx="5"/>
              <text x="225" y="63" font-size="9" text-anchor="middle" fill="#1e40af">Fulfill</text>
              <path d="M 255 60 L 275 60" stroke="#666" stroke-width="2" marker-end="url(#arrow-bpmn)"/>
              
              <!-- End Event -->
              <circle cx="285" cy="60" r="12" fill="#ef4444" stroke="#b91c1c" stroke-width="3"/>
              <text x="285" y="90" font-size="8" text-anchor="middle" fill="#991b1b">End</text>
              
              <!-- Task 3: Reorder (No) -->
              <path d="M 170 70 L 170 100" stroke="#666" stroke-width="2" marker-end="url(#arrow-bpmn)"/>
              <text x="175" y="85" font-size="7" fill="#ef4444">No</text>
              <rect x="145" y="100" width="50" height="25" fill="#fecaca" stroke="#dc2626" stroke-width="2" rx="5"/>
              <text x="170" y="115" font-size="8" text-anchor="middle" fill="#991b1b">Reorder</text>
              
              <defs>
                <marker id="arrow-bpmn" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#666"/>
                </marker>
              </defs>
            </svg>
            <p class="text-[9px] text-gray-600 mt-1">Shows: Events, Tasks, Gateways, Flow</p>
          </div>

          <!-- Use Case Example -->
          <div class="bg-purple-50 border-2 border-purple-300 p-3 rounded-lg">
            <h5 class="font-bold text-purple-700 text-xs text-center mb-2">Use Case: E-commerce</h5>
            <svg viewBox="0 0 280 140" class="w-full" xmlns="http://www.w3.org/2000/svg">
              <!-- System Boundary -->
              <rect x="70" y="10" width="180" height="120" fill="none" stroke="#9333ea" stroke-width="2" stroke-dasharray="5,5" rx="5"/>
              <text x="160" y="25" font-size="10" text-anchor="middle" fill="#9333ea" font-weight="bold">E-commerce System</text>
              
              <!-- Actor: Customer -->
              <circle cx="30" cy="50" r="10" fill="#c084fc" stroke="#9333ea" stroke-width="2"/>
              <line x1="30" y1="60" x2="30" y2="80" stroke="#9333ea" stroke-width="2"/>
              <line x1="20" y1="68" x2="40" y2="68" stroke="#9333ea" stroke-width="2"/>
              <line x1="30" y1="80" x2="22" y2="95" stroke="#9333ea" stroke-width="2"/>
              <line x1="30" y1="80" x2="38" y2="95" stroke="#9333ea" stroke-width="2"/>
              <text x="30" y="108" font-size="9" text-anchor="middle" fill="#9333ea">Customer</text>
              
              <!-- Use Case 1: Browse Products -->
              <ellipse cx="135" cy="45" rx="45" ry="18" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
              <text x="135" y="49" font-size="8" text-anchor="middle" fill="#581c87">Browse Products</text>
              <line x1="40" y1="60" x2="95" y2="50" stroke="#9333ea" stroke-width="1.5"/>
              
              <!-- Use Case 2: Add to Cart -->
              <ellipse cx="135" cy="75" rx="40" ry="18" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
              <text x="135" y="79" font-size="8" text-anchor="middle" fill="#581c87">Add to Cart</text>
              <line x1="40" y1="75" x2="100" y2="75" stroke="#9333ea" stroke-width="1.5"/>
              
              <!-- Use Case 3: Checkout -->
              <ellipse cx="135" cy="105" rx="35" ry="18" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
              <text x="135" y="109" font-size="8" text-anchor="middle" fill="#581c87">Checkout</text>
              <line x1="38" y1="90" x2="105" y2="100" stroke="#9333ea" stroke-width="1.5"/>
              
              <!-- Use Case 4: Process Payment -->
              <ellipse cx="210" cy="75" rx="45" ry="18" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
              <text x="210" y="79" font-size="8" text-anchor="middle" fill="#581c87">Process Payment</text>
              
              <!-- Include relationship -->
              <line x1="170" y1="95" x2="185" y2="85" stroke="#9333ea" stroke-width="1" stroke-dasharray="3,2"/>
              <text x="178" y="88" font-size="7" fill="#9333ea">«include»</text>
            </svg>
            <p class="text-[9px] text-gray-600 mt-1">Shows: Actors, Use Cases, Relationships</p>
          </div>

          <!-- DFD Example -->
          <div class="bg-cyan-50 border-2 border-cyan-300 p-3 rounded-lg">
            <h5 class="font-bold text-cyan-700 text-xs text-center mb-2">DFD: Payment System</h5>
            <svg viewBox="0 0 280 130" class="w-full" xmlns="http://www.w3.org/2000/svg">
              <!-- External Entity: Customer -->
              <rect x="10" y="45" width="60" height="35" fill="#a5f3fc" stroke="#0891b2" stroke-width="2" rx="3"/>
              <text x="40" y="66" font-size="9" text-anchor="middle" fill="#164e63" font-weight="bold">Customer</text>
              
              <!-- Process 1: Validate Payment -->
              <circle cx="130" cy="62" r="30" fill="#e0f2fe" stroke="#0891b2" stroke-width="2"/>
              <text x="130" y="60" font-size="8" text-anchor="middle" fill="#164e63" font-weight="bold">1.0</text>
              <text x="130" y="70" font-size="7" text-anchor="middle" fill="#164e63">Validate</text>
              <text x="130" y="78" font-size="7" text-anchor="middle" fill="#164e63">Payment</text>
              
              <!-- Data Store: Transaction DB -->
              <rect x="175" y="100" width="90" height="25" fill="#cffafe" stroke="#0891b2" stroke-width="2"/>
              <line x1="180" y1="100" x2="180" y2="125" stroke="#0891b2" stroke-width="2"/>
              <text x="220" y="116" font-size="8" text-anchor="middle" fill="#164e63">Transaction DB</text>
              
              <!-- External Entity: Bank -->
              <rect x="210" y="10" width="60" height="35" fill="#a5f3fc" stroke="#0891b2" stroke-width="2" rx="3"/>
              <text x="240" y="31" font-size="9" text-anchor="middle" fill="#164e63" font-weight="bold">Bank API</text>
              
              <!-- Data Flows -->
              <path d="M 70 62 L 100 62" stroke="#0891b2" stroke-width="2" marker-end="url(#arrow-dfd)"/>
              <text x="85" y="58" font-size="7" fill="#0e7490">Payment Info</text>
              
              <path d="M 155 50 L 210 35" stroke="#0891b2" stroke-width="2" marker-end="url(#arrow-dfd)"/>
              <text x="175" y="38" font-size="7" fill="#0e7490">Auth Request</text>
              
              <path d="M 210 40 L 160 55" stroke="#0891b2" stroke-width="2" marker-end="url(#arrow-dfd)"/>
              <text x="180" y="52" font-size="7" fill="#0e7490">Approval</text>
              
              <path d="M 140 90 L 175 105" stroke="#0891b2" stroke-width="2" marker-end="url(#arrow-dfd)"/>
              <text x="150" y="95" font-size="7" fill="#0e7490">Save</text>
              
              <defs>
                <marker id="arrow-dfd" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#0891b2"/>
                </marker>
              </defs>
            </svg>
            <p class="text-[9px] text-gray-600 mt-1">Shows: Entities, Processes, Data Stores, Flows</p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-3">
          <!-- ERD Example -->
          <div class="bg-pink-50 border-2 border-pink-300 p-3 rounded-lg">
            <h5 class="font-bold text-pink-700 text-xs text-center mb-2">🗄️ ERD: Customer-Order</h5>
            <svg viewBox="0 0 320 110" class="w-full" xmlns="http://www.w3.org/2000/svg">
              <!-- Entity: Customer -->
              <rect x="10" y="10" width="90" height="90" fill="#fce7f3" stroke="#ec4899" stroke-width="2" rx="5"/>
              <rect x="10" y="10" width="90" height="25" fill="#f9a8d4" stroke="#ec4899" stroke-width="2" rx="5"/>
              <text x="55" y="26" font-size="10" text-anchor="middle" fill="#831843" font-weight="bold">CUSTOMER</text>
              <text x="15" y="43" font-size="8" fill="#831843">🔑 customer_id</text>
              <text x="15" y="55" font-size="8" fill="#831843">   first_name</text>
              <text x="15" y="67" font-size="8" fill="#831843">   last_name</text>
              <text x="15" y="79" font-size="8" fill="#831843">   email</text>
              <text x="15" y="91" font-size="8" fill="#831843">   phone</text>
              
              <!-- Relationship Line -->
              <line x1="100" y1="55" x2="150" y2="55" stroke="#ec4899" stroke-width="2.5"/>
              <text x="125" y="50" font-size="9" text-anchor="middle" fill="#be185d" font-weight="bold">1</text>
              <text x="125" y="68" font-size="8" text-anchor="middle" fill="#9f1239">places</text>
              <circle cx="147" cy="55" r="3" fill="#ec4899"/>
              <circle cx="150" cy="55" r="3" fill="#ec4899"/>
              <circle cx="153" cy="55" r="3" fill="#ec4899"/>
              <text x="158" y="50" font-size="9" fill="#be185d" font-weight="bold">N</text>
              
              <!-- Entity: Order -->
              <rect x="170" y="10" width="90" height="90" fill="#fce7f3" stroke="#ec4899" stroke-width="2" rx="5"/>
              <rect x="170" y="10" width="90" height="25" fill="#f9a8d4" stroke="#ec4899" stroke-width="2" rx="5"/>
              <text x="215" y="26" font-size="10" text-anchor="middle" fill="#831843" font-weight="bold">ORDER</text>
              <text x="175" y="43" font-size="8" fill="#831843">🔑 order_id</text>
              <text x="175" y="55" font-size="8" fill="#831843">customer_id (FK)</text>
              <text x="175" y="67" font-size="8" fill="#831843">   order_date</text>
              <text x="175" y="79" font-size="8" fill="#831843">   total_amount</text>
              <text x="175" y="91" font-size="8" fill="#831843">   status</text>
            </svg>
            <p class="text-[9px] text-gray-600 mt-1">Shows: Entities, Attributes, PK/FK, Cardinality (1:N)</p>
          </div>

          <!-- State Diagram Example -->
          <div class="bg-orange-50 border-2 border-orange-300 p-3 rounded-lg">
            <h5 class="font-bold text-orange-700 text-xs text-center mb-2">State Diagram: Order Lifecycle</h5>
            <svg viewBox="0 0 320 110" class="w-full" xmlns="http://www.w3.org/2000/svg">
              <!-- Start State -->
              <circle cx="25" cy="55" r="10" fill="#000" stroke="#000" stroke-width="2"/>
              <line x1="35" y1="55" x2="55" y2="55" stroke="#ea580c" stroke-width="2" marker-end="url(#arrow-state)"/>
              
              <!-- State 1: Pending -->
              <rect x="55" y="35" width="60" height="40" fill="#fed7aa" stroke="#ea580c" stroke-width="2" rx="8"/>
              <text x="85" y="52" font-size="10" text-anchor="middle" fill="#7c2d12" font-weight="bold">Pending</text>
              <text x="85" y="64" font-size="7" text-anchor="middle" fill="#9a3412">entry / notify</text>
              <line x1="115" y1="55" x2="135" y2="55" stroke="#ea580c" stroke-width="2" marker-end="url(#arrow-state)"/>
              <text x="125" y="50" font-size="7" text-anchor="middle" fill="#9a3412">pay</text>
              
              <!-- State 2: Processing -->
              <rect x="135" y="35" width="70" height="40" fill="#fed7aa" stroke="#ea580c" stroke-width="2" rx="8"/>
              <text x="170" y="52" font-size="10" text-anchor="middle" fill="#7c2d12" font-weight="bold">Processing</text>
              <text x="170" y="64" font-size="7" text-anchor="middle" fill="#9a3412">do / validate</text>
              <line x1="205" y1="55" x2="225" y2="55" stroke="#ea580c" stroke-width="2" marker-end="url(#arrow-state)"/>
              <text x="215" y="50" font-size="7" text-anchor="middle" fill="#9a3412">ship</text>
              
              <!-- State 3: Shipped -->
              <rect x="225" y="35" width="60" height="40" fill="#fed7aa" stroke="#ea580c" stroke-width="2" rx="8"/>
              <text x="255" y="55" font-size="10" text-anchor="middle" fill="#7c2d12" font-weight="bold">Shipped</text>
              
              <!-- Cancel transition -->
              <path d="M 85 75 Q 170 95, 255 75" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arrow-cancel)"/>
              <text x="170" y="98" font-size="7" text-anchor="middle" fill="#991b1b">cancel</text>
              
              <!-- End State -->
              <circle cx="300" cy="55" r="10" fill="none" stroke="#000" stroke-width="2"/>
              <circle cx="300" cy="55" r="6" fill="#000"/>
              <line x1="285" y1="55" x2="288" y2="55" stroke="#ea580c" stroke-width="2" marker-end="url(#arrow-state)"/>
              
              <defs>
                <marker id="arrow-state" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#ea580c"/>
                </marker>
                <marker id="arrow-cancel" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#dc2626"/>
                </marker>
              </defs>
            </svg>
            <p class="text-[9px] text-gray-600 mt-1">Shows: States, Transitions, Events, Actions</p>
          </div>
        </div>
      </div>

      <!-- Model Type Cards with Detailed Info -->
      <div class="grid md:grid-cols-2 gap-3 text-sm">
        <div class="card-hover group cursor-pointer bg-gradient-to-r from-green-50 to-emerald-100 border-l-4 border-green-500 p-4 rounded-xl">
          <h4 class="font-bold text-green-700 mb-2">BPMN (Business Process Model & Notation)</h4>
          <p class="text-xs text-gray-700 mb-2"><strong>Purpose:</strong> Model business workflows and processes (as-is and to-be states)</p>
          <p class="text-xs text-gray-700 mb-2"><strong>Key Elements:</strong> Start/End events (circles), Tasks (rectangles), Gateways (diamonds), Swimlanes (responsibilities)</p>
          <p class="text-xs text-green-600"><strong>Audience:</strong> Business stakeholders, process owners, operations teams</p>
          <div class="mt-2 p-2 bg-green-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            🛠️ <strong>Tools:</strong> Visio, Lucidchart, Bizagi, Camunda<br>
            <strong>Example:</strong> Order-to-cash process, loan approval workflow
          </div>
        </div>

        <div class="card-hover group cursor-pointer bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 p-4 rounded-xl">
          <h4 class="font-bold text-purple-700 mb-2">Use Case Diagrams</h4>
          <p class="text-xs text-gray-700 mb-2"><strong>Purpose:</strong> Show user-system interactions and define functional scope boundary</p>
          <p class="text-xs text-gray-700 mb-2"><strong>Key Elements:</strong> Actors (stick figures), Use cases (ovals), Associations (lines), System boundary (box)</p>
          <p class="text-xs text-purple-600"><strong>Best for:</strong> Project scoping, stakeholder communication, RFP/contract scope</p>
          <div class="mt-2 p-2 bg-purple-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            🛠️ <strong>Tools:</strong> Any diagramming tool (Draw.io, Lucidchart, Visio)<br>
            <strong>Example:</strong> ATM system (Actor: Customer, Use Cases: Withdraw, Deposit, Check Balance)
          </div>
        </div>

        <div class="card-hover group cursor-pointer bg-gradient-to-r from-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-4 rounded-xl">
          <h4 class="font-bold text-cyan-700 mb-2">DFD (Data Flow Diagram)</h4>
          <p class="text-xs text-gray-700 mb-2"><strong>Purpose:</strong> Show how data moves through the system and gets transformed</p>
          <p class="text-xs text-gray-700 mb-2"><strong>Key Elements:</strong> External entities (rectangles), Processes (circles), Data stores (parallel lines), Data flows (arrows)</p>
          <p class="text-xs text-cyan-600"><strong>Best for:</strong> Understanding data transformation, identifying integration points, system analysis</p>
          <div class="mt-2 p-2 bg-cyan-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            🛠️ <strong>Tools:</strong> Visio, Lucidchart, SmartDraw<br>
            <strong>Example:</strong> Payment processing system (Customer → Validate → Bank API → Save to DB)
          </div>
        </div>

        <div class="card-hover group cursor-pointer bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-500 p-4 rounded-xl">
          <h4 class="font-bold text-pink-700 mb-2">🗄️ ERD (Entity-Relationship Diagram)</h4>
          <p class="text-xs text-gray-700 mb-2"><strong>Purpose:</strong> Model database structure showing entities and their relationships</p>
          <p class="text-xs text-gray-700 mb-2"><strong>Key Elements:</strong> Entities (tables/rectangles), Attributes (fields), Primary Keys (PK), Foreign Keys (FK), Cardinality (1:1, 1:N, M:N)</p>
          <p class="text-xs text-pink-600"><strong>Best for:</strong> Database design, data modeling, normalization (1NF, 2NF, 3NF), data warehouse design</p>
          <div class="mt-2 p-2 bg-pink-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            🛠️ <strong>Tools:</strong> ER/Studio, MySQL Workbench, SQL Server Management Studio<br>
            <strong>Example:</strong> Customer (1) → places → (N) Order relationship
          </div>
        </div>

        <div class="card-hover group cursor-pointer bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 p-4 rounded-xl col-span-2">
          <h4 class="font-bold text-orange-700 mb-2">State Diagrams (State Machine)</h4>
          <p class="text-xs text-gray-700 mb-2"><strong>Purpose:</strong> Model the lifecycle and behavior of an object through different states</p>
          <p class="text-xs text-gray-700 mb-2"><strong>Key Elements:</strong> States (rounded rectangles), Transitions (arrows), Events (trigger labels), Initial/Final states (filled circles)</p>
          <p class="text-xs text-orange-600"><strong>Best for:</strong> Object lifecycle (order status, user account states), workflow states, complex business logic</p>
          <div class="mt-2 p-2 bg-orange-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            🛠️ <strong>Tools:</strong> UML tools (StarUML, Enterprise Architect), Visio<br>
            <strong>Example:</strong> Order lifecycle: Pending → Processing → Shipped → Delivered (with cancel transition)
          </div>
        </div>
      </div>
    `
  },

  // 12. Requirements Specification
  {
    title: "Requirements Specification",
    subtitle: "Organize, Validate, Prioritize",
    type: "content",
    notes: "Specification transforms elicited requirements into structured, testable documents. 5 key activities ensure requirements are complete, consistent, and prioritized. Always use MoSCoW for prioritization. Time: 5 min.",
    content: `
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-300 p-4 rounded-xl mb-4">
        <p class="text-sm text-gray-700"><strong>📑 Specification Goal:</strong> Transform raw elicited needs into structured, testable, traceable requirements documents (BRD, FRD, Use Case Specs). Every requirement must be SMART and linked to business objective.</p>
      </div>

      <div class="grid md:grid-cols-5 gap-2 text-xs">
        <div class="card-hover group cursor-pointer bg-gradient-to-br from-indigo-50 to-indigo-100 border-2 border-indigo-300 p-3 rounded text-center">
          <div class="text-2xl mb-1">📂</div>
          <h4 class="font-bold text-indigo-700">Categorize</h4>
          <p class="text-gray-700 mt-1">Group by type: Functional, NFR, Constraints</p>
          <div class="mt-2 p-2 bg-indigo-50 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Use requirement IDs: FR-001, NFR-001, CON-001
          </div>
        </div>
        <div class="card-hover group cursor-pointer bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 p-3 rounded text-center">
          <div class="text-2xl mb-1"></div>
          <h4 class="font-bold text-purple-700">Assign</h4>
          <p class="text-gray-700 mt-1">Link to responsible owners (RACI matrix)</p>
          <div class="mt-2 p-2 bg-purple-50 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Each requirement needs Accountable person
          </div>
        </div>
        <div class="card-hover group cursor-pointer bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-300 p-3 rounded text-center">
          <div class="text-2xl mb-1"></div>
          <h4 class="font-bold text-pink-700">Derive</h4>
          <p class="text-gray-700 mt-1">Break down high-level into detailed child requirements</p>
          <div class="mt-2 p-2 bg-pink-50 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            "Login" → Username validation, Password rules, 2FA, Session timeout
          </div>
        </div>
        <div class="card-hover group cursor-pointer bg-gradient-to-br from-rose-50 to-rose-100 border-2 border-rose-300 p-3 rounded text-center">
          <div class="text-2xl mb-1"></div>
          <h4 class="font-bold text-rose-700">Validate</h4>
          <p class="text-gray-700 mt-1">Check correctness, completeness, SMART criteria</p>
          <div class="mt-2 p-2 bg-rose-50 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Peer review + stakeholder walkthrough
          </div>
        </div>
        <div class="card-hover group cursor-pointer bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 p-3 rounded text-center">
          <div class="text-2xl mb-1"></div>
          <h4 class="font-bold text-orange-700">Prioritize</h4>
          <p class="text-gray-700 mt-1">Rank by business value using MoSCoW</p>
          <div class="mt-2 p-2 bg-orange-50 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Focus on Must Have first (20% features = 80% value)
          </div>
        </div>
      </div>

      <div class="mt-4 bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-lg">
        <h4 class="font-bold text-amber-700 mb-2">🏆 MoSCoW Prioritization</h4>
        <div class="grid grid-cols-4 gap-2 text-xs">
          <div class="bg-white p-2 rounded"><strong class="text-rose-600">Must Have:</strong> Critical for MVP. Project fails without it.</div>
          <div class="bg-white p-2 rounded"><strong class="text-orange-600">Should Have:</strong> Important but not vital. Workaround exists.</div>
          <div class="bg-white p-2 rounded"><strong class="text-amber-600">Could Have:</strong> Nice-to-have. Improve UX but optional.</div>
          <div class="bg-white p-2 rounded"><strong class="text-gray-600">Won't Have:</strong> Out of scope this release. Future phase.</div>
        </div>
      </div>
    `
  },

  // 13. Business Requirements Document (BRD)
  {
    title: "Business Requirements Document (BRD)",
    subtitle: "The Central Source of Truth",
    type: "content",
    notes: "BRD is THE formal contract between business and IT. BA owns and maintains it. Must be complete and signed before design phase. Use version control (v1.0, v1.1, v2.0). Store in central repository. Time: 4 min.",
    content: `
      <div class="bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200 p-5 rounded-xl mb-4">
        <h3 class="text-xl font-bold text-indigo-700 mb-2">📋 BRD - Business Requirements Document</h3>
        <p class="text-sm text-gray-700">Formal document containing all project requirements, business rules, use cases, and stakeholder information. Serves as the <strong>contract</strong> between business and IT teams.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="card-hover group cursor-pointer bg-white border-2 border-purple-200 p-4 rounded-xl">
          <h4 class="font-bold text-purple-700 mb-2">Purpose</h4>
          <ul class="text-sm space-y-1 text-gray-700">
            <li>✓ Single source of truth for all requirements</li>
            <li>✓ Guides solution design and development decisions</li>
            <li>✓ Foundation for test plans and validation</li>
            <li>✓ Obtains formal stakeholder sign-off</li>
          </ul>
          <div class="mt-2 p-2 bg-purple-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <strong>Owner:</strong> Business Analyst maintains and versions the BRD throughout project lifecycle
          </div>
        </div>

        <div class="card-hover group cursor-pointer bg-white border-2 border-pink-200 p-4 rounded-xl">
          <h4 class="font-bold text-pink-700 mb-2">📑 Key Sections</h4>
          <ul class="text-sm space-y-1 text-gray-700">
            <li>1. Executive Summary (2-page overview)</li>
            <li>2. Business Objectives & Success Metrics</li>
            <li>3. Stakeholder List & RACI Matrix</li>
            <li>4. Functional Requirements (FR-001...)</li>
            <li>5. Non-Functional Requirements (NFR-001...)</li>
            <li>6. Business Rules & Constraints</li>
            <li>7. Assumptions, Dependencies & Risks</li>
            <li>8. Approval & Sign-off Page</li>
          </ul>
          <div class="mt-2 p-2 bg-pink-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <strong>Version Control:</strong> v1.0 (approved baseline) → v1.1 (minor changes) → v2.0 (major scope change)
          </div>
        </div>
      </div>

      <div class="mt-4 p-3 bg-amber-50 border-2 border-amber-300 rounded-xl text-xs">
        <strong class="text-amber-700">Critical Rule:</strong> Once BRD is approved and baselined, ALL changes require formal Change Request (CR) process with impact analysis and re-approval.
      </div>
    `
  },

  // 14. Requirements Approval Process
  {
    title: "Requirements Approval Process",
    subtitle: "3-Step Sign-Off",
    type: "content",
    notes: "All 3 approvals required in sequence. No shortcuts! Each approval takes 3-7 days typically. Common blockers: incomplete requirements, missing cost estimates, unclear scope. Escalate to steering committee if approval stalled > 2 weeks. Time: 4 min.",
    content: `
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-300 p-4 rounded-xl mb-4">
        <p class="text-sm text-gray-700"><strong>Approval Sequence:</strong> Business → Technical → Sponsor. Each approval gates the next. Total duration: 1-3 weeks. Use approval tracking spreadsheet with dates and signatures.</p>
      </div>

      <div class="space-y-3">
        <div class="card-hover group cursor-pointer bg-gradient-to-r from-green-50 to-emerald-100 border-l-4 border-green-500 p-4 rounded-xl">
          <h4 class="font-bold text-green-700 mb-2">1. Business Approval</h4>
          <p class="text-sm text-gray-700"><strong>Who:</strong> Business stakeholders, subject matter experts, process owners, end-user representatives</p>
          <p class="text-xs text-gray-600 mt-1"><strong>What they validate:</strong> Requirements accurately reflect business needs and solve the right problem</p>
          <div class="mt-2 p-2 bg-green-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <strong>Duration:</strong> 3-7 days | <strong>Common issues:</strong> Missing edge cases, unclear business rules, conflicting stakeholder priorities
          </div>
        </div>

        <div class="card-hover group cursor-pointer bg-gradient-to-r from-blue-50 to-cyan-100 border-l-4 border-blue-500 p-4 rounded-xl">
          <h4 class="font-bold text-blue-700 mb-2">2. Technical Validation</h4>
          <p class="text-sm text-gray-700"><strong>Who:</strong> IT Business Analyst, developers, solution architects, UX designers, QA lead, security team</p>
          <p class="text-xs text-gray-600 mt-1"><strong>What they validate:</strong> Technical feasibility, cost estimates, integration complexity, security implications</p>
          <div class="mt-2 p-2 bg-blue-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <strong>Duration:</strong> 5-10 days | <strong>Common issues:</strong> Infeasible NFRs, underestimated complexity, missing integrations, security gaps
          </div>
        </div>

        <div class="card-hover group cursor-pointer bg-gradient-to-r from-purple-50 to-pink-100 border-l-4 border-purple-500 p-4 rounded-xl">
          <h4 class="font-bold text-purple-700 mb-2">3. Sponsor Sign-Off</h4>
          <p class="text-sm text-gray-700"><strong>Who:</strong> Executive sponsor, project steering committee, CFO (for budget), CIO (for IT projects)</p>
          <p class="text-xs text-gray-600 mt-1"><strong>What they authorize:</strong> Funding, resources (staff, tools), timeline commitment, and formal project kick-off</p>
          <div class="mt-2 p-2 bg-purple-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <strong>Duration:</strong> 3-14 days (depends on approval authority limits) | <strong>Common issues:</strong> Budget constraints, resource conflicts, strategic alignment questions
          </div>
        </div>
      </div>

      <div class="mt-3 bg-rose-50 border-l-4 border-rose-500 p-3 rounded-r-lg text-sm">
        <p class="text-gray-700"><strong>Critical Rule:</strong> ALL three approvals required before proceeding to design phase! Skipping approval = project failure risk. Document all approvals with signatures and dates.</p>
      </div>
    `
  },

  // 15. Project Review & Lessons Learned
  {
    title: "Project Review & Lessons Learned",
    subtitle: "Continuous Improvement through Reflection",
    type: "content",
    notes: "Conduct lessons learned session within 2 weeks of project close while memories are fresh. BA facilitates neutral discussion. Use retrospective format: What went well, What didn't, Action plan. Document and share with PMO. Time: 4 min.",
    content: `
      <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-5 rounded-xl mb-4">
        <h3 class="text-xl font-bold text-amber-700 mb-2">Post-Project Review (Retrospective)</h3>
        <p class="text-sm text-gray-700">Facilitated session where team and stakeholders reflect on successes and failures to improve future projects. <strong>Timing is critical:</strong> Hold within 2 weeks of project close before team disperses.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-3">
        <div class="card-hover group cursor-pointer bg-white border-l-4 border-green-500 p-4 rounded">
          <h4 class="font-bold text-green-700 mb-2">What Went Well</h4>
          <p class="text-xs text-gray-700 mb-2">Celebrate successes and identify best practices worth repeating on future projects</p>
          <div class="mt-2 p-2 bg-green-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <strong>Examples:</strong> Effective workshops, clear RACI, responsive SMEs, good tooling
          </div>
        </div>
        <div class="card-hover group cursor-pointer bg-white border-l-4 border-red-500 p-4 rounded">
          <h4 class="font-bold text-red-700 mb-2">What Didn't Go Well</h4>
          <p class="text-xs text-gray-700 mb-2">Capture failures, mistakes, frustrations honestly in a blameless environment</p>
          <div class="mt-2 p-2 bg-red-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <strong>Examples:</strong> Scope creep, missing requirements, late feedback, poor communication
          </div>
        </div>
        <div class="card-hover group cursor-pointer bg-white border-l-4 border-blue-500 p-4 rounded">
          <h4 class="font-bold text-blue-700 mb-2">🔧 Action Plan</h4>
          <p class="text-xs text-gray-700 mb-2">Create specific, measurable improvements for future projects with owners and dates</p>
          <div class="mt-2 p-2 bg-blue-50 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <strong>Examples:</strong> New requirement template, workshop checklist, RACI training, tool upgrade
          </div>
        </div>
      </div>

      <div class="mt-4 grid md:grid-cols-2 gap-3 text-xs">
        <div class="p-3 bg-purple-50 border-2 border-purple-300 rounded-xl">
          <h4 class="font-bold text-purple-700 mb-2">Facilitation Tips</h4>
          <ul class="space-y-1 text-gray-700">
            <li>• Keep blameless (focus on process, not people)</li>
            <li>• Use anonymous sticky notes for sensitive topics</li>
            <li>• Timebox to 90 minutes max</li>
            <li>• Assign action item owners before leaving</li>
          </ul>
        </div>
        <div class="p-3 bg-cyan-50 border-2 border-cyan-300 rounded-xl">
          <h4 class="font-bold text-cyan-700 mb-2">💾 Documentation</h4>
          <ul class="space-y-1 text-gray-700">
            <li>• Create lessons learned doc (2-3 pages)</li>
            <li>• Share with PMO knowledge base</li>
            <li>• Reference in future project kickoffs</li>
            <li>• Track action item completion (30/60/90 days)</li>
          </ul>
        </div>
      </div>
    `
  },

  // 16. Key Takeaways
  {
    title: "Key Takeaways",
    subtitle: "Business Analysis Fundamentals Summary",
    type: "summary",
    notes: "Wrap up reinforcing core concepts. Emphasize: BA = bridge between business and IT, Requirements must be SMART, Always get 3-level approval, Visual models reduce ambiguity. Encourage questions. Provide resource links. Time: 5 min.",
    content: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div class="card-hover bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-5 rounded-2xl">
          <div class="text-3xl mb-2"></div>
          <h3 class="text-lg font-bold mb-2">BA Role & Skills</h3>
          <ul class="text-sm space-y-1 text-indigo-100">
            <li>• Many job titles, same core BA activities</li>
            <li>• 6 essential skills (analytical, communication, technical, domain, problem-solving, facilitation)</li>
            <li>• BA bridges business stakeholders and IT teams</li>
            <li>• Focus on WHAT needs to be built, not HOW</li>
          </ul>
        </div>

        <div class="card-hover bg-gradient-to-br from-purple-500 to-pink-600 text-white p-5 rounded-2xl">
          <div class="text-3xl mb-2"></div>
          <h3 class="text-lg font-bold mb-2">Methodologies</h3>
          <ul class="text-sm space-y-1 text-purple-100">
            <li>• Adaptive: Agile, Scrum, Kanban (embrace change)</li>
            <li>• Predictive: Waterfall, V-Model (plan upfront)</li>
            <li>• Choose based on requirement stability and risk</li>
            <li>• Many orgs blend approaches (hybrid)</li>
          </ul>
        </div>

        <div class="card-hover bg-gradient-to-br from-pink-500 to-rose-600 text-white p-5 rounded-2xl">
          <div class="text-3xl mb-2">📋</div>
          <h3 class="text-lg font-bold mb-2">Requirements</h3>
          <ul class="text-sm space-y-1 text-pink-100">
            <li>• 3 types: Functional (what), NFR (how well), Constraints (limits)</li>
            <li>• Always apply SMART criteria (Specific, Measurable, Attainable, Reasonable, Traceable)</li>
            <li>• Process: Elicit → Analyze → Specify → Approve</li>
            <li>• Prioritize using MoSCoW (Must/Should/Could/Won't)</li>
          </ul>
        </div>

        <div class="card-hover bg-gradient-to-br from-rose-500 to-orange-600 text-white p-5 rounded-2xl">
          <div class="text-3xl mb-2"></div>
          <h3 class="text-lg font-bold mb-2">Modeling & Documentation</h3>
          <ul class="text-sm space-y-1 text-rose-100">
            <li>• BPMN for business processes, UML for software</li>
            <li>• Use Cases for scope, DFD for data flow, ERD for database</li>
            <li>• BRD = single source of truth (BA owns it)</li>
            <li>• 3-step approval: Business → Technical → Sponsor</li>
          </ul>
        </div>
      </div>

      <div class="mt-6 bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-400 p-5 rounded-2xl text-center">
        <h3 class="text-xl font-bold text-amber-800 mb-3">🚀 Next Steps & Resources</h3>
        <div class="grid md:grid-cols-3 gap-3 text-xs">
          <div class="bg-white p-3 rounded-lg">
            <strong class="text-indigo-700">Learn More:</strong>
            <p class="text-gray-600 mt-1">BABOK® Guide (IIBA), Agile Extension, PMI-PBA Certification</p>
          </div>
          <div class="bg-white p-3 rounded-lg">
            <strong class="text-purple-700">🛠️ Practice Tools:</strong>
            <p class="text-gray-600 mt-1">Jira, Confluence, Visio, Lucidchart, Azure DevOps</p>
          </div>
          <div class="bg-white p-3 rounded-lg">
            <strong class="text-pink-700">Community:</strong>
            <p class="text-gray-600 mt-1">Join IIBA chapter, LinkedIn BA groups, attend webinars</p>
          </div>
        </div>
      </div>

      <div class="mt-6 text-center">
        <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          Questions?
        </h2>
        <p class="text-gray-600 mt-2">Thank you for your attention!</p>
      </div>

    `
  }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = slides;
}
