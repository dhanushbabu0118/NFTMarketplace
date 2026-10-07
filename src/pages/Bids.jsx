import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import profileImage from "../assets/download.png";

function Bids() {

    const bids = [
        {
            id: 1,
            name: "Cute Cube Cool",
            image:
                "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?auto=format&fit=crop&w=300&q=80",
        },
        {
            id: 2,
            name: "Cute Cube Cool",
            image:
                "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?auto=format&fit=crop&w=300&q=80",
        },
        {
            id: 3,
            name: "Liquid Wave",
            image:
                "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=300&q=80",
        },
        {
            id: 4,
            name: "Cute Cube Cool",
            image:
                "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?auto=format&fit=crop&w=300&q=80",
        },
        {
            id: 5,
            name: "Cute Cube Cool",
            image:
                "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?auto=format&fit=crop&w=300&q=80",
        },
        {
            id: 6,
            name: "Liquid Wave",
            image:
                "https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=300&q=80",
        },
        {
            id: 7,
            name: "Liquid Wave",
            image:
                "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=300&q=80",
        },
    ];

    return (
        <div className="app-layout">

            <Sidebar />

            <div className="main-area">

                <Header />

                <main className="bids-page">

                    {/* Page Heading */}
                    <div className="bids-page-heading">

                        <div>
                            <span className="bids-page-label">
                                NFT MARKETPLACE
                            </span>

                            <h1>
                                Bids
                            </h1>

                            <p>
                                Manage your active NFT bids
                            </p>
                        </div>

                        <div className="bids-breadcrumb">
                            Home
                            <span>›</span>
                            Bids
                        </div>

                    </div>


                    {/* Statistics */}
                    <section className="bids-statistics">

                        <div className="bid-stat-card">

                            <div className="bid-stat-icon purple">
                                ↗
                            </div>

                            <div>
                                <strong>
                                    24K
                                </strong>

                                <span>
                                    Artworks
                                </span>
                            </div>

                        </div>


                        <div className="bid-stat-card">

                            <div className="bid-stat-icon green">
                                ↗
                            </div>

                            <div>
                                <strong>
                                    82K
                                </strong>

                                <span>
                                    Auctions
                                </span>
                            </div>

                        </div>


                        <div className="bid-stat-card">

                            <div className="bid-stat-icon yellow">
                                ↗
                            </div>

                            <div>
                                <strong>
                                    200
                                </strong>

                                <span>
                                    Creators
                                </span>
                            </div>

                        </div>


                        <div className="bid-stat-card">

                            <div className="bid-stat-icon red">
                                ↗
                            </div>

                            <div>
                                <strong>
                                    89
                                </strong>

                                <span>
                                    Canceled
                                </span>
                            </div>

                        </div>

                    </section>


                    {/* Active Bids */}
                    <section className="bids-content-card">

                        <div className="bids-content-heading">

                            <div>
                                <h2>
                                    Active Bids
                                </h2>

                                <span>
                                    Your current NFT offers
                                </span>
                            </div>

                            <button
                                className="place-bid-top-button"
                                type="button"
                            >
                                + Place a Bid
                            </button>

                        </div>


                        {/* Table */}
                        <div className="bids-page-table">

                            {/* Table Header */}
                            <div className="bids-page-header">

                                <span></span>

                                <span>
                                    Item List
                                </span>

                                <span>
                                    Open Price
                                </span>

                                <span>
                                    Your Offer
                                </span>

                                <span>
                                    Recent Offer
                                </span>

                                <span>
                                    Time Left
                                </span>

                                <span>
                                    Action
                                </span>

                            </div>


                            {/* Bid Rows */}
                            {bids.map((bid) => (

                                <div
                                    className="bids-page-row"
                                    key={bid.id}
                                >

                                    <input
                                        type="checkbox"
                                        className="bid-checkbox"
                                    />


                                    {/* NFT */}
                                    <div className="bids-page-item">

                                        <div className="bids-page-image">

                                            <img
                                                src={bid.image}
                                                alt={bid.name}
                                            />

                                        </div>

                                        <div>

                                            <strong>
                                                {bid.name}
                                            </strong>

                                            <span>
                                                John Abraham
                                            </span>

                                        </div>

                                    </div>


                                    {/* Open Price */}
                                    <span>
                                        0.0025 ETH
                                    </span>


                                    {/* Your Offer */}
                                    <span className="offer-purple">
                                        0.0025 ETH
                                    </span>


                                    {/* Recent Offer */}
                                    <div className="recent-offer">

                                        <img
                                            src={profileImage}
                                            alt="Recent offer"
                                        />

                                        <span>
                                            0.0025 ETH
                                        </span>

                                    </div>


                                    {/* Time */}
                                    <span className="time-left">
                                        2h 1m 30s
                                    </span>


                                    {/* Action */}
                                    <button
                                        className="bid-remove-button"
                                        aria-label="Remove bid"
                                        type="button"
                                    >
                                        ×
                                    </button>

                                </div>

                            ))}

                        </div>

                    </section>

                </main>

            </div>

        </div>
    );
}

export default Bids;