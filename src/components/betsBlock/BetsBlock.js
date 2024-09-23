import "./BetsBlock.css";
import { Bets } from "../bets/Bets";

export const BetsBlock = (props) => {
    const {data, isLightTheme} = props;

    return (
        <div className="bets-block">
            <h2 className="title">История ставок</h2>
            <div className="menu">
                <div className="menu-item">Нерасчитанные</div>
                <div className="menu-item">Расчитанные</div>
            </div>
            <Bets data={data} isLightTheme={isLightTheme} />
        </div>
    );
}