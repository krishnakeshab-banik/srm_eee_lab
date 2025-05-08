"use client"

import { motion } from "framer-motion"
import { DigitalClock } from "@/components/digital-clock"
import { DynamicSidebar } from "@/components/dynamic-sidebar"
import Image from "next/image"
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import Link from "next/link"
import { HoverEffect } from "@/components/ui/card-hover-effect"

// Team member data with actual photos
const teamMembers = [
  {
    id: 1,
    name: "Dr. K. Saravanan",
    role: "Associate Professor",
    department: "Department of Electrical Engineering",
    bio: "Dr. K. Saravanan has over 15 years of experience in electrical engineering education and research. He specializes in power systems and renewable energy integration.",
    image: "/images/dr-saravanan.png",
    social: {
      email: "saravanan@srm.edu.in",
      linkedin: "https://linkedin.com/in/example",
      github: "https://github.com/example",
    },
  },
  {
    id: 2,
    name: "Dr. S. Usha",
    role: "Assistant Professor",
    department: "Department of Electronics Engineering",
    bio: "Dr. S. Usha is an expert in digital electronics and embedded systems. She has published numerous papers in international journals and conferences.",
    image: "/images/dr-usha.png",
    social: {
      email: "usha.s@srm.edu.in",
      linkedin: "https://linkedin.com/in/example",
      github: "https://github.com/example",
    },
  },
  {
    id: 3,
    name: "Dr. A. Geetha",
    role: "Associate Professor",
    department: "Department of Electrical Engineering",
    bio: "Dr. A. Geetha manages the electrical engineering laboratories and ensures all equipment is properly maintained and calibrated for student experiments.",
    image: "/images/dr-geetha.png",
    social: {
      email: "geetha.a@srm.edu.in",
      linkedin: "https://linkedin.com/in/example",
      github: "https://github.com/example",
    },
  },
  {
    id: 4,
    name: "Dr. S. Vidyasagar",
    role: "Assistant Professor",
    department: "Department of Electronics Engineering",
    bio: "Dr. S. Vidyasagar specializes in power electronics and control systems. He has contributed to several research projects in renewable energy applications.",
    image: "/images/dr-vidyasagar.png",
    social: {
      email: "vidyasagar@srm.edu.in",
      linkedin: "https://linkedin.com/in/example",
      github: "https://github.com/example",
    },
  },
  {
    id: 5,
    name: "Dr. D. Sattianandan",
    role: "Associate Professor",
    department: "Department of Electrical Engineering",
    bio: "Dr. D. Sattianandan is an expert in power systems and smart grid technologies. He has led multiple projects on grid integration and power quality improvement.",
    image: "/images/dr-sattianandan.png",
    social: {
      email: "sattianandan@srm.edu.in",
      linkedin: "https://linkedin.com/in/example",
      github: "https://github.com/example",
    },
  },
  {
    id: 6,
    name: "Dr. V. Kalyanasundaram",
    role: "Assistant Professor",
    department: "Department of Electrical Engineering",
    bio: "Dr. V. Kalyanasundaram specializes in electrical machines and drives. His research focuses on efficiency improvement and fault diagnosis in electrical systems.",
    image: "/images/dr-kalyanasundaram.png",
    social: {
      email: "kalyanasundaram@srm.edu.in",
      linkedin: "https://linkedin.com/in/example",
      github: "https://github.com/example",
    },
  },
]

// Format team members for hover effect cards
const teamCards = teamMembers.map((member) => ({
  title: member.name,
  description: `${member.role}, ${member.department}`,
  link: `mailto:${member.social.email}`,
}))

export default function TeamPage() {
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
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight">Our Team</h1>
          <p className="mt-4 text-lg text-neutral-400">
            Meet the dedicated faculty and staff behind the EEE Learning Platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-blue-900/20 to-blue-900/5">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-400 mt-1">{member.role}</p>
                <p className="text-neutral-500 text-sm mt-1">{member.department}</p>
                <p className="text-neutral-300 mt-4 text-sm">{member.bio}</p>

                <div className="mt-6 flex space-x-4">
                  <Link
                    href={`mailto:${member.social.email}`}
                    className="text-neutral-400 hover:text-blue-400 transition-colors"
                  >
                    <MailIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-blue-400 transition-colors"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-blue-400 transition-colors"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Meet Our Team</h2>
          <HoverEffect items={teamCards} />
        </div>
      </div>
    </div>
  )
}

