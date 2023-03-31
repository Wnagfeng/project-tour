import WfRequest from "../Request/index";
export function getDetailDate(houseId) {
  return WfRequest.get({
    url: "/detail/infos",
    params: {
      houseId,
    },
  });
}
