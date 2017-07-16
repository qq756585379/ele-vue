# 饿了么点餐系统

> vue2.0、vuex、vue-router、axios、webpack、eslint、better-scroll

### Axios

在vue1.x的时候，vue的官方推荐HTTP请求工具是vue-resource，但是在vue2.0的时候将推荐工具改成了axios。

使用方式都差不多，但需要注意的是：接口返回的res并不直接是返回的数据，而是经过axios本身处理过的json对象。真正的数据在res.data里：

```
axios.get(url).then((res)=>{
  this.data = res.data
})
```

### 安装插件
```
npm install axios --save
npm install vuex --save
npm install better-scroll --save
# if use stylus
npm install stylus --save-dev
npm install stylus-loader --save-dev
# if use sass
npm install sass --save-dev
npm install sass-loader --save-dev
npm install node-sass--save-dev

```

### 项目截图

<img src="https://static.oschina.net/uploads/space/2017/0207/110250_3uWi_2493500.jpeg" width="40%"/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://cloud.githubusercontent.com/assets/20501873/24188896/ff2c5910-0f1d-11e7-80c0-bc28fd84fe80.png" width="40%"/>


### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```


### 交流

欢迎热爱学习、忠于分享的胖友一起来交流

- QQ：756585379

- QQ群：149683643


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
