import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import liquidWave from "../assets/liquid-wave.jpg";

function Collections() {
    const collections = [
        {
            id: 1,
            name: "Liquid Wave",
            creator: "John Abraham",
            items: "60 Items",
            image: liquidWave,
        },
        {
            id: 2,
            name: "Papaya",
            creator: "John Abraham",
            items: "60 Items",
            image: liquidWave,
        },
        {
            id: 3,
            name: "Cute Cube Cool",
            creator: "John Abraham",
            items: "60 Items",
            image: liquidWave,
        },
        {
            id: 4,
            name: "Liquid Wave",
            creator: "John Abraham",
            items: "60 Items",
            image: liquidWave,
        },
    ];

    return (
        <div className="app-layout">
            <Sidebar />

            <div className="main-area">
                <Header />

                <main className="collections-page">

                    <div className="collections-page-heading">

                        <div>

                            <span className="collections-page-label">
                                NFT MARKETPLACE
                            </span>

                            <h1>
                                Collections
                            </h1>

                            <p>
                                Explore and manage your NFT collections
                            </p>

                        </div>

                        <div className="collections-breadcrumb">

                            <span>
                                Home
                            </span>

                            <b>
                                ›
                            </b>

                            <span>
                                Collections
                            </span>

                        </div>

                    </div>
                    <section className="collections-content">

                        <div className="collections-content-heading">
                            <h2>My Collections</h2>

                            <button className="create-collection-button">
                                + Create Collection
                            </button>
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
                                            aria-label="Save collection"
                                        >
                                            ♡
                                        </button>

                                    </div>

                                    <div className="collection-page-content">

                                        <div className="collection-page-title">
                                            <div>
                                                <h3>{collection.name}</h3>
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