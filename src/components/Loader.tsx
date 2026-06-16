export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">

      <div className="flex flex-col items-center gap-4">

        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-gray-600 font-medium animate-pulse">
          Loading...
        </p>

      </div>

    </div>
  );
}