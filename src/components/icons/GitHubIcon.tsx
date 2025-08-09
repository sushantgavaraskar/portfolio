import React from 'react';

type GitHubIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
};

const GitHubIcon: React.FC<GitHubIconProps> = ({ size = 24, className, ...props }) => {
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
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.82 2.8 1.29 3.48.99.11-.78.42-1.29.76-1.58-2.66-.3-5.47-1.33-5.47-5.9 0-1.3.47-2.38 1.23-3.22-.12-.3-.53-1.51.12-3.15 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.29-1.23 3.29-1.23.65 1.64.24 2.85.12 3.15.76.84 1.22 1.92 1.22 3.22 0 4.58-2.81 5.6-5.49 5.9.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.69.82.57A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
};

export default GitHubIcon;


