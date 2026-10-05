import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Settings() {
    return (
        <div className="app-layout">

            <Sidebar />

            <div className="main-area">

                <Header />

                <main className="settings-page">

                    <div className="settings-heading">

                        <div>
                            <h1>Settings</h1>
                            <p>Manage your account settings</p>
                        </div>

                    </div>


                    <div className="settings-layout">

                        {/* Settings Navigation */}
                        <aside className="settings-menu">

                            <button className="settings-menu-item active">
                                Profile
                            </button>

                            <button className="settings-menu-item">
                                Application
                            </button>

                            <button className="settings-menu-item">
                                Security
                            </button>

                            <button className="settings-menu-item">
                                Activity
                            </button>

                            <button className="settings-menu-item">
                                Payment Method
                            </button>

                            <button className="settings-menu-item">
                                API
                            </button>

                        </aside>


                        {/* Settings Content */}
                        <section className="settings-content">

                            {/* Personal Information */}
                            <div className="settings-panel">

                                <div className="settings-panel-heading">

                                    <div>
                                        <h2>Personal Information</h2>

                                        <p>
                                            Update your personal information
                                        </p>
                                    </div>

                                    <button className="settings-edit-button">
                                        Edit
                                    </button>

                                </div>


                                <div className="settings-form-grid">

                                    <div className="settings-field">

                                        <label>
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            value="John Abraham"
                                            readOnly
                                        />

                                    </div>


                                    <div className="settings-field">

                                        <label>
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            value="johnabraham@email.com"
                                            readOnly
                                        />

                                    </div>

                                </div>


                                <div className="settings-verify-row">

                                    <div>
                                        <strong>
                                            Verify account
                                        </strong>

                                        <span>
                                            Your email address is verified
                                        </span>
                                    </div>

                                    <span className="settings-verified">
                                        ✓ Verified
                                    </span>

                                </div>

                            </div>


                            {/* Password */}
                            <div className="settings-panel">

                                <div className="settings-panel-heading">

                                    <div>
                                        <h2>Password</h2>

                                        <p>
                                            Manage your account password
                                        </p>
                                    </div>

                                    <button className="settings-edit-button">
                                        Change
                                    </button>

                                </div>


                                <div className="password-row">

                                    <div>
                                        <span>
                                            Current password
                                        </span>

                                        <strong>
                                            ••••••••
                                        </strong>
                                    </div>

                                    <span className="password-updated">
                                        Last updated 30 days ago
                                    </span>

                                </div>

                            </div>


                            {/* Two Factor Authentication */}
                            <div className="settings-panel">

                                <div className="settings-panel-heading">

                                    <div>
                                        <h2>
                                            Two-factor Authentication (2FA)
                                        </h2>

                                        <p>
                                            Add an extra layer of security
                                            to your account
                                        </p>
                                    </div>

                                    <button className="toggle-switch">
                                        <span></span>
                                    </button>

                                </div>


                                <div className="security-message">

                                    <div className="security-icon">
                                        🔐
                                    </div>

                                    <div>
                                        <strong>
                                            Protect your account
                                        </strong>

                                        <p>
                                            Enable two-factor authentication
                                            to make your account more secure.
                                        </p>
                                    </div>

                                </div>

                            </div>


                            {/* Application Settings */}
                            <div className="settings-panel">

                                <div className="settings-panel-heading">

                                    <div>
                                        <h2>Application</h2>

                                        <p>
                                            Manage marketplace preferences
                                        </p>
                                    </div>

                                </div>


                                <div className="application-settings">

                                    <div className="application-setting-row">

                                        <div>
                                            <strong>
                                                Email Notifications
                                            </strong>

                                            <span>
                                                Receive marketplace updates
                                            </span>
                                        </div>

                                        <button className="toggle-switch enabled">
                                            <span></span>
                                        </button>

                                    </div>


                                    <div className="application-setting-row">

                                        <div>
                                            <strong>
                                                Bid Notifications
                                            </strong>

                                            <span>
                                                Get notified when someone bids
                                            </span>
                                        </div>

                                        <button className="toggle-switch enabled">
                                            <span></span>
                                        </button>

                                    </div>


                                    <div className="application-setting-row">

                                        <div>
                                            <strong>
                                                Activity Notifications
                                            </strong>

                                            <span>
                                                Receive activity updates
                                            </span>
                                        </div>

                                        <button className="toggle-switch">
                                            <span></span>
                                        </button>

                                    </div>

                                </div>

                            </div>


                            {/* API */}
                            <div className="settings-panel">

                                <div className="settings-panel-heading">

                                    <div>
                                        <h2>API</h2>

                                        <p>
                                            Manage your API access
                                        </p>
                                    </div>

                                    <button className="generate-api-button">
                                        Generate API Key
                                    </button>

                                </div>


                                <div className="api-key-box">

                                    <span>
                                        API Key
                                    </span>

                                    <strong>
                                        sk_live_••••••••••••••••
                                    </strong>

                                    <button>
                                        Copy
                                    </button>

                                </div>

                            </div>


                            {/* Save */}
                            <div className="settings-save-area">

                                <button className="cancel-settings-button">
                                    Cancel
                                </button>

                                <button className="save-settings-button">
                                    Save Changes
                                </button>

                            </div>

                        </section>

                    </div>

                </main>

            </div>

        </div>
    );
}

export default Settings;