const Pill = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-white border border-black rounded-full px-6 py-2 text-lg font-medium text-black shadow text-center ${className}`}
  >
    {children}
  </div>
);

export default Pill;
