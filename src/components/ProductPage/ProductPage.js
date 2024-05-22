import React, { useState } from 'react';

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const colors = ['Pink', 'Beige', 'Khaki', 'Red', 'Lake Blue'];
  const sizes = ['Small', 'Medium', 'Large'];

  const handleQuantityChange = (increment) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + increment));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/2">
          <img 
            className="w-full h-auto rounded-lg shadow-md" 
            src="https://via.placeholder.com/600x400" 
            alt="Product"
          />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">Product Title</h1>
          <p className="text-xl font-semibold mb-1 text-red-500">रू 2,600</p>
          <p className="text-lg font-semibold mb-1 text-gray-700 line-through">रू 2,000</p>
          <p className="text-green-500 font-bold mb-4">23% OFF</p>
          <p className="text-gray-600 mb-4">Shipping is calculated at checkout</p>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold text-gray-700">Choose Color</label>
            <div className="flex space-x-2">
              {colors.map((color) => (
                <button 
                  key={color} 
                  className={`px-4 py-2 rounded-lg border ${selectedColor === color ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold text-gray-700">Choose Size</label>
            <div className="flex space-x-2">
              {sizes.map((size) => (
                <button 
                  key={size} 
                  className={`px-4 py-2 rounded-lg border ${selectedSize === size ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4 flex items-center">
            <label className="block text-sm font-semibold text-gray-700 mr-4">Quantity</label>
            <button 
              className="px-4 py-2 bg-gray-200 rounded-l-lg"
              onClick={() => handleQuantityChange(-1)}
            >-</button>
            <input 
              type="number" 
              value={quantity} 
              readOnly 
              className="w-16 p-2 border-t border-b text-center"
            />
            <button 
              className="px-4 py-2 bg-gray-200 rounded-r-lg"
              onClick={() => handleQuantityChange(1)}
            >+</button>
          </div>

          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600">
            Add to Cart
          </button>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p className="text-gray-700 mb-2"><strong>Suggested retail price:</strong> ¥99.00</p>
            <p className="text-gray-700 mb-2"><strong>Origin:</strong> Guangzhou</p>
            <p className="text-gray-700 mb-2"><strong>Item No.:</strong> JME074A3001</p>
            <p className="text-gray-700 mb-2"><strong>Supply category:</strong> Spot</p>
            <p className="text-gray-700 mb-2"><strong>Inventory type:</strong> Whole single</p>
            <p className="text-gray-700 mb-2"><strong>Inventory:</strong> Yes</p>
            <p className="text-gray-700 mb-2"><strong>Source of the image:</strong> Other sources</p>
            <p className="text-gray-700 mb-2"><strong>Fabric name:</strong> Knitting</p>
            <p className="text-gray-700 mb-2"><strong>The content of main fabric ingredients:</strong> 51%-70%</p>
            <p className="text-gray-700 mb-2"><strong>Main fabric composition:</strong> Acrylic</p>
            <p className="text-gray-700 mb-2"><strong>Pattern:</strong> Flowers</p>
            <p className="text-gray-700 mb-2"><strong>Thickness:</strong> Moderate</p>
            <p className="text-gray-700 mb-2"><strong>Yarn thickness:</strong> Ordinary wool</p>
            <p className="text-gray-700 mb-2"><strong>Sweater craft:</strong> Knitting</p>
            <p className="text-gray-700 mb-2"><strong>Combination:</strong> One-piece suit</p>
            <p className="text-gray-700 mb-2"><strong>Style:</strong> OL commuting</p>
            <p className="text-gray-700 mb-2"><strong>Style:</strong> Cardigan</p>
            <p className="text-gray-700 mb-2"><strong>Edition type:</strong> Loose</p>
            <p className="text-gray-700 mb-2"><strong>Sleeve Type:</strong> Regular sleeve</p>
            <p className="text-gray-700 mb-2"><strong>Listing year/season:</strong> Fall 2020</p>
            <p className="text-gray-700 mb-2"><strong>Collar:</strong> V-neck</p>
            <p className="text-gray-700 mb-2"><strong>Clothing placket:</strong> Single-breasted</p>
            <p className="text-gray-700 mb-2"><strong>Sleeve Length:</strong> Long sleeve</p>
            <p className="text-gray-700 mb-2"><strong>Popular elements:</strong> Other</p>
            <p className="text-gray-700 mb-2"><strong>Length:</strong> Short style (40cm＜length≤50cm)</p>
            <p className="text-gray-700 mb-2"><strong>Craft:</strong> Embroidery/embroidery</p>
            <p className="text-gray-700 mb-2"><strong>Colour:</strong> Pink, beige, khaki, red, lake blue</p>
            <p className="text-gray-700 mb-2"><strong>Whether cross-border export exclusive supply source:</strong> Yes</p>
            <p className="text-gray-700 mb-2"><strong>Main sales area:</strong> Africa, Europe, South America, Southeast Asia, North America, Northeast Asia, Middle East</p>
            <p className="text-gray-700 mb-2"><strong>Size:</strong> One size</p>
            <p className="text-gray-700 mb-2"><strong>Main downstream platforms:</strong> eBay, Amazon, wish, AliExpress, independent station, LAZADA</p>
            <p className="text-gray-700 mb-2"><strong>Suitable for age:</strong> 30-34 years old</p>
            <p className="text-gray-700 mb-2"><strong>Style type:</strong> Temperament commute</p>
            <p className="text-gray-700 mb-2"><strong>Dress style:</strong> Cardigan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
