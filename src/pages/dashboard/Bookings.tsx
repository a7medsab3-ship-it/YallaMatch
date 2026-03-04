import { Calendar, Search } from 'lucide-react';

const Bookings = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold mb-8">My Bookings</h1>

            <div className="flex gap-4 mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    <input type="text" placeholder="Search bookings..." className="input-field pl-10" />
                </div>
                <select className="input-field max-w-[200px]">
                    <option value="all">All Bookings</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="past">Past</option>
                </select>
            </div>

            <div className="bg-secondary rounded-xl border border-gray-800 p-6">
                <div className="flex flex-col items-center justify-center py-12 text-center text-text-muted">
                    <Calendar size={48} className="mb-4 opacity-50" />
                    <p className="text-xl font-bold text-text mb-2">No upcoming bookings</p>
                    <p className="max-w-md mx-auto mb-6">You haven't booked any fields yet. Start exploring available fields in your area.</p>
                    <a href="/fields" className="btn-primary py-2 px-6 rounded-lg text-sm">Explore Fields</a>
                </div>
            </div>
        </div>
    );
};

export default Bookings;
