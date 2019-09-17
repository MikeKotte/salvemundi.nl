<template>
  <div class="SaMuCard">
    <SaMuHeader v-if="title" class="SaMuCard__title" :text="title"/>
    <slot/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SaMuHeader from '@/components/basic/SaMuHeader.vue';

@Component({
  components: {
      SaMuHeader,
  },
  props: ['title'],
})
export default class SaMuCard extends Vue {}
</script>
<style lang="scss">
.SaMuCard {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  position: relative;
  padding: 2px 16px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  &__title {
    text-align: left;
  }
}
</style>