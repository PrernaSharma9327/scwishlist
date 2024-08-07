import React from 'react';
import WishlistItem from './WishlistItem';

const wishlistStyles = {
    main: {
        padding: '2rem',
        textAlign: 'center',
    },
    h1: {
        fontSize: '2rem',
        marginBottom: '1.5rem',
    },
    wishlistItems: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', // 4 items per row, responsive
        gap: '1rem',
        justifyContent: 'center',
    }
};

const Wishlist = ({ items, onRemoveItem, onItemClick, onBuyNow, onAddToCart }) => {
    return (
        <main style={wishlistStyles.main}>
            <h1 style={wishlistStyles.h1}>My Wishlist</h1>
            <div style={wishlistStyles.wishlistItems}>
                {items.map(item => (
                    <WishlistItem 
                        key={item.id} 
                        item={item} 
                        onRemove={onRemoveItem} 
                        onClick={() => onItemClick(item)}
                        onBuyNow={() => onBuyNow(item)}
                        onAddToCart={() => onAddToCart(item)}
                    />
                ))}
            </div>
        </main>
    );
};

export default Wishlist;
