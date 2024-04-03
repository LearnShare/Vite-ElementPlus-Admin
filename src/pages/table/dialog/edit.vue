<template>
  <el-dialog
      :model-value="show"
      :title="form.id ? 'Update item' : 'Create item'"
      @close="close">
    <el-form
        v-model="form"
        label-width="80px"
        label-position="right">
      <el-form-item
          label="Name">
        <el-input
            v-model="form.name" />
      </el-form-item>
      <el-form-item
          label="Stock">
        <el-input
            v-model="form.stock" />
      </el-form-item>
      <el-form-item
          label="Sold">
        <el-input
            v-model="form.sold" />
      </el-form-item>
      <el-form-item
          label="Cost">
        <el-input
            v-model="form.cost" />
      </el-form-item>
      <el-form-item
          label="Price">
        <el-input
            v-model="form.price" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="actions">
        <el-button
            @click="close">Cancel</el-button>
        <el-button
            type="primary"
            @click="save">Save</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script
    setup
    lang="ts">
import {
  ref,
  watch,
} from 'vue';

const props = defineProps<{
  show: boolean,
  data?: object,
}>();

const emit = defineEmits<{
  close: [],
}>();

const defaultForm = {
  name: '',
  stock: 0,
  sold: 0,
  cost: 0,
  price: 0,
};

const form = ref(defaultForm);

watch(
  () => props.data,
  (newItem) => {
    form.value = newItem || defaultForm;
  },
);

function close() {
  emit('close');
}

function save() {
  close();
}
</script>
