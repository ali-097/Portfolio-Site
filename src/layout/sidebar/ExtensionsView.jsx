import { certifications } from "../../data/certifications";
import ExtensionCard from "../../components/ide/ExtensionCard";

export default function ExtensionsView() {
  return (
    <div className="py-2 px-2">
      <p className="px-1 pb-3 text-xs tracking-widest text-gruvbox-subtle uppercase">
        Extensions &middot; Installed ({certifications.length})
      </p>
      <div className="space-y-2">
        {certifications.map((cert) => (
          <ExtensionCard key={cert.id} cert={cert} />
        ))}
      </div>
    </div>
  );
}
