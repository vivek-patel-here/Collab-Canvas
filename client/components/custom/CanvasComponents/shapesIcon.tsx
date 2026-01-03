type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  strokeWidth?: number;
};



const Rectangle = ({
  size = 24,
  color = "#000000",
  strokeWidth = 4,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 40 H100 V80 H20 Z"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const Circle = ({
  size = 24,
  color = "#000000",
  strokeWidth = 4,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d="
          M60 20
          A40 40 0 1 1 59.999 20
        "
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const Square = ({
  size = 24,
  color = "#000000",
  strokeWidth = 4,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d="M30 30 H90 V90 H30 Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const Triangle = ({
  size = 24,
  color = "#000000",
  strokeWidth = 4,
  ...props
}: IconProps) => {

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d="M60 25 L95 95 H25 Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const Oval = ({
  size = 24,
  color = "#000000",
  strokeWidth = 4,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d={ `
  M60 30
  A40 25 0 1 1 59.9 30
  Z
`}
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const Rhombus = ({
  size = 24,
  color = "#000000",
  strokeWidth = 4,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d="M60 20 L100 60 L60 100 L20 60 Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const Parallelogram = ({
  size = 24,
  color = "#000000",
  strokeWidth = 4,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d="M35 30 H95 L85 90 H25 Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};


const RightAngledTriangle = ({
  size = 24,
  color = "#000000",
  strokeWidth = 4,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d="M30 30 L30 90 L90 90 Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const Cube = ({
  size = 24,
  color = "#000000",
  strokeWidth = 4,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d=" M30 40 H80 V90 H30 Z M50 20 H100 V70 H50 Z M30 40 L50 20 M80 40 L100 20 M80 90 L100 70 M30 90 L50 70 "
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};


const Cuboid = ({
  size = 24,
  color = "#000000",
  strokeWidth = 4,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d={`
  M20 45 H85 V90 H20 Z
  M45 20 H110 V65 H45 Z
  M20 45 L45 20
  M85 45 L110 20
  M85 90 L110 65
  M20 90 L45 65
`}

        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const Cylinder = ({
  size = 24,
  color = "#000000",
  strokeWidth = 4,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d="
          M30 35
          A30 10 0 1 1 90 35
          V85
          A30 10 0 1 1 30 85
          Z
          M30 35
          A30 10 0 1 0 90 35
        "
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const Cone = ({
  size = 24,
  color = "#000000",
  strokeWidth = 4,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d={`
  M60 20
  L20 90
  M60 20
  L100 90

  M20 90
  C20 105, 100 105, 100 90
  C100 75, 20 75, 20 90
`}
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const Pyramid = ({
  size = 24,
  color = "#000000",
  strokeWidth = 4,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d={`
  M60 15
  L15 95
  L105 95
  Z

  M60 15
  L60 60

  M15 95
  L60 60

  M105 95
  L60 60
`}
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const Arrow = ({
  size = 24,
  color = "#000000",
  strokeWidth = 4,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d={`
  M30 90
  L90 30
  M65 30
  H90
  V55
`}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const DoubleArrow = ({
  size = 24,
  color = "#000000",
  strokeWidth = 4,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d={`
  M30 90
  L90 30

  M65 30
  H90
  V55

  M55 90
  H30
  V65
`}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Pentagon = ({
  size = 24,
  color = "#000000",
  strokeWidth = 4,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d={`
  M60 20
  L100 50
  L80 100
  L40 100
  L20 50
  Z
`
}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Hexagon = ({
  size = 24,
  color = "#000000",
  strokeWidth = 4,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d={`
  M40 20
  H80
  L100 60
  L80 100
  H40
  L20 60
  Z
`}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Octagon = ({
  size = 24,
  color = "#000000",
  strokeWidth = 4,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d={`
  M40 20
  H80
  L100 40
  V80
  L80 100
  H40
  L20 80
  V40
  Z
`}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Torus = ({ size = 24, color = "#000000", strokeWidth = 4, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" {...props}>
    <path d={ `
  M60 20
  A40 40 0 1 1 59.9 20
  Z
  M60 40
  A20 20 0 1 0 60.1 40
  Z
`} stroke={color} strokeWidth={strokeWidth} />
  </svg>
);

const Heart = ({ size = 24, color = "#000000", strokeWidth = 4, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" {...props}>
    <path d={ `
  M60 95
  L20 55
  C20 30, 50 30, 60 50
  C70 30, 100 30, 100 55
  Z
`} stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
  </svg>
);

const Star = ({ size = 24, color = "#000000", strokeWidth = 4, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" {...props}>
    <path d={`
  M60 15
  L72 45
  L105 45
  L78 65
  L90 100
  L60 78
  L30 100
  L42 65
  L15 45
  L48 45
  Z
`} stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
  </svg>
);

const MessageCloud = ({ size = 24, color = "#000000", strokeWidth = 4, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" {...props}>
    <path d={ `
  M20 30
  H100
  V80
  H60
  L45 95
  V80
  H20
  Z
`} stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
  </svg>
);

const Cloud = ({
  size = 24,
  color = "#000000",
  strokeWidth = 4,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d={`
  M32 78
  H86
  C96 78, 102 70, 102 60
  C102 50, 94 44, 84 46
  C80 36, 70 30, 60 34
  C52 24, 36 26, 34 40
  C22 42, 18 52, 22 62
  C18 72, 24 78, 32 78
  Z
`}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};

const NinjaStar = ({
  size = 24,
  color = "#000000",
  strokeWidth = 4,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d={ `
  M60 10
  L72 48
  L110 60
  L72 72
  L60 110
  L48 72
  L10 60
  L48 48
  Z
`}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};







const Icons = [
   {
    icon: Arrow,
    path:`
  M30 90
  L90 30
  M65 30
  H90
  V55
`
  },
   {
    icon: DoubleArrow,
    path: `
  M30 90
  L90 30

  M65 30
  H90
  V55

  M55 90
  H30
  V65
`
  },
  {
    icon: Circle,
    path: "M60 20 A40 40 0 1 1 59.999 20"
  },
  {
    icon: Oval,
    path:  `
  M60 30
  A40 25 0 1 1 59.9 30
  Z
`
  },
  {
    icon: Square,
    path: "M-30 -30 H30 V30 H-30 Z"
  },
  
  {
    icon: Rectangle,
    path: "M20 40 H100 V80 H20 Z"
  },
  {
    icon: Triangle,
    path: "M0 -35 L35 35 H-35 Z"
  },
  {
    icon: RightAngledTriangle,
    path: "M30 30 L30 90 L90 90 Z"
  },
  {
    icon: Rhombus,
    path: "M60 20 L100 60 L60 100 L20 60 Z"
  },
  {
    icon: Parallelogram,
    path: "M35 30 H95 L85 90 H25 Z"
  },
   {
    icon: Pentagon,
    path: `
  M60 20
  L100 50
  L80 100
  L40 100
  L20 50
  Z
`
  },
  {
    icon: Hexagon,
    path:`
  M40 20
  H80
  L100 60
  L80 100
  H40
  L20 60
  Z
`
  },  {
    icon: Octagon,
    path: `
  M40 20
  H80
  L100 40
  V80
  L80 100
  H40
  L20 80
  V40
  Z
`
  },
  
   {
    icon: Cube,
    path: ` M30 40 H80 V90 H30 Z M50 20 H100 V70 H50 Z M30 40 L50 20 M80 40 L100 20 M80 90 L100 70 M30 90 L50 70`
  },
  {
    icon: Cuboid,
    path: `
  M20 45 H85 V90 H20 Z
  M45 20 H110 V65 H45 Z
  M20 45 L45 20
  M85 45 L110 20
  M85 90 L110 65
  M20 90 L45 65
`},
  {
    icon: Cylinder,
    path: " M30 35 A30 10 0 1 1 90 35 V85 A30 10 0 1 1 30 85 Z M30 35 A30 10 0 1 0 90 35"
  },
  {
    icon: Cone,
    path: `
  M60 20
  L20 90
  M60 20
  L100 90

  M20 90
  C20 105, 100 105, 100 90
  C100 75, 20 75, 20 90
`
  }, {
    icon: Pyramid,
    path: `
  M60 15
  L15 95
  L105 95
  Z

  M60 15
  L60 60

  M15 95
  L60 60

  M105 95
  L60 60
`
  }, {
    icon: NinjaStar,
    path:  `
  M60 10
  L72 48
  L110 60
  L72 72
  L60 110
  L48 72
  L10 60
  L48 48
  Z
`
  }, {
    icon: Torus,
    path:  `
  M60 20
  A40 40 0 1 1 59.9 20
  Z
  M60 40
  A20 20 0 1 0 60.1 40
  Z
`
  }, {
    icon: Heart,
    path:  `
  M60 95
  L20 55
  C20 30, 50 30, 60 50
  C70 30, 100 30, 100 55
  Z
`
  }, {
    icon: Star,
    path: `
  M60 15
  L72 45
  L105 45
  L78 65
  L90 100
  L60 78
  L30 100
  L42 65
  L15 45
  L48 45
  Z
`
  }, {
    icon: MessageCloud,
    path:  `
  M20 30
  H100
  V80
  H60
  L45 95
  V80
  H20
  Z
`
  }, {
    icon: Cloud,
    path:`
  M32 78
  H86
  C96 78, 102 70, 102 60
  C102 50, 94 44, 84 46
  C80 36, 70 30, 60 34
  C52 24, 36 26, 34 40
  C22 42, 18 52, 22 62
  C18 72, 24 78, 32 78
  Z
`
  },

]

export default Icons;

