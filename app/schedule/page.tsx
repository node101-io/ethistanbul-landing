import Schedule from "@/components/schedule/schedule";
import ClientPageWrapper from "@/components/ClientPageWrapper";
import Navbar from "@/components/ui/nav-bar";

export default function SchedulePage() {
    return (
        <ClientPageWrapper>
            <main className="relative">
                <div className="relative z-50">
                    <Navbar position="top" />
                </div>
                <Schedule />
            </main>
        </ClientPageWrapper>
    );
}
