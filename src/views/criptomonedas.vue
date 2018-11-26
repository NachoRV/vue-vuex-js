<template>
  <div class="about">
    <!-- {{ titulo }} renderiza/ introduce el valor del elemento pasaso reactividad-->
    <h1>{{ titulo }}</h1>
    <!-- v-model vincula el valor del imput al del data indicado reactividad -->
    <input type="text" v-model="titulo"><hr>
    <!--Directivas: Renderizado condicional
     v-show="true" -> muestra si el valor es true.
     v-if -> evalua la condicion y la muestra si es true
     v-for (dia,key) in dias para renderizar listas
     -->
    <label>Introduce True o false</label><br>
    <input type="text" v-model="mostrar"><br>
    <p v-show='mostrar'>Se muestra el Parrafo</p><hr>
    <label v-if='valorIf == 0'>Introduce el numero 1 y desaparezco con un v-if</label>
    <label v-else-if='valorIf == 1'>Mi valor es un uno </label>
    <label v-else>Mi valor es distinto de 1 o 0 </label><br>
    <input type="number" v-model="valorIf"><hr>
    <h3>v-for para renderizar listas</h3>
    <ul>
      <ol v-for="(dia, key) in dias" :key= key>{{dia}}</ol>
    </ul>
     <h3>v-for para renderizar objetos</h3>
    <ul>
      <ol v-for="(value, key ) in persona" :key= key>{{key}}: {{value}}</ol>
    </ul><hr>
    <!--v-on:click
    v-on:keyup
    v-on:keyup.enter
    v-on:submit.prevent -> para formularios
    -->
    <h3>v-on para capturar eventos</h3>
    <p>Contaror {{ count }} - {{ countMas10 }}</p>
    <button v-on:click="aumentar">mas + 1</button>


    <!-- muestra el valor de Data -->
    <h2>muestra los datos del data</h2>
    <pre> {{ $data }}</pre>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  mounted() {
    this.cargarCriptomenedas();
  },
  /**
   * variables 
  */
  data(){
    return{
      titulo: '',
      mostrar: false,
      valorIf: 0,
      monedasJson: [],
      dias:['Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes'],
      persona:{
        name: 'Nacho',
        apellido: 'Royo-V',
        profesion: 'Dev'
      },
      count:0
    }
  },
// methods par crear las gunciones
  methods:{
    cargarCriptomenedas() {
      axios.get('https://api.coinmarketcap.com/v2/ticker/')
        .then((respuesta) =>{
          console.log(respuesta)
          //this.monedasJson = respuesta
        });
    },
    aumentar() {
      this.count++
    }
  },

  /** se usan para manipular los elementos del data antes de renderizarlos */
  computed: {
    countMas10(){

      return this.count +10
    }
  }
}
</script>
