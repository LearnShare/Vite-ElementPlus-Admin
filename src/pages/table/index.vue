<template>
  <div class="page-table">
    <div class="toolbar">
      <el-button
          type="primary"
          @click="createItem">Create</el-button>
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
        <el-table-column
            label="Actions"
            width="100">
          <template #default="scope">
            <el-button
                text
                type="primary"
                @click="updateItem(scope.row)">Update</el-button>
          </template>
        </el-table-column>
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
    <edit-dialog
        :show="editDialogVisible"
        :data="editDialogData"
        @close="hideEditDialog" />
  </div>
</template>

<script
    setup
    lang="ts">
import {
  ref,
} from 'vue';

import EditDialog from './dialog/edit.vue';

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

// edit dialog
const editDialogVisible = ref(false);
const editDialogData = ref(null);

function createItem() {
  editDialogData.value = null;

  editDialogVisible.value = true;
}
function updateItem(item) {
  editDialogData.value = {
    ...item,
  };

  editDialogVisible.value = true;
}
function hideEditDialog() {
  editDialogVisible.value = false;
  editDialogData.value = null;
}
</script>

<style
    scoped
    lang="scss"
    src="./index.scss"></style>
