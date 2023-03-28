import WfRequest from "../Request/index";
export function getHomeHotSuggests() {
  return WfRequest.get({
    url: "/home/hotSuggests",
  });
}
export function getHomeCategories() {
  return WfRequest.get({
    url: "/home/categories",
  });
}

export function getHomehouselist(CurrentPage) {
  return WfRequest.get({
    url: "/home/houselist",
    params: {
      page: CurrentPage,
    },
  });
}
