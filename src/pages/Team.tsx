import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";
import { Team as T } from "@/components/layout/Team";
import cmd from "../assets/images/c1.jpg";
import chairman from "../assets/images/c2.jpg";
import vc from "../assets/images/c3.jpg";
import Reveal from "@/components/Reveal";

export default function Team() {
  return (
    <div>
      <NavbarWithBreadcrums />

      <Reveal>
        <div className="my-8 text-center">
          <h1 className="text-center text-sm font-bold uppercase text-blue-500">
            LEADING TEAM
          </h1>
          <h1 className="mb-4 text-center font-mono text-4xl font-bold text-tertiary">
            Meet the Management Team
          </h1>
        </div>
        <div className="grid gap-4 p-4 md:container md:grid-cols-3">
          <T image={chairman} name="Prof K R Iseh  MD, FWACS,FMCORL ,FICS" title="Medical Director " />
          <T image={vc} name="Mrs Grace A Iseh RN, RM , BSC,BSNC,MSC,MPH " title="CEO" />
          <T image={cmd} name="Mr Bukola Oyewusi  BSC" title="Hospital Secretary" />
          <T image={cmd} name="1.	Barrister Ferdinand Okotete" title="Legal Adviser" />
        </div>
        <div className="my-8 text-center">
          <h1 className="text-center text-sm font-bold uppercase text-blue-500">
            Our Medical Staff
          </h1>
          <h1 className="mb-4 text-center font-mono text-4xl font-bold text-tertiary">
            Meet our Doctors
          </h1>
        </div>
        <div className="grid gap-4 p-4 md:container md:grid-cols-3">
          <T image={chairman} name="Prof J N Legbo FWACS, FMCORL, FRCS, FICS " title="Professor/Consultant Plastic Surgeon " />
          <T image={vc} name="Prof C S Lukong FWACS" title="Professor/Consultant Paediatric Surgeon" />
          <T image={cmd} name="Dr B Ugege  FWACS" title="Consultant O&G" />
          <T image={cmd} name="Dr Sufyanu Yabo FWACS " title="Consultant ENT Surgeon" />                           
        </div>
        <div className="my-8 text-center">
                 <h1 className="mb-4 text-center font-mono text-4xl font-bold text-tertiary">
            Meet our Nurses
          </h1>
        </div>
        <div className="grid gap-4 p-4 md:container md:grid-cols-3">
          <T image={vc} name="Mrs Grace A Iseh  " title="RN, RM , BSC,BSNC,MSC,MPH" />
          <T image={cmd} name="Mrs Oluchi Julius" title="RN" />
          <T image={chairman} name="Miss Mary Emeruwa RM" title="RN" />
          <T image={chairman} name="Miss Linda Daniel Ozoihu" title="BNSC " />
          <T image={chairman} name="Miss Rashida Murtala" title="RN " />
        </div>
      </Reveal>
    </div>
  );
}
