import { useContext } from 'react'
import { WithResult } from "../hoc-helpers";
import {ThemeContext} from '../ThemeContext';

const ParagraphContent = (props) => {
    let theme = useContext(ThemeContext);
    return <p style={{color: theme.foreground,backgroundColor: theme.background}}>App {props.result}</p>;
};

export default WithResult(ParagraphContent);