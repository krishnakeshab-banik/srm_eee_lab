import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const experiments = [
  { id: 1, title: "Ohm's Law", description: "Understand the relationship between voltage, current, and resistance" },
  { id: 2, title: "RC Circuits", description: "Learn about capacitor charging and discharging in RC circuits" },
  { id: 3, title: "RL Circuits", description: "Explore inductors and their behavior in RL circuits" },
  { id: 4, title: "RLC Circuits", description: "Study resonance in RLC circuits" },
  { id: 5, title: "Diodes", description: "Understand semiconductor diodes and their applications" },
  { id: 6, title: "Transistors", description: "Learn about BJT and MOSFET transistors" },
  { id: 7, title: "Op-Amps", description: "Explore operational amplifiers and their circuits" },
  { id: 8, title: "Digital Logic", description: "Study basic logic gates and digital circuits" },
  { id: 9, title: "Microcontrollers", description: "Introduction to microcontroller programming" },
  { id: 10, title: "Power Electronics", description: "Learn about power electronic devices and converters" },
]

export default function ExperimentsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">EEE Experiments</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore our collection of interactive electrical and electronics engineering experiments
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {experiments.map((experiment) => (
          <Link key={experiment.id} href={`/experiments/${experiment.id}`} className="group">
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <CardHeader className="p-4 bg-gradient-to-br from-primary/10 to-primary/5">
                <CardTitle className="text-xl">{experiment.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">{experiment.description}</p>
              </CardContent>
              <CardFooter className="p-4 border-t bg-muted/50">
                <div className="text-sm font-medium">Experiment {experiment.id}</div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

