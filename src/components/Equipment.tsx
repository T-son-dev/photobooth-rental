import Image from "next/image";

const equipment = [
  {
    id: 1,
    name: "360° Photo Booth",
    description:
      "Captura videos cinematográficos de 360 grados. Tus invitados se suben a la plataforma mientras la cámara gira a su alrededor creando contenido viral para redes sociales.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80",
    features: ["Video 360°", "Slow Motion", "Compartir Instantáneo", "LED Ring"],
    popular: true,
  },
  {
    id: 2,
    name: "Open Air Booth",
    description:
      "Diseño abierto y espacioso que permite grupos grandes. Ideal para bodas, fiestas corporativas y celebraciones donde quieres que todos participen.",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=500&q=80",
    features: ["Grupos Grandes", "Props Incluidos", "Impresión Instantánea", "Fondo Personalizado"],
    popular: false,
  },
  {
    id: 3,
    name: "Mirror Booth",
    description:
      "Un espejo mágico de cuerpo completo con animaciones interactivas. Toca la pantalla, firma tu foto y recibe impresiones de alta calidad al instante.",
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=500&q=80",
    features: ["Pantalla Táctil", "Animaciones", "Fotos Full Body", "Firma Digital"],
    popular: false,
  },
  {
    id: 4,
    name: "GIF Booth",
    description:
      "Crea GIFs animados y boomerangs divertidos que tus invitados pueden compartir instantáneamente en sus redes sociales favoritas.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&q=80",
    features: ["GIFs Animados", "Boomerangs", "Filtros AR", "Compartir Social"],
    popular: false,
  },
];

export default function Equipment() {
  return (
    <section id="equipos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-medium mb-4">
            Nuestros Equipos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Photobooths para Cada{" "}
            <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
              Ocasión
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Desde el moderno 360 Booth hasta el elegante Mirror Booth, tenemos el
            equipo perfecto para hacer de tu evento una experiencia inolvidable.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipment.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group relative"
            >
              {item.popular && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-rose-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MÁS POPULAR
                </div>
              )}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.features.map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <a
                  href="#reservar"
                  className="block w-full text-center py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
                >
                  Cotizar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
