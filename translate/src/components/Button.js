import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {

    render() {
        return (

                   <ColorContext.Consumer>
                       {(color) =>
                           <button className="ui button primary">
                               <LanguageContext.Consumer>
                                   {({ language }) => language === "english" ? "Submit" : "Voorlegen" }
                               </LanguageContext.Consumer>
                           </button>
                       }
                   </ColorContext.Consumer>

        );
    }
}

export default Button;