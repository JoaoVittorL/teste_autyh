import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import SideNav from "@/components/responsive/side-nav";
import Header from "@/components/responsive/header";
import HeaderMobile from "@/components/responsive/header-mobile";
import PageWrapper from "@/components/responsive/page-wrapper";
import MarginWidthWrapper from "@/components/responsive/margin-width-wrapper";
import { ThemeProvider } from "@/providers/theme-provider";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(nextAuthOptions);
  if (!session) {
    redirect("/sign-in");
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex dark:bg-blue-dark-900">
        <SideNav />
        <main className="flex-1">
          <MarginWidthWrapper>
            <Header />
            <HeaderMobile />
            <PageWrapper>{children}</PageWrapper>
          </MarginWidthWrapper>
        </main>
      </div>
    </ThemeProvider>
  );
}
