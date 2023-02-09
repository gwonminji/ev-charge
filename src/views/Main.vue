<template>
    <main>
        <div class="inner">
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
        </div>
        <Menu />
    </main>
</template>
<script>
import Menu from '@/components/Menu.vue'
export default {
    components:{
        Menu
    },
    setup() {
        return{

        }
    },
}
</script>