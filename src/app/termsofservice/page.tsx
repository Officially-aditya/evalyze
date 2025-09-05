// src/pages/TermsOfService.tsx
import PageWrapper from "../components/PageWrapper";
import PageSection from "../components/PageSection";

export default function TermsOfService() {
  return (
    <PageWrapper>
      <PageSection
        title="Terms of Service"
        description="Please review our terms and conditions before using our platform."
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our platform, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, you may not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Use of the Service</h2>
            <p>
              You agree to use the platform only for lawful purposes and in a way that does not infringe on the rights of others. Unauthorized use or access to the platform is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Account Responsibilities</h2>
            <p>
              If you create an account, you are responsible for maintaining its security and all activities that occur under it. Notify us immediately if you suspect unauthorized use.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
            <p>
              All content and materials on the platform are protected by intellectual property laws. You may not copy, distribute, or use them without explicit permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the platform at any time, without notice, if you violate these terms or engage in harmful behavior.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Disclaimer of Warranties</h2>
            <p>
              The platform is provided "as is" and we make no warranties regarding its accuracy, reliability, or availability.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Limitation of Liability</h2>
            <p>
              We are not liable for any indirect, incidental, or consequential damages arising from your use of the platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Changes to Terms</h2>
            <p>
              We may modify these terms at any time. Continued use of the platform indicates your acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please{" "}
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
