import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import liquidWave from "../assets/liquid-wave.jpg";

function Saved() {

    const savedItems = [
        {
            id: 1,
            name: "Liquid Wave",
            creator: "John Abraham",
            auctionTime: "3h 1m 50s",
            currentBid: "0.05 ETH",
            bid: "0.15 ETH",
            image: liquidWave,
        },
        {
            id: 2,
            name: "Liquid Wave",
            creator: "John Abraham",
            auctionTime: "3h 1m 50s",
            currentBid: "0.05 ETH",
            bid: "0.15 ETH",
            image: liquidWave,
        },
        {
            id: 3,
            name: "Liquid Wave",
            creator: "John Abraham",
            auctionTime: "3h 1m 50s",
            currentBid: "0.05 ETH",
            bid: "0.15 ETH",
            image: liquidWave,
        },
        {
            id: 4,
            name: "Liquid Wave",
            creator: "John Abraham",
            auctionTime: "3h 1m 50s",
            currentBid: "0.05 ETH",
            bid: "0.15 ETH",
            image: liquidWave,
        },
    ];


    return (
        <div className="app-layout">

            <Sidebar />

            <div className="main-area">

                <Header />

                <main className="saved-page">

                    {/* Page Heading */}
                    <div className="saved-page-heading">

                        <div>

                            <span className="saved-page-label">
                                NFT MARKETPLACE
                            </span>

                            <h1>
                                Saved Items
                            </h1>

                            <p>
                                Your favorite NFT collectibles
                            </p>

                        </div>


                        <div className="saved-breadcrumb">

                            <span>
                                Home
                            </span>

                            <b>
                                ›
                            </b>

                            <span>
                                Saved
                            </span>

                        </div>

                    </div>


                    {/* Saved Content */}
                    <section className="saved-content">

                        {/* Section Heading */}
                        <div className="saved-content-heading">

                            <div>

                                <h2>
                                    Saved Items
                                </h2>

                                <span>
                                    NFTs you have saved
                                </span>

                            </div>


                            {/* Filters */}
                            <div className="saved-filters">

                                <button
                                    type="button"
                                    className="saved-filter active"
                                >
                                    All
                                </button>

                                <button
                                    type="button"
                                    className="saved-filter"
                                >
                                    Artwork
                                </button>

                                <button
                                    type="button"
                                    className="saved-filter"
                                >
                                    Book
                                </button>

                            </div>

                        </div>


                        {/* Saved Grid */}
                        <div className="saved-grid">

                            {savedItems.map((item) => (

                                <article
                                    className="saved-card"
                                    key={item.id}
                                >

                                    {/* Image */}
                                    <div className="saved-card-image">

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                        />

                                        <button
                                            type="button"
                                            className="saved-heart"
                                            aria-label="Remove from saved items"
                                        >
                                            ♥
                                        </button>

                                    </div>


                                    {/* Content */}
                                    <div className="saved-card-content">

                                        <div className="saved-card-title">

                                            <div>

                                                <h3>
                                                    {item.name}
                                                </h3>

                                                <span>
                                                    {item.creator}
                                                </span>

                                            </div>

                                        </div>


                                        {/* Bid Information */}
                                        <div className="saved-bid-info">

                                            <div>

                                                <span>
                                                    Auction time
                                                </span>

                                                <strong>
                                                    {item.auctionTime}
                                                </strong>

                                            </div>


                                            <div>

                                                <span>
                                                    Current Bid
                                                </span>

                                                <strong>
                                                    {item.currentBid}
                                                </strong>

                                                <small>
                                                    {item.bid}
                                                </small>

                                            </div>

                                        </div>


                                        {/* Bid Button */}
                                        <button
                                            type="button"
                                            className="saved-place-bid"
                                        >
                                            Place a Bid
                                        </button>

                                    </div>

                                </article>

                            ))}

                        </div>

                    </section>

                </main>

            </div>

        </div>
    );
}

export default Saved;