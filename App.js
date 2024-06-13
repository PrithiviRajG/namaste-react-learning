const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "child" }, "I am H1 tag"),
  React.createElement("h2", { id: "child2" }, "I am H2 tag"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
