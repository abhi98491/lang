import React, { useState } from 'react';
import './Kannada.css';


function Kannada() {
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
                <h1 onClick={toggleNumbers}>BASICS IN KANADA</h1>
                {showNumbers && (
                    <div className="level">
                        <div>
                            <h3>TIME </h3>
                            <a href="https://www.youtube.com/watch?v=RuRmq7VyCaQ&list=PLOb5Wwt1GhOkY5xCbbl_J6Tkd2-YmZ46B&index=1" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>WEIGHTS</h3>
                            <a href="https://www.youtube.com/watch?v=InlQqz7xTsw&list=PLOb5Wwt1GhOkY5xCbbl_J6Tkd2-YmZ46B&index=2" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>GRADES</h3>
                            <a href="https://www.youtube.com/watch?v=glKq-LlU3-8&list=PLOb5Wwt1GhOkY5xCbbl_J6Tkd2-YmZ46B&index=3" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>ARTICLES</h3>
                            <a href="https://www.youtube.com/watch?v=5TUxkwrq5Y0&list=PLOb5Wwt1GhOkY5xCbbl_J6Tkd2-YmZ46B&index=5" className="button">watch it</a>
                        </div>
                       
                       
                    </div>
                )}
                <h1 onClick={toggleWords}>GRAMMER</h1>
                {showWords && (
                    <div className="level">
                          <div>
                            <h3>NOUN AND PRONOUN</h3>
                            <a href="https://www.youtube.com/watch?v=WoOAfj3BzDY&list=PLOb5Wwt1GhOkY5xCbbl_J6Tkd2-YmZ46B&index=6" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>PRONOUN</h3>
                            <a href="https://www.youtube.com/watch?v=AWY5KfP4R5k&list=PLOb5Wwt1GhOkY5xCbbl_J6Tkd2-YmZ46B&index=7" className="button">watch it</a>
                        </div>
                       
                    </div>
                )}
                <h1 onClick={togglePhrases}>NUMBERS & VEGETABLES</h1>
                {showPhrases && (
                    <div className="level">
                        <div>
                            <h3>NUMBERS AND VEGETABLES</h3>
                            <a href="https://www.youtube.com/watch?v=LmbWOXFxekQ&list=PLaXrlhEl6rFL8LZ7Gf0UKlEJLTTNkUTk_&index=2" className="button">watch it</a>
                        </div>
                       
                    </div>
                )}
                <h1 onClick={toggleSentences}>RELEATIONSHIP AND MAKEING SENTENCE</h1>
                {showSentences && (
                    <div className="level">
                        <div>
                            <h3>RELEATIONSHIP AND MAKEING SENTENCE</h3>
                            <a href="https://www.youtube.com/watch?v=rgjWL8pZRMI&list=PLaXrlhEl6rFL8LZ7Gf0UKlEJLTTNkUTk_&index=3" className="button">watch it</a>
                        </div>
                        <div>
                            <h3> SENTENCES FORMATION</h3>
                            <a href="https://www.youtube.com/watch?v=RhgMJ2iqduQ&list=PLaXrlhEl6rFL8LZ7Gf0UKlEJLTTNkUTk_&index=4" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>OUESTIONS FORMATION</h3>
                            <a href="https://www.youtube.com/watch?v=8JZLGoUH0FI&list=PLaXrlhEl6rFL8LZ7Gf0UKlEJLTTNkUTk_&index=5" className="button">watch it</a>
                        </div>
                        <div>
                            <h3>sentence makeing with we</h3>
                            <a href="https://www.youtube.com/watch?v=0imKL8jQUGA&list=PLaXrlhEl6rFL8LZ7Gf0UKlEJLTTNkUTk_&index=6" className="button">watch it</a>
                        </div>
                        
                    </div>
                )}
                <h1 onClick={toggleSentences}>conversation</h1>
                {showSentences && (
                    <div className="level">
                        <div>
                            <h3>how to talk to friends</h3>
                            <a href="https://www.youtube.com/watch?v=V63y-HYrQ5Y&list=PLaXrlhEl6rFL8LZ7Gf0UKlEJLTTNkUTk_&index=11" className="button">watch it</a>
                        </div>
                        <div>
                            <h3> conversation with stranger</h3>
                            <a href="https://www.youtube.com/watch?v=nb3I-5h4R-8&list=PLaXrlhEl6rFL8LZ7Gf0UKlEJLTTNkUTk_&index=12" className="button">watch it</a>
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

export default Kannada;