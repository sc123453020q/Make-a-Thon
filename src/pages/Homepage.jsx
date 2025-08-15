// src/pages/Homepage.jsx
import React from "react";
import firebase from "firebase/compat/app";
export default function Homepage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Left */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Learn from India’s Top Educators
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Physics Wallah brings affordable and quality education to every student.
            </p>
            <div className="mt-6 flex space-x-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
                Explore Courses
              </button>
              <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                Download App
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 mt-8 md:mt-0">
            <img src="/hero-image.png" alt="Hero" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((course) => (
              <div key={course} className="bg-white border rounded-lg shadow hover:shadow-lg transition p-6">
                <img src={`/course-${course}.png`} alt="Course" className="rounded-md mb-4" />
                <h3 className="font-semibold text-lg text-gray-800">Course Title {course}</h3>
                <p className="text-gray-600 mt-2">Brief description of the course and its benefits.</p>
                <button className="mt-4 text-blue-600 hover:underline">ⓘLearn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { number: "5+", label: "Students" },
            { number: "1", label: "Educators" },
            { number: "10", label: "Courses" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold text-blue-600">{stat.number}</h3>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((t) => (
              <div key={t} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
                <p className="text-gray-700">
                  “XYZ has changed my learning journey completely. Highly recommended!”
                </p>
                <div className="mt-4 flex items-center space-x-3">
                  <img
                    src={`/student-${t}.png`}
                    alt="Student"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-semibold text-gray-900">Student {t}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo-white.png" alt="Logo" className="h-8 mb-4" />
            <p>Affordable & quality education for all.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-white">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="#">YouTube</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-white">Get Our App</h3>
            <img src="/playstore.png" alt="Play Store" className="h-10" />
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          © 2025 . All rights reserved.
        </div>
      </footer>
    </main>
  );
}
