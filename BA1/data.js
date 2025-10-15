// BA1: Project Initiation & Planning Framework
// Business Analysis Training Presentations
// Total Slides: 13 slides covering project initiation fundamentals

const slides = [
    // Slide 1: Cover
    {
        title: "Business Analysis Project",
        subtitle: "Project Initiation & Planning Framework",
        type: "cover",
        notes: "PRESENTER: Welcome to BA1 - Project Initiation module. This course covers the foundational elements of starting a BA project successfully. Focus on understanding the difference between PM and BA roles, and the key components of project initiation. Time estimate: 2 minutes.",
        content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div class="card-hover bg-gradient-to-br from-primary-500 to-primary-700 text-white p-8 rounded-2xl shadow-xl">
                    <h3 class="text-2xl font-bold mb-2">Project Initiation</h3>
                    <p class="text-primary-100">Learn how to properly start projects</p>
                </div>
                <div class="card-hover bg-gradient-to-br from-purple-500 to-purple-700 text-white p-8 rounded-2xl shadow-xl">
                    <h3 class="text-2xl font-bold mb-2">Requirements Management</h3>
                    <p class="text-purple-100">Master requirement planning</p>
                </div>
                <div class="card-hover bg-gradient-to-br from-pink-500 to-rose-600 text-white p-8 rounded-2xl shadow-xl">
                    <h3 class="text-2xl font-bold mb-2">Stakeholder Engagement</h3>
                    <p class="text-pink-100">Effective communication strategies</p>
                </div>
                <div class="card-hover bg-gradient-to-br from-orange-500 to-orange-700 text-white p-8 rounded-2xl shadow-xl">
                    <h3 class="text-2xl font-bold mb-2">Performance Measures</h3>
                    <p class="text-orange-100">Track and measure success</p>
                </div>
            </div>        `
    },

    // Slide 2: Project Manager vs Business Analyst
    {
        title: "Project Manager vs Business Analyst",
        subtitle: "Understanding the key differences in roles and responsibilities",
        type: "content",
        notes: "PRESENTER: Clarify the distinct but complementary roles. PM focuses on HOW and WHEN (execution), BA focuses on WHAT and WHY (requirements). Emphasize collaboration is essential. Give real examples from your experience. Time estimate: 4 minutes.",
        content: `
            <div class="space-y-6">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">Understanding the Difference</h2>
                    <p class="text-xl text-gray-600">Two critical roles working together for project success</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="card-hover group cursor-pointer bg-gradient-to-br from-primary-500 to-primary-700 text-white p-8 rounded-2xl shadow-xl">
                        <div class="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4 text-4xl">
                            💼
                        </div>
                        <h3 class="text-3xl font-bold mb-6">Project Manager</h3>
                        <ul class="space-y-3 text-lg list-disc list-inside">
                            <li>Manages the overall project timeline and budget</li>
                            <li>Coordinates team resources and activities</li>
                            <li>Ensures project stays on track</li>
                            <li>Manages risks and issues</li>
                            <li>Reports to stakeholders</li>
                        </ul>
                        <div class="mt-4 p-3 bg-primary-900/30 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            💡 <strong>Focus:</strong> HOW and WHEN the project will be delivered
                        </div>
                    </div>

                    <div class="card-hover group cursor-pointer bg-gradient-to-br from-primary-600 to-primary-800 text-white p-8 rounded-2xl shadow-xl">
                        <div class="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4 text-4xl">
                            📊
                        </div>
                        <h3 class="text-3xl font-bold mb-6">Business Analyst</h3>
                        <ul class="space-y-3 text-lg list-disc list-inside">
                            <li>Gathers and documents requirements</li>
                            <li>Analyzes business processes</li>
                            <li>Bridges business and technical teams</li>
                            <li>Creates visual models and documentation</li>
                            <li>Validates solutions meet business needs</li>
                        </ul>
                        <div class="mt-4 p-3 bg-primary-900/30 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            💡 <strong>Focus:</strong> WHAT will be delivered and WHY it's needed
                        </div>
                    </div>
                </div>

                <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-lg mt-8">
                    <h3 class="text-xl font-bold text-green-900 mb-3">Collaboration is Key</h3>
                    <p class="text-gray-700 text-lg">Both roles work together closely. The Project Manager focuses on <strong>how</strong> and <strong>when</strong> the project will be delivered, while the Business Analyst focuses on <strong>what</strong> will be delivered and <strong>why</strong> it's needed.</p>
                </div>

                <div class="mt-3 text-center">
                    <p class="text-xs text-gray-500 italic">Hover over each role card for focus areas</p>
                </div>
            </div>
        `
    },

    // Slide 3: Project Plan Initiation
    {
        title: "Project Plan Initiation",
        subtitle: "Main Goal: Put together the team, inform them, and get the project started",
        type: "content",
        notes: "PRESENTER: Initiation is the foundation - get this wrong and the project struggles. Walk through each element. Emphasize stakeholder identification comes FIRST. Charter formalizes the project. Kick-off aligns everyone. Time estimate: 5 minutes.",
        content: `
            <div class="overflow-x-auto">
                <table class="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead>
                        <tr class="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
                            <th class="p-4 text-left font-semibold">Element</th>
                            <th class="p-4 text-left font-semibold">Description / Purpose</th>
                            <th class="p-4 text-left font-semibold">Examples / Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b hover:bg-primary-50 transition-colors">
                            <td class="p-4 font-semibold text-primary-700">Identify Stakeholders</td>
                            <td class="p-4">Find stakeholders using the org chart, talking to others, and reviewing past project documents. Purpose: Increase credibility and project success.</td>
                            <td class="p-4 text-gray-600">Interview, Email, Phone Call, Brainstorming</td>
                        </tr>
                        <tr class="border-b hover:bg-primary-50 transition-colors">
                            <td class="p-4 font-semibold text-primary-700">
                                Create <span class="learn-term" onclick="openLearningModal('charter')" style="cursor:pointer;">Project Charter</span>
                            </td>
                            <td class="p-4">Official document that introduces and explains the project to stakeholders.</td>
                            <td class="p-4 text-gray-600">Serves as formal acknowledgment of the project and its objectives</td>
                        </tr>
                        <tr class="hover:bg-primary-50 transition-colors">
                            <td class="p-4 font-semibold text-primary-700">
                                <span class="learn-term" onclick="openLearningModal('kickoff')" style="cursor:pointer;">Kick-off Meeting</span>
                            </td>
                            <td class="p-4">First meeting with the full project team to discuss project details, objectives, and plan.</td>
                            <td class="p-4 text-gray-600">Ensures everyone is aligned and knows their responsibilities</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },
    {
        title: "Requirement Management Plan",
        subtitle: "Goal: Ensures requirements are well organized and accessible to the right people",
        type: "content",
        notes: "PRESENTER: Requirements management prevents chaos. Each element serves a purpose. Storage/access critical for transparency. Traceability ensures nothing gets lost. Change control prevents scope creep. Approval process ensures buy-in. Stress: good understanding of what you want BEFORE you start. Time estimate: 6 minutes.",
        content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="card-hover group cursor-pointer bg-white border-2 border-primary-200 p-6 rounded-xl shadow-lg">
                    <h3 class="text-xl font-bold text-primary-600 mb-3">Requirement Abstraction</h3>
                    <p class="text-gray-700">How detailed the requirement needs to be -- general overview or specific details.</p>
                    <div class="mt-2 p-2 bg-primary-50 rounded text-xs text-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        💡 <strong>Example:</strong> High-level for executives, detailed for developers
                    </div>
                </div>

                <div class="card-hover group cursor-pointer bg-white border-2 border-purple-200 p-6 rounded-xl shadow-lg">
                    <h3 class="text-xl font-bold text-purple-600 mb-3">Requirement Storage and Access</h3>
                    <p class="text-gray-700">Where the requirements are kept and how people can get to them.</p>
                    <div class="mt-2 p-2 bg-purple-50 rounded text-xs text-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        💡 <strong>Tools:</strong> SharePoint, Confluence, JIRA, BRD documents
                    </div>
                </div>

                <div class="card-hover group cursor-pointer bg-white border-2 border-pink-200 p-6 rounded-xl shadow-lg">
                    <h3 class="text-xl font-bold text-pink-600 mb-3">Project Attributes</h3>
                    <p class="text-gray-700">Extra info about requirements like status, priority, owner, or version.</p>
                    <div class="mt-2 p-2 bg-pink-50 rounded text-xs text-pink-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        💡 <strong>Attributes:</strong> Status (Draft/Approved), Priority (High/Med/Low), Owner, Version #
                    </div>
                </div>

                <div class="card-hover group cursor-pointer bg-white border-2 border-rose-200 p-6 rounded-xl shadow-lg">
                    <h3 class="text-xl font-bold text-rose-600 mb-3">Requirement Reuse</h3>
                    <p class="text-gray-700">Using the same requirement in more than one project.</p>
                    <div class="mt-2 p-2 bg-rose-50 rounded text-xs text-rose-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        💡 <strong>Benefit:</strong> Saves time, ensures consistency, leverages proven requirements
                    </div>
                </div>

                <div class="card-hover group cursor-pointer bg-white border-2 border-orange-200 p-6 rounded-xl shadow-lg">
                    <h3 class="text-xl font-bold text-orange-600 mb-3">Requirement Traceability</h3>
                    <p class="text-gray-700">Following a requirement from start to finish to make sure it's done right.</p>
                    <div class="mt-2 p-2 bg-orange-50 rounded text-xs text-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        💡 <strong>Trace:</strong> Business Need → Requirement → Design → Code → Test Case
                    </div>
                </div>

                <div class="card-hover group cursor-pointer bg-white border-2 border-amber-200 p-6 rounded-xl shadow-lg">
                    <h3 class="text-xl font-bold text-amber-600 mb-3">Requirement Change Control</h3>
                    <p class="text-gray-700">Steps to manage changes to requirements without messing up the project.</p>
                    <div class="mt-2 p-2 bg-amber-50 rounded text-xs text-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        💡 <strong>Process:</strong> Request → Impact Analysis → Approval → Implementation → Communication
                    </div>
                </div>

                <div class="card-hover group cursor-pointer bg-white border-2 border-emerald-200 p-6 rounded-xl shadow-lg">
                    <h3 class="text-xl font-bold text-emerald-600 mb-3">Requirement Approval Process</h3>
                    <p class="text-gray-700">How and when stakeholders agree that a requirement is good to use.</p>
                    <div class="mt-2 p-2 bg-emerald-50 rounded text-xs text-emerald-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        💡 <strong>Steps:</strong> Review → Validate → Sign-off → Baseline
                    </div>
                </div>
            </div>

            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mt-8">
                <p class="text-lg font-semibold text-yellow-900 flex items-center">
                    💡 Key Takeaway: Having a good understanding of what you want in requirements.
                </p>
            </div>

            <div class="mt-3 text-center">
                <p class="text-xs text-gray-500 italic">Hover over each element for examples and details</p>
            </div>
        `
    },
    {
        title: "Define Project Plan Details",
        subtitle: "Goal: To create plans that can be followed for successful project execution",
        type: "content",
        notes: "PRESENTER: Planning is where execution roadmap gets built. Break down into manageable parts (WBS). Schedule with milestones keeps team on track. Quality plan sets expectations. Release planning manages go-live. Risk updates keep you prepared. Emphasize: detailed planning prevents execution chaos. Time estimate: 5 minutes.",
        content: `
            <div class="space-y-4">
                <div class="card-hover bg-gradient-to-r from-primary-500 to-primary-700 text-white p-6 rounded-xl shadow-lg">
                    <h3 class="text-2xl font-bold mb-3">Break Down the Project</h3>
                    <p class="text-lg mb-2">Define the project into logical parts.</p>
                    <p class="text-primary-100">Makes the project easier to manage and track</p>
                </div>

                <div class="card-hover bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6 rounded-xl shadow-lg">
                    <h3 class="text-2xl font-bold mb-3">Set the Project Schedule</h3>
                    <p class="text-lg mb-2">Organize timeline and activities for execution.</p>
                    <ul class="text-purple-100 space-y-1 mt-2 list-disc list-inside">
                        <li>Create milestones (significant events)</li>
                        <li>Estimate activity duration</li>
                        <li>Refine project start and schedule</li>
                    </ul>
                </div>

                <div class="card-hover bg-gradient-to-r from-pink-500 to-pink-700 text-white p-6 rounded-xl shadow-lg">
                    <h3 class="text-2xl font-bold mb-3">Define a Quality Plan</h3>
                    <p class="text-lg mb-2">Outline the quality requirements, standards, and assurance.</p>
                    <p class="text-pink-100">Ensures deliverables meet expectations</p>
                </div>

                <div class="card-hover bg-gradient-to-r from-rose-500 to-rose-700 text-white p-6 rounded-xl shadow-lg">
                    <h3 class="text-2xl font-bold mb-3">Release Planning</h3>
                    <p class="text-lg mb-2">Formulate a plan to begin using project deliverables.</p>
                    <p class="text-rose-100">Helps transition from development to usage</p>
                </div>

                <div class="card-hover bg-gradient-to-r from-orange-500 to-orange-700 text-white p-6 rounded-xl shadow-lg">
                    <h3 class="text-2xl font-bold mb-3">Update Project Risks</h3>
                    <p class="text-lg mb-2">Update the risk list and assessment.</p>
                    <p class="text-orange-100">Keeps the project prepared for potential issues</p>
                </div>
            </div>
        `
    },
    {
        title: "Stakeholder Analysis & Engagement",
        subtitle: "Goal: To appropriately plan for stakeholder engagement and communication",
        type: "content",
        notes: "PRESENTER: Stakeholder management can make or break projects. Power-Interest grid shows WHO needs WHAT level of attention. RACI eliminates the 'I thought YOU were doing it' problem. Communication plan ensures right info reaches right people at right time. Stress: proactive stakeholder management prevents surprises. Time estimate: 6 minutes.",
        content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="card-hover bg-white shadow-lg p-8 rounded-2xl border-t-4 border-primary-500">
                    <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 text-2xl">
                        �
                    </div>
                    <h3 class="text-2xl font-bold text-primary-600 mb-4">
                        <span class="learn-term" onclick="openLearningModal('stakeholder')" style="cursor:pointer;">Stakeholder</span> Power-Interest Analysis
                    </h3>
                    <p class="text-gray-700 mb-3"><strong>Description:</strong> Uses a stakeholder's level of interest and influence to determine how to involve them in the project.</p>
                    <p class="text-primary-600 font-semibold">Helps manage expectations and engagement</p>
                </div>

                <div class="card-hover bg-white shadow-lg p-8 rounded-2xl border-t-4 border-purple-500">
                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-2xl">
                        🎯
                    </div>
                    <h3 class="text-2xl font-bold text-purple-600 mb-4">
                        Create a <span class="learn-term" onclick="openLearningModal('raci')" style="cursor:pointer;">RACI</span> Matrix
                    </h3>
                    <p class="text-gray-700 mb-3"><strong>Description:</strong> Aligns the responsibilities of stakeholders to project tasks.</p>
                    <p class="text-purple-600 font-semibold">Eliminates confusion, alleviates power struggles, and removes lack of ownership</p>
                </div>

                <div class="card-hover bg-white shadow-lg p-8 rounded-2xl border-t-4 border-pink-500">
                    <div class="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 text-2xl">
                        ✅
                    </div>
                    <h3 class="text-2xl font-bold text-pink-600 mb-4">Responsibility Assignment Matrix</h3>
                    <p class="text-gray-700 mb-3"><strong>Description:</strong> Aligns the responsibilities of stakeholders to project activities.</p>
                    <p class="text-pink-600 font-semibold">Ensures clarity of roles and accountability</p>
                </div>

                <div class="card-hover bg-white shadow-lg p-8 rounded-2xl border-t-4 border-rose-500">
                    <div class="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4 text-2xl">
                        💬
                    </div>
                    <h3 class="text-2xl font-bold text-rose-600 mb-4">Collaboration & Communication Plan</h3>
                    <p class="text-gray-700 mb-3"><strong>Description:</strong> Provides guidance on the communication needs for the project.</p>
                    <p class="text-rose-600 font-semibold">Outlines methods, frequency, and channels of communication</p>
                </div>
            </div>
        `
    },
    {
        title: "Set Performance Measures",
        subtitle: "Establish metrics to identify necessary actions for future success",
        type: "content",
        notes: "PRESENTER: What gets measured gets managed. Performance metrics provide objective data for decisions. Identify KPIs early - what defines success? Track progress against targets. Use data to adjust strategies. Show examples of good metrics (specific, measurable, actionable). Time estimate: 4 minutes.",
        content: `
            <div class="text-center mb-8">
                <div class="inline-block bg-gradient-to-r from-primary-600 to-primary-800 text-white px-12 py-8 rounded-3xl shadow-2xl">
                    <div class="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4 text-5xl">
                        🏆
                    </div>
                    <h2 class="text-4xl font-bold mb-4">Identify Metrics</h2>
                    <p class="text-xl text-primary-100">Key performance indicators that drive success</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div class="card-hover bg-white border-2 border-primary-300 p-6 rounded-xl text-center shadow-lg">
                    <h3 class="text-xl font-bold text-primary-600 mb-2">Define Clear Metrics</h3>
                    <p class="text-gray-600">Establish specific, measurable indicators</p>
                </div>

                <div class="card-hover bg-white border-2 border-purple-300 p-6 rounded-xl text-center shadow-lg">
                    <h3 class="text-xl font-bold text-purple-600 mb-2">Track Progress</h3>
                    <p class="text-gray-600">Monitor performance against targets</p>
                </div>

                <div class="card-hover bg-white border-2 border-pink-300 p-6 rounded-xl text-center shadow-lg">
                    <h3 class="text-xl font-bold text-pink-600 mb-2">Take Action</h3>
                    <p class="text-gray-600">Adjust strategies based on insights</p>
                </div>
            </div>

            <div class="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mt-8">
                <h3 class="text-xl font-bold text-yellow-900 mb-3 flex items-center">
                    💡 Why Performance Measures Matter
                </h3>
                <ul class="space-y-2 text-gray-700 list-disc list-inside">
                    <li>Provides objective data for decision-making</li>
                    <li>Identifies areas for improvement early</li>
                    <li>Demonstrates project value to stakeholders</li>
                    <li>Enables continuous improvement</li>
                    <li>Aligns team efforts with strategic goals</li>
                </ul>
            </div>
        `
    },
    {
        title: "Key Takeaways",
        subtitle: "Essential concepts for successful project initiation",
        type: "summary",
        notes: "PRESENTER: Recap the journey. Reinforce that proper initiation is the foundation. Each element we discussed builds on the previous. Encourage questions. Remind them: success starts with planning, communication, and stakeholder engagement. Thank participants. Time estimate: 3 minutes.",
        content: `
            <div class="space-y-8">
                <div class="text-center mb-8">
                    <h2 class="text-4xl font-bold text-primary-600">Key Takeaways</h2>
                    <p class="text-xl text-gray-600 mt-2">Essential concepts for successful project initiation</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="card-hover bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-300 p-6 rounded-xl shadow-lg">
                        <div class="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-3 text-2xl">
                            ✅
                        </div>
                        <h3 class="text-xl font-bold text-primary-700 mb-3">Proper Initiation is Critical</h3>
                        <p class="text-gray-700">Identify stakeholders, create a charter, and hold kick-off meetings to set the foundation</p>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 p-6 rounded-xl shadow-lg">
                        <div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-3 text-2xl">
                            📋
                        </div>
                        <h3 class="text-xl font-bold text-purple-700 mb-3">
                            Manage <span class="learn-term" onclick="openLearningModal('requirements')" style="cursor:pointer;">Requirements</span> Effectively
                        </h3>
                        <p class="text-gray-700">Ensure requirements are organized, traceable, and accessible to the right people</p>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-300 p-6 rounded-xl shadow-lg">
                        <div class="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-3 text-2xl">
                            📝
                        </div>
                        <h3 class="text-xl font-bold text-pink-700 mb-3">Plan in Detail</h3>
                        <p class="text-gray-700">Break down projects, set schedules, define quality, plan releases, and manage risks</p>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-rose-50 to-rose-100 border-2 border-rose-300 p-6 rounded-xl shadow-lg">
                        <div class="w-12 h-12 bg-rose-500 rounded-lg flex items-center justify-center mb-3 text-2xl">
                            👥
                        </div>
                        <h3 class="text-xl font-bold text-rose-700 mb-3">Engage Stakeholders</h3>
                        <p class="text-gray-700">Use RACI matrices and communication plans to ensure clear roles and expectations</p>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 p-6 rounded-xl shadow-lg">
                        <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-3 text-2xl">
                            📊
                        </div>
                        <h3 class="text-xl font-bold text-orange-700 mb-3">Measure Performance</h3>
                        <p class="text-gray-700">Establish clear metrics to track progress and enable data-driven decisions</p>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-300 p-6 rounded-xl shadow-lg">
                        <div class="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-3 text-2xl">
                            🤝
                        </div>
                        <h3 class="text-xl font-bold text-emerald-700 mb-3">Understand Your Role</h3>
                        <p class="text-gray-700">Know the difference between PM and BA roles for effective collaboration</p>
                    </div>
                </div>

                <div class="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-8 rounded-2xl shadow-xl text-center mt-8">
                    <h3 class="text-2xl font-bold mb-4">Remember</h3>
                    <p class="text-xl">Success starts with proper planning, clear communication, and strong stakeholder engagement. Master these fundamentals to deliver exceptional projects!</p>
                </div>
            </div>
        `
    }
];