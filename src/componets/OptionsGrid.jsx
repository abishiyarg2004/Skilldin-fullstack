import React from 'react';
import './OptionsGrid.css'; // Custom CSS for the grid

const options = [
    
         { id: 1,
          name: 'Graphic Designer',
          img: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=735&q=80',
          description: 'Creates visual concepts using computer software or by hand to communicate ideas.',
        },
        {
          id: 2,
          name: 'Photographer',
          img: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg',
          description: 'Captures professional photos for personal and commercial use.',
        },
        {
          id: 3,
          name: 'Chef',
          img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=687&q=80',
          description: 'Prepares and creates culinary dishes with expertise in different cuisines.',
        },
        {
          id: 4,
          name: 'Fashion Stylist',
          img: 'https://img.freepik.com/premium-photo/black-fashion-stylist-with-pinnable-mannequin_53876-106744.jpg',
          description: 'Selects and assembles clothing and accessories for clients or photoshoots.',
        },
        {
          id: 5,
          name: 'Painter',
          img: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=687&q=80',
          description: 'Creates artworks using mediums such as oil, acrylic, and watercolor.',
        },
        {
          id: 6,
          name: 'Personal Trainer',
          img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=687&q=80',
          description: 'Helps clients achieve fitness goals through customized workout routines.',
        },
        {
          id: 7,
          name: 'Interior Designer',
          img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=687&q=80',
          description: 'Plans and designs functional and aesthetically pleasing interior spaces.',
        },
        {
          id: 8,
          name: 'Music Producer',
          img: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=687&q=80',
          description: 'Oversees and manages the production of songs and albums.',
        },
        
        {
          id: 12,
          name: 'Photomodel',
          img: 'https://images.unsplash.com/photo-1523303821445-f2983744a23e?auto=format&fit=crop&w=687&q=80',
          description: 'Poses for photographers in various settings to showcase fashion or products.',
        },
       
        
        {
          id: 14,
          name: 'Bartender',
          img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=687&q=80',
          description: 'Mixes and serves beverages in bars, restaurants, and other establishments.',
        },
       
        
        
        {
          id: 19,
          name: 'Life Coach',
          img: 'https://images.unsplash.com/photo-1483691278019-cb7253bee49f?auto=format&fit=crop&w=687&q=80',
          description: 'Provides guidance and motivation to help individuals achieve personal goals.',
        }
      
  // Add more options as needed
];

function OptionsGrid() {
  return (
    <div className="options-grid">
      {options.map((option) => (
        <div key={option.id} className="option-card">
          <img src={option.img} alt={option.name} className="option-image" />
          <h3>{option.name}</h3>
          <p>{option.description}</p>
        </div>
      ))}
    </div>
  );
}

export default OptionsGrid;
