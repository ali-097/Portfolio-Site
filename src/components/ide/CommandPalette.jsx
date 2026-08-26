import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "cmdk";
import {
  VscHome,
  VscAccount,
  VscBriefcase,
  VscMail,
  VscGithub,
  VscTerminal,
  VscCloudDownload,
  VscCopy,
} from "react-icons/vsc";
import { useCommandPalette } from "../../hooks/useCommandPalette";
import { useIDEShell } from "../../hooks/useIDEShell";
import { useClipboard } from "../../hooks/useClipboard";
import { social } from "../../data/social";
import { projects } from "../../data/projects";
import { certifications } from "../../data/certifications";

export default function CommandPalette() {
  const { paletteOpen, setPaletteOpen } = useCommandPalette();
  const { toggleTerminal } = useIDEShell();
  const { copy } = useClipboard();
  const navigate = useNavigate();

  const go = (path) => {
    navigate(path);
    setPaletteOpen(false);
  };

  const openExternal = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setPaletteOpen(false);
  };

  return (
    <CommandDialog
      open={paletteOpen}
      onOpenChange={setPaletteOpen}
      label="Command Palette"
      className="fixed inset-0 z-[80] flex items-start justify-center pt-[12vh] px-4 bg-black/60 backdrop-blur-sm"
    >
      <div className="w-full max-w-xl bg-gruvbox-panel border border-gruvbox-border-strong rounded-lg shadow-2xl overflow-hidden font-mono">
        <CommandInput
          placeholder="Type a command or search..."
          className="w-full bg-transparent border-b border-gruvbox-border px-4 py-3 text-sm text-gruvbox-fg outline-none placeholder:text-gruvbox-subtle"
        />
        <CommandList className="max-h-[50vh] overflow-y-auto p-2">
          <CommandEmpty className="px-3 py-6 text-center text-sm text-gruvbox-subtle">
            No results found.
          </CommandEmpty>

          <CommandGroup
            heading="Navigate"
            className="text-xs text-gruvbox-subtle px-2 py-1.5 [&_[cmdk-group-heading]]:px-1 [&_[cmdk-group-heading]]:pb-1"
          >
            <CommandItem
              onSelect={() => go("/")}
              className="flex items-center gap-2 px-2 py-2 rounded text-sm text-gruvbox-fg cursor-pointer data-[selected=true]:bg-gruvbox-elevated"
            >
              <VscHome /> Home
            </CommandItem>
            <CommandItem
              onSelect={() => go("/about")}
              className="flex items-center gap-2 px-2 py-2 rounded text-sm text-gruvbox-fg cursor-pointer data-[selected=true]:bg-gruvbox-elevated"
            >
              <VscAccount /> About
            </CommandItem>
            <CommandItem
              onSelect={() => go("/projects")}
              className="flex items-center gap-2 px-2 py-2 rounded text-sm text-gruvbox-fg cursor-pointer data-[selected=true]:bg-gruvbox-elevated"
            >
              <VscBriefcase /> Projects
            </CommandItem>
            <CommandItem
              onSelect={() => go("/contact")}
              className="flex items-center gap-2 px-2 py-2 rounded text-sm text-gruvbox-fg cursor-pointer data-[selected=true]:bg-gruvbox-elevated"
            >
              <VscMail /> Contact
            </CommandItem>
          </CommandGroup>

          <CommandGroup
            heading="Projects"
            className="text-xs text-gruvbox-subtle px-2 py-1.5 [&_[cmdk-group-heading]]:px-1 [&_[cmdk-group-heading]]:pb-1"
          >
            {projects.map((p) => (
              <CommandItem
                key={p.id}
                onSelect={() => go("/projects")}
                className="flex items-center gap-2 px-2 py-2 rounded text-sm text-gruvbox-fg cursor-pointer data-[selected=true]:bg-gruvbox-elevated"
              >
                <VscBriefcase className="text-gruvbox-aqua" /> {p.title}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup
            heading="Certifications"
            className="text-xs text-gruvbox-subtle px-2 py-1.5 [&_[cmdk-group-heading]]:px-1 [&_[cmdk-group-heading]]:pb-1"
          >
            {certifications.map((cert) => (
              <CommandItem
                key={cert.id}
                onSelect={() => openExternal(cert.link)}
                className="flex items-center gap-2 px-2 py-2 rounded text-sm text-gruvbox-fg cursor-pointer data-[selected=true]:bg-gruvbox-elevated"
              >
                <VscAccount className="text-gruvbox-yellow" /> {cert.title}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup
            heading="Actions"
            className="text-xs text-gruvbox-subtle px-2 py-1.5 [&_[cmdk-group-heading]]:px-1 [&_[cmdk-group-heading]]:pb-1"
          >
            <CommandItem
              onSelect={() => {
                copy(social.email);
                setPaletteOpen(false);
              }}
              className="flex items-center gap-2 px-2 py-2 rounded text-sm text-gruvbox-fg cursor-pointer data-[selected=true]:bg-gruvbox-elevated"
            >
              <VscCopy /> Copy email address
            </CommandItem>
            <CommandItem
              onSelect={() => openExternal(social.resumeUrl)}
              className="flex items-center gap-2 px-2 py-2 rounded text-sm text-gruvbox-fg cursor-pointer data-[selected=true]:bg-gruvbox-elevated"
            >
              <VscCloudDownload /> Download résumé
            </CommandItem>
            <CommandItem
              onSelect={() => openExternal(social.github)}
              className="flex items-center gap-2 px-2 py-2 rounded text-sm text-gruvbox-fg cursor-pointer data-[selected=true]:bg-gruvbox-elevated"
            >
              <VscGithub /> Open GitHub
            </CommandItem>
            <CommandItem
              onSelect={() => {
                toggleTerminal();
                setPaletteOpen(false);
              }}
              className="flex items-center gap-2 px-2 py-2 rounded text-sm text-gruvbox-fg cursor-pointer data-[selected=true]:bg-gruvbox-elevated"
            >
              <VscTerminal /> Toggle terminal
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </div>
    </CommandDialog>
  );
}
