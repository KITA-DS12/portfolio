<script setup>
const works = [
  {
    time: "2023-03",
    title: "ついーとかけごはん",
    event: "技育CAMPアドバンス vol.1・技育CAMP vol.10",
    outline: ["取得したツイートを解析し、本文中に含まれる名詞に応じてUnity上でオブジェクトを落下させるアプリ。", "ツイートの取得はPythonからTwitterAPIを使用して行う。", "名詞の抽出はSQLiteから概念DBであるWordnetを使用して行う。", "Pythonで実装したサーバとUnityはWebSocketで接続をしている。", "TwitterAPIの有料化に伴い、Web上からメッセージの送信を行えるようにVue.jsとSupabaseを用いてWebアプリを実装した。"],
    imgs: ["src/assets/twkake.jpg", "src/assets/twkake2.png"],
    tags: ["Unity", "Python", "SQLite", "WebSocket", "TwitterAPI", "Vue.js", "Supabase"],
  },
]
</script>
<template>
  <v-sheet style="background-color: transparent; margin-top: 15px;">
    <div class="d-flex bordar-radius elevation-3" style="padding-bottom: 20px; margin-bottom: 20px;"  v-for="work in works" :key="work.title">
      <div>
        <h1 class="font-rampart text-deep-purple-darken-3">{{ work.time }}</h1>
        <p style="font-size:20px" class="font-rampart text-purple-darken-2 font-weight-bold">{{ work.title }}</p>
        <p style="font-size:14px" class="font-rampart text-purple-lighten-2 font-weight-bold">{{ work.event }}</p>
        <v-divider :thickness="2" color="deep-purple-darken-4" style="margin-top: 10px; margin-bottom: 10px;" />
        <v-carousel height="300">
          <v-carousel-item v-for="img in work.imgs" :key="img" :src="img" cover/>
        </v-carousel>
        <div v-for="sentence in work.outline">
          <p class="text-blue-grey-darken-3">{{ sentence }}</p>
        </div>
        <div v-for="tag in work.tags" class="chips">
          <v-chip color="deep-purple" class="elevation-1"><b>{{ tag }}</b></v-chip>
        </div>
      </div>
    </div>
  </v-sheet>
</template>
<style>
.font-rampart {
  font-family: 'Rampart One', sans-serif !important;
}
.bordar-radius {
  padding: 10px;
  border-radius: 30px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.5);
}
.chips {
  display: inline-block;
  padding-top: 20px;
  padding-right: 10px;
}
</style>
