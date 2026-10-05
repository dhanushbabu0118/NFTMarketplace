function CreatorsCollections() {
    return (
        <section className="creators-collections">

            {/* Top Creators */}

            <div className="top-creators-section">

                <div className="section-heading-row">
                    <h2>Top Creators</h2>

                    <button className="see-more-button">
                        See more
                    </button>
                </div>

                <div className="creators-grid">

                    <div className="creator-card">

                        <img
                            src="https://i.pravatar.cc/100?img=12"
                            alt="John Abraham"
                        />

                        <div className="creator-info">
                            <strong>John Abraham</strong>
                            <span>12.5K Followers</span>
                        </div>

                        <button className="follow-button">
                            Follow
                        </button>

                    </div>

                    <div className="creator-card">

                        <img
                            src="https://i.pravatar.cc/100?img=32"
                            alt="Papaya"
                        />

                        <div className="creator-info">
                            <strong>Papaya</strong>
                            <span>10.2K Followers</span>
                        </div>

                        <button className="follow-button">
                            Follow
                        </button>

                    </div>

                    <div className="creator-card">

                        <img
                            src="https://i.pravatar.cc/100?img=47"
                            alt="Digital Artist"
                        />

                        <div className="creator-info">
                            <strong>Digital Artist</strong>
                            <span>8.9K Followers</span>
                        </div>

                        <button className="follow-button">
                            Follow
                        </button>

                    </div>

                </div>

            </div>


            {/* My Collections */}

            <div className="my-collections-section">

                <div className="section-heading-row">

                    <h2>My Collections</h2>

                    <button className="see-more-button">
                        See more
                    </button>

                </div>

                <div className="collections-grid">

                    <div className="collection-card">

                        <div className="collection-image">
                            <img
                                src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead"
                                alt="Liquid Wave"
                            />
                        </div>

                        <div className="collection-details">
                            <div>
                                <strong>Liquid Wave</strong>
                                <span>60 Items</span>
                            </div>

                            <button>Save</button>
                        </div>

                    </div>


                    <div className="collection-card">

                        <div className="collection-image">
                            <img
                                src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d"
                                alt="Papaya"
                            />
                        </div>

                        <div className="collection-details">
                            <div>
                                <strong>Papaya</strong>
                                <span>60 Items</span>
                            </div>

                            <button>Save</button>
                        </div>

                    </div>


                    <div className="collection-card">

                        <div className="collection-image">
                            <img
                                src="https://images.unsplash.com/photo-1618172193763-c511deb635ca"
                                alt="Cute Cube Cool"
                            />
                        </div>

                        <div className="collection-details">
                            <div>
                                <strong>Cute Cube Cool</strong>
                                <span>60 Items</span>
                            </div>

                            <button>Save</button>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default CreatorsCollections;