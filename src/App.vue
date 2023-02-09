<template>
  <div class="container">
    <Header />
    <router-view class="main" :class="curClassName + '-page'"/>
    <Footer />
  </div>
</template>

<script>
import { onMounted, computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components:{
    Header,
    Footer
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    // let curPage = ref('');

    let routeName = ref('');

    onMounted(async () => {
      await router.isReady()
      routeName = route.name;
      console.log('route name : ', route.name)
    })


    const curClassName = computed(() => {
      // console.log('computed route name : ', route.name)
      routeName = route.name;
      console.log('computed route name : ', route.name)

      return routeName;
    })

    return{
      route,
      routeName,
      curClassName
    }
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/style';
.container{
  max-width: $desktop-container;
  margin: 0 auto;
  background: $color-lightgray;
  border-left: 1px solid $color-lightgray;
  border-right: 1px solid $color-lightgray;
}
.main{
  min-height: calc(100vh - #{$header-height} - #{$footer-height});
}
.inner{
  width: 100%;
  padding: 0 20px;
}
</style>