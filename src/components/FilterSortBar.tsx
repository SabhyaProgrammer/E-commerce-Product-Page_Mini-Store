interface FilterSortBarProps {
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
}

const FilterSortBar = ({ onCategoryChange, onSortChange }: FilterSortBarProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12 font-mono text-xs uppercase tracking-widest sticky top-[73px] z-30 bg-bg/95 backdrop-blur-md py-4 -mx-[4vw] px-[4vw] border-b border-ink/10">
      <div className="flex gap-6 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
        {['All', 'Ceramics', 'Candles', 'Textiles'].map((cat) => (
          <button 
            key={cat} 
            onClick={() => onCategoryChange(cat)} 
            className="hover:text-accent transition-colors whitespace-nowrap relative group"
          >
            {cat}
            <span className="absolute -bottom-1 left-0 h-px bg-accent w-0 group-hover:w-full transition-all duration-300" />
          </button>
        ))}
      </div>
      <select 
        onChange={(e) => onSortChange(e.target.value)} 
        className="bg-bg text-ink border border-ink/20 p-2 outline-none cursor-pointer hover:border-ink transition-colors rounded-sm"
      >
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
