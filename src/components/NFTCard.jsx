import { useState } from "react";
import { Heart } from "lucide-react";

function NFTCard({ nft }) {

    const [liked, setLiked] = useState(false);

    const handleWishlist = () => {
        setLiked(!liked);
    };

    return (
        <article className="nft-card">

            <div className="nft-card-image">

                <img
                    src={nft.image}
                    alt={nft.name}
                />

                <button
                    className={`heart-button ${liked ? "liked" : ""}`}
                    onClick={handleWishlist}
                    aria-label={
                        liked
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                    }
                >
                    <Heart
                        size={18}
                        fill={liked ? "currentColor" : "none"}
                    />
                </button>

            </div>

            <div className="nft-card-content">

                <h3>{nft.name}</h3>

                <div className="nft-info-row">

                    <div>
                        <span>Auction time</span>
                        <strong>{nft.auctionTime}</strong>
                    </div>

                    <div className="bid-info">
                        <span>Current Bid</span>
                        <strong>{nft.currentBid}</strong>
                        <small>{nft.bid}</small>
                    </div>

                </div>

                <button className="place-bid-button">
                    Place a Bid
                </button>

            </div>

        </article>
    );
}

export default NFTCard;