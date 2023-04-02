<template>
  <div class="Wrapper" ref="DetailRef">
    <Tabcontrol
      :titles="titles"
      class="topCtrl"
      v-if="ShowTabCtrl"
      @tabItemClick="tabClick"
    ></Tabcontrol>
    <van-nav-bar
      title="房屋详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 当detailData有数据的时候在渲染main -->
    <div class="main" v-if="mainPart">
      <DetaileBanner
        :swipe-data="mainPart?.topModule?.housePicture?.housePics"
      ></DetaileBanner>
      <DetailInfos :info-data="mainPart?.topModule"></DetailInfos>
      <DetailSection title="房屋设施" moretext="查看全部设施">
        <DetailSectionInnerfacilityModule
          :ref="getSectionRef"
          name="设施"
          :Data="mainPart?.dynamicModule?.facilityModule?.houseFacility"
        ></DetailSectionInnerfacilityModule>
      </DetailSection>
      <DetailSection title="房东介绍" moretext="查看房东主页">
        <DetailSectionInnerLandlordModule
          :ref="getSectionRef"
          name="房东"
          :Data="mainPart?.dynamicModule?.landlordModule"
        ></DetailSectionInnerLandlordModule>
      </DetailSection>
      <DetailSection title="热门评论" moretext="查看全部评论37条">
        <DetailSectionInnerCommentModule
          :ref="getSectionRef"
          name="评论"
          :Data="mainPart?.dynamicModule?.commentModule"
        ></DetailSectionInnerCommentModule>
      </DetailSection>
      <DetailSection title="预定须知">
        <DetailSectionInnerRulesModule
          :ref="getSectionRef"
          name="须知"
          :Data="mainPart?.dynamicModule?.rulesModule"
        ></DetailSectionInnerRulesModule>
      </DetailSection>

      <DetailSection title="位置周边" moretext="查看更多周边信息">
        <DetailSectionInnerBmap
          :ref="getSectionRef"
          name="周边"
          :position="mainPart?.dynamicModule?.positionModule"
        ></DetailSectionInnerBmap>
      </DetailSection>
      <DetailSection>
        <DetailSectionInnerIntroductionModule
          :Data="mainPart?.introductionModule"
        ></DetailSectionInnerIntroductionModule>
      </DetailSection>
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="" />
      <div class="text">侣行&履行</div>
    </div>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, computed } from "vue";
import { getDetailDate } from "@/service/index";
import DetaileBanner from "./C-pns/Detail-Banner-01.vue";
import DetailInfos from "./C-pns/Detail-infos-02.vue";
import DetailSection from "@/components/Detail-Section/Detail-Section.vue";
import DetailSectionInnerfacilityModule from "./C-pns/Detail-Section-Inner-facilityModule--03.vue";
import DetailSectionInnerLandlordModule from "./C-pns/Detail-Section-Inner-landlordModule--04.vue";
import DetailSectionInnerCommentModule from "./C-pns/Detail-Section-inner-commentModule--05.vue";
import DetailSectionInnerRulesModule from "./C-pns/Detail-Section-inner-rulesModule--06.vue";
import DetailSectionInnerBmap from "./C-pns/Detail-Section-Inner-Bmap--07.vue";
import DetailSectionInnerIntroductionModule from "./C-pns/Detail-Section-Inner-introductionModule--08.vue";
import Tabcontrol from "@/components/Tabcontrol/TabControl.vue";
import { UserScroll } from "@/hooks/UserScroll";
// 获取Detail
const DetailRef = ref();
const { scrollTop } = UserScroll(DetailRef);
const ShowTabCtrl = computed(() => {
  return scrollTop.value >= 300;
});
const route = useRoute();
const router = useRouter();
const houseId = route.params.id;
const detailData = ref({});
const mainPart = computed(() => {
  return detailData.value.mainPart;
});

getDetailDate(houseId).then((res) => {
  detailData.value = res.data;
});
function onClickLeft() {
  router.back();
}

// 动态获取name作为titles
// 在sectionEls中是 name 对应着 $el
const sectionEls = ref({});
const titles = computed(() => {
  return Object.keys(sectionEls.value);
});
// 动态绑定ref并且添加数据到sectionEls
function getSectionRef(value) {
  const name = value.$el.getAttribute("name");
  sectionEls.value[name] = value.$el;
}
// tab点击的逻辑
function tabClick(index) {
  // 我们需要从sectionEls这个对象中获取到我们当前点击的name对应的跟节点并且获取需要滚动的距离
  const key = Object.keys(sectionEls.value)[index]; //从keys这个数组中获取当前的key
  const el = sectionEls.value[key]; //根据key从Sectionels这个对象中获取到跟节点
  // 获取需要滚动的位置
  let position = el.offsetTop;
  console.log(position);

  // 滚动DetailRef到指定的位置
  DetailRef.value.scrollTo({
    top: position - 100,
    behavior: "smooth",
  });
}
</script>
<style scoped lang="less">
.topCtrl {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9;
}
.Wrapper {
  height: 100vh;
  overflow-y: auto;
}
.main {
  width: 100%;
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
}
.footer img {
  width: 123px;
}
.text {
  margin-top: 12px;
  font-size: 12px;
  color: #7699a7;
}
</style>
