// const heading = React.createElement("h1", { id: "heading", abc: "xyz" }, "InnerHtml of React");

const content = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child1" }, [React.createElement("h1", {}, "h1 of first child"), React.createElement("h2", {}, "h2 of first child")]), React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "h1 of second child"), React.createElement("h2", {}, "h2 of second child")])])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(content);