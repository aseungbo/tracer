<template>
  <div>
    <VApp>
      <VMain :style="`background-color: ${twColors.palette.gray}; min-height: ${pageHeight};`">
        <VContainer>
          <NuxtPage />
        </VContainer>
      </VMain>
      <footer
        class="w-100 d-flex flex-column justify-center align-center"
        style="background-color: #191f28; color: #fff; padding: 100px 0"
      >
        <div class="mb-4">
          <p class="text-subtitle-2 text-sm-subtitle-1" style="color: #b0b8c1; font-weight: 500">
            Contact
          </p>
        </div>
        <div>
          <p class="text-subtitle-2 text-sm-subtitle-1 mb-8 text-center" style="color: #6b7684">
            이메일 : contact@tracer.team
          </p>
          <ul class="d-flex justify-center" style="list-style: none; gap: 3rem">
            <li>
              <a
                style="cursor: pointer; border-radius: 50%; opacity: 0.7"
                href="https://www.threads.net/@tracer_company"
              >
                <v-img width="36" style="color: #fff" :src="threads"></v-img>
              </a>
            </li>
            <li>
              <a
                style="cursor: pointer; border-radius: 50%; opacity: 0.7"
                href="https://blog.naver.com/tracer42/223154991451"
              >
                <v-icon class="w-100 h-100" size="36" icon="mdi-alpha-n-box-outline"></v-icon>
              </a>
            </li>
            <li>
              <a
                style="cursor: pointer; border-radius: 50%; opacity: 0.7"
                href="https://www.youtube.com/watch?v=YiiD9ddqbOc"
                ><v-icon size="36" icon="mdi-youtube"></v-icon>
              </a>
            </li>
            <li>
              <a
                style="cursor: pointer; border-radius: 50%; opacity: 0.7"
                href="https://www.instagram.com/tracer_company"
              >
                <v-icon size="36" icon="mdi-instagram"></v-icon>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </VApp>
  </div>
</template>

<script setup>
import threads from "@/assets/threads.svg";

const pageHeight = ref("");

onMounted(() => {
  const viewportHeight = window.innerHeight;
  const desiredHeight = Math.round(viewportHeight * 0.85);
  pageHeight.value = `${desiredHeight}px`;
});
</script>
