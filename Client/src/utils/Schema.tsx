import { z } from "zod";

export const schemaSignIn = z.object({
    sign_email: z.string().min(1, { message: "กรุณากรอกชื่อผู้ใช้" }).email({ message: "กรุณากรอกรูปแบบอีเมลให้ถูกต้อง" }),
    sign_password: z.string().min(1, { message: "กรุณากรอกรหัสผ่าน" })
})