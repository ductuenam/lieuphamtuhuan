
import React from 'react';

const ReaderSection = () => {
    return (
        <section id="read-online" className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="section-title text-3xl font-bold mb-4">Đọc và Cảm Nhận Trọn Vẹn</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
                    Không cần chờ đợi. Mời bạn lật giở từng trang của ấn bản "Liễu Phàm Tứ Huấn" qua phiên bản đọc online để cảm nhận sâu sắc những lời dạy vượt thời gian.
                </p>
                <div className="max-w-4xl mx-auto shadow-2xl rounded-lg overflow-hidden">
                    <iframe
                        allowFullScreen
                        allow="clipboard-write"
                        scrolling="no"
                        className="fp-iframe"
                        style={{ border: '1px solid lightgray', width: '100%', height: '500px' }}
                        src="https://heyzine.com/flip-book/a1e1bda04b.html"
                        title="Liễu Phàm Tứ Huấn Online Reader"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ReaderSection;
