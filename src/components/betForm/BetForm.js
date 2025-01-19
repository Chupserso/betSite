import { useEffect, useState } from "react";

export const BetForm = (props) => {
        const {
            data,
            idProps,
            typeProps,
            typeSportProps,
            scoreProps,
            resultProps,
            namesProps,
            coefProps,
            betProps,
            winProps,
            dateProps,
            winningProps,
            actionsProps,
            sportProps,
            leagueProps,
            scoresProps,
            setProps,
            modalDateProps,
            lastTextProps,
            betNumberProps,
            lastNumberProps,
            setData,
            moveUp, moveDown,
    } = props;

    const [id, setID] = useState(idProps);
    const [typeSport, setTypeSport] = useState(typeSportProps);
    const [type, setType] = useState(typeProps);
    const [score, setScore] = useState(scoreProps);
    const [names, setNames] = useState(namesProps);
    const [coef, setCoef] = useState(coefProps);
    const [result, setResult] = useState(resultProps);
    const [bet, setBet] = useState(betProps);
    const [betNumber, setBetNumber] = useState(betNumberProps);
    const [win, setWin] = useState(winProps);
    const [date, setDate] = useState(dateProps);
    const [winning, setWinning] = useState(winningProps);
    const [actions, setActions] = useState(actionsProps);
    const [sport, setSport] = useState(sportProps);
    const [league, setLeague] = useState(leagueProps);
    const [scores, setScores] = useState(scoresProps);
    const [set, setSet] = useState(setProps);
    const [modalDate, setModalDate] = useState(modalDateProps);
    const [lastText, setLastText] = useState(lastTextProps);
    const [lastNumber, setLastNumber] = useState(lastNumberProps);

    const saveData = () => {
        for (let i = 0; i < data.length; i++){
            if (data[i].id == id) {
                const updatedData = [...data];
                updatedData[i] = {
                    id,
                    type,
                    typeSport,
                    result,
                    score,
                    names,
                    coef,
                    bet,
                    betNumber,
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
                    lastNumber,
                };
                setData(updatedData);
            }
        }
    }

    useEffect(() => {
        saveData();
    }, [id,
        type,
        typeProps,
        typeSport,
        result,
        score,
        names,
        coef,
        bet,
        betNumber,
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
        lastNumber,
    ]);

    const isFirst = data.findIndex((item) => item.id === idProps) === 0;
    const isLast = data.findIndex((item) => item.id === idProps) === data.length - 1;

    return (
        <form>
                <div>
                    <button type="button" onClick={moveUp} disabled={isFirst}>
                        Вверх
                    </button>
                    <button type="button" onClick={moveDown} disabled={isLast}>
                        Вниз
                    </button>
                </div>
                <label>Вид спорта?</label>
                <select value={typeSport} onChange={(e) => {
                    setTypeSport(e.target.value);
                    if (e.target.value == "Теннис") {
                        setSport("Настольный теннис");
                    } else if (e.target.value == "Футбол") {
                        setSport("Футбол");
                    } else if (e.target.value == "Хоккей") {
                        setSport("Хоккей");
                    }
                }}>
                    <option value="Теннис">Теннис</option>
                    <option value="Футбол">Футбол</option>
                    <option value="Хоккей">Хоккей</option>
                </select>

                <label>Тип ставки</label>
                <input type="text" value={type} placeholder="Text" onChange={(e) => {setType(e.target.value); }} />

                <label>ID ставки</label>
                <input type="text" value={id} placeholder="Text" onChange={(e) => {setID(e.target.value); }} />

                <label>Счет матча</label>
                <input type="text" value={score} placeholder="Пример 3:1" onChange={(e) => {setScore(e.target.value); }} />

                <label>Имена</label>
                <input type="text" value={names} placeholder="Пример Резников М. - Артемов А." onChange={(e) => {setNames(e.target.value); }} />

                <label>Коэффициент</label>
                <input type="text" value={coef} placeholder="Text" onChange={(e) => {setCoef(e.target.value); }} />

                <label>Сама ставка</label>
                <input type="text" value={bet} placeholder="Text" onChange={(e) => {setBet(e.target.value); }} />

                <label>Выигрыш</label>
                <input type="text" value={win} placeholder="Text" onChange={(e) => {setWin(e.target.value); }} />
                
                <label>Дата</label>
                <input type="text" value={date} placeholder="Пример 9 сентября, 16:07" onChange={(e) => {setDate(e.target.value); }} />

                <label>Статус ставки?</label>
                <select value={result} onChange={(e) => {
                    setResult(e.target.value);
                }}>
                    <option value="Проигрыш">Проигрыш</option>
                    <option value="Выигрыш">Выигрыш</option>
                    <option value="Не расчитан">Не расчитан</option>
                </select>

                <label>Сколько событий</label>
                <input type="text" value={actions} placeholder="Text"  onChange={(e) => {setActions(e.target.value); }} />

                <label>Вид спорта</label>
                <input type="text" value={sport} placeholder="Пример Настольный теннис"  onChange={(e) => {setSport(e.target.value); }} />

                <label>Страна, лига</label>
                <input type="text" value={league} placeholder="Пример ru Россия. Лига про" onChange={(e) => {setLeague(e.target.value); }} />

                
                <label>Если выигрыш, то общая сумма после выигрыша</label>
                <input type="text" value={winning} placeholder="Text" onChange={(e) => {setWinning(e.target.value); }} />

                <label>Очки</label>
                <input type="text" value={scores} placeholder="Пример [1:0 (11:6), 0:2, 0:1] [2nd set]" onChange={(e) => {setScores(e.target.value); }} />

                <label>Сет или если не расчитанная то тип игры (Матч)</label>
                <input type="text" value={set} placeholder="Какой сет?" onChange={(e) => {setSet(e.target.value); }} />

                <label>Дата в модальном окне</label>
                <input type="text" value={modalDate} placeholder="Дата?"  onChange={(e) => {setModalDate(e.target.value); }} />

                <label>Последняя строчка в модальном окне</label>
                <input type="text" value={lastText} placeholder="Пример 2-й сет Счет: 11:7"  onChange={(e) => {setLastText(e.target.value); }} />
        </form>
    );
}