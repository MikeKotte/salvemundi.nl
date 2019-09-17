<template>
  <div class="profile">
      <div class="profile__info">
        <SaMuCard title="Donald Duck">
            <img src="https://avatarfiles.alphacoders.com/121/121736.jpg" alt="Donald Duck">
            <p>01-01-2000</p>
            <p>Schatkistlaan 19</p>
            <p>Ducktown</p>
            <p>6060 SS</p>
            <hr>
            <p>123456</p>
            <p>06-12345678<p>
            <p>donald.duck@gmail.com</p>
            <SaMuButton text="Aanpassen" size="small" />
        </SaMuCard>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SaMuButton from '@/components/basic/SaMuButton.vue';
import SaMuInput from '@/components/basic/SaMuInput.vue';
import SaMuBadge from '@/components/basic/SaMuBadge.vue';
import SaMuCard from '@/components/basic/SaMuCard.vue';

@Component({
    components: {
        SaMuButton,
        SaMuCard,
    },
})
export default class Profile extends Vue {}
</script>
<style lang="scss">
.profile {
    padding-top: 200px;
    display: flex;
    margin-left: 10%;
    margin-right: 10%;

    &__info {
        flex: 1;

        img {
            position: absolute;
            top: 5px;
            right: 5px;
            border: 1px solid #663265;
            height: 100px;
            width: 100px;
            border-radius: 50%;
        }
    }
}
</style>