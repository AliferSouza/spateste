function usePath(){
const root = document.querySelector("#app");
const style = document.querySelector("style");

const ComponentsPrivate = `${location.origin}/private/components`;
const PagesPrivate = `${location.origin}/private/pages`;
const ImgPrivate = `${location.origin}/private/static/img`;
const DataPrivate = `${location.origin}/private/static/data`;
const StaticPrivate = `${location.origin}/private/static`;

const Components = `${location.origin}/src/components`;
const Pages = `${location.origin}/src/pages`;
const Img = `${location.origin}/src/static/img`;
const Data = `${location.origin}/src/static/data`;
const Static = `${location.origin}/src/static`;

return usePath = {
  origin: location.origin,
  Components,
  Pages,
  Img,
  Data,
  Static,
  ComponentsPrivate,
  PagesPrivate,
  ImgPrivate,
  DataPrivate,
  StaticPrivate,
  root,
  style,
}
}