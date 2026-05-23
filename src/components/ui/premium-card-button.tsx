import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  size?: "sm" | "md" | "lg";
  gradientLight?: { from: string; via: string; to: string };
  gradientDark?: { from: string; via: string; to: string };
}

export const PremiumCardButton: React.FC<ButtonProps> = ({
  icon,
  title,
  subtitle,
  size = "md",
  gradientLight = { from: "from-[#4ade80]", via: "via-[#22c55e]", to: "to-[#15803d]" },
  gradientDark = { from: "from-[#22c55e]", via: "via-[#15803d]", to: "to-[#14532d]" },
  className = "",
  ...props
}) => {
  const sizes = {
    sm: "p-4 rounded-[28px] w-36 h-36",
    md: "p-5 rounded-[32px] w-40 h-40",
    lg: "p-6 rounded-[36px] w-44 h-44",
  };

  return (
    <button
      {...props}
      style={{
        transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        willChange: "transform, box-shadow",
      }}
      className={`group relative overflow-hidden border-2 cursor-pointer transition-all duration-500 ease-out transform-gpu flex flex-col items-center justify-center text-center select-none
                  shadow-[0_12px_28px_rgba(0,0,0,0.25),inset_0_4px_10px_rgba(255,255,255,0.8),inset_0_-4px_10px_rgba(0,0,0,0.35)] 
                  hover:shadow-[0_18px_45px_rgba(0,0,0,0.4),inset_0_6px_14px_rgba(255,255,255,0.9),inset_0_-5px_12px_rgba(0,0,0,0.45)]
                  hover:scale-[1.10] active:scale-[0.90] active:brightness-90
                  ${sizes[size]} 
                  border-white/40 hover:border-white/70 bg-gradient-to-br ${gradientLight.from} ${gradientLight.via} ${gradientLight.to} 
                  dark:${gradientDark.from} dark:${gradientDark.via} dark:${gradientDark.to} ${className}`}
    >
      {/* 3D Circular Spherical Gel Border Highlight */}
      <div className="absolute inset-[1px] rounded-[inherit] border border-white/20 pointer-events-none z-10" />

      {/* Glossy Liquid Gel 3D Top Reflection Highlight */}
      <div className="absolute top-[2.5px] left-4 right-4 h-4 bg-gradient-to-b from-white/75 to-transparent rounded-full pointer-events-none z-10" />

      {/* Glossy Liquid Gel 3D Bottom Bounce Highlight */}
      <div className="absolute bottom-[2.5px] left-4 right-4 h-3 bg-gradient-to-t from-white/25 to-transparent rounded-full pointer-events-none z-10" />

      {/* Deep Glass Spherical Inner Shadows for an authentic juicy/bubbly look */}
      <div className="absolute inset-0 z-0 rounded-[inherit] pointer-events-none transform-gpu
          shadow-[inset_0_5px_10px_rgba(255,255,255,0.85),inset_0_-5px_10px_rgba(0,0,0,0.4)] 
          group-hover:shadow-[inset_0_7px_14px_rgba(255,255,255,0.95),inset_0_-6px_14px_rgba(0,0,0,0.5)]" />

      {/* Moving internal liquid highlight sweep */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out pointer-events-none z-0"></div>

      {/* Overlay liquid hover glow */}
      <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-white/25 via-white/10 to-white/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"></div>

      {/* Content stacked vertically like a cute app widget/bubble box */}
      <div className="relative z-10 flex flex-col items-center gap-2.5 justify-center h-full w-full">
        {/* Soft Circular Bubbly Icon Container */}
        <div className="p-3 rounded-full bg-white/25 backdrop-blur-md group-hover:bg-white/35 group-hover:scale-110 transition-all duration-300 border border-white/30 shadow-inner flex items-center justify-center shrink-0">
          {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<any>, {
            className: `${(icon.props as { className?: string }).className || "w-6 h-6 text-white"} transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]`
          }) : icon}
        </div>

        {/* Texts stacked vertically */}
        <div className="select-none flex flex-col items-center justify-center group-hover:scale-[1.03] transition-transform duration-300">
          <p className="text-white font-black text-sm tracking-wide leading-tight drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)] w-full text-center">
            {title}
          </p>
          {subtitle && (
            <p className="text-white/95 font-extrabold text-[9px] uppercase tracking-wider mt-1 opacity-90 group-hover:text-white transition-colors duration-300 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.3)] text-center max-w-[120px] truncate">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </button>
  );
};
