const packages = [
  {
    id: 1,
    name: "Básico",
    price: 550,
    duration: "3 horas",
    description: "Perfecto para eventos pequeños e íntimos",
    features: [
      "Photo Booth Open Air",
      "Impresiones Ilimitadas",
      "Props Básicos",
      "Operador Profesional",
      "Galería Digital",
      "1 Diseño de Marco",
    ],
    notIncluded: ["360 Video", "Libro de Firmas", "Fondo Personalizado"],
    popular: false,
    color: "gray",
  },
  {
    id: 2,
    name: "Premium",
    price: 895,
    duration: "4 horas",
    description: "Nuestra opción más popular para bodas y eventos",
    features: [
      "360° Photo Booth o Mirror Booth",
      "Impresiones Ilimitadas",
      "Props Premium",
      "Operador Profesional",
      "Galería Digital + USB",
      "3 Diseños de Marco",
      "Libro de Firmas Digital",
      "Fondo Personalizado",
    ],
    notIncluded: [],
    popular: true,
    color: "rose",
  },
  {
    id: 3,
    name: "VIP",
    price: 1250,
    duration: "5 horas",
    description: "La experiencia completa para eventos de lujo",
    features: [
      "Combo: 360° + Open Air Booth",
      "Impresiones Ilimitadas Premium",
      "Props de Lujo",
      "2 Operadores Profesionales",
      "Galería Digital + USB + Nube",
      "Diseños Ilimitados",
      "Libro de Firmas Físico",
      "Fondo Personalizado de Lujo",
      "Video Mensaje para Redes",
      "Hora Extra Gratis",
    ],
    notIncluded: [],
    popular: false,
    color: "purple",
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-rose-500/20 text-rose-400 rounded-full text-sm font-medium mb-4">
            Precios Transparentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Paquetes para Cada{" "}
            <span className="bg-gradient-to-r from-rose-400 to-purple-500 bg-clip-text text-transparent">
              Presupuesto
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Sin costos ocultos. Elige el paquete que mejor se adapte a tu evento
            y hagamos magia juntos.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-8 ${
                pkg.popular
                  ? "bg-gradient-to-b from-rose-500 to-purple-600 text-white scale-105"
                  : "bg-gray-800 text-white"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-amber-400 text-gray-900 text-sm font-bold px-4 py-1 rounded-full">
                    MÁS POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className={`text-sm mb-4 ${pkg.popular ? "text-white/80" : "text-gray-400"}`}>
                  {pkg.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg">$</span>
                  <span className="text-5xl font-bold">{pkg.price}</span>
                  <span className={`${pkg.popular ? "text-white/80" : "text-gray-400"}`}>
                    USD
                  </span>
                </div>
                <p className={`text-sm mt-2 ${pkg.popular ? "text-white/80" : "text-gray-400"}`}>
                  {pkg.duration}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        pkg.popular ? "text-white" : "text-rose-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={`text-sm ${pkg.popular ? "text-white" : "text-gray-300"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
                {pkg.notIncluded.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 opacity-50">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-sm text-gray-500 line-through">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#reservar"
                className={`block w-full text-center py-4 rounded-xl font-semibold transition-all ${
                  pkg.popular
                    ? "bg-white text-gray-900 hover:bg-gray-100"
                    : "bg-gradient-to-r from-rose-500 to-purple-600 text-white hover:opacity-90"
                }`}
              >
                Reservar Ahora
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            ¿Necesitas algo personalizado? ¿Evento de varios días?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 font-medium"
          >
            Contáctanos para una cotización personalizada
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
