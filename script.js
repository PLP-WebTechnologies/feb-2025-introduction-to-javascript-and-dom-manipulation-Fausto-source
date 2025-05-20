// Change text content
const styles = ['style-one', 'style-two', 'style-three'];
let index = 0;

document.getElementById("change-text-btn").addEventListener("click", function () {
  const title = document.getElementById("main-title");

  // Remove previous styles
  styles.forEach(style => title.classList.remove(style));

  // Change text
  title.textContent = `Style: ${styles[index]}`;

  // Apply the new style
  title.classList.add(styles[index]);

  // Move to the next style index
  index = (index + 1) % styles.length;
});

// Change CSS style
document.getElementById("change-style-btn").addEventListener("click", function () {
  document.getElementById("description").classList.toggle("highlight");
});

// Add or remove element
document.getElementById("toggle-element-btn").addEventListener("click", function () {
  const section = document.getElementById("dynamic-section");
  const existing = document.getElementById("new-paragraph");

  if (existing) {
    section.removeChild(existing);
  } else {
    const p = document.createElement("p");
    p.id = "new-paragraph";
    p.textContent = "This paragraph was added dynamically!";
    section.appendChild(p);
  }
});

