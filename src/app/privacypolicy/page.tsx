// src/pages/PrivacyPolicy.tsx
import PageWrapper from "../components/PageWrapper";
import PageSection from "../components/PageSection";

export default function PrivacyPolicy() {
  return (
    <PageWrapper>
      <PageSection
        title="Privacy Policy"
        description="Learn how we protect your personal information and ensure your privacy."
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
            <p>
              We collect personal information you provide directly, such as your name, email, and any other details
              when you contact us or sign up for our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
            <p>
              We use your information to provide and improve our services, communicate with you, and ensure security and
              compliance with our policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Sharing of Information</h2>
            <p>
              We do not sell or rent your personal data. We may share it with third parties only when necessary for
              service provision, legal compliance, or protection of rights.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
            <p>
              We implement strong security measures to protect your data, including encryption, firewalls, and secure
              servers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information. You may also opt out of
              marketing communications at any time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Changes will be posted on this page with a revised effective
              date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please{" "}
              <a href="/contact" className="text-blue-600 underline hover:text-blue-800">
                contact us
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
