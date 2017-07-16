<template>
  <transition name="move">
    <div class="detailWrapper" ref="detailWrapper" v-show="showDetail">
      <div class="foodDetail">
        <div class="back" @click="showToggle()"><i class="icon-arrow_lift"></i></div>
        <img :src="food.image" height="425" width="100%">
        <div class="info">
          <div class="title">{{food.name}}</div>
          <div class="desc"><span>月售{{food.sellCount}}</span><span>好评率{{food.rating}}%</span></div>
          <div class="price"><span class="unit">￥</span>{{food.price}}<span class="oldPrice" v-show="food.oldPrice">￥{{food.oldPrice}}</span></div>
          <div class="shopCart">
            <transition name="fade">
              <div class="text" @click="addCart($event)" v-show="!food.count">加入购物车</div>
            </transition>
          </div>
          <cartcontrol :food="food"></cartcontrol>
        </div>
        <div class="divider"></div>
        <div class="desc">
          <div class="title">商品介绍</div>
          <div class="content">{{food.info}}</div>
        </div>
        <div class="divider"></div>
        <div class="evaluation">
          <div class="title">商品评价</div>
          <div class="classify">
            <span v-for="(item,index) in classifyArr" class="item" :class="{'active':item.active,'bad':index==2,'badActive':item.active&&index==2}" @click="filterEvel(item)">
              {{item.name}}<span class="count">{{item.count}}</span>
            </span>
          </div>
          <div class="switch" @click="evelflag=!evelflag">
            <span class="icon-check_circle" :class="{'on':evelflag}"></span>
            <span class="text">只看有内容的评价</span>
          </div>
          <div class="evel-list">
            <ul>
              <li class="evel" v-for="evel in evelArr">
                <div class="userInfo">
                  <div class="time">{{evel.rateTime | time}}</div>
                  <div class="user">
                    <span>{{evel.username}}</span>
                    <span class="avatar"><img :src="evel.avatar" width="12" height="12"></span>
                  </div>
                </div>
                <div class="content">
                  <span class="icon" :class="evel.rateType?'icon-thumb_down':'icon-thumb_up'"></span>
                  <span class="text">{{evel.text}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import '../../filter/time.js';
  import BScroll from 'better-scroll';
  import cartcontrol from 'components/cartcontrol/cartcontrol';

  export default {
    components: {
      cartcontrol
    },
    props: {
      food: Object
    },
    data() {
      return {
        showDetail: false,
        evelflag: true,
        classifyArr: [
            { name: '全部', count: this.food.ratings.length, active: true },
            { name: '推荐', count: this.food.ratings.filter((data) => data.rateType === 0).length, active: false },
            { name: '吐槽', count: this.food.ratings.filter((data) => data.rateType).length, active: false }
          ]
      };
    },
    computed: {
      evelArr() {
        let selectIndex = 0;
        this.classifyArr.forEach((data, index) => {
          if (data.active) {
            selectIndex = index;
          }
        });
        if (this.detailWrapper) {
          this.$nextTick(() => {
            this.detailWrapper.refresh();
          });
        }
        return selectIndex ? this.food.ratings.filter((data) => this.evelflag ? data.rateType === selectIndex - 1 && data.text : data.rateType === selectIndex - 1) : this.food.ratings.filter((data) => this.evelflag ? data.text : true);
      }
    },
    methods: {
      showToggle() {
        this.showDetail = !this.showDetail;
        if (this.showDetail) {
          this.$nextTick(() => {
              this._initScroll();
          });
        }
      },
      _initScroll() {
        if (!this.detailWrapper) {
          this.detailWrapper = new BScroll(this.$refs.detailWrapper, { click: true });
        } else {
          this.detailWrapper.refresh();
        }
      },
      addCart(event) {
        if (!event._constructed) {
          return;
        }
        this.$set(this.food, 'count', 1);
        this.$root.eventHub.$emit('cart.add', event.target);
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
  @import "../../common/stylus/mixin.styl"
  @import "./foodDetail.styl"
</style>

