import WfRequest from "../Request/index";
export function GetCityData() {
  return WfRequest.get({
    url: "city/all",
  });
}
