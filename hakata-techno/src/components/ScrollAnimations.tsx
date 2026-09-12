"use client";

// 元テーマ common.js のスクロール演出を移植:
// - .animation-title のテキストを1文字ずつ <span class="series-text"> に分割
// - 200ms 後に .pages-head-title へ on を付与(タイトルの文字送りアニメーション)
// - .animation / .animation-bottom が画面下端から 200px / 50px 入ったら on を付与
import { useEffect } from "react";

function wrapTextNodes(element: Node) {
  [...element.childNodes].forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const frag = document.createDocumentFragment();
      for (const ch of node.nodeValue ?? "") {
        if (/\S/.test(ch)) {
          const span = document.createElement("span");
          span.className = "series-text";
          span.textContent = ch;
          frag.appendChild(span);
        } else {
          frag.appendChild(document.createTextNode(ch));
        }
      }
      node.replaceWith(frag);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      wrapTextNodes(node);
    }
  });
}

export default function ScrollAnimations() {
  useEffect(() => {
    document
      .querySelectorAll(".animation-title")
      .forEach((el) => wrapTextNodes(el));

    const titleTimer = setTimeout(() => {
      document.querySelector(".pages-head-title")?.classList.add("on");
    }, 200);

    const onScroll = () => {
      const scrollBottom = window.scrollY + window.innerHeight;
      document
        .querySelectorAll<HTMLElement>(".animation, .animation-bottom")
        .forEach((el) => {
          const elemTop = el.getBoundingClientRect().top + window.scrollY;
          const bottomPoint = el.classList.contains("animation-bottom")
            ? 50
            : 200;
          if (elemTop < scrollBottom - bottomPoint) el.classList.add("on");
        });
    };
    // profileページの pages-nav 現在位置ハイライト(元テーマの setCurrent を移植)
    const navLinks = [
      ...document.querySelectorAll<HTMLAnchorElement>(".pages-nav-list > li > a"),
    ];
    const sections = [
      ...document.querySelectorAll<HTMLElement>(".pages-section"),
    ];
    const setCurrent = () => {
      if (!navLinks.length || !sections.length) return;
      const adjust = window.innerWidth > 767 ? 140 : 120;
      const pos = window.scrollY + adjust;
      let currentId = sections[0].id;
      sections.forEach((sec) => {
        if (sec.getBoundingClientRect().top + window.scrollY <= pos) {
          currentId = sec.id;
        }
      });
      navLinks.forEach((a) =>
        a.classList.toggle("is-current", a.getAttribute("href") === `#${currentId}`)
      );
    };

    const onScrollAll = () => {
      onScroll();
      setCurrent();
    };
    window.addEventListener("scroll", onScrollAll, { passive: true });
    window.addEventListener("resize", setCurrent);
    onScrollAll();
    return () => {
      clearTimeout(titleTimer);
      window.removeEventListener("scroll", onScrollAll);
      window.removeEventListener("resize", setCurrent);
    };
  }, []);

  return null;
}
