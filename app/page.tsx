"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Settings, Zap, Mail, Phone, MapPin, CheckCircle } from "lucide-react"

export default function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleOrderNow = (productName: string, price: string) => {
    alert(`Thank you for your interest in ${productName}! 
    
Price: ${price}
    
Our sales team will contact you shortly to complete your pre-order. 
    
For immediate assistance, please call us at +1 (555) 123-4567 or email info@plantey.com`)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/images/plantey-logo.png" alt="Plantey Logo" width={60} height={60} className="h-12 w-auto" />
            <span className="text-2xl font-bold text-green-600">Plantey</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer"
            >
              About
            </button>
          </nav>
          <Button onClick={() => scrollToSection("contact")} className="bg-green-600 hover:bg-green-700 text-white">
            Contact
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The Future Of Smart And Sustainable Agriculture
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover smart, sustainable plant care — built for homes, labs, and farms.
              Plantey combines technology, empathy, and innovation to help every plant thrive.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("products")}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-200"
              >
                Explore Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Innovative solutions designed to revolutionize your agricultural practices with cutting-edge technology
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="flex justify-center gap-6 max-w-2xl mx-auto items-start">
            {/* Plantey Pet */}
            <Card className="group border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden bg-white relative h-full flex flex-col">
              <div className="absolute top-3 right-3 z-10">
                <Badge className="bg-green-600 text-white text-xs">Best Seller</Badge>
              </div>
              <div className="relative h-32 bg-gradient-to-br from-green-100 via-green-200 to-green-300 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=300"
                  alt="Plantey Pet - Smart Plant Care Device"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent"></div>
              </div>
              <CardHeader className="text-center pb-2 relative">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 -mt-6 relative z-10 border-3 border-white shadow-md">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 mb-1">Plantey Pet</CardTitle>
                <CardDescription className="text-xs text-gray-600">
                  Smart plant care companion for optimal growth monitoring
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center px-1 pb-4 flex-1 flex flex-col">
                <div className="space-y-1 mb-2 flex-1">
                  {[
                    "Real-time plant health monitoring",
                    "Automated watering system",
                    "Mobile app integration",
                    "Weather-resistant design",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-left text-gray-600 text-xs">
                      <CheckCircle className="w-2 h-2 text-green-600 mr-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
                  <div className="text-2xl font-bold text-green-600 mb-1">$299</div>
                  <Button
                    onClick={() => handleOrderNow("Plantey Pet", "$299")}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-2 text-sm font-semibold transform hover:scale-105 transition-all duration-200"
                  >
                    Pre-Order
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Plantey Logy */}
            <Card className="group border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden bg-white relative h-full flex flex-col">
              <div className="absolute top-3 right-3 z-10">
                <Badge variant="outline" className="border-blue-600 text-blue-600 text-xs">
                  Professional
                </Badge>
              </div>
              <div className="relative h-32 bg-gradient-to-br from-blue-100 via-blue-200 to-green-200 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=300"
                  alt="Plantey Logy - Data Logging System"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
              </div>
              <CardHeader className="text-center pb-2 relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 -mt-6 relative z-10 border-3 border-white shadow-md">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 mb-1">Plantey Logy</CardTitle>
                <CardDescription className="text-xs text-gray-600">
                  Advanced data logging system for comprehensive farm analytics
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center px-1 pb-4 flex-1 flex flex-col">
                <div className="space-y-1 mb-2 flex-1">
                  {[
                    "Comprehensive data collection",
                    "Cloud-based analytics",
                    "Customizable reporting",
                    "Multi-sensor compatibility",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-left text-gray-600 text-xs">
                      <CheckCircle className="w-2 h-2 text-green-600 mr-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
                  <div className="text-2xl font-bold text-green-600 mb-1">$599</div>
                  <Button
                    onClick={() => handleOrderNow("Plantey Logy", "$599")}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-2 text-sm font-semibold transform hover:scale-105 transition-all duration-200"
                  >
                    Pre-Order
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Auto Plantey */}
            <Card className="group border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden bg-white relative h-full flex flex-col">
              <div className="absolute top-3 right-3 z-10">
                <Badge className="bg-yellow-600 text-white text-xs">Premium</Badge>
              </div>
              <div className="relative h-32 bg-gradient-to-br from-yellow-100 via-orange-200 to-green-200 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=300"
                  alt="Auto Plantey - Automated Farming Solution"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/20 to-transparent"></div>
              </div>
              <CardHeader className="text-center pb-2 relative">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 -mt-6 relative z-10 border-3 border-white shadow-md">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 mb-1">Auto Plantey</CardTitle>
                <CardDescription className="text-xs text-gray-600">
                  Fully automated farming solution with AI-powered optimization
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center px-1 pb-4 flex-1 flex flex-col">
                <div className="space-y-1 mb-2 flex-1">
                  {[
                    "AI-powered automation",
                    "Complete farm management",
                    "Predictive maintenance",
                    "24/7 remote monitoring",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-left text-gray-600 text-xs">
                      <CheckCircle className="w-2 h-2 text-green-600 mr-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
                  <div className="text-2xl font-bold text-green-600 mb-1">$1,299</div>
                  <Button
                    onClick={() => handleOrderNow("Auto Plantey", "$1,299")}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-2 text-sm font-semibold transform hover:scale-105 transition-all duration-200"
                  >
                    Pre-Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional CTA Section */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6 text-lg">Need help choosing the right product for your farm?</p>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg"
            >
              Get Expert Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">About Plantey</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
             At Plantey, we're redefining how people care for plants — through data, empathy, and smart technology.Born from a passion for sustainability and innovation.<br>We believe plants deserve more than just water — they deserve understanding.<br>Backed by sensor technology, data analytics, and an intuitive app, Plantey is building the future of smart and sustainable agriculture, one pot at a time.<br>Let PLANTEY grow with you.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">Ready to transform your farming experience? Contact us today!</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">info@plantey.com</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">123 Agriculture St, Farm City</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image src="/images/plantey-logo.png" alt="Plantey Logo" width={40} height={40} className="h-10 w-auto" />
              <span className="text-xl font-bold">Plantey</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 Plantey. All rights reserved.</p>
              <p className="text-gray-400 text-sm mt-1">Smart Agriculture Solutions</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
