// import { useState } from 'react';
// import { servicesData } from '../../utils/servicesData';

// const ServicesDropdown = () => {
//   const [openMainMenu, setOpenMainMenu] = useState(false);
//   const [openCategory, setOpenCategory] = useState("");
//   const [openSubCategory, setOpenSubCategory] = useState("");
//   const [openDetailCategory, setOpenDetailCategory] = useState("");

//   return (
//     <div className="relative">
//       <button
//         onMouseEnter={() => setOpenMainMenu(true)}
//         className="text-[15px] font-semibold py-2 md:py-0 transition hover:text-green-500 ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
//       >
//         Services
//       </button>

//       {openMainMenu && (
//         <div
//           className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md mt-1 z-50"
//           onMouseLeave={() => {
//             setOpenMainMenu(false);
//             setOpenCategory("");
//             setOpenSubCategory("");
//             setOpenDetailCategory("");
//           }}
//         >
//           {Object.entries(servicesData).map(([category, subCategories]) => (
//             <div
//               key={category}
//               className="relative"
//               onMouseEnter={() => setOpenCategory(category)}
//             >
//               <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
//                 <span>{category}</span>
//                 <span className="text-gray-400">›</span>
//               </div>

//               {openCategory === category && (
//                 <div className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-md">
//                   {Object.entries(subCategories).map(([subCategory, items]) => (
//                     <div
//                       key={subCategory}
//                       className="relative"
//                       onMouseEnter={() => setOpenSubCategory(subCategory)}
//                     >
//                       <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
//                         <span>{subCategory}</span>
//                         <span className="text-gray-400">›</span>
//                       </div>

//                       {openSubCategory === subCategory && (
//                         <div className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-md">
//                           {Object.entries(items).map(([itemName, itemData]) => (
//                             <div
//                               key={itemName}
//                               className="relative"
//                               onMouseEnter={() => setOpenDetailCategory(itemName)}
//                             >
//                               <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
//                                 <span>{itemName}</span>
//                                 {itemData.subcategories && <span className="text-gray-400">›</span>}
//                               </div>

//                               {openDetailCategory === itemName && itemData.subcategories && (
//                                 <div className="absolute left-full top-0 w-96 bg-white shadow-lg rounded-md max-h-96 overflow-y-auto">
//                                   {itemData.subcategories.map((subItem) => (
//                                     <a
//                                       key={subItem.path}
//                                       href={subItem.path}
//                                       className="block px-4 py-2 hover:bg-gray-100 text-gray-700 no-underline text-sm"
//                                     >
//                                       {subItem.name}
//                                     </a>
//                                   ))}
//                                 </div>
//                               )}
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ServicesDropdown;



import { useState } from 'react';
import { servicesData } from '../../utils/servicesData';
import { Link } from 'react-router-dom';
import { LuChevronDown } from "react-icons/lu";
const ServicesDropdown = () => {
  const [openMainMenu, setOpenMainMenu] = useState(false);
  const [openCategory, setOpenCategory] = useState("");

  return (
    <div className="relative">
      <button
        onMouseEnter={() => setOpenMainMenu(true)}
        className="text-lg font-semibold py-2 md:py-0 flex items-center justify-center gap-1 transition hover:text-purple-500 ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
      >
        Services <LuChevronDown />
      </button>

      {openMainMenu && (
        <div
          className="absolute top-full right-28 w-64 bg-white shadow-lg rounded-md mt-1 z-50"
          onMouseLeave={() => {
            setOpenMainMenu(false);
            setOpenCategory("");
          }}
        >
          {Object.entries(servicesData).map(([category, data]) => (
            <div
              key={category}
              className="relative"
              onMouseEnter={() => setOpenCategory(category)}
            >
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center ">
                <span>{category}</span>
                {data.subcategories && <span className="text-gray-400">›</span>}
              </div>

              {openCategory === category && data.subcategories && (
                <div className="absolute left-full top-0 w-96 bg-white shadow-lg rounded-md ">
                  {data.subcategories.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className="block px-4 py-2 hover:bg-gray-100 text-gray-700 no-underline text-sm text-left"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;



