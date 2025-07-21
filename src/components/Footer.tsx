export default function Footer() {
  return (
    <footer className="w-full max-w-4xl text-center mt-8 text-sm">
      <div className="mb-2">
        <a 
          href="https://discord.gg/6xWrtWQMMT" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Join our Discord community
        </a>
      </div>
      &copy; {new Date().getFullYear()} Sandstore Project by Anish Mulay
    </footer>
  );
}