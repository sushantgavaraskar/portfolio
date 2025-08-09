import React from 'react';

type LinkedInIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
};

const LinkedInIcon: React.FC<LinkedInIconProps> = ({ size = 24, className, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M20.447 20.452h-3.554V14.83c0-1.345-.027-3.073-1.872-3.073-1.873 0-2.159 1.462-2.159 2.973v5.722H9.309V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM6.86 20.452H3.813V9h3.047v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0"/>
    </svg>
  );
};

export default LinkedInIcon;


