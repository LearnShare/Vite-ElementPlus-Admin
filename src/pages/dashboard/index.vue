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
    <section class="progress">
      <h2>Progress</h2>
      <el-row
          :gutter="16">
        <el-col
            class="issues"
            :span="12">
          <h3>Issues</h3>
          <el-progress
              :percentage="(2 / 6) * 100"
              :show-text="false"
              status="warning" />
          <el-row
              :gutter="16">
            <el-col
                :span="12">
              <el-statistic
                  title="Open"
                  :value="2" />
            </el-col>
            <el-col
                :span="12">
              <el-statistic
                  title="Closed"
                  :value="4" />
            </el-col>
          </el-row>
        </el-col>
        <el-col
            class="tasks"
            :span="12">
          <h3>Tasks</h3>
          <el-progress
              :percentage="(12 / 29) * 100"
              :show-text="false" />
          <el-row
              :gutter="16">
            <el-col
                :span="12">
              <el-statistic
                  title="Done"
                  :value="12" />
            </el-col>
            <el-col
                :span="12">
              <el-statistic
                  title="Total"
                  :value="29" />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </section>
    <section class="tables">
      <h2>Tables</h2>
      <el-row
          :gutter="16">
        <el-col
            :span="12">
          <h3>Visitor Source</h3>
          <source-table />
        </el-col>
        <el-col
            :span="12">
          <h3>Visitor Source</h3>
          <source-table />
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script
    setup
    lang="ts">
import StatisticChart from './charts/statistic/index.vue';
import SourceTable from './tables/source/index.vue';
</script>

<style
    scoped
    src="./index.scss"
    lang="scss"></style>
