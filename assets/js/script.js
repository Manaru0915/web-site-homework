document.addEventListener("scroll", function () {
  const element = document.getElementById("sticky-text"); // 固定テキスト
  const triggerHeight = 400; // どこまで固定するか
  const endHeight = 900; // どこから通常のスクロールに戻るか
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollY);
  if (scrollY < triggerHeight) {
      // 固定表示（中央にとどまる）
      element.style.position = "fixed";
      element.style.top = "50%";
      element.style.left = "50%";
      element.style.transform = "translate(-50%, -50%)";
  } else if (scrollY >= triggerHeight && scrollY < endHeight) {
      // 上方向へスムーズにスライド
      element.style.position = "fixed"; // まだ固定
      element.style.top = "50%"; // 位置は変えない
      element.style.transform = `translate(-50%, ${-(scrollY - triggerHeight)}px)`; // 上に向かって移動
  } else {
      // 通常のスクロールアウト
      element.style.position = "absolute";
      element.style.top = `${endHeight - triggerHeight}px`; // 上に流れる位置を固定
      element.style.left = "50%";
      element.style.transform = "translateX(-50%)";
  }
});



