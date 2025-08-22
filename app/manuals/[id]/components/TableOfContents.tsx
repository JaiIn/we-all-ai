interface Section {
  id: string;
  title: string;
  icon: string;
}

interface TableOfContentsProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export default function TableOfContents({ 
  sections, 
  activeSection, 
  onSectionChange 
}: TableOfContentsProps) {
  return (
    <div className="w-80 bg-gray-50 border-r border-gray-200 p-6 sticky top-0 h-screen overflow-y-auto">
      <h3 className="text-lg font-bold text-gray-900 mb-6">목차</h3>
      <nav className="space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
              activeSection === section.id
                ? 'bg-green-100 text-green-800 font-medium'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span className="text-lg">{section.icon}</span>
            <span className="text-sm">{section.title}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
