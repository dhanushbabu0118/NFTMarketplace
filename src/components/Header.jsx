import { useState } from "react";

import {
    Search,
    Sun,
    Bell,
    ChevronDown
} from "lucide-react";
import profileImage from "../assets/download.png";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {

    const navigate = useNavigate();
    const location = useLocation();

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const pages = [
        {
            name: "1. Home",
            path: "/"
        },
        {
            name: "2. Explore",
            path: "/explore"
        },
        {
            name: "3. Bids",
            path: "/bids"
        },
        {
            name: "4. Saved",
            path: "/saved"
        },
        {
            name: "5. Collections",
            path: "/collections"
        },
        {
            name: "6. Profile",
            path: "/profile"
        },
        {
            name: "7. Settings",
            path: "/settings"
        }
    ];

    const currentPage =
        pages.find(
            (page) => page.path === location.pathname
        ) || pages[0];


    const handlePageChange = (path) => {

        navigate(path);

        setDropdownOpen(false);

    };


    return (
        <header className="header">

            {/* Search */}
            <div className="search-box">

                <Search size={20} />

                <input
                    type="text"
                    placeholder="Search Here"
                />

            </div>


            {/* Right Side */}
            <div className="header-actions">

                {/* Page Dropdown */}
                <div className="page-dropdown">

                    <button
                        className="page-selector"
                        onClick={() =>
                            setDropdownOpen(
                                (previous) =>
                                    !previous
                            )
                        }
                    >

                        <span>
                            {currentPage.name}
                        </span>

                        <ChevronDown
                            size={16}
                            className={
                                dropdownOpen
                                    ? "rotate-arrow"
                                    : ""
                            }
                        />

                    </button>


                    {dropdownOpen && (

                        <div className="dropdown-menu">

                            {pages.map((page) => (

                                <button
                                    key={page.path}
                                    className={`dropdown-item ${location.pathname ===
                                        page.path
                                        ? "selected"
                                        : ""
                                        }`}
                                    onClick={() =>
                                        handlePageChange(
                                            page.path
                                        )
                                    }
                                >
                                    {page.name}
                                </button>

                            ))}

                        </div>

                    )}

                </div>


                {/* Theme */}
                <button
                    className="icon-button"
                    aria-label="Toggle theme"
                >
                    <Sun size={18} />
                </button>


                {/* Notifications */}
                <button
                    className="icon-button"
                    aria-label="Notifications"
                >
                    <Bell size={18} />
                </button>


                {/* Profile */}
                <button
                    className="header-avatar"
                    aria-label="Profile"
                    onClick={() =>
                        navigate("/profile")
                    }
                >
                    <img
                        src={profileImage}
                        alt="Profile"
                    />
                </button>

            </div>

        </header>
    );
}

export default Header;