export const SITE_NAME = "British IPTV 4K";
export const SITE_URL = "https://british-iptv-4k.com";
export const CONTACT_EMAIL = "support@british-iptv-4k.com";

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
  { value: "50,000+", label: "Subscribers" },
] as const;

export const FEATURES = [
  {
    title: "British IPTV With 37,000 Channels — The Widest IPTV UK Library",
    description:
      "With over 37,000 live channels available and continuously expanding, this service delivers unmatched variety across all categories. Everything viewers expect is included in one place, making it one of the most complete and reliable IPTV UK selections.",
    icon: "Tv" as const,
  },
  {
    title: "Premium IPTV Streaming In Native 4K UHD",
    description:
      "If the broadcaster transmits 4K, your screen receives 4K. Our adaptive bitrate engine scales the picture only when broadband dips — never because the plan restricts it. Every tier includes UHD at no extra cost.",
    icon: "Monitor" as const,
  },
  {
    title: "Strong IPTV Servers On British Soil",
    description:
      "Every stream originates from data centres inside the UK. Lower latency for Premier League kick-offs, EPG times locked to GMT and regional news bulletins that actually match your postcode.",
    icon: "Zap" as const,
  },
  {
    title: "Fast IPTV Activation — Streaming In Under 60 Seconds",
    description:
      "Pay and your credentials land by email before you close the checkout tab. No manual review, no activation queue — just fast delivery that lets you watch within a minute of placing the order.",
    icon: "Clock" as const,
  },
  {
    title: "Best IPTV UK For Families — Five Simultaneous Screens",
    description:
      "Mum on Coronation Street, Dad on the football, kids on CBeebies, Nan on Antiques Roadshow and you on a documentary. Five concurrent streams mean nobody fights over the remote.",
    icon: "LayoutGrid" as const,
  },
  {
    title: "Cheap IPTV Subscription From £12.99 Per Month",
    description:
      "Premium channels at a price that undercuts Sky by more than £60 a month. From £12.99 you unlock the full British library, 4K and the built-in VPN. Value without compromise.",
    icon: "Clock" as const,
  },
  {
    title: "Buy IPTV With A Built-In VPN — Privacy Included",
    description:
      "A full VPN tunnel wraps every stream at zero extra cost. No upsell, no bandwidth cap, no usage logs. Browse, stream and catch up without leaving a digital trail.",
    icon: "Shield" as const,
  },
  {
    title: "24/7 UK Support — An IPTV Service That Actually Answers",
    description:
      "A British support team handles live chat, WhatsApp and email around the clock. Average first reply sits under four minutes — measured and published weekly.",
    icon: "Film" as const,
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "bronze",
    tier: "Starter",
    name: "3 Months",
    subtitle: "A quarter of full British IPTV — ideal first step",
    price: 38.97,
    originalPrice: 59.99,
    perMonth: 12.99,
    period: "3 months",
    devices: 5,
    badge: "Starter",
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
    tier: "Half-Year Saver",
    name: "6 Months",
    subtitle: "Six months of uninterrupted streaming at a strong price point",
    price: 65.94,
    originalPrice: 119.99,
    perMonth: 10.99,
    period: "6 months",
    devices: 5,
    badge: "Half-Year Saver",
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
    subtitle: "A full year at the best value rate",
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
    subtitle: "Two years locked at the lowest monthly price",
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
    name: "Thomas G.",
    location: "Manchester",
    text: "Switched from Sky after fifteen years. This gives me every channel I had plus thousands more, and the subscription costs less than my old sports add-on alone. Easily the best IPTV UK option I have tested.",
    rating: 5,
    avatar: "TG",
    since: "January 2026",
  },
  {
    name: "Sophie L.",
    location: "Edinburgh",
    text: "Finally a provider that includes BBC Alba and STV as standard. Regional channels are not an afterthought — they load instantly. The premium picture quality on live sport is outstanding for the price.",
    rating: 5,
    avatar: "SL",
    since: "February 2026",
  },
  {
    name: "James K.",
    location: "Cardiff",
    text: "The 4K picture during the Six Nations was unreal. My old service froze every scrum. These strong servers held solid for eighty minutes without a single buffer.",
    rating: 5,
    avatar: "JK",
    since: "November 2025",
  },
  {
    name: "Priya S.",
    location: "Leicester",
    text: "I needed Hindi and Urdu channels alongside the British line-up. This is the only option that carries both without a separate add-on. Five screens for £12.99 is a genuinely cheap subscription that does not cut corners.",
    rating: 5,
    avatar: "PS",
    since: "December 2025",
  },
  {
    name: "Callum D.",
    location: "Liverpool",
    text: "Setup was absurdly fast — Firestick running in two minutes. The EPG lists British channels first, which none of my previous providers bothered to do. I will not buy from anyone else.",
    rating: 5,
    avatar: "CD",
    since: "March 2026",
  },
  {
    name: "Fiona M.",
    location: "Glasgow",
    text: "The 24/7 support actually understood my question without a script. The team is UK-based and that alone makes a difference at midnight. Check the reviews on Trustpilot if you need convincing.",
    rating: 5,
    avatar: "FM",
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
    question: "What is British IPTV and how does the service work?",
    answer:
      "British IPTV delivers live UK television, on-demand films and international channels over your broadband connection instead of a satellite dish or aerial. It works on any internet-connected device, giving access to 37,000 channels including every major UK broadcaster.",
  },
  {
    question: "How is this different from other IPTV providers?",
    answer:
      "All streams route through UK-based servers. The EPG is organised around British time zones, UK channels sit at the top of every guide, support is handled by a named British team and pricing is transparent in GBP.",
  },
  {
    question: "Which devices work with this IPTV UK service?",
    answer:
      "Amazon Firestick, Samsung and LG smart TVs, Android TV, Nvidia Shield, Apple TV, iPhones, iPads, Android phones, MAG boxes, Formuler, Enigma2, Windows and Mac. One login covers up to five screens.",
  },
  {
    question: "Does every plan include premium IPTV in 4K?",
    answer:
      "Yes. Every tier includes 4K UHD on channels that broadcast in the format. The stream scales to HD automatically on older equipment or slower connections.",
  },
  {
    question: "Can I watch outside the UK?",
    answer:
      "The built-in VPN connects you to a UK server from anywhere. Your full channel guide loads whether you are in Spain, Dubai or Australia.",
  },
  {
    question: "How fast is activation after I buy IPTV?",
    answer:
      "Under sixty seconds. Your M3U link and app credentials arrive by email the moment payment clears. No manual step, no waiting for office hours.",
  },
  {
    question: "Is there a contract or cancellation fee?",
    answer:
      "No contract and no cancellation fee. Every plan includes a 30-day money-back guarantee — request a refund and every penny returns the same day.",
  },
  {
    question: "Why do IPTV reviews rate this the best IPTV UK choice?",
    answer:
      "Four measurable wins: the widest channel list at 37,000, verified uptime at 99.9%, activation under 60 seconds and a starting price of £12.99. Combined with UK-based support and a free VPN, reviewers rank it top for 2026.",
  },
  {
    question: "Does British IPTV include 7-day catch-up?",
    answer:
      "Yes. Catch-up is active on all major British channels. Scroll back through the EPG, pick the programme you missed and press play — no add-on required.",
  },
  {
    question: "What internet speed do I need?",
    answer:
      "25 Mbps delivers clean 4K. 10 Mbps handles HD comfortably. Anti-Freeze technology adapts the bitrate mid-stream so the picture stays stable even on slower rural broadband.",
  },
  {
    question: "How do I reach support?",
    answer:
      "Live chat, WhatsApp or email — answered by a UK team 24 hours a day. Average first response sits under four minutes.",
  },
] as const;

export const CHANNEL_CATEGORIES = [
  {
    name: "British Sport — Live Football, Rugby And Racing",
    count: "5,500+",
    icon: "Trophy" as const,
    channels:
      "Extensive live sports coverage across football, rugby, racing and more, all streaming in HD or 4K. From weekly fixtures to major tournaments, every key moment is available in one place.",
  },
  {
    name: "Classic British Entertainment — Premium IPTV Picks",
    count: "500+",
    icon: "Tv" as const,
    channels:
      "A complete selection of British entertainment including drama, reality shows, and comedy, all in high quality. Includes regional variations and +1 timeshift options so you never miss your favourite content.",
  },
  {
    name: "On-Demand Cinema — 198,000 Titles In One IPTV Service",
    count: "198,000+",
    icon: "Film" as const,
    channels:
      "Sky Cinema, Film4, Paramount+ and international premieres sit alongside a back-catalogue stretching from Ealing Studios classics to last Friday’s blockbuster. New releases drop the day they hit digital.",
  },
  {
    name: "News And Current Affairs On Fast IPTV Feeds",
    count: "1,200+",
    icon: "Newspaper" as const,
    channels:
      "Continuous news coverage with fast, reliable streams across global and local events. Low latency ensures you receive updates instantly as stories unfold.",
  },
  {
    name: "Kids’ Channels — Best IPTV UK For Young Viewers",
    count: "800+",
    icon: "Baby" as const,
    channels:
      "A rich variety of children’s programming available in HD, with secure parental controls and easy PIN protection. Safe viewing settings can be activated in seconds for complete peace of mind.",
  },
  {
    name: "International Feeds — 40+ Languages, One IPTV Subscription",
    count: "17,000+",
    icon: "Globe" as const,
    channels:
      "Arabic, Urdu, Hindi, Polish, Portuguese, Turkish, French and Somali channels come bundled. Filter by language or country from the sidebar and switch between British and international content in a single tap.",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "best-iptv-uk-guide-2026",
    title: "Best IPTV UK 2026 — How To Choose A Trusted IPTV Provider",
    excerpt:
      "Finding the best IPTV service in the UK means looking beyond flashy promises. This guide breaks down the 7 criteria that matter most for British viewers — from channel quality and reliability to support and genuine value.",
    date: "2026-04-01",
    readTime: "12 min read",
    category: "Guide",
  },
  {
    slug: "how-to-setup-iptv-firestick",
    title: "How To Set Up A British IPTV Subscription On Amazon Fire Stick",
    excerpt:
      "A complete, beginner-friendly guide to installing and configuring British IPTV on an Amazon Fire Stick. Stream 37,000 UK channels in 4K in under 10 minutes using the step-by-step instructions below.",
    date: "2026-03-20",
    readTime: "6 min read",
    category: "Tutorial",
  },
  {
    slug: "iptv-vs-sky-comparison",
    title: "British IPTV vs Sky — Which Service Is Better For UK Viewers In 2026?",
    excerpt:
      "An honest comparison of British IPTV and Sky TV for UK households. Costs, channel availability, picture quality, flexibility and value — everything needed to make the switch.",
    date: "2026-03-15",
    readTime: "8 min read",
    category: "Comparison",
  },
  {
    slug: "premier-league-streaming-guide",
    title: "Watch Every Premier League Match — British IPTV Streaming Guide",
    excerpt:
      "Every Premier League match, plus Championship, La Liga, Serie A and more — all in stunning HD and 4K quality through a single British IPTV subscription.",
    date: "2026-03-10",
    readTime: "5 min read",
    category: "Sports",
  },
] as const;
