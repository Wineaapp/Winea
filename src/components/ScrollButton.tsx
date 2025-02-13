'use client';

export default function ScrollButton() {
  return (
    <button 
      onClick={() => {
        document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
      }}
      className="bg-[#EFCC5B] text-xs text-black font-semibold py-4 px-6 md:px-4 rounded-full [@media(hover:hover)]:hover:bg-black [@media(hover:hover)]:hover:text-white active:bg-black active:text-white transition-all"
      type="submit"
    >
      Rejoignez la liste d&apos;attente
    </button>
  );
}