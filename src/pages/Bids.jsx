import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Bids() {
    return (
        <div className="app-layout">

            <Sidebar />

            <div className="main-area">

                <Header />

                <main className="bids-page">

                    <div className="bids-page-heading">

                        <div>
                            <h1>Bids</h1>
                            <p>Manage your active NFT bids.</p>
                        </div>

                    </div>


                    <section className="bids-content-card">

                        <div className="bids-content-heading">

                            <h2>Active Bids</h2>

                            <button className="see-more-button">
                                See more
                            </button>

                        </div>


                        <div className="bids-page-table">

                            {/* Table Header */}

                            <div className="bids-page-header">

                                <span>Item List</span>
                                <span>Open Price</span>
                                <span>Your Offer</span>
                                <span>Recent Offer</span>
                                <span>Time Left</span>
                                <span>Action</span>

                            </div>


                            {/* Cute Cube Cool */}

                            <div className="bids-page-row">

                                <div className="bids-page-item">

                                    <div className="bids-page-image">

                                        <img
                                            src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d"
                                            alt="Cute Cube Cool"
                                        />

                                    </div>

                                    <div>
                                        <strong>Cute Cube Cool</strong>
                                        <span>John Abraham</span>
                                    </div>

                                </div>

                                <span>0.0025 ETH</span>

                                <span>0.05 ETH</span>

                                <span>0.06 ETH</span>

                                <span>2 Hours 1 min 30s</span>

                                <div className="bids-page-actions">

                                    <button className="bid-primary-action">
                                        Place a Bid
                                    </button>

                                    <button className="bid-secondary-action">
                                        Save
                                    </button>

                                </div>

                            </div>


                            {/* Liquid Wave */}

                            <div className="bids-page-row">

                                <div className="bids-page-item">

                                    <div className="bids-page-image">

                                        <img
                                            src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead"
                                            alt="Liquid Wave"
                                        />

                                    </div>

                                    <div>
                                        <strong>Liquid Wave</strong>
                                        <span>John Abraham</span>
                                    </div>

                                </div>

                                <span>0.0025 ETH</span>

                                <span>0.05 ETH</span>

                                <span>0.06 ETH</span>

                                <span>2 Hours 1 min 30s</span>

                                <div className="bids-page-actions">

                                    <button className="bid-primary-action">
                                        Place a Bid
                                    </button>

                                    <button className="bid-secondary-action">
                                        Save
                                    </button>

                                </div>

                            </div>

                        </div>

                    </section>


                    {/* Bid Summary */}

                    <section className="bid-summary">

                        <div className="bid-summary-card">

                            <span>Total Active Bids</span>
                            <strong>02</strong>

                        </div>

                        <div className="bid-summary-card">

                            <span>Total Offers</span>
                            <strong>04</strong>

                        </div>

                        <div className="bid-summary-card">

                            <span>Highest Offer</span>
                            <strong>0.06 ETH</strong>

                        </div>

                    </section>

                </main>

            </div>

        </div>
    );
}

export default Bids;