import { ArrowBigRight, Locate, Phone } from "lucide-react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const department = [
  { name: "Surgery" },
  { name: "Radiology" },
  { name: "Gynaecology" },
  { name: "Otologic" },
  { name: "Head & Neck" },
  { name: "Rhinologic" },
  { name: "aryngologic" },
];
const flinks = [
  { name: "About Us", url: "about/" },
  { name: "Department", url: "department/" },
  { name: "News", url: "news/" },
  { name: "Services", url: "services/" },
  { name: "Contact Us", url: "contact/" },
];
const fservices = [
  { name: "Clinical" },
  { name: "Surgeries" },
  { name: "24/7 Appointments" },
 
];
export const Footer = () => {
  return (
    <footer className="text-white text-sm bg-tertiary">
      <div className="p-4">
        <div className="grid md:grid-cols-5 gap-4 p-4">
          <img src={logo} className="w-[70%]" alt="" />
          <div>
            <h1 className="text-2xl mb-4 font-mono">Departments</h1>
            <ul className="flex flex-col gap-4 font-serif">
              {department.map((d) => (
                <li key={d.name} className="flex gap-2 ">
                  <ArrowBigRight className="text-secondary" />
                  <span>{d.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-2xl mb-4 font-mono">Links</h1>
            <ul className="flex flex-col gap-4 font-serif">
              {flinks.map((d) => (
                <li key={d.name} className="">
                  <Link to={d.url} className="flex gap-2">
                    <ArrowBigRight className="text-secondary" />
                    <span>{d.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-2xl mb-4 font-mono">Services</h1>
            <ul className="flex flex-col gap-4 font-serif">
              {fservices.map((d) => (
                <li key={d.name} className="flex gap-2 ">
                  <ArrowBigRight className="text-secondary" />
                  <span>{d.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-2xl mb-4 font-mono">Have a question?</h1>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-2 font-serif">
                <Locate className="text-secondary h-6 w-6" />
                <span>
                Shuni road, Mabera Sokoto State, 840212, Nigeria
                </span>
              </li>
              <li className="flex gap-2 items-center font-serif">
                <Phone className="text-secondary h-6 w-6" />
                <div className="flex flex-col">
                  <span>08065467140</span>
                  <span>07010188902</span>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="text-center my-14">
          &copy; Copyright{" "}
          <span className="font-bold text-secondary"> Shepherd Hospital. </span>
          All Rights Reserved
          <p>
            Designed by{" "}
            <span className="font-bold">Muntech technologies</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
