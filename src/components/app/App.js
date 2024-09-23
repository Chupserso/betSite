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

    const [isLightTheme, setIsLightTheme] = useState(false);
    const [data, setData] = useState(JSON.parse(localStorage.getItem("data")));

    localStorage.removeItem("data");
    localStorage.setItem("data", JSON.stringify(data));

    const appCLassName = isLightTheme == true ? " app-light" : "";


    return (
        <div className={"app" + appCLassName}>
            <Header isLightTheme={isLightTheme} setIsLightTheme={setIsLightTheme} />
            <PersonalAccount isLightTheme={isLightTheme} data={data} />
            <Form data={data} setData={setData} />
        </div>
    );
}