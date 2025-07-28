
import React from 'react';

const faqData = [
    {
        question: "Sách và phí vận chuyển có thật sự miễn phí 100% không?",
        answer: "Vâng, sách được ấn tống để cúng dường, không bán. Bạn được tặng sách hoàn toàn miễn phí và chỉ cần hoan hỷ thanh toán phí vận chuyển cho đơn vị giao hàng."
    },
    {
        question: "Phí vận chuyển là bao nhiêu?",
        answer: "Phí vận chuyển sẽ theo biểu phí chung của đơn vị giao hàng (ví dụ: GHTK, Viettel Post...) tùy thuộc vào địa chỉ của bạn. Bạn sẽ thanh toán trực tiếp cho nhân viên giao hàng khi nhận được sách."
    },
    {
        question: "Khi nào tôi sẽ nhận được sách?",
        answer: "Chúng tôi sẽ tổng hợp và gửi sách theo từng đợt. Thời gian dự kiến bạn nhận được sách là từ 5-10 ngày làm việc sau khi đăng ký thành công."
    },
    {
        question: "Tôi có thể đăng ký cho người khác được không?",
        answer: "Hoàn toàn có thể. Khi đăng ký, bạn vui lòng điền chính xác thông tin và số điện thoại của người nhận để đảm bảo sách được trao đến đúng người, đúng chỗ."
    }
];

const FaqItem = ({ question, answer }: { question: string; answer: string; }) => (
    <details className="bg-gray-50 p-6 rounded-lg transition-all duration-300">
        <summary className="font-semibold text-lg text-gray-800">{question}</summary>
        <p className="mt-4 text-gray-600">{answer}</p>
    </details>
);

const FaqSection = () => {
    return (
        <section id="faq" className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="section-title text-3xl font-bold text-center mb-12">Giải Đáp Thắc Mắc</h2>
                <div className="max-w-3xl mx-auto space-y-4 faq">
                    {faqData.map((item, index) => (
                        <FaqItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
