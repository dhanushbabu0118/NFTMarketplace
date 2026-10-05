import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Collections() {
    const collections = [
        {
            id: 1,
            name: "Liquid Wave",
            creator: "John Abraham",
            items: "60 Items",
            image:
                "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead"
        },
        {
            id: 2,
            name: "Papaya",
            creator: "Digital Artist",
            items: "60 Items",
            image:
                "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d"
        },
        {
            id: 3,
            name: "Cute Cube Cool",
            creator: "John Abraham",
            items: "60 Items",
            image:
                "https://images.unsplash.com/photo-1618172193763-c511deb635ca"
        },
        {
            id: 4,
            name: "Brighten LQ",
            creator: "John Abraham",
            items: "60 Items",
            image:
                "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4"
        }
    ];

    return (
        <div className="app-layout">

            <Sidebar />

            <div className="main-area">

                <Header />

                <main className="collections-page">

                    <div className="collections-page-heading">

                        <div>
                            <h1>Collections</h1>

                            <p>
                                Welcome Collections Page
                            </p>
                        </div>

                        <button className="create-collection-button">
                            + Create Collection
                        </button>

                    </div>


                    <section className="collections-content">

                        <div className="collections-content-heading">

                            <h2>My Collections</h2>

                            <div className="collection-filters">

                                <button className="collection-filter active">
                                    All
                                </button>

                                <button className="collection-filter">
                                    Artwork
                                </button>

                                <button className="collection-filter">
                                    Book
                                </button>

                            </div>

                        </div>


                        <div className="collections-page-grid">

                            {collections.map((collection) => (

                                <article
                                    className="collection-page-card"
                                    key={collection.id}
                                >

                                    <div className="collection-page-image">

                                        <img
                                            src={collection.image}
                                            alt={collection.name}
                                        />

                                        <button
                                            className="collection-save-button"
                                        >
                                            ♡
                                        </button>

                                    </div>


                                    <div className="collection-page-content">

                                        <div className="collection-page-title">

                                            <div>

                                                <h3>
                                                    {collection.name}
                                                </h3>

                                                <span>
                                                    {collection.creator}
                                                </span>

                                            </div>

                                            <strong>
                                                {collection.items}
                                            </strong>

                                        </div>


                                        <div className="collection-page-actions">

                                            <button className="collection-follow-button">
                                                Follow
                                            </button>

                                            <button className="collection-info-button">
                                                Info
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

export default Collections;