// "use client"

// import { motion } from "framer-motion"
// import { Card } from "@/components/ui/card"
// import { Users, Target, Award, Globe } from "lucide-react"
// import Navigation from "@/components/navigation"
// import Footer from "@/components/footer"

// const fadeInUp = {
//   initial: { opacity: 0, y: 60, filter: "blur(10px)" },
//   animate: { opacity: 1, y: 0, filter: "blur(0px)" },
//   transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
// }

// export default function AboutPage() {
//   const stats = [
//     { icon: Users, label: "Active Users", value: "50,000+" },
//     { icon: Target, label: "Success Rate", value: "94%" },
//     { icon: Award, label: "Awards Won", value: "12" },
//     { icon: Globe, label: "Countries", value: "45+" },
//   ]

//   const team = [
//     {
//       name: "Sarah Chen",
//       role: "CEO & Co-Founder",
//       bio: "Former Goldman Sachs VP with 15 years in quantitative trading.",
//       image: "/placeholder.svg?height=300&width=300",
//     },
//     {
//       name: "Marcus Rodriguez",
//       role: "CTO & Co-Founder",
//       bio: "Ex-Google AI engineer specializing in machine learning systems.",
//       image: "/placeholder.svg?height=300&width=300",
//     },
//     {
//       name: "Emily Watson",
//       role: "Head of AI",
//       bio: "PhD in Computer Science from MIT, expert in financial algorithms.",
//       image: "/placeholder.svg?height=300&width=300",
//     },
//     {
//       name: "David Kim",
//       role: "Head of Security",
//       bio: "Former cybersecurity lead at major cryptocurrency exchanges.",
//       image: "/placeholder.svg?height=300&width=300",
//     },
//   ]

//   return (
//     <div className="min-h-screen relative">
//       {/* Background Image */}
//       <div
//         className="fixed inset-0 z-0"
//         style={{
//           backgroundImage: "url(/background.jpg)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-cyan-900/80" />
//       </div>

//       <div className="relative z-10">
//         <Navigation />

//         <div className="pt-20">
//           {/* Hero Section */}
//           <motion.section
//             className="py-20 px-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.2 }}
//           >
//             <div className="max-w-4xl mx-auto text-center">
//               <motion.h1
//                 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-tighter leading-none"
//                 variants={fadeInUp}
//                 initial="initial"
//                 animate="animate"
//               >
//                 About
//                 <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent block">
//                   Grab
//                 </span>
//               </motion.h1>

//               <motion.p
//                 className="text-xl md:text-2xl text-white/70 font-light leading-relaxed"
//                 variants={fadeInUp}
//                 initial="initial"
//                 animate="animate"
//                 transition={{ delay: 0.2 }}
//               >
//                 We are on a mission to democratize wealth creation through AI-powered trading technology that was once
//                 exclusive to Wall Street.
//               </motion.p>
//             </div>
//           </motion.section>

//           {/* Stats Section */}
//           <motion.section
//             className="py-20 px-4"
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="max-w-6xl mx-auto">
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                 {stats.map((stat, index) => (
//                   <motion.div
//                     key={stat.label}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <Card className="p-8 bg-white/5 backdrop-blur-xl border-white/10 text-center">
//                       <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
//                         <stat.icon className="w-6 h-6 text-white" strokeWidth={1} />
//                       </div>
//                       <div className="text-3xl font-light text-white mb-2">{stat.value}</div>
//                       <div className="text-white/60 font-light">{stat.label}</div>
//                     </Card>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.section>

//           {/* Story Section */}
//           <motion.section
//             className="py-20 px-4"
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="max-w-4xl mx-auto">
//               <h2 className="text-5xl font-light text-white mb-12 text-center tracking-tighter">Our Story</h2>
//               <div className="space-y-8 text-white/70 font-light leading-relaxed text-lg">
//                 <p>
//                   Grab was born from a simple observation: the most sophisticated trading algorithms were locked away in
//                   the vaults of Wall Street, accessible only to the ultra-wealthy and institutional investors.
//                 </p>
//                 <p>
//                   Our founders, having worked at the highest levels of finance and technology, saw an opportunity to
//                   level the playing field. By combining cutting-edge AI with the democratizing power of cryptocurrency,
//                   we could give everyone access to the same tools that hedge funds use to generate billions in profits.
//                 </p>
//                 <p>
//                   Today, Grab serves over 50,000 users across 45 countries, managing millions in assets and consistently
//                   delivering superior returns through our AI-powered trading platform.
//                 </p>
//               </div>
//             </div>
//           </motion.section>

//           {/* Team Section */}
//           <motion.section
//             className="py-20 px-4"
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="max-w-6xl mx-auto">
//               <h2 className="text-5xl font-light text-white mb-16 text-center tracking-tighter">Meet Our Team</h2>
//               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {team.map((member, index) => (
//                   <motion.div
//                     key={member.name}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <Card className="p-6 bg-white/5 backdrop-blur-xl border-white/10 text-center">
//                       <img
//                         src={member.image || "/placeholder.svg"}
//                         alt={member.name}
//                         className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
//                       />
//                       <h3 className="text-xl font-light text-white mb-2 tracking-tight">{member.name}</h3>
//                       <p className="text-purple-400 font-light mb-4">{member.role}</p>
//                       <p className="text-white/60 font-light text-sm leading-relaxed">{member.bio}</p>
//                     </Card>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.section>
//         </div>

//         <Footer />
//       </div>
//     </div>
//   )
// }
