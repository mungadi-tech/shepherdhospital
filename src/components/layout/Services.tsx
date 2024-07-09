import { CheckCircle } from "lucide-react";

const services = [
  {
    service: [
"ALL LABORATORY TEST SUCH AS HAEMATOLOGICAL,BIOCHEMICAL,MICROBIOLOGICAL,HISTOPATHOLOGICAL ECG",
"ULTRASONOGRAPHY",
"ENDOSCOPY OF THE UPPER AIRWAY, EAR, NOSE &THROAT",
"URE TONE AUDIOMETRY",
"TYMPANOMETRY",
"HEARING AID ASSESSMENT",
"ROUTINE MEDICAL EXAMINATION",

    ],

    title: "Common Investigations Carried Out Include ",
  },
  {
    service: [
"General Surgery: Herniorrhaphies, Herniotomies, Appendicectomies, Mastectomies, Hydrocelectomies, Resection and Anastomosis of intestinal perforations,Exploratory Laparotomies,Abdomino-perineal resections, Cholecystectomies, Haemorrhoidectomies,  Chest tube insertions , Prostatectomy, Urologic surgeries",
"Obstetrics :  Caesarian sections",
"Gynaecology : Myomectomies, Salpingo-oophorectomies, Hysterectomies Ear,Nose & Throat", 
"Otologic : Mastoidectomies, Tympanoplasties, Combined approach Tympanoplasties, Meatoplasties, Excision of Glomus Tympanicum, Excision of Cysts and Sinuses",
"Rhinologic : Functional Endoscopic Sinus Surgeries, Endoscopic Sinonasal surgeries, endoscopic Adenoidectomies, Lateral Rhinotomies, Maxillectomies, Maxillary Swing Surgeries, Craniofacial Resections , Endoscopic CSF Repairs ,Dacrocystorhinotomy",
"Laryngologic: Video endoscopic laryngeal surgeries, Total Laryngectomy, Medialisation of Vocal cords, Type 1 thyroplasty , Lateralisation of vocal cords , Laryngeal Papilloma surgeries,Laryngeal stenosis surgeries, Tonsillectomies",
"Head &Neck Surgeries: Parotidectomy, Submandibular gland excision, Thyroidectomy. Nasopharyngeal Surgeries , Oropharyngeal resections, Mandibular swing, Selective neck Dissection ,Mandibulectomies",


    ],

    title: "Surgical Procedures carried out so far without complications are ",
  },
  
];

export function Services() {
  return (
    <div className="text-gray-600 p-4">
      <div className="mt-10">
        <div className="flex flex-col md:flex-row justify-between p-4">
          {services.map((s) => (
            <div className="p-4">
              <span className="font-bold text-lg">{s.title}</span>
              <ul className="mt-2 flex flex-col gap-4">
                {s.service.map((serv) => (
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary" />
                    {serv}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
