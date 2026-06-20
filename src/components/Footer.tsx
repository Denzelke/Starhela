import { Star, Twitter, Facebook, Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest border-t border-sage/30 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-white/60 hover:text-white transition-colors">Ways to Earn</a></li>
              <li><a href="#how-it-works" className="text-white/60 hover:text-white transition-colors">How it works</a></li>
              <li><a href="#faq" className="text-white/60 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Withdrawal Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-sage/20 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Starhela Agencies. All rights reserved. The #1 online earning platform in East Africa.</p>
        </div>
      </div>
    </footer>
  );
}
