import Image from "next/image";
import Link from "next/link";

const navigation = [
  {
    label: "Referral",
    href: "",
    icon: (
      <Image
        src="/images/navigation/referral.png"
        alt="referral"
        width={64}
        height={64}
        objectFit="contain"
      />
    ),
  },
  {
    label: "Quests",
    href: "",
    icon: (
      <Image
        src="/images/navigation/quests.png"
        alt="referral"
        width={60}
        height={60}
        objectFit="contain"
      />
    ),
  },
  {
    label: "Leaderboard",
    href: "",
    icon: (
      <Image
        src="/images/navigation/leaderboard.png"
        alt="referral"
        width={60}
        height={60}
        objectFit="contain"
      />
    ),
  },
];

function Navigation() {
  return (
    <div className="fixed bottom-0 left-0 w-full px-6 pb-6 font-gemfont-one">
      <nav className="flex items-center justify-center gap-16">
        {navigation.map(({ href, icon, label }) => (
          <Link
            key={label}
            href={href}
            className="flex shrink-0 flex-col items-center"
          >
            {icon}
            <span className="-mt-2">{label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Navigation;
