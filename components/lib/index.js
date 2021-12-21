import CardComponent from "./card";
import DemoComponent from "./demo";

const components = {
    CardComponent,
    DemoComponent
}

const install = function(Vue){
    Object.keys(components).forEach( key => {
        Vue.component(components[key].name, components[key]);
    })
}

const API = {
    install
};

export default API;