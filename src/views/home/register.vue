<template scoped>
  <div class="register">
      <form v-on:submit="handleSubmit">
        <b-container>
            <b-row>
                <b-col sm="6">
                    <div class="register-form general-information">
                        <SaMuBadge text="1">{{$t('form.general_info')}}</SaMuBadge>
                        <div class="register-form__body">
                            <SaMuInput :placeholder="$t('form.first_name')" type="text" v-model="dto.firstName"/>
                            <SaMuInput :placeholder="$t('form.last_name')" type="text" v-model="dto.lastName"/>
                            <SaMuInput :placeholder="$t('form.birthday')" type="text" v-model="dto.birthday"/>
                            <SaMuInput :placeholder="$t('form.address')" type="text" v-model="dto.address"/>
                            <SaMuInput :placeholder="$t('form.city')" type="text" v-model="dto.city"/>
                            <SaMuInput :placeholder="$t('form.postalcode')" type="text" v-model="dto.postalcode"/>
                            <SaMuInput :placeholder="$t('form.country')" type="text" v-model="dto.country"/>
                        </div>
                    </div>
                </b-col>
                <b-col sm="6">
                    <div class="register-form digital-information">
                        <SaMuBadge text="2">{{$t('form.digital_data')}}</SaMuBadge>
                        <div class="register-form__body">
                            <SaMuInput :placeholder="$t('form.ipcn')" type="text" v-model="dto.pcn"/>
                            <SaMuInput :placeholder="$t('form.phonenumber')" type="text" v-model="dto.phoneNumber"/>
                            <SaMuInput :placeholder="$t('form.email')" type="text" v-model="dto.email"/>
                            <SaMuInput :placeholder="$t('form.password')" type="password" v-model="dto.password"/>
                            <SaMuInput :placeholder="$t('form.repeat_password')" type="password" v-model="password2"/>
                            <SaMuButton size="small" type="submit">{{$t('form.send')}}</SaMuButton>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
      </form>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import SaMuButton from '@/components/basic/SaMuButton.vue';
import SaMuInput from '@/components/basic/SaMuInput.vue';
import SaMuBadge from '@/components/basic/SaMuBadge.vue';
import { AuthorizationService } from '@/openapi/api/authorization.service';
import { MeDTO } from '@/openapi/model/meDTO';
import openApiContainer from '@/openApiContainer';
import { RegisterDTO } from '@/openapi/model/registerDTO';
import { User } from '@/openapi/model/user';


@Component({
    components: {
        SaMuButton,
        SaMuInput,
        SaMuBadge,
    },

})
export default class Register extends Vue {

    private password2 = '';
    private dto: RegisterDTO = {
        firstName: '',
        lastName: '',
        birthday: '',
        address: '',
        city: '',
        postalcode: '',
        country: '',
        email: '',
        phoneNumber: '',
        pcn: '',
        password: '',
    };

    private authorizationService: AuthorizationService = openApiContainer.get<AuthorizationService>('AuthorizationService');

    constructor() {
        super();
        const code = new URLSearchParams(window.location.search.substring(1)).get('code');

        if (code) {
            this.authorizationService.authorizationMeGet(code)
            .subscribe((res: MeDTO) => {
                this.dto.firstName = res.firstName;
                this.dto.lastName = res.lastName;
                this.dto.email = res.email;
                this.dto.pcn = res.pcn;
            });
        }


    }

    private handleSubmit(submitEvent: Event) {
        submitEvent.preventDefault();

        if (this.password2 === this.dto.password) {
            this.authorizationService.authorizationRegisterPost(this.dto).subscribe(() => {
                // TODO add redirect to profile page
            }, (err) => {
                Vue.toasted.show(this.$t('error.form_not_filled_in_correctly').toString(), {duration: 5000, type: 'error'});
            });

        } else {
            Vue.toasted.show(this.$t('error.password_not_match').toString(), {duration: 5000, type: 'error'});
        }
    }
}
</script>
<style lang="scss" scoped>
.register {
    height: calc(100vh - 177px);

    form {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    &-form.general-information {
        .register-form__body {
            margin-top: 18px;
            width: 100%;
        }
    }

    &__border {
        grid-area: line;
        width: 0px;
        border: 0.5px #e2e2e2 solid;
    }

    &-form.digital-information {
        .register-form__body {
            margin-top: 18px;
            width: 100%;
            text-align: right;
        }
    }
}
</style>

<i18n src="@/lang/Register.json"></i18n>