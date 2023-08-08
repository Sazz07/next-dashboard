

export default function ProductTabs({ category, onClick, activeCategory }) {
    return (
        <button
            className={`${category.name === activeCategory
                ? "border-b-cyan-600 text-cyan-600"
                : ""
                } p-2 rounded border font-medium shadow-sm hover:border-b-cyan-600 hover:text-cyan-600 border-b-4`}
            onClick={onClick}
        >
            {category.name}
        </button>
    )
}
