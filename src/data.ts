export const siteConfig = {
  name: "Alex Mercer",
  title: "Alex Mercer - Photographer",
  description: "Photography portfolio of Alex Mercer. Specializing in portraiture, landscape, architecture, and the spaces between them. Based in New York.",
  url: 
  // import.meta.env.BASE_URL || 
  "https://https://small-photography-portfolio-demo.netlify.app", // Replace with actual domain
  ogImage: "/pfp.webp", // Add this image to public folder
  twitterHandle: "@alexmercer", // Replace with actual handle
  keywords: ["photographer", "photography", "portfolio", "New York", "portrait", "landscape", "architecture"],
  author: {
    name: "Alex Mercer",
    bio: "I make photographs. Not to document the world as it is, but to find the world as it could be felt — the way light falls on an empty chair, the weight of a stranger's gaze, the geometry a city makes at 3am.",
    location: "New York",
    profession: "Photographer"
  },
  social: {
    instagram: "https://instagram.com/alexmercer", // Replace with actual
    twitter: "https://twitter.com/alexmercer", // Replace with actual
    linkedin: "https://linkedin.com/in/alexmercer", // Replace with actual
    email: "hello@alexmercer.photo" // Replace with actual
  },
  contact: {
    email: "hello@alexmercer.photo",
    location: "New York, NY"
  }
} as const;

export type SiteConfig = typeof siteConfig;