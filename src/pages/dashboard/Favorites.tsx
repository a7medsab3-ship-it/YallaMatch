import { Heart } from 'lucide-react';

const Favorites = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold mb-8">My Favorites</h1>
            <div className="bg-secondary rounded-xl border border-gray-800 p-6 flex flex-col items-center justify-center py-12 text-center text-text-muted">
                <Heart size={48} className="mb-4 opacity-50 text-red-500" />
                <p className="text-xl font-bold text-text mb-2">No favorite fields yet</p>
                <p className="max-w-md mx-auto mb-6">Explore the platform to add some awesome fields to your favorites list.</p>
                <a href="/fields" className="btn-primary py-2 px-6 rounded-lg text-sm">Find Fields</a>
            </div>
        </div>
    );
};

export default Favorites;
