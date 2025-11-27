"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

function Hero() {
  return (
    <header className="bg-black p-8">
      <div className="container item-center mx-auto grid h-50 gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          
          <Typography
            variant="h1"
            color="white"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >

           <br /> Bienvenue sur mon site !
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-400 md:pr-16 xl:pr-28"
          >
            Le software n&apos;est pas qu&apos;une solution, c&apos;est la porte d&apos;entrée pour de nouvelles perspectives et d&apos;opportunités.
            Je suis à l&apos;intersection de l&apos;ingénierie technique et de la créativité.
          </Typography>
          <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-200 font-medium"
            >
              Faisons connaissance :
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input color="white" label="Saisir votre mail" size="lg" />
              <Button color="blue" className="w-full px-4 md:w-[12rem]">
                envoyer
              </Button>
            </div>
          </div>
          <Typography variant="small" className="font-normal !text-gray-500">
            Read my{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src={`${getImagePrefix()}image/avatar1.jpg`}
          className="w-full h-full md:h-[36rem] rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
