import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";
import { CheckCheck } from "lucide-react";
import g3 from "../assets/images/a2.jpg";
import site from "../assets/images/a1.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MagicCard, MagicContainer } from "@/components/ui/magic-card";
import Reveal from "@/components/Reveal";
import GetInTouch from "@/components/layout/GetInTouch";

export default function About() {
  return (
    <>
      <NavbarWithBreadcrums />
      <div className="container grid w-full justify-center gap-4 p-4 md:grid-cols-1 lg:grid-cols-2">
        <Reveal>
          <MagicContainer className={"hidden h-[30rem] md:flex"}>
            <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden shadow-2xl">
              <img
                className="absolute hidden h-full w-full rounded-md md:block"
                src={site}
                alt=""
              />
            </MagicCard>
          </MagicContainer>
        </Reveal>
        <Reveal>
          <MagicContainer>
            <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden shadow-2xl md:p-20">
              <h1 className="text-sm font-bold uppercase text-blue-500">
                WELCOME TO Shepherd Specialist Hospital
              </h1>
              <h1 className="text-center font-mono text-xl font-bold text-tertiary md:text-4xl">
              Excellence in Care, Safety in Surgery
              </h1>
              <div className="mt-4">
                <Mission />
              </div>
            </MagicCard>
          </MagicContainer>
        </Reveal>
      </div>
      <Reveal>
        <MagicContainer className={"container my-20 p-4"}>
          <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden shadow-2xl md:p-20">
            <p className="md:text-md font-serif text-xl">
            Initially registered as a clinic with Ministry of Health and Ministry of trade & Commerce Sokoto in 1993 by Dr Nelson Akuma but sold and Handed over to Dr Kufre Robert Iseh in December 2000.
From attending to mainly maternity cases shepherd specialist hospital has transformed to attending to General medical ,Surgical ,Paediatric , Paediatric surgical ,Plastic, Obstetric , gynaecological, Ear Nose &Throat ,Head & Neck ,Skull base surgical cases.

            </p>
            <p className="md:text-md mt-10 font-serif text-xl">
            It has Primary and secondary registration for the National Health Insurance Scheme in Nigeria and attends to several Health Maintenance Organisations (HMO) clients from several organizations.
Shepherd Specialist Hospital Sokoto is Specially known for Safe Surgery devoid of Complications of whatever form. Safety for surgery is paramount in Shepherd Specialist Hospital Sokoto.

            </p>
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          </MagicCard>
        </MagicContainer>
      </Reveal>

      <Reveal>
        <div className="bg-gradient-to-r from-tertiary to-info">
          <div className="container mx-auto my-8 grid gap-4 p-4 text-white md:grid-cols-2">
            <div className="my-4">
              <h1 className="font-mono text-2xl font-bold">WHAT WE OFFER</h1>
              <div className="mt-2 font-serif text-lg">
                <p>
                  Shepherd Specialist Hospitals offer cutting-edge technology, expert care,
                  and personalized service for superior healthcare. Trust our
                  commitment to excellence and comprehensive services for your
                  well-being."Excellence in Care, Safety in Surgery"
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCheck />
                    Medical and Surgical Specialties
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCheck />
                    Diagnostic and Investigative Services
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCheck />
                    National Health Insurance Scheme and HMO Services
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCheck />
                    Special Recognition
                  </li>
                  
                </ul>
              </div>
            </div>
            <img className="h-[25rem] w-[40rem] rounded-md" src={g3} alt="" />
          </div>
        </div>
      </Reveal>
      <Reveal>
        <GetInTouch />
      </Reveal>
    </>
  );
}

export function Mission() {
  return (
    <>
      <Tabs defaultValue="mission" className="">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="mission">Mission</TabsTrigger>
          <TabsTrigger value="vision">Vision</TabsTrigger>
          <TabsTrigger value="core_values">Core Values</TabsTrigger>
        </TabsList>
        <TabsContent value="mission">
          <Card>
            <CardHeader>
              <CardTitle className="font-mono text-blue-500">Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 font-serif">
            To be the leading healthcare provider in Sokoto and beyond, 
            renowned for delivering exceptional and safe surgical care, 
            advancing medical practices, and enhancing the quality of life for all patients
             through innovation, compassion, and excellence in service.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="vision">
          <Card>
            <CardHeader>
              <CardTitle className="font-mono text-blue-500">Vision</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 font-serif">
            Shepherd Specialist Hospital Sokoto delivers high-quality, 
            comprehensive medical and surgical care with a focus on safety and 
            patient-centered service. We provide advanced diagnostic services, collaborate with 
            health insurance schemes, and continually invest in medical innovation and training
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="core_values">
          <Card>
            <CardHeader>
              <CardTitle className="font-mono text-blue-500">
                Core Values
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 font-serif">
              Good corporate governance, Financial prudence and accountability,
              Tansparency and integrity, Service delivery with passion,
              Relentless pursuit of excellence
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
