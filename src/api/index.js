import ajax from "./config"

/* 登录接口 */
export const reqLogin = (data) => ajax("login/cellphone", data, "GET");

/* 首页广告 */
export const reqBanner = (data) => ajax("banner", data, "GET");

/* 推荐歌单 */
export const reqPersonalized = (data) => ajax("personalized", data, "GET");

/* 歌单详情 */
export const reqPlaylistDetail = (data) => ajax("playlist/detail", data, "GET");

/* 歌曲url */
export const reqSongUrl = (data) => ajax("song/url", data, "GET");

/* 歌曲详情 */
export const reqSongDetail = (data) => ajax("song/detail", data, "GET");