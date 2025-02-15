import { useState } from "react";
import { motion } from "framer-motion";

export default function Sorry() {
  const [showApology, setShowApology] = useState(false);
  const catGifs = [
    "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
    "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
    "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzh5empjNjdtMnN0MnNnNmZlcWN1OWRzbHM0djByaDA2NWZlYTNzeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4uVyQiFGLicuI/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHlhb2g5MnZ1d244dWQ0N2U4MTBpYWR3dDhraDZjdTNraTU5ZW5vYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Nf5FCBnN2TCAE/giphy.gif",
  ];

  return (
    <div>
      {!showApology ? (
        <button
          onClick={() => setShowApology(true)}
        >
          Nút bấm
        </button>
      ) : (
        <>
          {catGifs.map((gif, index) => (
            <motion.img
              key={index}
              src={gif}
              alt="Cute Cat"
              className="absolute w-20 h-20 sm:w-32 sm:h-32"
              style={{ top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 80 + 10}%`, width: "100px", height: "100px" }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: index * 0.3 }}
            />
          ))}
          <motion.div
            className="absolute bg-white p-4 sm:p-6 rounded-lg shadow-2xl text-center w-64 sm:w-80 z-20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-xl sm:text-2xl font-bold text-red-600">Em xin lỗi chị Oanh ạ! 😿</h1>
            <p className="mt-2 text-gray-700 text-sm sm:text-base">
              Chị tha thứ cho em nhớ ｡°(°.◜ᯅ◝°)°｡ I miss you so much! 💕
            </p>
          </motion.div>
        </>
      )}
    </div>
  );
}
