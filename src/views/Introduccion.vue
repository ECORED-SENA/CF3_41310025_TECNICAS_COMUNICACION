<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .cont_intro
      .row
        .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
          p La comunicación efectiva y el trabajo en equipo son pilares fundamentales para el éxito de cualquier organización. A través de una comunicación asertiva, los miembros de una empresa pueden compartir información, resolver conflictos y colaborar de manera más eficiente, lo que resulta en una mayor productividad y un ambiente laboral más cohesivo. 
          .p-4.p-lg-3.mt-4(style="background-color:#D8DEDD;border-radius:10px;" data-aos="flip-left")
            .row
              .col-md-auto.mb-4.mb-md-0(style="place-self:center;")
                figure.m-auto.col-9.col-md-12
                  img(src="@/assets/curso/intro2.svg")
              .col-md(style="place-self:center;")
                p.mb-0 Las relaciones interpersonales en el entorno laboral no solo facilitan el intercambio de ideas y la toma de decisiones, sino que también fortalecen el sentido de pertenencia y compromiso entre los empleados. Es esencial que los trabajadores desarrollen habilidades sociales que les permitan interactuar de manera respetuosa y efectiva con sus colegas, contribuyendo así a un entorno de trabajo más armonioso. 
          p.mt-4 Además, la ética empresarial juega un papel crucial en la construcción de un ambiente de trabajo saludable. La implementación de principios éticos en las relaciones laborales y en la gestión de la información asegura que las interacciones dentro de la organización se realicen de manera justa y equitativa, promoviendo una cultura organizacional basada en el respeto y la integridad. 
        .col-lg-3(data-aos="fade-up" style="place-self:center;")
          figure.m-auto.col-7.col-md-6.col-lg-12
            img(src="@/assets/curso/intro3.png")
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
