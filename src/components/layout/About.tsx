import { Link } from "react-router-dom";
import {
  ArrowRight,
} from "lucide-react";
import { buttonVariants } from "../ui/button";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Reveal from "../Reveal";
import NumberTicker from "../ui/number-ticker";

const counter = [
  {
    title: "Bed Spaces",
    count: 50,
  },
  {
    title: "Specialties",
    count: 15,
  },
  {
    title: "Caregivers",
    count: 10,
  },
  {
    title: "Operating Theartres",
    count: 2,
  },
  {
    title: "Critical Care Beds",
    count: 10,
  },
];
export function About() {
  const aboutRef = useRef(null);

  useScroll({
    target: aboutRef,
  });

  return (
    <div className="mx-auto p-4 md:my-14 md:w-[90%]">
      <div className="flex flex-col items-center justify-center gap-4">
        <motion.h1 className="text-center font-mono font-bold uppercase text-info">
        Excellence in Care, Safety in Surgery
        </motion.h1>
        <motion.p
          ref={aboutRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center font-serif text-sm font-normal text-gray-700 md:w-1/2 md:text-lg"
        >
          Sahad Hospitals offer cutting-edge technology, expert care, and
          personalized service for superior healthcare. Trust our commitment to
          excellence and comprehensive services for your well-being. Your
          health, our priority.
        </motion.p>
        <div className="flex justify-center">
          <Link
            to={"about/"}
            className={buttonVariants({
              variant: "ghost",
              className: "gap-2 font-serif text-info",
            })}
          >
            Learn More <ArrowRight />
          </Link>
        </div>

        <Reveal className="md:text-md mt-2 grid grid-cols-3 justify-between gap-2 rounded-md bg-gradient-to-l from-info to-tertiary py-10 font-mono text-xs text-white md:px-10 lg:w-1/2">
          {counter.map((c) => (
            <div
              key={c.title}
              className="flex flex-col items-center justify-center p-2"
            >
              <span className="text-xl font-bold">
                <NumberTicker value={c.count} className="text-4xl text-white" />
                +
              </span>
              <span className="text-center md:text-2xl">{c.title}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  );
}