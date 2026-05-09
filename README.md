# 🪔 BharatYatra — Indian Tours & Travel Website

A full-featured React + Vite travel website for an Indian tours and travel company, built as a Capstone Project.

## 🚀 Tech Stack
- **Frontend:** React 18, Vite
- **Routing:** React Router DOM v6
- **State Management:** Context API (AuthContext)
- **Charts:** Recharts (AreaChart for booking analytics)
- **Styling:** Inline styles with CSS-in-JS approach
- **Icons:** Emoji-based + custom SVG

## 📁 Pages
| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero video bg, destinations, packages, analytics chart, testimonials |
| Destinations | `/destinations` | All 6 Indian destinations with cards |
| Packages | `/packages` | Filter, sort, search all 6 packages |
| Package Detail | `/packages/:id` | Full detail with itinerary, inclusions, booking |
| Compare | `/compare` | Side-by-side comparison of up to 3 packages |
| International | `/international` | 8 international destinations + visa guide table |
| Login | `/login` | Beautiful split-panel login page |
| Register | `/register` | Sign up with validation |

## ✨ Features
- 🎬 Background video on hero section
- 🔐 Auth system (login/register/logout) with Context API
- 📊 Analytics charts (Recharts AreaChart)
- ❤️ Wishlist toggle per package
- 🔍 Search + filter + sort on Packages page
- 📋 Package comparison tool (up to 3 packages)
- 🛂 Visa guide for international destinations
- 🗺️ Animated SVG India map with city markers
- ✨ Scroll-triggered counter animations
- 🌙 Rotating mandala SVG decorations
- 📱 Responsive grid layouts

## 🛠️ Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Deploy to Vercel / Netlify
npm run preview
```

## 🌐 Deployment
- **Vercel:** `vercel deploy`
- **Netlify:** Drag & drop the `dist/` folder

## 🎨 Color Palette
| Name | Hex |
|------|-----|
| Saffron | `#FF6B00` |
| Gold | `#C8941A` |
| Deep Maroon | `#1A0A00` |
| Teal | `#006B6B` |
| Cream | `#FFF8EE` |

## 📦 Packages Included
1. Golden Triangle Classic — ₹38,000
2. Royal Rajasthan Splendour — ₹68,000
3. Kerala Serenity Escape — ₹52,000
4. Ladakh Himalayan Odyssey — ₹85,000
5. Goa Sun & Bliss — ₹28,000
6. Spiritual Varanasi & Bodhgaya — ₹32,000

---
*Made with ❤️ for Incredible India — Capstone Project 2024*
