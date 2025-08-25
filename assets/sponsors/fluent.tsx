import * as React from "react";

const SVGComponent = ({
    fill = "#000000",
    isHovered,
    ...props
}: { fill?: string; isHovered?: boolean } & React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 85 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <rect width="85" height="16" fill="url(#pattern0_1115_1210)" />
        <defs>
            <pattern
                id="pattern0_1115_1210"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
            >
                <use
                    xlinkHref="#image0_1115_1210"
                    transform="matrix(0.00784314 0 0 0.0416667 -0.00588235 0)"
                />
            </pattern>
            <image
                id="image0_1115_1210"
                width="129"
                height="24"
                preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,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"
            />
        </defs>
    </svg>
);

export default SVGComponent;
