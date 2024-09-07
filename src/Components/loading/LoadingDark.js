const LoadingDark = (width) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="211" height="211" style={{ shapeRendering: "auto", display: "block", background: "transparent" }} xmlnsXlink="http://www.w3.org/1999/xlink">
            <g>
                <circle fill="#2c2c2c" r="10" cy="50" cx="84">
                <animate begin="0s" keySplines="0 0.5 0.5 1" values="10;0" keyTimes="0;1" calcMode="spline" dur="0.625s" repeatCount="indefinite" attributeName="r" />
                <animate begin="0s" values="#2c2c2c;#2c2c2c;#2c2c2c;#2c2c2c;#2c2c2c" keyTimes="0;0.25;0.5;0.75;1" calcMode="discrete" dur="2.5s" repeatCount="indefinite" attributeName="fill" />
                </circle>
                <circle fill="#2c2c2c" r="10" cy="50" cx="16">
                <animate begin="0s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.5s" repeatCount="indefinite" attributeName="r" />
                <animate begin="0s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.5s" repeatCount="indefinite" attributeName="cx" />
                </circle>
                <circle fill="#2c2c2c" r="10" cy="50" cx="50">
                <animate begin="-0.625s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.5s" repeatCount="indefinite" attributeName="r" />
                <animate begin="-0.625s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.5s" repeatCount="indefinite" attributeName="cx" />
                </circle>
                <circle fill="#2c2c2c" r="10" cy="50" cx="84">
                <animate begin="-1.25s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.5s" repeatCount="indefinite" attributeName="r" />
                <animate begin="-1.25s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.5s" repeatCount="indefinite" attributeName="cx" />
                </circle>
                <circle fill="#2c2c2c" r="10" cy="50" cx="16">
                <animate begin="-1.875s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.5s" repeatCount="indefinite" attributeName="r" />
                <animate begin="-1.875s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.5s" repeatCount="indefinite" attributeName="cx" />
                </circle>
            </g>
        </svg>
    )
}

export default LoadingDark;