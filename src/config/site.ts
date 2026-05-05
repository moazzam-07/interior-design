// ============================================================
// SITE CONFIGURATION — Edit all business details here
// ============================================================

export const siteConfig = {
  // Brand
  name: "LiveDelite Interior",
  tagline: "Where Vision Meets Space",
  subtitle: "The Best interior design studio crafting bespoke living experiences across Ahmedabad",
  description:
    "Matter Of Space is Ahmedabad's premier interior design studio. We transform ordinary spaces into extraordinary living experiences with a focus on craftsmanship, innovation, and timeless elegance.",

  // Location
  city: "Ahmedabad",
  state: "Gujrat",
  country: "India",
  address: "South ahemdabad",
  mapEmbedUrl:
    "https://www.google.com/search?sca_esv=b493f18cdd742725&sxsrf=ANbL-n7Zhf4bnEHugdkK-LSAXbbUn-Oscw:1777636053059&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOVRSssLt4IkhjDbvxmzQITnhKkONQ9W-dN5T4gcNm_w9fyOzN9awIQjg5fgHk0EYCsC9K6SC1ulmNh17tg7Z3MCXcBdjAE3bu2Dnfpducg6glUZ-74rC9PmD-x_XjPNGHH6Rzbg%3D&q=Deco+Your+Dream+Interior+Pvt.+Ltd.+Reviews&sa=X&ved=2ahUKEwiDxu2rgpiUAxVAUGcHHR_DIm0Q0bkNegQIMBAH&biw=1528&bih=698&dpr=1.25",

  // Contact
  phone: "+919748301670",
  phoneDisplay: "+91 97483 01670",
  whatsapp: "919748301670",
  email: "hello@LiveDelite.in",

  // WhatsApp pre-filled messages (per section context)
  whatsappMessages: {
    default:
      "Hi! I'm interested in your interior design services. Can we discuss my project?",
    hero: "Hi! I'd love to start a design project with Luxe Interiors.",
    portfolio:
      "Hi! I saw your portfolio and I'm interested in a similar design for my space.",
    services:
      "Hi! I'd like to know more about your design services and pricing.",
    contact: "Hi! I'd like to book a free consultation with your team.",
  },

  // Business Hours
  hours: "Mon - Sat: 10:00 AM - 7:00 PM",
  responseTime: "We respond within 2 hours",

  // Google Reviews
  reviews: {
    rating: 4.9,
    count: 1200,
    profileUrl: "https://g.co/kgs/asg",
  },

  // Social Media
  social: {
    instagram: "https://instagram.com/asg",
    pinterest: "https://pinterest.com/asg",
    facebook: "https://facebook.com/asg",
    linkedin: "https://linkedin.com/company/asg",
  },

  // Designer Info
  designer: {
    name: "Arjun Mehta",
    title: "Principal Designer & Founder",
    bio: "With over 14 years shaping residential and commercial spaces across Mumbai, Arjun brings an obsessive eye for detail and a philosophy rooted in the belief that great design should feel inevitable — never forced.",
    credentials: [
      "B.Arch, Sir J.J. College of Architecture",
      "Masters in Interior Design, Parsons School of Design",
      "IIID Certified Interior Designer",
    ],
  },

  // Stats (animated counters)
  stats: [
    { value: 14, suffix: "+", label: "Years of Experience" },
    { value: 500, suffix: "+", label: "Projects Delivered" },
    { value: 1200, suffix: "+", label: "Happy Clients" },
    { value: 4.9, suffix: "", label: "Google Rating", isDecimal: true },
  ],

  // Services
  services: [
    {
      id: "full-home",
      title: "Complete Home Design",
      description:
        "End-to-end design for your entire home — from concept to handover. We handle space planning, material selection, furniture, lighting, and styling.",
      icon: "Home",
    },
    {
      id: "room-makeover",
      title: "Room Transformation",
      description:
        "Focused redesign of a single room. Perfect for refreshing a living room, bedroom, or kitchen without a full-home commitment.",
      icon: "Palette",
    },
    {
      id: "space-planning",
      title: "Space Planning & Layout",
      description:
        "Strategic floor planning that maximizes every square foot. We optimize flow, functionality, and natural light for your lifestyle.",
      icon: "LayoutGrid",
    },
    {
      id: "renovation",
      title: "Renovation Management",
      description:
        "Full project management for renovations — contractor coordination, timeline management, quality control, and budget tracking.",
      icon: "Hammer",
    },
    {
      id: "commercial",
      title: "Commercial & Office Design",
      description:
        "Workspaces that boost productivity and reflect your brand. From startup studios to corporate headquarters.",
      icon: "Building2",
    },
    {
      id: "consultation",
      title: "Design Consultation",
      description:
        "A focused 90-minute session to discuss your vision, review your space, and develop an actionable design direction.",
      icon: "MessageCircle",
    },
  ],

  // Design Process Steps
  process: [
    {
      step: 1,
      title: "Discovery Call",
      description:
        "A free 30-minute call to understand your vision, lifestyle, and goals. We listen before we design.",
    },
    {
      step: 2,
      title: "Concept & Moodboard",
      description:
        "We develop a curated design direction — colour palettes, material samples, and spatial references tailored to you.",
    },
    {
      step: 3,
      title: "Design Development",
      description:
        "Detailed 3D visualizations, floor plans, and material specifications so you see exactly what your space will become.",
    },
    {
      step: 4,
      title: "Execution",
      description:
        "Our team manages every vendor, contractor, and detail — on time, on budget, without the stress.",
    },
    {
      step: 5,
      title: "The Reveal",
      description:
        "The moment it all comes together. A styled, polished space ready for you to live in and love.",
    },
  ],

  // Testimonials / Google Reviews
  testimonials: [
    {
      name: "Priya Kapoor",
      role: "Homeowner, Bandra West",
      rating: 5,
      text: "Arjun and the Luxe team turned our 2BHK into something out of a magazine. Every corner has a purpose, and the attention to detail is unreal. We've had guests ask if we hired a celebrity designer.",
      date: "2026-03-15",
    },
    {
      name: "Rahul & Sneha Deshmukh",
      role: "Homeowners, Powai",
      rating: 5,
      text: "We were nervous about the renovation timeline, but Luxe delivered three days early. The 3D renders matched the final result almost perfectly. Our living room gets more compliments than our cooking.",
      date: "2026-02-28",
    },
    {
      name: "Vikram Iyer",
      role: "CEO, Meridian Coworks",
      rating: 5,
      text: "They designed our 8,000 sq ft co-working space and genuinely understood the brief. Productivity is up, our members love it, and we've had two companies sign longer leases specifically because of the space.",
      date: "2026-01-10",
    },
    {
      name: "Ananya Sharma",
      role: "Homeowner, Juhu",
      rating: 5,
      text: "The consultation alone was worth it. Arjun saw possibilities in our flat that three other designers missed. The final space feels twice as large and infinitely more 'us'. Worth every rupee.",
      date: "2025-12-05",
    },
    {
      name: "Dr. Meera Joshi",
      role: "Clinic Owner, Worli",
      rating: 5,
      text: "Needed a clinic that felt calming yet professional. Luxe nailed it. Patients constantly comment on how relaxed the space feels. It's become part of our brand identity.",
      date: "2025-11-20",
    },
  ],

  // FAQ
  faq: [
    {
      question: "How much does interior design cost in Mumbai?",
      answer:
        "Our projects typically range from ₹8 lakh to ₹50 lakh+ depending on scope, size, and material selections. We offer a free consultation to provide a tailored estimate for your specific project.",
    },
    {
      question: "What is your design process like?",
      answer:
        "We follow a 5-step process: Discovery Call, Concept & Moodboard, Design Development (with 3D renders), Execution & Project Management, and The Final Reveal. Each step is transparent and collaborative.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "A single room makeover takes 4-6 weeks. A complete home design runs 3-6 months depending on complexity. We provide detailed timelines upfront and keep you updated at every stage.",
    },
    {
      question: "Do you work within a fixed budget?",
      answer:
        "Absolutely. We design to your budget, not ours. During the discovery call, we discuss your comfortable range and build the design around it — no surprises, no hidden costs.",
    },
    {
      question: "Which areas in Mumbai do you serve?",
      answer:
        "We serve all of Mumbai and the MMR region — including South Mumbai, Bandra, Juhu, Powai, Andheri, Thane, and Navi Mumbai. We also take on select projects in Pune and Goa.",
    },
    {
      question: "Can I see the design before execution begins?",
      answer:
        "Yes, always. We provide detailed 3D photorealistic renders and material samples before any construction begins. You approve every detail before we move forward.",
    },
  ],

  // Portfolio categories
  portfolioCategories: [
    "All",
    "Residential",
    "Commercial",
    "Kitchen",
    "Living Room",
    "Bedroom",
    "Bathroom",
  ],

  // Featured In / Press logos (text for now, replace with images)
  press: [
    "Architectural Digest India",
    "Elle Decor",
    "AD100",
    "Livingetc",
    "Beautiful Homes",
    "The Hindu",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
