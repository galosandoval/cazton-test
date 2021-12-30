import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useGetCategories, useGetProducts, useGetUsers } from "../../services/productsService";
import { randomProduct } from "../../utils/chooseRandomProduct";
import Checkbox from "./Checkbox";
import { add } from "./configSlice";
import { Card, CheckBoxLabel, ConfigStyles, TextInput, Top } from "./ConfigStyles";

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
  const dispatch = useDispatch();
  const config = useSelector((state) => state.config);

  const [options, setOptions] = useState(initialOption);
  const [name, setName] = useState("");
  const [dashToDisplay, setDashToDisplay] = useState([]);
  const [checkbox, setCheckbox] = useState(() => new Array(config.length).fill(false));

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
    console.log(toChange);

    toChange[index].isActive = event.target.checked;
    setOptions(toChange);
  };

  const handleClick = (event) => {
    event.preventDefault();

    const optionToSave = { name, array: options };
    dispatch(add(optionToSave));

    const setToFalse = options.map((o) => ({
      name: o.name,
      isActive: false
    }));

    setOptions(setToFalse);
    setName("");
  };

  const handleDisplayDash = (array, index) => {
    const toCheck = [...checkbox];
    toCheck[index] = !toCheck[index];
    setCheckbox(toCheck);

    setDashToDisplay(array);
  };

  return (
    <ConfigStyles>
      <Top>
        <Card>
          Create a dashboard:
          {options.map((o, i) => (
            <CheckBoxLabel key={o.name}>
              {o.name}
              <input
                type="checkbox"
                name={o.name}
                checked={o.isActive}
                onChange={handleChange(i)}
              />
            </CheckBoxLabel>
          ))}
          <form>
            <TextInput
              required
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <button onClick={handleClick}>Create Dashboard</button>
          </form>
        </Card>
        {config.value.length > 0 && (
          <Card>
            <p>Display your dashboard:</p>
            <ul>
              {config.value.map((dash, index) => (
                <div key={dash.name + index}>
                  <Checkbox
                    dash={dash}
                    checkbox={checkbox[index]}
                    handleDisplayDash={() => handleDisplayDash(dash.array, index)}
                  />
                </div>
              ))}
            </ul>
          </Card>
        )}
      </Top>
      {dashToDisplay.length > 0 &&
        dashToDisplay.map((d) =>
          d.isActive && productsIsSuccess && d.name === "List of products" ? (
            products.map((p, i) => (
              //  title, picture, category, price and description.
              <Card key={p?.title + i}>
                <h1>{p.title}</h1>
                <img src={p.image} alt="product" />
                <p>{p.price}</p>
                <p>{p.description}</p>
              </Card>
            ))
          ) : // {/* Total Products Count */}
          d.isActive && productsIsSuccess && d.name === "Total products" ? (
            <Card key={d.name + products.length}>
              <p>{products.length}</p>
            </Card>
          ) : // {/* Total Customer Count */}
          d.isActive && usersIsSuccess && d.name === "Total Customers" ? (
            <Card key={d.name + users.length + " users"}>
              <p>{users.length}</p>
            </Card>
          ) : // {/* Latest Product */}
          d.isActive && productsIsSuccess && d.name === "Latest Product" ? (
            <Card key={d.name + " product"}>
              <div>
                <h1>{products[randomProductNumber()]?.title}</h1>
                <img src={products[randomProductNumber()]?.image} alt="product" />
                <p>{products[randomProductNumber()]?.price}</p>
                <p>{products[randomProductNumber()]?.description}</p>
              </div>
            </Card>
          ) : // {/* Display Categories */}
          d.isActive && productsIsSuccess && d.name === "Display Categories" ? (
            categories.map((c) => (
              //  title, picture, category, price and description.
              <Card key={c}>
                <p>{c}</p>
              </Card>
            ))
          ) : null
        )}
      {/* List of products */}
    </ConfigStyles>
  );
};

export default Config;
