import { useState } from "react"
import logo from "../assets/logo.png"
import { NAVIGATION_LINKS } from "../constants";

import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileOpen(!isMobileMenuOpen)
    }

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if(targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPositon = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPositon,
                behavior: "smooth"
            })
        }
        setIsMobileOpen(false)
    }
  return (
    <div>
        <nav className="fixed left-0 right-0 top-4 z-50">
            {/* Desktop Menu */}

            <div className="mx-auto hidden max-w-[600px]  items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
                <div className="flex justify-between items-center gap-6">
                    <div>
                        <a href="">
                            <img src={logo} alt="logo"  className="w-28 h-10 object-fill" />
                        </a>
                    </div>
                    <div>
                        <ul className="flex items-center gap-4 ">
                            {NAVIGATION_LINKS.map((item,index) => (
                                <li key={index}>
                                    <a href={item.href} onClick={(e) => handleLinkClick (e, item.href)} className="text-sm hover:text-yellow-400">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className="rounded-lg backdrop-blur-md lg:hidden mx-5">
                <div className="flex items-center justify-between">
                    <div>
                        <a href="#">
                            <img src={logo} width={90} className="m-2" alt="" />
                        </a>
                    </div>
                    <div className="flex items-center ">
                        <button className="focus:outline-none lg:hidden" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? (
                                <FaTimes className="mt-2 h-6 w-5" />
                            ) : (
                                <FaBars className="mt-2 h-6 w-5" />
                            )}
                        </button>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-lg bg-black/50 p-3 rounded-xl">
                        {NAVIGATION_LINKS.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="block w-full text-lg  hover:text-yellow-400" onClick={(e) => handleLinkClick(e,item.href)}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    </div>
  )
}

export default NavBar