import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                NFT MARKET
            </div>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/explore">Explore</Link>
            </div>

            <button className="wallet-btn">
                Connect Wallet
            </button>

        </nav>
    );
}

export default Navbar;