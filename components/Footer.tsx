import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="px-6 md:px-12 lg:px-20 pt-16 pb-8">
        {/* Main footer row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12">
          {/* Left: wordmark */}
          <div>
            <p className="font-serif text-3xl text-paper">Mirzavideo</p>
          </div>

          {/* Middle: location */}
          <div className="md:text-center">
            <p className="font-sans text-xs tracking-widest uppercase text-grey">
              Location
            </p>
            <p className="font-sans text-sm mt-2 text-paper">
              Birmingham, UK
            </p>
            <p className="font-sans text-sm text-grey">Available nationwide</p>
          </div>

          {/* Right: socials */}
          <div className="md:text-right">
            <p className="font-sans text-xs tracking-widest uppercase text-grey mb-2">
              Follow
            </p>
            <div className="flex flex-col gap-1 md:items-end">
              <Link
                href="https://instagram.com/mirzavideo"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link font-sans text-sm text-paper hover:text-grey transition-colors duration-200"
              >
                Instagram
              </Link>
              <Link
                href="https://tiktok.com/@mirzavideo"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link font-sans text-sm text-paper hover:text-grey transition-colors duration-200"
              >
                TikTok
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-grey pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-sans text-xs text-grey">
            © 2026 Mirzavideo. All rights reserved.
          </p>
          <p className="font-sans text-xs text-grey">
            Birmingham · Covering all of the UK
          </p>
        </div>
      </div>
    </footer>
  );
}
