import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

// export default function Footer() {
//   const quickLinks = [
//     { label: 'Home', href: '#hero' },
//     { label: 'About', href: '#about' },
//     { label: 'Amenities', href: '#amenities' },
//     { label: 'Floor Plans', href: '#configurations' },
//     { label: 'Gallery', href: '#gallery' },
//     { label: 'Location', href: '#location' },
//     { label: 'Developer', href: '#developer' },
//     { label: 'Contact', href: '#contact' },
//   ];

//   const socialLinks = [
//     { icon: Facebook, href: '#' },
//     { icon: Instagram, href: '#' },
//     { icon: Twitter, href: '#' },
//     { icon: Linkedin, href: '#' },
//     { icon: Youtube, href: '#' },
//   ];

//   return (
//     <footer className="bg-gray-900 text-white pt-16 pb-8">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-4 gap-8 mb-12">
//           <div>
//             <div className="w-32 h-12 bg-gray-700 mb-4"></div>
//             <div className="h-4 bg-gray-700 w-full mb-2"></div>
//             <div className="h-4 bg-gray-700 w-5/6 mb-2"></div>
//             <div className="h-4 bg-gray-700 w-4/5"></div>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               {quickLinks.slice(0, 4).map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.href}
//                     className="text-gray-400 hover:text-white transition"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">More Links</h3>
//             <ul className="space-y-2">
//               {quickLinks.slice(4).map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.href}
//                     className="text-gray-400 hover:text-white transition"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
//             <div className="flex space-x-4">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.href}
//                   className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition"
//                 >
//                   <social.icon size={20} />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-700 pt-8 space-y-4">
//           <div className="bg-gray-800 p-4 rounded-md">
//             <h4 className="font-semibold mb-2">RERA Disclaimer</h4>
//             <div className="h-4 bg-gray-700 w-full mb-2"></div>
//             <div className="h-4 bg-gray-700 w-5/6 mb-2"></div>
//             <div className="h-4 bg-gray-700 w-4/5"></div>
//           </div>

//           <div className="text-center text-gray-400 text-sm">
//             <div className="h-4 bg-gray-700 w-64 mx-auto"></div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
