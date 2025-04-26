import { useState } from "react"

const Tabs = ({
    menuTab = []
}
) => {
    const [activeTab, setActiveTab] = useState(menuTab[0]?.tab || "");

    return (
        <div className="p-4">
            <div className="flex gap-4 border-b">
                {menuTab.map((item) => (
                    <button
                        key={item.tab}
                        className={`py-2 px-4 transition-all duration-300 ease-in-out cursor-pointer ${activeTab === item.tab
                            ? "border-b-2 border-amber-500 font-bold text-amber-600"
                            : "text-gray-500 hover:text-amber-500"
                            }`}
                        onClick={() => setActiveTab(item.tab)}
                    >
                        {item.name}
                    </button>
                ))}
            </div>

            <div className="mt-4">
                {menuTab.map((item) =>
                    activeTab === item.tab ? (
                        <div key={activeTab}>
                            {item.content}
                        </div>
                    ) : null
                )}
            </div>
        </div>
    )
}
export default Tabs