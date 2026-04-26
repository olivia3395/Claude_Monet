import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Heart, X, ExternalLink } from 'lucide-react';
import { MONET_PAINTINGS, CHRONOLOGY } from './data';
import { Painting } from './data';

const gridGradients = [
  "from-[#F27D26] to-[#E4E3E0]",
  "from-[#7DA67D] to-[#8FBFE0]",
  "from-[#D4AF37] to-[#F7F3E9]",
  "from-[#4B5EAA] to-[#E2C2D6]"
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'chronology' | 'technique' | 'giverny' | 'works' | 'favorites'>('gallery');
  const [activeId, setActiveId] = useState('water-lilies');
  const activePainting = MONET_PAINTINGS.find(p => p.id === activeId) || MONET_PAINTINGS[0];
  
  const collection = MONET_PAINTINGS.filter(p => p.id !== activeId).slice(0, 4);

  // Advanced features state
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'year-asc' | 'year-desc'>('default');
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('monet-favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [lightboxPainting, setLightboxPainting] = useState<Painting | null>(null);

  // Persist favorites
  useEffect(() => {
    localStorage.setItem('monet-favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Derived state for works
  const filteredWorks = useMemo(() => {
    let result = MONET_PAINTINGS;
    if (searchQuery) {
      const lowerQ = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(lowerQ) || 
        p.year.includes(lowerQ) || 
        p.location?.toLowerCase().includes(lowerQ)
      );
    }
    if (sortBy === 'year-asc') result = [...result].sort((a, b) => parseInt(a.year) - parseInt(b.year));
    else if (sortBy === 'year-desc') result = [...result].sort((a, b) => parseInt(b.year) - parseInt(a.year));
    return result;
  }, [searchQuery, sortBy]);

  const favoriteWorks = MONET_PAINTINGS.filter(p => favorites.includes(p.id));

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setFavorites(prev => prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-[#F7F3E9] text-[#2D3142] font-sans flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="w-full px-6 md:px-10 py-6 flex justify-between items-center border-b border-[#E5E0D5]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#7DA67D] rounded-full flex items-center justify-center text-white font-serif text-xl leading-none pt-0.5">M</div>
          <span className="text-xl md:text-2xl font-serif italic tracking-tight text-[#4B5EAA]">Claude Monet Digital Museum</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-[#666] items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('gallery'); }} className={`${activeTab === 'gallery' ? 'text-[#4B5EAA] border-b border-[#4B5EAA]' : 'hover:text-[#4B5EAA]'} transition-colors`}>Gallery</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('works'); }} className={`${activeTab === 'works' ? 'text-[#4B5EAA] border-b border-[#4B5EAA]' : 'hover:text-[#4B5EAA]'} transition-colors`}>Works</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('chronology'); }} className={`${activeTab === 'chronology' ? 'text-[#4B5EAA] border-b border-[#4B5EAA]' : 'hover:text-[#4B5EAA]'} transition-colors`}>Chronology</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('technique'); }} className={`${activeTab === 'technique' ? 'text-[#4B5EAA] border-b border-[#4B5EAA]' : 'hover:text-[#4B5EAA]'} transition-colors`}>Technique</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('giverny'); }} className={`${activeTab === 'giverny' ? 'text-[#4B5EAA] border-b border-[#4B5EAA]' : 'hover:text-[#4B5EAA]'} transition-colors`}>Giverny</a>
          
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('favorites'); }} className={`${activeTab === 'favorites' ? 'text-[#F27D26]' : 'hover:text-[#F27D26]'} transition-colors flex items-center gap-2 ml-4`}>
            <Heart size={16} fill={activeTab === 'favorites' ? 'currentColor' : 'none'} />
            <span className="hidden lg:inline">Collection</span>
          </a>
        </div>
      </nav>

      {/* Main Content Split */}
      {activeTab === 'gallery' && (
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* Left: Featured Artwork View */}
        <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col gap-6 md:overflow-y-auto xl:justify-center">
          <div className="relative flex-1 bg-white p-4 shadow-2xl md:rotate-1 group min-h-[350px] md:min-h-[500px] flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePainting.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full relative overflow-hidden flex-1 bg-[#E5E0D5]"
              >
                <img 
                  src={activePainting.image} 
                  alt={activePainting.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-[1.03]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white drop-shadow-md">
                   <h2 className="text-3xl md:text-4xl font-serif italic mb-1">{activePainting.title.split('(')[0].trim()}</h2>
                   <p className="text-base opacity-90">Oil on canvas, {activePainting.year}</p>
                 </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end md:h-32 gap-6 xl:gap-8 pt-4 pb-2 shrink-0">
            <div className="max-w-md">
              <p className="text-sm text-[#888] uppercase tracking-tighter mb-2 font-bold">Analysis & Context</p>
              <p className="text-[#444] leading-relaxed text-sm italic font-serif">
                "I followed my instincts, that's all. I have only the merit of having painted directly from nature, trying to convey my impressions before the most fleeting effects."
              </p>
            </div>
            <div className="flex gap-2 pb-1">
              <div className="w-8 h-8 rounded-full bg-[#8FBFE0] border-2 border-[#F7F3E9] shadow-sm"></div>
              <div className="w-8 h-8 rounded-full bg-[#7DA67D] border-2 border-[#F7F3E9] shadow-sm"></div>
              <div className="w-8 h-8 rounded-full bg-[#E2C2D6] border-2 border-[#F7F3E9] shadow-sm"></div>
              <div className="w-8 h-8 rounded-full bg-[#D4AF37] border-2 border-[#F7F3E9] shadow-sm"></div>
            </div>
          </div>
        </div>

        {/* Right: Details and Browse */}
        <div className="w-full md:w-2/5 bg-[#EDE8DE] p-6 md:p-10 border-t md:border-t-0 md:border-l border-[#E5E0D5] flex flex-col gap-8 md:overflow-y-auto">
          
          {/* Detailed Info */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#A89F91] mb-4">The Masterpiece</h3>
            <h1 className="text-3xl lg:text-4xl font-serif text-[#2D3142] mb-4 tracking-tight">
              {activePainting.id === 'water-lilies' ? 'Lumière et Couleur' : activePainting.title.split('(')[0].trim()}
            </h1>
            <p className="text-[#555] text-sm leading-relaxed mb-6 font-medium">
              {activePainting.description}
            </p>
            <button 
              onClick={() => setActiveTab('technique')}
              className="px-6 py-3 bg-[#4B5EAA] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#3a4a8c] transition-colors"
            >
              Explore Techniques
            </button>
          </section>

          {/* Thumbnail Navigation */}
          <section className="flex-1 flex flex-col font-sans">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#A89F91] mb-4">More from the Collection</h3>
            <div className="grid grid-cols-2 gap-4 flex-1">
              {collection.map((item, idx) => (
                <div 
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className="relative group overflow-hidden rounded-lg bg-[#DCD6C8] aspect-[4/3] flex items-center justify-center cursor-pointer border-2 border-transparent hover:border-[#4B5EAA] transition-colors"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:opacity-30 transition-opacity duration-300" 
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${gridGradients[idx % 4]} opacity-[0.85]`}></div>
                  <span className="relative z-10 text-[10px] font-bold uppercase text-[#2D3142] tracking-[0.1em] text-center px-4 leading-snug">
                    {item.title.split('(')[0].trim()}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Footer Micro-nav */}
          <div className="pt-4 border-t border-[#DCD6C8] flex justify-between items-center mt-auto">
            <span className="text-[10px] text-[#A89F91] font-bold tracking-widest">CURATED BY MUSEUM D'ORSAY</span>
            <div className="flex gap-4">
              <div className="w-4 h-4 bg-[#A89F91] rounded-full opacity-60"></div>
              <div className="w-4 h-4 bg-[#A89F91] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Chronology Content */}
      {activeTab === 'chronology' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -10 }}
          className="flex-1 overflow-y-auto w-full"
        >
          <div className="max-w-4xl mx-auto p-8 md:p-16">
            <h1 className="text-4xl lg:text-5xl font-serif text-[#2D3142] mb-12 tracking-tight italic">Life & Legacy</h1>
            
            <div className="relative border-l-2 border-[#DCD6C8] ml-4 md:ml-8 pl-8 md:pl-12 space-y-16 pb-12">
              {CHRONOLOGY.map((event, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#F7F3E9] border-4 border-[#7DA67D] z-10 group-hover:bg-[#7DA67D] transition-colors duration-300"></div>
                  <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-[#E5E0D5] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7DA67D] to-transparent opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    <span className="text-[#4B5EAA] font-bold tracking-widest text-sm md:text-base uppercase mb-2 block">{event.year}</span>
                    <h3 className="text-2xl font-serif text-[#2D3142] mb-3 leading-tight">{event.title}</h3>
                    <p className="text-[#555] leading-relaxed text-sm md:text-base">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Technique Content */}
      {activeTab === 'technique' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -10 }}
          className="flex-1 overflow-y-auto w-full"
        >
          <div className="max-w-4xl mx-auto p-8 md:p-16">
            <h1 className="text-4xl lg:text-5xl font-serif text-[#2D3142] mb-12 tracking-tight italic">The Pioneer of Impressionism</h1>
            
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-[#E5E0D5] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#8FBFE0] to-[#E2C2D6] opacity-10 rounded-full translate-x-1/3 -translate-y-1/3 blur-2xl"></div>
              
              <div className="prose prose-stone max-w-none relative z-10">
                <p className="text-[#555] text-lg leading-relaxed mb-6 font-serif italic">
                  Claude Monet (1840–1926) was a French painter and the visionary founder of Impressionism, widely recognized as a key precursor to modernism. His lifelong ambition was to paint nature exactly as he perceived it, making him the most consistent and prolific practitioner of plein air (outdoor) landscape painting.
                </p>

                <h3 className="text-2xl font-serif text-[#4B5EAA] mt-10 mb-4">The Birth of a Movement</h3>
                <p className="text-[#444] leading-relaxed mb-6">
                  The very term "Impressionism" was derived from the title of his groundbreaking masterpiece, <strong>Impression, Sunrise</strong>, exhibited in 1874. This movement boldly departed from the rigid constraints of traditional academic painting, choosing instead to focus on capturing the immediate, fleeting effects of light and color on the canvas.
                </p>

                <h3 className="text-2xl font-serif text-[#4B5EAA] mt-10 mb-4">Mastering Light and Season</h3>
                <p className="text-[#444] leading-relaxed mb-8">
                  Monet’s unyielding desire to document the ephemeral qualities of the French countryside led to his signature method: painting the exact same scene repeatedly across different times of day and seasons. This obsessive study of light is immortalized in his iconic series of Haystacks, Rouen Cathedral, and the magnificent Water Lilies that occupied the final two decades of his life at Giverny.
                </p>

                <div className="mt-12 pt-8 border-t border-[#E5E0D5] text-center">
                  <p className="text-[#666] text-sm uppercase tracking-widest mb-4 font-bold">Discover More About His Artistic Approach</p>
                  <a 
                    href="https://en.wikipedia.org/wiki/Claude_Monet#Impressionism" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-[#7DA67D] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#6b916b] shadow-md hover:shadow-lg transition-all"
                  >
                    View Detailed Techniques
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Giverny Content */}
      {activeTab === 'giverny' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -10 }}
          className="flex-1 overflow-y-auto w-full"
        >
          <div className="max-w-4xl mx-auto p-8 md:p-16">
            <h1 className="text-4xl lg:text-5xl font-serif text-[#2D3142] mb-12 tracking-tight italic">Monet's Living Canvas</h1>
            
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-[#E5E0D5] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#7DA67D] to-[#D4AF37] opacity-10 rounded-full translate-x-1/4 -translate-y-1/4 blur-2xl"></div>
              
              <div className="prose prose-stone max-w-none relative z-10">
                <p className="text-[#555] text-lg leading-relaxed mb-6 font-serif italic border-l-4 border-[#7DA67D] pl-6">
                  "My garden is my most beautiful masterpiece."
                </p>

                <h3 className="text-2xl font-serif text-[#7DA67D] mt-10 mb-4">A Sanctuary of Color</h3>
                <p className="text-[#444] leading-relaxed mb-6">
                  In 1883, Claude Monet discovered the village of Giverny in Normandy. Captivated by the tranquil landscape, he settled there and gradually transformed the property into a magnificent botanical oasis. This garden would become his exclusive sanctuary and his greatest source of artistic inspiration for the last forty years of his life.
                </p>

                <h3 className="text-2xl font-serif text-[#7DA67D] mt-10 mb-4">The Clos Normand and The Water Garden</h3>
                <p className="text-[#444] leading-relaxed mb-8">
                  Monet designed his estate with a painter's eye, composing the environment exactly as he would a canvas. The property is divided into two distinct parts: the <strong>Clos Normand</strong>, a dazzling flower garden full of perspective, symmetries, and vibrant colors; and the Japanese-inspired <strong>Water Garden</strong>, featuring the iconic green footbridge, weeping willows, and the legendary water lilies (Nymphéas) that he painted obsessively until his final days.
                </p>

                <div className="mt-12 pt-8 border-t border-[#E5E0D5] text-center">
                  <p className="text-[#666] text-sm uppercase tracking-widest mb-4 font-bold">Plan Your Visit to Giverny</p>
                  <a 
                    href="https://claudemonetgiverny.fr/en/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-[#7DA67D] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#6b916b] shadow-md hover:shadow-lg transition-all"
                  >
                    Visit the Fondation Claude Monet
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Works Content */}
      {activeTab === 'works' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -10 }}
          className="flex-1 overflow-y-auto w-full"
        >
          <div className="max-w-7xl mx-auto p-6 md:p-12 lg:p-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <h1 className="text-4xl lg:text-5xl font-serif text-[#2D3142] tracking-tight italic">Complete Works</h1>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A89F91]" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search paintings..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5E0D5] rounded-full text-sm font-sans focus:outline-none focus:border-[#4B5EAA] transition-colors shadow-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <span className="text-[10px] uppercase font-bold text-[#A89F91] tracking-widest whitespace-nowrap">Sort By</span>
                  <select 
                    className="bg-transparent border-b border-[#A89F91] text-sm text-[#444] pb-1 focus:outline-none font-sans cursor-pointer flex-1 sm:flex-none"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                  >
                    <option value="default">Featured</option>
                    <option value="year-asc">Oldest First</option>
                    <option value="year-desc">Newest First</option>
                  </select>
                </div>
              </div>
            </div>
            
            {filteredWorks.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#A89F91] text-lg font-serif italic">No paintings found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-12">
                {filteredWorks.map((painting) => (
                  <div key={painting.id} onClick={() => setLightboxPainting(painting)} className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-[#E5E0D5] cursor-pointer relative">
                    <button 
                      onClick={(e) => toggleFavorite(e, painting.id)} 
                      className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#A89F91] hover:text-[#F27D26] hover:scale-110 transition-all shadow-sm"
                    >
                      <Heart size={16} fill={favorites.includes(painting.id) ? "#F27D26" : "none"} color={favorites.includes(painting.id) ? "#F27D26" : "currentColor"} />
                    </button>
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#F4F1ED]">
                      <img src={painting.image} alt={painting.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-2">
                         <span className="text-[#4B5EAA] font-bold tracking-widest text-xs uppercase">{painting.year}</span>
                      </div>
                      <h3 className="text-xl font-serif text-[#2D3142] mb-3 leading-tight group-hover:text-[#4B5EAA] transition-colors">{painting.title}</h3>
                      <p className="text-[#666] text-sm mb-4 line-clamp-3 w-full flex-grow">
                        {painting.description}
                      </p>
                      <div className="border-t border-[#E5E0D5] pt-4 mt-auto">
                        <p className="text-xs text-[#888] mb-3">{painting.location}</p>
                        {painting.museumLink && (
                          <a 
                            href={painting.museumLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#7DA67D] hover:text-[#5a7d5a] transition-colors"
                          >
                            View in Museum
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Favorites Tab Content */}
    {activeTab === 'favorites' && (
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -10 }}
        className="flex-1 overflow-y-auto w-full bg-[#F7F3E9]"
      >
        <div className="max-w-7xl mx-auto p-6 md:p-12 lg:p-16 pt-8">
          <h1 className="text-4xl lg:text-5xl font-serif text-[#2D3142] mb-12 tracking-tight italic flex items-center gap-4">
            <Heart className="text-[#F27D26]" size={40} fill="#F27D26" /> My Collection
          </h1>
          
          {favoriteWorks.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl border border-[#E5E0D5] shadow-sm max-w-2xl mx-auto">
              <Heart className="mx-auto text-[#E5E0D5] mb-6" size={64} />
              <h3 className="text-2xl font-serif text-[#2D3142] mb-4">Your collection is empty</h3>
              <p className="text-[#888] mb-8 max-w-md mx-auto">Browse the complete works and click the heart icon to save your favorite Monet paintings here.</p>
              <button 
                onClick={() => setActiveTab('works')}
                className="px-8 py-3 bg-[#4B5EAA] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#3a4a8c] transition-colors"
              >
                Browse Works
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-12">
              {favoriteWorks.map((painting) => (
                <div key={painting.id} onClick={() => setLightboxPainting(painting)} className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E5E0D5] cursor-pointer relative">
                  <button onClick={(e) => toggleFavorite(e, painting.id)} className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-sm text-[#F27D26]">
                    <Heart size={16} fill="#F27D26" color="#F27D26" />
                  </button>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F4F1ED]">
                    <img src={painting.image} alt={painting.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="p-6 pb-8 flex flex-col flex-1">
                    <div className="mb-2">
                       <span className="text-[#4B5EAA] font-bold tracking-widest text-xs uppercase">{painting.year}</span>
                    </div>
                    <h3 className="text-xl font-serif text-[#2D3142] leading-tight group-hover:text-[#4B5EAA] transition-colors">{painting.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    )}

    {/* Global Footer */}
    <footer className="w-full py-4 shrink-0 bg-[#F7F3E9] border-t border-[#E5E0D5] text-center z-50">
      <p className="text-xs text-[#888] font-medium tracking-wide">
        &copy; Copyright Yuyao Wang | <a href="mailto:yuyaow@bu.edu" className="hover:text-[#4B5EAA] transition-colors">yuyaow@bu.edu</a>
      </p>
    </footer>

    {/* Fullscreen Lightbox Modal */}
    <AnimatePresence>
      {lightboxPainting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10"
          onClick={() => setLightboxPainting(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-white/10 p-3 rounded-full z-[110] backdrop-blur-sm"
            onClick={() => setLightboxPainting(null)}
          >
            <X size={24} />
          </button>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-7xl max-h-[90vh] flex flex-col md:flex-row items-center gap-8 md:gap-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 w-full flex justify-center items-center overflow-hidden h-[40vh] md:h-[85vh]">
              <img 
                src={lightboxPainting.image} 
                alt={lightboxPainting.title}
                className="max-w-full max-h-full object-contain shadow-2xl drop-shadow-2xl"
              />
            </div>
            
            <div className="w-full md:w-80 lg:w-96 flex-shrink-0 text-white flex flex-col max-h-[40vh] md:max-h-[85vh] overflow-y-auto pr-4 custom-scrollbar">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl md:text-4xl font-serif italic pr-4">{lightboxPainting.title}</h2>
                <button onClick={(e) => toggleFavorite(e, lightboxPainting.id)} className="mt-2 flex-shrink-0 text-[#F27D26] hover:scale-110 transition-transform">
                  <Heart size={24} fill={favorites.includes(lightboxPainting.id) ? "currentColor" : "none"} />
                </button>
              </div>
              
              <div className="flex flex-col gap-3 mb-8 text-white/70 text-sm font-sans tracking-wide">
                <div className="flex"><span className="font-bold text-white/50 uppercase text-[10px] tracking-widest w-20">Year</span> <span>{lightboxPainting.year}</span></div>
                {lightboxPainting.dimensions && <div className="flex"><span className="font-bold text-white/50 uppercase text-[10px] tracking-widest w-20">Size</span> <span>{lightboxPainting.dimensions}</span></div>}
                {lightboxPainting.location && <div className="flex"><span className="font-bold text-white/50 uppercase text-[10px] tracking-widest w-20">Location</span> <span className="flex-1">{lightboxPainting.location}</span></div>}
              </div>
              
              <p className="text-white/80 text-sm leading-relaxed mb-10">
                {lightboxPainting.description}
              </p>
              
              {lightboxPainting.museumLink && (
                 <a 
                   href={lightboxPainting.museumLink} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all w-full text-center border border-white/20 mt-auto"
                 >
                   View in Museum Collection <ExternalLink size={14} />
                 </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  );
}
