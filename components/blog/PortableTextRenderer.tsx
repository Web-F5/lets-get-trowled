import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

// ---------------------------------------------------------------------------
// Custom block components
// ---------------------------------------------------------------------------

const H2 = ({ children }: { children?: React.ReactNode }) => (
  <h2 className="blog-h2">{children}</h2>
)

const H3 = ({ children }: { children?: React.ReactNode }) => (
  <h3 className="blog-h3">{children}</h3>
)

const BlockQuote = ({ children }: { children?: React.ReactNode }) => (
  <blockquote className="blog-tip-box">{children}</blockquote>
)

const NormalBlock = ({ children }: { children?: React.ReactNode }) => (
  <p className="blog-p">{children}</p>
)

// ---------------------------------------------------------------------------
// Custom mark components (inline annotations)
// ---------------------------------------------------------------------------

const Strong = ({ children }: { children?: React.ReactNode }) => (
  <span className="blog-inline-bold">{children}</span>
)

const Em = ({ children }: { children?: React.ReactNode }) => (
  <em className="blog-em">{children}</em>
)

// ---------------------------------------------------------------------------
// Custom block type components (custom Sanity block types)
// ---------------------------------------------------------------------------

// Red flag callout — add a "redFlag" block type in your Sanity schema
const RedFlagBlock = ({ value }: { value: { text: string } }) => (
  <div className="blog-flag-item">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="blog-flag-icon"
      aria-hidden="true"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 9v4" />
      <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
      <path d="M12 16h.01" />
    </svg>
    <p>{value.text}</p>
  </div>
)

// Tip / highlight callout — add a "tipBox" block type in your Sanity schema
const TipBoxBlock = ({ value }: { value: { text: string } }) => (
  <div className="blog-tip-box">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0, marginTop: 2 }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
      <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
      <path d="M9.7 17h4.6" />
    </svg>
    <p>{value.text}</p>
  </div>
)

// Checklist item — add a "checklistItem" block type in your Sanity schema
const ChecklistItemBlock = ({ value }: { value: { text: string } }) => (
  <div className="blog-checklist-item">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="blog-checklist-icon"
      aria-hidden="true"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 11l3 3l8 -8" />
      <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
    </svg>
    <p>{value.text}</p>
  </div>
)

// Q&A block — add a "qaItem" block type in your Sanity schema
const QAItemBlock = ({
  value,
}: {
  value: { question: string; answer: string; index: number }
}) => (
  <div className="blog-q-item">
    <p className="blog-q-label">Question {value.index}</p>
    <p className="blog-q-text">{value.question}</p>
    <p className="blog-q-answer">{value.answer}</p>
  </div>
)

// ---------------------------------------------------------------------------
// Portable Text component map
// ---------------------------------------------------------------------------

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <NormalBlock>{children}</NormalBlock>,
    h2: ({ children }) => <H2>{children}</H2>,
    h3: ({ children }) => <H3>{children}</H3>,
    blockquote: ({ children }) => <BlockQuote>{children}</BlockQuote>,
  },
  marks: {
    strong: ({ children }) => <Strong>{children}</Strong>,
    em: ({ children }) => <Em>{children}</Em>,
  },
  types: {
    redFlag: RedFlagBlock,
    tipBox: TipBoxBlock,
    checklistItem: ChecklistItemBlock,
    qaItem: QAItemBlock,
  },
  list: {
    bullet: ({ children }) => <ul className="blog-ul">{children}</ul>,
    number: ({ children }) => <ol className="blog-ol">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="blog-li">{children}</li>,
    number: ({ children }) => <li className="blog-li">{children}</li>,
  },
}

// ---------------------------------------------------------------------------
// Main renderer
// ---------------------------------------------------------------------------

interface PortableTextRendererProps {
  content: PortableTextBlock[]
}

export default function PortableTextRenderer({
  content,
}: PortableTextRendererProps) {
  return (
    <div className="blog-body">
      <PortableText value={content} components={components} />
    </div>
  )
}
