import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import profileImage from "../assets/download.png";

function Profile() {
    return (
        <div className="app-layout">

            <Sidebar />

            <div className="main-area">

                <Header />

                <main className="profile-page">

                    {/* Profile Header */}
                    <section className="profile-header-card">

                        <div className="profile-cover"></div>

                        <div className="profile-header-content">

                            <div className="profile-avatar">
                                <img
                                    src={profileImage}
                                    alt="John Abraham"
                                />
                            </div>

                            <div className="profile-main-info">

                                <h1>John Abraham</h1>

                                <p>@johnabraham</p>

                                <span>
                                    NFT Creator & Digital Artist
                                </span>

                            </div>

                            <button className="update-profile-button">
                                Update Profile
                            </button>

                        </div>

                    </section>


                    {/* Profile Navigation */}
                    <section className="profile-tabs">

                        <button className="profile-tab active">
                            Profile
                        </button>

                        <button className="profile-tab">
                            Application
                        </button>

                        <button className="profile-tab">
                            Security
                        </button>

                        <button className="profile-tab">
                            Activity
                        </button>

                        <button className="profile-tab">
                            Payment Method
                        </button>

                        <button className="profile-tab">
                            API
                        </button>

                    </section>


                    {/* Main Profile Content */}
                    <section className="profile-content-grid">

                        {/* Personal Information */}
                        <div className="profile-panel personal-panel">

                            <div className="profile-panel-heading">

                                <div>
                                    <h2>Personal Information</h2>
                                    <p>Manage your personal information</p>
                                </div>

                                <button className="edit-profile-button">
                                    Edit
                                </button>

                            </div>


                            <div className="profile-fields">

                                <div className="profile-field">
                                    <span>Full Name</span>
                                    <strong>John Abraham</strong>
                                </div>

                                <div className="profile-field">
                                    <span>Email</span>
                                    <strong>johnabraham@email.com</strong>
                                </div>

                                <div className="profile-field">
                                    <span>Verify account</span>
                                    <strong className="verified">
                                        ✓ Verified
                                    </strong>
                                </div>

                                <div className="profile-field">
                                    <span>Password</span>
                                    <strong>••••••••</strong>
                                </div>

                            </div>

                        </div>


                        {/* Profile Stats */}
                        <div className="profile-panel profile-stats-panel">

                            <h2>Profile</h2>

                            <div className="profile-stat-list">

                                <div className="profile-stat">
                                    <strong>60</strong>
                                    <span>Items</span>
                                </div>

                                <div className="profile-stat">
                                    <strong>24</strong>
                                    <span>Followers</span>
                                </div>

                                <div className="profile-stat">
                                    <strong>18</strong>
                                    <span>Following</span>
                                </div>

                            </div>

                        </div>

                    </section>


                    {/* My Bought */}
                    <section className="profile-panel bought-section">

                        <div className="profile-panel-heading">

                            <div>
                                <h2>My bought</h2>
                                <p>Your recently purchased NFTs</p>
                            </div>

                            <button className="profile-see-more">
                                See more
                            </button>

                        </div>


                        <div className="bought-grid">

                            <div className="bought-card">

                                <img
                                    src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d"
                                    alt="Cute Cube Cool"
                                />

                                <div>
                                    <strong>Cute Cube Cool</strong>
                                    <span>0.05 ETH</span>
                                </div>

                            </div>


                            <div className="bought-card">

                                <img
                                    src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead"
                                    alt="Liquid Wave"
                                />

                                <div>
                                    <strong>Liquid Wave</strong>
                                    <span>0.06 ETH</span>
                                </div>

                            </div>


                            <div className="bought-card">

                                <img
                                    src="https://images.unsplash.com/photo-1618172193763-c511deb635ca"
                                    alt="Papaya"
                                />

                                <div>
                                    <strong>Papaya</strong>
                                    <span>0.08 ETH</span>
                                </div>

                            </div>

                        </div>

                    </section>


                    {/* Bottom Sections */}
                    <section className="profile-bottom-grid">

                        {/* Recent Activity */}
                        <div className="profile-panel">

                            <div className="profile-panel-heading">

                                <div>
                                    <h2>Recent Activity</h2>
                                </div>

                                <button className="profile-see-more">
                                    See more
                                </button>

                            </div>


                            <div className="profile-activity-list">

                                <div className="profile-activity-item">
                                    <div className="profile-activity-icon">
                                        🛒
                                    </div>

                                    <div>
                                        <strong>
                                            Purchase by you for 0.05 ETH
                                        </strong>

                                        <span>
                                            12 mins ago
                                        </span>
                                    </div>
                                </div>


                                <div className="profile-activity-item">
                                    <div className="profile-activity-icon">
                                        💰
                                    </div>

                                    <div>
                                        <strong>
                                            0.06 ETH Received
                                        </strong>

                                        <span>
                                            25 mins ago
                                        </span>
                                    </div>
                                </div>


                                <div className="profile-activity-item">
                                    <div className="profile-activity-icon">
                                        👤
                                    </div>

                                    <div>
                                        <strong>
                                            Started Following you
                                        </strong>

                                        <span>
                                            1 hour ago
                                        </span>
                                    </div>
                                </div>

                            </div>

                        </div>


                        {/* Following */}
                        <div className="profile-panel">

                            <div className="profile-panel-heading">

                                <div>
                                    <h2>Following</h2>
                                </div>

                                <button className="profile-see-more">
                                    See more
                                </button>

                            </div>


                            <div className="following-list">

                                <div className="following-item">

                                    <img
                                        src="https://i.pravatar.cc/100?img=12"
                                        alt="Papaya"
                                    />

                                    <div>
                                        <strong>Papaya</strong>
                                        <span>12.5K Followers</span>
                                    </div>

                                    <button className="unfollow-button">
                                        Unfollow
                                    </button>

                                </div>


                                <div className="following-item">

                                    <img
                                        src="https://i.pravatar.cc/100?img=32"
                                        alt="Digital Artist"
                                    />

                                    <div>
                                        <strong>Digital Artist</strong>
                                        <span>10.2K Followers</span>
                                    </div>

                                    <button className="unfollow-button">
                                        Unfollow
                                    </button>

                                </div>


                                <div className="following-item">

                                    <img
                                        src="https://i.pravatar.cc/100?img=47"
                                        alt="John Abraham"
                                    />

                                    <div>
                                        <strong>John Abraham</strong>
                                        <span>8.9K Followers</span>
                                    </div>

                                    <button className="unfollow-button">
                                        Unfollow
                                    </button>

                                </div>

                            </div>

                        </div>

                    </section>


                    {/* Top Creators */}
                    <section className="profile-panel top-creators-profile">

                        <div className="profile-panel-heading">

                            <div>
                                <h2>Top Creators</h2>
                            </div>

                            <button className="profile-see-more">
                                See more
                            </button>

                        </div>


                        <div className="top-creators-profile-grid">

                            <div className="top-creator-profile-card">

                                <img
                                    src="https://i.pravatar.cc/100?img=12"
                                    alt="John Abraham"
                                />

                                <div>
                                    <strong>John Abraham</strong>
                                    <span>12.5K Followers</span>
                                </div>

                                <button>
                                    Follow
                                </button>

                            </div>


                            <div className="top-creator-profile-card">

                                <img
                                    src="https://i.pravatar.cc/100?img=32"
                                    alt="Papaya"
                                />

                                <div>
                                    <strong>Papaya</strong>
                                    <span>10.2K Followers</span>
                                </div>

                                <button>
                                    Follow
                                </button>

                            </div>


                            <div className="top-creator-profile-card">

                                <img
                                    src="https://i.pravatar.cc/100?img=47"
                                    alt="Digital Artist"
                                />

                                <div>
                                    <strong>Digital Artist</strong>
                                    <span>8.9K Followers</span>
                                </div>

                                <button>
                                    Follow
                                </button>

                            </div>

                        </div>

                    </section>

                </main>

            </div>

        </div>
    );
}

export default Profile;