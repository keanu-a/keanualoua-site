import Nav from '@/components/Nav';

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
}
