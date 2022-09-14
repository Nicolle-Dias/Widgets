import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Accordion from "./components/Accordion";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework!",
  },
  {
    title: "Why use react?",
    content: "React is a favourite JS library among engineers!",
  },
  {
    title: "How do you use react?",
    content: "You use React by creating components!",
  },
];

const options = [
  {
    label: "Default Broswer Colour",
    value: "inherit",
  },
  {
    label: "The Colour Red",
    value: "red",
  },
  {
    label: "The Colour Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
        label='Select text colour'
        options={options} 
        selected={selected}
        onSelectedChange={setSelected}
        renderInputBox={true}/>
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
