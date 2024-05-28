import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Portfolio = lazy(() => import("../pages/Portfolio"));
const Contact = lazy(() => import("../pages/Contact"));

const AnimRoutes = () => {
    return (
        <>
            <Suspense fallback={"Loading..."}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default AnimRoutes;
