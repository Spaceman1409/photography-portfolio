import { Link } from "react-router-dom";
import { images } from "../img/assets";
const About = () => {
    return (
        <>
            <div className="section">
                <div className="container mx-auto h-full relative">
                    <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
                        <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
                            <img src={images.about_woman} alt="about_woman" />
                        </div>
                        <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-center">
                            <h1 className="h1">About me</h1>
                            <p className="mb-12 max-w-sm">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Facilis consectetur tenetur
                                ipsam saepe eius corporis sequi nihil aspernatur
                                impedit quia.
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Explicabo error minus sequi
                                qui debitis laudantium doloremque fugit rerum
                                eius tenetur!
                            </p>
                            <Link to="/portfolio">View my work</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
