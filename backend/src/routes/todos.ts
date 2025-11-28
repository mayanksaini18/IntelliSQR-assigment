import { Router } from "express";
import Todo from "../models/Todo";
import { requireAuth, AuthRequest } from "../middleware/auth";

const router = Router();

router.use(requireAuth);

// create
router.post("/", async (req: AuthRequest, res, next) => {
  try {
    const { title, description, dueDate } = req.body;
    const todo = await Todo.create({ user: req.user._id, title, description, dueDate });
    res.json(todo);
  } catch (err) { next(err); }
});

// list
router.get("/", async (req: AuthRequest, res, next) => {
  try {
    const todos = await Todo.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) { next(err); }
});

// update
router.put("/:id", async (req: AuthRequest, res, next) => {
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true }
    );
    if (!todo) return res.status(404).json({ error: "Not found" });
    res.json(todo);
  } catch (err) { next(err); }
});

// delete
router.delete("/:id", async (req: AuthRequest, res, next) => {
  try {
    const todo = await Todo.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!todo) return res.status(404).json({ error: "Not found" });
    res.json({ success: true });
  } catch (err) { next(err); }
});

export default router;
