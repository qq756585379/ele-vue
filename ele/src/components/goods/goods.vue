<template>
  <div class="goods">

    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" @click="menuClick(index,$event)" :class="index==menuCurrentIndex?'menu-item-selected':'menu-item'">
          <span class="text"><iconMap v-show="item.type>0" :iconType="item.type"></iconMap>{{item.name}}</span>
        </li>
      </ul>
    </div>

    <div class="foods-wrapper" id="wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" class="food-list food-list-hook">
          <h1>{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item" @click="goDetail(food)">
              <div class="icon"><img width="57" height="57" :src="food.icon"/></div>
              <div class="content">
                <h2>{{food.name}}</h2>
                <p class="description" v-show="food.description">{{food.description}}</p>
                <div class="sell-info">
                  <span class="sellCount">月售{{food.sellCount}}份</span>
                  <span class="rating">好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="newPrice"><span class="unit">￥</span>{{food.price}}</span>
                  <span v-show="food.oldPrice" class="oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol :food="food"></cartcontrol>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <shopCart :deliveryPrice="seller.deliveryPrice" :minPrice = "seller.minPrice" :selectFoods="selectFoods"></shopCart>
    <foodDetail :food="selectedFood" v-if="selectedFood" ref="myFood"></foodDetail>
  </div>
</template>

<script type="text/ecmascript-6">
  import iconMap from 'components/iconMap/iconMap';
  import BScroll from 'better-scroll';
  import shopCart from 'components/shopCart/shopCart';
  import cartcontrol from 'components/cartcontrol/cartcontrol';
  import foodDetail from 'components/foodDetail/foodDetail';
  import axios from 'axios';
  import Vue from 'vue';

  const ERR_OK = 0;

  export default {
    props: { seller: Object },
    created() {
      axios.get('static/data.json').then((res) => {
        this.goods = res.data.goods;
        this.$nextTick(() => {
          this._initScroll(); // 初始化scroll
          this._calculateHeight(); // 初始化列表高度列表
        });
      });
    },
    data() {
      return {
        goods: [],
        listHeight: [],
        foodsScrollY: 0,
        selectedFood: ''
      };
    },
    computed: {
      menuCurrentIndex() {
        for (let i = 0, l = this.listHeight.length; i < l; i++) {
          let topHeight = this.listHeight[i];
          let bottomHeight = this.listHeight[i + 1];
          if (!bottomHeight || (this.foodsScrollY >= topHeight && this.foodsScrollY < bottomHeight)) {
            return i;
          }
        }
        return 0;
      },
      selectFoods() {
        let foods = [];
        this.goods.forEach((good) => {
          good.foods.forEach((food) => {
            if (food.count) {
              foods.push(food);
            }
          });
        });
        return foods;
      }
    },
    methods: {
      _initScroll() {
        this.menuWrapper = new BScroll(this.$refs.menuWrapper, { click: true });
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, { click: true, probeType: 3 });
        // 监控滚动事件
        this.foodsScroll.on('scroll', (pos) => {
          this.foodsScrollY = Math.abs(Math.round(pos.y));
        });
      },
      _calculateHeight() {
        let foodList = this.$refs.foodsWrapper.querySelectorAll('.food-list-hook');
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0, l = foodList.length; i < l; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
      },
      menuClick(index, event) {
        if (!event._constructed) {
          return;
        }
        this.foodsScroll.scrollTo(0, -this.listHeight[index], 300);
      },
      goDetail(food) {
        this.selectedFood = food;
        this.$nextTick(() => {
          this.$refs.myFood.showToggle();
        });
      }
    },
    components: {
      iconMap,
      shopCart,
      cartcontrol,
      foodDetail
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixin';
  @import "./goods.styl";
</style>
