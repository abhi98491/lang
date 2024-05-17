import React, { useState } from 'react';
import './Telugu.css';


function Telugu() {
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
                <h1 onClick={toggleNumbers}>NUMBERS IN TELUGU</h1>
                {showNumbers && (
                    <div className="level">
                        <div>
                            <h3>1-20 NUMBERS</h3>
                            <a href="https://youtu.be/jTmZ70c8BT4?si=hea783UHv2BCHpVK" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>21-40 NUMBERS</h3>
                            <a href="https://youtu.be/2nrj2jnzJVU?si=OiW1qRtZ06ueN6yB_" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>41-60 NUMBERS</h3>
                            <a href="https://youtu.be/22kxKkF1yKc?si=h2iP_loG71chMlGQ" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>61-80 NUMBERS</h3>
                            <a href="https://youtu.be/_gUCBDbIc9U?si=3NCsuQsAS43bXqxm" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>81-100 NUMBERS</h3>
                            <a href="https://youtu.be/ujjZ-Zd-riQ?si=cQmAr1cKV-QQCNDa" className="button">watch it</a>
                        </div>
                    </div>
                )}
                <h1 onClick={toggleWords}>WORDS</h1>
                {showWords && (
                    <div className="level">
                        <div>
                            <h3>simple words-1</h3>
                            <a href="https://youtu.be/8u70xtw9gJo?si=UzJ-MECcE_EMU4Vj" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>simple words-2</h3>
                            <a href="https://youtu.be/lwrHpYxh5KE?si=3EpwWmYmn8HDYXdr" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>1000 Telugu Words</h3>
                            <a href="https://youtu.be/D54_4aMTNBI?si=XNby2QT3YyYq40IC" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>RELATION NAMES IN Telugu</h3>
                            <a href="https://youtu.be/SysCNgJTJBE?si=5asuOjjL4GZq94sN" className="button">watch it</a>
                        </div>
                    </div>
                )}
                <h1 onClick={togglePhrases}>PHRASES</h1>
                {showPhrases && (
                    <div className="level">
                        <div>
                            <h3>Survival Phrases</h3>
                            <a href="https://youtu.be/cy1QImLr-Rg?si=7TB3yMVBN1UQvuyn" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>Useful Phrases</h3>
                            <a href="https://youtu.be/4Rx8U6BI8SU?si=lEjYuQJeIPyDxTo_" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>Useful Phrases-2</h3>
                            <a href="https://youtu.be/YdZbbQeJOPU?si=G7gluA0upbmysl9K" className="button">watch it</a>
                        </div>
                    </div>
                )}
                <h1 onClick={toggleSentences}>SENTENCES</h1>
                {showSentences && (
                    <div className="level">
                        <div>
                            <h3>SELF INTRODUCTION SENTENCES</h3>
                            <a href="https://youtu.be/PD1anVHVubM?si=rGJBDV_U6RQU-baH" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>TELUGU SENTENCES PART 1</h3>
                            <a href="https://youtu.be/kuwYfMp1AVQ?si=arbTDN0Ot1FAOKtB" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>TELUGU SENTENCES PART 2</h3>
                            <a href="https://youtu.be/n9flrF7QThc?si=_OvD0c5wSBUCd_dU" className="button">watch it</a>
                        </div>
                    </div>
                )}
            </div>
        </center>
    );
}

export default Telugu;