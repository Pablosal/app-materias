import algebra from "./imagenes/algebra.png";
import aritmetica from "./imagenes/aritmetica.png";
import calculo from "./imagenes/calculo.png";
import geometria from "./imagenes/geometria.png";
import probabilidad from "./imagenes/probabilidad.png";
import trigonometria from "./imagenes/trigonometria.png";
export const colors = ["#00A7E1", "#FC814A", "#ba324f", "#aad922", "#eac435"];

export const materias = [
  {
    id: 1,
    image: aritmetica,
    nombre: "Aritmetica",
    background: "green",
    endpoint: "aritmetica",
    submaterias: [
      "Sumas y restas",
      "Multiplicacion y divicion",
      "Números negativos",
      "Fracciones",
      "Decimales",
    ],
  },
  // {
  //   id: 4,
  //   nombre: "Algebra",
  //   image: algebra,
  //   background: "#004d00",
  //   endpoint: "algebra",
  //   submaterias: [
  //     "Expresiones Algebraicas",
  //     "Ecuaciones Lineales y desigualdades",
  //     "Graficar Rectas y Pendientes",
  //     "Sistemas de ecuaciones",
  //     "Expresiones con exponentes",
  //     "Cuadratis y polinomios",
  //     "Geometría y ecuaciones",
  //     "Exponentes y radicales",
  //     "Crecimiento y decaimiento exponencial",
  //     "Cuadráticas",
  //     "Funciones y ecuaciones cuadráticas",
  //     "Números irracionales",
  //   ],
  // },
  // {
  //   id: 5,
  //   nombre: "Geometria Basica",
  //   image: geometria,
  //   background: "#0046a9",
  //   endpoint: "geometria",
  //   submaterias: [
  //     "Lineas rectas",
  //     "Angulos",
  //     "Figuras",
  //     "Plano coordenado",
  //     "Area  y perimetro",
  //     "Volumen y area de la superficie",
  //     "Teorema de Pitagoras",
  //     "Transformaciones, congruencia y semejanza",
  //     "Trienagulos rectangulos y trigonometria",
  //     "Geometria de solidos",
  //     "Geometria analitica",
  //     "Circulos",
  //   ],
  // },

  // {
  //   id: 6,
  //   nombre: "Trigonometria",
  //   background: "#003624",
  //   endpoint: "trigonometria",
  //   image: trigonometria,
  //   submaterias: [
  //     "Trigonometría con triángulos rectángulos",
  //     "Trigonometría con triángulos generales",
  //     "Definiciones de seno coseno tangente",
  //     "Gráficas de funciones trigonométricas",
  //     "Identidades y ecuaciones trigonométricas",
  //   ],
  // },
  // {
  //   id: 7,
  //   image: algebra,
  //   nombre: "Algebra II",
  //   background: "#baba7a",
  //   endpoint: "algebra-II",
  //   submaterias: [
  //     "Numeros complejos",
  //     "division de polinomios",
  //     "grafica de polinomios",
  //     "Exponentes racionales y radicales",
  //     "Modelado",
  //     "Funciones Racionales",
  //   ],
  // },
  // {
  //   id: 8,
  //   image: probabilidad,
  //   nombre: "Probabilidad y Estadística ",
  //   background: "#683b00",
  //   endpoint: "probabilidad-y-estadistica",
  //   submaterias: [
  //     "Analizar datos categóricos",
  //     "Visualizar y comparar datos cuantitativos",
  //     "Resumir datos cuantitativos",
  //     "Modelar distribuciones de datos",
  //     "Explorar datos numéricos y bivariados",
  //     "Diseño de estudios",
  //     "Probabilidad",
  //     "Conteo, Permutaciones y combinaciones",
  //     "Variables aleatorias",
  //     "Distribuciones Muestrales",
  //     "Intervalos de Confianza",
  //     "Pruebas de significancia",
  //     "Inferencia de dos muestras para la diferencia entre grupos",
  //     "Inferencia para datos categóricos",
  //     "Regresión avanzada",
  //     "Análisis de varianza",
  //   ],
  // },
  // {
  //   id: 9,
  //   image: calculo,
  //   nombre: "Cálculo",
  //   background: "#ba19ca",
  //   endpoint: "calculo",
  //   submaterias: [
  //     "Límites y Continuidad",
  //     "Diferenciación: definición y reglas básicas de las derivadas",
  //     "Diferenciación: funciones compuestas, implícitas e inversas",
  //     "Aplicaciones contextuales de la diferenciación",
  //     "Aplicar derivadas para analizar funciones",
  //     "Integración y Acumulacion de cambio",
  //     "Ecuaciones Diferenciales",
  //     "Aplicaciones de integración",
  //   ],
  // },
  // {
  //   id: 10,
  //   image: calculo,
  //   nombre: "Cálculo II",
  //   background: "#8b2d77",
  //   endpoint: "calculo-ii",
  //   submaterias: [
  //     "Límites y Continuidad",
  //     "Diferenciación",
  //     "Aplicaciones contextuales de la diferenciación",
  //     "Aplicar derivadas para analizar funciones",
  //     "Integración y acumulación de cambio",
  //     "Ecuaciones diferenciales",
  //     "Aplicaciones de integración",
  //   ],
  // },
];
export const pistas = {
  sumasyrestas: [
    {
      name: "TransformarAPelotas",
      descripcion: "Transforma los numeros a objetos",
    },
    {
      name: "UsarLosDedos",
      descripcion: "Utiliza los dedos para sumar",
    },
  ],
  multiplicacionydivicion: [
    {
      name: "SumaLosDigitos",
      descripcion: "Suma los digitos por si mismos",
    },
    {
      name: "UsarLosDedosX",
      descripcion: "Usa los dedos para multiplcar",
    },
  ],
};
export const ejercicio = {
  sumasyrestas: [
    {
      descripcion: "2 + 3",
      soluciones: ["9", "-7", "5", "19"],
      correcto: "5",
      pistas: ["TransformarAPelotas", "UsarLosDedos"],
    },
  ],
  multiplicacionydivicion: [
    {
      descripcion: "2 x 3",
      soluciones: ["3", "-3", "6", "19"],
      correcto: "6",
      pistas: ["SumaLosDigitos", "UsarLosDedosX"],
    },
  ],
  númerosnegativos: [],
  fracciones: [],
  decimales: [],
};
