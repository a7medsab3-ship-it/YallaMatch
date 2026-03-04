import { Calendar } from 'lucide-react';

const OwnerBookings = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold mb-8">Booking Management</h1>
            <div className="bg-secondary rounded-xl border border-gray-800 p-6 flex flex-col items-center justify-center py-12 text-center text-text-muted">
                <Calendar size={48} className="mb-4 opacity-50 text-primary" />
                <p className="text-xl font-bold text-text mb-2">No upcoming bookings</p>
                <p className="max-w-md mx-auto mb-6">You haven't received any bookings yet. Ensure your fields are active and well-detailed to attract more players.</p>
            </div>
        </div>
    );
};

export default OwnerBookings;
