// jQuery("#js-drawer-button").on("click",function(e){
// e.preventDefault();
// jQuery("#js-drawer-button").toggleClass("is-checked");
// jQuery("#js-drawer-content").toggleClass("is-checked");
// });

//　ドロワー表示
const drawerButton = document.querySelector("#js-drawer-button");
const drawerContent = document.querySelector("#js-drawer-content");

drawerButton.addEventListener("click", function (e) {
  e.preventDefault();

  drawerButton.classList.toggle("is-checked");
  drawerContent.classList.toggle("is-checked");

  document.body.classList.toggle("is-fixed");
});

//　ドロワーコンテンツクリック後ドロワー非表示
document
  .querySelectorAll('#js-drawer-content a[href^="#"]')
  .forEach(function (link) {
    link.addEventListener("click", function (e) {
      document
        .querySelector("#js-drawer-button")
        .classList.remove("is-checked");
      document
        .querySelector("#js-drawer-content")
        .classList.remove("is-checked");
    });
  });

