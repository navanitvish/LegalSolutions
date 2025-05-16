// FeatureCard.jsx
export const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
    
    <div className="relative bg-white rounded-2xl p-8 pt-12 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 h-64 flex flex-col hover:border-transparent overflow-hidden">
      {Icon && (
        <div className="flex justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl blur group-hover:blur-md transition-all duration-300 opacity-20" />
            <div className="relative w-14 h-14 flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl group-hover:scale-110 transition-all duration-300">
              <Icon className="w-7 h-7 text-purple-600 group-hover:text-indigo-600 transition-colors duration-300" />
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-6 text-left overflow-y-auto pr-1 flex-grow">
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed line-clamp-4">{description}</p>
      </div>
      
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
    </div>
  </div>
);