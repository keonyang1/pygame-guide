document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre").forEach((pre) => {
    // 복사 버튼 생성
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
    
    // 버튼 기본적으로 숨김 처리
    button.style.display = "none";

    // position: relative 설정
    pre.style.position = "relative";

    // 버튼을 pre 요소에 추가
    pre.appendChild(button);

    // 코드블록(코드 태그) 찾기
    const codeBlock = pre.querySelector("code");

    // 마우스가 pre에 들어오면 버튼 보이기
    pre.addEventListener("mouseenter", () => {
      button.style.display = "block";
    });

    // 마우스가 pre에서 나가면 버튼 숨기기
    pre.addEventListener("mouseleave", () => {
      button.style.display = "none";
      // 버튼 텍스트를 기본값으로 초기화
      button.innerText = "📋 Copy";
    });

    // 복사 버튼 클릭 이벤트
    button.addEventListener("click", () => {
      navigator.clipboard.writeText(codeBlock.innerText).then(() => {
        button.innerText = "✅ Copied!";
      }).catch(() => {
        button.innerText = "❌ Failed!";
      });

      setTimeout(() => {
        button.innerText = "📋 Copy";
      }, 2000);
    });
  });
});