import { DocumentDuplicateIcon } from "@heroicons/react/24/solid"
import SyntaxHighlighter from "react-syntax-highlighter"
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs"

type Props = {
  children: string
}

export default function Code({ children }: Props) {
  return (
    <div className="whitespace-pre-wrap pt-1 text-sm">
      {children.split('```').map((item: string, index: number) => index % 2 === 0
        ? <div key={crypto.randomUUID()}>
          {item.split('`').map((item: string, index: number) => index % 2 === 0
            ? item
            : <span key={crypto.randomUUID()} className="text-[#569CD6] drop-shadow-md">{item}</span>)}
        </div>
        : <>
          <div key={crypto.randomUUID()} className="flex justify-between items-center py-1 px-4 bg-black/50 rounded-t-sm">
            <p className="text-xs">{item.split("\n")[0].replace(/^\w/, c => c.toUpperCase()) || 'Code.'}</p>
            <div onClick={() => navigator.clipboard.writeText(item)} className="flex space-x-2 rounded-sm hover:bg-gray-700 p-1 cursor-pointer">
              <DocumentDuplicateIcon className="w-4 h-4" />
              <p className="text-xs">Copy code.</p>
            </div>
          </div>
          <SyntaxHighlighter language="javascript" style={vs2015} wrapLongLines customStyle={{ overflow: 'hidden' }}>
            {item.substring(item.indexOf("\n") + 1)}
          </SyntaxHighlighter>
        </>)}
    </div>
  )
}
