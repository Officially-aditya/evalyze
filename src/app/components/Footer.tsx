import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Evalyze</h2>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
            Your trusted platform for intelligent product comparisons. We help
            you make informed purchasing decisions by providing comprehensive
            product analysis and side by side comparisons.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-neutral-400">
            <li><Link href="/categories" className="hover:text-white">Categories</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/aboutus" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
          <ul className="space-y-2 text-neutral-400">
            <li><Link href="/helpcenter" className="hover:text-white">Help Center</Link></li>
            <li><Link href="/privacypolicy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/termsofservice" className="hover:text-white">Terms of Service</Link></li>
            <li><Link href="/login" className="hover:text-white">Login</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 pt-6 border-t border-neutral-800 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Evalyze. All rights reserved.
      </div>
    </footer>
  );
}
