import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "./ui/card"



export default function FeaturedInSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const publications = [
    { name: "TechCrunch", logo: "TC", color: "from-green-500 to-emerald-500" },
    { name: "Forbes", logo: "F", color: "from-blue-500 to-cyan-500" },
    { name: "CoinDesk", logo: "CD", color: "from-orange-500 to-yellow-500" },
    { name: "Bloomberg", logo: "B", color: "from-purple-500 to-pink-500" },
    { name: "Reuters", logo: "R", color: "from-red-500 to-rose-500" },
    { name: "Wall Street Journal", logo: "WSJ", color: "from-indigo-500 to-purple-500" },
  ]

  return (
    <motion.section
      id="featured"
      ref={ref}
      className="py-32 px-4 overflow-hidden relative"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-purple-900/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tighter"
            style={{
              textShadow: "0 0 30px rgba(139, 92, 246, 0.3)",
            }}
          >
            Featured In
          </motion.h2>
          <motion.p
            className="text-xl text-white/60 font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Trusted by leading publications worldwide
          </motion.p>
        </motion.div>

        {/* Modern Marquee Container */}
        <div className="relative">
          {/* Enhanced Gradient Overlays - Fixed Color Leak */}
          <div className="absolute left-0 top-0 w-60 h-full z-20 pointer-events-none">
            <div className="w-full h-full " />
          </div>
          <div className="absolute right-0 top-0 w-60 h-full z-20 pointer-events-none">
            <div className="w-full h-full " />
          </div>

          {/* Marquee Track with Modern Cards */}
          <div className="flex overflow-hidden py-8">
            <motion.div
              className="flex items-center gap-8 whitespace-nowrap"
              animate={{
                x: [0, -100 * (publications.length * 2)],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* First set */}
              {publications.map((pub, index) => (
                <motion.div
                  key={`first-${pub.name}`}
                  className="flex-shrink-0"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="p-6 bg-transparent backdrop-blur-xl border-white/10 hover:bg-white/5 hover:border-purple-500/30 transition-all duration-500 min-w-[280px] group relative overflow-hidden">
                    {/* Card Background Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />

                    <div className="relative z-10 flex items-center space-x-4">
                      {/* Logo */}
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-r ${pub.color} rounded-2xl flex items-center justify-center shadow-2xl`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="text-white font-bold text-lg">{pub.logo}</span>
                      </motion.div>

                      {/* Publication Info */}
                      <div className="flex-1">
                        <h3 className="text-white font-light text-xl tracking-tight mb-1">{pub.name}</h3>
                        <p className="text-white/60 text-sm font-light">Leading Publication</p>
                      </div>

                      {/* Verified Badge */}
                      <motion.div
                        className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              ))}

              {/* Second set for seamless loop */}
              {publications.map((pub, index) => (
                <motion.div
                  key={`second-${pub.name}`}
                  className="flex-shrink-0"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="p-6 bg-transparent backdrop-blur-xl border-white/10 hover:bg-white/5 hover:border-purple-500/30 transition-all duration-500 min-w-[280px] group relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />

                    <div className="relative z-10 flex items-center space-x-4">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-r ${pub.color} rounded-2xl flex items-center justify-center shadow-2xl`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="text-white font-bold text-lg">{pub.logo}</span>
                      </motion.div>

                      <div className="flex-1">
                        <h3 className="text-white font-light text-xl tracking-tight mb-1">{pub.name}</h3>
                        <p className="text-white/60 text-sm font-light">Leading Publication</p>
                      </div>

                      <motion.div
                        className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              ))}

              {/* Third set for extra smoothness */}
              {publications.map((pub, index) => (
                <motion.div
                  key={`third-${pub.name}`}
                  className="flex-shrink-0"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="p-6 bg-transparent backdrop-blur-xl border-white/10 hover:bg-white/5 hover:border-purple-500/30 transition-all duration-500 min-w-[280px] group relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />

                    <div className="relative z-10 flex items-center space-x-4">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-r ${pub.color} rounded-2xl flex items-center justify-center shadow-2xl`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="text-white font-bold text-lg">{pub.logo}</span>
                      </motion.div>

                      <div className="flex-1">
                        <h3 className="text-white font-light text-xl tracking-tight mb-1">{pub.name}</h3>
                        <p className="text-white/60 text-sm font-light">Leading Publication</p>
                      </div>

                      <motion.div
                        className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-light text-white mb-2">50M+</div>
              <div className="text-white/60 text-sm font-light">Total Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-white mb-2">6</div>
              <div className="text-white/60 text-sm font-light">Major Publications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-white mb-2">15+</div>
              <div className="text-white/60 text-sm font-light">Featured Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-white mb-2">Global</div>
              <div className="text-white/60 text-sm font-light">Recognition</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}