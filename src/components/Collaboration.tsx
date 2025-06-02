import calender from "../assets/images/solar_calendar-outline.svg";
import hdCalls from "../assets/images/si_mic-line.svg";
import workspace from "../assets/images/carbon_workspace.svg";
import channel from "../assets/images/channel.svg";
import files from "../assets/images/files.svg";

const Collaboration = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full my-6 px-6 py-12 bg-white relative overflow-hidden">
      {/* Title */}
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-12 z-10">
        Worksy Delivers Complete Team{" "}
        <span className="text-[#6629DE]">Collaboration</span>
      </h1>

      {/* Top 3 cards */}
      <div className="flex justify-center gap-6 mb-8 z-10 max-w-[1800px] w-full">
        <Card
          icon={calender}
          title="calendar"
          description="Schedule meetings and sync with Google Calendar or Outlook never miss a deadline"
        />
        <Card
          icon={hdCalls}
          title="HD calls"
          description="Voice & Video Calls Face-to-face meetings without the meeting fatigue Jump into high quality calls instantly"
        />
        <Card
          icon={workspace}
          title="workspace"
          description="Organized Workspaces Structure that scales with your team Create dedicated spaces for projects, departments, or topics."
        />
      </div>

      {/* Bottom 2 cards (larger width) */}
      <div className="flex flex-wrap justify-center gap-6 z-10">
        <Card
          icon={channel}
          title="channel"
          description="Open conversations that keep everyone aligned Create transparent spaces where teams can collaborate openly, share updates, and stay connected on shared projects."
          wide
        />
        <Card
          icon={files}
          title="secure files"
          description="File Sharing & Storage Share anything, find everything, instantly Drag, drop, and access all your files in one place. No more hunting through email attachments or outdated versions."
          wide
        />
      </div>

      {/* Background Shape (smaller SVG) */}
      <div className="absolute bottom-10 right-0 -z-0 w-full max-w-[700px] opacity-90">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 986 752"
          fill="none"
          className="w-full h-auto"
        >
          <path
            d="M846.247 49.7987C803.85 95.0596 780.368 151.291 758.111 206.464C735.855 261.638 713.447 318.045 672.613 364.408C631.796 410.77 568.436 446.162 501.667 442.256C370.884 434.59 285.083 308.441 162.916 275.017C123.594 264.252 77.6031 265.632 44.8148 287.441C-1.05856 317.942 -6.41689 379.945 19.5181 424.941C45.4531 469.938 95.0891 500.704 145.716 524.774C184.602 543.263 225.234 558.933 267.06 571.591C319.77 587.525 376.897 599.949 416.387 634.387C466.443 678.047 456.18 712.22 428.7 744H986V0H909.186C885.62 13.8485 864.27 30.5606 846.247 49.7987Z"
            fill="#6629DE"
            fillOpacity="0.4"
          />
        </svg>
      </div>
    </div>
  );
};

// Card Component
type CardProps = {
  icon: string;
  title: string;
  description: string;
  bg?: string;
  wide?: boolean;
};

const Card = ({
  icon,
  title,
  description,
  bg = "bg-white",
  wide = false,
}: CardProps) => {
  return (
    <div
      className={`${
        wide ? "max-w-[700px]" : "max-w-[460px] flex-shrink-0 flex-grow-0"
      } h-[240px] rounded-2xl ${bg} p-6 shadow-md flex flex-col justify-start`}
    >
      <div className="flex items-center gap-3 mb-4">
        <img src={icon} alt={`${title} icon`} className="w-8 h-8" />
        <h2 className="text-[#6629DE] text-xl font-bold capitalize">{title}</h2>
      </div>
      <p className="text-[18px] text-black leading-snug">{description}</p>
    </div>
  );
};

export default Collaboration;
