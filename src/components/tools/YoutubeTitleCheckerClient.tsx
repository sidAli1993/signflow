'use client';

import React, { useState, useEffect } from 'react';

const POWER_WORDS = [
  'amazing', 'awesome', 'best', 'brilliant', 'epic', 'excellent', 'fantastic', 'great', 
  'incredible', 'outstanding', 'perfect', 'superb', 'ultimate', 'unbelievable', 'wonderful',
  'secret', 'hidden', 'proven', 'guaranteed', 'tested', 'truth', 'exposed', 'revealed',
  'easy', 'simple', 'fast', 'quick', 'free', 'cheap', 'insane', 'crazy', 'mind-blowing',
  'shocking', 'surprising', 'unexpected', 'weird', 'bizarre', 'new', 'latest', 'update',
  'breaking', 'exclusive', 'first', 'only', 'warning', 'danger', 'alert', 'beware', 'stop',
  'avoid', 'mistakes', 'fail', 'worst', 'bad', 'why', 'how', 'what', 'when', 'who', 'where',
  'tips', 'tricks', 'hacks', 'guide', 'tutorial', 'steps', 'ways', 'ideas', 'strategies',
  'vs', 'versus', 'review', 'test', 'comparison', 'battle', 'vs.', 'top'
];

interface AnalysisResult {
  score: number;
  length: {
    status: 'good' | 'bad' | 'warning';
    message: string;
  };
  numbers: {
    status: 'good' | 'bad';
    message: string;
  };
  powerWords: {
    status: 'good' | 'bad';
    message: string;
    found: string[];
  };
  brackets: {
    status: 'good' | 'bad';
    message: string;
  };
  sentiment: {
    status: 'good' | 'bad' | 'warning';
    message: string;
  };
}

export default function YoutubeTitleCheckerClient() {
  const [title, setTitle] = useState('');
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  useEffect(() => {
    if (!title.trim()) {
      setAnalysis(null);
      return;
    }

    let score = 0;
    
    // 1. Length Analysis (Ideal: 50-70) - 30 points
    let lengthStatus: 'good' | 'bad' | 'warning' = 'bad';
    let lengthMessage = `${title.length} characters.`;
    let lengthScore = 0;
    
    if (title.length >= 40 && title.length <= 70) {
      lengthStatus = 'good';
      lengthMessage += ' Perfect length! Fully visible on all devices.';
      lengthScore = 30;
    } else if (title.length > 70) {
      lengthStatus = 'warning';
      lengthMessage += ' Too long. May get truncated on mobile devices.';
      lengthScore = 15;
    } else {
      lengthStatus = 'bad';
      lengthMessage += ' Too short. Add more descriptive keywords.';
      lengthScore = 5;
    }
    score += lengthScore;

    // 2. Numbers Analysis - 20 points
    const hasNumbers = /\d/.test(title);
    score += hasNumbers ? 20 : 0;

    // 3. Power Words Analysis - 25 points
    const titleWords = title.toLowerCase().split(/\W+/).filter(Boolean);
    const foundPowerWords = POWER_WORDS.filter(pw => titleWords.includes(pw));
    const hasPowerWords = foundPowerWords.length > 0;
    score += hasPowerWords ? 25 : 0;

    // 4. Brackets Analysis - 15 points
    const hasBrackets = /[[\]()]/.test(title);
    score += hasBrackets ? 15 : 0;

    // 5. Sentiment / Capitalization (Question words or ALL CAPS) - 10 points
    const hasAllCapsWord = titleWords.some(w => w.length > 2 && title.includes(w.toUpperCase()) && !title.includes(w.toLowerCase()));
    const isQuestion = title.includes('?');
    score += (hasAllCapsWord || isQuestion) ? 10 : 0;

    setAnalysis({
      score: Math.min(100, score),
      length: {
        status: lengthStatus,
        message: lengthMessage
      },
      numbers: {
        status: hasNumbers ? 'good' : 'bad',
        message: hasNumbers ? 'Contains numbers, which naturally draw the eye.' : 'Try adding a number (e.g. year, top 5, 100%) to increase CTR.'
      },
      powerWords: {
        status: hasPowerWords ? 'good' : 'bad',
        message: hasPowerWords ? 'Contains strong emotional/power words.' : 'Lacks emotion. Try adding power words like "Ultimate", "Secret", or "Fast".',
        found: foundPowerWords
      },
      brackets: {
        status: hasBrackets ? 'good' : 'bad',
        message: hasBrackets ? 'Uses brackets or parentheses for visual grouping.' : 'Add [Brackets] or (Parentheses) to make the title pop.'
      },
      sentiment: {
        status: (hasAllCapsWord || isQuestion) ? 'good' : 'warning',
        message: (hasAllCapsWord || isQuestion) ? 'Good use of emphasis or curiosity.' : 'Consider capitalizing ONE important word or framing as a question.'
      }
    });

  }, [title]);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-slate-800)', marginBottom: '0.5rem' }}>
          Test Your YouTube Title
        </h2>
        <p style={{ color: 'var(--color-slate-500)' }}>
          Type or paste your video title below to see its CTR potential.
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. 5 Secret YouTube Tips to Grow Fast (2026)"
          className="w-full text-lg p-4 rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all"
          maxLength={100}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.875rem', color: title.length > 70 ? 'var(--color-error)' : 'var(--color-slate-400)' }}>
          <span>{title.length} characters</span>
          <span>Max 100</span>
        </div>
      </div>

      {analysis && (
        <div style={{ background: '#fff', padding: '2rem', borderRadius: '16px', border: '1px solid var(--color-slate-200)', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--color-slate-100)', paddingBottom: '2rem' }}>
            
            <div style={{ position: 'relative', width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg viewBox="0 0 36 36" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#eee"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke={analysis.score >= 80 ? '#22c55e' : analysis.score >= 50 ? '#f59e0b' : '#ef4444'}
                  strokeWidth="3"
                  strokeDasharray={`${analysis.score}, 100`}
                  style={{ transition: 'stroke-dasharray 0.5s ease-out' }}
                />
              </svg>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-slate-800)' }}>
                {analysis.score}
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.5rem' }}>
                {analysis.score >= 80 ? 'Excellent Title! 🚀' : analysis.score >= 50 ? 'Good, but could be better.' : 'Needs Improvement.'}
              </h3>
              <p style={{ color: 'var(--color-slate-500)', margin: 0, lineHeight: 1.5 }}>
                {analysis.score >= 80 
                  ? 'Your title is highly optimized for CTR and YouTube search. It hits all the major emotional and structural triggers.' 
                  : 'Your title is missing key elements that typically drive high click-through rates. Check the suggestions below.'}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <AnalysisItem 
              label="Length" 
              status={analysis.length.status} 
              message={analysis.length.message} 
            />
            <AnalysisItem 
              label="Numbers" 
              status={analysis.numbers.status} 
              message={analysis.numbers.message} 
            />
            <AnalysisItem 
              label="Power Words" 
              status={analysis.powerWords.status} 
              message={analysis.powerWords.message}
              subtext={analysis.powerWords.found.length > 0 ? `Found: ${analysis.powerWords.found.join(', ')}` : undefined}
            />
            <AnalysisItem 
              label="Brackets () or []" 
              status={analysis.brackets.status} 
              message={analysis.brackets.message} 
            />
            <AnalysisItem 
              label="Emphasis / Question" 
              status={analysis.sentiment.status} 
              message={analysis.sentiment.message} 
            />
          </div>
        </div>
      )}
    </div>
  );
}

function AnalysisItem({ label, status, message, subtext }: { label: string, status: 'good'|'bad'|'warning', message: string, subtext?: string }) {
  const getStatusIcon = () => {
    switch (status) {
      case 'good': return '✅';
      case 'warning': return '⚠️';
      case 'bad': return '❌';
      default: return '❓';
    }
  };

  return (
    <div style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid var(--color-slate-200)' }}>
      <div style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center' }}>
        {getStatusIcon()}
      </div>
      <div>
        <h4 style={{ margin: '0 0 0.25rem', fontSize: '1rem', fontWeight: 600, color: 'var(--color-slate-800)' }}>{label}</h4>
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-slate-600)' }}>{message}</p>
        {subtext && <p style={{ margin: '0.25rem 0 0', fontSize: '0.8rem', color: 'var(--color-slate-400)' }}>{subtext}</p>}
      </div>
    </div>
  );
}
