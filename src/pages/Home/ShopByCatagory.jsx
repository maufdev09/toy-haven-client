import React, { useState } from "react";
import Select from "react-select";

const ShopByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    "Sports Car",
    "Truck",
    "Regular Car",
    "Mini Fire Truck",
    "Mini Police Car",
  ];

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption.va);
    console.log(selectedCategory);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Shop by Category - Toy Cars</h2>
      <div className="flex items-center justify-between mb-4">
        <div className="w-64">
          <Select
            className=" bg-red-500"
            value={selectedCategory}
            onChange={handleCategoryChange}
            options={categories.map((category) => ({
              value: category,
              label: category,
            }))}
            placeholder="Select Category"
          />
        </div>
        <button className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600">
          View Products
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {/* Render products based on selected category */}
      </div>
    </div>
  );
};

export default ShopByCategory;
