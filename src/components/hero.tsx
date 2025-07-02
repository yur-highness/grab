import { motion, useScroll, useTransform } from "framer-motion"
 import { useRef } from "react"
 import LargeDashboardMockup from "@/components/dashboard"
import { ArrowRight } from "lucide-react"

 
 export default function Hero(){
    const heroRef = useRef(null)
  const dashboardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  // Dashboard animation transforms
  const dashboardY = useTransform(scrollYProgress, [0, 0.5, 1], [200, 100, 50])
  const dashboardRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [25, 0, -5])
  const dashboardRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-15, 0, 5])
  const dashboardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.05])

  // Globe animation transforms
  const globeY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -30, -80])
  const globeScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.8])

    const fadeInUp = {
      initial: { opacity: 0, y: 60, filter: "blur(10px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    }
    
    const staggerContainer = {
      animate: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    }
    return (
        <motion.section
          id="hero"
          ref={heroRef}
          className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16 z-30 relative"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tighter leading-none relative"
              variants={fadeInUp}
              style={{
                textShadow: `
        0 0 20px rgba(255, 255, 255, 0.3),
        0 0 40px rgba(139, 92, 246, 0.4),
        0 0 60px rgba(139, 92, 246, 0.3),
        0 0 80px rgba(139, 92, 246, 0.2)
      `,
              }}
            >
              <span className="relative inline-block">
                Trade Smarter with
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-purple-400/20 blur-2xl -z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </span>
              <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent block relative">
                AI Precision
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-purple-400/30 to-indigo-500/30 blur-3xl -z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/80 mb-8 font-light leading-relaxed relative"
              variants={fadeInUp}
              style={{
                textShadow: `
        0 0 10px rgba(255, 255, 255, 0.2),
        0 0 20px rgba(139, 92, 246, 0.2),
        0 0 30px rgba(139, 92, 246, 0.1)
      `,
              }}
            >
              <span className="relative inline-block">
                Grab leverages advanced AI to automate your crypto trading, maximizing profits while you sleep. Join
                thousands of traders already earning passive income.
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-white/10 to-purple-400/10 blur-xl -z-10"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </span>
            </motion.p>

            <motion.div variants={fadeInUp}>
              <motion.button
                className="inline-flex items-center justify-center px-12 py-6 text-xl font-light text-white rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #581c87 0%, #7c3aed 50%, #8b5cf6 100%)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #6b21a8 0%, #8b5cf6 50%, #a855f7 100%)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #581c87 0%, #7c3aed 50%, #8b5cf6 100%)"
                }}
              >
                Get Started Free
                <ArrowRight className="ml-3 h-6 w-6" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Dashboard in Front with Globe Behind */}
          <div className="relative w-full max-w-7xl mx-auto h-[800px] flex items-center justify-center">
            {/* Large Dashboard - Front and Center */}
            <motion.div
              ref={dashboardRef}
              className="relative z-20 flex items-center justify-center"
              style={{
                y: dashboardY,
                rotateX: dashboardRotateX,
                rotateY: dashboardRotateY,
                scale: dashboardScale,
                transformStyle: "preserve-3d",
                perspective: "1200px",
              }}
              initial={{
                opacity: 0,
                rotateX: 60,
                rotateY: 0,
                scale: 0.4,
                y: 300,
                z: -500,
              }}
              animate={{
                opacity: 1,
                rotateX: 25,
                rotateY: 0,
                scale: 0.6,
                y: 250,
                z: -300,
              }}
              transition={{
                duration: 1.5,
                delay: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <LargeDashboardMockup />
            </motion.div>

            {/* 3D Globe - Behind Dashboard with Dark Purple Intensity */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-10"
              style={{
                y: globeY,
                scale: globeScale,
                pointerEvents: "auto",
              }}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3 }}
            >
              {/* Intense Dark Purple Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-950/60 to-indigo-950/60 rounded-full blur-3xl scale-150 animate-pulse"></div>
              <div
                className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 rounded-full blur-2xl scale-125 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute inset-0 bg-gradient-to-r from-purple-800/30 to-indigo-800/30 rounded-full blur-xl scale-110 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Globe with Dark Purple Filter */}
              <div className="relative w-[1200px] h-[1200px] lg:w-[800px] lg:h-[800px]">
            
                <iframe
                  src="https://my.spline.design/worldplanet-j1w9dCnAg5os0QEOZee5AjAs/"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  className="rounded-full relative opacity-80"
                  title="3D Planet Model"
                  style={{
                    pointerEvents: "auto",
                    cursor: "grab",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.section>
    )
 }
