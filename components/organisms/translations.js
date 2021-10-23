import React from "react";

export default function Translations({
    surah,
    verse,
    audio,
    reflect,
    ayah,
    text,
    by,
}) {
    return (
        <>
            <div className="translations-left">
                <div className="mx-auto translations-option">
                    <div className="btn btn-secondary translations-number">
                        {surah}:{verse}
                    </div>
                    <div className="btn btn-secondary translations-audio">
                        <audio loop>
                            <source src={audio} type="audio/mpeg" />
                        </audio>
                    </div>
                    <div className="btn btn-secondary translations-reflect">
                        <a href="">{reflect}</a>
                    </div>
                    <div className="btn btn-secondary translations-option"></div>
                </div>
            </div>
            <div className="translations-right">
                <div className="translations-ayah">
                    <h6>{ayah}</h6>
                </div>
                <div className="translations-text">
                    <p className="translations-text__latin">{text}</p>
                    <p className="translations-text__by">{by}</p>
                </div>
            </div>
        </>
    );
}
