export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-300">
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-white space-y-6">
          <div className="h-12 bg-white bg-opacity-20 w-3/4"></div>
          <div className="h-8 bg-white bg-opacity-20 w-2/3"></div>
          <div className="h-6 bg-white bg-opacity-20 w-1/2"></div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Enquire Now</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition font-semibold"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
