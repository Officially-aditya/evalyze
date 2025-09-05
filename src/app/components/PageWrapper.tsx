import Footer from "./Fot1";
import Nav1 from "./Nav1";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav1 />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
