<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-down") A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 

    .row.justify-content-center.pt-4(style="background-color:#F6F6F6;border-radius:20px;")
      .col-lg-10.mb-5(data-aos="zoom-in-up")
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis  que presenta los componentes clave de las relaciones interpersonales, las cuales se definen como los vínculos que se forman entre personas mediante la comunicación y la interacción, esenciales para el desarrollo social y personal. Abarca áreas como la comunicación asertiva, crítica, reflexión, habilidades sociales, y aprendizaje y desarrollo, cada una con subelementos que detallan aspectos específicos como la forma de dirigirse a las personas, la generación de comportamientos adecuados, y el respeto por los derechos de los demás.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
