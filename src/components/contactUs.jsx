import "../styles/contactUs.css"
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
function ContactUs() {
    return (
        <div className="contactUsContainer">
            <p className="projectsPoppinsSubText">Get in touch</p>
            <div className="emailContainer">
                <MdEmail color="white" />
                <p className="projectsPoppinsSubText">er.noorulla@gmail.com</p>
            </div>
            <div className="phoneContainer">
                <FaPhone color="white" />
                <p className="projectsPoppinsSubText">+91 8825742708</p>
            </div>
        </div>
    )
}
export default ContactUs