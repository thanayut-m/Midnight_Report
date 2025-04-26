import Buttons from "../../../components/Buttons";
import Input from "../../../components/Input/Input";
import { IoMdPersonAdd } from "react-icons/io";
import Table from "../../../components/Table/Table";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { useState } from "react";


const columns = [
    { key: "id", label: "ลำดับ" },
    { key: "email", label: "Email" },
    { key: "fullName", label: "ชื่อ-สกุล" },
    { key: "role", label: "สิทธิ์ผู้ใช้งาน" },
    { key: "status", label: "สถานะ" },
    { key: "lastLogin", label: "เข้าใช้ระบบล่าสุด" },
    { key: "action", label: "Action" },
];

const fakeRows = [
    { id: 1, email: 'a@test.com', fullName: 'Alice', role: 'Admin', status: 'Active', lastLogin: '2025-04-27', action: 'Edit' },
    { id: 2, email: 'a@test.com', fullName: 'Alice', role: 'Admin', status: 'Active', lastLogin: '2025-04-27', action: 'Edit' },
    { id: 3, email: 'a@test.com', fullName: 'Alice', role: 'Admin', status: 'Active', lastLogin: '2025-04-27', action: 'Edit' },
    { id: 4, email: 'a@test.com', fullName: 'Alice', role: 'Admin', status: 'Active', lastLogin: '2025-04-27', action: 'Edit' },
    { id: 5, email: 'a@test.com', fullName: 'Alice', role: 'Admin', status: 'Active', lastLogin: '2025-04-27', action: 'Edit' },
    { id: 6, email: 'a@test.com', fullName: 'Alice', role: 'Admin', status: 'Active', lastLogin: '2025-04-27', action: 'Edit' },
    { id: 7, email: 'a@test.com', fullName: 'Alice', role: 'Admin', status: 'Active', lastLogin: '2025-04-27', action: 'Edit' },
    { id: 8, email: 'a@test.com', fullName: 'Alice', role: 'Admin', status: 'Active', lastLogin: '2025-04-27', action: 'Edit' },
    { id: 9, email: 'a@test.com', fullName: 'Alice', role: 'Admin', status: 'Active', lastLogin: '2025-04-27', action: 'Edit' },
    { id: 10, email: 'a@test.com', fullName: 'Alice', role: 'Admin', status: 'Active', lastLogin: '2025-04-27', action: 'Edit' },
    { id: 11, email: 'a@test.com', fullName: 'Alice', role: 'Admin', status: 'Active', lastLogin: '2025-04-27', action: 'Edit' },
    { id: 12, email: 'a@test.com', fullName: 'Alice', role: 'Admin', status: 'Active', lastLogin: '2025-04-27', action: 'Edit' },
    { id: 13, email: 'a@test.com', fullName: 'Alice', role: 'Admin', status: 'Active', lastLogin: '2025-04-27', action: 'Edit' },
    { id: 14, email: 'a@test.com', fullName: 'Alice', role: 'Admin', status: 'Active', lastLogin: '2025-04-27', action: 'Edit' },
    { id: 15, email: 'a@test.com', fullName: 'Alice', role: 'Admin', status: 'Active', lastLogin: '2025-04-27', action: 'Edit' },

    { id: 16, email: 'a@test.com', fullName: 'Alice', role: 'Admin', status: 'Active', lastLogin: '2025-04-27', action: 'Edit' },
    { id: 17, email: 'a@test.com', fullName: 'Alice', role: 'Admin', status: 'Active', lastLogin: '2025-04-27', action: 'Edit' },
    { id: 18, email: 'a@test.com', fullName: 'Alice', role: 'Admin', status: 'Active', lastLogin: '2025-04-27', action: 'Edit' },
    { id: 19, email: 'a@test.com', fullName: 'Alice', role: 'Admin', status: 'Active', lastLogin: '2025-04-27', action: 'Edit' },
    { id: 20, email: 'a@test.com', fullName: 'Alice', role: 'Admin', status: 'Active', lastLogin: '2025-04-27', action: 'Edit' },
    { id: 21, email: 'a@test.com', fullName: 'Alice', role: 'Admin', status: 'Active', lastLogin: '2025-04-27', action: 'Edit' },
    { id: 22, email: 'a@test.com', fullName: 'Alice', role: 'Admin', status: 'Active', lastLogin: '2025-04-27', action: 'Edit' },

];

interface User_ManagementProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    name: string;
}

const User_Management = <T extends FieldValues>({ register }: User_ManagementProps<T>) => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className="flex flex-col bg-gray-300 p-3 rounded-2xl shadow-xl gap-3 ">
            <div className="flex flex-row justify-end items-center gap-3">
                <Input
                    register={register}
                    name="searchManage"
                    type="text"
                    placeholder="Search"
                    inputStateClassName="focus:input-warning hover:input-warning"
                />
                <Buttons>
                    <IoMdPersonAdd /> เพิ่มผู้ใช้งาน
                </Buttons>
            </div>
            <Table
                columns={columns}
                rows={fakeRows}
                page={page}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                onPageChange={handleChangePage}
                renderRow={(row, index) => (
                    <>
                        <td>{page * rowsPerPage + index + 1}</td>
                        <td>{row.email}</td>
                        <td>{row.fullName}</td>
                        <td>{row.role}</td>
                        <td>{row.status}</td>
                        <td>{row.lastLogin}</td>
                        <td>{row.action}</td>
                    </>
                )}
            />
        </div>
    );
};

export default User_Management;
