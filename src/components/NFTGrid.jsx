import { useState } from "react";

import NFTCard from "./NFTCard";
import nftData from "../data/nftData";

function NFTGrid() {

    const [activeFilter, setActiveFilter] = useState("All");

    const filteredNFTs =
        activeFilter === "All"
            ? nftData
            : nftData.filter(
                (nft) => nft.category === activeFilter
            );

    return (
        <section className="nft-section">

            <div className="section-heading">

                <h2>
                    Trending Bids
                </h2>

                <div className="filter-buttons">

                    <button
                        className={`filter ${activeFilter === "All"
                                ? "active"
                                : ""
                            }`}
                        onClick={() => setActiveFilter("All")}
                    >
                        All
                    </button>

                    <button
                        className={`filter ${activeFilter === "Artwork"
                                ? "active"
                                : ""
                            }`}
                        onClick={() => setActiveFilter("Artwork")}
                    >
                        Artwork
                    </button>

                    <button
                        className={`filter ${activeFilter === "Book"
                                ? "active"
                                : ""
                            }`}
                        onClick={() => setActiveFilter("Book")}
                    >
                        Book
                    </button>

                </div>

            </div>


            <div className="nft-grid">

                {filteredNFTs.map((nft) => (
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