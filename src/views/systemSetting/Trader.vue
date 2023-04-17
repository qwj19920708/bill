<script lang="ts" setup>
import { reactive, computed, watch } from "vue";

const data = reactive({
  province: "",
  city: "",
  county: "",
  options: [
    {
      label: "安徽省",
      value: "anhui",
      children: [
        {
          label: "合肥市",
          value: "hefei",
          children: [
            { label: "肥东县", value: "feidong" },
            { label: "肥西县", value: "feixi" },
          ],
        },
        {
          label: "安庆市",
          value: "anqin",
          children: [{ label: "县1", value: "xian1" }],
        },
      ],
    },
    {
      label: "江西省",
      value: "jiangxi",
      children: [
        {
          label: "南昌市",
          value: "nanchang",
          children: [{ label: "县2", value: "xian2" }],
        },
        {
          label: "九江市",
          value: "jiujiang",
          children: [{ label: "县3", value: "xian3" }],
        },
      ],
    },
  ],
});

const provinceOptions = computed(() => {
  return data.options;
});

const cityOptions = computed(() => {
  const province = data.options.find((item) => item.value === data.province);
  if (!province) return [];
  return province.children;
});

const countyOptions = computed(() => {
  const city = (cityOptions.value || []).find(
    (item) => item.value === data.city
  );
  if (!city) return [];
  return city.children;
});

watch(
  () => provinceOptions,
  (newVal) => {
    data.province = newVal.value[0].value;
  },
  { deep: true, immediate: true }
);

watch(
  () => cityOptions,
  (newVal) => {
    console.log(newVal.value);
    data.city = newVal.value[0].value;
  },
  { deep: true, immediate: true }
);

watch(
  () => countyOptions,
  (newVal) => {
    console.log(newVal.value);
    data.county = newVal.value[0].value;
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <div class="traderWrap">
    <span>省：</span>
    <el-select v-model="data.province" placement="bottom-start">
      <el-option
        v-for="(option, key) in provinceOptions"
        :label="option.label"
        :value="option.value"
        :key="key"
      ></el-option>
    </el-select>
    <span>市：</span>
    <el-select v-model="data.city">
      <el-option
        v-for="(option, key) in cityOptions"
        :label="option.label"
        :value="option.value"
        :key="key"
      ></el-option
    ></el-select>
    <span>县：</span>
    <el-select v-model="data.county">
      <el-option
        v-for="(option, key) in countyOptions"
        :label="option.label"
        :value="option.value"
        :key="key"
      ></el-option
    ></el-select>
  </div>
</template>

<style scoped lang="scss">
.traderWrap {
  padding: 6px;
}
</style>
