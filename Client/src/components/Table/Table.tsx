interface Column {
    key: string;
    label: string;
    align?: string;
}

interface HasId {
    id?: string | number;
}

interface TableProps<T> {
    columns: Column[];
    rows: T[];
    page: number;
    rowsPerPage: number;
    onRowsPerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onPageChange: (_event: unknown, newPage: number) => void;
    renderRow: (row: T, index: number) => React.ReactNode;
    align?: string;
}


function Table<T extends HasId>({
    columns,
    rows,
    page,
    rowsPerPage,
    onRowsPerPageChange,
    onPageChange,
    renderRow,
}: TableProps<T>) {
    const currentRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    const totalPages = rowsPerPage > 0 ? Math.ceil(rows.length / rowsPerPage) : 0;

    return (
        <div className="flex flex-col gap-3">
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th
                                    key={index}
                                    className={
                                        column.align === 'center'
                                            ? 'text-center'
                                            : column.align === 'start'
                                                ? 'text-start'
                                                : column.align === 'end'
                                                    ? 'text-end'
                                                    : ''
                                    }
                                >
                                    {column.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentRows.map((row, index) => (
                            <tr key={typeof row.id === 'string' || typeof row.id === 'number' ? row.id : index}>
                                {renderRow(row, index)}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between items-center mt-4">
                <div>
                    <select className="select select-bordered" value={rowsPerPage} onChange={onRowsPerPageChange}>
                        {[5, 10, 20, 50].map(size => (
                            <option key={size} value={size}>
                                {size} แถว/หน้า
                            </option>
                        ))}
                    </select>
                </div>
                <div className="join">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`join-item btn ${page === index ? 'btn-active' : ''}`}
                            onClick={(e) => onPageChange(e, index)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Table;
