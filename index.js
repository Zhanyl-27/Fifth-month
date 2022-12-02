import React from "react";
import HeaderContent from "../HeaderContent";
import ParagraphContent from "../ParagraphContent";
import UsersList from "../UsersList";
import {ThemeContext, themes} from '../ThemeContext';




class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }
    render (){
       return(<>
          <ThemeContext.Provider value={this.state.theme}>
          <div style={{color: this.state.theme.foreground,backgroundColor: this.state.theme.background}}>
             <HeaderContent a={15} b={90}/>
             <button  style={{color: this.state.theme.foreground,backgroundColor: this.state.theme.background}} onClick={this.toggleTheme}>Тема</button>
             <ParagraphContent a={123} b={455}/>
             <hr/>
             <UsersList/>
             <hr/>
             </div>
          </ThemeContext.Provider>      
       </>);
    };
}

export default App;