import { useState } from "react";
import PrintBtn from "./PrintBtn";
import languages from "../Data/data";

function AppMain() {
    return (
        <div className="container">
            <div className="btn-cont">
                {languages.map((curElem) => (
                    <PrintBtn key={curElem.id} title={curElem.title} />
                ))}
            </div>
            <div className="info">
                <div className="info-title">
                    <h3>{languages[0].title}</h3>
                </div>
                <div className="info-descr">
                    {languages[0].description}
                </div>
            </div>

        </div>
    );
}

export default AppMain;