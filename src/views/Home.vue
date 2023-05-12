<template>
  <a-layout class="home">
    <a-layout-header>
      <div>
        <div>找实习timeline</div>
        <div>tb74***2542</div>
      </div>
    </a-layout-header>
    <a-layout>
      <a-layout-sider>
        <a-menu
          style="width: 100%;height:100%"
          :default-selected-keys="['1']"
          mode="inline"
          @click="handleClick"
        >
          <a-menu-item key="1">
            <a-icon type="user" />
            <span>个人首页</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="menu" />
            <span>管理中心</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
    }
  },
  methods: {
    handleClick() {

    }
  }
};
</script>

<style lang="less" scoped>
.home {
  width: 100vw;
  height: 100vh;

  .ant-layout-header {
    background-color: #fff;
    color: #666;
    border-bottom: 1px solid #e8ebee;
  }

  .ant-layout-sider {
    background: #fff;
    color: #fff;
    line-height: 120px;
  }

  .ant-layout-content {
    background: #f7f8fa;
  }

  .ant-menu-item {
    margin: 0;
    height: 50px;
    display: flex;
    align-items: center;
  }
}
</style>
