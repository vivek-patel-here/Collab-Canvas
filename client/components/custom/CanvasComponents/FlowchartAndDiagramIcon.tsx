"use client"
import * as React from "react";
//paralleloGram
type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  strokeWidth?: number;
};

//start | End Icon 
const Pill = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 4,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120 "
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="
         M40 30
          H80
          A30 30 0 0 1 80 90
          H40
          A30 30 0 0 1 40 30
          Z
        " />
    </svg>
  );
};

//process Icon
const Process = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  ...prop
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
      {...prop}
    >
      <path d="M28 32
          H92
          A6 6 0 0 1 98 38
          V82
          A6 6 0 0 1 92 88
          H28
          A6 6 0 0 1 22 82
          V38
          A6 6 0 0 1 28 32
          Z" />
    </svg>
  );
};

//Sub-process icon
const SubprocessIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...iconProps
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...iconProps}
    >
      <path
        d="
          M28 40
          H92
          A6 6 0 0 1 98 46
          V74
          A6 6 0 0 1 92 80
          H28
          A6 6 0 0 1 22 74
          V46
          A6 6 0 0 1 28 40
          Z

          M36 46
          V74

          M44 46
          V74

          M76 46
          V74

          M84 46
          V74
        "
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

//Annotation
const Annotation = ({
  size = 24,
  color = "#000",
  strokeWidth = 2,
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
    <path d="  M10 0
          V100

          M10 0
          H50

          M-10 50
          H10

          M10 100
          H50"/>
    </svg>
  );
};


//card
const CardIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...prop
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...prop}
    >
      <path
        d="
          M26 30
          H78
          L94 46
          V90
          H26
          Z

          M78 30
          V46
          H94
        "
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};

//collet
 const ColletIcon = ({
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
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d={`M30 34
          H90
          L82 50
          H22
          Z

          M38 54
          H98
          L90 70
          H30
          Z`}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

//collate
 const CollateIcon = ({
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
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="
          M30 32
          H90
          L60 60
          Z

          M30 88
          H90
          L60 60
          Z
        "
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

//cylinder
 const CylinderIcon = ({
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
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="
          M30 30
          C30 22 90 22 90 30
          V90
          C90 98 30 98 30 90
          Z

          M30 30
          C30 38 90 38 90 30
        "
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

//Decision
const DecisionIcon = ({
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
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="
          M60 20
          L100 60
          L60 100
          L20 60
          Z
        "
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};

//Delay
const DelayIcon = ({
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
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="
          M30 30
          H60
          C90 30 90 90 60 90
          H30
          Z
        "
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

//Direct Data
const HorizontalPipeIcon = ({
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
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="
          M30 40
          C22 40 22 80 30 80
          H90
          C98 80 98 40 90 40
          Z

          M30 40
          C38 40 38 80 30 80
        "
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

//transfer
const ArrowRightIcon = ({
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
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="
          M20 45
          H60
          V30
          L95 60
          L60 90
          V75
          H20
          Z
        "
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

//parallel mode
const ParallelMode = ({
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
         M15 30
          H105
          V90
          H15
          Z

          M35 60
          L45 50
          L55 60
          L45 70
          Z

          M55 60
          L65 50
          L75 60
          L65 70
          Z

          M75 60
          L85 50
          L95 60
          L85 70
          Z
        "
      />
    </svg>
  );
};


//uml class
const UMLClass = ({
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
        M15 15
        H105
        V105
        H15
        Z

        M15 45
        H105

        M15 75
        H105
      "
    />
  </svg>
)}

//uml interface
const UMLInterface = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) =>{ return (
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
        M20 20 H30
        M36 20 H46
        M52 20 H62
        M68 20 H78
        M84 20 H94

        M100 20 V30
        M100 36 V46
        M100 52 V62
        M100 68 V78
        M100 84 V94

        M94 100 H84
        M78 100 H68
        M62 100 H52
        M46 100 H36
        M30 100 H20

        M20 94 V84
        M20 78 V68
        M20 62 V52
        M20 46 V36
        M20 30 V20
      "
    />
  </svg>
)};

//uml Inheritence
const BinaryTreeIcon = ({
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
          M60 28
          m-8 0
          a8 8 0 1 0 16 0
          a8 8 0 1 0 -16 0

          M36 76
          m-8 0
          a8 8 0 1 0 16 0
          a8 8 0 1 0 -16 0

          M84 76
          m-8 0
          a8 8 0 1 0 16 0
          a8 8 0 1 0 -16 0

          M56 36
          L40 68

          M64 36
          L80 68
        "
      />
    </svg>
  );
};

//inheritence uml
const UMLInheritance = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) =>{return (
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
        M60 100
        V30

        M40 30
        H80
        L60 10
        Z
      "
    />
  </svg>
)};

//composition
const UMLComposition = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) =>{return (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill={color}
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="square"
    strokeLinejoin="miter"
    {...props}
  >
    <path
      d="
        M30 60
        L50 40
        L70 60
        L50 80
        Z

        M70 60
        H100
      "
    />
  </svg>
)};

//aggregation
const UMLAggregation = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) =>{return (
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
        M30 60
        L50 40
        L70 60
        L50 80
        Z

        M70 60
        H100
      "
    />
  </svg>
)};

//weak entity
const ERWeakEntity = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => {return(
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

        M15 25
        H105
        V95
        H15
        Z

        M30 40
        H90
        V80
        H30
        Z
      "
    />
  </svg>
)};

//attrubutes
const ERAttribute = ({
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
          M60 30
          C35 30 15 45 15 60
          C15 75 35 90 60 90
          C85 90 105 75 105 60
          C105 45 85 30 60 30
          Z

          M60 40
          C42 40 30 50 30 60
          C30 70 42 80 60 80
          C78 80 90 70 90 60
          C90 50 78 40 60 40
          Z
        "
      />
    </svg>
  );
};


//TableIcon
const TableIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 6,
  ...props
}: IconProps) => {return (
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
        M20 20
        H100
        V100
        H20
        Z

        M20 46
        H100

        M20 72
        H100

        M47 20
        V100

        M74 20
        V100
      "
    />
  </svg>
)};

//uml actor
const UMLActor = ({
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
          M60 15
          m-15 0
          a15 15 0 1 0 30 0
          a15 15 0 1 0 -30 0

          M60 30
          V80

          M30 50
          H90

          M60 80
          L35 110

          M60 80
          L85 110
        "
      />
    </svg>
  )};

  //multiple document
const DocumentsStackIcon = ({
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
          M36 30
          H84
          V70
          C74 74 66 76 60 76
          C54 76 46 74 36 70
          Z

          M30 36
          H78
          V76
          C68 80 60 82 54 82
          C48 82 40 80 30 76
          Z

          M24 42
          H72
          V82
          C62 86 54 88 48 88
          C42 88 34 86 24 82
          Z
        "
      />
    </svg>
  );
};

const CardPanelIcon = ({
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
          M30 20
          H90
          C96 20 100 24 100 30
          V90
          C100 96 96 100 90 100
          H30
          C24 100 20 96 20 90
          V30
          C20 24 24 20 30 20
          Z

          M20 36
          H100

          M36 20
          V100
        "
      />
    </svg>
  );
};

const DoubleRhombusIcon = ({
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
        M60 10
        L110 60
        L60 110
        L10 60
        Z

        M60 35
        L85 60
        L60 85
        L35 60
        Z
      "
    />
  </svg>
);


const diagrams = [
  {
    icon: Pill,
    path:`M40 30
          H80
          A30 30 0 0 1 80 90
          H40
          A30 30 0 0 1 40 30
          Z`
  },
  {
    icon:Process,
    path:`M28 32
          H92
          A6 6 0 0 1 98 38
          V82
          A6 6 0 0 1 92 88
          H28
          A6 6 0 0 1 22 82
          V38
          A6 6 0 0 1 28 32
          Z`
  },
  {
    icon:SubprocessIcon,
    path:` M28 40
          H92
          A6 6 0 0 1 98 46
          V74
          A6 6 0 0 1 92 80
          H28
          A6 6 0 0 1 22 74
          V46
          A6 6 0 0 1 28 40
          Z

          M36 46
          V74

          M44 46
          V74

          M76 46
          V74

          M84 46
          V74`
  },
  {
    icon:Annotation,
    path:`M10 0
          V100

          M10 0
          H50

          M-10 50
          H10

          M10 100
          H50
          `
  },
  {
    icon:CardIcon,
    path:`M26 30
          H78
          L94 46
          V90
          H26
          Z

          M78 30
          V46
          H94`
  },
  {
    icon:ColletIcon,
    path:`M30 34
          H90
          L82 50
          H22
          Z

          M38 54
          H98
          L90 70
          H30
          Z`
  },
  {
    icon:CollateIcon,
    path:` M30 32
          H90
          L60 60
          Z

          M30 88
          H90
          L60 60
          Z`
  },
  {
    icon:DocumentsStackIcon,
    path:` M36 30
          H84
          V70
          C74 74 66 76 60 76
          C54 76 46 74 36 70
          Z

          M30 36
          H78
          V76
          C68 80 60 82 54 82
          C48 82 40 80 30 76
          Z

          M24 42
          H72
          V82
          C62 86 54 88 48 88
          C42 88 34 86 24 82
          Z`
  },
  {
    icon:CardPanelIcon,
    path:`M30 20
          H90
          C96 20 100 24 100 30
          V90
          C100 96 96 100 90 100
          H30
          C24 100 20 96 20 90
          V30
          C20 24 24 20 30 20
          Z

          M20 36
          H100

          M36 20
          V100`
  },
  {
    icon:DecisionIcon,
    path:`  M60 20
          L100 60
          L60 100
          L20 60
          Z`
  },
  {
    icon:DelayIcon,
    path:`  M30 30
          H60
          C90 30 90 90 60 90
          H30
          Z`
  },
  {
    icon:HorizontalPipeIcon,
    path:` M30 40
          C22 40 22 80 30 80
          H90
          C98 80 98 40 90 40
          Z

          M30 40
          C38 40 38 80 30 80`
  },
  {
    icon:ArrowRightIcon,
    path:`M20 45
          H60
          V30
          L95 60
          L60 90
          V75
          H20
          Z`
  },
  {
    icon:ParallelMode,
    path:`M15 30
          H105
          V90
          H15
          Z

          M35 60
          L45 50
          L55 60
          L45 70
          Z

          M55 60
          L65 50
          L75 60
          L65 70
          Z

          M75 60
          L85 50
          L95 60
          L85 70
          Z`
  },
  {
    icon:UMLClass,
    path:`     M15 15
        H105
        V105
        H15
        Z

        M15 45
        H105

        M15 75
        H105`
  },
  {
    icon:UMLInterface,
    path:`M20 20 H30
        M36 20 H46
        M52 20 H62
        M68 20 H78
        M84 20 H94

        M100 20 V30
        M100 36 V46
        M100 52 V62
        M100 68 V78
        M100 84 V94

        M94 100 H84
        M78 100 H68
        M62 100 H52
        M46 100 H36
        M30 100 H20

        M20 94 V84
        M20 78 V68
        M20 62 V52
        M20 46 V36
        M20 30 V20`
  },
  {
    icon:BinaryTreeIcon,
    path:`
          M60 28
          m-8 0
          a8 8 0 1 0 16 0
          a8 8 0 1 0 -16 0

          M36 76
          m-8 0
          a8 8 0 1 0 16 0
          a8 8 0 1 0 -16 0

          M84 76
          m-8 0
          a8 8 0 1 0 16 0
          a8 8 0 1 0 -16 0

          M56 36
          L40 68

          M64 36
          L80 68`
  },
  {
    icon:UMLInheritance,
    path:`M60 100
        V30

        M40 30
        H80
        L60 10
        Z`
  },
  {
    icon:DoubleRhombusIcon,
    path:`   M60 10
        L110 60
        L60 110
        L10 60
        Z

        M60 35
        L85 60
        L60 85
        L35 60
        Z`,
    fill:true
  },
  {
    icon:UMLAggregation,
    path:` M30 60
        L50 40
        L70 60
        L50 80
        Z

        M70 60
        H100`
  },
  {
    icon:ERWeakEntity,
    path:`
        M15 25
        H105
        V95
        H15
        Z

        M30 40
        H90
        V80
        H30
        Z`
  },
  {
    icon:ERAttribute,
    path:`
          M60 30
          C35 30 15 45 15 60
          C15 75 35 90 60 90
          C85 90 105 75 105 60
          C105 45 85 30 60 30
          Z


          M60 40
          C42 40 30 50 30 60
          C30 70 42 80 60 80
          C78 80 90 70 90 60
          C90 50 78 40 60 40
          Z`
  },
  {
    icon:TableIcon,
    path:`  M20 20
        H100
        V100
        H20
        Z

        M20 46
        H100

        M20 72
        H100

        M47 20
        V100

        M74 20
        V100`
  },
  {
    icon:UMLActor,
    path:`M60 15
          m-15 0
          a15 15 0 1 0 30 0
          a15 15 0 1 0 -30 0

          M60 30
          V80

          M30 50
          H90

          M60 80
          L35 110

          M60 80
          L85 110`
  }
]

export default diagrams;