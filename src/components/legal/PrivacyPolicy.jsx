import MainLayout from "@/components/layouts/MainLayout.jsx";

export default function PrivacyPolicy() {
  return (
    <MainLayout>
      <div className="py-2 md:py-6 lg:py-12 border-t-2 border-gray-200">
        <div className="px-4 py-8 mx-auto max-w-5xl text-gray-800">
          <h1 className="mb-4 text-3xl font-bold">Privacy Policy</h1>
          <p className="mb-6 text-sm text-gray-500">
            Last updated: 16 April 2025
          </p>

          <section className="mb-8">
            <p>
              At <span className="font-semibold">Möbelia</span>, we value your
              privacy and are committed to protecting your personal data. This
              Privacy Policy explains how we collect, use, and store your
              personal information when you visit our website{" "}
              <a href="#" className="text-blue-600 underline">
                www.mobelia.com
              </a>
              , create an account, or place an order.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-xl font-semibold">
              1. Who is responsible for your data?
            </h2>
            <p>
              The data controller is Möbelia S.L., registered in Spain with VAT
              number [CIF], and registered office at Calle Ficticia 123, 28000
              Madrid, Spain. You can contact us at{" "}
              <a href="#" className="text-blue-600 underline">
                support@mobelia.com
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-xl font-semibold">
              2. What data do we collect?
            </h2>
            <ul className="space-y-1 list-disc list-inside">
              <li>Name and surname</li>
              <li>Email address and phone number</li>
              <li>Shipping and billing address</li>
              <li>Order history and payment method (encrypted)</li>
              <li>Account login credentials (hashed)</li>
              <li>IP address and browsing behavior (for analytics)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-xl font-semibold">
              3. How do we use your data?
            </h2>
            <ul className="space-y-1 list-disc list-inside">
              <li>To process and deliver your orders</li>
              <li>To create and manage your user account</li>
              <li>
                To send transactional communications (order updates, invoices,
                etc.)
              </li>
              <li>To offer customer support</li>
              <li>
                To improve our website and user experience (analytics and
                cookies)
              </li>
              <li>
                To send you marketing communications (only with your consent)
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-xl font-semibold">
              4. Legal basis for processing
            </h2>
            <p>We process your data under the following legal bases:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>
                <span className="font-semibold">Contractual necessity</span> –
                to fulfil the purchase contract.
              </li>
              <li>
                <span className="font-semibold">Legal obligation</span> – for
                accounting and tax compliance.
              </li>
              <li>
                <span className="font-semibold">Legitimate interest</span> – to
                improve our service and prevent fraud.
              </li>
              <li>
                <span className="font-semibold">Consent</span> – for optional
                communications or data use.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-xl font-semibold">
              5. Do we share your data?
            </h2>
            <p>
              We never sell your data. We only share personal information with
              trusted third parties, strictly for the purpose of:
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Payment processing (e.g., Stripe, PayPal)</li>
              <li>Logistics and delivery services</li>
              <li>Accounting and legal compliance</li>
              <li>
                Analytics and website optimization tools (e.g., Google
                Analytics)
              </li>
            </ul>
            <p className="mt-2">
              All providers comply with GDPR and only process data on our
              behalf, with appropriate safeguards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-xl font-semibold">6. Data retention</h2>
            <p>
              We retain your personal data only as long as necessary for the
              purposes listed above, including legal or tax obligations. After
              that, it is securely deleted or anonymised.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-xl font-semibold">
              7. Your rights under GDPR
            </h2>
            <p>You have the right to:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Access your personal data</li>
              <li>Request correction of incorrect data</li>
              <li>Request deletion ("right to be forgotten")</li>
              <li>Restrict or object to processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-2">
              To exercise these rights, contact us at{" "}
              <a href="#" className="text-blue-600 underline">
                support@mobelia.com
              </a>
              . You also have the right to lodge a complaint with the Spanish
              Data Protection Authority (AEPD).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-xl font-semibold">
              8. Cookies and tracking
            </h2>
            <p>
              We use cookies and similar technologies to improve your browsing
              experience, provide personalized content, and analyze site usage.
              For full details, visit our{" "}
              <a href="/cookies-policy" className="text-blue-600 underline">
                Cookie Policy
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-xl font-semibold">9. Third-party links</h2>
            <p>
              Our site may include links to external websites. We are not
              responsible for their privacy policies. We recommend reading their
              terms before sharing any personal data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-xl font-semibold">10. Policy changes</h2>
            <p>
              Möbelia may update this Privacy Policy to reflect legal or
              operational changes. The latest version will always be available
              on this page. Significant changes will be communicated via email
              when applicable.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">11. Contact us</h2>
            <p>
              If you have any questions about this Privacy Policy, feel free to
              reach out:
            </p>
            <ul className="mt-2 list-disc list-inside">
              <li>
                Email:{" "}
                <a href="#" className="text-blue-600 underline">
                  support@mobelia.com
                </a>
              </li>
              <li>Phone: +34 637 42 58 29</li>
              <li>Address: Av. Milanesa, 32, 04008, Almería, Spain</li>
            </ul>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
