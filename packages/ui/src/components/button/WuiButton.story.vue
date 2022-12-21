<script lang="ts" setup>
import { Colors, Sizes } from '../../models/enums'
import WuiButton from './WuiButton.vue'
function initState() {
  return {
    label: 'Awiwi',
    type: Colors.PRIMARY,
    size: Sizes.NORMAL,
    disabled: false,
    outline: false,
    circle: false,
    round: false,
    pulse: false,
    loading: false,
    loadingTakeover: false,
    wide: false,
    glass: false,
    block: false,
    text: false,
    active: false,
    link: {},
  }
}
</script>
<template>
  <Story
    title="WuiButton"
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <WuiButton
          :type="state.type"
        >
          {{ state.label }}
        </WuiButton>
      </template>
      <template #controls="{ state }">
        <HstSelect v-model="state.type" title="Type" :options="Object.values(Colors)" />
      </template>
    </Variant>
  </Story>
</template>
