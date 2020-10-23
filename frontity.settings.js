const settings = {
  name: "pdacademy-app",
  state: {
    frontity: {
      url: "https://productdesigner.es",
      title: "Product Designer App",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "pdacademy-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://productdesigner.es/wp-json",

          params: {
            //creando paginación
            "per_page" : 99,
          },

          //configurar CPT para obtenerlos
          postTypes: [
            {
              type: "video",
              endpoint: "video",
              archive: "/videos",
            },
            {
              type: "curso",
              endpoint: "curso",
              archive: "/cursos",
            },
          ],

          //agregar taxonomy
          "taxonomies" : [
            {
              taxonomy : "nivel",
              endpoint : "nivel",
              postTypeEndpoint : "curso",
            }
          ]
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
