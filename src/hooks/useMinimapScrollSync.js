import { useCallback, useEffect, useRef, useState } from "react";

export function useMinimapScrollSync(scrollContainerRef) {
  const trackRef = useRef(null);
  const [viewport, setViewport] = useState({ top: 0, height: 1 });
  const dragging = useRef(false);

  const measure = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    if (scrollHeight <= 0) return;
    setViewport({
      top: scrollTop / scrollHeight,
      height: Math.min(1, clientHeight / scrollHeight),
    });
  }, [scrollContainerRef]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    measure();

    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        measure();
        raf = null;
      });
    };

    el.addEventListener("scroll", onScroll);
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener("scroll", onScroll);
      resizeObserver.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [scrollContainerRef, measure]);

  const scrollToRatio = useCallback(
    (ratio) => {
      const el = scrollContainerRef.current;
      if (!el) return;
      const clamped = Math.max(0, Math.min(1, ratio));
      el.scrollTop = clamped * el.scrollHeight - el.clientHeight / 2;
    },
    [scrollContainerRef]
  );

  const ratioFromPointer = useCallback((clientY) => {
    const track = trackRef.current;
    if (!track) return 0;
    const rect = track.getBoundingClientRect();
    return (clientY - rect.top) / rect.height;
  }, []);

  const onTrackClick = useCallback(
    (e) => {
      scrollToRatio(ratioFromPointer(e.clientY));
    },
    [scrollToRatio, ratioFromPointer]
  );

  const onViewportPointerDown = useCallback(
    (e) => {
      dragging.current = true;
      e.preventDefault();

      const onMove = (moveEvent) => {
        if (!dragging.current) return;
        scrollToRatio(ratioFromPointer(moveEvent.clientY));
      };
      const onUp = () => {
        dragging.current = false;
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
      };

      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
    },
    [scrollToRatio, ratioFromPointer]
  );

  return { trackRef, viewport, onTrackClick, onViewportPointerDown };
}
