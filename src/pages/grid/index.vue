<template>
  <div class="page-grid">
    <section class="media">
      <h1>Movies</h1>
      <ul class="media-list">
        <li
            v-for="(movie, index) in list"
            :key="index">
          <router-link
              :to="`/movie/${ movie.id }`">
            <img
                class="cover"
                :src="movie.poster"
                :alt="movie.name">
            <h2>{{ movie.name }}</h2>
            <div class="info">
              <time
                  :datetime="movie.time">{{ movie.time }}</time>
              <span class="rating">{{ movie.rating }}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </section>
    <section class="filter">filter</section>
  </div>
</template>

<script
    setup
    lang="ts">
import {
  ref,
} from 'vue';

const posterImage = 'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=200&h=300&auto=format&fit=crop';

const movie = {
  id: '123',
  name: 'Alien',
  time: '1979-05-25',
  poster: posterImage,
  rating: 8.2,
};

const list = ref(Array(20).fill(movie));
</script>

<style
    scoped
    lang="scss"
    src="./index.scss"></style>
