import React,{useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
    {
        title: "wat is React?",
        content: "React is JavaScript framework."
    },
    {
        title: "Why use React?",
        content: "React is favorite JS library among engineers"
    },
    {
        title: "How do you use it?",
        content: "like a game"
    }
];

const options = [
    {
        label: "The color red",
        value: "red"
    },
    {
        label: "the color Green",
        value: "green"
    },
    {
        label: "Blue",
        value: "blue"
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header />
            <Route path="/"><Accordion items={items} /></Route>
            <Route path="/list"><Search /></Route>
            <Route path="/dropdown"><Dropdown options={options} selected={selected} onSelectedChange={setSelected} /></Route>
            <Route path="/translate"><Translate /></Route>
        </div>
    );
};