import { useState, useEffect } from "react";
import "../styles/navBar.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

function NavBar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const navBarMenu = [
        { name: "About", link: "/" },
        { name: "Experience", link: "/about" },
        { name: "Tech Stack & Skills", link: "/aboutme" },
        { name: "Projects", link: "/projects" },
        { name: "Contact", link: "/contact" },
    ];

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={windowWidth >= 800 ? "navBarContainer" : "navBarminContainer"}>
            {/* Desktop Menu */}
            {windowWidth >= 800 ? (
                <>
                    {navBarMenu.map((item, index) => (
                        <p key={index} className="menus poppinsNavBarText">
                            {item?.name}
                        </p>
                    ))}
                    <div className="socialMediaIconsContainer">
                        <div className="socialMediaIcons">
                            <IoLogoYoutube style={{ color: "white" }} />
                        </div>
                        <div className="socialMediaIcons">
                            <FaLinkedinIn
                                style={{ marginLeft: 20, marginRight: 20, color: "white" }}
                            />
                        </div>
                        <div className="socialMediaIcons">
                            <FaInstagram style={{ color: "white" }} />
                        </div>
                    </div>
                </>
            ) : (
                /* Mobile Menu Button */
                <>
                    <button
                        className="btn text-white"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#mobileDrawer"
                        aria-controls="mobileDrawer"
                    >
                        ☰
                    </button>

                    {/* Offcanvas Drawer */}
                    <div
                        className="offcanvas offcanvas-start bg-dark text-white"
                        tabIndex="-1"
                        id="mobileDrawer"
                        aria-labelledby="mobileDrawerLabel"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="mobileDrawerLabel">
                                Menu
                            </h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            {navBarMenu.map((item, index) => (
                                <p
                                    key={index}
                                    className="menus poppinsNavBarText"
                                    data-bs-dismiss="offcanvas"
                                    style={{ marginBottom: 10 }}
                                >
                                    {item?.name}
                                </p>
                            ))}
                            <div className="socialMediaIconsContainer mt-3">
                                <div className="socialMediaIcons">
                                    <IoLogoYoutube style={{ color: "white" }} />
                                </div>
                                <div className="socialMediaIcons">
                                    <FaLinkedinIn
                                        style={{ marginLeft: 20, marginRight: 20, color: "white" }}
                                    />
                                </div>
                                <div className="socialMediaIcons">
                                    <FaInstagram style={{ color: "white" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default NavBar;
