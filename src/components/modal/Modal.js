import "./Modal.css";
import closeImg from "../../resources/img/close.svg";
import copyImg from "../../resources/img/copy.svg";
import arrowImg from "../../resources/img/arrowModal.svg";

export const Modal = (props) => {
    const {
        finalTennisImg,
        setIsModal,
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
        betNumber,
        set,
        modalDate,
        lastText,
        lastNumber
    } = props;

    const onClose = () => {
        setIsModal(false);
    }

    const WinSpan = () => {
        return (
            <>
                <span className="default-price">{bet + " ₽"}</span><img src={arrowImg} alt="arrow" /><span className="modal-bet win-bet">{winning + " ₽"}</span>
            </>
        )
    }


    const span = result == "Выигрыш" ? <WinSpan /> : <span className="modal-bet lose-bet">{bet + " ₽"}</span>;
    const resultBlock = result == "Выигрыш" ? <div className="result">Выигрыш</div> : <div className="result lose">Проигрыш</div>;

    return (
        <div className="modal">
            <div className="modal-wrapper">
                <div className="modal-header">
                    <div>
                        {finalTennisImg}
                        <h2 className="modal-title">{type}</h2>
                    </div>
                    <img className="close" onClick={onClose} src={closeImg} alt="close" />
                </div>
                <div className="bet-header bet-header-modal">
                    <div>
                        {resultBlock}
                    </div>
                    <div>
                        <div className="date">{date}</div>
                    </div>
                </div>
                <div className="modal-block">
                    <div>
                        <span className="modal-span">ID билета:</span>
                    </div>
                    <div className="copy">
                        <img src={copyImg} className="copy-img" alt="copy" />
                        <span>{id}</span>
                    </div>
                </div>
                <div className="modal-block">
                    <div>
                        <span className="modal-span">Всего событий</span>
                    </div>
                    <div>{actions}</div>
                </div>
                <div className="modal-block modal-bet-block">
                    <div>
                        <span className="modal-span">Ставка {span}</span>
                    </div>
                    <div>{betNumber}</div>
                </div>
                <div className="modal-main">
                    <div>
                        {finalTennisImg}
                    </div>
                    <div className="modal-info">
                        <div className="modal-info-item">
                            <div className="names">{names}</div>
                            <div className="result">{result}</div>
                        </div>
                        <div className="modal-info-item">
                            <span className="modal-span">{sport}</span>
                        </div>
                        <div className="modal-info-item">
                            <span className="modal-span">{league}</span>
                        </div>
                        <div className="modal-info-item">
                            <span className="modal-span">{scores}</span>
                        </div>
                        <div className="modal-info-item">
                            <span className="modal-span">{set}</span>
                        </div>
                        <div className="modal-info-item">
                            <span className="modal-span">{modalDate}</span>
                        </div>
                        <div className="modal-info-item">
                            <span className="modal-span">{lastText}</span>
                            <span className="modal-span">{lastNumber}</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}