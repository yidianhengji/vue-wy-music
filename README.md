# vue-wy-music

## Project setup
yarn install

### Compiles and hot-reloads for development
yarn run serve

### Compiles and minifies for production
yarn run build

### Run your tests
yarn run test

### Lints and fixes files
yarn run lint

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 技术点
axios

### css 特效 图片旋转
@keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
  }
}

.rotation {
  -webkit-transform: rotate(360deg);
  animation: rotation 5s linear infinite;
  -moz-animation: rotation 5s linear infinite;
  -webkit-animation: rotation 5s linear infinite;
  -o-animation: rotation 5s linear infinite;
}
}