<script setup>
const skills = [
  {
    title: "Data Science",
    rate: 4,
    outline: ["大学の授業にて、可視化や機械学習・深層学習について学んでいる。", "特に、自然言語処理を用いて研究・開発をすることが多い。"],
    tags: ["Data Analysis", "Data Visualization", "Machine Learning", "Natural Language Processing", "Image Processing"],
  },
  {
    title: "Back-end",
    rate: 3,
    outline: ["ハッカソン等でWebアプリのバックエンド開発経験有り。", "特に、FastAPI (Python)やnet/http (Golang)、Gin (Golang)を使用することが多い。"],
    tags: ["FastAPI (Python)", "Flask (Python)", "Django (Python)", "net/http (Golang)", "Gin (Golang)", "Fiber (Golang)", "Beego (Golang)", "RedwoodJS (JS/TS)"],
  },
  {
    title: "Front-end",
    rate: 2,
    outline: ["ハッカソン等でWebアプリのフロントエンド開発経験有り。", "特に、Vue.jsを使用することが多い。"],
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "Vue.js", "React"],
  },
  {
    title: "Data Base",
    rate: 3,
    outline: ["DB(特にRDB)を用いたWebアプリの開発経験有り。", "特に、マルチメディア知識ベースや時間的・空間的な知識ベースの統合・検索を行う処理系を作成することが多い。"],
    tags: ["PostgreSQL", "MySQL", "SQLite", "Prisma"],
  },
  {
    title: "Editor",
    rate: 5,
    outline: ["# vimしか勝たん"],
    tags: ["vi", "Vim", "Neovim"],
  },
  {
    title: "Other",
    rate: 0,
    outline: [""],
    tags: ["Clang", "SwiftUI", "Unity", "zsh", "bash", "fish", "Git", "GitHub", "Docker", "Docker Compose", "Firebase", "Amazon EC2"],
  },
]
</script>
<template>
  <v-sheet style="background-color: transparent; margin-top: 15px;">
    <div class="d-flex bordar-radius elevation-3" style="padding-bottom: 20px; margin-bottom: 20px;"  v-for="skill in skills" :key="skill.title">
      <div style="width: 100%;">
        <div class="d-flex">
          <h1 class="font-rampart text-deep-purple-darken-3">{{ skill.title }}</h1>
          <v-spacer />
          <v-rating
            v-model="skill.rate"
            v-if="skill.rate != 0"
            density="compact"
            color="deep-purple-lighten-1"
            style="margin-top: 10px; margin-right: 10px;"
          ></v-rating>
        </div>
        <v-divider :thickness="2" color="deep-purple-darken-4" style="margin-top: 10px; margin-bottom: 10px;" />
        <div v-for="sentence in skill.outline">
          <p class="text-blue-grey-darken-3">{{ sentence }}</p>
        </div>
        <div v-for="tag in skill.tags" class="chips">
          <v-chip color="deep-purple" class="elevation-1"><strong>{{ tag }}</strong></v-chip>
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
