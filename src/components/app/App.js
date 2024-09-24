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
    if (localStorage.getItem("isLightTheme")) {
        console.log("ok");
    } else {
        localStorage.setItem("isLightTheme", JSON.stringify(false));
    }

    const [isLightTheme, setIsLightTheme] = useState(JSON.parse(localStorage.getItem("isLightTheme")));
    const [data, setData] = useState(JSON.parse(localStorage.getItem("data")));
    const [balance, setBalance] = useState(localStorage.getItem("balance"));

    localStorage.removeItem("data");
    localStorage.setItem("data", JSON.stringify(data));

    localStorage.removeItem("isLightTheme");
    localStorage.setItem("isLightTheme", JSON.stringify(isLightTheme));

    console.log(isLightTheme);

    const appCLassName = isLightTheme == true ? " app-light" : "";


    return (
        <div className={"app" + appCLassName}>
            <Header isLightTheme={isLightTheme} balance={balance} setBalance={setBalance} setIsLightTheme={setIsLightTheme} />
            <PersonalAccount isLightTheme={isLightTheme} data={data} />
            <Form setBalance={setBalance} balance={balance} data={data} setData={setData} />
        </div>
    );
}