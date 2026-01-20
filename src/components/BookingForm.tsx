"use client";

import { useState } from "react";

const boothTypes = [
  { id: "360", name: "360° Photo Booth", price: 895 },
  { id: "openair", name: "Open Air Booth", price: 550 },
  { id: "mirror", name: "Mirror Booth", price: 850 },
  { id: "gif", name: "GIF Booth", price: 650 },
];

const eventTypes = [
  "Boda",
  "XV Años",
  "Cumpleaños",
  "Evento Corporativo",
  "Baby Shower",
  "Graduación",
  "Otro",
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    boothType: "",
    hours: "3",
    guestCount: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const selectedBooth = boothTypes.find((b) => b.id === formData.boothType);
  const estimatedPrice = selectedBooth
    ? selectedBooth.price + (parseInt(formData.hours) - 3) * 150
    : 0;

  if (isSubmitted) {
    return (
      <section id="reservar" className="py-20 bg-gradient-to-br from-rose-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-green-500"
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
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¡Solicitud Enviada!
            </h2>
            <p className="text-gray-600 mb-8">
              Gracias por tu interés en SnapBooth. Nos pondremos en contacto
              contigo en las próximas 24 horas para confirmar los detalles de tu
              evento.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  eventType: "",
                  eventDate: "",
                  boothType: "",
                  hours: "3",
                  guestCount: "",
                  message: "",
                });
              }}
              className="btn-primary px-8 py-4 rounded-full text-white font-semibold"
            >
              Nueva Reservación
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservar" className="py-20 bg-gradient-to-br from-rose-500 to-purple-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
            Reserva Tu Photobooth
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Cotiza y Reserva en Minutos
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Completa el formulario y recibe tu cotización personalizada. Sin
            compromisos, sin complicaciones.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Información Personal
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-shadow"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-shadow"
                      placeholder="+52 (81) 1234-5678"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-shadow"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* Event Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Detalles del Evento
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Evento *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-shadow"
                    >
                      <option value="">Selecciona...</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fecha del Evento *
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-shadow"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Número de Invitados
                    </label>
                    <input
                      type="number"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-shadow"
                      placeholder="Aprox. 100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Horas de Servicio *
                    </label>
                    <select
                      name="hours"
                      value={formData.hours}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-shadow"
                    >
                      <option value="3">3 horas</option>
                      <option value="4">4 horas</option>
                      <option value="5">5 horas</option>
                      <option value="6">6 horas</option>
                      <option value="8">8 horas</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Booth Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Selecciona tu Photobooth *
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {boothTypes.map((booth) => (
                    <label
                      key={booth.id}
                      className={`relative flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.boothType === booth.id
                          ? "border-rose-500 bg-rose-50"
                          : "border-gray-200 hover:border-rose-200"
                      }`}
                    >
                      <input
                        type="radio"
                        name="boothType"
                        value={booth.id}
                        checked={formData.boothType === booth.id}
                        onChange={handleChange}
                        required
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          formData.boothType === booth.id
                            ? "border-rose-500"
                            : "border-gray-300"
                        }`}
                      >
                        {formData.boothType === booth.id && (
                          <div className="w-3 h-3 rounded-full bg-rose-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{booth.name}</p>
                        <p className="text-sm text-gray-500">
                          Desde ${booth.price} USD
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje Adicional
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-shadow resize-none"
                  placeholder="Cuéntanos más sobre tu evento o cualquier requerimiento especial..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 rounded-xl text-white font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Solicitar Cotización
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Summary Card */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-white sticky top-28">
              <h3 className="text-xl font-semibold mb-6">Resumen de Cotización</h3>

              {formData.boothType ? (
                <>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-white/80">Photobooth:</span>
                      <span className="font-medium">{selectedBooth?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Duración:</span>
                      <span className="font-medium">{formData.hours} horas</span>
                    </div>
                    {formData.eventType && (
                      <div className="flex justify-between">
                        <span className="text-white/80">Evento:</span>
                        <span className="font-medium">{formData.eventType}</span>
                      </div>
                    )}
                    {formData.eventDate && (
                      <div className="flex justify-between">
                        <span className="text-white/80">Fecha:</span>
                        <span className="font-medium">
                          {new Date(formData.eventDate).toLocaleDateString("es-MX", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-white/20 pt-6">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Precio Estimado:</span>
                      <span className="text-3xl font-bold">${estimatedPrice} USD</span>
                    </div>
                    <p className="text-sm text-white/60 mt-2">
                      * El precio final puede variar según ubicación y servicios
                      adicionales
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <svg
                    className="w-16 h-16 text-white/30 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  <p className="text-white/60">
                    Selecciona un photobooth para ver el precio estimado
                  </p>
                </div>
              )}

              {/* Trust Badges */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="text-sm">Pago Seguro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm">Respuesta 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-rose-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <span className="text-sm">500+ Eventos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                    <span className="text-sm">4.9 Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
