function MarketStats() {
    return (
        <section className="market-stats">

            <div className="eth-price-card">

                <div className="stats-title">
                    <span>ETH Price</span>
                </div>

                <div className="eth-price">
                    <strong>$1,825.48</strong>
                    <span>+168.001%</span>
                </div>

                <div className="eth-chart">
                    <div className="chart-line"></div>
                </div>

            </div>

            <div className="statistics-card">

                <h2>Statistics</h2>

                <div className="statistics-grid">

                    <div>
                        <strong>82K</strong>
                        <span>Artworks</span>
                    </div>

                    <div>
                        <strong>200</strong>
                        <span>Creators</span>
                    </div>

                    <div>
                        <strong>89</strong>
                        <span>Collections</span>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default MarketStats;