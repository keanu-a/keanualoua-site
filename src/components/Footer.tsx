export default function Footer() {
  return (
    <footer className="py-4 flex flex-col gap-4 max-w-[600px]">
      <p className="flex flex-col text-2xl font-bold md:text-4xl">
        <span>EMAIL ME:</span>
        <span className="text-right">KEANUCALOUA@GMAIL.COM</span>
      </p>

      <div className="flex items-center gap-4">
        <hr className="h-px w-full bg-white border-0" />
        <p className="text-lg font-bold">2025</p>
      </div>
    </footer>
  );
}
