export const API_BASE = "/api";
export const GRAPH_BASE = "https://graph.facebook.com/v6.0";

let SERVER_IP_URL;
let CHAT_API_URL;
let API_KEY1;
let RAZORPAY_KEY1;
let MIXPANEL_ID1;

SERVER_IP_URL = "https://api.raphacure.co.in";
// SERVER_IP_URL = "http://localhost:3010";
CHAT_API_URL = "https://chat-api.raphacure.com";
API_KEY1 = "3G56qgYAvbKTRtmlVF9FGR81OfMdv7mAalwITG8hsweskPcfdchl1x7xfAljbajT";
RAZORPAY_KEY1 = "rzp_test_YMLgf8AoYKa96B";
export const GEMINI_API_KEY = "AIzaSyBur_KTcarlfuPGF62dYdAkD0qjctxDgnI";

const hostName = window.location.hostname;
const allowedProdHostnames = [
  'clinic.raphacure.com',
  "hrms.raphacure.com",
  'myhrms.raphacure.com',
  'main.dyysec1z5seig.amplifyapp.com',
  "hrms.raphacure.com",
  'localhost',
  'raphaplus',
  'raphadoc'
];

let isProdEnv = false;
if (typeof window !== "undefined") {
  isProdEnv = allowedProdHostnames.some(allowedHost => hostName.includes(allowedHost));
}
if (isProdEnv) {
  SERVER_IP_URL = "https://api.raphacure.com";
  API_KEY1 = "WFBkQeEm2HlxnFAZBiRzDwo3QGTA1obUrr0QjHk6ULPX7zMEvHYyqcN5Q0zAq5oq";

  RAZORPAY_KEY1 = "rzp_live_U53u76LmNqgRlU";
  MIXPANEL_ID1 = "694cbea44058e24dfb1eadd28c383576";
}
// production x-api-key => WFBkQeEm2HlxnFAZBiRzDwo3QGTA1obUrr0QjHk6ULPX7zMEvHYyqcN5Q0zAq5oq
// staging x-api-key => 3G56qgYAvbKTRtmlVF9FGR81OfMdv7mAalwITG8hsweskPcfdchl1x7xfAljbajT

export const SERVER_IP = SERVER_IP_URL;
export const CHAT_API = CHAT_API_URL;
const map_url =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyDILWRZ3d-zi2xIjmATRtOUNkFJ8kEr4p0&libraries=places";
export const GOOGLE_MAP_URL = map_url;
export const MIXPANEL_ID = MIXPANEL_ID1;

export const MAP_KEY = "AIzaSyBItpkRUSb_676tK37K_3zGTcTVjU--0sw";
export const AUTOCOMPLETE_MAP_KEY = "AIzaSyDiKV3OLHnGFYI4qhcIKjk7tzG-RXeUI5s";
export const RAZORPAY_KEY = RAZORPAY_KEY1;
export const HIDE_NAV_BAR = false;
export const API_KEY = API_KEY1;
