import "./Bet.css";
import tennisImg from "../../resources/img/tennis.svg";
import tennisLightImg from "../../resources/img/tennisLight.svg";
import arrowRightImg from "../../resources/img/arrowRight.svg";
import { Modal } from "../modal/Modal";
import { useState } from "react";

export const Bet = (props) => {
    const [isModal, setIsModal] = useState(false);

    const {
        id,
        type,
        score,
        result,
        names,
        coef,
        bet,
        win,
        date,
        winning,
        actions,
        sport,
        league,
        scores,
        set,
        modalDate,
        lastText,
        betNumber,
        lastNumber,
        isLightTheme
    } = props;

    const onBet = () => {
        setIsModal(!isModal);
    }

    const loseCLassName = result == "Проигрыш" ? " lose" : "";
    const winCLassName = result == "Выигрыш" ? " win" : "";

    const finalTennisImg = isLightTheme == true ? <img src={tennisLightImg} alt="tennis" /> : <img src={tennisImg} alt="tennis" />;

    const modal = isModal == true ? <Modal
    finalTennisImg={finalTennisImg}
    setIsModal={setIsModal}
    id={id}
    betNumber={betNumber}
    type={type}
    score={score}
    result={result}
    names={names}
    coef={coef}
    bet={bet}
    win={win}
    date={date}
    winning={winning}
    actions={actions}
    sport={sport}
    league={league}
    scores={scores}
    set={set}
    modalDate={modalDate}
    lastText={lastText}
    lastNumber={lastNumber} /> : null;

    const winRuble = result == "Выигрыш" ? " ₽" : "";

    return (
        <>
            { modal }
            <div className="bet" onClick={onBet}>
                <div className="bet-header">
                    <div>
                        <div className={"result" + loseCLassName}>{result}</div> {/* добавляется класс lose */}
                        <div className="type">{type}</div>
                    </div>
                    <div>
                        <div className="id">ID билета: {id}</div>
                        <div className="date">{date}</div>
                    </div>
                </div>
                <div className="bet-main">
                    <div className="bet-wrapper">
                        <div className="tennis">
                            {finalTennisImg}
                        </div>
                        <div className="score">
                            <div className="title">Счет матча {score}</div>
                            <div className="names">{names}</div>
                        </div>
                    </div>
                    <div className="bet-wrapper">
                        <div className="bet-wrapper-item">
                            <span>Коэффициент</span>
                            <div className="number">{coef}</div>
                        </div>
                        <div className="bet-wrapper-item">
                            <span>Ставка</span>
                            <div className={"number" + loseCLassName}>{bet} ₽</div> {/* can be lose */}
                        </div>
                        <div className="bet-wrapper-item">
                            <span>Выигрыш</span>
                            <div className={"number" + winCLassName}>{win} {winRuble}</div>
                        </div>
                        <img src={arrowRightImg} alt="arrow" />
                    </div>
                </div>
            </div>
        </>
    );
}