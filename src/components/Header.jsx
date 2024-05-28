import { Link } from "react-router-dom";
import { images } from "../img/assets";
import UseNavLink from "./UseNavLink";
import Socials from "./Socials";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <>
            <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
                <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
                    <Link to={"/"} className="max-w-[200px]">
                        <img src={images.logo} alt="logo" />
                    </Link>
                    <nav className="hidden xl:flex gap-x-12 font-semibold">
                        {["home", "about", "portfolio", "contact"].map(
                            (link, index) => (
                                <UseNavLink
                                    key={index}
                                    pageName={link}
                                    path={link === "home" ? "/" : `/${link}`}
                                />
                            )
                        )}
                    </nav>
                </div>
                <Socials />
                <MobileNav />
            </header>
        </>
    );
};

export default Header;
