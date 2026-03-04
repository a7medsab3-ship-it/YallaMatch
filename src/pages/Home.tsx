import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import * as analytics from '../utils/analytics';

const Home = () => {
    const handleCTAClick = (label: string) => {
        analytics.event({
            action: 'click_cta',
            category: 'Home',
            label: label
        });
    };

    return (
        <div className="w-full">
            <SEO
                title="Book Football Fields in Egypt | GoalZone Pro"
                description="Book the best 5-a-side football fields in Egypt instantly. Compare prices, check real-time availability, and play your game today."
            />

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
                {/* Abstract dark neon background */}
                <div className="absolute inset-0 bg-background z-0">
                    <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                        Play Like a <span className="text-primary drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]">Pro</span>
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-text-muted mb-10 max-w-3xl mx-auto">
                        Book the best 5-a-side football fields in Egypt instantly. Compare prices, check real-time availability, and play your game.
                    </p>

                    {/* Quick Search Bar */}
                    <div className="bg-surface/80 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-gray-800 max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
                        <div className="flex-1 flex items-center bg-secondary rounded-lg px-4 py-3 border border-gray-700">
                            <MapPin className="text-primary mr-3" size={20} />
                            <input type="text" placeholder="City or area (e.g. Cairo)" className="bg-transparent border-none focus:outline-none text-text w-full placeholder-gray-500" />
                        </div>
                        <div className="flex-1 flex items-center bg-secondary rounded-lg px-4 py-3 border border-gray-700">
                            <Calendar className="text-primary mr-3" size={20} />
                            <input type="date" className="bg-transparent border-none focus:outline-none text-text w-full" />
                        </div>
                        <Link
                            to="/fields"
                            onClick={() => handleCTAClick('hero_find_fields')}
                            className="btn-primary flex items-center justify-center whitespace-nowrap py-3 px-8 text-lg"
                        >
                            Find Fields
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Fields */}
            <section className="py-20 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight">Featured Pitches</h2>
                            <p className="text-text-muted mt-2">Top rated football fields available right now.</p>
                        </div>
                        <Link to="/fields" className="text-primary hover:text-primary-light flex items-center gap-2 font-medium">
                            View All <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Mock Card 1 */}
                        <div className="card overflow-hidden group">
                            <div className="h-48 bg-gray-800 relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600&auto=format&fit=crop" alt="Football Field" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                                <div className="absolute top-4 right-4 bg-surface text-primary px-3 py-1 rounded-full text-sm font-bold border border-primary/30">
                                    4.8 ★
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-text mb-1">Zayed Arena</h3>
                                        <p className="text-sm text-text-muted flex items-center"><MapPin size={14} className="mr-1" /> Sheikh Zayed</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xl font-bold text-primary">300 EGP</p>
                                        <p className="text-xs text-text-muted">/ hour</p>
                                    </div>
                                </div>
                                <Link to="/fields/1" className="btn-outline w-full block text-center mt-4">Book Now</Link>
                            </div>
                        </div>

                        {/* Mock Card 2 */}
                        <div className="card overflow-hidden group">
                            <div className="h-48 bg-gray-800 relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1518605368461-1ee0c76abfa9?q=80&w=600&auto=format&fit=crop" alt="Football Field" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                                <div className="absolute top-4 right-4 bg-surface text-primary px-3 py-1 rounded-full text-sm font-bold border border-primary/30">
                                    4.5 ★
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-text mb-1">Maadi FC Turf</h3>
                                        <p className="text-sm text-text-muted flex items-center"><MapPin size={14} className="mr-1" /> Maadi</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xl font-bold text-primary">250 EGP</p>
                                        <p className="text-xs text-text-muted">/ hour</p>
                                    </div>
                                </div>
                                <Link to="/fields/2" className="btn-outline w-full block text-center mt-4">Book Now</Link>
                            </div>
                        </div>

                        {/* Mock Card 3 */}
                        <div className="card overflow-hidden group">
                            <div className="h-48 bg-gray-800 relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1628891435222-065926d73a23?q=80&w=600&auto=format&fit=crop" alt="Football Field" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                                <div className="absolute top-4 right-4 bg-surface text-primary px-3 py-1 rounded-full text-sm font-bold border border-primary/30">
                                    4.9 ★
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-text mb-1">New Cairo Stadium</h3>
                                        <p className="text-sm text-text-muted flex items-center"><MapPin size={14} className="mr-1" /> New Cairo</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xl font-bold text-primary">400 EGP</p>
                                        <p className="text-xs text-text-muted">/ hour</p>
                                    </div>
                                </div>
                                <Link to="/fields/3" className="btn-outline w-full block text-center mt-4">Book Now</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section for Owners */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 z-0" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl font-bold mb-6">Own a Football Field?</h2>
                    <p className="text-xl text-text-muted mb-10">
                        Join GoalZone Pro and manage your bookings efficiently. Maximize your revenue, eliminate double bookings, and reach more players.
                    </p>
                    <Link
                        to="/register-owner"
                        onClick={() => handleCTAClick('owner_register')}
                        className="btn-primary text-xl px-10 py-4 shadow-[0_0_30px_rgba(57,255,20,0.6)]"
                    >
                        Start Your 14-Day Free Trial
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
