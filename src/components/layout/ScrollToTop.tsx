import { useEffect, useState } from 'react';
import Icon from '@/components/primitives/Icon';
import useMediaQuery from '@/hooks/useMediaQuery';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const isMdPlus = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    const threshold = isMdPlus ? 600 : 500;
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 8);
      setShow(y > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMdPlus]);

  if (atTop) return null;

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 md:bottom-7 md:right-7 z-[70]">
      <button
        type="button"
        aria-label="Scroll to top"
        title="Back to top"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' as ScrollBehavior })}
        className={[
          'pointer-events-auto ds-btn ds-btn--icon ds-btn--primary shadow-xl transition-all duration-400 ease-corp',
          show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none',
        ].join(' ')}
      >
        <Icon name="arrow-up" size={18} aria-hidden />
      </button>
    </div>
  );
}
