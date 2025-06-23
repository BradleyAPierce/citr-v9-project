const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.ingredients),
  ]);
};

const App = () => {
    return React.createElement(
      "div",
      {}, [
        React.createElement("h1", {}, "Padre Ginos!"),
        React.createElement(Pizza, {
          name: "The Pepperoni Pizza",
          ingredients: "Mozzarella Cheese, Pepperoni",
        }),
        React.createElement(Pizza, {
          name: "The Margherita Pizza",
          ingredients: "Mozzarella Cheese, Fresh Basil",
        }),
        React.createElement(Pizza),
      ]
    );
};
  
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
