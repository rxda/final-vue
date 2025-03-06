<template>
  <div class="news-container">
    <div class="news-list">
      <ul>
        <li v-for="news in newsList" :key="news.id">
          <!-- 第一种写法，模板字符串 -->
          <!-- <RouterLink :to="`/newsParams/detail/${news.id}/${news.title}/${news.content}`">
          {{ news.title }}
          </RouterLink> -->
          <RouterLink :to="{name:'detailProps', params: {id: news.id, title: news.title, content: news.content}}">
            {{ news.title }}
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="news-content">
      <RouterView/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface News {
  id: number;
  title: string;
  content: string;
}

const newsList = ref<News[]>([
  { id: 1, title: 'pNews1', content: 'Content1' },
  { id: 2, title: 'pNews2', content: 'Content2' },
  { id: 3, title: 'pNews3', content: 'Content3' },
]);

</script>

<style scoped>
.news-container {
  display: flex;
  width: 100%;
}

.news-list {
  width: 30%;
  border-right: 1px solid #ccc;
  padding: 10px;
}

.news-content {
  width: 70%;
  padding: 10px;
}

.news-list ul {
  list-style: none;
  padding: 0;
}

.news-list li {
  cursor: pointer;
  padding: 5px 0;
}

.news-list li:hover {
  background-color: #eee;
}
</style>
