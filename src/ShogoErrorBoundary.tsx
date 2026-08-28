// Copyright (C) 2026 Shogo Technologies, Inc.
import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props { children: ReactNode }
interface State { hasError: boolean; error: Error | null; showDetails: boolean }

export class ShogoErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null, showDetails: false }
  static getDerivedStateFromError(error: Error): Partial<State> { return { hasError: true, error } }
  componentDidCatch(error: Error, info: ErrorInfo) { console.error('[ShogoErrorBoundary]', error, info) }
  handleRetry = () => { this.setState({ hasError: false, error: null, showDetails: false }) }
  handleReload = () => { window.location.reload() }
  toggleDetails = () => { this.setState((s) => ({ showDetails: !s.showDetails })) }
  render() {
    if (!this.state.hasError) return this.props.children
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", background: 'var(--background, #fafafa)', color: 'var(--foreground, #111)' }}>
        <div style={{ maxWidth: '520px', width: '100%', border: '1px solid var(--border, #e5e5e5)', borderRadius: '16px', padding: '24px', background: 'var(--card, #fff)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
          <h1 style={{ fontSize: '18px', fontWeight: 600, margin: '0 0 12px 0' }}>Something went wrong</h1>
          <p style={{ fontSize: '14px', lineHeight: 1.5, color: '#666', margin: '0 0 16px 0' }}>The app crashed. Try again or reload.</p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={this.handleRetry} style={{ flex: 1, cursor: 'pointer', fontSize: '14px', fontWeight: 600, padding: '10px 16px', borderRadius: '10px', border: 'none', background: '#111', color: '#fff' }}>Try again</button>
            <button onClick={this.handleReload} style={{ flex: 1, cursor: 'pointer', fontSize: '14px', fontWeight: 600, padding: '10px 16px', borderRadius: '10px', border: '1px solid #e5e5e5', background: 'transparent', color: '#111' }}>Reload</button>
          </div>
        </div>
      </div>
    )
  }
}