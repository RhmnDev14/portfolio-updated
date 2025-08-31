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
    title: "OMS (Order Management System)",
    description:
      "Order Management System is a software application that facilitates and automates the process of receiving, tracking, and fulfilling customer orders. It provides businesses with a centralized platform to manage order entry, inventory allocation, order processing, shipping, and delivery, ensuring accuracy and efficiency throughout the order lifecycle. OMS often integrates with e-commerce platforms, payment gateways, and logistics providers to provide real-time updates on order status, improve customer experience, and optimize operational workflows.",
    integration: [
      { src: "/xendit.png", name: "Xendit" },
      { src: "/biteship.png", name: "Biteship" },
      { src: "/blibli.png", name: "Blibli Seller" },
    ],
    image: "/cms.png",
    tech: [
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
        name: "Golang",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        name: "Next.js",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        name: "PostgreSQL",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        name: "Redis",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
        name: "Firebase",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        name: "AWS",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        name: "Docker",
      },
    ],
    // repo: "https://github.com/RhmnDev14/ecommerce",
    // demo: "https://ecommerce-demo.vercel.app",
  },
  {
    title: "Inventory Management System",
    description:
      "Inventory Management System is a desktop application designed to help businesses efficiently manage and track their stock of products, materials, and supplies. The system provides a centralized platform for recording, monitoring, and controlling inventory levels, including incoming and outgoing items.",
    image: "/inventory.png",
    tech: [
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        name: "Java",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netbeans/netbeans-original.svg",
        name: "Netbeans",
      },
    ],
  },
];

export default function ProjectsSection() {
  const [active, setActive] = useState(0);
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
    const size = isMobile ? 40 : 50; // ukuran logo sesuai device
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
    <section className="my-8 bg-white p-6 rounded-lg shadow-md w-[90%] sm:w-[85%] md:w-[95%] lg:max-w-6xl mx-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 border-b border-gray-300 pb-2 text-center">
          <HyperText>projects</HyperText>
        </h2>

        {/* Mobile: tampilkan semua card */}
        <div className="grid gap-6 md:hidden">
          {projects.map((project, idx) => {
            const description = getProjectValue(project.description, "-");
            const tech = getProjectValue(project.tech, []);
            const integration = getProjectValue(project.integration, []);
            const repo = getProjectValue(project.repo, "-");
            const demo = getProjectValue(project.demo, "-");

            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-5"
              >
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{description}</p>

                {renderLogos("Integration", integration)}
                {renderLogos("Tech Stack", tech)}

                <div className="mt-4 flex gap-4">
                  {repo !== "-" && (
                    <a
                      href={repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-700 hover:text-black"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {demo !== "-" && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: tampilkan satu card dan bisa slide */}
        <div className="hidden md:block">
          {(() => {
            const project = projects[active];
            const description = getProjectValue(project.description, "-");
            const tech = getProjectValue(project.tech, []);
            const integration = getProjectValue(project.integration, []);
            const repo = getProjectValue(project.repo, "-");
            const demo = getProjectValue(project.demo, "-");

            return (
              <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6 max-w-2xl mx-auto">
                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{description}</p>

                {renderLogos("Integration", integration)}
                {renderLogos("Tech Stack", tech)}

                <div className="mt-4 flex gap-4">
                  {repo !== "-" && (
                    <a
                      href={repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-700 hover:text-black"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {demo !== "-" && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            );
          })()}

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() =>
                setActive((active - 1 + projects.length) % projects.length)
              }
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
              aria-label="Previous project"
            >
              ‹
            </button>
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-3 h-3 rounded-full ${
                    active === i ? "bg-blue-600" : "bg-gray-400"
                  }`}
                  aria-label={`Select project ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setActive((active + 1) % projects.length)}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
              aria-label="Next project"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
