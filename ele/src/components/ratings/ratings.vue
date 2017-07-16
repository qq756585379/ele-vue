<template>
  <div class="ratingsWrapper" ref="ratingsWrapper">
    <div class="ratings-content">
      <div class="info">
        <div class="mark">
          <div class="num">{{seller.score}}</div>
          <div class="text">综合评分</div>
          <div class="contrast">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="stars">
          <div class="serviceScore">
            <span class="text">服务态度</span><star :size="36" :score="seller.serviceScore"></star><span class="num">{{seller.serviceScore}}</span>
          </div>
          <div class="foodScore">
            <span class="text">服务态度</span><star :size="36" :score="seller.foodScore"></star><span class="num">{{seller.foodScore}}</span>
          </div>
          <div class="deliveryTime">
            <span class="text">送达时间</span><span class="time">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="evaluation">
        <div class="classify">
          <span v-for="(item,index) in classifyArr" class="item" :class="{'active':item.active,'bad':index==2,'badActive':item.active&&index==2}" @click="filterEvel(item)">
            {{item.name}}<span class="count">{{item.count}}</span>
          </span>
        </div>
        <div class="switch" @click="evelflag=!evelflag">
          <span class="icon-check_circle" :class="{'on':evelflag}"></span><span class="text">只看有内容的评价</span>
        </div>
        <div class="evel-list">
          <ul>
            <li class="evel" v-for="evel in evelArr">
              <div class="avatar"><img :src="evel.avatar" width="28" height="28"></div>
              <div class="content">
                <div class="user">
                  <span class="name">{{evel.username}}</span><span class="rateTime">{{evel.rateTime | time}}</span>
                </div>
                <div class="star-wrapper">
                  <star :size="24" :score="evel.score"></star><span class="deliveryTime">{{evel.deliveryTime}}分钟送达</span>
                </div>
                <div class="text">{{evel.text}}</div>
                <div class="recommend">
                  <span class="icon icon-thumb_up" v-show="evel.recommend.length"></span>
                  <span class="dish" v-for="dish in evel.recommend">{{dish}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios';
  import star from 'components/star/star';
  import BScroll from 'better-scroll';

  export default {
    components: {
      star: star
    },
    data() {
      return {
        ratings: [],
        seller: {},
        classifyArr: [{
          name: '全部',
          count: 0,
          active: true
        }, {
          name: '推荐',
          count: 0,
          active: false
        }, {
          name: '吐槽',
          count: 0,
          active: false
        }],
        evelflag: true
      };
    },
    created() {
      this._init();
    },
    computed: {
      evelArr() {
        let selectIndex = 0;
        this.classifyArr.forEach((data, index) => {
          if (data.active) {
            selectIndex = index;
          }
        });
        if (this.scroll) {
          this.$nextTick(() => {
              this.scroll.refresh();
          });
        }
        return selectIndex ? this.ratings.filter((data) => this.evelflag ? data.rateType === selectIndex - 1 && data.text : data.rateType === selectIndex - 1) : this.ratings.filter((data) => this.evelflag ? data.text : true);
      }
    },
    methods: {
      _init() {
        axios.get('static/data.json').then((res) => {
          this.ratings = res.data.ratings;
          this.seller = res.data.seller;
          this._initClassifyArr();
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.ratingsWrapper, { click: true });
          });
        });
      },
      _initClassifyArr() {
        this.classifyArr.forEach((data, index) => {
          if (index) {
            data.count = this.ratings.filter((temp) => temp.rateType === index - 1).length;
          } else {
            data.count = this.ratings.length;
          }
        });
      },
      filterEvel(item) {
        this.classifyArr.forEach((data) => {
          data.active = false;
        });
        item.active = true;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./ratings.styl";
</style>
