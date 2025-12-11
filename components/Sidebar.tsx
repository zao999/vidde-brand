import React from 'react';
import { MENU_ITEMS } from '../constants';
import { LogoFull } from './BrandAssets';

interface SidebarProps {
  activeSection: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, isOpen, setIsOpen }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-brand-dark/10 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-4 left-4 bottom-4 w-72 z-50 rounded-3xl transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col justify-between py-10
        bg-white/80 backdrop-blur-md shadow-2xl shadow-brand-dark/5
        lg:bg-transparent lg:backdrop-blur-none lg:shadow-none
        ${isOpen ? 'translate-x-0' : '-translate-x-[110%]'}
        lg:translate-x-0
      `}>
        <div className="flex flex-col h-full">
          {/* Logo container with specific padding to define the left margin */}
          <div className="px-8 mb-16 pt-2">
             <LogoFull className="w-44 text-brand-dark" color="#0F161A" />
          </div>

          <nav className="flex-1 px-8">
            <ul className="flex flex-col space-y-2">
              {MENU_ITEMS.map((item) => (
                <li key={item.id} className="relative">
                  <button type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      w-full text-left py-1.5 text-lg transition-all duration-300 tracking-wide
                      flex items-center group relative
                      ${activeSection === item.id 
                        ? 'text-brand-dark font-bold' 
                        : 'text-brand-slate opacity-60 font-medium hover:text-brand-dark hover:opacity-100'
                      }
                    `}
                  >
                    {/* Active Indicator */}
                    {activeSection === item.id && (
                      <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};