<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Relaciones interpersonales laborales con los compañeros 
    
    .cont_2_1
      .row 
        .col-lg.pe-lg-0(data-aos="fade-up")
          .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#F5F4F4;")
            p.mb-0 Un grupo está formado por personas que interactúan entre sí, se identifican sociológicamente y se sienten miembros de este. En una empresa, estos grupos pueden ser formales (constituidos por mandato de la gerencia para realizar tareas específicas) o informales (formados libremente por individuos con experiencias laborales comunes). La gerencia debe facilitar la evolución de los grupos de trabajo en equipos de trabajo, lo cual se logra cuando los miembros están centrados en ayudarse mutuamente para alcanzar una meta común. 
        .col-lg-auto.d-none.d-lg-block.ps-lg-0(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema2/1.png")
      
      .col-xl-8.m-auto.mt-5.col-lg-10
        .row
          .col-md-auto.pe-md-0(data-aos="fade-down")
            .p-3.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#B2BEBC;")
              figure.m-auto.col-8.col-md-12
                img(src="@/assets/curso/tema2/2.svg")
          .col-md.ps-md-0(data-aos="fade-up")
            .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#FED7C3;")
              p.mb-0 Si los empleados conforman equipos de trabajo, sus relaciones interpersonales mejorarán, y surgirá un sentimiento de identidad y compromiso hacia la empresa, lo cual beneficiará a todos sus integrantes.
    
    .col-lg-10.m-auto.mt-4
      .p-3(data-aos="zoom-in" style="background-color:#D8DEDD;")
        .col-xl-11.m-auto
          .row 
            .col-auto(style="place-self:center;")
              figure 
                img(src="@/assets/curso/tema2/3.svg")
            .col(style="place-self:center;")
              p.mb-0 Las relaciones interpersonales mejoran con una buena comunicación. Para que esto se cumpla, se debe valorar y respetar el pensamiento de los demás. #[strong ¿Se hace esto en el trabajo?] 
    
    .cont_1_2

      Separador

      .titulo-segundo(data-aos="flip-up")
        h2#t_2_1 2.1 Dificultades en las relaciones interpersonales
      
      p(data-aos="fade-right") La comunicación es un pilar fundamental en las relaciones humanas. Sin embargo, en ocasiones, las diferencias que nos caracterizan crean obstáculos que impiden el libre desarrollo de la interacción con el otro. Es fundamental aprovechar estas situaciones de contraste, de manera tal que se conviertan en oportunidades para aprender acerca de quienes nos rodean. Entre los diferentes tipos de dificultades se encuentran: 

      .tarjeta.tarjeta_slyderb.p-4.p-lg-5.pb-lg-4.mt-4
        SlyderA(tipo="b")
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0
              h5 El conflicto
              p.mt-4 El conflicto es una situación compleja que enfrenta a individuos, grupos, organizaciones sociales o naciones. De ahí que existan conflictos interpersonales, intergrupales, sociales e internacionales. Su naturaleza varía según el punto de desencuentro: valores contradictorios, fines antagónicos, discrepancia en las metas o los medios, etc. 
              p Aunque el conflicto es inevitable, los individuos deben manejar sus relaciones de manera adecuada para que la organización funcione de manera efectiva. Aun así, un conflicto puede ser beneficioso si se emplea como instrumento de cambio e innovación. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/4.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0
              h5 El rumor
              p.mt-4 El rumor es la difusión de una noticia que circula de persona a persona sin ser verificada y sin que se disponga de medios de prueba seguros. Lo que define al rumor no es su origen, sino su evolución. El rumor se origina por la necesidad de la audiencia de clarificar, completar o comprender mensajes confusos. 
              p En el ámbito empresarial, el rumor es una de las principales fuentes de noticias e información sobre los cambios, proyectos y políticas. Por lo tanto, la administración debe prestar atención a la comunicación dentro de la empresa para evitar ambigüedades en la información que reciben los empleados. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/5.png')
      
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:start;")
            figure
              img(src="@/assets/curso/tema1/11.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-3 Modos de resolución del conflicto  
      
      p(data-aos="fade-right") La resolución de conflictos es un aspecto crucial en la gestión de relaciones, tanto personales como profesionales. Existen diversos modos de abordar y solucionar los conflictos, cada uno con sus propios enfoques y técnicas, que van desde la negociación y el diálogo abierto hasta la mediación y la búsqueda de compromisos. Comprender y aplicar estos modos de resolución es fundamental para transformar situaciones de tensión en oportunidades de crecimiento y fortalecimiento de las relaciones. 

      .row.mt-5.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
          .h-100.text-center.cont_2_2.p-4.p-xl-5
            figure
              img(src="@/assets/curso/tema2/6.svg" style="max-width:90px;display:inline;")
            h5.mt-3 La negociación
            p.mt-4.mb-0 Procedimiento de discusión que se establece entre las partes en conflicto cuyo objetivo es llegar a un acuerdo aceptable. 
        .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
          .h-100.text-center.cont_2_2.p-4.p-xl-5
            figure
              img(src="@/assets/curso/tema2/7.svg" style="max-width:90px;display:inline;")
            h5.mt-3 La mediación
            p.mt-4.mb-0 Negociación entre las partes en presencia de un mediador neutral, cuyo papel consiste en facilitar la búsqueda de una solución y no imponer alguna. 
        .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
          .h-100.text-center.cont_2_2.p-4.p-xl-5
            figure
              img(src="@/assets/curso/tema2/8.svg" style="max-width:90px;display:inline;")
            h5.mt-3 El arbitraje
            p.mt-4.mb-0 En esta negociación, el mediador es un árbitro que goza de todo poder para formular una solución que tiene fuerza de ley y que debe ser acatada por las partes en conflicto. 
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_2 2.2 La comunicación asertiva 
    
    .cont_1_3.mt-5
      p(data-aos="fade-right") Dirigir un grupo exige una comunicación asertiva con sus miembros. Es aquí donde aparece la inteligencia emocional como la capacidad para captar las emociones de un grupo y conducirlas hacia un resultado positivo. Este talento se puede aprender y cultivar en las organizaciones, para lo cual deben combinarse cinco elementos: 

      .col-xl-11.m-auto.mt-5
        .row
          .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
            figure.m-auto.col-8.col-md-6.col-lg-12
              img(src="@/assets/curso/tema2/10.png")
          .col-lg-9(data-aos="fade-up")
            SlyderF(columnas="col-lg-6 p-4")
              .tarjeta.text-center.color-acento-botones.p-4(style="box-shadow:0px 0px 20px rgba(0,0,0,.2);background-color:#FF9B6A;")
                figure
                  img(src='@/assets/curso/tema2/11.svg' style="max-width:90px;display:inline;")
                p.mt-4.fw-bold(style="color:#12263F;") Autoconciencia
                p(style="color:#12263F;") Habilidad de reconocer y entender los propios estados de ánimo y emociones, así como su efecto en los demás. 
              .tarjeta.text-center.color-acento-botones.p-4(style="box-shadow:0px 0px 20px rgba(0,0,0,.2);background-color:#FF9B6A;")
                figure
                  img(src='@/assets/curso/tema2/12.svg' style="max-width:90px;display:inline;")
                p.mt-4.fw-bold(style="color:#12263F;") Autorregulación 
                p(style="color:#12263F;") Habilidad para controlar los impulsos y emociones, a través de la reflexión antes de actuar. 
              .tarjeta.text-center.color-acento-botones.p-4(style="box-shadow:0px 0px 20px rgba(0,0,0,.2);background-color:#FF9B6A;")
                figure
                  img(src='@/assets/curso/tema2/13.svg' style="max-width:90px;display:inline;")
                p.mt-4.fw-bold(style="color:#12263F;") Motivación
                p(style="color:#12263F;") Sentir satisfacción al alcanzar una meta, no solo por sus recompensas.  
              .tarjeta.text-center.color-acento-botones.p-4(style="box-shadow:0px 0px 20px rgba(0,0,0,.2);background-color:#FF9B6A;")
                figure
                  img(src='@/assets/curso/tema2/14.svg' style="max-width:90px;display:inline;")
                p.mt-4.fw-bold(style="color:#12263F;") Empatía 
                p(style="color:#12263F;") Capacidad de un líder para considerar los sentimientos de sus subordinados y saber tratarlos adecuadamente. 
              .tarjeta.text-center.color-acento-botones.p-4(style="box-shadow:0px 0px 20px rgba(0,0,0,.2);background-color:#FF9B6A;")
                figure
                  img(src='@/assets/curso/tema2/15.svg' style="max-width:90px;display:inline;")
                p.mt-4.fw-bold(style="color:#12263F;") Habilidades sociales 
                p(style="color:#12263F;") Capacidad de las personas para manejar las relaciones con los demás y conducirlas en la dirección deseada. 
    
    .col-xl-8.col-lg-10.m-auto.mt-4
      .p-3(data-aos="zoom-in" style="background-color:#FED7C3;")
        .col-xl-11.m-auto
          .row 
            .col-auto(style="place-self:center;")
              figure 
                img(src="@/assets/curso/tema2/16.svg")
            .col(style="place-self:center;")
              p.mb-0 La comunicación asertiva es clave en las relaciones interpersonales basadas en el respeto mutuo y la claridad.
    
    .cont_1_2.mt-5
      p(data-aos="fade-right") En estas relaciones, los interlocutores pueden entablar diálogos en los que expresan libre, clara y precisamente sus pensamientos, ideas y sentimientos. Las relaciones asertivas dependen de tres cualidades que el ser humano debe establecer en cualquier interacción con otra persona para lograr el éxito: 

      .row.mt-4
        .col-lg-9(data-aos="zoom-in")
          AcordionA(tipo="a" clase-tarjeta="tarjeta")
            .row.col-xl-11.m-auto(titulo="La integralidad o el ser ")
              p Para que la comunicación sea asertiva, las personas deben comportarse como seres humanos íntegros, es decir, aceptar su naturaleza racional y emocional, y al mismo tiempo asumir las normas sociales y culturales. Se habla de integridad cuando el ser humano sabe: 
              ul.lista-ul.mt-3
                li.d-flex
                  i.fas.fa-check-circle(style="color:#FF9B6A;")
                  span Respetar a su interlocutor, es decir, reconocer sus derechos y cumplir con sus deberes. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#FF9B6A;")
                  span Escuchar activamente, prestando atención y dando crédito a las ideas de los demás. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#FF9B6A;")
                  span Comunicar hechos, opiniones y sentimientos con descripciones claras y concisas. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#FF9B6A;")
                  span Prestar atención a los mensajes verbales y no verbales. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#FF9B6A;")
                  span Equilibrar la comunicación, sin buscar beneficios propios.
            .row.col-xl-11.m-auto(titulo="La calidad de vida o el saber hacer ")
              p En este aspecto, las personas deben aceptar su posición en su círculo social, desempeñándose con responsabilidad. Se habla de calidad de vida cuando el ser humano sabe: 
              ul.lista-ul.mt-3
                li.d-flex
                  i.fas.fa-check-circle(style="color:#FF9B6A;")
                  span Establecer normas de interacción para mejorar la comunicación.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#FF9B6A;")
                  span Participar en los procesos de su círculo social para optimizar las tareas y la interacción. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#FF9B6A;")
                  span Liderar el proceso comunicativo dentro de un grupo de personas. 
            .row.col-xl-11.m-auto(titulo="El nivel de conciencia o el saber aprender ")
              p Este tercer elemento permite que el ser humano tenga comunicaciones asertivas cuando sabe dirigir su forma de ser y de hacer, de acuerdo con el círculo social al cual pertenece, su contexto y su entorno. Se habla de saber aprender cuando el ser humano sabe: 
              ul.lista-ul.mt-3
                li.d-flex
                  i.fas.fa-check-circle(style="color:#FF9B6A;")
                  span Proponer nuevas acciones para mejorar los procesos de interacción. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#FF9B6A;")
                  span Desarrollar metodologías para resolver y minimizar los problemas. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#FF9B6A;")
                  span Tomar decisiones que beneficien a todos los involucrados en el círculo social. 
        .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
          figure 
            img(src="@/assets/curso/tema2/17.png")

      p.mt-4(data-aos="fade-up") Al cumplir con los elementos anteriores y contar con los medios de comunicación necesarios, la organización, a través de sus miembros, estará en capacidad de producir los documentos digitales (informes, memorandos, correos, cartas) siguiendo los protocolos respectivos, las reglas gramaticales y ortográficas, y considerando las características de los receptores según las áreas funcionales de la organización. 




</template>

<script>
export default {
  name: 'Tema2',
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
