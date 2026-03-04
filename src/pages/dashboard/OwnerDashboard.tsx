import { LayoutGrid, CalendarCheck, Wallet, Plus, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const OwnerDashboard = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Partner Dashboard</h1>
                <Link to="/fields/new" className="btn-primary py-2 px-4 rounded-lg flex items-center gap-2">
                    <Plus size={20} /> Add New Field
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-secondary p-6 rounded-xl border border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-text-muted font-medium">My Fields</h3>
                        <LayoutGrid className="text-primary" size={24} />
                    </div>
                    <p className="text-3xl font-black">2</p>
                </div>

                <div className="bg-secondary p-6 rounded-xl border border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-text-muted font-medium">Upcoming Bookings</h3>
                        <CalendarCheck className="text-primary" size={24} />
                    </div>
                    <p className="text-3xl font-black">12</p>
                    <p className="text-sm text-text-muted mt-2">Next 7 days</p>
                </div>

                <div className="bg-secondary p-6 rounded-xl border border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-text-muted font-medium">Total Earnings</h3>
                        <Wallet className="text-primary" size={24} />
                    </div>
                    <p className="text-3xl font-black">12,400 EGP</p>
                    <p className="text-sm text-text-muted mt-2">This month</p>
                </div>
            </div>

            <div className="bg-secondary rounded-xl border border-gray-800 p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Manage Fields</h2>
                    <button className="text-primary hover:underline text-sm flex items-center gap-1"><Settings size={16} /> Settings</button>
                </div>

                <div className="space-y-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-background rounded-lg border border-gray-800 gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gray-800 rounded-lg shrink-0"></div>
                            <div>
                                <p className="font-bold text-lg">Zayed Arena</p>
                                <p className="text-sm text-text-muted">Sheikh Zayed • Active</p>
                            </div>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                            <button className="flex-1 md:flex-none py-2 px-4 rounded-lg text-sm border border-gray-700 hover:bg-gray-800 transition-colors">Calendar</button>
                            <button className="flex-1 md:flex-none py-2 px-4 rounded-lg text-sm border border-gray-700 hover:bg-gray-800 transition-colors">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OwnerDashboard;
