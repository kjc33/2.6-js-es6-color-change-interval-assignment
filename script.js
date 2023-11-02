/*
    You are to use arrow functions for this task.

    Every second, change the background color of <div> according to the elements in `colours` array. The display of color should repeat from the top.

    Hint:
    - Look for interval setting functions.
    - You should use DOM Manipulation to update the style of <div> element.

    Code Challenge:
    - Provide a checkbox "stop". When it is checked, the colour change will not repeat and end at the last element.
*/

const colours = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
];

let currentIndex = 0;
let isColorChangeStopped = false;
let colorIntervals;

colorFunc = (colours) => {
  document.getElementById("target").style.backgroundColor = colours[currentIndex].value;
  currentIndex = (currentIndex + 1) % colours.length;
}

document.getElementById("stop").addEventListener("change", function() {
  isColorChangeStopped = this.checked;

  if (isColorChangeStopped) {
    clearInterval(colorIntervals);
  } else {
    colorIntervals = setInterval(() => colorFunc(colours), 1000);
  }
});

colorIntervals = setInterval(() => colorFunc(colours), 1000);
