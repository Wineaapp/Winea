'use client';

type WaitlistButtonProps = {
  fullWidth?: boolean;
}

export default function WaitlistButton({ fullWidth }: WaitlistButtonProps) {
  return (
    <button 
      onClick={() => {
        document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
      }}
      className={`bg-[#EFCC5B] text-xs text-black font-semibold py-4 px-6 md:px-4 rounded-full hover:bg-black hover:text-white active:bg-black active:text-white transition-all ${fullWidth ? 'w-full py-[0.6rem]' : ''}`}
      type="submit"
    >
      Rejoignez la liste d&apos;attente
    </button>
  );
}