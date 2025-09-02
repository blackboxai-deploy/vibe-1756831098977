export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
          Hello World
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Welcome to your new Next.js application! This is a simple starting point for your project.
        </p>
        <div className="pt-4">
          <div className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Ready to build something amazing
          </div>
        </div>
      </div>
    </main>
  );
}