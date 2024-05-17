import React, { useState } from 'react';
import './Malyalam.css';


function Malyalam() {
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
                <h1 onClick={toggleNumbers}>NUMBERS IN MALAYALAM</h1>
                {showNumbers && (
                    <div className="level">
                        <div>
                            <h3>1-20 NUMBERS</h3>
                            <a href="https://youtu.be/yVM5976_GvY?si=cxcnOFJvZRhx316_" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>21-40 NUMBERS</h3>
                            <a href="https://youtu.be/yVM5976_GvY?si=cxcnOFJvZRhx316_" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>41-60 NUMBERS</h3>
                            <a href="https://youtu.be/yVM5976_GvY?si=cxcnOFJvZRhx316_" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>61-80 NUMBERS</h3>
                            <a href="https://youtu.be/yVM5976_GvY?si=cxcnOFJvZRhx316_" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>81-100 NUMBERS</h3>
                            <a href="https://youtu.be/yVM5976_GvY?si=cxcnOFJvZRhx316_" className="button">watch it</a>
                        </div>
                    </div>
                )}
                <h1 onClick={toggleWords}>WORDS</h1>
                {showWords && (
                    <div className="level">
                        <div>
                            <h3>simple words-1</h3>
                            <a href="https://youtu.be/5e8vGs7scCg?si=axjsuuSpB-pBLQED" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>simple words-2</h3>
                            <a href="https://youtu.be/w3ZanyN9BVk?si=WvcaAUF_ocjIXrfV" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>1000 Malayalam Words</h3>
                            <a href="https://youtu.be/K68-ogxQYuk?si=3l3IuYAW11zoE9jf" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>RELATION NAMES IN Telugu</h3>
                            <a href="https://youtu.be/K68-ogxQYuk?si=3l3IuYAW11zoE9jf" className="button">watch it</a>
                        </div>
                    </div>
                )}
                <h1 onClick={togglePhrases}>PHRASES</h1>
                {showPhrases && (
                    <div className="level">
                        <div>
                            <h3>Survival Phrases</h3>
                            <a href="https://youtu.be/w3ZanyN9BVk?si=Ec9D-pJCdl-9Qor9" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>Useful Phrases</h3>
                            <a href="https://youtu.be/5e8vGs7scCg?si=xJ_1OpeJYz6F43jz" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>Useful Phrases-2</h3>
                            <a href="https://youtu.be/K68-ogxQYuk?si=swazJq_eKhfV9NEy" className="button">watch it</a>
                        </div>
                    </div>
                )}
                <h1 onClick={toggleSentences}>SENTENCES</h1>
                {showSentences && (
                    <div className="level">
                        <div>
                            <h3>SELF INTRODUCTION SENTENCES</h3>
                            <a href="https://youtu.be/fJ3MUQ9WFfE?si=yWDb90Ry9v6893qU" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>MALAYALAM SENTENCES PART 1</h3>
                            <a href="https://youtu.be/I4x61VPnBhg?si=faPC9A00eePJ88w3" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>MALAYALAM SENTENCES PART 2</h3>
                            <a href="https://youtu.be/eXKCDQ0Q4Qk?si=xH9IYMp9UTXGD1Sz" className="button">watch it</a>
                        </div>
                    </div>
                )}
            </div>
        </center>
    );
}

export default Malyalam;