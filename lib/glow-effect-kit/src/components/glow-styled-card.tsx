"use client";

import { ColorHoverEffect } from "../core/color-hover-effect";
import { cn } from "../utils/cn";

interface GlowStyledCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "rainbow" | "ocean" | "sunset" | "white" | "teddy";
  glow?: boolean;
  borderWidth?: number;
  spread?: number;
  proximity?: number;
  inactiveZone?: number;
}

/**
 * GlowStyledCard - Adds glow effects to cards with existing styling
 *
 * Use this when your card already has borders, rings, or complex styling
 * that you want to preserve. The glow sits BEHIND your card (z-0) while
 * your card sits on top (z-10).
 *
 * @example
 * <GlowStyledCard variant="ocean" spread={20}>
 *   <div className="bg-gray-50 p-8 border-l-4 border-blue-500">
 *     Your pre-styled content
 *   </div>
 * </GlowStyledCard>
 */
export const GlowStyledCard = ({
  children,
  className,
  variant = "teddy",
  glow = true,
  borderWidth = 1,
  spread = 20,
  proximity = 0,
  inactiveZone = 0.7,
}: GlowStyledCardProps) => {
  return (
    <div className={cn("relative w-full h-full", className)}>
      {/* Glow layer - absolutely positioned behind */}
      <ColorHoverEffect
        variant={variant}
        glow={glow}
        borderWidth={borderWidth}
        spread={spread}
        proximity={proximity}
        inactiveZone={inactiveZone}
        className="absolute inset-0 z-0 rounded-[inherit]"
      />

      {/* Your original card - elevated above glow */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
