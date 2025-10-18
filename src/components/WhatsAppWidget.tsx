"use client";
import { useEffect } from "react";

export default function WhatsAppWidget() {
  useEffect(() => {
    // load script
    const s = document.createElement("script");
    s.src = "https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js";
    s.async = true;
    document.body.appendChild(s);

    const wa_btnSetting = {
      btnColor: "#16BE45",
      ctaText: "",
      cornerRadius: 40,
      marginBottom: 50,
      marginLeft: 20,
      marginRight: 20,
      btnPosition: "left", // or "right"
      whatsAppNumber: "919058824450",
      welcomeMessage: "Hello",
      zIndex: 2147483000,
      btnColorScheme: "light",
    };

    const tryInit = () => {
      // @ts-ignore
      if (typeof window !== "undefined" && typeof window._waEmbed === "function") {
        // @ts-ignore
        window._waEmbed(wa_btnSetting);
        return true;
      }
      return false;
    };

    s.onload = () => tryInit() || poll();
    const poll = () => {
      let attempts = 0;
      const iv = setInterval(() => {
        attempts++;
        if (tryInit() || attempts > 30) clearInterval(iv);
      }, 100);
    };

    return () => {
      document.body.removeChild(s);
    };
  }, []);

  return null;
}
