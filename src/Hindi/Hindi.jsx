import React, { useState } from 'react';
import './Hindi.css'


function Hindi() {
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
                <h1 onClick={toggleNumbers}>BASICS IN HINDI</h1>
                {showNumbers && (
                    <div className="level">
                        <div>
                            <h3>BASICS </h3>
                            <a href="https://www.youtube.com/watch?v=ZD84HQLfB0E&list=PLsRjuO3afXH0yVqVDcOQ0-WUzVihv06dz&index=1" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>WH OUESTIONS</h3>
                            <a href="https://www.youtube.com/watch?v=eHl3xxl5cBs&list=PLsRjuO3afXH0yVqVDcOQ0-WUzVihv06dz&index=3" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>HINDI WORDS IN ENGLISH</h3>
                            <a href="https://www.youtube.com/watch?v=8XgDa--vRw0&list=PLsRjuO3afXH0yVqVDcOQ0-WUzVihv06dz&index=4" className="button">watch it</a>
                        </div>
                        
                       
                       
                    </div>
                )}
                <h1 onClick={toggleWords}>WORDS</h1>
                {showWords && (
                    <div className="level">
                          <div>
                            <h3>VEGETABLES</h3>
                            <a href="https://www.youtube.com/watch?v=FflGMZxmmkg&list=PLsRjuO3afXH0yVqVDcOQ0-WUzVihv06dz&index=5" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>FRUITS</h3>
                            <a href="https://www.youtube.com/watch?v=CM4jidfCOJI&list=PLsRjuO3afXH0yVqVDcOQ0-WUzVihv06dz&index=6" className="button">watch it</a>
                        </div>
                       
                    </div>
                )}
                <h1 onClick={togglePhrases}>NUMBERS</h1>
                {showPhrases && (
                    <div className="level">
                        <div>
                            <h3>NUMBERS </h3>
                            <a href="https://www.youtube.com/watch?v=Zs48BzeGPZE" className="button">watch it</a>
                        </div>
                       
                    </div>
                )}
                <h1 onClick={toggleSentences}>RELEATIONSHIP AND MAKEING SENTENCE</h1>
                {showSentences && (
                    <div className="level">
                        <div>
                            <h3>RELEATIONSHIP</h3>
                            <a href="https://www.youtube.com/watch?v=hkMUlvOcrnI" className="button">watch it</a>
                        </div>
                    
                           
                        
                    </div>
                )}
                <h1 onClick={toggleSentences}>conversation</h1>
                {showSentences && (
                    <div className="level">
                        <div>
                            <h3>how to talk to friends</h3>
                            <a href="https://www.youtube.com/watch?v=AWj1LQIcRnM&list=PLsRjuO3afXH0yVqVDcOQ0-WUzVihv06dz&index=26" className="button">watch it</a>
                        </div>
                        <div>
                            <h3> conversation with stranger</h3>
                            <a href="https://www.youtube.com/watch?v=RJQuT54fMqE&list=PLsRjuO3afXH0yVqVDcOQ0-WUzVihv06dz&index=110" className="button">watch it</a>
                        </div>
                      
                       
                    </div>
                )}
                <h1 onClick={toggleSentences}>COLOURS AND DIRECTIONS</h1>
                {showSentences && (
                    <div className="level">
                        <div>
                            <h3>COLOURS AND DIRECTIONS</h3>
                            <a href="https://www.youtube.com/watch?v=yHU0RxKT6p4&list=PLaXrlhEl6rFL8LZ7Gf0UKlEJLTTNkUTk_&index=14" className="button">watch it</a>
                        </div>
                       
                    </div>
                )}

            </div>
        </center>
    );
}

export default Hindi;