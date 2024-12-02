"use-client"

import AccordionUI from "@/components/ui/accordion";
import Image from "next/image";
import { useState } from "react";
import { SELECT } from "../(backend)/api/(modules)/cycles/services";

export default function Home() {
  // const [cycles, setCycles] = useState(SELECT())
  return (
   <>
    <main className="p-4">
      <h1>Geek Bee <strong>lms</strong></h1>
      <div className="pl-4">
        |<AccordionUI title="Cycles">
          <ul>
            <li>Cycle 1</li>
            <li>Cycle 2</li>
            <li>Cycle 3</li>
          </ul>
        </AccordionUI>
        <div className="pl-4">
          <AccordionUI title="|_ Modules">
            <ul>
              <li>Module 1</li>
              <li>Module 2</li>
              <li>Module 3</li>
            </ul>
          </AccordionUI>
          <div className="pl-4">
            <AccordionUI title="|_ Steps">
              <ul>
                <li>Step 1</li>
                <li>Step 2</li>
                <li>Step 3</li>
              </ul>
            </AccordionUI>
          </div>
        </div>
      </div>
    </main>
    <footer className="mt-10">
      <h1>todos</h1>
      everething
    </footer>
   </>
  );
}
