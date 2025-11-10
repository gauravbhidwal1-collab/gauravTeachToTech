import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";


export default function Hero() {
  const quotes = [
    "The practical skills gap is finally being addressed!",
    "Our students are 3x more job-ready after these sessions.",
    "Finally, a platform that blends theory with real-world learning.",
    "This is transforming how we prepare students for the industry.",
  ];
  const authors = [
    "— Dr. Emily Chen, Stanford University",
    "— Prof. Raj Kumar, IIT Delhi",
    "— Dr. Neha Sharma, MIT",
    "— Prof. John Adams, Oxford University",
  ];
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % quotes.length), 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="pt-28 md:pt-32 pb-16 relative">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-3 py-1 rounded-full border border-white/20 text-white/80 mb-4">
              Next-Gen Learning Platform
            </span>
			<h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
				<span className="block">Transform Your</span>
				<TypeAnimation
					sequence={[
					"Students Into", 1500,
					"Learners Into", 1500,
					"Beginners Into", 1500,
					"Dreamers Into", 1500,
					]}
					speed={50}
					repeat={Infinity}
					wrapper="span"
					className="block text-[var(--accent)] mt-1"
				/> 
				<span className="block">Industry Experts</span>
			</h1>
            <p className="text-white/80 mt-6 text-lg max-w-prose">
              Bridge the gap between theoretical knowledge and practical skills with{" "}
              <span className="text-white">real industry professionals</span> who bring hands-on experience directly to your classroom.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a className="px-6 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20" href="#services">Start Your Journey →</a>
              <a className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10" href="#trainers">Watch Demo ⏵</a>
            </div>
          </motion.div>
        </div>

        {/* Right card + quote bubble */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-6 w-full max-w-md mx-auto"
          >
            <p className="text-white/70 text-sm mb-3">🧠 Interactive learning session</p>
            <div className="mt-20 flex justify-end gap-3">
              <button className="bg-white/10 p-2 rounded-full hover:bg-white/20">❤️</button>
              <button className="bg-white/10 p-2 rounded-full hover:bg-white/20">💬</button>
            </div>
            <div className="mt-6">
              <p className="text-white/70 text-sm mb-1">Session Progress</p>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div className="bg-white h-2 rounded-full" style={{ width: "78%" }} />
              </div>
              <p className="text-white/80 text-right text-sm font-semibold mt-1">78%</p>
            </div>
          </motion.div>

          {/* Quote bubble */}
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute -top-10 right-2 glass border rounded-xl p-4 max-w-xs shadow-glow"
          >
            <p className="font-semibold text-white">{quotes[i]}</p>
            <p className="text-xs text-white/70 mt-1">{authors[i]}</p>
            <div className="absolute -bottom-2 right-10 w-3 h-3 rotate-45 bg-[var(--card)] border-r border-b" style={{ borderColor: "var(--border)"}}/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
