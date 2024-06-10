<template>
  <div class="publication_container">
    <div class="child_header">
      <h2>Publications</h2>
    </div>

    <div v-for="(pubs, year) in groupedPublications" :key="year">
      <h3 class="year">{{ year }}</h3>
      <ul>
        <li v-for="publication in pubs" :key="publication.title">
          <p>
            <span v-if="publication.url">
              『<a
                :href="publication.url"
                target="_blank"
                rel="noopener noreferrer"
                >{{ publication.title }}</a
              >』
            </span>
            <span v-else> 『{{ publication.title }}』 </span>
            <span>
              ({{ publication.conference || 'No Conference'}}<span v-if="publication.format"> {{ publication.format }}</span>) -
              {{ publication.authors }}
            </span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Publications',
  data() {
    return {
      publications: [
        {
          year: 2024,
          title: '3Dビュー探索による画像審美性の向上',
          conference: 'MIRU2024',
          format: 'Poster Session',
          authors: 'Taichi Uchida, Yoshihiro Kanamori, Yuki Endo',
        },
        {
          year: 2024,
          title: '3D View Optimization for Improving Image Aesthetics',
          conference: 'arXiv',
          authors: 'Taichi Uchida, Yoshihiro Kanamori, Yuki Endo',
          url: 'https://arxiv.org/abs/2405.16443',
        },
        // 他のPublicationオブジェクトをここに追加
      ],
    }
  },
  computed: {
    groupedPublications() {
      return this.publications.reduce((acc, publication) => {
        if (!acc[publication.year]) {
          acc[publication.year] = []
        }
        acc[publication.year].push(publication)
        return acc
      }, {})
    },
  },
}
</script>

<style scoped>
.child_header {
  display: flex;
  align-items: center;
  width: 99%;
}
h2 {
  font-family: 'Kiona', '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic,
    sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: min(30px, 3vw);
  line-height: 10px;
  margin-bottom: min(10px, 1vw);
}
.year {
  font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic,
    sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: min(24px, 2.4vw);
  margin-top: min(10px, 1vw);
  margin-bottom: min(10px, 1vw);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px min(18px, 1.8vw);
  font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: min(20px, 2vw);
}
a {
  color: #42b983;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
