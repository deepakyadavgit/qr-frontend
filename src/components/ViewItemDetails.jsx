import React from 'react';

const ViewItemDetails = () => {
  const item = {
    name: 'Mocha',
    prices: [
      { size: 'small', price: 60, originalPrice: 80, discount: 20 },
      { size: 'medium', price: 75, originalPrice: 95, discount: 20 },
      { size: 'large', price: 90, originalPrice: 110, discount: 20 }
    ],
    image: "coffee-special.jpg",
    description: 'The basis of Cafe Mocha is a shot of espresso combined with a chocolate powder or syrup, followed by milk or cream. It is a variant of a latte, in the sense that it is often 1/3 espresso and 2/3 steamed milk.',
    category: 'Vegetarian',
    keyIngredients: ['Milk', 'Coffee powder'],
    servingSize: '250ml'
  };

  return (
    <>
      <div className="flex justify-center min-h-screen bg-slate-700">
        <div className="container w-full sm:w-96 bg-[#D9D9D9]">
          {/* component heading */}
          <div className="bg-black text-white py-6">
            <h1 className="text-2xl px-6">{item.name}</h1>

            {/* Pricing Section */}
            <div className="discounted-rates  flex justify-between px-6 mt-3">
              <div><span className='font-semibold'>$50 </span><span className='text-sm'>(Small)</span></div>
              <div><span className='font-semibold'>$70 </span><span className='text-sm'>(Medium)</span></div>
              <div><span className='font-semibold'>$90 </span><span className='text-sm'>(Large)</span></div>

            </div>
            <div className="original-rates  flex justify-between px-6">
              <div><span className='text-sm line-through'>$100 </span><span className='text-sm'>(50% off)</span></div>
              <div><span className='text-sm line-through'>$140 </span><span className='text-sm'>(50% off)</span></div>
              <div><span className='text-sm line-through'>$180 </span><span className='text-sm'>(50% off)</span></div>

            </div>
          </div>

          {/* component middle section */}
          <div className="flex flex-col gap-5 py-5 p-5">


            {/* Image Section */}
            <div className="flex justify-center mb-4">
              <img src={item.image} alt="Item" className="rounded-lg w-full" />
            </div>

            {/* Description Section */}
            <div>
              <h3 className="text-lg font-semibold">Description:</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>

            {/* Category Section */}
            <div>
              <h3 className="text-lg font-semibold">Type:</h3>
              <p className="text-gray-700">{item.category}</p>
            </div>

            {/* Key Ingredients Section */}
            <div>
              <h3 className="text-lg font-semibold">Key Ingredients:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {item.keyIngredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            {/* Serving Size Section */}
            <div>
              <h3 className="text-lg font-semibold">Serving size:</h3>
              <p className="text-gray-700">{item.servingSize}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-black text-white py-6 text-center">
            <p>Served with ❤️</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewItemDetails;
