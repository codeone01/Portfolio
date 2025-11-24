export interface Property {
    id: number;
    title: string;
    description: string;
    price: number;
    type: 'sale' | 'rent';
    category: 'apartment' | 'house' | 'commercial' | 'land';
    city: string;
    neighborhood: string;
    bedrooms: number;
    bathrooms: number;
    parking: number;
    area: number;
    image: string;
    images: string[];
    features: string[];
    featured?: boolean;
}

export interface FilterOptions {
    city: string;
    type: string;
    category: string;
    minPrice: number;
    maxPrice: number;
    bedrooms: number;
}
