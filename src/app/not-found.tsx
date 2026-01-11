import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#173f3d]">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link 
          href="/" 
          className="bg-[#173f3d] hover:bg-[#132e2c] text-white py-3 px-6 rounded-lg font-medium transition-colors inline-block"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;