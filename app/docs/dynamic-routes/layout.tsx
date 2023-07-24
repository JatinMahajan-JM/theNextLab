export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>Dynamic Routing</h1>
      <section className="flex flex-col gap-4">{children}</section>
    </>
  );
}
