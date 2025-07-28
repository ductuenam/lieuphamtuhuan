import React, { useState, useEffect, useCallback } from 'react';

const totalImages = 6;
const carouselItems = Array.from({ length: totalImages }, (_, i) => ({
    src: `/carousel/photo${i + 1}.png`,
    alt: `Ảnh độc giả ${i + 1}`,
}));

const CommunitySection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const showNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, []);

    const showPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
    };

    useEffect(() => {
        const autoPlay = setInterval(showNext, 5000);
        return () => clearInterval(autoPlay);
    }, [showNext]);

    return (
        <section id="community" className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="section-title text-3xl font-bold mb-4">Niềm Vui Lan Tỏa</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
                    Dự án gieo duyên sách "Liễu Phàm Tứ Huấn" đã và đang trao gửi những món quà tri thức ý nghĩa đến các bạn đọc trên khắp cả nước.
                </p>
                <div className="relative max-w-2xl mx-auto bg-white p-4 rounded-xl shadow-lg">
                    <div className="relative h-[450px] w-full overflow-hidden">
                        {carouselItems.map((item, index) => (
                            <img
                                key={index}
                                src={item.src}
                                alt={item.alt}
                                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                                    index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Nút điều hướng */}
                    <button
                        onClick={showPrev}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100 transition z-20"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={showNext}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100 transition z-20"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
