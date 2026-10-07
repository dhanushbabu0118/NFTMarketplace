import { useState } from "react";
import { Heart } from "lucide-react";

function NFTCard({ nft }) {

    const [liked, setLiked] = useState(false);

    const handleWishlist = () => {
        setLiked((previousLiked) => !previousLiked);
    };

    return (
        <article className="nft-card">

            {/* NFT Image */}
            <div className="nft-card-image">

                <img
                    src={nft.image}
                    alt={nft.name}
                    loading="lazy"
                />

                {/* Wishlist */}
                <button
                    type="button"
                    className={`heart-button ${liked ? "liked" : ""
                        }`}
                    onClick={handleWishlist}
                    aria-label={
                        liked
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                    }
                >
                    <Heart
                        size={18}
                        fill={
                            liked
                                ? "currentColor"
                                : "none"
                        }
                    />
                </button>

            </div>


            {/* NFT Content */}
            <div className="nft-card-content">

                <h3>
                    {nft.name}
                </h3>


                <div className="nft-info-row">

                    {/* Auction */}
                    <div>

                        <span>
                            Auction time
                        </span>

                        <strong>
                            {nft.auctionTime}
                        </strong>

                    </div>


                    {/* Current Bid */}
                    <div className="bid-info">

                        <span>
                            Current Bid
                        </span>

                        <strong>
                            {nft.currentBid}
                        </strong>

                        <small>
                            {nft.bid}
                        </small>

                    </div>

                </div>


                {/* Bid Button */}
                <button
                    type="button"
                    className="place-bid-button"
                >
                    Place a Bid
                </button>

            </div>

        </article>
    );
}

export default NFTCard;