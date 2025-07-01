"use client"


// import { motion, useInView } from "framer-motion"

// import { Card } from "@/components/ui/card"


// import Navigation from "@/components/navigation"
// import Footer from "@/components/footer"
// import Hero from "@/components/hero"
// import FeaturedInSection from "@/components/featured"
// import { BarChart3, Shield, Star, TrendingUp, Users, Wallet, Zap, } from "lucide-react"
// import { useRef } from "react"



// export default function HomePage() {
  
//   return (
//     <div className="min-h-screen relative">
//       {/* Cosmic Background */}
//       <div
//         className="fixed inset-0 z-0"
//         style={{
//           backgroundImage: "url(/cosmic-background.jpg)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-950/90 via-purple-900/80 to-indigo-950/90" />
//       </div>

//       <div className="relative z-10">
//         <Navigation />
//         {/* Hero Section */}
//         <Hero />
//         {/* Featured In Section */}
//         <FeaturedInSection />
//         {/* Testimonials Section */}
//         <TestimonialsSection />
//         {/* How It Works Section */}
//         <HowItWorksSection />
//         {/* Features Section */}
//         <FeaturesSection />
//         {/* Mission Statement Section */}
//         <MissionSection />
//         {/* FAQ Section */}
//         <FAQSection />
//         <Footer />
//       </div>
//     </div>
//   )
// }





// function TestimonialsSection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   const testimonials = [
//     {
//       name: "Sarah Chen",
//       role: "Crypto Investor",
//       content: "Grab's AI has completely transformed my trading strategy. The automation is flawless.",
//       result: "+247% ROI in 6 months",
//       avatar: "/placeholder.svg?height=60&width=60",
//     },
//     {
//       name: "Marcus Rodriguez",
//       role: "Day Trader",
//       content: "I was skeptical at first, but the results speak for themselves. Best investment I've made.",
//       result: "+189% ROI in 4 months",
//       avatar: "/placeholder.svg?height=60&width=60",
//     },
//     {
//       name: "Emily Watson",
//       role: "Portfolio Manager",
//       content: "The AI's ability to predict market movements is incredible. It's like having a crystal ball.",
//       result: "+312% ROI in 8 months",
//       avatar: "/placeholder.svg?height=60&width=60",
//     },
//   ]

//   return (
//     <motion.section
//       id="testimonials"
//       ref={ref}
//       className="py-32 px-4"
//       initial={{ opacity: 0, filter: "blur(10px)" }}
//       animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           className="text-6xl font-light text-white mb-20 text-center tracking-tighter"
//           initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
//           animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           What Our Users Say
//         </motion.h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.name}
//               initial={{ opacity: 0, y: 50, rotateX: 45 }}
//               animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
//               transition={{ delay: index * 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
//               whileHover={{
//                 y: -10,
//                 scale: 1.02,
//                 rotateY: 5,
//                 transition: { type: "spring", stiffness: 300 },
//               }}
//             >
//               <Card className="p-8 bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden group">
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                   initial={false}
//                 />
//                 <div className="relative z-10">
//                   <div className="flex items-center mb-6">
//                     <motion.img
//                       src={testimonial.avatar || "/placeholder.svg"}
//                       alt={testimonial.name}
//                       className="w-14 h-14 rounded-full mr-4 border-2 border-purple-500/30"
//                       whileHover={{ scale: 1.1, rotate: 5 }}
//                     />
//                     <div>
//                       <h3 className="text-white font-light text-lg">{testimonial.name}</h3>
//                       <p className="text-white/60 text-sm">{testimonial.role}</p>
//                     </div>
//                   </div>
//                   <p className="text-white/80 mb-6 font-light leading-relaxed text-lg">&quot;{testimonial.content}&quot;</p>
//                   <div className="flex items-center mb-4">
//                     {[...Array(5)].map((_, i) => (
//                       <motion.div
//                         key={i}
//                         initial={{ opacity: 0, scale: 0 }}
//                         animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                         transition={{ delay: index * 0.2 + i * 0.1 }}
//                       >
//                         <Star className="w-5 h-5 text-yellow-400 fill-current" />
//                       </motion.div>
//                     ))}
//                   </div>
//                   <motion.div
//                     className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/20"
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     <p className="text-green-400 font-medium">{testimonial.result}</p>
//                   </motion.div>
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   )
// }

// function HowItWorksSection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   const steps = [
//     {
//       icon: Wallet,
//       title: "Connect Your Wallet",
//       description: "Securely link your crypto wallet in seconds with our encrypted connection protocol.",
//       image: "/placeholder.svg?height=200&width=300",
//     },
//     {
//       icon: TrendingUp,
//       title: "Set Up Your AI Assistant",
//       description: "Configure your trading preferences and risk tolerance. Our AI learns your style.",
//       image: "/placeholder.svg?height=200&width=300",
//     },
//     {
//       icon: TrendingUp,
//       title: "Automate Your Trading",
//       description: "Sit back and watch as our AI executes profitable trades 24/7 on your behalf.",
//       image: "/placeholder.svg?height=200&width=300",
//     },
//   ]

//   return (
//     <motion.section
//       id="how-it-works"
//       ref={ref}
//       className="py-32 px-4"
//       initial={{ opacity: 0, filter: "blur(10px)" }}
//       animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           className="text-6xl font-light text-white mb-20 text-center tracking-tighter"
//           initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
//           animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           How It Works
//         </motion.h2>

//         <div className="grid md:grid-cols-3 gap-12">
//           {steps.map((step, index) => (
//             <motion.div
//               key={step.title}
//               initial={{ opacity: 0, y: 60, rotateY: 45 }}
//               animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
//               transition={{ delay: index * 0.3, duration: 1, type: "spring", stiffness: 80 }}
//               whileHover={{
//                 y: -15,
//                 rotateY: -5,
//                 scale: 1.02,
//                 transition: { type: "spring", stiffness: 300 },
//               }}
//             >
//               <Card className="p-8 bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 text-center relative overflow-hidden group">
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                   initial={false}
//                 />
//                 <div className="relative z-10">
//                   <div className="mb-8">
//                     <motion.img
//                       src={step.image || "/placeholder.svg"}
//                       alt={step.title}
//                       className="w-full h-48 object-cover rounded-xl mb-6 border border-purple-500/20"
//                       whileHover={{ scale: 1.05 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                     />
//                     <motion.div
//                       className="w-20 h-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl"
//                       whileHover={{
//                         rotate: 360,
//                         scale: 1.1,
//                         boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)",
//                       }}
//                       transition={{ type: "spring", stiffness: 200 }}
//                     >
//                       <step.icon className="w-10 h-10 text-white" strokeWidth={1} />
//                     </motion.div>
//                   </div>
//                   <h3 className="text-2xl font-light text-white mb-6 tracking-tight">{step.title}</h3>
//                   <p className="text-white/70 font-light leading-relaxed text-lg">{step.description}</p>
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   )
// }

// function FeaturesSection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   const features = [
//     {
//       icon: Shield,
//       title: "Bank-Grade Security",
//       description: "Your funds are protected with military-grade encryption and multi-signature wallets.",
//     },
//     {
//       icon: Zap,
//       title: "Lightning Fast Execution",
//       description: "Execute trades in milliseconds with our optimized trading infrastructure.",
//     },
//     {
//       icon: BarChart3,
//       title: "Advanced Analytics",
//       description: "Get detailed insights and performance metrics to track your success.",
//     },
//     {
//       icon: Users,
//       title: "24/7 Support",
//       description: "Our expert team is available around the clock to assist you.",
//     },
//   ]

//   return (
//     <motion.section
//       id="features"
//       ref={ref}
//       className="py-32 px-4"
//       initial={{ opacity: 0, filter: "blur(10px)" }}
//       animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           className="text-6xl font-light text-white mb-20 text-center tracking-tighter"
//           initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
//           animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           Powerful Features
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-10">
//           {features.map((feature, index) => (
//             <motion.div
//               key={feature.title}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, rotateY: index % 2 === 0 ? -30 : 30 }}
//               animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
//               transition={{ delay: index * 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
//               whileHover={{
//                 scale: 1.03,
//                 rotateY: index % 2 === 0 ? 5 : -5,
//                 y: -10,
//                 transition: { type: "spring", stiffness: 300 },
//               }}
//             >
//               <Card className="p-10 bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden group">
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                   initial={false}
//                 />
//                 <div className="relative z-10">
//                   <motion.div
//                     className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-2xl"
//                     whileHover={{
//                       rotate: 360,
//                       scale: 1.2,
//                       boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)",
//                     }}
//                     transition={{ type: "spring", stiffness: 200 }}
//                   >
//                     <feature.icon className="w-8 h-8 text-white" strokeWidth={1} />
//                   </motion.div>
//                   <h3 className="text-3xl font-light text-white mb-6 tracking-tight">{feature.title}</h3>
//                   <p className="text-white/70 font-light leading-relaxed text-lg">{feature.description}</p>
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   )
// }

// function MissionSection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   return (
//     <motion.section
//       id="mission"
//       ref={ref}
//       className="py-32 px-4"
//       initial={{ opacity: 0, filter: "blur(10px)" }}
//       animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="max-w-5xl mx-auto text-center">
//         <motion.h2
//           className="text-6xl font-light text-white mb-12 tracking-tighter"
//           initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
//           animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           Our Mission
//         </motion.h2>
//         <motion.p
//           className="text-2xl font-light text-white/70 leading-relaxed mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           To empower individuals with cutting-edge AI technology, enabling them to navigate the complexities of the
//           crypto market with confidence and achieve unparalleled financial success.
//         </motion.p>
//         <motion.button
//           className="inline-flex items-center justify-center px-8 py-4 text-xl font-light text-white rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer"
//           style={{
//             background: "linear-gradient(135deg, #581c87 0%, #7c3aed 50%, #8b5cf6 100%)",
//           }}
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={isInView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.background = "linear-gradient(135deg, #6b21a8 0%, #8b5cf6 50%, #a855f7 100%)"
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.background = "linear-gradient(135deg, #581c87 0%, #7c3aed 50%, #8b5cf6 100%)"
//           }}
//         >
//           Join the Revolution
//         </motion.button>
//       </div>
//     </motion.section>
//   )
// }

// function FAQSection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   const faqData = [
//     {
//       question: "How does Grab's AI trading work?",
//       answer:
//         "Our AI analyzes vast amounts of market data to identify profitable trading opportunities. It then executes trades automatically based on your pre-set preferences and risk tolerance.",
//     },
//     {
//       question: "Is my crypto safe with Grab?",
//       answer:
//         "Yes, we employ bank-grade security measures, including multi-signature wallets and military-grade encryption, to ensure the safety of your funds.",
//     },
//     {
//       question: "What kind of returns can I expect?",
//       answer:
//         "Returns vary based on market conditions and your risk settings. However, our users typically see significant ROI compared to traditional trading methods.",
//     },
//     {
//       question: "How do I get started?",
//       answer:
//         "Simply connect your wallet, set up your AI assistant with your trading preferences, and let our AI automate your trading 24/7.",
//     },
//   ]

//   return (
//     <motion.section
//       id="faq"
//       ref={ref}
//       className="py-32 px-4"
//       initial={{ opacity: 0, filter: "blur(10px)" }}
//       animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="max-w-5xl mx-auto">
//         <motion.h2
//           className="text-6xl font-light text-white mb-16 text-center tracking-tighter"
//           initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
//           animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           Frequently Asked Questions
//         </motion.h2>

//         <div className="space-y-8">
//           {faqData.map((faq, index) => (
//             <motion.div
//               key={faq.question}
//               className="border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden group"
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               whileHover={{
//                 scale: 1.02,
//                 y: -5,
//                 transition: { type: "spring", stiffness: 300 },
//               }}
//             >
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                 initial={false}
//               />
//               <div className="relative z-10">
//                 <h3 className="text-2xl font-light text-white mb-4">{faq.question}</h3>
//                 <p className="text-white/70 font-light leading-relaxed text-lg">{faq.answer}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   )
// }
