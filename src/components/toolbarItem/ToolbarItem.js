import "./ToolbarItem.css";

export const ToolbarItem = (props) => {
    const { text, img, isSelected } = props;

    let toolbarClassName;

    if (isSelected == true) {
        toolbarClassName = "selected";
    }

    return (
        <div className={"toolbar-item " + toolbarClassName}>
            <div className="icon">
                <img src={img} alt="icon" />
            </div>
            <div className="text">{text}</div>
        </div>
    );
}