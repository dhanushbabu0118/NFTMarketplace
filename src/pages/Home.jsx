import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TopSection from "../components/TopSection";
import NFTGrid from "../components/NFTGrid";
import MarketStats from "../components/MarketStats";
import ActivitySections from "../components/ActivitySections";
import CreatorsCollections from "../components/CreatorsCollections";





function Home() {
    return (
        <div className="app-layout">

            <Sidebar />

            <div className="main-area">

                <Header />

                <main className="home-content">

                    <TopSection />
                    <MarketStats />
                    <NFTGrid />
                    <ActivitySections />
                    <CreatorsCollections />

                </main>

            </div>

        </div>
    );
}

export default Home;