export default {
  global: {
    componenteFormativo: 'Relaciones interpersonales',
    descripcionCurso:
      'El componente formativo aborda la importancia de la comunicación asertiva y las relaciones interpersonales en el entorno laboral. Destaca la necesidad de habilidades sociales, ética empresarial y manejo adecuado de la información en equipos de trabajo. Además, destaca cómo la inteligencia emocional y la resolución efectiva de conflictos contribuyen a la productividad y al fortalecimiento de la cohesión dentro de la organización. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La comunicación y las relaciones interpersonales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'La comunicación como base del trabajo en equipo ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Ética empresarial',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Relaciones interpersonales laborales con los compañeros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Dificultades en las relaciones interpersonales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'La comunicación asertiva',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/41310025_CF3_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'La comunicación y las relaciones interpersonales ',
      referencia:
        'Aprendemos Juntos 2030 (2021). El valor de las relaciones humanas. Keith Ferrazzi, escritor y <em>coach</em>. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3WFQMj_TAWc  ',
    },
    {
      tema: 'La comunicación como base del trabajo en equipo ',
      referencia:
        'TEDx Talks (2019). El valor de las relaciones humanas. Keith Ferrazzi, escritor y <em>coach</em>. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7uygpZkVHH0  ',
    },
    {
      tema: 'Ética empresarial ',
      referencia:
        'Grupo STT. (2024, febrero 29). <em>Todo lo que debe saber de la ética empresarial [Audio podcast]. En Podcast Grupo STT</em>. ',
      tipo: 'Pódcast',
      link: 'https://music.youtube.com/watch?v=bMtTz49a-LI  ',
    },
    {
      tema: 'Relaciones interpersonales laborales con los compañeros ',
      referencia:
        '¡Cuida tu salud mental! (2022). ¿Cómo fomentar mejores relaciones con mis compañeros en el trabajo?. [Archivo de video] Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=o9KXoLPrHRc  ',
    },
    {
      tema: 'Dificultades en las relaciones interpersonales ',
      referencia:
        'Universidad Nacional de Costa Rica. (n.d.). <em>Guía de autoayuda: Relaciones interpersonales</em>. ',
      tipo: 'Guía',
      link:
        'https://documentos.una.ac.cr/bitstream/handle/unadocs/12376/Gu%C3%ADa%20de%20autoayuda%20-%20Relaciones%20interpersonales%20PDF.pdf?sequence=1&isAllowed=y  ',
    },
    {
      tema: 'La comunicación asertiva ',
      referencia:
        'Aprendemos Juntos 2030 (2021). Cómo comunicarnos con asertividad. Estrella Montolío, lingüista y profesora. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jvxuQEe_0-w  ',
    },
  ],
  glosario: [
    {
      termino: 'Autoconciencia',
      significado:
        'habilidad de reconocer y entender los propios estados de ánimo y emociones, así como su efecto en los demás. ',
    },
    {
      termino: 'Autorregulación',
      significado:
        'capacidad para controlar los impulsos y emociones, a través de la reflexión antes de actuar. ',
    },
    {
      termino: 'Motivación',
      significado:
        'sentir satisfacción al alcanzar una meta, no solo por sus recompensas. ',
    },
    {
      termino: 'Empatía',
      significado:
        'capacidad de un líder para considerar los sentimientos de sus subordinados y saber tratarlos adecuadamente. ',
    },
    {
      termino: 'Habilidades sociales',
      significado:
        'capacidad de las personas para manejar las relaciones con los demás y dirigirlas en la dirección deseada. ',
    },
    {
      termino: '<em>Benchmarking</em>',
      significado:
        'compararse con el mejor y tratar de alcanzar sus estándares. ',
    },
    {
      termino: '<em>Branding</em>',
      significado: 'proceso de construcción y posicionamiento de una marca. ',
    },
    {
      termino: 'Canal',
      significado:
        'medio o conducto de comunicación. la elección de canales es a menudo un factor importante para la efectividad de la comunicación. ',
    },
    {
      termino: 'Cohesión',
      significado:
        'unión entre los individuos de un grupo, que mantiene a sus miembros juntos y resiste las fuerzas de disgregación. ',
    },
    {
      termino: 'Coherencia',
      significado:
        'condición que se construye en la interacción, dentro de una situación comunicativa. puede entenderse como una teoría sobre el sentido de un texto. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Bayer, C. (2014). Comunicación eficaz: una competencia para lograr el éxito organizacional.',
      link:
        'https://intellectum.unisabana.edu.co/bitstream/handle/10818/4624/130814.pdf ',
    },
    {
      referencia:
        'Chauvin, S. (s.f.). La Comunicación Como Base del Trabajo en Equipo.',
      link:
        'https://www.mujeresdeempresa.com/la-comunicacion-como-base-del-trabajo-en-equipo/   ',
    },
    {
      referencia:
        'Guamán, V.., León, M.., & Zuriaga, M.. (2023). La comunicación asertiva en el área institucional. <em>Sinergia Académica</em>, 6(2), 45-70. ',
      link: 'http://sinergiaacademica.com/index.php/sa/article/view/120 ',
    },
    {
      referencia:
        'Quiñones, H. (2014). La comunicación y el trabajo en equipo.',
      link: '',
    },
    {
      referencia:
        'Wiemann, M. O. (2011).<em>La comunicación en las relaciones interpersonales</em> (Vol. 9). Editorial UOC.',
      link:
        'https://books.google.es/books?hl=es&lr=&id=xsHHilcCfigC&oi=fnd&pg=PA13&dq=La+comunicaci%C3%B3n+y+las+relaciones+interpersonales&ots=Dlm4kPsAbd&sig=isYpyU-NK4VCCMdYajqyaXRjHEg#v=onepage&q=La%20comunicaci%C3%B3n%20y%20las%20relaciones%20interpersonales&f=false  ',
    },
    {
      referencia:
        'Yaguache, J., y Valdiviezo, K. (2023). Digitalización de la comunicación empresarial y el CommTech del E-commerce. <em>In Memorias de la Décima Tercera Conferencia Iberoamericana de Complejidad, Informática y Cibernética). International Institute of Informatics and Systemics</em>.',
      link: 'https://www.iiis.org/CDs2023/CD2023Spring/papers/CB150NN.pdf ',
    },
    {
      referencia:
        'Yáñez, R., Ripoll, M. (2010). El impacto de las relaciones interpersonales en la satisfacción laboral general. Artículo web. ',
      link: 'http://www.scielo.org.pe/pdf/liber/v16n2/a09v16n2.pdf ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'José Herney Sánchez Pizarro',
          cargo: 'Experto temático ',
          centro:
            'Centro de Desarrollo Agropecuario y Agroindustrial CEDEAGRO - Regional Boyacá ',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta ',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez ',
          cargo: 'Diseñador de contenidos digitales ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de recursos educativos digitales ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
