import { Check } from 'lucide-react';

const ProductsCard = ({card}) => {
  const {name, image, description, price, period, tag, tagType, features} = card;
  

  const getTagStyles = (type) => {
    switch (type) {
      case 'best-seller': return 'bg-amber-100 text-amber-700';
      case 'popular': return 'bg-indigo-100 text-indigo-700';
      case 'new': return 'bg-emerald-100 text-emerald-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
   <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:scale-105">
      
      <div>
        {/* Top Header: Image and Tag */}
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 p-2 rounded-full border border-slate-100 flex items-center justify-center bg-slate-50 overflow-hidden">
            <img src={image} alt={name} className="w-8 h-8 object-contain" />
          </div>
          {tag && (
            <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${getTagStyles(tagType)}`}>
              {tag}
            </span>
          )}
        </div>

        {/* Title and Description */}
        <div className="text-left">
          <h3 className="text-xl font-bold text-slate-800 mb-2">{name}</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            {description}
          </p>
        </div>

        {/* Price Section */}
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-3xl font-bold text-slate-800">${price}</span>
          <span className="text-slate-400 text-sm italic">/{period}</span>
        </div>

        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
              <Check className="w-4 h-4 text-emerald-500" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <button className="w-full py-3 bg-linear-to-r from-[#631edb] to-[#7b3fb2] text-white rounded-full font-bold transition-all group-hover:bg-[#7b3fb2] active:scale-95 shadow-lg shadow-indigo-100">
        Buy Now
      </button>
      
    </div>
  );
};

export default ProductsCard;