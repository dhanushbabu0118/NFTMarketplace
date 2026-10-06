import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import profileImage from "../assets/download.png";

function Bids() {
    const bids = [
        {
            id: 1,
            name: "Cute Cube Cool",
            image:
                "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d",
        },
        {
            id: 2,
            name: "Cute Cube Cool",
            image:
                "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d",
        },
        {
            id: 3,
            name: "Liquid Wave",
            image:
                "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead",
        },
        {
            id: 4,
            name: "Cute Cube Cool",
            image:
                "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d",
        },
        {
            id: 5,
            name: "Cute Cube Cool",
            image:
                "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d",
        },
        {
            id: 6,
            name: "Liquid Wave",
            image:
                "https://images.unsplash.com/photo-1618172193763-c511deb635ca",
        },
        {
            id: 7,
            name: "Liquid Wave",
            image:
                "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead",
        },
    ];

    return (
        <div className="app-layout">
            <Sidebar />

            <div className="main-area">
                <Header />

                <main className="bids-page">

                    <div className="bids-page-heading">
                        <div>
                            <h1>Bids</h1>
                            <p>Welcome Bids Page</p>
                        </div>

                        <div className="bids-breadcrumb">
                            Home <span>›</span> Bids
                        </div>
                    </div>

                    {/* Statistics */}
                    <section className="bids-statistics">

                        <div className="bid-stat-card">
                            <div className="bid-stat-icon purple">
                                ↗
                            </div>
                            <div>
                                <strong>24K</strong>
                                <span>Artworks</span>
                            </div>
                        </div>

                        <div className="bid-stat-card">
                            <div className="bid-stat-icon green">
                                ↗
                            </div>
                            <div>
                                <strong>82K</strong>
                                <span>Auction</span>
                            </div>
                        </div>

                        <div className="bid-stat-card">
                            <div className="bid-stat-icon yellow">
                                ↗
                            </div>
                            <div>
                                <strong>200</strong>
                                <span>Creators</span>
                            </div>
                        </div>

                        <div className="bid-stat-card">
                            <div className="bid-stat-icon red">
                                ↗
                            </div>
                            <div>
                                <strong>89</strong>
                                <span>Canceled</span>
                            </div>
                        </div>

                    </section>

                    {/* Active Bids */}
                    <section className="bids-content-card">

                        <div className="bids-content-heading">
                            <h2>Active Bids</h2>

                            <button className="place-bid-top-button">
                                Place a Bid
                            </button>
                        </div>

                        <div className="bids-page-table">

                            <div className="bids-page-header">
                                <span></span>
                                <span>Item List</span>
                                <span>Open Price</span>
                                <span>Your Offer</span>
                                <span>Recent Offer</span>
                                <span>Time Left</span>
                                <span>Action</span>
                            </div>

                            {bids.map((bid) => (
                                <div
                                    className="bids-page-row"
                                    key={bid.id}
                                >
                                    <input
                                        type="checkbox"
                                        className="bid-checkbox"
                                    />

                                    <div className="bids-page-item">

                                        <div className="bids-page-image">
                                            <img
                                                src={bid.image}
                                                alt={bid.name}
                                            />
                                        </div>

                                        <div>
                                            <strong>{bid.name}</strong>
                                            <span>John Abraham</span>
                                        </div>

                                    </div>

                                    <span>0.0025 ETH</span>

                                    <span>0.0025 ETH</span>

                                    <div className="recent-offer">
                                        <img
                                            src={profileImage}
                                            alt="Recent offer"
                                        />
                                        <span>0.0025 ETH</span>
                                    </div>

                                    <span>2 Hours 1 min 30s</span>

                                    <button
                                        className="bid-remove-button"
                                        aria-label="Remove bid"
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