import { FaArrowUpLong } from "react-icons/fa6";
import Button from "../Button";

export default function Foother() {
    const ButtonOnclick = () => {
        localStorage.setItem("activeSection", "home-section" );
        document.getElementById("home-section")?.scrollIntoView({ behavior: "smooth" });

    }
    return (
        <footer className="flex flex-row justify-around items-center bg-purple-50">
            <span className="p-4 md:p-6">by Isabely | 2025</span>
            <div className="">
                <Button onClick={ButtonOnclick} className="button2">
                    <FaArrowUpLong/>
                </Button>
            </div>
        </footer>
    )
}