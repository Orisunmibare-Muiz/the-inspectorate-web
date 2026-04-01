import React, { useState } from 'react'
import { FaTimes } from "react-icons/fa";
import { categories, GalleryImages } from '../Data/GalleryImages';
import image from '../../public/teacherStudent/CBT.jpg'
import { Link } from 'react-router-dom';

export default function GalleryComponent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? GalleryImages
      : GalleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <div className="bg-gray-50 mt-16">

        {/* HERO */}

        <section className="bg-[#090024] text-white py-16 text-center" style={{ backgroundImage: `url(${image})` }}>
          <div className="max-w-full lg:max-w-370 mx-auto px-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              Gallery
            </h1>
            <p className="text-gray-200">
              A glimpse into our inspections, training sessions and school engagements
            </p>
          </div>
        </section>

        {/* FILTERS */}

        <section className="max-w-full lg:max-w-370 mx-auto px-6 py-8">

          <div className="flex flex-wrap gap-3 justify-center">

            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm border transition
              ${activeCategory === cat
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {cat}
              </button>
            ))}

          </div>

        </section>

        {/* MASONRY GRID */}

        <section className="max-w-full lg:max-w-370 mx-auto px-6 pb-16">

          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">

            {filteredImages.map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={img.src}
                  alt=""
                  className="w-full rounded-xl transform group-hover:scale-110 transition duration-300"
                />

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>

              </div>
            ))}

          </div>

        </section>
        {/* LIGHTBOX / SLIDER */}

        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

            <button
              className="absolute top-5 right-5 text-white text-2xl"
              onClick={() => setSelectedIndex(null)}
            >
              <FaTimes />
            </button>

            <img
              src={filteredImages[selectedIndex].src}
              className="max-h-[80vh] rounded-lg"
            />

            {/* NEXT / PREV */}
            <div className="absolute bottom-10 flex gap-4">

              <button
                onClick={() =>
                  setSelectedIndex(
                    (prev) =>
                      (prev - 1 + filteredImages.length) %
                      filteredImages.length
                  )
                }
                className="bg-white px-4 py-2 rounded"
              >
                Prev
              </button>
              <button
                onClick={() =>
                  setSelectedIndex(
                    (prev) => (prev + 1) % filteredImages.length
                  )
                }
                className="bg-white px-4 py-2 rounded"
              >
                Next
              </button>

            </div>

          </div>
        )}


        {/* CTA */}

        <section className="bg-[#090024] text-white py-12 text-center">

          <div className="max-w-full lg:max-w-370 mx-auto px-6">

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Improve Your School?
            </h2>

            <p className="text-gray-200 mb-6">
              Let us help you achieve quality assurance, compliance and growth.
            </p>

            <Link to={"/contact"}>
              <button className="bg-red-600 px-6 py-3 rounded-md hover:bg-red-700 transition">
                Contact Us
              </button>
            </Link>

          </div>

        </section>

      </div>

    </>
  )
}
