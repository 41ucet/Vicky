import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Certificatin = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = "/resume.jpg";
    link.download = "resume.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="Certification" className="py-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="m-4 text-center text-3xl font-bold"
      >
        Resume
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale1: 1.05 }}
      >
      
       <div  className="flex justify-center items-center mt-5">
       <motion.button
          whileHover={{ scale: 1.1 }}
          
          alt="Thumbnail"
          className="cursor-pointer bg-white text-black px-4 py-2   rounded-lg"
          onClick={openPopup}
        >Click</motion.button>
       </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative max-w-2xl w-full h-[90%] overflow-auto rounded-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              >
                <button
                  className="absolute top-4 right-8 text-black text-2xl"
                  onClick={closePopup}
                >
                  &times;
                </button>

                <button
                  className="absolute top-4 left-8 bg-blue-900 text-white px-4 py-2 rounded-lg"
                  onClick={downloadImage}
                >
                  Download
                </button>

                <div className="flex justify-center items-center">
                  <img
                    src="/resume.jpg"
                    alt="Popup Image"
                    className="sm:w-full w-96 h-auto object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Certificatin;
