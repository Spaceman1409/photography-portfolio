import { Fragment } from "react";
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Header />
                <AnimRoutes />
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
