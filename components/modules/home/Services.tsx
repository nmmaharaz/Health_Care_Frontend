const services = ["Car Insurance", "Life Insurance", "Business Insurance"];

export default function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">
          We&apos;re Covering All Insurance Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="p-6 bg-white shadow rounded-xl"
            >
              <h3 className="font-semibold text-lg">{service}</h3>
              <p className="mt-2 text-sm text-gray-500">
                Trusted and flexible coverage.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
