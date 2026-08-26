export const fileTree = {
  name: "portfolio",
  type: "folder",
  children: [
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "pages",
          type: "folder",
          children: [
            { name: "Home.jsx", type: "file", route: "/" },
            { name: "About.jsx", type: "file", route: "/about" },
            { name: "Projects.jsx", type: "file", route: "/projects" },
            { name: "Contact.jsx", type: "file", route: "/contact" },
          ],
        },
      ],
    },
  ],
};

export const routeFileMap = {
  "/": { label: "Home.jsx", path: "portfolio > src > pages > Home.jsx" },
  "/about": { label: "About.jsx", path: "portfolio > src > pages > About.jsx" },
  "/projects": {
    label: "Projects.jsx",
    path: "portfolio > src > pages > Projects.jsx",
  },
  "/contact": {
    label: "Contact.jsx",
    path: "portfolio > src > pages > Contact.jsx",
  },
};

export const routeToShellPath = {
  "/": "~",
  "/about": "~/about",
  "/projects": "~/projects",
  "/contact": "~/contact",
};
