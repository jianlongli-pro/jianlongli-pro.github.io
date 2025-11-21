"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: FingerPrintIcon,
    title: "Développement GUI & Design UI/UX",
    children:
      <>
      Je crée des interfaces graphiques intuitifs et user-friendly. Je m'occupe de mettre en place une solution documentée et suivie en framework en Qt, Tkinter, avec Python et MATLAB.
      </>
  },
  {
    icon: RectangleGroupIcon,
    title: "Développement Front-End",
    children:(
      <>
      Je possède un bagage technique solide dans le domaine du développement Front. J'opère dans les frameworks suivants : HTML, CSS, Javascript, mais aussi Next.JS, TailwindCSS.
      </>
    ),
  },
  {
    icon: SwatchIcon,
    title: "Data Science & Machine Learning",
    children:(
      <>
      Je livre des solutions de Data Visualisation, Data processing, Optimisation & Validation de modèles prédictifs sur les langages <strong>Python & R</strong>. Sur les frameworks Sci-kit Learn, Pandas, Jupyter. Je travaille également avec les API de services Web, notamment pour la data fetching.
      </>
    )
  },
  {
    icon: HashtagIcon,
    title: "Ingénierie Logiciel Généraliste",
    children:(
      <>
      En complément de mes compétences, je travaille sur les frameworks suivants : C embarqué, Java, SQL, Linux, et du POO. Mais également avec des technologies industrielles : FrontVue, Centreon, Proxmox, WMware, Filezilla (FTP/SFTP), OPCUA/OPCDA.
      </>
      )
  },
  {
    icon: DocumentTextIcon,
    title: "Testing et Documentation",
    children:(
      <>
      Je teste et debug rigousement tout au long du développement. J'assure la livraison d'une solution <strong>sans bug, pérenne et documentée</strong>. Pour une utilisation simple et paisible
      </>
    )
  },
    {
    icon: EyeIcon,
    title: "Trilingue Chinois/Anglais/Français",
    children:(
      <>
      En plus de mes compétences techniques, je parle couramment : <strong>Chinois (Natif), Anglais (Courant), Français (Natif)</strong>.
      </>
    )
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          mes compétecnes
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Les services proposées
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
