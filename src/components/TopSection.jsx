import { Link } from "react-router-dom";

function TopSection() {
    return (
        <section className="top-section">

            {/* =========================
                DISCOVER CARD
            ========================= */}

            <div className="discover-card">

                <div className="discover-content">

                    <span className="hero-label">
                        NFT MARKETPLACE
                    </span>

                    <h1>
                        Discover, Collect,
                        <br />
                        Sell and Create
                        <br />
                        your NFT
                    </h1>

                    <p>
                        Digital marketplace for crypto
                        collectibles and non-fungible tokens
                    </p>

                    <div className="discover-buttons">

                        <Link
                            to="/explore"
                            className="explore-button"
                        >
                            Explore
                        </Link>

                        <button
                            className="create-button"
                            type="button"
                        >
                            Create
                        </button>

                    </div>

                </div>

                {/* Decorative shapes */}
                <div className="hero-decoration">

                    <div className="hero-circle"></div>

                    <div className="hero-small-circle"></div>

                </div>

            </div>


            {/* =========================
                TOP NFT
            ========================= */}

            <div className="top-nft-card">

                {/* NFT Image */}

                <div className="top-nft-image">

                    <img
                        src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=700&q=80"
                        alt="Brighten LQ NFT"
                    />

                    <span className="featured-label">
                        Featured
                    </span>

                </div>


                {/* NFT Details */}

                <div className="top-nft-details">

                    {/* Creator */}

                    <div className="creator">

                        <img
                            src="https://i.pravatar.cc/100?img=12"
                            alt="John Abraham"
                        />

                        <div>

                            <strong>
                                John Abraham
                            </strong>

                            <span className="online-dot"></span>

                        </div>

                    </div>


                    {/* NFT Name */}

                    <h2>
                        Brighten LQ
                    </h2>


                    {/* Bid Information */}

                    <div className="bid-details">

                        <div>

                            <span>
                                Auction time
                            </span>

                            <strong>
                                3h 1m 50s
                            </strong>

                        </div>


                        <div>

                            <span>
                                Current Bid
                            </span>

                            <strong className="purple-text">
                                0.05 ETH
                            </strong>

                            <small>
                                0.15 ETH
                            </small>

                        </div>

                    </div>


                    {/* Buttons */}

                    <div className="top-buttons">

                        <button
                            className="place-top-bid"
                            type="button"
                        >
                            Place a Bid
                        </button>

                        <button
                            className="details-button"
                            type="button"
                        >
                            Details
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default TopSection;