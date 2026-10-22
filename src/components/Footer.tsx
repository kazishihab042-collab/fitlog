import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto mt-8 w-[92%] bg-black text-white">
      <div className="flex min-h-[80px] flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row sm:px-10">
        <Link href="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 text-lime-400"
            aria-hidden="true"
          >
            {" "}
            <path d="M20.5 8.5V6a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v2h-2V6a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4H7.5V6a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v2h-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-4h5v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h2v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2.5a2 2 0 0 0 0-3v-2a2 2 0 0 0 0-3Z" />{" "}
          </svg>

          <span className="text-xs font-black tracking-wider">FITLOG</span>
        </Link>

        <p className="text-center text-[10px] text-gray-500 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
