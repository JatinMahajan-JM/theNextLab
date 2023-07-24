export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>Cookies & Middleware</h1>
      <section className="flex flex-col gap-4 mt-10">{children}</section>
    </>
  );
}
