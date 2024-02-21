import React from "react";
import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards"
import Footer from "./components/Footer";
function App() {

    return (
        <>
            <Header />
            <div className="grid-container">
                <div className="header">
                    <h2>Header</h2>
                </div>
                <Cards />
                <Footer />
            </div>
        </>)
}
export default App;