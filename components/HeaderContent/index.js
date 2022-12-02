import React from "react";
import { WithResult } from "../hoc-helpers";
import {ThemeContext} from '../ThemeContext';

class HeaderContent extends React.Component {
    render() 
    {
        let props = this.props;
        let theme = this.context;
        return (<>
            <h1 style={{color: theme.foreground,backgroundColor: theme.background}}>App {props.result}</h1>
        </>);
    }


};
HeaderContent.contextType = ThemeContext;

export default WithResult(HeaderContent);