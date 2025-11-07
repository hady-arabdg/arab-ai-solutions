import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/966549793708"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 group"
      aria-label="تواصل معنا عبر واتساب"
    >
      <div className="relative">
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75" />
        
        {/* Button */}
        <div className="relative bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-3 group-hover:pr-6">
          <MessageCircle className="w-6 h-6" />
          <span className="hidden group-hover:inline-block whitespace-nowrap font-semibold text-sm">
            تواصل معنا
          </span>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
