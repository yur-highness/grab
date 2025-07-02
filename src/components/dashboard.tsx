import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
 import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"



export default function LargeDashboardMockup() {
  return (
    <div className="w-[1200px] h-[1000px] bg-slate-900/0 backdrop-blur-3xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl shadow-purple-900/40 relative overflow-hidden">
      {/* Enhanced Animated Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 w-full h-full  animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32  rounded-full blur-xl animate-bounce"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-24 h-24  rounded-full blur-xl animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-3/4 left-3/4 w-20 h-20  rounded-full blur-lg animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header Section */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center space-x-4">
          <motion.div
            className="w-12 h-12 bg-gradient-to-r from-purple-700 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <TrendingUp className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <h3 className="text-white font-light text-2xl">AI Trading Command Center</h3>
            <p className="text-purple-300 text-sm">Real-time Market Intelligence</p>
          </div>
        </div>
        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <Badge className="bg-purple-700/30 text-purple-300 border-purple-500/40 text-lg px-4 py-2 shadow-lg">
            +247% ROI
          </Badge>
        </motion.div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card className="p-6 bg-white/8 backdrop-blur-xl border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 shadow-lg shadow-purple-900/20">
            <div className="text-white/70 text-sm font-light mb-2">Total Balance</div>
            <div className="text-3xl font-light text-white mb-2">$127,543</div>
            <div className="text-green-400 text-sm flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12.5%
            </div>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card className="p-6 bg-white/8 backdrop-blur-xl border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 shadow-lg shadow-purple-900/20">
            <div className="text-white/70 text-sm font-light mb-2">Active Trades</div>
            <div className="text-3xl font-light text-white mb-2">24</div>
            <div className="text-purple-300 text-sm">Running</div>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card className="p-6 bg-white/8 backdrop-blur-xl border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 shadow-lg shadow-purple-900/20">
            <div className="text-white/70 text-sm font-light mb-2">Success Rate</div>
            <div className="text-3xl font-light text-white mb-2">94.2%</div>
            <div className="text-indigo-300 text-sm">Accuracy</div>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card className="p-6 bg-white/8 backdrop-blur-xl border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 shadow-lg shadow-purple-900/20">
            <div className="text-white/70 text-sm font-light mb-2">24h Profit</div>
            <div className="text-3xl font-light text-white mb-2">$8,247</div>
            <div className="text-green-400 text-sm">+6.9%</div>
          </Card>
        </motion.div>
      </div>

      {/* Large Chart Section */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="col-span-2">
          <Card className="p-6 bg-white/8 backdrop-blur-xl border-purple-500/20 h-64 shadow-lg shadow-purple-900/20">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-white font-light text-lg">Portfolio Performance</h4>
              <div className="flex space-x-2">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Badge
                    variant="outline"
                    className="text-purple-300 border-purple-500/40 text-sm px-3 py-1 cursor-pointer bg-purple-900/20"
                  >
                    1D
                  </Badge>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Badge className="bg-purple-700/30 text-purple-200 border-purple-500/40 text-sm px-3 py-1 cursor-pointer">
                    7D
                  </Badge>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Badge
                    variant="outline"
                    className="text-purple-300 border-purple-500/40 text-sm px-3 py-1 cursor-pointer bg-purple-900/20"
                  >
                    1M
                  </Badge>
                </motion.div>
              </div>
            </div>

            <div className="h-40 relative">
              <svg className="w-full h-full" viewBox="0 0 600 160">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M 0 120 Q 100 100 200 80 T 400 40 T 600 20"
                  stroke="#7c3aed"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 2 }}
                />
                <path d="M 0 120 Q 100 100 200 80 T 400 40 T 600 20 L 600 160 L 0 160 Z" fill="url(#chartGradient)" />
              </svg>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="p-4 bg-white/8 backdrop-blur-xl border-purple-500/20 shadow-lg shadow-purple-900/20">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-white font-light text-sm">AI Status</h4>
              <motion.div
                className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Market Analysis</span>
                <span className="text-green-400">Active</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Auto Trading</span>
                <span className="text-purple-300">Running</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Risk Management</span>
                <span className="text-indigo-300">Optimized</span>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-white/8 backdrop-blur-xl border-purple-500/20 shadow-lg shadow-purple-900/20">
            <h4 className="text-white font-light text-sm mb-3">AI Confidence</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-white/70">Market Prediction</span>
                <span className="text-purple-300">94%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-purple-700 to-indigo-700 h-2 rounded-full shadow-lg"
                  initial={{ width: "0%" }}
                  animate={{ width: "94%" }}
                  transition={{ duration: 1.5, delay: 2.5 }}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white px-6 py-2 rounded-xl shadow-lg shadow-purple-500/30">
              Execute Trade
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-purple-500/40 text-purple-300 hover:bg-purple-700/20 px-6 py-2 rounded-xl bg-transparent"
            >
              Adjust Strategy
            </Button>
          </motion.div>
        </div>

        <div className="text-right">
          <div className="text-white/70 text-xs">Next Analysis</div>
          <div className="text-purple-300 text-sm font-light">2 minutes</div>
        </div>
      </div>
    </div>
  )
}