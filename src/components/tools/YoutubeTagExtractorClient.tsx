'use client';

import React, { useState } from 'react';
import { Search, Copy, CheckCircle, RefreshCw, AlertCircle, Hash } from 'lucide-react';

export default function YoutubeTagExtractorClient() {
  const [url, setUrl] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const extractTags = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setError(null);
    setTags([]);
    setCopied(false);

    try {
      const response = await fetch(`/api/youtube-tags?url=${encodeURIComponent(url.trim())}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to extract tags');
      }

      if (data.tags && data.tags.length > 0) {
        setTags(data.tags);
      } else {
        setError(data.message || 'No tags found for this video.');
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (tags.length === 0) return;
    
    // Copy as comma-separated string
    const tagsString = tags.join(', ');
    navigator.clipboard.writeText(tagsString).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      alert('Failed to copy to clipboard.');
    });
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1.5rem', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <Hash size={24} color="#ef4444" />
          YouTube Tag Extractor
        </h2>
        <p style={{ color: '#64748b', fontSize: '1rem', margin: 0 }}>
          Paste any YouTube video URL below to instantly extract its hidden SEO tags.
        </p>
      </div>

      <form onSubmit={extractTags} style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem', color: '#94a3b8' }}>
            <Search size={18} />
          </div>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            required
            style={{
              width: '100%',
              padding: '1rem 1rem 1rem 2.75rem',
              borderRadius: '8px',
              border: '2px solid #e2e8f0',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#ef4444')}
            onBlur={(e) => (e.target.style.borderColor = '#e2e8f0')}
          />
        </div>
        <button
          type="submit"
          disabled={loading || !url.trim()}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            background: '#ef4444', // YouTube Red
            color: '#ffffff',
            padding: '0 1.5rem',
            borderRadius: '8px',
            fontWeight: 700,
            border: 'none',
            cursor: (loading || !url.trim()) ? 'not-allowed' : 'pointer',
            opacity: (loading || !url.trim()) ? 0.7 : 1,
            fontSize: '1rem',
            minWidth: '140px',
            boxShadow: '0 4px 12px rgba(239, 68, 68, 0.25)',
          }}
        >
          {loading ? (
            <>
              <RefreshCw size={18} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
              Extracting...
            </>
          ) : (
            'Extract Tags'
          )}
        </button>
      </form>

      {error && (
        <div style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: '1rem', borderRadius: '8px', color: '#b91c1c', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}

      {tags.length > 0 && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #e2e8f0' }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>
              Extracted Tags ({tags.length})
            </h3>
            <button
              onClick={handleCopy}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: copied ? '#16a34a' : '#f1f5f9',
                color: copied ? '#ffffff' : '#1e293b',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.9rem',
                transition: 'all 0.2s',
              }}
            >
              {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
              {copied ? 'Copied!' : 'Copy All Tags'}
            </button>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  color: '#334155',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px', border: '1px dashed #cbd5e1' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b', fontFamily: 'monospace', wordBreak: 'break-all' }}>
              {tags.join(', ')}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
