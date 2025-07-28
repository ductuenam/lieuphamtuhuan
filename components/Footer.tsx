
import React from 'react';

const YouTubeIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
);

const FacebookIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
);

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-2xl font-bold mb-4">Thay Lời Kết</h3>
                <p className="max-w-3xl mx-auto text-gray-300 mb-8">
                    Mong rằng những lời dạy trong "Liễu Phàm Tứ Huấn" sẽ là ngọn đuốc soi đường, giúp bạn tìm thấy sự an lạc và tự tin kiến tạo một cuộc đời ý nghĩa.
                </p>
                <div className="flex justify-center space-x-6">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Kênh Youtube Ấn Tạo Kinh Văn">
                        <YouTubeIcon />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Fanpage Ấn Tạo Kinh Văn">
                        <FacebookIcon />
                    </a>
                </div>
                <p className="text-gray-500 text-sm mt-8">© 2025 - Dự án gieo duyên sách "Liễu Phàm Tứ Huấn".</p>
            </div>
        </footer>
    );
};

export default Footer;
