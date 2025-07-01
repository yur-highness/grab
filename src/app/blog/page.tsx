// "use client"

// import { motion } from "framer-motion"
// import { Badge } from "@/components/ui/badge"
// import Navigation from "@/components/navigation"
// import Footer from "@/components/footer"

// const fadeInUp = {
//   initial: { opacity: 0, y: 60, filter: "blur(10px)" },
//   animate: { opacity: 1, y: 0, filter: "blur(0px)" },
//   transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
// }

// export default function BlogPage() {
//   const articles = [
//     {
//       id: 1,
//       title: 'The Future of AI in Cryptocurrency Trading',
//       excerpt: 'Explore how artificial intelligence is revolutionizing the way we trade cryptocurrencies and what this means for the future of finance.',
//       author: 'Sarah Chen',
//       date: '2024-01-15',
//       readTime: '8 min read',
//       category: 'AI & Technology',
//       image: '/placeholder.svg?height=400&width=600',
//       featured: true
//     },
//     {
//       id: 2,
//       title: 'Risk Management Strategies for Crypto Trading',
//       excerpt: 'Learn essential risk management techniques that can help protect your portfolio while maximizing potential returns in volatile markets.',
//       author: 'Marcus Rodriguez',
//       date: '2024-01-12',
//       readTime: '6 min read',
//       category: 'Trading',
//       image: '/placeholder.svg?height=400&width=600',
//       featured: false
//     },
//     {
//       id: 3,
//       title: 'Understanding Market Sentiment Analysis',
//       excerpt: 'Discover how our AI analyzes social media, news, and market data to predict price movements and optimize trading decisions.',
//       author: 'Emily Watson',
//       date: '2024-01-10',
//       readTime: '10 min read',
//       category: 'Analysis',
//       image: '/placeholder.svg?height=400&width=600',
//       featured: false
//     },
//     {
//       id: 4,
//       title: 'Building Wealth Through Automated Trading',
//       excerpt: 'A comprehensive guide to setting up automated trading strategies that work while you sleep, building long-term wealth.',
//       author: 'David Kim',
//       date: '2024-01-08',
//       readTime: '12 min read',
//       category: 'Wealth Building',
//       image: '/placeholder.svg?height=400&width=600',
//       featured: false
//     }
//   ]

//   const categories = ['All', 'AI & Technology', 'Trading', 'Analysis', 'Wealth Building']

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       <Navigation />
      
//       <div className="pt-20">
//         {/* Hero Section */}
//         <motion.section 
//           className="py-20 px-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.2 }}
//         >
//           <div className="max-w-4xl mx-auto text-center">
//             <motion.h1 
//               className="text-6xl md:text-8xl font-light text-white mb-8 tracking-tighter leading-none"
//               variants={fadeInUp}
//               initial="initial"
//               animate="animate"
//             >
//               Grab
//               <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
//                 Blog
//               </span>
//             </motion.h1>
            
//             <motion.p 
//               className="text-xl md:text-2xl text-white/70 font-light leading-relaxed"
//               variants={fadeInUp}
//               initial="initial"
//               animate="animate"
//               transition={{ delay: 0.2 }}
//             >
//               Insights, strategies, and updates from the world of AI-powered 
//               cryptocurrency trading.
//             </motion.p>
//           </div>
//         </motion.section>

//         {/* Categories */}
//         <motion.section 
//           className="py-10 px-4"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="max-w-6xl mx-auto">
//             <div className="flex flex-wrap justify-center gap-4 mb-12">
//               {categories.map((category, index) => (
//                 <motion.div
//                   key={category}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <Badge 
//                     variant={category === 'All' ? 'default' : 'outline'}
//                     className={`px-6 py-2 text-sm font-light cursor-pointer transition-all duration-300 ${
//                       category === 'All' 
//                         ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0' 
//                         : 'bg-white/5 text-white/70 border-white/20 hover:bg-white/10 hover:text-white'
//                     }`}
//                   >
//                     {category}
//                   </Badge>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>

//         {/* Featured Article */}
//         <motion.section 
//           className="py-10 px-4"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="max-w-6xl mx-auto">
//             <FeaturedArticle article={featuredArticle} />
//           </div>
//         </motion.section>

//         {/* Articles List */}
//         <motion.section 
//           className="py-10 px-4"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="max-w-6xl mx-auto">
//             <ArticlesList articles={articles} />
//           </div>
//         </motion.section>        
//       </div>

//       {/* Footer */}      
//       <Footer />
//     </div>
//   )
// }
