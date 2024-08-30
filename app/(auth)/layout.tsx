export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>Adding this to test the auth layout {children}</main>;
}
