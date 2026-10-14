import React, { useState } from 'react';
import { X, Copy, Check, Download, FileCode, CheckCircle2 } from 'lucide-react';
import { HTML_CODE, CSS_CODE, JS_CODE } from '../data/sourceCode';

interface SourceCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SourceCodeModal: React.FC<SourceCodeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentCode =
    activeTab === 'html' ? HTML_CODE : activeTab === 'css' ? CSS_CODE : JS_CODE;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#121211]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-[#171716] text-[#EFECE6] rounded-xl border border-white/10 max-w-[960px] w-full h-[85vh] flex flex-col relative shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between gap-4 bg-[#1F1F1E]">
          <div className="flex items-center gap-2">
            <FileCode className="w-5 h-5 text-[#C8BEAF]" />
            <div>
              <h2 className="text-sm font-semibold text-white tracking-wide">
                Tanasuq Source Code Package
              </h2>
              <span className="text-[11px] text-[#A3A09A]">
                Pure Standalone HTML5 · CSS3 · Vanilla JavaScript (No Frameworks)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/tanasuq-website.zip"
              download="tanasuq-website.zip"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#171716] bg-white hover:bg-[#EFECE6] rounded transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .ZIP</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-[#A3A09A] hover:text-white rounded transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab & Action Toolbar */}
        <div className="px-5 py-2.5 bg-[#171716] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab('html')}
              className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                activeTab === 'html'
                  ? 'bg-white/15 text-white font-medium'
                  : 'text-[#A3A09A] hover:text-white'
              }`}
            >
              index.html
            </button>
            <button
              onClick={() => setActiveTab('css')}
              className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                activeTab === 'css'
                  ? 'bg-white/15 text-white font-medium'
                  : 'text-[#A3A09A] hover:text-white'
              }`}
            >
              style.css
            </button>
            <button
              onClick={() => setActiveTab('js')}
              className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                activeTab === 'js'
                  ? 'bg-white/15 text-white font-medium'
                  : 'text-[#A3A09A] hover:text-white'
              }`}
            >
              app.js
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1 text-xs text-[#A3A09A] hover:text-white font-mono transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy File Code</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content Box */}
        <div className="flex-1 overflow-auto p-5 font-mono text-xs text-[#D8D5CE] leading-relaxed selection:bg-white/20">
          <pre className="whitespace-pre">{currentCode}</pre>
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 border-t border-white/10 bg-[#1F1F1E] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#A3A09A]">
          <span>Package includes: index.html, style.css, app.js, README.md, and all images/ in tanasuq-website.zip</span>
          <a
            href="/tanasuq-website.zip"
            download="tanasuq-website.zip"
            className="text-white hover:underline flex items-center gap-1"
          >
            <Download className="w-3 h-3" />
            <span>Download tanasuq-website.zip (6.2 MB)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
