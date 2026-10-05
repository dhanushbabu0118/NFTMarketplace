import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import nftData from "../data/nftData";
import NFTCard from "../components/NFTCard";

function Explore() {
    return (
        <div className="app-layout">

            <Sidebar />

            <div className="main-area">

                <Header />

                <main className="explore-page">

                    <div className="section-heading">
                        <div>
                            <h1>Explore NFTs</h1>
                            <p>Discover amazing digital collectibles.</p>
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

                </main>

            </div>

        </div>
    );
}

export default Explore;