import "dotenv/config";
import * as schema from "../db/schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, {schema});

const main = async () => {
    try {
        console.log("Seeding database");

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Spanish",
                imageSrc: "/es.svg",
            },
            {
                id: 2,
                title: "French",
                imageSrc: "/fr.svg",
            },
            {
                id: 3,
                title: "Italian",
                imageSrc: "/it.svg",
            },
            {
                id: 4,
                title: "Japanese",
                imageSrc: "/jp.svg",
            },
        ]);

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1,
                title: "Unit 1",
                description: "Learn the basics of Spanish",
                order: 1,
            }
        ]);

        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1,
                title: "Lesson 1",
                order: 1,
            },
            {
                id: 2,
                unitId: 1,
                title: "Lesson 2",
                order: 2,
            },
            {
                id: 3,
                unitId: 1,
                title: "Lesson 3",
                order: 3,
            },
            {
                id: 4,
                unitId: 1,
                title: "Lesson 4",
                order: 4,
            },
            {
                id: 5,
                unitId: 1,
                title: "Lesson 5",
                order: 5,
            },
            {
                id: 6,
                unitId: 1,
                title: "Lesson 6",
                order: 6,
            },
            {
                id: 7,
                unitId: 1,
                title: "Lesson 7",
                order: 7,
            },
        ]);

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1,
                type: "SELECT",
                question: "What is the Spanish word for 'the boy'?",
                order: 1,
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengeId: 1,
                imageSrc: "/boy.svg",
                text: "el nino",
                correct: true,
                audioSrc: "/es_boy.mp3",
            },
            {
                id: 2,
                challengeId: 1,
                imageSrc: "/girl.svg",
                text: "la nina",
                correct: false,
                audioSrc: "/es_girl.mp3",
            },
            {
                id: 3,
                challengeId: 1,
                imageSrc: "/zombie.svg",
                text: "el zombie",
                correct: false,
                audioSrc: "/es_zombie.mp3",
            },
        ]);

        console.log("Seeded database");
    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed database");
    }
}

main()