interface FilterSortBarProps {
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
}

const FilterSortBar = ({ onCategoryChange, onSortChange }: FilterSortBarProps) => {
  return (
    <div className="flex justify-between items-center mb-12 font-mono text-xs uppercase tracking-widest">
      <div className="flex gap-6">
        {['All', 'Ceramics', 'Candles', 'Textiles'].map((cat) => (
          <button key={cat} onClick={() => onCategoryChange(cat)} className="hover:text-accent transition">
            {cat}
          </button>
        ))}
      </div>
      <select onChange={(e) => onSortChange(e.target.value)} className="bg-bg text-ink border-none outline-none cursor-pointer">
        <option value="newest">Newest</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="alpha-asc">Alphabetical: A-Z</option>
        <option value="alpha-desc">Alphabetical: Z-A</option>
      </select>
    </div>
  );
};

export default FilterSortBar;
