import WfRequest from "../Request/index";
export function getHomeHotSuggests() {
  return WfRequest.get({
    url: "/home/hotSuggests",
  });
}
