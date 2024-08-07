import React from 'react';

const wishlistItemStyles = {
    item: {
        border: '1px solid #ddd',
        padding: '1rem',
        borderRadius: '8px',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '8px 5px 8px rgb(255, 233, 247)',
    },
    img: {
        maxWidth: '100%',
        borderRadius: '8px',
        marginBottom: '1rem',
    },
    h2: {
        fontSize: '1.25rem',
        margin: '1rem 0',
    },
    p: {
        fontSize: '1rem',
        color: '#666',
        marginBottom: '1rem',
    },
    button: {
        padding: '0.5rem 1rem',
        border: 'none',
        backgroundColor: '#333',
        color: '#fff',
        borderRadius: '4px',
        cursor: 'pointer',
        margin: '0.5rem',
    }
};

const WishlistItem = ({ item, onRemove, onClick, onBuyNow, onAddToCart }) => {
    return (
        <div 
            style={wishlistItemStyles.item} 
            onClick={onClick}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
            <img style={wishlistItemStyles.img} src={item.image} alt={item.name} />
            <h2 style={wishlistItemStyles.h2}>{item.name}</h2>
            <p style={wishlistItemStyles.p}>{item.description}</p>
            <div>
                <button style={wishlistItemStyles.button} onClick={(e) => { e.stopPropagation(); onBuyNow(item); }}>Buy Now</button>
                <button style={wishlistItemStyles.button} onClick={(e) => { e.stopPropagation(); onAddToCart(item); }}>Add to Cart</button>
            </div>
            <button style={wishlistItemStyles.button} onClick={(e) => { e.stopPropagation(); onRemove(item.id); }}>Remove</button>
        </div>
    );
};

export default WishlistItem;
