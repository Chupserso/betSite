import "./PersonalAccount.css";
import { Toolbar } from "../toolbar/Toolbar";
import { BetsBlock } from "../betsBlock/BetsBlock";

export const PersonalAccount = (props) => {
    const {data} = props;

    return (
        <div className="personal-account">
            <Toolbar />
            <BetsBlock data={data} />
        </div>
    );
}