import React from 'react';
import { X, Check } from 'lucide-react';

const SignupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative bg-[#2c3440] w-full max-w-[480px] rounded-[5px] shadow-2xl p-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[#99aabb] text-[18px] font-black uppercase tracking-[0.2em] antialiased">
            Join MovieIQ
          </h2>
          <button 
            onClick={onClose}
            className="text-[#99aabb] hover:text-white transition-colors"
          >
            <X className="w-8 h-8 font-light" />
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-bold text-white antialiased">Email address</label>
            <input 
              type="email" 
              className="bg-[#ccddee] border-none rounded-[5px] px-4 py-3 text-[#14181c] text-[16px] focus:ring-4 ring-brand-green/20 outline-none transition-all shadow-inner" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-bold text-white antialiased">Username</label>
            <input 
              type="text" 
              className="bg-[#ccddee] border-none rounded-[5px] px-4 py-3 text-[#14181c] text-[16px] focus:ring-4 ring-brand-green/20 outline-none transition-all shadow-inner" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-bold text-white antialiased">Password</label>
            <input 
              type="password" 
              className="bg-[#ccddee] border-none rounded-[5px] px-4 py-3 text-[#14181c] text-[16px] focus:ring-4 ring-brand-green/20 outline-none transition-all shadow-inner" 
            />
          </div>

          {/* Checkboxes */}
          <div className="space-y-4 pt-2">
            <div className="flex gap-4">
              <div className="w-6 h-6 shrink-0 bg-[#ccddee] rounded-[3px] flex items-center justify-center cursor-pointer group hover:bg-white transition-colors">
                <Check className="w-5 h-5 text-[#2c3440] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-[#99aabb] text-[14px] leading-snug">
                I'm at least 16 years old and accept the <a href="#" className="text-white hover:underline font-bold">Terms of Use</a>.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-6 h-6 shrink-0 bg-[#ccddee] rounded-[3px] flex items-center justify-center cursor-pointer group hover:bg-white transition-colors">
                <Check className="w-5 h-5 text-[#2c3440] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-[#99aabb] text-[14px] leading-snug">
                I accept the <a href="#" className="text-white hover:underline font-bold">Privacy Policy</a> and consent to the processing of my personal information in accordance with it.
              </p>
            </div>
          </div>

          {/* hCaptcha Placeholder */}
          <div className="bg-white rounded-[4px] p-4 flex items-center justify-between shadow-md group cursor-pointer border-l-4 border-l-white hover:border-l-brand-green transition-all">
            <div className="flex items-center gap-4">
              <div className="w-7 h-7 border-2 border-slate-300 rounded-[2px] group-hover:border-brand-green transition-colors" />
              <span className="text-slate-700 text-[15px] font-medium">I am human</span>
            </div>
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-cyan-400">
                <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
              </svg>
              <span className="text-[10px] text-slate-400 font-bold tracking-tighter">hCaptcha</span>
              <span className="text-[8px] text-slate-300">Privacy - Terms</span>
            </div>
          </div>

          {/* Sign Up Button */}
          <button className="w-min bg-brand-green hover:bg-[#00c048] text-white px-8 py-3 rounded-[5px] text-[15px] font-black uppercase tracking-widest transition-all shadow-xl shadow-brand-green/20 mt-4 active:scale-95">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
