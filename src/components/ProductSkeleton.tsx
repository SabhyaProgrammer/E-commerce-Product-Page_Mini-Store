const ProductSkeleton = () => {
  return (
    <div className="card relative border-2 border-ink p-6 animate-pulse">
      <div className="w-full aspect-square bg-ink/20 mb-6" />
      <div className="h-8 bg-ink/20 mb-2 w-3/4" />
      <div className="h-4 bg-ink/20 w-1/4" />
    </div>
  );
};

export default ProductSkeleton;
