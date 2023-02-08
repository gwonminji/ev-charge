<template>
    <main>
        <div class="inner">
            <div class="login-form">
                <div class="login-form__welcome">
                    <h1><span>WELCOME!</span> <font-awesome-icon icon="fa-solid fa-hand" /></h1>
                </div>
                <div class="login-form__group">
                    <h2>USER LOGIN</h2>
                    <div class="form-box">
                        <label for="loginId" class="form-box__label" ref="uidInput">ID</label>
                        <input type="text" id="loginId" class="form-box__input" placeholder="ID를 입력하세요.">
                    </div>
                    <div class="form-box">
                        <label for="loginPass" class="form-box__label">password</label>
                        <input type="text" id="loginPass" class="form-box__input" placeholder="password를 입력하세요.">
                    </div>
                    <a href="/main" class="login-form__btn login-form__btn--login" title="Login">Login</a>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    setup() {

        return{
        }
    },
}
</script>