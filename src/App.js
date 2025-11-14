import React, { useState, useEffect } from 'react';
import { newsItems, newsCategories, getNewsByCategory } from './data/newsData';
import { publications, getPublicationYears, getFeaturedPublications } from './data/publicationsData';
import { 
  graduateStudents, 
  ugStudents, 
  pets,
} from './data/peopleData';
import { Calendar, Users, BookOpen, Microscope, Award, FileText,
   Github, Twitter, Linkedin, GraduationCap, Beaker, Mail, Phone, 
   MapPin, ExternalLink, Download, ChevronLeft, ChevronRight, Clock, ArrowRight, Menu, X } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';


const MinimalSidebarApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Reset mobile menu state when resizing to desktop
  // (On desktop, sidebar is always visible via CSS, this just cleans up the mobile state)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false); // Reset mobile menu state
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial size
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar when page changes on mobile
  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  // Sidebar Component with mobile responsiveness
  const Sidebar = () => (
    <>
      {/* Mobile menu button - only visible on small screens */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-gray-900 text-white p-3 rounded-lg shadow-lg hover:bg-gray-800 transition-colors"
        aria-label="Toggle menu"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Mobile overlay - only appears when sidebar is open on mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
      
      {/* Sidebar - responsive behavior */}
      <div className={`
        fixed left-0 top-0 h-full w-64 bg-gray-900 text-white p-8 z-50
        transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        {/* 
          Mobile: controlled by sidebarOpen state (slides in/out)
          Desktop: always visible (md:translate-x-0 overrides the state)
        */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2">STEVENSON GROUP</h2>
          <p className="text-gray-400 text-sm">Quantum Sensing at the Nanoscale</p>
        </div>
        
        <nav className="space-y-4">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'research', label: 'Research' },
            { id: 'publications', label: 'Publications' },
            { id: 'team', label: 'Team' },
            { id: 'news', label: 'News' },
            { id: 'resources', label: 'Resources' },
            { id: 'contact', label: 'Contact' }
          ].map(item => (
            <a
              key={item.id}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(item.id);
              }}
              className={`block py-2 px-4 transition-colors ${
                currentPage === item.id
                  ? 'bg-gray-800 text-white border-l-4 border-yellow-500' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <div className="absolute bottom-8 left-8 right-8">
          <p className="text-xs text-gray-500">© 2025 Stevenson Lab</p>
        </div>
      </div>
    </>
  );

const HomePage = () => (
  <div>
    {/* Hero Section with responsive padding and text */}
    <section className="min-h-screen flex items-center px-8 md:px-12 lg:px-16 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      {/* Subtle background image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ 
          backgroundImage: `url("${process.env.PUBLIC_URL}/images/hero/spin_laser-01.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      {/* Content with responsive text sizes */}
      <div className="max-w-4xl relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
          Shining Light on
          <span className="font-bold block mt-2">Single Spins</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
          We are an interdisciplinary quantum sensing laboratory developing cutting-edge technologies 
          to probe matter at the atomic scale, spanning applications in chemistry, physics, biology, 
          and materials science.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          <button 
            onClick={() => handlePageChange('research')}
            className="text-lg md:text-xl text-gray-900 font-semibold hover:underline"
          >
            Explore Research →
          </button>
          <button 
            onClick={() => handlePageChange('publications')}
            className="text-lg md:text-xl text-gray-900 font-semibold hover:underline"
          >
            Recent Publications →
          </button>
        </div>
      </div>
    </section>
  </div>
);

  // Image Carousel Component with responsive height
const ImageCarousel = () => {
  const images = [
    { src: `${process.env.PUBLIC_URL}/images/research/tirf.jpg`, alt: 'NV fluorescence' },
    { src: `${process.env.PUBLIC_URL}/images/research/lasers.jpg`, alt: 'Laser setup' },
    { src: `${process.env.PUBLIC_URL}/images/research/acid.jpeg`, alt: 'Triacid cleaning' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Optional: Auto-advance
  useEffect(() => {
    const interval = setInterval(goToNext, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 group">
      {/* Main image display */}
      <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
        <div 
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Previous button */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

  // About Page with responsive layout
  const AboutPage = () => (
    <div className="px-8 py-8 md:px-12 md:py-10 lg:px-16 lg:py-12">
      <div className="max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-8">About Us</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            The Stevenson group was established in 2021 to develop new quantum sensing approaches using solid state spins, and
            use these techniques to answer outstanding questions in chemistry, biology, and magnetism. 
          </p>

          <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">The NV Center</h2>
              {/* Two-column layout - stack on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Left column - Text */}
                <div>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                    Our primary tool is the nitrogen vacancy (NV) center in diamond. This system has some remarkable properties, 
                    including long <b>room temperature spin coherence</b> and <b>spin-dependent fluorescence</b>, enabling us to optically read 
                    out the spin state of the NV center and how it interacts with magnetic fields and other spin states.
                  </p>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                    For a more comprehensive overview of the NV center and its applications in quantum sensing, quantum communication,
                    and quantum computing, check out this review in <b><a href="https://www.nature.com/articles/s42254-021-00283-9" className="text-yellow-600 hover:underline">Nature Reviews Physics</a></b>.
                  </p>
                </div>
                
                {/* Right column - Image */}
                <div>
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/research/NVpicture.png`} 
                    alt="NV Center in Diamond Lattice"
                    className="w-full rounded-lg"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      e.target.src = 'https://via.placeholder.com/500x400?text=NV+Center+Diagram';
                    }}
                  />
                  <p className="text-xs md:text-sm text-black-500 text-center mt-3 italic">
                    Nitrogen vacancy (NV) centers are fluorescent, S=1, defects in the diamond lattice 
                    consisting of a nitrogen atom adjacent to a vacant site.
                  </p>
                </div>
              </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Our Approach</h2>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Left side - Text content */}
              <div className="flex-1 space-y-4">
                  <p className="text-base md:text-lg text-gray-600">The research problems we tackle lie at the intersection of many 
                    distinct fields, so the techniques we use are equally diverse, spanning optics, microwave engineering,
                    materials science, chemistry, and biology. </p>

                    <p className="text-base md:text-lg text-gray-600">Our group develops new instrumentation approaches - for example, total internal reflection (TIRF) geometries
                     - to enable biocompatible quantum sensing experiments. We also develop new approaches to integrating quantum sensors into complex
                     materials systems to probe magnetism with new levels of sensitivity and spatial resolution.</p>

                    <p className="text-base md:text-lg text-gray-600">These new techniques allow us to probe nanoscale dynamics in a wide range of systems, from aptamers to antiferromagnets. 
                      Learn more about our research <button 
            onClick={() => handlePageChange('research')} className="text-yellow-600 font-semibold hover:underline">here</button>.</p>
              </div>
              
              {/* Right side - Image Carousel */}
              <div className="flex-1 max-w-md mx-auto lg:mx-0">
                <ImageCarousel />
              </div>
            </div>
          </section>
          <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Support</h2>
                          <div>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                              Our work is supported by the Air Force Office of Scientific Research (AFOSR) and the National Institutes of Health (NIH).
                            </p>
                          </div>
                      </section>
        </div>
      </div>
    </div>
  );

  // Research Page with responsive layout
const ResearchPage = () => {
  const [selectedResearch, setSelectedResearch] = useState(0); // Track which research area is selected

  const researchAreas = [
    {
      number: "01",
      title: "Magnetism at the Nanoscale",
      desc: "Using single spins as quantum sensors to detect magnetic fields with unprecedented sensitivity and spatial resolution.",
      detailedContent: {
        overview: "We explore exotic magnetic phenomena that emerge at the nanoscale, from noncolinear magnetic textures to propagating spin waves. Using nitrogen-vacancy centers in diamond as atomic-scale magnetometers, we image magnetic dynamics in real-time and probe materials complex spin textures.",
        sections: [
          {
            heading: "Spin Wave Dynamics",
            text: "Spin waves (magnons) are promising carriers of information and energy for next generation technologies: we are interested in understanding how they propagate and interact with their surrounding magnetic structure. Using the imaging capabilities of NV centers, we explore the relationship between spin waves, magnetic texture, and material properties.",
            image: `${process.env.PUBLIC_URL}/images/research/spinwaves.png`
          },
          {
            heading: "Complex Magnetic Textures",
            text: "The first step in understanding and manipulating magnetic ordering in complex systems is visualizing it. We use quantum sensors integrated to scanning tips to explore magnetism on length scales below the optical diffraction limit, such as the cycloid ordering in multiferroic BiFeO3. The unique sensitivity of the NV center allows us to see even the small fields generated by antiferromagnets.",
            image: `${process.env.PUBLIC_URL}/images/research/cycloid_knot.png`
          }
        ]
      }
    },
    {
      number: "02",
      title: "Spin-Dependent Processes in Biology & Chemistry",
      desc: "Detecting and characterizing single molecules using quantum sensors, pushing the boundaries of analytical chemistry.",
      detailedContent: {
        overview: "New tools enable new insights; we use the unique capabilities offered by quantum sensors to probe spin-dependent processes in chemistry and biology, like the suprisingly spin-dependent electron transport through chiral molecules.",
        sections: [
          {
            heading: "Chirality-Induced Spin Selectivity",
            text: "Electron transport through chiral molecules - like proteins - can be remarkably spin selective, a phenomenon known as chirality-induced spin selectivity (CISS). We use NV centers to study how molecular structure and environment influence CISS, with implications for spintronics and bioelectronics.",
            image: `${process.env.PUBLIC_URL}/images/research/ciss.png`
          },
        ]
      }
    },
    {
      number: "03",
      title: "Biophysics Across Scales",
      desc: "Combining fluorescence measurements and quantum sensing techniques to study biological processes across length scales: from molecules to microns.",
      detailedContent: {
        overview: "We develop new experimental approaches to explore how biophysical processes - like membrane dynamics and protein folding - occur across length scales, from single molecules to large ensembles. By combining quantum sensing with fluorescence techniques, we can access new information about these complex systems.",
        sections: [
          {
            heading: "Scale-dependent membrane dynamics",
            text: "How fast does a lipid move? The answer to that depends on how you look. We develop new fluorescence assays to probe membrane dynamics across length scales, revealing how processes like molecular crowding and phase separation influence lipid diffusion. Extending these approaches to quantum sensors will allow us to access smaller-still length scales.",
            image: `${process.env.PUBLIC_URL}/images/research/frap.png`
          },
          {
            heading: "Nanoscale magnetic resonance",
            text: "Coming soon!",
            image: `${process.env.PUBLIC_URL}/images/research/protein-dynamics.jpg`
          }
        ]
      }
    }
  ];

  return (
    <div className="px-8 py-8 md:px-12 md:py-10 lg:px-16 lg:py-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-12">Research Focus</h1>
      
      {/* Research Areas Grid - responsive columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
        {researchAreas.map((item, i) => (
          <div 
            key={i} 
            className={`group cursor-pointer transition-all ${
              selectedResearch === i ? 'transform scale-105' : 'hover:transform hover:scale-102'
            }`}
            onClick={() => setSelectedResearch(i)}
          >
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-4">
              <div className={`text-5xl md:text-6xl font-bold transition-colors ${
                selectedResearch === i ? 'text-yellow-500' : 'text-gray-200'
              }`}>
                {item.number}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                <button className={`mt-4 font-semibold transition-colors text-sm md:text-base ${
                  selectedResearch === i ? 'text-yellow-600' : 'text-gray-500 hover:text-yellow-600'
                }`}>
                  {selectedResearch === i ? 'Currently viewing ↓' : 'Learn more →'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-12"></div>

      {/* Detailed View Section */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
            {researchAreas[selectedResearch].title}
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {researchAreas[selectedResearch].detailedContent.overview}
          </p>
        </div>

        {/* Detailed Content Sections - responsive flex direction */}
        <div className="space-y-12">
          {researchAreas[selectedResearch].detailedContent.sections.map((section, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  {section.heading}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {section.text}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 w-full lg:max-w-md">
                <img 
                  src={section.image} 
                  alt={section.heading}
                  className="w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.target.src = `https://via.placeholder.com/500x300?text=${section.heading.replace(/ /g, '+')}`;
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Related Publications or Additional Info */}
        <div className="mt-16 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
            Recent Publications in {researchAreas[selectedResearch].title}
          </h3>
          <p className="text-sm md:text-base text-gray-600">
            See our <button 
              onClick={() => handlePageChange('publications')} 
              className="text-yellow-600 hover:underline"
            >
              publications page
            </button> for recent papers in this area.
          </p>
        </div>
      </div>
    </div>
  );
};

// Publications Page with responsive layout
  const PublicationsPage = () => {
    // Publications data is imported at the top of the file
    
    const [selectedYear, setSelectedYear] = useState("all");
    const [selectedType, setSelectedType] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    // Get unique years from publications
    const years = ["all", "2025", "2024", "2023", "2022", "2021"];
    
    // Filter publications based on selected filters
    const filteredPublications = publications.filter(pub => {
      const matchesYear = selectedYear === "all" || pub.year.toString() === selectedYear || 
                          (selectedYear === "preprints" && pub.year === "Preprint");
      const matchesType = selectedType === "all" || pub.type === selectedType;
      const matchesSearch = searchQuery === "" || 
                            pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            pub.journal.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesYear && matchesType && matchesSearch;
    });

    // Sort publications by year (newest first), then by ID
    const sortedPublications = filteredPublications.sort((a, b) => {
      if (a.year === "Preprint" && b.year !== "Preprint") return -1;
      if (b.year === "Preprint" && a.year !== "Preprint") return 1;
      if (a.year !== b.year) return b.year - a.year;
      return b.id - a.id;
    });

    // Group publications by year for display
    const groupedPublications = sortedPublications.reduce((groups, pub) => {
      const year = pub.year;
      if (!groups[year]) groups[year] = [];
      groups[year].push(pub);
      return groups;
    }, {});

    // Determine border color based on publication type or impact
    const getBorderColor = (pub) => {
      if (pub.featured) return "border-yellow-500";
      if (pub.type === "news-views") return "border-purple-500";
      if (pub.type === "preprint") return "border-blue-500";
      if (pub.journal === "Nature" || pub.journal === "Science") return "border-red-500";
      return "border-yellow-500";
    };

    return (
      <div className="px-8 py-8 md:px-12 md:py-10 lg:px-16 lg:py-12">
        {/* Header and Filters */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6">Publications</h1>
          
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
            />
          </div>

          {/* Filter Buttons - responsive wrap */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="flex flex-wrap gap-2">
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-3 py-1.5 md:px-4 md:py-2 rounded transition-colors text-sm md:text-base ${
                    selectedYear === year 
                      ? "bg-yellow-600 text-white" 
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {year === "all" ? "All Years" : year}
                </button>
              ))}
            </div>
            
            <div className="text-xs md:text-sm text-gray-600">
              {filteredPublications.length} publication{filteredPublications.length !== 1 ? 's' : ''} found
            </div>
          </div>

          {/* Type Filter - responsive */}
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => setSelectedType("all")}
              className={`px-2 py-1 md:px-3 text-xs md:text-sm rounded ${
                selectedType === "all" ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All Types
            </button>
            <button
              onClick={() => setSelectedType("article")}
              className={`px-2 py-1 md:px-3 text-xs md:text-sm rounded ${
                selectedType === "article" ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Articles
            </button>
            <button
              onClick={() => setSelectedType("preprint")}
              className={`px-2 py-1 md:px-3 text-xs md:text-sm rounded ${
                selectedType === "preprint" ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Preprints
            </button>
            <button
              onClick={() => setSelectedType("news-views")}
              className={`px-2 py-1 md:px-3 text-xs md:text-sm rounded ${
                selectedType === "news-views" ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              News & Views
            </button>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-8">
          {Object.keys(groupedPublications).sort((a, b) => {
            if (a === "Preprint") return -1;
            if (b === "Preprint") return 1;
            return b - a;
          }).map(year => (
            <div key={year}>
              {/* Year Header */}
              <h2 className="text-xl md:text-2xl font-light text-gray-700 mb-4 pb-2 border-b border-gray-200">
                {year}
              </h2>
              
              {/* Publications for this year - responsive padding */}
              <div className="space-y-4">
                {groupedPublications[year].map(pub => (
                  <div key={pub.id} className={`bg-white p-4 md:p-6 border-l-4 ${getBorderColor(pub)} hover:shadow-lg transition-shadow`}>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                          {pub.title}
                        </h3>
                        
                        <p className="text-sm md:text-base text-gray-600 mb-2">
                          {pub.authors}
                        </p>
                        
                        <p className="text-sm md:text-base text-gray-800 font-medium mb-3">
                          <span className="italic">{pub.journal}</span>
                          {pub.volume && `, ${pub.volume}`}
                          {pub.pages && `, ${pub.pages}`}
                          {pub.year !== "Preprint" && ` (${pub.year})`}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm">
                          {pub.doi && (
                            <a href={pub.link} className="text-yellow-600 hover:underline" target="_blank" rel="noopener noreferrer">
                              DOI: {pub.doi}
                            </a>
                          )}
                          {pub.arxiv && (
                            <a href={pub.link} className="text-yellow-600 hover:underline" target="_blank" rel="noopener noreferrer">
                              arXiv: {pub.arxiv}
                            </a>
                          )}
                          {pub.link && !pub.doi && !pub.arxiv && (
                            <a href={pub.link} className="text-yellow-600 hover:underline" target="_blank" rel="noopener noreferrer">
                              View Paper
                            </a>
                          )}
                          <button className="text-yellow-600 hover:underline">
                            BibTeX
                          </button>
                        </div>
                        
                        {/* Special badges */}
                        <div className="flex gap-2 mt-3">
                          {pub.featured && (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                              Featured
                            </span>
                          )}
                          {pub.correspondingAuthor && (
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                              Corresponding Author
                            </span>
                          )}
                          {pub.highlight && (
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                              {pub.highlight}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredPublications.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No publications found matching your criteria.
          </div>
        )}
      </div>
    );
  };

  // Team Page with responsive grid
  const TeamPage = () => (
    <div className="px-8 py-8 md:px-12 md:py-10 lg:px-16 lg:py-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-12">Our Team</h1>
      
      {/* Principal Investigator - responsive layout */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">Principal Investigator</h2>
        <div className="bg-white p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">
          <img 
          src={`${process.env.PUBLIC_URL}/images/team/pi/NUheadshot.jpg`} 
            alt="Dr. Stevenson"
            className="w-full md:w-60 h-auto md:h-90 object-cover rounded-lg"
          />
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              Paul Stevenson
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-4">Assistant Professor<br />
            Department of Physics, 
            Northeastern University</p>
            <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
              PhD, Massachusetts Institute of Technology (2017)<br />
              M. Chem, University of Oxford (2011)<br />
            </p>
            <div className="flex flex-col space-y-2 md:space-y-4">
              <a href="mailto:p.stevenson@northeastern.edu" className="text-yellow-600 hover:underline text-sm md:text-base">Email</a>
              <a href="https://scholar.google.com/citations?user=7gR40hsAAAAJ&hl=en" className="text-yellow-600 hover:underline text-sm md:text-base">Google Scholar</a>
              <a href="https://orcid.org/0000-0002-6616-0328" className="text-yellow-600 hover:underline text-sm md:text-base">ORCID: 0000-0002-6616-0328</a>
            </div>
          </div>
        </div>
      </section>

      {/* Graduate Students - responsive grid */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">Graduate Students</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {graduateStudents.map((student, i) => (
            <div key={i} className="text-center">
                {student.photo}
              <h3 className="font-semibold text-gray-900 text-sm md:text-base">{student.name}</h3>
              <p className="text-xs md:text-sm text-gray-600">{student.degree}</p>
              <p className="text-xs text-gray-500">{student.research}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Undergraduate Students - responsive grid */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">Undergraduate Students</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {ugStudents.map((student, i) => (
            <div key={i} className="text-center">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-300 mx-auto mb-4 rounded-full flex items-center justify-center text-gray-500">
                {student.photo}
              </div>
              <h3 className="font-semibold text-gray-900 text-sm md:text-base">{student.name}</h3>
              <p className="text-xs md:text-sm text-gray-600">{student.major}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Associates - responsive grid */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">Research Associates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pets.map((student, i) => (
            <div key={i} className="text-center">
                {student.photo}
              <h3 className="font-semibold text-gray-900 text-sm md:text-base">{student.name}</h3>
              <p className="text-xs md:text-sm text-gray-600">{student.title}</p>
              <p className="text-xs text-gray-500">{student.research}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni - responsive grid */}
      <section>
        <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">Alumni</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Graduate Student Alumni */}
          <div className="bg-gray-50 p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Graduate Student Alumni</h3>
            <div className="space-y-3">
              <div className="border-l-3 border-yellow-500 pl-4">
                <p className="font-medium text-gray-800 text-sm md:text-base">Nathanial Beaver, PhD 2025</p>
                <p className="text-xs md:text-sm text-gray-600">Thesis: Advanced Drive Methods for Sensing with Diamond NV Centers.  
                 <a href="https://hdl.handle.net/2047/D20776349" className="text-blue-600 hover:underline"> [Link]</a>
                </p>
              </div>
              <div className="border-l-3 border-yellow-500 pl-4">
                <p className="font-medium text-gray-800 text-sm md:text-base">Brian Menezes, MS 2021</p>
              </div>
            </div>
          </div>

          {/* Undergraduate Alumni */}
          <div className="bg-gray-50 p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Undergraduate Alumni</h3>
            <div className="space-y-2 md:space-y-3">
              <div className="border-l-3 border-gray-400 pl-4">
                <p className="font-medium text-gray-800 text-sm md:text-base">Tin Fe Sophal, 2025</p>
              </div>
              <div className="border-l-3 border-gray-400 pl-4">
                <p className="font-medium text-gray-800 text-sm md:text-base">Ruby Martin-Gulutzan, 2024</p>
              </div>
              <div className="border-l-3 border-gray-400 pl-4">
                <p className="font-medium text-gray-800 text-sm md:text-base">Tristan Bernard, 2024</p>
              </div>
              <div className="border-l-3 border-gray-400 pl-4">
                <p className="font-medium text-gray-800 text-sm md:text-base">Deliah Jasper, 2024</p>
              </div>
              <div className="border-l-3 border-gray-400 pl-4">
                <p className="font-medium text-gray-800 text-sm md:text-base">Alena Alexander, 2022</p>
              </div>
              <div className="border-l-3 border-gray-400 pl-4">
                <p className="font-medium text-gray-800 text-sm md:text-base">Ziven Lopez, 2022</p>
              </div>
              <div className="border-l-3 border-gray-400 pl-4">
                <p className="font-medium text-gray-800 text-sm md:text-base">Donelle Furline Jr, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

   // News Page with responsive layout
  const NewsPage = () => {
    const getCategoryStyles = (color) => {
      const styles = {
        yellow: "bg-yellow-100 text-yellow-800",
        blue: "bg-blue-100 text-blue-800",
        green: "bg-green-100 text-green-800",
        purple: "bg-purple-100 text-purple-800",
        indigo: "bg-indigo-100 text-indigo-800",
        orange: "bg-orange-100 text-orange-800",
        gray: "bg-gray-100 text-gray-800"
      };
      return styles[color] || "bg-gray-100 text-gray-800";
    };

    const getBorderColor = (color) => {
      const borders = {
        yellow: "border-yellow-500",
        blue: "border-blue-500",
        green: "border-green-500",
        purple: "border-purple-500",
        indigo: "border-indigo-500",
        orange: "border-orange-500",
        gray: "border-gray-300"
      };
      return borders[color] || "border-gray-300";
    };

    return (
      <div className="px-8 py-8 md:px-12 md:py-10 lg:px-16 lg:py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-12">News & Updates</h1>
        {newsItems
        .sort((a, b) => b.id - a.id)  // Sort by ID, highest first
  .map((item) => (
    <article key={item.id}>
      <div className={`bg-white p-6 md:p-8 border-l-4 ${getBorderColor(item.categoryColor)}`}>
        <div className="flex items-center space-x-4 text-xs md:text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4" />
          <span>{item.date}</span>
        </div>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
          {item.title}
        </h2>
        {/* Conditionally render image if it exists */}
        {item.image && (
          <div className="mb-4">
            <div className="relative w-full overflow-hidden rounded-lg bg-white">
              <img 
                src={item.image} 
                alt={item.imageAlt || item.title}
                className="w-full h-auto"
                style={{
                  maxHeight: '24rem', // 384px max height on desktop
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 0 0 0', // Left aligned
                  objectPosition: 'left center'
                }}
                onError={(e) => {
                  e.target.style.display = 'none'; // Hide if image fails to load
                }}
              />
            </div>
          </div>
        )}
        <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
          {item.summary}
        </p>
        {item.link && (
          <div className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
            <p><a href={item.link} target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">Read more!</a></p>
          </div>
        )}
      </div>
    </article>
  ))}
        
      </div>
    );
  };

  // Resources Page with responsive grid
  const ResourcesPage = () => (
    <div className="px-8 py-8 md:px-12 md:py-10 lg:px-16 lg:py-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-12">Resources</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 md:p-8 border-l-4 border-yellow-500">
          <Beaker className="w-10 h-10 md:w-12 md:h-12 text-yellow-600 mb-4" />
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Protocols & Methods</h2>
          <p className="text-sm md:text-base text-gray-600 mb-4">
            We use <a href="https://protocols.io/workspaces/stevenson-group" className="text-yellow-600 hover:underline">protocols.io</a> to expand on the methods section of our publications. Some examples are below:
          </p>
          <ul className="space-y-2">
            <li>
              <a href="https://www.protocols.io/view/vesicle-fusion-on-sio2-substrates-36wgq3b4ylk5/v2" className="text-yellow-600 hover:underline text-sm md:text-base">
                → Vesicle Fusion on SiO2 Substrates
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 md:p-8 border-l-4 border-blue-500">
          <Github className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mb-4" />
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Code & Software</h2>
          <p className="text-sm md:text-base text-gray-600 mb-4">
            Software and analysis tools developed by our group.
          </p>
          <ul className="space-y-2">
            <li>
              <a href="https://github.com/paulstevensonlab/snvm-processing" className="text-yellow-600 hover:underline text-sm md:text-base">
                → SNVM Processing & Analysis Tools (GitHub)
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 md:p-8 border-l-4 border-green-500">
          <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-green-600 mb-4" />
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Educational Materials</h2>
          <p className="text-sm md:text-base text-gray-600 mb-4">
            These notes and resources are provided as-is - they haven't been peer-reviewed, and are likely to 
            have at least some mistakes.
          </p>
          <ul className="space-y-2">
            <li>
              <a href="https://www.snvm-qmsi.com/" className="text-yellow-600 hover:underline text-sm md:text-base">
                → A practical guide to using scanning NV microscopy
              </a>  - this is a work in progress!
            </li>
            <li>
              <a href="#" className="text-yellow-600 hover:underline text-sm md:text-base">
                → Stay tuned for PHYS 5114 notes!
              </a>  (Once the embarassing typos have been fixed...)
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 md:p-8 border-l-4 border-purple-500">
          <Download className="w-10 h-10 md:w-12 md:h-12 text-purple-600 mb-4" />
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Datasets</h2>
          <p className="text-sm md:text-base text-gray-600 mb-4">
            Where possible, we deposit data from our group on <b><a href="https://zenodo.org/" className="text-yellow-600 hover:underline"  >Zenodo</a></b>. 
            Some examples are below - but check the manuscripts directly for links!.
          </p>
          <ul className="space-y-2">
            <li>
              <a href="https://zenodo.org/records/10830128" className="text-yellow-600 hover:underline text-sm md:text-base">
                → Experimentally probing the effect of confinement geometry on lipid diffusion
              </a>
            </li>
            <li>
              <a href="https://zenodo.org/records/11521189" className="text-yellow-600 hover:underline text-sm md:text-base">
                → Optimizing off-axis fields for two-axis magnetometry with point defects
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Useful Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          <a href="https://cos.northeastern.edu/nucos-department/physics/" className="text-yellow-600 hover:underline text-sm md:text-base">• Northeastern Physics</a>
          <a href="https://quantum.northeastern.edu/" className="text-yellow-600 hover:underline text-sm md:text-base">• Quantum Materials and Sensing Institute</a>
          <a href="https://magnetics.center.northeastern.edu/" className="text-yellow-600 hover:underline text-sm md:text-base">• Magnetics Center at Northeastern University</a>
          <a href="https://biophysics.sites.northeastern.edu/" className="text-yellow-600 hover:underline text-sm md:text-base">• Biophysics Research at Northeastern University</a>
        </div>
      </div>
    </div>
  );

  // Contact Page with responsive layout
  const ContactPage = () => (
    <div className="px-8 py-8 md:px-12 md:py-10 lg:px-16 lg:py-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-12">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <div className="bg-white p-6 md:p-8 mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-gray-400 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm md:text-base">Lab Location</p>
                  <p className="text-sm md:text-base text-gray-600">
                    Egan Research Center<br />
                    Northeastern University<br />
                    120 Forsyth Street<br />
                    Boston, MA 02115
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-gray-400 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm md:text-base">Email</p>
                  <p className="text-sm md:text-base text-gray-600">
                    p.stevenson[at]northeastern.edu<br />
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-gray-50 p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Interested in working with us?</h3>
            <p className="text-sm md:text-base text-gray-600 mb-3">
              We're always interested in hearing from potential students, postdocs and collaborators. Contact <button 
            onClick={() => handlePageChange('team')}
            className="text-gray-900 font-semibold hover:underline"
          >
            Paul
          </button> to discuss opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Render current page
  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'research': return <ResearchPage />;
      case 'publications': return <PublicationsPage />;
      case 'team': return <TeamPage />;
      case 'news': return <NewsPage />;
      case 'resources': return <ResourcesPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      {/* Main content wrapper - responsive margin */}
      <div className="md:ml-64 transition-all duration-300">
        {/* Add padding-top on mobile for hamburger button space */}
        <div className="pt-16 md:pt-0">
          {renderPage()}
        </div>
      </div>
      <Analytics />  {/* ADD THIS LINE */}
    </div>
  );
};

export default MinimalSidebarApp;