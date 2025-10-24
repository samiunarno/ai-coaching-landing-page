import { Heart, Target, Sparkles } from 'lucide-react';

export default function Mission() {
  return (
    <section id="mission" className="py-24 bg-gradient-to-br from-gray-900 via-teal-900 to-cyan-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold inline-block mb-4">
            My Mission
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            More Than Finding A Job
          </h2>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto">
            It is about hope, direction, and empowerment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Hope</h3>
            <p className="text-white/80 leading-relaxed">
              Every journey starts with hope. I believe in your potential and help you see the
              possibilities that lie ahead, even when the path seems unclear.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Direction</h3>
            <p className="text-white/80 leading-relaxed">
              With clear guidance and structured support, you will know exactly what steps to take.
              No more confusion, just a clear path forward to your goals.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Empowerment</h3>
            <p className="text-white/80 leading-relaxed">
              You will gain the confidence, skills, and knowledge to navigate your career and life in
              a new environment independently and successfully.
            </p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
              "I want to show that with guidance, language, and courage, everything in life is
              possible."
            </p>
            <p className="text-xl text-white/80 mb-8">
              I came from uncertainty to success. I know the challenges you face because I have lived
              them. Let me help you turn your dreams into reality.
            </p>
            <div className="inline-block">
              <p className="text-lg font-semibold">Rameen Noor</p>
              <p className="text-sm text-white/70">International Career & Integration Coach</p>
            </div>
          </blockquote>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-6">
            No Plan. No Problem.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Your Journey Begins Right Here.
            </span>
          </h3>
          <a
            href="#contact"
            className="inline-block bg-white text-teal-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-teal-800 transition-all duration-300 shadow-2xl hover:shadow-yellow-300/50 hover:scale-105"
          >
            Take The First Step
          </a>
        </div>
      </div>
    </section>
  );
}
