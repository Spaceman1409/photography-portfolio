import { Link } from "react-router-dom";

const SocialLink = ({ siteIcon, webAddress }) => {
    return (
        <>
            <li>
                <Link to={webAddress} target="_blank">
                    {siteIcon}
                </Link>
            </li>
        </>
    );
};

export default SocialLink;
