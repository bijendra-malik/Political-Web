import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

// default user roles. can add / remove based on the project as needed
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MEMBER: "member",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.USER),
  v.literal(ROLES.MEMBER),
);
export type Role = Infer<typeof roleValidator>;

const schema = defineSchema(
  {
    // default auth tables using convex auth.
    ...authTables, // do not remove or modify

    // the users table is the default users table that is brought in by the authTables
    users: defineTable({
      name: v.optional(v.string()), // name of the user. do not remove
      image: v.optional(v.string()), // image of the user. do not remove
      email: v.optional(v.string()), // email of the user. do not remove
      emailVerificationTime: v.optional(v.number()), // email verification time. do not remove
      isAnonymous: v.optional(v.boolean()), // is the user anonymous. do not remove

      role: v.optional(roleValidator), // role of the user. do not remove
    }).index("email", ["email"]), // index for the email. do not remove or modify

    // ------------------------------------------------------------------
    // Portfolio content tables (managed from the /dashboard admin panel)
    // ------------------------------------------------------------------

    // A single document holds the owner's profile / contact details.
    portfolio: defineTable({
      name: v.string(),
      role: v.string(),
      tagline: v.string(),
      bio: v.string(),
      location: v.string(),
      email: v.string(),
      phone: v.optional(v.string()),
      github: v.string(),
      linkedin: v.string(),
      twitter: v.optional(v.string()),
      website: v.optional(v.string()),
      resumeUrl: v.optional(v.string()),
      avatar: v.optional(v.string()),
      yearsExperience: v.number(),
      available: v.boolean(),
    }),

    // Portfolio projects, shown in the Projects section.
    projects: defineTable({
      title: v.string(),
      description: v.string(),
      tags: v.array(v.string()),
      image: v.optional(v.string()),
      liveUrl: v.optional(v.string()),
      repoUrl: v.optional(v.string()),
      featured: v.boolean(),
      order: v.number(),
    }).index("by_order", ["order"]),

    // Work experience timeline entries.
    experience: defineTable({
      role: v.string(),
      company: v.string(),
      period: v.string(),
      description: v.string(),
      highlights: v.array(v.string()),
      current: v.boolean(),
      order: v.number(),
    }).index("by_order", ["order"]),

    // Skills with a proficiency level (0-100) and a category.
    skills: defineTable({
      name: v.string(),
      level: v.number(),
      category: v.string(),
      order: v.number(),
    }).index("by_order", ["order"]),
  },
  {
    schemaValidation: false,
  },
);

export default schema;
