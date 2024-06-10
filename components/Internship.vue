<template>
  <div class="internship_container">
    <div class="child_header">
      <h2>Internship</h2>
    </div>
    <ul>
      <li v-for="internship in internships" :key="internship.name">
        <p>
          {{ internship.year }} {{ internship.period }} - {{ internship.name }}
          <span v-if="internship.position"> ({{ internship.position }})</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Internships',
  data() {
    return {
      internships: [
        {
          year: 2020,
          period: 'August (2 weeks)',
          name: 'teamLab Summer Internship',
          position: 'Interactive Engineer',
        },
        {
          year: 2023,
          period: 'September (2 days)',
          name: 'TBS TechDesignCamp2023',
        },
        // 他のインターンオブジェクトをここに追加
      ],
    }
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
