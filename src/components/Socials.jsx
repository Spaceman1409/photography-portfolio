import { ImFacebook, ImInstagram, ImTwitter, ImYoutube } from "react-icons/im";
import SocialLink from "./SocialLink";

const Socials = () => {
    const social_sites = [
        {
            id: 1,
            site_name: "facebook",
            address: "https://facebook.com",
            icon: <ImFacebook />,
        },
        {
            id: 2,
            site_name: "Instagram",
            address: "https://instagram.com",
            icon: <ImInstagram />,
        },
        {
            id: 3,
            site_name: "Twitter",
            address: "https://twitter.com",
            icon: <ImTwitter />,
        },
        {
            id: 4,
            site_name: "Youtube",
            address: "https://youtube.com",
            icon: <ImYoutube />,
        },
    ];
    return (
        <>
            <div className="hidden xl:flex ml-24">
                <ul className="flex gap-x-4">
                    {social_sites.map((site) => (
                        <SocialLink
                            key={site.id}
                            webAddress={site.address}
                            siteIcon={site.icon}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Socials;
