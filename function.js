/** @format */

const cursorDot = document.getElementById("cursor-dot");
const cursorOutline = document.getElementById("cursor-outline");
window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  //   cursorOutline.style.left = `${posX}px`;
  //   cursorOutline.style.top = `${posY}px`;
  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    {duration: 500, fill: "forwards"}
  );
});

const q = document.querySelector(".q");
const a = document.querySelector(".a");
const arr = document.querySelector(".arrow2");
for (let i = 0; i < q.length; i++) {
  q[i].addEventListener("click", () => {
    a[i].classList.toggle("a-opened");
    arr[i].classList.toggle("arrow-rotated");
  });
}
