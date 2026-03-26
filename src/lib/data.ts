export interface Laptop {
  id: number;
  brand: string;
  model: string;
  cpu: string;
  ram: string;
  storage: string;
  display: string;
  battery: string;
  weight: string;
  price: number;
  use_cases: string[];
  description: string;
}

export const MOCK_LAPTOPS: Laptop[] = [
  {
    id: 1, brand: "Apple", model: "MacBook Air M2", cpu: "M2 (8-core)", ram: "8GB", storage: "256GB SSD", display: "13.6\" Liquid Retina", battery: "18 hours", weight: "1.24 kg", price: 89900, use_cases: ["student", "casual", "business"],
    description: "The M2 MacBook Air redefined the modern laptop. Its fanless design ensures absolute silence, while the 500-nit Liquid Retina display offers vibrant colors. Perfect for students and professionals who prioritize portability without sacrificing power."
  },
  {
    id: 2, brand: "Apple", model: "MacBook Pro 14", cpu: "M3 Pro (11-core)", ram: "18GB", storage: "512GB SSD", display: "14.2\" Liquid Retina XDR", battery: "18 hours", weight: "1.61 kg", price: 199900, use_cases: ["creator", "programmer"],
    description: "Built for the most demanding workflows. The M3 Pro chip handles heavy video editing and compilation with ease. The XDR display features 1600 nits peak brightness for HDR content creation and precision work."
  },
  {
    id: 3, brand: "Dell", model: "XPS 13 9340", cpu: "Intel Core Ultra 7 155H", ram: "16GB", storage: "512GB SSD", display: "13.4\" FHD+ InfinityEdge", battery: "14 hours", weight: "1.19 kg", price: 139990, use_cases: ["business", "student"],
    description: "The pinnacle of Windows ultra-portables. Featuring a haptic glass touchpad and a zero-lattice keyboard, the XPS 13 is a masterclass in modern industrial design and AI-accelerated performance."
  },
  {
    id: 4, brand: "Lenovo", model: "Legion Pro 7i Gen 8", cpu: "Intel i9-13900HX", ram: "32GB", storage: "1TB SSD", display: "16\" WQXGA 240Hz", battery: "5 hours", weight: "2.8 kg", price: 289990, use_cases: ["gamer", "creator"],
    description: "A desktop replacement powerhouse. Equipped with the highest-tier Intel silicon and a 240Hz refresh rate panel, this machine is engineered for competitive gaming and complex 3D rendering tasks."
  },
  {
    id: 5, brand: "ASUS", model: "ROG Zephyrus G14", cpu: "AMD Ryzen 9 8945HS", ram: "32GB", storage: "1TB SSD", display: "14\" 3K OLED 120Hz", battery: "10 hours", weight: "1.50 kg", price: 174990, use_cases: ["gamer", "creator", "programmer"],
    description: "A perfect fusion of power and portability. The CNC-milled chassis houses a breathtaking 3K OLED panel, making it a favorite for both gamers and high-end creative professionals on the go."
  },
  {
    id: 6, brand: "HP", model: "Spectre x360 14", cpu: "Intel Core Ultra 7 155H", ram: "16GB", storage: "1TB SSD", display: "14\" 2.8K OLED Touch", battery: "15 hours", weight: "1.45 kg", price: 154990, use_cases: ["business", "creator", "student"],
    description: "The most versatile 2-in-1 on the market. With its gem-cut design and 9MP camera, it's the premium choice for executives and creators who need a laptop that adapts to every situation."
  },
  {
    id: 7, brand: "MSI", model: "Stealth 16 AI Studio", cpu: "Intel Core Ultra 9 185H", ram: "32GB", storage: "2TB SSD", display: "16\" QHD+ 240Hz", battery: "8 hours", weight: "1.99 kg", price: 259990, use_cases: ["creator", "programmer", "gamer"],
    description: "An incredibly thin 16-inch beast. NVIDIA Studio certified, it's designed for professional designers who need GPU acceleration without the bulk of a traditional gaming laptop."
  },
  {
    id: 8, brand: "Acer", model: "Swift Edge 16", cpu: "AMD Ryzen 7 7840U", ram: "16GB", storage: "1TB SSD", display: "16\" 3.2K OLED 120Hz", battery: "12 hours", weight: "1.23 kg", price: 104990, use_cases: ["student", "business", "creator"],
    description: "One of the lightest 16-inch laptops ever made. Despite its size, it weighs just 1.23kg while offering a stunning 3.2K OLED panel for a cinematic viewing experience anywhere."
  },
  {
    id: 9, brand: "Razer", model: "Blade 14", cpu: "AMD Ryzen 9 7940HS", ram: "16GB", storage: "1TB SSD", display: "14\" QHD+ 240Hz", battery: "8 hours", weight: "1.84 kg", price: 229990, use_cases: ["gamer", "creator", "programmer"],
    description: "Precision engineered in CNC aluminum. The Blade 14 is the ultimate 14-inch gaming laptop, combining Razer's signature aesthetic with high-performance vapor chamber cooling."
  },
  {
    id: 10, brand: "Samsung", model: "Galaxy Book4 Ultra", cpu: "Intel Core Ultra 9 185H", ram: "32GB", storage: "1TB SSD", display: "16\" Dynamic AMOLED 2X", battery: "15 hours", weight: "1.86 kg", price: 239990, use_cases: ["business", "creator", "student"],
    description: "Samsung's most powerful laptop ever. A stunning touch-enabled Dynamic AMOLED screen and deep integration with the Galaxy ecosystem make it a productivity beast for multi-device users."
  },
  {
    id: 11, brand: "LG", model: "Gram Style 16", cpu: "Intel Core i7-1360P", ram: "16GB", storage: "1TB SSD", display: "16\" WQXGA OLED", battery: "20 hours", weight: "1.25 kg", price: 169990, use_cases: ["business", "student", "creator"],
    description: "Feather-light with a hidden haptic touchpad. The LG Gram Style is an aesthetic marvel with a color-shifting finish and a battery that truly lasts the entire day."
  },
  {
    id: 12, brand: "Dell", model: "Alienware m18 R1", cpu: "Intel Core i9-13980HX", ram: "32GB", storage: "2TB SSD", display: "18\" QHD+ 165Hz", battery: "4 hours", weight: "4.04 kg", price: 349990, use_cases: ["gamer", "creator"],
    description: "The final word in gaming performance. This 18-inch titan offers unrivaled thermal headroom and a mechanical keyboard, designed for enthusiasts who demand the absolute best."
  },
  {
    id: 13, brand: "Lenovo", model: "ThinkPad X1 Carbon Gen 11", cpu: "Intel Core i7-1355U", ram: "16GB", storage: "512GB SSD", display: "14\" WUXGA IPS", battery: "16 hours", weight: "1.12 kg", price: 164990, use_cases: ["business", "student"],
    description: "The gold standard for corporate professionals. Tough, lightweight, and featuring the world's best laptop keyboard, the X1 Carbon is built to last in any environment."
  },
  {
    id: 14, brand: "ASUS", model: "Zenbook 14X OLED", cpu: "Intel Core i9-13900H", ram: "32GB", storage: "1TB SSD", display: "14\" 2.8K OLED 120Hz", battery: "10 hours", weight: "1.50 kg", price: 124990, use_cases: ["creator", "student", "business"],
    description: "A gorgeous blend of performance and style. With a high-refresh OLED panel and a ceramic-like finish, it's as much a fashion statement as it is a powerhouse."
  },
  {
    id: 15, brand: "Microsoft", model: "Surface Laptop 5", cpu: "Intel Core i7-1255U", ram: "16GB", storage: "512GB SSD", display: "15\" PixelSense", battery: "17 hours", weight: "1.56 kg", price: 149990, use_cases: ["business", "student", "creator"],
    description: "The purest Windows experience. Microsoft's signature laptop features a 3:2 aspect ratio screen for maximum productivity and an elegant, minimalist aluminum build."
  },
  {
    id: 16, brand: "HP", model: "Envy 16-h", cpu: "Intel Core i7-13700H", ram: "16GB", storage: "1TB SSD", display: "16\" WQXGA 120Hz", battery: "10 hours", weight: "2.3 kg", price: 139990, use_cases: ["creator", "student", "business"],
    description: "A creative workhorse with a large workspace. Excellent thermal management and a color-accurate display make it a reliable partner for video and photo editing."
  },
  {
    id: 17, brand: "Lenovo", model: "Yoga 9i Gen 8", cpu: "Intel Core i7-1360P", ram: "16GB", storage: "1TB SSD", display: "14\" 4K OLED Touch", battery: "12 hours", weight: "1.4 kg", price: 174990, use_cases: ["creator", "business", "student"],
    description: "Elegance meets utility. The Yoga 9i features a rotating soundbar hinge that delivers Dolby Atmos audio regardless of whether you're using it as a laptop or a tablet."
  },
  {
    id: 18, brand: "ASUS", model: "ROG Strix SCAR 16", cpu: "Intel Core i9-13980HX", ram: "32GB", storage: "2TB SSD", display: "16\" QHD+ 240Hz Mini LED", battery: "5 hours", weight: "2.5 kg", price: 299990, use_cases: ["gamer", "creator"],
    description: "For the professional gamer. A Nebula HDR display with 1100-nit peak brightness and liquid metal cooling ensures you stay at the top of the leaderboards."
  },
  {
    id: 19, brand: "Dell", model: "XPS 15 9530", cpu: "Intel Core i9-13900H", ram: "32GB", storage: "1TB SSD", display: "15.6\" 3.5K OLED Touch", battery: "9 hours", weight: "1.92 kg", price: 249990, use_cases: ["creator", "business", "student"],
    description: "The favorite of photographers and designers. Its near-borderless InfinityEdge display provides an immersive canvas for high-resolution editing and media consumption."
  },
  {
    id: 20, brand: "MSI", model: "Creator Z17 HX Studio", cpu: "Intel Core i9-13950HX", ram: "64GB", storage: "2TB SSD", display: "17\" QHD+ 165Hz Touch", battery: "6 hours", weight: "2.49 kg", price: 389990, use_cases: ["creator", "programmer"],
    description: "The ultimate creative workstation. Supporting pen input and packing workstation-grade cooling, it's designed for architects and engineers who need maximum power."
  },
  {
    id: 21, brand: "Acer", model: "Predator Helios 16", cpu: "Intel Core i9-13900HX", ram: "32GB", storage: "1TB SSD", display: "16\" WQXGA 240Hz", battery: "5 hours", weight: "2.6 kg", price: 189990, use_cases: ["gamer", "creator"],
    description: "Aggressive styling and aggressive performance. Acer's flagship gaming laptop features a per-key RGB keyboard and liquid metal cooling for sustained frames."
  },
  {
    id: 22, brand: "Razer", model: "Blade 16", cpu: "Intel Core i9-13950HX", ram: "32GB", storage: "1TB SSD", display: "16\" UHD+ 120Hz / FHD+ 240Hz", battery: "7 hours", weight: "2.45 kg", price: 359990, use_cases: ["gamer", "creator"],
    description: "The world's first dual-mode mini-LED display. Switch between high-fidelity 4K and high-refresh FHD gaming effortlessly on this masterpiece of engineering."
  },
  {
    id: 23, brand: "Samsung", model: "Galaxy Book4 Pro", cpu: "Intel Core Ultra 7 155H", ram: "16GB", storage: "512GB SSD", display: "14\" Dynamic AMOLED 2X", battery: "18 hours", weight: "1.23 kg", price: 154990, use_cases: ["business", "creator", "student"],
    description: "Slim, light, and powerful. The Book4 Pro's anti-reflective OLED panel is a joy to work on, even in bright environments, making it perfect for digital nomads."
  },
  {
    id: 24, brand: "LG", model: "Gram 17 (2023)", cpu: "Intel Core i7-1360P", ram: "16GB", storage: "1TB SSD", display: "17\" WQXGA IPS", battery: "20 hours", weight: "1.35 kg", price: 144990, use_cases: ["business", "student", "creator"],
    description: "Large screen portability redefined. It's almost impossible how light this 17-inch laptop is, making it the perfect choice for users who need a big screen on the train or plane."
  },
  {
    id: 25, brand: "Dell", model: "XPS 17 9730", cpu: "Intel Core i7-13700H", ram: "32GB", storage: "1TB SSD", display: "17\" 4K+ Touch", battery: "8 hours", weight: "2.42 kg", price: 299990, use_cases: ["creator", "business", "student"],
    description: "Unprecedented power in a slim 17-inch form factor. Perfect for professional video editors who need the screen real estate of a desktop in a portable package."
  },
  {
    id: 26, brand: "Lenovo", model: "ThinkPad P16 Gen 2", cpu: "Intel Core i9-13980HX", ram: "64GB", storage: "2TB SSD", display: "16\" 4K+ OLED Touch", battery: "6 hours", weight: "2.95 kg", price: 324990, use_cases: ["programmer", "creator", "business"],
    description: "The mobile workstation for data scientists and engineers. Certified for professional ISV apps, it features a thermal design that can handle 140W of total system power."
  },
  {
    id: 27, brand: "ASUS", model: "Zenbook Pro 14 OLED", cpu: "Intel Core i9-13900H", ram: "32GB", storage: "1TB SSD", display: "14.5\" 2.8K 120Hz OLED", battery: "10 hours", weight: "1.6 kg", price: 179990, use_cases: ["creator", "programmer"],
    description: "A compact beast with an innovative DialPad. The physical dial integrated into the trackpad allows for precise control in apps like Photoshop and Premiere Pro."
  },
  {
    id: 28, brand: "Apple", model: "MacBook Pro 14 (M3)", cpu: "Apple M3 (8-core)", ram: "8GB", storage: "512GB SSD", display: "14.2\" Liquid Retina XDR", battery: "22 hours", weight: "1.55 kg", price: 169900, use_cases: ["creator", "programmer", "business"],
    description: "The entry point to the Pro lineup. Now with the incredible efficiency of the M3 chip, it offers the longest battery life ever in a 14-inch Mac."
  },
  {
    id: 29, brand: "Apple", model: "MacBook Pro 16 (M3 Max)", cpu: "Apple M3 Max (14-core)", ram: "36GB", storage: "1TB SSD", display: "16.2\" Liquid Retina XDR", battery: "22 hours", weight: "2.14 kg", price: 349900, use_cases: ["creator", "programmer", "business"],
    description: "The king of professional laptops. The M3 Max chip offers desktop-class performance for heavy 3D rendering and large-scale software compilation."
  },
  {
    id: 30, brand: "Lenovo", model: "ThinkPad X1 Yoga Gen 8", cpu: "Intel Core i5-1335U", ram: "16GB", storage: "512GB SSD", display: "14\" WUXGA Touch", battery: "14 hours", weight: "1.38 kg", price: 154990, use_cases: ["business", "creator", "student"],
    description: "A 2-in-1 that doesn't compromise on durability. Its high-strength aluminum chassis houses an integrated pen, making it perfect for creative whiteboarding."
  },
  {
    id: 31, brand: "ASUS", model: "ROG Zephyrus M16", cpu: "Intel Core i9-13900H", ram: "32GB", storage: "1TB SSD", display: "16\" QHD+ 240Hz Nebula HDR", battery: "7 hours", weight: "2.1 kg", price: 269990, use_cases: ["gamer", "creator", "student"],
    description: "Elegance meets pure adrenaline. The AniMe Matrix lid allows for customizable pixel animations, while the internal hardware delivers elite gaming performance."
  },
  {
    id: 32, brand: "Dell", model: "XPS 13 Plus 9320", cpu: "Intel Core i7-1360P", ram: "16GB", storage: "1TB SSD", display: "13.4\" 3.5K OLED Touch", battery: "10 hours", weight: "1.26 kg", price: 189990, use_cases: ["business", "student", "creator"],
    description: "A vision of the future. The capacitive touch function row and seamless haptic touchpad mark a radical departure from traditional laptop design."
  },
  {
    id: 33, brand: "HP", model: "Pavilion Plus 14", cpu: "AMD Ryzen 7 7840H", ram: "16GB", storage: "1TB SSD", display: "14\" 2.8K OLED 120Hz", battery: "11 hours", weight: "1.4 kg", price: 84990, use_cases: ["creator", "business", "student"],
    description: "Premium features at a realistic price. The Pavilion Plus brings a high-refresh OLED panel and powerful Ryzen silicon to a much broader audience."
  },
  {
    id: 34, brand: "MSI", model: "Katana 15", cpu: "Intel Core i7-13620H", ram: "16GB", storage: "1TB SSD", display: "15.6\" FHD 144Hz", battery: "6 hours", weight: "2.25 kg", price: 104990, use_cases: ["creator", "programmer", "gamer"],
    description: "Sharp as a blade. The Katana 15 is a focused gaming machine that provides consistent performance in modern titles without breaking the bank."
  },
  {
    id: 35, brand: "Acer", model: "Swift Go 14", cpu: "Intel Core Ultra 5 125H", ram: "16GB", storage: "512GB SSD", display: "14\" 2.8K OLED 90Hz", battery: "12 hours", weight: "1.32 kg", price: 74990, use_cases: ["business", "student", "creator"],
    description: "An incredible value proposition. Featuring the latest AI-ready Intel chips and a color-accurate OLED screen, it's the best entry-level premium laptop."
  },
  {
    id: 36, brand: "Xiaomi", model: "Notebook Pro 120G", cpu: "Intel Core i5-12450H", ram: "16GB", storage: "512GB SSD", display: "14\" 2.5K 120Hz", battery: "10 hours", weight: "1.45 kg", price: 69990, use_cases: ["student", "business"],
    description: "MacBook-like build quality at a fraction of the cost. The fast 120Hz display and CNC-machined aluminum body make it feel like a machine twice its price."
  },
  {
    id: 37, brand: "Realme", model: "Book Slim", cpu: "Intel Core i5-1135G7", ram: "8GB", storage: "512GB SSD", display: "14\" 2K Full Vision", battery: "11 hours", weight: "1.38 kg", price: 46990, use_cases: ["student", "casual"],
    description: "Ideally suited for students. Its 3:2 aspect ratio screen provides more vertical space for reading and writing, while the slim profile fits in any backpack."
  },
  {
    id: 38, brand: "Infinix", model: "ZERO BOOK Ultra", cpu: "Intel Core i9-13900H", ram: "32GB", storage: "1TB SSD", display: "15.6\" FHD 100% sRGB", battery: "10 hours", weight: "1.8 kg", price: 79990, use_cases: ["creator", "programmer"],
    description: "Disrupting the premium segment. Featuring a high-end i9 processor and toggle switches for performance modes, it's a unique choice for power users on a budget."
  },
  {
    id: 39, brand: "Gigabyte", model: "G5 MF", cpu: "Intel Core i5-12500H", ram: "16GB", storage: "512GB SSD", display: "15.6\" FHD 144Hz", battery: "5 hours", weight: "1.9 kg", price: 74990, use_cases: ["gamer"],
    description: "A straightforward gaming tool. Gigabyte focuses on thermal performance and frame rates, offering an RTX 40-series GPU at an extremely competitive price point."
  },
  {
    id: 40, brand: "ASUS", model: "TUF Gaming F15", cpu: "Intel Core i5-11400H", ram: "16GB", storage: "512GB SSD", display: "15.6\" FHD 144Hz", battery: "6 hours", weight: "2.3 kg", price: 64990, use_cases: ["gamer", "student"],
    description: "Built for durability. TUF laptops undergo military-grade testing to ensure they can handle the bumps and spills of daily life while delivering solid gaming performance."
  },
  {
    id: 41, brand: "HP", model: "Victus 16", cpu: "AMD Ryzen 7 7840HS", ram: "16GB", storage: "1TB SSD", display: "16.1\" FHD 144Hz", battery: "7 hours", weight: "2.48 kg", price: 82990, use_cases: ["gamer", "creator"],
    description: "Understated gaming. The Victus features a clean design that won't look out of place in a classroom or office, despite the heavy-hitting hardware inside."
  },
  {
    id: 42, brand: "Acer", model: "Nitro V 15", cpu: "Intel Core i5-13420H", ram: "16GB", storage: "512GB SSD", display: "15.6\" FHD 144Hz", battery: "6 hours", weight: "2.1 kg", price: 76990, use_cases: ["gamer"],
    description: "The successor to a legend. The Nitro V offers a more refined look and improved thermals, continuing the tradition of being India's favorite value gaming laptop."
  },
  {
    id: 43, brand: "Lenovo", model: "IdeaPad Slim 5 Gen 8", cpu: "AMD Ryzen 5 7530U", ram: "16GB", storage: "512GB SSD", display: "14\" WUXGA OLED", battery: "12 hours", weight: "1.46 kg", price: 62990, use_cases: ["student", "business"],
    description: "Everything you need, nothing you don't. A reliable, all-metal chassis and a crisp OLED screen make this the best choice for everyday multitasking."
  },
  {
    id: 44, brand: "Dell", model: "Inspiron 14 Plus", cpu: "Intel Core i7-13620H", ram: "16GB", storage: "1TB SSD", display: "14\" 2.2K IPS", battery: "11 hours", weight: "1.58 kg", price: 89990, use_cases: ["business", "student", "creator"],
    description: "Professional power in a standard package. Featuring H-series processors in a 14-inch body, it's designed for those who need extra performance for data-heavy apps."
  },
  {
    id: 45, brand: "Apple", model: "MacBook Air M3 (13-inch)", cpu: "M3 (8-core)", ram: "8GB", storage: "256GB SSD", display: "13.6\" Liquid Retina", battery: "18 hours", weight: "1.24 kg", price: 114900, use_cases: ["student", "business", "casual"],
    description: "The ultimate ultraportable, now with M3. Supporting two external displays and hardware-accelerated ray tracing, it's a significant jump for creative users."
  },
  {
    id: 46, brand: "Samsung", model: "Galaxy Book3 Pro 360", cpu: "Intel Core i7-1360P", ram: "16GB", storage: "512GB SSD", display: "16\" 3K AMOLED Touch", battery: "18 hours", weight: "1.66 kg", price: 139990, use_cases: ["creator", "business"],
    description: "The artists' companion. The 360-degree hinge and included S-Pen offer a natural drawing and note-taking experience on a massive, vivid AMOLED canvas."
  },
  {
    id: 47, brand: "ASUS", model: "Vivobook S 15 OLED", cpu: "Intel Core i5-13500H", ram: "16GB", storage: "512GB SSD", display: "15.6\" 2.8K 120Hz OLED", battery: "10 hours", weight: "1.7 kg", price: 84990, use_cases: ["student", "creator"],
    description: "Style that stands out. With its embossed logo and colorful 'Enter' key, the Vivobook S is aimed at a younger generation of creators who value aesthetics."
  },
  {
    id: 48, brand: "MSI", model: "Sword 17 A12U", cpu: "Intel Core i7-12650H", ram: "16GB", storage: "1TB SSD", display: "17.3\" FHD 144Hz", battery: "6 hours", weight: "2.6 kg", price: 119990, use_cases: ["gamer", "programmer"],
    description: "A clean, white aesthetic for gamers. The Sword 17 provides a massive screen for immersive play and coding, with a keyboard optimized for fast actions."
  },
  {
    id: 49, brand: "Acer", model: "Predator Helios Neo 16", cpu: "Intel Core i7-13700HX", ram: "16GB", storage: "1TB SSD", display: "16\" WQXGA 165Hz", battery: "6 hours", weight: "2.6 kg", price: 109990, use_cases: ["gamer", "creator"],
    description: "The best middle-ground in gaming. Helios Neo packs the power of the flagship Predator series into a more affordable chassis without stripping away the essential features."
  },
  {
    id: 50, brand: "Lenovo", model: "LOQ 15", cpu: "Intel Core i5-13450HX", ram: "16GB", storage: "512GB SSD", display: "15.6\" FHD 144Hz", battery: "6 hours", weight: "2.4 kg", price: 72990, use_cases: ["gamer", "student"],
    description: "Entry-level gaming redefined. LOQ inherits the thermal design and building principles of the legendary Legion line, making it the most reliable budget gaming laptop."
  }
];