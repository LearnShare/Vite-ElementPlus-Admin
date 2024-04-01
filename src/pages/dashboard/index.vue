<template>
  <div class="page-dashboard">
    <section class="default">
      <h2>Default</h2>
      <el-row
          :gutter="16">
        <el-col
            :span="6">
          <el-statistic
              title="PV"
              :value="1234" />
        </el-col>
        <el-col
            :span="6">
          <el-statistic
              title="UV"
              :value="527" />
        </el-col>
        <el-col
            :span="6">
          <el-statistic
              title="Registration"
              :value="135" />
        </el-col>
        <el-col
            :span="6">
          <el-statistic
              title="Payment"
              :value="20" />
        </el-col>
      </el-row>
    </section>
    <section class="styled">
      <h2>Styled</h2>
      <el-row
          :gutter="16">
        <el-col
            :span="6">
          <el-statistic
              title="PV"
              :value="1234" />
        </el-col>
        <el-col
            :span="6">
          <el-statistic
              title="UV"
              :value="527" />
        </el-col>
        <el-col
            :span="6">
          <el-statistic
              title="Registration"
              :value="135" />
        </el-col>
        <el-col
            :span="6">
          <el-statistic
              title="Payment"
              :value="20" />
        </el-col>
      </el-row>
    </section>
    <section class="charts">
      <h2>Charts</h2>
      <el-row
          :gutter="16">
        <el-col
            :span="8">
          <statistic-chart />
        </el-col>
        <el-col
            :span="8">
          <statistic-chart />
        </el-col>
        <el-col
            :span="8">
          <statistic-chart />
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script
    setup
    lang="ts">
import StatisticChart from './charts/statistic/index.vue';
</script>

<style
    scoped
    src="./index.scss"
    lang="scss"></style>
