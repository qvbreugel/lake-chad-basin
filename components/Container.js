export default function Container({ children }) {
  return (
    <main className="min-h-screen bg-gray-900 text-center pt-8 flex flex-col items-center">
      {children}
    </main>
  );
}
