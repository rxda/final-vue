<script setup lang="ts">
  import { RouterView, RouterLink } from 'vue-router';
</script>


<template>
  <div class="app">
    <h2>vue路由测试</h2>
    <div class="navigate">
        <RouterLink to="/">首页</RouterLink>
        <RouterLink :to="{path:'/news'}">新闻(query)</RouterLink>
        <RouterLink :to="{path:'/newsParams'}">新闻(params)</RouterLink>
        <RouterLink :to="{path:'/newsProps'}">新闻(props)</RouterLink>
        <RouterLink :to="{path:'/newsFuncRoute'}">新闻(funcRoute)</RouterLink>
        <RouterLink :to="{name:'guanyu'}">关于</RouterLink>
    </div>

    <div class="main-content">
        <RouterView/>
    </div>
  </div>
  
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.app {
  min-height: 100vh;
  background: #f0f4f8;
  padding: 2rem;
}

h2 {
  text-align: center;
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

.navigate {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

/* 适配router-link的样式 */
.navigate router-link {
  display: inline-block;
  text-decoration: none;
  color: #3498db;
  font-weight: 500;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  background: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* 悬停效果 */
.navigate router-link:hover {
  color: #fff;
  background: #3498db;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(52, 152, 219, 0.3);
}

/* 激活路由样式 */
.navigate router-link.router-link-exact-active {
  color: white !important;
  background: #2980b9;
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(41, 128, 185, 0.4);
}

/* 下划线动画 */
.navigate router-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: #2980b9;
  transition: all 0.3s ease;
}

.navigate router-link:hover::after {
  width: 100%;
  left: 0;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  min-height: 400px;
  color: #34495e;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .app {
    padding: 1rem;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  .navigate {
    gap: 1rem;
  }
  
  .navigate router-link {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
  
  .main-content {
    padding: 1.5rem;
  }
}
</style>