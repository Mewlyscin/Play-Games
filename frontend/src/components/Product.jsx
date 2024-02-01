import React, { useEffect, useState } from "react";
import axios from "axios";

function Product() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/product`)
      .then((res) => setData(res.data));
  }, []);

  console.info(data);

  return (
    <div className="text-purple font-medium text-2xl text-center p-7 flex flex-col gap-20">
      {data &&
        data.map((p) => (
          <div
            className="bg-black rounded-3xl p-7 flex flex-col items-center h-96 w-80"
            key={p.id}
          >
            {p.product_name} <br />
            <br />
            <img className="h-32 w-48" src={p.image} alt={p.image} />
            <br />
            {p.price}
            <br />
            <br />
            <button
              className="bg-purple text-base text-beige p-2 rounded-2xl transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none"
              type="button"
            >
              en savoir plus
            </button>
          </div>
        ))}
    </div>
  );
}

export default Product;
