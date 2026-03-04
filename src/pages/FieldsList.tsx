import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Filter, Star } from 'lucide-react';

// Mock Data
const MOCK_FIELDS = [
    { id: '1', name: 'Zayed Arena', city: 'Sheikh Zayed', price: 300, rating: 4.8, img: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600&auto=format&fit=crop' },
    { id: '2', name: 'Maadi FC Turf', city: 'Maadi', price: 250, rating: 4.5, img: 'https://images.unsplash.com/photo-1518605368461-1ee0c76abfa9?q=80&w=600&auto=format&fit=crop' },
    { id: '3', name: 'New Cairo Stadium', city: 'New Cairo', price: 400, rating: 4.9, img: 'https://images.unsplash.com/photo-1628891435222-065926d73a23?q=80&w=600&auto=format&fit=crop' },
    { id: '4', name: 'Heliopolis Pitch', city: 'Heliopolis', price: 280, rating: 4.3, img: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=600&auto=format&fit=crop' }
];

const FieldsList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

            {/* Header and Search */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                <div>
                    <h1 className="text-3xl font-bold">Find Football Fields</h1>
                    <p className="text-text-muted mt-2">Browse and book the best pitches near you.</p>
                </div>

                <div className="flex w-full md:w-auto gap-4">
                    <div className="relative flex-1 md:w-80">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search by name or city..."
                            className="input-field pl-10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="btn-secondary flex items-center gap-2">
                        <Filter size={20} />
                        <span className="hidden sm:inline">Filters</span>
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">

                {/* Filters Sidebar (desktop) */}
                <div className="hidden lg:block w-64 flex-shrink-0">
                    <div className="card p-6 sticky top-24">
                        <h3 className="text-lg font-bold mb-4 border-b border-gray-800 pb-2">Location</h3>
                        <div className="space-y-2 mb-6">
                            {['Cairo', 'Giza', 'Alexandria', 'Mansoura'].map(city => (
                                <label key={city} className="flex items-center gap-3 cursor-pointer">
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-primary rounded border-gray-600 bg-secondary focus:ring-primary focus:ring-offset-background" />
                                    <span className="text-text-muted">{city}</span>
                                </label>
                            ))}
                        </div>

                        <h3 className="text-lg font-bold mb-4 border-b border-gray-800 pb-2">Price Range</h3>
                        <div className="space-y-4 mb-6">
                            <input type="range" className="w-full accent-primary" min="100" max="1000" />
                            <div className="flex justify-between text-sm text-text-muted">
                                <span>100 EGP</span>
                                <span>1000 EGP</span>
                            </div>
                        </div>

                        <button className="btn-primary w-full">Apply Filters</button>
                    </div>
                </div>

                {/* Results Grid */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {MOCK_FIELDS.filter(f => f.name.toLowerCase().includes(searchTerm.toLowerCase()) || f.city.toLowerCase().includes(searchTerm.toLowerCase())).map(field => (
                        <div key={field.id} className="card overflow-hidden group flex flex-col">
                            <div className="h-48 bg-gray-800 relative overflow-hidden">
                                <img src={field.img} alt={field.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-sm shadow-md px-2 py-1 flex items-center gap-1 rounded font-bold text-sm border border-gray-700">
                                    <Star size={14} className="text-yellow-400 fill-yellow-400" /> {field.rating}
                                </div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-text mb-1 truncate">{field.name}</h3>
                                <p className="text-sm text-text-muted flex items-center mb-4"><MapPin size={14} className="mr-1 text-primary" /> {field.city}</p>

                                <div className="mt-auto pt-4 border-t border-gray-800 flex justify-between items-center">
                                    <div>
                                        <span className="text-xl font-bold text-text">{field.price}</span>
                                        <span className="text-xs text-text-muted ml-1">EGP/hr</span>
                                    </div>
                                    <Link to={`/fields/${field.id}`} className="btn-primary py-2 px-4 shadow-none hover:shadow-[0_0_15px_rgba(57,255,20,0.5)]">
                                        Book
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default FieldsList;
