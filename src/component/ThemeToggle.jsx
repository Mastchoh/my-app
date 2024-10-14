// import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

// class Theme extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             isMoon:true,
//         }
//         this.Toggle=this.Toggle.bind(this)
//     }

//     Toggle(){
//         return(this.setState((prevState)=>{
//             isMoon:!prevState.isMoon
//         }))
//     }
//     render(){
//         return(
//             <div>
//                 <FontAwesomeIcon icon={this.isMoon ? faMoon: faSun} onClick={this.Toggle}/>
//             </div>
//         )
//     }
// }
// export default Theme;


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './Theme.css'; // CSS файлро илова кунед

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false); // Истифодаи useState барои идоракунии мавзӯъ

    const toggleTheme = () => {
        setDarkMode(!darkMode); // Вақте, ки тугма пахш мешавад, ҳолати мавзӯъ тағйир меёбад
        document.body.classList.toggle('dark-theme', !darkMode); // Дар бадан синфи 'dark-theme' илова ё ҳазф мешавад
    };

    return (
        <button onClick={toggleTheme} className="theme-toggle-btn">
            {darkMode ? (
                <FontAwesomeIcon icon={faSun} className="icon" />
            ) : (
                <FontAwesomeIcon icon={faMoon} className="icon" />
            )}
            {darkMode ? '' : ''}
        </button>
    );
};

export default ThemeToggle;
