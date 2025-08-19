import "../styles/teckStack.css"
import { FaReact } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGitSquare } from "react-icons/fa";
import { FaSourcetree } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { GrGraphQl } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";
import { useEffect, useState } from "react";
function TeckStack() {

    const iconSize = 60
    const color = "white"
    const stack = [
        {
            name: 'React',
            icon: <FaReact size={iconSize} color={color} />
        },
        {
            name: 'React JS',
            icon: <RiReactjsFill size={iconSize} color={color} />
        },
        {
            name: 'Java Script',
            icon: <IoLogoJavascript size={iconSize} color={color} />
        },
        {
            name: 'Type Script',
            icon: <SiTypescript size={iconSize} color={color} />
        },
        {
            name: 'Redux',
            icon: <SiRedux size={iconSize} color={color} />
        },
        {
            name: 'Fire Base',
            icon: <IoLogoFirebase size={iconSize} color={color} />
        },
        {
            name: 'Git',
            icon: <FaGitSquare size={iconSize} color={color} />
        },
        {
            name: 'Source Tree',
            icon: <FaSourcetree size={iconSize} color={color} />
        },
        {
            name: 'Rest Full Api',
            icon: <TfiReload size={iconSize} color={color} />
        },
        {
            name: 'Graph QL',
            icon: <GrGraphQl size={iconSize} color={color} />
        },
        {
            name: 'Jest',
            icon: <FaReact size={iconSize} color={color} />
        },
        {
            name: 'Detox',
            icon: <FaReact size={iconSize} color={color} />
        },
        {
            name: 'Figma',
            icon: <FaFigma size={iconSize} color={color} />
        },
    ]
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div id="techStack">
            <div className="container">
                <h1 className="poppinsHeaderText text-center mb-3">Teck Stack & Experience</h1>
            </div>
            <div className="stackContainer">
                {
                    stack.map((item, index) => {
                        return (
                            <div key={index} className="icon" style={{ width: windowWidth > 600 ? "15%" : "40%" }} >
                                {item?.icon}
                                <span style={{ marginLeft: 10, color: "white", fontSize: 12 }}>{item?.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TeckStack