import {
    Grid2X2,
    BriefcaseBusiness,
    Heart,
    Star,
    CircleUserRound,
    Settings,
    LogOut,
    WalletCards
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <aside className="sidebar">

            <div className="sidebar-logo">
                <WalletCards size={20} />
            </div>

            <nav className="sidebar-menu">

                <button
                    className={`sidebar-item ${location.pathname === "/"
                            ? "active"
                            : ""
                        }`}
                    onClick={() => navigate("/")}
                    aria-label="Home"
                >
                    <Grid2X2 size={19} />
                </button>

                <button
                    className={`sidebar-item ${location.pathname === "/bids"
                            ? "active"
                            : ""
                        }`}
                    onClick={() => navigate("/bids")}
                    aria-label="Bids"
                >
                    <BriefcaseBusiness size={19} />
                </button>

                <button
                    className={`sidebar-item ${location.pathname === "/saved"
                            ? "active"
                            : ""
                        }`}
                    onClick={() => navigate("/saved")}
                    aria-label="Saved"
                >
                    <Heart size={19} />
                </button>

                <button
                    className={`sidebar-item ${location.pathname === "/collections"
                            ? "active"
                            : ""
                        }`}
                    onClick={() => navigate("/collections")}
                    aria-label="Collections"
                >
                    <Star size={19} />
                </button>

                <button
                    className={`sidebar-item ${location.pathname === "/profile"
                            ? "active"
                            : ""
                        }`}
                    onClick={() => navigate("/profile")}
                    aria-label="Profile"
                >
                    <CircleUserRound size={19} />
                </button>

                <button
                    className={`sidebar-item ${location.pathname === "/settings"
                            ? "active"
                            : ""
                        }`}
                    onClick={() => navigate("/settings")}
                    aria-label="Settings"
                >
                    <Settings size={19} />
                </button>

            </nav>

            <button
                className="sidebar-logout"
                aria-label="Logout"
            >
                <LogOut size={19} />
            </button>

        </aside>
    );
}

export default Sidebar;