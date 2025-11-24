import React, { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Property } from '../types';

interface FavoritesContextType {
    favorites: Property[];
    addFavorite: (property: Property) => void;
    removeFavorite: (id: number) => void;
    isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<Property[]>([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('vivabem_favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('vivabem_favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (property: Property) => {
        setFavorites(prev => {
            if (prev.some(p => p.id === property.id)) return prev;
            return [...prev, property];
        });
    };

    const removeFavorite = (id: number) => {
        setFavorites(prev => prev.filter(p => p.id !== id));
    };

    const isFavorite = (id: number) => {
        return favorites.some(p => p.id === id);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (context === undefined) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
};
