import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import Translations from "../components/organisms/translations";
import { getDetail } from "../services/surah";

export default function SurahDetails() {
    const { query, isReady } = useRouter();
    const [detail, setDetail] = useState([]);

    const getDetailList = useCallback(
        async (id) => {
            const data = await getDetail(id);
            setDetail(data.verses);
        },
        [getDetail]
    );

    useEffect(() => {
        if (isReady) {
            getDetailList(query.id);
        }
    }, [isReady]);

    return (
        <div className="container">
            <div className="container mt-3 content-box">
                <div className="container mt-3 content-tabs__details">
                    {/* Translations */}
                    <div>
                        <div className="row translations">
                            {detail.map((item) => {
                                return (
                                    <Translations
                                        surah={query.id}
                                        verse={item.number.inSurah}
                                        audio={item.audio.primary}
                                        reflect=""
                                        ayah={item.text.arab}
                                        text={item.text.transliteration.en}
                                        by={item.translation.id}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
