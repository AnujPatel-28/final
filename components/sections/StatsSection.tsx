"use client";

import React, { useEffect, useState, useRef, ReactElement } from "react";
import { Users, Building, Globe, Award } from "lucide-react";

// --- Types & Interfaces ---

interface StatItem {
  id: number;
  label: string;
  value: number;
  suffix: string;
  // We use ReactElement to allow us to clone it later with new props (className)
  icon: ReactElement;
}

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

// --- Configuration Data ---

const stats: StatItem[] = [
  {
    id: 1,
    label: "Candidates Placed",
    value: 1200,
    suffix: "+",
    icon: <Users />,
  },
  {
    id: 2,
    label: "Partner Companies",
    value: 85,
    suffix: "+",
    icon: <Building />,
  },
  {
    id: 3,
    label: "Industries Served",
    value: 12,
    suffix: "",
    icon: <Globe />,
  },
  {
    id: 4,
    label: "Success Rate",
    value: 98,
    suffix: "%",
    icon: <Award />,
  },
];

// --- Reusable Counter Component ---

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState<number>(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = countRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      // Ease-out logic: 1 - (1 - x)^3
      const percentage = Math.min(progress / duration, 1);
      const easeOut = 1 - Math.pow(1 - percentage, 3);

      setCount(Math.floor(easeOut * end));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return (
    <span ref={countRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

// --- Main Section Component ---

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white/50 backdrop-blur-sm border-y border-blue-100 py-16 relative overflow-hidden">
      {/* Optional: Subtle background pattern could go here */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x md:divide-blue-200">

          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center p-4">

              {/* Icon Bubble */}
              <div className="mb-4 bg-blue-50 p-3 rounded-full shadow-sm ring-1 ring-blue-100">
                {/* React.cloneElement allows us to inject the className into the icon 
                  defined in the config object without repeating the className string there.
                */}
                {React.cloneElement(stat.icon, {
                  className: "w-6 h-6 text-blue-600"
                } as React.SVGProps<SVGSVGElement>)}
              </div>

              {/* Animated Number */}
              <div className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-[#262F40]">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className="text-slate-500 text-sm md:text-base font-medium uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default StatsSection;