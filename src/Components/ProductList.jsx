import axios from 'axios';
import Header from './Header';
import React, { useEffect, useState } from 'react';
import Product from './Product';
import ClipLoader from 'react-spinners/ClipLoader';


const ProductList = () => {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
const [searchItem, setSearchItem] = useState('');

  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  };

  const getAllProducts = () => {
    setLoading(true);
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <Header search={handleSearch} />
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader loading={loading} size={150} />
        </div>
      ) : (
        <div className=" sm:grid gap-2 sm:grid-cols-[300px_300px_300px_300px] sm:w-full sm:ml-10 grid grid-cols-[200px_200px] pt-[80px] justify-center">
          {data
            .filter((product) =>
              searchItem
                ? product.title.toLowerCase().includes(searchItem.toLowerCase())
                : true
            )
            .map((item) => (
              <Product key={item.id} items={item} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
