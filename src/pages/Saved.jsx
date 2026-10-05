import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Saved() {
    const savedItems = [
        {
            id: 1,
            name: "Cute Cube Cool",
            creator: "John Abraham",
            price: "0.0025 ETH",
            bid: "0.05 ETH",
            image:
                "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d"
        },
        {
            id: 2,
            name: "Liquid Wave",
            creator: "John Abraham",
            price: "0.0025 ETH",
            bid: "0.06 ETH",
            image:
                "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead"
        },
        {
            id: 3,
            name: "Papaya",
            creator: "Digital Artist",
            price: "0.05 ETH",
            bid: "0.08 ETH",
            image:
                "https://images.unsplash.com/photo-1618172193763-c511deb635ca"
        },
        {
            id: 4,
            name: "Brighten LQ",
            creator: "John Abraham",
            price: "0.05 ETH",
            bid: "0.15 ETH",
            image:
                "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4"
        }
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

                            <p>
                                Welcome Saved Page
                            </p>
                        </div>

                        <span className="saved-count">
                            {savedItems.length} Items
                        </span>

                    </div>


                    <section className="saved-content">

                        <div className="saved-section-heading">

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
                                            aria-label="Remove from saved"
                                        >
                                            ♥
                                        </button>

                                    </div>


                                    <div className="saved-card-content">

                                        <div className="saved-card-title">

                                            <div>
                                                <h3>{item.name}</h3>
                                                <span>{item.creator}</span>
                                            </div>

                                            <strong>
                                                {item.price}
                                            </strong>

                                        </div>


                                        <div className="saved-card-info">

                                            <div>
                                                <span>Current Bid</span>
                                                <strong>{item.bid}</strong>
                                            </div>

                                            <button className="saved-bid-button">
                                                Place a Bid
                                            </button>

                                        </div>

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