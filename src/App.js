import React, { useState } from 'react';
import Wishlist from './components/Wishlist';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/NavBar'; // Ensure correct file name (Navbar instead of NavBar)

import './App.css';
import wishlist1 from './images/wishlist1.png';
import wishlist2 from './images/wishlist2.png';
import wishlist3 from './images/wishlist3.png';
import wishlist4 from './images/wishlist4.png';
import wishlist5 from './images/wishlist5.png';

const App = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'wishlist1', description: 'This is item 1', image: wishlist1 },
        { id: 2, name: 'wishlist2', description: 'This is item 2', image: wishlist2 },
        { id: 3, name: 'wishlist3', description: 'This is item 3', image: wishlist3 },
        { id: 4, name: 'wishlist4', description: 'This is item 4', image: wishlist4 },
        { id: 5, name: 'wishlist5', description: 'This is item 5', image: wishlist5 },
        // Add more items as needed
    ]);

    const handleRemoveItem = (itemId) => {
        setItems(items.filter(item => item.id !== itemId));
    };

    const handleItemClick = (item) => {
        alert(`Clicked on ${item.name}`);
    };

    const handleBuyNow = (item) => {
        alert(`Buy Now clicked for ${item.name}`);
    };

    const handleAddToCart = (item) => {
        alert(`Add to Cart clicked for ${item.name}`);
    };

    return (
        <div className="app">
            <Header />
            <Navbar />
            <Wishlist 
                items={items} 
                onRemoveItem={handleRemoveItem} 
                onItemClick={handleItemClick}
                onBuyNow={handleBuyNow}
                onAddToCart={handleAddToCart}
            />
            <Footer />
        </div>
    );
};

export default App;
