import { Settings as SettingsIcon } from 'lucide-react';

const Settings = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold mb-8">Account Settings</h1>

            <div className="bg-secondary rounded-xl border border-gray-800 p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-gray-800 pb-2">Profile Details</h2>
                {/* Simplified placeholder */}
                <div className="space-y-4">
                    <p className="text-text-muted flex items-center gap-2"><SettingsIcon size={20} /> Updating profile settings features are coming soon.</p>
                </div>
            </div>
        </div>
    );
};

export default Settings;
