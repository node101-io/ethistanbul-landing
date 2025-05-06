import { useEffect, useRef, useState } from "react";

const LiquidButton: React.FC<{
  children: React.ReactNode;
  isActive?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  activeColor?: string;
}> = ({
  children,
  isActive,
  disabled = false,
  onClick,
  className,
  activeColor = "bg-purple-500",
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [wasActive, setWasActive] = useState(isActive);
  const [currentColor, setCurrentColor] = useState("#D1BAFF");

  const brandColors = ["#D1BAFF", "#C0FAB2", "#FFA988", "#82C3FF", "#F7A7E1"];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * brandColors.length);
    return brandColors[randomIndex];
  };

  useEffect(() => {
    if (isActive) {
      setWasActive(true);
    } else if (wasActive && !isActive) {
      setWasActive(false);
    }
  }, [isActive, wasActive]);

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!buttonRef.current || isActive || disabled) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const randomColor = getRandomColor();
    setCurrentColor(randomColor);
    setMousePosition({ x, y });
    setIsHovered(true);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (!buttonRef.current || disabled) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
    setIsHovered(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (onClick) onClick(e);
  };

  return (
    <button
      ref={buttonRef}
      disabled={disabled}
      className={`relative overflow-hidden px-6 pb-2 pt-1 rounded-full w-full sm:w-auto border transition-all duration-300 ${
        disabled
          ? "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
          : `${className} ${
              isActive ? activeColor + " text-white" : "border-black"
            }`
      }`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={!disabled && !isActive ? { background: "white" } : undefined}
    >
      {!isActive && !disabled && (
        <div className="absolute inset-0 pointer-events-none">
          <span
            className="absolute rounded-full"
            style={{
              width: "300%",
              height: "500%",
              top: mousePosition.y,
              left: mousePosition.x,
              transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0})`,
              transition: `transform 0.4s cubic-bezier(${
                isHovered ? "0.25, 0.46, 0.45, 0.94" : "0.55, 0.085, 0.68, 0.53"
              })`,
              borderRadius: "50%",
              backgroundColor: currentColor,
            }}
          />
        </div>
      )}

      <span className="relative z-10 flex flex-row gap-2 items-center">
        {children}
      </span>
    </button>
  );
};

export default LiquidButton;
