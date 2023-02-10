<template>
    <div class="modal modal--sm">
        <div class="modal-content">
            <div class="modal__header">
                <button type="button" class="modal-close" title="닫기" @click="closeModal()"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
            </div>
            <div class="modal__body">
                <ul class="list list--more">
                    <li class="list__item">
                        <p class="list__val list__val--addr">
                            <span class="list__ico"><font-awesome-icon icon="fa-solid fa-map" /></span>
                            {{ addr }}
                            <button type="button" class="list__btn" @click="copyAddr()" title="주소 복사"><font-awesome-icon icon="fa-solid fa-copy" /></button>
                        </p>
                        <p class="list__val list__val--car">
                            <span class="list__ico"><font-awesome-icon icon="fa-solid fa-car" /></span>
                            {{ car }}
                        </p>
                    </li>
                    <!-- <li class="list__item">
                        <p class="list__val list__val--car">
                            <span class="list__ico"><font-awesome-icon icon="fa-solid fa-car" /></span>
                            {{ car }}
                        </p>
                    </li> -->
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
// import { ref } from 'vue'

export default {
    props: {
        addr: {
            type: String
        },
        car: {
            type: String
        }
    },
    emits: ["isModal"],
    setup(props, context) {
        // console.log(`가져온 값 : ${props.addr}`);
        const { emit } = context;
        // const copy = ref('');

        const closeModal = () => {
            emit("isModal", false)
        }

        const copyAddr = () => {
            // copy.value = props.addr;
            console.log("복사", props.addr)
            navigator.clipboard.writeText(props.addr).then(() => {
                alert('주소가 복사되었습니다.');
            })
        }

        return{
            closeModal,
            copyAddr,
            // copy
        }
    },
}
</script>