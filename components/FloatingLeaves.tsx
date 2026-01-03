// components/FloatingLeaves.tsx
import React from "react";

type Leaf = {
  left: string;
  drift: string;
  dur: string;
  delay: string;
  size: string;
  rotate: string;
  wobbleDur: string;
  opacity: number;
  src: string;
  blur: string;
};

const LEAVES: Leaf[] = [
  {
    left: "10vw",
    drift: "14vw",
    dur: "16s",
    delay: "-6s",
    size: "46px",
    rotate: "18deg",
    wobbleDur: "5.8s",
    opacity: 0.55,
    src: "/leaves/leaf-1.svg",
    blur: "0px"
  },
  {
    left: "28vw",
    drift: "-10vw",
    dur: "22s",
    delay: "-14s",
    size: "36px",
    rotate: "28deg",
    wobbleDur: "7.2s",
    opacity: 0.42,
    src: "/leaves/leaf-2.svg",
    blur: "0.4px"
  },
  {
    left: "52vw",
    drift: "9vw",
    dur: "18s",
    delay: "-9s",
    size: "52px",
    rotate: "22deg",
    wobbleDur: "6.4s",
    opacity: 0.48,
    src: "/leaves/leaf-3.svg",
    blur: "0px"
  },
  {
    left: "72vw",
    drift: "-14vw",
    dur: "24s",
    delay: "-18s",
    size: "40px",
    rotate: "14deg",
    wobbleDur: "8.2s",
    opacity: 0.38,
    src: "/leaves/leaf-1.svg",
    blur: "0.6px"
  },
  {
    left: "88vw",
    drift: "-8vw",
    dur: "20s",
    delay: "-11s",
    size: "44px",
    rotate: "20deg",
    wobbleDur: "6.9s",
    opacity: 0.46,
    src: "/leaves/leaf-2.svg",
    blur: "0.2px"
  }
];

export default function FloatingLeaves() {
  return (
    <div className="leaf-layer" aria-hidden="true">
      {LEAVES.map((l, i) => (
        <span
          key={i}
          className="leaf"
          style={
            {
              ["--left" as any]: l.left,
              ["--dx" as any]: l.drift,
              ["--dur" as any]: l.dur,
              ["--delay" as any]: l.delay
            } as React.CSSProperties
          }
        >
          <span
            className="leaf__inner"
            style={
              {
                ["--size" as any]: l.size,
                ["--rot" as any]: l.rotate,
                ["--wobbleDur" as any]: l.wobbleDur,
                ["--op" as any]: String(l.opacity),
                ["--blur" as any]: l.blur
              } as React.CSSProperties
            }
          >
            <img src={l.src} alt="" draggable={false} />
          </span>
        </span>
      ))}
    </div>
  );
}
