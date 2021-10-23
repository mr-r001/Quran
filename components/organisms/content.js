import { useCallback, useEffect, useState } from "react";
import { getSurah } from "../../services/surah";
import Juz from "../atoms/ListNumbers/numbers";
import SurahCards from "../molecules/surahCards";

function Content() {
    const [toggleState, setToggleState] = useState(1);
    const [surah, setSurah] = useState([]);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const getSurahList = useCallback(async () => {
        const data = await getSurah();
        setSurah(data);
    }, [getSurah]);

    useEffect(() => {
        getSurahList();
    }, []);

    return (
        <div className="container mt-1 content-box">
            <div className="mx-auto bloc-tabs">
                {/* Surah Tab */}
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    Show Surah
                </button>

                {/* Juz Tab */}
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Show Juz
                </button>
            </div>

            <div className="container content-tabs">
                {/* Show Surah */}
                <div
                    className={
                        toggleState === 1
                            ? "content  active-content"
                            : "content"
                    }
                >
                    <div className="px-1 py-3 row">
                        {surah.map((item) => {
                            return (
                                <SurahCards
                                    key={item.number}
                                    id={item.number}
                                    number={item.number}
                                    title={item.name.transliteration.id}
                                    meaning={item.name.translation.id}
                                    arabic={item.name.short}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* Show Juz */}
                <div
                    className={
                        toggleState === 2
                            ? "content  active-content"
                            : "content"
                    }
                >
                    <div className="juz-container">
                        {/* JUZ 1 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="1" />
                            <SurahCards
                                show="juz"
                                number=""
                                title="Al-Fatihah"
                                meaning="The Opener"
                                arabic="الفاتحة"
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 2 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="2" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 3 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="3" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 4 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="4" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 5 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="5" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 6 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="6" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 7 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="7" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 8 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="8" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 9 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="9" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 10 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="10" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 11 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="11" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 12 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="12" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 13 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="13" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 14 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="14" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 15 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="15" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 16 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="16" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 17 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="17" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 18 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="18" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 19 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="19" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 20 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="20" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 21 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="21" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 22 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="22" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 23 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="23" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 24 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="24" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 25 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="25" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 26 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="26" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 27 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="27" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 28 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="28" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 29 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="29" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>

                        {/* JUZ 30 */}
                        <div className="px-2 pt-4 mt-3 juz-card">
                            <Juz number="30" />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                            <SurahCards
                                show="juz"
                                number=""
                                title=""
                                meaning=""
                                arabic=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
