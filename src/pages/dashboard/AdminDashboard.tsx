import { Users, CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold mb-8">Admin Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-secondary p-6 rounded-xl border border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-text-muted font-medium">Total Users</h3>
                        <Users className="text-primary" size={24} />
                    </div>
                    <p className="text-3xl font-black">1,245</p>
                    <p className="text-sm text-primary mt-2 flex items-center gap-1"><TrendingUp size={16} /> +12% this month</p>
                </div>

                <div className="bg-secondary p-6 rounded-xl border border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-text-muted font-medium">Total Fields</h3>
                        <CheckCircle className="text-primary" size={24} />
                    </div>
                    <p className="text-3xl font-black">34</p>
                </div>

                <div className="bg-secondary p-6 rounded-xl border border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-text-muted font-medium">Pending Approvals</h3>
                        <AlertTriangle className="text-yellow-500" size={24} />
                    </div>
                    <p className="text-3xl font-black">3</p>
                    <p className="text-sm text-yellow-500 mt-2">Action required</p>
                </div>

                <div className="bg-secondary p-6 rounded-xl border border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-text-muted font-medium">Platform Revenue</h3>
                        <TrendingUp className="text-primary" size={24} />
                    </div>
                    <p className="text-3xl font-black">45,000 EGP</p>
                </div>
            </div>

            <div className="bg-secondary rounded-xl border border-gray-800 p-6">
                <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex justify-between items-center p-4 bg-background rounded-lg border border-gray-800">
                            <div>
                                <p className="font-bold">New field registration {"\"Heliopolis Arena\""}</p>
                                <p className="text-sm text-text-muted">Awaiting layout document verification</p>
                            </div>
                            <button className="btn-primary py-2 px-4 rounded-lg text-sm">Review</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
