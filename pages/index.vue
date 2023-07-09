<template>
  <v-app-bar>
    <div class="w-100 d-flex justify-space-between align-center px-2 px-sm-16">
      <div class="d-flex align-center flex-shrink-0" style="gap: 1rem">
        <v-icon :color="twColors.palette.blue" size="2rem">mdi-lightning-bolt</v-icon>
        <NuxtLink style="cursor: pointer">
          <span class="text-h6 font-weight-bold">Tracer</span>
        </NuxtLink>
      </div>
      <div class="d-flex" style="gap: 1rem">
        <div class="d-flex" style="gap: 1rem">
          <v-btn variant="flat" @click="dialog = true" :color="twColors.palette.blue">
            <span
              class="text-subtitle-2 text-sm-subtitle-1 font-weight-bold"
              :style="`color: ${twColors.palette.white};`"
            >
              시작하기
            </span>
          </v-btn>
        </div>
      </div>
    </div>
  </v-app-bar>
  <div>
    <div
      class="d-flex flex-column flex-sm-row justify-center align-center"
      style="gap: 2.5rem"
      :style="`min-height: ${cardHeight}`"
    >
      <div
        class="d-flex flex-column w-100 w-sm-50 align-center align-sm-start text-center mx-sm-16"
        style="gap: 1rem; max-width: 840px; min-width: 375px"
      >
        <div class="d-none d-sm-flex w-100 align-center">
          <span
            class="text-sm-h3 font-weight-bold mt-8 mt-sm-16 pr-16"
            style="min-height: 50px; min-width: 200px"
            :style="`color: ${twColors.palette.blue};`"
            >{{ currentText }}</span
          >
          <span
            class="text-sm-h3 font-weight-bold mt-8 mt-sm-16 pr-16 flex-shrink-0"
            style="min-height: 50px; min-width: 400px"
            >문서를
            <span
              class="text-sm-h3 font-weight-bold mt-8 mt-sm-16"
              style="min-height: 50px"
              :style="`color: ${twColors.palette.blue};`"
              >취합
            </span>
            하는
          </span>
        </div>
        <div class="d-flex d-sm-none mt-16">
          <span
            class="text-h5 font-weight-bold"
            style="min-width: 125px"
            :style="`color: ${twColors.palette.blue};`"
            >{{ currentText }}</span
          >
          <span class="text-h5 font-weight-bold"
            >문서를
            <span class="text-h5 font-weight-bold" :style="`color: ${twColors.palette.blue};`"
              >취합
            </span>
            하는
          </span>
        </div>
        <div class="d-flex align-center">
          <p class="text-h5 text-sm-h3 font-weight-bold mt-0 flex-shrink-0">
            가장
            <span
              class="text-h5 text-sm-h3 font-weight-bold mt-0 mt-sm-16"
              :style="`color: ${twColors.palette.blue};`"
              >안전</span
            >하고,
            <span
              class="text-h5 text-sm-h3 font-weight-bold mt-0 mt-sm-16"
              :style="`color: ${twColors.palette.blue};`"
              >간편한</span
            >
            방법
          </p>
        </div>
        <div class="d-flex flex-column my-16 align-center" style="gap: 0.5rem">
          <p class="text-subtitle-1 text-sm-h5 font-weight-bold">
            트레이서를 통해 문서 취합 과정을
          </p>
          <p class="text-subtitle-1 text-sm-h5 font-weight-bold">쉽게 확인하고, 관리해보세요.</p>
        </div>

        <v-btn
          class="mb-16"
          @click="dialog = true"
          style="height: 3rem; min-width: 200px"
          variant="flat"
          :color="twColors.palette.blue"
        >
          <span
            class="text-subtitle-2 text-sm-subtitle-1 font-weight-bold"
            :style="`color: ${twColors.palette.white};`"
          >
            시작하기
          </span>
        </v-btn>
        <v-dialog v-model="dialog" style="min-width: 370px; width: 35%">
          <v-card class="align-center py-8" style="height: 40rem">
            <v-card-text v-if="!submitted" class="w-75 d-flex flex-column justify-center">
              <v-form class="w-100 d-flex flex-column align-center">
                <div class="d-flex my-4 mr-4">
                  <v-icon :color="twColors.palette.blue" size="2rem">mdi-lightning-bolt</v-icon>
                  <span class="text-h5 font-weight-bold">Tracer</span>
                </div>
                <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-bold text-center my-8">
                  🚀 트레이서는 아직 개발 중이에요
                </p>
                <v-text-field
                  class="w-100 my-8"
                  label="담당 업무"
                  placeholder="어떤 업무를 하시나요?"
                  hide-details
                  clearable
                  color="blue"
                  v-model="position"
                ></v-text-field>
                <v-text-field
                  class="w-100"
                  label="이메일"
                  placeholder="이메일"
                  hide-details
                  clearable
                  color="blue"
                  v-model="email"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-text v-else class="d-flex flex-column justify-center align-center">
              <v-icon size="7rem" color="green">mdi-check-circle-outline</v-icon>
              <p class="text-subtitle-1 font-weight-bold text-center mt-2">
                사전예약이 완료되었습니다.
              </p>
            </v-card-text>
            <v-card-actions class="d-flex flex-column" style="gap: 1rem">
              <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-bold text-center mb-8">
                🔔 사전예약하고 제품 출시 알림 받기
              </p>
              <v-btn
                :loading="loading"
                style="min-width: 200px; min-height: 50px"
                variant="flat"
                :color="twColors.palette.blue"
                @click="
                  () => {
                    submitted ? (dialog = false) : handleSubmit();
                  }
                "
                ><span
                  class="text-subtitle-1 font-weight-bold"
                  :style="`color: ${twColors.palette.white};`"
                >
                  {{ submitted ? "닫기" : "사전예약" }}
                </span></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <div class="d-flex w-50 video-style pl-sm-16">
        <iframe class="w-100" :src="embedUrl" style="width: 20rem" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script></script>

<script setup>
import axios from "axios";

const videoUrl = ref("https://www.youtube.com/watch?v=2YLs33C72zo"); // 비디오 URL

const getVideoId = (url) => {
  const videoId = url.split("v=")[1];
  return videoId;
};

const embedUrl = computed(() => {
  const videoId = getVideoId(videoUrl.value);
  return `https://www.youtube.com/embed/${videoId}`;
});

const words = ["모든", "회계", "여행", "부동산"];
const typingSpeed = 200;
const eraseSpeed = 200;

const currentText = ref("");
let currentWordIndex = 0;
let isTyping = true;

const typeNextLetter = () => {
  if (isTyping) {
    currentText.value += words[currentWordIndex][currentText.value.length];
    if (currentText.value.length < words[currentWordIndex].length) {
      setTimeout(typeNextLetter, typingSpeed);
    } else {
      isTyping = false;
      setTimeout(eraseText, typingSpeed * 2);
    }
  } else {
    if (currentText.value.length > 0) {
      currentText.value = currentText.value.slice(0, -1);
      setTimeout(eraseText, eraseSpeed);
    }
  }
};

const eraseText = () => {
  if (currentText.value.length > 0) {
    currentText.value = currentText.value.slice(0, -1);
    setTimeout(eraseText, eraseSpeed);
  } else {
    isTyping = true;
    currentWordIndex++;
    if (currentWordIndex === words.length) {
      currentWordIndex = 0;
    }
    setTimeout(typeNextLetter, typingSpeed);
  }
};

const pageHeight = ref("");
const cardHeight = ref("");
const responseCardHeight = ref("");
const email = ref("");
const position = ref("");
const loading = ref(false);

const submitted = ref(false);
const dialog = ref(false);
const formSparkUrl = ref("https://submit-form.com/yuuWqUdz");

const handleSubmit = async () => {
  loading.value = true;
  await axios
    .post(formSparkUrl.value, { email: email.value, position: position.value })
    .then((response) => {
      setTimeout(() => {
        loading.value = false;
        submitted.value = true;
        email.value = "";
      }, 250);
    });
};

onMounted(() => {
  typeNextLetter();
  const viewportHeight = window.innerHeight;
  const desiredHeight = Math.round(viewportHeight * 0.85);
  pageHeight.value = `${desiredHeight}px`;
  cardHeight.value = `${desiredHeight * 0.95}px`;
  responseCardHeight.value = `${desiredHeight * 0.8}px`;
});
</script>

<style lang="scss" scoped>
.video-style {
  width: 840px;
  min-width: 540px;
  height: 540px;
}
@media screen and (max-width: 600px) {
  .video-style {
    min-width: 320px;
    height: 320px;
  }
}

::v-deep .v-text-field {
  .v-label {
    font-size: 1rem;
  }
  @media screen and (max-width: 600px) {
    .v-label {
      font-size: 1rem;
    }
  }
}

::v-deep .v-btn {
}
</style>
