import { useEffect, useState } from "react";

function Header() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        document.body.classList.toggle("light-theme", !darkMode);
    }, [darkMode]);

    return (
        <header
            className="header"
            style={{
                background: "red",
                minHeight: "68px",
                width: "100%"
            }}
        >

            <div className="search-box">
                <span>🔍</span>
                <input
                    type="text"
                    placeholder="Search Here"
                />
            </div>

            <div className="header-actions">

                <button
                    className="icon-button"
                    aria-label="Toggle theme"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? "☀️" : "🌙"}
                </button>

                <button
                    className="icon-button"
                    aria-label="Notifications"
                >
                    🔔
                </button>

                <div className="header-avatar">
                    <img
                        src="/src/assets/download.png"
                        alt="User"
                    />
                </div>

            </div>

        </header>
    );
}

export default Header;