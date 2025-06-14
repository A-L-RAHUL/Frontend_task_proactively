import React, { useRef, useEffect } from 'react';
import '../styles/components/carousel.scss';

const imagesCol1 = [
  '/images/sample1.jpg',
  '/images/sample2.jpg',
  '/images/sample3.jpg',
  '/images/sample4.jpg',
  '/images/sample5.jpg',
];
const imagesCol2 = [
  '/images/sample6.jpg',
  '/images/sample7.jpg',
  '/images/sample8.jpg',
  '/images/sample9.jpg',
  '/images/sample10.jpg',
];

const imagesMobile = [
  ...imagesCol1,
  ...imagesCol2,
];

const ImageCarousel = () => {
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const mobileRef = useRef(null);

  // Desktop: vertical scroll
  useEffect(() => {
    let col1 = col1Ref.current;
    let col2 = col2Ref.current;
    let col1Scroll = 0;
    let col2Scroll = 0;
    let frame;
    function animate() {
      if (window.innerWidth > 768) {
        if (col1 && col2) {
          const col1Height = col1.scrollHeight / 2;
          const col2Height = col2.scrollHeight / 2;
          col1Scroll += 0.5;
          col2Scroll -= 0.5;
          if (col1Scroll >= col1Height) col1Scroll = 0;
          if (Math.abs(col2Scroll) >= col2Height) col2Scroll = 0;
          col1.style.transform = `translateY(-${col1Scroll}px)`;
          col2.style.transform = `translateY(-${col2Scroll}px)`;
        }
      }
      frame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  // Mobile: horizontal scroll
  useEffect(() => {
    let mobile = mobileRef.current;
    let scroll = 0;
    let frame;
    function animate() {
      if (window.innerWidth <= 768 && mobile) {
        const width = mobile.scrollWidth / 2;
        scroll += 0.5;
        if (scroll >= width) scroll = 0;
        mobile.style.transform = `translateX(-${scroll}px)`;
      }
      frame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="carousel">
      {/* Desktop: two columns */}
      <div className="carousel__desktop">
        <div className="carousel__col" ref={col1Ref}>
          {[...imagesCol1, ...imagesCol1].map((img, i) => (
            <div className="carousel__img-wrapper" key={i}>
              <img src={img} alt="carousel" />
            </div>
          ))}
        </div>
        <div className="carousel__col" ref={col2Ref}>
          {[...imagesCol2, ...imagesCol2].map((img, i) => (
            <div className="carousel__img-wrapper" key={i}>
              <img src={img} alt="carousel" />
            </div>
          ))}
        </div>
      </div>
      {/* Mobile: horizontal row */}
      <div className="carousel__mobile" ref={mobileRef}>
        {[...imagesMobile, ...imagesMobile].map((img, i) => (
          <div className="carousel__img-wrapper" key={i}>
            <img src={img} alt="carousel" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel; 