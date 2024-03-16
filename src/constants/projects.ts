import { Project } from "#/types/types";

export const PROJECTS: Project[] = [
  {
    title: "core",
    subTitle: "Core module of the 3-Dimensional Visualization of the ATLAS detector",
    description:
      "Core module of the 3-Dimensional Visualization of the ATLAS detector",
    createdFor: "NEC Developers",
    usedFor: "Visualisation Application Development",
    route: "core",
    appUrl: "https://tracer-core.web.cern.ch",
    sourceUrl: null,
    imagePreview: "/images/core.webp",
    image: "/screenshots/core.webp",
    openSource: false,
    contributors: [
      { name: "Alexander Sharmazanashvili", role: "Project manager" },
      { name: "Irakli Kverenchkhiladze", role: "Lead Software developer" },
      { name: "Nino Zurashvili", role: "Software developer" },
      { name: "Alexander Alikhanov", role: "Geometry designer" },
      { name: "Besik Kekelia", role: "Geometry designer" },
      { name: "Giorgi Mirziashvili", role: "Geometry designer" },
      { name: "Kote Tsutskiridze ", role: "Geometry designer" },
      { name: "Shota Kobakhidze", role: "Geometry designer" },
      { name: "Nikoloz Udzilauri", role: "UI Concept designer" },
    ],
  },
  {
    title: "evd",
    subTitle: "3-Dimesional Event Display Application",
    description: "3-Dimesional Event Display Application",
    createdFor: "The ATLAS Collaboration",
    usedFor: "Events Visualisation",
    route: "evd",
    appUrl: "https://tracer-evd.web.cern.ch/evd/r3.0/",
    sourceUrl: null,
    imagePreview: "/images/evd.webp",
    image: "/screenshots/evd.webp",
    openSource: false,
    contributors: [
      { name: "Alexander Sharmazanashvili", role: "Project manager" },
      { name: "Nino Zurashvili", role: "Lead Software developer" },
      { name: "Nika Tsutskiridze ", role: "Geometry responsible" },
      { name: "Sergei Chekhanov", role: "Project consultant" },
      { name: "Sanya Solodkov", role: "Project consultant" },
    ],
  },
  {
    title: "tcal",
    subTitle: "3-Dimensional Interactive Display of the Tile Calorimeter",
    description: "3-Dimensional Interactive Display of the Tile Calorimeter",
    createdFor: "The ATLAS Tile Calorimeter team",
    usedFor: "Tile Calorimeter Events Display",
    route: "tcal",
    appUrl: "https://tracer-tilecal.web.cern.ch/",
    sourceUrl: "https://gitlab.cern.ch/tracer/tracer-tilecal",
    imagePreview: "/images/tcal.webp",
    image: "/screenshots/tcal.webp",
    openSource: true,
    contributors: [
      { name: "Alexander Sharmazanashvili", role: "Project manager" },
      { name: "Oleg Solovyanov", role: "Concept Creator" },
      { name: "Nino Zurashvili", role: "Lead Software developer" },
      { name: "Nika Tsutskiridze ", role: "Geometry responsible" },
      { name: "Sanya Solodkov", role: "Project consultant" },
    ],
  },
  {
    title: "art",
    subTitle:
      "Augmented Reality Table enables to revive the ATLAS detector on the discussion table",
    description:
      "Augmented Reality Table enables to revive the ATLAS detector on the discussion table",
    createdFor: "The ATLAS Education and Outreach Group",
    route: "art",
    usedFor: "Geometry Visualisation with AR",
    appUrl: "https://tracer-art.web.cern.ch/",
    sourceUrl: "https://gitlab.cern.ch/tracer/tracer-art",
    imagePreview: "/images/art.svg",
    image: "/screenshots/art.webp",
    openSource: true,
    contributors: [
      { name: "Alexander Sharmazanashvili", role: "Project manager" },
      { name: "Oleg Solovyanov", role: "Concept Creator" },
      { name: "Mariam Nozadze", role: "Software developer" },
    ],
  },
  {
    title: "arb",
    subTitle:
      "Augmented Reality Book is the 3D-extension of the paper printed documents",
    description:
      "Augmented Reality Book is the 3D-extension of the paper printed documents",
    createdFor: "The ATLAS Education and Outreach Group",
    usedFor: "Interactive AR Learning",
    route: "arb",
    appUrl: "https://tracer-arb.web.cern.ch/",
    sourceUrl: "https://gitlab.cern.ch/tracer/tracerarb-atlas",
    imagePreview: "/images/ar-book.svg",
    image: "/screenshots/arb-atlas.jpg",
    videoUrl: "/videos/tracer-arb.mp4",
    openSource: true,
    contributors: [
      { name: "Alexander Sharmazanashvili", role: "Project manager" },
      { name: "Avtandil Khelashvili", role: "Lead Software developer" },
      { name: "Nino Zurashvili", role: "Software developer" },
      { name: "Alexander Alikhanov", role: "Geometry designer" },
    ],
  },
  {
    title: "vr",
    subTitle:
      "Virtual Reality application for the realistic representation of the ATLAS Detector",
    description:
      "Virtual Reality application for the realistic representation of the ATLAS Detector",
    createdFor: "The ATLAS Education and Outreach Group",
    route: "vr",
    usedFor: "Virtual Reality Visualisation",
    appUrl: "https://tracer-vr-test.web.cern.ch/",
    sourceUrl: null,
    imagePreview: "/images/vr.svg",
    image: "/screenshots/vr.webp",
    openSource: true,
    contributors: [
      { name: "Alexander Sharmazanashvili", role: "Project manager" },
      { name: "Avtandil Khelashvili", role: "Lead Software developer" },
      { name: "Nika Tsutskiridze", role: "Geometry responsible" },
    ],
  },
  {
    title: "itk viewer",
    subTitle: "3D-visualization of the ATLAS Inner Tracker Detector geometry",
    description: "3D-visualization of the ATLAS Inner Tracker Detector geometry",
    createdFor: "The ATLAS Inner Tracker Group",
    route: "itk-viewer",
    usedFor: "The ITK Geometry Visualisation",
    appUrl: "https://itk-viewer.web.cern.ch/",
    sourceUrl: null,
    imagePreview: "/images/itk-viewer.png",
    image: "/screenshots/itk-viewer-screenshot.png",
    openSource: false,
    contributors: [
      { name: "Alexander Sharmazanashvili", role: "Project manager" },
      { name: "Nino Zurashvili", role: "Lead Software developer" },
      { name: "Alexander Alikhanov", role: "Lead Geometry designer" },
      { name: "Vladimir Dolinski", role: "Geometry designer" },
    ],
  },
  {
    title: "evd mc",
    subTitle: "3-Dimesional Event Display Application for the IPPOG Masterclasses",
    description:
      "3-Dimesional Event Display Application for the IPPOG Masterclasses",
    createdFor: "The International Particle Physics Outreach Group",
    route: "evd-mc",
    usedFor: "The ATLAS Events Visualisation",
    appUrl: "https://tracer-evd-mc.web.cern.ch/",
    sourceUrl: null,
    imagePreview: "/images/evd-mc2.png",
    image: "/screenshots/evd-mc-screenshot.png",
    width: 200,
    openSource: false,
    contributors: [
      { name: "Alexander Sharmazanashvili", role: "Project manager" },
      { name: "Nino Zurashvili", role: "Lead Software developer" },
      { name: "Nika Tsutskiridze", role: "Geometry responsible" },
      { name: "Pedro Abreu", role: "Project consultant" },
      { name: "Farid Ould-Saada", role: "Project consultant" },
      { name: "Eirik Gramstad", role: "Project consultant" },
    ],
  },
  {
    title: "atlas viewer",
    subTitle: "3D-visualization of the ATLAS Detector geometry",
    description: "3D-visualization of the ATLAS Detector geometry",
    createdFor: "The ATLAS Collaboration",
    route: "atlas-viewer",
    usedFor: "The ATLAS Detector Visualisation",
    appUrl: "https://atlas-viewer.web.cern.ch/",
    sourceUrl: null,
    imagePreview: "/images/atlas-viewer.png",
    image: "/screenshots/vr.webp",
    width: 200,
    openSource: false,
    contributors: [
      { name: "Alexander Sharmazanashvili", role: "Project manager" },
      { name: "Mariam Nozadze", role: "Lead Software developer" },
      { name: "Nika Tsutskiridze", role: "Geometry responsible" },
    ],
  },
];