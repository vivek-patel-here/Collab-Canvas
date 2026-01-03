"use client"
import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
    size?: number;
    color?: string;
    strokeWidth?: number;
};

const MonitorIcon = ({
    size = 24,
    color = "currentColor",
    strokeWidth = 6,
    ...props
}: IconProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 120 120"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path
                d="
        M20 25
        H100
        C106 25 110 29 110 35
        V75
        C110 81 106 85 100 85
        H20
        C14 85 10 81 10 75
        V35
        C10 29 14 25 20 25
        Z

        M60 85
        V98

        M40 105
        H80
      "
            />
        </svg>
    )
};

const ServerIcon = ({
    size = 24,
    color = "currentColor",
    strokeWidth = 6,
    ...props
}: IconProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 120 120"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path
                d="
        M25 20
        H95
        C101 20 105 24 105 30
        V42
        C105 48 101 52 95 52
        H25
        C19 52 15 48 15 42
        V30
        C15 24 19 20 25 20
        Z

        M25 54
        H95
        C101 54 105 58 105 64
        V76
        C105 82 101 86 95 86
        H25
        C19 86 15 82 15 76
        V64
        C15 58 19 54 25 54
        Z

        M25 88
        H95
        C101 88 105 92 105 98
        V110
        C105 116 101 120 95 120
        H25
        C19 120 15 116 15 110
        V98
        C15 92 19 88 25 88
        Z

        M30 36 H38
        M30 70 H38
        M30 104 H38
      "
            />
        </svg>
    )
};

const CPUIcon = ({
    size = 24,
    color = "currentColor",
    strokeWidth = 6,
    ...props
}: IconProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 120 120"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="square"
            strokeLinejoin="miter"
            {...props}
        >
            <path
                d="
        M30 30
        H90
        V90
        H30
        Z

        M45 45
        H75
        V75
        H45
        Z

        M45 20 V30
        M60 20 V30
        M75 20 V30

        M45 90 V100
        M60 90 V100
        M75 90 V100

        M20 45 H30
        M20 60 H30
        M20 75 H30

        M90 45 H100
        M90 60 H100
        M90 75 H100
      "
            />
        </svg>
    )
};

const GlobeIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M60 10
        A50 50 0 1 1 60 110
        A50 50 0 1 1 60 10
        Z

        M60 10
        A72.5 72.5 0 0 0 60 110
        A72.5 72.5 0 0 0 60 10
        Z

        M10 60
        H110
      "
    />
  </svg>
);

const MessageQueue = ({
    size = 24,
    color = "currentColor",
    strokeWidth = 6,
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
        strokeLinejoin="miter"
        {...props}
    >
        <path
            d="
        M15 20
        H75
        C81 20 85 24 85 30
        V90
        C85 96 81 100 75 100
        H15
        C9 100 5 96 5 90
        V30
        C5 24 9 20 15 20
        Z

        M20 40 H70
        M20 60 H70
        M20 80 H70

        M85 60 H105

        M95 50
        L105 60
        L95 70
      "
        />
    </svg>
);

const RouterIcon = ({
    size = 24,
    color = "currentColor",
    strokeWidth = 6,
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path
            d="
        M25 60
        H95
        C101 60 105 64 105 70
        V85
        C105 91 101 95 95 95
        H25
        C19 95 15 91 15 85
        V70
        C15 64 19 60 25 60
        Z

        M40 60
        V30

        M80 60
        V30

        M32 24
        C26 30 26 42 32 48

        M88 24
        C94 30 94 42 88 48

        M45 78 H55
        M60 78 H70
        M75 78 H85
      "
        />
    </svg>
);

const LoadBalancerIcon = ({
    size = 24,
    color = "currentColor",
    strokeWidth = 6,
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path
            d="
        M50 10
        H70
        V30
        H50
        Z

        M10 80
        H30
        V100
        H10
        Z

        M90 80
        H110
        V100
        H90
        Z

        M20 80
        V60
        C20 54 24 50 30 50
        H90
        C96 50 100 54 100 60
        V80

        M60 50
        V30
      "
        />
    </svg>
);

const LayersIcon = ({
    size = 24,
    color = "currentColor",
    strokeWidth = 6,
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path
            d="
        M60 10
        L10 35
        L60 60
        L110 35
        Z

        M10 55
        L60 80
        L110 55

        M10 80
        L60 105
        L110 80
      "
        />
    </svg>
);

const CloudIcon = ({
    size = 24,
    color = "currentColor",
    strokeWidth = 6,
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path
            d="
        M40 95
        H90
        C104 95 110 86 110 76
        C110 66 102 58 92 58
        C90 42 76 30 60 30
        C46 30 34 38 30 50
        C18 52 10 62 10 74
        C10 86 20 95 32 95
        H40
        Z
      "
        />
    </svg>
);

const DatabaseIcon = ({
    size = 24,
    color = "currentColor",
    strokeWidth = 6,
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path
            d="
         M20 30
        C20 18 44 10 60 10
        C76 10 100 18 100 30
        C100 42 76 50 60 50
        C44 50 20 42 20 30
        Z

        M20 30
        V85

        M100 30
        V85

        M20 60
        C20 72 44 80 60 80
        C76 80 100 72 100 60

        M20 85
        C20 97 44 105 60 105
        C76 105 100 97 100 85
      "
        />
    </svg>
);

const HardDriveIcon = ({
    size = 24,
    color = "currentColor",
    strokeWidth = 6,
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path
            d="
        M20 20
        H100
        C106 20 110 24 110 30
        V90
        C110 96 106 100 100 100
        H20
        C14 100 10 96 10 90
        V30
        C10 24 14 20 20 20
        Z

        M60 35
        C40 35 25 50 25 60
        C25 70 40 85 60 85
        C80 85 95 70 95 60
        C95 50 80 35 60 35
        Z

        M60 52
        C55 52 52 55 52 60
        C52 65 55 68 60 68
        C65 68 68 65 68 60
        C68 55 65 52 60 52
        Z

        M68 60
        C78 64 84 70 88 76
      "
        />
    </svg>
);

const FolderIcon = ({
    size = 24,
    color = "currentColor",
    strokeWidth = 6,
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path
            d="
        M15 35
        H45
        C50 35 52 38 55 42
        H105
        C110 42 115 47 115 52
        V85
        C115 92 110 97 103 97
        H17
        C10 97 5 92 5 85
        V45
        C5 39 10 35 15 35
        Z
      "
        />
    </svg>
);

const RepeatIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M85 10
        L105 30
        L85 50

        M15 55
        V50
        A20 20 0 0 1 35 30
        H105

        M35 110
        L15 90
        L35 70

        M105 65
        V70
        A20 20 0 0 1 85 90
        H15
      "
    />
  </svg>
);


const WebhookIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M90 84.9
        H60.05
        C54.55 84.9 50.3 89.6 47.6 94.5
        A20 20 0 0 1 10 85
        C10.05 81.5 11 78 12.85 75

        M30 85
        L45.65 56.1
        C48.3 51.25 45.5 45.1 42.5 40.5
        A20 20 0 1 1 77.95 20.7

        M60 30
        L75.65 58.65
        C78.3 63.5 84.5 65 90 65
        A20 20 0 0 1 90 105
      "
    />
  </svg>
);


const ZapIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M68 5
        L20 70
        H52
        L40 115
        L100 45
        H64
        Z
      "
    />
  </svg>
);

const ClockIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M60 10
        C32 10 10 32 10 60
        C10 88 32 110 60 110
        C88 110 110 88 110 60
        C110 32 88 10 60 10
        Z

        M60 60
        L60 36

        M60 60
        L82 60
      "
    />
  </svg>
);

const ShieldIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M60 10
        C42 18 30 22 20 24
        V58
        C20 80 38 98 60 110
        C82 98 100 80 100 58
        V24
        C90 22 78 18 60 10
        Z
      "
    />
  </svg>
);

const LockIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M35 50
        V40
        C35 24 47 12 60 12
        C73 12 85 24 85 40
        V50

        M30 50
        H90
        C96 50 100 54 100 60
        V95
        C100 101 96 105 90 105
        H30
        C24 105 20 101 20 95
        V60
        C20 54 24 50 30 50
        Z

        M60 65
        C55 65 52 68 52 72
        C52 76 55 79 60 79
        C65 79 68 76 68 72
        C68 68 65 65 60 65
        Z

        M60 79
        V90
      "
    />
  </svg>
);

const KeyIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M42 60
        C42 46 54 34 68 34
        C82 34 94 46 94 60
        C94 74 82 86 68 86
        C54 86 42 74 42 60
        Z

        M42 60
        H12

        M12 60
        V70
        H22
        V64
        H30
        V70
        H38
        V60
      "
    />
  </svg>
);

const ActivityIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M110 60
        H92
        C84 60 80 64 78 72
        L66 112
        C65 116 59 116 58 112
        L44 28
        C43 24 37 24 36 28
        L24 72
        C22 64 18 60 10 60
        H10
      "
    />
  </svg>
);

const ChartColumnIncreasingIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M15 15
        V95
        C15 101 19 105 25 105
        H105

        M35 95
        V75

        M60 95
        V55

        M85 95
        V35
      "
    />
  </svg>
);

const FileTextIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M30 10
        H70
        C75 10 78 12 82 16
        L104 38
        C108 42 110 45 110 50
        V100
        C110 106 106 110 100 110
        H30
        C24 110 20 106 20 100
        V20
        C20 14 24 10 30 10
        Z

        M70 10
        V38
        C70 44 74 48 80 48
        H104

        M40 60 H80
        M40 75 H90
        M40 90 H90
      "
    />
  </svg>
);

const BellIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M20 90
        C30 80 35 72 35 50
        C35 28 48 15 60 15
        C72 15 85 28 85 50
        C85 72 90 80 100 90
        C102 92 100 95 96 95
        H24
        C20 95 18 92 20 90
        Z

        M50 95
        C50 103 56 108 60 108
        C64 108 70 103 70 95
      "
    />
  </svg>
);

const MailIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M20 25
        H100
        C106 25 110 29 110 35
        V85
        C110 91 106 95 100 95
        H20
        C14 95 10 91 10 85
        V35
        C10 29 14 25 20 25
        Z

        M10 35
        L54 62
        C57 64 63 64 66 62
        L110 35
      "
    />
  </svg>
);

const UsersIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M60 18
        C46 18 35 29 35 42
        C35 55 46 66 60 66
        C74 66 85 55 85 42
        C85 29 74 18 60 18
        Z

        M18 104
        V92
        C18 76 36 68 52 68
        H68
        C84 68 102 76 102 92
        V104
      "
    />
  </svg>
);

const SettingsIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
       M60 10
        C65 10 68 14 69 18
        C70 22 75 24 79 22
        C83 20 88 22 90 26
        C92 30 90 35 86 37
        C82 39 82 45 86 47
        C90 49 92 54 90 58
        C88 62 83 64 79 62
        C75 60 70 62 69 66
        C68 70 65 74 60 74
        C55 74 52 70 51 66
        C50 62 45 60 41 62
        C37 64 32 62 30 58
        C28 54 30 49 34 47
        C38 45 38 39 34 37
        C30 35 28 30 30 26
        C32 22 37 20 41 22
        C45 24 50 22 51 18
        C52 14 55 10 60 10
        Z

        M60 30
        C52 30 46 36 46 42
        C46 48 52 54 60 54
        C68 54 74 48 74 42
        C74 36 68 30 60 30
        Z
      "
    />
  </svg>
);

const SearchIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M52 20
        C34 20 20 34 20 52
        C20 70 34 84 52 84
        C70 84 84 70 84 52
        C84 34 70 20 52 20
        Z

        M78 78
        L108 108
      "
    />
  </svg>
);

const WorkflowIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M20 20
        H48
        C54 20 58 24 58 30
        V48
        C58 54 54 58 48 58
        H30
        C24 58 20 54 20 48
        Z

        M34 58
        V74
        C34 80 38 84 44 84
        H62

        M62 62
        H90
        C96 62 100 66 100 72
        V90
        C100 96 96 100 90 100
        H72
        C66 100 62 96 62 90
        Z
      "
    />
  </svg>
);

const GitBranchIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M90 20
        C82 20 76 26 76 34
        C76 42 82 48 90 48
        C98 48 104 42 104 34
        C104 26 98 20 90 20
        Z

        M30 10
        V70

        M30 70
        C22 70 16 76 16 84
        C16 92 22 98 30 98
        C38 98 44 92 44 84
        C44 76 38 70 30 70
        Z

        M90 48
        C90 78 60 90 30 98
      "
    />
  </svg>
);

const ChromiumIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M60 10
        C32.4 10 10 32.4 10 60
        C10 87.6 32.4 110 60 110
        C87.6 110 110 87.6 110 60
        C110 32.4 87.6 10 60 10
        Z

        M60 40
        C49 40 40 49 40 60
        C40 71 49 80 60 80
        C71 80 80 71 80 60
        C80 49 71 40 60 40
        Z

        M60 40
        L60 10

        M77.3 70
        L103 85

        M42.7 70
        L17 85
      "
    />
  </svg>
);

const BitcoinIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M60 10
        L48 110

        M60 26
        C78 30 80 48 62 52
        L42 48

        M56 56
        C78 60 82 82 56 86
        L36 82

        M70 18
        L74 8

        M66 92
        L70 112
      "
    />
  </svg>
);

const CodeSandboxIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M60 10
        L100 32
        V78
        C100 82 98 86 94 88
        L60 108
        C56 110 52 110 48 108
        L26 96
        C22 94 20 90 20 86
        V32
        L60 10
        Z

        M40 22
        L60 34
        L80 22

        M40 98
        V66
        L20 54

        M80 98
        V66
        L100 54

        M20 32
        L60 56
        L100 32

        M60 108
        V56
      "
    />
  </svg>
);

const DribbbleIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M60 10
        C32.4 10 10 32.4 10 60
        C10 87.6 32.4 110 60 110
        C87.6 110 110 87.6 110 60
        C110 32.4 87.6 10 60 10
        Z

        M98 30
        C72 56 42 64 12 66

        M108 68
        C78 60 46 76 28 100

        M44 14
        C68 46 78 70 88 106
      "
    />
  </svg>
);

const FacebookIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M78 10
        H60
        C44 10 32 22 32 38
        V52
        H20
        V72
        H32
        V110
        H52
        V72
        H72
        L78 52
        H52
        V40
        C52 34 56 30 62 30
        H78
        Z
      "
    />
  </svg>
);

const FigmaIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M30 25
        C30 15 38 10 48 10
        H60
        V40
        H48
        C38 40 30 35 30 25
        Z

        M60 10
        H72
        C82 10 90 15 90 25
        C90 35 82 40 72 40
        H60
        Z

        M60 60
        C60 48 72 40 84 48
        C96 56 96 64 84 72
        C72 80 60 72 60 60
        Z

        M30 95
        C30 85 38 80 48 80
        H60
        V95
        C60 105 52 110 45 110
        C36 110 30 103 30 95
        Z

        M30 60
        C30 50 38 45 48 45
        H60
        V75
        H48
        C38 75 30 70 30 60
        Z
      "
    />
  </svg>
);

const FramerIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M20 18
        H100
        V46
        H20
        Z

        M20 46
        L60 86
        H100
        L60 46
        Z

        M20 86
        L60 118
        V86
        Z
      "
    />
  </svg>
);

 const GitHubIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M60 10
        C32 10 10 30 10 58
        C10 80 24 98 44 104
        C46 104 46 102 46 100
        V92
        C34 95 30 86 28 82
        C26 78 22 76 20 76
        C18 76 16 74 20 74
        C24 74 28 78 30 82
        C34 90 42 88 46 86
        C46 82 48 78 50 76
        C36 74 24 68 24 48
        C24 42 26 36 30 32
        C30 30 28 24 32 16
        C32 16 38 16 46 22
        C52 20 68 20 74 22
        C82 16 88 16 88 16
        C92 24 90 30 90 32
        C94 36 96 42 96 48
        C96 68 84 74 70 76
        C74 80 76 84 76 92
        V100
        C76 102 76 104 78 104
        C98 98 110 80 110 58
        C110 30 88 10 60 10
        Z
      "
    />
  </svg>
);

const GitLabIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M16 66
        L34 18
        L50 66
        Z

        M104 66
        L86 18
        L70 66
        Z

        M50 66
        H70
        L60 98
        Z

        M16 66
        L60 110
        L104 66
      "
    />
  </svg>
);

const InstagramIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M30 10
        H90
        C102 10 110 18 110 30
        V90
        C110 102 102 110 90 110
        H30
        C18 110 10 102 10 90
        V30
        C10 18 18 10 30 10
        Z

        M60 38
        C48 38 38 48 38 60
        C38 72 48 82 60 82
        C72 82 82 72 82 60
        C82 48 72 38 60 38
        Z

        M86 28
        C84 28 82 30 82 32
        C82 34 84 36 86 36
        C88 36 90 34 90 32
        C90 30 88 28 86 28
        Z
      "
    />
  </svg>
);

const LinkedInIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M18 40
        H38
        V108
        H18
        Z

        M18 12
        C18 6 22 2 28 2
        C34 2 38 6 38 12
        C38 18 34 22 28 22
        C22 22 18 18 18 12
        Z

        M52 60
        C52 40 68 28 86 28
        C104 28 112 40 112 58
        V108
        H92
        V62
        C92 52 86 46 78 46
        C70 46 64 52 64 62
        V108
        H52
        Z
      "
    />
  </svg>
);

const SlackIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M38 10
        C32 10 28 14 28 20
        V50
        C28 56 32 60 38 60
        C44 60 48 56 48 50
        V20
        C48 14 44 10 38 10
        Z

        M60 28
        H90
        C96 28 100 32 100 38
        C100 44 96 48 90 48
        H60
        C54 48 50 44 50 38
        C50 32 54 28 60 28
        Z

        M82 60
        C88 60 92 64 92 70
        V100
        C92 106 88 110 82 110
        C76 110 72 106 72 100
        V70
        C72 64 76 60 82 60
        Z

        M20 72
        H50
        C56 72 60 76 60 82
        C60 88 56 92 50 92
        H20
        C14 92 10 88 10 82
        C10 76 14 72 20 72
        Z
      "
    />
  </svg>
);

const XIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M20 16
        L100 104

        M20 104
        L100 16
      "
    />
  </svg>
);

const TwitterIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M110 22
        C104 26 98 28 92 30
        C98 60 64 98 18 80
        C30 80 40 76 48 70
        C30 68 20 56 22 44
        C26 46 30 46 34 44
        C18 38 14 18 26 10
        C38 26 58 34 76 32
        C72 12 96 2 108 18
        C114 18 120 14 120 14
        C116 20 110 22 110 22
        Z
      "
    />
  </svg>
);

const YouTubeIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M20 38
        C20 30 26 24 34 24
        H86
        C94 24 100 30 100 38
        V82
        C100 90 94 96 86 96
        H34
        C26 96 20 90 20 82
        Z

        M52 46
        L78 60
        L52 74
        Z
      "
    />
  </svg>
);

const TwitchIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M20 14
        H104
        V72
        L80 96
        H52
        L36 112
        V96
        H20
        Z

        M48 36
        V56

        M72 36
        V56
      "
    />
  </svg>
);

const CameraIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M20 38
        H38
        C42 38 44 36 46 32
        L50 24
        C52 20 56 18 60 18
        H72
        C76 18 80 20 82 24
        L86 32
        C88 36 90 38 94 38
        H100
        C108 38 112 42 112 50
        V92
        C112 100 108 104 100 104
        H20
        C12 104 8 100 8 92
        V50
        C8 42 12 38 20 38
        Z

        M60 52
        C48 52 40 60 40 72
        C40 84 48 92 60 92
        C72 92 80 84 80 72
        C80 60 72 52 60 52
        Z
      "
    />
  </svg>
);

const CctvIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M86 60
        H104
        C108 60 110 64 108 68
        L96 92
        C94 96 88 96 86 92
        L74 76

        M88 52
        C92 50 94 46 92 42
        L78 14
        C76 10 72 10 68 12
        L24 36
        C18 40 16 46 18 52
        L24 64
        C26 68 30 70 34 68
        Z

        M14 88
        H44
        C50 88 54 84 56 80
        L64 64

        M14 104
        V80
      "
    />
  </svg>
);

const SimCardIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M34 10
        H68
        C72 10 74 12 76 14
        L98 36
        C100 38 102 40 102 44
        V96
        C102 104 98 108 90 108
        H34
        C26 108 22 104 22 96
        V22
        C22 14 26 10 34 10
        Z

        M42 44
        H78
        C82 44 84 46 84 50
        V82
        C84 86 82 88 78 88
        H42
        C38 88 36 86 36 82
        V50
        C36 46 38 44 42 44
        Z

        M42 60
        H78

        M60 60
        V88
      "
    />
  </svg>
);

const CassetteTapeIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M20 28
        H100
        C108 28 112 32 112 40
        V80
        C112 88 108 92 100 92
        H20
        C12 92 8 88 8 80
        V40
        C8 32 12 28 20 28
        Z

        M40 44
        C34 44 30 48 30 54
        C30 60 34 64 40 64
        C46 64 50 60 50 54
        C50 48 46 44 40 44
        Z

        M80 44
        C74 44 70 48 70 54
        C70 60 74 64 80 64
        C86 64 90 60 90 54
        C90 48 86 44 80 44
        Z

        M40 64
        H80

        M32 92
        L38 76
        C40 72 44 70 48 70
        H72
        C76 70 80 72 82 76
        L88 92
      "
    />
  </svg>
);

const MicIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M60 14
        C50 14 44 20 44 30
        V58
        C44 68 50 74 60 74
        C70 74 76 68 76 58
        V30
        C76 20 70 14 60 14
        Z

        M36 54
        V60
        C36 78 48 90 60 90
        C72 90 84 78 84 60
        V54

        M60 90
        V106

        M46 106
        H74
      "
    />
  </svg>
);

 const PhoneIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M69.16 82.84
        C71.02 84.48 73.74 84.24 75.22 82.34
        L77.35 79.55
        C80.01 76.08 83.77 75 88 75
        H103
        C108.52 75 113 79.48 113 85
        V100
        C113 105.52 108.52 110 103 110
        C55.16 110 10 64.84 10 17
        C10 11.48 14.48 7 20 7
        H35
        C40.52 7 45 11.48 45 17
        V32
        C45 35.15 43.55 38.12 41 40
        L38.19 42.11
        C36.31 43.52 35.92 46.23 37.56 48.09
        C45.74 57.58 54.69 66.52 64.16 74.71
        Z
      "
    />
  </svg>
);

const PresentationIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M10 15
        H110

        M105 15
        V70
        C105 78.28 98.28 85 90 85
        H30
        C21.72 85 15 78.28 15 70
        V15

        M35 105
        L60 85
        L85 105
      "
    />
  </svg>
);

const ProjectorIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M25 35 L15 25
        M45 30 V15
        M65 35 L75 25

        M45 65
        C45 55 55 45 65 45
        C75 45 85 55 85 65
        C85 75 75 85 65 85
        C55 85 45 75 45 65
        Z

        M20 65
        H100
        C110 65 115 70 115 80
        V100
        C115 110 110 115 100 115
        H20
        C10 115 5 110 5 100
        V80
        C5 70 10 65 20 65
        Z

        M80 85
        H90
      "
    />
  </svg>
);

const TvIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M85 10
        L60 35
        L35 10

        M20 35
        H100
        C108 35 112 39 112 47
        V95
        C112 103 108 107 100 107
        H20
        C12 107 8 103 8 95
        V47
        C8 39 12 35 20 35
        Z
      "
    />
  </svg>
);

const VideoIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M80 65
        L106 82
        C109 84 112 82 112 78
        V42
        C112 38 109 36 106 38
        L80 55

        M10 30
        H70
        C78 30 82 34 82 42
        V78
        C82 86 78 90 70 90
        H10
        C2 90 -2 86 -2 78
        V42
        C-2 34 2 30 10 30
        Z
      "
    />
  </svg>
);

const Volume2Icon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M55 23.5
        C55 19.6 50.7 17.6 47.9 20.1
        L32.1 35.9
        C30.7 37.3 28.8 38 26.8 38
        H18
        C12.5 38 10 40.5 10 46
        V74
        C10 79.5 12.5 82 18 82
        H26.8
        C28.8 82 30.7 82.7 32.1 84.1
        L47.9 99.9
        C50.7 102.4 55 100.4 55 96.5
        Z

        M72 45
        C78 51 78 69 72 75

        M87 30
        C99 42 99 78 87 90
      "
    />
  </svg>
);

const BatteryFullIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M12 30
        H88
        C96 30 100 34 100 42
        V78
        C100 86 96 90 88 90
        H12
        C4 90 0 86 0 78
        V42
        C0 34 4 30 12 30
        Z

        M100 50
        H112
        V70
        H100

        M26 42 V78
        M42 42 V78
        M58 42 V78
        M74 42 V78
      "
    />
  </svg>
);

const BatteryChargingIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M55 35
        L40 60
        H60
        L45 85

        M74 30
        H84
        C92 30 96 34 96 42
        V78
        C96 86 92 90 84 90
        H70

        M100 50
        H112
        V70
        H100

        M26 90
        H16
        C8 90 4 86 4 78
        V42
        C4 34 8 30 16 30
        H30
      "
    />
  </svg>
);

const BatteryWarningIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M50 85
        H50.5
        M50 35
        V75

        M70 30
        H84
        C92 30 96 34 96 42
        V78
        C96 86 92 90 84 90
        H70

        M100 50
        H112
        V70
        H100

        M26 90
        H16
        C8 90 4 86 4 78
        V42
        C4 34 8 30 16 30
        H30
      "
    />
  </svg>
);

const BluetoothIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M35 35
        L85 85

        L60 110
        V10
        L85 35

        L35 85
      "
    />
  </svg>
);

const BluetoothConnectedIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M35 35
        L85 85
        L60 110
        V10
        L85 35
        L35 85

        M90 60
        H110

        M10 60
        H30
      "
    />
  </svg>
);

const BluetoothOffIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M85 85
        L60 110
        V60
        L35 85

        M10 10
        L110 110

        M72.5 47.5
        L85 35
        L60 10
        V32.5
      "
    />
  </svg>
);

const CableIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
       M85 95
        A5 5 0 0 1 80 90
        V80
        A10 10 0 0 1 90 70
        H100
        A10 10 0 0 1 110 80
        V90
        A5 5 0 0 1 105 95
        Z

        M85 105
        V95

        M95 70
        V32.5
        A5 5 0 0 0 60 32.5
        V87.5
        A5 5 0 0 1 25 87.5
        V50

        M105 105
        V95

        M15 25
        V15

        M20 50
        A10 10 0 0 1 10 40
        V30
        A5 5 0 0 1 15 25
        H35
        A5 5 0 0 1 40 30
        V40
        A10 10 0 0 1 30 50
        Z

        M35 25
        V15
      "
    />
  </svg>
);

const HeadphonesIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M15 70
        H30
        A10 10 0 0 1 40 80
        V95
        A10 10 0 0 1 30 105
        H25
        A10 10 0 0 1 15 95
        V60
        A45 45 0 0 1 105 60
        V95
        A10 10 0 0 1 95 105
        H90
        A10 10 0 0 1 80 95
        V80
        A10 10 0 0 1 90 70
        H105
      "
    />
  </svg>
);

const MonitorSmartphoneIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M90 40
        V30
        A10 10 0 0 0 80 20
        H20
        A10 10 0 0 0 10 30
        V65
        A10 10 0 0 0 20 75
        H60

        M50 95
        V75
        M35 95
        H60

        M80 60
        H110
        A10 10 0 0 1 120 70
        V110
        A10 10 0 0 1 110 120
        H80
        A10 10 0 0 1 70 110
        V70
        A10 10 0 0 1 80 60
        Z
      "
    />
  </svg>
);

const SatelliteIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M67.5 32.5
        L51.76 16.76
        A6.025 6.025 0 0 0 43.24 16.76
        L31.76 28.24
        A6.025 6.025 0 0 0 31.76 36.76
        L47.5 52.5

        M82.5 37.5
        L95 25

        M87.5 52.5
        L103.24 68.24
        A6.025 6.025 0 0 1 103.24 76.76
        L91.76 88.24
        A6.025 6.025 0 0 1 83.24 88.24
        L67.5 72.5

        M45 105
        A30 30 0 0 0 15 75

        M46.76 53.24
        A6.025 6.025 0 0 0 46.76 61.76
        L58.24 73.24
        A6.025 6.025 0 0 0 66.76 73.24
        L88.24 51.76
        A6.025 6.025 0 0 0 88.24 43.24
        L76.76 31.76
        A6.025 6.025 0 0 0 68.24 31.76
        Z
      "
    />
  </svg>
);

const SatelliteDishIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M20 50
        A36.55 36.55 0 0 0 70 100
        Z

        M45 75
        L60 60

        M85 65
        A30 30 0 0 0 55 35

        M105 65
        A50 50 0 0 0 55 15
      "
    />
  </svg>
);

const SignalIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M10 100
        H10.05

        M35 100
        V80

        M60 100
        V60

        M85 100
        V40

        M110 20
        V100
      "
    />
  </svg>
);

const SmartphoneIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M25 10
        H95
        A10 10 0 0 1 105 20
        V100
        A10 10 0 0 1 95 110
        H25
        A10 10 0 0 1 15 100
        V20
        A10 10 0 0 1 25 10
        Z
        M60 90
        m-3 0
        a3 3 0 1 0 6 0
        a3 3 0 1 0 -6 0
      "
    />
  </svg>
);

const WifiIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M60 100
        m-3 0
        a3 3 0 1 0 6 0
        a3 3 0 1 0 -6 0

        M10 44.1
        A75 75 0 0 1 110 44.1

        M25 64.295
        A50 50 0 0 1 95 64.295

        M42.5 82.145
        A25 25 0 0 1 77.5 82.145
      "
    />
  </svg>
);

const LoaderCircleIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M105 60
        A45 45 0 1 1 73.905 17.2
      "
    />
  </svg>
);

 const BugIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M60 100
        V55

        M70 35
        A20 20 0 0 1 90 55
        V70
        A30 30 0 0 1 30 70
        V55
        A20 20 0 0 1 50 35
        Z

        M70.6 19.4
        L80 10
        M40 10
        L49.4 19.4

        M105 105
        A20 20 0 0 0 86 85
        M105 25
        A20 20 0 0 1 87.75 44.85
        M110 65
        H90

        M15 105
        A20 20 0 0 1 34 85
        M15 25
        A20 20 0 0 0 32.25 44.85
        M30 65
        H10

        M45 35.65
        V30
        A15 15 0 1 1 75 30
        V35.65
      "
    />
  </svg>
);

const FileTerminalIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M30 110
        A10 10 0 0 1 20 100
        V20
        A10 10 0 0 1 30 10
        H70
        A12 12 0 0 1 78.52 13.53
        L96.46 31.47
        A12 12 0 0 1 100 40
        V100
        A10 10 0 0 1 90 110
        Z

        M70 10
        V35
        A5 5 0 0 0 75 40
        H100

        M40 80
        L50 70
        L40 60

        M60 90
        H80
      "
    />
  </svg>
);

const FolderKanbanIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M20 100
        H100
        A10 10 0 0 0 110 90
        V40
        A10 10 0 0 0 100 30
        H60.35
        A10 10 0 0 1 52.05 25.5
        L47.95 19.5
        A10 10 0 0 0 39.65 15
        H20
        A10 10 0 0 0 10 25
        V90
        C10 95.5 14.5 100 20 100
        Z

        M40 50
        V70

        M60 50
        V60

        M80 50
        V80
      "
    />
  </svg>
);

const FolderOpenDotIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M30 70
        L37.25 55.5
        A10 10 0 0 1 46.2 50
        H100
        A10 10 0 0 1 109.7 62.5
        L102 92.5
        A10 10 0 0 1 92.3 100
        H20
        A10 10 0 0 1 10 90
        V25
        A10 10 0 0 1 20 15
        H39.65
        A10 10 0 0 1 47.95 19.5
        L52.05 25.5
        A10 10 0 0 0 60.35 30
        H90
        A10 10 0 0 1 100 40
        V50

        M70 75
        m-5 0
        a5 5 0 1 0 10 0
        a5 5 0 1 0 -10 0
      "
    />
  </svg>
);

const PlugIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M60 110
        V85

        M45 40
        V10

        M85 40
        A5 5 0 0 1 90 45
        V65
        A20 20 0 0 1 70 85
        H50
        A20 20 0 0 1 30 65
        V45
        A5 5 0 0 1 35 40
        Z

        M75 40
        V10
      "
    />
  </svg>
);

const TerminalIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M60 95
        H100

        M20 85
        L50 55
        L20 25
      "
    />
  </svg>
);

const TabletSmartphoneIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="
        M15 40
        H55
        A10 10 0 0 1 65 50
        V100
        A10 10 0 0 1 55 110
        H25
        A10 10 0 0 1 15 100
        Z

        M25 20
        A10 10 0 0 1 35 10
        H95
        A10 10 0 0 1 105 20
        V100
        A10 10 0 0 1 95 110
        H83

        M40 90
        m-2.5 0
        a2.5 2.5 0 1 0 5 0
        a2.5 2.5 0 1 0 -5 0
      "
    />
  </svg>
);

export const systemDesignComponents = [
    {
        icon: MonitorIcon,
        keywords: "frontend client ui browser mobile web app user",
        path: ` M20 25
        H100
        C106 25 110 29 110 35
        V75
        C110 81 106 85 100 85
        H20
        C14 85 10 81 10 75
        V35
        C10 29 14 25 20 25
        Z

        M60 85
        V98

        M40 105
        H80`
    },
    {
        icon: ServerIcon,
        keywords: "server backend api service application",
        path: ` M25 20
        H95
        C101 20 105 24 105 30
        V42
        C105 48 101 52 95 52
        H25
        C19 52 15 48 15 42
        V30
        C15 24 19 20 25 20
        Z

        M25 54
        H95
        C101 54 105 58 105 64
        V76
        C105 82 101 86 95 86
        H25
        C19 86 15 82 15 76
        V64
        C15 58 19 54 25 54
        Z

        M25 88
        H95
        C101 88 105 92 105 98
        V110
        C105 116 101 120 95 120
        H25
        C19 120 15 116 15 110
        V98
        C15 92 19 88 25 88
        Z

        M30 36 H38
        M30 70 H38
        M30 104 H38`
    },
    {
        icon: CPUIcon,
        keywords: "compute worker job processor background",
        path: ` M30 30
        H90
        V90
        H30
        Z

        M45 45
        H75
        V75
        H45
        Z

        M45 20 V30
        M60 20 V30
        M75 20 V30

        M45 90 V100
        M60 90 V100
        M75 90 V100

        M20 45 H30
        M20 60 H30
        M20 75 H30

        M90 45 H100
        M90 60 H100
        M90 75 H100`
    },
    {
        icon: GlobeIcon,
        keywords: "dns internet global routing",
        path: `
        M60 10
        A50 50 0 1 1 60 110
        A50 50 0 1 1 60 10
        Z

        M60 10
        A72.5 72.5 0 0 0 60 110
        A72.5 72.5 0 0 0 60 10
        Z

        M10 60
        H110`
    },
    {
        icon: RouterIcon,
        keywords: "router gateway api-gateway ingress",
        path: ` M25 60
H95
C101 60 105 64 105 70
V85
C105 91 101 95 95 95
H25
C19 95 15 91 15 85
V70
C15 64 19 60 25 60
Z

M40 60
V30

M80 60
V30


M32 24
C26 30 26 42 32 48

M28 20
C22 26 22 38 28 44


M88 24
C94 30 94 42 88 48

M92 20
C98 26 98 38 92 44


M45 78 H55
M60 78 H70
M75 78 H85
`
    },
    {
        icon: LoadBalancerIcon,
        keywords: "network load-balancer traffic load balancer loadbalancer",
        path: `  M50 10
        H70
        V30
        H50
        Z

        M10 80
        H30
        V100
        H10
        Z

        M90 80
        H110
        V100
        H90
        Z

        M20 80
        V60
        C20 54 24 50 30 50
        H90
        C96 50 100 54 100 60
        V80

        M60 50
        V30`
    },
    {
        icon: LayersIcon,
        keywords: "microservices layered architecture",
        path: ` M60 10
        L10 35
        L60 60
        L110 35
        Z

        M10 55
        L60 80
        L110 55

        M10 80
        L60 105
        L110 80`
    },
    {
        icon: CloudIcon,
        keywords: "cloud aws gcp azure infrastructure",
        path: ` M40 95
        H90
        C104 95 110 86 110 76
        C110 66 102 58 92 58
        C90 42 76 30 60 30
        C46 30 34 38 30 50
        C18 52 10 62 10 74
        C10 86 20 95 32 95
        H40
        Z`
    },
    {
        icon: DatabaseIcon,
        keywords: "database sql nosql storage",
        path: `  M20 30
        C20 18 44 10 60 10
        C76 10 100 18 100 30
        C100 42 76 50 60 50
        C44 50 20 42 20 30
        Z

        M20 30
        V85

        M100 30
        V85

        M20 60
        C20 72 44 80 60 80
        C76 80 100 72 100 60

        M20 85
        C20 97 44 105 60 105
        C76 105 100 97 100 85`
    },
    {
        icon: HardDriveIcon,
        keywords: "file storage blob object s3 CD disk drive hardDisk drive harddrive",
        path: ` M20 20
        H100
        C106 20 110 24 110 30
        V90
        C110 96 106 100 100 100
        H20
        C14 100 10 96 10 90
        V30
        C10 24 14 20 20 20
        Z

        M60 35
        C40 35 25 50 25 60
        C25 70 40 85 60 85
        C80 85 95 70 95 60
        C95 50 80 35 60 35
        Z

        M60 52
        C55 52 52 55 52 60
        C52 65 55 68 60 68
        C65 68 68 65 68 60
        C68 55 65 52 60 52
        Z

        M68 60
        C78 64 84 70 88 76`
    },
    {
        icon: FolderIcon,
        keywords: "filesystem data files",
        path: `M15 35
        H45
        C50 35 52 38 55 42
        H105
        C110 42 115 47 115 52
        V85
        C115 92 110 97 103 97
        H17
        C10 97 5 92 5 85
        V45
        C5 39 10 35 15 35
        Z`
    },
    {
        icon: MessageQueue,
        keywords: "queue message broker kafka rabbitmq",
        path: `
        M15 20
        H75
        C81 20 85 24 85 30
        V90
        C85 96 81 100 75 100
        H15
        C9 100 5 96 5 90
        V30
        C5 24 9 20 15 20
        Z

        M20 40 H70
        M20 60 H70
        M20 80 H70

        M85 60 H105

        M95 50
        L105 60
        L95 70`
    },
    {
        icon: RepeatIcon,
        keywords: "event stream pubsub repeat repeater",
        path: `      M85 10
        L105 30
        L85 50

        M15 55
        V50
        A20 20 0 0 1 35 30
        H105

        M35 110
        L15 90
        L35 70

        M105 65
        V70
        A20 20 0 0 1 85 90
        H15`
    },
    {
        icon: WebhookIcon,
        keywords: "webhook callback integration",
        path: `           M90 84.9
        H60.05
        C54.55 84.9 50.3 89.6 47.6 94.5
        A20 20 0 0 1 10 85
        C10.05 81.5 11 78 12.85 75

        M30 85
        L45.65 56.1
        C48.3 51.25 45.5 45.1 42.5 40.5
        A20 20 0 1 1 77.95 20.7

        M60 30
        L75.65 58.65
        C78.3 63.5 84.5 65 90 65
        A20 20 0 0 1 90 105`
    },
    {
        icon: ZapIcon,
        keywords: "cache redis memcached performance",
        path:`  M68 5
        L20 70
        H52
        L40 115
        L100 45
        H64
        Z`
    },
    {
        icon: ClockIcon,
        keywords: "cron scheduler delayed jobs",
        path:`
        M60 10
        C32 10 10 32 10 60
        C10 88 32 110 60 110
        C88 110 110 88 110 60
        C110 32 88 10 60 10
        Z

        M60 60
        L60 36

        M60 60
        L82 60`
    },
    {
        icon: ShieldIcon,
        keywords: "security firewall protection cyber cyberSecurity cryptography encryption ",
        path:`M60 10
        C42 18 30 22 20 24
        V58
        C20 80 38 98 60 110
        C82 98 100 80 100 58
        V24
        C90 22 78 18 60 10
        Z`
    },
    {
        icon: LockIcon,
        keywords: "authentication authorization auth encryption decryption",
        path:` M35 50
        V40
        C35 24 47 12 60 12
        C73 12 85 24 85 40
        V50

        M30 50
        H90
        C96 50 100 54 100 60
        V95
        C100 101 96 105 90 105
        H30
        C24 105 20 101 20 95
        V60
        C20 54 24 50 30 50
        Z

        M60 65
        C55 65 52 68 52 72
        C52 76 55 79 60 79
        C65 79 68 76 68 72
        C68 68 65 65 60 65
        Z

        M60 79
        V90`
    },
    {
        icon: KeyIcon,
        keywords: "token jwt api-key secret",
        path:`M42 60
        C42 46 54 34 68 34
        C82 34 94 46 94 60
        C94 74 82 86 68 86
        C54 86 42 74 42 60
        Z

        M42 60
        H12

        M12 60
        V70
        H22
        V64
        H30
        V70
        H38
        V60`
    },
    {
        icon: ActivityIcon,
        keywords: "monitoring health metrics activity",
        path:`M110 60
        H92
        C84 60 80 64 78 72
        L66 112
        C65 116 59 116 58 112
        L44 28
        C43 24 37 24 36 28
        L24 72
        C22 64 18 60 10 60
        H10`
    },
    {
        icon: ChartColumnIncreasingIcon,
        keywords: "analytics logging stats",
        path:`   M15 15
        V95
        C15 101 19 105 25 105
        H105

        M35 95
        V75

        M60 95
        V55

        M85 95
        V35`
    },
    {
        icon: FileTextIcon,
        keywords: "logs tracing audit",
        path:` M30 10
        H70
        C75 10 78 12 82 16
        L104 38
        C108 42 110 45 110 50
        V100
        C110 106 106 110 100 110
        H30
        C24 110 20 106 20 100
        V20
        C20 14 24 10 30 10
        Z

        M70 10
        V38
        C70 44 74 48 80 48
        H104

        M40 60 H80
        M40 75 H90
        M40 90 H90`
    },
    {
        icon: BellIcon,
        keywords: "notification push alerts bell alarm ",
        path:` M20 90
        C30 80 35 72 35 50
        C35 28 48 15 60 15
        C72 15 85 28 85 50
        C85 72 90 80 100 90
        C102 92 100 95 96 95
        H24
        C20 95 18 92 20 90
        Z

        M50 95
        C50 103 56 108 60 108
        C64 108 70 103 70 95`
    },
    {
        icon: MailIcon,
        keywords: "email service smtp pop3 mail message news",
        path:` M20 25
        H100
        C106 25 110 29 110 35
        V85
        C110 91 106 95 100 95
        H20
        C14 95 10 91 10 85
        V35
        C10 29 14 25 20 25
        Z

        M10 35
        L54 62
        C57 64 63 64 66 62
        L110 35`
    },
    {
        icon: UsersIcon,
        keywords: "users roles permissions",
        path:`
        M60 18
        C46 18 35 29 35 42
        C35 55 46 66 60 66
        C74 66 85 55 85 42
        C85 29 74 18 60 18
        Z

        M18 104
        V92
        C18 76 36 68 52 68
        H68
        C84 68 102 76 102 92
        V104`
    },
    {
        icon: SettingsIcon,
        keywords: "config environment settings",
        path:`  M60 10
        C65 10 68 14 69 18
        C70 22 75 24 79 22
        C83 20 88 22 90 26
        C92 30 90 35 86 37
        C82 39 82 45 86 47
        C90 49 92 54 90 58
        C88 62 83 64 79 62
        C75 60 70 62 69 66
        C68 70 65 74 60 74
        C55 74 52 70 51 66
        C50 62 45 60 41 62
        C37 64 32 62 30 58
        C28 54 30 49 34 47
        C38 45 38 39 34 37
        C30 35 28 30 30 26
        C32 22 37 20 41 22
        C45 24 50 22 51 18
        C52 14 55 10 60 10
        Z

        M60 30
        C52 30 46 36 46 42
        C46 48 52 54 60 54
        C68 54 74 48 74 42
        C74 36 68 30 60 30
        Z`
    },
    {
        icon: SearchIcon,
        keywords: "search indexing elastic",
        path:`
        M52 20
        C34 20 20 34 20 52
        C20 70 34 84 52 84
        C70 84 84 70 84 52
        C84 34 70 20 52 20
        Z

        M78 78
        L108 108`
    },
    {
        icon: WorkflowIcon,
        keywords: "workflow orchestration state-machine",
        path:` M20 20
        H48
        C54 20 58 24 58 30
        V48
        C58 54 54 58 48 58
        H30
        C24 58 20 54 20 48
        Z

        M34 58
        V74
        C34 80 38 84 44 84
        H62

        M62 62
        H90
        C96 62 100 66 100 72
        V90
        C100 96 96 100 90 100
        H72
        C66 100 62 96 62 90
        Z`
    },
    {
        icon: GitBranchIcon,
        keywords: "versioning branching ci-cd cicd commit push origin main git bash",
        path:` M90 20
        C82 20 76 26 76 34
        C76 42 82 48 90 48
        C98 48 104 42 104 34
        C104 26 98 20 90 20
        Z

        M30 10
        V70

        M30 70
        C22 70 16 76 16 84
        C16 92 22 98 30 98
        C38 98 44 92 44 84
        C44 76 38 70 30 70
        Z

        M90 48
        C90 78 60 90 30 98`
    },
    {
        icon: ChromiumIcon,
        keywords: "google chrome chromium internet browser",
        path:`
        M60 10
        C32.4 10 10 32.4 10 60
        C10 87.6 32.4 110 60 110
        C87.6 110 110 87.6 110 60
        C110 32.4 87.6 10 60 10
        Z

        M60 40
        C49 40 40 49 40 60
        C40 71 49 80 60 80
        C71 80 80 71 80 60
        C80 49 71 40 60 40
        Z

        M60 40
        L60 10

        M77.3 70
        L103 85

        M42.7 70
        L17 85`
    },
    {
        icon: BitcoinIcon,
        keywords: "bitcoin cryptocurrency currency money",
        path:` 
        M60 8
        L46 112

        M60 26
        C88 30 92 52 60 58
        L36 54

        M56 58
        C90 64 94 92 54 98
        L32 94

        M72 16
        L76 4

        M68 96
        L72 116`
    },
    {
        icon: CodeSandboxIcon,
        keywords: "codesandbox sandbox emulator",
        path:`M60 10
        L100 32
        V78
        C100 82 98 86 94 88
        L60 108
        C56 110 52 110 48 108
        L26 96
        C22 94 20 90 20 86
        V32
        L60 10
        Z

        M40 22
        L60 34
        L80 22

        M40 98
        V66
        L20 54

        M80 98
        V66
        L100 54

        M20 32
        L60 56
        L100 32

        M60 108
        V56`
    },
    {
        icon: DribbbleIcon,
        keywords: "dribbble dribble design ui developement frontend",
        path:`M60 10
        C32.4 10 10 32.4 10 60
        C10 87.6 32.4 110 60 110
        C87.6 110 110 87.6 110 60
        C110 32.4 87.6 10 60 10
        Z

        M98 30
        C72 56 42 64 12 66

        M108 68
        C78 60 46 76 28 100

        M44 14
        C68 46 78 70 88 106`
    },
    {
        icon: FacebookIcon,
        keywords: "social media socialmedia facebook",
        path:`M78 10
        H60
        C44 10 32 22 32 38
        V52
        H20
        V72
        H32
        V110
        H52
        V72
        H72
        L78 52
        H52
        V40
        C52 34 56 30 62 30
        H78
        Z`
    },
    {
        icon: FigmaIcon,
        keywords: "figma design ui development frontend",
        path:` M30 25
        C30 15 38 10 48 10
        H60
        V40
        H48
        C38 40 30 35 30 25
        Z

        M60 10
        H72
        C82 10 90 15 90 25
        C90 35 82 40 72 40
        H60
        Z

        M60 60
        C60 48 72 40 84 48
        C96 56 96 64 84 72
        C72 80 60 72 60 60
        Z

        M30 95
        C30 85 38 80 48 80
        H60
        V95
        C60 105 52 110 45 110
        C36 110 30 103 30 95
        Z

        M30 60
        C30 50 38 45 48 45
        H60
        V75
        H48
        C38 75 30 70 30 60
        Z`
    },
    {
        icon: FramerIcon,
        keywords: "animation ui framer motion design frontend development ",
        path:` M20 18
        H100
        V46
        H20
        Z

        M20 46
        L60 86
        H100
        L60 46
        Z

        M20 86
        L60 118
        V86
        Z`
    },
    {
        icon: GitHubIcon,
        keywords: "version control vc  code github git deploy gitlab",
        path:` M60 10
        C32 10 10 30 10 58
        C10 80 24 98 44 104
        C46 104 46 102 46 100
        V92
        C34 95 30 86 28 82
        C26 78 22 76 20 76
        C18 76 16 74 20 74
        C24 74 28 78 30 82
        C34 90 42 88 46 86
        C46 82 48 78 50 76
        C36 74 24 68 24 48
        C24 42 26 36 30 32
        C30 30 28 24 32 16
        C32 16 38 16 46 22
        C52 20 68 20 74 22
        C82 16 88 16 88 16
        C92 24 90 30 90 32
        C94 36 96 42 96 48
        C96 68 84 74 70 76
        C74 80 76 84 76 92
        V100
        C76 102 76 104 78 104
        C98 98 110 80 110 58
        C110 30 88 10 60 10
        Z`
    },
    {
        icon: GitLabIcon,
        keywords: "version control vc code git github deploy gitlab",
        path:` M16 66
        L34 18
        L50 66
        Z

        M104 66
        L86 18
        L70 66
        Z

        M50 66
        H70
        L60 98
        Z

        M16 66
        L60 110
        L104 66`
    },
    {
        icon: InstagramIcon,
        keywords: "social media socialmedia insta instagram",
        path:` M30 10
        H90
        C102 10 110 18 110 30
        V90
        C110 102 102 110 90 110
        H30
        C18 110 10 102 10 90
        V30
        C10 18 18 10 30 10
        Z

        M60 38
        C48 38 38 48 38 60
        C38 72 48 82 60 82
        C72 82 82 72 82 60
        C82 48 72 38 60 38
        Z

        M86 28
        C84 28 82 30 82 32
        C82 34 84 36 86 36
        C88 36 90 34 90 32
        C90 30 88 28 86 28
        Z`
    },
    {
        icon: LinkedInIcon,
        keywords: "social media socialmedia Linkedin hr ",
        path:` M18 40
        H38
        V108
        H18
        Z

        M18 12
        C18 6 22 2 28 2
        C34 2 38 6 38 12
        C38 18 34 22 28 22
        C22 22 18 18 18 12
        Z

        M52 60
        C52 40 68 28 86 28
        C104 28 112 40 112 58
        V108
        H92
        V62
        C92 52 86 46 78 46
        C70 46 64 52 64 62
        V108
        H52
        Z`
    },
    {
        icon: SlackIcon,
        keywords: "social media socialmedia Slack meeting meet  hr",
        path:` 
        M38 10
        C32 10 28 14 28 20
        V50
        C28 56 32 60 38 60
        C44 60 48 56 48 50
        V20
        C48 14 44 10 38 10
        Z

        M60 28
        H90
        C96 28 100 32 100 38
        C100 44 96 48 90 48
        H60
        C54 48 50 44 50 38
        C50 32 54 28 60 28
        Z

        M82 60
        C88 60 92 64 92 70
        V100
        C92 106 88 110 82 110
        C76 110 72 106 72 100
        V70
        C72 64 76 60 82 60
        Z

        M20 72
        H50
        C56 72 60 76 60 82
        C60 88 56 92 50 92
        H20
        C14 92 10 88 10 82
        C10 76 14 72 20 72
        Z`
    },
    {
        icon: XIcon,
        keywords: "twitter x social media socialmedia",
        path:`    M20 16
        L100 104

        M20 104
        L100 16`
    },
    {
        icon: TwitterIcon,
        keywords: "twitter x social media socialmedia",
        path:`    M110 22
        C104 26 98 28 92 30
        C98 60 64 98 18 80
        C30 80 40 76 48 70
        C30 68 20 56 22 44
        C26 46 30 46 34 44
        C18 38 14 18 26 10
        C38 26 58 34 76 32
        C72 12 96 2 108 18
        C114 18 120 14 120 14
        C116 20 110 22 110 22
        Z`
    },
    {
        icon: YouTubeIcon,
        keywords: "youtube video social media socialmedia platform livestream",
        path:` M20 38
        C20 30 26 24 34 24
        H86
        C94 24 100 30 100 38
        V82
        C100 90 94 96 86 96
        H34
        C26 96 20 90 20 82
        Z

        M52 46
        L78 60
        L52 74
        Z`
    },
    {
        icon: TwitchIcon,
        keywords: "twitch video social socilamedia media tv platform livestream",
        path:`M20 14
        H104
        V72
        L80 96
        H52
        L36 112
        V96
        H20
        Z

        M48 36
        V56

        M72 36
        V56`
    },
    {
        icon: CameraIcon,
        keywords: "camera photo shoot image click video capture cctv record",
        path:` M20 38
        H38
        C42 38 44 36 46 32
        L50 24
        C52 20 56 18 60 18
        H72
        C76 18 80 20 82 24
        L86 32
        C88 36 90 38 94 38
        H100
        C108 38 112 42 112 50
        V92
        C112 100 108 104 100 104
        H20
        C12 104 8 100 8 92
        V50
        C8 42 12 38 20 38
        Z

        M60 52
        C48 52 40 60 40 72
        C40 84 48 92 60 92
        C72 92 80 84 80 72
        C80 60 72 52 60 52
        Z`
    },
    {
        icon: CctvIcon,
        keywords: "camera photo shoot image video click capture cctv record",
        path:`
        M86 60
        H104
        C108 60 110 64 108 68
        L96 92
        C94 96 88 96 86 92
        L74 76

        M88 52
        C92 50 94 46 92 42
        L78 14
        C76 10 72 10 68 12
        L24 36
        C18 40 16 46 18 52
        L24 64
        C26 68 30 70 34 68
        Z

        M14 88
        H44
        C50 88 54 84 56 80
        L64 64

        M14 104
        V80`
    },
    {
        icon: SimCardIcon,
        keywords: "card sim simcard network international global",
        path:`M34 10
        H68
        C72 10 74 12 76 14
        L98 36
        C100 38 102 40 102 44
        V96
        C102 104 98 108 90 108
        H34
        C26 108 22 104 22 96
        V22
        C22 14 26 10 34 10
        Z

        M42 44
        H78
        C82 44 84 46 84 50
        V82
        C84 86 82 88 78 88
        H42
        C38 88 36 86 36 82
        V50
        C36 46 38 44 42 44
        Z

        M42 60
        H78

        M60 60
        V88`
    },
    {
        icon: CassetteTapeIcon,
        keywords: "cassettetape tape record music player musicplayer tape ",
        path:` M20 28
        H100
        C108 28 112 32 112 40
        V80
        C112 88 108 92 100 92
        H20
        C12 92 8 88 8 80
        V40
        C8 32 12 28 20 28
        Z

        M40 44
        C34 44 30 48 30 54
        C30 60 34 64 40 64
        C46 64 50 60 50 54
        C50 48 46 44 40 44
        Z

        M80 44
        C74 44 70 48 70 54
        C70 60 74 64 80 64
        C86 64 90 60 90 54
        C90 48 86 44 80 44
        Z

        M40 64
        H80

        M32 92
        L38 76
        C40 72 44 70 48 70
        H72
        C76 70 80 72 82 76
        L88 92`
    },
    {
        icon: MicIcon,
        keywords: "mic record audio voice vocal microphone",
        path:` M60 14
        C50 14 44 20 44 30
        V58
        C44 68 50 74 60 74
        C70 74 76 68 76 58
        V30
        C76 20 70 14 60 14
        Z

        M36 54
        V60
        C36 78 48 90 60 90
        C72 90 84 78 84 60
        V54

        M60 90
        V106

        M46 106
        H74`
    },
    {
        icon: PhoneIcon,
        keywords: "Phone mobile call connection communication ",
        path:` M69.16 82.84
        C71.02 84.48 73.74 84.24 75.22 82.34
        L77.35 79.55
        C80.01 76.08 83.77 75 88 75
        H103
        C108.52 75 113 79.48 113 85
        V100
        C113 105.52 108.52 110 103 110
        C55.16 110 10 64.84 10 17
        C10 11.48 14.48 7 20 7
        H35
        C40.52 7 45 11.48 45 17
        V32
        C45 35.15 43.55 38.12 41 40
        L38.19 42.11
        C36.31 43.52 35.92 46.23 37.56 48.09
        C45.74 57.58 54.69 66.52 64.16 74.71
        Z`
    },
    {
        icon: PresentationIcon,
        keywords: "presentation projector ppt slide",
        path:` M10 15
        H110

        M105 15
        V70
        C105 78.28 98.28 85 90 85
        H30
        C21.72 85 15 78.28 15 70
        V15

        M35 105
        L60 85
        L85 105`
    },
    {
        icon: ProjectorIcon,
        keywords: "projector slide presentation ppt ",
        path:` M25 35 L15 25
        M45 30 V15
        M65 35 L75 25

        M45 65
        C45 55 55 45 65 45
        C75 45 85 55 85 65
        C85 75 75 85 65 85
        C55 85 45 75 45 65
        Z

        M20 65
        H100
        C110 65 115 70 115 80
        V100
        C115 110 110 115 100 115
        H20
        C10 115 5 110 5 100
        V80
        C5 70 10 65 20 65
        Z

        M80 85
        H90`
    },
    {
        icon: TvIcon,
        keywords: "tv livestream social media socialmedia",
        path:` M85 10
        L60 35
        L35 10

        M20 35
        H100
        C108 35 112 39 112 47
        V95
        C112 103 108 107 100 107
        H20
        C12 107 8 103 8 95
        V47
        C8 39 12 35 20 35
        Z`
    },
    {
        icon: VideoIcon,
        keywords: "camera photo shoot image video click capture cctv record",
        path:`   M80 65
        L106 82
        C109 84 112 82 112 78
        V42
        C112 38 109 36 106 38
        L80 55

        M10 30
        H70
        C78 30 82 34 82 42
        V78
        C82 86 78 90 70 90
        H10
        C2 90 -2 86 -2 78
        V42
        C-2 34 2 30 10 30
        Z`
    },
    {
        icon: Volume2Icon,
        keywords: "audio volume speaker",
        path:` M55 23.5
        C55 19.6 50.7 17.6 47.9 20.1
        L32.1 35.9
        C30.7 37.3 28.8 38 26.8 38
        H18
        C12.5 38 10 40.5 10 46
        V74
        C10 79.5 12.5 82 18 82
        H26.8
        C28.8 82 30.7 82.7 32.1 84.1
        L47.9 99.9
        C50.7 102.4 55 100.4 55 96.5
        Z

        M72 45
        C78 51 78 69 72 75

        M87 30
        C99 42 99 78 87 90`
    },
    {
        icon: BatteryFullIcon,
        keywords: "battery power charge recharge charging",
        path:` M12 30
        H88
        C96 30 100 34 100 42
        V78
        C100 86 96 90 88 90
        H12
        C4 90 0 86 0 78
        V42
        C0 34 4 30 12 30
        Z

        M100 50
        H112
        V70
        H100

        M26 42 V78
        M42 42 V78
        M58 42 V78
        M74 42 V78`
    },
    {
        icon: BatteryChargingIcon,
        keywords: "battery power charge recharge charging",
        path:` M55 35
        L40 60
        H60
        L45 85

        M74 30
        H84
        C92 30 96 34 96 42
        V78
        C96 86 92 90 84 90
        H70

        M100 50
        H112
        V70
        H100

        M26 90
        H16
        C8 90 4 86 4 78
        V42
        C4 34 8 30 16 30
        H30`
    },
    {
        icon: BatteryWarningIcon,
        keywords: "battery power charge recharge charging",
        path:` M50 85
        H50.5
        M50 35
        V75

        M70 30
        H84
        C92 30 96 34 96 42
        V78
        C96 86 92 90 84 90
        H70

        M100 50
        H112
        V70
        H100

        M26 90
        H16
        C8 90 4 86 4 78
        V42
        C4 34 8 30 16 30
        H30`
    },
    {
        icon: BluetoothIcon,
        keywords: "bluetooth connection lan network",
        path:`  M35 35
        L85 85

        L60 110
        V10
        L85 35

        L35 85`
    },
    {
        icon: BluetoothConnectedIcon,
        keywords: "bluetooth connection lan network",
        path:` M35 35
        L85 85
        L60 110
        V10
        L85 35
        L35 85

        M90 60
        H110

        M10 60
        H30`
    },
    {
        icon: BluetoothOffIcon,
        keywords: "bluetooth connection lan network",
        path:`   M85 85
        L60 110
        V60
        L35 85

        M10 10
        L110 110

        M72.5 47.5
        L85 35
        L60 10
        V32.5`
    },
    {
        icon: CableIcon,
        keywords: "cable wire connection lan wlan pan man network",
        path:`M85 95
        A5 5 0 0 1 80 90
        V80
        A10 10 0 0 1 90 70
        H100
        A10 10 0 0 1 110 80
        V90
        A5 5 0 0 1 105 95
        Z

        M85 105
        V95

        M95 70
        V32.5
        A5 5 0 0 0 60 32.5
        V87.5
        A5 5 0 0 1 25 87.5
        V50

        M105 105
        V95

        M15 25
        V15

        M20 50
        A10 10 0 0 1 10 40
        V30
        A5 5 0 0 1 15 25
        H35
        A5 5 0 0 1 40 30
        V40
        A10 10 0 0 1 30 50
        Z

        M35 25
        V15`
    },
    {
        icon: HeadphonesIcon,
        keywords: "headphone music audio hearing speaker",
        path:`  M15 70
        H30
        A10 10 0 0 1 40 80
        V95
        A10 10 0 0 1 30 105
        H25
        A10 10 0 0 1 15 95
        V60
        A45 45 0 0 1 105 60
        V95
        A10 10 0 0 1 95 105
        H90
        A10 10 0 0 1 80 95
        V80
        A10 10 0 0 1 90 70
        H105`
    },
    {
        icon: MonitorSmartphoneIcon,
        keywords: "monitor phone frontend client ui mobile",
        path:`M90 40
        V30
        A10 10 0 0 0 80 20
        H20
        A10 10 0 0 0 10 30
        V65
        A10 10 0 0 0 20 75
        H60

        M50 95
        V75
        M35 95
        H60

        M80 60
        H110
        A10 10 0 0 1 120 70
        V110
        A10 10 0 0 1 110 120
        H80
        A10 10 0 0 1 70 110
        V70
        A10 10 0 0 1 80 60
        Z`
    },
    {
        icon: SatelliteIcon,
        keywords: "satellite space connection internet connection",
        path:`M67.5 32.5
        L51.76 16.76
        A6.025 6.025 0 0 0 43.24 16.76
        L31.76 28.24
        A6.025 6.025 0 0 0 31.76 36.76
        L47.5 52.5

        M82.5 37.5
        L95 25

        M87.5 52.5
        L103.24 68.24
        A6.025 6.025 0 0 1 103.24 76.76
        L91.76 88.24
        A6.025 6.025 0 0 1 83.24 88.24
        L67.5 72.5

        M45 105
        A30 30 0 0 0 15 75

        M46.76 53.24
        A6.025 6.025 0 0 0 46.76 61.76
        L58.24 73.24
        A6.025 6.025 0 0 0 66.76 73.24
        L88.24 51.76
        A6.025 6.025 0 0 0 88.24 43.24
        L76.76 31.76
        A6.025 6.025 0 0 0 68.24 31.76
        Z`
    },
    {
        icon: SatelliteDishIcon,
        keywords: "satellitedish dish  space connection internet connection",
        path:` M20 50
        A36.55 36.55 0 0 0 70 100
        Z

        M45 75
        L60 60

        M85 65
        A30 30 0 0 0 55 35

        M105 65
        A50 50 0 0 0 55 15`
    },
    {
        icon: SignalIcon,
        keywords: "signal network connection internet ",
        path:`M10 100
        H10.05

        M35 100
        V80

        M60 100
        V60

        M85 100
        V40

        M110 20
        V100`
    },
    {
        icon: SmartphoneIcon,
        keywords: "smartphone mobile device client fronend user ui phone android",
        path:`
        M25 10
        H95
        A10 10 0 0 1 105 20
        V100
        A10 10 0 0 1 95 110
        H25
        A10 10 0 0 1 15 100
        V20
        A10 10 0 0 1 25 10
        Z
        M60 90
        m-3 0
        a3 3 0 1 0 6 0
        a3 3 0 1 0 -6 0`
    },
    {
        icon: WifiIcon,
        keywords: "wifi lan pan connection network",
        path:`M60 100
        m-3 0
        a3 3 0 1 0 6 0
        a3 3 0 1 0 -6 0

        M10 44.1
        A75 75 0 0 1 110 44.1

        M25 64.295
        A50 50 0 0 1 95 64.295

        M42.5 82.145
        A25 25 0 0 1 77.5 82.145`
    },
    {
        icon: LoaderCircleIcon,
        keywords: "loader waiting processing loading ",
        path:` M105 60
        A45 45 0 1 1 73.905 17.2`
    },
    {
        icon: BugIcon,
        keywords: "bug error defect testing troubleshoot problem report debug code insect beetle",
        path:` M60 100
        V55

        M70 35
        A20 20 0 0 1 90 55
        V70
        A30 30 0 0 1 30 70
        V55
        A20 20 0 0 1 50 35
        Z

        M70.6 19.4
        L80 10
        M40 10
        L49.4 19.4

        M105 105
        A20 20 0 0 0 86 85
        M105 25
        A20 20 0 0 1 87.75 44.85
        M110 65
        H90

        M15 105
        A20 20 0 0 1 34 85
        M15 25
        A20 20 0 0 0 32.25 44.85
        M30 65
        H10

        M45 35.65
        V30
        A15 15 0 1 1 75 30
        V35.65`
    },
    {
        icon: FileTerminalIcon,
        keywords: "terminal  bash  script  executable file folder",
        path:` M30 110
        A10 10 0 0 1 20 100
        V20
        A10 10 0 0 1 30 10
        H70
        A12 12 0 0 1 78.52 13.53
        L96.46 31.47
        A12 12 0 0 1 100 40
        V100
        A10 10 0 0 1 90 110
        Z

        M70 10
        V35
        A5 5 0 0 0 75 40
        H100

        M40 80
        L50 70
        L40 60

        M60 90
        H80`
    },
    {
        icon: FolderKanbanIcon,
        keywords: "projects manage folder  overview file  board  tickets  issues  roadmap  plan  intentions  productivity  work  agile  code  coding  directory  project  root",
        path:`M20 100
        H100
        A10 10 0 0 0 110 90
        V40
        A10 10 0 0 0 100 30
        H60.35
        A10 10 0 0 1 52.05 25.5
        L47.95 19.5
        A10 10 0 0 0 39.65 15
        H20
        A10 10 0 0 0 10 25
        V90
        C10 95.5 14.5 100 20 100
        Z

        M40 50
        V70

        M60 50
        V60

        M80 50
        V80`
    },
    {
        icon: FolderOpenDotIcon,
        keywords: "projects manage folder  overview file  board  tickets  issues  roadmap  plan  intentions  productivity  work  agile  code  coding  directory  project  root",
        path:` M30 70
        L37.25 55.5
        A10 10 0 0 1 46.2 50
        H100
        A10 10 0 0 1 109.7 62.5
        L102 92.5
        A10 10 0 0 1 92.3 100
        H20
        A10 10 0 0 1 10 90
        V25
        A10 10 0 0 1 20 15
        H39.65
        A10 10 0 0 1 47.95 19.5
        L52.05 25.5
        A10 10 0 0 0 60.35 30
        H90
        A10 10 0 0 1 100 40
        V50

        M70 75
        m-5 0
        a5 5 0 1 0 10 0
        a5 5 0 1 0 -10 0`
    },
    {
        icon: PlugIcon,
        keywords: "plug electricity  energy  electronics  socket  outlet  power  voltage  current  charger",
        path:` M60 110
        V85

        M45 40
        V10

        M85 40
        A5 5 0 0 1 90 45
        V65
        A20 20 0 0 1 70 85
        H50
        A20 20 0 0 1 30 65
        V45
        A5 5 0 0 1 35 40
        Z

        M75 40
        V10`
    },
    {
        icon: TerminalIcon,
        keywords: "terminal code  command line  prompt  shell",
        path:`  M60 95
        H100

        M20 85
        L50 55
        L20 25`
    },
    {
        icon: TabletSmartphoneIcon,
        keywords: "tablet-smartphone responsive  screens  browser  testing  mobile",
        path:`M15 40
        H55
        A10 10 0 0 1 65 50
        V100
        A10 10 0 0 1 55 110
        H25
        A10 10 0 0 1 15 100
        Z

        M25 20
        A10 10 0 0 1 35 10
        H95
        A10 10 0 0 1 105 20
        V100
        A10 10 0 0 1 95 110
        H83

        M40 90
        m-2.5 0
        a2.5 2.5 0 1 0 5 0
        a2.5 2.5 0 1 0 -5 0`
    }
];
