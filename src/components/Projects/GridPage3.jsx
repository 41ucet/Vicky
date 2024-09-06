import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const GridPage3 = () => {
  const navigate = useNavigate();

  // State for modal, storing both selected image and its name
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageName, setSelectedImageName] = useState("");

  // Array of images with names
  const images = [
    {
      id: 1,
      name: "Vicky",
      decs: "Training Institute Web Design in Bangalore, Website Design for Training Institute, Low Cost Website Design India for Coaching Institute, Affordable Website Design Company, Training Institute Website",
      href: "https://www.figma.com/proto/OZydEoE3dpMYJZnyHlrhAT/Untitled?node-id=131-25&node-type=FRAME&t=Ydilil8mJVsnA2wW-1&scaling=min-zoom&content-scaling=fixed&page-id=67%3A2&starting-point-node-id=131%3A25",
    },
    {
      id: 2,
      name: "Vicky",
      decs: "Training Institute Web Design in Bangalore, Website Design for Training Institute, Low Cost Website Design India for Coaching Institute, Affordable Website Design Company, Training Institute Website",
      href: "https://www.figma.com/proto/OZydEoE3dpMYJZnyHlrhAT/Untitled?node-id=2-2&node-type=FRAME&t=6cw40GSRf8PvqsN5-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2",
    },
    {
      id: 3,
      name: "Vicky",
      decs: "Training Institute Web Design in Bangalore, Website Design for Training Institute, Low Cost Website Design India for Coaching Institute, Affordable Website Design Company, Training Institute Website",
      href: "https://www.figma.com/proto/W8VrxeGPEGMR1RqfbrPljy/horse?node-id=315-450&t=xGhxMqUSR74kR1WP-1",
    },
    {
      id: 4,
      name: "Vicky",
      decs: "Training Institute Web Design in Bangalore, Website Design for Training Institute, Low Cost Website Design India for Coaching Institute, Affordable Website Design Company, Training Institute Website",
      href: "https://www.figma.com/proto/W8VrxeGPEGMR1RqfbrPljy/horse?node-id=86-62&node-type=FRAME&t=FZWtjAK4CXO0hQAF-1&scaling=min-zoom&content-scaling=fixed&page-id=73%3A2",
    },
    {
      id: 5,
      name: "Vicky",
      decs: "Training Institute Web Design in Bangalore, Website Design for Training Institute, Low Cost Website Design India for Coaching Institute, Affordable Website Design Company, Training Institute Website",
      href: "https://www.figma.com/proto/W8VrxeGPEGMR1RqfbrPljy/horse?node-id=29-3&node-type=FRAME&t=K7xCuKHPrDoOYjmV-1&scaling=min-zoom&content-scaling=fixed&page-id=29%3A2&starting-point-node-id=29%3A3&show-proto-sidebar=1",
    },

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
    setSelectedImageName(""); // Reset the name
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
            className="overflow-hidden "
            whileHover={{ scale: 1.05 }} // Scale up slightly on hover
            whileTap={{ scale: 0.95 }} // Scale down on click
            transition={{ duration: 0.3 }} // Smooth animation transition
          >
            <div className="bg-red-500/20 border h-60 rounded-lg p-2 flex justify-center items-center flex-col">
              <h1>{img.name}</h1>
              <p>{img.decs}</p>
              <a href={img.href} target="_blank" className="bg-slate-500 px-3 rounded-md py-1">
                Click
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GridPage3;
