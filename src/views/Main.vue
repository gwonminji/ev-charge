<template>
    <main>
        <div class="inner">
            <!-- {{ totallist.getLoadingState }} -->
            <div v-if="isLoaded">
                <!-- true면 이거 -->
                <!-- {{ totallist.getLists }} -->
                <ul class="list">
                    <li class="list__item" v-for="v in totallist.getLists" :key="v.id">
                        <p class="list__val list__val--city">
                            <span class="list__ico"><font-awesome-icon icon="fa-solid fa-location-dot" /></span>
                            {{ v.metro }}&nbsp;{{ v.city }}({{ v.stnPlace }})
                        </p>
                        <!-- <p class="list__val list__val--addr">
                            <font-awesome-icon icon="fa-solid fa-map" />{{ v.stnAddr }}
                        </p> -->
                        <p class="list__val list__val--speed">
                            <span class="list__ico"><font-awesome-icon icon="fa-solid fa-gas-pump" /></span>
                            <span>고속 : {{ v.rapidCnt }}</span>, <span>저속 : {{ v.slowCnt }}</span>
                        </p>
                        <!-- <p class="list__val list__val--car">
                            <font-awesome-icon icon="fa-solid fa-car" />{{ v.carType }}
                        </p> -->
                        <button type="button" class="list__btn" @click="more(v.stnAddr, v.carType)"><font-awesome-icon icon="fa-solid fa-circle-info" /></button>
                    </li>
                </ul>
            </div>            
            <!-- <button type="button" @click="list.fetchList()">get data</button> -->
        </div>
        <Progress v-if="!isLoaded" />
        <Modal v-if="isModal" :addr="addrData" :car="carData" @isModal="val => isModal = val"/>
        <Menu />
    </main>
</template>
<script>
import { onMounted, watch, ref } from 'vue'
import { useListStore } from '@/stores/list'
import Menu from '@/components/Menu.vue'
import Progress from '@/components/Progress.vue'
import Modal from '@/components/Modal.vue'

export default {
    components:{
        Menu,
        Progress,
        Modal
    },
    setup() {
        const totallist = useListStore();
        const isLoaded = ref(false);
        const isModal = ref(false);
        const addrData = ref('');
        const carData = ref('');

        watch(
            totallist.getLoadingState,
            (cur, prev) => {
                isLoaded.value = cur;
                console.log("watch1", totallist.getLoadingState)
                console.log("watch cur", cur)
                console.log("watch prev", prev)
            },
            {
                immediate: true
            }
        )
        onMounted(() => {
            totallist.fetchList();
        })

        const more = (addr, car) => {
            isModal.value = true
            // console.log(`${addr} : ${car}`)
            addrData.value = addr;
            carData.value = car;
            // console.log(`담음 : ${addrData.value} : ${carData.value}`)
        }

        return{
            totallist,
            isLoaded,
            more,
            isModal,
            addrData,
            carData
        }
    },
}
</script>