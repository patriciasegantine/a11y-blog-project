export enum Category {
    IDENTITY_TIME = "Identity & time",
    WORK_MONEY_MEANING = "Work, money & meaning",
    MENTAL_HEALTH = "Mental health (unfiltered)",
    SLOW_GROWTH_REAL_LIFE = "Slow growth / real life",
}

export const categoryLabels: Record<Category, string> = {
    [Category.IDENTITY_TIME]: "Identity & time",
    [Category.WORK_MONEY_MEANING]: "Work, money & meaning",
    [Category.MENTAL_HEALTH]: "Mental health (unfiltered)",
    [Category.SLOW_GROWTH_REAL_LIFE]: "Slow growth / real life",
};