
export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Crafting responsive and user-friendly web interfaces. Building pixel-perfect UI using modern frameworks like React.js and Next.js. Optimizing websites for performance, accessibility, and SEO, Transforming Figma or design mockups into fully functional web pages. Debugging, testing, and maintaining web apps across devices. Collaborating with designers, backend, and full-stack devs to bring ideas to life. Creating dynamic, interactive components with JavaScript and Tailwind CSS.",
    description: "What do we offer?",
    className: "lg:col-span-2 lg:row-span-2 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full ",
    titleClassName: "justify-start",
    img: "/b1.svg",
    imgWidth: 800,
    imgHeight: 600,
    spareImg: "",
  },
  {
    id: 2,
    title: "I am very flexible with time zones communications.",
    description: "",
    className: "lg:col-span-1 lg:row-span-1 md:col-span-3 md:row-span-2 ",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve.",
    className: "lg:col-span-1 lg:row-span-1 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Driven by a deep love for technology, I find joy in turning ideas into reality, from clean designs to smooth interactions. I enjoy collaborating with others, exploring tools like React, Next.js, and Tailwind and constantly learning how to build experiences that work beautifully and everywhere.",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    imgWidth: 800,
    imgHeight: 600,
    spareImg: "/b4.svg",
    spareImgWidth: 200,
    spareImgHeight: 200,
  },

  {
    id: 5,
    title: "Currently building a full stack project management webapp",
    description: "The Inside Scoop",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    imgWidth: 800,
    imgHeight: 600,
    spareImg: "/grid.svg",
    spareImgWidth: 200,
    spareImgHeight: 200,
  },
  {
    id: 6,
    title: "",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "XquisEat_webapp",
    des: "XquisEat is a responsive React web application built with Vite, designed as a food delivery landing page. It includes essential features such as efficient state management, a dark and light mode toggle, a functional cart, user authentication with a sign-in page and a streamlined checkout process.",
    img: "/xquisEat.png",
    imgWidth: 800,
    imgHeight: 600,
    iconLists: ["/re.svg", "/ts.svg", "/fm.svg"],
    link: "https://xquisEat.pages.dev",
  },
  {
    id: 2,
    title: "Xpay E-commerce webapp",
    des: "Xpay is an e-commerce web app built with Vite, inspired by marketplaces like Jumia but with a unique" +
        " touch. I designed it to feel different and more refined.",
    img: "/orvyn.png",
    imgWidth: 800,
    imgHeight: 600,
    iconLists: [ "/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://xpay-1ug.pages.dev",
  },
  {
    id: 3,
    title: "Orvyn Media",
    des: "Orvyn media is a landing page for a social media management company.",
    img: "/xpay.png",
    imgWidth: 800,
    imgHeight: 600,
    iconLists: [ "/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://www.orvynmedia.com/",
  },
  {
    id: 4,
    title: "LINKA",
    des: "Linka is a real time web application that enables real time messaging and sharing of images using" +
        " socket.io, I used mongoDb for database storage, cloudinary to handle image storage, jwt for" +
        " authentication, bcrypt to hash passwords and zustand for global state management",
    img: "/linka.png",
    imgWidth: 800,
    imgHeight: 600,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://chatapp-84n6.onrender.com",
  },
];

export const testimonials = [
  {
    quote:
      "I've been closely monitoring his growth, and it's clear he's not just unique, he's truly special. The pace at which he's developed his skills is remarkable. His rapid progress and sharp understanding of modern development practices make him a standout. I'd be genuinely excited to collaborate with him on environment management or deployment and CI/CD processes.",
    name: "Olayinka Olasimbo",
    title: "Senior DevOps Engineer at Citi-Bank",
  },
  {
  quote:
    "Working with him on our project management web app has been nothing short of inspiring. His frontend logic is intuitive, and his attention to detail makes every interaction seamless. He's quick to adapt, always eager to learn, and constantly pushing for clean, scalable solutions. I trust his instincts and genuinely look forward to building more products together.",
  name: "Chidera Obinna",
  title: "Full Stack Developer at DevFolio",
  },
  {
  quote:
    "I came across his gym landing page and was immediately impressed. The visual storytelling, fluid design, and responsiveness felt premium. After reviewing the code, I knew I had to reach out. His frontend game is strong — and I'm genuinely excited to pair up on future builds. This guy is going places.",
  name: "Daniel Ogunleye",
  title: "Backend Developer at CoreStack Systems",
  }
];


export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    thumbnailHeight: 128,
    thumbnailWidth: 128,
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/OlajuwonX",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/PhantomXDev",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/olasimbo-olajuwon-b986b7230/",
  },
];