const projectsData = [
  {
    id: 101,
    name: "Freelance Project",
    tags: ["all", "html&css", "featured"],
    links: {
      live: "https://stechdesigners.com",
    },
    media: {
      thumbnail: require("../../assets/projects/HTML&Tail/Stech.png"),
    },
  },
  {
    id: 1,
    name: "Github User Finder",
    tags: ["all", "react", "featured"],
    links: {
      live: "https://github-fireauth.netlify.app/",
      github: "https://github.com/ShubhamSingh03/Github_User_Finder",
      ytvideo: "https://youtu.be/gpO7Ku74Bb8",
    },
    media: {
      thumbnail: require("../../assets/projects/Js&React/ReactGit.png"),
    },
  },
  {
    id: 2,
    name: "Shoe Shopping App",
    tags: ["all", "react", "featured"],
    links: {
      live: "https://shoes-js.netlify.app/",
      github: "https://github.com/ShubhamSingh03/Shoes_Shopping_App",
      ytvideo: "https://youtu.be/dUnItbkVLQs",
    },
    media: {
      thumbnail: require("../../assets/projects/Js&React/ReactShoe.png"),
    },
  },
  {
    id: 3,
    name: "Catgram App",
    tags: ["all", "react", "featured"],
    links: {
      live: "https://instagram-fsjs.netlify.app/",
      github: "https://github.com/ShubhamSingh03/Instagram_Home_Page",
      ytvideo: "https://youtu.be/nho0m2YAEbc",
    },
    media: {
      thumbnail: require("../../assets/projects/Js&React/ReactCat2.png"),
    },
  },
  {
    id: 4,
    name: "Paytm Page",
    tags: ["all", "tailwind", "featured"],
    links: {
      live: "https://payupi-app.netlify.app/",
      github: "https://github.com/ShubhamSingh03/Paytm_clone",
      ytvideo: "https://youtu.be/9wQOnEWbUv0",
    },
    media: {
      thumbnail: require("../../assets/projects/HTML&Tail/paytm.png"),
    },
  },
  {
    id: 5,
    name: "Shopify Clone",
    tags: ["all", "tailwind", "featured"],
    links: {
      live: "https://shopify-home.netlify.app/",
      github: "https://github.com/ShubhamSingh03/Shopify_clone",
      ytvideo: "https://youtu.be/Y5QKiEOg8Hk",
    },
    media: {
      thumbnail: require("../../assets/projects/HTML&Tail/TailwindcssShopify.png"),
    },
  },
  {
    id: 6,
    name: "Rode HomePage",
    tags: ["all", "tailwind"],
    links: {
      live: "https://rode-uiclone.netlify.app/",
      github: "https://github.com/ShubhamSingh03/Rode_clone",
      ytvideo: "https://youtu.be/qZhXn2CSpj0",
    },
    media: {
      thumbnail: require("../../assets/projects/HTML&Tail/TailwindcssRode.png"),
    },
  },
  {
    id: 7,
    name: "ToDo App",
    tags: ["all", "js-app", "featured"],
    links: {
      live: "https://todo-fsjs.netlify.app/",
      github:
        "https://github.com/ShubhamSingh03/JavaScripts_Docs_Projects/tree/main/ToDo%20App",
      ytvideo: "https://youtu.be/40EAsAxpj30",
    },
    media: {
      thumbnail: require("../../assets/projects/Js&React/JsTodo.png"),
    },
  },
  {
    id: 8,
    name: "Bookmark App",
    tags: ["all", "js-app"],
    links: {
      live: "https://bookmark-js.netlify.app/",
      github:
        "https://github.com/ShubhamSingh03/JavaScripts_Docs_Projects/tree/main/Bookmark%20App",
      ytvideo: "https://youtu.be/wPhCpAZ0Hl8",
    },
    media: {
      thumbnail: require("../../assets/projects/Js&React/JsBookmarks.png"),
    },
  },
  {
    id: 9,
    name: "Password Generator",
    tags: ["all", "js-app"],
    links: {
      live: "https://pwd-creator.netlify.app/",
      github:
        "https://github.com/ShubhamSingh03/JavaScript_MiniProjects/tree/main/PasswordGenerator",
      ytvideo: "https://youtu.be/M3pFIz4ySoY",
    },
    media: {
      thumbnail: require("../../assets/projects/Js&React/JsPwd.png"),
    },
  },
  {
    id: 10,
    name: "StopWatch App",
    tags: ["all", "js-app"],
    links: {
      live: "https://stopwatch-fsjs.netlify.app/",
      github:
        "https://github.com/ShubhamSingh03/JavaScripts_Docs_Projects/tree/main/Stopwatch%20App",
      ytvideo: "https://youtu.be/urng25FRyss",
    },
    media: {
      thumbnail: require("../../assets/projects/Js&React/JsStop.png"),
    },
  },
  {
    id: 11,
    name: "Js Quiz App",
    tags: ["all", "js-app"],
    links: {
      live: "https://fsjs-quiz.netlify.app/",
      github:
        "https://github.com/ShubhamSingh03/JavaScript_MiniProjects/tree/main/JsQuizApp",
      ytvideo: "https://youtu.be/nGXPJEeD0u4",
    },
    media: {
      thumbnail: require("../../assets/projects/Js&React/JsQuiz.png"),
    },
  },
  {
    id: 12,
    name: "Random Quotes Generator",
    tags: ["all", "js-app"],
    links: {
      live: "https://quote-js.netlify.app/",
      github:
        "https://github.com/ShubhamSingh03/JavaScripts_Docs_Projects/tree/main/Random%20Quote%20Generator",
      ytvideo: "https://youtu.be/I93ioIYoDDU",
    },
    media: {
      thumbnail: require("../../assets/projects/Js&React/JsQuotes.png"),
    },
  },
  {
    id: 13,
    name: "Multiple Theme Switcher",
    tags: ["all", "js-app"],
    links: {
      live: "https://theme-js.netlify.app/",
      github:
        "https://github.com/ShubhamSingh03/JavaScripts_Docs_Projects/tree/main/Theme%20Changer",
      ytvideo: "https://youtu.be/s6jXsGGsqnM",
    },
    media: {
      thumbnail: require("../../assets/projects/Js&React/JsTheme.png"),
    },
  },
  {
    id: 14,
    name: "Business Landing Page",
    tags: ["all", "html&css", "featured"],
    links: {
      live: "https://businesss-homepage.netlify.app/",
      github: "https://github.com/ShubhamSingh03/Business-Landing-Page",
      ytvideo: "https://youtu.be/Nto_1rFGHGc",
    },
    media: {
      thumbnail: require("../../assets/projects/HTML&Tail/htmlpr12.png"),
    },
  },
  {
    id: 15,
    name: "Developer Landing Page",
    tags: ["all", "html&css"],
    links: {
      live: "https://develop-page.netlify.app/",
      github: "https://github.com/ShubhamSingh03/Developer-Landing-Page",
      ytvideo: "https://youtu.be/A7p1N5-r9EA",
    },
    media: {
      thumbnail: require("../../assets/projects/HTML&Tail/htmlpr11.png"),
    },
  },
  {
    id: 16,
    name: "Product Design Landing Page",
    tags: ["all", "html&css"],
    links: {
      live: "https://prdesign-page.netlify.app/",
      github: "https://github.com/ShubhamSingh03/ProductDesignLandingPage",
      ytvideo: "https://youtu.be/YiwVvut8p5o",
    },
    media: {
      thumbnail: require("../../assets/projects/HTML&Tail/htmlpr151.png"),
    },
  },
  {
    id: 17,
    name: "Hosting Landing Page",
    tags: ["all", "html&css"],
    links: {
      live: "https://hostingg-page.netlify.app/",
      github: "https://github.com/ShubhamSingh03/Hosting-Landing-Page",
      ytvideo: "https://youtu.be/4KvpbUqEljU",
    },
    media: {
      thumbnail: require("../../assets/projects/HTML&Tail/htmlpr13.png"),
    },
  },
  {
    id: 18,
    name: "Dance HomePage",
    tags: ["all", "html&css"],
    links: {
      live: "https://dance-homeepage.netlify.app/",
      github: "https://github.com/ShubhamSingh03/Dance-Home-Page",
      ytvideo: "https://youtu.be/XOYPOYYTgt8",
    },
    media: {
      thumbnail: require("../../assets/projects/HTML&Tail/html141.png"),
    },
  },
  {
    id: 19,
    name: "Interior Design Page",
    tags: ["all", "html&css"],
    links: {
      live: "https://interior-home-page.netlify.app/",
      github: "https://github.com/ShubhamSingh03/InteriorDesignLandingPage",
      ytvideo: "https://youtu.be/GyOmVp-HF2M",
    },
    media: {
      thumbnail: require("../../assets/projects/HTML&Tail/htmlpr9.png"),
    },
  },
];

export default projectsData;
