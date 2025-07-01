"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import TestimonialsSection from "@/components/testimonial"
import FeaturedInSection from "@/components/featured"
import HowItWorksSection from "@/components/howitworks"
import FeaturesSection from "@/components/featuresection"
import MissionSection from "@/components/missionsection"
import FAQSection from "@/components/faqsection"



export default function HomePage() {


  return (
    <div className="min-h-screen relative">
      {/* Cosmic Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url(/cosmic-background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/90 via-purple-900/80 to-indigo-950/90" />
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <Hero />
        {/* Featured In Section */}
        <FeaturedInSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Mission Statement Section */}
        <MissionSection />

        {/* FAQ Section */}
        <FAQSection />

        <Footer />
      </div>
    </div>
  )
}













