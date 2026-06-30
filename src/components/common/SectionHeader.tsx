import type { PromptSection } from '../../types'

interface SectionHeaderProps {
  section: PromptSection
  isExpanded: boolean
  onToggle: () => void
  hasContent: boolean
}

export const SectionHeader = ({
  section,
  isExpanded,
  onToggle,
  hasContent,
}: SectionHeaderProps) => {
  return (
    <div className="prompt-section-header" onClick={onToggle}>
      <div className="section-title">
        <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`} />
        <h3>{section.label}</h3>
        {section.description && <span className="section-description">{section.description}</span>}
      </div>
      <div className="section-meta">
        {hasContent && <span className="content-indicator">filled</span>}
        {!section.isOptional && <span className="required-badge">required</span>}
      </div>
    </div>
  )
}
