"use client"

import { useState, useEffect } from "react"
import { notFound, useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DigitalClock } from "@/components/digital-clock"
import { DynamicSidebar } from "@/components/dynamic-sidebar"
import { TinkercadEmbed } from "@/components/tinkercad-embed"

// Updated experiments with detailed information from the lab manual
const experiments = [
  {
    id: 1,
    title: "Kirchhoff's Voltage Law",
    aim: "To verify Kirchhoff's voltage law for the given circuit.",
    apparatus: `
      <h3>Apparatus Required:</h3>
      <table class="w-full border-collapse my-4">
        <thead>
          <tr>
            <th class="border border-neutral-700 px-4 py-2">Sl.No.</th>
            <th class="border border-neutral-700 px-4 py-2">Apparatus</th>
            <th class="border border-neutral-700 px-4 py-2">Range</th>
            <th class="border border-neutral-700 px-4 py-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">1</td>
            <td class="border border-neutral-700 px-4 py-2">RPS (regulated power supply)</td>
            <td class="border border-neutral-700 px-4 py-2">(0-30V)</td>
            <td class="border border-neutral-700 px-4 py-2">2</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">2</td>
            <td class="border border-neutral-700 px-4 py-2">Resistance</td>
            <td class="border border-neutral-700 px-4 py-2">330Ω, 220Ω, 1kΩ</td>
            <td class="border border-neutral-700 px-4 py-2">4</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">3</td>
            <td class="border border-neutral-700 px-4 py-2">Voltmeter</td>
            <td class="border border-neutral-700 px-4 py-2">(0-30V)MC</td>
            <td class="border border-neutral-700 px-4 py-2">2</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">4</td>
            <td class="border border-neutral-700 px-4 py-2">Bread Board & Wires</td>
            <td class="border border-neutral-700 px-4 py-2">-</td>
            <td class="border border-neutral-700 px-4 py-2">Required</td>
          </tr>
        </tbody>
      </table>
    `,
    theory: `
      <h3>Statement:</h3>
      <p class="mb-4">KVL: In any closed path / mesh, the algebraic sum of all the voltages is zero.</p>
      
      <p class="mb-4">Kirchhoff's Voltage Law (KVL) states that the sum of all voltages around any closed loop in a circuit must equal zero. This is a fundamental principle in circuit analysis.</p>
      
      <p class="mb-4">Mathematically, it is expressed as:</p>
      <p class="font-bold mb-4">∑V = 0</p>
      
      <p class="mb-4">Where:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>∑V represents the sum of all voltage drops and rises around a closed loop</li>
      </ul>
      
      <p class="mb-4">This law is based on the principle of conservation of energy and is essential for analyzing complex circuits with multiple voltage sources and components.</p>
    `,
    procedure: `
      <h3>Experimental Procedure:</h3>
      <ol class="list-decimal pl-6 mb-4">
        <li>Set up a circuit with multiple voltage sources and resistors in a closed loop.</li>
        <li>Measure the voltage across each component in the circuit.</li>
        <li>Record all voltage measurements, noting whether they are voltage rises (from sources) or drops (across loads).</li>
        <li>Sum all voltages around the loop, considering their polarities.</li>
        <li>Verify that the sum equals zero, within measurement error.</li>
        <li>Repeat for different loops in the circuit if multiple loops exist.</li>
        <li>Compare experimental results with theoretical calculations.</li>
      </ol>
      
      <h3>Theoretical Values:</h3>
      <table class="w-full border-collapse my-4">
        <thead>
          <tr>
            <th class="border border-neutral-700 px-4 py-2">Sl.No.</th>
            <th class="border border-neutral-700 px-4 py-2">RPS Voltage (E) Volts</th>
            <th class="border border-neutral-700 px-4 py-2">V1 Volts</th>
            <th class="border border-neutral-700 px-4 py-2">V2 Volts</th>
            <th class="border border-neutral-700 px-4 py-2">KVL: E = V1 + V2 Volts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">1</td>
            <td class="border border-neutral-700 px-4 py-2">6</td>
            <td class="border border-neutral-700 px-4 py-2">2.3</td>
            <td class="border border-neutral-700 px-4 py-2">3.79</td>
            <td class="border border-neutral-700 px-4 py-2">6 = 2.22 + 3.712</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">2</td>
            <td class="border border-neutral-700 px-4 py-2">12</td>
            <td class="border border-neutral-700 px-4 py-2">4.54</td>
            <td class="border border-neutral-700 px-4 py-2">7.46</td>
            <td class="border border-neutral-700 px-4 py-2">12 = 4.54 + 7.46</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">3</td>
            <td class="border border-neutral-700 px-4 py-2">18</td>
            <td class="border border-neutral-700 px-4 py-2">6.25</td>
            <td class="border border-neutral-700 px-4 py-2">11.25</td>
            <td class="border border-neutral-700 px-4 py-2">18 = 6.27 + 11.25</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">4</td>
            <td class="border border-neutral-700 px-4 py-2">24</td>
            <td class="border border-neutral-700 px-4 py-2">9.09</td>
            <td class="border border-neutral-700 px-4 py-2">14.91</td>
            <td class="border border-neutral-700 px-4 py-2">24 = 9.09 + 14.91</td>
          </tr>
        </tbody>
      </table>
    `,
    references: `
      <h3>References:</h3>
      <ol class="list-decimal pl-6 mb-4">
        <li>Boylestad, R. L. (2016). Introductory Circuit Analysis (13th ed.). Pearson.</li>
        <li>Floyd, T. L. (2018). Principles of Electric Circuits (9th ed.). Pearson.</li>
        <li>Nilsson, J. W., & Riedel, S. A. (2019). Electric Circuits (11th ed.). Pearson.</li>
        <li>Irwin, J. D., & Nelms, R. M. (2015). Basic Engineering Circuit Analysis (11th ed.). Wiley.</li>
      </ol>
    `,
    image: "/placeholder.svg?height=400&width=600",
    embedId: "hNWAhAfShmV", // Tinkercad embed ID
  },
  {
    id: 2,
    title: "Thevenin's Theorem",
    aim: "To verify Thevenin's Theorem by constructing an equivalent circuit and comparing its behavior with the original circuit.",
    apparatus: `
      <h3>Apparatus Required:</h3>
      <table class="w-full border-collapse my-4">
        <thead>
          <tr>
            <th class="border border-neutral-700 px-4 py-2">Sl.No.</th>
            <th class="border border-neutral-700 px-4 py-2">Apparatus</th>
            <th class="border border-neutral-700 px-4 py-2">Range</th>
            <th class="border border-neutral-700 px-4 py-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">1</td>
            <td class="border border-neutral-700 px-4 py-2">RPS (regulated power supply)</td>
            <td class="border border-neutral-700 px-4 py-2">(0-30V)</td>
            <td class="border border-neutral-700 px-4 py-2">1</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">2</td>
            <td class="border border-neutral-700 px-4 py-2">Resistance</td>
            <td class="border border-neutral-700 px-4 py-2">330Ω, 1kΩ</td>
            <td class="border border-neutral-700 px-4 py-2">3</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">3</td>
            <td class="border border-neutral-700 px-4 py-2">Voltmeter</td>
            <td class="border border-neutral-700 px-4 py-2">(0-30V)MC</td>
            <td class="border border-neutral-700 px-4 py-2">1</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">4</td>
            <td class="border border-neutral-700 px-4 py-2">Ammeter</td>
            <td class="border border-neutral-700 px-4 py-2">(0-10mA)</td>
            <td class="border border-neutral-700 px-4 py-2">1</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">5</td>
            <td class="border border-neutral-700 px-4 py-2">Bread Board & Wires</td>
            <td class="border border-neutral-700 px-4 py-2">-</td>
            <td class="border border-neutral-700 px-4 py-2">Required</td>
          </tr>
        </tbody>
      </table>
    `,
    theory: `
      <h3>Thevenin's Theorem Theory:</h3>
      <p class="mb-4">Thevenin's Theorem states that any linear circuit with voltage and current sources can be replaced by an equivalent circuit consisting of a voltage source in series with a resistor.</p>
      
      <p class="mb-4">The Thevenin equivalent circuit consists of:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Thevenin voltage (V<sub>TH</sub>): The open-circuit voltage across the load terminals</li>
        <li>Thevenin resistance (R<sub>TH</sub>): The equivalent resistance looking back into the circuit with all sources replaced by their internal resistances</li>
      </ul>
      
      <p class="mb-4">This simplification technique is powerful for analyzing complex circuits and determining maximum power transfer conditions.</p>
      
      <p class="mb-4">For the circuit in this experiment:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>V<sub>TH</sub> = 11.25V</li>
        <li>R<sub>TH</sub> = 490Ω</li>
      </ul>
    `,
    procedure: `
      <h3>Experimental Procedure:</h3>
      <ol class="list-decimal pl-6 mb-4">
        <li>Set up the original circuit without the load component.</li>
        <li>Measure the open-circuit voltage across the load terminals (V<sub>TH</sub>).</li>
        <li>Replace all independent sources with their internal resistances (voltage sources as short circuits, current sources as open circuits).</li>
        <li>Measure the equivalent resistance looking back into the circuit from the load terminals (R<sub>TH</sub>).</li>
        <li>Construct the Thevenin equivalent circuit using V<sub>TH</sub> and R<sub>TH</sub>.</li>
        <li>Connect the load to the Thevenin equivalent circuit and measure the load current and voltage.</li>
        <li>Compare the results with measurements from the original circuit to verify the theorem.</li>
        <li>Repeat with different load values to confirm the equivalence holds for any load.</li>
      </ol>
      
      <h3>Circuit for Thevenin's Theorem Verification:</h3>
      <div class="my-4 p-4 bg-neutral-800 rounded-lg">
        <p class="mb-2">Original Circuit:</p>
        <ul class="list-disc pl-6 mb-4">
          <li>Voltage source: 22V</li>
          <li>Resistors: Three 330Ω resistors in the configuration shown</li>
          <li>Load: 1kΩ resistor</li>
        </ul>
        
        <p class="mb-2">Thevenin Equivalent Circuit:</p>
        <ul class="list-disc pl-6 mb-4">
          <li>V<sub>TH</sub> = 11.25V</li>
          <li>R<sub>TH</sub> = 490Ω</li>
          <li>Load current (I<sub>L</sub>) = 7.1mA</li>
        </ul>
      </div>
    `,
    references: `
      <h3>References:</h3>
      <ol class="list-decimal pl-6 mb-4">
        <li>Boylestad, R. L. (2016). Introductory Circuit Analysis (13th ed.). Pearson.</li>
        <li>Floyd, T. L. (2018). Principles of Electric Circuits (9th ed.). Pearson.</li>
        <li>Nilsson, J. W., & Riedel, S. A. (2019). Electric Circuits (11th ed.). Pearson.</li>
        <li>Irwin, J. D., & Nelms, R. M. (2015). Basic Engineering Circuit Analysis (11th ed.). Wiley.</li>
      </ol>
    `,
    image: "/placeholder.svg?height=400&width=600",
    embedId: "lAusQJ3m4bF", // Tinkercad embed ID
  },
  {
    id: 3,
    title: "House Wiring",
    aim: "To implement residential house wiring using switches, lamps, and energy meter",
    apparatus: `
      <h3>Apparatus Required:</h3>
      <table class="w-full border-collapse my-4">
        <thead>
          <tr>
            <th class="border border-neutral-700 px-4 py-2">Sl.No.</th>
            <th class="border border-neutral-700 px-4 py-2">Apparatus</th>
            <th class="border border-neutral-700 px-4 py-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">1</td>
            <td class="border border-neutral-700 px-4 py-2">1 phase energy meter</td>
            <td class="border border-neutral-700 px-4 py-2">1</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">2</td>
            <td class="border border-neutral-700 px-4 py-2">Main Box</td>
            <td class="border border-neutral-700 px-4 py-2">1</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">3</td>
            <td class="border border-neutral-700 px-4 py-2">5 A Switch</td>
            <td class="border border-neutral-700 px-4 py-2">3</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">4</td>
            <td class="border border-neutral-700 px-4 py-2">Indicator</td>
            <td class="border border-neutral-700 px-4 py-2">1</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">5</td>
            <td class="border border-neutral-700 px-4 py-2">Incandescent lamp with holder</td>
            <td class="border border-neutral-700 px-4 py-2">1</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">6</td>
            <td class="border border-neutral-700 px-4 py-2">Fan</td>
            <td class="border border-neutral-700 px-4 py-2">1</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">7</td>
            <td class="border border-neutral-700 px-4 py-2">Three pin plug</td>
            <td class="border border-neutral-700 px-4 py-2">1</td>
          </tr>
        </tbody>
      </table>
    `,
    theory: `
      <h3>House Wiring Theory:</h3>
      <p class="mb-4">Residential electrical wiring involves the distribution of electrical power throughout a home. It includes circuits for lighting, outlets, and appliances.</p>
      
      <p class="mb-4">Key components include:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Service entrance: Where power enters the building</li>
        <li>Main distribution panel: Contains circuit breakers or fuses</li>
        <li>Branch circuits: Individual circuits serving different areas or appliances</li>
        <li>Grounding system: Safety system to prevent electrical shocks</li>
      </ul>
      
      <p class="mb-4">Understanding proper wiring techniques and safety standards is essential for safe and reliable electrical installations.</p>
    `,
    procedure: `
      <h3>Procedure:</h3>
      <ol class="list-decimal pl-6 mb-4">
        <li>Connections are given as per circuit diagram.</li>
        <li>Switch is put to ON state one by one and energy meter readings are noted down.</li>
      </ol>
      
      <h3>Circuit Diagram:</h3>
      <div class="my-4 p-4 bg-neutral-800 rounded-lg">
        <p class="mb-2">The circuit includes:</p>
        <ul class="list-disc pl-6 mb-4">
          <li>AC supply (Phase and Neutral)</li>
          <li>Energy meter</li>
          <li>Main box with fuse</li>
          <li>Switches for controlling lamps and fan</li>
          <li>Ground connection</li>
        </ul>
      </div>
    `,
    references: `
      <h3>References:</h3>
      <ol class="list-decimal pl-6 mb-4">
        <li>Mullin, R. (2017). Electrical Wiring Residential (19th ed.). Cengage Learning.</li>
        <li>National Electrical Code (NEC) (2020). National Fire Protection Association.</li>
        <li>Richter, H. P., & Schwan, W. C. (2016). Practical Electrical Wiring: Residential, Farm, Commercial, and Industrial. Park Publishing.</li>
        <li>Black & Decker (2017). The Complete Guide to Wiring (7th ed.). Cool Springs Press.</li>
      </ol>
    `,
    image: "/placeholder.svg?height=400&width=600",
    embedId: "2rTQ63Z8SdD", // Tinkercad embed ID
  },
  {
    id: 4,
    title: "Fluorescent Lamp Wiring",
    aim: "To make connections of a fluorescent lamp wiring and to study the accessories of the same.",
    apparatus: `
      <h3>Apparatus Required:</h3>
      <table class="w-full border-collapse my-4">
        <thead>
          <tr>
            <th class="border border-neutral-700 px-4 py-2">S.No</th>
            <th class="border border-neutral-700 px-4 py-2">Components</th>
            <th class="border border-neutral-700 px-4 py-2">Range/Type</th>
            <th class="border border-neutral-700 px-4 py-2">Quality</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">1</td>
            <td class="border border-neutral-700 px-4 py-2">Fluorescent Lamp fixture</td>
            <td class="border border-neutral-700 px-4 py-2">4 ft</td>
            <td class="border border-neutral-700 px-4 py-2">1</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">2</td>
            <td class="border border-neutral-700 px-4 py-2">Fluorescent lamp</td>
            <td class="border border-neutral-700 px-4 py-2">40W</td>
            <td class="border border-neutral-700 px-4 py-2">1</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">3</td>
            <td class="border border-neutral-700 px-4 py-2">Choke</td>
            <td class="border border-neutral-700 px-4 py-2">40W, 230V</td>
            <td class="border border-neutral-700 px-4 py-2">1</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">4</td>
            <td class="border border-neutral-700 px-4 py-2">Starter</td>
            <td class="border border-neutral-700 px-4 py-2">-</td>
            <td class="border border-neutral-700 px-4 py-2">1</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">5</td>
            <td class="border border-neutral-700 px-4 py-2">Connecting wires</td>
            <td class="border border-neutral-700 px-4 py-2">-</td>
            <td class="border border-neutral-700 px-4 py-2">As required</td>
          </tr>
        </tbody>
      </table>
      
      <h3>Tools Required:</h3>
      <p>Wire man's tool Kit - 1 No</p>
    `,
    theory: `
      <h3>Theory:</h3>
      <ol class="list-decimal pl-6 mb-4">
        <li>The electrode of the starter which is enclosed in a gas bulb filled with argon gas, cause discharge in the argon gas with consequent heating.</li>
        <li>Due to heating, the bimetallic strip bends and causes in the starter to close. After this, the choke, the filaments (tube ends) to tube and starter becomes connected in series.</li>
        <li>When the current flows through the tube end filaments the heat is produced. During the process the discharge in the starter tube disappears and the contacts in the starter move apart.</li>
        <li>When sudden break in the circuit occur due to moving apart of starter terminals, this causes a high value of e.m.f to be induced in the choke.</li>
        <li>According to Lenz's law, the direction of induced e.m.f in the choke will try to oppose the fall of current in the circuit.</li>
        <li>The voltage thus acting across the tube ends will be high enough to cause a discharge to occur in the gas inside the tube. Thus the tube starts giving light.</li>
        <li>The fluorescent lamp is a low pressure mercury lamp and is a long evacuated tube. It contains a small amount of mercury and argon gas at 2.5 mm pressure. At the time of switching in the tube, mercury is in the form of small drops. Therefore, to start the tube, filling up of argon gas is necessary. So, in the beginning, argon gas starts burning at the ends of the tube; the mercury is heated and controls the current and the tube starts giving light. At each end of the tube, there is a tungsten electrode which is coated with fast electron emitting material. Inside of the tube is coated with phosphor according to the type of light.</li>
        <li>A starter helps to start the start the tube and break the circuit.</li>
        <li>The choke coil is also called blast. It has a laminated core over which enameled wire is wound. The function of the choke is to increase the voltage to almost 1000V at the time of switching on the tube and when the tube starts working, it reduces the voltage across the tube and keeps the current constant.</li>
      </ol>
    `,
    procedure: `
      <h3>Procedure:</h3>
      <ol class="list-decimal pl-6 mb-4">
        <li>Give the connections as per the circuit diagram.</li>
        <li>Fix the tube holder and the choke in the tube.</li>
        <li>The phase wire is connected to the choke and neutral directly to the tube.</li>
        <li>Connect the starter in series with the tube.</li>
        <li>Switch on the supply and check the fluorescent lamp lighting.</li>
      </ol>
      
      <h3>Circuit Diagram:</h3>
      <div class="my-4 p-4 bg-neutral-800 rounded-lg">
        <p class="mb-2">The circuit includes:</p>
        <ul class="list-disc pl-6 mb-4">
          <li>AC Supply (230V, 50Hz)</li>
          <li>Switch</li>
          <li>Choke (40W, 230V)</li>
          <li>Starter</li>
          <li>Fluorescent lamp (40W) with filaments at both ends</li>
        </ul>
      </div>
    `,
    references: `
      <h3>References:</h3>
      <ol class="list-decimal pl-6 mb-4">
        <li>DiLouie, C. (2016). Lighting Controls Handbook. Fairmont Press.</li>
        <li>Khanna, V. K. (2014). Fundamentals of Solid-State Lighting: LEDs, OLEDs, and Their Applications in Illumination and Displays. CRC Press.</li>
        <li>National Electrical Code (NEC) (2020). National Fire Protection Association.</li>
        <li>Grondzik, W. T., & Kwok, A. G. (2019). Mechanical and Electrical Equipment for Buildings (13th ed.). Wiley.</li>
      </ol>
    `,
    image: "/placeholder.svg?height=400&width=600",
    embedId: "hnFoQc772H0", // Tinkercad embed ID
  },
  {
    id: 5,
    title: "Staircase Wiring",
    aim: "To control a single lamp from two different places.",
    apparatus: `
      <h3>Apparatus Required:</h3>
      <table class="w-full border-collapse my-4">
        <thead>
          <tr>
            <th class="border border-neutral-700 px-4 py-2">S.No</th>
            <th class="border border-neutral-700 px-4 py-2">Components</th>
            <th class="border border-neutral-700 px-4 py-2">Quan/Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">1</td>
            <td class="border border-neutral-700 px-4 py-2">Incandescent Lamp</td>
            <td class="border border-neutral-700 px-4 py-2">1 (230V, 40W)</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">2</td>
            <td class="border border-neutral-700 px-4 py-2">Lamp holder</td>
            <td class="border border-neutral-700 px-4 py-2">1</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">3</td>
            <td class="border border-neutral-700 px-4 py-2">Two way switches</td>
            <td class="border border-neutral-700 px-4 py-2">2 (230V, 5A)</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">4</td>
            <td class="border border-neutral-700 px-4 py-2">Connecting Wires</td>
            <td class="border border-neutral-700 px-4 py-2">As required</td>
          </tr>
        </tbody>
      </table>
      
      <h3>Tools Required:</h3>
      <p>Wire man's tool Kit - 1 No.</p>
    `,
    theory: `
      <h3>Theory:</h3>
      <ol class="list-decimal pl-6 mb-4">
        <li>A two way switch is installed near the first step of the stairs. The other two way switch is installed at the upper part where the stair ends.</li>
        <li>The light point is provided between first and last stair at an adequate location and height if the light is switched on by the lower switch. It can be switched off by the switch at the top or vice versa.</li>
        <li>The circuit can be used at the places like bed room where the person may not have to travel for switching off the light to the place from where the light is switched on.</li>
        <li>Two numbers of Two-way switches are used for the purpose. The supply is given to the switch at the short circuited terminals.</li>
        <li>The connection to the light point is taken from the similar short circuited terminal of the second switch. Other two independent terminals of each circuit are connected through cables.</li>
      </ol>
    `,
    procedure: `
      <h3>Procedure:</h3>
      <ol class="list-decimal pl-6 mb-4">
        <li>Give the connections as per the circuit diagram.</li>
        <li>Verify the connections.</li>
        <li>Switch on the supply.</li>
        <li>Verify the conditions.</li>
      </ol>
      
      <h3>Tabulation:</h3>
      <table class="w-full border-collapse my-4">
        <thead>
          <tr>
            <th class="border border-neutral-700 px-4 py-2" colspan="2">Position of switches</th>
            <th class="border border-neutral-700 px-4 py-2" rowspan="2">Condition of lamp</th>
          </tr>
          <tr>
            <th class="border border-neutral-700 px-4 py-2">S1</th>
            <th class="border border-neutral-700 px-4 py-2">S2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">on</td>
            <td class="border border-neutral-700 px-4 py-2">off</td>
            <td class="border border-neutral-700 px-4 py-2">glowing</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">off</td>
            <td class="border border-neutral-700 px-4 py-2">on</td>
            <td class="border border-neutral-700 px-4 py-2">glowing</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">off</td>
            <td class="border border-neutral-700 px-4 py-2">off</td>
            <td class="border border-neutral-700 px-4 py-2">not glowing</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">on</td>
            <td class="border border-neutral-700 px-4 py-2">on</td>
            <td class="border border-neutral-700 px-4 py-2">not glowing</td>
          </tr>
        </tbody>
      </table>
    `,
    references: `
      <h3>References:</h3>
      <ol class="list-decimal pl-6 mb-4">
        <li>Mullin, R. (2017). Electrical Wiring Residential (19th ed.). Cengage Learning.</li>
        <li>National Electrical Code (NEC) (2020). National Fire Protection Association.</li>
        <li>Richter, H. P., & Schwan, W. C. (2016). Practical Electrical Wiring: Residential, Farm, Commercial, and Industrial. Park Publishing.</li>
        <li>Black & Decker (2017). The Complete Guide to Wiring (7th ed.). Cool Springs Press.</li>
      </ol>
    `,
    image: "/placeholder.svg?height=400&width=600",
    embedId: "94YWeHFB9oN", // Tinkercad embed ID
  },
  {
    id: 6,
    title: "Full Wave Rectifier",
    aim: "To construct a single phase full-wave bridge rectifier using diode and to draw its performance characteristics.",
    apparatus: `
      <h3>Apparatus Required:</h3>
      <table class="w-full border-collapse my-4">
        <thead>
          <tr>
            <th class="border border-neutral-700 px-4 py-2">S.No.</th>
            <th class="border border-neutral-700 px-4 py-2">Name</th>
            <th class="border border-neutral-700 px-4 py-2">Range</th>
            <th class="border border-neutral-700 px-4 py-2">Qty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">1</td>
            <td class="border border-neutral-700 px-4 py-2">Transformer</td>
            <td class="border border-neutral-700 px-4 py-2">230/(6-0-6)V</td>
            <td class="border border-neutral-700 px-4 py-2">1</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">2</td>
            <td class="border border-neutral-700 px-4 py-2">R.P.S</td>
            <td class="border border-neutral-700 px-4 py-2">(0-30)V</td>
            <td class="border border-neutral-700 px-4 py-2">2</td>
          </tr>
        </tbody>
      </table>
      
      <h3>Components Required:</h3>
      <table class="w-full border-collapse my-4">
        <thead>
          <tr>
            <th class="border border-neutral-700 px-4 py-2">S.No.</th>
            <th class="border border-neutral-700 px-4 py-2">Name</th>
            <th class="border border-neutral-700 px-4 py-2">Range</th>
            <th class="border border-neutral-700 px-4 py-2">Qty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">1</td>
            <td class="border border-neutral-700 px-4 py-2">Diode</td>
            <td class="border border-neutral-700 px-4 py-2">IN4007</td>
            <td class="border border-neutral-700 px-4 py-2">4</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">2</td>
            <td class="border border-neutral-700 px-4 py-2">Resistor</td>
            <td class="border border-neutral-700 px-4 py-2">1kΩ</td>
            <td class="border border-neutral-700 px-4 py-2">1</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">3</td>
            <td class="border border-neutral-700 px-4 py-2">Bread Board</td>
            <td class="border border-neutral-700 px-4 py-2">-</td>
            <td class="border border-neutral-700 px-4 py-2">1</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">4</td>
            <td class="border border-neutral-700 px-4 py-2">Capacitor</td>
            <td class="border border-neutral-700 px-4 py-2">100μF</td>
            <td class="border border-neutral-700 px-4 py-2">1</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">5</td>
            <td class="border border-neutral-700 px-4 py-2">CRO</td>
            <td class="border border-neutral-700 px-4 py-2">1Hz-20MHz</td>
            <td class="border border-neutral-700 px-4 py-2">1</td>
          </tr>
          <tr>
            <td class="border border-neutral-700 px-4 py-2">6</td>
            <td class="border border-neutral-700 px-4 py-2">Connecting wires</td>
            <td class="border border-neutral-700 px-4 py-2">-</td>
            <td class="border border-neutral-700 px-4 py-2">Req</td>
          </tr>
        </tbody>
      </table>
    `,
    theory: `
      <h3>Full Wave Rectifier Theory:</h3>
      <p class="mb-4">A full wave rectifier converts alternating current (AC) to direct current (DC) by utilizing both halves of the AC cycle. This results in more efficient power conversion compared to half-wave rectification.</p>
      
      <p class="mb-4">Types of full wave rectifiers include:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Center-tapped transformer type: Uses two diodes</li>
        <li>Bridge rectifier: Uses four diodes in a bridge configuration</li>
      </ul>
      
      <p class="mb-4">The output of a full wave rectifier has less ripple and higher average voltage than a half-wave rectifier, making it more suitable for power supply applications.</p>
    `,
    procedure: `
      <h3>Procedure:</h3>
      <h4>Without Filter:</h4>
      <ol class="list-decimal pl-6 mb-4">
        <li>Give the connections as per the circuit diagram.</li>
        <li>Give 230 V, 50HZ input to the step down transformer where secondary connected to the bridge Rectifier.</li>
        <li>Take the rectifier output across the Load.</li>
        <li>Plot its performance graph.</li>
      </ol>
      
      <h4>With Filter:</h4>
      <ol class="list-decimal pl-6 mb-4">
        <li>Give the connections as per the circuit diagram.</li>
        <li>Give 230 V, 50HZ input to the step down transformer where secondary connected to the bridge Rectifier.</li>
        <li>Connect the Capacitor across the Load.</li>
        <li>Take the rectifier output across the Load.</li>
        <li>Plot its performance graph.</li>
      </ol>
      
      <h3>Circuit Diagrams:</h3>
      <div class="my-4 p-4 bg-neutral-800 rounded-lg">
        <p class="mb-2">Without Filter:</p>
        <ul class="list-disc pl-6 mb-4">
          <li>AC input (230V, 50Hz)</li>
          <li>Transformer (step-down)</li>
          <li>Bridge rectifier with four diodes (D1, D2, D3, D4)</li>
          <li>Load resistor (1kΩ)</li>
          <li>CRO for measurement</li>
        </ul>
        
        <p class="mb-2">With Filter:</p>
        <ul class="list-disc pl-6 mb-4">
          <li>Same as above, with a 100μF capacitor connected in parallel with the load resistor</li>
        </ul>
      </div>
      
      <h3>Observations:</h3>
      <p class="mb-4">Without Filter:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Time period: 10 milliseconds</li>
        <li>Output voltage: 8V</li>
      </ul>
      
      <p class="mb-4">With Filter:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Time period: 10 milliseconds</li>
        <li>Output voltage: Smoother DC with reduced ripple</li>
      </ul>
    `,
    references: `
      <h3>References:</h3>
      <ol class="list-decimal pl-6 mb-4">
        <li>Boylestad, R. L., & Nashelsky, L. (2015). Electronic Devices and Circuit Theory (11th ed.). Pearson.</li>
        <li>Malvino, A. P., & Bates, D. J. (2016). Electronic Principles (8th ed.). McGraw-Hill Education.</li>
        <li>Floyd, T. L. (2018). Electronic Devices (10th ed.). Pearson.</li>
        <li>Sedra, A. S., & Smith, K. C. (2014). Microelectronic Circuits (7th ed.). Oxford University Press.</li>
      </ol>
    `,
    image: "/placeholder.svg?height=400&width=600",
    embedId: "jbRQbeSnAzj", // Tinkercad embed ID
  },
]

export default function ExperimentPage() {
  const params = useParams()
  const [experiment, setExperiment] = useState(null)
  const [activeTab, setActiveTab] = useState("theory")

  useEffect(() => {
    const id = Number.parseInt(params.id)
    const exp = experiments.find((e) => e.id === id)

    if (!exp) {
      notFound()
    }

    setExperiment(exp)

    // Check for hash in URL to set active tab
    const hash = window.location.hash
    if (hash) {
      const tabName = hash.replace("#", "")
      if (["aim", "apparatus", "theory", "procedure", "simulation", "references"].includes(tabName)) {
        setActiveTab(tabName)
      }
    }
  }, [params.id])

  if (!experiment) {
    return null
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Dynamic Sidebar */}
      <DynamicSidebar />

      <DigitalClock />

      <div className="w-full max-w-6xl mx-auto px-4 py-8 pt-24 ml-16 md:ml-24 lg:ml-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">{experiment.title}</h1>
            <p className="text-blue-400">Experiment {experiment.id}</p>
          </div>

          <Tabs
            defaultValue={activeTab}
            className="w-full"
            onValueChange={(value) => {
              setActiveTab(value)
              window.location.hash = value
            }}
          >
            <TabsList className="grid w-full grid-cols-6 bg-neutral-900 border border-neutral-800">
              <TabsTrigger value="aim" className="data-[state=active]:bg-blue-900/30 text-white">
                Aim
              </TabsTrigger>
              <TabsTrigger value="apparatus" className="data-[state=active]:bg-blue-900/30 text-white">
                Apparatus
              </TabsTrigger>
              <TabsTrigger value="theory" className="data-[state=active]:bg-blue-900/30 text-white">
                Theory
              </TabsTrigger>
              <TabsTrigger value="procedure" className="data-[state=active]:bg-blue-900/30 text-white">
                Procedure
              </TabsTrigger>
              <TabsTrigger value="simulation" className="data-[state=active]:bg-blue-900/30 text-white">
                Simulation
              </TabsTrigger>
              <TabsTrigger value="references" className="data-[state=active]:bg-blue-900/30 text-white">
                References
              </TabsTrigger>
            </TabsList>

            {/* Aim Tab */}
            <TabsContent value="aim" id="aim" className="mt-4">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 text-neutral-300">
                <h3 className="text-xl font-bold text-white mb-4">Aim</h3>
                <p className="text-lg">{experiment.aim}</p>
              </div>
            </TabsContent>

            {/* Apparatus Tab */}
            <TabsContent value="apparatus" id="apparatus" className="mt-4">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 text-neutral-300">
                <div dangerouslySetInnerHTML={{ __html: experiment.apparatus }} />
              </div>
            </TabsContent>

            {/* Theory Tab */}
            <TabsContent value="theory" id="theory" className="mt-4">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 text-neutral-300">
                <div dangerouslySetInnerHTML={{ __html: experiment.theory }} />
              </div>
            </TabsContent>

            {/* Procedure Tab */}
            <TabsContent value="procedure" id="procedure" className="mt-4">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 text-neutral-300">
                <div dangerouslySetInnerHTML={{ __html: experiment.procedure }} />
              </div>
            </TabsContent>

            {/* Simulation Tab */}
            <TabsContent value="simulation" id="simulation" className="mt-4">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Interactive Simulation</h3>
                <TinkercadEmbed embedId={experiment.embedId} title={experiment.title} />
                <p className="text-neutral-400 mt-4 text-sm">
                  Note: If the simulation doesn't load properly, you can also access it directly on Tinkercad by
                  clicking
                  <a
                    href={`https://www.tinkercad.com/things/${experiment.embedId}/editel`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 ml-1"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
            </TabsContent>

            {/* References Tab */}
            <TabsContent value="references" id="references" className="mt-4">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 text-neutral-300">
                <div dangerouslySetInnerHTML={{ __html: experiment.references }} />
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}

