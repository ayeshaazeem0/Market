// // components/ProductCard.js
import React from 'react';
import Image from 'next/image';

export default function ProductCard() {
  return (
    <div className="flex justify-center items-center w-screen gap-20">
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
        <div className="flex justify-between items-center container px-10 py-10">
      <Image
        src='/assests/grey.jpeg'
        alt='grey pic'
        width={500}
        height={500}
        className="w-full"
      />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Grey Fruit</div>
        <p className="text-gray-700 text-base">$1.99</p>
        <p className="text-gray-700 text-base">Category: Fruit</p>
        <p className="text-gray-700 text-base">Status: In Stock</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 flex items-center">
          <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
          <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
          <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
          <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
            {/* {Array(product.rating).fill().map((_, i) => (
              <svg key={i} className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
            ))} */}
          </span>
          <span className="ml-2 text-gray-600">4 stars</span>
        </div>
      </div>
    </div>




    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
        <div className="flex justify-between items-center container px-10 py-10">
      <Image
        src='/assests/grey.jpeg'
        alt='grey pic'
        width={500}
        height={500}
        className="w-full"
      />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Grey Fruit</div>
        <p className="text-gray-700 text-base">$1.99</p>
        <p className="text-gray-700 text-base">Category: Fruit</p>
        <p className="text-gray-700 text-base">Status: In Stock</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 flex items-center">
          <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
          <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
          <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
          <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
            {/* {Array(product.rating).fill().map((_, i) => (
              <svg key={i} className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
            ))} */}
          </span>
          <span className="ml-2 text-gray-600">4 stars</span>
        </div>
      </div>
    </div>






    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
        <div className="flex justify-between items-center container px-10 py-10">
      <Image
        src='/assests/grey.jpeg'
        alt='grey pic'
        width={500}
        height={500}
        className="w-full"
      />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Grey Fruit</div>
        <p className="text-gray-700 text-base">$1.99</p>
        <p className="text-gray-700 text-base">Category: Fruit</p>
        <p className="text-gray-700 text-base">Status: In Stock</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 flex items-center">
          <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
          <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
          <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
          <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
            {/* {Array(product.rating).fill().map((_, i) => (
              <svg key={i} className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
            ))} */}
          </span>
          <span className="ml-2 text-gray-600">4 stars</span>
        </div>
      </div>
    </div>





    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
        <div className="flex justify-between items-center container px-10 py-10">
      <Image
        src='/assests/grey.jpeg'
        alt='grey pic'
        width={500}
        height={500}
        className="w-full"
      />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Grey Fruit</div>
        <p className="text-gray-700 text-base">$1.99</p>
        <p className="text-gray-700 text-base">Category: Fruit</p>
        <p className="text-gray-700 text-base">Status: In Stock</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 flex items-center">
          <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
          <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
          <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
          <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
            {/* {Array(product.rating).fill().map((_, i) => (
              <svg key={i} className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
            ))} */}
          </span>
          <span className="ml-2 text-gray-600">4 stars</span>
        </div>
      </div>
    </div>







    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
        <div className="flex justify-between items-center container px-10 py-10">
      <Image
        src='/assests/grey.jpeg'
        alt='grey pic'
        width={500}
        height={500}
        className="w-full"
      />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Grey Fruit</div>
        <p className="text-gray-700 text-base">$1.99</p>
        <p className="text-gray-700 text-base">Category: Fruit</p>
        <p className="text-gray-700 text-base">Status: In Stock</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 flex items-center">
          <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
          <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
          <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
          <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
            {/* {Array(product.rating).fill().map((_, i) => (
              <svg key={i} className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
            ))} */}
          </span>
          <span className="ml-2 text-gray-600">4 stars</span>
        </div>
      </div>
    </div>
</div>
  );
};
