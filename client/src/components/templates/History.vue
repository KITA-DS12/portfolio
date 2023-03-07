<script setup>
const histories = [
  {
    title: "中部大学第一高等学校",
    subtitle: "電気情報コース",
    color: "deep-purple",
    start: "2017/04",
    end: "2020/03",
    outline: "電気電子・情報分野の資格・検定を30個ほど取得し、愛知県高等学校職業教育技術認定事業グランプリを受賞。"
  },
  {
    title: "武蔵野大学",
    subtitle: "データサイエンス学部",
    color: "purple",
    start: "2020/04",
    end: "2024/03",
    outline: "ゼミや有志PJでの研究活動、ハッカソンを中心に活動。 特に、ハッカソンでは数多くの賞を受賞。また、交流会や勉強会の企画・運営や、学内開発サークル『MUENT』の立ち上げを行っている。"
  },
  {
    title: "メガベンチャー企業",
    subtitle: "エンジニア職",
    color: "red",
    start: "2024/04",
    end: "",
    outline: "就職予定"
  },
]
</script>
<template>
  <div class="d-flex bordar-radius" style="padding-bottom: 60px">
    <div>
      <h1 class="font-rampart text-deep-purple-darken-2">History</h1>
      <v-timeline class="text-blue-grey-darken-3" density="compact" align="start">
        <v-timeline-item
          v-for="history in histories"
          :key="history.start"
          :dot-color="history.color"
          size="x-small"
        >
          <div class="text-left">
            <div class="font-weight-bold">
              {{ history.title }} ({{ history.start }} - {{ history.end }})
            </div>
            <div class="font-weight-bold">{{ history.subtitle }}</div>
            <div style="margin-top: 5px;">{{ history.outline }}</div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>
<style>
.font-rampart {
  font-family: 'Rampart One', sans-serif !important;
}
</style>
