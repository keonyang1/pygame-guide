document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre code").forEach((codeBlock) => {
    const button = document.createElement("button");
    button.innerText = "📋 Copy";
    button.style.position = "absolute";
    button.style.top = "8px";
    button.style.right = "8px";
    button.style.fontSize = "12px";
    button.style.padding = "4px 6px";
    button.style.borderRadius = "6px";
    button.style.background = "#c8a2cb";  // 보라색 느낌
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.cursor = "pointer";

    const pre = codeBlock.parentNode;
    pre.style.position = "relative";
    pre.appendChild(button);

    button.addEventListener("click", () => {
      navigator.clipboard.writeText(codeBlock.innerText);
      button.innerText = "✅ Copied!";
      setTimeout(() => (button.innerText = "📋 Copy"), 2000);
    });
  });
});
