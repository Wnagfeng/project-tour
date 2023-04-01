<template>
  <div class="Wrapper">
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
          :Data="mainPart?.dynamicModule?.facilityModule?.houseFacility"
        ></DetailSectionInnerfacilityModule>
      </DetailSection>
      <DetailSection title="房东介绍" moretext="查看房东主页">
        <DetailSectionInnerLandlordModule
          :Data="mainPart?.dynamicModule?.landlordModule"
        ></DetailSectionInnerLandlordModule>
      </DetailSection>
      <DetailSection title="热门评论" moretext="查看全部评论37条">
        <DetailSectionInnerCommentModule
          :Data="mainPart?.dynamicModule?.commentModule"
        ></DetailSectionInnerCommentModule>
      </DetailSection>
      <DetailSection title="预定须知">
        <DetailSectionInnerRulesModule
          :Data="mainPart?.dynamicModule?.rulesModule"
        ></DetailSectionInnerRulesModule>
      </DetailSection>
      <DetailSection title="位置周边" moretext="查看更多周边信息">
        <DetailSectionInnerBmap
          :position="mainPart?.dynamicModule?.positionModule"
        ></DetailSectionInnerBmap>
      </DetailSection>
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
</script>
<style scoped lang="less">
.main {
  width: 100%;
}
</style>
