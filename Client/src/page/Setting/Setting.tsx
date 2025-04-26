const Setting = () => {
    return (
        <div>
            <div className="breadcrumbs text-sm">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Documents</a></li>
                    <li>Add Document</li>
                </ul>
            </div>
            <div className="text-4xl font-bold">Setting</div>
            <div role="tablist" className="tabs">
                <a role="tab" className="tab">Tab 1</a>
                <a role="tab" className="tab tab-active">Tab 2</a>
                <a role="tab" className="tab">Tab 3</a>
            </div>
        </div>
    )
}
export default Setting