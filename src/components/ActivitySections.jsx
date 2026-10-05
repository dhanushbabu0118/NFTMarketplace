function ActivitySections() {
    return (
        <section className="activity-sections">

            {/* Active Bids */}

            <div className="active-bids-section">

                <div className="section-heading-row">
                    <h2>Active Bids</h2>

                    <button className="see-more-button">
                        See more
                    </button>
                </div>

                <div className="bids-table">

                    <div className="bids-header">
                        <span>Item List</span>
                        <span>Open Price</span>
                        <span>Your Offer</span>
                        <span>Recent Offer</span>
                        <span>Time Left</span>
                        <span>Action</span>
                    </div>

                    <div className="bid-row">

                        <div className="bid-item">

                            <div className="bid-image">
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

                        <div className="bid-actions">
                            <button>Place a Bid</button>
                            <button>Save</button>
                        </div>

                    </div>

                    <div className="bid-row">

                        <div className="bid-item">

                            <div className="bid-image">
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

                        <div className="bid-actions">
                            <button>Place a Bid</button>
                            <button>Save</button>
                        </div>

                    </div>

                </div>

            </div>


            {/* Recent Activity */}

            <div className="recent-activity-section">

                <div className="section-heading-row">

                    <h2>Recent Activity</h2>

                    <button className="see-more-button">
                        See more
                    </button>

                </div>

                <div className="activity-list">

                    <div className="activity-item">

                        <div className="activity-icon">
                            🛒
                        </div>

                        <div className="activity-content">

                            <strong>Purchase by you for 0.05 ETH</strong>

                            <span>12 mins ago</span>

                        </div>

                    </div>

                    <div className="activity-item">

                        <div className="activity-icon">
                            💰
                        </div>

                        <div className="activity-content">

                            <strong>0.06 ETH Received</strong>

                            <span>25 mins ago</span>

                        </div>

                    </div>

                    <div className="activity-item">

                        <div className="activity-icon">
                            👤
                        </div>

                        <div className="activity-content">

                            <strong>Started Following you</strong>

                            <span>1 hour ago</span>

                        </div>

                    </div>

                    <div className="activity-item">

                        <div className="activity-icon">
                            🎨
                        </div>

                        <div className="activity-content">

                            <strong>Has been sold by 12.75 ETH</strong>

                            <span>2 hours ago</span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default ActivitySections;