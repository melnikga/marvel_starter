import { useState } from "react/cjs/react.development";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from '../../resources/img/vision.png';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import ComicsList from "../comicsList/ComicsList";

const App = () => {
    
    const [selectedChar, setChar] = useState(null);


    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <div className="app">
            <AppHeader/>
            <main>
                {/* <RandomChar/>
                <div className="char__content">
                    <CharList onCharSelected={onCharSelected}/>
                    <ErrorBoundary>
                        <CharInfo charId={selectedChar}/>    
                    </ErrorBoundary>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/> */}
                <ComicsList/>
            </main>
        </div>
    )
}

export default App;