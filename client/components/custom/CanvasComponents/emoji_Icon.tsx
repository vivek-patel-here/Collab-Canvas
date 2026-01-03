"use client";

type IconProps = React.SVGProps<SVGSVGElement> & {
    size?: number;
    color?: string;
    strokeWidth?: number;
};


const Smile = ({
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
  A45 45 0 1 1 59.9 15
  Z
  M60 15
  A45 45 0 1 1 59.9 15
  Z

  M42 48
  A4 4 0 1 1 41.9 48
  Z

  M78 48
  A4 4 0 1 1 77.9 48
  Z

  M40 70
  C48 85, 72 85, 80 70
`}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const Neutral =
    ({
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
  A45 45 0 1 1 59.9 15
  Z

  M42 48 A4 4 0 1 1 41.9 48 Z
  M78 48 A4 4 0 1 1 77.9 48 Z

  M40 75
  H80
`}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    };

const Sad = ({
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
                d={` M60 15
  A45 45 0 1 1 59.9 15
  Z M42 48 A4 4 0 1 1 41.9 48 Z
  M78 48 A4 4 0 1 1 77.9 48 Z

  M40 85
  C48 70, 72 70, 80 85`}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const Surprised = ({
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
  A45 45 0 1 1 59.9 15
  Z   M42 48 A4 4 0 1 1 41.9 48 Z
  M78 48 A4 4 0 1 1 77.9 48 Z

  M60 78
  A8 8 0 1 1 59.9 78
  Z
`}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};


const Wink = ({
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
  A45 45 0 1 1 59.9 15
  Z 
  M42 48
  H50

  M78 48
  A4 4 0 1 1 77.9 48
  Z

  M40 70
  C48 85, 72 85, 80 70
`}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};


const Sunglasses = ({
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
  M60 30
  A40 40 0 1 1 59.9 30
  Z

  M34 48
  H54
  V60
  H34
  Z

  M66 48
  H86
  V60
  H66
  Z

  M54 54
  H66

  M46 72
  C52 76, 68 76, 74 72
`}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const Angry = ({
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
                d={`M60 15
  A45 45 0 1 1 59.9 15
  Z

  M38 42
  L50 48

  M82 42
  L70 48

  M42 52
  A4 4 0 1 1 41.9 52
  Z

  M78 52
  A4 4 0 1 1 77.9 52
  Z

  M40 85
  C50 70, 70 70, 80 85`}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const Sleepy = ({
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
  A45 45 0 1 1 59.9 15
  Z

  M38 50
  H50

  M70 50
  H82

  M42 78
  C50 82, 70 82, 78 78

  M88 32
  C92 28, 96 28, 96 32
  C96 36, 92 36, 92 40
`}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const HeartEyes = ({
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
  A45 45 0 1 1 59.9 15
  Z

  M42 40
  C38 32, 26 34, 30 44
  C34 54, 42 60, 42 60
  C42 60, 50 54, 54 44
  C58 34, 46 32, 42 40
  Z

  M78 40
  C74 32, 62 34, 66 44
  C70 54, 78 60, 78 60
  C78 60, 86 54, 90 44
  C94 34, 82 32, 78 40
  Z

  M40 75
  C48 88, 72 88, 80 75
`}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const MindBlown = ({
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
  A45 45 0 1 1 59.9 15
  Z

  M42 48
  A4 4 0 1 1 41.9 48
  Z

  M78 48
  A4 4 0 1 1 77.9 48
  Z

  M45 85
  H75
  M45 85
  C45 70, 75 70, 75 85

  M60 5
  L60 -5

  M45 10
  L35 0

  M75 10
  L85 0

  M30 20
  L18 10

  M90 20
  L102 10

  M60 0
  L60 -18
`}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const Laughing = ({
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
  A45 45 0 1 1 59.9 15
  Z

  M38 48
  H50

  M70 48
  H82

  M40 70
  H80
  M40 70
  C40 90, 80 90, 80 70
`}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const Crying = ({
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
  A45 45 0 1 1 59.9 15
  Z

  M42 48
  A4 4 0 1 1 41.9 48
  Z

  M78 48
  A4 4 0 1 1 77.9 48
  Z

  M40 84
  C50 74, 70 74, 80 84

  M42 58
  C40 66, 39 72, 40 78

  M78 58
  C80 66, 81 72, 80 78
`}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const Devil = ({
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
  M60 32
  A40 40 0 1 1 59.9 32
  Z

  M44 52
  A4 4 0 1 1 43.9 52
  Z

  M76 52
  A4 4 0 1 1 75.9 52
  Z

  M42 70
  C50 84, 70 84, 78 70

  M34 22
  L18 6
  L30 28

  M86 22
  L102 6
  L90 28
`}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};


const Dizzy = ({
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
  A45 45 0 1 1 59.9 15
  Z

  M38 44
  L50 56
  M50 44
  L38 56

  M70 44
  L82 56
  M82 44
  L70 56

  M42 78
  C48 74, 54 82, 60 78
  C66 74, 72 82, 78 78
`}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const Innocent = ({
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
  M60 30
  A40 40 0 1 1 59.9 30
  Z

  M40 52
  A4 4 0 1 1 39.9 52
  Z

  M76 52
  A4 4 0 1 1 75.9 52
  Z

  M46 72
  C52 78, 68 78, 74 72

  M60 4
  A44 16 0 1 1 59.9 4
`}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};


const Scream = ({
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
  M60 30
  A40 40 0 1 1 59.9 30
  Z

  M44 50
  A5 5 0 1 1 43.9 50
  Z

  M76 50
  A5 5 0 1 1 75.9 50
  Z

  M60 78
  A10 16 0 1 1 59.9 78
  Z

  M40 42
  H52

  M68 42
  H80
`}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const HandRaise = ({ size = 24, color = "#000", strokeWidth = 4, ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" {...props}>
        <path d={`
  M40 24
  V70

  M52 20
  V72

  M64 22
  V74

  M76 26
  V76

  M40 70
  C38 90, 82 90, 80 70

  M90 55
  L75 80
`} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const User = ({
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
  M60 32
  A16 16 0 1 1 59.9 32
  Z

  M32 88
  C32 68, 88 68, 88 88
`}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Fire = ({
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
  M60 14
  C52 28, 38 40, 38 58
  C38 82, 60 96, 60 96
  C60 96, 82 82, 82 58
  C82 40, 68 28, 60 14

  M60 44
  C54 52, 50 58, 50 66
  C50 78, 60 86, 60 86
  C60 86, 70 78, 70 66
  C70 58, 66 52, 60 44
`}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Like = ({
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
  M40 52
  V92
  H70
  C78 92, 82 86, 82 78
  V56
  C82 50, 76 48, 70 48
  H58
  L60 32
  C60 26, 54 24, 50 28
  L40 44
  Z
`}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Dislike = ({
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
  M40 68
  V28
  H70
  C78 28, 82 34, 82 42
  V64
  C82 70, 76 72, 70 72
  H58
  L60 88
  C60 94, 54 96, 50 92
  L40 76
  Z
`}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Spade = ({
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
  M60 18
  C38 38, 24 54, 32 68
  C38 78, 52 76, 60 66
  C68 76, 82 78, 88 68
  C96 54, 82 38, 60 18
  Z

  M52 66
  L46 96
  H74
  L68 66
`}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

const Club = ({
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
  M60 26
  C48 26, 42 38, 48 48
  C36 46, 26 56, 32 68
  C38 80, 52 80, 60 70
  C68 80, 82 80, 88 68
  C94 56, 84 46, 72 48
  C78 38, 72 26, 60 26
  Z

  M52 70
  L46 96
  H74
  L68 70
`}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

const BrokenHeart = ({ size=24, color="#000", strokeWidth=4, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" {...props}>
    <path d={ `
  M60 92
  L24 54
  C24 32, 50 32, 60 50
  C70 32, 96 32, 96 54
  Z

  M60 50
  L54 64
  L66 72
  L60 92
`} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);









const Icons = [
    {
        icon: Smile,
        path: `
  M60 15
  A45 45 0 1 1 59.9 15
  Z

  M42 48
  A4 4 0 1 1 41.9 48
  Z

  M78 48
  A4 4 0 1 1 77.9 48
  Z

  M40 70
  C48 85, 72 85, 80 70
`
    },
    {
        icon: Neutral,
        path: `
    M60 15
  A45 45 0 1 1 59.9 15
  Z

  M42 48 A4 4 0 1 1 41.9 48 Z
  M78 48 A4 4 0 1 1 77.9 48 Z

  M40 75
  H80
`
    },
    {
        icon: Sad,
        path: ` M60 15
  A45 45 0 1 1 59.9 15
  Z M42 48 A4 4 0 1 1 41.9 48 Z
  M78 48 A4 4 0 1 1 77.9 48 Z

  M40 85
  C48 70, 72 70, 80 85`
    },
    {
        icon: Surprised,
        path: `
  M60 15
  A45 45 0 1 1 59.9 15
  Z   M42 48 A4 4 0 1 1 41.9 48 Z
  M78 48 A4 4 0 1 1 77.9 48 Z

  M60 78
  A8 8 0 1 1 59.9 78
  Z
`
    },
    {
        icon: Wink,
        path: `
             M60 15
  A45 45 0 1 1 59.9 15
  Z 
  M42 48
  H50

  M78 48
  A4 4 0 1 1 77.9 48
  Z

  M40 70
  C48 85, 72 85, 80 70
`
    },
    {
        icon: Sunglasses,
        path: `
  M60 30
  A40 40 0 1 1 59.9 30
  Z

  M34 48
  H54
  V60
  H34
  Z

  M66 48
  H86
  V60
  H66
  Z

  M54 54
  H66

  M46 72
  C52 76, 68 76, 74 72
`
    },
    {
        icon: Angry,
        path: `M60 15
  A45 45 0 1 1 59.9 15
  Z

  M38 42
  L50 48

  M82 42
  L70 48

  M42 52
  A4 4 0 1 1 41.9 52
  Z

  M78 52
  A4 4 0 1 1 77.9 52
  Z

  M40 85
  C50 70, 70 70, 80 85`
    },
    {
        icon: Sleepy,
        path: `
  M60 15
  A45 45 0 1 1 59.9 15
  Z

  M38 50
  H50

  M70 50
  H82

  M42 78
  C50 82, 70 82, 78 78

  M88 32
  C92 28, 96 28, 96 32
  C96 36, 92 36, 92 40
`
    },
    {
        icon: HeartEyes,
        path: `
  M60 15
  A45 45 0 1 1 59.9 15
  Z

  M42 40
  C38 32, 26 34, 30 44
  C34 54, 42 60, 42 60
  C42 60, 50 54, 54 44
  C58 34, 46 32, 42 40
  Z

  M78 40
  C74 32, 62 34, 66 44
  C70 54, 78 60, 78 60
  C78 60, 86 54, 90 44
  C94 34, 82 32, 78 40
  Z

  M40 75
  C48 88, 72 88, 80 75
`
    },
    {
        icon: MindBlown,
        path: `
  M60 15
  A45 45 0 1 1 59.9 15
  Z

  M42 48
  A4 4 0 1 1 41.9 48
  Z

  M78 48
  A4 4 0 1 1 77.9 48
  Z

  M45 85
  H75
  M45 85
  C45 70, 75 70, 75 85

  M60 5
  L60 -5

  M45 10
  L35 0

  M75 10
  L85 0

  M30 20
  L18 10

  M90 20
  L102 10

  M60 0
  L60 -18
`
    },
    {
        icon: Laughing,
        path: `
  M60 15
  A45 45 0 1 1 59.9 15
  Z

  M38 48
  H50

  M70 48
  H82

  M40 70
  H80
  M40 70
  C40 90, 80 90, 80 70
`
    },
    {
        icon: Crying,
        path: `
 M60 15
  A45 45 0 1 1 59.9 15
  Z

  M42 48
  A4 4 0 1 1 41.9 48
  Z

  M78 48
  A4 4 0 1 1 77.9 48
  Z

  M40 84
  C50 74, 70 74, 80 84

  M42 58
  C40 66, 39 72, 40 78

  M78 58
  C80 66, 81 72, 80 78
`
    },
    {
        icon: Devil,
        path: `
  M60 32
  A40 40 0 1 1 59.9 32
  Z

  M44 52
  A4 4 0 1 1 43.9 52
  Z

  M76 52
  A4 4 0 1 1 75.9 52
  Z

  M42 70
  C50 84, 70 84, 78 70

  M34 22
  L18 6
  L30 28

  M86 22
  L102 6
  L90 28
`
    },
    {
        icon: Dizzy,
        path: `
  M60 15
  A45 45 0 1 1 59.9 15
  Z

  M38 44
  L50 56
  M50 44
  L38 56

  M70 44
  L82 56
  M82 44
  L70 56

  M42 78
  C48 74, 54 82, 60 78
  C66 74, 72 82, 78 78
`
    },
    {
        icon: Innocent,
        path: `
  M60 30
  A40 40 0 1 1 59.9 30
  Z

  M40 52
  A4 4 0 1 1 39.9 52
  Z

  M76 52
  A4 4 0 1 1 75.9 52
  Z

  M46 72
  C52 78, 68 78, 74 72

  M60 4
  A44 16 0 1 1 59.9 4
`
    },
    {
        icon: Scream,
        path: `
  M60 30
  A40 40 0 1 1 59.9 30
  Z

  M44 50
  A5 5 0 1 1 43.9 50
  Z

  M76 50
  A5 5 0 1 1 75.9 50
  Z

  M60 78
  A10 16 0 1 1 59.9 78
  Z

  M40 42
  H52

  M68 42
  H80
`
    },
    {
        icon: HandRaise,
        path: `
  M40 24
  V70

  M52 20
  V72

  M64 22
  V74

  M76 26
  V76

  M40 70
  C38 90, 82 90, 80 70

  M90 55
  L75 80
`
    },
    {
        icon:User,
        path:`
  /* Head */
  M60 32
  A16 16 0 1 1 59.9 32
  Z

  /* Shoulders / body */
  M32 88
  C32 68, 88 68, 88 88
`
    },
    {
        icon:Fire,
        path:`
  M60 14
  C52 28, 38 40, 38 58
  C38 82, 60 96, 60 96
  C60 96, 82 82, 82 58
  C82 40, 68 28, 60 14

  M60 44
  C54 52, 50 58, 50 66
  C50 78, 60 86, 60 86
  C60 86, 70 78, 70 66
  C70 58, 66 52, 60 44
`
    },
    {
        icon:Like,
        path:`
  M40 52
  V92
  H70
  C78 92, 82 86, 82 78
  V56
  C82 50, 76 48, 70 48
  H58
  L60 32
  C60 26, 54 24, 50 28
  L40 44
  Z
`
    },
    {
        icon:Dislike,
        path: `
  M40 68
  V28
  H70
  C78 28, 82 34, 82 42
  V64
  C82 70, 76 72, 70 72
  H58
  L60 88
  C60 94, 54 96, 50 92
  L40 76
  Z
`
    },
    {
        icon:Spade,
        path:`
  M60 18
  C38 38, 24 54, 32 68
  C38 78, 52 76, 60 66
  C68 76, 82 78, 88 68
  C96 54, 82 38, 60 18
  Z

  M52 66
  L46 96
  H74
  L68 66
`
    },
    {
        icon:Club,
        path:`
  M60 26
  C48 26, 42 38, 48 48
  C36 46, 26 56, 32 68
  C38 80, 52 80, 60 70
  C68 80, 82 80, 88 68
  C94 56, 84 46, 72 48
  C78 38, 72 26, 60 26
  Z

  M52 70
  L46 96
  H74
  L68 70
`
    },
    {
        icon:BrokenHeart,
        path: `
  M60 92
  L24 54
  C24 32, 50 32, 60 50
  C70 32, 96 32, 96 54
  Z

  M60 50
  L54 64
  L66 72
  L60 92
`
    }

]

export default Icons;