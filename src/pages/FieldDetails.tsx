import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Star, Clock, Info, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const FieldDetails = () => {
    const { id } = useParams<{ id: string }>();
    // In a real app we would fetch the data based on id, currently using it to avoid warning
    console.log('Fetching field details for', id);
    // In a real app we would fetch the data based on `id`
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedTime, setSelectedTime] = useState<string>('');

    const MOCK_DATA = {
        name: 'Zayed Arena',
        city: 'Sheikh Zayed',
        address: 'El Safa Street, inside Zayed Sports Club',
        price: 300,
        rating: 4.8,
        reviews: 124,
        images: [
            'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518605368461-1ee0c76abfa9?q=80&w=1200&auto=format&fit=crop'
        ],
        amenities: ['Ball Provided', 'Bibs Provided', 'Showers', 'Cafe', 'Parking', 'Floodlights'],
        description: 'A premium 5-a-side football field featuring high-quality 4G artificial turf. Perfect for competitive matches and friendly games with professional lighting.',
        openTime: '08:00',
        closeTime: '02:00'
    };

    const handleBook = () => {
        alert(`Booking confirmed for ${selectedDate} at ${selectedTime}!`);
        // Logic for redirecting to checkout/dashboard
    };

    const timeslots = ['18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

            {/* Header Info */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                <div>
                    <h1 className="text-4xl font-extrabold mb-2">{MOCK_DATA.name}</h1>
                    <div className="flex items-center text-text-muted gap-4">
                        <span className="flex items-center gap-1"><MapPin size={18} className="text-primary" /> {MOCK_DATA.city}</span>
                        <span className="flex items-center gap-1 text-yellow-400 font-bold"><Star size={18} className="fill-yellow-400" /> {MOCK_DATA.rating} <span className="text-text-muted font-normal text-sm">({MOCK_DATA.reviews} reviews)</span></span>
                        <span className="flex items-center gap-1"><Clock size={18} className="text-primary" /> {MOCK_DATA.openTime} - {MOCK_DATA.closeTime}</span>
                    </div>
                </div>
                <div className="text-left md:text-right">
                    <p className="text-3xl font-bold text-primary">{MOCK_DATA.price} <span className="text-xl text-text">EGP</span></p>
                    <p className="text-text-muted">per hour</p>
                </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 h-[400px]">
                <div className="md:col-span-2 relative overflow-hidden rounded-xl border border-gray-800">
                    <img src={MOCK_DATA.images[0]} alt="Field Layout" className="w-full h-full object-cover" />
                    <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/50 p-2 rounded-full hover:bg-background transition-colors backdrop-blur-sm"><ChevronLeft size={24} /></button>
                    <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/50 p-2 rounded-full hover:bg-background transition-colors backdrop-blur-sm"><ChevronRight size={24} /></button>
                </div>
                <div className="hidden md:flex flex-col gap-4">
                    <img src={MOCK_DATA.images[1]} alt="Field Detail" className="w-full h-1/2 object-cover rounded-xl border border-gray-800" />
                    <div className="w-full h-1/2 bg-secondary rounded-xl border border-gray-800 flex items-center justify-center relative overflow-hidden group">
                        <img src={MOCK_DATA.images[0]} alt="Field More" className="w-full h-full object-cover opacity-50 blur-sm group-hover:blur-none group-hover:opacity-100 transition-all duration-300" />
                        <span className="absolute z-10 text-xl font-bold text-text drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pointer-events-none">+5 Photos</span>
                    </div>
                </div>
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left Side: Details */}
                <div className="lg:col-span-2 space-y-10">

                    <section>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-2"><Info size={24} className="text-primary" /> Description</h2>
                        <p className="text-text-muted leading-relaxed text-lg">
                            {MOCK_DATA.description}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 border-b border-gray-800 pb-2">Amenities</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {MOCK_DATA.amenities.map(item => (
                                <div key={item} className="flex items-center gap-2 text-text">
                                    <CheckCircle2 size={20} className="text-primary" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 border-b border-gray-800 pb-2">Location Map</h2>
                        <div className="w-full h-64 bg-secondary border border-gray-800 rounded-xl flex items-center justify-center">
                            {/* Replace with actual Google Map */}
                            <p className="text-text-muted flex flex-col items-center gap-2">
                                <MapPin size={40} className="text-primary/50" />
                                Map Integration Ready
                            </p>
                        </div>
                        <p className="text-text-muted mt-2 text-sm">{MOCK_DATA.address}, {MOCK_DATA.city}</p>
                    </section>

                </div>

                {/* Right Side: Booking Widget */}
                <div className="lg:col-span-1">
                    <div className="card p-6 sticky top-24 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                        <h3 className="text-xl font-bold mb-6 text-center border-b border-gray-800 pb-4">Book Your Slot</h3>

                        <div className="mb-6">
                            <label className="label-text">Select Date</label>
                            <input
                                type="date"
                                className="input-field"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                            />
                        </div>

                        <div className="mb-8">
                            <label className="label-text flex justify-between">
                                <span>Select Time</span>
                                <span className="text-xs text-primary">Live Availability</span>
                            </label>
                            <div className="grid grid-cols-3 gap-2 mt-2">
                                {timeslots.map(time => (
                                    <button
                                        key={time}
                                        onClick={() => setSelectedTime(time)}
                                        className={`py-2 px-1 text-sm font-semibold rounded-lg border transition-all ${selectedTime === time ? 'bg-primary text-black border-primary shadow-[0_0_10px_rgba(57,255,20,0.5)]' : 'bg-transparent border-gray-700 text-text hover:border-gray-500 hover:bg-secondary'}`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3 mb-8 border-t border-gray-800 pt-6">
                            <div className="flex justify-between text-text-muted">
                                <span>{MOCK_DATA.price} EGP x 1 hour</span>
                                <span>{MOCK_DATA.price} EGP</span>
                            </div>
                            <div className="flex justify-between text-text-muted">
                                <span>Service Fee</span>
                                <span>20 EGP</span>
                            </div>
                            <div className="flex justify-between text-xl font-bold text-text pt-2 border-t border-gray-800">
                                <span>Total</span>
                                <span className="text-primary">{MOCK_DATA.price + 20} EGP</span>
                            </div>
                        </div>

                        <button
                            onClick={handleBook}
                            disabled={!selectedDate || !selectedTime}
                            className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${(!selectedDate || !selectedTime) ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'btn-primary'}`}
                        >
                            Confirm Booking
                        </button>
                        <p className="text-xs text-center text-text-muted mt-4">You won't be charged yet. Payment handled at venue or online.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FieldDetails;
