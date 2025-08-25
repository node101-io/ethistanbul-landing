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
import Aztec from "@/assets/sponsors/aztec";
import Bme from "@/assets/sponsors/bme";
import Flashbots from "@/assets/sponsors/flashbots";
import Fluent from "@/assets/sponsors/fluent";
import Megaeth from "@/assets/sponsors/megaeth";
import Offchain from "@/assets/sponsors/offchain";
import Spire from "@/assets/sponsors/spire";
import Zircuit from "@/assets/sponsors/zircuit";
import Piku from "@/assets/sponsors/piku";
import Avail from "@/assets/sponsors/avail";
import Cap from "@/assets/sponsors/cap";
import Lighter from "@/assets/sponsors/lighter";
import Pelagos from "@/assets/sponsors/pelagos";
import Status from "@/assets/sponsors/status";

const logoMap: Record<
    SponsorLogoKey,
    React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
    avail: Avail,
    aptos: Aptos,
    aztec: Aztec,
    bme: Bme,
    babylon: Babylon,
    bybit: Bybit,
    cap: Cap,
    citrea: Citrea,
    flashbots: Flashbots,
    fluent: Fluent,
    ledger: Ledger,
    lighter: Lighter,
    megaeth: Megaeth,
    offchain: Offchain,
    piku: Piku,
    pelagos: Pelagos,
    spire: Spire,
    status: Status,
    olas: Olas,
    rise: Rise,
    taikai: Taikai,
    yellow: Yellow,
    zircuit: Zircuit,
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
