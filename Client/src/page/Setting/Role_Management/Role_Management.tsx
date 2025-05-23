import Buttons from "../../../components/Buttons";
import Input from "../../../components/Input/Input";
import { IoMdPersonAdd } from "react-icons/io";
import Table from "../../../components/Table/Table";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { useState } from "react";
import Modals from "../../../components/Modals/Modals";

const columns = [
    { key: "id", label: "ลำดับ", align: `center` },
    { key: "groups", label: "กลุ่มผู้ใช้งาน", align: `center` },
    { key: "detail", label: "รายละเอียด", align: `start` },
    { key: "action", label: "Action", align: `center` },
];

const fakeRows = [
    { id: 1, groups: 'Alice', detail: 'report Power Bi, report Power Bi, report Power Bi, report Power Bi,', action: 'Edit' },
    { id: 2, groups: 'Alice', detail: 'Admin', action: 'Edit' },
    { id: 3, groups: 'Alice', detail: 'Admin', action: 'Edit' },
    { id: 4, groups: 'Alice', detail: 'Admin', action: 'Edit' },
    { id: 5, groups: 'Alice', detail: 'Admin', action: 'Edit' },
];

interface Role_ManagementProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    name?: string;
}

const Role_Management = <T extends FieldValues>({
    register
}: Role_ManagementProps<T>) => {
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
                    onClick={() => handleOpen("createRole")}
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
                        <td className="text-center w-30">{page * rowsPerPage + index + 1}</td>
                        <td className="text-center w-30">{row.groups}</td>
                        <td className="text-start w-60">{row.detail}</td>
                        <td className="text-center w-30">{row.action}</td>
                    </>
                )}
            />
            <Modals
                open={openModal === "createRole"}
                onClose={handleClose}
                width="w-[25%]"
                title="กําหนดสิทธิ์"
                content={
                    <form className="flex flex-col gap-3 outline outline-offset-2 rounded-lg p-3 shadow-3xl">
                        ฟหกฟหก
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
    )
}
export default Role_Management