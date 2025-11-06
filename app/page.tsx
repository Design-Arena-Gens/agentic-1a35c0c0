'use client'

import { useState } from 'react'

interface Product {
  id: number
  name: string
  category: string
  price: number
  icon: string
  badge?: string
}

export default function Home() {
  const [cart, setCart] = useState(0)

  const products: Product[] = [
    { id: 1, name: 'Classic Denim Jacket', category: "Men's Outerwear", price: 89.99, icon: '🧥', badge: 'NEW' },
    { id: 2, name: 'Summer Floral Dress', category: "Women's Dresses", price: 69.99, icon: '👗', badge: 'SALE' },
    { id: 3, name: 'Premium Leather Sneakers', category: 'Footwear', price: 129.99, icon: '👟' },
    { id: 4, name: 'Cashmere Sweater', category: "Women's Tops", price: 159.99, icon: '🧶', badge: 'NEW' },
    { id: 5, name: 'Slim Fit Chinos', category: "Men's Pants", price: 59.99, icon: '👖' },
    { id: 6, name: 'Designer Sunglasses', category: 'Accessories', price: 199.99, icon: '🕶️', badge: 'SALE' },
    { id: 7, name: 'Athletic Joggers', category: "Men's Activewear", price: 49.99, icon: '🩳' },
    { id: 8, name: 'Silk Blouse', category: "Women's Tops", price: 79.99, icon: '👚', badge: 'NEW' },
    { id: 9, name: 'Leather Crossbody Bag', category: 'Accessories', price: 149.99, icon: '👜' },
    { id: 10, name: 'Wool Beanie', category: 'Accessories', price: 29.99, icon: '🧢' },
    { id: 11, name: 'Running Shoes', category: 'Footwear', price: 119.99, icon: '👟', badge: 'SALE' },
    { id: 12, name: 'Cotton T-Shirt', category: "Men's Basics", price: 24.99, icon: '👕' },
  ]

  const addToCart = (productName: string) => {
    setCart(cart + 1)
    console.log(`Added ${productName} to cart`)
  }

  return (
    <div>
      <header className="header">
        <nav className="nav">
          <div className="logo">StyleHub</div>
          <ul className="nav-links">
            <li><a href="#new">New Arrivals</a></li>
            <li><a href="#mens">Men</a></li>
            <li><a href="#womens">Women</a></li>
            <li><a href="#accessories">Accessories</a></li>
            <li><a href="#sale">Sale</a></li>
          </ul>
          <div className="nav-icons">
            <button className="icon-btn">🔍</button>
            <button className="icon-btn">❤️</button>
            <div className="icon-wrapper">
              <button className="icon-btn">🛒</button>
              {cart > 0 && <span className="cart-badge">{cart}</span>}
            </div>
          </div>
        </nav>
      </header>

      <section className="hero">
        <h1>New Season, New Style</h1>
        <p>Discover our latest collection of premium clothing</p>
        <button className="cta-btn">Shop Now</button>
      </section>

      <div className="container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories">
          <div className="category-card cat-mens">
            <h3>Men's Collection</h3>
          </div>
          <div className="category-card cat-womens">
            <h3>Women's Collection</h3>
          </div>
          <div className="category-card cat-accessories">
            <h3>Accessories</h3>
          </div>
          <div className="category-card cat-shoes">
            <h3>Footwear</h3>
          </div>
        </div>

        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                {product.badge && <span className="product-badge">{product.badge}</span>}
                <span style={{ fontSize: '5rem' }}>{product.icon}</span>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">${product.price}</p>
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(product.name)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#shipping">Shipping Info</a></li>
              <li><a href="#returns">Returns & Exchanges</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>About StyleHub</h3>
            <ul>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#sustainability">Sustainability</a></li>
              <li><a href="#press">Press</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#pinterest">Pinterest</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe for exclusive offers and updates</p>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '0.8rem',
                marginTop: '1rem',
                borderRadius: '5px',
                border: 'none',
                fontSize: '1rem'
              }}
            />
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 StyleHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
