export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Living Rock Events",
    legalName: "Living Rock Events - Wedding & Events Venue",
    tagline: "Built on Rock. Wrapped in Beauty.",
    description:
      "Living Rock Events is a premier wedding and events venue in Harare, offering breathtaking natural rock formations, lush gardens, and versatile indoor-outdoor spaces for unforgettable celebrations.",
    phone: "+263 77 560 1556",
    phoneRaw: "+263775601556",
    whatsappNumber: "263775601556",
    email: "events@livingrockevents.co.zw",
    address: "Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.3,
    ratingRounded: 4,
    reviewCount: 72,
    established: "2016",
    yearsExperience: "8+",
    projectsCompleted: "600+",
    employees: "20+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "living-rock-events-wedding-events-venue-cookie-consent",
    socialLinks: {
      facebook: "https://www.facebook.com/groups/467781440002906/posts/24295008136853569/",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "Living",
    logoLine2: "Rock Events",
  },

  hero: {
    badge: "Harare's Most Unique Events Venue",
    titleParts: [
      { text: "BUILT ON " },
      { text: "ROCK", highlight: true },
      { text: " WRAPPED IN BEAUTY." },
    ],
    subtitle:
      "Natural rock formations, lush gardens, and architectural elegance create an events venue unlike any other in Zimbabwe. Every celebration becomes a masterpiece.",
    ctaPrimary: "Schedule a Visit",
    ctaSecondary: "View Gallery",
    trustBadge: "600+ Events Celebrated",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85", alt: "Living Rock Events professional image 1" },
      { url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=85", alt: "Living Rock Events professional image 2" },
      { url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=85", alt: "Living Rock Events professional image 3" },
    ],
  },

  stats: [
    { number: "600+", label: "Events Hosted" },
    { number: "8+", label: "Years of Excellence" },
    { number: "400", label: "Max Capacity" },
    { number: "72", label: "Google Reviews" },
  ],

  servicesPreview: [
    {
      title: "Wedding Ceremonies",
      desc: "Exchange vows against dramatic natural rock backdrops and cascading greenery in our signature ceremony gardens.",
      icon: "Heart",
    },
    {
      title: "Receptions & Dinners",
      desc: "Elegant reception spaces with flexible seating for 50 to 400 guests under starlit skies or covered pavilions.",
      icon: "Star",
    },
    {
      title: "Corporate Events",
      desc: "Professional conference and team-building facilities surrounded by nature's most inspiring architecture.",
      icon: "Briefcase",
    },
    {
      title: "Birthday Celebrations",
      desc: "Unique party spaces where natural rock formations and garden settings create unforgettable birthday atmospheres.",
      icon: "Buildings",
    },
    {
      title: "Photo & Film Shoots",
      desc: "Dramatic natural textures, golden-hour lighting, and diverse backdrops for professional photography and videography.",
      icon: "Lightbulb",
    },
    {
      title: "Cultural Ceremonies",
      desc: "Respectful spaces for lobola negotiations, thanksgiving gatherings, and traditional ceremonies with modern amenities.",
      icon: "Leaf",
    },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Excellence across every discipline. Precision in every detail.",
    items: [
      {
        title: "Wedding Ceremonies",
        slug: "wedding-ceremonies",
        desc: "Exchange vows against dramatic natural rock backdrops and cascading greenery in our signature ceremony gardens.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      },
      {
        title: "Receptions & Dinners",
        slug: "receptions-and-dinners",
        desc: "Elegant reception spaces with flexible seating for 50 to 400 guests under starlit skies or covered pavilions.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      },
      {
        title: "Corporate Events",
        slug: "corporate-events",
        desc: "Professional conference and team-building facilities surrounded by nature's most inspiring architecture.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      },
      {
        title: "Birthday Celebrations",
        slug: "birthday-celebrations",
        desc: "Unique party spaces where natural rock formations and garden settings create unforgettable birthday atmospheres.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      },
      {
        title: "Photo & Film Shoots",
        slug: "photo-and-film-shoots",
        desc: "Dramatic natural textures, golden-hour lighting, and diverse backdrops for professional photography and videography.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      },
      {
        title: "Cultural Ceremonies",
        slug: "cultural-ceremonies",
        desc: "Respectful spaces for lobola negotiations, thanksgiving gatherings, and traditional ceremonies with modern amenities.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to quality.",
    items: [
      {
        title: "Project 01 - Commercial Living",
        slug: "project-01",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in wedding ceremonies.",
        client: "Commercial Client",
        services: ["Wedding Ceremonies", "Receptions & Dinners"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        ],
      },
      {
        title: "Project 02 - Residential Living",
        slug: "project-02",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in receptions & dinners.",
        client: "Residential Client",
        services: ["Receptions & Dinners", "Corporate Events"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        ],
      },
      {
        title: "Project 03 - Industrial Living",
        slug: "project-03",
        category: "Industrial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in corporate events.",
        client: "Industrial Client",
        services: ["Corporate Events", "Birthday Celebrations"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        ],
      },
      {
        title: "Project 04 - Institutional Living",
        slug: "project-04",
        category: "Institutional",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in birthday celebrations.",
        client: "Institutional Client",
        services: ["Birthday Celebrations", "Photo & Film Shoots"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        ],
      },
      {
        title: "Project 05 - Commercial Living",
        slug: "project-05",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in photo & film shoots.",
        client: "Commercial Client",
        services: ["Photo & Film Shoots", "Cultural Ceremonies"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        ],
      },
      {
        title: "Project 06 - Residential Living",
        slug: "project-06",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in cultural ceremonies.",
        client: "Residential Client",
        services: ["Cultural Ceremonies", "Wedding Ceremonies"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        ],
      },
    ],
  },

  homeTestimonials: [
    {
      text: "Living Rock was the only venue that made us both say 'this is it' the moment we walked in. The rock formations as our ceremony backdrop were absolutely breathtaking.",
      name: "Tendai Mushore",
      role: "Bride, December 2023",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: "We have hosted three corporate events here and the feedback is always exceptional. The natural setting inspires creativity in ways a hotel ballroom never could.",
      name: "Mike Chidavaenzi",
      role: "Events Manager, Old Mutual",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      text: "The most photogenic venue in Harare. Every angle provides a stunning backdrop. Our wedding photos look like they were taken at a destination resort.",
      name: "Nyasha Gumede",
      role: "Groom, February 2024",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    {
      text: "My 40th birthday celebration at Living Rock was magical. The team set up fairy lights among the rocks and it felt like dining in an enchanted forest.",
      name: "Patricia Makoni",
      role: "Birthday Celebrant",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by excellence.",
    story: [
      "Living Rock Events was founded on a vision to create an events venue that works with nature rather than against it. Our Harare property features stunning natural rock formations that have been carefully incorporated into every event space.",
      "Since 2016, we have hosted over 600 events, from intimate garden weddings to large-scale corporate functions. Our unique blend of natural beauty and modern facilities has made us one of Harare's most sought-after venues.",
    ],
    values: [
      { title: "Unique Natural Setting", desc: "No other venue in Zimbabwe offers our combination of natural rock formations, gardens, and architectural design." },
      { title: "Weather-Proof Planning", desc: "Indoor backup spaces ensure your event goes perfectly regardless of weather. Seamless transitions between spaces." },
      { title: "Professional Team", desc: "Experienced events coordinators manage every detail from initial planning to day-of execution." },
      { title: "Flexible Packages", desc: "Customizable venue packages with optional catering, decor, AV, and coordination services." },
    ],
    team: [
      {
        name: "The Founder",
        role: "Managing Director",
        bio: "Bringing years of industry expertise and a passion for excellence to every project.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      },
      {
        name: "Operations Lead",
        role: "Operations Manager",
        bio: "Ensuring seamless execution and consistent quality across all our services.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      },
      {
        name: "Client Relations",
        role: "Client Success Manager",
        bio: "Dedicated to understanding client needs and delivering beyond expectations.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
      },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our customers say about working with us.",
    items: [
      { text: "Living Rock was the only venue that made us both say 'this is it' the moment we walked in. The rock formations as our ceremony backdrop were absolutely breathtaking.", name: "Tendai Mushore", role: "Bride, December 2023", rating: 5 },
      { text: "We have hosted three corporate events here and the feedback is always exceptional. The natural setting inspires creativity in ways a hotel ballroom never could.", name: "Mike Chidavaenzi", role: "Events Manager, Old Mutual", rating: 5 },
      { text: "The most photogenic venue in Harare. Every angle provides a stunning backdrop. Our wedding photos look like they were taken at a destination resort.", name: "Nyasha Gumede", role: "Groom, February 2024", rating: 5 },
      { text: "My 40th birthday celebration at Living Rock was magical. The team set up fairy lights among the rocks and it felt like dining in an enchanted forest.", name: "Patricia Makoni", role: "Birthday Celebrant", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "Help us deliver excellence. Every day.",
    positions: [
      {
        title: "Service Specialist",
        department: "Operations",
        location: "Harare",
        type: "Full-time",
        desc: "Join our team and help deliver outstanding service to our growing client base.",
      },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "We would love to hear from you. Reach out today.",
    branches: [
      {
        name: "Living Rock Events",
        address: "Harare, Zimbabwe",
        phone: "+263 77 560 1556",
        email: "events@livingrockevents.co.zw",
      },
    ],
  },

  homeCta: {
    title: "YOUR MOMENT AWAITS",
    subtitle: "Every great celebration needs an extraordinary setting. Living Rock Events provides the canvas -- you bring the vision.",
    ctaPrimary: "Schedule a Visit",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Living Rock! I am interested in booking your venue.",
    backgroundImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85",
  },

  footer: {
    description: "Living Rock Events is a premier wedding and events venue in Harare, offering breathtaking natural rock formations, lush gardens, and versatile indoor-...",
    copyright: "Living Rock Events",
  },
};

export default siteData;
