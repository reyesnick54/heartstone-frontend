// F1 demo of the citizen shell built from @heartstone/ui. No routing, no API calls (F2), and no
// government data: every value on this page is a labelled example.
import {
  AppShell,
  ApplicationsIcon,
  Button,
  Card,
  Cluster,
  HomeIcon,
  MenuIcon,
  MessagesIcon,
  Notice,
  OfficialMark,
  PageHeader,
  ServicesIcon,
  Stack,
  StatusBadge,
  TextField,
  type AppShellNavItem,
} from "@heartstone/ui";
import { TENANT_PLACEHOLDER } from "./tenant";

export const EXPERIENCE_NAME = "Citizen";

const tabs: AppShellNavItem[] = [
  { id: "home", label: "Home", href: "/", icon: <HomeIcon size={22} />, current: true },
  { id: "services", label: "Services", href: "#services", icon: <ServicesIcon size={22} /> },
  {
    id: "applications",
    label: "Applications",
    href: "#applications",
    icon: <ApplicationsIcon size={22} />,
  },
  { id: "messages", label: "Messages", href: "#messages", icon: <MessagesIcon size={22} /> },
  { id: "more", label: "More", href: "#menu", icon: <MenuIcon size={22} /> },
];

const brand = (
  <a href="/" className="brand">
    {TENANT_PLACEHOLDER.productName}
  </a>
);

export function App() {
  return (
    <AppShell
      brand={brand}
      navigation={[{ id: "main", items: tabs.slice(0, 4) }]}
      tabs={tabs}
      banner={
        <OfficialMark
          statement={TENANT_PLACEHOLDER.officialStatement}
          learnMoreHref={TENANT_PLACEHOLDER.officialInfoHref}
          aside="Development build. Not a live government service."
        />
      }
    >
      <PageHeader
        title={`HeartStone — ${EXPERIENCE_NAME}`}
        description="Design-system foundation (F1). Components shown with example content only."
      />

      <Notice tone="info" title="Development build">
        Not a live government service. Nothing on this page is connected to a backend.
      </Notice>

      <Card title="Example components" titleLevel={2}>
        <Stack gap="5">
          <Cluster gap="2" aria-label="Example status badges">
            <StatusBadge status="EXAMPLE_INFO" label="Example: under review" tone="info" />
            <StatusBadge status="EXAMPLE_WARNING" label="Example: waiting for you" tone="warning" />
            <StatusBadge status="EXAMPLE_NEUTRAL" label="Example: draft" />
          </Cluster>
          <TextField
            label="Describe what you need"
            hint="Example field. Search arrives with the service catalogue (F3)."
          />
          <Cluster gap="3">
            <Button>Primary action</Button>
            <Button variant="secondary">Secondary action</Button>
          </Cluster>
        </Stack>
      </Card>
    </AppShell>
  );
}
