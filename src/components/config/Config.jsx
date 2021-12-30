import React, { useState } from "react";
import { useGetCategories, useGetProducts, useGetUsers } from "../../services/productsService";
import { randomProduct } from "../../utils/chooseRandomProduct";
import Checkbox from "./Checkbox";
import { ConfigStyles } from "./ConfigStyles";

const initialOption = [
  {
    name: "List of products",
    isActive: false
  },
  { name: "Total products", isActive: false },
  { name: "Total Customers", isActive: false },
  { name: "Latest Product", isActive: false },
  { name: "Display Categories", isActive: false }
];

const Config = () => {
  const [options, setOptions] = useState(initialOption);
  const [name, setName] = useState("");
  const [dashToDisplay, setDashToDisplay] = useState([]);
  const [checkbox, setCheckbox] = useState(() =>
    new Array(JSON.parse(window.localStorage.getItem("dashboard"))?.length).fill(false)
  );

  const randomProductNumber = () => randomProduct();

  const {
    data: products,
    isLoading: productsIsLoading,
    isSuccess: productsIsSuccess
  } = useGetProducts();
  const { data: users, isLoading: usersIsLoading, isSuccess: usersIsSuccess } = useGetUsers();
  const { data: categories, isLoading: categoriesIsLoading } = useGetCategories();

  if (productsIsLoading || usersIsLoading || categoriesIsLoading) {
    return <h1>Loading...</h1>;
  }

  const handleChange = (index) => (event) => {
    const toChange = [...options];

    toChange[index].isActive = event.target.checked;
    setOptions(toChange);
  };

  const handleClick = () => {
    const optionToSave = { name };
    if (window.localStorage.getItem("dashboard")) {
      const storage = JSON.parse(window.localStorage.getItem("dashboard"));
      optionToSave.array = options;
      storage.push(optionToSave);
      window.localStorage.setItem("dashboard", JSON.stringify(storage));
    } else {
      optionToSave.array = options;
      window.localStorage.setItem("dashboard", JSON.stringify([optionToSave]));
    }
  };

  const handleDisplayDash = (array, index) => {
    const toCheck = [...checkbox];
    toCheck[index] = !toCheck[index];
    setCheckbox(toCheck);

    setDashToDisplay(array);
  };

  return (
    <ConfigStyles>
      Create a dashboard:
      {options.map((o, i) => (
        <label key={o.name}>
          {o.name}
          <input type="checkbox" name={o.name} checked={o.isActive} onChange={handleChange(i)} />
        </label>
      ))}
      <form>
        <input
          required
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={handleClick}>Create Dashboard</button>
      </form>
      {window.localStorage.getItem("dashboard") && (
        <>
          <p>Display your dashboard:</p>
          <ul>
            {JSON.parse(window.localStorage.getItem("dashboard")).map((dash, index) => (
              <div key={dash.name}>
                <Checkbox
                  dash={dash}
                  checkbox={checkbox[index]}
                  handleDisplayDash={() => handleDisplayDash(dash.array, index)}
                />
              </div>
            ))}
          </ul>
        </>
      )}
      {dashToDisplay.length > 1 &&
        dashToDisplay.map((d) =>
          d.isActive && productsIsSuccess && d.name === "List of products" ? (
            products.map((p) => (
              //  title, picture, category, price and description.
              <>
                <h1>{p.title}</h1>
                <img src={p.image} alt="product" />
                <p>{p.price}</p>
                <p>{p.description}</p>
              </>
            ))
          ) : // {/* Total Products Count */}
          d.isActive && productsIsSuccess && d.name === "Total products" ? (
            <p>{products.length}</p>
          ) : // {/* Total Customer Count */}
          d.isActive && usersIsSuccess && d.name === "Total Customers" ? (
            <p>{users.length}</p>
          ) : // {/* Latest Product */}
          d.isActive && productsIsSuccess && d.name === "Latest Product" ? (
            <>
              <h1>{products[randomProductNumber].title}</h1>
              <img src={products[randomProductNumber].image} alt="product" />
              <p>{products[randomProductNumber].price}</p>
              <p>{products[randomProductNumber].description}</p>
            </>
          ) : // {/* Display Categories */}
          d.isActive && productsIsSuccess && d.name === "Display Categories" ? (
            categories.map((c) => (
              //  title, picture, category, price and description.
              <p key={c}>{c}</p>
            ))
          ) : null
        )}
      {/* List of products */}
    </ConfigStyles>
  );
};

export default Config;
