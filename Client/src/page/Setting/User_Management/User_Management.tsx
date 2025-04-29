import Buttons from "../../../components/Buttons";
import Input from "../../../components/Input/Input";
import { IoMdPersonAdd } from "react-icons/io";
import Table from "../../../components/Table/Table";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { useState } from "react";
import Modals from "../../../components/Modals/Modals";


const columns = [
    { key: "id", label: "ลำดับ", align: `center` },
    { key: "fullName", label: "ชื่อ-สกุล", align: `center` },
    { key: "role", label: "สิทธิ์ผู้ใช้งาน", align: `center` },
    { key: "status", label: "สถานะ", align: `center` },
    { key: "lastLogin", label: "เข้าใช้ระบบล่าสุด", align: `center` },
    { key: "action", label: "Action", align: `center` },
];

const fakeRows = [
    { id: 1, fullName: 'Alice', role: 'Admin', status: true, lastLogin: '2025-04-27', action: 'Edit' },
    { id: 2, fullName: 'Alice', role: 'Admin', status: true, lastLogin: '2025-04-27', action: 'Edit' },
    { id: 3, fullName: 'Alice', role: 'Admin', status: false, lastLogin: '2025-04-27', action: 'Edit' },
    { id: 4, fullName: 'Alice', role: 'Admin', status: true, lastLogin: '2025-04-27', action: 'Edit' },
    { id: 5, fullName: 'Alice', role: 'Admin', status: false, lastLogin: '2025-04-27', action: 'Edit' },
    { id: 6, fullName: 'Alice', role: 'Admin', status: false, lastLogin: '2025-04-27', action: 'Edit' },
    { id: 7, fullName: 'Alice', role: 'Admin', status: true, lastLogin: '2025-04-27', action: 'Edit' },
    { id: 8, fullName: 'Alice', role: 'Admin', status: true, lastLogin: '2025-04-27', action: 'Edit' },
    { id: 9, fullName: 'Alice', role: 'Admin', status: false, lastLogin: '2025-04-27', action: 'Edit' },
    { id: 10, fullName: 'Alice', role: 'Admin', status: true, lastLogin: '2025-04-27', action: 'Edit' },
    { id: 11, fullName: 'Alice', role: 'Admin', status: false, lastLogin: '2025-04-27', action: 'Edit' },
    { id: 12, fullName: 'Alice', role: 'Admin', status: true, lastLogin: '2025-04-27', action: 'Edit' },
    { id: 13, fullName: 'Alice', role: 'Admin', status: true, lastLogin: '2025-04-27', action: 'Edit' },
    { id: 14, fullName: 'Alice', role: 'Admin', status: true, lastLogin: '2025-04-27', action: 'Edit' },
    { id: 15, fullName: 'Alice', role: 'Admin', status: false, lastLogin: '2025-04-27', action: 'Edit' },
    { id: 16, fullName: 'Alice', role: 'Admin', status: true, lastLogin: '2025-04-27', action: 'Edit' },
    { id: 17, fullName: 'Alice', role: 'Admin', status: true, lastLogin: '2025-04-27', action: 'Edit' },
    { id: 18, fullName: 'Alice', role: 'Admin', status: true, lastLogin: '2025-04-27', action: 'Edit' },
    { id: 19, fullName: 'Alice', role: 'Admin', status: true, lastLogin: '2025-04-27', action: 'Edit' },
    { id: 20, fullName: 'Alice', role: 'Admin', status: true, lastLogin: '2025-04-27', action: 'Edit' },
    { id: 21, fullName: 'Alice', role: 'Admin', status: false, lastLogin: '2025-04-27', action: 'Edit' },
    { id: 22, fullName: 'Alice', role: 'Admin', status: true, lastLogin: '2025-04-27', action: 'Edit' },
];

interface User_ManagementProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    name?: string;
}

const User_Management = <T extends FieldValues>({
    register
}: User_ManagementProps<T>) => {
    const [openModal, setOpenModal] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleOpen = (modal) => {
        setOpenModal(modal)
        console.log(modal)
    }

    const handleClose = () => {
        setOpenModal(null)
    }

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
                <Buttons
                    onClick={() => handleOpen("createUser")}
                >
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
                        <td className="text-center">{page * rowsPerPage + index + 1}</td>
                        <td className="text-center">{row.fullName}</td>
                        <td className="text-center">{row.role}</td>
                        <td className="text-center">
                            {row.status === true
                                ? <p className="font-bold text-green-700">เปิดใช้งาน</p>
                                : <p className="font-bold text-red-700">ปิดใช้งาน</p>
                            }
                        </td>
                        <td className="text-center">{row.lastLogin}</td>
                        <td className="text-center">{row.action}</td>
                    </>
                )}
            />
            <Modals
                open={openModal === "createUser"}
                onClose={handleClose}
                title="เพิ่มผู้ใช้งาน"
                content={
                    <form className="flex flex-col gap-3">
                        <input type="text" placeholder="ชื่อผู้ใช้งาน" className="input input-bordered" />
                        <input type="password" placeholder="รหัสผ่าน" className="input input-bordered" />
                    </form>
                }
                actions={
                    <>
                        <button className="btn btn-primary" onClick={handleClose}>บันทึก</button>
                        <button className="btn" onClick={handleClose}>ยกเลิก</button>
                    </>
                }
            />
        </div>
    );
};

export default User_Management;
