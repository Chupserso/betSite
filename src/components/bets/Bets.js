import "./Bets.css";
import { Bet } from "../bet/Bet";

export const Bets = (props) => {
    const {data, isLightTheme, isCalculatedPage} = props;

    let bets;

    if (isCalculatedPage == true) {
        bets = data.map(bet => {
            if (bet.result != "Не расчитан") {
                return <Bet isLightTheme={isLightTheme} id={bet.id}
                notCalculated={false}
                typeSport={bet.typeSport}
                type={bet.type}
                score={bet.score}
                result={bet.result}
                names={bet.names}
                coef={bet.coef}
                bet={bet.bet}
                win={bet.win}
                date={bet.date}
                winning={bet.winning}
                actions={bet.actions}
                sport={bet.sport}
                league={bet.league}
                scores={bet.scores}
                set={bet.set}
                betNumber={bet.betNumber}
                modalDate={bet.modalDate}
                lastText={bet.lastText}
                lastNumber={bet.lastNumber} />;
            }
        })
    } else {
        bets = data.map(bet => {
            if (bet.result == "Не расчитан") {
                return <Bet isLightTheme={isLightTheme} id={bet.id}
                typeSport={bet.typeSport}
                notCalculated={true}
                type={bet.type}
                score={bet.score}
                result={bet.result}
                names={bet.names}
                coef={bet.coef}
                bet={bet.bet}
                win={bet.win}
                date={bet.date}
                winning={bet.winning}
                actions={bet.actions}
                sport={bet.sport}
                league={bet.league}
                scores={bet.scores}
                set={bet.set}
                betNumber={bet.betNumber}
                modalDate={bet.modalDate}
                lastText={bet.lastText}
                lastNumber={bet.lastNumber} />;
            }
        })
    }

    return (
        <div className="bets">
            {bets}
        </div>
    );
}