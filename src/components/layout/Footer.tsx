import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary border-t border-gray-800 pt-16 pb-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="text-2xl font-black tracking-tighter text-text mb-4 inline-block">
                            GoalZone<span className="text-primary">.Pro</span>
                        </Link>
                        <p className="text-text-muted mb-6">
                            The professional way to book your 5-a-side football fields in Egypt. Premium experience, instant confirmation.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-background border border-gray-800 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-background border border-gray-800 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-background border border-gray-800 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-text">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link to="/fields" className="text-text-muted hover:text-primary transition-colors">Find a Field</Link></li>
                            <li><Link to="/about" className="text-text-muted hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/pricing" className="text-text-muted hover:text-primary transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-text">Legal</h3>
                        <ul className="space-y-4">
                            <li><Link to="/terms" className="text-text-muted hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link to="/privacy" className="text-text-muted hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/refund" className="text-text-muted hover:text-primary transition-colors">Refund Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-text">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-text-muted">
                                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                                <span>Cairo, Egypt<br />123 Sports Avenue</span>
                            </li>
                            <li className="flex items-center gap-3 text-text-muted">
                                <Phone size={20} className="text-primary shrink-0" />
                                <span>+20 100 000 0000</span>
                            </li>
                            <li className="flex items-center gap-3 text-text-muted">
                                <Mail size={20} className="text-primary shrink-0" />
                                <span>support@goalzone.pro</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-muted text-sm">
                        &copy; {new Date().getFullYear()} GoalZone Pro. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-text bg-background px-3 py-1 rounded border border-gray-800">VISA</span>
                        <span className="text-sm font-bold text-text bg-background px-3 py-1 rounded border border-gray-800">MASTERCARD</span>
                        <span className="text-sm font-bold text-text bg-background px-3 py-1 rounded border border-gray-800">FAWRY</span>
                        <span className="text-sm font-bold text-text bg-background px-3 py-1 rounded border border-gray-800">VODAFONE CASH</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
