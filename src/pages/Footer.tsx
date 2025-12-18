const Footer = () => {
  return (
    <footer className="bg-zinc-950 py-16 text-gray-400">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">
              Addis Fitness Gym
            </h3>
            <p>Train with purpose. Build strength. Join the community.</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-2">
              <li>📍 Addis Ababa, Ethiopia</li>
              <li>📞 +251 9XX XXX XXX</li>
              <li>✉️ info@addisfitness.com</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Follow Us</h4>
            <ul className="space-y-2">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Telegram</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Addis Fitness Gym. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
