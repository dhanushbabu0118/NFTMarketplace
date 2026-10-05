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

import { useNavigate } from "react-router-dom";

function Sidebar() {

    const navigate = useNavigate();

    return (
        <aside className="sidebar">

            <div className="sidebar-logo">
                <WalletCards size={20} />
            </div>

            <nav className="sidebar-menu">

                {/* Home */}
                <button
                    className="sidebar-item active"
                    aria-label="Home"
                    onClick={() => navigate("/")}
                >
                    <Grid2X2 size={19} />
                </button>

                {/* Bids */}
                <button
                    className="sidebar-item"
                    aria-label="Bids"
                    onClick={() => navigate("/bids")}
                >
                    <BriefcaseBusiness size={19} />
                </button>

                {/* Saved */}
                <button
                    className="sidebar-item"
                    aria-label="Saved"
                    onClick={() => navigate("/saved")}
                >
                    <Heart size={19} />
                </button>

                {/* Collections */}
                <button
                    className="sidebar-item"
                    aria-label="Collections"
                    onClick={() => navigate("/collections")}
                >
                    <Star size={19} />
                </button>

                {/* Profile */}
                <button
                    className="sidebar-item"
                    aria-label="Profile"
                    onClick={() => navigate("/profile")}
                >
                    <CircleUserRound size={19} />
                </button>

                {/* Settings */}
                <button
                    className="sidebar-item"
                    aria-label="Settings"
                    onClick={() => navigate("/settings")}
                >
                    <Settings size={19} />
                </button>

            </nav>

            {/* Logout */}
            <button
                className="sidebar-logout"
                aria-label="Logout"
                onClick={() => navigate("/")}
            >
                <LogOut size={19} />
            </button>

        </aside>
    );
}

export default Sidebar;