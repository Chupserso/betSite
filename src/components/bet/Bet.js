import "./Bet.css";
import tennisImg from "../../resources/img/tennis.svg";
import tennisLightImg from "../../resources/img/tennisLight.svg";
import footballImg from "../../resources/img/football.svg";
import hockeyImg from "../../resources/img/hockey.svg";
import footbalLightImg from "../../resources/img/footballLight.svg";
import hockeyLightImg from "../../resources/img/hockeyLight.svg";
import arrowRightImg from "../../resources/img/arrowRight.svg";
import { Modal } from "../modal/Modal";
import { useState } from "react";

export const Bet = (props) => {
    const [isModal, setIsModal] = useState(false);

    const {
        id,
        type,
        typeSport,
        score,
        notCalculated,
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

    let finalImg;

    switch (typeSport) {
        case "Теннис":
            finalImg = isLightTheme == true ? <img src={tennisLightImg} alt="tennis" /> : <img src={tennisImg} alt="tennis" />;
            break;
        case "Футбол":
            finalImg = isLightTheme == true ? <img src={footbalLightImg} alt="tennis" /> : <img src={footballImg} alt="tennis" />;
            break;
        case "Хоккей":
            finalImg = isLightTheme == true ? <img src={hockeyLightImg} className="hockey" alt="tennis" /> : <img src={hockeyImg} className="hockey" alt="tennis" />;
            break;
    }

    const modal = isModal == true ? <Modal
    finalTennisImg={finalImg}
    setIsModal={setIsModal}
    notCalculated={notCalculated}
    id={id}
    betNumber={betNumber}
    type={type}
    score={score}
    result={result}
    names={names}
    coef={coef}
    bet={bet}
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

    const winRuble = result == "Выигрыш" || result == "Не расчитан" ? " ₽" : "";
    const winText = result == "Выигрыш" ? "Выигрыш" : "";

    let winNumber = win;
    if (result == "Проигрыш") {
        winNumber = "-"
    }

    const notCalcClassName = result == "Не расчитан" ? "not-calc" : "";

    return (
        <>
            { modal }
            <div className="bet" onClick={onBet}>
                <div className="bet-header">
                    <div>
                        <div className={"result" + loseCLassName + notCalcClassName}>{result}</div> {/* добавляется класс lose */}
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
                            {finalImg}
                        </div>
                        <div className="score">
                            <div className="title">{set}: Счет : {score}</div>
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
                            <span>{winText}</span>
                            <div className={"number" + winCLassName}>{winNumber} {winRuble}</div>
                        </div>
                        <img src={arrowRightImg} alt="arrow" />
                    </div>
                </div>
            </div>
        </>
    );
}