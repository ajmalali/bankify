import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "John", lastName: "Doe" };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image
            src="/icons/logo.svg"
            alt="Menu Logo"
            width={30}
            height={30}
            className="cursor-pointer"
          />
          <MobileNav user={loggedIn} />
        </div>
        {children}
      </div>
    </main>
  );
}
