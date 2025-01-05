import React, { useState } from 'react';

/**
 * Exercise: Image Gallery
 * 
 * Task: Create a simple image gallery application
 * 
 * Requirements:
 * 1. Create a collection of images
 *    - Use predefined image URLs
 *    - Include image titles/descriptions
 * 
 * 2. Implement gallery features:
 *    - Display thumbnails of all images
 *    - Click on thumbnail to view full image
 *    - Show image title/description
 * 
 * 3. Add interactive elements:
 *    - Next/Previous image navigation
 *    - Ability to zoom/expand image
 *    - Simple lightbox effect
 * 
 * Hints:
 * - Use useState for managing selected image
 * - Create interface for Image type
 * - Use conditional rendering
 * - Handle image loading states
 */

interface ImageItem {
  id: number;
  url: string;
  title: string;
  description: string;
}

function ImageGalleryExercise() {
  // TODO: Create initial images array

  // TODO: Create state for:
  // - Currently selected image
  // - Zoom/expanded state

  // TODO: Implement function to select image

  // TODO: Implement next/previous image navigation

  // TODO: Implement zoom/expand functionality

  return (
    <div>
      {/* TODO: Render image thumbnails */}
      {/* TODO: Render selected/expanded image */}
      {/* TODO: Create navigation buttons */}
    </div>
  );
}

export default ImageGalleryExercise; 