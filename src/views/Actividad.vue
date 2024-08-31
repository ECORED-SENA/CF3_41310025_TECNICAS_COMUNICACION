<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Relaciones interpersonales en el entorno laboral.',
      titulo: 'Cuestionario',
      introduccion:
        'Evaluar la importancia de la comunicación asertiva, las relaciones interpersonales, la ética empresarial, y la resolución de conflictos en el entorno laboral, con el fin de promover un ambiente de trabajo colaborativo, productivo y ético.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la base fundamental del trabajo en equipo dentro de una organización? ',
          imagen: require('@/assets/actividad/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'La comunicación. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La competencia individual. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La creatividad. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La tecnología. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
        {
          id: 2,
          texto:
            '¿Qué aspecto es clave para mejorar las relaciones interpersonales en el entorno laboral? ',
          imagen: require('@/assets/actividad/pregunta_2.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'El respeto mutuo. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La competencia. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El uso de tecnología avanzada. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La jerarquía estricta. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes no es una cualidad necesaria para una relación interpersonal asertiva? ',
          imagen: require('@/assets/actividad/pregunta_3.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Agresividad. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Integralidad. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Calidad de vida. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Nivel de conciencia. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
        {
          id: 4,
          texto:
            '¿Qué acción debe realizar un jefe para fomentar un mejor ambiente laboral? ',
          imagen: require('@/assets/actividad/pregunta_4.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto:
                'Escuchar y comprender el punto de vista de sus empleados. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ignorar los errores de los empleados. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar el trabajo en equipo. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Imponer reglas estrictas sin discusión. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
        {
          id: 5,
          texto: '¿Qué estudia la ética empresarial? ',
          imagen: require('@/assets/actividad/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Los actos humanos desde un punto de vista moral. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El desarrollo tecnológico en la empresa. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las tendencias de mercado. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La productividad de los empleados. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
        {
          id: 6,
          texto:
            '¿Qué es el conflicto en el contexto de relaciones interpersonales? ',
          imagen: require('@/assets/actividad/pregunta_2.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto:
                'Una situación compleja que puede ser constructiva si se maneja bien. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una situación inevitable que siempre es negativa. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un rumor no verificado. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un malentendido menor. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
        {
          id: 7,
          texto: '¿Qué es el rumor según el documento? ',
          imagen: require('@/assets/actividad/pregunta_3.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Una noticia falsa que circula sin verificación. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un hecho verificado. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un anuncio oficial. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una crítica constructiva. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
        {
          id: 8,
          texto:
            '¿Qué es la autoconciencia en el contexto de la inteligencia emocional? ',
          imagen: require('@/assets/actividad/pregunta_4.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto:
                'La habilidad de reconocer y entender los propios estados de ánimo y emociones. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La capacidad de ignorar los sentimientos de los demás. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La capacidad de influir en las decisiones de otros. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La tendencia a actuar impulsivamente. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
        {
          id: 9,
          texto:
            '¿Cuál de las siguientes es una forma de resolución de conflictos? ',
          imagen: require('@/assets/actividad/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'La negociación. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumentar la tensión entre las partes. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ignorar el conflicto. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Impedir la comunicación. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
        {
          id: 10,
          texto:
            '¿Qué elemento es fundamental para la producción de documentos digitales de alta calidad en una organización? ',
          imagen: require('@/assets/actividad/pregunta_2.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto:
                'La comunicación asertiva y el respeto a las normas gramaticales. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La tecnología más avanzada. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La competencia entre empleados. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El uso exclusivo de <em>software</em> automatizado. ',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
