import React from "react";
import { Link } from "react-router-dom";

const UseNavLink = ({ path, pageName }) => {
    return (
        <>
            <Link
                to={path}
                className="text-[#696C6D] hover:text-primary transition capitalize"
            >
                {pageName}
            </Link>
        </>
    );
};

export default UseNavLink;
