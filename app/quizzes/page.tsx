"use client"
import Link from "next/link"
import { DigitalClock } from "@/components/digital-clock"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarDemo } from "@/components/sidebar-demo"

// Updated to match the 6 experiments
const quizzes = [
  {
    id: 1,
    title: "Kirchhoff's Voltage Law Quiz",
    description: "Test your knowledge of voltage relationships in closed loop circuits",
  },
  {
    id: 2,
    title: "Thevenin's Theorem Quiz",
    description: "Challenge yourself on circuit simplification techniques",
  },
  { id: 3, title: "House Wiring Quiz", description: "Verify your understanding of residential electrical systems" },
  { id: 4, title: "Fluorescent Lamp Wiring Quiz", description: "Test your knowledge of fluorescent lighting systems" },
  { id: 5, title: "Staircase Wiring Quiz", description: "Challenge yourself on multi-way switching circuits" },
  { id: 6, title: "Full Wave Rectifier Quiz", description: "Verify your understanding of AC to DC conversion" },
]

export default function QuizzesPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 z-40 h-screen">
        <SidebarDemo />
      </div>

      <DigitalClock />

      <div className="container mx-auto px-4 py-12 ml-16 md:ml-24 lg:ml-32">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight">EEE Quizzes</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Test your knowledge with our electrical and electronics engineering quizzes
          </p>
        </div>

        {/* Updated grid to show 2 cards per row with wider cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-6xl mx-auto">
          {quizzes.map((quiz) => (
            <Link key={quiz.id} href={`/quizzes/${quiz.id}`} className="group">
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-500/50 bg-neutral-900 border-neutral-800">
                <CardHeader className="p-4 bg-gradient-to-br from-blue-900/20 to-blue-900/5">
                  <CardTitle className="text-xl text-white">{quiz.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-neutral-400">{quiz.description}</p>
                </CardContent>
                <CardFooter className="p-4 border-t border-neutral-800 bg-neutral-900/50">
                  <div className="text-sm font-medium text-blue-400">Quiz {quiz.id}</div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

