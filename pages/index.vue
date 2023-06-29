<template>
  <div>
    <div
      class="d-flex flex-column flex-sm-row justify-center align-center"
      style="gap: 2.5rem"
      :style="`min-height: ${cardHeight}`"
    >
      <div
        class="d-flex flex-column w-100 w-sm-50 align-center align-sm-start text-center px-8 mx-sm-16"
        style="gap: 1rem; max-width: 840px; min-width: 375px"
      >
        <div class="d-none d-sm-flex w-100 align-center">
          <span
            class="text-sm-h2 font-weight-bold mt-8 mt-sm-16 text-center"
            style="min-height: 50px; width: 25%; min-width: 200px"
            :style="`color: ${twColors.palette.blue};`"
            >{{ currentText }}</span
          >
          <span
            class="text-sm-h2 font-weight-bold mt-8 mt-sm-16"
            style="min-height: 50px; width: 75%"
            >문서를
            <span
              class="text-sm-h2 font-weight-bold mt-8 mt-sm-16"
              style="min-height: 50px"
              :style="`color: ${twColors.palette.blue};`"
              >받기 위한
            </span>
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
              >받기 위한
            </span>
          </span>
        </div>
        <div class="d-flex align-center">
          <p class="text-h5 text-sm-h2 font-weight-bold mt-0">
            가장
            <span
              class="text-h5 text-sm-h2 font-weight-bold mt-0 mt-sm-16"
              :style="`color: ${twColors.palette.blue};`"
              >간편하고 빠른</span
            >
            방법
          </p>
        </div>
        <div class="d-flex flex-column my-16 align-center" style="gap: 0.5rem">
          <p class="text-subtitle-2 text-sm-h5 font-weight-bold px-8">
            트레이서를 통해 문서를 받기 위한 번거로움에서 벗어나세요.
          </p>
        </div>
        <v-form class="d-flex align-center w-75" style="gap: 1rem">
          <v-text-field
            v-if="!loading"
            class="w-50"
            style="width: 12rem"
            label="이메일"
            placeholder="이메일"
            single-line
            hide-details
            clearable
            color="blue"
            v-model="email"
          ></v-text-field>
          <v-btn
            :loading="loading"
            @click="handleSubmit"
            :style="`width: ${loading ? '100%' : '30%'}`"
            style="height: 3rem"
            variant="flat"
            :color="twColors.palette.blue"
          >
            <span
              class="text-subtitle-2 text-sm-subtitle-1 font-weight-bold"
              :style="`color: ${twColors.palette.white};`"
            >
              사전예약
            </span>
          </v-btn>
        </v-form>
        <v-dialog class="w-sm-25" v-model="dialog">
          <v-card class="align-center py-4" style="height: 20rem">
            <v-card-text class="d-flex flex-column justify-center align-center">
              <v-icon size="7rem" color="green">mdi-check-circle-outline</v-icon>
              <p class="text-subtitle-1 font-weight-bold text-center mt-2">
                사전예약이 완료되었습니다.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                style="min-width: 5rem"
                variant="flat"
                :color="twColors.palette.blue"
                @click="dialog = false"
                ><span
                  class="text-subtitle-1 font-weight-bold"
                  :style="`color: ${twColors.palette.white};`"
                >
                  확인
                </span></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <div class="d-flex w-50 video-style">
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

const loading = ref(false);
const dialog = ref(false);
const formSparkUrl = ref("https://submit-form.com/UxEzXm6O");

const handleSubmit = async () => {
  loading.value = true;
  await axios.post(formSparkUrl.value, { email: email.value }).then((response) => {
    setTimeout(() => {
      loading.value = false;
      dialog.value = true;
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
    height: 215px;
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
