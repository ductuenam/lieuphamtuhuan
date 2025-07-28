
import React from 'react';

const HeroSection = () => {
    return (
        <section id="home" className="hero-section py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/3 flex justify-center">
                        <img
                        src="/images/cover.png"
                        alt="Bìa sách Liễu Phàm Tứ Huấn"
                        className="rounded-lg shadow-2xl w-64 md:w-80 transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="md:w-2/3 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                            Liễu Phàm Tứ Huấn
                        </h1>
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">Cuốn Sách Quý Giúp Bạn Tự Tay Kiến Tạo Vận Mệnh</h2>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
                            Khám phá đạo lý "Mệnh do ta tạo, phước tự mình cầu" qua những lời dạy chân thực đã được kiểm chứng qua 400 năm. Nhận miễn phí ấn bản sách giấy và đọc trọn bộ online.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a href="#register" className="btn-primary bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-800">
                                ĐĂNG KÝ NHẬN SÁCH GIẤY
                            </a>
                            <a href="https://heyzine.com/flip-book/a1e1bda04b.html#page/2" target="_blank" rel="noopener noreferrer" className="bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-300 transition-colors">
                                Đọc Ngay Bản Online
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;