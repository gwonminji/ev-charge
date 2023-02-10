<template>
    <main>
        <div class="inner">
            <div v-if="totallist.getLoadingState">
                가져온 값 완료되면 : {{ totallist.getLists }}
            </div>
            <div v-else>
                완료 전 가져온 상태 : {{ totallist.getLoadingState }}
            </div>

            <ul class="total">
                <li class="total__item">
                    리스트1
                </li>
                <li class="total__item">
                    리스트2
                </li>
                <li class="total__item">
                    리스트3
                </li>
            </ul>
            <!-- <button type="button" @click="list.fetchList()">get data</button> -->
        </div>
        <Menu />
    </main>
</template>
<script>
import { onMounted } from 'vue'
import { useListStore } from '@/stores/list'
import Menu from '@/components/Menu.vue'

export default {
    components:{
        Menu
    },
    setup() {
        const totallist = useListStore();

        onMounted(() => {
            totallist.fetchList()
        })

        // watch(
        //     totallist.loadingState,
        //     (cur, prev) => {
        //         console.log('변경 전', prev);
        //         console.log('변경 후', cur);
        //     },
        //     {
        //         immediate: true
        //     }
        // )

        return{
            totallist,
        }
    },
}
</script>