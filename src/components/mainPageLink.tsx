import { ArrowUpRight, LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
type Props = {
  linkName: String;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const MainPageLink = ({ linkName, icon: Icon }: Props) => {
  return (
    <Button variant="mainlink" size="maxDefault">

      <Icon/>
      <div className="flex gap-5 items-center">
        <p>{linkName}</p>
      </div>
      <ArrowUpRight />
    </Button>
  );
};
export default MainPageLink;
