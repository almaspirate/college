<<<<<<< HEAD
// AboutPage.jsx

import React from 'react';

const AboutPage = () => {
  return (
    <div className="space-y-6 px-4">
      
      {/* Section 1 */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        {/* Text */}
        <div className="md:w-4/5 w-full space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            Our institution is committed to providing high-quality education through a nurturing and inclusive environment. 
            We focus on academic excellence, character development, and preparing students for real-world success.
          </p>
        </div>
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-6/306261589_507789518018766_1197051028707909511_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEIs7-eSxMOwrjn2pV1_3wPMrIOf5hT-kAysg5_mFP6QNCxvmfmtmdAV7ho5hrUQv5dgHgHu_DZnzVmFn3IEP8Y&_nc_ohc=awznLZVnKrQQ7kNvwEeb35u&_nc_oc=AdmXswSgzBwZ26S08DEgIw0qW2uS36h3eCL49dKcxwpK3Vs45avrVGWXbg06XcbHENw&_nc_zt=23&_nc_ht=scontent.fdac198-1.fna&_nc_gid=p9UYdQPiGF8zCU4eXA9tQw&oh=00_AfQ0VcqhqgvVAE7LE3fS-ctHrvOs-ySR3Ll3q2wUiH9KeQ&oe=688FFEF8"
            alt="About us"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-6/306261589_507789518018766_1197051028707909511_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEIs7-eSxMOwrjn2pV1_3wPMrIOf5hT-kAysg5_mFP6QNCxvmfmtmdAV7ho5hrUQv5dgHgHu_DZnzVmFn3IEP8Y&_nc_ohc=awznLZVnKrQQ7kNvwEeb35u&_nc_oc=AdmXswSgzBwZ26S08DEgIw0qW2uS36h3eCL49dKcxwpK3Vs45avrVGWXbg06XcbHENw&_nc_zt=23&_nc_ht=scontent.fdac198-1.fna&_nc_gid=p9UYdQPiGF8zCU4eXA9tQw&oh=00_AfQ0VcqhqgvVAE7LE3fS-ctHrvOs-ySR3Ll3q2wUiH9KeQ&oe=688FFEF8"
            alt="Our Mission"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
        {/* Text */}
        <div className="md:w-4/5 w-full space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            We aim to empower students with knowledge, critical thinking, and leadership skills. 
            Our mission is to foster innovation, encourage curiosity, and help each student reach their full potential.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-blue-50 py-12 px-6 rounded-lg text-center shadow">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Why Choose Us?</h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          With experienced faculty, modern facilities, and a rich academic tradition, our institution stands out as a center for educational excellence. 
          We focus on holistic development, fostering both academic and personal growth for a brighter future.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
=======
// AboutPage.jsx

import React from 'react';

const AboutPage = () => {
  return (
    <div className="space-y-6 px-4">
      
      {/* Section 1 */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        {/* Text */}
        <div className="md:w-4/5 w-full space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            Our institution is committed to providing high-quality education through a nurturing and inclusive environment. 
            We focus on academic excellence, character development, and preparing students for real-world success.
          </p>
        </div>
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-6/306261589_507789518018766_1197051028707909511_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEIs7-eSxMOwrjn2pV1_3wPMrIOf5hT-kAysg5_mFP6QNCxvmfmtmdAV7ho5hrUQv5dgHgHu_DZnzVmFn3IEP8Y&_nc_ohc=awznLZVnKrQQ7kNvwEeb35u&_nc_oc=AdmXswSgzBwZ26S08DEgIw0qW2uS36h3eCL49dKcxwpK3Vs45avrVGWXbg06XcbHENw&_nc_zt=23&_nc_ht=scontent.fdac198-1.fna&_nc_gid=p9UYdQPiGF8zCU4eXA9tQw&oh=00_AfQ0VcqhqgvVAE7LE3fS-ctHrvOs-ySR3Ll3q2wUiH9KeQ&oe=688FFEF8"
            alt="About us"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-6/306261589_507789518018766_1197051028707909511_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEIs7-eSxMOwrjn2pV1_3wPMrIOf5hT-kAysg5_mFP6QNCxvmfmtmdAV7ho5hrUQv5dgHgHu_DZnzVmFn3IEP8Y&_nc_ohc=awznLZVnKrQQ7kNvwEeb35u&_nc_oc=AdmXswSgzBwZ26S08DEgIw0qW2uS36h3eCL49dKcxwpK3Vs45avrVGWXbg06XcbHENw&_nc_zt=23&_nc_ht=scontent.fdac198-1.fna&_nc_gid=p9UYdQPiGF8zCU4eXA9tQw&oh=00_AfQ0VcqhqgvVAE7LE3fS-ctHrvOs-ySR3Ll3q2wUiH9KeQ&oe=688FFEF8"
            alt="Our Mission"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
        {/* Text */}
        <div className="md:w-4/5 w-full space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            We aim to empower students with knowledge, critical thinking, and leadership skills. 
            Our mission is to foster innovation, encourage curiosity, and help each student reach their full potential.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-blue-50 py-12 px-6 rounded-lg text-center shadow">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Why Choose Us?</h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          With experienced faculty, modern facilities, and a rich academic tradition, our institution stands out as a center for educational excellence. 
          We focus on holistic development, fostering both academic and personal growth for a brighter future.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
>>>>>>> c67b98635bb65160a126ee5d95ab9f9b2302015f
