import "./App.css";
import { Header } from "../header/Header";
import { PersonalAccount } from "../personalAccount/PersonalAccount";
import { Form } from "../form/Form";
import { useState } from "react";

export const App = () => {
    if (localStorage.getItem("data")) {
        console.log("Ok");
    } else {
        localStorage.setItem("data", JSON.stringify([]));
    }

    const [data, setData] = useState(JSON.parse(localStorage.getItem("data")));

    localStorage.removeItem("data");
    localStorage.setItem("data", JSON.stringify(data));

    return (
        <div className="app">
            <Header />
            <PersonalAccount data={data} />
            <Form data={data} setData={setData} />
        </div>
    );
}