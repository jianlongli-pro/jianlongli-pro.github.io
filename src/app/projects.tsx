"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const PROJECTS = [
  {
    img: `${getImagePrefix()}image/blog-1.svg`,
    title: "Logiciel de pilotage pour la recherche neurophysiologique",
    desc: "Livraison pour la NERB Team à l'Institut du Cerveau. Développement d'une interface graphique pour le pilotage de boîtes autonomes d'observation de plasticité cérébrale chez la souris. Tech : Python, MATLAB, C, Arduino Uno, Tkinter, PySerial, UX/UI Design",
  },
  {
    img: `${getImagePrefix()}image/blog3.svg`,
    title: "Logiciel outil de simulation de vol de dirigeable",
    desc: "Livraison pour Flying Whales, startup française visant à mettre en service des dirigeables. Développement d'interface avec la navigation de cartes, la configuration de trajectoires de vol de dirigeable, design d'une section workflow intuitive et efficace. Mise en place d'une architecture robuste et documentée. Tech : Python, Qt, Poetry, Git, UI/UX Design",
  },
  {
    img: `${getImagePrefix()}image/blog4.svg`,
    title: "Développement R&D de Gants Haptiques",
    desc: "Livraison de projet pour ESIEE Paris. Développement d'un logiciel embarqué pour le calcul de la position d'une main, la communication série UART avec Unity, avec envoi et réception de données. Techs : C embarqué, Électronique, UART, Arduino Uno",
  },
  {
    img: `${getImagePrefix()}image/blog2.svg`,
    title: "Mise en place de Centreon sur VMWare",
    desc: "Livraison pour Cegelec Belgium. Création d'une maquette de Centreon sur l'hypeviseur VMWare pour la supervision d'équipements industriels en communication SNMP.",
  },
  {
    img: `${getImagePrefix()}image/blog2.svg`,
    title: "Mise en place d'hyperviseur Proxmox",
    desc: "Livraion pour Cegelec Belgium. Création d'une maquette de Proxmox, service permettant de créer, configurer et gérer plusieurs machines virtuelles.",
  }
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Projets & Réalisations
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Je permets aux idées de passer à la réalité, voici les projets auquel j'ai contribué tout au long de ma carrière
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
