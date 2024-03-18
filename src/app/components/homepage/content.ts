//eslint-disable-next-line
export default {
  header: {
    pageSections: [
      {
        name: "bio",
        sectionId: "bio"
      },
      {
        name: "tech",
        sectionId: "tech"
      },
      {
        name: "dev work",
        sectionId: "devWork"
      },
      {
        name: "projects",
        sectionId: "projects"
      },
      {
        name: "work",
        sectionId: "work"
      },
    ],
  },

  bio: {
    paragraph1: "Hi!",
    paragraph2: "Back in 2018 esse totam consectetur nam ut hic nihil libero consequuntur dolorem, nemo et modi quisquam velit atque voluptas nobis.  Qui distinctio sequi explicabo.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id, odit libero adipisci esse nesciunt ullam voluptates nemo eaque quisquam obcaecati saepe ex reiciendis, voluptatum a hic.",
  },

  tech: {
    imgUrls: [
      "html5.svg",
      "css3.svg",
      "tailwind.svg",
      "javascript.svg",
      "typescript.svg",
      "react.svg",
      "nextjs.svg",
      "node.svg",
      "mongodb.svg",
      "postgresql.svg"
    ]
  },

  projects: [
    {
      start: "",
      end: "Pic",
      lineBarVisibility: "hidden",
      title: "Crypto Tracker",
      position: null,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id, odit libero adipisci esse nesciunt ullam voluptates nemo eaque quisquam obcaecati saepe ex reiciendis, voluptatum a hic, eligendi voluptas dolores!",
      tech: [
        "React.js",
        "Next.js",
        "Next-Auth",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
        "bcrypt"
      ]
    },
    {
      start: "",
      end: "Pic",
      lineBarVisibility: "hidden",
      title: "Visit San Andreas",
      position: null,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id, odit libero adipisci esse nesciunt ullam voluptates nemo eaque quisquam obcaecati saepe ex reiciendis, voluptatum a hic, eligendi voluptas dolores!",
      tech: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3"
      ]
    },
    {
      start: "",
      end: "Pic",
      lineBarVisibility: "hidden",
      title: "Okava Coffee",
      position: null,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id, odit libero adipisci esse nesciunt ullam voluptates nemo eaque quisquam obcaecati saepe ex reiciendis, voluptatum a hic, eligendi voluptas dolores!",
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript"
      ]
    },
  ],

  work: {
    dev: [
      {
        start: "nov 2023",
        end: "dec 2023",
        lineBarVisibility: "block",
        title: "Suncoast Pool Cleaning",
        position: "Web Developer",
        desc: "Contracted to develop a new site from the ground up.  Focused on SEO, clean UI, and accessibility.  Assisted client with domain and google business registration to increase web visibility and site traffic.  Created a direct email form feature and API for better customer experience",
        tech: [
          "React.js",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Resend",
          "Swiper.js"
        ]
      },
    ],

    nonDev: [
      {
        start: "jan 2024",
        end: "current",
        lineBarVisibility: "block",
        title: "Warby Parker",
        position: "Optician",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id, odit libero adipisci esse nesciunt ullam voluptates nemo eaque quisquam obcaecati saepe ex reiciendis, voluptatum a hic, eligendi voluptas dolores!",
        tech: null
      },
      {
        start: "jul 2021",
        end: "oct 2022",
        lineBarVisibility: "block",
        title: "Ted Britt Ford & Lincoln",
        position: "New Vehicle Manager",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id, odit libero adipisci esse nesciunt ullam voluptates nemo eaque quisquam obcaecati saepe ex reiciendis, voluptatum a hic, eligendi voluptas dolores!",
        tech: null
      },
      {
        start: "jul 2019",
        end: "apr 2020",
        lineBarVisibility: "block",
        title: "Audi Arlington",
        position: "Brand Specialist",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id, odit libero adipisci esse nesciunt ullam voluptates nemo eaque quisquam obcaecati saepe ex reiciendis, voluptatum a hic, eligendi voluptas dolores!",
        tech: null
      },
      {
        start: "jan 2008",
        end: "jan 2019",
        lineBarVisibility: "block",
        title: "Visionworks",
        position: "Optical Lab Supervisor",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id, odit libero adipisci esse nesciunt ullam voluptates nemo eaque quisquam obcaecati saepe ex reiciendis, voluptatum a hic, eligendi voluptas dolores!",
        tech: null
      },
    ]
  }
}