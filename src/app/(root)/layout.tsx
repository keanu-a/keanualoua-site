import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <div className="mt-[15vh]">{children}</div>
      <Footer />
    </>
  );
}
