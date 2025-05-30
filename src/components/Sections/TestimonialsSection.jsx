// src/components/Sections/CompleteEnhancedTestimonialsSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, Play, ChevronLeft, ChevronRight, Shield, TrendingUp, Users, Award, Pause, Volume2 } from 'lucide-react';

// Video testimonial modal component
const VideoTestimonialModal = ({ isOpen, onClose, testimonial }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [isOpen]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e) => {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video container */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          {/* Video player */}
          <div className="relative bg-black aspect-video">
            {/* Placeholder video - replace with actual video source */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-10 w-10 ml-1" />
                </div>
                <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
                <p className="text-white/80">{testimonial.role} at {testimonial.company}</p>
                <p className="text-sm text-white/60 mt-2">Video testimonial would play here</p>
              </div>
            </div>

            {/* Video controls overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              {/* Progress bar */}
              <div 
                className="w-full h-1 bg-white/30 rounded-full mb-3 cursor-pointer"
                onClick={handleSeek}
              >
                <div 
                  className="h-full bg-white rounded-full transition-all duration-300"
                  style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                />
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <button onClick={handlePlayPause} className="hover:text-blue-300 transition-colors">
                    {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                  </button>
                  <Volume2 className="h-5 w-5" />
                  <span className="text-sm">{formatTime(currentTime)} / {formatTime(duration)}</span>
                </div>
                <div className="text-sm opacity-75">
                  {testimonial.company} • Video Testimonial
                </div>
              </div>
            </div>
          </div>

          {/* Video info */}
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                {testimonial.initials}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.role}</p>
                <p className="text-blue-600 font-medium">{testimonial.company}</p>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <blockquote className="mt-4 text-gray-700 italic">
              "{testimonial.quote}"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

// Individual testimonial card component with enhanced animations
const TestimonialCard = ({ testimonial, index, isActive = false, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePlayClick = (e) => {
    e.stopPropagation();
    onClick?.(testimonial);
  };

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl transition-all duration-700 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${isActive ? 'scale-105 shadow-2xl ring-2 ring-blue-500/20' : 'hover:scale-102'} ${
        isHovered ? 'shadow-2xl' : ''
      }`}
      style={{ 
        animationDelay: `${index * 0.2}s`,
        transformOrigin: 'center center'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick?.(testimonial)}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      
      {/* Quote icon */}
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
        <Quote className="h-4 w-4 text-white" />
      </div>
      
      {/* Company category badge */}
      <div className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-bold rounded-full shadow-lg">
        {testimonial.industry}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Rating stars with animation */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-5 w-5 text-yellow-400 fill-current transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600 font-medium">5.0</span>
        </div>
        
        {/* Testimonial text with enhanced typography */}
        <blockquote className="text-lg text-slate-700 mb-6 leading-relaxed italic font-medium">
          "{testimonial.quote}"
        </blockquote>
        
        {/* Metrics section */}
        {testimonial.metrics && (
          <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-blue-50/50 rounded-xl">
            {testimonial.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        )}
        
        {/* Author info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Avatar with video indicator */}
            <div className="relative">
              <div className={`w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-300 ${isHovered ? 'shadow-xl scale-110' : ''}`}>
                {testimonial.initials}
              </div>
              {testimonial.hasVideo && (
                <button
                  onClick={handlePlayClick}
                  className="absolute -bottom-1 -right-1 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300 shadow-lg animate-pulse hover:scale-110"
                  title="Play video testimonial"
                >
                  <Play className="h-4 w-4 ml-0.5" />
                </button>
              )}
            </div>
            
            {/* Name and role */}
            <div>
              <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-lg">{testimonial.name}</div>
              <div className="text-sm text-slate-600 font-medium">{testimonial.role}</div>
              <div className="text-sm text-blue-600 font-semibold">{testimonial.company}</div>
              <div className="text-xs text-gray-500 mt-1">{testimonial.location}</div>
            </div>
          </div>
          
          {/* Company logo and verification */}
          <div className="text-right">
            <div className="w-16 h-8 bg-slate-100 rounded flex items-center justify-center text-xs text-slate-500 group-hover:bg-blue-50 transition-colors mb-2">
              LOGO
            </div>
            <div className="flex items-center gap-1 text-xs text-green-600">
              <Shield className="h-3 w-3" />
              <span>Verified</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Shine effect */}
      <div className={`absolute inset-0 opacity-0 transition-opacity duration-1000 ${isHovered ? 'opacity-100' : ''}`}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </div>
    </div>
  );
};

// Enhanced carousel component with advanced controls
const TestimonialCarousel = ({ testimonials, onVideoPlay }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying, isDragging]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Touch/drag handlers
  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStart(e.type === 'mousedown' ? e.clientX : e.touches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    setDragOffset(currentX - dragStart);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    }
    
    setDragOffset(0);
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Main testimonial display */}
      <div 
        className="relative overflow-hidden rounded-3xl"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <TestimonialCard 
                testimonial={testimonial} 
                index={index}
                isActive={index === currentIndex}
                onClick={testimonial.hasVideo ? onVideoPlay : undefined}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced navigation controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={goToPrevious}
          className="group p-4 bg-white/80 backdrop-blur-sm rounded-full border border-white/20 text-slate-600 hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-1" />
        </button>
        
        {/* Enhanced dots indicator */}
        <div className="flex gap-3">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 h-3 bg-blue-600 scale-125' 
                  : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
              } rounded-full`}
              title={`${testimonial.name} - ${testimonial.company}`}
            >
              {testimonial.hasVideo && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>
        
        <button
          onClick={goToNext}
          className="group p-4 bg-white/80 backdrop-blur-sm rounded-full border border-white/20 text-slate-600 hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
        >
          <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Auto-play indicator */}
      <div className="flex items-center justify-center mt-4 gap-2">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`text-sm px-3 py-1 rounded-full transition-colors ${
            isAutoPlaying ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
          }`}
        >
          {isAutoPlaying ? 'Auto-play ON' : 'Auto-play OFF'}
        </button>
        <span className="text-xs text-gray-500">
          {currentIndex + 1} of {testimonials.length}
        </span>
      </div>
    </div>
  );
};

// Enhanced floating background elements
const FloatingTestimonialElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      
      {/* Quote symbols with enhanced positioning */}
      <div className="absolute top-1/4 left-1/4 text-8xl text-blue-100 opacity-20 animate-pulse font-serif">
        "
      </div>
      <div className="absolute bottom-1/4 right-1/4 text-8xl text-indigo-100 opacity-20 animate-pulse font-serif" style={{ animationDelay: '1s' }}>
        "
      </div>
      <div className="absolute top-3/4 left-1/2 text-6xl text-purple-100 opacity-15 animate-pulse font-serif" style={{ animationDelay: '3s' }}>
        "
      </div>
      
      {/* Floating stars with varied sizes */}
      {[...Array(20)].map((_, i) => (
        <Star
          key={i}
          className={`absolute text-yellow-300/30 animate-pulse ${
            i % 3 === 0 ? 'w-6 h-6' : i % 3 === 1 ? 'w-4 h-4' : 'w-3 h-3'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
      
      {/* Geometric shapes */}
      <div className="absolute top-1/3 right-1/3 w-12 h-12 border-2 border-blue-200/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-8 h-8 border border-purple-200/30 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
    </div>
  );
};

// Main testimonials section component
const TestimonialsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const testimonials = [
    {
      quote: "Praesidium has transformed our AI compliance processes. We're now able to identify potential issues before they affect our customers, saving us time and resources while maintaining the highest standards.",
      name: "Sarah Johnson",
      role: "Director of AI Governance",
      company: "Financial Tech Inc.",
      location: "New York, NY",
      industry: "FinTech",
      initials: "SJ",
      hasVideo: true,
      metrics: [
        { value: "80%", label: "Time Saved" },
        { value: "99.9%", label: "Accuracy" }
      ]
    },
    {
      quote: "With stringent HIPAA requirements, we needed a solution that could ensure our AI models maintain compliance. Praesidium delivers this with unprecedented visibility and control.",
      name: "Dr. Michael Chen",
      role: "Chief Compliance Officer", 
      company: "HealthCare Solutions",
      location: "San Francisco, CA",
      industry: "Healthcare",
      initials: "MC",
      hasVideo: true,
      metrics: [
        { value: "100%", label: "HIPAA Compliance" },
        { value: "65%", label: "Faster Audits" }
      ]
    },
    {
      quote: "The automated documentation and compliance testing have reduced our audit preparation time by 80%. It's become an essential part of our AI development workflow.",
      name: "Emma Rodriguez",
      role: "VP of Engineering",
      company: "TechCorp Industries", 
      location: "Austin, TX",
      industry: "Technology",
      initials: "ER",
      hasVideo: false,
      metrics: [
        { value: "80%", label: "Faster Audits" },
        { value: "95%", label: "Documentation Coverage" }
      ]
    },
    {
      quote: "Implementation was seamless and the ROI was immediate. Our team can now focus on innovation while Praesidium handles the compliance complexity.",
      name: "James Park",
      role: "CTO",
      company: "Innovation Labs",
      location: "Seattle, WA",
      industry: "AI/ML",
      initials: "JP", 
      hasVideo: true,
      metrics: [
        { value: "300%", label: "ROI" },
        { value: "48hrs", label: "Setup Time" }
      ]
    },
    {
      quote: "The real-time monitoring and alerting system has prevented several potential compliance issues. It's like having a dedicated compliance team working 24/7.",
      name: "Lisa Wang",
      role: "Risk Management Director",
      company: "Global Bank Corp",
      location: "London, UK", 
      industry: "Banking",
      initials: "LW",
      hasVideo: true,
      metrics: [
        { value: "24/7", label: "Monitoring" },
        { value: "Zero", label: "Compliance Issues" }
      ]
    }
  ];

  const handleVideoPlay = (testimonial) => {
    setSelectedVideo(testimonial);
  };

  const handleVideoClose = () => {
    setSelectedVideo(null);
  };

  return (
    <section 
      id="testimonials" 
      className="relative py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden"
    >
      <FloatingTestimonialElements />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm border border-blue-200/50 text-blue-800 rounded-full text-sm font-medium mb-8 shadow-lg">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>Trusted by Industry Leaders Worldwide</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            What Our Customers
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            See how organizations across industries are transforming their AI governance with Praesidium Systems
          </p>

          {/* Industry badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['FinTech', 'Healthcare', 'Technology', 'Banking', 'Government'].map((industry, index) => (
              <span key={index} className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-slate-700 shadow-md">
                {industry}
              </span>
            ))}
          </div>
        </div>
        
        {/* Testimonials carousel */}
        <TestimonialCarousel 
          testimonials={testimonials} 
          onVideoPlay={handleVideoPlay}
        />
        
        {/* Enhanced stats section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { icon: Users, number: "500+", label: "Enterprise Customers", description: "Fortune 500 companies" },
            { icon: Star, number: "4.9", label: "Customer Rating", description: "Based on 1,200+ reviews" },
            { icon: TrendingUp, number: "85%", label: "Faster Compliance", description: "Average time reduction" },
            { icon: Award, number: "24/7", label: "Expert Support", description: "Global support team" }
          ].map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg group-hover:bg-blue-400/30 transition-all duration-300" />
                <div className="relative w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto border border-white/20 group-hover:border-blue-300 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                {stat.number}
              </div>
              <div className="text-slate-600 font-medium mb-1">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6 bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 max-w-2xl">
            <h3 className="text-2xl font-bold text-slate-900">Join These Industry Leaders</h3>
            <p className="text-slate-600 leading-relaxed">
              Ready to transform your AI governance? See why hundreds of organizations trust Praesidium Systems.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
            >
              Get Your Demo
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Video testimonial modal */}
      <VideoTestimonialModal 
        isOpen={!!selectedVideo}
        onClose={handleVideoClose}
        testimonial={selectedVideo}
      />
    </section>
  );
};

export default TestimonialsSection;