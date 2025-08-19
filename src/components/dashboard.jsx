import NavBar from "./navBar";
import "../styles/dashBoard.css";
import MyImages from "../assets/NOOR.jpg"
import centizen from "../assets/centizen.png"
import Zoho from "../assets/zoho.png"
import Experience from "./experience";
import TeckStack from "./techStack";
import Projects from "./projects";
import { useEffect, useState } from "react";



function DashBoard() {

    const workExp = [
        { company: Zoho },
        { company: centizen },
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
                    <p className="poppinsSubText my-3" style={{ color: "white", textAlign: windowWidth > 600 ? 'initial' : 'justify' }}>Hi, I’m Noorulla, a passionate Software Developer with over 2 years of experience in building web and mobile applications. I love solving real-world problems with clean, efficient, and user-friendly code.</p>
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
                <div className="workedContainer order-2 mt-3" style={{ paddingLeft: windowWidth > 600 ? 150 : 0 }}>
                    <p className="poppinsSubText">Worked with</p>
                    <div className="workExp">
                        {
                            workExp.map((item, index) => {
                                return (
                                    <div key={index} className="centizenConainer">
                                        <img src={item?.company} className="centizen" alt="Centizen" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Experience />
            <TeckStack />
            <Projects />
        </div>
    )
}

export default DashBoard;