import { useState, useEffect } from 'react';
import { cn, Icon } from '@mintlify/components';
import type { NavNode, TabInfo } from '@mintlify/astro/helpers';
import { unwrapNav } from '@mintlify/astro/helpers';
import { type SidebarItemStyle, type AnchorItem } from './types';
import { SidebarEntries } from './SidebarEntries';
import { Anchors } from './Anchors';
import { TabsDropdown } from './TabsDropdown';

interface MobileSidebarProps {
  navigation: NavNode;
  currentPath: string;
  tabs?: TabInfo[];
  anchors?: AnchorItem[];
  sidebarItemStyle?: SidebarItemStyle;
  showDivider?: boolean;
}

export function MobileSidebar({
  navigation,
  currentPath,
  tabs = [],
  anchors = [],
  sidebarItemStyle = 'container',
  showDivider = false,
}: MobileSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const entries = unwrapNav(navigation, currentPath);

  useEffect(() => {
    const handleToggle = () => setIsOpen((prev) => !prev);
    window.addEventListener('toggle-mobile-sidebar', handleToggle);
    return () =>
      window.removeEventListener('toggle-mobile-sidebar', handleToggle);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-60 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="fixed top-4 right-4 z-80 flex h-8 w-8 items-center justify-center rounded-full bg-white text-stone-500 shadow-md hover:text-stone-700 dark:bg-stone-900 dark:text-stone-300 dark:hover:text-stone-100 lg:hidden"
          aria-label="Close navigation"
        >
          <Icon icon="x" iconLibrary="lucide" size={18} />
        </button>
      )}

      <div
        className={cn(
          'fixed top-0 left-0 bottom-0 z-70 w-[20rem] bg-white transition-transform duration-300 ease-in-out dark:bg-stone-950 lg:hidden',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 pt-6 pb-4">
            <a href="/" className="flex items-center gap-3">
              <img src="/favicon.svg" alt="" className="h-8 w-8 rounded-xl" />
              <span className="text-base font-semibold tracking-tight text-stone-950 dark:text-stone-50">
                Spec Led Dev
              </span>
            </a>
            <button
              type="button"
              data-theme-toggle
              aria-label="Toggle color theme"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-700 transition-colors hover:border-stone-300 hover:bg-stone-50 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200 dark:hover:border-stone-600 dark:hover:bg-stone-800"
            >
              <svg
                className="h-4 w-4 dark:hidden"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2.5" />
                <path d="M12 19.5V22" />
                <path d="M4.93 4.93l1.77 1.77" />
                <path d="M17.3 17.3l1.77 1.77" />
                <path d="M2 12h2.5" />
                <path d="M19.5 12H22" />
                <path d="M4.93 19.07l1.77-1.77" />
                <path d="M17.3 6.7l1.77-1.77" />
              </svg>
              <svg
                className="hidden h-4 w-4 dark:block"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z" />
              </svg>
              <span className="sr-only">Toggle color theme</span>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto pt-4 pb-8">
            {tabs.length > 0 && (
              <div className="px-4 mb-4">
                <TabsDropdown tabs={tabs} />
              </div>
            )}

            {anchors.length > 0 && (
              <div className="px-2">
                <Anchors anchors={anchors} />
              </div>
            )}

            <div className="px-4">
              <SidebarEntries
                entries={entries}
                currentPath={currentPath}
                sidebarItemStyle={sidebarItemStyle}
                showDivider={showDivider}
              />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
