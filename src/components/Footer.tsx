// Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 backdrop-blur-md border-t border-white/30 py-6 text-center text-sm text-gray-700">
      {/* Perubahan: Ganti bg-white menjadi bg-gray-100 */}
      <p>
        Building software with passion, precision, and purpose. <br />© 2025{" "}
        <span className="font-semibold">Rahman Umardi</span> · Built with{" "}
        <span className="font-semibold">Next.js</span>
      </p>
    </footer>
  );
}