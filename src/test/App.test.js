import { describe,expect,it,setValue } from "vitest";
import { mount } from "@vue/test-utils";
import App from "../App.vue"

describe("intento", ()=>{

    it("deberia crear",()=>{
        const wrapper  =  mount(App)
        //expect(wrapper.find('input[type="text"]').exists()).toBeTruthy()
        expect(wrapper.find('button').exists()).toBeTruthy()


    })
    it("llevo 10 horas probando cosas", async ()=>{
        const wrapper  =  mount(App)

        await wrapper.find('button[class="user"]').trigger('click')
        expect(wrapper.find('input[type="text"]').exists()).toBeTruthy()
        await wrapper.find('input[type="text"]').setValue('nombre random')
        await wrapper.find('button').trigger('click')
        expect(wrapper.find('nombre').text()).toEqual('nombre random')
    })
    

})