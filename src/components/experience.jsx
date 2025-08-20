import "../styles/experience.css";
import Store from "../assets/store.jpg"
import Admin from "../assets/admin.png"
import Workforce from "../assets/workforce.png"
import { useEffect, useState } from "react";


function Experience() {

    const workExperience = [
        {
            name: "Zenbaske Store",
            image: Store,
            description: 'Worked on Zenbasket Store, a cross-platform mobile application for an online store that enables users to browse products, make purchases, and track orders. I contributed to the development of Product Listings, Quick View, and Authentication features, ensuring a smooth, secure, and user-friendly shopping experience.'
        },
        {
            name: "Zenbaske Admin",
            image: Admin,
            description: 'Worked on Zenbasket Admin, a cross-platform mobile application designed for e-commerce business owners and administrators to efficiently manage products, orders, customers, and analytics. My key contributions included developing and enhancing the Segments, Credits, Discounts, and Gift Cards modules, ensuring smooth functionality and a seamless user experience for business administrators.'
        },
        {
            name: "Zenbaske Work space",
            image: Workforce,
            description: 'In my workforce project, I integrated GraphQL APIs to optimize data fetching and minimize redundant network calls, which significantly improved application performance. I developed TypeScript-based components, increasing development efficiency by 35% while reducing type-related bugs and ensuring better code reliability. Additionally, I implemented Redux for state management, enabling predictable data handling, simplified debugging, and a more maintainable application structure.'
        },
    ]


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div id="experience" className="expContainer">
            <div className="header">
                <h1 className="poppinsHeaderText text-center mb-3" style={{ color: "black", fontSize: windowWidth > 600 ? 36 : 24 }}>Experience</h1>
                <p className="poppinsTinyText opacity-50" style={{ color: "black", textAlign: windowWidth > 600 ? 'center' : 'justify' }}>I am a React Native Developer with over 3 years of experience, specializing in building and maintaining scalable mobile applications. During my time at Centizen, I contributed to key projects such as Enbasket Store, where I worked on enhancing the shopping experience with intuitive UI and optimized performance; Zenbasket Admin, where I developed features to support smooth business operations; and Zenbasket Workspace, where I played a role in improving team collaboration and usability. My focus has always been on writing clean, reusable code and delivering user-friendly solutions that align with business goals.</p>
            </div>
            <div className="expBody">
                {
                    workExperience.map((item, index) => {
                        return (
                            <div key={index} className="expInfo" style={{ marginTop: windowWidth > 600 ? 0 : 30 }}>
                                {
                                    index % 2 == 0 && windowWidth > 600 ?
                                        <>
                                            <div className="expContent">
                                                <p style={{ color: "black", textAlign: 'justify' }} className="poppinsSubText expDiscription">{item?.description}</p>
                                            </div>
                                            <div className="expImageContanine">
                                                <img src={item?.image} className="expImage" alt="exp" />
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="expImageContanine">
                                                <img src={item?.image} className="expImage" alt="exp" />
                                            </div>
                                            <div className="expContent">
                                                <p style={{ color: "black", textAlign: 'justify' }} className="poppinsSubText expDiscription">{item?.description}</p>
                                            </div>
                                        </>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Experience;