<template>
    <div class="gnb" :class="isExpand ? 'gnb--expand' : ''">
        <button type="button" class="gnb__btn" @click="toggleGnb">
            <font-awesome-icon icon="fa-solid fa-bars" />
        </button>
        <ul class="gnb-list">
            <li class="gnb-list__item">
                <a href="/main" class="gnb-list__link" title="메인으로">
                    <font-awesome-icon icon="fa-solid fa-house" />
                </a>
            </li>
            <li class="gnb-list__item">
                <a href="/main" class="gnb-list__link" title="검색">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </a>
            </li>
            <li class="gnb-list__item">
                <a href="/main" class="gnb-list__link" title="즐겨찾기">
                    <font-awesome-icon icon="fa-solid fa-star" />
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
import { ref } from 'vue'

export default {
    setup() {
        const isExpand = ref(false);

        const toggleGnb = () => {
            isExpand.value = !isExpand.value
        }

        return{
            toggleGnb,
            isExpand
        }
    },
}
</script>