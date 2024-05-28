import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MobileNav = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuVariants = {
        hidden: { x: "100%" },
        show: { x: 0, transition: { ease: [0.6, 0.01, -0.05, 0.9] } },
    };
    return (
        <>
            <nav className="xl:hidden text-primary">
                <div
                    className="text-3xl cursor-pointer"
                    onClick={() => setOpenMenu(true)}
                >
                    <CgMenuRight />
                </div>
                <motion.div
                    variants={menuVariants}
                    initial="hidden"
                    animate={openMenu ? "show" : ""}
                    className="bg-white shadow-2xl w-full absolute top-0 ring-0 max-w-xs h-screen z-20"
                >
                    <div
                        className="absolute text-4xl z-30 left-4 top-14 text-primary cursor-pointer"
                        onClick={() => setOpenMenu(false)}
                    >
                        <IoMdClose />
                    </div>
                    <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary text-3xl font-bold">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </motion.div>
            </nav>
        </>
    );
};

export default MobileNav;
