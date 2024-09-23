import "./Toolbar.css";
import { ToolbarItem } from "../toolbarItem/ToolbarItem";
import moneyImg from "../../resources/img/money.svg";
import timeImg from "../../resources/img/time.svg";
import arrowsImg from "../../resources/img/arrows.svg";
import profileImg from "../../resources/img/toolbarProfile.svg";
import notificationImg from "../../resources/img/notification.svg";
import exitImg from "../../resources/img/exit.svg";

export const Toolbar = () => {
    return (
        <div className="toolbar">
            <div className="toolbar-header">
                <h1 className="title">Личный кабинет</h1>
            </div>
            <ToolbarItem text="Работа со счётом" isSelected={false} img={moneyImg} />
            <ToolbarItem text="История ставок" isSelected={true} img={timeImg} />
            <ToolbarItem text="История платежей" isSelected={false} img={arrowsImg} />
            <ToolbarItem text="Профиль" isSelected={false} img={profileImg} />
            <ToolbarItem text="Уведомления" isSelected={false} img={notificationImg} />
            <div className="toolbar-footer">
                <ToolbarItem text="Выход" isSelected={false} img={exitImg} />
            </div>
        </div>
    );
}