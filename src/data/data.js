export const destinations = [
  { id:1, name:"Rajasthan", image:"https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=800", tagline:"Land of Kings", icon:"🏰", days:"7–14", price:68000, rating:4.9, reviews:1240, color:"#FF6B00", grad:"linear-gradient(135deg,#FF6B00,#C8941A)", tag:"Most Popular", desc:"Majestic forts, royal palaces, golden deserts and vibrant culture. Experience the grandeur of India's most iconic state.", highlights:["Amber Fort Elephant Ride","Camel Safari Jaisalmer","Palace Hotel Dinner","Pushkar Lake Sunrise"] },
  { id:2, name:"Kerala", image:"https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800", tagline:"God's Own Country", icon:"🌴", days:"6–10", price:52000, rating:4.8, reviews:980, color:"#006B6B", grad:"linear-gradient(135deg,#004D40,#00897B)", tag:"Nature Escape", desc:"Emerald backwaters, spice gardens, Ayurvedic spas and golden beaches.", highlights:["Houseboat Stay Alleppey","Munnar Tea Gardens","Kathakali Performance","Ayurvedic Spa Day"] },
  { id:3, name:"Agra & Taj Mahal", image:"https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800", tagline:"Monument to Love", icon:"🕌", days:"2–3", price:18000, rating:4.9, reviews:2100, color:"#2D1B69", grad:"linear-gradient(135deg,#1A237E,#6A1B9A)", tag:"UNESCO Heritage", desc:"Witness the greatest monument of love at sunrise. The Taj Mahal is an architectural wonder that will leave you speechless.", highlights:["Taj Mahal Sunrise Visit","Agra Fort Tour","Mehtab Bagh Sunset","Mughal Cuisine Dinner"] },
  { id:4, name:"Goa", image:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800", tagline:"Sun, Sand & Soul", icon:"🏖️", days:"4–7", price:35000, rating:4.7, reviews:1560, color:"#0066AA", grad:"linear-gradient(135deg,#006994,#00B4D8)", tag:"Beach Paradise", desc:"Golden beaches, Portuguese architecture, vibrant nightlife and fresh seafood.", highlights:["Beach Shack Seafood","Old Goa Churches","Dudhsagar Waterfall Trek","Spice Plantation Tour"] },
  { id:5, name:"Ladakh", image:"https://images.unsplash.com/photo-1581793746407-7bb23773172e?auto=format&fit=crop&q=80&w=800", tagline:"Land of High Passes", icon:"🏔️", days:"8–14", price:78000, rating:4.9, reviews:760, color:"#1565C0", grad:"linear-gradient(135deg,#0D47A1,#283593)", tag:"Adventure", desc:"Dramatic landscapes, ancient monasteries, crystal-clear lakes and world's highest motorable roads.", highlights:["Pangong Lake Camp","Nubra Valley Jeep Safari","Magnetic Hill Visit","Monastery Meditation"] },
  { id:6, name:"Varanasi", image:"https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=800", tagline:"The Eternal City", icon:"🪔", days:"3–5", price:22000, rating:4.8, reviews:870, color:"#BF360C", grad:"linear-gradient(135deg,#BF360C,#E64A19)", tag:"Spiritual", desc:"The oldest living city. Ganga Aarti, ancient ghats, silk weaving and the spiritual heart of India.", highlights:["Ganga Aarti Ceremony","Sunrise Boat Ride","Old City Walk","Silk Weaving Workshop"] },
];

export const internationalDestinations = [
  { id:1, name:"Dubai, UAE", image:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800", icon:"🌆", price:"₹45,000", color:"#C8941A", grad:"linear-gradient(135deg,#C8941A,#FF6B00)", desc:"Burj Khalifa, desert safari, gold souk & luxury shopping", nights:"5N/6D", badge:"Most Booked" },
  { id:2, name:"Bali, Indonesia", image:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800", icon:"🌺", price:"₹55,000", color:"#006B6B", grad:"linear-gradient(135deg,#004D40,#00897B)", desc:"Rice terraces, Uluwatu Temple, surf and yoga retreats", nights:"6N/7D", badge:"Trending" },
  { id:3, name:"Singapore", image:"https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800", icon:"🦁", price:"₹65,000", color:"#0066AA", grad:"linear-gradient(135deg,#006994,#0288D1)", desc:"Marina Bay Sands, Gardens by the Bay, hawker food", nights:"5N/6D", badge:"Popular" },
  { id:4, name:"Paris, France", image:"https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800", icon:"🗼", price:"₹1,20,000", color:"#2D1B69", grad:"linear-gradient(135deg,#1A237E,#6A1B9A)", desc:"Eiffel Tower, Louvre museum, Versailles & French cuisine", nights:"7N/8D", badge:"Europe Pick" },
  { id:5, name:"Thailand", image:"https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800", icon:"🐘", price:"₹40,000", color:"#004D40", grad:"linear-gradient(135deg,#004D40,#00695C)", desc:"Phuket beaches, Chiang Mai temples & vibrant street food", nights:"6N/7D", badge:"Budget Friendly" },
  { id:6, name:"Sri Lanka", image:"https://images.unsplash.com/photo-1586227740560-8cf2732c1531?auto=format&fit=crop&q=80&w=800", icon:"🌿", price:"₹38,000", color:"#8B1A1A", grad:"linear-gradient(135deg,#8B1A1A,#C62828)", desc:"Sigiriya rock fortress, beaches, ancient ruins & tea estates", nights:"5N/6D", badge:"Nearby Gem" },
  { id:7, name:"Maldives", image:"https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800", icon:"🐠", price:"₹95,000", color:"#0097A7", grad:"linear-gradient(135deg,#006064,#0097A7)", desc:"Overwater villas, coral reefs & crystal-clear lagoons", nights:"4N/5D", badge:"Luxury" },
  { id:8, name:"Switzerland", image:"https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800", icon:"⛷️", price:"₹1,80,000", color:"#1565C0", grad:"linear-gradient(135deg,#0D47A1,#1976D2)", desc:"Swiss Alps, Interlaken adventure & the chocolate train", nights:"7N/8D", badge:"Dream Trip" },
];

export const packages = [
  {
    id:1, name:"Golden Triangle Classic", image:"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800", duration:"6 Days / 5 Nights", route:"Delhi → Agra → Jaipur",
    price:38000, originalPrice:52000, rating:4.9, reviews:1840, category:"Heritage",
    badge:"Best Seller", badgeColor:"#FF6B00", color:"#2D1B69", grad:"linear-gradient(135deg,#1A237E,#6A1B9A)",
    desc:"The most iconic Indian circuit — Mughal grandeur, the Taj Mahal at sunrise and Rajput palaces.",
    highlights:["5-star hotel stay","Taj Mahal sunrise visit","Amber Fort elephant ride","Chandni Chowk food walk","All transfers included"],
    inclusions:["Flights","5-Star Hotels","Breakfast & Dinner","Guided Sightseeing","Private Transfers"],
    exclusions:["Lunch","Personal shopping","Tips & Gratuity","Camera fees at monuments"],
    itinerary:[
      {day:1,title:"Arrive Delhi",desc:"Airport pickup, India Gate, Qutub Minar, Lodhi Garden evening walk, welcome dinner."},
      {day:2,title:"Delhi Sightseeing",desc:"Red Fort, Chandni Chowk food tour, Humayun's Tomb, ISKCON Temple."},
      {day:3,title:"Delhi → Agra",desc:"Morning train to Agra, Taj Mahal at golden hour, Agra Fort, local Mughlai dinner."},
      {day:4,title:"Agra → Jaipur",desc:"Sunrise Taj Mahal visit, Fatehpur Sikri stop, drive to Jaipur (Pink City)."},
      {day:5,title:"Jaipur",desc:"Amber Fort elephant ride, City Palace, Hawa Mahal, Jantar Mantar, Johari Bazaar."},
      {day:6,title:"Departure",desc:"Morning free for shopping, airport/station transfer."},
    ]
  },
  {
    id:2, name:"Royal Rajasthan Splendour", image:"https://images.unsplash.com/photo-1599661509645-a0ce51ce6040?auto=format&fit=crop&q=80&w=800", duration:"10 Days / 9 Nights", route:"Jaipur → Jodhpur → Jaisalmer → Udaipur",
    price:68000, originalPrice:95000, rating:4.9, reviews:1240, category:"Luxury",
    badge:"Most Popular", badgeColor:"#C8941A", color:"#FF6B00", grad:"linear-gradient(135deg,#FF6B00,#C8941A)",
    desc:"Live like royalty — heritage palace hotels, camel safari in the Thar Desert and Lake Pichola sunsets.",
    highlights:["Palace hotel stays","Camel safari Thar Desert","Luxury desert camp night","Mehrangarh Fort private tour","Lake Pichola sunset boat"],
    inclusions:["Flights","Heritage Palace Hotels","All Meals","Desert Camp","Private AC Car","Camel Safari"],
    exclusions:["Alcohol","Personal Shopping","Tips & Gratuity","Optional activities"],
    itinerary:[
      {day:1,title:"Arrive Jaipur",desc:"Airport welcome, check-in heritage palace hotel, Amber Fort, City Palace, Bazaar evening."},
      {day:2,title:"Jaipur",desc:"Jantar Mantar, Nahargarh Fort sunset, block printing workshop, royal dinner."},
      {day:3,title:"Jaipur → Jodhpur",desc:"Scenic drive 5hrs, Mehrangarh Fort, Jaswant Thada, Blue City walk."},
      {day:4,title:"Jodhpur → Jaisalmer",desc:"Desert highway drive, Sam Sand Dunes jeep safari, sunset camel ride."},
      {day:5,title:"Desert Camp",desc:"Overnight luxury tent camp — folk music, bonfire, stargazing under the Milky Way."},
      {day:6,title:"Jaisalmer",desc:"Golden Fort walk, Patwon Ki Haveli, local bazaars, sunset at Bada Bagh."},
      {day:7,title:"Jaisalmer → Udaipur",desc:"Short flight, City Palace, Jagdish Temple, lake promenade."},
      {day:8,title:"Udaipur",desc:"Lake Pichola sunset boat, Monsoon Palace, Saheliyon Ki Bari, Mewar Cultural Show."},
      {day:9,title:"Udaipur",desc:"Vintage car museum, Ayurvedic spa session, farewell gala dinner."},
      {day:10,title:"Departure",desc:"Morning photography walk, airport transfer."},
    ]
  },
  {
    id:3, name:"Kerala Serenity Escape", image:"https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=800", duration:"8 Days / 7 Nights", route:"Kochi → Munnar → Thekkady → Alleppey",
    price:52000, originalPrice:72000, rating:4.8, reviews:980, category:"Nature",
    badge:"Staff Pick", badgeColor:"#006B6B", color:"#006B6B", grad:"linear-gradient(135deg,#004D40,#00897B)",
    desc:"Tropical paradise — houseboat on backwaters, tea garden sunrises and authentic Ayurvedic healing.",
    highlights:["Luxury houseboat stay","Munnar sunrise tea garden","Periyar wildlife boat safari","Full Ayurvedic spa session","Kathakali dance performance"],
    inclusions:["Flights","Houseboat","Boutique Hotels","Breakfast daily","Private Transfers"],
    exclusions:["Dinner except houseboat","Spa charges","Optional activities"],
    itinerary:[
      {day:1,title:"Arrive Kochi",desc:"Fort Kochi heritage walk, Chinese fishing nets, St Francis Church, Mattancherry Palace."},
      {day:2,title:"Kochi → Munnar",desc:"Scenic mountain drive 4hrs, tea museum, Echo Point, Kundala Lake."},
      {day:3,title:"Munnar",desc:"Pre-dawn tea garden walk, Eravikulam National Park, Top Station viewpoint."},
      {day:4,title:"Munnar → Thekkady",desc:"Periyar Lake wildlife boat safari, Spice plantation tour with lunch, elephant bathing."},
      {day:5,title:"Thekkady → Alleppey",desc:"Bamboo rafting, Alleppey arrival, luxury houseboat check-in, backwater cruise."},
      {day:6,title:"Houseboat",desc:"Full-day cruise through coconut-fringed canals, village visits, sunset on water."},
      {day:7,title:"Kovalam",desc:"Lighthouse Beach, Padmanabhaswamy Temple, 2hr Ayurvedic massage, seafood dinner."},
      {day:8,title:"Departure",desc:"Morning yoga session, Trivandrum airport transfer."},
    ]
  },
  {
    id:4, name:"Ladakh Himalayan Odyssey", image:"https://images.unsplash.com/photo-1526715017835-26038166d11d?auto=format&fit=crop&q=80&w=800", duration:"12 Days / 11 Nights", route:"Leh → Nubra → Pangong → Manali",
    price:85000, originalPrice:120000, rating:4.9, reviews:540, category:"Adventure",
    badge:"Thrilling", badgeColor:"#1565C0", color:"#1565C0", grad:"linear-gradient(135deg,#0D47A1,#1565C0)",
    desc:"The ultimate bucket-list adventure — world's highest roads, Pangong Lake and ancient Buddhist monasteries.",
    highlights:["Pangong Lake sunrise camp","Nubra double-hump camel safari","Khardung La (5,359m) crossing","Ancient monastery stays","Chandratal Lake trek"],
    inclusions:["Flights","Camps & Guesthouses","All Meals","Jeep Safari","Inner Line Permits"],
    exclusions:["Travel insurance","Personal trekking gear","Porter charges","Tips"],
    itinerary:[
      {day:1,title:"Arrive Leh",desc:"Acclimatisation rest day. Easy walk — Leh Palace, Shanti Stupa, local market."},
      {day:2,title:"Leh Monasteries",desc:"Thiksey Monastery, Hemis, Shey Palace, Rancho School (3 Idiots location)."},
      {day:3,title:"Leh → Nubra",desc:"Cross Khardung La (world's highest motorable road at 5,359m), sand dunes camp."},
      {day:4,title:"Nubra Valley",desc:"Double-hump Bactrian camel safari, Diskit Monastery, Hunder village."},
      {day:5,title:"Nubra → Pangong",desc:"Scenic drive via Shyok River valley, Pangong Lake camp check-in."},
      {day:6,title:"Pangong Lake",desc:"Sunrise over the colour-changing lake, photography golden hour, relaxation."},
      {day:7,title:"Pangong → Leh",desc:"Chang La pass, Drak Tok Monastery, Leh local market."},
      {day:8,title:"Leh → Sarchu",desc:"Magnetic Hill, Gurudwara Patthar Sahib, Gata Loops, Sarchu plains camp."},
      {day:9,title:"Sarchu → Keylong",desc:"Baralacha La, Suraj Tal high-altitude lake, Keylong rest."},
      {day:10,title:"Keylong → Manali",desc:"Rohtang Pass, Solang Valley, snow activities, arrive Manali."},
      {day:11,title:"Manali",desc:"Hadimba Devi Temple, Van Vihar, Mall Road, riverside bonfire dinner."},
      {day:12,title:"Departure",desc:"Volvo bus or flight from Kullu Manali to Delhi."},
    ]
  },
  {
    id:5, name:"Goa Sun & Bliss", image:"https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&q=80&w=800", duration:"5 Days / 4 Nights", route:"North Goa → South Goa",
    price:28000, originalPrice:38000, rating:4.7, reviews:1560, category:"Beach",
    badge:"Budget Friendly", badgeColor:"#E65100", color:"#0066AA", grad:"linear-gradient(135deg,#006994,#0288D1)",
    desc:"Golden beaches, colonial churches, jungle waterfalls and the best seafood in India.",
    highlights:["4-star beach resort","Dudhsagar waterfall jeep trip","Old Goa UNESCO churches","Spice plantation Goan lunch","Backwaters sunset cruise"],
    inclusions:["Flights","Beach Resort","Breakfast","Airport Transfers","Sunset Cruise"],
    exclusions:["Lunch & Dinner","Water sports charges","Nightlife expenses"],
    itinerary:[
      {day:1,title:"Arrive Goa",desc:"Airport pickup, Calangute & Baga beach, sunset at Fort Aguada, welcome dinner."},
      {day:2,title:"North Goa",desc:"Anjuna Wednesday flea market, Chapora Fort (Dil Chahta Hai spot), dolphin spotting cruise."},
      {day:3,title:"Dudhsagar & Spice Farm",desc:"Full-day jeep safari to Dudhsagar Falls, spice plantation Goan lunch."},
      {day:4,title:"South Goa",desc:"Colva, Palolem & Agonda beaches, Old Goa Basilica, Dona Paula, sunset river cruise."},
      {day:5,title:"Departure",desc:"Morning beach walk, feni tasting, souvenir shopping, airport drop."},
    ]
  },
  {
    id:6, name:"Spiritual Varanasi & Bodhgaya", image:"https://images.unsplash.com/photo-1620894080775-57f9ed1778ea?auto=format&fit=crop&q=80&w=800", duration:"6 Days / 5 Nights", route:"Varanasi → Sarnath → Bodhgaya",
    price:32000, originalPrice:42000, rating:4.8, reviews:720, category:"Spiritual",
    badge:"Soul Journey", badgeColor:"#BF360C", color:"#BF360C", grad:"linear-gradient(135deg,#BF360C,#E64A19)",
    desc:"The most spiritually profound journey in India — the Ganga, the Bodhi Tree and timeless wisdom.",
    highlights:["Ganga Aarti front-row seats","Pre-dawn Ganges boat ride","Sarnath excavation site","Bodhgaya Mahabodhi Temple","Silk saree weaving workshop"],
    inclusions:["Flights","Boutique Heritage Hotels","Breakfast & Dinner","All Guided Tours","Boat Rides"],
    exclusions:["Lunch","Shopping","Monument camera fees"],
    itinerary:[
      {day:1,title:"Arrive Varanasi",desc:"Evening ghats walk, front-row Ganga Aarti at Dashashwamedh Ghat, welcome dinner."},
      {day:2,title:"Sunrise Ganges",desc:"Pre-dawn boat ride (5am), Manikarnika burning ghat, Kashi Vishwanath Temple darshan."},
      {day:3,title:"Varanasi Deep Dive",desc:"Narrow old city lanes, Banaras Hindu University, silk weaving workshop, evening meditation."},
      {day:4,title:"Sarnath",desc:"Where Buddha gave his first sermon — Dhamek Stupa, archaeological museum, monasteries."},
      {day:5,title:"Bodhgaya",desc:"Mahabodhi Temple (UNESCO), the sacred Bodhi Tree, meditation session, Thai/Japanese monasteries."},
      {day:6,title:"Departure",desc:"Sunrise yoga by Ganges, Patna airport transfer."},
    ]
  },
];

export const testimonials = [
  { id:1, name:"Sneha Reddy", loc:"Hyderabad, India", avatar:"SR", rating:5, text:"The Rajasthan trip was absolutely magical. Every detail was perfect — the heritage hotels, camel safari at sunset and folk music under the stars. Most beautiful trip of my life!" },
  { id:2, name:"Arjun & Meena Sharma", loc:"Bangalore, India", avatar:"AM", rating:5, text:"Booked the Kerala houseboat package for our anniversary. Alleppey backwaters at sunset, fresh seafood, coconut palms — it felt like paradise. The team handled everything flawlessly!" },
  { id:3, name:"James Harrison", loc:"London, UK", avatar:"JH", rating:5, text:"Came from London and BharatYatra handled visa, flights, hotels and guides. The Golden Triangle was immaculately organised. India is even more beautiful than I imagined!" },
  { id:4, name:"Liu Wei", loc:"Beijing, China", avatar:"LW", rating:5, text:"Ladakh was life-changing. Pangong Lake at sunrise, riding over Khardung La — these are memories I will carry forever. The local guides were incredibly knowledgeable and warm." },
  { id:5, name:"Priya Nair", loc:"Dubai, UAE", avatar:"PN", rating:5, text:"Varanasi was deeply moving. The sunrise boat on the Ganges and the Ganga Aarti ceremony were among the most powerful experiences of my life. Absolutely recommend!" },
  { id:6, name:"Marco Bianchi", loc:"Milan, Italy", avatar:"MB", rating:5, text:"I have visited 60+ countries. India with BharatYatra was the most authentic, immersive experience ever. The food tours alone were worth the entire trip!" },
];

export const stats = [
  { label:"Happy Travellers", value:50000, suffix:"+" },
  { label:"Destinations", value:200, suffix:"+" },
  { label:"Countries Covered", value:35, suffix:"+" },
  { label:"Expert Guides", value:120, suffix:"+" },
];

export const monthlyData = [
  { month:"Jan", domestic:3200, international:800 },
  { month:"Feb", domestic:3800, international:950 },
  { month:"Mar", domestic:4500, international:1100 },
  { month:"Apr", domestic:5200, international:1400 },
  { month:"May", domestic:4800, international:1300 },
  { month:"Jun", domestic:3600, international:1000 },
  { month:"Jul", domestic:4200, international:1200 },
  { month:"Aug", domestic:5600, international:1600 },
  { month:"Sep", domestic:6200, international:1800 },
  { month:"Oct", domestic:7800, international:2100 },
  { month:"Nov", domestic:8500, international:2400 },
  { month:"Dec", domestic:9200, international:2800 },
];