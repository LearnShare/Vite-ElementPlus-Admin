<template>
  <div class="page-table">
    <div class="toolbar">
      <el-input
          v-model="filter.search"
          placeholder="Search products" />
      <el-select
          v-model="filter.category"
          multiple
          collapse-tags>
        <el-option
            v-for="category in categories"
            :key="category.id"
            :label="category.name"
            :value="category.id" />
      </el-select>
    </div>
    <div class="table">
      <el-table
          :data="data"
          stripe>
        <el-table-column
            label="Name"
            prop="name" />
        <el-table-column
            label="Category"
            prop="category" />
        <el-table-column
            label="Stock"
            prop="stock"
            align="right"
            width="120" />
        <el-table-column
            label="Sold"
            prop="sold"
            align="right"
            width="120" />
        <el-table-column
            label="Cost"
            prop="cost"
            align="right"
            width="120" />
        <el-table-column
            label="Price"
            prop="price"
            align="right"
            width="120" />
      </el-table>
    </div>
    <div class="footer">
      <el-pagination
          background
          layout="prev, pager, next"
          :pager-count="5"
          :total="total"
          :page-size="filter.size"
          :current-page="filter.page"
          @current-change="pageUpdated" />
    </div>
  </div>
</template>

<script
    setup
    lang="ts">
import {
  ref,
} from 'vue';

const filter = ref({
  page: 1,
  size: 10,
  search: '',
  categories: [],
});

const total = 100;

// options
const categories = [
  {
    id: 'vegetables',
    name: 'Vegetables',
  },
  {
    id: 'fruits',
    name: 'Fruits',
  },
  {
    id: 'meat',
    name: 'Meat',
  },
  {
    id: 'bread',
    name: 'Bread',
  },
];

const data = [
  {
    id: 1,
    name: 'Tomato',
    category: 'Vegetables',
    stock: 123,
    cost: 1.26,
    sold: 77,
    price: 1.99,
  },
  {
    id: 2,
    name: 'Potato',
    category: 'Vegetables',
    stock: 364,
    cost: 0.52,
    sold: 136,
    price: 1.2,
  },
  {
    id: 3,
    name: 'Apple',
    category: 'Fruits',
    stock: 123,
    cost: 1.26,
    sold: 77,
    price: 1.99,
  },
  {
    id: 4,
    name: 'Beef',
    category: 'Meat',
    stock: 123,
    cost: 3.54,
    sold: 77,
    price: 6.99,
  },
  {
    id: 5,
    name: 'Tomato',
    category: 'Vegetables',
    stock: 123,
    cost: 1.26,
    sold: 77,
    price: 1.99,
  },
  {
    id: 6,
    name: 'Potato',
    category: 'Vegetables',
    stock: 364,
    cost: 0.52,
    sold: 136,
    price: 1.2,
  },
  {
    id: 7,
    name: 'Apple',
    category: 'Fruits',
    stock: 123,
    cost: 1.26,
    sold: 77,
    price: 1.99,
  },
  {
    id: 8,
    name: 'Beef',
    category: 'Meat',
    stock: 123,
    cost: 3.54,
    sold: 77,
    price: 6.99,
  },
];

function pageUpdated(page) {
  filter.value.page = page;
}
</script>

<style
    scoped
    lang="scss"
    src="./index.scss"></style>
