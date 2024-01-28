import {ref} from 'vue'

export default function useLocationMap(){
       
    const zoom = ref(15)
    const center = ref([15.31918, -91.47241])

    return {
        zoom,
        center
    }
} 