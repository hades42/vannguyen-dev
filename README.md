Website: https://www.hades42.com

## Main tools (currently)

[NextJS](https://nextjs.org/)  
[ChakraUI](https://chakra-ui.com/)  
[ReactJS](https://reactjs.org/)  
[Framer](https://www.framer.com)  
[MDX](https://mdxjs.com/)  
[Vercel (current deployment)](https://vercel.com/)

## Current structure

```
.
├── README.md
├── components                  // Containe all reusable components
│   ├── layout/                 // Main layout for the website
│   ├── mdx/                    // Custom features for MDX
│   ├── code-block/             // Custom codeblock
│   └── ...
├── eslintrc.json
├── lib                         // Theme, backend logic
├── next.config.js
├── package-lock.json
├── package.json
├── pages                       // Rendered Page for NextJS
│   ├── projects/               // Contain project pages
│   ├── posts/                  // Contain posts pages
│   └── ...
├── prettier.config.js
└── public                      // Containes static file
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

[MIT](https://github.com/hades42/vannguyen-dev/blob/main/LICENSE) © [Van Nguyen Nguyen](https://github.com/hades42)
