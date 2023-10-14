import React, { useEffect, useState } from "react";
import Select from "react-select";
import CarsCart from "./CarsCart";
// import CarsCart from "./CarsCart"; // Assuming it's not used in this snippet

const ShopByCategory = () => {
  const [cars, setCars] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "All Cars" },
    { value: "sportsCar", label: "Sports Car" },
    { value: "truck", label: "Truck" },
    { value: "regularCar", label: "Regular Car" },
    { value: "miniFireTruck", label: "Mini Fire Truck" },
    { value: "miniPoliceCar", label: "Mini Police Car" },
  ];

  useEffect(() => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-maufdev09-ojytxsx64-maufdev09.vercel.app/allcars/category/${selectedCategory}`
    )
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [selectedCategory]);

  console.log(selectedCategory);

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption.value);
    console.log(selectedOption.value);
  };

  //   useEffect(() => {
  //     setSelectedCategory(categories[0].value);
  //   }, []); // Run only once on component mount to initialize selectedCategory

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-10">
        Buy Cars
      </h3>
      <h2 className="text-2xl font-bold mb-4">Shop by Category - Toy Cars</h2>
      <div className="flex items-center justify-between mb-4">
        <div className="w-64">
          <Select
            value={categories.find((c) => c.value === selectedCategory)}
            onChange={handleCategoryChange}
            options={categories}
            placeholder="Select Category"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4  ">
        {cars.map((car) => (
          <CarsCart key={car._id} car={car}></CarsCart>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
