import { Star, Quote } from 'lucide-react';

export default function SuccessStories() {
  const testimonials = [
    {
      name: 'Samuel A.',
      country: 'Nigeria',
      flag: '🇳🇬',
      text: 'Thanks to Rameen\'s coaching, I finally understood how to apply for jobs in Germany, and I got my first interview.',
      rating: 5,
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      name: 'Aisha R.',
      country: 'Pakistan',
      flag: '🇵🇰',
      text: 'Learning German and preparing for my visa was much easier with his structured guidance.',
      rating: 5,
      gradient: 'from-teal-400 to-cyan-500',
    },
    {
      name: 'Carlos M.',
      country: 'Brazil',
      flag: '🇧🇷',
      text: 'I started with no plan. Now I am studying in Berlin and working part-time.',
      rating: 5,
      gradient: 'from-yellow-400 to-orange-500',
    },
  ];

  return (
    <section id="success" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold inline-block mb-4">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real People.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Real Results.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from clients who have transformed their careers and lives with personalized coaching
            and guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-transparent hover:-translate-y-2"
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-teal-600" />
              </div>

              <div className="relative">
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-3xl shadow-lg`}
                  >
                    {testimonial.flag}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.country}</p>
                  </div>
                </div>

                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
              </div>

              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`}
              ></div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready To Write Your Own Success Story?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of people who have transformed their careers and lives with personalized
            coaching and guidance.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-teal-700 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 hover:text-teal-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
}
