import React, { useState } from 'react';
import './Tamil.css';


function Tamil() {
    const [showNumbers, setShowNumbers] = useState(true);
    const [showWords, setShowWords] = useState(true);
    const [showPhrases, setShowPhrases] = useState(true);
    const [showSentences, setShowSentences] = useState(true);

    const toggleNumbers = () => {
        setShowNumbers(!showNumbers);
    };

    const toggleWords = () => {
        setShowWords(!showWords);
    };

    const togglePhrases = () => {
        setShowPhrases(!showPhrases);
    };

    const toggleSentences = () => {
        setShowSentences(!showSentences);
    };

    return (
        <center>
            <div className="vid">
                <h1 onClick={toggleNumbers}>NUMBERS IN TAMIL</h1>
                {showNumbers && (
                    <div className="level">
                        <div>
                            <h3>1-20 NUMBERS</h3>
                            <a href="https://youtu.be/blSpeJ4OU_4?si=jZpfmIrGIwc6FN2A" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>21-40 NUMBERS</h3>
                            <a href="https://youtu.be/RFGDg1gg08M?si=3BtrvqYeS2lxRsR_" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>41-60 NUMBERS</h3>
                            <a href="https://youtu.be/dMe_QbNV5l8?si=pMyAufCQW7b22k3K" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>61-80 NUMBERS</h3>
                            <a href="https://youtu.be/H40hV8W2lhk?si=BOx9M3uyU5ns6-Xm" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>81-100 NUMBERS</h3>
                            <a href="https://youtu.be/7ZsdL9btdGA?si=RUfst5Gh6jAuwPDH" className="button">watch it</a>
                        </div>
                    </div>
                )}
                <h1 onClick={toggleWords}>WORDS</h1>
                {showWords && (
                    <div className="level">
                        <div>
                            <h3>simple words-1</h3>
                            <a href="https://youtu.be/A0C5_UNOLlg?si=NzJrTD0RSnlMGKKc" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>simple words-2</h3>
                            <a href="https://youtu.be/cSiwpeo5Btw?si=_5DBiNMtCfVn4Bpz" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>1000 Tamil Words</h3>
                            <a href="https://youtu.be/w0rhyWVXtvo?si=UDPSI_wV11bTiJw6" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>RELATION NAMES IN TAMIL</h3>
                            <a href="https://youtu.be/qCtEe6gSEJo?si=2OtlZGDzNPcknQH8" className="button">watch it</a>
                        </div>
                    </div>
                )}
                <h1 onClick={togglePhrases}>PHRASES</h1>
                {showPhrases && (
                    <div className="level">
                        <div>
                            <h3>Survival Phrases</h3>
                            <a href="https://youtu.be/C46oMstiKsM?si=s08KhuUe1kNSenyh" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>Useful Phrases</h3>
                            <a href="https://youtu.be/cYaBliXL_lg?si=28ZnNyBZdHyeN4dM" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>Useful Phrases-2</h3>
                            <a href="https://youtu.be/pzdjQqR4Syg?si=SFUvpdsJGt5YCREH" className="button">watch it</a>
                        </div>
                    </div>
                )}
                <h1 onClick={toggleSentences}>SENTENCES</h1>
                {showSentences && (
                    <div className="level">
                        <div>
                            <h3>SELF INTRODUCTION SENTENCES</h3>
                            <a href="https://youtu.be/q_Ar9gHObVo?si=GUz0E3Z194bucu_j" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>TAMIL SENTENCES PART 1</h3>
                            <a href="https://youtu.be/Cz72GkU-gpg?si=HFld9KjcslLs7xaP" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>TAMIL SENTENCES PART 2</h3>
                            <a href="https://youtu.be/ei-5MfndKvo?si=LSXe6VsTCrkq_SFR" className="button">watch it</a>
                        </div>
                    </div>
                )}
            </div>
        </center>
    );
}

export default Tamil;
