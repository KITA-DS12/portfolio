<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const isShow = ref(false);
const changeShow = () => {
  isShow.value = !isShow.value;
  console.log(isShow.value);
};

const store = useStore();
const page = computed(() => {
  return store.state.page;
});
</script>
<template>
  <div v-show="isShow" class="balloon-right">
    {{ page }}
  </div>
  <v-img
    @click="changeShow"
    width="50px"
    src="src/assets/icon_kita.png"
    style="position: fixed; bottom: 15px; right: 15px"
  />
</template>
<style>
.balloon-right {
  position: fixed;
  bottom: 75px;
  right: 100px;
  display: inline-block;
  width: 150px;
  height: 90px;
  line-height: 90px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  background: #d1c4e9;
  border-radius: 50%;
}
.balloon-right:before {
  content: "";
  position: absolute;
  top: 50%;
  right: -25px;
  margin-top: -15px;
  border: 15px solid transparent;
  border-left: 15px solid #d1c4e9;
  z-index: 0;
}
</style>
