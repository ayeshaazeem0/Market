"use client"
import React, { useState } from 'react';
import Link from 'next/link';

interface Errors {
  name?: string;
  image?: string;
  status?: string;
  price?: string;
  totalSales?: string;
  category?: string;
}

const ProductForm = () => {
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState<Errors>({});

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const validateForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const newErrors: Errors = {};

    const name = form.elements.namedItem('name') as HTMLInputElement;
    const image = form.elements.namedItem('image') as HTMLInputElement;
    const status = form.elements.namedItem('status') as HTMLSelectElement;
    const price = form.elements.namedItem('price') as HTMLInputElement;
    const totalSales = form.elements.namedItem('totalSales') as HTMLInputElement;
    const category = form.elements.namedItem('category') as HTMLInputElement;

    if (!name.value) {
      newErrors.name = 'Product Name is required';
    }

    if (!image.value) {
      newErrors.image = 'Product Image is required';
    }

    if (!status.value) {
      newErrors.status = 'Status is required';
    }

    if (!price.value || parseFloat(price.value) <= 0) {
      newErrors.price = 'Valid Price is required';
    }

    if (!totalSales.value || parseInt(totalSales.value) < 0) {
      newErrors.totalSales = 'Valid Total Sales is required';
    }

    if (!category.value) {
      newErrors.category = 'Category is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      form.submit();
    }
  };

  return (
    <div className="container mx-auto mt-20">
      <form className="max-w-lg mx-auto bg-white p-8 rounded shadow-lg" onSubmit={validateForm}>
        <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Product Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.image && <span className="text-red-500 text-sm">{errors.image}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
            Status
          </label>
          <select
            id="status"
            name="status"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Draft">Draft</option>
          </select>
          {errors.status && <span className="text-red-500 text-sm">{errors.status}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.price && <span className="text-red-500 text-sm">{errors.price}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalSales">
            Total Sales
          </label>
          <input
            type="number"
            id="totalSales"
            name="totalSales"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.totalSales && <span className="text-red-500 text-sm">{errors.totalSales}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.category && <span className="text-red-500 text-sm">{errors.category}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Rating
          </label>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`h-6 w-6 cursor-pointer ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => handleRating(star)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          <Link href="/products">Submit</Link>
        </button>
      </form>
    </div>
  );
};

export default ProductForm;


