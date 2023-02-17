import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState({
    error: null,
    isLoaded: false,
    items: [],
  });
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    setProducts((t) => ({ ...t, isLoaded: true }));
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then(
        (data) => {
          console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴");
          setProducts((prev) => ({ ...prev, isLoaded: false, items: data }));
        },
        (err) => setProducts((t) => ({ ...t, error: err }))
      );

    return () => {
      console.log("🧹 깨끗하게 청소하는 일들을 합니다.");
    };
  }, [checked]);

  return (
    <>
      {products.error ? (
        <div>에러페이지 입니다... </div>
      ) : products.isLoaded ? (
        <div>로딩중입니다...</div>
      ) : (
        <>
          <input
            id="checkbox"
            type="checkbox"
            value={checked}
            onChange={handleChange}
          />
          <label htmlFor="checkbox">Show Only 🔥 Sale</label>
          <ul>
            {products.items.map((product) => (
              <li key={product.id}>
                <article>
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </article>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
