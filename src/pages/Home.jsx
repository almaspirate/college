<<<<<<< HEAD
// pages/Home.jsx
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import BannerSlider from "../components/BannerSlider";
import CountBox from "../components/CountBox";
import TeacherCard from "../components/TeacherCard";
import DirectorCard from "../components/DirectorCard";
import SectionHeader from "../components/SectionHeader";

export default function Home() {
  const [cardStyle, setCardStyle] = useState("A");

  const academicSections = [
  { label: "Science", maleCount: 300, femaleCount: 250 },
  { label: "Arts", maleCount: 180, femaleCount: 210 },
  { label: "Commerce", maleCount: 140, femaleCount: 210 },
];

const degreeSections = [
  { label: "Science Projects", maleCount: 30, femaleCount: 26 },
  { label: "Math Olympiad", maleCount: 22, femaleCount: 20 },
  { label: "Art Students", maleCount: 12, femaleCount: 11 },

  
];

  const teachers = Array.from({ length: 9 }, (_, i) => ({
    name: `Teacher ${i + 1}`,
    role: "Subject Teacher",
    photo: "https://static.vecteezy.com/system/resources/previews/042/891/253/non_2x/professional-teacher-avatar-illustration-for-education-concept-vector.jpg",
  }));

  const directors = [
    { name: "Director 1", role: "Chairman", photo: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/Harry-Potter-Movies-in-Order.jpg?q=70&fit=crop&w=1140&h=&dpr=1" },
    { name: "Director 2", role: "Secretary", photo: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/Harry-Potter-Movies-in-Order.jpg?q=70&fit=crop&w=1140&h=&dpr=1" },
    { name: "Director 3", role: "Treasurer", photo: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/Harry-Potter-Movies-in-Order.jpg?q=70&fit=crop&w=1140&h=&dpr=1" },
  ];

  return (
    <div className=" px-4 space-y-6 max-w-7xl mx-auto">
      {/* Slider */}
      <BannerSlider />


{/* Two Rows Layout */}
<div className="space-y-10">
  {/* Academic Section */}
  <div>
    <h3 className="text-xl font-bold mb-4 text-gray-800">Academic</h3>
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
      {academicSections.map(({ label, maleCount, femaleCount }, index) => (
        <div
          key={label}
          className={`p-4 rounded-lg text-white ${
            index % 3 === 0
              ? "bg-blue-600"
              : index % 3 === 1
              ? "bg-green-600"
              : "bg-purple-600"
          }`}
        >
          <h4 className="text-lg font-semibold mb-3 text-center">{label}</h4>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <CountBox
              label="Male"
              count={maleCount}
              avatar="https://cdn3.iconfinder.com/data/icons/school-169/64/48-Graduating_Student-1024.png"
            />
            <CountBox
              label="Female"
              count={femaleCount}
              avatar="https://images.vexels.com/media/users/3/166307/isolated/preview/32ac4c9541ea4a0141c6f88fb20ce92a-female-graduate-avatar-icon.png"
            />
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Degree Section */}
  <div>
    <h3 className="text-xl font-bold mb-4 text-gray-800">Degree</h3>
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
      {degreeSections.map(({ label, maleCount, femaleCount }, index) => (
        <div
          key={label}
          className={`p-4 rounded-lg text-white ${
            index % 3 === 0
              ? "bg-indigo-600"
              : index % 3 === 1
              ? "bg-pink-600"
              : "bg-teal-600"
          }`}
        >
          <h4 className="text-lg font-semibold mb-3 text-center">{label}</h4>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <CountBox
              label="Male"
              count={maleCount}
              avatar="https://cdn3.iconfinder.com/data/icons/school-169/64/48-Graduating_Student-1024.png"
            />
            <CountBox
              label="Female"
              count={femaleCount}
              avatar="https://images.vexels.com/media/users/3/166307/isolated/preview/32ac4c9541ea4a0141c6f88fb20ce92a-female-graduate-avatar-icon.png"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>






      {/* Teachers Carousel */}
      <div >
        <SectionHeader title="Teachers & Staffs" onShowMore={() => alert("Go to all teachers page")} />
        <div className="relative overflow-visible">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-6"
          >
            {teachers.map((t, i) => (
              <SwiperSlide key={i}>
                <TeacherCard {...t}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

    </div>
  );
}
=======
// pages/Home.jsx
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import BannerSlider from "../components/BannerSlider";
import CountBox from "../components/CountBox";
import TeacherCard from "../components/TeacherCard";
import DirectorCard from "../components/DirectorCard";
import SectionHeader from "../components/SectionHeader";

export default function Home() {
  const [cardStyle, setCardStyle] = useState("A");

  const academicSections = [
  { label: "Science", maleCount: 300, femaleCount: 250 },
  { label: "Arts", maleCount: 180, femaleCount: 210 },
  { label: "Commerce", maleCount: 140, femaleCount: 210 },
];

const degreeSections = [
  { label: "Science Projects", maleCount: 30, femaleCount: 26 },
  { label: "Math Olympiad", maleCount: 22, femaleCount: 20 },
  { label: "Art Students", maleCount: 12, femaleCount: 11 },

  
];

  const teachers = Array.from({ length: 9 }, (_, i) => ({
    name: `Teacher ${i + 1}`,
    role: "Subject Teacher",
    photo: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/Harry-Potter-Movies-in-Order.jpg?q=70&fit=crop&w=1140&h=&dpr=1",
  }));

  const directors = [
    { name: "Director 1", role: "Chairman", photo: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/Harry-Potter-Movies-in-Order.jpg?q=70&fit=crop&w=1140&h=&dpr=1" },
    { name: "Director 2", role: "Secretary", photo: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/Harry-Potter-Movies-in-Order.jpg?q=70&fit=crop&w=1140&h=&dpr=1" },
    { name: "Director 3", role: "Treasurer", photo: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/Harry-Potter-Movies-in-Order.jpg?q=70&fit=crop&w=1140&h=&dpr=1" },
  ];

  return (
    <div className=" px-4 space-y-6 max-w-7xl mx-auto">
      {/* Slider */}
      <BannerSlider />


{/* Two Rows Layout */}
<div className="space-y-10">
  {/* Academic Section */}
  <div>
    <h3 className="text-xl font-bold mb-4 text-gray-800">Academic</h3>
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
      {academicSections.map(({ label, maleCount, femaleCount }, index) => (
        <div
          key={label}
          className={`p-4 rounded-lg text-white ${
            index % 3 === 0
              ? "bg-blue-600"
              : index % 3 === 1
              ? "bg-green-600"
              : "bg-purple-600"
          }`}
        >
          <h4 className="text-lg font-semibold mb-3 text-center">{label}</h4>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <CountBox
              label="Male"
              count={maleCount}
              avatar="https://cdn3.iconfinder.com/data/icons/school-169/64/48-Graduating_Student-1024.png"
            />
            <CountBox
              label="Female"
              count={femaleCount}
              avatar="https://images.vexels.com/media/users/3/166307/isolated/preview/32ac4c9541ea4a0141c6f88fb20ce92a-female-graduate-avatar-icon.png"
            />
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Degree Section */}
  <div>
    <h3 className="text-xl font-bold mb-4 text-gray-800">Degree</h3>
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
      {degreeSections.map(({ label, maleCount, femaleCount }, index) => (
        <div
          key={label}
          className={`p-4 rounded-lg text-white ${
            index % 3 === 0
              ? "bg-indigo-600"
              : index % 3 === 1
              ? "bg-pink-600"
              : "bg-teal-600"
          }`}
        >
          <h4 className="text-lg font-semibold mb-3 text-center">{label}</h4>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <CountBox
              label="Male"
              count={maleCount}
              avatar="https://cdn3.iconfinder.com/data/icons/school-169/64/48-Graduating_Student-1024.png"
            />
            <CountBox
              label="Female"
              count={femaleCount}
              avatar="https://images.vexels.com/media/users/3/166307/isolated/preview/32ac4c9541ea4a0141c6f88fb20ce92a-female-graduate-avatar-icon.png"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>






      {/* Teachers Carousel */}
      <div >
        <SectionHeader title="Teachers & Staffs" onShowMore={() => alert("Go to all teachers page")} />
        <div className="relative overflow-visible">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-6"
          >
            {teachers.map((t, i) => (
              <SwiperSlide key={i}>
                <TeacherCard {...t}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

    </div>
  );
}
>>>>>>> c67b98635bb65160a126ee5d95ab9f9b2302015f
