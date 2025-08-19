import "../styles/projects.css"
import ToDoList from "../assets/toDoList.png"
import Restaurtent from "../assets/p1.png"
import Grocery from "../assets/p21.png"
import { useEffect, useState } from "react";

function Projects() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div id="project" className="projectsContainer">
            <h1 className="projectsPoppinsHeaderTex text-center mb-3">Projects</h1>
            <div className="projetcWork" style={{ flexDirection: windowWidth > 600 ? 'row' : 'column' }}>
                <div className="projectsBox">
                    <img src={ToDoList} className="projectsImage" alt="To Do List" />
                    <p className="projectsPoppinsHeaderText">To Do List</p>
                    <p style={{ textAlign: "justify" }} className="projectsPoppinsTinyText">Built a To-Do List App using React JS, allowing users to add, mark as complete, and delete tasks with a clean and simple interface. Integrated localStorage to persist tasks, ensuring data is saved even after refreshing the browser. This project highlights my skills in state management, component-based design, and React hooks for building interactive applications. It also demonstrates my ability to create a user-friendly UI with smooth functionality. Through this project, I strengthened my understanding of React fundamentals and real-world project structuring.</p>
                    <a href="https://todolist-ajzr.onrender.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <button type="button" class="btn demo-btn mt-3">Live demo</button>
                    </a>
                </div>
                <div className="projectsBox">
                    <img src={Restaurtent} className="projectsImage" alt="To Do List" />
                    <p className="projectsPoppinsHeaderText">Food Vlog</p>
                    <p style={{ textAlign: "justify" }} className="projectsPoppinsTinyText">Designed a Food Vlog App UI in Figma, focusing on delivering a modern, engaging, and user-friendly experience for food enthusiasts and vloggers. The design includes intuitive navigation, visually rich layouts, and interactive prototypes that highlight video content and food discovery. I applied a consistent design system, typography, and color palette to ensure a clean and scalable interface. This project reflects my ability to combine creativity with usability, turning ideas into practical and visually appealing design solutions.</p>
                    <a href="https://www.figma.com/proto/cAi6945Z7XnvyWftS5SK4x/Food-Cam?node-id=102-2&t=HNmFYCj39Qn8sCwl-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=190%3A68&show-proto-sidebar=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <button type="button" class="btn demo-btn mt-3">Live demo</button>
                    </a>
                </div>
                <div className="projectsBox">
                    <img src={Grocery} className="projectsImage" alt="To Do List" />
                    <p className="projectsPoppinsHeaderText">Green Grocery</p>
                    <p style={{ textAlign: "justify" }} className="projectsPoppinsTinyText">Designed a Grocery Shopping App UI in Figma with a focus on simplicity, usability, and modern design patterns. The app includes intuitive navigation, product listings and a smooth checkout flow to enhance the online shopping experience. I created a consistent design system with color schemes and reusable components, ensuring a clean and scalable UI. Interactive prototypes were developed to simulate real user flows, helping visualize the end-to-end shopping journey. This project showcases my ability to transform user needs into engaging.</p>
                    <a href="https://www.figma.com/proto/Djdzjm3Q6t6mlB5pQkJAd7/Grocery-App?node-id=60-145&p=f&t=IE4vMLBHon0kiCrC-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <button type="button" class="btn demo-btn mt-3">Live demo</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects