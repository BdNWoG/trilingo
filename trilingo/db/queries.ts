import { cache } from "react"
import db from "./drizzle";

export const getCousrses = cache(async () => {
    const data = await db.query.courses.findMany();
    
    return data
});