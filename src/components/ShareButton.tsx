import { useState } from 'react';
import { Share2, X, Twitter, Facebook, Linkedin, Link, MessageCircle } from 'lucide-react';

const ShareButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const pageUrl = window.location.href;
  const pageTitle = 'Sayed Mohamed Sayed | OCI Infrastructure Engineer';

  const shareLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)}`,
      color: 'hover:bg-[#1DA1F2]',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
      color: 'hover:bg-[#4267B2]',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(pageTitle)}`,
      color: 'hover:bg-[#0077B5]',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(pageTitle + ' ' + pageUrl)}`,
      color: 'hover:bg-[#25D366]',
    },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      {/* Share Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-40 right-6 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 opacity-90 hover:opacity-100"
        aria-label="Share"
      >
        {isOpen ? <X size={20} /> : <Share2 size={20} />}
      </button>

      {/* Share Menu */}
      <div
        className={`fixed bottom-56 right-6 z-50 flex flex-col gap-3 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {shareLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 rounded-full bg-card border border-border text-foreground flex items-center justify-center shadow-lg transition-all duration-300 hover:text-white hover:border-transparent ${link.color}`}
            style={{ transitionDelay: `${index * 50}ms` }}
            aria-label={`Share on ${link.name}`}
          >
            <link.icon size={18} />
          </a>
        ))}
        <button
          onClick={copyLink}
          className="w-10 h-10 rounded-full bg-card border border-border text-foreground flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-transparent"
          aria-label="Copy link"
        >
          {copied ? (
            <span className="text-xs font-bold">✓</span>
          ) : (
            <Link size={18} />
          )}
        </button>
      </div>
    </>
  );
};

export default ShareButton;
