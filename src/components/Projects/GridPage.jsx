import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const GridPage = () => {
  const navigate = useNavigate();

  // State for modal, storing both selected image and its name
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageName, setSelectedImageName] = useState('');

  // Array of images with names
  const images = [
    { url: "/P1/1 (1).jpg", name: "Image 1" },
    { url: "/P1/1 (2).jpg", name: "Image 2" },
    { url: "/P1/1 (3).jpg", name: "Image 3" },
    { url: "/P1/1 (4).jpg", name: "Image 4" },
    { url: "/P1/1 (5).jpg", name: "Image 5" },
    { url: "/P1/1 (6).jpg", name: "Image 6" },
    { url: "/P1/1 (7).jpg", name: "Image 7" },
    { url: "/P1/1 (8).jpg", name: "Image 8" },
    { url: "/P1/1 (9).jpg", name: "Image 9" },
    { url: "/P1/1 (10).jpg", name: "Image 10" },
    { url: "/P1/1 (11).jpg", name: "Image 11" },
    { url: "/P1/1 (12).jpg", name: "Image 12" },
    { url: "/P1/1 (13).jpg", name: "Image 13" },
    { url: "/P1/1 (14).jpg", name: "Image 14" },
    { url: "/P1/1 (15).jpg", name: "Image 15" },
    { url: "/P1/1 (16).jpg", name: "Image 16" },
    { url: "/P1/1 (17).jpg", name: "Image 17" },
    { url: "/P1/1 (21).jpg", name: "Image 21" },
    { url: "/P1/1 (22).jpg", name: "Image 22" },
    // Add remaining images...
  ];

  // Handle image click to open modal with image and name
  const handleImageClick = (img, name) => {
    setSelectedImage(img); // Open modal with selected image
    setSelectedImageName(name); // Set selected image name
  };

  // Close the modal
  const handleCloseModal = () => {
    setSelectedImage(null); // Close the modal
    setSelectedImageName(''); // Reset the name
  };

  // Navigate back to the default page
  const handleClosePage = () => {
    navigate("/");
  };

  return (
    <div className="relative w-full min-h-screen p-10">
      {/* Close button in the top-right corner */}
      <button
        onClick={handleClosePage}
        className="absolute top-2 right-2 bg-red-500 text-white px-2 rounded hover:bg-red-600 transition-colors duration-300"
      >
        &times;
      </button>

      {/* Grid of images */}
      <div className="grid sm:grid-cols-3 gap-4 w-full">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden"
            whileHover={{ scale: 1.05 }} // Scale up slightly on hover
            whileTap={{ scale: 0.95 }} // Scale down on click
            transition={{ duration: 0.3 }} // Smooth animation transition
          >
            <h1 className="text-center pb-2">{img.name}</h1>
            <img
              src={img.url}
              alt={img.name}
              className="w-96 h-96 object-cover cursor-pointer rounded-lg"
              onClick={() => handleImageClick(img.url, img.name)} // Open modal on click
            />
            
          </motion.div>
        ))}
      </div>

      {/* Modal for showing selected image and name */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <motion.div
            className="relative bg-black/60  p-4 rounded-lg max-w-3xl w-full"
            initial={{ opacity: 0, scale: 0.9 }} // Initial state
            animate={{ opacity: 1, scale: 1 }} // Animate to full view
            transition={{ duration: 0.3 }} // Transition timing
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 rounded hover:bg-red-600 transition-colors duration-300"
            >
              &times;
            </button>
            <div className="flex flex-col justify-center items-center ">
              <img
                src={selectedImage}
                alt="Selected"
                className="md:w-full w-96 h-[400px] rounded-lg object-contain "
              />
              {/* Display selected image name */}

            </div>
            <div className="flex justify-end mt-4">
              <a
                href={selectedImage}
                download
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Download
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default GridPage;
