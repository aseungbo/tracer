<template>
  <div>
    <VApp>
      <v-app-bar>
        <div class="w-100 d-flex justify-space-between align-center px-2 px-sm-16">
          <div class="d-flex align-center flex-shrink-0" style="gap: 1rem">
            <v-icon :color="twColors.palette.blue" size="2rem">mdi-lightning-bolt</v-icon>
            <NuxtLink style="cursor: pointer">
              <span class="text-h6">Tracer</span>
            </NuxtLink>
          </div>
          <div class="d-flex" style="gap: 1rem">
            <div class="d-flex" style="gap: 1rem">
              <v-btn>
                <span class="text-subtitle-2">로그인</span>
              </v-btn>
              <v-btn variant="flat" :color="twColors.palette.blue">
                <span class="text-subtitle-2" :style="`color: ${twColors.palette.white};`">
                  사전예약
                </span>
              </v-btn>
            </div>
          </div>
        </div>
      </v-app-bar>
      <VMain :style="`background-color: ${twColors.palette.gray};`">
        <VContainer>
          <NuxtPage :style="`min-height: ${pageHeight}`" />
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
