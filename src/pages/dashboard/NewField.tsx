import { useState } from 'react';
import { Upload, Plus, Trash2, MapPin, Grid, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NewField = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    // Form States
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [amenities, setAmenities] = useState<string[]>([]);
    const [newAmenity, setNewAmenity] = useState('');
    const [images, setImages] = useState<File[]>([]);

    const handleAddAmenity = () => {
        if (newAmenity.trim() && !amenities.includes(newAmenity.trim())) {
            setAmenities([...amenities, newAmenity.trim()]);
            setNewAmenity('');
        }
    };

    const handleRemoveAmenity = (item: string) => {
        setAmenities(amenities.filter(a => a !== item));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            setImages([...images, ...filesArray]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Mock submission
            await new Promise(resolve => setTimeout(resolve, 1500));
            alert('Field submitted successfully for review!');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error adding field', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Add New Field</h1>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Info */}
                <div className="card p-6 border border-gray-800 rounded-xl bg-secondary">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-gray-800 pb-2"><Info className="text-primary" size={24} /> Basic Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="label-text">Field Name</label>
                            <input type="text" className="input-field" placeholder="e.g. Zayed Arena Main Pitch" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div>
                            <label className="label-text">Price per Hour (EGP)</label>
                            <input type="number" className="input-field" placeholder="300" value={price} onChange={(e) => setPrice(e.target.value)} required min={0} />
                        </div>
                    </div>

                    <div>
                        <label className="label-text">Description</label>
                        <textarea className="input-field min-h-[100px] py-3" placeholder="Describe the field, turf quality, and overall experience..." value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                    </div>
                </div>

                {/* Location Info */}
                <div className="card p-6 border border-gray-800 rounded-xl bg-secondary">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-gray-800 pb-2"><MapPin className="text-primary" size={24} /> Location Details</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="label-text">City / Area</label>
                            <select className="input-field" value={city} onChange={(e) => setCity(e.target.value)} required>
                                <option value="" disabled>Select Area</option>
                                <option value="Sheikh Zayed">Sheikh Zayed</option>
                                <option value="6th of October">6th of October</option>
                                <option value="New Cairo">New Cairo</option>
                                <option value="Maadi">Maadi</option>
                                <option value="Nasr City">Nasr City</option>
                            </select>
                        </div>
                        <div>
                            <label className="label-text">Detailed Address</label>
                            <input type="text" className="input-field" placeholder="Street name, landmark..." value={address} onChange={(e) => setAddress(e.target.value)} required />
                        </div>
                    </div>
                </div>

                {/* Amenities */}
                <div className="card p-6 border border-gray-800 rounded-xl bg-secondary">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-gray-800 pb-2"><Grid className="text-primary" size={24} /> Amenities & Facilities</h2>

                    <div className="flex gap-2 mb-4">
                        <input
                            type="text"
                            className="input-field flex-1"
                            placeholder="e.g. Floodlights, Changing Rooms, Free Water..."
                            value={newAmenity}
                            onChange={(e) => setNewAmenity(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddAmenity())}
                        />
                        <button type="button" onClick={handleAddAmenity} className="btn-primary px-4 py-2 rounded-lg flex-shrink-0 flex items-center gap-1"><Plus size={20} /> Add</button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {amenities.map(amenity => (
                            <div key={amenity} className="bg-background border border-gray-700 px-3 py-1.5 rounded-full flex items-center gap-2 text-sm">
                                {amenity}
                                <button type="button" onClick={() => handleRemoveAmenity(amenity)} className="text-red-500 hover:text-red-400"><Trash2 size={14} /></button>
                            </div>
                        ))}
                        {amenities.length === 0 && <p className="text-sm text-text-muted italic">No amenities added yet.</p>}
                    </div>
                </div>

                {/* Photos */}
                <div className="card p-6 border border-gray-800 rounded-xl bg-secondary">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-gray-800 pb-2"><Upload className="text-primary" size={24} /> Field Photos</h2>

                    <div className="border-2 border-dashed border-gray-700 p-8 rounded-xl text-center hover:border-primary transition-colors cursor-pointer bg-background relative">
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <Upload className="mx-auto text-gray-500 mb-3" size={32} />
                        <p className="font-bold mb-1">Click to upload or drag & drop</p>
                        <p className="text-sm text-text-muted">SVG, PNG, JPG or GIF (max. 5MB)</p>
                    </div>

                    {images.length > 0 && (
                        <div className="mt-4">
                            <p className="text-sm text-text-muted mb-2">{images.length} files selected</p>
                            <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                                {images.map((img, idx) => (
                                    <div key={idx} className="aspect-square bg-gray-800 rounded-lg overflow-hidden relative group">
                                        <img src={URL.createObjectURL(img)} alt="Preview" className="w-full h-full object-cover" />
                                        <button type="button" onClick={() => setImages(images.filter((_, i) => i !== idx))} className="absolute right-1 top-1 bg-red-500 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Trash2 size={12} className="text-white" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex justify-end gap-4 pt-4 border-t border-gray-800">
                    <button type="button" onClick={() => navigate('/dashboard')} className="px-6 py-3 rounded-xl border border-gray-700 hover:bg-gray-800 transition-colors font-bold">Cancel</button>
                    <button type="submit" disabled={isLoading} className="btn-primary px-8 py-3 rounded-xl font-bold flex items-center justify-center min-w-[200px]">
                        {isLoading ? <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div> : 'Submit for Review'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewField;
