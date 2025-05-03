import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import MediaUpload from './MediaUpload';
import ImageReveal from './ImageReveal';
import ProgressCards from './ProgressCards';
import SnippingTool from './SnippingTool';

// Register the icon
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCloudUploadAlt);

const AppHeader = () => (
  <div className="app-header">
    <h1>ShopVision</h1>
    <p className="tagline">Visual Product Search Made Easy</p>
  </div>
);

function App() {
    const [isMediaUploaded, setIsMediaUploaded] = useState(false);
    const [videoSource, setVideoSource] = useState(null);
    const [showResults, setShowResults] = useState(false);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // New loading state
    const videoContainerRef = useRef(null);
    const resultsRef = useRef(null); // Reference for the results section

    const handleMediaUploadComplete = (file) => { 
        setVideoSource(URL.createObjectURL(file));
        setIsMediaUploaded(true);
    };

  const handleScreenshotComplete = (data) => {
    setShowResults(true);
    setIsLoading(true);
    // Process screenshot data here
  };

  const handleProcessComplete = (data) => {
    setProducts(data.search_results);
    setIsLoading(false);
  };

  const handleStartOver = () => {
    setIsMediaUploaded(false);
    setShowResults(false);
    setVideoSource(null);
    setProducts([]);
  };

  useEffect(() => {
    if (showResults && !isLoading) {
      setTimeout(() => {
        if (resultsRef.current) {
          const extraScroll = 300;
          const elementTop = resultsRef.current.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementTop - 0 + extraScroll;

          setTimeout(() => {
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 100); 
        }
      }, 100); 
    }
  }, [showResults, isLoading]);

  return (
    <main className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span className="highlight">Find</span> Any Product From <span className="highlight">Videos</span>
          </h1>
          <p className="subheading">
            See something you like in a video? Our AI instantly identifies products and helps you find where to buy them.
          </p>
        </div>
      </section>

      {/* Upload Box */}
      <section className="upload-box">
        <div className="upload-icon">
          <i className="fas fa-cloud-upload-alt"></i>
        </div>
        <div className="upload-content">
          <h2>Upload your video</h2>
          <p className="upload-hint">Drag and drop your video file here or click to browse</p>
          <button className="upload-btn" onClick={() => document.getElementById('videoInput').click()}>
            Select Video
          </button>
          <p className="file-support">Supports MP4, WebM (max 100MB)</p>
          <input
            type="file"
            id="videoInput"
            accept="video/mp4,video/webm"
            style={{ display: 'none' }}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                handleMediaUploadComplete(file);
              }
            }}
          />
        </div>
      </section>

      {isMediaUploaded && (
        <div className="video-section">
          <SnippingTool
            videoContainerRef={videoContainerRef}
            videoSource={videoSource}
            onScreenshotComplete={handleScreenshotComplete}
            onProcessComplete={handleProcessComplete}
          />
          <button className="start-over-button" onClick={handleStartOver}>Start Over</button>
        </div>
      )}
      {showResults && products.length > 0 && (
        <div ref={resultsRef} className="results-container">
          <h2 className="main-product-result">Your Main Product Result</h2>
          <div className="image-and-cards-container">
            <div className="image-container">
              <img
                src={products[0].thumbnail}
                alt={products[0].title}
                className="main-product-image"
                loading="lazy"
              />
              <h2 className="other-products">Some Other Products You Might Be Interested In</h2>
              <div className="other-products-grid">
                {products.slice(1, 5).map((product, index) => (
                  <div key={index} className="product-card">
                    <img src={product.thumbnail} alt={product.title} loading="lazy" />
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
