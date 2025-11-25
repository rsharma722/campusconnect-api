import { Request, Response } from "express";
import * as authService from "../services/auth.service";

export async function register(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user = await authService.registerUser(email, password);

    return res.status(201).json({
      uid: user.uid,
      email: user.email,
      role: "user",
      message: "User registered successfully",
    });
  } catch (err: any) {
    return res.status(400).json({
      message: err.message || "Could not register user",
    });
  }
}

export async function updateRole(req: Request, res: Response) {
  try {
    const { uid } = req.params;
    const { role } = req.body;

    if (role !== "admin" && role !== "user") {
      return res.status(400).json({ message: "Invalid role" });
    }

    const updated = await authService.setUserRole(uid, role);

    return res.json({
      message: "Role updated",
      ...updated,
    });
  } catch (err: any) {
    return res.status(400).json({
      message: err.message || "Could not update role",
    });
  }
}
