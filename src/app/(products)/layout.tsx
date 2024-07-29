export default function ProductsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col bg-lightMode-surface dark:bg-darkMode-surface min-h-screen">
      <main>{children}</main>
    </div>
  );
}
