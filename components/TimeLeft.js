import IconClock from "../components/IconClock";

const TimeLeft = () => {
  return (
    <div className="flex items-center">
      <IconClock />
      <p className="text-softBlue">3 days left</p>
    </div>
  );
};

export default TimeLeft;
