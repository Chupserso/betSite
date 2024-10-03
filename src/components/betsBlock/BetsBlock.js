import "./BetsBlock.css";
import { Bets } from "../bets/Bets";

export const BetsBlock = (props) => {
    const {data, isLightTheme, setIsCalculatedPage, isCalculatedPage} = props;

    let firstClassName = "";
    let secondClassName = "";

    switch (isCalculatedPage) {
        case true:
            firstClassName = "";
            secondClassName = "selected";
            break;
        case false:
            firstClassName = "selected";
            secondClassName = "";
            break;
    }

    return (
        <div className="bets-block">
            <h2 className="title">История ставок</h2>
            <div className="menu">
                <div onClick={() => setIsCalculatedPage(false)} className={"menu-item " + firstClassName}>Нерасчитанные</div>
                <div onClick={() => setIsCalculatedPage(true)} className={"menu-item " + secondClassName}>Расчитанные</div>
            </div>
            <Bets data={data} isCalculatedPage={isCalculatedPage} isLightTheme={isLightTheme} />
        </div>
    );
}