import DemoComponent from './src/main.vue';

DemoComponent.install = function(Vue){
    Vue.component(DemoComponent.name, DemoComponent);
}

export default DemoComponent;