"use client"

import { motion } from "framer-motion"
import { DigitalClock } from "@/components/digital-clock"
import { DynamicSidebar } from "@/components/dynamic-sidebar"
import Link from "next/link"
import { Mail, ExternalLink } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Dynamic Sidebar */}
      <DynamicSidebar />

      <DigitalClock />

      <div className="w-full max-w-6xl mx-auto px-4 py-8 pt-24 ml-16 md:ml-24 lg:ml-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-6">About SRM EEE Lab</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-neutral-300 mb-6">
              The SRM EEE Lab is an integral resource of the Electrical and Electronics Engineering Department at SRM
              Institute of Science and Technology, Kattankulathur. The lab is dedicated to offering engineering students
              a comprehensive platform to explore, experiment, and develop a robust understanding of the fundamental
              principles of electrical and electronics engineering.
            </p>

            <p className="text-lg text-neutral-300 mb-12">
              We are committed to enriching the practical application of theoretical knowledge, empowering students to
              enhance their problem-solving skills, technical expertise, and foster a passion for innovation within the
              engineering domain.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-white">Faculty Team</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white">Dr. K. Saravanan</h3>
                <p className="text-blue-400 mt-1">Associate Professor</p>
                <p className="text-neutral-400 mt-1">Department of Electrical and Electronics Engineering</p>
                <p className="text-neutral-400">Kattankulathur 603 203</p>
                <Link
                  href="mailto:saravanan@srm.edu.in"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4"
                >
                  <Mail className="h-4 w-4" /> Contact
                </Link>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white">Dr. S. Vidyasagar</h3>
                <p className="text-blue-400 mt-1">Assistant Professor</p>
                <p className="text-neutral-400 mt-1">Department of Electrical and Electronics Engineering</p>
                <p className="text-neutral-400">Kattankulathur 603 203</p>
                <Link
                  href="mailto:vidyasagar@srm.edu.in"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4"
                >
                  <Mail className="h-4 w-4" /> Contact
                </Link>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white">Dr. D. Sattianandan</h3>
                <p className="text-blue-400 mt-1">Associate Professor</p>
                <p className="text-neutral-400 mt-1">Department of Electrical and Electronics Engineering</p>
                <p className="text-neutral-400">Kattankulathur 603 203</p>
                <Link
                  href="mailto:sattianandan@srm.edu.in"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4"
                >
                  <Mail className="h-4 w-4" /> Contact
                </Link>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white">Dr. V. Kalyanasundaram</h3>
                <p className="text-blue-400 mt-1">Assistant Professor</p>
                <p className="text-neutral-400 mt-1">Department of Electrical and Electronics Engineering</p>
                <p className="text-neutral-400">Kattankulathur 603 203</p>
                <Link
                  href="mailto:kalyanasundaram@srm.edu.in"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4"
                >
                  <Mail className="h-4 w-4" /> Contact
                </Link>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-white">Objectives of the Lab</h2>

            <ul className="list-disc pl-6 mb-12 space-y-2 text-neutral-300">
              <li>To offer students hands-on experience with fundamental electrical and electronics experiments.</li>
              <li>To strengthen theoretical knowledge through practical applications and simulations.</li>
              <li>To cultivate critical thinking, teamwork, and effective problem-solving skills.</li>
              <li>To establish a robust foundation for advanced studies in electrical and electronics engineering.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 text-white">Key Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Interactive Simulations</h3>
                <p className="text-neutral-300">
                  Access a variety of simulations that bring complex concepts to life, allowing students to experiment
                  and observe outcomes in a virtual environment.
                </p>
              </div>

              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Hands-On Learning</h3>
                <p className="text-neutral-300">
                  Engage in practical experiments that reinforce theoretical knowledge and develop essential technical
                  skills.
                </p>
              </div>

              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Comprehensive Learning Experience</h3>
                <p className="text-neutral-300">
                  Benefit from a curriculum designed to provide a deep understanding of electrical and electronics
                  engineering principles through a blend of theory and practice.
                </p>
              </div>

              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Expert Guidance</h3>
                <p className="text-neutral-300">
                  Receive mentorship and support from experienced faculty members, ensuring clarity and fostering a
                  comprehensive learning environment.
                </p>
              </div>

              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 md:col-span-2">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Modern Resources</h3>
                <p className="text-neutral-300">
                  Utilize contemporary tools and equipment that align with current industry standards and technological
                  advancements.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-white">Contact Us</h2>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-white mb-4">
                Department of Electrical and Electronics Engineering
              </h3>
              <p className="text-neutral-300">SRM Institute of Science and Technology</p>
              <p className="text-neutral-300">Kattankulathur 603 203</p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link
                  href="mailto:eee@srm.edu.in"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                >
                  <Mail className="h-4 w-4" /> eee@srm.edu.in
                </Link>
                <Link
                  href="https://www.srmist.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                >
                  <ExternalLink className="h-4 w-4" /> www.srmist.edu.in
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

