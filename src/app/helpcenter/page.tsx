// src/pages/HelpCenter.tsx
import PageWrapper from "../components/PageWrapper";
import PageSection from "../components/PageSection";

export default function HelpCenter() {
  const faqs = [
    {
      question: "How can I contact support?",
      answer: "You can reach out to us via the Contact page. We typically respond within 24 hours.",
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 14-day refund policy. If you're not satisfied, just contact us for a refund.",
    },
    {
      question: "Can I change my subscription plan later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time from your account settings.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use industry-standard encryption and never share your data with third parties.",
    },
  ];

  return (
    <PageWrapper>
      <PageSection
        title="Help Center"
        description="Find answers to frequently asked questions and get support quickly."
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group border border-gray-200 rounded-lg p-4 transition-all duration-300 hover:shadow-sm"
            >
              <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
                <span>{faq.question}</span>
                <span className="ml-2 transition-transform group-open:rotate-180">&#9662;</span>
              </summary>
              <p className="mt-2 text-gray-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
