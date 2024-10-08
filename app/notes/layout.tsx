import NavBar from "./NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <main className=" p-4 max-w-7xl m-auto">{children}</main>
    </>
  );
}
