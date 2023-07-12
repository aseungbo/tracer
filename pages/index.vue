<template>
  <v-app-bar class="d-flex justify-center" style="height: 5rem">
    <div class="w-100 d-flex justify-space-between align-center px-4 px-sm-16">
      <div class="d-flex align-center flex-shrink-0" style="gap: 0.25rem">
        <v-icon :color="twColors.palette.blue" size="2rem">mdi-lightning-bolt</v-icon>
        <NuxtLink style="cursor: pointer">
          <span class="text-h6 font-weight-bold">Tracer</span>
        </NuxtLink>
      </div>
      <div class="d-flex" style="gap: 1rem">
        <div class="d-flex" style="gap: 1rem">
          <v-btn variant="flat" @click="dialog = true" :color="twColors.palette.blue">
            <span
              class="text-subtitle-1 font-weight-bold"
              :style="`color: ${twColors.palette.white};`"
            >
              시작하기
            </span>
          </v-btn>
        </div>
      </div>
    </div>
  </v-app-bar>
  <div class="d-flex flex-column align-center" style="gap: 5rem">
    <div class="text-center" style="margin-top: 114px">
      <p class="text-sm-h2 mb-4" style="font-size: 40px; font-weight: 600">
        문서 <span :style="`color: ${twColors.palette.blue};`">취합</span>을
      </p>
      <p class="text-sm-h2" style="font-size: 40px; font-weight: 600">
        <span :style="`color: ${twColors.palette.blue};`">간편</span>하고
        <span :style="`color: ${twColors.palette.blue};`">안전</span>하게
      </p>
    </div>

    <div>
      <v-btn
        style="min-width: 293px; height: 60px"
        @click="dialog = true"
        variant="flat"
        :color="twColors.palette.blue"
      >
        <span
          class="text-subtitle-1 text-sm-h6"
          style="font-weight: 600"
          :style="`color: ${twColors.palette.white};`"
        >
          시작하기
        </span>
      </v-btn>
    </div>
    <div>
      <v-img class="gif-style" aspect-ratio="16/9" cover :src="requestGif"></v-img>
    </div>
    <div class="text-center" style="margin-top: 60px">
      <p class="text-sm-h2 mb-16 px-4" style="font-size: 28px; font-weight: 600">
        문서 취합, 그동안 어떻게 하고 계셨어요?
      </p>
    </div>
    <div class="d-flex flex-wrap justify-center" style="gap: 6rem">
      <div>
        <v-img
          class="gif-style"
          aspect-ratio="5/5"
          style="border-radius: 0.5rem; width: 300px; height: 300px"
          cover
          :src="emailAndMessengerPng"
        ></v-img>
        <p
          class="text-sm-h6 px-8 text-center mt-8"
          style="
            color: #00000066;
            font-size: 1rem;
            font-weight: 600;
            width: 300px;
            line-height: 2rem;
          "
        >
          <span :style="`color: ${twColors.palette.red};`">메신저, 이메일</span>로 요청하고
        </p>
      </div>
      <div>
        <v-img
          class="gif-style"
          aspect-ratio="5/5"
          style="border-radius: 0.5rem; width: 300px; height: 300px"
          cover
          :src="downloadPng"
        ></v-img>
        <p
          class="text-sm-h6 px-8 text-center mt-8"
          style="
            color: #00000066;
            font-size: 1rem;
            font-weight: 600;
            width: 320px;
            line-height: 2rem;
          "
        >
          <span :style="`color: ${twColors.palette.red};`">연락이 올 때마다 </span>다운로드받고
        </p>
      </div>
      <div>
        <v-img
          class="gif-style"
          aspect-ratio="5/5"
          style="border-radius: 0.5rem; width: 300px; height: 300px"
          cover
          :src="folderNaming"
        ></v-img>
        <p
          class="text-sm-h6 px-8 text-center mt-8"
          style="
            color: #00000066;
            font-size: 1rem;
            font-weight: 600;
            width: 300px;
            line-height: 2rem;
          "
        >
          <span :style="`color: ${twColors.palette.red};`">폴더 이름</span>으로
          <span :style="`color: ${twColors.palette.red};`">관리</span>하셨죠?
        </p>
      </div>
    </div>

    <div class="text-center" style="margin-top: 60px">
      <p class="text-sm-h2 mb-8 px-4" style="font-size: 32px; font-weight: 600">
        이제는 간편하게 취합하세요
      </p>
      <p class="text-sm-h5 px-8 mb-2" style="color: #00000066; font-size: 16px; font-weight: 600">
        모든 과정은 알림으로 알려드리고
      </p>
      <p class="text-sm-h5 px-8" style="color: #00000066; font-size: 16px; font-weight: 600">
        제출된 문서들은 한눈에 확인하실 수 있어요
      </p>
    </div>
    <div class="d-flex flex-wrap justify-center" style="gap: 6rem">
      <div>
        <v-img
          class="gif-style"
          aspect-ratio="5/5"
          style="border-radius: 0.5rem; width: 300px; height: 300px"
          cover
          :src="requestPng"
        ></v-img>
        <p
          class="text-sm-h6 px-8 text-center mt-8"
          style="
            color: #00000066;
            font-size: 1rem;
            font-weight: 600;
            width: 300px;
            line-height: 2rem;
          "
        >
          <span :style="`color: ${twColors.palette.blue};`">체크리스트</span>를 작성해서
        </p>
        <p
          class="text-sm-h6 px-8 text-center"
          style="color: #00000066; font-size: 1rem; font-weight: 600; width: 300px"
        >
          고객에게 요청하고
        </p>
      </div>
      <div>
        <v-img
          class="gif-style"
          aspect-ratio="5/5"
          style="border-radius: 0.5rem; width: 300px"
          cover
          :src="responsePng"
        ></v-img>
        <p
          class="text-sm-h6 px-8 text-center mt-8"
          style="
            color: #00000066;
            font-size: 1rem;
            font-weight: 600;
            width: 300px;
            line-height: 2rem;
          "
        >
          고객이 <span :style="`color: ${twColors.palette.blue};`">체크리스트</span>에 따라서
        </p>
        <p
          class="text-sm-h6 px-8 text-center"
          style="color: #00000066; font-size: 1rem; font-weight: 600; width: 300px"
        >
          <span :style="`color: ${twColors.palette.blue};`">문서를 제출</span>하면
        </p>
      </div>
      <div>
        <v-img
          class="gif-style"
          aspect-ratio="5/5"
          style="border-radius: 0.5rem; width: 300px"
          cover
          :src="notiAndCheckPng"
        ></v-img>
        <p
          class="text-sm-h6 px-8 text-center mt-8"
          style="
            color: #00000066;
            font-size: 1rem;
            font-weight: 600;
            width: 300px;
            line-height: 2rem;
          "
        >
          <span :style="`color: ${twColors.palette.blue};`">알람이 왔을 때</span> 확인하고
        </p>
        <p
          class="text-sm-h6 px-8 text-center"
          style="color: #00000066; font-size: 1rem; font-weight: 600; width: 300px"
        >
          <span :style="`color: ${twColors.palette.blue};`">필요할 때만</span> 다운로드하세요
        </p>
      </div>
    </div>
    <div>
      <v-btn
        style="min-width: 293px; height: 60px"
        @click="dialog = true"
        variant="flat"
        :color="twColors.palette.blue"
      >
        <span
          class="text-subtitle-1 text-sm-h6"
          style="font-weight: 600"
          :style="`color: ${twColors.palette.white};`"
        >
          사전예약하기
        </span>
      </v-btn>
    </div>

    <div>
      <iframe class="video-style" :src="embedUrl" frameborder="0"></iframe>
    </div>

    <v-dialog v-model="dialog" style="min-width: 370px; max-width: 500px">
      <v-card class="align-center py-8" style="height: 40rem">
        <v-card-text v-if="!submitted" class="w-75 d-flex flex-column justify-center">
          <v-form class="w-100 d-flex flex-column align-center">
            <div class="d-flex my-4 mr-4">
              <v-icon :color="twColors.palette.blue" size="2rem">mdi-lightning-bolt</v-icon>
              <span class="text-h5 font-weight-bold">Tracer</span>
            </div>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-bold text-center mt-6 mb-2">
              🚀 트레이서는 아직 준비중이에요!
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
          <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-bold text-center mb-12">
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
</template>

<script></script>

<script setup>
import axios from "axios";
import requestGif from "@/assets/request.gif";
import downloadPng from "@/assets/download.png";
import emailAndMessengerPng from "@/assets/emailAndMessenger.png";
import folderNaming from "@/assets/folderNaming.png";
import requestPng from "@/assets/request.png";
import responsePng from "@/assets/response.png";
import notiAndCheckPng from "@/assets/notiAndCheck.png";

const videoUrl = ref("https://www.youtube.com/watch?v=YiiD9ddqbOc"); // 비디오 URL

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
  width: 960px;
  height: 540px;
}
@media screen and (max-width: 600px) {
  .video-style {
    width: 320px;
    height: 180px;
  }
}

.gif-style {
  width: 960px;
}
@media screen and (max-width: 600px) {
  .gif-style {
    width: 320px;
  }
}
.png-style {
  width: 640px;
}
@media screen and (max-width: 600px) {
  .png-style {
    width: 320px;
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
</style>
