<template>
  <div class="container">
    <div class="loginForm">
      <div class="formHeader">
        <div class="headerTitle">登录</div>
        <div class="qrArea">
          <div>
            <img
              src="../assets/qrcode_ff9000.png"
              style="width: 40px; height: 40px"
            />
          </div>
        </div>
      </div>
      <div class="formBody">
        <a-form :form="form" @submit="handleSubmit">
          <a-form-item>
            <a-input
              v-decorator="[
                'userName',
                {
                  rules: [
                    { required: true, message: '请输入你的邮箱!' },
                    { type: 'email', message: '输入的邮箱不合法!' },
                  ],
                },
              ]"
              placeholder="请输入邮箱"
            >
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [{ required: true, message: '请输入你的密码!' }],
                },
              ]"
              type="password"
              placeholder="请输入登录密码"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-checkbox
              v-decorator="[
                'remember',
                {
                  valuePropName: 'checked',
                  initialValue: false,
                },
              ]"
            >
              记住我
            </a-checkbox>
            <a class="login-form-forgot" href=""> 忘记密码 </a>
            <a-button
              type="primary"
              html-type="submit"
              class="login-form-button"
            >
              登录
            </a-button>
            或
            <a href=""> 注册 </a>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.$router.push('/home')
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/login-bg.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;

  .loginForm {
    position: absolute;
    left: 50%;
    top: 15%;
    margin-left: -180px;
    background: #fff;
    border-radius: 4px;
    width: 360px;
    height: 350px;
    padding: 20px;
    display: flex;
    flex-direction: column;

    .formHeader {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .headerTitle {
        font-size: 16px;
        font-weight: 700;
      }

      .qrArea {
        display: flex;
      }
    }

    .formBody {
      flex: 1 1 auto;
      padding: 20px 0;

      .login-form-forgot {
        float: right;
      }

      .login-form-button {
        width: 100%;
      }
    }
  }
}
</style>
