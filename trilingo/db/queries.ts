import { cache } from "react"
import db from "./drizzle";
import { auth } from "@clerk/nextjs/server";
import { userProgress } from "./schema";
import { eq } from "drizzle-orm";

export const getUserProgress = cache(async() => {
    const { userId } = await auth();

    if (!userId) {
        return null;
    }

    const data = await db.query.userProgress.findFirst({
        where: eq(userProgress.userId, userId),
        with: {
            activeCourse: true,
        }
    });

    return data
})

export const getCousrses = cache(async () => {
    const data = await db.query.courses.findMany();

    return data
});