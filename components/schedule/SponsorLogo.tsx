import React from "react";
import { SponsorLogoKey } from "@/lib/schedule/schedule";

import Aptos from "@/assets/sponsors/aptos";
import Babylon from "@/assets/sponsors/babylon";
import Bybit from "@/assets/sponsors/bybit";
import Citrea from "@/assets/sponsors/citrea";
import Ledger from "@/assets/sponsors/ledger";
import Olas from "@/assets/sponsors/olas";
import Rise from "@/assets/sponsors/rise";
import Taikai from "@/assets/sponsors/taikai";
import Yellow from "@/assets/sponsors/yellow";

const logoMap: Record<
    SponsorLogoKey,
    React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
    aptos: Aptos,
    babylon: Babylon,
    bybit: Bybit,
    citrea: Citrea,
    ledger: Ledger,
    olas: Olas,
    rise: Rise,
    taikai: Taikai,
    yellow: Yellow,
    "": (props: React.SVGProps<SVGSVGElement>) => <svg {...props} />,
};

const SponsorLogo = ({
    logo,
    className,
}: {
    logo?: SponsorLogoKey;
    className?: string;
}) => {
    if (!logo) return null;
    const Component = logoMap[logo];
    if (!Component) return null;
    return <Component className={className} />;
};

export default SponsorLogo;
