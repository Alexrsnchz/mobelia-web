import MainLayout from "@/components/layouts/MainLayout.jsx";

export default function CookiesPolicy() {
  return (
    <MainLayout>
      <div className="py-2 md:py-6 lg:py-12 border-t-2 border-gray-200">
        <div className="px-4 py-8 mx-auto max-w-5xl text-gray-800">
          <h1 className="mb-4 text-3xl font-bold">Cookies Policy</h1>
          <p className="mb-6 text-sm text-gray-500">
            Last updated: 16 April 2025
          </p>

          <section className="mb-8">
            <p>
              This Cookie Policy explains how{" "}
              <span className="font-semibold">Möbelia</span> uses cookies and
              similar technologies on our website{" "}
              <a href="#" className="text-blue-600 underline">
                www.mobelia.com
              </a>
              . By continuing to browse our site, you agree to our use of
              cookies as described below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-xl font-semibold">1. What are cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when
              you visit a website. They allow the site to remember your
              preferences, enhance your user experience, and collect usage data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-xl font-semibold">
              2. Types of cookies we use
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <span className="font-semibold">
                  Strictly necessary cookies
                </span>
                : Essential for the website to function (e.g. shopping cart,
                user login).
              </li>
              <li>
                <span className="font-semibold">Performance cookies</span>: Help
                us analyze how visitors use our site (e.g. Google Analytics).
              </li>
              <li>
                <span className="font-semibold">Functionality cookies</span>:
                Remember your preferences (e.g. language, location).
              </li>
              <li>
                <span className="font-semibold">
                  Marketing/Advertising cookies
                </span>
                : Track your activity across websites to show relevant ads (only
                if accepted).
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-xl font-semibold">
              3. Third-party cookies
            </h2>
            <p>
              We use services provided by trusted third parties which may place
              cookies on your device, including:
            </p>
            <ul className="mt-2 list-disc list-inside">
              <li>Google Analytics – website usage tracking</li>
              <li>Meta/Facebook Pixel – for targeted advertising</li>
              <li>Stripe – for secure payments</li>
            </ul>
            <p className="mt-2">
              These cookies are governed by the privacy policies of their
              respective providers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-xl font-semibold">
              4. How to manage or disable cookies
            </h2>
            <p>
              Upon your first visit, you will be asked to accept or reject
              certain types of cookies. You can also change or withdraw your
              consent at any time via the cookie settings link in the footer.
            </p>
            <p className="mt-2">
              You may also disable cookies through your browser settings.
              However, doing so may affect the functionality of some parts of
              the website.
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-gray-600">
              <li>
                Chrome:{" "}
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  className="text-blue-600 underline"
                >
                  Manage cookies
                </a>
              </li>
              <li>
                Firefox:{" "}
                <a
                  href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                  className="text-blue-600 underline"
                >
                  Enable/Disable cookies
                </a>
              </li>
              <li>
                Safari:{" "}
                <a
                  href="https://support.apple.com/en-us/HT201265"
                  className="text-blue-600 underline"
                >
                  Manage website data
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-xl font-semibold">
              5. Legal basis and compliance
            </h2>
            <p>
              Our use of cookies complies with Spain’s Law 34/2002 on
              Information Society Services and Electronic Commerce (LSSI-CE) and
              the General Data Protection Regulation (GDPR). You will not be
              tracked without your explicit consent unless the cookies are
              strictly necessary for site functionality.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">6. Contact us</h2>
            <p>
              If you have any questions about this Cookie Policy or how we use
              cookies, you can contact us at:
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
