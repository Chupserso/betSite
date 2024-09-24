import "./DropMenu.css";
import moneyImg from "../../resources/img/money.svg";
import timeImg from "../../resources/img/time.svg";
import arrowsImg from "../../resources/img/arrows.svg";
import profileImg from "../../resources/img/toolbarProfile.svg";
import exitImg from "../../resources/img/exit.svg";
import phoneImg from "../../resources/img/phone.svg";
import moonImg from "../../resources/img/moon.svg";
import moonBlackImg from "../../resources/img/moonBlack.svg";
import { ToolbarItem } from "../toolbarItem/ToolbarItem";

export const DropMenu = (props) => {
    const {isLightTheme, setIsLightTheme} = props;

    const onChange = () => {
        setIsLightTheme(!isLightTheme);
    }

    const moon = isLightTheme == false ? <img src={moonImg} alt="moon" /> : <img src={moonBlackImg} alt="moon" />;

    let styles;
    if (!isLightTheme) {
        styles = {transform: "translateX(100%)"};
    } else {
        styles = {transform: "translateX(0%)"};
    }

    return (
        <div className="drop-menu">
            <ToolbarItem text="Работа со счётом" isSelected={false} img={moneyImg} />
            <ToolbarItem text="История ставок" isSelected={true} img={timeImg} />
            <ToolbarItem text="История платежей" isSelected={false} img={arrowsImg} />
            <ToolbarItem text="Профиль" isSelected={false} img={profileImg} />
            <ToolbarItem text="Тех. поддержка" isSelected={false} img={phoneImg} />
            <div className="toolbar-item toolbar-theme-item">
                <div className="icon">
                    {moon}
                </div>
                <div className="text">Тёмная тема</div>
                <div onClick={onChange} className="ThemeSwitcher__ThemeSwitcherComponent-sc-10id54y-0 cIfhlX" bis_skin_checked="1"><span style={styles} className="ThemeSwitcher__ThemeSwitcherControl-sc-10id54y-1 eDznJK"></span>
                    <div className="ThemeSwitcher__ThemeSwitcherIcons-sc-10id54y-2 ftRZWS" bis_skin_checked="1"><span className="Icon-sc-1n5svmt-0 ThemeSwitcher__SwitchIcon-sc-10id54y-3 ThemeSwitcher__SunIcon-sc-10id54y-4 bTqJgK kBwyVO bSSYmF"><svg width="16" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.692 8.622a4.239 4.239 0 0 1-.905-4.66c.187-.442-.333-.862-.74-.604a5.039 5.039 0 0 0-1.28 1.18c-1.382 1.807-1.346 4.395.086 6.16a5.005 5.005 0 0 0 8.103-.432c.262-.41-.152-.93-.601-.742a4.23 4.23 0 0 1-4.663-.902Z" fill="#0D0D0D"></path>
                    </svg></span><span className="Icon-sc-1n5svmt-0 ThemeSwitcher__SwitchIcon-sc-10id54y-3 ThemeSwitcher__MoonIcon-sc-10id54y-5 bTqJgK kBwyVO gCFQT"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5.5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5Zm-5 3h1c.275 0 .5-.225.5-.5s-.225-.5-.5-.5H3c-.275 0-.5.225-.5.5s.225.5.5.5Zm9 0h1c.275 0 .5-.225.5-.5s-.225-.5-.5-.5h-1c-.275 0-.5.225-.5.5s.225.5.5.5ZM7.5 3v1c0 .275.225.5.5.5s.5-.225.5-.5V3c0-.275-.225-.5-.5-.5s-.5.225-.5.5Zm0 9v1c0 .275.225.5.5.5s.5-.225.5-.5v-1c0-.275-.225-.5-.5-.5s-.5.225-.5.5ZM4.995 4.29a.498.498 0 1 0-.705.705l.53.53a.498.498 0 1 0 .705-.705l-.53-.53Zm6.185 6.185a.498.498 0 1 0-.705.705l.53.53a.498.498 0 1 0 .705-.705l-.53-.53Zm.53-5.48a.498.498 0 1 0-.705-.705l-.53.53a.498.498 0 1 0 .705.705l.53-.53ZM5.525 11.18a.498.498 0 1 0-.705-.705l-.53.53a.498.498 0 1 0 .705.705l.53-.53Z" fill="#fff"></path>
                    </svg></span></div>
                </div>
            </div>
            <ToolbarItem text="Выход" isSelected={false} img={exitImg} />
        </div>
    );
}