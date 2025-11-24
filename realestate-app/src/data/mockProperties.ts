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

export const mockProperties: Property[] = [
    {
        id: 1,
        title: "Modern Apartment in Downtown",
        description: "Luxurious apartment with city view, close to all amenities.",
        price: 450000,
        type: 'sale',
        category: 'apartment',
        city: "São Paulo",
        neighborhood: "Jardins",
        bedrooms: 2,
        bathrooms: 2,
        parking: 1,
        area: 85,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        features: ["Gym", "Pool", "24h Security", "Balcony"],
        featured: true
    },
    {
        id: 2,
        title: "Cozy House with Garden",
        description: "Beautiful house perfect for families, spacious garden and quiet neighborhood.",
        price: 3500,
        type: 'rent',
        category: 'house',
        city: "Campinas",
        neighborhood: "Cambuí",
        bedrooms: 3,
        bathrooms: 2,
        parking: 2,
        area: 150,
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        features: ["Garden", "Fireplace", "Garage", "Pet Friendly"],
        featured: true
    },
    {
        id: 3,
        title: "Luxury Penthouse",
        description: "Exclusive penthouse with panoramic views and private pool.",
        price: 2500000,
        type: 'sale',
        category: 'apartment',
        city: "Rio de Janeiro",
        neighborhood: "Leblon",
        bedrooms: 4,
        bathrooms: 4,
        parking: 3,
        area: 280,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        features: ["Private Pool", "Terrace", "Ocean View", "Smart Home"],
        featured: true
    },
    {
        id: 4,
        title: "Commercial Office Space",
        description: "Modern office space in the business district, ready to move in.",
        price: 5000,
        type: 'rent',
        category: 'commercial',
        city: "São Paulo",
        neighborhood: "Berrini",
        bedrooms: 0,
        bathrooms: 2,
        parking: 5,
        area: 120,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        features: ["Meeting Room", "High Speed Internet", "Reception", "Cafeteria"],
        featured: false
    },
    {
        id: 5,
        title: "Spacious Family Home",
        description: "Large family home with backyard and barbecue area.",
        price: 850000,
        type: 'sale',
        category: 'house',
        city: "Curitiba",
        neighborhood: "Batel",
        bedrooms: 4,
        bathrooms: 3,
        parking: 2,
        area: 220,
        image: "https://images.unsplash.com/photo-1600596542815-22b845069566?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1600596542815-22b845069566?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        features: ["Barbecue", "Backyard", "Heating", "Quiet Street"],
        featured: false
    },
    {
        id: 6,
        title: "Studio Loft",
        description: "Trendy studio loft perfect for singles or couples.",
        price: 2200,
        type: 'rent',
        category: 'apartment',
        city: "Florianópolis",
        neighborhood: "Centro",
        bedrooms: 1,
        bathrooms: 1,
        parking: 0,
        area: 45,
        image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        features: ["Furnished", "Close to Beach", "Air Conditioning"],
        featured: false
    }
];
