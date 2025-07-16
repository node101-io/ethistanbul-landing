import * as React from "react";

const SVGComponent = ({
  fill = "#000000",
  isHovered,
  ...props
}: { fill?: string; isHovered?: boolean } & React.SVGProps<SVGSVGElement>) => (

  <svg viewBox="-27 -14 200 70" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <g clipPath="url(#clip0_791_14)">
  <path d="M61.8246 39.4971H56.5974V0.49707H61.8246V39.4971Z" fill={fill}/>
  <path d="M140.742 39.4971H135.514V0.49707H140.742V39.4971Z" fill={fill}/>
  <path d="M71.4206 39.4971H66.1979V0.49707H71.4206V39.4971Z" fill={fill}/>
  <path d="M95.5448 39.4971H90.5855L90.527 39.4381L76.4072 24.9045L80.6764 20.8169L95.5448 36.5359V39.4971Z" fill={fill}/>
  <path d="M74.1003 23.4102V16.1162L90.5403 0.49707H95.0316V3.40379L94.9684 3.46283L74.1003 23.4102Z" fill={fill}/>
  <path d="M25.5427 39.4971H21.133V36.7312L47.251 0.510742H52.3828V23.4965H47.1556V9.14459L25.5427 39.4971Z" fill={fill}/>
  <path d="M52.3828 39.4972H47.1556V31.0813H34.7255L38.4178 26.1626H52.3964L52.3828 39.4972Z" fill={fill}/>
  <path d="M10.5513 5.41579H0.809875V0.49707H10.5513V5.41579Z" fill={fill}/>
  <path d="M18.4581 39.4971H13.2263V0.49707H29.235V5.41579H18.4581V39.4971Z" fill={fill}/>
  <path d="M101.667 39.4971H97.3295V36.3815V36.3406L110.668 6.26514L113.597 12.5509L113.557 12.6372L101.667 39.4971Z" fill={fill}/>
  <path d="M126.944 23.2785H121.163L112.144 3.00865L113.261 0.49707H116.808L126.944 23.2785Z" fill={fill}/>
  <path d="M132.822 39.4969H128.384L124.538 30.8676H108.429L110.568 25.958H128.139L132.822 36.4948V39.4969Z" fill={fill}/>
  </g>
  <defs>
  <clipPath id="clip0_791_14">
  <rect width="139.932" height="39" fill="white" transform="translate(0.809875 0.49707)"/>
  </clipPath>
  </defs>
  </svg>
);

export default SVGComponent;