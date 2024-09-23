import "./Header.css";
import logoImg from "../../resources/img/logo.svg";
import profileImg from "../../resources/img/profile.svg";
import notificationImg from "../../resources/img/notification.svg";
import arrowImg from "../../resources/img/arrow.svg";
import { DropMenu } from "../dropMenu/DropMenu";
import { useState } from "react";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dropMenu = isOpen == true ? <DropMenu /> : null;

    const onProfile = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <header className="header">
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
                            <span className="money">15 572 ₽</span>
                            <span>Игра на деньги</span>
                        </div>
                        <img src={arrowImg} className="arrow-img" width="16" height="10" alt="arrow" />
                    </div>
                    <div className="icons">
                        <img src={notificationImg} width="16" height="19" alt="notification" />
                        <img src={profileImg} onClick={onProfile} width="20" height="20" alt="profile" />
                    </div>
                </div>
            </header>
            { dropMenu }
        </>
    );
}