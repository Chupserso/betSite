import { useState } from "react";
import "./Form.css";
import { BetForm } from "../betForm/BetForm";

export const Form = (props) => {
    const {data, setData, setBalance, balance} = props;

    const [id, setID] = useState("");
    const [type, setType] = useState("");
    const [score, setScore] = useState("");
    const [names, setNames] = useState("");
    const [coef, setCoef] = useState("");
    const [bet, setBet] = useState("");
    const [betNumber, setBetNumber] = useState("");
    const [win, setWin] = useState("");
    const [date, setDate] = useState("");
    const [winning, setWinning] = useState("");
    const [actions, setActions] = useState("");
    const [sport, setSport] = useState("");
    const [league, setLeague] = useState("");
    const [scores, setScores] = useState("");
    const [set, setSet] = useState("");
    const [modalDate, setModalDate] = useState("");
    const [lastText, setLastText] = useState("");
    const [lastNumber, setLastNumber] = useState("");
    const [deleteID, setDeleteID] = useState("");
    const [typeSport, setTypeSport] = useState("Теннис");
    const [balanceInput, setBalanceInput] = useState(balance);
    const [result, setResult] = useState("Выигрыш");

    const forms = data.map(item => {
        return (
            <BetForm
            data={data}
            typeSportProps={item.typeSport}
            idProps={item.id}
            setData={setData}
            typeProps={item.type}
            scoreProps={item.score}
            resultProps={item.result}
            namesProps={item.names}
            coefProps={item.coef}
            betProps={item.bet}
            winProps={item.win}
            dateProps={item.date}
            winningProps={item.winning}
            actionsProps={item.actions}
            sportProps={item.sport}
            leagueProps={item.league}
            scoresProps={item.scores}
            setProps={item.set}
            betNumberProps={item.betNumber}
            modalDateProps={item.modalDate}
            lastTextProps={item.lastText}
            lastNumberProps={item.lastNumber}
            />
        );
    })

    const onForm = (e) => {
        e.preventDefault();

        setData([...data, {
            id,
            typeSport,
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
        }]);
        setID("");
        setType("");
        setScore("");
        setNames("");
        setCoef("");
        setBet("");
        setBetNumber("");
        setDate("");
        setWinning("");
        setActions("");
        setSport("");
        setLeague("");
        setScores("");
        setSet("");
        setModalDate("");
        setLastText("");
        setLastNumber("");
        setWin("");
    }

    const onBalance = (e) => {
        setBalanceInput(e.target.value);
        setBalance(e.target.value);
        localStorage.removeItem("balance");
        localStorage.setItem("balance", e.target.value);
    }

    const onDeleteForm = (e) => {
        e.preventDefault();
        const newData = data.filter(item => item.id != deleteID);
        setData(newData);
        setDeleteID("");
    }

    return (
        <div className="forms">
            <form method="post" onSubmit={onForm}>
                <label>Баланс</label>
                <input type="text" value={balanceInput} placeholder="Text" onChange={onBalance} />

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
                <input type="text" value={type} placeholder="Text" onChange={(e) => setType(e.target.value)} />

                <label>ID ставки</label>
                <input type="text" value={id} placeholder="Text" onChange={(e) => setID(e.target.value)} required />

                <label>Счет матча</label>
                <input type="text" value={score} placeholder="Пример 3:1" onChange={(e) => setScore(e.target.value)} />

                <label>Имена</label>
                <input type="text" value={names} placeholder="Пример Резников М. - Артемов А." onChange={(e) => setNames(e.target.value)} />

                <label>Коэффициент</label>
                <input type="text" value={coef} placeholder="Text" onChange={(e) => setCoef(e.target.value)} />

                <label>Сама ставка</label>
                <input type="text" value={bet} placeholder="Text" onChange={(e) => setBet(e.target.value)} />

                <label>Выигрыш</label>
                <input type="text" value={win} placeholder="Text" onChange={(e) => setWin(e.target.value)} />
                
                <label>Дата</label>
                <input type="text" value={date} placeholder="Пример 9 сентября, 16:07" onChange={(e) => setDate(e.target.value)} />

                <label>Статус ставки?</label>
                <select value={result} onChange={(e) => {
                    setResult(e.target.value);
                }}>
                    <option value="Проигрыш">Проигрыш</option>
                    <option value="Выигрыш">Выигрыш</option>
                    <option value="Не расчитан">Не расчитан</option>
                </select>

                <label>Сколько событий</label>
                <input type="text" value={actions} placeholder="Text"  onChange={(e) => setActions(e.target.value)} />

                <label>Вид спорта</label>
                <input type="text" value={sport} placeholder="Пример Настольный теннис"  onChange={(e) => setSport(e.target.value)} />

                <label>Страна, лига</label>
                <input type="text" value={league} placeholder="Пример ru Россия. Лига про" onChange={(e) => setLeague(e.target.value)} />

                
                <label>Если выигрыш, то общая сумма после выигрыша</label>
                <input type="text" value={winning} placeholder="Text" onChange={(e) => setWinning(e.target.value)} />

                <label>Очки</label>
                <input type="text" value={scores} placeholder="Пример [1:0 (11:6), 0:2, 0:1] [2nd set]" onChange={(e) => setScores(e.target.value)} />

                <label>Сет</label>
                <input type="text" value={set} placeholder="Какой сет?" onChange={(e) => setSet(e.target.value)} />

                <label>Дата в модальном окне</label>
                <input type="text" value={modalDate} placeholder="Дата?"  onChange={(e) => setModalDate(e.target.value)} />

                <label>Последняя строчка в модальном окне</label>
                <input type="text" value={lastText} placeholder="Пример 2-й сет Счет: 11:7"  onChange={(e) => setLastText(e.target.value)} />

                <input type="submit" className="create-btn" value="Создать" />
            </form>
            <form method="post" onSubmit={onDeleteForm}>
                <label>ID</label>
                <input type="text" placeholder="ID ставки для удаления" value={deleteID} onChange={(e) => setDeleteID(e.target.value)} />
                <input type="submit" className="delete-btn" value="Удалить" />
            </form>
            {forms}
        </div>
    );
}