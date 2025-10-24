import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-700 via-cyan-800 to-blue-900"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-overlay blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-overlay blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-80 h-80 bg-sky-300 rounded-full mix-blend-overlay blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 md:pt-32">
        <div className="space-y-8 animate-fade-in-up">
          {/* Subheading */}
          <span className="inline-block bg-white/20 text-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium tracking-wide uppercase">
            Empower Your Future
          </span>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight">
            No Plan.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-300 to-pink-400">
              No Problem.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Start your next chapter with clarity and confidence — whether it’s a
            new career, country, or calling. Let’s turn uncertainty into
            opportunity.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#contact"
              className="group flex items-center space-x-2 bg-white text-teal-800 px-8 py-4 rounded-full font-semibold hover:bg-pink-300 hover:text-teal-900 transition-all duration-300 shadow-lg hover:shadow-pink-400/50 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start on WhatsApp</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="flex items-center space-x-2 border-2 border-white/80 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-teal-800 transition-all duration-300 shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Free Call</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-24 animate-bounce-slow flex justify-center">
          {/* <div className="inline-block w-6 h-10 border-2 border-white/40 rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
