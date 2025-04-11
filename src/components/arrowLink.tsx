import Link from "next/link";
import { ArrowRight } from "lucide-react";
type Props = {
  linkHref: string;
  linkName: string;
};
const ArrowLink = ({ linkHref, linkName }: Props) => {
  return (
    <Link href={linkHref} className="flex items-center gap-2 group">
      <p className="font-medium group-hover:underline">{linkName}</p>
      <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
};

export default ArrowLink;
