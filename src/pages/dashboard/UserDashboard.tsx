import { Calendar as CalendarIcon, Clock, MapPin, CheckCircle } from 'lucide-react';

const UserDashboard = () => {
    return (
        <div className="space-y-8">

            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-text-muted mt-1">Manage your upcoming games and activity.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card p-6 flex items-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg text-primary">
                        <CalendarIcon size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-text-muted">Upcoming Games</p>
                        <p className="text-2xl font-bold">2</p>
                    </div>
                </div>
                <div className="card p-6 flex items-center gap-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg text-blue-500">
                        <CheckCircle size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-text-muted">Completed Games</p>
                        <p className="text-2xl font-bold">14</p>
                    </div>
                </div>
                <div className="card p-6 flex items-center gap-4">
                    <div className="p-3 bg-yellow-400/20 rounded-lg text-yellow-400">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-text-muted">Saved Fields</p>
                        <p className="text-2xl font-bold">5</p>
                    </div>
                </div>
            </div>

            <div className="card overflow-hidden">
                <div className="p-6 border-b border-gray-800 flex justify-between items-center">
                    <h2 className="text-xl font-bold">Upcoming Bookings</h2>
                    <a href="#" className="text-primary text-sm hover:underline">View All</a>
                </div>

                <div className="divide-y divide-gray-800">

                    {/* Mock Booking Item */}
                    <div className="p-6 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center hover:bg-secondary/50 transition-colors">
                        <div className="flex gap-4 items-center">
                            <div className="w-16 h-16 rounded-lg bg-gray-800 overflow-hidden flex-shrink-0">
                                <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Field" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Zayed Arena</h3>
                                <p className="text-sm text-text-muted flex items-center gap-2 mt-1">
                                    <CalendarIcon size={14} /> Oct 15, 2026
                                    <span className="text-gray-600">|</span>
                                    <Clock size={14} /> 20:00 - 21:00
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-2 w-full sm:w-auto">
                            <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full border border-primary/30">Confirmed</span>
                            <p className="font-bold text-text">320 EGP</p>
                        </div>
                    </div>

                    {/* Another Mock Booking */}
                    <div className="p-6 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center hover:bg-secondary/50 transition-colors">
                        <div className="flex gap-4 items-center">
                            <div className="w-16 h-16 rounded-lg bg-gray-800 overflow-hidden flex-shrink-0">
                                <img src="https://images.unsplash.com/photo-1518605368461-1ee0c76abfa9?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Field" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Maadi FC Turf</h3>
                                <p className="text-sm text-text-muted flex items-center gap-2 mt-1">
                                    <CalendarIcon size={14} /> Oct 20, 2026
                                    <span className="text-gray-600">|</span>
                                    <Clock size={14} /> 19:00 - 20:00
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-2 w-full sm:w-auto">
                            <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs font-bold rounded-full border border-yellow-400/30">Pending Payment</span>
                            <p className="font-bold text-text">250 EGP</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default UserDashboard;
