import { defineStore } from 'pinia'

import axios from "axios"
import { computed } from 'vue'

export const useListStore = defineStore('list', {
    state: () => ({
        list: [],
        isLoading: false
    }),
    actions: {
        // fetchList(){
        //     axios.get('https://cors-anywhere.herokuapp.com/https://bigdata.kepco.co.kr/openapi/v1/EVcharge.do?metroCd=all&apiKey=51h3g3RtSbC236TmM2s7B5D5de0Bj50xFGP1c8f6&returnType=json');
        // }
        fetchList(){
            axios.get('https://cors-anywhere.herokuapp.com/https://bigdata.kepco.co.kr/openapi/v1/EVcharge.do?metroCd=41&apiKey=51h3g3RtSbC236TmM2s7B5D5de0Bj50xFGP1c8f6&returnType=json')
            // axios.get('./data/list.json')
                .then(res => {
                    this.list = res.data.data;
                    if(this.list.length > 0){
                        this.isLoading = true;
                    }
                    console.log('response data : ', this.list);
                })
                .catch(error => {
                    console.log('error : ', error.data);
                    alert('데이터 불러오기 실패');
                });            
        }
        // async fetchList(){
        //     const PROXY = 'https://cors-anywhere.herokuapp.com';
        //     const BASE_URL = 'https://bigdata.kepco.co.kr/openapi/v1/EVcharge.do?';
        //     const METRO_ALL = 'all';
        //     const API_KEY = '51h3g3RtSbC236TmM2s7B5D5de0Bj50xFGP1c8f6'; 
        //     const RETURN_TYPE = 'json';
        //     const URL = `${PROXY}/${BASE_URL}metroCd=${METRO_ALL}&apiKey=${API_KEY}&returnType=${RETURN_TYPE}`;

        //     try{
        //         const data = await axios.get(URL);

        //         this.list = data.data
        //     }catch(error){
        //         console.log(error);
        //     }
        // }
    },
    getters: {
        getLoadingState(state){
            const loading = computed(() => {
                console.log("computed loading : ", state.isLoading)
                return state.isLoading;
            })
            return loading;
        },
        getLists(state){
            return state.list;
        }
    }
})