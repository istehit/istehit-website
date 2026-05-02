"use client";

import React, { useState, useEffect } from 'react';

export default function EventPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open the popup every time it loads depending on client side mount
    // Using a short timeout can help it feel like a popup after initial paint
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Handle body scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '1rem',
        animation: 'fadeIn 0.3s ease-out forwards'
      }} 
      onClick={() => setIsOpen(false)}
    >
      <div 
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: 'slideUp 0.4s ease-out forwards'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={() => setIsOpen(false)}
          style={{
            position: 'absolute',
            top: '-15px',
            right: '-15px',
            background: 'var(--theme-light, white)',
            border: '2px solid var(--theme-dark, #000)',
            color: 'var(--theme-dark, black)',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '4px 4px 0px var(--theme-dark, #000)',
            zIndex: 10000,
            lineHeight: 1
          }}
          aria-label="Close popup"
        >
          &times;
        </button>
        <a 
          href="https://res.cloudinary.com/db1sduyls/image/upload/v1777721620/ac3.0_ja5rm1.jpg"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <img 
            src="https://res.cloudinary.com/db1sduyls/image/upload/v1777721620/ac3.0_ja5rm1.jpg" 
            alt="Latest Event Poster" 
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '85vh',
              objectFit: 'contain',
              borderRadius: '12px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.01)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </a>
        <a 
          href="https://ac.istehitsc.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{
            marginTop: '1.5rem',
            padding: '0.75rem 2rem',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            textAlign: 'center'
          }}
        >
          Annual Convention 3.0
        </a>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}} />
      </div>
    </div>
  );
}
