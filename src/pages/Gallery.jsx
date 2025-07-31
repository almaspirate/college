// src/pages/Gallery.jsx
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-6/504343144_3022053071284337_3258990010127081698_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeELQmYOYEj7DrQS33i9mKpZewUlFBcwjZp7BSUUFzCNmjGkrFW1kOryAPeUIaZV1uBYVKDxZzMQ8KSrSlmLJAoK&_nc_ohc=6rdj5ZnU4NsQ7kNvwGOHXh5&_nc_oc=AdlWenUSu0LKPEgaAX1obBsYybvY930QNaj1g9o_e56k4-HHd0tVL53e9GSpv65MAmg&_nc_zt=23&_nc_ht=scontent.fdac198-1.fna&_nc_gid=HSPxI1sYxOiG2SunwBDAyA&oh=00_AfRvlVbTGxsWQd41yNotwGJjNmmKC9B-QeAgvM7qowRbqQ&oe=6890744C",
  "https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-6/504683410_3022052647951046_6207796936632652847_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG2rCLiqLBiWFQzPzTxok1K23uXDFPQhrLbe5cMU9CGsr9baouOHIBrWNQX496eHhN1MMpf3SqZbuufQIF15GGJ&_nc_ohc=8PaAlKWlahQQ7kNvwGRnTom&_nc_oc=AdmxDjdJz2FbRifhkGfHDZBI6dkn2uDLnEzsg1EG6b574ZL14QvgrSmAOgv3y-YnUno&_nc_zt=23&_nc_ht=scontent.fdac198-1.fna&_nc_gid=3DkQvduKJLeSXYVsBM-v3Q&oh=00_AfRc4rhfUfTdAourbbp0ikGeQNUV-8fB-eiKyzgO3zZB4A&oe=68908078",
  "https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-6/499412833_3002535099902801_7942502312220658786_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=aa7094&_nc_eui2=AeFYuebUeyDqQQ5sqr_VY3bqlG6HNc-p192Uboc1z6nX3aqz2rMAgHRNvc_pLyAoc8FmhxInbvtJHW-1fPAdTRA-&_nc_ohc=hDN-DM8PEGgQ7kNvwEWaFUG&_nc_oc=AdlxZgX2QN8s-u9vs-JvMpKMP3YhzlIu5zzVbcU_-m71cNRrKWO1MvlKWOHJCVDR6O8&_nc_zt=23&_nc_ht=scontent.fdac198-1.fna&_nc_gid=vGW41piMPV8djL2gEIIpQg&oh=00_AfR3BxqxE6pdTxjyOCgDL0r6MBH0VEQGEI5F0UTHxjSS8Q&oe=68908345",
  "https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-6/499195610_3001815016641476_7196139450214348485_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7094&_nc_eui2=AeFi4oLNk-q0Ef-eviSRHimLTFBTB1wO2iNMUFMHXA7aIxiSf6h9fDWARfvAlueANOS7c5qaxJ4PF22oB0U94_WD&_nc_ohc=J4RDURVDPtcQ7kNvwEhUx-b&_nc_oc=AdmXtijmcGFCPNDnpP9fAECx7W1XeBjywcyeSTKAS5iL1O5NgV8gyYcUlnqX28EBlYs&_nc_zt=23&_nc_ht=scontent.fdac198-1.fna&_nc_gid=oxJJWK3fwup4JQGXzafUdw&oh=00_AfSIQ4p1OrZJ9ddCMFIAJvWNdqGv_J55uW00n1u6S601Ew&oe=6890A334",
  "https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-6/495664415_2992528734236771_6575773815460169036_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEJITMLqM3TwztBN-clLD_5CdqSAM_dUPoJ2pIAz91Q-qfQ-pM2mfkOZ4iVrvRxgYYUT6GjOwuQzAty_X6ym_GS&_nc_ohc=c7-RM5AktEYQ7kNvwFZRHkx&_nc_oc=Adkqkkcj_RP38QQlWS_tXneje_DVA96tDDkgvP3ToIPAXm3sW04EsWUZsOvlK_ik6bU&_nc_zt=23&_nc_ht=scontent.fdac198-1.fna&_nc_gid=m3KwUtLUND4z7RgujDgoIg&oh=00_AfTvDwj5lUfPjos0tGv2N7qAnsS7xqQ8YxV7H6K4fqdTcw&oe=68909BA7",
  "https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-6/495291210_2992528007570177_5324575745137399024_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7094&_nc_eui2=AeFCavUoGR-KUNgchX27ZvjQcPr1wGDK_Sxw-vXAYMr9LA94Mj3wHb_o8HrxaxPO9iWle5lGDfdEExoePF4Y9__V&_nc_ohc=T9bJr46Fk6MQ7kNvwEsWchq&_nc_oc=AdnzdtMdhb_KiDVad1xze8TJPtXaUhq-2o7oJs8bUI5mBOPt28mins7ik1fWSM8wlEM&_nc_zt=23&_nc_ht=scontent.fdac198-1.fna&_nc_gid=Iz5b5Q9YxCs_IzrLvm3j8Q&oh=00_AfSUZDVNNYlOijhFbu4sGYfAoB4zr_WcE5GVXfVNrVfxpw&oe=68908639",
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">College Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-xl shadow hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedIndex(index)}
          >
            <img src={img} alt={`Gallery ${index}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold z-50"
            onClick={() => setSelectedIndex(null)}
          >
            ✕
          </button>

          <div className="w-full max-w-4xl px-4">
            <Swiper
              initialSlide={selectedIndex}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="rounded-lg overflow-hidden"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt={`Slide ${index}`} className="w-full h-[80vh] object-contain" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
