import "./PersonalAccount.css";
import { Toolbar } from "../toolbar/Toolbar";
import { BetsBlock } from "../betsBlock/BetsBlock";

export const PersonalAccount = (props) => {
    const {data, isLightTheme, isCalculatedPage, setIsCalculatedPage} = props;

    return (
        <div className="personal-account">
            <Toolbar />
            <BetsBlock setIsCalculatedPage={setIsCalculatedPage} isCalculatedPage={isCalculatedPage} isLightTheme={isLightTheme} data={data} />
        </div>
    );
}