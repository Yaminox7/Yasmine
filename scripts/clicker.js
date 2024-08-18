Array.from(document.getElementsByClassName("card")).forEach((card) => {
    card.onclick = () => {
        console.log(card)
    };
})

// function effect(e) {
//   for (const card of document.getElementsByClassName("card")) {
//     const rect = card.getBoundingClientRect(),
//       x = e.clientX - rect.left,
//       y = e.clientY - rect.top;

//     card.style.setProperty("--mouse-x", `${x}px`);
//     card.style.setProperty("--mouse-y", `${y}px`);
//   }
// }