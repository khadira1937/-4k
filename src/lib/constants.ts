export const SITE_NAME = "Fast IPTV";
export const SITE_URL = "https://fast-iptv.tv";
export const CONTACT_EMAIL = "support@fast-iptv.tv";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Why Us", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "DMCA Policy", href: "/dmca" },
  { label: "Refund Policy", href: "/refund" },
] as const;

export const STATS = [
  { value: "37,000+", label: "Live Channels" },
  { value: "198,000+", label: "Films & Series" },
  { value: "99.9%", label: "Uptime" },
  { value: "50,000+", label: "UK Subscribers" },
] as const;

export const FEATURES = [
  {
    title: "Fast IPTV Activation — Credentials In Under 60 Seconds",
    description:
      "Pay and your login details arrive by email before the checkout page finishes loading. No human review, no activation queue. The fastest delivery window in the UK IPTV market — verified by independent timing tests.",
    icon: "Zap" as const,
  },
  {
    title: "Strong IPTV Servers — Zero-Buffer 4K On UK Infrastructure",
    description:
      "Every stream originates from high-capacity data centres on British soil. Low-latency routing means Premier League goals land on your screen in near real-time. The strong server backbone that keeps 4K running without a single stutter.",
    icon: "Monitor" as const,
  },
  {
    title: "37,000 Channels — The Widest Fast IPTV UK Library",
    description:
      "Access one of the largest IPTV selections available, with tens of thousands of options covering every category. Smooth navigation and ultra-fast switching ensure a seamless viewing experience across all supported devices.",
    icon: "Tv" as const,
  },
  {
    title: "Premium IPTV Quality — Native 4K UHD On Every Plan",
    description:
      "If the broadcaster sends 4K, you receive 4K. Adaptive bitrate holds the picture steady when broadband dips, but never throttles because the plan restricts it. Premium viewing without premium lag.",
    icon: "Film" as const,
  },
  {
    title: "Best IPTV UK For Live Sport — Near-Zero Delay",
    description:
      "Sport is where speed matters most. Our feeds run with sub-three-second delay on football, rugby, cricket and F1. Hear the roar as it happens, not thirty seconds after your neighbour texts the score.",
    icon: "LayoutGrid" as const,
  },
  {
    title: "Cheap IPTV Subscription — Speed From £25.99/Month",
    description:
      "Full access to 37,000 channels, 4K and VPN from £25.99. The cheapest path into the fastest IPTV service in Britain. Compare that to Sky at £75+ for fewer channels and slower EPG navigation.",
    icon: "Clock" as const,
  },
  {
    title: "Buy IPTV With Built-In VPN — Fast And Private",
    description:
      "A full VPN tunnel wraps every stream at zero extra cost. The encryption adds no measurable latency — tested and published monthly. Privacy at full speed, not as a paid add-on.",
    icon: "Shield" as const,
  },
  {
    title: "24/7 UK Support — The IPTV Service That Replies In Minutes",
    description:
      "A named British team answers live chat, WhatsApp and email around the clock. Average first response: under four minutes. When something goes wrong, speed of resolution matters as much as speed of streaming.",
    icon: "Smartphone" as const,
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "bronze",
    tier: "Quick Start",
    name: "3 Months",
    subtitle: "Three months of the fastest IPTV in the UK",
    price: 38.97,
    originalPrice: 59.99,
    perMonth: 12.99,
    period: "3 months",
    devices: 5,
    badge: "Quick Start",
    discount: "-35%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "60-second activation by email",
    ],
    popular: false,
    savings: null,
  },
  {
    id: "silver",
    tier: "Half-Year Value",
    name: "6 Months",
    subtitle: "Six months of uninterrupted high-speed streaming",
    price: 65.94,
    originalPrice: 119.99,
    perMonth: 10.99,
    period: "6 months",
    devices: 5,
    badge: "Half-Year Value",
    discount: "-45%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "60-second activation by email",
    ],
    popular: false,
    savings: "Save 45%",
  },
  {
    id: "gold",
    tier: "Annual",
    name: "12 Months",
    subtitle: "A full year of the best fast IPTV UK value",
    price: 93.48,
    originalPrice: 155.88,
    perMonth: 7.79,
    period: "year",
    devices: 5,
    badge: "Most Popular — Save 40%",
    discount: "-40%",
    accentColor: "blue",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "60-second activation by email",
    ],
    popular: true,
    savings: "Save 40%",
  },
  {
    id: "diamond",
    tier: "Elite",
    name: "24 Months",
    subtitle: "Two years locked at the lowest rate — full speed guaranteed",
    price: 140.4,
    originalPrice: 311.76,
    perMonth: 5.85,
    period: "2 years",
    devices: 5,
    badge: "Elite — Save 55%",
    discount: "-55%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "60-second activation by email",
    ],
    popular: false,
    savings: "Save 55%",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Jake R.",
    location: "London",
    text: "Paid at 7:58pm, email arrived at 7:58pm, first channel playing by 8:00pm. That is not an exaggeration. The fastest activation I have ever seen from an IPTV provider.",
    rating: 5,
    avatar: "JR",
    since: "January 2026",
  },
  {
    name: "Laura F.",
    location: "Oxford",
    text: "The Premier League feed is practically real-time. My neighbour on Sky texted me about a goal and I had already seen it. That sub-three-second delay is genuine.",
    rating: 5,
    avatar: "LF",
    since: "February 2026",
  },
  {
    name: "Ryan M.",
    location: "Plymouth",
    text: "Channel switching is instant on TiviMate. My last service took four seconds per flip. Here it is under one. Makes browsing 37,000 channels actually enjoyable.",
    rating: 5,
    avatar: "RM",
    since: "November 2025",
  },
  {
    name: "Sarah T.",
    location: "Norwich",
    text: "Five screens running 4K at the same time and not a single buffer. The servers behind this are clearly built for speed. The cheapest subscription I have found that does not lag.",
    rating: 5,
    avatar: "ST",
    since: "December 2025",
  },
  {
    name: "Marcus B.",
    location: "Sheffield",
    text: "Support replied on live chat in two minutes at midnight. The speed is not just in the streaming — the entire operation runs like clockwork. Best IPTV UK experience by far.",
    rating: 5,
    avatar: "MB",
    since: "March 2026",
  },
  {
    name: "Halima A.",
    location: "Bradford",
    text: "I wanted Arabic and British channels on one subscription. Setup was absurdly quick and the stream quality is better than my old satellite. VPN included sealed the deal.",
    rating: 5,
    avatar: "HA",
    since: "October 2025",
  },
] as const;

export const DEVICES = [
  { name: "Amazon Fire Stick", icon: "Flame" as const },
  { name: "Smart TV", icon: "Tv" as const },
  { name: "Android / iOS", icon: "Smartphone" as const },
  { name: "Windows / Mac", icon: "Monitor" as const },
  { name: "MAG / Formuler", icon: "Box" as const },
  { name: "Apple TV", icon: "Airplay" as const },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What makes this a fast IPTV service?",
    answer:
      "Three measurable speed benchmarks: 60-second activation after payment, sub-one-second channel switching on supported apps and sub-three-second live sport delay. Every metric is tested and published.",
  },
  {
    question: "How fast is activation after I buy IPTV?",
    answer:
      "Under sixty seconds. Your M3U credentials and app login arrive by email the instant payment clears. No human review, no office-hours queue. The fastest delivery in UK IPTV.",
  },
  {
    question: "Is this the fastest IPTV in the UK?",
    answer:
      "Based on activation speed, channel switch time and sport delay, yes. We publish all three benchmarks and invite any competitor to match them. No other UK provider has done so.",
  },
  {
    question: "Does fast IPTV sacrifice quality for speed?",
    answer:
      "No. Every plan includes native 4K UHD on channels that broadcast in the format. Adaptive bitrate holds the picture steady when broadband dips. Speed and quality run in parallel.",
  },
  {
    question: "Which devices give the fastest IPTV experience?",
    answer:
      "Amazon Firestick 4K Max and Nvidia Shield deliver the quickest channel switches. TiviMate and IPTV Smarters Pro are the two apps optimised for speed. All six supported players work on one login.",
  },

  {
    question: "Does the VPN slow down fast IPTV streaming?",
    answer:
      "No. Our built-in VPN adds no measurable latency. We test and publish VPN overhead figures monthly. Privacy runs at the same speed as unencrypted streams.",
  },
  {
    question: "What internet speed do I need?",
    answer:
      "25 Mbps for clean 4K. 10 Mbps for HD. Anti-Freeze technology adapts mid-stream so the picture stays stable even on slower rural broadband.",
  },
  {
    question: "How many screens can stream at once?",
    answer:
      "Five simultaneous screens on every plan. The server load-balances across connections so each screen receives the same speed regardless of how many are active.",
  },
  {
    question: "Is there a contract or cancellation fee?",
    answer:
      "No contract and no fee. Every plan includes a 30-day money-back guarantee. Request a refund and every penny returns same-day.",
  },
  {
    question: "How fast does support respond?",
    answer:
      "Under four minutes on live chat, 24/7. A named UK team handles WhatsApp and email around the clock. Published weekly so you can verify the speed before you subscribe.",
  },
  {
    question: "Why is fast-iptv.tv cheaper than Sky?",
    answer:
      "No satellite infrastructure, no engineers, no long contracts. A lean digital operation delivers 37,000 channels from £25.99 for 3 months. Sky charges £75+ for fewer channels and slower EPG navigation.",
  },
] as const;

export const CHANNEL_CATEGORIES = [
  {
    name: "UK Sport — Fast IPTV Feeds With Near-Zero Delay",
    count: "5,500+",
    icon: "Trophy" as const,
    channels:
      "Watch live sports events in high definition with stable, low-latency streams. From major competitions to everyday fixtures, every moment is delivered with speed and clarity for real-time viewing.",
  },
  {
    name: "British Entertainment — Premium IPTV Channel Pack",
    count: "500+",
    icon: "Tv" as const,
    channels:
      "Enjoy a rich collection of British entertainment, including popular series, lifestyle shows, and daily programming. Regional coverage and time-shift features are included for flexible and convenient watching.",
  },
  {
    name: "On-Demand Cinema — 198,000 Titles, Instant Playback",
    count: "198,000+",
    icon: "Film" as const,
    channels:
      "Sky Cinema, Film4, Paramount+ and international premieres. Titles load in under three seconds on a 25 Mbps connection. The on-demand library that matches the speed of the live feeds.",
  },
  {
    name: "strong IPTV News & Current Affairs",
    count: "1,200+",
    icon: "Newspaper" as const,
    channels:
      "Follow global and local news as it happens with continuous coverage and real-time updates. Stay connected to the latest developments with reliable streams available around the clock.",
  },
  {
    name: "best iptv Kids & Family Channels",
    count: "800+",
    icon: "Baby" as const,
    channels:
      "A dedicated space for children and families, offering entertaining and educational content in a secure environment. Parental controls make it easy to manage access and ensure safe viewing at all times.",
  },
  {
    name: "International — 40+ Languages, Bundled Free",
    count: "17,000+",
    icon: "Globe" as const,
    channels:
      "Arabic, Urdu, Hindi, Polish, Portuguese, Turkish, French and 36 more language packs bundled free. Filter by language or country from the sidebar in a single tap.",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "best-iptv-uk-guide-2026",
    title: "Best IPTV UK 2026 — How To Choose A Trusted Fast IPTV Provider",
    excerpt:
      "Finding the best IPTV service in the UK means looking beyond flashy promises. This guide breaks down the 7 criteria that matter most for British viewers — from channel quality and reliability to support and genuine value.",
    date: "2026-04-01",
    readTime: "12 min read",
    category: "Guide",
  },
  {
    slug: "how-to-setup-iptv-firestick",
    title: "How To Set Up Fast IPTV On Amazon Fire Stick — Two-Minute Guide",
    excerpt:
      "A complete, beginner-friendly guide to installing and configuring a fast IPTV subscription on an Amazon Fire Stick. Stream 37,000 UK channels in 4K in under 10 minutes using the step-by-step instructions below.",
    date: "2026-03-20",
    readTime: "6 min read",
    category: "Tutorial",
  },
  {
    slug: "iptv-vs-sky-comparison",
    title: "Fast IPTV vs Sky — Which Service Is Better For UK Viewers In 2026?",
    excerpt:
      "An honest comparison of fast IPTV and Sky TV for UK households. Costs, channel availability, picture quality, flexibility and value — everything needed to make the switch.",
    date: "2026-03-15",
    readTime: "8 min read",
    category: "Comparison",
  },
  {
    slug: "premier-league-streaming-guide",
    title: "Watch Every Premier League Match — Fast IPTV Streaming Guide",
    excerpt:
      "Every Premier League match, plus Championship, La Liga, Serie A and more — all in stunning HD and 4K quality through a single fast IPTV subscription with sub-3-second delay.",
    date: "2026-03-10",
    readTime: "5 min read",
    category: "Sports",
  },
] as const;
