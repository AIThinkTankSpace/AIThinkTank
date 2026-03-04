"use client";

import { useState } from "react";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export default function InfographicSecurityPrivacy() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Breadcrumb */}
      <div className="bg-slate-900/50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3 text-sm text-slate-400">
          <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/ai-for-corporates" className="hover:text-emerald-400 transition">AI for Corporates</Link>
          <span className="mx-2">/</span>
          <span className="text-emerald-400">Security & Privacy</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-b from-slate-900 to-transparent border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-white mb-4">
                🔒 AI Security & Data Privacy
              </h1>
              <p className="text-xl text-slate-300 mb-6">
                Practical risk management without paranoia
              </p>
              <div className="flex gap-3">
                <ShareButton variant="corporate" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* The Reality */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">📊</span> The AI Security Reality
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-emerald-950/30 to-slate-900 border border-emerald-500/30 rounded-xl p-8">
              <h3 className="text-emerald-300 font-bold text-lg mb-3">The Good News ✓</h3>
              <p className="text-slate-300">AI itself isn't inherently riskier than other software. You can use AI responsibly.</p>
            </div>

            <div className="bg-gradient-to-br from-red-950/30 to-slate-900 border border-red-500/30 rounded-xl p-8">
              <h3 className="text-red-300 font-bold text-lg mb-3">The Reality ⚠️</h3>
              <p className="text-slate-300">Most organizations deploying AI skip basic security because they're focused on speed. That creates massive risk.</p>
            </div>
          </div>
        </div>

        {/* Five Real Risks */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">⚡</span> The Five Real Risks You Must Manage
          </h2>

          <div className="space-y-6">
            {/* Risk 1 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
              <div className="flex gap-6 items-start mb-4">
                <div className="text-5xl flex-shrink-0">1️⃣</div>
                <h3 className="text-2xl font-bold text-white self-center">Data Leakage to Third Parties</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 ml-20">
                <div>
                  <p className="text-slate-300 mb-4 font-semibold">What Happens:</p>
                  <p className="text-slate-300 text-sm mb-3">You copy customer names, emails, and purchase history into ChatGPT. That data goes to OpenAI's servers. Their terms let them use it for training unless you opt out or have a paid agreement.</p>
                </div>

                <div>
                  <p className="text-amber-300 mb-4 font-semibold">Risk Level:</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-300"><span className="text-green-400">LOW:</span> Public information</p>
                    <p className="text-slate-300"><span className="text-amber-400">HIGH:</span> Customer PII</p>
                    <p className="text-slate-300"><span className="text-red-400">VERY HIGH:</span> Trade secrets, financial data</p>
                  </div>
                </div>
              </div>

              <div className="ml-20 mt-4 bg-emerald-950/30 border-l-4 border-emerald-500 pl-4 py-3">
                <p className="text-emerald-300 font-semibold text-sm mb-1">What You Need:</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>✓ Know which AI tools your team actually uses</li>
                  <li>✓ Understand each tool's data retention practices</li>
                  <li>✓ Prohibit sensitive data in third-party tools</li>
                  <li>✓ For sensitive work, use enterprise versions with privacy guarantees</li>
                </ul>
              </div>
            </div>

            {/* Risk 2 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
              <div className="flex gap-6 items-start mb-4">
                <div className="text-5xl flex-shrink-0">2️⃣</div>
                <h3 className="text-2xl font-bold text-white self-center">AI Model Poisoning</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 ml-20">
                <div>
                  <p className="text-slate-300 mb-4 font-semibold">What Happens:</p>
                  <p className="text-slate-300 text-sm mb-3">AI models trained on internet data may contain biased, false, or deliberately manipulated information. A model trained to generate biased financial recommendations causes harm.</p>
                </div>

                <div>
                  <p className="text-amber-300 mb-4 font-semibold">Risk Level:</p>
                  <p className="text-slate-300 text-sm"><span className="text-amber-400">LOW-MEDIUM:</span> Most companies</p>
                  <p className="text-slate-300 text-sm"><span className="text-red-400">VERY HIGH:</span> If making high-stakes decisions</p>
                </div>
              </div>

              <div className="ml-20 mt-4 bg-emerald-950/30 border-l-4 border-emerald-500 pl-4 py-3">
                <p className="text-emerald-300 font-semibold text-sm mb-1">What You Need:</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>✓ For high-stakes decisions, validate AI recommendations before acting</li>
                  <li>✓ Source AI from reputable providers</li>
                  <li>✓ If building custom models, validate training data quality</li>
                  <li>✓ Test models for bias before deploying</li>
                </ul>
              </div>
            </div>

            {/* Risk 3 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
              <div className="flex gap-6 items-start mb-4">
                <div className="text-5xl flex-shrink-0">3️⃣</div>
                <h3 className="text-2xl font-bold text-white self-center">Prompt Injection & Jailbreaking</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 ml-20">
                <div>
                  <p className="text-slate-300 mb-4 font-semibold">What Happens:</p>
                  <p className="text-slate-300 text-sm mb-3">Someone finds a way around AI guardrails. Your chatbot has rules to never disclose pricing, but when asked "What would you tell a friend?" it complies and leaks confidential information.</p>
                </div>

                <div>
                  <p className="text-amber-300 mb-4 font-semibold">Risk Level:</p>
                  <p className="text-slate-300 text-sm"><span className="text-amber-400">LOW-MEDIUM:</span> If customer-facing without sensitive data</p>
                  <p className="text-slate-300 text-sm"><span className="text-red-400">HIGH:</span> If AI has sensitive info access</p>
                </div>
              </div>

              <div className="ml-20 mt-4 bg-emerald-950/30 border-l-4 border-emerald-500 pl-4 py-3">
                <p className="text-emerald-300 font-semibold text-sm mb-1">What You Need:</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>✓ Test customer-facing AI for injection vulnerabilities</li>
                  <li>✓ Use systems with strong output filtering</li>
                  <li>✓ Don't give AI access to data it shouldn't disclose</li>
                  <li>✓ Monitor conversations for attempted manipulation</li>
                </ul>
              </div>
            </div>

            {/* Risk 4 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
              <div className="flex gap-6 items-start mb-4">
                <div className="text-5xl flex-shrink-0">4️⃣</div>
                <h3 className="text-2xl font-bold text-white self-center">Hallucinations (AI Making Things Up)</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 ml-20">
                <div>
                  <p className="text-slate-300 mb-4 font-semibold">What Happens:</p>
                  <p className="text-slate-300 text-sm mb-3">AI generates false information with confidence. A lawyer uses ChatGPT for legal research. ChatGPT hallucinates non-existent case names. Lawyer cites fake cases. Credibility destroyed.</p>
                </div>

                <div>
                  <p className="text-amber-300 mb-4 font-semibold">Risk Level:</p>
                  <p className="text-slate-300 text-sm"><span className="text-red-400">HIGH:</span> For research, analysis, decisions</p>
                  <p className="text-slate-300 text-sm"><span className="text-green-400">LOW:</span> For drafting/brainstorming</p>
                </div>
              </div>

              <div className="ml-20 mt-4 bg-emerald-950/30 border-l-4 border-emerald-500 pl-4 py-3">
                <p className="text-emerald-300 font-semibold text-sm mb-1">What You Need:</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>✓ Train users that AI outputs must always be verified</li>
                  <li>✓ For high-stakes applications, build verification workflows</li>
                  <li>✓ Use AI as draft tool, not decision tool</li>
                  <li>✓ Extra care with research, financial, medical, legal work</li>
                </ul>
              </div>
            </div>

            {/* Risk 5 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
              <div className="flex gap-6 items-start mb-4">
                <div className="text-5xl flex-shrink-0">5️⃣</div>
                <h3 className="text-2xl font-bold text-white self-center">Compliance & Regulatory Exposure</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 ml-20">
                <div>
                  <p className="text-slate-300 mb-4 font-semibold">What Happens:</p>
                  <p className="text-slate-300 text-sm mb-3">You're subject to GDPR, CCPA, HIPAA, etc. HR manager uses AI tool on employee data without consent. Employee files GDPR complaint. Company gets fined.</p>
                </div>

                <div>
                  <p className="text-amber-300 mb-4 font-semibold">Risk Level:</p>
                  <p className="text-slate-300 text-sm"><span className="text-amber-400">MEDIUM-HIGH:</span> Depends on data type and regulations</p>
                </div>
              </div>

              <div className="ml-20 mt-4 bg-emerald-950/30 border-l-4 border-emerald-500 pl-4 py-3">
                <p className="text-emerald-300 font-semibold text-sm mb-1">What You Need:</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>✓ Map what regulations apply to your business</li>
                  <li>✓ For each AI tool: Does it require consent? Does it store data?</li>
                  <li>✓ Have legal review AI tool contracts before deploying</li>
                  <li>✓ Ensure you can satisfy regulatory requests</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Levels by Scenario */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">📈</span> Different Risk Levels for Different Scenarios
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-950/30 to-slate-900 border border-green-500/30 rounded-xl p-6">
              <h3 className="text-green-400 font-bold text-lg mb-4">LOW-RISK</h3>
              <p className="text-slate-300 text-sm font-semibold mb-3">Drafting, brainstorming, research with human review</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>✓ Minimal controls needed</li>
                <li>✓ Verification of output is sufficient</li>
                <li>✓ Standard caution about secrets</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-950/30 to-slate-900 border border-amber-500/30 rounded-xl p-6">
              <h3 className="text-amber-400 font-bold text-lg mb-4">MEDIUM-RISK</h3>
              <p className="text-slate-300 text-sm font-semibold mb-3">Analysis, recommendations influencing decisions</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>✓ Basic controls: understand vendors</li>
                <li>✓ Employee data usage agreements</li>
                <li>✓ Limit sensitive data access</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-950/30 to-slate-900 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-red-400 font-bold text-lg mb-4">HIGH-RISK</h3>
              <p className="text-slate-300 text-sm font-semibold mb-3">Decisions affecting customers/employees, regulated data</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>✓ Comprehensive controls</li>
                <li>✓ Data processing agreements</li>
                <li>✓ Bias testing, audit trails</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Privacy Framework */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🔐</span> Build a Simple Privacy Framework
          </h2>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 space-y-6">
            {/* Step 1 */}
            <div className="flex gap-6 items-start border-b border-slate-700/50 pb-6">
              <div className="text-4xl flex-shrink-0">1️⃣</div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-3">Categorize Your Data</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 rounded p-3 border-l-2 border-green-500">
                    <p className="text-green-400 font-semibold text-sm">PUBLIC</p>
                    <p className="text-slate-400 text-xs">No restrictions</p>
                  </div>
                  <div className="bg-slate-900/50 rounded p-3 border-l-2 border-blue-500">
                    <p className="text-blue-400 font-semibold text-sm">INTERNAL</p>
                    <p className="text-slate-400 text-xs">Employees can access, not shared externally</p>
                  </div>
                  <div className="bg-slate-900/50 rounded p-3 border-l-2 border-amber-500">
                    <p className="text-amber-400 font-semibold text-sm">SENSITIVE</p>
                    <p className="text-slate-400 text-xs">Customers, financial, health, legal—handled carefully</p>
                  </div>
                  <div className="bg-slate-900/50 rounded p-3 border-l-2 border-red-500">
                    <p className="text-red-400 font-semibold text-sm">RESTRICTED</p>
                    <p className="text-slate-400 text-xs">Trade secrets, credentials—maximum protection</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start border-b border-slate-700/50 pb-6">
              <div className="text-4xl flex-shrink-0">2️⃣</div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-3">Create Usage Guidelines</h3>
                <div className="space-y-2 text-sm text-slate-300">
                  <p><span className="text-red-400 font-semibold">Restricted:</span> Never in third-party tools, period</p>
                  <p><span className="text-amber-400 font-semibold">Sensitive:</span> Only in enterprise tools with data processing agreements</p>
                  <p><span className="text-blue-400 font-semibold">Internal:</span> Standard caution, verify vendor practices</p>
                  <p><span className="text-green-400 font-semibold">Public:</span> Minimal restrictions</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start border-b border-slate-700/50 pb-6">
              <div className="text-4xl flex-shrink-0">3️⃣</div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-3">Document Tools & Agreements</h3>
                <p className="text-slate-300 text-sm mb-3">Simple spreadsheet with: Tool name, vendor, what data it touches, DPA status, risk level</p>
                <div className="bg-slate-900/50 rounded p-3 text-xs text-slate-400">
                  Example: ChatGPT Plus → OpenAI → Customer questions → Yes, DPA → Medium Risk
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start border-b border-slate-700/50 pb-6">
              <div className="text-4xl flex-shrink-0">4️⃣</div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-3">Train Employees</h3>
                <p className="text-slate-300 text-sm">"Here are the AI tools we use, here's what we can and can't do with each"</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6 items-start">
              <div className="text-4xl flex-shrink-0">5️⃣</div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-3">Review Quarterly</h3>
                <p className="text-slate-300 text-sm">Any new tools? New risks? New incidents?</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Checklist */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">✅</span> Quick Privacy Checklist
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4">For Each AI Tool:</h3>
              <div className="space-y-3">
                <label className="flex items-start gap-3 text-slate-300 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm">What data goes into it?</span>
                </label>
                <label className="flex items-start gap-3 text-slate-300 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm">Does this include customer PII, employee data, or proprietary info?</span>
                </label>
                <label className="flex items-start gap-3 text-slate-300 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm">Who operates the service?</span>
                </label>
                <label className="flex items-start gap-3 text-slate-300 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm">What's the privacy policy?</span>
                </label>
                <label className="flex items-start gap-3 text-slate-300 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm">Is there a Data Processing Agreement?</span>
                </label>
                <label className="flex items-start gap-3 text-slate-300 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm">Enterprise version available?</span>
                </label>
                <label className="flex items-start gap-3 text-slate-300 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm">Encryption for data in transit & at rest?</span>
                </label>
                <label className="flex items-start gap-3 text-slate-300 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm">Can you delete your data?</span>
                </label>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4">Company-Wide:</h3>
              <div className="space-y-3">
                <label className="flex items-start gap-3 text-slate-300 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm">Guidelines communicated about data usage?</span>
                </label>
                <label className="flex items-start gap-3 text-slate-300 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm">Employees understand no sensitive data in third-party tools?</span>
                </label>
                <label className="flex items-start gap-3 text-slate-300 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm">Know which tools are actually being used?</span>
                </label>
                <label className="flex items-start gap-3 text-slate-300 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm">Business case documented for each tool?</span>
                </label>
                <label className="flex items-start gap-3 text-slate-300 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm">Controls to prevent unapproved tool use?</span>
                </label>

                <h3 className="text-white font-bold mt-6 mb-3">High-Stakes Applications:</h3>
                <label className="flex items-start gap-3 text-slate-300 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm">Human-in-the-loop review process?</span>
                </label>
                <label className="flex items-start gap-3 text-slate-300 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm">Tested for bias?</span>
                </label>
                <label className="flex items-start gap-3 text-slate-300 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm">Can explain decisions to auditors?</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">⭐</span> What Responsible Companies Do
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-950/30 to-slate-900 border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-emerald-300 font-bold mb-3">✓ They know what they're processing</h3>
              <p className="text-slate-300 text-sm">Understand what data goes into AI systems</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-950/30 to-slate-900 border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-emerald-300 font-bold mb-3">✓ They understand vendor practices</h3>
              <p className="text-slate-300 text-sm">Research how the vendor handles data before using</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-950/30 to-slate-900 border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-emerald-300 font-bold mb-3">✓ They verify AI output</h3>
              <p className="text-slate-300 text-sm">Don't trust AI for important decisions without human review</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-950/30 to-slate-900 border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-emerald-300 font-bold mb-3">✓ They're transparent</h3>
              <p className="text-slate-300 text-sm">Can explain what data is being processed and why</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-950/30 to-slate-900 border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-emerald-300 font-bold mb-3">✓ They test for bias</h3>
              <p className="text-slate-300 text-sm">For high-stakes decisions, validate fairness of recommendations</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-950/30 to-slate-900 border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-emerald-300 font-bold mb-3">✓ They stay current</h3>
              <p className="text-slate-300 text-sm">Update practices as AI capabilities and risks evolve</p>
            </div>
          </div>
        </div>

        {/* First Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🚀</span> Your First Steps
          </h2>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-amber-400 font-bold mb-3">This Week:</h3>
                <p className="text-slate-300 text-sm">Identify the AI tools your team is actually using. Ask IT to run a report on tools accessed from company devices.</p>
              </div>

              <div>
                <h3 className="text-amber-400 font-bold mb-3">This Month:</h3>
                <p className="text-slate-300 text-sm">For your top 5 tools, understand data privacy practices. Read privacy policy or contact sales team.</p>
              </div>

              <div>
                <h3 className="text-amber-400 font-bold mb-3">This Quarter:</h3>
                <p className="text-slate-300 text-sm">Create your data categorization and usage guidelines. Have legal review. Communicate to team.</p>
              </div>

              <div>
                <h3 className="text-amber-400 font-bold mb-3">Ongoing:</h3>
                <p className="text-slate-300 text-sm">Review quarterly. Add new tools to framework as adopted.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Principle */}
        <div className="bg-gradient-to-r from-emerald-950/30 to-slate-900 border border-emerald-500/40 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-4">💡 The Mindset</h3>
          <p className="text-slate-300 leading-relaxed text-lg">
            You don't need to be paranoid about AI. But you do need to be deliberately thoughtful about data handling. The companies winning with AI are the ones who move fast with governance in place, not the ones moving fast without considering consequences.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg mt-4">
            <span className="text-emerald-300 font-semibold">Responsible AI adoption creates better long-term outcomes. Start now.</span>
          </p>
        </div>

        {/* Related Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/ai-for-corporates/ai-governance-framework-for-small-businesses" className="group">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-emerald-500/60 transition">
                <h3 className="text-white font-bold group-hover:text-emerald-300 transition mb-2">AI Governance</h3>
                <p className="text-slate-400 text-sm">Build lightweight governance that enables scale</p>
              </div>
            </Link>
            <Link href="/ai-for-corporates/ai-for-hr-recruitment-and-talent-management" className="group">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-emerald-500/60 transition">
                <h3 className="text-white font-bold group-hover:text-emerald-300 transition mb-2">HR & Recruitment</h3>
                <p className="text-slate-400 text-sm">Secure, ethical hiring with AI</p>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-emerald-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Build Your Privacy Framework?</h3>
          <p className="text-slate-300 mb-6">Move fast with governance in place. Responsible adoption wins long-term.</p>
          <ShareButton variant="corporate" />
        </div>
      </div>
    </div>
  );
}
