import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";
import g1 from "../assets/images/hero1.jpg";
import g2 from "../assets/images/c1.jpg";
import g3 from "../assets/images/ward.jpg";
import g17 from "../assets/images/news.jpg";

import { GalleryCard } from "@/components/layout/GalleryCard";
import Reveal from "@/components/Reveal";

export default function Gallery() {
  return (
    <>
      <NavbarWithBreadcrums />
      <Reveal>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 p-4">
          <GalleryCard title="Private ICU" desc="" image={g1} />
          <GalleryCard title="Chemistry Laboratory" desc="" image={g2} />
          <GalleryCard title="X-ray Machine" desc="" image={g3} />
          <GalleryCard title=" Water Treatment System" desc="" image={g17} />
        </div>
      </Reveal>
    </>
  );
}
