import React, { useState } from 'react';
import { Menu, X, ArrowRight, CheckCircle, Mail, Phone, MapPin, Instagram, Linkedin, Facebook, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const whatsappNumber = "6281327510494"; // Ganti dengan nomor WhatsApp yang sebenarnya
  
  const handleWhatsAppClick = (message = "Halo, saya tertarik dengan layanan arsitektur dan desain. Bisa konsultasi?") => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handlePackageSelect = (packageName: string, price: string) => {
    const message = `Halo, saya tertarik dengan paket "${packageName}" (${price}). Bisa konsultasi lebih lanjut?`;
    handleWhatsAppClick(message);
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const visibleItems = portfolioItems.slice(0, showAllProjects ? portfolioItems.length : 6);
    const currentIndex = visibleItems.findIndex(item => item.id === portfolioItems[selectedImage].id);
    
    if (direction === 'prev') {
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : visibleItems.length - 1;
      const prevItemId = visibleItems[prevIndex].id;
      setSelectedImage(portfolioItems.findIndex(item => item.id === prevItemId));
    } else {
      const nextIndex = currentIndex < visibleItems.length - 1 ? currentIndex + 1 : 0;
      const nextItemId = visibleItems[nextIndex].id;
      setSelectedImage(portfolioItems.findIndex(item => item.id === nextItemId));
    }
  };

  const packages = [
    {
      name: "Konsultasi Desain",
      price: "Rp 5.000.000",
      duration: "14-16 minggu",
      description: "Paket konsultasi untuk perencanaan awal dan konsep desain",
      features: [
        "Konsultasi awal 2x pertemuan",
        "Sketsa konsep dasar",
        "Analisis site dan kebutuhan",
        "Rekomendasi material",
        "Estimasi biaya konstruksi"
      ]
    },
    {
      name: "Desain Lengkap",
      price: "Rp 6.000.000",
      duration: "14-16 minggu",
      description: "Paket desain lengkap dari konsep hingga gambar kerja",
      features: [
        "Semua fitur paket Konsultasi",
        "Gambar kerja lengkap (RAB)",
        "Gambar 3D rendering",
        "Gambar detail konstruksi",
        "Spesifikasi teknis material",
        "Revisi hingga 3x"
      ],
      popular: true
    },
    {
      name: "Build & Design",
      price: "Rp 7.500.000",
      duration: "8-12 minggu",
      description: "Paket lengkap desain plus pengawasan konstruksi",
      features: [
        "Semua fitur paket Desain Lengkap",
        "Pengawasan konstruksi",
        "Koordinasi dengan kontraktor",
        "Quality control material",
        "Laporan progress mingguan",
        "Garansi hasil 1 tahun"
      ]
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Villa Modern Minimalis",
      category: "Residential",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Desain villa modern dengan konsep minimalis dan sustainable"
    },
    {
      id: 2,
      title: "Kantor Corporate",
      category: "Commercial",
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Bangunan perkantoran dengan desain kontemporer"
    },
    {
      id: 3,
      title: "Rumah Tropis Modern",
      category: "Residential",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Hunian keluarga dengan sentuhan tropis modern"
    },
    {
      id: 4,
      title: "Café Industrial",
      category: "Commercial",
      image: "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Interior café dengan konsep industrial chic"
    },
    {
      id: 5,
      title: "Townhouse Kontemporer",
      category: "Residential",
      image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Desain townhouse dengan material natural"
    },
    {
      id: 6,
      title: "Hotel Boutique",
      category: "Hospitality",
      image: "https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Hotel boutique dengan desain eksklusif"
    },
    {
      id: 7,
      title: "Apartemen Luxury",
      category: "Residential",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Desain interior apartemen mewah dengan konsep modern"
    },
    {
      id: 8,
      title: "Restoran Fine Dining",
      category: "Commercial",
      image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Interior restoran fine dining dengan suasana elegan"
    },
    {
      id: 9,
      title: "Rumah Minimalis",
      category: "Residential",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Hunian minimalis dengan konsep open space"
    },
    {
      id: 10,
      title: "Coworking Space",
      category: "Commercial",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Desain coworking space yang inspiratif dan produktif"
    },
    {
      id: 11,
      title: "Villa Pantai",
      category: "Residential",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Villa tepi pantai dengan pemandangan laut yang menakjubkan"
    },
    {
      id: 12,
      title: "Spa & Wellness Center",
      category: "Hospitality",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Desain spa dengan konsep zen dan relaksasi"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-800">INDOSITEK</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-800 transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-blue-800 transition-colors">Tentang</a>
              <a href="#services" className="text-gray-700 hover:text-blue-800 transition-colors">Layanan</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-800 transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-800 transition-colors">Kontak</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-800 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-blue-800 transition-colors">Beranda</a>
                <a href="#about" className="text-gray-700 hover:text-blue-800 transition-colors">Tentang</a>
                <a href="#services" className="text-gray-700 hover:text-blue-800 transition-colors">Layanan</a>
                <a href="#portfolio" className="text-gray-700 hover:text-blue-800 transition-colors">Portfolio</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-800 transition-colors">Kontak</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Wujudkan <span className="text-blue-800">Arsitektur</span> Impian Anda
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Jasa arsitektur dan desain profesional untuk hunian, komersial, dan industri. 
                Dari konsep hingga realisasi dengan standar internasional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => handleWhatsAppClick()}
                  className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors flex items-center justify-center gap-2"
                >
                  Konsultasi Gratis
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => handleWhatsAppClick("Halo, saya ingin melihat semua portfolio proyek arsitektur dan design yang pernah dikerjakan. Bisa kirimkan detailnya?")}
                  className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-lg hover:bg-blue-800 hover:text-white transition-colors"
                >
                  Lihat Portfolio
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern Architecture"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dengan pengalaman lebih dari 10 tahun, kami telah melayani ratusan klien 
              dengan berbagai proyek arsitektur dan desain interior.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">150+ Proyek</h3>
              <p className="text-gray-600">Telah menyelesaikan berbagai jenis proyek dari hunian hingga komersial</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tim Profesional</h3>
              <p className="text-gray-600">Arsitek dan desainer bersertifikat dengan pengalaman internasional</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Garansi Kualitas</h3>
              <p className="text-gray-600">Komitmen terhadap kualitas dengan garansi dan after-sales service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Packages Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Paket Layanan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih paket layanan yang sesuai dengan kebutuhan proyek Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  pkg.popular ? 'border-2 border-yellow-400 transform scale-105' : 'border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Paling Populer
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-blue-800 mb-1">{pkg.price}</div>
                  <div className="text-gray-500">{pkg.duration}</div>
                </div>
                
                <p className="text-gray-600 mb-6 text-center">{pkg.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => handlePackageSelect(pkg.name, pkg.price)}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  pkg.popular
                    ? 'bg-blue-800 text-white hover:bg-blue-900'
                    : 'border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white'
                }`}
                >
                  Pilih Paket
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lihat berbagai proyek yang telah kami kerjakan dengan standar kualitas terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.slice(0, showAllProjects ? portfolioItems.length : 6).map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div 
                  className="relative overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(portfolioItems.findIndex(p => p.id === item.id))}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-gray-900 font-medium">
                      Klik untuk memperbesar
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors"
            >
              {showAllProjects ? 'Tampilkan Lebih Sedikit' : 'Lihat Semua Proyek'}
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Image Container */}
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <img
                src={portfolioItems[selectedImage].image}
                alt={portfolioItems[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full">
                <div className="text-center">
                  <h3 className="font-semibold text-lg">{portfolioItems[selectedImage].title}</h3>
                  <p className="text-sm opacity-90">{portfolioItems[selectedImage].category}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10"
            onClick={closeLightbox}
          />
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Hubungi Kami</h2>
              <p className="text-xl text-gray-300 mb-8">
                Siap memulai proyek arsitektur impian Anda? Mari diskusikan kebutuhan Anda dengan tim profesional kami.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-yellow-400" />
                  <span>+62 856-0173-6639</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-yellow-400" />
                  <span>info@indositek.co.id</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                  <span>Jl. Raya Berbah, Sendangtirto, Berbah, Sleman, Daerah Istimewa Yogyakarta</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-2xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                    placeholder="Masukkan email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Jenis Proyek</label>
                  <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white">
                    <option>Pilih jenis proyek</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Hospitality</option>
                    <option>Industrial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Pesan</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                    placeholder="Ceritakan tentang proyek Anda"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-4">Indositek</div>
            <p className="text-gray-400">
              © 2024 Indositek. Semua hak cipta dilindungi undang-undang.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => handleWhatsAppClick()}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat via WhatsApp
        </span>
      </button>
    </div>
  );
}

export default App;