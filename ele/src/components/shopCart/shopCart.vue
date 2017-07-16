<template>
  <div class="">
    <div class="shopCart">
      <div class="content">
        <div class="content-left" @click="listToggle">
          <div class="logo-wrapper">
            <div class="badge" v-show="totalCount">{{totalCount}}</div>
            <div class="logo" :class="{'active':totalPrice}"><i class="icon-shopping_cart"></i></div>
          </div>
          <div class="price" :class="{'active':totalPrice}">￥{{totalPrice}}</div>
          <div class="desc">另需要配送费￥{{deliveryPrice}}元</div>
        </div>
        <div class="content-right" :class="{'enough':totalPrice>=minPrice}">{{payDesc}}</div>
      </div>

      <div class="ball-container">
        <div v-for="ball in balls">
          <transition name="drop" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
            <div class="ball" v-show="ball.show">
              <div class="inner inner-hook"></div>
            </div>
          </transition>
        </div>
      </div>

      <transition name="transHeight">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="setEmpty()">清空</span>
          </div>
          <div class="list-content" ref="foodlist">
            <ul>
              <li class="food" v-for="food in selectFoods">
                <span class="name">{{food.name}}</span>
                <div class="price"><span>￥{{food.price * food.count}}</span></div>
                <div class="cartcontrol-wrapper"><cartcontrol :food="food"></cartcontrol></div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade-backdrop">
      <div class="backdrop" v-show="showBackdrop" @click="hideBackdrop"></div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import cartcontrol from 'components/cartcontrol/cartcontrol';
  import backdrop from 'components/backdrop/backdrop';
  import BScroll from 'better-scroll';

  export default {
    props: {
      selectFoods: {
        type: Array,
        default: []
      },
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        balls: [{
          show: false
        }, {
          show: false
        }, {
          show: false
        }, {
          show: false
        }, {
          show: false
        }],
        dropBalls: [],
        listShow: false
      };
    },
    created() {
      this.$root.eventHub.$on('cart.add', this.drop);
    },
    computed: {
      showBackdrop() {
        if (this.listShow && this.totalPrice) {
          return true;
        }
        this.listShow = false;
        return false;
      },
      totalPrice() {
        let total = 0;
        this.selectFoods.forEach((food) => {
          if (food.count) {
            total += food.price * food.count;
          }
        });
        return total;
      },
      totalCount() {
        let count = 0;
        this.selectFoods.forEach((food) => {
          count += food.count;
        });
        return count;
      },
      leftAmount() {
        if (this.minPrice - this.totalPrice > 0 && totalPrice) {
          return true;
        }
        return false;
      },
      payDesc() {
        let diff = this.minPrice - this.totalPrice;
        if (!this.totalPrice) {
          return `￥${this.totalPrice}起送`;
        } else if (diff > 0) {
          return `还差￥${diff}元`;
        } else {
          return '去结算';
        }
      }
    },
    methods: {
      drop(el) {
        for (let i = 0, l = this.balls.length; i < l; i++) {
          let ball = this.balls[i];
          if (!ball.show) {
            ball.show = true;
            ball.el = el;
            this.dropBalls.push(ball);
            return;
          }
        }
      },
      setEmpty() {
        this.selectFoods.forEach((food) => {
          food.count = 0;
        });
      },
      hideBackdrop() {
        this.listShow = false;
      },
      _initScroll() {
        this.foodlistScroll = new BScroll(this.$refs.foodlist, { click: true });
      },
      listToggle() {
        if (!this.selectFoods.length) {
          return;
        }
        this.listShow = !this.listShow;
        if (this.listShow) {
          this.$nextTick(() => {
            if (!this.foodlistScroll) {
              this._initScroll();
            } else {
              this.foodlistScroll.refresh();
            }
          });
        }
      },
      beforeEnter(el) {
        let count = this.balls.length;
        while (count--) {
          let ball = this.balls[count];
          if (ball.show) {
            let rect = ball.el.getBoundingClientRect();
            let x = rect.left - 32;
            let y = -(window.innerHeight - rect.top - 22);
            el.style.display = '';
            el.style.webkitTransform = `translate3d(0,${y}px,0)`;
            el.style.transform = `translate3d(0,${y}px,0)`;
            let inner = el.querySelector('.inner-hook');
            inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
            inner.style.transform = `translate3d(${x}px,0,0)`;
          }
        }
      },
      enter(el) {
        el.offsetHeight; // 触发浏览器重绘，offsetWidth、offsetTop等方法都可以触发
        this.$nextTick(() => {
          el.style.webkitTransform = 'translate3d(0,0,0)';
          el.style.transform = 'translate3d(0,0,0)';
          let inner = el.querySelector('.inner-hook');
          inner.style.webkitTransform = 'translate3d(0,0,0)';
          inner.style.transform = 'translate3d(0,0,0)';
        });
      },
      afterEnter(el) {
        let ball = this.dropBalls.shift();
        if (ball) {
          ball.show = false;
          el.style.display = 'none';
        }
      }
    },
    components: {
      cartcontrol,
      backdrop
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  @import "./shopCart.styl"
</style>
