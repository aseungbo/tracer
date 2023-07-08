<template>
  <div>
    <VApp>
      <VMain :style="`background-color: ${twColors.palette.gray}; min-height: ${pageHeight};`">
        <VContainer>
          <NuxtPage />
        </VContainer>
      </VMain>
    </VApp>
  </div>
</template>

<script setup>
const pageHeight = ref("");

onMounted(() => {
  const viewportHeight = window.innerHeight;
  const desiredHeight = Math.round(viewportHeight * 0.85);
  pageHeight.value = `${desiredHeight}px`;
});
</script>
