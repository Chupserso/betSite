import "./Header.css";
import logoImg from "../../resources/img/logo.svg";
import profileImg from "../../resources/img/profile.svg";
import profileLightImg from "../../resources/img/profileLight.svg";
import notificationImg from "../../resources/img/notification.svg";
import arrowImg from "../../resources/img/arrow.svg";
import { DropMenu } from "../dropMenu/DropMenu";
import { useState } from "react";

export const Header = (props) => {
    const {isLightTheme, setIsLightTheme, balance, setBalance} = props;
    const [isOpen, setIsOpen] = useState(false);

    const dropMenu = isOpen == true ? <DropMenu isLightTheme={isLightTheme} setIsLightTheme={setIsLightTheme} /> : null;

    const onProfile = () => {
        setIsOpen(!isOpen);
    }

    const headerClassName = isLightTheme == true ? " header-light" : "";

    const finalProfileImg = isLightTheme == true ? <img src={profileLightImg} onClick={onProfile} width="20" height="20" alt="profile" /> : <img src={profileLightImg} onClick={onProfile} width="20" height="20" alt="profile" />;

    return (
        <>
            <header className={"header" + headerClassName}>
                <div>
                    <div className="logo">
                        <img src={logoImg} alt="logo" />
                        <span>Ставки и спорт</span>
                    </div>
                    <div className="menu">
                        <div className="menu-item">Линия</div>
                        <div className="menu-item">Live</div>
                        <div className="menu-item">Киберспорт</div>
                        <div className="menu-item">Статистика</div>
                        <div className="menu-item">Спорт 24/7</div>
                        <div className="menu-item">Акции и бонусы</div>
                    </div>
                </div>
                <div>
                    <div className="balance">
                        <div className="balance-info">
                            <span className="money">{balance} ₽</span>
                            <span>Игра на деньги</span>
                        </div>
                        <img src={arrowImg} className="arrow-img" width="16" height="10" alt="arrow" />
                    </div>
                    <div className="icons">
                        <img src={notificationImg} width="16" height="19" alt="notification" />
                        {finalProfileImg}
                    </div>
                </div>
            </header>
            { dropMenu }
        </>
    );
}