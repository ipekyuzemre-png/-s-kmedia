import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Target, 
  PenTool, 
  TrendingUp, 
  CheckCircle2, 
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  BarChart3,
  Users,
  Eye,
  Mail,
  Phone
} from 'lucide-react';

const Instagram = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const Facebook = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Linkedin = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const WhatsAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const DiamondLogo = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <rect x="5.5" y="5.5" width="13" height="13" transform="rotate(45 12 12)" />
  </svg>
);

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop', alt: 'Creative agency teamwork' },
    { src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop', alt: 'Social media management on phone' },
    { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop', alt: 'Data analysis and marketing metrics' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const website = e.target.website.value;
    const service = e.target.service.value;
    const budget = e.target.budget.value;
    
    const text = `Merhaba, ben ${name}.
${website} hesabı/sitesi için size ulaşıyorum.
İlgilendiğim hizmet: ${service}
Aylık tahmini bütçem: ${budget}

Bu konuda detaylı bilgi ve analiz alabilir miyim?`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/905346380363?text=${encodedText}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd]">
      {/* Premium Floating Navigation */}
      {/* Premium Floating Navigation */}
      <nav className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${isScrolled ? 'top-4 md:top-6 w-[95%] md:w-[75%] max-w-4xl bg-white/80 backdrop-blur-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 rounded-full py-3 px-4 md:px-6' : 'top-4 md:top-8 w-[95%] md:w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3 md:py-5 bg-white/5 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border border-white/10 md:border-transparent rounded-full md:rounded-none'}`}>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2 md:gap-3 pl-1 md:pl-2">
            <div className="flex items-center justify-center">
              <DiamondLogo className="w-6 h-6 md:w-8 md:h-8 text-[#3b82f6]" />
            </div>
            <span className={`font-extrabold text-lg md:text-2xl tracking-tighter transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>Işık<span className="text-brand-500 font-light">Media</span></span>
          </div>
          
          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center space-x-1 transition-all ${isScrolled ? '' : 'bg-white/5 backdrop-blur-md px-3 py-2 rounded-full border border-white/10 shadow-sm'}`}>
            {[
              { name: 'Hizmetler', href: '#hizmetler' },
              { name: 'Neden Biz?', href: '#neden-biz' },
              { name: 'Paketler', href: '#paketler' }
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className={`relative text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 group ${isScrolled ? 'text-slate-600 hover:text-brand-600' : 'text-slate-300 hover:text-white'}`}
              >
                {item.name}
                <span className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 ${isScrolled ? 'bg-brand-500' : 'bg-white'}`}></span>
              </a>
            ))}
          </div>

          <div className="hidden md:block pr-2">
            <a href="https://wa.me/905346380363?text=Merhaba%2C%20sosyal%20medya%20y%C3%B6netimi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noreferrer" className={`transition-all duration-300 py-3 px-7 rounded-full text-sm font-bold shadow-lg hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 ${isScrolled ? 'bg-slate-900 hover:bg-brand-500 text-white shadow-slate-900/20 hover:shadow-brand-500/30' : 'bg-white text-slate-900 hover:bg-brand-50 hover:text-brand-600 shadow-white/10'}`}>Ücretsiz Analiz</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white'}`}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
            />
            {/* Menu Dropdown */}
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className={`md:hidden fixed top-[4.5rem] left-4 right-4 z-50 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] overflow-hidden border ${isScrolled ? 'bg-white/95 backdrop-blur-3xl border-slate-200/50' : 'bg-[#0a0f1c]/95 backdrop-blur-3xl border-white/10'}`}
            >
              <div className="flex flex-col p-6 space-y-2">
                {[
                  { name: 'Hizmetler', href: '#hizmetler' },
                  { name: 'Neden Biz?', href: '#neden-biz' },
                  { name: 'Paketler', href: '#paketler' }
                ].map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    onClick={() => setMobileMenuOpen(false)} 
                    className={`text-lg font-medium p-3 rounded-2xl transition-all text-center ${isScrolled ? 'text-slate-600 hover:bg-slate-50 hover:text-slate-900' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
                  >
                    {item.name}
                  </a>
                ))}
                <div className={`pt-4 mt-2 border-t ${isScrolled ? 'border-slate-100' : 'border-white/10'}`}>
                  <a href="https://wa.me/905346380363?text=Merhaba%2C%20sosyal%20medya%20y%C3%B6netimi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)} className={`block w-full mx-auto py-3.5 px-6 text-center rounded-full text-sm font-bold shadow-lg hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 transition-all duration-300 ${isScrolled ? 'bg-slate-900 hover:bg-brand-500 text-white shadow-slate-900/20 hover:shadow-brand-500/30' : 'bg-white text-slate-900 hover:bg-brand-50 hover:text-brand-600 shadow-white/10'}`}>
                    Ücretsiz Analiz Al
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Editorial / Magazine Style Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 bg-slate-900 z-0">
          <img src={heroSlides[0].src} alt="Creative Agency" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80" />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-between py-32 px-4 max-w-6xl mx-auto min-h-screen">
            
            {/* Top Minimal Line Element */}
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="w-full flex items-center justify-center gap-4 mt-8 md:mt-0 opacity-90">
              <div className="h-px bg-white/40 flex-1 max-w-[60px] md:max-w-[120px]"></div>
              <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase whitespace-nowrap">IŞIK MEDİA</span>
              <div className="h-px bg-white/40 flex-1 max-w-[60px] md:max-w-[120px]"></div>
            </motion.div>

            {/* Main Typography */}
            <div className="flex-1 flex flex-col items-center justify-center w-full mt-10 md:mt-0">
              <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] text-white tracking-tighter leading-[1.05] mb-6 md:mb-8 font-normal">
                Sadece Beğeni Değil,<br/>
                Ciro Büyütüyoruz.
              </motion.h1>
              <motion.p variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="text-white/80 text-base md:text-xl lg:text-2xl font-light max-w-2xl px-4">
                Diyarbakır'ın yeni nesil sosyal medya ajansıyla dijital standartlarınızı baştan yaratın.
              </motion.p>
            </div>

            {/* Bottom Outline Button */}
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="mb-4 md:mb-0 mt-10 md:mt-0">
              <a href="https://wa.me/905346380363?text=Merhaba%2C%20sosyal%20medya%20y%C3%B6netimi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noreferrer" className="inline-block border border-white/60 text-white px-8 md:px-12 py-4 md:py-5 uppercase tracking-[0.2em] text-xs md:text-sm font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-500">
                ÜCRETSİZ ANALİZ İSTE
              </a>
            </motion.div>
          </div>
      </section>
      {/* Services Section */}
      <section id="hizmetler" className="py-24 bg-[#fcfcfd] relative">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-100 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6 tracking-tight leading-tight">Size Nasıl Yardımcı <br className="hidden md:block"/>Olabiliriz?</h2>
            <p className="text-xl text-slate-600 font-light">Dijital dünyada iz bırakmak için ihtiyacınız olan her şey tek bir yerde. Sadece paylaşımlarla değil, tamamen dönüşüm odaklı stratejilerle büyüyoruz.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: Target, title: "Meta Reklam Stratejileri", desc: "Facebook ve Instagram reklamları ile nokta atışı hedef kitleye ulaşıp ROAS değerlerinizi artırıyoruz.", image: "/service-1.jpg" },
              { icon: Rocket, title: "Sosyal Medya Yönetimi", desc: "Profilinizi profesyonelce yönetiyor, etkileşimi yüksek ve marka kimliğinize uygun bir vitrin oluşturuyoruz.", image: "/service-2.jpg" },
              { icon: PenTool, title: "Özgün İçerik Üretimi", desc: "Kopya içeriklerden uzak, tamamen markanızın diline uygun yaratıcı post ve reels içerikleri hazırlıyoruz.", image: "/service-3.jpg" },
              { icon: TrendingUp, title: "Dönüşüm Optimizasyonu", desc: "Gelen trafiğin boşa gitmemesi için hunileri (funnel) optimize ediyor, leads ve satışları artırıyoruz.", image: "/service-4.jpg" },
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="service-card group cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-slate-200/60"
              >
                <img src={service.image} alt={service.title} />
                <div className="service-card-content">
                  <div className="service-icon-wrapper text-white group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 tracking-tight">{service.title}</h3>
                  <p className="service-desc text-slate-200 text-sm leading-relaxed font-light">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section - Split Banner Layout (Dark) */}
      <section id="neden-biz" className="relative min-h-[70vh] flex items-center bg-[#0a0f1c] py-24 md:py-32 overflow-hidden">
        
        {/* Background Image with Dark Fade */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Agency Office" className="absolute right-0 top-0 w-full lg:w-2/3 h-full object-cover opacity-20 md:opacity-40 mix-blend-overlay" />
          {/* Gradient to fade left to the solid background color */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1c] via-[#0a0f1c]/95 lg:via-[#0a0f1c]/80 to-transparent"></div>
          {/* Top and bottom gradients for smooth blending if needed */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0f1c] to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0f1c] to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl">
            
            {/* Logo/Header Tag */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-3 mb-10">
              <DiamondLogo className="w-6 h-6 text-[#3b82f6] shrink-0" />
              <span className="text-white font-bold tracking-[0.2em] uppercase text-sm">IŞIK MEDİA</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-5xl md:text-[4rem] font-serif font-bold text-white mb-6 tracking-tighter leading-[1.1]">
              Size özel benzersiz <br className="hidden md:block"/>
              dijital çözümler
            </motion.h2>

            {/* Paragraph */}
            <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10">
              İster etkileşim arıyor, ister satış, ister ciro hedefliyor olun, her adımda size yardımcı olmak için buradayız. Hedefimiz size sadece beğeni kazandırmak değil, kalıcı bir büyüme sağlamaktır.
            </motion.p>

            {/* Button */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <a href="#hizmetler" className="inline-block bg-[#6366f1] hover:bg-[#4f46e5] text-white px-10 py-4 font-semibold text-sm tracking-wide transition-colors duration-300">
                Hizmetlerimiz
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Premium Pricing Section */}
      <section id="paketler" className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Mesh & Dots */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px]"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-brand-100/50 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-indigo-100/50 to-transparent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6 tracking-tight leading-tight">Şeffaf ve Esnek Paketler</h2>
            <p className="text-xl text-slate-600 font-light">İhtiyacınıza ve hedeflerinize en uygun büyüme planını seçin. Gizli maliyet yok, sadece sonuç odaklı stratejiler.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto items-center">
            {[
              {
                name: "Başlangıç",
                desc: "Yeni başlayan markalar için temel görünürlük.",
                features: ["Haftalık 3 Post Tasarımı", "Temel Profil Optimizasyonu", "Aylık İçerik Takvimi", "Standart Hikaye Yönetimi"],
                popular: false
              },
              {
                name: "Büyüme",
                desc: "Satışlarını ve bilinirliğini katlamak isteyenler için.",
                features: ["Haftalık 5 Post & Reels", "Meta Reklam Yönetimi", "Hedef Kitle Analizi", "Dönüşüm Odaklı Strateji", "Detaylı Aylık Raporlama"],
                popular: true
              },
              {
                name: "Premium",
                desc: "Sektöründe lider olmak isteyenler için 360° yönetim.",
                features: ["Her Gün İçerik & Reels", "Agresif Reklam Stratejileri", "Profesyonel Video Kurgu", "Topluluk Yönetimi (Mesaj/Yorum)", "Özel Hesap Yöneticisi", "Haftalık Strateji Toplantısı"],
                popular: false
              }
            ].map((pkg, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`relative group h-full ${pkg.popular ? 'md:-mt-6 md:mb-6 z-20' : 'z-10'}`}
              >
                {/* Outer Glow for Popular */}
                {pkg.popular && (
                  <div className="absolute -inset-[1px] bg-gradient-to-b from-brand-500 via-indigo-500 to-transparent rounded-[2.1rem] opacity-100 shadow-[0_0_40px_rgba(79,70,229,0.15)]"></div>
                )}
                
                <div className={`relative h-full flex flex-col p-8 lg:p-10 rounded-[2rem] transition-transform duration-500 ${pkg.popular ? 'bg-white/95 backdrop-blur-3xl shadow-2xl shadow-indigo-900/5' : 'bg-white/60 backdrop-blur-2xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1'}`}>
                  
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg shadow-slate-900/20 whitespace-nowrap">
                      En Çok Tercih Edilen
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className={`text-2xl font-bold tracking-tight mb-2 ${pkg.popular ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600' : 'text-slate-900'}`}>{pkg.name}</h3>
                    <p className="text-slate-500 h-10 text-sm leading-relaxed">{pkg.desc}</p>
                  </div>

                  <div className="border-t border-slate-100 pt-8 mb-10 flex-1">
                    <ul className="space-y-4">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className={`mt-1 shrink-0 w-4 h-4 rounded-full flex items-center justify-center mr-3 ${pkg.popular ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-400'}`}>
                            <CheckCircle2 className="w-3 h-3" />
                          </div>
                          <span className={`text-sm font-medium ${pkg.popular ? 'text-slate-800' : 'text-slate-600'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href="https://wa.me/905346380363?text=Merhaba%2C%20sosyal%20medya%20y%C3%B6netimi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noreferrer" className={`group/btn w-full inline-flex items-center justify-center gap-2 transition-all duration-300 ${pkg.popular ? 'bg-slate-900 text-white hover:bg-brand-600 hover:shadow-[0_10px_20px_rgba(59,130,246,0.3)] py-4 rounded-full text-base font-semibold' : 'bg-white border border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50 py-4 rounded-full text-base font-semibold shadow-sm'}`}>
                    Fiyat Teklifi Al
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${pkg.popular ? 'group-hover/btn:translate-x-1' : ''}`} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Lead Generation */}
      <section id="iletisim" className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Decorative BG elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-5/12 text-white">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight leading-tight">Markanız İçin <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-400">Ücretsiz Analiz</span> İsteyin.</h2>
                <p className="text-slate-300 text-lg mb-10 leading-relaxed font-light">
                  Sosyal medya hesaplarınızı detaylıca inceleyelim, rakiplerinizi analiz edelim ve potansiyelinizi ortaya çıkaracak size özel bir yol haritası sunalım. Tamamen ücretsiz.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-5 group cursor-pointer">
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-500 group-hover:border-brand-500 transition-all duration-300 shadow-[0_0_0_rgba(59,130,246,0)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                      <Mail className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1 font-medium tracking-wide uppercase">E-Posta Adresimiz</div>
                      <a href="mailto:hello@isikmedia.com" className="text-xl font-semibold text-white group-hover:text-brand-300 transition-colors">hello@isikmedia.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-5 group cursor-pointer">
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-500 group-hover:border-brand-500 transition-all duration-300 shadow-[0_0_0_rgba(59,130,246,0)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                      <WhatsAppIcon className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1 font-medium tracking-wide uppercase">Hızlı İletişim (WhatsApp)</div>
                      <a href="https://wa.me/905346380363?text=Merhaba%2C%20sosyal%20medya%20y%C3%B6netimi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." className="text-xl font-semibold text-white group-hover:text-brand-300 transition-colors">+90 (534) 638 03 63</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-7/12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-full blur-3xl"></div>
                
                <form id="iletisim" className="space-y-6 relative z-10" onSubmit={handleFormSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input type="text" id="name" name="name" required className="peer w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-transparent focus:border-brand-400 focus:bg-white/10 outline-none transition-all" placeholder="Adınız Soyadınız" />
                      <label htmlFor="name" className="absolute left-5 -top-2.5 bg-slate-900 px-1 text-sm text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-brand-400">Ad Soyad</label>
                    </div>
                    <div className="relative group">
                      <input type="text" id="website" name="website" required className="peer w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-transparent focus:border-brand-400 focus:bg-white/10 outline-none transition-all" placeholder="Web Siteniz" />
                      <label htmlFor="website" className="absolute left-5 -top-2.5 bg-slate-900 px-1 text-sm text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-brand-400">Web Sitesi / Instagram</label>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <select id="service" name="service" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-brand-400 focus:bg-white/10 outline-none transition-all appearance-none cursor-pointer">
                      <option value="" disabled selected hidden>İlgilendiğiniz Hizmeti Seçin</option>
                      <option value="Sosyal Medya Yönetimi" className="bg-slate-800 text-white">Sosyal Medya Yönetimi</option>
                      <option value="Meta (Instagram/FB) Reklamları" className="bg-slate-800 text-white">Meta (Instagram/FB) Reklamları</option>
                      <option value="Büyüme Danışmanlığı (Strateji)" className="bg-slate-800 text-white">Büyüme Danışmanlığı (Strateji)</option>
                      <option value="Tam Kapsamlı Paket (Yönetim + Reklam)" className="bg-slate-800 text-white">Tam Kapsamlı Paket (Yönetim + Reklam)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none text-slate-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <select id="budget" name="budget" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-brand-400 focus:bg-white/10 outline-none transition-all appearance-none cursor-pointer">
                      <option value="" disabled selected hidden>Aylık Tahmini Reklam Bütçeniz</option>
                      <option value="Henüz Belirsiz" className="bg-slate-800 text-white">Henüz Belirsiz</option>
                      <option value="10.000 TL - 25.000 TL" className="bg-slate-800 text-white">10.000 TL - 25.000 TL</option>
                      <option value="25.000 TL - 50.000 TL" className="bg-slate-800 text-white">25.000 TL - 50.000 TL</option>
                      <option value="50.000 TL ve Üzeri" className="bg-slate-800 text-white">50.000 TL ve Üzeri</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none text-slate-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                  
                  <button type="submit" className="w-full bg-gradient-to-r from-brand-500 to-indigo-600 hover:from-brand-400 hover:to-indigo-500 text-white font-bold text-lg py-5 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                    <span>Hemen Başvur</span>
                    <Rocket className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                  
                  <p className="text-sm text-center text-slate-500 font-light flex items-center justify-center gap-2 mt-4">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Bilgileriniz tamamen gizli tutulmaktadır.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* Phone Button */}
        <a 
          href="tel:+905346380363" 
          className="bg-slate-900 text-white p-4 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)] transition-all duration-300 flex items-center justify-center group border border-white/10"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-white text-slate-900 text-sm font-bold py-2.5 px-4 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all translate-x-4 group-hover:translate-x-0 whitespace-nowrap">
            Bizi Arayın
          </span>
        </a>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/905346380363?text=Merhaba%2C%20sosyal%20medya%20y%C3%B6netimi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." 
          target="_blank" 
          rel="noreferrer"
          className="bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white p-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)] transition-all duration-300 flex items-center justify-center group"
        >
          <WhatsAppIcon className="w-8 h-8" />
          <span className="absolute right-full mr-4 bg-white text-slate-900 text-sm font-bold py-2.5 px-4 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all translate-x-4 group-hover:translate-x-0 whitespace-nowrap">
            WhatsApp'tan Yazın
          </span>
        </a>
      </div>

      {/* Premium Footer */}
      <footer className="bg-[#0a0f1c] text-slate-400 py-16 border-t border-white/5 relative overflow-hidden">
        {/* Giant Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none whitespace-nowrap">
          IŞIKMEDIA
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 text-white mb-6">
                <div className="flex items-center justify-center">
                  <DiamondLogo className="w-8 h-8 text-[#3b82f6]" />
                </div>
                <span className="font-extrabold text-2xl tracking-tighter">Işık<span className="text-brand-500">Media</span></span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8 leading-relaxed font-light">
                Markanızı dijitalde geleceğe taşıyan, performans odaklı yeni nesil büyüme ajansı.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all duration-300 group"><Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all duration-300 group"><Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all duration-300 group"><Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Hizmetlerimiz</h4>
              <ul className="space-y-4 font-light">
                <li><a href="#" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>Meta Reklamları</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>Sosyal Medya Yönetimi</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>İçerik Üretimi (Reels)</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>Büyüme Danışmanlığı</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Kurumsal</h4>
              <ul className="space-y-4 font-light">
                <li><a href="#neden-biz" className="hover:text-brand-400 transition-colors">Hakkımızda</a></li>
                <li><a href="#paketler" className="hover:text-brand-400 transition-colors">Paketler & Fiyatlar</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">KVKK Aydınlatma Metni</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Çerez Politikası</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light">
            <p>&copy; {new Date().getFullYear()} IşıkMedia Ajans. Tüm hakları saklıdır.</p>
            <p className="flex items-center gap-1">Designed with <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-500"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" /></svg> by IşıkMedia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
