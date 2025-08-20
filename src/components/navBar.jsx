import { useState, useEffect } from "react";
import "../styles/navBar.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

function NavBar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const navBarMenu = [
        { name: "About", id: "about" },
        { name: "Experience", id: "experience" },
        { name: "Tech Stack & Skills", id: "techStack" },
        { name: "Projects", id: "project" },
        { name: "Contact", id: "/contact" },
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
                        index == 4 ?
                            <a
                                href="mailto:er.noorulla@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <p key={index}
                                    onClick={() =>
                                        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=er.noorulla@gmail.com", "_blank")
                                    }
                                    className="menus poppinsNavBarText">
                                    {item?.name}
                                </p>
                            </a>
                            :
                            <p key={index}
                                onClick={() => {
                                    document.getElementById(item?.id)?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="menus poppinsNavBarText">
                                {item?.name}
                            </p>
                    ))}
                    <div className="socialMediaIconsContainer">
                        <div className="socialMediaIcons">
                            <a
                                href="https://youtu.be/C85OQlrHx2Y?si=AqZ02GuQs47hqeyO"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <IoLogoYoutube size={20} style={{ color: "white", cursor: "pointer" }} />
                            </a>
                        </div>
                        <div className="socialMediaIcons">
                            <a
                                href="https://www.linkedin.com/in/noorulla-s-d-7b2312249/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <FaLinkedinIn
                                    size={20}
                                    style={{ marginLeft: 20, marginRight: 20, color: "white" }}
                                />
                            </a>
                        </div>
                        <div className="socialMediaIcons">
                            <a href="https://www.instagram.com/_noor_ull_a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <FaInstagram size={20} style={{ color: "white" }} />
                            </a>
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
                    <div>
                        <p className="poppinsNavBarText" style={{ color: "white" }}>Welcome to my portfolio</p>
                    </div>
                    <div style={{ width: "10%" }}>
                        <p className="poppinsNavBarText" style={{ color: "white" }}>{`:-)`}</p>
                    </div>

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
                                    onClick={() => {
                                        // Close offcanvas first
                                        const offcanvasEl = document.getElementById("mobileDrawer");
                                        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl); // Bootstrap API
                                        if (bsOffcanvas) {
                                            bsOffcanvas.hide();
                                        }

                                        // Delay the scroll slightly so layout settles
                                        setTimeout(() => {
                                            document.getElementById(item?.id)?.scrollIntoView({ behavior: "smooth" });
                                        }, 300);
                                    }}
                                >
                                    {item?.name}
                                </p>
                            ))}
                            <div className="socialMediaIconsContainer mt-3">
                                <div className="socialMediaIcons">
                                    <a
                                        href="https://youtu.be/C85OQlrHx2Y?si=AqZ02GuQs47hqeyO"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: "none", color: "inherit" }}
                                    >
                                        <IoLogoYoutube style={{ color: "white", cursor: "pointer" }} />
                                    </a>
                                </div>
                                <div className="socialMediaIcons">
                                    <a
                                        href="https://www.linkedin.com/in/noorulla-s-d-7b2312249/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: "none", color: "inherit" }}
                                    >
                                        <FaLinkedinIn
                                            style={{ marginLeft: 20, marginRight: 20, color: "white" }}
                                        />
                                    </a>
                                </div>
                                <div className="socialMediaIcons">
                                    <a href="https://www.instagram.com/_noor_ull_a/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: "none", color: "inherit" }}
                                    >
                                        <FaInstagram style={{ color: "white" }} />
                                    </a>
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
