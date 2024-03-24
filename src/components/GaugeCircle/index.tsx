import React from "react";
import style from "./style.module.css"

interface CircleProps {
    percent: number
}

export function GaugeCircle(props: CircleProps) {
    return (
        <div className={`${style.gauge_circle} ${style.gauge_animate}`} style={{
            "--circle-size": "100px",
            "--circumference": "282.7433388230814",
            "--percent-to-px": "2.827433388230814px",
            "--gap-percent": "100",
            "--offset-factor": "0",
        }}>
            <svg
                fill="none"
                height={32}
                strokeWidth={2}
                viewBox="0 0 100 100"
                width={32}>
                <circle
                    cx={50}
                    cy={50}
                    r={45}
                    strokeWidth={10}
                    strokeDashoffset={0}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="gauge_arcSecondary__s11_g"
                    stroke="var(--ds-gray-alpha-400)"
                    style={{
                        opacity: 1,
                        "--stroke-percent": 99,
                    }}
                />
                <circle
                    cx={50}
                    cy={50}
                    r={45}
                    strokeWidth={10}
                    strokeDashoffset={0}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="gauge_arc__UGu7u"
                    data-geist-progress-circle-fg=""
                    stroke="var(--wv-red)"
                    style={{
                        opacity: 1,
                        "--stroke-percent": props.percent ?? 0,
                    }}
                />
            </svg>
        </div>
    )
}