"use client";
import { useEffect } from "react";

export default function CallButton() {
  useEffect(() => {
    // ✅ Create floating Call button dynamically
    const button = document.createElement("a");
    button.href = "tel:+919058824450"; // your phone number
    button.id = "floating-call-btn";
    button.title = "Call Now";
    button.style.position = "fixed";
    button.style.bottom = "70px";
    button.style.right = "20px"; // 👉 stays on right side
    button.style.zIndex = "2147483647";
    button.style.backgroundColor = "#2331fdff"; // blue (you can change color)
    button.style.color = "#fff";
    button.style.borderRadius = "50%";
    button.style.width = "55px";
    button.style.height = "55px";
    button.style.display = "flex";
    button.style.alignItems = "center";
    button.style.justifyContent = "center";
    button.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
    button.style.cursor = "pointer";
    button.style.transition = "all 0.3s ease";
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24" width="28" height="28">
        <path stroke-linecap="round" stroke-linejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.9 19.9 0 0 1-8.63-3.07 19.53 19.53 0 0 1-6-6A19.9 19.9 0 0 1 2.08 5.1 2 2 0 0 1 4.06 3h3a2 2 0 0 1 2 1.72 12.44 12.44 0 0 0 .7 2.73 2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.34-1.34a2 2 0 0 1 2.11-.45 12.44 12.44 0 0 0 2.73.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    `;

    // Hover animation
    button.addEventListener("mouseenter", () => {
      button.style.transform = "scale(1.1)";
    });
    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)";
    });

    document.body.appendChild(button);

    // Cleanup on unmount
    return () => {
      if (document.getElementById("floating-call-btn")) {
        document.body.removeChild(button);
      }
    };
  }, []);

  return null;
}
