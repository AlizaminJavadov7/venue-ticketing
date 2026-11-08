
const VENUE = {
  name: "Caspian Opera Hall",
  currency: "₼",
  world: { w: 960, h: 770 },               
  seat: 22, pitch: 26,                     
  unavailablePercent: 12,                  
  tiers: {
    premium:  { label: "Premium",  price: 80, color: "#d4a64a" },
    standard: { label: "Standard", price: 55, color: "#4fa3a5" },
    gallery:  { label: "Gallery",  price: 30, color: "#8d7bd1" },
    box:      { label: "Box",      price: 120, color: "#d9644f" }
  },
  stage: { x: 280, y: 18, w: 400, h: 62, label: "STAGE" },
  entrances: [
    { x: 60, y: 742, w: 150, label: "Entrance A" },
    { x: 750, y: 742, w: 150, label: "Entrance B" }
  ],
  sections: [
    { id: "orch-c", name: "Orchestra Centre", tier: "premium",  x: 272, y: 112, rows: "ABCDEFGHIJKL", cols: 16 },
    { id: "orch-l", name: "Orchestra Left",   tier: "standard", x: 102, y: 112, rows: "ABCDEFGHIJKL", cols: 5 },
    { id: "orch-r", name: "Orchestra Right",  tier: "standard", x: 728, y: 112, rows: "ABCDEFGHIJKL", cols: 5 },
    { id: "box-l",  name: "Box Left",         tier: "box",      x: 20,  y: 112, rows: "ABCDEF",       cols: 2 },
    { id: "box-r",  name: "Box Right",        tier: "box",      x: 888, y: 112, rows: "ABCDEF",       cols: 2 },
    { id: "mezz",   name: "Mezzanine",        tier: "standard", x: 116, y: 478, rows: "MNOP",         cols: 28 },
    { id: "gall",   name: "Gallery",          tier: "gallery",  x: 64,  y: 618, rows: "QRST",         cols: 32 }
  ]
};