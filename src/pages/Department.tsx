import {
  BabyIcon,
  HeartPulse,
  Stethoscope,
  User,
  
} from "lucide-react";
import dep from "../assets/images/d1.jpg";
import Reveal from "@/components/Reveal";

const departments = [
  {
    title: "General Medicine",
    content:
      " Herniorrhaphies, Herniotomies, Appendicectomies, Mastectomies, Hydrocelectomies, Resection and Anastomosis of intestinal perforations,Exploratory Laparotomies, Abdomino-perineal resections, Cholecystectomies, Haemorrhoidectomies,  Chest tube insertions , Prostatectomy, Urologic surgeries",
    icon: Stethoscope,
  },

  {
    title: "Otologic",
    content:
      " Mastoidectomies, Tympanoplasties, Combined approach Tympanoplasties, Meatoplasties, Excision of Glomus Tympanicum, Excision of Cysts and Sinuses",
    icon: HeartPulse,
  },

  {
    title: "Obsetrics & Gynaecology",
    content:
      " Caesarian sections, Myomectomies, Salpingo-oophorectomies, Hysterectomies",
    icon: User,
  },
  {
    title: "Head & Neck Surgeries",
    content:
      "Parotidectomy, Submandibular gland excision, Thyroidectomy. Nasopharyngeal Surgeries , Oropharyngeal resections, Mandibular swing, Selective neck Dissection ,Mandibulectomies ",
    icon: User,
  },
  {
    title: "Rhinologic",
    content:
      "Functional Endoscopic Sinus Surgeries, Endoscopic Sinonasal surgeries, endoscopic Adenoidectomies, Lateral Rhinotomies, Maxillectomies, Maxillary Swing Surgeries, Craniofacial Resections , Endoscopic CSF Repairs ,Dacrocystorhinotomy ",
    icon: BabyIcon,
  },
  {
    title: "Laryngologic",
    content:
      "Video endoscopic laryngeal surgeries, Total Laryngectomy, Medialisation of Vocal cords, Type 1 thyroplasty , Lateralisation of vocal cords , Laryngeal Papilloma surgeries,Laryngeal stenosis surgeries, Tonsillectomies ",
    icon: BabyIcon,
  },
];
export default function Department() {
  return (
    <>
      <Reveal className="mt-14 md:p-10">
        <h1 className="text-center text-sm font-bold uppercase text-blue-500">
          Always Caring
        </h1>
        <h1 className="mb-4 text-center font-mono text-4xl font-bold text-tertiary">
          Surgical Procedures
        </h1>
        <div className="my-10 md:flex">
          <img src={dep} className="hidden w-[50%] md:hidden lg:block" />
          <div className="grid md:grid-cols-3">
            {departments.map((d) => (
              <div
                key={d.title}
                className="group flex flex-col items-center justify-center gap-4 border from-tertiary to-info p-4 hover:bg-gradient-to-t hover:text-white"
              >
                {<d.icon className="size-6 text-info group-hover:text-white" />}
                <span className="text-center font-mono text-xl font-bold text-gray-800 group-hover:text-white">
                  {d.title}
                </span>
                <p className="text-center font-serif text-sm text-gray-600 group-hover:text-white">
                  {d.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
}
