import Footer from "../components/organisms/footer";
import Navbar from "../components/organisms/navbar";
import PopularSearches from "../components/organisms/popularSearches";
import Search from "../components/organisms/search";
import ReactDOM from "react-dom";
import React from "react";
import OtherSites from "../components/organisms/otherSites";
import Content from "../components/organisms/content";

export default function Home() {
    return (
        <>
            {/* <Navbar /> */}
            <Search />
            {/* <PopularSearches /> */}
            ReactDOM.render(
            <React.StrictMode>
                <Content />
            </React.StrictMode>
            , document.getElementById('root') );
            {/* <OtherSites /> */}
            {/* <Footer /> */}
        </>
    );
}
