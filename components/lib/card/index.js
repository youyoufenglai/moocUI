import CardComponent from './src/main.vue';

CardComponent.install = function(Vue){
    Vue.component(CardComponent.name, CardComponent);
}

export default CardComponent;