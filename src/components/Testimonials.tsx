import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "María González",
    event: "Boda - Diciembre 2025",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
    text: "¡El 360 booth fue el hit de nuestra boda! Todos nuestros invitados quedaron encantados y no paraban de grabar videos. El equipo de SnapBooth fue súper profesional y nos ayudaron a personalizar todo. 100% recomendado.",
  },
  {
    id: 2,
    name: "Carlos Ramírez",
    event: "Evento Corporativo - Enero 2026",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    text: "Contratamos el servicio para nuestro evento de fin de año de la empresa. La calidad del equipo y la atención fueron excelentes. Nuestros empleados se divirtieron mucho y el contenido generado fue increíble para redes sociales.",
  },
  {
    id: 3,
    name: "Ana Sofía Mendoza",
    event: "XV Años - Noviembre 2025",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
    text: "El photobooth hizo que los XV de mi hija fueran inolvidables. Los props estaban padrísimos y las fotos quedaron hermosas. El operador fue muy amable y paciente con todos. ¡Gracias SnapBooth!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-600 rounded-full text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Lo que Dicen Nuestros{" "}
            <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
              Clientes
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Miles de clientes satisfechos nos respaldan. Lee lo que tienen que
            decir sobre su experiencia con SnapBooth.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-3xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-rose-200">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl sm:text-5xl font-bold mb-2">500+</p>
              <p className="text-white/80">Eventos</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold mb-2">50K+</p>
              <p className="text-white/80">Fotos</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold mb-2">4.9</p>
              <p className="text-white/80">Rating</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold mb-2">98%</p>
              <p className="text-white/80">Satisfacción</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
