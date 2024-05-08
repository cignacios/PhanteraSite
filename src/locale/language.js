import { ref, computed } from "vue";

import en from './en'
import es from './es'

const availablelanguages = [
    {
        code:'EN', 
        name:'EN',
        file:en,
    },

    {
        code:'ES', 
        name:'ES',
        file:es,
    }
]

const currentlanguagecode = ref('EN')

const t = computed(
    ()=>availablelanguages.find((lang)=>lang.code===currentlanguagecode.value).file
)

const setlanguage = (code)=>{
    currentlanguagecode.value=code;
    localStorage.setItem('language', code)
}
if(localStorage.getItem('language')){
    setlanguage(localStorage.getItem('language'))
}

function switchlanguage(){
    currentlanguagecode.value=currentlanguagecode.value==='EN'?'ES':'EN';
}

export {availablelanguages, currentlanguagecode, setlanguage, t, switchlanguage}