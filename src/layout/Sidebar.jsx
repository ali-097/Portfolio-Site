import { useIDEShell } from "../hooks/useIDEShell";
import Explorer from "./sidebar/Explorer";
import SourceControlView from "./sidebar/SourceControlView";
import ExtensionsView from "./sidebar/ExtensionsView";

const VIEWS = {
  explorer: Explorer,
  "source-control": SourceControlView,
  extensions: ExtensionsView,
};

export default function Sidebar({ onNavigateComplete }) {
  const { activeSidebarView } = useIDEShell();
  const ActiveView = VIEWS[activeSidebarView] ?? Explorer;

  return (
    <div className="h-full overflow-y-auto">
      <ActiveView onNavigateComplete={onNavigateComplete} />
    </div>
  );
}
