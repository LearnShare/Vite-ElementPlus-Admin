<template>
  <el-table
      :data="data">
    <el-table-column
        label="Source">
      <template #default="scope">
        <a
            v-if="scope.row.url"
            :href="scope.row.url"
            target="_blank">{{ scope.row.source }}</a>
        <span
            v-else>{{ scope.row.source }}</span>
      </template>
    </el-table-column>
    <el-table-column
        label="PV"
        prop="pv"
        width="100"
        align="right" />
    <el-table-column
        label="UV"
        prop="uv"
        width="100"
        align="right" />
  </el-table>
</template>

<script
    setup
    lang="ts">
const data = [
  {
    source: 'Direct',
    url: '',
    pv: 652,
    uv: 173,
  },
  {
    source: 'Github',
    url: 'https://github.com/',
    pv: 238,
    uv: 95,
  },
  {
    source: 'Google',
    url: 'https://google.com/',
    pv: 177,
    uv: 48,
  },
];
</script>
