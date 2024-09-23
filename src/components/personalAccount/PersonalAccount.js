import "./PersonalAccount.css";
import { Toolbar } from "../toolbar/Toolbar";
import { BetsBlock } from "../betsBlock/BetsBlock";

export const PersonalAccount = (props) => {
    const {data, isLightTheme} = props;

    return (
        <div className="personal-account">
            <Toolbar />
            <BetsBlock isLightTheme={isLightTheme} data={data} />
        </div>
    );
}