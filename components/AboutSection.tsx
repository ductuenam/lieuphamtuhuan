
import React from 'react';

const FourLessons = () => (
    <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-3">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V4m0 16v-2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path></svg>
                <h3 className="text-xl font-bold">Học Thuyết Lập Mệnh</h3>
            </div>
            <p className="text-gray-600">Luận giải về việc con người có thể làm chủ vận mệnh, không bị số mệnh trói buộc.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-3">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                <h3 className="text-xl font-bold">Phương Pháp Sửa Lỗi</h3>
            </div>
            <p className="text-gray-600">Các cách để nhận ra và sửa đổi sai lầm từ gốc rễ, giúp hoàn thiện bản thân.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-3">
                 <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                <h3 className="text-xl font-bold">Phương Pháp Tích Thiện</h3>
            </div>
            <p className="text-gray-600">Chỉ dẫn các cách làm việc thiện lớn nhỏ để tích lũy phước đức, cải biến vận mệnh.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-3">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                <h3 className="text-xl font-bold">Hiệu Quả Đức Khiêm</h3>
            </div>
            <p className="text-gray-600">Lợi ích của sự khiêm tốn trong việc đối nhân xử thế, học tập và vun bồi đạo đức.</p>
        </div>
    </div>
);

const BookInfo = () => (
    <div className="w-full lg:w-1/3 bg-green-50 p-6 rounded-lg text-left border-l-4 border-green-700">
        <h3 className="text-2xl font-bold mb-4">Thông Tin Tác Phẩm</h3>
        <ul className="space-y-3 text-gray-700">
            <li><strong>Tác giả:</strong> Viên Liễu Phàm (Viên Hoàng)</li>
            <li><strong>Năm sáng tác:</strong> 1602 (đời nhà Minh)</li>
            <li><strong>Thể loại:</strong> Gia huấn (lời dạy trong gia đình)</li>
            <li><strong>Đơn vị xuất bản:</strong> Nhà Xuất Bản Hồng Đức</li>
        </ul>
    </div>
);

const AboutSection = () => {
    return (
        <section id="about" className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="section-title text-3xl font-bold mb-12">"Liễu Phàm Tứ Huấn" - Bốn Lời Dạy Vượt Thời Gian</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
                    Viên Liễu Phàm, từ một người tin rằng số phận đã an bài, sau cuộc gặp gỡ định mệnh với Thiền sư Vân Cốc, ông đã tự mình thực hành các lời dạy và thay đổi hoàn toàn vận mệnh, chứng minh rằng phước báu và tương lai nằm trong tay mỗi chúng ta.
                </p>
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <FourLessons />
                    <BookInfo />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
