"use client";

import { useEffect } from "react";
import { animate } from "motion/react";

export function GlowCardInit() {
  useEffect(() => {
    const initializeGlowCards = () => {
      const cards = document.querySelectorAll<HTMLElement>('.card-glow');

      cards.forEach(card => {
        // Skip if already initialized
        if ((card as any).__glowInitialized) return;
        (card as any).__glowInitialized = true;

        // Read configuration from CSS variables
        const computedStyle = getComputedStyle(card);
        const proximity = parseFloat(computedStyle.getPropertyValue("--glow-proximity")) || 150;
        const inactiveZone = parseFloat(computedStyle.getPropertyValue("--glow-inactive-zone")) || 0.3;

        const handleMove = (e: PointerEvent) => {
          const { left, top, width, height } = card.getBoundingClientRect();
          const mouseX = e.clientX;
          const mouseY = e.clientY;

          const center = [left + width * 0.5, top + height * 0.5];
          const distanceFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1]);
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

          // Check if mouse is in inactive center zone
          if (distanceFromCenter < inactiveRadius) {
            card.style.setProperty("--glow-active", "0");
            return;
          }

          // Check if mouse is within proximity
          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          card.style.setProperty("--glow-active", isActive ? "1" : "0");

          if (!isActive) return;

          // Calculate angle for gradient rotation
          const currentAngle = parseFloat(card.style.getPropertyValue("--glow-angle")) || 0;
          let targetAngle = (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI + 90;

          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
          const newAngle = currentAngle + angleDiff;

          animate(currentAngle, newAngle, {
            duration: 2,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) => {
              card.style.setProperty("--glow-angle", String(value));
            },
          });
        };

        // Attach listener (single listener per card)
        document.body.addEventListener('pointermove', handleMove, { passive: true });
      });
    };

    // Initial setup
    initializeGlowCards();

    // Re-init on dynamic content changes
    const observer = new MutationObserver(() => {
      initializeGlowCards();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null; // This component renders nothing
}
