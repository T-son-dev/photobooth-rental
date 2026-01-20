import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80"
          alt="Party celebration background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-rose-500/20 border border-rose-500/30 rounded-full text-rose-300 text-sm font-medium mb-6">
              #1 en Renta de Photobooths
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Captura Momentos{" "}
              <span className="bg-gradient-to-r from-rose-400 to-purple-500 bg-clip-text text-transparent">
                Inolvidables
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg">
              Transforma tu evento en una experiencia única con nuestros
              photobooths de última generación. Desde bodas hasta eventos
              corporativos, tenemos la solución perfecta para ti.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#reservar"
                className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg text-center"
              >
                Cotizar Ahora
              </a>
              <a
                href="#galeria"
                className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-colors text-center"
              >
                Ver Galería
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-rose-400">500+</p>
                <p className="text-gray-400 text-sm">Eventos Realizados</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-purple-400">50K+</p>
                <p className="text-gray-400 text-sm">Fotos Capturadas</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-amber-400">4.9</p>
                <p className="text-gray-400 text-sm">Rating Promedio</p>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="hidden lg:block animate-float">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-purple-600 rounded-3xl blur-2xl opacity-30" />
              <Image
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80"
                alt="Photo booth at event"
                width={600}
                height={500}
                className="relative rounded-3xl shadow-2xl object-cover"
              />

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Reserva Confirmada</p>
                    <p className="text-sm text-gray-500">Boda - 15 Feb 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#equipos" className="flex flex-col items-center text-white/60 hover:text-white transition-colors">
          <span className="text-sm mb-2">Descubre más</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
