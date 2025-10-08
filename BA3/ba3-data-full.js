const slides = [
    // Slide 1: Title
    {
        title: "Project Management Techniques & Tools",
        subtitle: "Complete guide to managing BA projects from conception to closure",
        type: "cover",
        notes: "PRESENTER: Welcome to BA3 - Project Management module. This comprehensive course covers all four project stages: Conception & Initiation, Definition & Planning, Execution & Control, and Project Close. Essential for managing BA projects successfully. Time estimate: 2 minutes.",
        content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div class="card-hover bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-8 rounded-2xl">
                    <h3 class="text-xl font-bold mb-2">Stage 1: Conception & Initiation</h3>
                    <p class="text-indigo-100">Business case & charter</p>
                </div>
                <div class="card-hover bg-gradient-to-br from-purple-500 to-pink-600 text-white p-8 rounded-2xl">
                    <h3 class="text-xl font-bold mb-2">Stage 2: Definition & Planning</h3>
                    <p class="text-purple-100">Schedule & plans</p>
                </div>
                <div class="card-hover bg-gradient-to-br from-pink-500 to-rose-600 text-white p-8 rounded-2xl">
                    <h3 class="text-xl font-bold mb-2">Stage 3: Execution & Control</h3>
                    <p class="text-pink-100">Deliver & monitor</p>
                </div>
                <div class="card-hover bg-gradient-to-br from-rose-500 to-orange-600 text-white p-8 rounded-2xl">
                    <h3 class="text-xl font-bold mb-2">Stage 4: Project Close</h3>
                    <p class="text-rose-100">Review & transition</p>
                </div>
            </div>
            <div class="mt-6 text-center text-sm text-gray-600">Prepared by: Pat Nacario</div>
        `
    },

    // Slide 2: Overview - Stages of a Project
    {
        title: "Stages of a Project",
        subtitle: "The four sequential phases of project delivery",
        type: "content",
        notes: "PRESENTER: Every successful project follows four sequential stages. Emphasize that skipping stages leads to failure. Projects must flow through all four phases. Each stage builds on the previous one. Time estimate: 3 minutes.",
        content: `
            <div class="space-y-6">
                <p class="text-lg text-gray-700">Every successful project follows these four sequential stages:</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="card-hover group bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-300 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-primary-700 mb-3">Stage 1: Conception & Initiation</h3>
                        <p class="text-gray-700 mb-2">Understand objectives, create business case, develop charter</p>
                        <div class="mt-3 p-2 bg-primary-50 rounded text-xs text-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <strong>Output:</strong> Business case, project charter, CARD analysis, stakeholder map
                        </div>
                    </div>

                    <div class="card-hover group bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-purple-700 mb-3">Stage 2: Definition & Planning</h3>
                        <p class="text-gray-700 mb-2">Create schedule, communication plan, quality plan, go-live strategy</p>
                        <div class="mt-3 p-2 bg-purple-50 rounded text-xs text-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <strong>Output:</strong> Project schedule, RACI, communication plan, risk log, quality plan
                        </div>
                    </div>

                    <div class="card-hover group bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-300 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-pink-700 mb-3">Stage 3: Execution & Control</h3>
                        <p class="text-gray-700 mb-2">Execute plan, monitor progress, manage changes and risks</p>
                        <div class="mt-3 p-2 bg-pink-50 rounded text-xs text-pink-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <strong>Output:</strong> Deliverables, status reports, change requests, risk mitigation
                        </div>
                    </div>

                    <div class="card-hover group bg-gradient-to-br from-rose-50 to-rose-100 border-2 border-rose-300 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-rose-700 mb-3">Stage 4: Project Close</h3>
                        <p class="text-gray-700 mb-2">Verify completion, conduct review, transition ownership</p>
                        <div class="mt-3 p-2 bg-rose-50 rounded text-xs text-rose-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <strong>Output:</strong> Completion verification, lessons learned, transition docs
                        </div>
                    </div>
                </div>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <p class="text-lg font-semibold text-blue-900">
                        <strong>Key Point:</strong> Each phase builds on the previous — skipping steps increases project failure risk
                    </p>
                </div>
            </div>
        `
    },

    // Slide 3: Understanding Business Objectives
    {
        title: "Understanding Business Objectives",
        subtitle: "Why it's the critical first step",
        type: "content",
        notes: "PRESENTER: Many new BAs jump straight to requirements without clarifying the business objective. This causes wasted time, money, and effort. A project can meet requirements but still fail if it doesn't solve the actual problem. Always clarify objectives FIRST before stakeholder analysis or requirement gathering. Time estimate: 5 minutes.",
        content: `
            <div class="space-y-6">
                <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                    <h3 class="font-bold text-red-900 mb-2">Common Mistake</h3>
                    <p class="text-red-800">Jumping straight into requirements without clarifying the business objective causes wasted time, money, and effort — producing solutions that don't solve the actual problem.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="card-hover bg-white border-2 border-primary-200 p-6 rounded-xl shadow-lg">
                        <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mb-4 text-white font-bold text-lg shadow-md">
                            1
                        </div>
                        <h3 class="text-xl font-bold text-primary-600 mb-3">What is the Purpose?</h3>
                        <ul class="text-gray-700 text-sm space-y-2">
                            <li>• Why was it approved?</li>
                            <li>• Why is budget being spent?</li>
                            <li>• What problem must be solved?</li>
                        </ul>
                    </div>

                    <div class="card-hover bg-white border-2 border-purple-200 p-6 rounded-xl shadow-lg">
                        <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 text-white font-bold text-lg shadow-md">
                            2
                        </div>
                        <h3 class="text-xl font-bold text-purple-600 mb-3">What are the Goals?</h3>
                        <ul class="text-gray-700 text-sm space-y-2">
                            <li>• What problem must be solved?</li>
                            <li>• Where is the ROI?</li>
                            <li>• What value will be delivered?</li>
                        </ul>
                    </div>

                    <div class="card-hover bg-white border-2 border-pink-200 p-6 rounded-xl shadow-lg">
                        <div class="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mb-4 text-white font-bold text-lg shadow-md">
                            3
                        </div>
                        <h3 class="text-xl font-bold text-pink-600 mb-3">What Does Success Look Like?</h3>
                        <ul class="text-gray-700 text-sm space-y-2">
                            <li>• Define success criteria</li>
                            <li>• Set measurable metrics</li>
                            <li>• Example: Response time 72hrs → <24hrs</li>
                        </ul>
                    </div>
                </div>

                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <p class="text-lg font-semibold text-yellow-900">
                        <strong>Lesson Learned:</strong> A project can meet ALL requirements but still FAIL if it doesn't solve the business problem
                    </p>
                </div>
            </div>
        `
    },

    // Slide 4: Business Case - Why, When, Who
    {
        title: "Business Case",
        subtitle: "Why, When, and Who",
        type: "content",
        notes: "PRESENTER: A business case is a decision-making tool to convince executives and secure funding. Explain WHY it's used (justification), WHEN (before project approval), and WHO creates it (executives, managers, BAs). In some orgs, BAs not only create but also guide approved projects to completion. Time estimate: 5 minutes.",
        content: `
            <div class="space-y-6">
                <p class="text-lg text-gray-700">A Business Case is a decision-making tool that outlines a problem/opportunity, solutions, costs, benefits, and recommended action.</p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="card-hover group bg-white border-2 border-primary-200 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-primary-600 mb-4">WHY</h3>
                        <ul class="text-gray-700 text-sm space-y-2">
                            <li>• Convince decision-makers</li>
                            <li>• Secure funding/approval</li>
                            <li>• Compare solution options</li>
                            <li>• Justify investment</li>
                            <li>• Quantify ROI</li>
                        </ul>
                        <div class="mt-3 p-2 bg-primary-50 rounded text-xs text-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <strong>Tip:</strong> Decision-making and approval tool
                        </div>
                    </div>

                    <div class="card-hover group bg-white border-2 border-purple-200 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-purple-600 mb-4">WHEN</h3>
                        <ul class="text-gray-700 text-sm space-y-2">
                            <li>• <strong>Before</strong> project starts</li>
                            <li>• <strong>Before</strong> budget allocation</li>
                            <li>• After problem identified</li>
                            <li>• During feasibility phase</li>
                            <li>• Updated if scope changes</li>
                        </ul>
                        <div class="mt-3 p-2 bg-purple-50 rounded text-xs text-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <strong>Tip:</strong> Created early in lifecycle
                        </div>
                    </div>

                    <div class="card-hover group bg-white border-2 border-pink-200 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-pink-600 mb-4">WHO</h3>
                        <ul class="text-gray-700 text-sm space-y-2">
                            <li>• <strong>Created by:</strong> Executives, Managers, BAs</li>
                            <li>• <strong>Input from:</strong> SMEs, Finance</li>
                            <li>• <strong>Approved by:</strong> Sponsor, Exec Committee</li>
                            <li>• BAs often guide projects after approval</li>
                        </ul>
                        <div class="mt-3 p-2 bg-pink-50 rounded text-xs text-pink-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <strong>Tip:</strong> Collaborative creation, sponsor owns
                        </div>
                    </div>
                </div>

                <div class="bg-gradient-to-r from-primary-600 to-purple-600 text-white p-6 rounded-xl">
                    <h4 class="font-bold text-lg mb-2">Business Case Components</h4>
                    <p class="text-sm">Problem/Opportunity • Solution Options • Costs & Benefits • Risks • Recommended Action • Next Steps</p>
                </div>
            </div>
        `
    },

    // Slide 5: Business Case Development Process
    {
        title: "Business Case Development",
        subtitle: "Five-phase process from analysis to presentation",
        type: "content",
        notes: "PRESENTER: Walk through the 5 phases. Emphasize iteration and stakeholder collaboration. Each phase builds on previous. Phase 5 (presentation) is critical - must have clear ask: approve, pilot, or reject. Time estimate: 6 minutes.",
        content: `
            <div class="space-y-4">
                <div class="grid grid-cols-1 gap-4">
                    <div class="card-hover group bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 rounded-r-xl shadow-lg">
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                            <div class="flex-1">
                                <h3 class="text-xl font-bold text-blue-700 mb-2">Initial Analysis & Scoping</h3>
                                <p class="text-gray-700 text-sm">Define problem, gather high-level requirements, identify stakeholders, assess feasibility</p>
                                <div class="mt-2 text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <strong>Output:</strong> Problem statement, scope boundaries, initial stakeholder list
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-hover group bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-5 rounded-r-xl shadow-lg">
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                            <div class="flex-1">
                                <h3 class="text-xl font-bold text-purple-700 mb-2">Develop Potential Solutions</h3>
                                <p class="text-gray-700 text-sm">Identify 2-4 solution options, estimate costs/benefits, analyze risks for each</p>
                                <div class="mt-2 text-xs text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <strong>Output:</strong> Options matrix with costs, benefits, risk comparison
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-hover group bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 p-5 rounded-r-xl shadow-lg">
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                            <div class="flex-1">
                                <h3 class="text-xl font-bold text-pink-700 mb-2">Writing the Business Case</h3>
                                <p class="text-gray-700 text-sm">Document problem, options, recommended solution, financials, risks, implementation plan</p>
                                <div class="mt-2 text-xs text-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <strong>Output:</strong> Complete business case with executive summary
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-hover group bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 rounded-r-xl shadow-lg">
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                            <div class="flex-1">
                                <h3 class="text-xl font-bold text-orange-700 mb-2">Reviewing with SMEs & Finance</h3>
                                <p class="text-gray-700 text-sm">Validate assumptions, refine cost estimates, confirm technical feasibility</p>
                                <div class="mt-2 text-xs text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <strong>Output:</strong> Validated business case with SME and finance sign-off
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-hover group bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 rounded-r-xl shadow-lg">
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                            <div class="flex-1">
                                <h3 class="text-xl font-bold text-green-700 mb-2">Presenting to Decision-Makers</h3>
                                <p class="text-gray-700 text-sm">Executive presentation with clear ask: approve, pilot, or reject. Prepare for Q&A</p>
                                <div class="mt-2 text-xs text-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <strong>Output:</strong> Decision (approved/deferred/rejected), next steps authorized
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <p class="text-lg font-semibold text-yellow-900">
                        <strong>Presentation Tip:</strong> Lead with business value, show ROI, answer "What if we do nothing?", end with specific ask
                    </p>
                </div>
            </div>
        `
    },

    // Slide 6: Presenting Business Cases - Key Points
    {
        title: "Presenting Business Cases",
        subtitle: "Best practices and common pitfalls",
        type: "content",
        notes: "PRESENTER: Presentation tips for executives. Structure: Problem (1 min), Solution (2 min), Benefits/ROI (2 min), Risks (1 min), Ask for decision (1 min), Q&A. Avoid jargon, unrealistic timelines, and not answering 'do nothing' scenario. Time estimate: 4 minutes.",
        content: `
            <div class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="card-hover bg-white border-2 border-green-200 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-green-600 mb-4">Best Practices</h3>
                        <ul class="text-gray-700 space-y-2 text-sm">
                            <li>• Lead with business value, not technical details</li>
                            <li>• Use 1-page executive summary</li>
                            <li>• Show clear ROI and payback period</li>
                            <li>• Highlight strategic alignment</li>
                            <li>• Answer "What if we do nothing?"</li>
                            <li>• End with specific ask for decision</li>
                        </ul>
                    </div>

                    <div class="card-hover bg-white border-2 border-blue-200 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-blue-600 mb-4">Recommended Structure</h3>
                        <ol class="text-gray-700 space-y-2 text-sm list-decimal ml-5">
                            <li>Problem statement (1 min)</li>
                            <li>Recommended solution (2 min)</li>
                            <li>Benefits & ROI (2 min)</li>
                            <li>Risks & mitigation (1 min)</li>
                            <li>Ask for decision (1 min)</li>
                            <li>Q&A (remainder)</li>
                        </ol>
                    </div>
                </div>

                <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                    <h4 class="font-bold text-red-900 mb-3">Common Pitfalls to Avoid</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <ul class="text-red-800 text-sm space-y-1">
                            <li>• Too much technical jargon</li>
                            <li>• No clear recommendation</li>
                            <li>• Unrealistic timelines or budgets</li>
                        </ul>
                        <ul class="text-red-800 text-sm space-y-1">
                            <li>• Ignoring known risks</li>
                            <li>• Not answering "do nothing" scenario</li>
                            <li>• No specific ask for decision</li>
                        </ul>
                    </div>
                </div>

                <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                    <p class="text-lg font-semibold text-green-900">
                        <strong>Tip:</strong> End with: "We request approval to proceed to detailed planning with $X budget"
                    </p>
                </div>
            </div>
        `
    },

    // Slide 7: Project Charter - Purpose & Definition
    {
        title: "Project Charter",
        subtitle: "Official authorization and high-level definition",
        type: "content",
        notes: "PRESENTER: Charter is official project authorization. Created after business case approval. Names sponsor and PM, defines high-level scope, establishes governance. Sponsor signs to authorize. Gives PM authority to proceed. Time estimate: 5 minutes.",
        content: `
            <div class="space-y-6">
                <p class="text-lg text-gray-700">A Project Charter formally authorizes the project, names key roles, and provides high-level scope, objectives, and governance framework.</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="card-hover bg-white border-2 border-primary-200 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-primary-600 mb-3">What It Is</h3>
                        <ul class="text-gray-700 text-sm space-y-2">
                            <li>✓ Official project authorization</li>
                            <li>✓ Short, high-level document (2-4 pages)</li>
                            <li>✓ Names sponsor & PM</li>
                            <li>✓ Defines scope boundaries</li>
                            <li>✓ Establishes governance</li>
                        </ul>
                    </div>

                    <div class="card-hover bg-white border-2 border-purple-200 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-purple-600 mb-3">Why It Matters</h3>
                        <ul class="text-gray-700 text-sm space-y-2">
                            <li>✓ Gives PM authority to act</li>
                            <li>✓ Aligns stakeholders on scope</li>
                            <li>✓ Documents constraints early</li>
                            <li>✓ Prevents scope creep</li>
                            <li>✓ Serves as project reference</li>
                        </ul>
                    </div>
                </div>

                <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl">
                    <h4 class="font-bold text-lg mb-3">Key Charter Elements</h4>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                        <div>• Background</div>
                        <div>• Objectives</div>
                        <div>• Scope (in/out)</div>
                        <div>• Deliverables</div>
                        <div>• Sponsor</div>
                        <div>• Project Manager</div>
                        <div>• Timeline</div>
                        <div>• Budget</div>
                        <div>• Constraints</div>
                        <div>• Assumptions</div>
                        <div>• Risks</div>
                        <div>• Governance</div>
                    </div>
                </div>
            </div>
        `
    },

    // Slide 8: Project Charter - Key Sections  
    {
        title: "Project Charter - Key Sections",
        subtitle: "Essential components for effective authorization",
        type: "content",
        notes: "PRESENTER: Walk through all 8 sections. Background provides context. Scope defines boundaries (what's IN and OUT). Objectives must be SMART. Deliverables are high-level. CARD is critical for risk awareness. Governance defines decision-making. Keep charter concise - detailed planning comes later. Time estimate: 6 minutes.",
        content: `
            <div class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="card-hover bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-4 rounded-xl">
                        <div class="flex items-center gap-3 mb-2">
                            <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0">
                                1
                            </div>
                            <h3 class="font-bold text-blue-700">Background Information</h3>
                        </div>
                        <p class="text-gray-700 text-sm">Why project exists, what problem it solves, business context, strategic alignment</p>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-indigo-50 to-indigo-100 border-2 border-indigo-200 p-4 rounded-xl">
                        <div class="flex items-center gap-3 mb-2">
                            <div class="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0">
                                2
                            </div>
                            <h3 class="font-bold text-indigo-700">Objectives & Success Criteria</h3>
                        </div>
                        <p class="text-gray-700 text-sm">SMART objectives, measurable outcomes, definition of project success</p>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 p-4 rounded-xl">
                        <div class="flex items-center gap-3 mb-2">
                            <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0">
                                3
                            </div>
                            <h3 class="font-bold text-purple-700">Scope (In/Out)</h3>
                        </div>
                        <p class="text-gray-700 text-sm">What's included, what's explicitly excluded, boundaries, interfaces, high-level deliverables</p>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-200 p-4 rounded-xl">
                        <div class="flex items-center gap-3 mb-2">
                            <div class="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0">
                                4
                            </div>
                            <h3 class="font-bold text-pink-700">Major Deliverables</h3>
                        </div>
                        <p class="text-gray-700 text-sm">Key outputs, milestones, who will use deliverables</p>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-rose-50 to-rose-100 border-2 border-rose-200 p-4 rounded-xl">
                        <div class="flex items-center gap-3 mb-2">
                            <div class="w-8 h-8 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0">
                                5
                            </div>
                            <h3 class="font-bold text-rose-700">Governance</h3>
                        </div>
                        <p class="text-gray-700 text-sm">Project Sponsor (decision authority), Project Manager (executes), major stakeholders</p>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 p-4 rounded-xl">
                        <div class="flex items-center gap-3 mb-2">
                            <div class="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0">
                                6
                            </div>
                            <h3 class="font-bold text-orange-700">Schedule & Budget</h3>
                        </div>
                        <p class="text-gray-700 text-sm">High-level timeline, key milestones, estimated budget (one-time & ongoing costs)</p>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200 p-4 rounded-xl">
                        <div class="flex items-center gap-3 mb-2">
                            <div class="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0">
                                7
                            </div>
                            <h3 class="font-bold text-amber-700">CARD Analysis</h3>
                        </div>
                        <p class="text-gray-700 text-sm">Constraints, Assumptions, Risks, Dependencies identified early</p>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 p-4 rounded-xl">
                        <div class="flex items-center gap-3 mb-2">
                            <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0">
                                8
                            </div>
                            <h3 class="font-bold text-green-700">Approvals</h3>
                        </div>
                        <p class="text-gray-700 text-sm">Sponsor signature, approval date, formal authorization to proceed</p>
                    </div>
                </div>

                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <p class="text-lg font-semibold text-yellow-900">
                        <strong>Best Practice:</strong> Keep charter concise (2-4 pages) — detailed planning happens in Stage 2
                    </p>
                </div>
            </div>
        `
    },

    // Slide 9: CARD Analysis
    {
        title: "CARD Analysis",
        subtitle: "Constraints, Assumptions, Risks, Dependencies",
        type: "content",
        notes: "PRESENTER: CARD framework identifies critical project factors early. Constraints cannot be changed (work within them). Assumptions are things believed true (validate them or they become risks). Risks are potential problems (track likelihood, impact, mitigation). Dependencies are external factors (track and communicate with owners). Document in charter and revisit throughout project. Time estimate: 7 minutes.",
        content: `
            <div class="space-y-6">
                <p class="text-lg text-gray-700">CARD helps identify and document critical project factors that impact planning and execution:</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="card-hover group bg-white border-2 border-red-200 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-red-600 mb-3">Constraints</h3>
                        <p class="text-gray-700 text-sm mb-2">Limitations that restrict project options — cannot be changed</p>
                        <ul class="text-gray-600 text-sm space-y-1">
                            <li>• Fixed budget: $500K max</li>
                            <li>• Hard deadline: Dec 31st</li>
                            <li>• Limited team: 3 developers</li>
                            <li>• Technology: Must use existing platform</li>
                        </ul>
                        <div class="mt-3 p-2 bg-red-50 rounded text-xs text-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <strong>Tip:</strong> Must work within these — plan accordingly
                        </div>
                    </div>

                    <div class="card-hover group bg-white border-2 border-blue-200 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-blue-600 mb-3">Assumptions</h3>
                        <p class="text-gray-700 text-sm mb-2">Things believed to be true for planning — must validate</p>
                        <ul class="text-gray-600 text-sm space-y-1">
                            <li>• SMEs available 20 hrs/week</li>
                            <li>• Vendor delivers on time</li>
                            <li>• No major org changes</li>
                            <li>• Infrastructure capacity sufficient</li>
                        </ul>
                        <div class="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <strong>Tip:</strong> Validate early — wrong assumptions become risks
                        </div>
                    </div>

                    <div class="card-hover group bg-white border-2 border-orange-200 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-orange-600 mb-3">Risks</h3>
                        <p class="text-gray-700 text-sm mb-2">Potential events that could impact project outcomes</p>
                        <ul class="text-gray-600 text-sm space-y-1">
                            <li>• Key SME leaves company</li>
                            <li>• Integration more complex than expected</li>
                            <li>• Regulatory changes mid-project</li>
                            <li>• Security vulnerabilities discovered</li>
                        </ul>
                        <div class="mt-3 p-2 bg-orange-50 rounded text-xs text-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <strong>Tip:</strong> Track likelihood, impact, and mitigation for each
                        </div>
                    </div>

                    <div class="card-hover group bg-white border-2 border-purple-200 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-purple-600 mb-3">Dependencies</h3>
                        <p class="text-gray-700 text-sm mb-2">External factors project relies on to succeed</p>
                        <ul class="text-gray-600 text-sm space-y-1">
                            <li>• Finance system upgrade (Q2)</li>
                            <li>• Legal approval required</li>
                            <li>• Third-party API availability</li>
                            <li>• Training facility booking</li>
                        </ul>
                        <div class="mt-3 p-2 bg-purple-50 rounded text-xs text-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <strong>Tip:</strong> Track actively and communicate with dependency owners
                        </div>
                    </div>
                </div>

                <div class="bg-gradient-to-r from-primary-600 to-purple-600 text-white p-6 rounded-xl">
                    <h4 class="font-bold text-lg mb-2">CARD in Practice</h4>
                    <p class="text-sm">Document in charter → Review weekly → Update risk log → Manage dependencies → Communicate openly</p>
                </div>
            </div>
        `
    },

    // Slide 10: Stakeholder Management - What & Why
    {
        title: "Stakeholder Management",
        subtitle: "What is a stakeholder and why identify them",
        type: "content",
        notes: "PRESENTER: Stakeholders are anyone affected by the project. Include project team, customers, suppliers, employees, community, regulators, support teams. WHY identify: More ideas/input, varied perspectives, gain buy-in, increase credibility. HOW: Solo brainstorm, team brainstorm, ask stakeholders directly 'Who else?'. Time estimate: 6 minutes.",
        content: `
            <div class="space-y-6">
                <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <h3 class="font-bold text-blue-900 mb-2">What is a Stakeholder?</h3>
                    <p class="text-blue-800">Stakeholders are people or groups affected by a project, either directly or indirectly.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="card-hover bg-white border-2 border-primary-200 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-primary-600 mb-4">Who Are They?</h3>
                        <ul class="text-gray-700 text-sm space-y-2">
                            <li>• Project team (PM, BA, IT, business staff)</li>
                            <li>• Customers (internal/external users)</li>
                            <li>• Suppliers (vendors, partners)</li>
                            <li>• Employees (executives, managers, staff)</li>
                            <li>• Community (if public-facing)</li>
                            <li>• Regulators (FDA, unions, agencies)</li>
                            <li>• Support teams (post-launch)</li>
                        </ul>
                    </div>

                    <div class="card-hover bg-white border-2 border-purple-200 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-purple-600 mb-4">Why Identify Them?</h3>
                        <ul class="text-gray-700 text-sm space-y-2">
                            <li>✓ <strong>More ideas & input</strong> → better solutions, reduced risks</li>
                            <li>✓ <strong>Varied perspectives</strong> → users, managers, executives see differently</li>
                            <li>✓ <strong>Gain buy-in</strong> → stakeholders feel ownership, easier adoption</li>
                            <li>✓ <strong>Increase credibility</strong> → shows team cares, listens, minimizes negative impact</li>
                        </ul>
                    </div>
                </div>

                <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                    <h4 class="font-bold text-green-900 mb-3">How to Identify Stakeholders</h4>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div class="bg-white p-3 rounded">
                            <p class="font-bold text-green-700 mb-1">1. Solo Brainstorm</p>
                            <p class="text-gray-600">Walk through scope: Who benefits? Who's involved? Whose jobs change?</p>
                        </div>
                        <div class="bg-white p-3 rounded">
                            <p class="font-bold text-green-700 mb-1">2. Team Brainstorm</p>
                            <p class="text-gray-600">Share list with project team, add more together</p>
                        </div>
                        <div class="bg-white p-3 rounded">
                            <p class="font-bold text-green-700 mb-1">3. Ask Stakeholders</p>
                            <p class="text-gray-600">"Who else could be impacted?" — uncovers hidden groups</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // Slide 10: RACI Matrix
    {
        title: "RACI Matrix",
        subtitle: "Defining clear roles and responsibilities",
        type: "content",
        notes: "PRESENTER: RACI prevents confusion, power struggles, and forgotten tasks. R=Responsible (does work), A=Accountable (approves, answerable), C=Consulted (provides input), I=Informed (kept updated). Use matrix for all major tasks. Set expectations BEFORE project starts. Time estimate: 6 minutes.",
        content: `
            <div class="space-y-6">
                <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <h3 class="font-bold text-blue-900 mb-2">What is RACI?</h3>
                    <p class="text-blue-800">A project tool that defines stakeholder responsibilities to prevent confusion, power struggles, and tasks being forgotten.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="card-hover bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 p-5 rounded-xl">
                        <div class="flex items-start gap-3">
                            <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">R</div>
                            <div>
                                <h3 class="font-bold text-green-700 mb-1">Responsible</h3>
                                <p class="text-gray-700 text-sm">Person/team that does the actual work</p>
                                <p class="text-gray-600 text-xs mt-1">Example: Developer writing code, Tester running tests</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-5 rounded-xl">
                        <div class="flex items-start gap-3">
                            <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
                            <div>
                                <h3 class="font-bold text-blue-700 mb-1">Accountable</h3>
                                <p class="text-gray-700 text-sm">Person who approves work, answerable if things go wrong</p>
                                <p class="text-gray-600 text-xs mt-1">Example: Project Manager, Department Head</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 p-5 rounded-xl">
                        <div class="flex items-start gap-3">
                            <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">C</div>
                            <div>
                                <h3 class="font-bold text-purple-700 mb-1">Consulted</h3>
                                <p class="text-gray-700 text-sm">Provides input, advice, expertise, but doesn't decide</p>
                                <p class="text-gray-600 text-xs mt-1">Example: Subject Matter Experts, Business Analysts</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 p-5 rounded-xl">
                        <div class="flex items-start gap-3">
                            <div class="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">I</div>
                            <div>
                                <h3 class="font-bold text-orange-700 mb-1">Informed</h3>
                                <p class="text-gray-700 text-sm">Needs to be kept updated on progress/results</p>
                                <p class="text-gray-600 text-xs mt-1">Example: Executives, End Users, Sponsors</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-sm border-collapse">
                        <thead>
                            <tr class="bg-gray-100">
                                <th class="border border-gray-300 p-2 text-left">Task</th>
                                <th class="border border-gray-300 p-2 bg-green-100">R</th>
                                <th class="border border-gray-300 p-2 bg-blue-100">A</th>
                                <th class="border border-gray-300 p-2 bg-purple-100">C</th>
                                <th class="border border-gray-300 p-2 bg-orange-100">I</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-700">
                            <tr>
                                <td class="border border-gray-300 p-2 font-semibold">Project Charter</td>
                                <td class="border border-gray-300 p-2 bg-green-50">PM</td>
                                <td class="border border-gray-300 p-2 bg-blue-50">Sponsor</td>
                                <td class="border border-gray-300 p-2 bg-purple-50">BA</td>
                                <td class="border border-gray-300 p-2 bg-orange-50">All Teams</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 p-2 font-semibold">Requirements</td>
                                <td class="border border-gray-300 p-2 bg-green-50">BA Team</td>
                                <td class="border border-gray-300 p-2 bg-blue-50">Sponsor</td>
                                <td class="border border-gray-300 p-2 bg-purple-50">SMEs</td>
                                <td class="border border-gray-300 p-2 bg-orange-50">Stakeholders</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 p-2 font-semibold">Deployment</td>
                                <td class="border border-gray-300 p-2 bg-green-50">Operations</td>
                                <td class="border border-gray-300 p-2 bg-blue-50">CTO</td>
                                <td class="border border-gray-300 p-2 bg-purple-50">Dev Team</td>
                                <td class="border border-gray-300 p-2 bg-orange-50">Business Users</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <p class="text-lg font-semibold text-yellow-900">
                        <strong>Why Use RACI:</strong> Avoids power struggles, prevents tasks being ignored, sets clear expectations before project starts
                    </p>
                </div>
            </div>
        `
    },

    // Slide 11: Stage 2 - Definition & Planning Overview
    {
        title: "Stage 2: Definition & Planning",
        subtitle: "Developing the roadmap for project success",
        type: "content",
        notes: "PRESENTER: Planning phase transforms approved concept into detailed execution plan. Answer the question: How do we make this succeed? Cover 5 key planning steps: Schedule, Communication, Assumptions/Risks, Quality, Go-Live. Each step is critical. Time estimate: 4 minutes.",
        content: `
            <div class="space-y-6">
                <p class="text-lg text-gray-700">Develop a comprehensive plan for how the project will be successfully executed. Answer: <strong>How do we make this succeed, and what steps do we take?</strong></p>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="card-hover bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500 p-5 rounded-r-xl">
                        <div class="flex items-center gap-3 mb-2">
                            <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0">
                                1
                            </div>
                            <h3 class="text-lg font-bold text-blue-700">Project Schedule</h3>
                        </div>
                        <p class="text-gray-700 text-sm mb-2">Create timeline with tasks and milestones</p>
                        <p class="text-blue-600 text-xs"><strong>Outcome:</strong> Keeps project on track, avoids delays</p>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-500 p-5 rounded-r-xl">
                        <div class="flex items-center gap-3 mb-2">
                            <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0">
                                2
                            </div>
                            <h3 class="text-lg font-bold text-purple-700">Communication Plan</h3>
                        </div>
                        <p class="text-gray-700 text-sm mb-2">How updates shared: meetings, reports, status</p>
                        <p class="text-purple-600 text-xs"><strong>Outcome:</strong> Ensures everyone stays informed and aligned</p>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-pink-50 to-pink-100 border-l-4 border-pink-500 p-5 rounded-r-xl">
                        <div class="flex items-center gap-3 mb-2">
                            <div class="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0">
                                3
                            </div>
                            <h3 class="text-lg font-bold text-pink-700">Assumptions & Risks</h3>
                        </div>
                        <p class="text-gray-700 text-sm mb-2">Identify what could be true and what could go wrong</p>
                        <p class="text-pink-600 text-xs"><strong>Outcome:</strong> Prepare for challenges before they happen</p>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-orange-500 p-5 rounded-r-xl">
                        <div class="flex items-center gap-3 mb-2">
                            <div class="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0">
                                4
                            </div>
                            <h3 class="text-lg font-bold text-orange-700">Quality Plan</h3>
                        </div>
                        <p class="text-gray-700 text-sm mb-2">Plan testing, quality checks, acceptance criteria</p>
                        <p class="text-orange-600 text-xs"><strong>Outcome:</strong> Ensures deliverable meets expectations</p>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-500 p-5 rounded-r-xl">
                        <div class="flex items-center gap-3 mb-2">
                            <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0">
                                5
                            </div>
                            <h3 class="text-lg font-bold text-green-700">Go-Live Plan</h3>
                        </div>
                        <p class="text-gray-700 text-sm mb-2">Prepare for rollout and real-world use</p>
                        <p class="text-green-600 text-xs"><strong>Outcome:</strong> Ensures smooth transition and adoption</p>
                    </div>
                </div>

                <div class="bg-gradient-to-r from-primary-600 to-purple-600 text-white p-6 rounded-xl">
                    <h4 class="font-bold text-lg mb-2">Planning Outcome</h4>
                    <p class="text-sm">Comprehensive project plan with schedule, RACI matrix, communication plan, risk log, quality plan, and go-live strategy</p>
                </div>
            </div>
        `
    },

    // Slide 12: Creating a Project Schedule
    {
        title: "Creating a Project Schedule",
        subtitle: "Steps to build an effective timeline",
        type: "content",
        notes: "PRESENTER: Schedule provides structure and clarity. Shows steps, milestones, timeline (not just end date). Sets realistic expectations, reduces overruns, prevents stalling, clarifies assignments. Walk through 5 steps to create schedule. Time estimate: 5 minutes.",
        content: `
            <div class="space-y-6">
                <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <h3 class="font-bold text-blue-900 mb-2">Why Create a Schedule?</h3>
                    <p class="text-blue-800">Timetable showing start/end dates, milestones, activities, deliverables, and task owners — provides structure and accountability</p>
                </div>

                <div class="grid grid-cols-1 gap-4">
                    <div class="card-hover bg-white border-2 border-blue-200 p-5 rounded-xl">
                        <div class="flex items-start gap-3">
                            <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                            <div>
                                <h3 class="font-bold text-blue-700 mb-1">Define Tasks & Deliverables</h3>
                                <p class="text-gray-700 text-sm">Break down project into specific activities and outputs</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-hover bg-white border-2 border-purple-200 p-5 rounded-xl">
                        <div class="flex items-start gap-3">
                            <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                            <div>
                                <h3 class="font-bold text-purple-700 mb-1">Estimate Effort & Resources</h3>
                                <p class="text-gray-700 text-sm">Determine time needed and people required for each task</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-hover bg-white border-2 border-pink-200 p-5 rounded-xl">
                        <div class="flex items-start gap-3">
                            <div class="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                            <div>
                                <h3 class="font-bold text-pink-700 mb-1">Identify Dependencies & Sequence Tasks</h3>
                                <p class="text-gray-700 text-sm">Determine task order and what must be completed before others start</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-hover bg-white border-2 border-orange-200 p-5 rounded-xl">
                        <div class="flex items-start gap-3">
                            <div class="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                            <div>
                                <h3 class="font-bold text-orange-700 mb-1">Calculate Critical Path & Milestones</h3>
                                <p class="text-gray-700 text-sm">Identify longest sequence (critical path) and set key checkpoints</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-hover bg-white border-2 border-green-200 p-5 rounded-xl">
                        <div class="flex items-start gap-3">
                            <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                            <div>
                                <h3 class="font-bold text-green-700 mb-1">Set Baselines & Review with Stakeholders</h3>
                                <p class="text-gray-700 text-sm">Lock in approved schedule and get stakeholder buy-in</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
                    <div class="text-center">
                        <p class="text-sm text-gray-600 mb-1">Benefits</p>
                        <p class="font-semibold text-gray-800">Sets realistic expectations</p>
                    </div>
                    <div class="text-center">
                        <p class="text-sm text-gray-600 mb-1">Benefits</p>
                        <p class="font-semibold text-gray-800">Reduces cost/time overruns</p>
                    </div>
                    <div class="text-center">
                        <p class="text-sm text-gray-600 mb-1">Benefits</p>
                        <p class="font-semibold text-gray-800">Clarifies task ownership</p>
                    </div>
                </div>
            </div>
        `
    },

    // Slide 13: Communication Plan
    {
        title: "Developing a Communication Plan",
        subtitle: "Rules for how, when, and with whom to communicate",
        type: "content",
        notes: "PRESENTER: Communication planning defines clear rules for project communications. Helps define needs, show project value, gain buy-in, gather feedback. Three main types: Kickoff (once), Status Reports (weekly), Meeting Notes (after every meeting). Time estimate: 5 minutes.",
        content: `
            <div class="space-y-6">
                <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <h3 class="font-bold text-blue-900 mb-2">What is Communication Planning?</h3>
                    <p class="text-blue-800">Setting rules for how, when, and with whom you'll communicate during a project to ensure alignment and transparency</p>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-sm border-collapse">
                        <thead>
                            <tr class="bg-gradient-to-r from-primary-600 to-purple-600 text-white">
                                <th class="border border-gray-300 p-3 text-left">Type</th>
                                <th class="border border-gray-300 p-3 text-left">Audience</th>
                                <th class="border border-gray-300 p-3 text-left">Purpose</th>
                                <th class="border border-gray-300 p-3 text-left">Method</th>
                                <th class="border border-gray-300 p-3 text-left">Frequency</th>
                                <th class="border border-gray-300 p-3 text-left">Owner</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-700">
                            <tr class="bg-blue-50">
                                <td class="border border-gray-300 p-3 font-semibold">Kickoff Meeting</td>
                                <td class="border border-gray-300 p-3">Full team, sponsors, QA, leads</td>
                                <td class="border border-gray-300 p-3">Collaboration, alignment, set expectations</td>
                                <td class="border border-gray-300 p-3">Meeting (in-person/online)</td>
                                <td class="border border-gray-300 p-3">Once</td>
                                <td class="border border-gray-300 p-3">PM</td>
                            </tr>
                            <tr class="bg-purple-50">
                                <td class="border border-gray-300 p-3 font-semibold">Status Reports</td>
                                <td class="border border-gray-300 p-3">Full team + sponsors</td>
                                <td class="border border-gray-300 p-3">Update on schedule, budget, resources, risks</td>
                                <td class="border border-gray-300 p-3">Written email</td>
                                <td class="border border-gray-300 p-3">Weekly</td>
                                <td class="border border-gray-300 p-3">PM</td>
                            </tr>
                            <tr class="bg-pink-50">
                                <td class="border border-gray-300 p-3 font-semibold">Meeting Notes</td>
                                <td class="border border-gray-300 p-3">Attendees + Project Lead (+ sponsor)</td>
                                <td class="border border-gray-300 p-3">Document decisions, next steps, accountability</td>
                                <td class="border border-gray-300 p-3">Email after meeting</td>
                                <td class="border border-gray-300 p-3">After every meeting</td>
                                <td class="border border-gray-300 p-3">PM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
                    <div class="card-hover bg-white border-2 border-primary-200 p-4 rounded-xl text-center">
                        <p class="font-bold text-primary-700">Define Needs</p>
                        <p class="text-xs text-gray-600 mt-1">Clarify communication requirements</p>
                    </div>
                    <div class="card-hover bg-white border-2 border-purple-200 p-4 rounded-xl text-center">
                        <p class="font-bold text-purple-700">Show Value</p>
                        <p class="text-xs text-gray-600 mt-1">Demonstrate project importance</p>
                    </div>
                    <div class="card-hover bg-white border-2 border-pink-200 p-4 rounded-xl text-center">
                        <p class="font-bold text-pink-700">Gain Buy-in</p>
                        <p class="text-xs text-gray-600 mt-1">Secure stakeholder support</p>
                    </div>
                    <div class="card-hover bg-white border-2 border-rose-200 p-4 rounded-xl text-center">
                        <p class="font-bold text-rose-700">Get Feedback</p>
                        <p class="text-xs text-gray-600 mt-1">Create feedback channels</p>
                    </div>
                </div>
            </div>
        `
    },

    // Slide 14: Assumptions & Risks
    {
        title: "Identifying Assumptions & Risks",
        subtitle: "Validate assumptions, track and mitigate risks",
        type: "content",
        notes: "PRESENTER: Assumptions are things believed true — must validate or they become risks. Identify through plan walkthroughs and questioning everything. Risks are potential problems — identify early, categorize (schedule, customer, requirements), then eliminate or mitigate. Document both openly and take action. Time estimate: 6 minutes.",
        content: `
            <div class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="card-hover bg-white border-2 border-blue-200 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-blue-600 mb-3">Assumptions</h3>
                        <p class="text-gray-700 text-sm mb-3">Things believed to be true for planning — must be validated</p>
                        
                        <div class="bg-blue-50 p-3 rounded mb-3">
                            <p class="font-semibold text-blue-800 text-sm mb-2">How to Identify:</p>
                            <ul class="text-gray-700 text-xs space-y-1">
                                <li>• Review project plan step-by-step</li>
                                <li>• Question everything — fact or assumption?</li>
                                <li>• Validate the source</li>
                            </ul>
                        </div>

                        <div class="bg-green-50 p-3 rounded">
                            <p class="font-semibold text-green-800 text-sm mb-2">What to Do:</p>
                            <ul class="text-gray-700 text-xs space-y-1">
                                <li>✓ Document clearly</li>
                                <li>✓ Share in status meetings</li>
                                <li>✓ Ask: If wrong, what's worst outcome?</li>
                                <li>✓ If serious impact → validate with managers</li>
                                <li>✓ If can't validate → treat as risk</li>
                            </ul>
                        </div>
                    </div>

                    <div class="card-hover bg-white border-2 border-orange-200 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-orange-600 mb-3">Risks</h3>
                        <p class="text-gray-700 text-sm mb-3">Potential events that could cause project problems or failure</p>
                        
                        <div class="bg-orange-50 p-3 rounded mb-3">
                            <p class="font-semibold text-orange-800 text-sm mb-2">Common Risk Areas:</p>
                            <ul class="text-gray-700 text-xs space-y-1">
                                <li>• <strong>Schedule:</strong> Unrealistic timelines, dependency delays</li>
                                <li>• <strong>Customer:</strong> New requirements, unengaged sponsor</li>
                                <li>• <strong>Requirements:</strong> Poorly defined, unclear needs</li>
                            </ul>
                        </div>

                        <div class="bg-red-50 p-3 rounded">
                            <p class="font-semibold text-red-800 text-sm mb-2">What to Do:</p>
                            <ul class="text-gray-700 text-xs space-y-1">
                                <li>✓ Identify early in planning</li>
                                <li>✓ Document and share openly</li>
                                <li>✓ Try to eliminate or mitigate</li>
                                <li>✓ Reduce impact (adjust schedule, add resources)</li>
                                <li>✓ Track in risk log with mitigation plans</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <p class="text-lg font-semibold text-yellow-900">
                        <strong>Key Actions:</strong> Identify → Validate → Communicate → Take Action (eliminate/mitigate)
                    </p>
                </div>
            </div>
        `
    },

    // Slide 15: Quality Plan & Go-Live Planning
    {
        title: "Quality Plan & Go-Live Strategy",
        subtitle: "Ensuring deliverable meets standards and successful rollout",
        type: "content",
        notes: "PRESENTER: Quality Plan has 3 parts: requirements (what quality means), standards (best practices), assurance (testing/validation). Go-Live planning applies to ALL projects. Plan rollout method (big bang, phased, pilot), user support during go-live, and transition to long-term support. Time estimate: 6 minutes.",
        content: `
            <div class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="card-hover bg-white border-2 border-blue-200 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-blue-600 mb-3">Quality Plan (3 Parts)</h3>
                        
                        <div class="space-y-3">
                            <div class="bg-blue-50 p-3 rounded">
                                <p class="font-semibold text-blue-800 text-sm">1. Quality Requirements</p>
                                <p class="text-gray-700 text-xs">Define what quality means for this project</p>
                            </div>

                            <div class="bg-indigo-50 p-3 rounded">
                                <p class="font-semibold text-indigo-800 text-sm">2. Quality Standards</p>
                                <p class="text-gray-700 text-xs">Best practices, coding standards, compliance needs</p>
                            </div>

                            <div class="bg-purple-50 p-3 rounded">
                                <p class="font-semibold text-purple-800 text-sm">3. Quality Assurance</p>
                                <p class="text-gray-700 text-xs">Testing strategy, UAT, validation, defect process</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-hover bg-white border-2 border-green-200 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-green-600 mb-3">Go-Live Planning (3 Areas)</h3>
                        
                        <div class="space-y-3">
                            <div class="bg-green-50 p-3 rounded">
                                <p class="font-semibold text-green-800 text-sm">1. Rollout Strategy</p>
                                <p class="text-gray-700 text-xs mb-1">Choose approach:</p>
                                <ul class="text-gray-600 text-xs ml-3">
                                    <li>• <strong>Big Bang:</strong> Everyone at once (risky)</li>
                                    <li>• <strong>Phased:</strong> Stages (safer, smoother)</li>
                                    <li>• <strong>Pilot:</strong> Small group first (uncover bugs)</li>
                                </ul>
                            </div>

                            <div class="bg-emerald-50 p-3 rounded">
                                <p class="font-semibold text-emerald-800 text-sm">2. User Support</p>
                                <p class="text-gray-700 text-xs">Bug reporting process, contacts, onsite support, daily check-ins</p>
                            </div>

                            <div class="bg-teal-50 p-3 rounded">
                                <p class="font-semibold text-teal-800 text-sm">3. Long-Term Support</p>
                                <p class="text-gray-700 text-xs">Handover docs, train support team, define escalation, set timeline</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <p class="text-lg font-semibold text-yellow-900">
                        <strong>Important:</strong> Go-Live applies to ALL projects — even research documents need rollout planning
                    </p>
                </div>
            </div>
        `
    },

    // Slide 16: Stage 3 - Execution & Control
    {
        title: "Stage 3: Execution & Control",
        subtitle: "Delivering while monitoring and managing changes",
        type: "content",
        notes: "PRESENTER: Execution phase is about carrying out the plan to achieve deliverables while continuously monitoring progress, risks, costs, and scope. Key activities: Project kickoff, monitor risks, status meetings, change management, hold people accountable. Time estimate: 4 minutes.",
        content: `
            <div class="space-y-6">
                <p class="text-lg text-gray-700">Execute the project plan to achieve agreed deliverables while continuously monitoring progress, risks, costs, and scope to ensure the project stays aligned with objectives.</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="card-hover group bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-blue-700 mb-3">Project Kickoff</h3>
                        <p class="text-gray-700 text-sm">Set expectations, confirm governance, present schedule, identify risks, introduce team roles</p>
                        <div class="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <strong>Tip:</strong> First formal team meeting — critical for alignment
                        </div>
                    </div>

                    <div class="card-hover group bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-purple-700 mb-3">Monitor Risks</h3>
                        <p class="text-gray-700 text-sm">Regularly review risk log, check mitigation effectiveness, escalate as needed, adapt plans</p>
                        <div class="mt-3 p-2 bg-purple-50 rounded text-xs text-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <strong>Tip:</strong> Continuous risk tracking prevents project derailment
                        </div>
                    </div>

                    <div class="card-hover group bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-300 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-pink-700 mb-3">Status Meetings</h3>
                        <p class="text-gray-700 text-sm">Consistent cadence, clear agenda, timeboxed updates, action log, dashboards for metrics</p>
                        <div class="mt-3 p-2 bg-pink-50 rounded text-xs text-pink-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <strong>Tip:</strong> Keep team aligned and surface issues early
                        </div>
                    </div>

                    <div class="card-hover group bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-orange-700 mb-3">Change Management</h3>
                        <p class="text-gray-700 text-sm">Submit request, impact analysis, review by board, approve/reject/defer, update baselines</p>
                        <div class="mt-3 p-2 bg-orange-50 rounded text-xs text-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <strong>Tip:</strong> Controls scope creep and manages expectations
                        </div>
                    </div>
                </div>

                <div class="bg-gradient-to-r from-primary-600 to-purple-600 text-white p-6 rounded-xl">
                    <h4 class="font-bold text-lg mb-2">Key Success Factors</h4>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                        <div>• Expect and manage change</div>
                        <div>• Hold people accountable</div>
                        <div>• Build strong relationships</div>
                    </div>
                </div>
            </div>
        `
    },

    // Slide 17: Project Kickoff & Status Meetings
    {
        title: "Project Kickoff & Status Meetings",
        subtitle: "Setting the stage and maintaining alignment",
        type: "content",
        notes: "PRESENTER: Kickoff is first formal meeting — sets tone for entire project. Cover welcome, overview, timeline, roles/RACI, risks, next steps. Status meetings keep consistent cadence with clear agenda, timeboxed updates. Use dashboards for key metrics. Time estimate: 5 minutes.",
        content: `
            <div class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="card-hover bg-white border-2 border-blue-200 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-blue-600 mb-3">Project Kickoff</h3>
                        <p class="text-gray-700 text-sm mb-3">Set expectations, confirm governance, present schedule, identify risks/dependencies, introduce core team roles</p>
                        
                        <div class="bg-blue-50 p-4 rounded">
                            <p class="font-semibold text-blue-800 text-sm mb-2">Sample Agenda:</p>
                            <ol class="text-gray-700 text-xs space-y-1 list-decimal ml-4">
                                <li>Welcome & objectives</li>
                                <li>Project overview & scope</li>
                                <li>Timeline & milestones</li>
                                <li>Roles & RACI</li>
                                <li>Risks & next steps</li>
                            </ol>
                        </div>
                    </div>

                    <div class="card-hover bg-white border-2 border-purple-200 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-purple-600 mb-3">Status Meetings</h3>
                        <p class="text-gray-700 text-sm mb-3">Keep consistent cadence, clear agenda, timeboxed updates, action log, use dashboards for metrics</p>
                        
                        <div class="overflow-x-auto">
                            <table class="w-full text-xs border-collapse">
                                <thead>
                                    <tr class="bg-purple-100">
                                        <th class="border border-gray-300 p-2 text-left">Agenda Item</th>
                                        <th class="border border-gray-300 p-2">Time</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-700">
                                    <tr>
                                        <td class="border border-gray-300 p-2">Accomplishments this week</td>
                                        <td class="border border-gray-300 p-2 text-center">5 min</td>
                                    </tr>
                                    <tr class="bg-gray-50">
                                        <td class="border border-gray-300 p-2">Issues & blockers</td>
                                        <td class="border border-gray-300 p-2 text-center">10 min</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-300 p-2">Risk review</td>
                                        <td class="border border-gray-300 p-2 text-center">5 min</td>
                                    </tr>
                                    <tr class="bg-gray-50">
                                        <td class="border border-gray-300 p-2">Next week priorities</td>
                                        <td class="border border-gray-300 p-2 text-center">5 min</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-300 p-2">Action items</td>
                                        <td class="border border-gray-300 p-2 text-center">5 min</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <p class="text-lg font-semibold text-yellow-900">
                        <strong>Best Practice:</strong> Use dashboards to visualize scope, schedule, budget, and risk metrics
                    </p>
                </div>
            </div>
        `
    },

    // Slide 18: Change Management Process
    {
        title: "Change Management Process",
        subtitle: "Controlling scope while staying flexible",
        type: "content",
        notes: "PRESENTER: Change management ensures projects stay flexible while controlling impact. 5-step process: Submit request with rationale, Impact analysis (scope/schedule/cost/quality), Review by change board/PM, Approve/Reject/Defer decision, Implement and update baselines. Controls scope creep. Time estimate: 5 minutes.",
        content: `
            <div class="space-y-6">
                <p class="text-lg text-gray-700">Change Management ensures projects stay flexible while controlling the impact of changes on scope, schedule, cost, and resources.</p>

                <div class="grid grid-cols-1 gap-4">
                    <div class="card-hover bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                            <div>
                                <h3 class="font-bold text-blue-700 mb-1">Submit Change Request</h3>
                                <p class="text-gray-700 text-sm">Document proposed change with clear rationale and business justification</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-hover bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-5 rounded-r-xl">
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                            <div>
                                <h3 class="font-bold text-purple-700 mb-1">Impact Analysis</h3>
                                <p class="text-gray-700 text-sm">Assess impact on scope, schedule, cost, quality, and resources</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-hover bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 p-5 rounded-r-xl">
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                            <div>
                                <h3 class="font-bold text-pink-700 mb-1">Review by Change Board/PM</h3>
                                <p class="text-gray-700 text-sm">Formal review of request and impact analysis by decision-makers</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-hover bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 rounded-r-xl">
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                            <div>
                                <h3 class="font-bold text-orange-700 mb-1">Decision: Approve / Reject / Defer</h3>
                                <p class="text-gray-700 text-sm">Clear decision with documented rationale and next steps</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-hover bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 rounded-r-xl">
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                            <div>
                                <h3 class="font-bold text-green-700 mb-1">Implement & Update Baselines</h3>
                                <p class="text-gray-700 text-sm">Execute approved change and update project plan, schedule, and budget baselines</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl">
                    <div class="text-center">
                        <p class="font-semibold text-primary-700">Expect Change</p>
                        <p class="text-xs text-gray-600 mt-1">No plan is set in stone</p>
                    </div>
                    <div class="text-center">
                        <p class="font-semibold text-purple-700">Stay Balanced</p>
                        <p class="text-xs text-gray-600 mt-1">Don't say yes to everything</p>
                    </div>
                    <div class="text-center">
                        <p class="font-semibold text-pink-700">Escalate to Sponsor</p>
                        <p class="text-xs text-gray-600 mt-1">Major decisions need approval</p>
                    </div>
                </div>
            </div>
        `
    },

    // Slide 19: Stage 4 - Project Close
    {
        title: "Stage 4: Project Close",
        subtitle: "Formal closure and knowledge capture",
        type: "content",
        notes: "PRESENTER: Closing is more than just ending tasks. Three key steps: Confirm project is truly done (verify KPIs met), Conduct project review (what worked, what didn't), Execute transition (hand over to support). Each step is critical for long-term success. Time estimate: 5 minutes.",
        content: `
            <div class="space-y-6">
                <p class="text-lg text-gray-700">Closing a project is more than ending tasks — it's about ensuring success, capturing lessons, and transitioning deliverables effectively.</p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="card-hover bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-blue-700 mb-3">1. Confirm Done</h3>
                        <p class="text-gray-700 text-sm mb-3">Review KPIs, objectives, success metrics defined at start</p>
                        <ul class="text-gray-600 text-xs space-y-1">
                            <li>✓ Check budget vs actual</li>
                            <li>✓ Verify schedule adherence</li>
                            <li>✓ Confirm quality standards met</li>
                            <li>✓ Review open issues/risks</li>
                            <li>✓ Measure customer satisfaction</li>
                        </ul>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-purple-700 mb-3">2. Conduct Review</h3>
                        <p class="text-gray-700 text-sm mb-3">Gather team to discuss successes and improvements</p>
                        <ul class="text-gray-600 text-xs space-y-1">
                            <li>✓ Survey before meeting</li>
                            <li>✓ What went well?</li>
                            <li>✓ What went wrong?</li>
                            <li>✓ Lessons learned</li>
                            <li>✓ Action items for future</li>
                        </ul>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-300 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-pink-700 mb-3">3. Execute Transition</h3>
                        <p class="text-gray-700 text-sm mb-3">Hand over to support teams for long-term ownership</p>
                        <ul class="text-gray-600 text-xs space-y-1">
                            <li>✓ Bundle documentation</li>
                            <li>✓ Train support team</li>
                            <li>✓ Review common issues</li>
                            <li>✓ Transition meeting</li>
                            <li>✓ Follow-up support</li>
                        </ul>
                    </div>
                </div>

                <div class="bg-gradient-to-r from-primary-600 to-purple-600 text-white p-6 rounded-xl">
                    <h4 class="font-bold text-lg mb-2">Why Proper Closure Matters</h4>
                    <p class="text-sm">Ensures value delivery, captures organizational learning, prevents recurring mistakes, and sets up long-term success</p>
                </div>
            </div>
        `
    },

    // Slide 20: Lessons Learned & Transition
    {
        title: "Lessons Learned & Project Transition",
        subtitle: "Capturing knowledge and ensuring continuity",
        type: "summary",
        notes: "PRESENTER: Final slide covering lessons learned and transition. Lessons aren't just about closing — they're about learning for future. Review process: pre-survey, workshops, synthesize themes, create improvement plan. Transition: Bundle docs, train support, review common questions, conduct meeting, follow up. Thank you and questions. Time estimate: 6 minutes.",
        content: `
            <div class="space-y-6">
                <div class="text-center mb-6">
                    <h2 class="text-3xl font-bold text-primary-600 mb-2">Continuous Improvement</h2>
                    <p class="text-lg text-gray-600">Learn from every project to improve the next one</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="card-hover bg-white border-2 border-blue-200 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-blue-600 mb-4">Lessons Learned Process</h3>
                        <div class="space-y-3">
                            <div class="bg-blue-50 p-3 rounded">
                                <p class="font-semibold text-blue-800 text-sm mb-1">1. Pre-Survey</p>
                                <p class="text-gray-700 text-xs">Capture feedback while fresh</p>
                            </div>
                            <div class="bg-indigo-50 p-3 rounded">
                                <p class="font-semibold text-indigo-800 text-sm mb-1">2. Focused Workshops</p>
                                <p class="text-gray-700 text-xs">Collaborative discussion — no finger pointing</p>
                            </div>
                            <div class="bg-purple-50 p-3 rounded">
                                <p class="font-semibold text-purple-800 text-sm mb-1">3. Synthesize Themes</p>
                                <p class="text-gray-700 text-xs">Identify avoidable vs unique issues</p>
                            </div>
                            <div class="bg-pink-50 p-3 rounded">
                                <p class="font-semibold text-pink-800 text-sm mb-1">4. Create Action Plan</p>
                                <p class="text-gray-700 text-xs">Improvement actions with owners & timelines</p>
                            </div>
                            <div class="bg-rose-50 p-3 rounded">
                                <p class="font-semibold text-rose-800 text-sm mb-1">5. Track Actions</p>
                                <p class="text-gray-700 text-xs">Apply lessons to future projects</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-hover bg-white border-2 border-green-200 p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-green-600 mb-4">Project Transition (4 Steps)</h3>
                        <div class="space-y-3">
                            <div class="bg-green-50 p-3 rounded">
                                <p class="font-semibold text-green-800 text-sm mb-1">1. Bundle Documentation</p>
                                <p class="text-gray-700 text-xs">Organize final docs in accessible location (SharePoint, cloud)</p>
                            </div>
                            <div class="bg-emerald-50 p-3 rounded">
                                <p class="font-semibold text-emerald-800 text-sm mb-1">2. Provide Training</p>
                                <p class="text-gray-700 text-xs">Walk support team through system, features, risks, issue resolution</p>
                            </div>
                            <div class="bg-teal-50 p-3 rounded">
                                <p class="font-semibold text-teal-800 text-sm mb-1">3. Review Common Issues</p>
                                <p class="text-gray-700 text-xs">Share frequent user questions and known problems</p>
                            </div>
                            <div class="bg-cyan-50 p-3 rounded">
                                <p class="font-semibold text-cyan-800 text-sm mb-1">4. Execute Transition</p>
                                <p class="text-gray-700 text-xs">Conduct meeting, hand over docs, follow up in few days</p>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }
];