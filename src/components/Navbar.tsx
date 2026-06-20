import { motion } from 'motion/react';
import { Menu, X, Star } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 bg-offwhite/80 backdrop-blur-md border-b border-sage/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="flex items-center gap-2">
              <div className="bg-sage p-1.5 rounded-lg">
                <Star className="w-5 h-5 text-forest fill-current" />
              </div>
              <span className="text-xl font-bold text-forest">
                Starhela
              </span>
            </div>
            
            <div className="hidden md:flex ml-10 space-x-8">
              <a href="#home" className="text-forest/80 hover:text-forest px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#features" className="text-forest/80 hover:text-forest px-3 py-2 rounded-md text-sm font-medium transition-colors">Ways to Earn</a>
              <a href="#how-it-works" className="text-forest/80 hover:text-forest px-3 py-2 rounded-md text-sm font-medium transition-colors">How it Works</a>
              <a href="#faq" className="text-forest/80 hover:text-forest px-3 py-2 rounded-md text-sm font-medium transition-colors">FAQ</a>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <a href="https://helalink.com/register.php?ref=JackCee" className="bg-ochre hover:bg-ochre-hover text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-ochre/20">
                Register
              </a>
            </div>

            <div className="flex md:hidden items-center ml-auto">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-forest/80 hover:text-forest p-2 rounded-md transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-forest/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile menu drawer */}
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-64 bg-white border-l border-sage/30 z-50 p-6 shadow-2xl md:hidden flex flex-col"
      >
        <div className="flex items-center justify-between mb-8">
          <span className="text-lg font-bold text-forest">Menu</span>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-forest/80 hover:text-forest p-2 -mr-2 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-forest/80 hover:text-forest text-lg font-medium transition-colors">Home</a>
          <a href="#features" onClick={() => setIsOpen(false)} className="text-forest/80 hover:text-forest text-lg font-medium transition-colors">Ways to Earn</a>
          <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-forest/80 hover:text-forest text-lg font-medium transition-colors">How it Works</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="text-forest/80 hover:text-forest text-lg font-medium transition-colors">FAQ</a>
          
          <div className="pt-6 mt-6 border-t border-sage/30 flex flex-col gap-4">
            <a href="https://helalink.com/register.php?ref=JackCee" className="w-full text-center bg-ochre hover:bg-ochre-hover text-white py-3 rounded-xl text-lg font-medium transition-colors">
              Register
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
