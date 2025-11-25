"use client";

import { useState, useEffect, useRef } from "react";
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
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg", name: "RabbitMQ" },
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const checkScroll = () => setCanScroll(el.scrollWidth > el.clientWidth);
    checkScroll();

    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const renderLogos = (label: string, items?: TechOrIntegration[]) => {
    if (!items || !items.length) return null;
    return (
      <div className="mt-3 text-sm flex flex-wrap items-center justify-center gap-3">
        <span className="font-semibold">{label}:</span>
        {items.map((item, idx) => (
          <div key={idx} className="relative group">
            <Image
              src={item.src}
              alt={item.name}
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="flex justify-center items-center w-full py-8 md:py-16 lg:py-24 px-4">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] max-w-screen-xl mx-auto border-[16px] border-white rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Header */}
        <div className="text-center py-6 border-b border-gray-200 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide">
            <HyperText>Projects</HyperText>
          </h2>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className={`
            flex 
            ${canScroll ? "gap-8 p-8 overflow-x-auto justify-start" : "gap-4 p-2 justify-center"}
            snap-x snap-mandatory scroll-smooth
            scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100
          `}
          style={{ scrollBehavior: "smooth" }}
        >
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="
                flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] 
                min-h-[400px] 
                bg-white rounded-2xl border border-gray-100 shadow-md
                flex flex-col items-center text-center
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                snap-center
              "
            >
              <div className="relative w-full h-32 rounded-t-2xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col justify-center px-4 py-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-4">
                    {project.description}
                  </p>

                  {renderLogos("Integration", project.integration)}
                  {renderLogos("Tech", project.tech)}
                </div>

                <div className="mt-4 flex justify-center gap-5">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-700 hover:text-black text-sm"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:underline text-sm"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        {canScroll && (
          <div className="text-center py-3 text-sm text-gray-500 bg-white border-t animate-pulse">
            ← Swipe to view more projects →
          </div>
        )}
      </div>
    </section>
  );
}
