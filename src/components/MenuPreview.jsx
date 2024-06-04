import axios from "axios";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import ViewItemDetails from "./ViewItemDetails";

const CustomerView = () => {
  const userId = localStorage.getItem("userId");
  const [items, setItems] = React.useState([]);
  const [businessName, setBusinessName] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState(null);
  const location = useLocation();
  const email = location.pathname.slice(1);
  React.useEffect(() => {
    const fetchItems = async () => {
      // Replace with actual API call
      try {
        const res = await axios.get(
          userId
            ? `http://localhost:5000/api/items/menuPreview/${userId}`
            : `http://localhost:5000/api/menu/${email}`
        );
        console.log(res);
        if (res.data.success) {
          setItems(res.data.data.items);
          setBusinessName(res.data.data.businessName);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
  }, []);

  const todaysSpecial = items.filter((item) => {
    return item.isSpecial === true;
  });

  const categorizedProducts = items.reduce((categories, item) => {
    const categoryId = item.category._id;
    const existingCategory = categories.find((cat) => cat._id === categoryId);

    if (existingCategory) {
      existingCategory.items.push(item);
    } else {
      categories.push({
        _id: categoryId,
        name: item.category.name,
        items: [item],
        createdAt: item.category.createdAt, // Add category creation date
      });
    }

    return categories;
  }, []);

  // Sort categorizedProducts by category creation date
  categorizedProducts.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  console.log(categorizedProducts);
  console.log(todaysSpecial);

  return (
    <>
      {!selectedItem ? (
        <div className="parent-bg flex justify-center  bg-slate-700">
          <div className="text-center border sm:w-96">
            <div className="div bg-black text-white py-6">
              <h1 className="text-2xl">{`${businessName} Welcomes you!`}</h1>
            </div>
            {/* main section */}
            <div className="center-content p-2 border-5 bg-white">
              <div className="specials mb-12 bg-yellow">
                <h2 className="text-xl font-semibold mb-4">
                  {"Must check our Today's Specials:"}
                </h2>
                {/* specials image */}
                <img
                  src="coffee-special.jpg"
                  alt="Today's Special"
                  className="specials-image w-full max-w-md mx-auto mb-6 rounded-lg shadow-lg"
                />

                {/* today's special box */}
                <div className="specials-list bg-[#D9D9D9] rounded-md py-2">
                  <p className="text-xl font-semibold">{"Today's Special"}</p>
                  {/* item-1 */}
                  {todaysSpecial.map((item) => (
                    <div
                      key={item._id}
                      className="item flex flex-col gap-2 p-2 bg-white m-2 mb-4 rounded-md"
                    >
                      <div className="name-details flex justify-between">
                        <div className="name font-semibold">{item.name}</div>
                        <div className="details">
                          <p
                            onClick={() => setSelectedItem(item)}
                            className="text-blue-500 hover:underline"
                          >
                            Details
                          </p>
                        </div>
                      </div>
                      <div className="rates flex justify-between">
                        {item.pricing &&
                          item.pricing.map((pricing) => (
                            <div key={pricing._id}>
                              <span className="font-semibold">
                                ₹
                                {pricing.amount * ((100 - item.discount) / 100)}{" "}
                              </span>
                              <span className="text-sm">
                                ({pricing.servingName})
                              </span>
                            </div>
                          ))}
                        {item.price && (
                          <div>
                            <span className="font-semibold">
                              ₹{item.price * ((100 - item.discount) / 100)}{" "}
                            </span>
                            <span className="text-sm">({item?.quantity || ""})</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* other menu categories starts here */}
              <div className="menu-categories-heading">
                <h2 className="text-xl font-semibold mb-4 text-left">
                  Menu Categories:
                </h2>
              </div>
              {categorizedProducts.map((category) => (
                <div
                  key={category._id}
                  className="bg-[#D9D9D9] rounded-md my-4 py-2"
                >
                  <p className="text-xl font-semibold">{category.name}</p>
                  {/* item-1 */}
                  {category.items.map((item) => (
                    <div
                      key={item._id}
                      className="item flex flex-col gap-2 p-2 bg-white m-2 mb-4 rounded-md"
                    >
                      <div className="name-details flex justify-between">
                        <div className="name font-semibold">{item.name}</div>
                        <div className="details">
                          <p
                            onClick={() => setSelectedItem(item)}
                            className="text-blue-500 hover:underline"
                          >
                            Details
                          </p>
                        </div>
                      </div>
                      <div className="rates flex justify-between">
                        {item.pricing &&
                          item.pricing.map((pricing) => (
                            <div key={pricing._id}>
                              <span className="font-semibold">
                                ₹
                                {pricing.amount * ((100 - item.discount) / 100)}{" "}
                              </span>
                              <span className="text-sm">
                                ({pricing.servingName})
                              </span>
                            </div>
                          ))}
                        {item.price && (
                          <div>
                            <span className="font-semibold">
                              ₹{item.price * ((100 - item.discount) / 100)}{" "}
                            </span>
                            {item.quantity && <span className="text-sm">({item.quantity})</span>}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <footer className="footer bg-black text-white py-6">
              {email && <Link to={`/feedback-form/${email}`} className="mx-4">Submit Feedback</Link>}
              <p>Served with ❤️</p>
            </footer>
          </div>
        </div>
      ) : (
        <ViewItemDetails item={selectedItem} setItem={setSelectedItem} />
      )}
    </>
  );
};

export default CustomerView;
