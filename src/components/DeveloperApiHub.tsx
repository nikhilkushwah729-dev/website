import React, { useState } from 'react';
import { Terminal, Code2, Copy, Check, Play, RefreshCw, Layers } from 'lucide-react';

export const DeveloperApiHub: React.FC = () => {
  const [activeLang, setActiveLang] = useState<'typescript' | 'python' | 'curl' | 'react'>('typescript');
  const [copied, setCopied] = useState(false);
  const [isTestingApi, setIsTestingApi] = useState(false);
  const [apiResponse, setApiResponse] = useState<any>(null);

  const snippets = {
    typescript: `import { NexusClient } from '@nexus/core-sdk';

const nexus = new NexusClient({
  apiKey: process.env.NEXUS_API_KEY,
  environment: 'production'
});

// Execute real-time workflow event trigger
const result = await nexus.workflows.dispatch({
  event: 'order.completed',
  data: { orderId: 'ord_99812', amount: 157.60, currency: 'USD' }
});

console.log('Dispatch Status:', result.status); // 200 OK (Latency: 14ms)`,

    python: `from nexus_sdk import NexusClient

nexus = NexusClient(api_key="nex_live_99812234")

# Trigger Gemini AI Copilot Execution
response = nexus.ai.generate_content(
    model="gemini-2.5-flash",
    prompt="Generate API documentation schema for microservice ledger.",
    response_mime_type="application/json"
)

print(response.json())`,

    curl: `curl -X POST https://api.nexustech.io/v4/workflows/dispatch \\
  -H "Authorization: Bearer nex_live_99812234" \\
  -H "Content-Type: application/json" \\
  -d '{
    "event": "user.signup",
    "payload": { "userId": "usr_7721", "tier": "pro" }
  }'`,

    react: `import { useNexusProduct } from '@nexus/react';

export function ProductConsole() {
  const { triggerWorkflow, isExecuting } = useNexusProduct('nexus-core-os');

  return (
    <button onClick={() => triggerWorkflow('event.sync')}>
      {isExecuting ? 'Syncing Cluster...' : 'Sync Cluster'}
    </button>
  );
}`
  };

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(snippets[activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTestLiveApi = async () => {
    setIsTestingApi(true);
    const startTime = performance.now();
    try {
      const res = await fetch('/api/health');
      const data = await res.json();
      const endTime = performance.now();
      setApiResponse({
        status: res.status,
        statusText: res.statusText,
        latencyMs: Math.round(endTime - startTime),
        payload: data
      });
    } catch (e) {
      setApiResponse({
        status: 200,
        statusText: "OK (Simulated Fallback)",
        latencyMs: 14,
        payload: { status: "ok", cluster: "us-east-1", uptime: "99.999%" }
      });
    } finally {
      setIsTestingApi(false);
    }
  };

  return (
    <section id="developer-api" className="py-20 bg-slate-950 text-slate-100 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>DEVELOPER FIRST ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Developer API & <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">SDK Ecosystem</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Integrate Nexus product engines into your codebase in under 5 minutes with complete type safety.
          </p>
        </div>

        {/* Code Console Window */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between p-3 sm:p-4 bg-slate-950 border-b border-slate-800 gap-2">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setActiveLang('typescript')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                  activeLang === 'typescript' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                TypeScript / Node
              </button>
              <button
                onClick={() => setActiveLang('python')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                  activeLang === 'python' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Python
              </button>
              <button
                onClick={() => setActiveLang('curl')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                  activeLang === 'curl' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                cURL
              </button>
              <button
                onClick={() => setActiveLang('react')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                  activeLang === 'react' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                React Hooks
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleCopySnippet}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs text-slate-300 font-mono flex items-center space-x-1.5 border border-slate-800"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy SDK'}</span>
              </button>
            </div>
          </div>

          {/* Code Output Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 p-6 bg-slate-950/80 font-mono text-xs text-cyan-200 overflow-x-auto leading-relaxed border-b lg:border-b-0 lg:border-r border-slate-800">
              <pre>{snippets[activeLang]}</pre>
            </div>

            {/* Live Interactive API Tester Panel */}
            <div className="lg:col-span-4 p-6 bg-slate-950 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs font-bold text-white">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Live Endpoint Response Tester</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Send a live request to the Nexus Cloud API cluster and inspect JSON output latency.
                </p>

                <button
                  onClick={handleTestLiveApi}
                  disabled={isTestingApi}
                  className="w-full py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>{isTestingApi ? 'Dispatching API Request...' : 'Run Live GET /api/health'}</span>
                </button>
              </div>

              {/* API Response Inspector */}
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono space-y-2 min-h-[140px]">
                {isTestingApi ? (
                  <div className="flex items-center space-x-2 text-cyan-400 py-6">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Connecting to Cluster...</span>
                  </div>
                ) : apiResponse ? (
                  <div className="space-y-1 text-[11px]">
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-400 font-bold">HTTP {apiResponse.status} {apiResponse.statusText}</span>
                      <span className="text-slate-400">{apiResponse.latencyMs} ms</span>
                    </div>
                    <pre className="text-slate-300 text-[10px] overflow-x-auto mt-2 p-2 bg-slate-950 rounded border border-slate-800">
                      {JSON.stringify(apiResponse.payload, null, 2)}
                    </pre>
                  </div>
                ) : (
                  <span className="text-slate-500 italic text-[11px]">Click &quot;Run Live GET /api/health&quot; to test response...</span>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
