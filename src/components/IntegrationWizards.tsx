import { useState } from 'react'
import { Globe, Search, BarChart3, Share2, MessageSquare, Star, Facebook, Instagram, Youtube, Twitter, ExternalLink, CheckCircle2, Circle, ArrowRight, ChevronDown, ChevronUp, Link2, Shield, Clock, AlertTriangle, RefreshCw, Zap } from 'lucide-react'

type WizardStep = 'discover' | 'authorize' | 'permissions' | 'configure' | 'test' | 'complete'

interface Integration { id: string; name: string; icon: any; category: string; description: string; url: string; authType: 'oauth' | 'manual' | 'api_key'; permissions: string[]; status: 'disconnected' | 'ready' | 'connected'; lastSync?: string; intelligence: string[]; color: string }

const INTEGRATIONS: Integration[] = [
  { id: 'google-business', name: 'Google Business Profile', icon: Globe, category: 'Search & Visibility', description: 'Manage your business listing on Google Search and Maps.', url: 'https://business.google.com/', authType: 'oauth', permissions: ['View & manage business info', 'Read & respond to reviews', 'Create & manage posts', 'View Insights data'], status: 'disconnected', intelligence: ['Lead Intelligence', 'Marketing Intelligence', 'Review Intelligence'], color: 'text-green-400' },
  { id: 'google-search', name: 'Google Search Console', icon: Search, category: 'Search & Visibility', description: 'Monitor your website performance in Google Search.', url: 'https://search.google.com/search-console/', authType: 'oauth', permissions: ['View search performance data', 'Monitor indexing status', 'Submit sitemaps', 'Check Core Web Vitals'], status: 'disconnected', intelligence: ['SEO Intelligence', 'Analytics Intelligence'], color: 'text-blue-400' },
  { id: 'google-analytics', name: 'Google Analytics', icon: BarChart3, category: 'Search & Visibility', description: 'Track website visitors, behaviour, and conversions.', url: 'https://analytics.google.com/', authType: 'oauth', permissions: ['View website traffic data', 'Track conversions & goals', 'View audience demographics', 'Monitor real-time visitors'], status: 'disconnected', intelligence: ['Analytics Intelligence', 'Marketing Intelligence'], color: 'text-orange-400' },
  { id: 'facebook-business', name: 'Facebook Business', icon: Facebook, category: 'Social Media', description: 'Manage your Facebook Business Page, create posts, run ads.', url: 'https://business.facebook.com/', authType: 'oauth', permissions: ['Manage page posts', 'View page insights', 'Respond to messages', 'Manage page info'], status: 'disconnected', intelligence: ['Marketing Intelligence', 'Social Intelligence'], color: 'text-blue-500' },
  { id: 'instagram-business', name: 'Instagram Business', icon: Instagram, category: 'Social Media', description: 'Share project photos, stories, and reels.', url: 'https://www.instagram.com/', authType: 'oauth', permissions: ['Create & manage posts', 'View insights & analytics', 'Respond to comments & DMs', 'Manage business profile'], status: 'disconnected', intelligence: ['Marketing Intelligence', 'Social Intelligence'], color: 'text-pink-500' },
  { id: 'whatsapp-business', name: 'WhatsApp Business', icon: MessageSquare, category: 'Communication', description: 'Direct customer communication via WhatsApp.', url: 'https://www.whatsapp.com/business/', authType: 'manual', permissions: ['Send & receive messages', 'Manage business profile', 'View chat statistics', 'Create quick replies'], status: 'disconnected', intelligence: ['Lead Intelligence', 'Customer Intelligence'], color: 'text-green-500' },
  { id: 'google-reviews', name: 'Google Reviews', icon: Star, category: 'Reputation', description: 'Collect and respond to Google reviews.', url: 'https://g.page/r/CZvrH_lDzSdJEBI/review', authType: 'manual', permissions: ['Share review link with customers', 'View all reviews', 'Respond to reviews'], status: 'disconnected', intelligence: ['Review Intelligence', 'Marketing Intelligence'], color: 'text-yellow-400' },
  { id: 'youtube-channel', name: 'YouTube Studio', icon: Youtube, category: 'Social Media', description: 'Upload project videos and educational content.', url: 'https://studio.youtube.com/', authType: 'oauth', permissions: ['Upload & manage videos', 'View channel analytics', 'Manage comments', 'Create playlists'], status: 'disconnected', intelligence: ['Marketing Intelligence', 'Content Intelligence'], color: 'text-red-500' },
  { id: 'tiktok-business', name: 'TikTok Business', icon: Share2, category: 'Social Media', description: 'Short-form video for construction tips.', url: 'https://www.tiktok.com/business/', authType: 'manual', permissions: ['Create & manage content', 'View analytics', 'Run promotions', 'Manage profile'], status: 'disconnected', intelligence: ['Marketing Intelligence', 'Trend Intelligence'], color: 'text-pink-400' },
  { id: 'linkedin-company', name: 'LinkedIn Company', icon: Share2, category: 'Social Media', description: 'Professional presence for commercial projects.', url: 'https://www.linkedin.com/company/setup/new/', authType: 'oauth', permissions: ['Manage company page', 'Post updates', 'View analytics', 'Manage employees'], status: 'disconnected', intelligence: ['Marketing Intelligence', 'Brand Intelligence'], color: 'text-blue-600' },
]

export default function IntegrationWizards() {
  const [filter, setFilter] = useState('All')
  const [wizardOpen, setWizardOpen] = useState<Integration | null>(null)
  const categories = ['All', ...Array.from(new Set(INTEGRATIONS.map(i => i.category)))]
  const filtered = filter === 'All' ? INTEGRATIONS : INTEGRATIONS.filter(i => i.category === filter)
  const connected = INTEGRATIONS.filter(i => i.status === 'connected').length

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Integrations</h2>
        <p className="text-sm text-slate-400">Connect platforms to activate intelligence engines. Each wizard guides you through sign-in, permissions, and intelligence engine wiring.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4"><div className="text-2xl font-bold text-white">{INTEGRATIONS.length}</div><div className="text-xs text-slate-400">Available Integrations</div></div>
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4"><div className="text-2xl font-bold text-green-400">{connected}</div><div className="text-xs text-slate-400">Connected</div></div>
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4"><div className="text-2xl font-bold text-amber-400">{INTEGRATIONS.length - connected}</div><div className="text-xs text-slate-400">Ready to Connect</div></div>
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4"><div className="text-2xl font-bold text-blue-400">14</div><div className="text-xs text-slate-400">Intelligence Engines</div></div>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (<button key={cat} onClick={() => setFilter(cat)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${filter === cat ? 'bg-amber-500 text-black' : 'bg-slate-800 text-slate-400 hover:text-white'}`}>{cat}</button>))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(integration => (
          <div key={integration.id} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-amber-500/30 transition-all">
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center ${integration.color}`}><integration.icon className="w-6 h-6" /></div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1"><h3 className="font-semibold text-white text-sm">{integration.name}</h3><span className="text-xs text-slate-500 bg-slate-800 px-2 py-0.5 rounded">{integration.category}</span></div>
                <p className="text-xs text-slate-400 mb-3">{integration.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">{integration.intelligence.map((eng, i) => (<span key={i} className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded text-[10px] border border-blue-500/20">🔗 {eng}</span>))}</div>
                <div className="flex items-center gap-2">
                  <a href={integration.url} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"><ExternalLink className="w-3 h-3" /> Connect Now</a>
                  <button onClick={() => setWizardOpen(integration)} className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white text-xs rounded-lg transition-colors">Setup Wizard</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {wizardOpen && (<div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
        <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">{wizardOpen.name}</h3>
            <button onClick={() => setWizardOpen(null)} className="text-slate-400 hover:text-white text-xl">×</button>
          </div>
          <p className="text-sm text-slate-400 mb-4">This wizard guides you through the setup process. Click "Connect Now" to open the platform, sign in, and authorize.</p>
          <div className="space-y-3 mb-6">
            {['Discover what this integration provides', 'Open the platform and sign in', 'Review and grant permissions', 'Configure sync settings', 'Test the connection', 'Connection locked and active'].map((s, i) => (<div key={i} className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs text-slate-400 font-medium">{i + 1}</div><span className="text-sm text-slate-300">{s}</span></div>))}
          </div>
          <a href={wizardOpen.url} target="_blank" rel="noopener noreferrer" className="w-full px-4 py-3 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors"><ExternalLink className="w-4 h-4" /> Open {wizardOpen.name}</a>
        </div>
      </div>)}
    </div>
  )
}