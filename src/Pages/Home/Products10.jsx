import  { useState } from "react";

const Products10 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of 10 cards with heading, image, and long description
  const cards = [
    {
      id: 1,
      heading: "Card 1",
      img: "https://images.pexels.com/photos/7979441/pexels-photo-7979441.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem.",
    },
    {
      id: 2,
      heading: "Card 2",
      img: "https://images.pexels.com/photos/8111879/pexels-photo-8111879.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem.",
    },
    {
        id: 3,
        heading: "Card 1",
        img: "https://images.pexels.com/photos/27155545/pexels-photo-27155545/free-photo-of-brunette-woman-sitting-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem.",
      },
      {
        id: 4,
        heading: "Card 2",
        img: "https://images.pexels.com/photos/7979435/pexels-photo-7979435.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem.",
      },

      {
        id: 5,
        heading: "Card 1",
        img: "https://images.pexels.com/photos/7979597/pexels-photo-7979597.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem.",
      },
      {
        id: 6,
        heading: "Card 2",
        img: "https://images.pexels.com/photos/7979439/pexels-photo-7979439.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem.",
      },

      {
        id: 7,
        heading: "Card 1",
        img: "https://images.pexels.com/photos/8111853/pexels-photo-8111853.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem.",
      },
      {
        id: 8,
        heading: "Card 2",
        img: "https://images.pexels.com/photos/7841797/pexels-photo-7841797.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem.",
      },

      {
        id: 9,
        heading: "Card 1",
        img: "https://images.pexels.com/photos/7979588/pexels-photo-7979588.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem.",
      },
    // Add 8 more card objects with similar structure...
    {
      id: 10,
      heading: "Card 10",
      img: "https://images.pexels.com/photos/7841811/pexels-photo-7841811.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem.",
    },
  ];

  const totalCards = cards.length;
  const cardsToShow = 3;

  // Handle next and previous
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalCards - cardsToShow : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalCards - cardsToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
        <h1 className="text-5xl font-bold text-center">Products 10</h1>
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          className="absolute left-0 z-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
          onClick={handlePrev}
        >
          &lt;
        </button>

        {/* Card Container */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex-none w-1/3 p-4"
                style={{ minWidth: "33.3333%" }}
              >
                <div className="bg-white shadow-lg rounded-lg p-4">
                  <img
                    className="w-full h-40 object-cover rounded-t-lg"
                    src={card.img}
                    alt={card.heading}
                  />
                  <h3 className="text-xl font-semibold mt-4">{card.heading}</h3>
                  <p className="text-gray-600 mt-2 text-sm h-32 overflow-hidden overflow-ellipsis">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 z-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>

      {/* Dots for navigation */}
      <div className="mt-4 flex justify-center space-x-2">
        {Array.from({ length: totalCards - cardsToShow + 1 }).map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(idx)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Products10;
