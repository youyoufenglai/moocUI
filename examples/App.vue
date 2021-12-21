<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <DemoComponent/>

    <CardComponent
      :imgSrc="'images/3.png'"
      :summary="'WebRTC源码级深度解析，进阶大厂高级音视频开发者'"
    />
    <br>
    <CardComponent
      :imgSrc="'images/1.png'"
      :summary="'Vue3 从入门到实战 进阶式掌握完整知识体系'"
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 · 1923人报名 </div>
          <div class="price">￥348.00</div>
        </div>
      </template>
    </CardComponent>
    <br>
    <CardComponent
      :imgSrc="'images/2.png'"
      :width="370"
      :imgHeight="90"
    >
      路线伴随Web前端工程师一路成长，彻底搞懂不同阶段的面试重点，高效拿下offer。
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">4步骤•5门课 </div>
          <div class="price">10117收藏</div>
        </div>
      </template>
    </CardComponent>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer{
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level{
  color: #9199a1;
  margin-bottom: 8px;
}
.price{
  color: #f01414;
}

.footer-spring{
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
