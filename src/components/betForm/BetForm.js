import { useEffect, useState } from "react";

export const BetForm = (props) => {
        const {
            data,
            idProps,
            typeProps,
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
            setData
    } = props;

    const [id, setID] = useState(idProps);
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
    }, [result]);

    return (
        <form>
                <label>Тип ставки</label>
                <input type="text" value={type} placeholder="Text" onChange={(e) => {setType(e.target.value); saveData()}} />

                <label>ID ставки</label>
                <input type="text" value={id} placeholder="Text" onChange={(e) => {setID(e.target.value); saveData()}} />

                <label>Счет матча</label>
                <input type="text" value={score} placeholder="Пример 3:1" onChange={(e) => {setScore(e.target.value); saveData()}} />

                <label>Имена</label>
                <input type="text" value={names} placeholder="Пример Резников М. - Артемов А." onChange={(e) => {setNames(e.target.value); saveData()}} />

                <label>Коэффициент</label>
                <input type="text" value={coef} placeholder="Text" onChange={(e) => {setCoef(e.target.value); saveData()}} />

                <label>Сама ставка</label>
                <input type="text" value={bet} placeholder="Text" onChange={(e) => {setBet(e.target.value); saveData()}} />

                <label>Цыфра возле ставки</label>
                <input type="text" value={betNumber} placeholder="Text" onChange={(e) => {setBetNumber(e.target.value); saveData()}} />

                <label>Выигрыш</label>
                <input type="text" value={win} placeholder="Если проиграшная то ставим -" onChange={(e) => {setWin(e.target.value); saveData()}} />
                
                <label>Дата</label>
                <input type="text" value={date} placeholder="Пример 9 сентября, 16:07" onChange={(e) => {setDate(e.target.value); saveData()}} />

                <label>Выигрыш?</label>
                <select value={result} onChange={(e) => {
                    setResult(e.target.value);
                }}>
                    <option value="Проигрыш">Проигрыш</option>
                    <option value="Выигрыш">Выигрыш</option>
                </select>
                

                <label>Сколько событий</label>
                <input type="text" value={actions} placeholder="Text"  onChange={(e) => {setActions(e.target.value); saveData()}} />

                <label>Вид спорта</label>
                <input type="text" value={sport} placeholder="Пример Настольный теннис"  onChange={(e) => {setSport(e.target.value); saveData()}} />

                <label>Страна, лига</label>
                <input type="text" value={league} placeholder="Пример ru Россия. Лига про" onChange={(e) => {setLeague(e.target.value); saveData()}} />

                
                <label>Если выигрыш, то общая сумма после выигрыша</label>
                <input type="text" value={winning} placeholder="Text" onChange={(e) => {setWinning(e.target.value); saveData()}} />

                <label>Очки</label>
                <input type="text" value={scores} placeholder="Пример [1:0 (11:6), 0:2, 0:1] [2nd set]" onChange={(e) => {setScores(e.target.value); saveData()}} />

                <label>Сет</label>
                <input type="text" value={set} placeholder="Какой сет?" onChange={(e) => {setSet(e.target.value); saveData()}} />

                <label>Дата в модальном окне</label>
                <input type="text" value={modalDate} placeholder="Дата?"  onChange={(e) => {setModalDate(e.target.value); saveData()}} />

                <label>Последняя строчка в модальном окне</label>
                <input type="text" value={lastText} placeholder="Пример 2-й сет Счет: 11:7"  onChange={(e) => {setLastText(e.target.value); saveData()}} />

                <label>Последняя цыфра в модальном окне</label>
                <input type="text" value={lastNumber} placeholder="Пример 10" onChange={(e) => {setLastNumber(e.target.value); saveData()}} />
        </form>
    );
}