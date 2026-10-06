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

                    <div className="saved-page-heading">
                        <div>
                            <h1>Saved Items</h1>
                            <p>Welcome Saved Page</p>
                        </div>

                        <div className="saved-breadcrumb">
                            Home <span>›</span> Saved
                        </div>
                    </div>

                    <section className="saved-content">

                        <div className="saved-content-heading">
                            <h2>Saved Items</h2>

                            <div className="saved-filters">
                                <button className="saved-filter active">
                                    All
                                </button>

                                <button className="saved-filter">
                                    Artwork
                                </button>

                                <button className="saved-filter">
                                    Book
                                </button>
                            </div>
                        </div>

                        <div className="saved-grid">

                            {savedItems.map((item) => (
                                <article
                                    className="saved-card"
                                    key={item.id}
                                >
                                    <div className="saved-card-image">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                        />

                                        <button
                                            className="saved-heart"
                                            aria-label="Saved item"
                                        >
                                            ♥
                                        </button>
                                    </div>

                                    <div className="saved-card-content">

                                        <div className="saved-card-title">
                                            <div>
                                                <h3>{item.name}</h3>
                                                <span>
                                                    {item.creator}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="saved-bid-info">

                                            <div>
                                                <span>Auction time</span>
                                                <strong>
                                                    {item.auctionTime}
                                                </strong>
                                            </div>

                                            <div>
                                                <span>Current Bid</span>
                                                <strong>
                                                    {item.currentBid}
                                                </strong>
                                                <small>
                                                    {item.bid}
                                                </small>
                                            </div>

                                        </div>

                                        <button className="saved-place-bid">
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