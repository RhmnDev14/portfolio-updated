"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { HyperText } from "@/components/magicui/hyper-text";

type TechOrIntegration = {
  src: string;
  name: string;
};

type Project = {
  title: string;
  description?: string;
  image: string;
  tech?: TechOrIntegration[];
  integration?: TechOrIntegration[];
  repo?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Listriqu",
    description:
      "Listriqu is a digital platform built to help PLN technicians efficiently manage and process customer service orders from PLN Mobile.",
    integration: [{ src: "/doku.png", name: "Doku" }],
    image: "/listriqu.png",
    tech: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", name: "Golang" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", name: "Flutter" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", name: "Redis" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", name: "MongoDB" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg", name: "Firebase" },
      { src: "/minio.png", name: "MinIO" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "Docker" },
    ],
  },
  {
    title: "OMS (Order Management System)",
    description:
      "Order Management System facilitates and automates customer order processes. It provides a centralized platform to manage order entry, inventory, shipping, and fulfillment.",
    integration: [
      { src: "/xendit.png", name: "Xendit" },
      { src: "/biteship.png", name: "Biteship" },
      { src: "/blibli.png", name: "Blibli Seller" },
    ],
    image: "/cms.png",
    tech: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", name: "Golang" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", name: "Next.js" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", name: "Redis" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg", name: "Firebase" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", name: "AWS" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "Docker" },
    ],
  },
  {
    title: "Inventory Management System",
    description:
      "A desktop app designed to help businesses efficiently manage and track their inventory. It provides tools to monitor incoming and outgoing stock items.",
    image: "/inventory.png",
    tech: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Java" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netbeans/netbeans-original.svg", name: "Netbeans" },
    ],
  },
];

export default function ProjectsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getProjectValue = <T,>(value: T | undefined, defaultValue: T) =>
    value !== undefined ? value : defaultValue;

  const renderLogos = (label: string, items: TechOrIntegration[]) => {
    if (!items.length) return null;
    const size = isMobile ? 40 : 50;
    return (
      <p className="mt-2 text-sm flex items-center gap-4 flex-wrap">
        <span className="font-semibold">{label}:</span>
        {items.map((item, idx) => (
          <span key={idx} title={item.name}>
            <Image
              src={item.src}
              alt={item.name}
              width={size}
              height={size}
              className="inline-block object-contain"
            />
          </span>
        ))}
      </p>
    );
  };

  return (
    <section className="my-6 bg-white p-6 rounded-lg shadow-md w-[90%] sm:w-[85%] md:w-[95%] lg:max-w-[90rem] mx-auto">
      <div className="max-w-[90rem] mx-auto px-4">
        <h2 className="mb-6 border-b border-gray-300 pb-2 text-center">
          <HyperText>Projects</HyperText>
        </h2>

        {/* Mobile: stacked cards */}
        <div className="grid gap-6 md:hidden">
          {projects.map((project, idx) => {
            const description = getProjectValue(project.description, "-");
            const tech = getProjectValue(project.tech, []);
            const integration = getProjectValue(project.integration, []);
            const repo = getProjectValue(project.repo, "-");
            const demo = getProjectValue(project.demo, "-");

            return (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <h3 className="text-lg font-semibold mt-4">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{description}</p>
                {renderLogos("Integration", integration)}
                {renderLogos("Tech Stack", tech)}
                <div className="mt-4 flex gap-4">
                  {repo !== "-" && (
                    <a href={repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-gray-700 hover:text-black">
                      <FaGithub /> Code
                    </a>
                  )}
                  {demo !== "-" && (
                    <a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: horizontal scroll */}
        <div className="hidden md:flex overflow-x-auto gap-10 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 snap-x snap-mandatory">
          {projects.map((project, idx) => {
            const description = getProjectValue(project.description, "-");
            const tech = getProjectValue(project.tech, []);
            const integration = getProjectValue(project.integration, []);
            const repo = getProjectValue(project.repo, "-");
            const demo = getProjectValue(project.demo, "-");

            return (
              <div
                key={idx}
                className="min-w-[750px] max-w-[800px] flex-shrink-0 snap-center bg-white rounded-xl border border-gray-200 shadow-md p-8 hover:shadow-lg transition"
              >
                <div className="relative w-full h-80 rounded-lg overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <h3 className="text-2xl font-semibold mt-6">{project.title}</h3>
                <p className="text-gray-600 text-base mt-2 line-clamp-5">{description}</p>
                {renderLogos("Integration", integration)}
                {renderLogos("Tech Stack", tech)}
                <div className="mt-5 flex gap-6">
                  {repo !== "-" && (
                    <a href={repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base text-gray-700 hover:text-black">
                      <FaGithub /> Code
                    </a>
                  )}
                  {demo !== "-" && (
                    <a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base text-blue-600 hover:underline">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
