import "./Bets.css";
import { Bet } from "../bet/Bet";

export const Bets = (props) => {
    const {data, isLightTheme} = props;

    const bets = data.map(bet => {
        return <Bet isLightTheme={isLightTheme} id={bet.id}
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
    })

    return (
        <div className="bets">
            {bets}
        </div>
    );
}