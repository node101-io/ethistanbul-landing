const SkeletonCard = () => (
  <div className="rounded-4xl overflow-hidden border border-black animate-pulse bg-gray-100">
    <div className="relative h-40 sm:h-48 md:h-56 lg:max-h-64 w-full">
      <div className="absolute inset-0 bg-gray-200" />
    </div>
    <div className="p-4">
      <div className="h-4 w-2/3 bg-gray-300 rounded mb-2" />
      <div className="h-3 w-1/3 bg-gray-200 rounded mb-1" />
      <div className="h-3 w-1/2 bg-gray-200 rounded" />
    </div>
  </div>
);

export default SkeletonCard;
