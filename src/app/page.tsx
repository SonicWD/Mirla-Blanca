'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPizzaSlice, FaUtensils, FaCocktail } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { StarIcon, MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -100])
  const y2 = useTransform(scrollY, [0, 300], [0, 100])

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image src="/logo.png" alt="Mirla Blanca Trattoria" width={100} height={50} className="w-auto h-12" />
          <div className="flex space-x-6">
            <Link href="#menu" className="hover:text-yellow-500 transition-colors">Menú</Link>
            <Link href="#ubicacion" className="hover:text-yellow-500 transition-colors">Ubicación</Link>
            <Link href="#reviews" className="hover:text-yellow-500 transition-colors">Reseñas</Link>
            <Link href="#contacto" className="hover:text-yellow-500 transition-colors">Contacto</Link>
          </div>
        </div>
      </nav>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Header */}
      <header className="h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl font-bold mb-4">Mirla Blanca Trattoria</h1>
          <p className="text-2xl mb-8">Bar & Tradición</p>
          <div className="flex justify-center space-x-8">
            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <FaPizzaSlice size={48} className="mx-auto mb-2 text-yellow-500" />
              <p>Pizzas</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <FaUtensils size={48} className="mx-auto mb-2 text-yellow-500" />
              <p>Pastas</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <FaCocktail size={48} className="mx-auto mb-2 text-yellow-500" />
              <p>Cócteles</p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          style={{ y: y1 }}
          className="absolute top-0 left-0 w-full h-full bg-[url('/bg-1.jpg')] bg-cover bg-center opacity-50"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-0 left-0 w-full h-full bg-[url('/bg-2.jpg')] bg-cover bg-center opacity-30"
        />
      </header>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Nuestro Menú</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <Image src="/pizza.jpg" alt="Pizza" width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Pizzas</h3>
                <p className="text-gray-300">Deliciosas pizzas artesanales con los mejores ingredientes.</p>
                <button className="mt-4 bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-600 transition-colors">
                  Ver Menú
                </button>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <Image src="/pasta.jpg" alt="Pasta" width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Pastas</h3>
                <p className="text-gray-300">Pastas frescas preparadas al momento con salsas tradicionales.</p>
                <button className="mt-4 bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-600 transition-colors">
                  Ver Menú
                </button>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <Image src="/cocktail.jpg" alt="Cóctel" width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Cócteles</h3>
                <p className="text-gray-300">Cócteles creativos y clásicos preparados por nuestros expertos bartenders.</p>
                <button className="mt-4 bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-600 transition-colors">
                  Ver Menú
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="ubicacion" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Ubicación</h2>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 mb-8 md:mb-0"
            >
              <Image src="/map.jpg" alt="Mapa" width={600} height={400} className="rounded-lg shadow-lg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 md:pl-8"
            >
              <h3 className="text-2xl font-semibold mb-4">Visítanos</h3>
              <p className="text-gray-300 mb-4">
                Estamos ubicados en el corazón de la ciudad, rodeados de la mejor atmósfera y ambiente.
              </p>
              <div className="flex items-center mb-2">
                <MapPinIcon className="h-6 w-6 text-yellow-500 mr-2" />
                <p>Calle Principal 123, Ciudad</p>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-yellow-500 mr-2" />
                <p>+1 234 567 890</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-800" ref={ref}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Reseñas de Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-700 rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Image src={`/avatar-${index + 1}.jpg`} alt="Avatar" width={50} height={50} className="rounded-full mr-4" />
                  <div>
                    <h3 className="font-semibold">Cliente Satisfecho</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">
                  {'Una experiencia culinaria sapa increíble. La comida es deliciosa y el ambiente es perfecto para una noche especial.'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Contáctanos</h2>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 mb-8 md:mb-0"
            >
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
                />
                <textarea
                  placeholder="Mensaje"
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
                ></textarea>
                <button className="bg-yellow-500 text-gray-900 px-6 py-2 rounded hover:bg-yellow-600 transition-colors">
                  Enviar Mensaje
                </button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 md:pl-8"
            >
              <h3 className="text-2xl font-semibold mb-4">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <PhoneIcon className="h-6 w-6 text-yellow-500 mr-2" />
                  <p>+1 234 567 890</p>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="h-6 w-6 text-yellow-500 mr-2" />
                  <p>info@mirlablanca.com</p>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="h-6 w-6 text-yellow-500 mr-2" />
                  <p>Calle Principal 123, Ciudad</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Mirla Blanca Trattoria-bar&Tradicion. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}