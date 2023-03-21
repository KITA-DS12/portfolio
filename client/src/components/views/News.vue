<script setup>
const news_list = [
  {
    time: "2023-03",
    title: "技育CAMPアドバンスにて副大賞・企業賞のダブル受賞",
    link: "",
    outline: [
      "2023年3月に開催された株式会社サポーターズ主催のハッカソン技育CAMPアドバンス vol.1に参加。",
      "チーム「分類の超人」では、ブックマークを自動で整理するアプリ「unpacker」を制作し、副大賞を受賞。",
      "チーム「ツイートかけご飯」では、取得したツイートの本文中に含まれる名詞に応じてオブジェクトが落下してくる可視化アプリ「ついーとかけごはん」を制作し、企業賞(CARTA HOLDINGS)を受賞。",
    ],
    tags: ["ハッカソン", "技育CAMPアドバンス", "副大賞", "企業賞"],
  },
  {
    time: "2023-02",
    title: "技育CAMPハッカソンにて最優秀賞を受賞",
    link: "https://www.musashino-u.ac.jp/news/20230301-07.html",
    outline: [
      "2023年2月に開催された株式会社サポーターズ主催のハッカソン技育CAMPハッカソン vol.11に参加。",
      "チーム「分類の超人」では、ブックマークを自動で整理するアプリ「unpacker」を制作し、最優秀賞を受賞。",
    ],
    tags: ["ハッカソン", "技育CAMPハッカソン", "最優秀賞"],
  },
  {
    time: "2023-01",
    title: "技育CAMPハッカソンにて努力賞を受賞",
    link: "",
    outline: [
      "2023年1月に開催された株式会社サポーターズ主催のハッカソン技育CAMPハッカソン vol.10に参加。",
      "チーム「ツイートかけご飯」では、取得したツイートの本文中に含まれる名詞に応じてオブジェクトが落下してくる可視化アプリ「ついーとかけごはん」を制作し、努力賞を受賞。",
    ],
    tags: ["ハッカソン", "技育CAMPハッカソン", "努力賞"],
  },
  {
    time: "2022-12",
    title: "技育CAMPハッカソンにて努力賞を受賞",
    link: "",
    outline: [
      "2022年12月に開催された株式会社サポーターズ主催のハッカソン技育CAMPハッカソン vol.9に参加。",
      "チーム「ターミナルかけご飯」では、Macのターミナルのデザインを作成できるアプリ「たーみなるかけごはん」を制作し、努力賞を受賞。",
    ],
    tags: ["ハッカソン", "技育CAMPハッカソン", "努力賞"],
  },
  {
    time: "2022-08",
    title: "技育CAMPハッカソンにて優秀賞を受賞",
    link: "https://www.musashino-u.ac.jp/news/20220829-02.html",
    outline: [
      "2022年8月に開催された株式会社サポーターズ主催のハッカソン技育CAMPハッカソン vol.7に参加。",
      "チーム「スライド」では、入力した文章の特徴語から連想される配色やロゴを用いて、スライドを自動で生成するアプリ「preGen」を制作し、優秀賞を受賞。",
    ],
    tags: ["ハッカソン", "技育CAMPハッカソン", "優秀賞"],
  },
  {
    time: "2022-06",
    title: "技育CAMPハッカソンにて努力賞を受賞",
    link: "https://www.musashino-u.ac.jp/news/20220622-02.html",
    outline: [
      "2022年6月に開催された株式会社サポーターズ主催のハッカソン技育CAMPハッカソン vol.3に参加。",
      "暇な日を登録することでフッ軽に遊びに誘い合えるWebアプリ「FU CALENDAR」を制作し、努力賞を受賞。",
    ],
    tags: ["ハッカソン", "技育CAMPハッカソン", "努力賞"],
  },
  {
    time: "2022-03",
    title: "Open Hack Uにて優秀賞を受賞",
    link: "https://prtimes.jp/main/html/rd/p/000000090.000067788.html",
    outline: [
      "2022年3月に開催されたヤフー株式会社主催のハッカソンOpen Hack U 2021 Online Vol.4に参加。",
      "チーム「PJ名『優柔不断』」では、ブロックプログラミングによりユーザではなくAIがパズルを解くためのアルゴリズムを作り、課題解決を目指して競い合う教育用Webアプリを制作し、優秀賞を受賞。",
    ],
    tags: ["ハッカソン", "Open Hack U", "優秀賞"],
  },
  {
    time: "2022-03",
    title: "情報処理学会 第84回全国大会にて学生奨励賞を受賞",
    link: "https://prtimes.jp/main/html/rd/p/000000087.000067788.html",
    outline: [
      "2022年3月に開催された情報処理学会 第84回全国大会にて、共同研究として参加した論文「カッコウ探索アルゴリズムを応用したユーザの嗜好に合致した抽象画のリコメンデーション方式」の発表が「学生奨励賞」を受賞。",
    ],
    tags: ["研究", "情報処理学会", "学生奨励賞"],
  },
  {
    time: "2021-09",
    title: "技育CAMPハッカソンにて努力賞を受賞",
    link: "https://prtimes.jp/main/html/rd/p/000000062.000067788.html",
    outline: [
      "2021年9月に開催された株式会社サポーターズ主催のハッカソン技育CAMPハッカソン vol.9に参加。",
      "チーム「夏休みがこなかったPJ」では、他のエンジニアと同じオンライン空間で作業する「もくもく」をオフラインでも気軽に行うための予約システム「もぐもぐ」を制作し、努力賞を受賞。",
    ],
    tags: ["ハッカソン", "技育CAMPハッカソン", "努力賞"],
  },
  {
    time: "2021-08",
    title: "技育CAMPハッカソンにて努力賞を受賞",
    link: "https://prtimes.jp/main/html/rd/p/000000062.000067788.html",
    outline: [
      "2021年8月に開催された株式会社サポーターズ主催のハッカソン技育CAMPハッカソン vol.7に参加。",
      "チーム「夏休みをよこせPJ」では、筋トレの回数をカウントし、ピクトグラムが運動量に応じて肉付けされてムキムキになることで目標までの割合を可視化するWebアプリ「毎日がちぃ〜とでぇい」を制作し、努力賞を受賞。",
    ],
    tags: ["ハッカソン", "技育CAMPハッカソン", "努力賞"],
  },
  {
    time: "2020-02",
    title: "愛知県高等学校職業教育技術認定事業グランプリを受賞",
    link: "https://www.chubu-ichi.ed.jp/main/news/6802/",
    outline: [
      "2020年2月に開催された愛知県高等学校職業教育技術認定事業グランプリ授与式に参加。",
    ],
    tags: ["資格・検定", "愛知県教育委員会", "職業教育技術認定事業グランプリ"],
  },
];
</script>
<template>
  <v-sheet style="background-color: transparent; margin-top: 15px">
    <div
      class="d-flex bordar-radius elevation-3"
      style="padding-bottom: 20px; margin-bottom: 20px"
      v-for="news in news_list"
      :key="news.title"
    >
      <div>
        <h1 class="font-rampart text-deep-purple-darken-3">{{ news.time }}</h1>
        <p
          style="font-size: 20px"
          class="font-rampart text-purple-darken-2 font-weight-bold"
        >
          {{ news.title }}
        </p>
        <a :href="news.link" class="text-indigo-lighten-1">{{ news.link }}</a>
        <v-divider
          :thickness="2"
          color="deep-purple-darken-4"
          style="margin-top: 10px; margin-bottom: 10px"
        />
        <div v-for="sentence in news.outline">
          <p class="text-blue-grey-darken-3">{{ sentence }}</p>
        </div>
        <div v-for="tag in news.tags" class="chips">
          <v-chip color="deep-purple" class="elevation-1"
            ><b>{{ tag }}</b></v-chip
          >
        </div>
      </div>
    </div>
  </v-sheet>
</template>
<style>
.font-rampart {
  font-family: "Rampart One", sans-serif !important;
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
