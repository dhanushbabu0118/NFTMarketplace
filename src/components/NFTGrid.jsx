import NFTCard from "./NFTCard";
import nftData from "../data/nftData";

function NFTGrid() {
    return (
        <section className="nft-section">

            <div className="section-heading">

                <h2>Trending Bids</h2>

                <div className="filter-buttons">

                    <button className="filter active">
                        All
                    </button>

                    <button className="filter">
                        Artwork
                    </button>

                    <button className="filter">
                        Book
                    </button>

                </div>

            </div>

            <div className="nft-grid">

                {nftData.map((nft) => (
                    <NFTCard
                        key={nft.id}
                        nft={nft}
                    />
                ))}

            </div>

        </section>
    );
}

export default NFTGrid;