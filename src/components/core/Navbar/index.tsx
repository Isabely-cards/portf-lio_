import { LuSquareMenu } from "react-icons/lu";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);

    const links = [
        { name: 'Home', sectionId: 'home-section' },
        { name: 'Sobre', sectionId: 'about-section' },
        { name: 'Educação', sectionId: 'education-section' },
        { name: 'Habilidades', sectionId: 'skills-section' },
        { name: 'Contato', sectionId: 'contact-section' },
    ];


    useEffect(() => {
        const storedSection = localStorage.getItem("activeSection");
        if (storedSection) {
            setActiveSection(storedSection);
        }

        const handleScroll = () => {
            setScrolled(window.scrollY > 800);

            const sections = links.map((link) => document.getElementById(link.sectionId));
            const visibleSection = sections.find((section) => {
                if (!section) return false;

                const rect = section.getBoundingClientRect();
                return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
            });

            if (visibleSection && visibleSection.id !== activeSection) {
                setActiveSection(visibleSection.id);
                localStorage.setItem("activeSection", visibleSection.id);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [activeSection, links]);

    const handleClick = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        setOpenMenu(false);
    };

    const isActive = (sectionId: string) => {
        return activeSection === sectionId
            ? 'text-prominence font-bold underline underline-offset-4'
            : 'font-medium';
    };

    return (
        <header className="fixed w-full z-10">
            <nav
                id="navBar"
                className={`p-4 text-white transition-all duration-300 ${scrolled || openMenu === true ? 'bg-[#411e43]' : 'bg-transparent'}`}
            >
                <div className="flex flex-row justify-between items-center text-base md:p-3 md:pl-10 md:pr-10 md:text-lg">
                    <h3>Isabely.</h3>
                    <div className="hidden md:flex flex-row text-white gap-6">
                        {links.map((link) => (
                            <button
                                key={link.name}
                                className={`${isActive(link.sectionId)} cursor-pointer`}
                                onClick={() => handleClick(link.sectionId)}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                    <LuSquareMenu
                        className="cursor-pointer md:hidden"
                        size={30}
                        onClick={() => setOpenMenu(!openMenu)}
                    />
                </div>
                {openMenu && (
                    <div className="flex flex-col items-start pt-5 absolute text-white bg-[#411e43] w-full left-0 pl-4 md:hidden">
                        {links.map((link) => (
                            <button
                                key={link.name}
                                className={`pt-2 pb-3 ${isActive(link.sectionId)}`}
                                onClick={() => handleClick(link.sectionId)}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}
