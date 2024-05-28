import { Link } from "react-router-dom";
import { images } from "../img/assets";

const Home = () => {
    return (
        <>
            <div className="section">
                <div className="container mx-auto h-full relative">
                    <div className="flex flex-col justify-center">
                        <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
                            <h1 className="h1">
                                Photographer <br /> & film maker
                            </h1>
                            <p className="text-[26px] lg:text-[36px] mb-4 lg:mb-12">
                                Delhi, India
                            </p>
                            <Link to="/contact" className="btn mb-[30px]">
                                Hire me
                            </Link>
                        </div>
                        <div className="flex justify-end max-h-96 lg:max-h-max">
                            <div className="relative lg:-right-40 overflow-hidden">
                                <img src={images.home_woman} alt="home_woman" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
