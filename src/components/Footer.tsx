import Link from 'next/link';
import StaggerReelText from './ui/StaggerReelText';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 mt-56 mb-2 max-w-[95vw] mx-auto font-bold text-[6vw] tracking-tight leading-[5vw]">
      <Link href="https://www.linkedin.com/in/keanu-aloua/">
        <StaggerReelText
          text="LINKEDIN"
          initialTextColor="white"
          className="text-right"
        />
      </Link>
      <Link href="https://github.com/keanu-a">
        <StaggerReelText
          text="GITHUB"
          initialTextColor="white"
          className="text-right"
        />
      </Link>
      <Link href="https://www.instagram.com/al0uaaa/">
        <StaggerReelText
          text="INSTAGRAM"
          initialTextColor="white"
          className="text-right"
        />
      </Link>

      <p className="flex flex-col">
        <span>EMAIL ME</span>
        <span className="text-right">KEANUCALOUA@GMAIL.COM</span>
      </p>
    </footer>
  );
}
