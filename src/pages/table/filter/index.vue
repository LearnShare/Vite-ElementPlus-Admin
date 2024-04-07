<template>
  <el-popover
      :width="260"
      :visible="visible">
    <template #reference>
      <el-button
          :icon="IconFilter"
          @click="toggleVisible">Filter</el-button>
    </template>
    <el-form
        label-position="top"
        :data="form">
      <el-form-item
          label="Search">
        <el-input
            v-model="form.search"
            placeholder="Search products" />
      </el-form-item>
      <el-form-item
          label="Categories">
        <el-select
            v-model="form.categories"
            multiple
            collapse-tags>
          <el-option
              v-for="category in props.categories"
              :key="category.id"
              :label="category.name"
              :value="category.id" />
        </el-select>
      </el-form-item>
      <el-form-item class="actions">
        <el-button
            @click="cancel">Cancel</el-button>
        <el-button
            type="primary"
            @click="submit">Search</el-button>
      </el-form-item>
    </el-form>
  </el-popover>
</template>

<script
    setup
    lang="ts">
import {
  ref,
} from 'vue';
import {
  Filter as IconFilter,
} from '@element-plus/icons-vue';

interface TypeFilter {
  search?: string;
  categories? : [];
}

const props = defineProps<{
  categories: [],
}>();

const emit = defineEmits<{
  change: TypeFilter,
}>();

// #region popover visible
const visible = ref(false);

function toggleVisible() {
  visible.value = !visible.value;
}

function cancel() {
  visible.value = false;
}
// #endregion

// #region filter form
const defaultForm = {
  search: '',
  categories: [],
};

const form = ref<TypeFilter>(defaultForm);

function submit() {
  emit('change', form.value);
  visible.value = false;
}
// #endregion
</script>

<style
    scoped
    lang="scss"
    src="./index.scss"></style>
