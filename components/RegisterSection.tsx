
import React from 'react';

const RegisterSection = () => {
    return (
        <section id="register" className="py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="section-title text-3xl font-bold mb-4">Đăng Ký Nhận Ấn Bản Sách Giấy Gieo Duyên</h2>
                <div className="max-w-3xl mx-auto bg-green-50 border-l-4 border-green-700 p-8 rounded-lg text-left my-12">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Lưu ý quan trọng:</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                        <li>Sách "Liễu Phàm Tứ Huấn" là món quà tri thức được gửi tặng <strong>hoàn toàn miễn phí</strong>.</li>
                        <li>Để dự án được bền vững và lan tỏa, bạn đọc hoan hỷ <strong>tự thanh toán phí vận chuyển</strong> cho đơn vị giao hàng khi nhận sách.</li>
                        <li>Số lượng sách có hạn. Xin hoan hỷ đăng ký khi bạn thực sự mong muốn đọc và thực hành.</li>
                    </ul>
                </div>
                <a href="https://ductuenam.sg.larksuite.com/share/base/form/shrlgfF59Ui0Ik881yxwrW47BPf" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block bg-green-700 text-white font-bold py-4 px-12 rounded-full text-xl hover:bg-green-800">
                    ĐẾN FORM ĐĂNG KÝ NHẬN SÁCH
                </a>
            </div>
        </section>
    );
};

export default RegisterSection;
