import { useState } from "react";
import PrintBtn from "./PrintBtn";
import languages from "../Data/data";

function AppMain() {
    // Stato per memorizzare il linguaggio selezionato
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    // Funzione per gestire il click sui bottoni
    const Click = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <div className="container">
            <div className="btn-cont">
                {languages.map((curElem) => (
                    <PrintBtn
                        key={curElem.id}
                        title={curElem.title}
                        onClick={() => Click(curElem)}  // Gestisce il click
                    />
                ))}
            </div>

            <div className="info">
                <div className="info-title">
                    <h3>{selectedLanguage.title}</h3>
                </div>
                <div className="info-descr">
                    {selectedLanguage.description}
                </div>
            </div>
        </div>
    );
}

export default AppMain;