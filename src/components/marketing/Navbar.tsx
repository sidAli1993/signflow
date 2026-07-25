'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PenTool, Search, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ui';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setQuery('');
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/blog?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setQuery('');
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <PenTool size={20} />
            </div>
            <span className={styles.logoText}>MyDigitSign</span>
          </Link>

          <div className={styles.actions}>
            <Link href="/tools" className={styles.navLink}>
              Tools
            </Link>
            <Link href="/blog" className={styles.navLink}>
              Blog
            </Link>

            {/* Search Icon Button */}
            <button
              className={styles.searchBtn}
              onClick={() => setSearchOpen((o) => !o)}
              aria-label={searchOpen ? 'Close search' : 'Open search'}
              aria-expanded={searchOpen}
            >
              {searchOpen ? <X size={18} /> : <Search size={18} />}
            </button>

            <ThemeToggle />
          </div>
        </div>

        {/* Slide-down search bar */}
        <div className={`${styles.searchBar} ${searchOpen ? styles.searchBarOpen : ''}`}>
          <form onSubmit={handleSearch} className={styles.searchForm} role="search">
            <Search size={16} className={styles.searchIcon} aria-hidden="true" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search blog posts, tools, guides…"
              className={styles.searchInput}
              aria-label="Search MyDigitSign"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className={styles.searchClear}
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
            <button type="submit" className={styles.searchSubmit}>
              Search
            </button>
          </form>
        </div>
      </header>

      {/* Backdrop — click outside to close */}
      {searchOpen && (
        <div
          className={styles.searchBackdrop}
          onClick={() => { setSearchOpen(false); setQuery(''); }}
          aria-hidden="true"
        />
      )}
    </>
  );
};
