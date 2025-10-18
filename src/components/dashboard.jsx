import NavBar from "./navBar";
import "../styles/dashBoard.css";
import MyImages from "../assets/NOOR.jpg"
import centizen from "../assets/centizen.png"
import figma from "../assets/figma.png"
import Zoho from "../assets/zoho.png"
import Experience from "./experience";
import TeckStack from "./techStack";
import Projects from "./projects";
import { useEffect, useState } from "react";
import ContactUs from "./contactUs";



function DashBoard() {

    const workExp = [
        { company: Zoho, exp: "Internship" },
        { company: centizen, exp: "3+ years" },
        { company: figma, exp: "Figma tutoriyal", subExp: "Social media tutor" },
    ]

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div>
            <NavBar />
            <div id="about" className="infoTextContainer d-flex flex-column flex-md-row align-items-center gap-3">
                {
                    windowWidth < 750 &&
                    <div className="myImageContainer d-flex justify-content-center justify-content-md-end mt-3" >
                        <img src={MyImages} className="myImage" alt="Noorulla" />
                    </div>
                }
                <div className="infoText" style={{ justifyContent: windowWidth > 600 ? "center" : "flex-start", }}>
                    <p className="poppinsHeaderText" style={{ color: "white" }}>Noorulla SD</p>
                    <p className="poppinsSubText my-3" style={{ color: "white", textAlign: windowWidth > 600 ? 'initial' : 'justify' }}>Hi, I’m Noorulla, a passionate Software Developer with over 3 years of experience in building web and mobile applications. I love solving real-world problems with clean, efficient, and user-friendly code.</p>
                    <button type="button" class="btn glow-btn mt-3"
                        onClick={() => {
                            document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >Let's get started</button>
                </div>
                {
                    windowWidth > 750 &&
                    <div className="myImageContainer d-flex justify-content-center justify-content-md-end">
                        <img src={MyImages} className="myImage" alt="Noorulla" />
                    </div>
                }
                <div className="workedContainer order-2" style={{ paddingLeft: windowWidth > 600 ? 150 : 0 }}>
                    <p className="poppinsSubText">Worked with</p>
                    <div className="workExp">
                        {
                            workExp.map((item, index) => {
                                return (
                                    <a
                                        key={index}
                                        href="https://www.instagram.com/abu_uidesigner/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: "none", color: "inherit" }}
                                    >
                                        <div key={index} className="centizenConainer">
                                            <img src={item?.company} className={item?.company == figma ? "figma" : "centizen"} alt="Centizen" />
                                            <div>

                                                <p className="poppinsSubText" style={{ marginLeft: 10, width: item?.company == figma ? 120 : 80 }}>{item?.exp}</p>
                                                {item?.subExp && <p style={{ fontWeight: 50, fontSize: 12, color: "#FFFFFF", marginLeft: 10, opacity: 0.5, width: item?.company == figma ? 120 : null }}>{item?.subExp}</p>}
                                            </div>
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Experience />
            <TeckStack />
            <Projects />
            <ContactUs />
        </div>
    )
}

export default DashBoard;