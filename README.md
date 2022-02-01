Website: https://www.vannguyen-dev.com

## Main tools (currently)

[NextJS](https://nextjs.org/)  
[ChakraUI](https://chakra-ui.com/)  
[ReactJS](https://reactjs.org/)  
[Framer](https://www.framer.com)  
[Vercel (current deployment)](https://vercel.com/)

## Current structure

```
.
├── README.md
├── components                  // Containe all reusable components
│   ├── bio.js
│   ├── fonts.js
│   ├── footer.js
│   ├── grid-item.js
│   ├── layout                  // Main layout for the website
│   ├── logo.js
│   ├── navbar.js
│   ├── paragraph.js
│   ├── project.js
│   ├── section.js
│   └── theme-toggle-button.js
├── eslintrc.json
├── lib                         // Currently just for customized theme of Chakra UI
│   └── theme.js
├── next.config.js
├── package-lock.json
├── package.json
├── pages                       // Rendered Page for NextJS
│   ├── 404.js
│   ├── _app.js
│   ├── _document.js
│   ├── index.js
│   ├── posts.js
│   ├── projects                // Contain project pages
│   └── projects.js
├── prettier.config.js
└── public                      // Containes mostly images
    └── images
```

## Running

Highly recommeding running **node** version >= 14.0

```
## Install node module and all the dev packages
npm install

## Running website on local host (post 3000 by default)
npm run dev
```

## License

MIT © [Van Nguyen Nguyen](https://github.com/hades42)
