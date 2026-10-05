function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-container">

                {/* Left Content */}
                <div className="hero-content">

                    <h1>
                        Discover
                        <br />
                        Digital Art &<br />
                        Collect NFTs
                    </h1>

                    <p>
                        Explore the world of digital art and discover
                        unique NFTs created by talented artists.
                    </p>

                    <button className="hero-button">
                        Get Started
                    </button>

                    {/* Statistics */}
                    <div className="hero-stats">

                        <div className="stat">
                            <h3>240k+</h3>
                            <span>Total Sale</span>
                        </div>

                        <div className="stat">
                            <h3>100k+</h3>
                            <span>Auctions</span>
                        </div>

                        <div className="stat">
                            <h3>240k+</h3>
                            <span>Artists</span>
                        </div>

                    </div>

                </div>

                {/* Right Content */}
                <div className="hero-art">

                    <div className="nft-preview">

                        <div className="nft-image">
                            <div className="nft-glow"></div>

                            <span className="nft-symbol">✦</span>

                            <div className="nft-shape shape-one"></div>
                            <div className="nft-shape shape-two"></div>
                            <div className="nft-shape shape-three"></div>
                        </div>

                        <div className="nft-info">

                            <h3>Space Walking</h3>

                            <div className="artist">
                                <div className="artist-avatar">
                                    A
                                </div>

                                <span>Animakid</span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default HeroSection;