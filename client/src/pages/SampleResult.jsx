import { useState } from "react";
import { FaExpand } from "react-icons/fa";
import Lightbox from "react-spring-lightbox";

import NavBar from "../components/NavBar/NavBar";
import Layout from "../layout/Layout";
import Footer from "../components/Footer";

import sampleOne from "../assets/images/sample_one.png";
import sampleTwo from "../assets/images/sample_two.png";
import sampleFour from "../assets/images/sample_four.png";
import sampleFive from "../assets/images/sample_five.png";
import sampleSix from "../assets/images/sample_six.png";
import sampleSeven from "../assets/images/sample_seven.png";
import sampleEight from "../assets/images/sample_eight.png";
import sampleNine from "../assets/images/sample_nine.png";

const SampleResult = () => {
  const images = [
    { src: sampleOne, loading: "lazy", alt: "Sample One" },
    { src: sampleTwo, loading: "lazy", alt: "Sample Two" },
    { src: sampleFour, loading: "lazy", alt: "Sample Four" },
    { src: sampleFive, loading: "lazy", alt: "Sample Five" },
    { src: sampleSix, loading: "lazy", alt: "Sample Six" },
    { src: sampleSeven, loading: "lazy", alt: "Sample Seven" },
    { src: sampleEight, loading: "lazy", alt: "Sample Eight" },
    { src: sampleNine, loading: "lazy", alt: "Sample Nine" },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const gotoPrevious = () =>
    lightboxIndex > 0 && setLightboxIndex(lightboxIndex - 1);

  const gotoNext = () =>
    lightboxIndex + 1 < images.length && setLightboxIndex(lightboxIndex + 1);

  return (
    <div>
      <NavBar />
      <Layout>
        <div
          className={`container mx-auto my-16 ${
            lightboxOpen ? "blur-3xl" : ""
          }`}
        >
          <h1 className="text-green-800 mb-20 text-6xl font-semibold underline text-center my-10">
            Sample Result of Shortest Part Finder
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-16">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex flex-col items-center shadow-xl text-center p-4 border rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="result-image max-w-full"
                />
                <div className="mt-2">
                  <FaExpand className="text-xl inline-block mr-2" />
                  <span className="text-gray-600">Click to enlarge</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {lightboxOpen && (
          <Lightbox
            isOpen={lightboxOpen}
            onPrev={gotoPrevious}
            onNext={gotoNext}
            images={images}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
          />
        )}
      </Layout>
      <Footer />
    </div>
  );
};

export default SampleResult;
