export default function Fleet() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1581092919537-9b7e6cfa9f0d"
          alt="Fleet"
          className="rounded-lg shadow-lg"
        />

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Our Fleet
          </h2>

          <p className="text-gray-600 mb-6">
            We operate a wide range of specialized offshore vessels designed to support
            oil and gas operations efficiently and safely.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            View Fleet
          </button>
        </div>
      </div>
    </section>
  );
}